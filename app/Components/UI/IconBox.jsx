'use client';

import H3 from "./Typo/H3";
import Paragraph from "./Typo/Paragraph";
import { motion } from "framer-motion";

export default function IconBox({ title, text, icon, classname }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scaleX: 0.9, scaleY: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
      className={`flex flex-col lg:items-center items-start ${icon ? 'justify-between' : 'justify-center'} gap-4 bg-[--mint] p-8 rounded-3xl shadow-md lg:min-h-[px] lg:max-w-[400px] ${classname}`}>
      <div className="flex lg:flex-col flex-row items-center justify-start w-full gap-4">
        {/* Ensure `icon` is rendered properly */}
        {icon && <> {icon} </>}
        <H3 classname={"text-[--green] lg:text-center text-left font-bold"}>{title}</H3>
      </div>
      {text && (
        <Paragraph classname={"lg:text-center text-left"}>{text}</Paragraph>
      )}
    </motion.div>
  );
}

