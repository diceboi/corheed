import Stripe from "stripe";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-04-22.dahlia",
});

// S3 kliens inicializálása
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const session_id = searchParams.get("session_id");

  if (!session_id) {
    return new Response("Hiányzó vásárlási azonosító", { status: 400 });
  }

  // 1. Stripe visszaellenőrzés
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    return new Response("Érvénytelen azonosító", { status: 400 });
  }

  if (session.payment_status !== "paid") {
    return new Response("Nincs kifizetve", { status: 403 });
  }

  // 2. Fájl elérhetőségének ellenőrzése
  const fileStatus = process.env.WEBINAR_FILE_STATUS;
  if (fileStatus !== "available") {
    return new Response("A fájl jelenleg nem elérhető", { status: 404 });
  }

  // 3. Ideiglenes letöltési link (Signed URL) generálása az S3-hoz
  try {
    const objectKey = process.env.WEBINAR_S3_OBJECT_KEY;
    const downloadFileName = process.env.WEBINAR_FILE_NAME || objectKey;

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: objectKey,
      ResponseContentDisposition: `attachment; filename="${downloadFileName}"`
    });

    // 60 másodpercig érvényes link generálása
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 });

    // 4. Átirányítás a generált biztonságos linkre
    return Response.redirect(signedUrl, 302);
  } catch (err) {
    console.error("Hiba az S3 letöltési link generálásakor:", err);
    return new Response("Szerver hiba történt a fájl elérésekor", { status: 500 });
  }
}
