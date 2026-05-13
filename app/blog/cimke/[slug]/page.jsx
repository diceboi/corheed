import { getPostsByTag, getAllTags, getAllCategories } from "@/lib/wordpress";
import BlogClient from "@/app/blog/BlogClient";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    let tags = [];
    try {
        tags = await getAllTags();
    } catch (error) {
        console.error("Error fetching tags for metadata:", error);
    }
    
    const currentTag = tags.find(t => t.slug === slug);

    if (!currentTag) {
        return {
            title: "Címke nem található | Coreheed Consulting",
        };
    }

    return {
        title: `${currentTag.name} címke | Coreheed Consulting Blog`,
        description: `Böngéssz ${currentTag.name} témájú bejegyzéseink között a Coreheed Consulting blogján.`,
        openGraph: {
            title: `${currentTag.name} címke | Coreheed Consulting Blog`,
            description: `Böngéssz ${currentTag.name} címkéjű bejegyzéseink között.`,
            url: `/blog/cimke/${slug}`,
            siteName: 'Coreheed Consulting',
            locale: 'hu_HU',
            type: 'website',
        },
    };
}

export default async function TagPage({ params }) {
    const { slug } = await params;

    let posts = [];
    let categories = [];
    let tags = [];
    let currentTag = null;

    try {
        [posts, categories, tags] = await Promise.all([
            getPostsByTag(slug),
            getAllCategories(),
            getAllTags()
        ]);
        currentTag = tags.find(t => t.slug === slug);
    } catch (error) {
        console.error("Error fetching tag data:", error);
    }

    const title = currentTag ? `#${currentTag.name}` : "Címke nem található";
    const description = currentTag 
        ? `Itt találod az összes cikket, amely meg lett jelölve a(z) "${currentTag.name}" címkével.`
        : "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről.";

    return (
        <BlogClient 
            initialPosts={posts} 
            initialCategories={categories} 
            initialTags={tags}
            currentTagSlug={slug}
            title={title}
            description={description}
        />
    );
}
