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
    <li className={`group/menu flex flex-col relative min-[1280px]:justify-center w-full min-[1280px]:w-auto ${items ? 'min-[1280px]:pb-0' : 'min-[1280px]:h-16'}`}>
      {link ? (
        <Link href={link} onClick={toggleMobileMenu}>
          <span
            className={`flex flex-nowrap items-center gap-2 py-2 min-[1280px]:px-4 px-1 rounded-md min-[1280px]:group-hover/menu:bg-[--mint] font-semibold text-[--white] text-md min-[1280px]:group-hover/menu:text-[--green] whitespace-nowrap min-[1280px]:h-16`}
          >
            {title}
            {items && (
              <>
                <TbChevronDown className="flex group-hover/menu:hidden" />
                <TbChevronUp className="group-hover/menu:flex hidden" />
              </>
            )}
          </span>
        </Link>
      ) : (
        <>
          <div
            className={`flex flex-row justify-between items-center w-full py-2 min-[1280px]:px-4 px-1 rounded-md min-[1280px]:group-hover/menu:bg-[--mint] font-semibold text-[--white] text-md min-[1280px]:group-hover/menu:text-[--green] min-[1280px]:whitespace-nowrap min-[1280px]:h-16`}
            onClick={toggleSubMenu}
          >
            <span>{title}</span>
            {items && (
              <>
                <div className="min-[1280px]:hidden block">
                  {!isOpen ? (
                    <TbChevronDown className={`flex min-[1280px]:group-hover/menu:hidden text-[--mint]`} />
                  ) : (
                    <TbChevronUp className={`group-hover/menu:flex min-[1280px]:hidden text-[--mint]`} />
                  )}
                </div>
                <div className="hidden min-[1280px]:block">
                  <TbChevronDown className={`flex group-hover/menu:hidden text-[--mint]`} />
                  <TbChevronUp className={`group-hover/menu:flex hidden text-[--green]`} />
                </div>
              </>
            )}
          </div>

          {items && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? 'auto' : 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="flex min-[1280px]:hidden flex-col overflow-hidden w-full"
            >
              <MobileSubMenu items={items} />
            </motion.div>
          )}
        </>
      )}

      {items && <SubMenu items={items} parentTitle={title} />}
    </li>
  );
}
