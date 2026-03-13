import { getAllPosts, getAllCategories } from "@/lib/wordpress";
import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog | Coreheed Consulting",
    description: "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről.",
};

export default async function BlogPage() {
    let posts = [];
    let categories = [];

    try {
        [posts, categories] = await Promise.all([
            getAllPosts(),
            getAllCategories(),
        ]);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return <BlogClient initialPosts={posts} initialCategories={categories} />;
}
