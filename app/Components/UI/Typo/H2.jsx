"use client";

import { motion } from "framer-motion";

export default function H2({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h2
      className={`text-[28px] leading-[32px] sm:text-[32px] sm:leading-[36px] md:text-[34px] md:leading-[42px] lg:text-[40px] lg:leading-[48px] font-medium tracking-tighter ${classname}`}
      initial={initial || {y: 20, opacity: 0}}
      whileInView={whileinview || {y: 0, opacity: 1}}
      transition={transition || {duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2}}
      animation={animation}
    >
      {children}
    </motion.h2>
  );
}