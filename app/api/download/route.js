import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-04-22.dahlia",
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

  // 3. Fájl beolvasása a védett mappából
  const filePathEnv = process.env.WEBINAR_FILE_PATH || "./private/webinar-anyag.pdf";
  const absolutePath = path.resolve(process.cwd(), filePathEnv);

  if (!fs.existsSync(absolutePath)) {
    return new Response("A fájl nem található a szerveren", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(absolutePath);
  const fileName = process.env.WEBINAR_FILE_NAME || "webinar-anyag.pdf";

  // 4. Fájl küldése letöltésre
  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
