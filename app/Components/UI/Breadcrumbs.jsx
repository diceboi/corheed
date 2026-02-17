"use client";

import Link from "next/link";
import { TbChevronRight, TbHome } from "react-icons/tb";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="container mx-auto px-4 pt-24 pb-4">
      <ol className="text-sm leading-6">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-[--green] hover:text-[--yellow] transition-colors"
          >
            <TbHome size={16} />
          </Link>
        </li>
        {items?.map((item, index) => (
          <li key={index} className="inline">
            <TbChevronRight size={16} className="inline mx-2 text-[--green] opacity-40 mb-0.5" />
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
