"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/app/Context";

export default function MobileSubMenu({ items }) {

    const { mobileMenuOpen, toggleMobileMenu } = useContext(Context)

  return (
    <ul
      className={`flex flex-col py-4 p-2 gap-2 backdrop-blur-lg w-max text-sm max-w-[200px] overflow-hidden bg-[--greenhover] rounded-md`}
    >
      {items.map((item, index) => (
        <Link href={item.link} onClick={toggleMobileMenu} key={index} className="text-[--white] border-b w-full border-[--green] pb-2">
        <li>
        <span>{item.title}</span>
        </li>
        </Link>
      ))}
    </ul>
  );
}
