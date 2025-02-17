'use client';

import Image from "next/image"
import MainNavButton from "./Buttons/MainNavButton"
import H3 from "./Typo/H3"
import { motion } from "framer-motion"

export default function SzolgaltatasokTile({ image, title, link, titlecolor, custombutton }) {
  return (
    <motion.div 
    className='flex flex-col justify-between gap-4 w-full'
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    >
      <motion.div 
      className='relative w-full h-[300px] rounded-xl overflow-hidden'>
        <Image src={image} fill alt="Coaching" style={{ objectFit: 'cover' }} />
        {custombutton && custombutton}
      </motion.div>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-2">
        <h3 className={`font-bold lg:max-w-8/12 max-w-full ${titlecolor} text-inter text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[28px] lg:text-[22px] lg:leading-[30px] font-bold tracking-tight`}>{title}</h3>
        {link && (
          <MainNavButton classname={'min-w-fit max-h-fit'} text={'Tovább'} link={link} />
        )}
      </div>
    </motion.div>
  )
}
