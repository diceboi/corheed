"use client";

import { motion } from "framer-motion";

export default function H3({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h3
      className={`text-[18px] leading-[22px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-[28px] lg:text-[26px] lg:leading-[30px] font-semibold tracking-tight ${classname}`}
      initial={initial || {y: 20, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4}}
      animation={animation}
    >
      {children}
    </motion.h3>
  );
}