"use client";

import { motion } from "framer-motion";
import { TbCircleX } from "react-icons/tb";

export default function Modal({ children, openstate, onClose, classname }) {
  if (!openstate) return null;

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the background
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-[100] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={handleBackgroundClick}
    >
      <button className="fixed lg:top-8 top-12 right-8 z-50" onClick={onClose}>
        <TbCircleX className="w-10 h-10 text-[--mint] hover:text-[--yellow]" />
      </button>
      <motion.div
        className={`relative flex flex-col items-center bg-[--lightgreen] bg-opacity-75 backdrop-blur-md shadow-2xl w-[90%] max-w-lg p-8 ${classname} overflow-y-auto rounded-3xl`}
        initial={{ y: -50, opacity: 0 }}
        style={{ maxHeight: '90vh' }} // Constrain modal height
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={handleContentClick}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
