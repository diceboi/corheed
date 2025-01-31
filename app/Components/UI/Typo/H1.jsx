"use client";

import { motion } from "framer-motion";

export default function H1({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h1
      className={`text-[32px] leading-[34px] sm:text-[48px] sm:leading-[50px] md:text-[50px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] font-bold tracking-tight ${classname}`}
      initial={initial || {y: 10, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.4, type: "spring", bounce: 0.4}}
      animation={animation}
    >
      {children}
    </motion.h1>
  );
}