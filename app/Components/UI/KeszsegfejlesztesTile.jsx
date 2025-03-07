'use client';

import Image from "next/image"
import MainNavButton from "./Buttons/MainNavButton"
import H3 from "./Typo/H3"
import { motion } from "framer-motion"
import Paragraph from "./Typo/Paragraph";

export default function KeszsegfejlesztesTile({ image, title, shortwords, text, link, titlecolor }) {
  return (
    <motion.div
    className='flex flex-col justify-start w-full bg-[--white] rounded-3xl' 
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    >
      <motion.div 
      className='relative w-full h-[200px] rounded-xl overflow-hidden'>
        <Image src={image} fill alt="Coaching" style={{ objectFit: 'cover' }} />
      </motion.div>
      <div className="flex flex-col gap-4 lg:min-h-[480px] justify-between p-8">
        <div className="flex flex-col gap-4">
          <H3 classname={`font-bold lg:max-w-8/12 max-w-full ${titlecolor}`}>{title}</H3>
          <Paragraph classname={'italic font-semibold text-[--green] border-y border-white py-2'}>{shortwords}</Paragraph>
          <Paragraph classname={''}>{text}</Paragraph>
        </div>
        <div className="flex flex-col gap-4">
          {link && (
            <MainNavButton classname={'min-w-fit max-h-fit'} text={'Ajánlatkérés'} link={link} />
          )}
        </div>
      </div>
    </motion.div>
  )
}
