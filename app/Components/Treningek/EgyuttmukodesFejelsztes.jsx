import React from "react";
import RegularContainer from "../UI/RegularContainer";
import H2 from "../UI/Typo/H2";
import H3 from "../UI/Typo/H3";
import Label from "../UI/Typo/Label";
import Paragraph from "../UI/Typo/Paragraph";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { TbUsers, TbBulb, TbChartLine, TbTarget } from "react-icons/tb";

export default function EgyuttmukodesFejelsztes() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-16 gap-8 px-4">
        
        {/* EMPLOYEE FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Önismereti, készségfejlesztő tréning
          </H3>
          <Paragraph>
            A csapatok teljesítményét nemcsak az egyéni kompetenciák határozzák meg, hanem az is, hogy a tagok 
            hogyan kommunikálnak, hoznak döntéseket és koordinálják a feladataikat közös erővel. A hatékony 
            együttműködés kulcsa a világos szerepek, a strukturált folyamatok, aktív figyelem és a konstruktív visszajelzés.
          </Paragraph>
          <Paragraph>
            A tréning célja, hogy a résztvevők konkrét módszereket és gyakorlatokat sajátítsanak el a csapatdinamika 
            javításának érdekében.
          </Paragraph>
        </div>

        {/* What Participants Learn */}
        <div className="flex flex-col gap-6 bg-[--lightgreen] rounded-3xl p-8 lg:p-12">
          <H2 classname={'text-[--green]'}>A tréningen résztvevők:</H2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megismerik a team role modellek (pl. Belbin) használatát a feladatok optimalizálásához
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                gyakorolják az aktív hallgatást és a strukturált visszajelzést a napi munkában
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják a konfliktusok korai jeleinek felismerését és a konstruktív beavatkozás módszereit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                elsajátítják a közös döntéshozatal agilis és vizualizált módszereit (pl. Kanban, Lean alapelvek alkalmazása a csapatmunkában)
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik a feladatmegosztás és priorizálás készségét a hatékony együttműködés érdekében
              </Paragraph>
            </li>
          </ul>
        </div>

        {/* Target Audience */}
        <div className="flex flex-col gap-6">
          <H2 classname={'text-[--green]'}>Kiknek ajánljuk?</H2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                projekt- és munkacsoportoknak, ahol a feladatok komplexek és egymásra épülnek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                csapatvezetőknek, akik szeretnék tudatosan fejleszteni a csapatdinamikát
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                szakértőknek, akik gyakran dolgoznak többféle szakterületet átfogó projektekben
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-6 bg-[--green] rounded-3xl p-8 lg:p-12">
          <div className="flex gap-4 items-start">
            <TbChartLine className="text-[--yellow] flex-shrink-0 mt-1" size={32} />
            <div className="flex flex-col gap-4">
              <H3 classname={'text-white m-0'}>Eredmény:</H3>
              <Paragraph classname={'text-white m-0'}>
                Strukturáltabb munkafolyamatok, kevesebb félreértés, gyorsabb döntéshozatal, növekvő csapathatékonyság.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="flex items-center gap-4 py-8">
          <div className="flex-1 h-px bg-[--mint]"></div>
          <div className="flex flex-col items-center gap-2">
            <H3 classname={'text-[--green] text-center m-0'}>Vezetői fókusz</H3>
            <Paragraph classname={'text-[--green] text-center italic m-0'}>
              Vezetői önismereti és készségfejlesztő program
            </Paragraph>
          </div>
          <div className="flex-1 h-px bg-[--mint]"></div>
        </div>

        {/* LEADERSHIP FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Vezetői önismereti és készségfejlesztő tréning
          </H3>
          <Paragraph>
            A vezetők kulcsszerepet játszanak a csapat együttműködési kultúrájának alakításában. A hatékony vezető 
            képes szabályozni a csapatdinamikát, kezelni a konfliktusokat, és elősegíteni az együttműködést a 
            feladatok sikeres teljesítésének érdekében.
          </Paragraph>
          <Paragraph>
            A tréning során a vezetők gyakorlati eszközöket kapnak a napi eredményes munkavégzéshez.
          </Paragraph>
        </div>

        {/* What Leaders Learn */}
        <div className="flex flex-col gap-6 bg-[--lightgreen] rounded-3xl p-8 lg:p-12">
          <H2 classname={'text-[--green]'}>A tréning során a vezetők:</H2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                feltérképezik a csapaton belüli működési stílusokat és a tagok erősségeit a feladatokhoz illesztik
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                gyakorolják a strukturált visszajelzés, coaching és facilitáció technikáit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják a konfliktuskezelés modellezett szituációkban történő alkalmazását
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik a prioritás- és erőforrás-menedzsment készséget a csapat hatékony koordinálásához
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak a motiváció és elköteleződés fenntartására változó környezetben is
              </Paragraph>
            </li>
          </ul>
        </div>

        {/* Leadership Target Audience */}
        <div className="flex flex-col gap-6">
          <H2 classname={'text-[--green]'}>Kiknek ajánljuk?</H2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                felső- és középvezetőknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                projekt- és csapatvezetőknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                HR-rel együttműködő vezetőknek, akik a csapat teljesítményét szeretnék maximalizálni
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Leadership Results */}
        <div className="flex flex-col gap-6 bg-[--green] rounded-3xl p-8 lg:p-12">
          <div className="flex gap-4 items-start">
            <TbTarget className="text-[--yellow] flex-shrink-0 mt-1" size={32} />
            <div className="flex flex-col gap-4">
              <H3 classname={'text-white m-0'}>Vezetői eredmény:</H3>
              <Paragraph classname={'text-white m-0'}>
                Gyakorlatias vezetői eszköztár a csapatdinamika szabályozásához, gyorsabb és megalapozottabb 
                döntéshozatal és reziliens alkalmazkodás a változásokhoz.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 py-8">
          <H2 classname={'text-[--green] text-center'}>
            Érdekel ez a tréning?
          </H2>
          <MainNavButton 
            link={'/ajanlatkeres'} 
            text={'Ajánlatkérés'} 
            classname={'min-w-fit'} 
          />
        </div>

      </div>
    </RegularContainer>
  );
}
