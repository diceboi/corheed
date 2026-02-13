import { getPostBySlug, getRecentPosts } from "@/lib/wordpress";
import Image from "next/image";
import BlogContent from "@/app/Components/Blog/BlogContent";
import BlogSidebar from "@/app/Components/Blog/BlogSidebar";
import RegularContainer from "@/app/Components/UI/RegularContainer";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const post = await getPostBySlug(slug);

        if (!post) {
            return {
                title: "BlogPost Not Found | Coreheed Consulting",
            };
        }

        return {
            title: `${post.title} | Coreheed Consulting Blog`,
            description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
        };
    } catch (error) {
        return {
            title: "Blog | Coreheed Consulting",
        };
    }
}

export default async function BlogPostPage({ params }) {
    const { slug } = params;

    let post = null;
    let recentPosts = [];

    try {
        [post, recentPosts] = await Promise.all([
            getPostBySlug(slug),
            getRecentPosts(5, slug),
        ]);
    } catch (error) {
        console.error("Error fetching blog post:", error);
    }

    if (!post) {
        return (
            <RegularContainer classname="bg-white pt-28 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-[--green] mb-4">
                        Blog bejegyzés nem található
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        A keresett blog bejegyzés nem létezik vagy el lett távolítva.
                    </p>
                    <Link
                        href="/blog"
                        className="inline-block bg-[--green] text-white px-8 py-3 rounded-lg hover:bg-[--mint] hover:text-[--green] transition-colors font-medium"
                    >
                        Vissza a bloghoz
                    </Link>
                </div>
            </RegularContainer>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            {/* Breadcrumbs */}
            <RegularContainer classname="bg-white pt-28 px-4">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Link href="/" className="hover:text-[--green]">Kezdőlap</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[--green]">Blog</Link>
                        <span>/</span>
                        <span className="text-[--green]">{post.title}</span>
                    </nav>
                </div>
            </RegularContainer>

            {/* Title Section */}
            <RegularContainer classname="bg-[--lightgreen] py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[--green] font-medium mb-4">{formattedDate}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--green]">
                        {post.title}
                    </h1>
                </div>
            </RegularContainer>

            {/* Featured Image */}
            {post.featuredImage?.node?.sourceUrl && (
                <RegularContainer classname="bg-white px-4">
                    <div className="max-w-7xl mx-auto -mt-8">
                        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText || post.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                        </div>
                    </div>
                </RegularContainer>
            )}

            {/* Content Area */}
            <RegularContainer classname="bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <BlogContent blocks={post.blocks} content={post.content} />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <BlogSidebar posts={recentPosts} currentSlug={slug} />
                        </div>
                    </div>
                </div>
            </RegularContainer>

            {/* Back to Blog */}
            <RegularContainer classname="bg-white pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <Link
                        href="/blog"
                        className="inline-block bg-[--green] text-white px-8 py-3 rounded-lg hover:bg-[--mint] hover:text-[--green] transition-colors font-medium"
                    >
                        Vissza a bloghoz
                    </Link>
                </div>
            </RegularContainer>
        </>
    );
}
