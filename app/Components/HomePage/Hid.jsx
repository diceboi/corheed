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
import { IconBase } from 'react-icons'
import IconBox from '../UI/IconBox'
import { TbQuestionMark } from 'react-icons/tb'
import Hiszunk from '../HomePage/Hiszunk'

export default function Hid() {
    return (
        <div className={'flex flex-col gap-16 w-full relative bg-white lg:pb-20 pb-0 overflow-hidden'}>

            {/*Leafs*/}
            <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute top-40 -left-20 mix-blend-soft-light opacity-20 rotate-12' />
            <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute -top-20 right-20 mix-blend-soft-light opacity-20' />

            <div className='flex flex-col justify-evenly items-center lg:gap-8 gap-16' style={{ zIndex: 1 }}>
                <div className='relative z-10'>
                    <Image src={'/bridge.svg'} width={1280} height={500} alt='Híd' className='absolute top-0 -translate-x-1/2 left-1/2 min-w-[120vw]' />
                </div>
                <Hiszunk />
                <H2 classname={'text-center text-[--green]'}>Válassz minket!</H2>
                <div className='grid lg:grid-cols-2 grid-cols-1 justify-center mx-auto lg:mt-20 mt-8 gap-8 lg:px-32 md:px-16 px-4'>
                    <IconBox title={'Mert tőlünk valódi minőséget kapsz!'} />
                    <IconBox title={'Mert mi nem futószalagon gyártjuk a képzéseket!'} />
                    <IconBox title={'Mert a programjainkon a szakmaiság mellett jóhangulat is van!'} />
                    <IconBox title={'Mert 90 % feletti ügyfél elégedettséggel dolgozunk!'} classname={''} />
                </div>
                <div className='flex lg:flex-row flex-col items-center lg:py-32 py-8 lg:gap-20 gap-8 px-4'>
                    <div className='relative lg:w-1/2 w-full lg:min-h-[40vh]'>
                        <Image src='/generaciok-egyuttmukodese.webp' width={1280} height={853} alt='Értékteremtés' className='w-auto h-full rounded-3xl' />
                    </div>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                        <Paragraph>A változásokat sikeresen adaptáló, innovatív, értékőrző és értékteremtő vállalati környezet kialakításához elengedhetetlen a szemléletformálás és a rugalmas szemléletmód elsajátítása. Szakmai támogatásunk elősegíti egy olyan befogadó, generáció-érzékeny vállalati környezet kialakítását, mely aktuális válaszokat tud adni a 21. század igényeire és lehetővé teszi a fiatal munkavállalók hosszabb távú integrálódását és a különböző generációk harmonikus együttműködését.</Paragraph>
                        <Paragraph classname={'font-bold'}>Segítünk abban, hogy létrejöjjön a megújulás úgy, hogy mellette a folytonosság is megmaradjon.</Paragraph>
                        <MainNavButton text={'Érdekel'} link={'/ajanlatkeres'} />
                    </div>
                </div>
                <div className="relative flex flex-col w-full">
                    <div className='absolute w-1/5 h-full top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none z-10'></div>
                    <div className='absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none z-10'></div>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}
