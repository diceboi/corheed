"use client";

import { motion } from "framer-motion";

export default function H2({ classname, initial, whileinview, transition, animation, children }) {
  return (
    <motion.h2
      style={{ fontSize: 'clamp(1.5rem, 0.8rem + 2.4vw, 2.75rem)', lineHeight: '1.2' }}
      className={`font-bold tracking-tight ${classname}`}
      initial={initial || { y: 20, opacity: 0 }}
      whileInView={whileinview || { y: 0, opacity: 1 }}
      transition={transition || { duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
      animation={animation}
    >
      {children}
    </motion.h2>
  );
}