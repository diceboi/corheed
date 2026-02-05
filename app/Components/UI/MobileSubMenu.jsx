"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/app/Context";

export default function MobileSubMenu({ items }) {

    const { mobileMenuOpen, toggleMobileMenu } = useContext(Context)

  return (
    <ul
      className={`flex flex-col pt-2 px-2 gap-2 backdrop-blur-lg w-full text-sm overflow-hidden bg-[--greenhover] rounded-md mt-2`}
    >
      {items.map((item, index) => (
        <Link href={item.link} onClick={toggleMobileMenu} key={index} className="text-[--white] border-b w-full border-[--green] pb-2 last:border-b-0">
        <li>
        <span>{item.title}</span>
        </li>
        </Link>
      ))}
    </ul>
  );
}
