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
                            {/* Featured Image inside left column */}
                            {post.featuredImage?.node?.sourceUrl && (
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
                            )}

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
