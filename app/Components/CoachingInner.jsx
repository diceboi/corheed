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
    TbPercentage100,
    TbBuildingSkyscraper,
    TbUsersGroup
} from "react-icons/tb";
import MainNavButton from "./UI/Buttons/MainNavButton";
import IconBox from "./UI/IconBox";
import InnerColorBox from "./UI/InnerColorBox";
import SzolgaltatasokTile from "./UI/SzolgaltatasokTile";
import { TbMessagesOff, TbMoodPuzzled,TbHierarchy3 } from "react-icons/tb";
import InfoBlock from "./UI/InfoBlock";
import WeThinkBlock from "./UI/WeThinkBlock";

export default function CoachingInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">

      <InfoBlock icon={<TbInfoSquareRounded className='lg:min-w-16 min-w-10 h-auto text-[--green]' />} text={'Az üzleti világban a vezetők számára a business coaching, illetve csapatok részére a team coaching, már hosszú évek óta jól működő, eredményes módszer, legyen szó akár személyes fejlődésről, akár a csapatok harmonikusabb együttműködésről. A coaching a vezetőfejlesztés egyik leghatékonyabb eszköze, mely hosszú távon is fenntartható működést eredményez a vállalatok életében.'} />

        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Egyéni coaching</H2>
            <Paragraph>
            Az egyéni coaching folyamat során gyakran valamilyen készség, képesség elsajátításán, fejlesztésén dolgozunk, illetve valamilyen személyes dilemma vagy nehezebb munkahelyi helyzet kezelésében támogatjuk ügyfeleinket. A sikeres business coaching folyamat végére az ügyfél közelebb kerül a saját megoldásai megtalálásához, a döntéshozatali képessége megerősítéséhez és képessé válik arra is, hogy belső erőforrásait mozgásba hozza.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/coaching2.webp"}
              fill
              alt="Egyéni coaching"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Team coaching</H2>
            <Paragraph>
            A team coaching leginkább a csapaton belüli elakadások feloldását, illetve a szervezeti konfliktusok feldolgozását, kezelését szolgálja. A team coaching olyan kreatív, szakmai támogatás, mely valódi szemléletformálást, gondolkodásbeli változást és igazi transzformációt hozhat egy csapat működésébe.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/coaching3.webp"}
              fill
              alt="Team coaching"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <InnerColorBox title={'Coaching programjaink'} titlecolor={'text-white'} bgcolor={'bg-[--green]'}>
             
            <H3 classname={'text-white text-center'}>Business coach csapatunk tagjai munkájukat professzionális szinten, az International Coaching Federation (ICF) standardjai mentén, ennek irányelveit és etikai szempontjait figyelembe véve, rendszeres szupervízió mellett végzik.</H3>

            <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
        </InnerColorBox>

      </div>
    </RegularContainer>
  );
}
