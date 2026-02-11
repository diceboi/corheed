'use client';

import RegularContainer from "../UI/RegularContainer";
import H1 from "../UI/Typo/H1";
import H2 from "../UI/Typo/H2";
import Image from "next/image";
import MainNavButton from "../UI/Buttons/MainNavButton";

export default function Hiszunk() {
  return (
    <RegularContainer classname={'relative bg-white overflow-hidden'}>

        <div className="flex flex-col items-center gap-8">
            <H2 classname={'text-center text-[--green]'}>Amiben <span className="text-[--yellow] uppercase">hiszünk</span></H2>
            <div className="flex lg:flex-row flex-col items-start gap-8 p-8 bg-[--lightgreen] lg:rounded-full rounded-3xl">
              <div className="flex lg:flex-row flex-row-reverse gap-8">
                <p className='lg:text-3xl text-xl italic text-[--green] font-semibold'>Párbeszéd</p>
                <Image src="/leaf4.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/>
              </div>
              <div className="flex lg:flex-row flex-row-reverse gap-8">
                <p className='lg:text-3xl text-xl italic text-[--green] font-semibold'>Szakértelem</p>
                <Image src="/leaf4.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/>
              </div>
              <div className="flex lg:flex-row flex-row-reverse gap-8">
                <p className='lg:text-3xl text-xl italic text-[--green] font-semibold'>Együttműködés</p>
                <Image src="/leaf4.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/>
              </div>
              <div className="flex lg:flex-row flex-row-reverse gap-8">
                <p className='lg:text-3xl text-xl italic text-[--green] font-semibold'>Megújulás</p>
                <Image src="/leaf4.svg" width={15} height={15} alt="Leaf Icon" className="lg:hidden block opacity-80"/>
              </div>
            </div>
        </div>
        
    </RegularContainer>
  )
}
