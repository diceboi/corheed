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

            {/* Featured Image */}
            {featuredImage?.node?.sourceUrl && (
                <div className="relative w-full h-64 overflow-hidden bg-gray-100 z-0">
                    <Image
                        src={featuredImage.node.sourceUrl}
                        alt={featuredImage.node.altText || title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

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
