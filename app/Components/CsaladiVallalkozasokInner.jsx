import React from 'react'
import RegularContainer from './UI/RegularContainer'
import SecondaryHero from './UI/SecondaryHero'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import Label from './UI/Typo/Label'
import Image from 'next/image'
import { TbLeaf, TbHeart, TbMoodHeart, TbMessage2Bolt, TbDeviceMobileMessage } from "react-icons/tb";
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'

export default function CsaladiVallalkozasokInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>

            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Eljött az idő az utódlásra</H2>
                <Paragraph>A legújabb kutatások és KSH adatok szerint a hazai kis- és középvállalkozások közel 60%-a családi vállalkozás és ezek 25-30%-át érinti az utódlás kérdése a következő 8-10 évben. Sok - jellemzően a rendszerváltás után alapított - családi vállalkozás most lép abba az időszakba, amikor a tulajdonosi és vezetői szerepkörök átruházása már elkerülhetetlenné válik.</Paragraph>
                <Paragraph>A hazai felmérések szerint a magyar családi vállalkozások többsége egyáltalán nem foglalkozik a kérdéssel, a vállalkozók kétharmada pedig annak ellenére nem rendelkezik semmiféle stratégiával az átadást illetően, hogy egy sikeres és gördülékeny generációváltást hosszú évek előkészületi munkája előz meg.</Paragraph>
              </div>
              <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                <div className='flex flex-col items-end justify-center relative w-full h-[132px] bg-[--green] rounded-3xl p-8 mt-20 mb-20'>
                    <Paragraph classname={'font-bold text-center text-white w-[30%]'}>Magyar kisvállalkozások</Paragraph>
                    <div className='absolute top-0 left-0 flex flex-col items-end justify-center h-[116px] w-[60%] bg-[--mint] rounded-3xl p-8 '>
                        <Paragraph classname={'absolute top-40 left-2/3 -translate-x-1/2 font-bold text-center min-w-[100px]'}>Családi vállalkozás</Paragraph>
                        <div className='absolute -bottom-10 left-2/3 -translate-x-1/2 bg-[--green] w-[2px] h-14'></div>
                        <h1 className='absolute -translate-y-1/2 top-1/2 right-8 font-bold lg:text-6xl text-3xl opacity-15 w-1/3'>60%</h1>
                    </div>
                    <div className='absolute top-0 left-0 flex flex-col items-end justify-center h-[100px] w-[30%] bg-[--yellow] rounded-3xl p-8'>
                        <Paragraph classname={'absolute -top-20 left-1/2 -translate-x-1/2 font-bold text-center min-w-[100px]'}>Utódlás előtt állnak</Paragraph>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[--green] w-[2px] h-8'></div>
                        <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-6xl text-3xl opacity-15'>30%</h1>
                    </div>
                </div>
              </div>
            </div>

            <div className='flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Tudatos generációváltás</H2>
                <Paragraph>Az európai adatok szerint is csupán a cégek 20%-a készül tudatosan a generációváltásra, amit másik oldalról szintén alátámaszt egy lesújtó adat, mely szerint a vállalkozások 70 - 80%-a nem éli túl az utódlást, azaz az alapító távozását vagy halálát követő első egy-két évben csődbe mennek.</Paragraph>
                <Paragraph>Az utódlás kérdése emiatt is különösen fontos a magyar családi vállalkozások számára, hiszen senki nem azért dolgozott és küzdött hosszú évtizedeken át - dacolva a gazdasági és fogyasztóipari változásokkal - hogy később ez a rengeteg befektetett munka és megszerzett értékes tapasztalat mind semmivé legyenek.</Paragraph>
              </div>
              <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                <div className='flex flex-col items-end justify-center relative w-full h-[132px] bg-[--green] rounded-3xl p-8 mt-28'>
                    <Paragraph classname={'font-bold text-center text-white w-[80%] z-10'}>Európai cégek</Paragraph>
                    <p className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 lg:left-4/5 left-1/2 font-bold lg:text-8xl text-8xl opacity-15'>80%</p>
                    <div className='absolute top-0 left-0 flex flex-col items-end justify-center h-[116px] w-[20%] bg-[--mint] rounded-3xl p-8'>
                        <Paragraph classname={'absolute -top-20 lg:left-1/2 left-0 lg:-translate-x-1/2 font-bold text-center'}>Generációváltásra felkészült cégek</Paragraph>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[--green] w-[2px] h-8'></div>
                        <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-5xl text-3xl opacity-15'>20%</h1>
                    </div>
                </div>
              </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Nincs idő késlekedni</H2>
                <Paragraph>A generációváltás azonban nem csupán jogi és gazdasági kérdés, hanem összetett attitűdbeli  és érzelmi folyamat is, amit a családtagok közötti feszültségek, esetleges nézeteltérések tovább nehezíthetnek.</Paragraph>
                <Paragraph>Tapasztalatok szerint azok a vállalkozások, melyek időben elkezdik az utódok felkészítését és bevonását a cég működésébe, illetve ahol a családtagok között nyílt kommunikáció van, sokkal nagyobb eséllyel élik túl az átmenetet.</Paragraph>
              </div>
              <div className='relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden'>
                <Image src={'/szolgaltatasok/utodlas2.webp'} fill alt='Utódlás' style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
              </div>
            </div>

            <InnerColorBox title={'Családi vállalkozások utódlása'} titlecolor={'text-white'} text={'Készítsd fel vállalkozásod az utódlásra és élj azzal a szakmai támogatással, amivel hozzá tudunk segíteni a generációváltás sikeres megvalósításához! A vállalkozásod egyéni helyzetére szabott, saját stratégiát alkotunk számotokra a generációváltáshoz. Nem csupán a szervezetre vonatkozó működés stabilizálásában, a folyamatoptimalizálásban vagy a gazdasági vonatkozásokban segítünk, hanem a folyamat érzelmi, mentális részében is melletted leszünk.'} textcolor={'text-white'} bgcolor={'bg-[--green]'}>                
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>

        </div>
    </RegularContainer>
  )
}
