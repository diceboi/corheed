import React from 'react'
import RegularContainer from './UI/RegularContainer'
import SecondaryHero from './UI/SecondaryHero'
import H1 from './UI/Typo/H1'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import Label from './UI/Typo/Label'
import Image from 'next/image'
import { TbLeaf, TbHeart, TbMoodHeart, TbMessage2Bolt, TbDeviceMobileMessage } from "react-icons/tb";
import MainNavButton from './UI/Buttons/MainNavButton'
import IconBox from './UI/IconBox'
import InnerColorBox from './UI/InnerColorBox'

export default function FiatalbaratInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-40 gap-20'>

            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-4 lg:w-1/2'>
                <H2 classname={'text-[--green]'}>A Z generáció prioritásai</H2>
                <Paragraph>Az elmúlt években a munkáltatói márka megítélése sokat változott a fiatal generációk megjelenésével. A fenntarthatóság, a „zöld” szemlélet, a vállalat társadalmi felelősségvállalása, az értékteremtés mind hozzájárulnak ahhoz, hogy egy fiatal munkavállaló egy adott céget válasszon a lehetőségei közül. A korábbi generációktól eltérően a Z generáció számára kiemelten fontos a munkavállalói élmény, a kiválasztás lépései, az első nap benyomása vagy az onboarding folyamata.</Paragraph>
              </div>
              <div className='grid lg:grid-cols-1 grid-cols-1 gap-8 lg:w-1/2 w-full items-center'>
                <div className='flex lg:flex-row flex-col gap-8 justify-center'>
                  <IconBox title={'Fenntarthatóság'} icon={<TbLeaf className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>} classname={'lg:w-[350px] lg:h-[200px]'} />
                  <IconBox title={'Társadalmi Felelősségvállalás'} icon={<TbHeart className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>} classname={'lg:w-[350px] lg:h-[200px]'}/>
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-8 justify-center'>
                  <IconBox title={'Munkavállalói Élmény'} icon={<TbMoodHeart className='lg:min-w-20 min-w-10 h-auto text-[--yellow]'/>} classname={'lg:w-[350px] lg:h-[200px]'}/>
                </div>
              </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:gap-16 gap-8 px-4 bg-[--white] rounded-3xl lg:p-8 p-4'>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                    <H2 classname={'text-[--green]'}>Hogyan tartsd meg a fiatal munkavállalókat?</H2>
                </div>
                <ul className='grid grid-cols-1 lg:gap-8 gap-4 list-disc marker:text-[--mint] marker:text-3xl pl-10 lg:w-1/2 w-full'>
                    <li>
                        <H3>Hogyan lehet már a bevonzás szakaszától, az elköteleződés kialakulásán át, a hosszabb távú munkára is megtartani a fiatal munkavállalókat?</H3>
                    </li>
                    <li>
                        <H3>Mivel szólítsd meg a Z-generációs ügyfeleidet?</H3>
                    </li>
                    <li>
                        <H3>Hogyan kommunikáljon az ügyfélszolgálat a Z-generációs ügyfelekkel?</H3>
                    </li>
                    <li>
                        <H3>Milyen preferenciák alapján hoznak döntést?</H3>
                    </li>
                </ul>
            </div>

            <InnerColorBox title={'Fiatalbarát munkahely program'} titlecolor={'text-white'} text={'Segítünk megérteni a jövő generációjának fontos igényeit, legyen szó kommunikációs, munkavállalói, vagy fogyasztási szokásokról. Támogatunk egy olyan vállalati környezet kialakításában, melyben hosszabb távon is el tud köteleződni egy fiatal munkavállaló, illetve amit ügyfélként is szívesen választ.'} textcolor={'text-white'} bgcolor={'bg-[--green]'}>
                <div className='bg-white bg-opacity-10 p-4 rounded-2xl'>
                  <H3 classname={'text-white text-center'}>Fiatalbarát, fenntartható, értékteremtő üzleteket építünk. Segítünk azzá formálni cégedet.</H3>
                </div>
                <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center'} />
            </InnerColorBox>

        </div>
    </RegularContainer>
  )
}
