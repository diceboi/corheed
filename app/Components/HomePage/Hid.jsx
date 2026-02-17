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
        <div className={'flex flex-col w-full relative bg-white overflow-hidden'}>

            <div className='flex flex-col justify-evenly items-center lg:gap-40 gap-16 py-10' style={{ zIndex: 1 }}>
                {/* <div className='relative z-10'>
                    <Image src={'/bridge.svg'} width={1280} height={500} alt='Híd' className='absolute top-0 -translate-x-1/2 left-1/2 min-w-[120vw]' />
                </div> */}
                <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute top-80 -left-20 opacity-10 rotate-90 blur-lg' />
                <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute -top-40 -right-20 opacity-20 blur-sm' />
                <div className='flex lg:flex-row flex-col items-center lg:gap-20 gap-8 px-4 container mx-auto pt-20'>
                    <div className='relative lg:w-1/2 w-full lg:min-h-[40vh]'>
                        <div className='absolute top-0 left-0 w-full h-full rounded-3xl translate-x-2 translate-y-2 lg:translate-x-8 lg:translate-y-8' style={{ backgroundColor: 'var(--lightgreen)' }}></div>
                        <div className='relative w-full h-full min-h-[40vh] rounded-3xl overflow-hidden'>
                            <Image src='/csapat.webp' fill alt='Csapat' className='scale-125 rotate-6' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                        <H2 classname={'text-[--green]'}>Melletted a fejlődésben</H2>
                        <Paragraph>Szakmai csapatunkkal melletted állunk a fejlődésben akár szervezeti átalakuláson, akár vállalati kultúraváltáson mentek át. Vállalati képzéseink és vezetőfejlesztési programjaink a mindennapi üzleti kihívásokból indulnak ki, üzleti coaching folyamataink pedig erősebb vezetői jelenlétet eredményeznek. Szakmai programjainkon a generációk együttműködése nem elmélet, hanem működő gyakorlat - mert a fejlődés ott kezdődik, ahol az emberek valóban kapcsolódnak.</Paragraph>
                    </div>
                </div>
                <Hiszunk />
                <div className='flex flex-col items-center container mx-auto gap-8'>
                    <H2 classname={'text-center text-[--green]'}>Válassz minket!</H2>
                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-center mx-auto gap-8 px-4'>
                        <IconBox title={'Mert tőlünk valódi minőséget kapsz!'} />
                        <IconBox title={'Mert mi nem futószalagon gyártjuk a képzéseket!'} />
                        <IconBox title={'Mert a programjainkon a szakmaiság mellett jó hangulat is van!'} />
                        <IconBox title={'Mert 90 % feletti ügyfél elégedettséggel dolgozunk!'} classname={''} />
                    </div>
                    <MainNavButton text="Válassz minket!" link="/ajanlatkeres" />
                </div>

                <div className="relative flex flex-col w-full lg:-mb-0 -mb-10">
                    <div className='absolute w-1/5 h-full top-0 left-0 bg-gradient-to-r from-white to-transparent pointer-events-none z-10'></div>
                    <div className='absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none z-10'></div>
                    <Carousel />
                </div>

            </div>
        </div>
    )
}
