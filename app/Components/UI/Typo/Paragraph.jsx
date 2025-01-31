'use client';

import { motion } from "framer-motion";

export default function Paragraph({ classname, children }) {
  return (
    <motion.p
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration: 0.8, type: "easeIn", bounce: 0.4}}
      className={`text-inter text-[16px] leading-[23px] sm:text-[18px] sm:leading-[24px] md:text-[18px] md:leading-[26px] ${classname}`}
    >
      {children}
    </motion.p>
  );
}