"use client";

import { motion } from "framer-motion";

export default function BtnText({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.p
      className={`text-[15px] leading-[23px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] font-semibold ${classname}`}
      initial={initial || ''}
      whileInView={whileinview || ''}
      transition={transition || ''}
      animation={animation || ''}
    >
      {children}
    </motion.p>
  );
}