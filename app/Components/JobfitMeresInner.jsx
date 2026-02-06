import React from 'react'
import RegularContainer from './UI/RegularContainer'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'
import InfoBlock from './UI/InfoBlock'
import { TbTargetArrow, TbChartBar, TbUserCheck, TbMoodCheck, TbBriefcase, TbTrendingUp } from "react-icons/tb"

export default function JobfitMeresInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>
            {/* Introduction Section */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Mi az a job-fit mérés, és miért kulcsfontosságú a sikeres kiválasztáshoz?</H2>
              <Paragraph>
                A kiválasztás az egyik legnagyobb üzleti kockázatot hordozó HR-folyamat. Egy rossz felvétel nemcsak 
                idő- és költségveszteség, hanem közvetlen hatással van a csapatteljesítményre, a vezetői kapacitásra 
                és a fluktuációra is.
              </Paragraph>
              <Paragraph>
                A job-fit mérés ebben hoz valódi áttörést: objektív adatokat ad arról, hogy egy jelölt mennyire fog 
                beválni egy konkrét munkakörben, a tényleges munkahelyi működés szintjén. Annak objektív vizsgálata, 
                hogy egy jelölt mennyire illeszkedik egy adott munkakörhöz – nem csupán szakmai tudásban, hanem 
                munkahelyi viselkedésben, működési stílusban és motivációkban is.
              </Paragraph>
            </div>

            {/* Mit mér a teszt? */}
            <div className='flex lg:flex-row flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Mit mér a munkahelyi viselkedést felmérő teszt?</H2>
                <Paragraph>
                  A teszt nem „szimpatikusságot" vagy önéletrajzi erősségeket vizsgál, hanem azt, ami a beválást 
                  ténylegesen meghatározza:
                </Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>döntéshozatali stílust és felelősségvállalási készségeket</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>terhelhetőséget, stresszkezelést és nyomás alatti működést</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>szabálykövetés vs. önállóság arányát</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>munkatempót és precizitást</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>együttműködési készségeket</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>motivációs mintázatokat</Paragraph>
                  </li>
                </ul>
                <Paragraph classname={'italic text-[--green] font-semibold'}>
                  A teszt célja nem a személyiségcímkézés, hanem annak megértése, hogy a jelölt hogyan fog ténylegesen 
                  működni a mindennapi munkában. Hiszen ezek a tényezők gyakran nem derülnek ki egy interjún, de a 
                  próbaidő alatt már nehézségeket okozhatnak.
                </Paragraph>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Viselkedés mérés'} icon={<TbUserCheck className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Objektív adatok'} icon={<TbChartBar className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Munkakör illeszkedés'} icon={<TbTargetArrow className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* Hogyan segíti a kiválasztást? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Hogyan segíti a kiválasztási folyamatot?</H2>
              <Paragraph>A job-fit mérés nem kiváltja, hanem megerősíti az interjút és a szakmai értékelést:</Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Pontos visszajelzés</H3>
                  <Paragraph classname={'m-0'}>
                    Objektív adatokat ad a jelölt és a munkakör illeszkedéséről, nem csak benyomások alapján.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Összehasonlíthatóság</H3>
                  <Paragraph classname={'m-0'}>
                    Lehetővé teszi a jelöltek objektív szempontok szerinti összehasonlítását.
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Rejtett kockázatok</H3>
                  <Paragraph classname={'m-0'}>
                    Segít felismerni a későbbi problémákat (túlterhelhetőség, motivációs eltérés).
                  </Paragraph>
                </div>
                
                <div className="flex flex-col gap-3 bg-[--lightgreen] p-6 rounded-2xl">
                  <H3 classname={'text-[--green] m-0'}>Strukturált döntés</H3>
                  <Paragraph classname={'m-0'}>
                    Támogatja az egységes, adatalapú kiválasztási döntéshozatalt.
                  </Paragraph>
                </div>
              </div>
              
              <Paragraph classname={'text-center italic'}>
                A mérés biztosítja, hogy a jelölt abban a környezetben, tempóban és szerepben dolgozzon, ahol valóban 
                értéket tud teremteni.
              </Paragraph>
            </div>

            <InfoBlock text={'"A megfelelő ember a megfelelő helyre" – nem szlogen, hanem mérhető valóság'}/>

            {/* Megfelelő ember megfelelő helyre */}
            <div className='flex lg:flex-row-reverse flex-col items-start lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>Mérhető valóság</H2>
                <Paragraph>
                  A job-fit mérés lényege, hogy nem az embert próbáljuk a pozícióhoz igazítani, hanem azt vizsgáljuk: 
                  hol tud valóban jól teljesíteni és hosszú távon is motivált maradni.
                </Paragraph>
                <Paragraph>Ez az elv egyszerre szolgálja:</Paragraph>
                <ul className="flex flex-col gap-3 pl-4">
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>a munkáltató üzleti céljait</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>a vezetők hatékony csapatépítését</Paragraph>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[--yellow] mt-1">•</span>
                    <Paragraph classname={'m-0'}>és a munkavállalók elégedettségét</Paragraph>
                  </li>
                </ul>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Üzleti célok'} icon={<TbBriefcase className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                  <IconBox title={'Csapatépítés'} icon={<TbTrendingUp className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Elégedettség'} icon={<TbMoodCheck className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>}/>
                </div>
              </div>
            </div>

            {/* Miért éri meg? */}
            <div className='flex flex-col gap-8 px-4'>
              <H2 classname={'text-[--green]'}>Miért éri meg befektetésként tekinteni a job-fit mérésre?</H2>
              <Paragraph classname={'font-semibold text-[--green] text-lg'}>
                Mert egyetlen rossz felvétel költsége többszöröse egy professzionális mérés árának.
              </Paragraph>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Előrejelzi a beválást</H3>
                    <Paragraph classname={'m-0'}>
                      Adatalapú betekintést ad a jelölt várható teljesítményébe még a felvétel előtt.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Csökkenti a kockázatokat</H3>
                    <Paragraph classname={'m-0'}>
                      Minimalizálja a rossz felvételből eredő HR és vezetői problémákat.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Növeli a teljesítményt</H3>
                    <Paragraph classname={'m-0'}>
                      A megfelelő ember a megfelelő helyen jobban teljesít és produktívabb.
                    </Paragraph>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white border-2 border-[--mint] p-6 rounded-2xl shadow-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-[--yellow] rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 classname={'text-[--green] m-0 text-xl'}>Stabilabb csapatok</H3>
                    <Paragraph classname={'m-0'}>
                      Hosszú távon jobban működő és elkötelezettebb munkatársak.
                    </Paragraph>
                  </div>
                </div>
              </div>
              
              <Paragraph classname={'font-semibold text-[--green] text-center text-lg mt-6'}>
                A job-fit mérés nem „plusz HR-eszköz", hanem kockázatcsökkentő üzleti eszköz és az adatvezérelt HR nélkülözhetetlen kelléke.
              </Paragraph>
            </div>

            {/* CTA Section */}
            <InnerColorBox title={'Job-fit mérés'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-[--green]'}>
                <Paragraph classname={'text-white text-center'}>
                  Objektív adatok a sikeres kiválasztáshoz – mert egyetlen rossz felvétel többet veszít, 
                  mint amennyit egy professzionális mérés jelent.
                </Paragraph>
                <H3 classname={'text-white text-center'}>
                  Tedd adatalapúvá a kiválasztási folyamatodat!
                </H3>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>
        </div>
    </RegularContainer>
  )
}
