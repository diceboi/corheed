import React from 'react'
import RegularContainer from '../UI/RegularContainer'
import Image from 'next/image'
import H3 from '../UI/Typo/H3'
import H1 from '../UI/Typo/H1'
import SubTitle from '../UI/Typo/SubTitle'
import Paragraph from '../UI/Typo/Paragraph'
import WhiteTile from '../UI/WhiteTile'
import SzolgaltatasokTile from '../UI/SzolgaltatasokTile'
import H2 from '../UI/Typo/H2'

export default function Partner() {
  return (
    <section className="flex flex-col bg-white w-full pt-20">
        <div className="flex flex-col lg:rounded-t-[90px] rounded-t-[50px] bg-[--white] overflow-hidden px-4">
            <div className='flex flex-col gap-16 container m-auto py-20'>
                <H2 classname={'text-center text-[--green]'}>Szolgáltatások</H2>
                <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-16 gap-4'>
                    <SzolgaltatasokTile image={'/szolgaltatasok/generaciok.webp'} title={'Generációk együttműködése program'} link={'/szolgaltatasaink/generaciok-egyuttmukodese-program'} />
                    <SzolgaltatasokTile image={'/szolgaltatasok/fiatalbarat.webp'} title={'Fiatalbarát munkahely program'} link={'/szolgaltatasaink/fiatalbarat-munkahely-program'} />
                    <SzolgaltatasokTile image={'/szolgaltatasok/utodlas.webp'} title={'Családi vállalkozások utódlása'} link={'/szolgaltatasaink/csaladi-vallalkozasok-utodlasa'} />
                    <SzolgaltatasokTile image={'/szolgaltatasok/keszsegfejlesztes.webp'} title={'Készségfejlesztés'} link={'/szolgaltatasaink/keszsegfejlesztes'} />
                    <SzolgaltatasokTile image={'/szolgaltatasok/tehetsegmenedzsment.webp'} title={'Tehetség menedzsment'} link={'/szolgaltatasaink/tehetsegmenedzsment'} />
                    <SzolgaltatasokTile image={'/szolgaltatasok/coaching.webp'} title={'Coaching / Teamcoaching'} link={'/szolgaltatasaink/coaching-teamcoaching'} />
                </div>
            </div>
        </div>
    </section>
  )
}
