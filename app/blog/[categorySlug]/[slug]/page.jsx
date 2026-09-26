import { getPostBySlug, getRecentPosts, getAllCategories } from "@/lib/wordpress";
import Image from "next/image";
import BlogContent from "@/app/Components/Blog/BlogContent";
import BlogSidebar from "@/app/Components/Blog/BlogSidebar";
import RegularContainer from "@/app/Components/UI/RegularContainer";
import Link from "next/link";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";
import CategoryTiles from "@/app/Components/Blog/CategoryTiles";

export async function generateMetadata({ params }) {
    const { categorySlug, slug } = await params;

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
    const { categorySlug, slug } = await params;

    let post = null;
    let recentPosts = [];
    let categories = [];

    try {
        console.log("Fetching post for slug:", slug, "categorySlug:", categorySlug);
        [post, recentPosts, categories] = await Promise.all([
            getPostBySlug(slug),
            getRecentPosts(5, slug),
            getAllCategories(),
        ]);
        console.log("Post found:", !!post);
    } catch (error) {
        console.error("Error fetching blog post data:", error);
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

    const currentCategory = categories.find(c => c.slug === categorySlug);

    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumbs
                items={[
                    { label: "Blog", href: "/blog" },
                    { 
                        label: currentCategory ? currentCategory.name : 'Kategória', 
                        href: currentCategory ? `/blog/kategoria/${currentCategory.slug}` : '#' 
                    },
                    { label: post.title }
                ]}
            />

            {/* Title Section */}
            <RegularContainer classname="bg-[--lightgreen] py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[--green] font-medium mb-4">{formattedDate}</p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[--green] leading-tight">
                        {post.title}
                    </h1>
                </div>
            </RegularContainer>

            {/* Content Area */}
            <RegularContainer classname="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Main Content (Left Column) */}
                        <div className="lg:col-span-2">
                            {/* Media Header: Featured Image or YouTube Player fallback */}
                            {post.featuredImage?.node?.sourceUrl && !post.featuredImage?.node?.isVideoThumbnail ? (
                                <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-md mb-8">
                                    <Image
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                                    />
                                </div>
                            ) : post.youtubeId && (!post.blocks || !post.blocks.some(b => b.name === 'core/embed' || b.name === 'core-embed/youtube' || b.name === 'core/video')) ? (
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-8 bg-black">
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${post.youtubeId}?rel=0`}
                                        title={post.title}
                                        className="absolute inset-0 w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            ) : post.isAudioPost && (!post.blocks || !post.blocks.some(b => b.name === 'core/audio')) ? (
                                <div className="relative w-full rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-[#0c2a21] via-[#123e31] to-[#0c2a21] text-white shadow-lg mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[--yellow] text-[--green] flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-3v8h3c1.66 0 3-1.34 3-3v-7c0-5.52-4.48-10-10-10z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-[--yellow] uppercase tracking-wider block">Podcast adás</span>
                                            <h3 className="text-xl font-bold text-white">{post.title}</h3>
                                        </div>
                                    </div>
                                    {post.audioUrl && (
                                        <audio src={post.audioUrl} controls className="w-full" preload="metadata" />
                                    )}
                                </div>
                            ) : null}

                            {/* Text Content */}
                            <BlogContent blocks={post.blocks} content={post.content} />
                        </div>

                        {/* Sidebar (Right Column) */}
                        <div className="lg:col-span-1">
                            <BlogSidebar posts={recentPosts} currentSlug={slug} />
                        </div>
                    </div>
                </div>
            </RegularContainer>

            {/* Category Tiles */}
            {categories && categories.length > 0 && (
                <RegularContainer classname="bg-white pb-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <CategoryTiles 
                            categories={categories} 
                            title="Kategóriák"
                        />
                    </div>
                </RegularContainer>
            )}

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
