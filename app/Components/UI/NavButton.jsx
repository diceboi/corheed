"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import SubMenu from "./SubMenu";
import MobileSubMenu from "./MobileSubMenu";
import { useState, useContext } from "react";
import { Context } from "@/app/Context";

export default function NavButton({ title, items, link, scrolled, isOpen, toggleSubMenu }) {

  const { toggleMobileMenu } = useContext(Context);

  return (
    <motion.li
      initial="initial"
      animate="initial"
      whileHover={"whileInView"}
      className="group flex flex-col relative min-[1400px]:justify-center min-[1400px]:h-16 w-full min-[1400px]:w-auto"
    >
      {link ? (
        <Link href={link} onClick={toggleMobileMenu}>
          <span
            className={`flex flex-nowrap items-center gap-2 py-2 min-[1400px]:px-4 px-1 rounded-md min-[1400px]:group-hover:bg-[--mint] font-semibold text-[--white] text-md min-[1400px]:group-hover:text-[--green] whitespace-nowrap`}
          >
            {title}
            {items && (
              <>
                <TbChevronDown className="flex group-hover:hidden" />
                <TbChevronUp className="group-hover:flex hidden" />
              </>
            )}
          </span>
        </Link>
      ) : (
        <>
          <div
            className={`flex flex-row justify-between items-center w-full py-2 min-[1400px]:px-4 px-1 rounded-md min-[1400px]:group-hover:bg-[--mint] font-semibold text-[--white] text-md min-[1400px]:group-hover:text-[--green] min-[1400px]:whitespace-nowrap`}
            onClick={toggleSubMenu}
          >
            <span>{title}</span>
            {items && (
              <>
              <div className="min-[1400px]:hidden block">
                {!isOpen? (
                  <TbChevronDown className={`flex min-[1400px]:group-hover:hidden text-[--mint]`} />
                ):(
                  <TbChevronUp className={`group-hover:flex min-[1400px]:hidden text-[--mint]`} />
                )}
              </div>
              <div className="hidden min-[1400px]:block">
                <TbChevronDown className={`flex group-hover:hidden text-[--mint]`} />
                <TbChevronUp className={`group-hover:flex hidden text-[--green]`} />
              </div>
              </>
            )}
          </div>

          {items && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? 'auto' : 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="flex min-[1400px]:hidden flex-col overflow-hidden w-full"
            >
              <MobileSubMenu items={items} />
            </motion.div>
          )}
        </>
      )}

      {items && <SubMenu items={items} />}
    </motion.li>
  );
}
