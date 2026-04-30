"use client";

import React from "react";
import RegularContainer from "./UI/RegularContainer";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Paragraph from "./UI/Typo/Paragraph";
import MainNavButton from "./UI/Buttons/MainNavButton";
import IconBox from "./UI/IconBox";
import InnerColorBox from "./UI/InnerColorBox";
import InfoBlock from "./UI/InfoBlock";
import {
  TbTargetArrow,
  TbUsersGroup,
  TbTrendingUp,
  TbCertificate,
  TbChartBar,
  TbUserCheck,
  TbMessage2,
  TbBrain,
  TbHeartHandshake,
} from "react-icons/tb";

export default function CoachingInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">
        {/* Introduction Section */}
        <div className="flex flex-col gap-8 px-4">
          <H2 classname={"text-[--green]"}>
            A vezetőfejlesztés hatékony eszköze
          </H2>
          <Paragraph>
            A coaching a vezetőfejlesztés egyik leghatékonyabb eszköze, mely
            hosszú távon is fenntartható működést eredményez a vállalatok
            életében.
          </Paragraph>
          <Paragraph>
            A mai szervezetekben a teljesítmény nem kizárólag stratégián múlik -
            hanem azon, hogy a vezetők és a csapatok hogyan működnek együtt a
            mindennapokban.
          </Paragraph>
        </div>

        {/* HR Challenges - Grid layout similar to "Hogyan segíti a kiválasztást" */}
        <div className="flex flex-col gap-8 px-4">
          <H2 classname={"text-[--green]"}>
            HR vezetőként valószínűleg te is találkozol ezekkel a helyzetekkel:
          </H2>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
              <H3 classname={"text-[--green] m-0"}>Szakmai vezetők</H3>
              <Paragraph classname={"m-0"}>
                Mély szakmai ismerettel rendelkező vezetők, akik vezetőként még
                nem működnek hatékonyan.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
              <H3 classname={"text-[--green] m-0"}>Akadozó együttműködés</H3>
              <Paragraph classname={"m-0"}>
                Csapatok, ahol a kommunikáció vagy az együttműködés akadozik.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
              <H3 classname={"text-[--green] m-0"}>Változáskezelés</H3>
              <Paragraph classname={"m-0"}>
                Változások, amelyekhez nincs elég belső erőforrás vagy
                szemlélet.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
              <H3 classname={"text-[--green] m-0"}>Rejtett potenciál</H3>
              <Paragraph classname={"m-0"}>
                Kulcsemberek, akikben több potenciál van, mint amit jelenleg
                kihoznak magukból.
              </Paragraph>
            </div>
          </div>
        </div>

        <InfoBlock
          text={
            "A coaching folyamat ezekre a dilemmákra tartós működésbeli változást hoz eredményül, melynek mérhető üzleti hatása van."
          }
        />

        <div className="flex flex-col gap-4 px-4">
          <Paragraph>
            A CoreHeednél nem „általános” coaching folyamatokban gondolkodunk:
            minden együttműködésünk az üzleti célokból és a szervezeti
            kontextusból indul ki. Szakmai csapatunk ICF minősítéssel rendelkező
            coachokból áll, akik strukturált módszertannal és magas szakmai
            nívón dolgoznak.
          </Paragraph>
        </div>

        {/* Individual Coaching - 1/2 text, 1/2 icons similar to "Mit mér a teszt" */}
        <div className="flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Egyéni és vezetői coaching</H2>
            <Paragraph>
              A vezetők ma már nem csak döntéseket hoznak - komplex helyzeteket
              kezelnek, embereken keresztül érnek el eredményeket és
              folyamatosan változó elvárásoknak felelnek meg.
            </Paragraph>
            <Paragraph classname={"font-semibold"}>
              Az egyéni coaching célja, hogy a vezetők:
            </Paragraph>
            <ul className="flex flex-col gap-3 pl-4">
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  tudatosabban hozzanak döntéseket és priorizáljanak
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  erősebb vezetői jelenléttel működjenek
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  hatékonyabban kezeljék a konfliktusokat és a csapatdinamikát
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  saját működésükre reflektálva fejlődjenek, nem pedig kész
                  megoldások mentén
                </Paragraph>
              </li>
            </ul>
            <Paragraph classname={"text-[--green] font-semibold mt-4"}>
              Eredmény HR szempontból: gyorsabban fejlődő vezetők, kevesebb
              elakadás, stabilabb működés.
            </Paragraph>
            <Paragraph classname={"text-[--green] font-semibold mt-4"}>
              Minden folyamatunk személyre szabott, konkrét üzleti célokhoz
              kötött és a mindennapi működésben hoz fenntartható változást.
            </Paragraph>
          </div>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center">
            <div className="flex lg:flex-row flex-col gap-8 justify-center">
              <IconBox
                title={"Döntéshozatal"}
                icon={
                  <TbTargetArrow className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
              <IconBox
                title={"Vezetői jelenlét"}
                icon={
                  <TbUserCheck className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-8 justify-center">
              <IconBox
                title={"Konfliktuskezelés"}
                icon={
                  <TbMessage2 className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
            </div>
          </div>
        </div>

        {/* Team Coaching - Reversed 1/2 text, 1/2 icons similar to "Megfelelő ember megfelelő helyre" */}
        <div className="flex lg:flex-row-reverse flex-col items-start lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Team coaching</H2>
            <Paragraph>
              A legtöbb szervezeti probléma nem egyéni, hanem rendszerszintű és
              legfeltűnőbben a csapatok működésében jelenik meg.
            </Paragraph>
            <Paragraph classname={"font-semibold"}>
              A team coaching során nem csak az egyénekkel, hanem a csapattal,
              mint rendszerrel dolgozunk és ennek legoptimálisabb működésére
              fókuszálunk:
            </Paragraph>
            <ul className="flex flex-col gap-3 pl-4">
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  tisztázzuk a szerepeket és felelősségeket
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  fejlesztjük a kommunikációt és a bizalmat
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  erősítjük a közös célokra való fókuszt
                </Paragraph>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[--yellow] mt-1">•</span>
                <Paragraph classname={"m-0"}>
                  összehangoljuk az eltérő működési stílusokat
                </Paragraph>
              </li>
            </ul>
            <Paragraph classname={"italic mt-4"}>
              A cél nem csupán egy „jobb hangulatú csapat”, hanem egy magasabb
              teljesítményű, együttműködő egység, ahol az egyéni potenciál
              összeadódik. A nemzetközi gyakorlat is azt mutatja, hogy a
              pszichológiai biztonság, a csapatdinamika és a teljesítmény
              egyidejű fejlesztése hoz valós eredményt a csapatok működésében.
            </Paragraph>
            <Paragraph classname={"font-semibold text-[--green] mt-2"}>
              Eredmény vezetői szempontból: kevesebb belső konfliktus,
              összehangoltabb csapat, magasabb teljesítmény.
            </Paragraph>
          </div>
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center">
            <div className="flex lg:flex-row flex-col gap-8 justify-center">
              <IconBox
                title={"Csapatdinamika"}
                icon={
                  <TbUsersGroup className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
              <IconBox
                title={"Bizalomépítés"}
                icon={
                  <TbHeartHandshake className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-8 justify-center">
              <IconBox
                title={"Közös fókusz"}
                icon={
                  <TbTrendingUp className="lg:min-w-20 min-w-10 h-auto text-[--yellow]" />
                }
              />
            </div>
          </div>
        </div>

        {/* Why CoreHeed? - Numbered bordered boxes similar to "Miért éri meg?" */}
        <div className="flex flex-col gap-8 px-4">
          <H2 classname={"text-[--green]"}>Miért a CoreHeed?</H2>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex items-center gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl text-[--green] font-bold">
                <TbCertificate />
              </div>
              <Paragraph classname={"m-0 font-medium"}>
                ICF minősítésű, tapasztalt coachok
              </Paragraph>
            </div>

            <div className="flex items-center gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl text-[--green] font-bold">
                <TbBrain />
              </div>
              <Paragraph classname={"m-0 font-medium"}>
                Business coach csapatunk az ICF standardjai mentén, ennek
                irányelveit és etikai szempontjait figyelembe véve, rendszeres
                szupervízió mellett dolgoznak
              </Paragraph>
            </div>

            <div className="flex items-center gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl text-[--green] font-bold">
                <TbTargetArrow />
              </div>
              <Paragraph classname={"m-0 font-medium"}>
                Üzleti fókuszú, nem „wellbeing” jellegű coaching
              </Paragraph>
            </div>

            <div className="flex items-center gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl text-[--green] font-bold">
                <TbUsersGroup />
              </div>
              <Paragraph classname={"m-0 font-medium"}>
                Szervezeti kontextusra szabott folyamatok
              </Paragraph>
            </div>

            <div className="flex items-center gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md lg:col-span-2">
              <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl text-[--green] font-bold">
                <TbChartBar />
              </div>
              <Paragraph classname={"m-0 font-medium"}>
                Magas ügyfél-elégedettség és mérhető hatás
              </Paragraph>
            </div>
          </div>

          <Paragraph
            classname={"font-semibold text-[--green] text-center text-lg mt-6"}
          >
            Nem sablonmegoldásokat hozunk - hanem olyan fejlesztési
            folyamatokat, amelyek valóban beépülnek a szervezet működésébe.
          </Paragraph>
        </div>

        {/* CTA Section */}
        <InnerColorBox
          title={"Lépjünk tovább"}
          titlecolor={"text-white"}
          text2={""}
          textcolor2={"text-white"}
          bgcolor={"bg-[--green]"}
        >
          <Paragraph classname={"text-white text-center"}>
            Ha szeretnéd feltárni, hol tud a coaching valódi üzleti hatást hozni
            a szervezetedben, vedd fel velünk a kapcsolatot!
          </Paragraph>
          <MainNavButton
            link={"/kapcsolat"}
            text={"Kapcsolatfelvétel"}
            classname={"self-center"}
          />
        </InnerColorBox>
      </div>
    </RegularContainer>
  );
}
