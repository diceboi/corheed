"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function WebinarLandingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // LeadConnector (GoHighLevel) webhook
  const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/EcvwZiDMYa7g79S5U8Xb/webhook-trigger/kxpvlk5BTHLmkxicP6xe";
  const THANK_YOU_URL = "https://www.coreheed.hu/koszonjuk";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        // Delay redirect to show success message briefly
        setTimeout(() => {
          window.location.href = THANK_YOU_URL;
        }, 1500);
      } else {
        throw new Error("Sikertelen beküldés");
      }
    } catch (err) {
      console.error(err);
      alert("Hálózati hiba történt. Kérlek próbáld újra néhány másodperc múlva.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[--offwhite] text-[--black] font-poppins selection:bg-[--mint] selection:text-[--green]">
      {/* SEO Metadata (via Head or Metadata API) */}
      <title>Generációk a munkahelyen — Ingyenes webinár | Coreheed Consulting</title>
      <meta name="description" content="Ingyenes 60 perces webinár: hogyan formáld üzleti előnnyé a generációs sokszínűséget a konfliktusok helyett. Coreheed Consulting." />

      {/* ========== HERO + FORM ========== */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24" id="registracio">
        {/* Decorative Gradients */}
        <div className="absolute -right-32 -top-20 z-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,var(--lightgreen)_0%,transparent_70%)] opacity-70" />
        <div className="absolute -left-32 -bottom-40 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(63,255,186,0.18)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-11 lg:gap-24">
            
            {/* Hero Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-[--mint] px-4.5 py-2 text-xs font-bold uppercase tracking-widest text-[--green]">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[--green]" />
                  Ingyenes online webinár
                </span>

                <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-[--green] lg:text-7xl">
                  <span className="text-[--yellow]">Generációk</span> a munkahelyen
                </h1>

                <h2 className="mb-8 text-xl font-semibold leading-relaxed tracking-tight text-[--green] lg:text-3xl">
                  Hogyan formáld üzleti előnnyé a generációs sokszínűséget a konfliktusok helyett?
                </h2>

                <p className="mb-10 max-w-xl text-lg leading-relaxed text-[--black]">
                  A mai üzleti környezet az első a munka világában, amely <strong className="font-bold text-[--green]">5 különböző generáció</strong> együttműködését kívánja meg. A korábbi módszerek elavultak — a fiatal munkavállalói generáció újraírta a munkaerő megtartás, az elköteleződés és az értékteremtés fogalmát.
                </p>

                <div className="flex flex-wrap gap-7">
                  {[
                    { icon: "⏱", label: "60 perc", sub: "élő előadás + Q&A" },
                    { icon: "💻", label: "Online", sub: "otthonról elérhető" },
                    { icon: "★", label: "Ingyenes", sub: "vezetőknek & HR-eseknek" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[--lightgreen] text-xl text-[--green]">
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-sm font-semibold text-[--green]">
                        {item.label}
                        <small className="text-[11px] font-normal text-[--text-muted]">{item.sub}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-3xl border border-green-900/5 bg-white p-8 shadow-2xl lg:p-10"
              >
                {/* Yellow accent bar */}
                <div className="absolute left-0 right-0 top-0 h-2 rounded-t-3xl bg-[--yellow]" />

                <h3 className="mb-2.5 text-3xl font-bold tracking-tight text-[--green]">Foglald le az ingyenes helyed!</h3>
                <p className="mb-8 text-sm leading-relaxed text-[--text-muted]">
                  Töltsd ki az adataidat és elküldjük a webinár belépőlinkjét emailben.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4.5">
                  <div className="space-y-1.5">
                    <label htmlFor="nev" className="text-xs font-bold uppercase tracking-wider text-[--green]">Név</label>
                    <input 
                      type="text" id="nev" name="nev" required 
                      placeholder="Teljes név"
                      className="w-full rounded-xl border-1.5 border-[--lightgreen] bg-[--offwhite] px-4.5 py-3.5 text-base transition-all focus:border-[--yellow] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[--yellow]/15" 
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[--green]">Email cím</label>
                    <input 
                      type="email" id="email" name="email" required 
                      placeholder="pelda@cegnev.hu"
                      className="w-full rounded-xl border-1.5 border-[--lightgreen] bg-[--offwhite] px-4.5 py-3.5 text-base transition-all focus:border-[--yellow] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[--yellow]/15" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="telefon" className="text-xs font-bold uppercase tracking-wider text-[--green]">Telefonszám</label>
                    <input 
                      type="tel" id="telefon" name="telefon" required 
                      placeholder="+36 30 123 4567"
                      className="w-full rounded-xl border-1.5 border-[--lightgreen] bg-[--offwhite] px-4.5 py-3.5 text-base transition-all focus:border-[--yellow] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[--yellow]/15" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="pozicio" className="text-xs font-bold uppercase tracking-wider text-[--green]">Pozíció</label>
                    <input 
                      type="text" id="pozicio" name="pozicio" required 
                      placeholder="Pl. HR vezető, Cégtulajdonos, Csapatvezető"
                      className="w-full rounded-xl border-1.5 border-[--lightgreen] bg-[--offwhite] px-4.5 py-3.5 text-base transition-all focus:border-[--yellow] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[--yellow]/15" 
                    />
                  </div>

                  <div className="space-y-3 pt-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[--green]">Melyik időpont felel meg neked?</label>
                    <div className="space-y-2.5">
                      {[
                        { id: "slot1", date: "Május 29. péntek", time: "10:00 – 11:00", value: "2026-05-29 10:00-11:00" },
                        { id: "slot2", date: "Június 2. kedd", time: "13:00 – 14:00", value: "2026-06-02 13:00-14:00" }
                      ].map((slot) => (
                        <label key={slot.id} className="group relative flex cursor-pointer items-center gap-4 rounded-xl border-1.5 border-[--lightgreen] bg-[--offwhite] px-4.5 py-3.5 transition-all hover:border-[--yellow] hover:bg-white has-[:checked]:border-[--yellow] has-[:checked]:bg-white has-[:checked]:ring-4 has-[:checked]:ring-[--yellow]/15">
                          <input type="radio" name="idopont" value={slot.value} required className="h-4.5 w-4.5 accent-[--green]" />
                          <div className="flex flex-col leading-tight">
                            <span className="text-sm font-bold text-[--green]">{slot.date}</span>
                            <span className="text-[11px] font-medium text-[--text-muted]">{slot.time}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-[--text-muted]">
                    <input type="checkbox" name="adatkezeles" required className="mt-1 h-4 w-4 shrink-0 rounded accent-[--green]" />
                    <span>
                      Elfogadom az <a href="https://www.coreheed.hu/adatkezelesi-tajekoztato" target="_blank" rel="noopener" className="font-semibold text-[--green] underline underline-offset-2">adatkezelési tájékoztatót</a> és hozzájárulok, hogy a Coreheed Consulting Kft. felvegye velem a kapcsolatot.
                    </span>
                  </label>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className="mt-6 w-full rounded-full bg-[--mint] px-8 py-4.5 text-lg font-bold tracking-tight text-[--green] shadow-[rgba(0,0,0,0.1)_0_1px_5px_0,rgba(0,0,0,0.05)_0_7px_13px_-3px,#2DDB99_0_-3px_0_0_inset] transition-all hover:-translate-y-0.5 hover:bg-[#2DDB99] hover:shadow-[rgba(0,0,0,0.15)_0_2px_8px_0,rgba(0,0,0,0.08)_0_10px_18px_-3px,#25B881_0_-3px_0_0_inset] active:translate-y-0 disabled:opacity-70"
                  >
                    {isSubmitting ? "Küldés..." : isSuccess ? "Sikeres regisztráció! ✓" : "Lefoglalom a helyem!"}
                  </button>

                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-xl bg-[--lightgreen] p-4 text-center text-sm font-bold text-[--green]"
                    >
                      ✓ Köszönjük! Hamarosan emailben elküldjük a webinár részleteit.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== KÉRDÉSEK SZEKCIÓ ========== */}
      <section className="bg-[--green] px-6 py-24 text-white lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">
              Mire kapsz választ a <span className="text-[--yellow]">webináron</span>?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed text-white/85">
              60 perc tömény tudás, valós vállalati példákkal és azonnal alkalmazható megoldásokkal.
            </p>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 text-left">
              {[
                "Mik a főbb generációs különbségek okai a munkahelyeken?",
                "Milyen feszültségek és konfliktushelyzetek jelentkeznek most a cégeknél? Mik a legnagyobb kihívások?",
                "Hogyan kezelhetőek ezek vezetőként és HR-esként a mindennapokban?"
              ].map((q, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border-t-4 border-[--yellow] bg-white p-9 shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[--mint] text-xl font-black text-[--green]">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-[--green] font-inter">
                    {q}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== ELŐNYÖK ========== */}
      <section className="bg-[--offwhite] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight lg:text-6xl text-[--green]">
              Mit kapsz a <span className="text-[--yellow]">60 perc</span> alatt?
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-[--text-muted]">
              Nem elméleti tananyag — működő megoldások, hazai jógyakorlatok és valódi tanácsadói tapasztalatok.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              { icon: "✓", title: "Konkrét válaszok a fő kérdésekre", desc: "Tisztán látod, miért alakulnak ki feszültségek 5 generáció együttdolgozásánál — és mit tudsz ellene tenni.", alt: false },
              { icon: "★", title: "Működő hazai jógyakorlatok", desc: "Konkrét magyar kkv-s példák arra, hogyan tehetsz szert üzleti előnyre a generációs különbségekből.", alt: true },
              { icon: "↗", title: "Aktuális tanácsadói tapasztalat", desc: "Vállalati szférában szerzett, frissen tesztelt módszerek, amikkel valódi eredményeket érhetsz el.", alt: false }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className={`rounded-3xl p-10 text-center transition-shadow hover:shadow-2xl hover:shadow-[--green]/10 bg-[--mint] text-[--green]`}
              >
                <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl bg-[--green] text-3xl font-bold text-[--mint]">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold tracking-tight font-inter">{benefit.title}</h3>
                <p className="text-base leading-relaxed opacity-90">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLOSING CTA ========== */}
      <section className="relative overflow-hidden bg-[--green] px-6 py-28 text-center text-white lg:px-8">
        {/* Glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(63,255,186,0.10)_0%,transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">
            A generációs különbségek <span className="text-[--yellow]">erőforrások</span> — ha jól használod őket.
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-white/90">
            Ne hagyd, hogy a feszültségek hátráltassák a céged. Csatlakozz az ingyenes webinárhoz és vidd haza a működő megoldásokat.
          </p>
          <motion.a 
            href="#registracio" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block rounded-full bg-[--mint] px-10 py-5 text-xl font-bold tracking-tight text-[--green] shadow-[rgba(0,0,0,0.1)_0_1px_5px_0,rgba(0,0,0,0.05)_0_7px_13px_-3px,#2DDB99_0_-3px_0_0_inset] transition-all hover:bg-[#2DDB99] hover:shadow-[rgba(0,0,0,0.15)_0_2px_8px_0,rgba(0,0,0,0.08)_0_10px_18px_-3px,#25B881_0_-3px_0_0_inset]"
          >
            Regisztrálok az ingyenes webinárra →
          </motion.a>
        </div>
      </section>


      {/* Custom Styles for non-standard Tailwind values */}
      <style jsx global>{`
        :root {
          --offwhite: #F5F5F7;
          --text-muted: #5a6968;
        }
        .border-1\.5 { border-width: 1.5px; }
        .h-4\.5 { height: 1.125rem; }
        .w-4\.5 { width: 1.125rem; }
        .px-4\.5 { padding-left: 1.125rem; padding-right: 1.125rem; }
        .py-4\.5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
        .py-3\.5 { padding-top: 0.875rem; padding-bottom: 0.875rem; }
        .space-y-4\.5 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.125rem; }
      `}</style>
    </div>
  );
}
