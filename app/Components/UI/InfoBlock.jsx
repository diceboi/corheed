'use client'

import Paragraph from "./Typo/Paragraph"
import { motion } from "framer-motion"
import { TbInfoSquareRounded } from "react-icons/tb"

export default function InfoBlock({ icon, text }) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
    whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
    className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-16 gap-8 p-8 rounded-3xl bg-[--mint] shadow-md mx-4">
        <TbInfoSquareRounded className='lg:min-w-16 min-w-10 h-auto text-[--green]' />
        <Paragraph>
        {text}
        </Paragraph>
    </motion.div>
  )
}
