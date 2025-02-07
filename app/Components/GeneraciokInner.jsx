import React from 'react'
import RegularContainer from './UI/RegularContainer'
import SecondaryHero from './UI/SecondaryHero'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import Label from './UI/Typo/Label'
import Image from 'next/image'
import { TbMessagesOff, TbMoodPuzzled, TbHierarchy3, TbLibrary } from "react-icons/tb";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'
import InfoBlock from './UI/InfoBlock'

export default function GeneraciokInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green] lg:text-center'}>A munkahelyi problémák fő okai:</H2>
              <Paragraph classname={'text-center'}>23% nemek közötti különbségekből, 35 % kulturális különbségekből, 42% generációs különbségekből fakadó munkahelyi konfliktus.</Paragraph>
              <div className='flex lg:flex-row flex-col lg:gap-2 gap-4'>
                <div className='relative flex flex-col justify-center p-2 bg-[--green] lg:w-[23%] w-[46%] lg:h-[100px] h-[75px] rounded-s-3xl lg:rounded-e-none rounded-e-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-white text-center'}>Nemek közötti különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15 text-white'>23%</h1>
                </div>
                <div className='relative flex flex-col justify-center p-2 bg-[--yellow] lg:w-[35%] w-[70%] lg:h-[100px] h-[75px] lg:rounded-none rounded-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-center'}>Kulturális különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15'>35%</h1>
                </div>
                <div className='relative flex flex-col justify-center p-2 bg-[--mint] lg:w-[42%] w-[84%] lg:h-[100px] h-[75px] rounded-e-3xl lg:rounded-s-none rounded-s-3xl shadow-md'>
                  <Paragraph classname={'font-bold text-center'}>Generációs különbségek</Paragraph>
                  <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold lg:text-8xl text-6xl opacity-15'>42%</h1>
                </div>
              </div>
              <Label classname={'lg:text-center'}>McCrindle Survey, 2010.</Label>
            </div>

            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Generációs kihívás</H2>
                <Paragraph>A generációs különbségekből fakadó értékkonfliktusokkal, nézeteltérésekkel, kommunikációs félreértésekkel nap, mint nap találkozunk. A munkával töltött éveink  egyre inkább kitolódnak, mely azt eredményezi, hogy egyre több korosztály dolgozik együtt - korábban nem tapasztalt módon - a vállalati környezetben. Az eltérő szemléletmód, a más-más igények, a munkáról alkotott különböző kép megnehezítheti a generációk egymásra hangolódását, összekapcsolódását, de ha ezeket a különbözőségeket megfelelően kezeljük, erőforrásokká is válhatnak, melyeket eredményesen építhetünk be a sikeres vállalati működésbe.</Paragraph>
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

            <InfoBlock text={'A Generációk együttműködése programunk egy átfogó, komplex, szemléletformáló program, mely nem csupán a tréningek készségfejlesztő elemeit tartalmazza, hanem az adott vállalati helyzetre kínál többféle együttműködési- és fejlesztési lehetőséget.'}/>

            <div className='flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Célunk</H2>
                <Paragraph>Célunk, hogy valódi szemléletformálással tartós eredményeket érjünk el, akár a téma iránti érzékenyítéssel, akár ismeretátadással, akár egyéni-, vagy team coaching folyamatokkal. A fejlesztés során coaching szemléletű megközelítéssel segítjük elő az előítéletek megértését, a kialakult sztereotípiák feloldását. Közösen dolgozunk a különböző generációk attitűdjének, motivációjának és kommunikációs különbségeinek megismerésével és befogadásával.</Paragraph>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Érzékenyítés'} icon={<FaPeopleRobbery className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Ismeretátadás'} icon={<TbLibrary className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Coaching'} icon={<FaChalkboardTeacher className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            <InnerColorBox title={'Generációk Együttműködése Program'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>Évek óta foglalkozunk többgenerációs csapatokkal és a Generációk együttműködése programunk már számos vállalati környezetben elősegítette a generációk közeledését, egymásra hangolódását a munkahelyeken.
                </Paragraph>
                <H3 classname={'text-white text-center'}>Segítő szakemberként arra törekszünk, hogy embereket kapcsoljunk össze önmagukkal, másokkal, folyamatokkal. A mi szerepünk ebben az, hogy hídépítők legyünk.</H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
