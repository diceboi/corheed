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
                {sidebarPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                        <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white transition-colors">
                            {/* Thumbnail */}
                            {post.featuredImage?.node?.sourceUrl && (
                                <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        fill
                                        className="object-cover"
                                        sizes="80px"
                                    />
                                </div>
                            )}

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
                ))}
            </div>
        </div>
    );
}
