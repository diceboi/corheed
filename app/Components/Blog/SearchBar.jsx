"use client";

import { useState, useRef, useEffect } from "react";
import { TbSearch, TbX, TbHash, TbFileText } from "react-icons/tb";
import Link from "next/link";

export default function SearchBar({ onSearch, allPosts = [], allTags = [] }) {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const wrapperRef = useRef(null);

    // Compute suggestions
    const lowerQuery = query.toLowerCase().trim();
    
    // Suggest Tags
    const suggestedTags = lowerQuery 
        ? allTags.filter(tag => tag.name.toLowerCase().includes(lowerQuery)).slice(0, 5)
        : [];
        
    // Suggest Posts
    const suggestedPosts = lowerQuery
        ? allPosts.filter(post => post.title.toLowerCase().includes(lowerQuery)).slice(0, 5)
        : [];

    const hasSuggestions = (suggestedTags.length > 0 || suggestedPosts.length > 0) && lowerQuery.length > 0;
    const showDropdown = isFocused && hasSuggestions;

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleClear = () => {
        setQuery("");
        onSearch("");
        setIsFocused(false);
    };

    return (
        <div ref={wrapperRef} className="relative w-full z-40">
            {/* Search Icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
                <TbSearch size={24} />
            </div>

            {/* Input */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                placeholder="Keresés a blogban, címkéken..."
                className="w-full pl-12 pr-12 py-4 rounded-3xl border-2 border-white focus:border-[--mint] focus:bg-white bg-white/70 backdrop-blur-sm focus:outline-none transition-all text-base shadow-sm relative z-10"
                style={{
                    boxShadow: 'rgba(171, 142, 37, 0.3) 0px -3px 0px inset'
                }}
            />

            {/* Clear Button */}
            {query && (
                <button
                    onClick={handleClear}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[--green] transition-colors z-10"
                    aria-label="Törlés"
                >
                    <TbX size={24} />
                </button>
            )}

            {/* Dropdown Suggestions */}
            {showDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col z-50 text-left">
                    
                    {/* Tags Section */}
                    {suggestedTags.length > 0 && (
                        <div className="p-2 border-b border-gray-100">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 py-2 block">
                                Címkék
                            </span>
                            {suggestedTags.map(tag => (
                                <Link 
                                    key={tag.id} 
                                    href={`/blog/cimke/${tag.slug}`}
                                    onClick={() => setIsFocused(false)}
                                    className="flex flex-row items-center gap-3 px-4 py-3 hover:bg-[--lightgreen] rounded-xl transition-colors cursor-pointer text-[--green] font-medium"
                                >
                                    <TbHash className="text-[--yellow] flex-shrink-0" size={18} />
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Posts Section */}
                    {suggestedPosts.length > 0 && (
                        <div className="p-2">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 py-2 block">
                                Cikkek
                            </span>
                            {suggestedPosts.map(post => (
                                <Link 
                                    key={post.id} 
                                    href={`/blog/${post.slug}`}
                                    onClick={() => setIsFocused(false)}
                                    className="flex flex-row items-center gap-3 px-4 py-3 hover:bg-[--lightgreen] rounded-xl transition-colors cursor-pointer text-gray-700"
                                >
                                    <TbFileText className="text-gray-400 flex-shrink-0" size={18} />
                                    <span className="truncate">{post.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
