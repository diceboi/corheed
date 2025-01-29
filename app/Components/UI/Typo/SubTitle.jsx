"use client"

import { motion } from "framer-motion";
import { MdOutlineHorizontalRule } from "react-icons/md"
import Paragraph from "./Paragraph";

export default function SubTitle({ children, classname }) {
  return (
    <motion.p
      className={`tracking-widest uppercase font-semibold bg-[--lightgreen] rounded-full px-2 lg:text-base text-xs w-fit shadow-sm`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      {children}
    </motion.p>
  );
}
