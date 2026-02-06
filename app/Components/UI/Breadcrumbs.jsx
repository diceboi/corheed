"use client";

import Link from "next/link";
import { TbChevronRight, TbHome } from "react-icons/tb";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="container mx-auto px-4 pt-24 pb-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="flex items-center gap-1 text-[--green] hover:text-[--yellow] transition-colors"
          >
            <TbHome size={18} />
            <span>Főoldal</span>
          </Link>
        </li>
        {items?.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <TbChevronRight size={16} className="text-[--green] opacity-40" />
            {item.href ? (
              <Link 
                href={item.href}
                className="text-[--green] hover:text-[--yellow] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[--green] font-semibold">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
