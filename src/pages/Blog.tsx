import BlogNews from "@/components/sections/Blog_News";
import AIResearchBlogSection from "@/components/sections/Blog_AIResearch";

export default function BlogPage() {
    return (
        <div className="w-full max-w-full overflow-hidden py-10">
            <AIResearchBlogSection />
            <BlogNews />
        </div>
    )
}

