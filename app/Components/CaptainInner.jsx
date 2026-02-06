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
import Link from "next/link";
import {
    TbUserStar,
    TbBook,
    TbRoad,
    TbInfoSquareRounded,
    TbPercentage100,
    TbBuildingSkyscraper,
    TbUsersGroup,
    TbChartBarPopular,
    TbMoodSearch,
    TbChartDonut4,
    TbAi
} from "react-icons/tb";
import MainNavButton from "./UI/Buttons/MainNavButton";
import IconBox from "./UI/IconBox";
import InnerColorBox from "./UI/InnerColorBox";
import SzolgaltatasokTile from "./UI/SzolgaltatasokTile";
import { TbMessagesOff, TbMoodPuzzled,TbHierarchy3 } from "react-icons/tb";
import InfoBlock from "./UI/InfoBlock";
import WeThinkBlock from "./UI/WeThinkBlock";

export default function CaptainInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">

      <InfoBlock icon={<TbInfoSquareRounded className='lg:min-w-16 min-w-10 h-auto text-[--green]' />} text={'Alkalmas a jelenlegi munkahelyi kompetenciák feltérképezésére, de a potenciálok, (pl.: vezetői potenciál) mérésére is használható: vezetők, munkatársak, valamint pályakezdők számára egyaránt.'} />

        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Kompetencia Profil</H2>
            <Paragraph>
            A CAPTain kompetenciateszt 38 kompetencia mentén jellemzi az értékelt személy munkahelyi viselkedését 3 riportban - egy 11 oldalas leíró, egy kombinációs és egy táblázatos eredményben. Méri az önismeretet és a munkakörhöz való illeszkedés mértékét is.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/captain-teszt2.webp"}
              fill
              alt="Munkaköri rátermettség"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className='flex lg:flex-row flex-col lg:gap-16 gap-8 px-4'>
            <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Csoportos mérések</H2>
            </div>
            <ul className='grid grid-cols-1 lg:gap-8 gap-4 list-disc marker:text-[--mint] marker:text-3xl pl-8 lg:w-1/2 w-full'>
                <Paragraph classname={'-ml-8'}>A CAPTain tesztek és kérdőívek hatékonyan alkalmazhatóak nagyobb csoportok (teamek, vezetői szintek vagy az egész szervezet) mérése esetén is, így támogatva a különböző</Paragraph>
                <li>
                    <H3>szervezetfejlesztési projekteket</H3>
                </li>
                <li>
                    <H3>vezetői fejlesztő-programokat</H3>
                </li>
                <li>
                    <H3>talent programokat</H3>
                </li>
                <li>
                    <H3>tréningigény és tréninghatékonyság méréseket</H3>
                </li>
                <li>
                    <H3>team coachingot (a fejlesztés elején és a folyamat végén)</H3>
                </li>
                <li>
                    <H3>szervezeti változáskezelési programokat</H3>
                </li>
                <li>
                    <H3>munkaköri leírások pontosítását megcélzó projekteket
                    </H3>
                </li>
            </ul>
        </div>

        <InnerColorBox title={'CAPTain kompetenciateszt'} titlecolor={'text-white'} bgcolor={'bg-[--green]'}>
             
            <H3 classname={'text-white text-center'}>A CAPTain kompetenciateszt hatékony támogatást nyújt a kiválasztás, vezetőfejlesztés, utánpótlástervezés, szervezetfejlesztés és csapatműködés fejlesztése terén, pontos képet adva az egyéni és csoportos kompetenciákról, valamint a fejlődési lehetőségekről. </H3>

            <div className="flex flex-col gap-4">
               <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </div>
            
        </InnerColorBox>

      </div>
    </RegularContainer>
  );
}
