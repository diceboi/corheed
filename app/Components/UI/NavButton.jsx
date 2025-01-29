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
      className="group flex lg:flex-col relative lg:justify-center lg:h-16"
    >
      {link ? (
        <Link href={link} onClick={toggleMobileMenu}>
          <span
            className={`flex flex-nowrap items-center gap-2 py-2 px-4 rounded-md lg:group-hover:bg-[--greenhover] font-semibold text-[--white]`}
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
        <div
          className={`flex flex-col items-center gap-2 py-2 lg:px-4 pl-1 lg:-mb-0 -mb-2 rounded-md lg:group-hover:bg-[--greenhover] font-semibold text-[--white]`}
        >
          <div className="flex flex-nowrap gap-2 items-center" onClick={toggleSubMenu}>
            {title}
            {items && (
              <>
              <div className="lg:hidden block">
                {!isOpen? (
                  <TbChevronDown className={`flex lg:group-hover:hidden text-[--mint]`} />
                ):(
                  <TbChevronUp className={`group-hover:flex lg:hidden text-[--mint]`} />
                )}
              </div>
              <div className="hidden lg:block">
                <TbChevronDown className={`flex group-hover:hidden text-[--mint]`} />
                <TbChevronUp className={`group-hover:flex hidden text-[--mint]`} />
              </div>
              </>
            )}
          </div>

          {items && (
            <>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="flex lg:hidden flex-col overflow-hidden"
              >
                <MobileSubMenu items={items} />
              </motion.div>
            </>
          )}
        </div>
      )}

      {items && <SubMenu items={items} />}
    </motion.li>
  );
}
