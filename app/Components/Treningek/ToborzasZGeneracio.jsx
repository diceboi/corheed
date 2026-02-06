import React from "react";
import RegularContainer from "../UI/RegularContainer";
import H2 from "../UI/Typo/H2";
import H3 from "../UI/Typo/H3";
import Label from "../UI/Typo/Label";
import Paragraph from "../UI/Typo/Paragraph";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { TbUsers, TbBulb, TbChartLine, TbTarget } from "react-icons/tb";

export default function ToborzasZGeneracio() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-16 gap-8 px-4">
        
        {/* EMPLOYEE FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Gyakorlati know-how és ismeretátadó tréning
          </H3>
          <Paragraph>
            A Z generáció belépése a munkaerőpiacra alapjaiban alakítja át a toborzási folyamatokat. 
            A fiatal munkavállalók más szempontok alapján döntenek, gyorsan váltanak, és tudatosan keresik 
            azokat a munkahelyeket, amelyek értékrendjükhöz, életstílusukhoz és jövőképükhöz illeszkednek.
          </Paragraph>
          <Paragraph>
            Ez a tréning abban segít, hogy a résztvevők megértsék, mi tesz egy munkáltatót vonzóvá a Z generáció 
            szemében, és hogyan lehet hatékonyan megszólítani őket a teljes toborzási folyamat során.
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
                megismerik a Z generáció munkaerőpiaci elvárásait és motivációit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                átlátják, milyen vállalati értékek és üzenetek hitelesek számukra
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                felismerik, hogyan választanak a hasonló álláslehetőségek közül
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                gyakorlati útmutatót kapnak a hirdetések, interjúk és jelöltkommunikáció terén
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak a fiatal jelöltek bevonzására és megszólítására
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
                HR és toborzási szakembereknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                vezetőknek, akik részt vesznek a kiválasztásban
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                employer brandinggel foglalkozó kollégáknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindenkinek, aki fiatal munkavállalókat szeretne megszólítani
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
                Versenyképesebb munkáltatói márka, hatékonyabb toborzás és erősebben elköteleződő fiatal munkavállalók.
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
              Stratégiai szemléletű program vezetőknek
            </Paragraph>
          </div>
          <div className="flex-1 h-px bg-[--mint]"></div>
        </div>

        {/* LEADERSHIP FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Stratégiai szemléletű, ismeretátadó tréning vezetőknek
          </H3>
          <Paragraph>
            A Z generáció számára a toborzás nem csupán álláskeresés, hanem értékválasztás. A vezetők szerepe 
            meghatározó abban, hogy a szervezet hitelesen tudja képviselni azt, amit kínál – és amit el is vár.
          </Paragraph>
          <Paragraph>
            Ez a vezetői fókuszú tréning segít megérteni, hogyan formálható a szervezeti kultúra és vezetői 
            működés úgy, hogy az vonzó és megtartó legyen a fiatal generáció számára.
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
                átfogó képet kapnak a Z generáció döntési mechanizmusairól
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megértik a vezetői hitelesség szerepét a toborzásban
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                felismerik, hogyan hat a szervezeti kultúra a fiatal jelöltek választására
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                iránymutatást kapnak a kiválasztási folyamat vezetői szerepeiről
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak a hosszú távú elköteleződés támogatásához
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
                HR-rel együttműködő döntéshozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                employer brandingért felelős vezetőknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindazoknak, akik fiatal tehetségek bevonzásában érdekeltek
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
                Hitelesebb munkáltatói kép, tudatosabb toborzási döntések és erősebb pozíció a Z generációs munkaerőpiacon.
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
