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
import KeszsegfejlesztesTile from "./UI/KeszsegfejlesztesTile";
import { TbMessagesOff, TbMoodPuzzled,TbHierarchy3 } from "react-icons/tb";
import InfoBlock from "./UI/InfoBlock";
import WeThinkBlock from "./UI/WeThinkBlock";

export default function GeneraciovaltasInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">

        <WeThinkBlock>
            <H3 classname={'text-[--green]'}>Generációváltás nincs utánpótlás nevelés nélkül, ahogy a sportban nevezik. </H3>
            <Paragraph classname={'text-center'}>Egy sikeres, gördülékeny generációváltást mindig hosszú évek előkészülete és előre átgondolt stratégia kialakítása előz meg. Ez nem az a terület, amit egyik napról a másikra le lehet bonyolítani – legalábbis abban az esetben, ha az értékmegőrzés és hosszú évek tapasztalatának és tudásának átörökítése a cél. A generációváltás egy igen komplex folyamat, melybe ugyanúgy belejátszanak a személyes, érzelmi tényezők, mint a gyakorlati, kivitelezéssel kapcsolatos szempontok.</Paragraph>
        </WeThinkBlock>

        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Elöregedő társadalom</H2>
            <Paragraph>
            Magyarországon és Európa elöregedő társadalmaiban egyre inkább sürgetővé és elkerülhetetlenné válik az a kérdés, hogy a korábbi, idősödő generációk, milyen módon adják át a stafétabotot az utánuk következőknek? Egyáltalán átadják-e vagy a végsőkig ragaszkodnak hozzájuk?
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/generaciovaltas2.webp"}
              fill
              alt="Munkaköri rátermettség"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className='flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4'>
            <div className='flex flex-col gap-4 lg:w-1/2'>
            <H2 classname={'text-[--green]'}>A felkészületlenség következményei</H2>
            <Paragraph>Felmérések szerint a cégek csupán 20%-nál készülnek tudatosan a generációváltásra, amit másik oldalról szintén alátámaszt egy adat, mely szerint a vállalkozások 70 - 80%-a nem éli túl a generációváltást, azaz az alapító halálát követő első egy-két éven belül csődbe mennek.</Paragraph>
            <Paragraph>Azonban tudatos felkészüléssel és előre tervezéssel mindez elkerülhető. Egyáltalán nem szükséges, hogy hosszú évtizedek értékes munkája és tapasztalata semmivé legyen. Bár Magyarországon még kevés a jógyakorlat erre, mégis vannak olyan vállalkozások, melyek már nem is egy generációváltást éltek meg és vittek át sikeresen. Ha a generációváltással járó jogi, szervezeti és érzelmi vonatkozásokkal tisztában vagyunk és előre felkészülünk rá, eredményesen átörökíthető az addig megszerzett tudás és tapasztalat.</Paragraph>
            </div>
            <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
            <div className='flex flex-col items-end justify-center relative w-full h-[132px] bg-[--green] rounded-3xl p-8 mt-28'>
                <Paragraph classname={'font-bold text-center text-white w-[80%] z-10'}>Generációváltás után csődbe ment cégek</Paragraph>
                <p className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 lg:left-3/5 left-1/2 font-bold lg:text-8xl text-8xl opacity-15'>80%</p>
                <div className='absolute top-0 left-0 flex flex-col items-end justify-center h-[116px] w-[20%] bg-[--mint] rounded-3xl p-8'>
                    <Paragraph classname={'absolute -top-20 lg:left-1/2 left-0 lg:-translate-x-1/2 font-bold text-center'}>Generációváltást túlélő cégek</Paragraph>
                    <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[--green] w-[2px] h-8'></div>
                    <p className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-5xl text-3xl opacity-15'>20%</p>
                </div>
            </div>
            </div>
        </div>

        <InnerColorBox title={'Generációváltás program'} titlecolor={'text-white'} bgcolor={'bg-[--green]'}>
             
            <H3 classname={'text-white text-center'}>Mi ehhez nyújtunk szakmai támogatást. Segítünk a tervezésben, a generációváltás stratégiájának kidolgozásában, támogatunk a megfelelő megoldás megtalálásában és abban is, hogy az érintettek érzelmileg is felkészüljenek a változásra.</H3>

            <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
        </InnerColorBox>

      </div>
    </RegularContainer>
  );
}
