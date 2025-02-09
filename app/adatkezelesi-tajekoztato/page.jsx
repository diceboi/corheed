import H1 from "../Components/UI/Typo/H1";
import H2 from "../Components/UI/Typo/H2";
import H3 from "../Components/UI/Typo/H3";
import Paragraph from "../Components/UI/Typo/Paragraph";
import Label from "../Components/UI/Typo/Label";

import RegularContainer from "../Components/UI/RegularContainer";
import Link from "next/link";

export default function page() {
  return (
    <RegularContainer classname={"relative bg-[--white] pb-20 pt-40"}>
      <div className="container m-auto flex flex-col gap-8 px-4">
        <H1>Adatkezelési tájékoztató</H1>
        <H3>1. Az adatkezelési tájékozató célja</H3>
        <Paragraph>
          Coreheed Consulting Kft., a továbbiakban, szolgáltató, adatkezelő,
          mint adatkezelő, magára nézve kötelezőnek ismeri el jelen jogi
          közlemény tartalmát.
        </Paragraph>
        <Paragraph>
          Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden
          adatkezelés megfelel a jelen szabályzatban és a hatályos nemzeti
          jogszabályokban, valamint az Európai Unió jogi aktusaiban
          meghatározott elvárásoknak. Jelen adatkezelési tájékoztató az alábbi
          domain-re terjed ki: www.coreheed.hu
        </Paragraph>
        <Paragraph>
          Adatkezelő adatkezeléseivel kapcsolatosan felmerülő adatvédelmi
          irányelvek folyamatosan elérhetők a
          https://coreheed.hu/adatkezelesi-tajekoztato címen. Adatkezelő
          fenntartja magának a jogot jelen tájékoztató bármikori módosítására. A
          változásokról az érintettek kellő időben tájékoztatásra kerülnek.
          Amennyiben kérdése lenne jelen közleményhez kapcsolódóan, kérjük, írja
          meg és megválaszoljuk kérdését. Adatkezelő elkötelezett ügyfelei és
          partnerei személyes adatainak védelmében, kiemelten fontosnak tartja
          ügyfelei információs önrendelkezési jogának tiszteletben tartását.
          Adatkezelő a személyes adatokat bizalmasan kezeli, és megtesz minden
          olyan biztonsági, technikai és szervezési intézkedést, mely az adatok
          biztonságát garantálja. Adatkezelő az alábbiakban ismerteti
          adatkezelési gyakorlatát.
        </Paragraph>
        <H3>2. Az adatkezelő adatai</H3>
        <Paragraph>
          Amennyiben megkeresné a vállalkozást, az alábbi elérhetőségeken léphet
          kapcsolatba az adatkezelővel.
        </Paragraph>
        <ul>
          <li>Név: Coreheed Consulting Kft.</li>
          <li>Székhely: ...</li>
          <li>Adószám: ...</li>
          <li>Cég-nyilvántartási szám: ...</li>
          <li>Mobil: +36 30 328 2517</li>
          <li>E-mail: info@coreheed.hu</li>
        </ul>
        <H3>2.1 Az adatvédelmi tisztviselő</H3>
        <Paragraph>
          Adatkezelő nem végez olyan tevékenységet, mely indokolttá tenné
          adatvédelmi tisztviselő kijelölését.
        </Paragraph>
        <H2>A kezelt személyes adatok köre</H2>
        <H3>3.1 Technikai adatok</H3>
        <Paragraph>
          Adatkezelő a személyes adatok kezeléséhez a szolgáltatás nyújtása
          során alkalmazott informatikai eszközöket úgy választja meg és
          üzemelteti, hogy a kezelt adat:
        </Paragraph>
        <ul>
          <li>
            az arra feljogosítottak számára hozzáférhető (rendelkezésre állás);
          </li>
          <li>
            hitelessége és hitelesítése biztosított (adatkezelés hitelessége);
          </li>
          <li>változatlansága igazolható (adatintegritás);</li>
          <li>
            a jogosulatlan hozzáférés ellen védett (adat bizalmassága) legyen.
          </li>
        </ul>
        <Paragraph>
          Adatkezelő az adatokat megfelelő intézkedésekkel védi a jogosulatlan
          hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés
          vagy megsemmisítés, valamint a véletlen megsemmisülés ellen.
          Adatkezelő olyan műszaki, szervezési és szervezeti intézkedésekkel
          gondoskodik az adatkezelés biztonságának védelméről, amely az
          adatkezeléssel kapcsolatban jelentkező kockázatoknak megfelelő védelmi
          szintet nyújt. Adatkezelő az adatkezelés során megőrzi a titkosságot:
          megvédi az információt, hogy csak az férhessen hozzá, aki erre
          jogosult; a sértetlenséget: megvédi az információnak és a feldolgozás
          módszerének a pontosságát és teljességét; a rendelkezésre állást:
          gondoskodik arról, hogy amikor a jogosult használónak szüksége van rá,
          valóban hozzá tudjon férni a kívánt információhoz, és rendelkezésre
          álljanak az ezzel kapcsolatos eszközök.
        </Paragraph>
        <H3>3.2 Cookie-k (Sütik)</H3>
        <Paragraph>
          A sütik információkat gyűjtenek a látogatókról és eszközeikről;
          megjegyzik a látogatók egyéni beállításait, amelyek felhasználásra
          kerül(het)nek pl. online tranzakciók igénybevételekor, így nem kell
          újra begépelni őket; megkönnyítik a weboldal használatát; minőségi
          felhasználói élményt biztosítanak, továbbá részt vesznek néhány
          látogatói statisztikai információ gyűjtésében. A testre szabott
          kiszolgálás érdekében a felhasználó számítógépén kis adatcsomagot, ún.
          sütit (cookie) helyez el és a későbbi látogatás során olvas vissza. Ha
          a böngésző visszaküld egy korábban elmentett sütit, a sütit kezelő
          szolgáltatónak lehetősége van összekapcsolni a felhasználó aktuális
          látogatását a korábbiakkal, de kizárólag a saját tartalma
          tekintetében. A sütik egy része nem tartalmaz az egyéni felhasználó
          azonosításra alkalmas, személyes információkat, egy részük tartalmaz
          egy titkos, véletlenszerűen generált számsort, melyet a felhasználó
          eszköze eltárol és a felhasználó azonosíthatóságát biztosítja.
        </Paragraph>
        <H3>Feltétlenül szükséges, munkamenet (session) cookie-k</H3>
        <Paragraph>
          Ezen sütik célja, hogy a látogatók maradéktalanul és zökkenőmentesen
          böngészhessék a www.coreheed.hu weboldalt, használhassák annak
          funkcióit, és az ott elérhető szolgáltatásokat. Az ilyen típusú sütik
          érvényességi ideje a munkamenet (böngészés) befejezéséig tart, a
          böngésző bezárásával a sütik e fajtája automatikusan törlődik a
          számítógépről, illetve a böngészésre használt más eszközről.
        </Paragraph>
        <H3>Haramadik fél által elhelyezett cookie-k (analitika)</H3>
        <Paragraph>
          A www.coreheed.hu weboldal alkalmazza a Google Analytics mint harmadik
          fél sütijeit is. A Google Analytics statisztikai célú szolgáltatás
          használatával a www.coreheed.hu weboldal információkat gyűjt azzal
          kapcsolatban, hogy a látogatók hogyan használják a weboldalt. Az
          adatot a honlap fejlesztésének és a felhasználói élmény javításának
          céljával használja fel. Ezen sütik szintén lejáratukig a látogató
          számítógépén vagy böngészésre használt más eszközén, annak
          böngészőjében maradnak, illetve amíg a látogató nem törli őket.
        </Paragraph>
        <H3>A cookie-k kezelési jogalapja</H3>
        <Paragraph>
          A cookie kezelés jogalapja a weboldal látogatójának hozzájárulása, a
          vonatkozó Rendelet 6. cikk (1) bekezdés a) pontja alapján. Amennyiben
          nem fogadja el a cookie-k használatát, akkor a 3.2.3. pontban
          felsorolt weboldalak bizonyos funkciói nem lesznek elérhetőek a
          weboldalak használata során, illetve előfordulhat, hogy bizonyos
          funkciók hibásan működnek. A cookie-k törléséről bővebb információt a
          gyakoribb böngészők tekintetében az alábbi linkeken találhat:
        </Paragraph>
        <Link
          target="__blank"
          className="underline"
          href="https://support.mozilla.org/hu/kb/weboldalak-altal-elhelyezett-sutik-torlese-szamito"
        >
          Firefox: Weboldalak által elhelyezett sütik törlése a számítógépről
        </Link>
        <Link
          target="__blank"
          className="underline"
          href="https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop"
        >
          Chrome: Clear cache & cookies
        </Link>
        <Link
          target="__blank"
          className="underline"
          href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html"
        >
          Safari: Manage cookies and website data in Safari on Mac
        </Link>
        <H2>
          4. Általános adatkezelési irányelvek, adatkezelés neve, felhasználása,
          jogalap és megőrzési idő
        </H2>
        <Paragraph>
          Adatkezelő tevékenységének adatkezelései önkéntes hozzájáruláson,
          illetve törvényi felhatalmazáson alapulnak. Az önkéntes hozzájáruláson
          alapuló adatkezelések esetében az érintettek e hozzájárulásukat az
          adatkezelés bármely szakaszában visszavonhatják. Bizonyos esetekben a
          megadott adatok egy körének kezelését, tárolását, továbbítását
          jogszabályok teszik kötelezővé, melyről külön értesítjük ügyfeleinket.
          Felhívjuk Adatkezelő részére adatközlők figyelmét, hogy amennyiben nem
          saját személyes adataikat adják meg, az adatközlő kötelessége az
          érintett hozzájárulásának beszerzése. Adatkezelési alapelvei
          összhangban vannak az adatvédelemmel kapcsolatos hatályos
          jogszabályokkal, így különösen az alábbiakkal: 2011. évi CXII. törvény
          - az információs önrendelkezési jogról és az információ-szabadságról
          (Infotv.); Az Európai Parlament és a Tanács (EU) 2016/679 rendelete
          (2016. április 27.) - a természetes személyeknek a személyes adatok
          kezelése tekintetében történő védelméről és az ilyen adatok szabad
          áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről
          (általános adatvédelmi rendelet, GDPR); 2013. évi V. törvény - a
          Polgári Törvénykönyvről (Ptk.); 2000. évi C. törvény - a számvitelről
          (Számv. tv.); 2017. évi LIII. törvény - a pénzmosás és terrorizmus
          finanszírozása megelőzéséről és megakadályozásáról (Pmt.); 2013. évi
          CCXXXVII. törvény - a hitelintézetekről és a pénzügyi vállalkozásokról
          (Hpt.). Az adatkezelő adattérképek készített, ennek alapján
          meghatározásra került a kezelt adatok köre, azok felhasználása,
          jogalapja és megőrzési ideje. Bizonyos szolgáltatások esetében,
          úgymint weboldal karbantartás, további személyes adatok is átadásra
          kerülhetnek.
        </Paragraph>
        <H3>Az adatkezelés célja, a kezelt adatok tervezett felhasználása:</H3>
        <Paragraph>
          Az adatok a megrendelés teljesítésére kerülnek felhasználásra. Az
          adatkezelés jogalapja szerződéses megbízás. Megőrzési idő: üzleti
          kapcsolat időtartama, vagy törlési kérelem.
        </Paragraph>
        <H3>4.1 Online ügyintézéshez kapcsolódó adatok</H3>
        <Paragraph>
          A kapcsolatfelvétel során elkért személyes adatok:
        </Paragraph>
        <ul>
          <li>Név (kötelező mező)</li>
          <li>Email cím (kötelező mező)</li>
          <li>Telefonszám (kötelező mező)</li>
          <li>
            Az adatkezelés célja, a kezelt adatok tervezett felhasználása: Az
            adatok kapcsolatfelvétel és a megrendelés teljesítésére kerülnek
            felhasználásra. Az adatkezelés jogalapja önkéntes hozzájárulás.
          </li>
          <li>
            Megőrzési idő: üzleti kapcsolat időtartama, vagy törlési kérelem.
          </li>
        </ul>
        <Paragraph>
          Az adatkezelési szabályzat elfogadása előre ki nem töltött, kötelező
          jelölőnégyzet elfogadásával történik.
        </Paragraph>
        <H3>4.2 Ügyfél kapcsolati adatok</H3>
        <Paragraph>
          Az ügyfelek cégvezetőinek és kapcsolattartóinak alábbi személyes
          adatait és elérhetőségeit tárolom:
        </Paragraph>
        <ul>
          <li>Név (kötelező mező)</li>
          <li>Email cím (kötelező mező)</li>
        </ul>
        <Paragraph>
          Az adatkezelés célja, a kezelt adatok tervezett felhasználása: Az
          adatok kapcsolatfelvétel és kapcsolattartás céljából kerülnek
          felhasználásra. Az adatkezelés jogalapja jogos érdek.
        </Paragraph>
        <Paragraph>
          Megőrzési idő: üzleti kapcsolat időtartama, vagy törlési kérelem.
        </Paragraph>
        <H2>5. az adatok fizikai tárolási helyei</H2>
        <Paragraph>
          Személyes adatai (vagyis azok az adatok, amelyek az Ön személyével
          kapcsolatba hozhatók) a következő módon kerülhetnek a kezelésünkbe:
        </Paragraph>
        <ul>
          <li>
            egyfelől az internetes kapcsolat fenntartásával összefüggésben az Ön
            által használt számítógéppel, böngészőprogrammal, internetes címmel,
            a látogatott oldalakkal kapcsolatos technikai adatok automatikusan
            képződnek számítógépes rendszerünkben,
          </li>
          <li>
            másfelől Ön is megadhatja nevét, elérhetőségét vagy más adatait, ha
            a honlap használata során személyes kapcsolatba kíván lépni velünk.
            A rendszer működtetése során technikailag rögzítésre kerülő adatok:
            az érintett bejelentkező számítógépének azon adatai, melyeket a
            használt eszköz rendszerei a technikai folyamatok automatikus
            eredményeként rögzít.
          </li>
        </ul>
        <Paragraph>
          Az automatikusan rögzítésre kerülő adatot a rendszer az érintett külön
          nyilatkozata vagy cselekménye nélkül a belépéskor, illetve kilépéskor
          automatikusan naplózza. Ezen adat egyéb személyes felhasználói
          adatokkal - törvény által kötelezővé tett esetek kivételével - össze
          nem kapcsolható. Az adathoz kizárólag a https://coreheed.hu domain fér
          hozzá.
        </Paragraph>
        <H2>6. Adattovábbítás, adatfeldolgozás, az adatokat megismerők köre</H2>
        <Paragraph>Tárhelyszolgáltatás:</Paragraph>
        <ul>
          <li>Vercel Inc.</li>
          <li>440 N Barranca Avenue #4133</li>
          <li>Covina, CA 91723</li>
          <li>United States</li>
          <li>privacy@vercel.com</li>
        </ul>
        <Paragraph>
          Megismert adatok köre: https://coreheed.hu domainre látogatók IP címe,
          böngészésre használt eszköze, és helyadatai
        </Paragraph>
        <Paragraph>Google Analytics:</Paragraph>
        <ul>
          <li>Google Inc., Mountain View, California, USA</li>
          <li>
            Megismert adatok köre: www.coreheed.hu weboldal látogatóinak -
            anonimizált, személyhez nem köthető - IP címe.
          </li>
        </ul>
        <Paragraph>Levelező kiszolgáló(k):</Paragraph>
        <ul>
          <li>Rackhost Zrt.</li>
          <li>6722 Szeged, Tisza Lajos körút 41.</li>
          <li>info@rackhost.hu</li>
        </ul>
        <H3>6.1 Adattovábbítás harmadik országba</H3>
        <Paragraph>
          Adattovábbítás az Amerikai Egyesült Államokba történik, mellyel
          megfelelőségi határozat született 2016. július 12-én
          (https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en).
          A megfelelőségi határozat a Google
          (https://policies.google.com/privacy/frameworks) és a Vercel Inc.
          (https://vercel.com/legal/dpa) adatkezelők esetében is érvényes.
        </Paragraph>
        <H2>7. Érintett jogai és jogérvényesítési lehetőségei</H2>
        <Paragraph>
          Az érintett tájékoztatást kérhet személyes adatai kezeléséről,
          valamint kérheti személyes adatainak helyesbítését, illetve - a
          kötelező adatkezelések kivételével - törlését, visszavonását, élhet
          adathordozási-, és tiltakozási jogával az adat felvételénél jelzett
          módon, illetve az adatkezelő fenti elérhetőségein.
        </Paragraph>
        <H3>7.1 Tájékoztatáshoz való jog</H3>
        <Paragraph>
          Adatkezelő megfelelő intézkedéseket hoz annak érdekében, hogy az
          érintettek részére a személyes adatok kezelésére vonatkozó, a GDPR 13.
          és a 14. cikkben említett valamennyi információt és a 15-22. és 34.
          cikk szerinti minden egyes tájékoztatást tömör, átlátható, érthető és
          könnyen hozzáférhető formában, világosan és közérthetően megfogalmazva
          nyújtsa.
        </Paragraph>
        <H3>7.2 Az érintett hozzáféréshez való joga</H3>
        <Paragraph>
          Az érintett jogosult arra, hogy az adatkezelőtől visszajelzést kapjon
          arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e,
          és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy a
          személyes adatokhoz és a következő információkhoz hozzáférést kapjon:
        </Paragraph>
        <ul>
          <li>az adatkezelés céljai;</li>
          <li>az érintett személyes adatok kategóriái;</li>
          <li>
            azon címzettek vagy címzettek kategóriái, akikkel, illetve
            amelyekkel a személyes adatokat közölték vagy közölni fogják,
            ideértve különösen a harmadik országbeli címzetteket, illetve a
            nemzetközi szervezeteket;
          </li>
          <li>a személyes adatok tárolásának tervezett időtartama;</li>
          <li>
            a helyesbítés, törlés vagy adatkezelés korlátozásának és a
            tiltakozás joga;
          </li>
          <li>a felügyeleti hatósághoz címzett panasz benyújtásának joga;</li>
          <li>az adatforrásokra vonatkozó információ;</li>
          <li>
            az automatizált döntéshozatal ténye, ideértve a profilalkotást is,
            valamint az alkalmazott logikára és arra vonatkozó érthető
            információk, hogy az ilyen adatkezelés milyen jelentőséggel bír, és
            az érintettre nézve milyen várható következményekkel jár.
          </li>
        </ul>
        <Paragraph>
          Az adatkezelő a kérelem benyújtásától számított legfeljebb egy hónapon
          belül adja meg a tájékoztatást.
        </Paragraph>
        <H3>7.3 Helyesbítés joga</H3>
        <Paragraph>
          Az érintett kérheti Adatkezelő által kezelt, rá vonatkozó pontatlan
          személyes adatok helyesbítését és a hiányos adatok kiegészítését.
        </Paragraph>
        <H3>7.4 Törléshez való jog</H3>
        <Paragraph>
          Az érintett az alábbi indokok valamelyikének fennállása esetén
          jogosult arra, hogy kérésére Adatkezelő indokolatlan késedelem nélkül
          törölje a rá vonatkozó személyes adatokat: személyes adatokra már
          nincs szükség abból a célból, amelyből azokat gyűjtötték vagy más
          módon kezelték; az érintett visszavonja az adatkezelés alapját képező
          hozzájárulását, és az adatkezelésnek nincs más jogalapja; az érintett
          tiltakozik az adatkezelés ellen, és nincs elsőbbséget élvező jogszerű
          ok az adatkezelésre; a személyes adatokat jogellenesen kezelték; a
          személyes adatokat az adatkezelőre alkalmazandó uniós vagy tagállami
          jogban előírt jogi kötelezettség teljesítéséhez törölni kell; a
          személyes adatok gyűjtésére információs társadalommal összefüggő
          szolgáltatások kínálásával kapcsolatosan került sor. Az adatok törlése
          nem kezdeményezhető, ha az adatkezelés szükséges: a
          véleménynyilvánítás szabadságához és a tájékozódáshoz való jog
          gyakorlása céljából; a személyes adatok kezelését előíró, az
          adatkezelőre alkalmazandó uniós vagy tagállami jog szerinti
          kötelezettség teljesítése, illetve közérdekből vagy az adatkezelőre
          ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat
          végrehajtása céljából; a népegészség-ügy területét érintő, vagy
          archiválási, tudományos és történelmi kutatási célból vagy
          statisztikai célból, közérdek alapján; vagy jogi igények
          előterjesztéséhez, érvényesítéséhez, illetve védelméhez.
        </Paragraph>
        <H3>7.5 Az adatkezelés korlátozásához való jog</H3>
        <Paragraph>
          Az érintett kérésére Adatkezelő korlátozza az adatkezelést, ha az
          alábbi feltételek valamelyike teljesül: az érintett vitatja a
          személyes adatok pontosságát, ez esetben a korlátozás arra az
          időtartamra vonatkozik, amely lehetővé teszi, a személyes adatok
          pontosságának ellenőrzését; az adatkezelés jogellenes, és az érintett
          ellenzi az adatok törlését, és ehelyett kéri azok felhasználásának
          korlátozását; az adatkezelőnek már nincs szüksége a személyes adatokra
          adatkezelés céljából, de az érintett igényli azokat jogi igények
          előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy az érintett
          tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra az
          időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az
          adatkezelő jogos indokai elsőbbséget élveznek-e az érintett jogos
          indokaival szemben. Ha az adatkezelés korlátozás alá esik, a személyes
          adatokat a tárolás kivételével csak az érintett hozzájárulásával, vagy
          jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy
          más természetes vagy jogi személy jogainak védelme érdekében, vagy az
          Unió, illetve valamely tagállam fontos közérdekéből lehet kezelni.
        </Paragraph>
        <H3>Az adathordozáshoz való jog</H3>
        <Paragraph>
          Az érintett jogosult arra, hogy a rá vonatkozó, általa az adatkezelő
          rendelkezésére bocsátott személyes adatokat tagolt, széles körben
          használt, géppel olvasható formátumban megkapja, és ezeket az adatokat
          egy másik adatkezelőnek továbbítsa.
        </Paragraph>
        <H3>7.7 Tiltakozás joga</H3>
        <Paragraph>
          Az érintett jogosult arra, hogy a saját helyzetével kapcsolatos
          okokból bármikor tiltakozzon személyes adatainak közérdekű vagy az
          adatkezelőre ruházott közhatalmi jogosítvány gyakorlásának keretében
          végzett feladat végrehajtásához szükséges adatkezelés, vagy az
          adatkezelő vagy egy harmadik fél jogos érdekeinek érvényesítéséhez
          szükséges kezelése ellen, ideértve az említett rendelkezéseken alapuló
          profilalkotást is. Tiltakozás esetén az adatkezelő a személyes
          adatokat nem kezelheti tovább, kivéve, ha azt olyan kényszerítő erejű
          jogos okok indokolják, amelyek elsőbbséget élveznek az érintett
          érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi
          igények előterjesztéséhez, érvényesítéséhez vagy védelméhez
          kapcsolódnak.
        </Paragraph>
        <H3>
          7.8 Automatizált döntéshozatal egyedi ügyekben, beleértve a
          profilalkotást
        </H3>
        <Paragraph>
          Az érintett jogosult arra, hogy ne terjedjen ki rá az olyan, kizárólag
          automatizált adatkezelésen - ideértve a profilalkotást is - alapuló
          döntés hatálya, amely rá nézve joghatással járna vagy őt hasonlóképpen
          jelentős mértékben érintené.
        </Paragraph>
        <H3>7.9 Visszavonás joga</H3>
        <Paragraph>
          Az érintett jogosult arra, hogy hozzájárulását bármikor visszavonja.
        </Paragraph>
        <H3>7.10 Bírósághoz fordulás joga</H3>
        <Paragraph>
          Az érintett a jogainak megsértése esetén az adatkezelő ellen
          bírósághoz fordulhat. A bíróság az ügyben soron kívül jár el. 8.11
          Adatvédelmi hatósági eljárás Panasszal a Nemzeti Adatvédelmi és
          Információszabadság Hatóságnál lehet élni: Név: Nemzeti Adatvédelmi és
          Információszabadság Hatóság Székhely: 1125 Budapest, Szilágyi Erzsébet
          fasor 22/C. Levelezési cím: 1530 Budapest, Pf.: 5. Telefon: 0613911400
          Fax: 0613911410 E-mail: ugyfelszolgalat@naih.hu Honlap:
          http://www.naih.hu
        </Paragraph>
        <H2>8. Egyéb rendelkezések</H2>
        <Paragraph>
          E tájékoztatóban fel nem sorolt adatkezelésekről az adat felvételekor
          adunk tájékoztatást. Tájékoztatjuk ügyfeleinket, hogy a bíróság, az
          ügyész, a nyomozó hatóság, a szabálysértési hatóság, a közigazgatási
          hatóság, a Nemzeti Adatvédelmi és Információszabadság Hatóság, a
          Magyar Nemzeti Bank, illetőleg jogszabály felhatalmazása alapján más
          szervek tájékoztatás adása, adatok közlése, átadása, illetőleg iratok
          rendelkezésre bocsátása végett megkereshetik az adatkezelőt.
          Adatkezelő a hatóságok részére - amennyiben a hatóság a pontos célt és
          az adatok körét megjelölte - személyes adatot csak annyit és olyan
          mértékben ad ki, amely a megkeresés céljának megvalósításához
          elengedhetetlenül szükséges.
        </Paragraph>
      </div>
    </RegularContainer>
  );
}
