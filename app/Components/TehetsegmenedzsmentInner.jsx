'use client'

import React from "react";
import RegularContainer from "./UI/RegularContainer";
import SecondaryHero from "./UI/SecondaryHero";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Paragraph from "./UI/Typo/Paragraph";
import Label from "./UI/Typo/Label";
import Image from "next/image";
import {
    TbUserStar,
    TbBook,
    TbRoad,
    TbInfoSquareRounded,
    TbPercentage100
} from "react-icons/tb";
import MainNavButton from "./UI/Buttons/MainNavButton";
import IconBox from "./UI/IconBox";
import InnerColorBox from "./UI/InnerColorBox";
import SzolgaltatasokTile from "./UI/SzolgaltatasokTile";
import { TbMessagesOff, TbMoodPuzzled,TbHierarchy3 } from "react-icons/tb";
import InfoBlock from "./UI/InfoBlock";
import WeThinkBlock from "./UI/WeThinkBlock";

export default function TehetsegmenedzsmentInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">
        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>A piaci helyzet</H2>
            <Paragraph>
            A jelenlegi piaci környezetben egyre jobban kiéleződik a tehetséges fiatalokért folytatott küzdelem a vállalatok között. Nem elég azonban csupán bevonzani ezeket a talenteket, hanem az egyéni elköteleződésük kialakítása, valamint a hosszútávú megtartásuk is éppannyira fontos és szükséges feladat.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/tehetsegmenedzsment2.webp"}
              fill
              alt="A piaci helyzet"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>A program célja</H2>
            <Paragraph>
            Tehetségmenedzsment programjaink által segítünk megtalálni azokat a tehetséges fiatalokat, akik kulcsfontosságú szerepet játszhatnak a szervezet jövőjében. Célzott fejlesztésükkel növelhetjük az elkötelezettségüket és kifejezhetjük fontosságukat a vállalatnál azáltal, hogy időt, pénzt és energiát fektetünk továbbképzésésükbe, illetve olyan elérhető karrierutat mutatunk nekik, amiben hosszútávon is szívesen benne maradnak.
            </Paragraph>
          </div>
          <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
            <div className='flex lg:flex-row flex-col gap-8 justify-center'>
            <IconBox title={'Tehetség és kiválasztás'} icon={<TbUserStar className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
            <IconBox title={'Fejlesztés és tanulás'} icon={<TbBook className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
            <IconBox title={'Karrierút és elköteleződés'} icon={<TbRoad className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
            </div>
            </div>
        </div>

        <InfoBlock text={'A Talent programok segítségével a fiatalok képessé válnak nagyobb felelősségvállalásra, a projektek önálló levezetésére, vagy egy csapat összefogására. Könnyedén prezentálják és kifejezik gondolataikat, innovatív ötletekkel állnak elő, amivel aktívan hozzájárulnak a vállalat versenyképességének növeléséhez.'} />

        <WeThinkBlock>
          <H3 classname={'text-center text-[--green] z-10'}>
            Hiszünk abban, hogy mindenkiben ott van a tehetség és célzott fejlesztéssel felszínre hozhatók azok a képességek, amik egy-egy területen sikeresebbé teszik őket másoknál.
          </H3>
          <Paragraph classname={'text-center z-10'}>
            A fiatal generáció számára kifejezetten fontos a folyamatos fejlődés lehetősége és a tervezhető karrierút.
          </Paragraph>
        </WeThinkBlock>

        <InnerColorBox title={'Talent programjaink'} titlecolor={'text-white'} bgcolor={'bg-[--green]'}>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-row items-start gap-2">
              <TbPercentage100 className="text-[--mint] min-w-4 h-auto mt-1"/>
              <Paragraph classname={'text-white w-full'}>Talent programjaink során kiválasztjuk azokat a tehetséges fiatalokat, akikbe érdemes a vállalatnak invesztálnia, mivel sokszorosan visszahozzák a beléjük fektetett erőforrásokat és várhatóan nagymértékben kamatoztatni fogják tudásukat a szervezetben.
              </Paragraph>
            </div>

            <div className="flex flex-row items-start gap-2">
              <TbPercentage100 className="text-[--mint] min-w-4 h-auto mt-1"/>
              <Paragraph classname={'text-white w-full'}>A programban felmérjük a talentek jelenlegi tudását, motivációs tényezőit, fejlesztendő területüket, illetve azokat az erősségeiket, melyekre a jövőben érdemes építeni. Ezt követően célzottan támogatjuk őket, különböző tréningekkel, mentoringgal, coachinggal és egyéb fejlesztő eszközökkel, csoportosan és egyénileg is.
              </Paragraph>
            </div>

            <div className="flex flex-row items-start gap-2">
              <TbPercentage100 className="text-[--mint] min-w-4 h-auto mt-1"/>
              <Paragraph classname={'text-white w-full'}>A talent programoknak kiemelten fontos szerepük van az utánpótlás nevelésben, az elköteleződés kialakulásában és a megtartásban.
              </Paragraph>
            </div>

          </div>
              
            <H3 classname={'text-white text-center'}>Vonzd be a tehetségeket, fejleszd őket tovább, kamatoztasd a tudásukat, és növeld velük vállalatod piaci versenyképességét!</H3>

            <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
        </InnerColorBox>

      </div>
    </RegularContainer>
  );
}
