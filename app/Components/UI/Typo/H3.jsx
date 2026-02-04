"use client";

import { motion } from "framer-motion";

export default function H3({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h3
      style={{ fontSize: 'clamp(1.125rem, 0.8rem + 1.1vw, 1.625rem)', lineHeight: '1.3' }}
      className={`text-inter font-bold tracking-tight break-normal ${classname}`}
      initial={initial || { opacity: 0 }}
      whileInView={whileinview || { opacity: 1 }}
      transition={transition || { duration: 0.8, type: "spring", bounce: 0.4 }}
      animation={animation}
    >
      {children}
    </motion.h3>
  );
}