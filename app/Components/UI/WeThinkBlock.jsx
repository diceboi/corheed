'use client'

import H3 from "./Typo/H3"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WeThinkBlock({ children }) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    className="relative flex flex-col lg:items-center items-start lg:gap-16 gap-8 px-8 py-16 rounded-3xl bg-[--white] shadow-md mx-4 overflow-hidden">
        {children}
        <motion.img 
            animate={{ y: [-20, 10, -20], rotate: [-140, -100, -140] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={'/leaf4.svg'} 
            alt="falevél" 
            className="absolute -top-10 left-0 -rotate-12 opacity-30 w-[100px] h-auto"
        />
        <motion.img 
            animate={{ y: [-20, 10, -20], rotate: [-120, -90, -120] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={'/leaf4.svg'} 
            alt="falevél" 
            className="absolute top-0 -left-8 -rotate-45 opacity-30 w-[100px] h-auto"
        />
        <motion.img 
            animate={{ y: [-20, 10, -20], rotate: [-140, -100, -140] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={'/leaf4.svg'} 
            alt="falevél" 
            className="absolute -bottom-12 right-0 -rotate-12 opacity-30 w-[100px] h-auto"
        />
        <motion.img 
            animate={{ y: [-20, 10, -20], rotate: [-120, -90, -120] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={'/leaf4.svg'} 
            alt="falevél" 
            className="absolute -bottom-4 -right-8 -rotate-45 opacity-30 w-[100px] h-auto"
        />
    </motion.div>
  )
}