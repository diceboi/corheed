import Link from "next/link";
import Image from "next/image";

export default function BlogSidebar({ posts, currentSlug }) {
    // Filter out current post
    const sidebarPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 5);

    if (sidebarPosts.length === 0) return null;

    return (
        <div className="lg:sticky lg:top-24 bg-[--lightgreen] rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[--green] mb-6">
                További blogok
            </h3>

            <div className="flex flex-col gap-4">
                {sidebarPosts.map((post) => {
                    const postCatSlug = post.categories?.nodes?.[0]?.slug || 'egyeb';
                    return (
                        <Link key={post.id} href={`/blog/${postCatSlug}/${post.slug}`} className="group">
                            <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white transition-colors">
                                {/* Thumbnail */}
                                {post.featuredImage?.node?.sourceUrl ? (
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                        <Image
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.featuredImage.node.altText || post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform"
                                            sizes="80px"
                                        />
                                        {(post.isVideoPost || post.featuredImage?.node?.isVideoThumbnail || post.youtubeId) && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                                                <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow">
                                                    <svg className="w-3.5 h-3.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                        {post.isAudioPost && !post.isVideoPost && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                                                <div className="w-7 h-7 rounded-full bg-[--yellow] text-[--green] flex items-center justify-center shadow">
                                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : post.isAudioPost ? (
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#0c2a21] to-[#134436] flex flex-col items-center justify-center text-[--yellow]">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                        </svg>
                                        <span className="text-[9px] font-bold tracking-wider mt-1 text-white/80">AUDIO</span>
                                    </div>
                                ) : null}

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-[--black] group-hover:text-[--green] transition-colors line-clamp-2 mb-1">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {new Date(post.date).toLocaleDateString('hu-HU', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
