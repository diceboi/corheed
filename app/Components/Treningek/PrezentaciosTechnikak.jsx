import React from "react";
import RegularContainer from "../UI/RegularContainer";
import H2 from "../UI/Typo/H2";
import H3 from "../UI/Typo/H3";
import Label from "../UI/Typo/Label";
import Paragraph from "../UI/Typo/Paragraph";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { TbUsers, TbBulb, TbChartLine, TbTarget } from "react-icons/tb";

export default function PrezentaciosTechnikak() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-16 gap-8 px-4">
        
        {/* EMPLOYEE FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Gyakorlati know-how és ismeretátadó tréning
          </H3>
          <Paragraph>
            A jó prezentáció nem csupán információátadás, hanem figyelemfelkeltés, érthetőség és meggyőzés 
            egyszerre. Hiába a szakmai tudás, ha az üzenet nem jut el hatékonyan a hallgatósághoz. A modern 
            prezentációs technikák és az AI-alapú eszközök lehetővé teszik, hogy gyorsabban, vizuálisan erősebben 
            és strukturáltabban adjuk át mondanivalónkat.
          </Paragraph>
          <Paragraph>
            Ez a tréning abban segít, hogy a résztvevők magabiztosabban és magasabb színvonalon prezentáljanak, 
            elsajátíthatják, hogyan tudnak unalmasnak tűnő adatokból is érdekes és emlékezetes előadást varázsolni.
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
                megismerik a hatékony prezentáció felépítésének alapelveit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik előadói és vizuális kommunikációs készségeiket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják, hogyan strukturálják világosan az üzeneteiket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak az időtakarékos és látványos prezentációk elkészítéséhez
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                rövid betekintést kapnak a storytelling eszköz használatába
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
                szakértőknek és előadóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                vezetőknek és projektmenedzsereknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                értékesítési és marketing területen dolgozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindenkinek, aki rendszeresen prezentál
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
                Magabiztosabb előadásmód, strukturáltabb üzenetek és gyorsabban elkészíthető, vizuálisan erősebb prezentációk.
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
              Vezetői kommunikációt támogató program
            </Paragraph>
          </div>
          <div className="flex-1 h-px bg-[--mint]"></div>
        </div>

        {/* LEADERSHIP FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Vezetői kommunikációt támogató, ismeretátadó tréning
          </H3>
          <Paragraph>
            A vezetői prezentációk nem csupán tájékoztatnak, hanem irányt mutatnak, döntéseket támogatnak és 
            elköteleződést építenek. A vezetők számára különösen fontos, hogy rövid idő alatt, világosan és 
            meggyőzően tudják átadni üzeneteiket – akár vezetői értekezleten, akár külső partnerek előtt.
          </Paragraph>
          <Paragraph>
            Ez a vezetői fókuszú tréning támogatja a résztvevőket abban, hogy stratégiailag felépített, hatásos 
            prezentációkkal erősítsék vezetői jelenlétüket.
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
                fejlesztik vezetői prezentációs és előadói készségeiket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják, hogyan támogassák döntéseiket világos vizuális üzenetekkel
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak a rövid, fókuszált prezentációk készítéséhez
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                erősítik hiteles és meggyőző vezetői fellépésüket
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
                üzleti döntéshozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindazoknak, akik rendszeresen prezentálnak vezetői szerepben
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
                Magabiztosabb fellépés, hatékonyabb döntéstámogatás, meggyőző előadás és időmegtakarítás a 
                prezentációkészítés során.
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
