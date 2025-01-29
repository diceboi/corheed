'use client';

import Image from "next/image"
import MainNavButton from "./Buttons/MainNavButton"
import H3 from "./Typo/H3"
import { motion } from "framer-motion"
import Paragraph from "./Typo/Paragraph";
import { TbInfoCircle } from "react-icons/tb";
import { useContext } from "react";
import { Context } from "@/app/Context";

export default function CsapatTile({ image, title, link, post, info }) {

  const { togglePopup, setForm } = useContext(Context);

  return (
    <motion.div 
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    className='flex flex-col justify-between gap-4 w-full h-auto '
    >
      <div className='flex flex-col gap-2 p-4 relative justify-end w-full lg:h-[400px] h-[300px] rounded-xl overflow-hidden'>
        <Image src={image} fill alt="Coaching" style={{ objectFit: 'cover' }} />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00000081] to-[#00000000] z-10"></div>
        <TbInfoCircle onClick={() => {setForm(info), togglePopup(info);}} className="absolute top-4 right-4 text-[--mint] hover:text-[--white] shadow-md z-10 min-w-12 h-auto p-2 bg-[#f5f5f73e] rounded-full backdrop-blur-sm cursor-pointer transition-all"/>
        <H3 classname={`font-bold lg:max-w-8/12 max-w-full text-white z-10`}>{title}</H3>
        {post &&(
           <Paragraph classname={'z-10 text-white'}>{post}</Paragraph> 
        )}
        {link && (
          <MainNavButton classname={'min-w-fit max-h-fit'} text={'Tovább'} link={link} />
        )}
      </div>
    </motion.div>
  )
}
