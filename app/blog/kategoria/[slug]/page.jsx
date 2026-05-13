import { getPostsByCategory, getAllCategories, getAllTags } from "@/lib/wordpress";
import BlogClient from "@/app/blog/BlogClient";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    let categories = [];
    try {
        categories = await getAllCategories();
    } catch (error) {
        console.error("Error fetching categories for metadata:", error);
    }
    
    const currentCategory = categories.find(c => c.slug === slug);

    if (!currentCategory) {
        return {
            title: "Kategória nem található | Coreheed Consulting",
        };
    }

    return {
        title: `${currentCategory.name} Cikkek | Coreheed Consulting Blog`,
        description: `Böngéssz ${currentCategory.name} témájú bejegyzéseink között a Coreheed Consulting blogján.`,
        openGraph: {
            title: `${currentCategory.name} Cikkek | Coreheed Consulting Blog`,
            description: `Böngéssz ${currentCategory.name} témájú bejegyzéseink között.`,
            url: `/blog/kategoria/${slug}`,
            siteName: 'Coreheed Consulting',
            locale: 'hu_HU',
            type: 'website',
        },
    };
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;

    let posts = [];
    let categories = [];
    let tags = [];
    let currentCategory = null;

    try {
        [posts, categories, tags] = await Promise.all([
            getPostsByCategory(slug),
            getAllCategories(),
            getAllTags()
        ]);
        currentCategory = categories.find(c => c.slug === slug);
    } catch (error) {
        console.error("Error fetching category data:", error);
    }

    const title = currentCategory ? `${currentCategory.name}` : "Olvasnivalók";
    const description = currentCategory 
        ? `Fedezd fel cikkeinket "${currentCategory.name}" témakörben. Praktikus tanácsok és szakmai insights a mai üzleti világból.`
        : "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről.";

    return (
        <BlogClient 
            initialPosts={posts} 
            initialCategories={categories} 
            initialTags={tags}
            currentCategorySlug={slug}
            title={title}
            description={description}
        />
    );
}
