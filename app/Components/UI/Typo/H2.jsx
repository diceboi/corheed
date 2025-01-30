"use client";

import { motion } from "framer-motion";

export default function H2({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h2
      className={`text-[28px] leading-[34px] sm:text-[34px] sm:leading-[40px] md:text-[40px] md:leading-[46px] lg:text-[46px] lg:leading-[52px] font-bold tracking-tighter ${classname}`}
      initial={initial || {y: 20, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      animation={animation}
    >
      {children}
    </motion.h2>
  );
}