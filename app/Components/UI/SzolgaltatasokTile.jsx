'use client';

import Image from "next/image"
import MainNavButton from "./Buttons/MainNavButton"
import H3 from "./Typo/H3"
import { motion } from "framer-motion"

export default function SzolgaltatasokTile({ image, title, link, titlecolor }) {
  return (
    <motion.div 
    className='flex flex-col justify-between gap-4 w-full initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}h-auto '
    >
      <motion.div 
      className='relative w-full h-[300px] rounded-xl overflow-hidden'>
        <Image src={image} fill alt="Coaching" style={{ objectFit: 'cover' }} />
      </motion.div>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-2">
        <H3 classname={`font-bold lg:max-w-8/12 max-w-full ${titlecolor}`}>{title}</H3>
        {link && (
          <MainNavButton classname={'min-w-fit max-h-fit'} text={'Tovább'} link={link} />
        )}
      </div>
    </motion.div>
  )
}
