import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
    const { title, slug, excerpt, date, featuredImage, categories } = post;

    // Format date
    const formattedDate = new Date(date).toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Clean excerpt HTML
    const cleanExcerpt = excerpt?.replace(/<[^>]*>/g, '') || '';
    const truncatedExcerpt = cleanExcerpt.length > 120
        ? cleanExcerpt.substring(0, 120) + '...'
        : cleanExcerpt;

    // Get first category
    const categoryName = categories?.nodes?.[0]?.name || 'Blog';
    // Fallback to 'egyeb' if there's no category to ensure a valid route structure
    const categorySlug = categories?.nodes?.[0]?.slug || 'egyeb';

    return (
        <div className="group flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 h-full relative hover:shadow-md">
            {/* Absolute link to ensure the whole card is clickable without nesting <a> tags */}
            <Link href={`/blog/${categorySlug}/${slug}`} className="absolute inset-0 z-10" aria-label={`Tovább a cikkre: ${title}`} />

            {/* Media Cover: Image (with video/audio overlay) OR Podcast Cover */}
            {featuredImage?.node?.sourceUrl ? (
                <div className="relative w-full h-64 overflow-hidden bg-gray-100 z-0">
                    <Image
                        src={featuredImage.node.sourceUrl}
                        alt={featuredImage.node.altText || title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Video Play Overlay */}
                    {(post.isVideoPost || featuredImage?.node?.isVideoThumbnail || post.youtubeId) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                <svg className="w-3.5 h-3.5 fill-red-500" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                                Videó
                            </span>
                        </div>
                    )}

                    {/* Audio Overlay on Image */}
                    {post.isAudioPost && !post.isVideoPost && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-[--yellow] text-[--green] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                </svg>
                            </div>
                            <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                                <svg className="w-3.5 h-3.5 fill-current text-[--yellow]" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                </svg>
                                Podcast
                            </span>
                        </div>
                    )}
                </div>
            ) : post.isAudioPost ? (
                /* Dedicated Podcast Hero Cover for Audio Posts without image */
                <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-[#0a231b] via-[#123e31] to-[#0c2a21] z-0 flex flex-col items-center justify-center p-6 text-white group-hover:brightness-105 transition-all">
                    {/* Decorative ambient radial glow */}
                    <div className="absolute w-44 h-44 rounded-full bg-[--mint]/20 blur-3xl pointer-events-none" />

                    {/* Soundwave Equalizer bars in background */}
                    <div className="flex items-center gap-1.5 mb-3 opacity-70">
                        <span className="w-1 h-3 bg-[--yellow] rounded-full animate-pulse" />
                        <span className="w-1 h-6 bg-[--yellow] rounded-full animate-pulse delay-75" />
                        <span className="w-1 h-10 bg-[--yellow] rounded-full animate-pulse delay-150" />
                        <span className="w-1 h-5 bg-[--yellow] rounded-full animate-pulse delay-200" />
                        <span className="w-1 h-8 bg-[--yellow] rounded-full animate-pulse delay-100" />
                        <span className="w-1 h-4 bg-[--yellow] rounded-full animate-pulse delay-300" />
                    </div>

                    {/* Central Play/Headphone Button */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[--yellow] text-[--green] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300 mb-2">
                        <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>

                    {/* Label below button */}
                    <span className="relative z-10 text-xs font-medium text-gray-200 tracking-wide">
                        Kattints a meghallgatáshoz
                    </span>

                    {/* Badge top right */}
                    <span className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                        <svg className="w-3.5 h-3.5 fill-current text-[--yellow]" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                        </svg>
                        Podcast
                    </span>
                </div>
            ) : null}

            {/* Content */}
            <div className="flex flex-col flex-1 p-8 relative z-20 pointer-events-none">
                {/* Category Badge */}
                <div className="mb-4 pointer-events-auto">
                    {categorySlug ? (
                        <Link 
                            href={`/blog/kategoria/${categorySlug}`}
                            className="inline-block px-4 py-1 bg-[--yellow] text-[--green] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[--lightgreen] transition-colors"
                        >
                            {categoryName}
                        </Link>
                    ) : (
                        <span className="inline-block px-4 py-1 bg-[--yellow] text-[--green] text-xs font-bold uppercase tracking-wider rounded-full">
                            {categoryName}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[--black] mb-4 group-hover:text-[--green] transition-colors line-clamp-2 leading-tight">
                    {title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-base mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {truncatedExcerpt}
                </p>

                {/* Tags */}
                {post.tags?.nodes && post.tags.nodes.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-gray-100 pointer-events-auto">
                        {post.tags.nodes.map(tag => (
                            <Link 
                                key={tag.slug} 
                                href={`/blog/cimke/${tag.slug}`}
                                className="text-xs font-semibold text-gray-500 hover:text-[--green] bg-gray-50 hover:bg-[--yellow] border border-gray-100 px-3 py-1 rounded-full transition-colors flex items-center gap-1 z-30 relative"
                            >
                                <span className="text-[--green]">#</span>{tag.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
