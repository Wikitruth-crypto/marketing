"use client";
import React from "react";
import { StickyScroll } from "@/components/customer/sticky-scroll-reveal";
import { carouselData, carouselTitle } from "@/content/home";
import { Container } from "@/components/Container";

// Convert carouselData to format required by StickyScroll component
const content = carouselData.map((item) => ({
    title: item.title,
    description: item.description,
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
            <img
                src={item.image}
                className="h-full w-full object-contain"
                alt={item.title}
            />
        </div>
    ),
}));

export function StickyScrollRevealDemo() {
    return (
        <section className="w-full py-4 mb-10 md:mb-20">
            <Container>
                <div className="flex flex-col items-center justify-center mb-10 md:mb-15">
                <h2 className="text-2xl font-bold text-slate-100 ">{carouselTitle}</h2>

                </div>
                <StickyScroll content={content} />
            </Container>
        </section>
    );
}
