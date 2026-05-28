import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-04-22.dahlia",
});

export default async function WebinarAnyagPage({ searchParams }) {
  // Next.js 15-ben a searchParams-t await-elni kell
  const resolvedSearchParams = await searchParams;
  const session_id = resolvedSearchParams?.session_id;

  if (!session_id) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[--white] text-black">
        <div className="text-center p-8 max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Hiba történt</h1>
          <p className="text-lg text-gray-600">
            A keresett oldal nem található vagy hiányzik a vásárlási azonosító.
          </p>
        </div>
      </div>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[--white] text-black">
        <div className="text-center p-8 max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Hiba történt</h1>
          <p className="text-lg text-gray-600">
            Nem található érvényes vásárlás.
          </p>
        </div>
      </div>
    );
  }

  if (session.payment_status !== "paid") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[--white] text-black">
        <div className="text-center p-8 max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Sikertelen fizetés</h1>
          <p className="text-lg text-gray-600">
            Nem található érvényes vásárlás vagy a fizetés még nem teljesült.
          </p>
        </div>
      </div>
    );
  }

  const customerEmail = session.customer_details?.email;
  const fileStatus = process.env.WEBINAR_FILE_STATUS;
  const fileUrl = process.env.WEBINAR_FILE_URL;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[--white] text-black pt-24 pb-16 px-4">
      <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-[--green]">
          Köszönjük a vásárlást!
        </h1>

        {customerEmail && (
          <p className="text-gray-600 mb-8">
            Sikeres tranzakció a következő e-mail címmel: <br />
            <span className="font-semibold text-gray-900 text-lg">
              {customerEmail}
            </span>
          </p>
        )}

        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          {fileStatus !== "available" ? (
            <p className="text-lg text-gray-700 font-medium">
              A webinár anyaga hamarosan elérhető lesz. Ezen az oldalon tudod
              majd letölteni.
            </p>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-gray-700 mb-2 font-medium">
                A digitális anyagod elkészült és letölthető:
              </p>
              {/* Ahelyett, hogy közvetlenül a fájlra mutatnánk, egy biztonságos API route-ot hívunk */}
              {session_id ? (
                <a
                  href={`/api/download?session_id=${session_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[--green] hover:bg-[--yellow] text-[--white] font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Letöltés ({process.env.WEBINAR_FILE_NAME || "Fájl"})
                </a>
              ) : (
                <p className="text-red-500 font-semibold mt-2">
                  Hiba: A munkamenet azonosító hiányzik a letöltéshez.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
