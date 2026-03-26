"use client";

import Link from "next/link";
import { TbHash } from "react-icons/tb";

export default function TagCloud({ tags, currentTagSlug }) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className="flex flex-row items-center justify-center gap-3 mt-4 text-xs">
            <TbHash size={18} className="text-[--green] opacity-50 flex-shrink-0" />
            <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => {
                    const isActive = currentTagSlug === tag.slug;
                    return (
                        <Link 
                            key={tag.id} 
                            href={`/blog/cimke/${tag.slug}`}
                            className={`px-3 py-1 rounded-full border transition-all duration-200 font-medium whitespace-nowrap
                                ${isActive 
                                    ? 'bg-[--yellow] border-[--yellow] text-[--green]' 
                                    : 'bg-white border-white text-gray-500 hover:border-[--yellow] hover:text-[--green]'
                                }
                            `}
                        >
                            {tag.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
