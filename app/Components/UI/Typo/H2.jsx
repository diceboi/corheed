"use client";

import { motion } from "framer-motion";

export default function H2({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h2
      className={`text-[24px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:text-[34px] md:leading-[38px] lg:text-[46px] lg:leading-[52px] font-bold tracking-tight ${classname}`}
      initial={initial || {y: 20, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      animation={animation}
    >
      {children}
    </motion.h2>
  );
}