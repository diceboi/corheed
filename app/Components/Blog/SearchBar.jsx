"use client";

import { useState } from "react";
import { TbSearch, TbX } from "react-icons/tb";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleClear = () => {
        setQuery("");
        onSearch("");
    };

    return (
        <div className="relative w-full">
            {/* Search Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <TbSearch size={24} />
            </div>

            {/* Input */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Keresés a blogban..."
                className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-[--mint] focus:outline-none transition-all text-base"
                style={{
                    boxShadow: 'rgba(171, 142, 37, 0.3) 0px -3px 0px inset'
                }}
            />

            {/* Clear Button */}
            {query && (
                <button
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[--green] transition-colors"
                    aria-label="Törlés"
                >
                    <TbX size={24} />
                </button>
            )}
        </div>
    );
}
