"use client";

import { motion } from "framer-motion";

export default function H3({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h3
      className={`text-inter text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[28px] lg:text-[26px] lg:leading-[30px] font-bold tracking-tight ${classname}`}
      initial={initial || { opacity: 0}}
      whileInView={whileinview || { opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4}}
      animation={animation}
    >
      {children}
    </motion.h3>
  );
}