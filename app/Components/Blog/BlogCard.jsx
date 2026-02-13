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
    const category = categories?.nodes?.[0]?.name || 'Blog';

    return (
        <Link href={`/blog/${slug}`}>
            <div className="group flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-500 h-full">
                {/* Featured Image */}
                {featuredImage?.node?.sourceUrl && (
                    <div className="relative w-full h-64 overflow-hidden bg-gray-100">
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
                <div className="flex flex-col flex-1 p-8">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="inline-block px-4 py-1 bg-[--yellow] text-[--green] text-xs font-bold uppercase tracking-wider rounded-full">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[--black] mb-4 group-hover:text-[--green] transition-colors line-clamp-2 leading-tight">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-base mb-6 flex-1 line-clamp-3 leading-relaxed">
                        {truncatedExcerpt}
                    </p>
                </div>
            </div>
        </Link>
    );
}
