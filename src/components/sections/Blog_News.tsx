"use client"

// import { useState } from "react"
import TitleLabel from "../customer/TitleLabel"
import BlogCard from "../customer/blogCard"
import { Container } from "../Container"
import { postsData, news } from "@/content/blog"

export default function BlogNews() {

    return (
        <section className="w-full py-8 md:py-16">
            <Container className="flex flex-col items-center justify-center space-y-8 px-0 md:px-0 ">
                <TitleLabel>Blog news</TitleLabel>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {news.map((item) => (
                        <BlogCard key={`post-blogCard-${item.id}`} post={item} />
                    ))}
                </div>

                <div className="w-full mt-4 md:mt-8 h-1 border-b border-gray-500"></div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {postsData.map((post) => (
                        <BlogCard key={`post-blogCard-${post.id}`} post={post} />
                    ))}
                </div>


            </Container>
        </section>
    )
}





