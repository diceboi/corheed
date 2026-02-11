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
      className={`hidden min-[1400px]:flex flex-col min-[1400px]:absolute top-[60px] min-[1400px]:-left-6 -lef-0 p-4 gap-3 bg-[--green] w-max text-md rounded-b-lg`}
    >
      {items.map((item, index) => (
        <Link href={item.link} key={index} className={`h-6 hover:bg-[--mint] text-[--white] hover:text-[--green] w-fit px-2 rounded-md`}>
        <li>
        <span className="font-medium">{item.title}</span>
        </li>
        </Link>
      ))}
    </motion.ul>
  );
}
