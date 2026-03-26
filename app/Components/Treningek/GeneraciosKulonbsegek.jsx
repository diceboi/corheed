import React from 'react'
import RegularContainer from '../UI/RegularContainer'
import H2 from '../UI/Typo/H2'
import H3 from '../UI/Typo/H3'
import Paragraph from '../UI/Typo/Paragraph'
import MainNavButton from '../UI/Buttons/MainNavButton'
import IconBox from '../UI/IconBox'
import InnerColorBox from '../UI/InnerColorBox'
import InfoBlock from '../UI/InfoBlock'
import { TbUsersGroup, TbMessage2, TbTargetArrow, TbHeartHandshake } from "react-icons/tb"

export default function GeneraciosKulonbsegek() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            {/* Intro Section */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Alapozó, ismeretátadó, érzékenyítő tréning</H2>
              <Paragraph>
                A mai üzleti környezet az első a munka világában, amely akár 5 különböző generáció együttműködését kívánja meg! 
                A munkahelyek generációs összetétele az elmúlt években jelentősen átalakult és ez a változás csak tovább gyorsul. 
                Ma már egy szervezeten belül egyszerre vannak jelen a Baby Boomerek, az X, Y és Z generáció tagjai, sőt, 
                egyre inkább megjelenik a legfiatalabb generáció is a munka világában: az Alfa generáció. 
                Ez a sokszínűség óriási lehetőség, ugyanakkor komoly kihívás is, ha nincs megfelelő tudás és szemlélet a generációk közötti együttműködés támogatására.
              </Paragraph>
              <Paragraph>
                Ez az alapozó, ismeretátadó, érzékenyítő tréning abban segít, hogy a résztvevők megértsék a generációs különbségek mögött húzódó okokat, 
                és képesek legyenek ezeket tudatosan beépíteni a mindennapi munkahelyi működésbe.
              </Paragraph>
            </div>

            {/* A képzés fókusza */}
            <div className='flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>A képzés fókusza</H2>
                <Paragraph>A tréning során a résztvevők:</Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>átfogó képet kapnak a különböző generációk szocializációjáról, értékrendjéről és motivációiról</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>megismerik, hogy mi formálta az egyes korosztályok gondolkodását (társadalmi, technológiai, gazdasági hatások)</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start flex-col">
                    <div className="flex gap-3 items-start">
                      <span className="text-[--yellow] mt-1">•</span>
                      <Paragraph classname={'m-0'}>rálátást nyernek arra, miben különböznek a generációk:</Paragraph>
                    </div>
                    <ul className="flex flex-col gap-2 pl-8">
                      <li className="flex gap-2 items-start opacity-90"><span className="text-[--yellow]">•</span><Paragraph classname={'m-0'}>munkához való hozzáállásban</Paragraph></li>
                      <li className="flex gap-2 items-start opacity-90"><span className="text-[--yellow]">•</span><Paragraph classname={'m-0'}>kommunikációs stílusban</Paragraph></li>
                      <li className="flex gap-2 items-start opacity-90"><span className="text-[--yellow]">•</span><Paragraph classname={'m-0'}>visszajelzés iránti igényben</Paragraph></li>
                      <li className="flex gap-2 items-start opacity-90"><span className="text-[--yellow]">•</span><Paragraph classname={'m-0'}>lojalitásban és karrierelvárásokban</Paragraph></li>
                    </ul>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>megértik, miért viselkednek másképp a legfiatalabb munkavállalók és hogyan lehet velük hatékonyan együtt dolgozni</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                 <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Szocializáció'} icon={<TbUsersGroup className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Értékrend'} icon={<TbHeartHandshake className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Motiváció'} icon={<TbTargetArrow className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Kommunikáció'} icon={<TbMessage2 className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            <InfoBlock text={'A képzés nem címkéz és nem általánosít leegyszerűsítő módon, hanem érzékenyít, segít felismerni a saját generációs nézőpontunkat és annak hatását a munkahelyi kapcsolatainkra.'}/>

            {/* Mihez nyújt támogatást a tréning? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Mihez nyújt támogatást a tréning?</H2>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                
                {/* 1. Mélyül a megértés */}
                <div className="flex flex-col gap-4 bg-white border-2 border-[--mint] p-6 lg:p-8 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>1. Mélyül a megértés</H3>
                  <Paragraph classname={'m-0 font-medium'}>A résztvevők:</Paragraph>
                  <ul className="flex flex-col gap-2 pl-2">
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>megértik, hogy a generációs különbségek nem „jók” vagy „rosszak”, hanem eltérő tapasztalatokból fakadnak</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>képesek lesznek a konfliktusokat nem személyes támadásként, hanem nézőpontbeli eltérésként értelmezni</Paragraph>
                    </li>
                  </ul>
                  <div className="bg-[--lightgreen] p-4 rounded-xl mt-auto">
                    <Paragraph classname={'m-0 font-semibold text-[--green]'}>Eredmény: Csökken a feszültség és a félreértések előfordulása a mindennapi munkában.</Paragraph>
                  </div>
                </div>
                
                {/* 2. Növeli az empátiát és nyitottságot */}
                <div className="flex flex-col gap-4 bg-white border-2 border-[--mint] p-6 lg:p-8 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>2. Növeli az empátiát és nyitottságot</H3>
                  <Paragraph classname={'m-0 font-medium'}>A program érzékenyítő jellege miatt a résztvevők:</Paragraph>
                  <ul className="flex flex-col gap-2 pl-2">
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>tudatosabban kezelik saját előítéleteiket</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>nyitottabbá válnak az eltérő munkastílusokra</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>könnyebben találnak közös hangot fiatalabb és idősebb kollégáikkal egyaránt</Paragraph>
                    </li>
                  </ul>
                  <div className="bg-[--lightgreen] p-4 rounded-xl mt-auto">
                    <Paragraph classname={'m-0 font-semibold text-[--green]'}>Eredmény: Erősödik a csapatkohézió és a kollégák közötti bizalom.</Paragraph>
                  </div>
                </div>
                
                {/* 3. Gyakorlati tudást ad */}
                <div className="flex flex-col gap-4 bg-white border-2 border-[--mint] p-6 lg:p-8 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>3. Gyakorlati tudást ad a legfiatalabb munkavállalókkal való közös együttműködéshez</H3>
                  <Paragraph classname={'m-0 font-medium'}>
                    A tréning külön hangsúlyt helyez az Alfa és Z generációk iránti közeledésre és megértésére. A résztvevők:
                  </Paragraph>
                  <ul className="flex flex-col gap-2 pl-2">
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>reális képet kapnak a legfiatalabb munkavállalók motivációiról</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>eszközöket kapnak ahhoz, hogyan lehet a fiatal kollégákat bevonni, motiválni és elköteleződésüket erősíteni</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>felismerik, hogyan lehet az Alfa és Z generáció erősségeit (digitális magabiztosság, gyors tanulás, kreativitás) a szervezet javára fordítani</Paragraph>
                    </li>
                  </ul>
                  <div className="bg-[--lightgreen] p-4 rounded-xl mt-auto">
                    <Paragraph classname={'m-0 font-semibold text-[--green]'}>Eredmény: Vállalati versenyelőny a fiatal, képzett munkaerő bevonzásában és megtartásában.</Paragraph>
                  </div>
                </div>

                {/* 4. Fenntartható szemlélet */}
                <div className="flex flex-col gap-4 bg-white border-2 border-[--mint] p-6 lg:p-8 rounded-2xl shadow-md">
                  <H3 classname={'text-[--green] m-0 text-xl'}>4. Segít kialakítani a fenntartható, többgenerációs csapatműködéshez szükséges szemléletet</H3>
                  <Paragraph classname={'m-0 font-medium'}>A résztvevők:</Paragraph>
                  <ul className="flex flex-col gap-2 pl-2">
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>képesek lesznek a generációs különbségeket erőforrásként kezelni</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>jobban megértik, hogyan lehet a generációs sokszínűséget a teljesítmény szolgálatába állítani</Paragraph>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-[--yellow] leading-relaxed">•</span>
                      <Paragraph classname={'m-0'}>aktív szereplői lesznek egy befogadóbb, együttműködőbb munkahelyi kultúra megvalósításának.</Paragraph>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* CTA Section */}
            <InnerColorBox title={'Generációs különbségek – munkahelyi érzékenyítés'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>
                  Szeretnéd csapatodat felkészíteni a generációs kihívásokra és növelni az együttműködés hatékonyságát?
                </Paragraph>
                <H3 classname={'text-white text-center'}>
                  Kérj ajánlatot érzékenyítő tréningünkre!
                </H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
