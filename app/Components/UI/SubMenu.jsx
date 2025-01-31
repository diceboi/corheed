"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const dropdown = {
  initial: { opacity: 0, y: -10, display: "none" },
  whileInView: { opacity: 1, y: 0, display: "flex" },
  exit: { opacity: 0, y: -10, display: "none" },
  transition: { duration: 0.2 },
};

export default function SubMenu({ items }) {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.ul
      variants={dropdown}
      className={`hidden lg:flex flex-col lg:absolute top-[60px] lg:-left-6 -lef-0 p-4 gap-2 bg-[--green] w-max text-sm rounded-b-lg`}
    >
      {items.map((item, index) => (
        <Link href={item.link} key={index} className={`h-6 hover:bg-[--mint] text-[--white] hover:text-[--green] w-fit px-2 pt-[2px] pb-[12px] rounded-md`}>
        <li>
        <span className="font-medium">{item.title}</span>
        </li>
        </Link>
      ))}
    </motion.ul>
  );
}
