import { getAllPosts, getAllCategories, getAllTags } from "@/lib/wordpress";
import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog | Coreheed Consulting",
    description: "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről.",
};

export default async function BlogPage() {
    let posts = [];
    let categories = [];
    let tags = [];

    try {
        [posts, categories, tags] = await Promise.all([
            getAllPosts(),
            getAllCategories(),
            getAllTags()
        ]);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return <BlogClient initialPosts={posts} initialCategories={categories} initialTags={tags} />;
}
