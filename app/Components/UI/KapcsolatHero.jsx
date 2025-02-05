'use client'

import H1 from "./Typo/H1"
import Image from "next/image"

export default function KapcsolatHero({ title, image }) {
  return (
    <section className='relative flex flex-col gap-8 items-center justify-center w-full h-[100vh] bg-white '>
        <Image src={image} fill alt="Kapcsolat kép" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <H1 classname={'z-10'}>{title}</H1>
    </section>
  )
}
