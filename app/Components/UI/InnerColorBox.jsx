'use client'

import H1 from "./Typo/H1";
import H2 from "./Typo/H2";
import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import MainNavButton from "./Buttons/MainNavButton";
import { motion } from "framer-motion";

export default function InnerColorBox({ title, titlecolor, text, textcolor, bgcolor, children }) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10, scaleX:0.9, scaleY:0.9 }}
        whileInView={{ opacity: 1, y: 0, scaleX:1, scaleY:1 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className={`flex flex-col items-center ${bgcolor} rounded-3xl`}
      >
        <div className="flex flex-col gap-8 lg:p-8 p-4 py-8 lg:w-8/12 w-full self-center">
          <H2 classname={`${titlecolor} text-center`}>
            {title}
          </H2>
          <Paragraph classname={`${textcolor} text-center`}>
            {text && text}
          </Paragraph>
          {children && children} {/* Ensure children is properly rendered */}
        </div>
      </motion.div>
    );
  }
  
