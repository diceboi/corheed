import { getAllPosts } from "@/lib/wordpress";
import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog | Coreheed Consulting",
    description: "Fedezd fel cikkeinket a generációkról, munkahelyi együttműködésről és vezetésfejlesztésről.",
};

export default async function BlogPage() {
    let posts = [];

    try {
        posts = await getAllPosts();
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    return <BlogClient initialPosts={posts} />;
}
