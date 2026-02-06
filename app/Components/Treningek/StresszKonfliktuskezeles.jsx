import React from "react";
import RegularContainer from "../UI/RegularContainer";
import H2 from "../UI/Typo/H2";
import H3 from "../UI/Typo/H3";
import Label from "../UI/Typo/Label";
import Paragraph from "../UI/Typo/Paragraph";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { TbUsers, TbBulb, TbChartLine, TbTarget } from "react-icons/tb";

export default function StresszKonfliktuskezeles() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-16 gap-8 px-4">
        
        {/* EMPLOYEE FOCUS - Introduction Section */}
        <div className="flex flex-col gap-6">
          <H3 classname={'text-[--green] italic font-semibold'}>
            Önismereti, készségfejlesztő tréning
          </H3>
          <Paragraph>
            A munkahelyi stressz és a kezeletlen konfliktusok hosszú távon rontják a teljesítményt, 
            csökkentik az együttműködést és növelik a kiégés kockázatát. A stressz önmagában nem ellenség – 
            megfelelő eszközökkel erőforrássá alakítható át, amely támogatja a hatékony problémamegoldást 
            és a tudatos döntéshozatalt.
          </Paragraph>
          <Paragraph>
            Ez a tréning abban segít, hogy a résztvevők felismerjék saját stresszreakcióikat, és elsajátítsák 
            a konfliktusok konstruktív, megoldásfókuszú kezeléséhez szükséges készségeket.
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
                megértik a stressz működését és hatását a viselkedésre
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                felismerik saját stressz- és konfliktuskezelési mintáikat
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják a feszültség csökkentésének és szabályozásának módszereit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik érzelmi tudatosságukat és önszabályozási készségeiket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                gyakorolják a konfliktushelyzetek hatékony, asszertív kezelését
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
                nagy terhelésnek kitett munkakörökben dolgozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindenkinek, aki szeretné tudatosabban kezelni a stresszt és a konfliktusokat
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
                Nagyobb belső egyensúly, jobb stressztűrés, konstruktívabb konfliktuskezelés és hatékonyabb együttműködés.
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
            A vezetők fokozott stressznek vannak kitéve, miközben meghatározó szerepük van a munkahelyi légkör 
            és konfliktuskezelési kultúra alakításában. A vezető stresszkezelési módja közvetlen hatással van 
            a csapat működésére, motivációjára és teljesítményére.
          </Paragraph>
          <Paragraph>
            Ez a vezetői fókuszú tréning támogatja a résztvevőket abban, hogy tudatosan kezeljék saját terhelésüket, 
            és magabiztosan, megoldásorientáltan vezessék a konfliktusos helyzeteket.
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
                mélyítik önismeretüket a stresszhelyzetekben adott reakcióikról
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                megtanulják felismerni a túlterheltség és a kiégés korai jeleit
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                eszközöket kapnak a feszültség csökkentésére és a fókusz megtartására
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                fejlesztik konfliktuskezelési és döntéshozatali készségeiket
              </Paragraph>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-[--green] mt-1 flex-shrink-0">
                <TbBulb size={24} />
              </span>
              <Paragraph classname={'m-0'}>
                erősítik stabil, hiteles vezetői jelenlétüket nehéz helyzetekben is
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
                HR-rel együttműködő döntéshozóknak
              </Paragraph>
            </div>
            <div className="flex gap-3 items-center bg-white border-2 border-[--lightgreen] rounded-2xl p-4">
              <TbUsers className="text-[--yellow] flex-shrink-0" size={32} />
              <Paragraph classname={'m-0 font-semibold text-[--green]'}>
                mindazoknak, akik nagy felelősséggel járó szerepben dolgoznak
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
                Kiegyensúlyozottabb vezetői működés, hatékonyabb konfliktuskezelés, csökkenő feszültség és 
                stabilabb csapatteljesítmény.
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
