"use client";

import { useState, useEffect } from "react";
import BlogCard from "../Components/Blog/BlogCard";
import SearchBar from "../Components/Blog/SearchBar";
import RegularContainer from "../Components/UI/RegularContainer";
import CategoryTiles from "../Components/Blog/CategoryTiles";
import TagCloud from "../Components/Blog/TagCloud";

export default function BlogPage({ initialPosts = [], initialCategories = [], initialTags = [], currentCategorySlug, currentTagSlug = null, title, description }) {
    const [filteredPosts, setFilteredPosts] = useState(initialPosts);
    const [searchQuery, setSearchQuery] = useState("");

    // Client-side search filtering
    const handleSearch = (query) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setFilteredPosts(initialPosts);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = initialPosts.filter(post => {
            const titleMatch = post.title?.toLowerCase().includes(lowerQuery);
            const excerptMatch = post.excerpt?.toLowerCase().includes(lowerQuery);
            const tagMatch = post.tags?.nodes?.some(tag => tag.name.toLowerCase().includes(lowerQuery));
            return titleMatch || excerptMatch || tagMatch;
        });

        setFilteredPosts(filtered);
    };

    return (
        <>
            {/* Hero Section */}
            <RegularContainer classname="bg-[--lightgreen] pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-bold text-[--green] mb-6 uppercase tracking-tight">
                        {title || "Olvasnivalók"}
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
                        {description || "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről. Praktikus tanácsok és szakmai insights a mai üzleti világból."}
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-10">
                        <SearchBar onSearch={handleSearch} allPosts={initialPosts} allTags={initialTags} />
                        {initialTags && initialTags.length > 0 && (
                            <TagCloud tags={initialTags} currentTagSlug={currentTagSlug} />
                        )}
                    </div>

                    {/* Category Block */}
                    {initialCategories && initialCategories.length > 0 && (
                        <div className="pt-4">
                            <CategoryTiles
                                categories={initialCategories}
                                currentCategorySlug={currentCategorySlug}
                                title="Kategóriák"
                            />
                        </div>
                    )}
                </div>
            </RegularContainer>

            {/* Blog Posts Section */}
            <RegularContainer classname="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Results Info */}
                    {searchQuery && (
                        <p className="text-center text-gray-600 mb-8">
                            {filteredPosts.length} találat &quot;{searchQuery}&quot; keresésre
                        </p>
                    )}

                    {/* Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-xl text-gray-600">
                                {searchQuery
                                    ? "Nincs találat a keresett kifejezésre."
                                    : "Jelenleg nincsenek blogbejegyzések."}
                            </p>
                        </div>
                    )}
                </div>
            </RegularContainer>
        </>
    );
}
