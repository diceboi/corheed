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

export default function ProfileXTInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">

      <InfoBlock icon={<TbInfoSquareRounded className='lg:min-w-16 min-w-10 h-auto text-[--green]' />} text={'A Profile XT egy nemzetközileg is elismert, átfogó személyiségteszt, mely az egyik leggyakrabban alkalmazott kompetenciamérés vállalati környezetben. Kiválóan alkalmas a coaching folyamatok kezdetén, valamint kiválasztáshoz, vezetőfejlesztéshez és a talent programokhoz is.'} />

        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Munkaköri rátermettség meghatározása</H2>
            <Paragraph>
            A PXT egyedülálló módon határozza meg a Job Fit-et, vagyis az adott személy munkaköri rátermettségét, így lehetővé teszi, hogy egy bizonyos munkakörre a várhatóan legjobb teljesítményt nyújtó jelölteket választhassuk ki.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/profile-xt2.webp"}
              fill
              alt="Munkaköri rátermettség"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Pontos és objektív</H2>
            <Paragraph>
            A PXT igen pontos és objektív tükröt tart a kitöltőnek arról, hogyan működik, milyennek látja őt a környezete, mi a kulcs a vele való együttműködésben, hogyan tanul, és milyen jellegű munkakörben tud tartósan sikeres lenni.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/profile-xt3.webp"}
              fill
              alt="Pontos és objektív"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
            <div className='flex flex-col gap-4 lg:w-1/2'>
            <H1 classname={'text-[--green]'}>Algoritmikus elemzés</H1>
            <Paragraph>A tesztet egy algoritmus értékeli, majd az így kapott grafikus elemzést egy szóbeli átadás során részletesen magyarázza el egy erre kiképzett szakértő. Normatív teszt, ami azt jelenti, hogy az egyes tulajdonságokat nem egy elméleti skálán értelmezi, hanem egy meghatározott mintához hasonlítja - jelen esetben a magyar dolgozó lakossághoz. </Paragraph>
            </div>
            <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
            <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                <IconBox title={'Algoritmus és értékelés'} icon={<TbAi className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                <IconBox title={'Szakértői magyarázat'} icon={<TbMoodSearch className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
            </div>
            <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                <IconBox title={'Normatív összehasonlítás'} icon={<TbChartBarPopular className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
            </div>
            </div>
        </div>

        <InnerColorBox title={'Profile XT kompetenciamérés'} titlecolor={'text-white'} bgcolor={'bg-[--green]'}>
             
            <H3 classname={'text-white text-center'}>A PXT eredményes előkészítést biztosít olyan alapvető vállalati folyamatokhoz, mint a kiválasztás, vezetőfejlesztés, utánpótlástervezés, teljesítmény menedzselés, vagy bármilyen csapatműködés javítást célzó fejlesztés. </H3>

            <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
        </InnerColorBox>

      </div>
    </RegularContainer>
  );
}
