"use client";

import { motion } from "framer-motion";

export default function H1({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h1
      style={{ fontSize: 'clamp(2rem, 1.2rem + 2.8vw, 3rem)', lineHeight: '1.1' }}
      className={`font-bold tracking-tight ${classname}`}
      initial={initial || { y: 10, opacity: 0 }}
      whileInView={whileinview || { y: 0, opacity: 1 }}
      transition={transition || { duration: 0.4, type: "spring", bounce: 0.4 }}
      animation={animation}
    >
      {children}
    </motion.h1>
  );
}