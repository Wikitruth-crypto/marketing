"use client";
// import { cn } from "@/lib/utils";

export interface Post{
        id: number,
        title: string,
        href: string,
        description: string,
        imageUrl: string,
        date: string,
        datetime: string,
        category: { title: string, href: string },
        author?: {
            name: string,
            role: string,
            href: string,
            imageUrl: string,
        },
    }
interface BlogCardProps {
    post: Post;
}

export default function BlogCard({ post}: BlogCardProps) {
    return (

        <article key={post.id} className="flex flex-col items-start ">
            <div className="relative w-full">
                <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
            </div>
            <div className="max-w-xl">
                <div className="mt-4 flex font-mono items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-neutral-300">
                        {post.date}
                    </time>
                    <a
                        href={post.category.href}
                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-neutral-300 hover:bg-neutral-800"
                    >
                        {post.category.title}
                    </a>
                </div>
                <hr className="my-4 border-neutral-200/10" />
                <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-neutral-300">
                        <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm/6 text-neutral-400 font-mono">{post.description}</p>
                </div>
                {post.author && (
                <div className="relative mt-6 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-neutral-100" />
                    <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                                <span className="absolute inset-0" />
                                {post.author.name}
                            </a>
                        </p>
                        <p className="text-neutral-400 font-mono text-sm md:text-base">{post.author.role}</p>
                        </div>
                    </div>
                )}
            </div>
        </article>

    )
}