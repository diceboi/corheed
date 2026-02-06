import React from 'react'
import RegularContainer from './UI/RegularContainer'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'
import InfoBlock from './UI/InfoBlock'
import { TbTarget, TbBrain, TbUsers, TbTrendingUp, TbUserCheck } from "react-icons/tb"

export default function VezetofejlesztesInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            {/* Introduction Section */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Vezetőfejlesztés – tudatos befektetés a szervezet jövőjébe</H2>
              <Paragraph>
                A vezetőfejlesztés olyan komplex, stratégiai szemléletű fejlesztési folyamat, melynek célja, hogy a vezetők 
                hatékonyabban, tudatosabban és fenntartható módon tudják betölteni szerepüket egy folyamatosan változó üzleti 
                környezetben. Nem pusztán készségek fejlesztéséről szól, hanem a vezetői gondolkodásmód, önismeret és a belső 
                stabilitás erősítéséről is.
              </Paragraph>
            </div>

            {/* Mi a vezetőfejlesztés? */}
            <div className='flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Mi a vezetőfejlesztés?</H2>
                <Paragraph>
                  A vezetőfejlesztés strukturált tanulási és támogatási folyamat, mely segíti a vezetőket abban, hogy:
                </Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>jobban értsék saját működésüket és hatásukat,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>magabiztosabban kezeljék az emberekkel, teljesítménnyel és változással kapcsolatos kihívásokat,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>összhangba hozzák személyes vezetői stílusukat a szervezeti célokkal és kultúrával.</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Önismeret'} icon={<TbBrain className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Vezetői készségek'} icon={<TbTrendingUp className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Stratégiai gondolkodás'} icon={<TbTarget className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* A vezetőfejlesztés fő elemei */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>A vezetőfejlesztés fő elemei</H2>
              <Paragraph>Egy hatékony vezetőfejlesztési program több szinten dolgozik:</Paragraph>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Önismeret és vezetői identitás</H3>
                  <Paragraph classname={'m-0'}>Saját erősségek, vakfoltok, motivációk és stresszminták feltérképezése.</Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Vezetői készségek fejlesztése</H3>
                  <Paragraph classname={'m-0'}>Kommunikáció, visszajelzés, delegálás, konfliktuskezelés, döntéshozatal, változásmenedzsment.</Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Emberek és csapatok vezetése</H3>
                  <Paragraph classname={'m-0'}>Elköteleződés növelése, teljesítménykezelés, pszichológiai biztonság, együttműködés.</Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Üzleti és stratégiai gondolkodás</H3>
                  <Paragraph classname={'m-0'}>Rendszerszintű látásmód, felelősségvállalás, priorizálás, szervezeti hatás.</Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Egyéni támogatás</H3>
                  <Paragraph classname={'m-0'}>Business coaching, mentoring vagy reflektív kísérés a valós vezetői helyzetek feldolgozásához.</Paragraph>
                </div>
              </div>
            </div>

            <InfoBlock text={'A vezetők kulcsszereplők a szervezet működésében: rajtuk keresztül valósul meg az üzleti stratégia, a vállalati kultúra és a csapat teljesítmény.'}/>

            {/* Miért éri meg fejleszteni a vezetőket? */}
            <div className='flex lg:flex-row-reverse flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Miért éri meg fejleszteni a vezetőket?</H2>
                <Paragraph>A vezetőfejlesztés:</Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>javítja a csapatok teljesítményét és elkötelezettségét,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>csökkenti a fluktuációt és a munkavállalói kiégés kockázatát,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>hozzájárul a tehetségmegtartáshoz és a vezetői utánpótláshoz,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>támogatja a változások sikeres megvalósítását,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>pozitívan hat a munkáltatói márkára.</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Teljesítmény növelés'} icon={<TbTrendingUp className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Tehetségmegtartás'} icon={<TbUserCheck className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Kultúra építés'} icon={<TbUsers className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>


            {/* Miért ad plusz támogatást a vezetőknek? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Miért ad plusz támogatást a vezetőknek?</H2>
              <Paragraph>
                A vezetői szerep gyakran magányos pozíció: elvárások felülről, felelősség lefelé, kevés valódi tér a 
                vezetői dilemmák megosztására.
              </Paragraph>
              <Paragraph>Ez a típusú fejlesztés valós támogatást nyújt a vezetők számára:</Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Biztonságos tér a reflektálásra</H3>
                  <Paragraph classname={'m-0'}>
                    A vezetők ritkán oszthatják meg dilemmáikat csapatukkal. A fejlesztés védett környezetet biztosít a kérdések és kihívások feldolgozásához.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Komplex helyzetek feldolgozása</H3>
                  <Paragraph classname={'m-0'}>
                    Segít kezelni az érzelmileg terhelt döntéseket és konfliktusokat, amelyek a vezetői munka részét képezik.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Önbizalom és stabilitás</H3>
                  <Paragraph classname={'m-0'}>
                    Növeli a belső biztonságérzetet és a vezetői önbizalmat, így a vezetők nyugodtabban állnak helyt nehéz helyzetekben is.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Túlterheltség csökkentése</H3>
                  <Paragraph classname={'m-0'}>
                    Eszközöket ad a terhelés kezelésére és a bizonytalanságérzet feldolgozására, megelőzve a kiégést.
                  </Paragraph>
                </div>
              </div>
              
              <Paragraph classname={'font-semibold text-[--green] text-center text-lg'}>
                A vezetőfejlesztés nem „luxus", hanem működési alapfeltétele a hosszú távon is fenntartható hatékony csapatműködésnek.
              </Paragraph>
            </div>

            {/* Miért fektet egyre több cég a vezetői fejlődésbe? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Miért fektet egyre több cég a vezetői fejlődésbe?</H2>
              <Paragraph>
                A munka világa gyorsabban változik, mint valaha. A technológiai fejlődés, a generációs különbségek, a hibrid 
                működés és a folyamatos bizonytalanság új típusú vezetőket igényel.
              </Paragraph>
              <Paragraph>Azok a szervezetek, amelyek időben invesztálnak a vezetőik fejlődésébe:</Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Rugalmasabbak és ellenállóbbak</H3>
                    <Paragraph classname={'m-0'}>
                      Gyorsabban reagálnak a piaci változásokra és jobban kezelik a válsághelyzeteket.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Gyorsabb alkalmazkodás</H3>
                    <Paragraph classname={'m-0'}>
                      Vezetőik képesek hatékonyan navigálni az ismeretlenben és irányítani csapataikat.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Kulcsemberek megtartása</H3>
                    <Paragraph classname={'m-0'}>
                      Képesek megtartani tehetségeiket és erős belső utánpótlást építeni.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Emberközpontú kultúra</H3>
                    <Paragraph classname={'m-0'}>
                      Tudatos, fenntartható szervezeti kultúrát építenek, ahol az emberek számítanak.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <InnerColorBox title={'Vezetőfejlesztés'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>
                  A vezetőfejlesztés ma már nem opcionális HR-eszköz, hanem stratégiai befektetés a szervezet jövőjébe.
                </Paragraph>
                <H3 classname={'text-white text-center'}>
                  Támogassuk együtt a vezetőidet abban, hogy hatékonyabban és fenntarthatóbban tudják ellátni szerepüket!
                </H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
