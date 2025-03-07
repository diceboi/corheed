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
                <Image src='/csapat/mezes-lendvai-dorottya.webp' width={150} height={150} alt="Lendvai-Mézes Dorottya" className="rounded-full border-4 border-[--green]"/>
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
                <Image src='/csapat/mezes-aron.webp' width={150} height={150} alt="Mézes Áron" className="rounded-full border-4 border-[--green]"/>
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
                <Image src='/csapat/mezes-hanga.webp' width={150} height={150} alt="Mézes Hanga" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Mézes Hanga</H3>
                </div>
                <Paragraph>Az emberek fejlesztése és a tehetségek kibontakoztatása iránti elhivatottságom végigkísérte eddigi szakmai pályafutásomat. Alapdiplomámat a Budapesti Corvinus Egyetemen szereztem Tehetségmenedzsment specializáción, majd az ELTE-n Szervezetfejlesztést tanultam mesterszakon, hogy még átfogóbb tudással támogathassam a vállalatokat. </Paragraph>
                <Paragraph>Több éves nagyvállalati tapasztalattal rendelkezem, főként tehetségmenedzsment és szervezetfejlesztési programokban dolgozom, így betekintést nyertem a szervezetek kihívásaiba, napi működésébe és megküzdési stratégiáiba. </Paragraph>
                <Paragraph>Egyetemi éveim alatt én magam is részese lehettem tehetségmenedzsment programoknak, így saját élményeimet és tapasztalataimat is beépítve dolgozom azon, hogy a lehető leghatékonyabban segítsek más tehetséges fiatal munkavállalónak.</Paragraph>
              
            </div>
          )}

          {form === "toth-kinga" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/toth-kinga.webp' width={150} height={150} alt="Tóth Kinga" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Tóth Kinga</H3>
              </div>
              <Paragraph>
                &apos;Minden emberhez vezet egy út.&apos;
              </Paragraph>
              <Paragraph>Személyes mottóm, melyet igyekszem egész életemen át követni családanyaként, barátként, munkatársként, segítő szakemberként.</Paragraph>
              <Paragraph>Elsősorban gyermek- és ifjúsági coachként segítem a fiatal generációt mind egyénileg, mind teamben. Kiemelt területeim a tehetségnevelés, pályaválasztás, közösségépítés (iskolai, csapat), de felkarolom a 22-24 éves korosztály kapunyitási pánikját is, támogatva ezzel őket a biztonságos egyetemi életből való kilépésben. Alfa és Z generációs kutatással ugyancsak foglalkozom; folyamatosan bővítem tudásom a fiatal generációkról és a generációk együttéléséről, munkahelyi együttműködéséről.</Paragraph>
              <Paragraph>Fontosnak tartom az önkéntességet: évek óta az Egyszülős Központban és a Magyar Református Szeretetszolgálatnál végzek coaching munkát. A Nyilas Misi Ösztöndíj Program vezetéséért 2024-ben megkaptam a Szeretetszolgálat „Kiváló Önkéntes Díj”-át. 2023 óta az ICF Hungary CSR csapatában coach és projekt koordinátorként is tevékenykedem.</Paragraph>
            </div>
          )}
          
          {form === "dr-kiraly-zsolt" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/dr-kiraly-zsolt.webp' width={150} height={150} alt="Dr. Király Zsolt" className="rounded-full border-4 border-[--green]"/>
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
                <Image src='/csapat/domotor-katalin.webp' width={150} height={150} alt="Dömötör Katalin" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Dömötör Katalin</H3>
              </div>
              <Paragraph>
              Több mint 15 év HR tapasztalattal rendelkezem multinacionális és startup környezetben, ahol 600+ munkavállaló régiós szintű HR-folyamatait irányítottam. 
              </Paragraph>
              <Paragraph>Szenvedélyem az emberek és a szervezetek fejlesztése. Vezetői tapasztalatom révén erős stratégiai gondolkodásmóddal és célorientált működési szemlélettel rendelkezem, amelyet kiegészítek a coachként is alkalmazott empatikus, személyre szabott megközelítés módommal.</Paragraph>
              <Paragraph>Hiszek abban, hogy vállalati környezetben a stratégiai fókusz és az emberközpontúság ötvözése a siker kulcsa.</Paragraph>
            </div>
          )}

          {form === "pajer-kata" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/pajer-kata.webp' width={150} height={150} alt="Pájer Kata" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Pájer Kata</H3>
              </div>
              <Paragraph>
              A Budapesti Corvinus Egyetemen végeztem Emberi Erőforrás alapszakon, majd a Metropolitan Egyetemen szereztem Business - és Team coach diplomát. Többéves szakmai tapasztalattal rendelkezem a toborzás és recruitment területén, kis- és nagyvállalati környezetben egyaránt. Célom, hogy segítsem a munkavállalókat és a szervezeteket a hatékonyabb működésben és a fenntartható növekedésben. 
              </Paragraph>
              <Paragraph>Az egyéni és team coaching folyamatokban is jártas vagyok és angol nyelven is magabiztosan támogatom a csapatok és vezetők fejlődését a szervezeteknél.</Paragraph>
            </div>
          )}

          {form === "seres-nikolett" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/seres-nikolett.webp' width={150} height={150} alt="Seres Nikolett" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Seres Nikolett</H3>
              </div>
              <Paragraph>
              Több mint 15 éves tapasztalattal rendelkezem a külső és belső kommunikáció, a PR, az elköteleződésnövelés és a munkáltatói márkaépítés területén. A Külker nemzetközi kommunikáció szakát követően néhány évnyi integrált ügynökségi tapasztalat után az elmúlt 10 évben több nagyvállalat kommunikációs vezetőjeként szereztem széles körű tapasztalatot, mindig is emberekkel és a fejlesztésükkel foglalkoztam.
              </Paragraph>
              <Paragraph>Pályakezdőként, account manager pozícióban olyan cégek kampányain dolgoztam, mint az Unilever, a T-mobile vagy a Sanofi-Aventis. Majd a BAT és a Philip Morris dohányipari cégek teljes körű vállalati kommunikációjáért feleltem. 6,5 éven át vezettem a Telenor belső kommunikációs osztályát, jelenleg pedig a JVSZ - Üzleti Szövetség operatív igazgatója vagyok.</Paragraph>
              <Paragraph>A technológiai forradalom és a rekordtempóra gyorsult digitális világban kutatom a motiváció, a megtartás, és a munkavállalói élmény szerepét, illetve a jelen kor munkakörnyezeti, szemléletváltási, kommunikációs, generációs és digitális kihívásait.</Paragraph>
              <Paragraph>Az emberek motivációjával, a változó munkakörnyezettel, változáskezeléssel, a reziliencia fejlesztésével és munkavállalói elköteleződéssel foglalkozom. Hiszek a közösség és az együttműködés erejében, a fejlődési szemléletben (growth mindset), valamint az employer branding és az employee experience hatékonyság- és teljesítménynövelő hatásában.</Paragraph>
            </div>
          )}

          {form === "belayane-najoua" && (
            <div className="space-y-8">
              <div className="flex flex-nowrap gap-4 items-center">
                <Image src='/csapat/belayane-najoua.webp' width={150} height={150} alt="Belayane Najoua" className="rounded-full border-4 border-[--green]"/>
                <H3 className="text-[--blue] font-bold text-2xl">Belayane Najoua</H3>
              </div>
              <Paragraph>
              Najoua PR és kommunikációs szakember, az Agence Najoua alapítója, valamint a Munch PR és partnerségi területének vezetője. Közel öt éve csatlakozott a Munch csapatához első teljes munkaidős állásában, és azóta meghatározó szerepet játszik a CEE legnagyobb ételmentő platformjának márkaépítésében, amely négy országban is sikeresen működik. Korábban újságíróként több mint 200 cikket publikált társadalmi és környezeti kérdésekről elismert médiumokban. Rendszeresen tart előadásokat márkaépítésről és fenntartható kommunikációról vezető oktatási intézményekben. A Signature PR Award 2024 egyik legfiatalabb jelöltje volt, a Magyar PR Szövetség tagja, és aktívan részt vesz a Startup Hungary közösség életében.
              </Paragraph>
            </div>
          )}

        </>
      </Modal>

    </Context.Provider>
  );
}
