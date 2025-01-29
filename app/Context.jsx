"use client";

import { createContext, useState } from "react";
import Modal from "./Components/UI/Modal";
import Paragraph from "./Components/UI/Typo/Paragraph";
import H3 from "./Components/UI/Typo/H3";
import Image from "next/image";

export const Context = createContext({
  toggleMobileMenu: () => {},
  mobileMenuOpen: false,
  openPopup: null,
  togglePopup: () => {},
  setOpenPopup: () => {},
  form: "login",
  setForm: () => {},
});

export default function ContextProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(null);
  const [form, setForm] = useState("login");

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const togglePopup = (popupName) => {
    setOpenPopup((prevPopup) => (prevPopup === popupName ? null : popupName));
  };

  return (
    <Context.Provider
      value={{
        toggleMobileMenu,
        mobileMenuOpen,
        openPopup,
        togglePopup,
        setOpenPopup,
        form,
        setForm,
      }}
    >
      {children}

      <Modal openstate={openPopup} onClose={() => togglePopup(null)}>
        <>
          {form === "mezes-lendvai-dorottya" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/mezes-lendvai-dorottya.webp' width={150} height={150} alt="Lendvai-Mézes Dorottya" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Mézes-Lendvai Dorottya</H3>
              </div>
              <Paragraph>
                Magas szintű nemzetközi minősítéssel (ICF - Professional Certified Coach) rendelkező Business- és Karrier coach, intergenerációs tréner és GenZ konzultáns vagyok.
              </Paragraph>
              <Paragraph>Szakterületem a generációs különbségekből fakadó eltérő munkahelyi viselkedésminták, attitűdök, motivációs faktorok vizsgálata. A többgenerációs csapatokkal való munkám során igyekszem ezeket az ismereteket a generációk közeledésére fordítani.</Paragraph>
              <Paragraph>Évek óta foglalkozom többgenerációs csapatokkal és különböző módokon  - tudásátadó előadásokkal, érzékenyítő programokkal, workshopokkal támogatom a generációk összekapcsolódását és harmonikus együttműködését a munkahelyeken.</Paragraph>
              <Paragraph>Rendszeres résztvevője és előadója vagyok olyan szakmai fórumoknak, ahol a fiatal generáció áll a fókuszban - akár médiahasználati, kommunikációs szokások terén, akár a Z generációt érintő egyéb témákban mint pl. a fiatalkori burnout, klímaszorongás vagy a fenntartható vállalati értékteremtés.</Paragraph>
            </div>
          )}

          {form === "mezes-aron" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/mezes-aron.webp' width={150} height={150} alt="Mézes Áron" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Mézes Áron</H3>
              </div>
              <Paragraph>
                Több, mint 20 év vezetői tapasztalattal rendelkezem, melyet magyar kkv, nagyvállalati, illetve multinacionális környezetben vegyesen szereztem. Dolgoztam az egészségügyi, a gyógyszeripari és az informatikai szektorban is, így elmondhatom, hogy átfogó képem van a hazai és a nemzetközi vállalatok működéséről.
              </Paragraph>
              <Paragraph>Átéltem több tulajdonosváltást, illetve részt vettem számos szervezetátalakításban, kultúraformáló projektben. Az évek során világossá vált számomra, hogy a vállalatok jelentős hányada sokkal jobb eredményeket érhet el, amennyiben megértik és valóban alkalmazzák a modern vezetési elveket.</Paragraph>
              <Paragraph>Hiszem, hogy cégünk ezen a területen is hathatós segítséget tud nyújtani mindazoknak, akik a különböző generációk eltérő igényeit, integráltan kezelve szeretnének előrébb lépni.</Paragraph>
            </div>
          )}

          {form === "mezes-hanga" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/mezes-hanga.webp' width={150} height={150} alt="Mézes Hanga" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Mézes Hanga</H3>
              </div>
            </div>
          )}

          {form === "toth-kinga" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/toth-kinga.webp' width={150} height={150} alt="Tóth Kinga" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Tóth Kinga</H3>
              </div>
              <Paragraph>
                &apos;Minden emberhez vezet egy út.&apos;
              </Paragraph>
              <Paragraph>Személyes mottóm, melyet igyekszem egész életemen át követni családanyaként, barátként, munkatársként, segítő szakemberként.</Paragraph>
              <Paragraph>Elsősorban gyermek- és ifjúsági coachként segítem a fiatal generációt mind egyénileg, mind csoportban, teamben. Kiemelet területem minden korosztálynál a tehetségnevelés, csapatok terén a közösségépítés. Alfa és Z generációs kutatással is foglalkozom; folyamatosan bővítem ismereteimet, tudásom a fiatal generációkról és a generációk együttéléséről, munkahelyi együttműködéséről.</Paragraph>
              <Paragraph>Fontosnak tartom az önkéntességet: évek óta az Egyszülős Központban végzek coaching munkát, valamint a Magyar Református Szeretetszolgálat Nyilas Misi Ösztöndíj Programját vezetem - ez utóbbiért a Szeretetszolgálattól 2024-ben megkaptam a „Kiváló Önkéntes Díj”-at. 2023 óta az ICF Hungary Jószolgálati csapatának (CSR) tagjaként coach és projekt koordinátorként is dolgozom.</Paragraph>
            </div>
          )}
          
          {form === "dr-kiraly-zsolt" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/dr-kiraly-zsolt.webp' width={150} height={150} alt="Dr. Király Zsolt" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Dr. Király Zsolt</H3>
              </div>
              <Paragraph>
              Több mint 20 év és 10 000 óra képzés-fejlesztési tapasztalattal rendelkezem generációkon, karrierszakaszokon és szervezeti szerepeken átívelő módon és többféle formában: egyetemi oktató (PhD), coach (ICF ACC), mentor, tréner, facilitátor. 
              </Paragraph>
              <Paragraph>Szakmai tevékenységem a humánfejlesztésen túl a HR tanácsadásra, folyamat- és szervezetfejlesztésre fókuszál. Hét éven keresztül nemzetközi szinten is kiváló eredménnyel vezettem a Budapesti Metropolitan Egyetem HR alapképzését (2017-2024).</Paragraph>
              <Paragraph>Piaci tapasztalataimat tanácsadóként, illetve HR és brand igazgatóként szereztem, főként a kkv szektorban.</Paragraph>
            </div>
          )}

          {form === "domotor-katalin" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/domotor-katalin.webp' width={150} height={150} alt="Dömötör Katalin" className="rounded-full border-4 border-[--mint]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Dömötör Katalin</H3>
              </div>
              <Paragraph>
              Több mint 15 év HR tapasztalattal rendelkezem multinacionális és startup környezetben, ahol 600+ munkavállaló régiós szintű HR-folyamatait irányítottam. 
              </Paragraph>
              <Paragraph>Szenvedélyem az emberek és a szervezetek fejlesztése. Vezetői tapasztalatom révén erős stratégiai gondolkodásmóddal és célorientált működési szemlélettel rendelkezem, amelyet kiegészítek a coachként is alkalmazott empatikus, személyre szabott megközelítés módommal.</Paragraph>
              <Paragraph>Hiszek abban, hogy vállalati környezetben a stratégiai fókusz és az emberközpontúság ötvözése a siker kulcsa.</Paragraph>
            </div>
          )}
        </>
      </Modal>

    </Context.Provider>
  );
}
