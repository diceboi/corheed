"use client";

import { motion } from "framer-motion";

export default function ToggleSwitch({ isActive, onToggle }) {
  return (
    <div
      onClick={onToggle} // ✅ Call the function from the parent (Hero)
      className="relative flex items-center gap-[2px] w-28 h-6 bg-[--white] outline-2 outline-[--green] rounded-full px-[2px] cursor-pointer"
    >
      {/* Bubble 1 */}
      <motion.div
        className={`relative z-10 w-5 h-5 bg-[--green] rounded-full shadow-md`}
        animate={{ 
          width: isActive ? "75%" : "25%", 
          backgroundColor: isActive ? "var(--green)" : "var(--mint)" 
        }}
        transition={{ duration: 0.4, ease: "easeOut", type: 'spring', bounce: 0.4 }}
      />

      {/* Bubble 2 */}
      <motion.div
        className={`relative z-10 w-5 h-5 bg-[--mint] rounded-full shadow-md`}
        animate={{ 
          width: isActive ? "25%" : "75%", 
          backgroundColor: isActive ? "var(--mint)" : "var(--green)" 
        }}
        transition={{ duration: 0.4, ease: "easeOut", type: 'spring', bounce: 0.4 }}
      />
    </div>
  );
}
