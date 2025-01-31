import React from 'react'
import RegularContainer from '../UI/RegularContainer'
import Image from 'next/image'
import H3 from '../UI/Typo/H3'
import WhiteTile from '../UI/WhiteTile'

export default function Partner() {
  return (
    <RegularContainer classname={'relative bg-[--green] lg:py-20 py-8 px-4 overflow-hidden'}>

        {/*Leafs*/}
        <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute top-40 -left-20 mix-blend-soft-light opacity-20 rotate-12'/>
        <Image src={'/leaf2.svg'} width={300} height={300} alt='Levél' className='absolute -top-20 right-20 mix-blend-soft-light opacity-20'/>

        <div className='flex lg:flex-row flex-col justify-between gap-8' style={{ zIndex: 1 }}>
            <WhiteTile image={'/partner-1.svg'} text={<><span className='text-[--yellow]'>Partner</span><span className='text-[--green]'> a generációk<br></br>együttműködésében</span></>}/>
            <WhiteTile image={'/partner-2.svg'} text={<><span className='text-[--yellow]'>Partner</span><span className='text-[--green]'> a generációs<br></br>szemléletváltásban</span></>}/>
            <WhiteTile image={'/partner-3.svg'} text={<><span className='text-[--yellow]'>Partner</span><span className='text-[--green]'> az utódlásban</span></>}/>
        </div>
    </RegularContainer>
  )
}
