"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SubMenu({ items, parentTitle }) {

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

  // Skip first item on desktop if it matches parent title (to avoid duplication)
  const itemsToShow = items[0]?.title === parentTitle ? items.slice(1) : items;

  return (
    <ul
      className={`hidden min-[1280px]:group-hover/menu:flex opacity-0 group-hover/menu:opacity-100 transition-opacity duration-200 flex-col min-[1280px]:absolute top-[64px] min-[1280px]:-left-6 -lef-0 p-4 gap-3 bg-[--green] w-max text-md rounded-b-lg`}
    >
      {itemsToShow.map((item, index) => (
        <Link href={item.link} key={index} className={`h-6 hover:bg-[--mint] text-[--white] hover:text-[--green] w-fit px-2 rounded-md`}>
          <li>
            <span className="font-medium">{item.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
