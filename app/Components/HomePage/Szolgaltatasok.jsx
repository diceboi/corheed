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
import MainNavButton from '../UI/Buttons/MainNavButton'

export default function Partner() {
  return (
    <section className="flex flex-col bg-white w-full pt-20">
      <div className="flex flex-col lg:rounded-t-[90px] rounded-t-[50px] bg-[--white] overflow-hidden px-4">
        <div className='flex flex-col items-center gap-16 container m-auto py-20'>
          <H2 classname={'text-center text-[--green]'}>Szolgáltatások</H2>
          <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-4'>
            <SzolgaltatasokTile image={'/szolgaltatasok/generaciok.webp'} title={'Generációk együttműködése program'} link={'/generaciovaltas/generaciok-egyuttmukodese-program'} />
            <SzolgaltatasokTile image={'/szolgaltatasok/fiatalbarat.webp'} title={'Fiatalbarát munkahely program'} link={'/generaciovaltas/fiatalbarat-munkahely-program'} />
            <SzolgaltatasokTile image={'/szolgaltatasok/utodlas.webp'} title={'Családi vállalkozások utódlása'} link={'/generaciovaltas/cegutodas-utodlastervezes'} />
            <SzolgaltatasokTile image={'/szolgaltatasok/keszsegfejlesztes.webp'} title={'Vállalati tréningek'} link={'/vallalati-treningek'} />
            <SzolgaltatasokTile image={'/szolgaltatasok/tehetsegmenedzsment.webp'} title={'Tehetségmenedzsment'} link={'/fejlesztoi-programok/tehetsegmenedzsment'} />
            <SzolgaltatasokTile image={'/szolgaltatasok/coaching.webp'} title={'Coaching / Teamcoaching'} link={'/fejlesztoi-programok/business-coaching-team-coaching'} />
          </div>
          <MainNavButton link={'/kapcsolat'} text={'Ajánlatkérés'} classname={'my-2'} />
        </div>
      </div>
    </section>
  )
}
