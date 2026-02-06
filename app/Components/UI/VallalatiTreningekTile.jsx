'use client';

import Image from "next/image"
import Link from "next/link"
import MainNavButton from "./Buttons/MainNavButton"
import H3 from "./Typo/H3"
import { motion } from "framer-motion"
import Paragraph from "./Typo/Paragraph";

export default function VallalatiTreningekTile({ image, title, shortwords, text, link, titlecolor, detailLink }) {
  return (
    <motion.div
    className='flex flex-col justify-start w-full bg-[--white] rounded-3xl overflow-hidden' 
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    >
      {/* Image - clickable if detailLink exists with hover zoom effect */}
      {detailLink ? (
        <Link href={detailLink}>
          <div className='relative w-full h-[200px] rounded-xl overflow-hidden cursor-pointer group'>
            <Image 
              src={image} 
              fill 
              alt={title} 
              style={{ objectFit: 'cover' }} 
              className="transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </Link>
      ) : (
        <div className='relative w-full h-[200px] rounded-xl overflow-hidden group'>
          <Image 
            src={image} 
            fill 
            alt={title} 
            style={{ objectFit: 'cover' }} 
            className="transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="flex flex-col gap-4 lg:min-h-[480px] justify-between p-8">
        <div className="flex flex-col gap-4">
          {/* Title - clickable if detailLink exists */}
          {detailLink ? (
            <Link href={detailLink}>
              <H3 classname={`font-bold lg:max-w-8/12 max-w-full ${titlecolor} cursor-pointer hover:text-[--yellow] transition-colors`}>
                {title}
              </H3>
            </Link>
          ) : (
            <H3 classname={`font-bold lg:max-w-8/12 max-w-full ${titlecolor}`}>{title}</H3>
          )}
          
          <Paragraph classname={'italic font-semibold text-[--green] border-y border-white py-2'}>{shortwords}</Paragraph>
          <Paragraph classname={''}>{text}</Paragraph>
        </div>
        <div className="flex flex-col gap-4">
          {/* Bővebben button - shows only if detailLink exists, styled like Ajánlatkérés (yellow) */}
          {detailLink && (
            <MainNavButton classname={'min-w-fit max-h-fit'} text={'Bővebben'} link={detailLink} />
          )}
        </div>
      </div>
    </motion.div>
  )
}
