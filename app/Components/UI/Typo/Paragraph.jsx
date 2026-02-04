'use client';

import { motion } from "framer-motion";

export default function Paragraph({ classname, children }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, type: "easeIn", bounce: 0.4 }}
      style={{ fontSize: 'clamp(1rem, 0.8rem + 0.7vw, 1.125rem)', lineHeight: '1.5' }}
      className={`text-inter ${classname}`}
    >
      {children}
    </motion.p>
  );
}