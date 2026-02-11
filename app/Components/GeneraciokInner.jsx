import React from 'react'
import RegularContainer from './UI/RegularContainer'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'
import InfoBlock from './UI/InfoBlock'
import { TbUsersGroup, TbMessage2, TbInfinity, TbBulb, TbMoodSmile, TbTargetArrow, TbHeartHandshake, TbChartBar, TbUserCheck, TbBrain, TbHierarchy, TbCheck } from "react-icons/tb"

export default function GeneraciokInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            {/* Intro Section */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Híd a tapasztalat és az innováció között</H2>
              <Paragraph>
                A munkahelyek ma már természetes módon többgenerációs közegként működnek: baby boomerek, X, Y és Z 
                generációs munkatársak dolgoznak együtt – eltérő értékrenddel, kommunikációs stílussal, motivációkkal 
                és munkavégzési preferenciákkal.
              </Paragraph>
              <Paragraph>
                A Generációk együttműködése program célja, hogy ezekből a különbségekből ne feszültség, hanem 
                versenyelőny szülessen. Ez a komplex fejlesztési program támogatja a szervezeteket abban, hogy a 
                generációs sokszínűséget tudatosan kezeljék, és fenntartható, hatékony együttműködési kultúrát alakítsanak ki.
              </Paragraph>
            </div>

            {/* Hogyan segíti a program...? */}
            <div className='flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Hogyan segíti a program a generációk közeledését?</H2>
                <Paragraph>
                  A program egyik legnagyobb ereje, hogy feloldja az előítéleteket és közös nyelvet teremt. 
                  Amikor a munkatársak megértik, hogy egy adott viselkedés nem tiszteletlenség, motiválatlanság vagy ellenállás, 
                  hanem generációs sajátosság, jelentősen nő az empátia és az együttműködési hajlandóság.
                </Paragraph>
                <Paragraph>A generációk közötti megértés:</Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>csökkenti a konfliktusokat,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>javítja a csapatdinamikát,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>hatékonyabb kommunikációt eredményez,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>hozzájárul a feszültségektől mentes munkahelyi környezethez.</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Empátia'} icon={<TbHeartHandshake className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Kommunikáció'} icon={<TbMessage2 className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Csapatdinamika'} icon={<TbUsersGroup className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* Mitől komplex és átfogó a program? */}
            <div className='flex lg:flex-row-reverse flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Mitől komplex és átfogó a program?</H2>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <div className='min-w-6 pt-1'>
                        <TbCheck className='text-[--yellow] w-5 h-5'/>
                    </div>
                    <Paragraph classname={'m-0'}>Nem egyszeri tréning, hanem rendszerszintű szemléletformálás</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className='min-w-6 pt-1'>
                        <TbCheck className='text-[--yellow] w-5 h-5'/>
                    </div>
                    <Paragraph classname={'m-0'}>Egyaránt fókuszál munkatársakra, vezetőkre és döntéshozókra</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className='min-w-6 pt-1'>
                        <TbCheck className='text-[--yellow] w-5 h-5'/>
                    </div>
                    <Paragraph classname={'m-0'}>Ötvözi a pszichológiai, szervezetfejlesztési és üzleti szempontokat</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className='min-w-6 pt-1'>
                        <TbCheck className='text-[--yellow] w-5 h-5'/>
                    </div>
                    <Paragraph classname={'m-0'}>A szemléletbeli változás már rövid távon mérhető, hosszabb távon pedig fenntartható kulturális változást eredményez</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Rendszerszintű'} icon={<TbHierarchy className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Pszichológia'} icon={<TbBrain className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                   <IconBox title={'Fenntartható'} icon={<TbInfinity className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* A program főbb elemei */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>A program főbb elemei</H2>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Többgenerációs csapatdiagnózis és fejlesztési terv</H3>
                  <Paragraph classname={'m-0'}>
                    Egy strukturált felmérés, mely feltárja a generációs együttműködés erősségeit és elakadásait, 
                    a kommunikációs és motivációs különbségeket, és a rejtett konfliktusforrásokat. 
                    Az állapot felmérés eredményeire épülő fejlesztési terv konkrét beavatkozási pontokat jelöl ki, 
                    nem általános tréningmegoldásokat kínál.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Generációtudatos vezetőfejlesztési program</H3>
                  <Paragraph classname={'m-0'}>
                    Kifejezetten vezetőknek és kulcspozícióban lévő szakembereknek szóló fejlesztés, mely fókuszál a 
                    motivációs eszközök generációs eltéréseire, a visszajelzés, elismerés és teljesítményértékelés 
                    finomhangolására, a rugalmas, mégis következetes vezetői működésre.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Generációs szemléletformáló workshopok</H3>
                  <Paragraph classname={'m-0'}>
                    Interaktív, élményalapú tréningek, melyek bemutatják az egyes generációk munkahelyi értékeit 
                    és motivációit, kommunikációs sajátosságait és visszajelzési igényeit, konfliktuskezelési és 
                    döntéshozatali stílusát.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Generációk közötti mentoring és reverse mentoring program</H3>
                  <Paragraph classname={'m-0'}>
                    Strukturált mentoring rendszer, ahol a tapasztaltabb munkatársak tudást és szakmai stabilitást 
                    adnak át, a fiatalabb generációk pedig egy friss, digitális, innovációs szemléletet hozhatnak be. 
                    A program támogatja a tudásátadást és utánpótlás-tervezést, a generációk közötti kölcsönös elismerést, 
                    a szervezeten belüli tanulási kultúra megerősítését.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Generációs konfliktuskezelési és mediációs program</H3>
                  <Paragraph classname={'m-0'}>
                    Speciális modul a munkahelyi feszültségek kezelésére, ahol a konfliktusok hátterében eltérő 
                    munkatempó, különböző kommunikációs elvárások, más visszajelzési és kontrolligények állnak. 
                    A résztvevők megtanulják felismerni a generációs mintázatokat a konfliktusok mögött, konstruktív 
                    eszközökkel kezelni a feszültségeket, megelőzni a teljesítményromboló helyzeteket. 
                    HR-előny: kevesebb eszkalálódó konfliktus, kisebb vezetői és HR-terhelés.
                  </Paragraph>
                </div>
              </div>
            </div>

            <InfoBlock text={'A program segít abban, hogy a generációs sokszínűség ne kihívás legyen, hanem stratégiai erőforrás.'}/>

            {/* Miért különösen értékes ez a programcsomag? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Miért különösen értékes ez a programcsomag?</H2>
              <Paragraph>
                 A Generációk együttműködése program nem egyetlen tréning, hanem egymásra épülő fejlesztési rendszer.
              </Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold text-[--green]">
                    <TbChartBar />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Piaci válasz</H3>
                    <Paragraph classname={'m-0'}>
                      Reagál a munkaerőpiaci kihívásokra.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold text-[--green]">
                    <TbUserCheck />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Megtartás</H3>
                    <Paragraph classname={'m-0'}>
                      Támogatja a megtartást és az elköteleződést.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold text-[--green]">
                    <TbTargetArrow />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Eredményesség</H3>
                    <Paragraph classname={'m-0'}>
                      Valódi üzleti eredményeket hoz a mindennapi működésben.
                    </Paragraph>
                  </div>
                </div>
                
                 <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold text-[--green]">
                    <TbHeartHandshake />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Erőforrás</H3>
                    <Paragraph classname={'m-0'}>
                      A generációs sokszínűség stratégiai erőforrássá válik.
                    </Paragraph>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Section */}
            <InnerColorBox title={'Generációk együttműködése program'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>
                  Szeretnéd, ha a generációs különbségek nem feszültséget, hanem versenyelőnyt jelentenének céged számára?
                </Paragraph>
                <H3 classname={'text-white text-center'}>
                  Kérj ajánlatot programunkra!
                </H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
