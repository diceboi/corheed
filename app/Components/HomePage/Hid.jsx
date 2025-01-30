import React from 'react'
import RegularContainer from '../UI/RegularContainer'
import Image from 'next/image'
import H3 from '../UI/Typo/H3'
import WhiteTile from '../UI/WhiteTile'
import SubTitle from '../UI/Typo/SubTitle'
import H1 from '../UI/Typo/H1'
import H2 from '../UI/Typo/H2'
import Paragraph from '../UI/Typo/Paragraph'
import MainNavButton from '../UI/Buttons/MainNavButton'
import Carousel from '../UI/Carousel'

export default function Hid() {
  return (
    <RegularContainer classname={'relative bg-white lg:py-20 pt-8 px-4 overflow-hidden'}>

        {/*Leafs*/}
        <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute top-40 -left-20 mix-blend-soft-light opacity-20 rotate-12'/>
        <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute -top-20 right-20 mix-blend-soft-light opacity-20'/>

        <div className='flex flex-col justify-evenly items-center lg:gap-8 gap-16' style={{ zIndex: 1 }}>
            <SubTitle>Missziónk</SubTitle>
            <H2 classname={'text-center text-[--green]'}>Híd a korosztályok között - COREHEED</H2>
            <Paragraph classname={'text-center lg:w-1/2 w-full'}>Folyamatosan átalakuló, változó világunk és a legújabb munkahelyi trendek újfajta kihívások elé állítják a vállalatokat. A mai üzleti környezet az első a munka világában, amely akár 5 különböző generáció együttműködését kívánja meg. Az elmúlt években a fiatal munkavállalói generáció újraírta a munkaerő megtartás, az elköteleződés és az értékteremtés fogalmát.</Paragraph>
            <div className='relative pt-40'>
                <Image src={'/bridge.svg'} width={1280} height={500} alt='Híd' className='absolute top-0 -translate-x-1/2 left-1/2 min-w-[120vw]'/>
                
            </div>
            <div className='flex flex-col justify-center mx-auto l:mt-20 gap-8 lg:w-1/2'>
                    <div className='flex items-center justify-center font-bold text-xl text-center px-4 py-3 rounded-lg bg-[--mint] shadow-md lg:-ml-24'><p>Milyen válaszaink lehetnek erre?</p></div>
                    <div className='flex items-center justify-center font-bold text-xl text-center px-4 py-3 rounded-lg bg-[--mint] shadow-md lg:-mr-24'><p>Hogyan jöhet létre párbeszéd és hatékonyan együttműködő közösség a többgenerációs csapatokban?</p></div>
                    <div className='flex items-center justify-center font-bold text-xl text-center px-4 py-3 rounded-lg bg-[--mint] shadow-md lg:-ml-24'><p>Hogyan őrizhetjük meg a gyökereinket és újulhatunk meg egyszerre?</p></div>
                    <div className='flex items-center justify-center font-bold text-xl text-center px-4 py-3 rounded-lg bg-[--mint] shadow-md lg:-mr-24'><p>Hogyan tudjuk jól átadni a stafétabotot a következő generációnak?</p></div>
                </div>
                <div className='flex lg:flex-row flex-col items-center lg:py-32 py-8 lg:gap-20 gap-8'>
                    <div className='relative lg:w-1/2 w-full lg:min-h-[40vh]'>
                        <Image src='/generaciok-egyuttmukodese.webp' width={1280} height={853} alt='Értékteremtés' className='w-auto h-full rounded-3xl'/>     
                    </div>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                        <Paragraph>A változásokat sikeresen adaptáló, innovatív, értékőrző és értékteremtő vállalati környezet kialakításához elengedhetetlen a szemléletformálás és a rugalmas szemléletmód elsajátítása. Szakmai támogatásunk elősegíti egy olyan befogadó, generáció-érzékeny vállalati környezet kialakítását, mely aktuális válaszokat tud adni a 21. század igényeire és lehetővé teszi a fiatal munkavállalók hosszabb távú integrálódását és a különböző generációk harmonikus együttműködését.</Paragraph>
                        <Paragraph classname={'font-bold'}>Segítünk abban, hogy létrejöjjön a megújulás úgy, hogy mellette a folytonosság is megmaradjon.</Paragraph>
                        <MainNavButton text={'Érdekel'} link={'/ajanlatkeres'}/>
                    </div>
                </div>
                <div className="relative flex flex-col w-full">
                    <div className='absolute w-1/5 h-full top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none z-10'></div>
                    <div className='absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none z-10'></div>
                    <Carousel />
                </div>
        </div>
    </RegularContainer>
  )
}
