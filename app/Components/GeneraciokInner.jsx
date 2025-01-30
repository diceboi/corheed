import React from 'react'
import RegularContainer from './UI/RegularContainer'
import SecondaryHero from './UI/SecondaryHero'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import Label from './UI/Typo/Label'
import Image from 'next/image'
import { TbMessagesOff, TbMoodPuzzled,TbHierarchy3 } from "react-icons/tb";
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'

export default function GeneraciokInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            <div className='flex flex-col gap-4 px-4'>
              <H1 classname={'text-[--green] lg:text-center'}>A munkahelyi problémák fő okai:</H1>
              <div className='flex lg:flex-row flex-col lg:gap-2 gap-4'>
                <div className='relative flex flex-col justify-center p-2 bg-[--mint] lg:w-[23%] w-[46%] lg:h-[100px] h-[75px] rounded-s-3xl lg:rounded-e-none rounded-e-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-center'}>Nemek közötti különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15'>23%</h1>
                </div>
                <div className='relative flex flex-col justify-center p-2 bg-[--yellow] lg:w-[35%] w-[70%] lg:h-[100px] h-[75px] lg:rounded-none rounded-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-center'}>Kulturális különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15'>35%</h1>
                </div>
                <div className='relative flex flex-col justify-center p-2 bg-[--green] lg:w-[42%] w-[84%] lg:h-[100px] h-[75px] rounded-e-3xl lg:rounded-s-none rounded-s-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-white text-center'}>Generációs különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15 text-white'>42%</h1>
                </div>
              </div>
              <Label classname={'lg:text-center'}>McCrindle Survey, 2010.</Label>
            </div>

            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H1 classname={'text-[--green]'}>A kihívás</H1>
                <Paragraph>A generációs különbségekből fakadó értékkonfliktusok, nézeteltérések és kommunikációs félreértések mindennaposak a munkahelyeken. Az egyre hosszabb munkával töltött évek miatt több korosztály dolgozik együtt, ami új kihívásokat teremt.</Paragraph>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Eltérő szemléletmód'} icon={<TbMessagesOff className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Különböző igények'} icon={<TbHierarchy3 className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Eltérő munkafelfogás'} icon={<TbMoodPuzzled className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            <InnerColorBox title={'Generációk Együttműködése Program'} titlecolor={'text-white'} text={'Átfogó, komplex, szemléletformáló programunk nem csupán készségfejlesztő elemeket tartalmaz, hanem az adott vállalati helyzetre kínál többféle együttműködési- és fejlesztési lehetőséget.'} textcolor={'text-white'} bgcolor={'bg-[--green]'}>
                <ul className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 list-disc marker:text-[--mint] marker:text-3xl text-white bg-white bg-opacity-10 p-4 rounded-2xl pl-10'>
                  <li>
                    <H3>Valódi szemléletformálás</H3>
                  </li>
                  <li>
                    <H3>Tartós eredmények elérése</H3>
                  </li>
                  <li>
                    <H3>Érzékenyítés és ismeretátadás</H3>
                  </li>
                  <li>
                    <H3>Egyéni- és team coaching folyamatok</H3>
                  </li>
                </ul>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>

            <div className='flex lg:flex-row flex-col lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/4'>
                <H1 classname={'text-[--green]'}>Céljaink</H1>
              </div>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:w-3/4 w-full'>
                  <IconBox title={'Előítéletek Feloldása'} text={'Segítünk megérteni és feloldani a kialakult sztereotípiákat és előítéleteket.'} icon={<TbHierarchy3 className="lg:min-w-20 min-w-10 h-auto text-[--yellow]"/>}/>
                  <IconBox title={'Generációk Közelítése'} text={'Elősegítjük a különböző generációk attitűdjének, motivációjának és kommunikációs különbségeinek megismerését és befogadását.'} icon={<TbHierarchy3 className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
              </div>
            </div>

            <InnerColorBox title={'Tapasztalatunk és megközelítésünk'} titlecolor={'text-[--green]'} text={'Évek óta foglalkozunk többgenerációs csapatokkal, és programunk már számos vállalati környezetben elősegítette a generációk közeledését, egymásra hangolódását a munkahelyeken.'} bgcolor={'bg-[--white]'}>
            <div className='flex flex-col lg:gap-8 gap-4 bg-[--mint] p-4 rounded-2xl'>
                  <H3 classname={'text-center'}>Lépj kapcsolatba velünk, és fedezd fel, hogyan segíthetünk vállalatod generációs különbségeinek áthidalásában!</H3>
                  <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
                </div>
            </InnerColorBox>

        </div>
    </RegularContainer>
  )
}
