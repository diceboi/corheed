import React from 'react'
import RegularContainer from './UI/RegularContainer'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'
import InfoBlock from './UI/InfoBlock'
import { TbUsersGroup, TbMessage2, TbTargetArrow, TbPuzzle, TbMoodSmile, TbBulb, TbTrophy, TbHeartHandshake } from "react-icons/tb"

export default function SzakmaiCsapatepitesInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            {/* Introduction Section */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Szakmai csapatépítés – Élményalapú fejlődés</H2>
              <Paragraph>
                Fejleszd csapatod együttműködését és szakmai kompetenciáit egy élvezetes, interaktív program keretében! 
                A csapatépítés során valós munkaszituációkat modellezünk, miközben szórakoztató, kreatív feladatokon keresztül 
                erősítjük a csapatkohéziót. Az élmény garantálja, hogy a résztvevők motiváltabban és hatékonyabban térjenek 
                vissza a mindennapi munkába!
              </Paragraph>
            </div>

            {/* A program célja */}
            <div className='flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>A program célja</H2>
                <Paragraph>
                  A szakmai csapatépítés célja, hogy a résztvevők együttműködési-, kommunikációs- és problémamegoldó 
                  készségeit fejlesszük játékos, szórakoztató feladatok és gyakorlatok formájában.
                </Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>A program hozzájárul a csapatkohézió erősítéséhez,</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>a bizalom növeléséhez</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>és a munkatársak motivációjának fokozásához.</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Együttműködés'} icon={<TbUsersGroup className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Kommunikáció'} icon={<TbMessage2 className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Problémamegoldás'} icon={<TbPuzzle className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* Hogyan dolgozunk? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Hogyan dolgozunk?</H2>
              <Paragraph>
                 A program során interaktív gyakorlatokat, szituációkat és kreatív feladatokat alkalmazunk, melyek a 
                 csapat mindennapi szakmai kihívásait modellezik.
              </Paragraph>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Valós modellezés</H3>
                  <Paragraph classname={'m-0'}>
                    A feladatokat úgy alakítjuk, hogy a résztvevők együttműködésre kényszerüljenek, a kommunikáció 
                    és a döntéshozatal aktívan működjön.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Aktív bevonás</H3>
                  <Paragraph classname={'m-0'}>
                    A csapat minden tagja bevonódjon a folyamatba.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Azonnali haszon</H3>
                  <Paragraph classname={'m-0'}>
                    A program során a résztvevők visszajelzéseket kapnak, tudatosítják saját szerepüket és erősségeiket a csapatban, 
                    mely hozzájárul ahhoz, hogy a tanult készségek azonnal átültethetők legyenek a munkahelyi gyakorlatba.
                  </Paragraph>
                </div>
              </div>
            </div>

            <InfoBlock text={'Amikor egy szakmai program nem csupán az elméletről szól, hanem élmény és szórakozás is egyben, a megértés és a tanulás mélyebb és maradandóbb lesz.'}/>

            {/* Csapatépítés eredményei */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Csapatépítés eredményei</H2>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Erősebb csapatkohézió</H3>
                  <Paragraph classname={'m-0'}>
                    stabilabb bizalmi alap a csapattagok között.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Őszintébb kommunikáció</H3>
                  <Paragraph classname={'m-0'}>
                    és aktívabb részvétel a problémamegoldásban.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Fokozott motiváció</H3>
                  <Paragraph classname={'m-0'}>
                    és elköteleződés a közös célok iránt.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Világosabb szerepek</H3>
                  <Paragraph classname={'m-0'}>
                    és felelősségvállalás a csapatban.
                  </Paragraph>
                </div>

                <div className="flex flex-col gap-3 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md lg:col-span-2">
                  <H3 classname={'text-[--green] m-0 text-xl'}>Hatékonyabb stresszkezelés</H3>
                  <Paragraph classname={'m-0'}>
                    és konfliktuskezelés a munkahelyi helyzetekben.
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* Miért jó, ha a szakma és a szórakozás együtt jár? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Miért jó, ha a szakma és a szórakozás együtt jár?</H2>
              <Paragraph>
                 Élményalapú tanulás: amikor egy szakmai program nem csupán az elméletről szól, hanem élmény és szórakozás is egyben, 
                 a megértés és a tanulás mélyebb és maradandóbb lesz.
              </Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    <TbBulb />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Oldja a feszültséget</H3>
                    <Paragraph classname={'m-0'}>
                      A szórakoztató, játékos elemek oldják a feszültséget.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    <TbMoodSmile />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Ösztönzi a kreativitást</H3>
                    <Paragraph classname={'m-0'}>
                      és elősegíti a nyílt kommunikációt.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    <TbTargetArrow />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Jó érzés</H3>
                    <Paragraph classname={'m-0'}>
                      Így a résztvevők nemcsak jól érzik magukat a program során,
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[--lightgreen] p-6 rounded-2xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    <TbHeartHandshake />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Szakmai fejlődés</H3>
                    <Paragraph classname={'m-0'}>
                      hanem konkrét szakmai készségeket is fejlesztenek, melyek azonnal hasznosíthatók a gyakorlatban.
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <InnerColorBox title={'Szakmai csapatépítés'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>
                  Szeretnéd csapatodat motiváltabbá és hatékonyabbá tenni egy élvezetes program keretében?
                </Paragraph>
                <H3 classname={'text-white text-center'}>
                  Kérj ajánlatot szakmai csapatépítő programunkra!
                </H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
