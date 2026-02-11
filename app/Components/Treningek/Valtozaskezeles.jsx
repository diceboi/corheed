import React from "react";
import RegularContainer from "../UI/RegularContainer";
import H2 from "../UI/Typo/H2";
import H3 from "../UI/Typo/H3";
import Label from "../UI/Typo/Label";
import Paragraph from "../UI/Typo/Paragraph";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { TbUsers, TbBulb, TbChartLine, TbTarget } from "react-icons/tb";

export default function Valtozaskezeles() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-16 gap-8 px-4">
        
        {/* EMPLOYEE FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Önismereti, készségfejlesztő tréning
          </H3>
          <Paragraph>
            A változás a szervezeti működés természetes része, mégis gyakran bizonytalanságot, ellenállást 
            és stresszt vált ki. A sikeres alkalmazkodás kulcsa nem csupán a folyamatok átalakítása, hanem 
            az emberek lelki rugalmasságának és megküzdési képességének fejlesztése is.
          </Paragraph>
          <Paragraph>
            Ez a tréning abban segít, hogy a résztvevők tudatosabban reagáljanak a változásokra, és olyan 
            belső erőforrásokat alakítsanak ki, amelyek támogatják őket az új helyzetekhez való alkalmazkodásban.
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
                megértik a változások pszichológiai hatásait
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                felismerik saját reakcióikat és működési mintáikat változáshelyzetekben
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik rezilienciájukat, lelki állóképességüket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják kezelni a bizonytalanságot és a stresszt
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                erősítik megoldásfókuszú és rugalmas gondolkodásukat
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
                munkatársaknak és csapatoknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                vezetőknek és szakértőknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                változással, átalakulással érintett szervezeteknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindenkinek, aki szeretne magabiztosabban alkalmazkodni az új helyzetekhez
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
                Nagyobb alkalmazkodóképesség, erősebb belső stabilitás és hatékonyabb működés a változó környezetben.
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
            A vezetők kulcsszerepet töltenek be a változások sikeres megvalósításában. A vezetői hozzáállás, 
            kommunikáció és érzelmi stabilitás közvetlen hatással van a csapat rezilienciájára és a változások 
            elfogadására.
          </Paragraph>
          <Paragraph>
            Ez a vezetői fókuszú tréning támogatja a résztvevőket abban, hogy biztonságot adó, stabil vezetői 
            jelenléttel kísérjék végig a csapatukat az átalakulásokon.
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
                mélyítik önismeretüket a változáshelyzetekben
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megértik a csapatok tipikus reakcióit az átalakulások során
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik saját és csapatuk rezilienciáját
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak az ellenállás kezelésére és az elköteleződés erősítésére
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                erősítik hiteles, támogató vezetői működésüket
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
                csapat- és projektvezetőknek
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                változásmenedzsmentben érintett döntéshozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindazoknak, akik átalakulási folyamatokat vezetnek
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
                Nagyobb elfogadás, csökkenő ellenállás, stabilabb csapatműködés és sikeresebb változáskezelés.
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
