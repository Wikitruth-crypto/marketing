import { lazy, Suspense } from "react";
import HeroSection from "@/components/sections/Home_HeroSection";
import { StickyScrollRevealDemo } from "@/components/sections/Home_CarouselSection";
import {TechnologySection} from "@/components/sections/Home_Technology";
import TruthBoxSection from "@/components/sections/Home_TruthBox";
import FeatureSection from "@/components/sections/Home_FeatureSection";
import PartnersSection from "@/components/sections/Home_PartnersSection";
import Thinking from "@/components/sections/Home_Thinking";
import Bottom from "@/components/sections/Home_Bottom";

// Lazy load large components to reduce initial bundle size
const GlobleEarth = lazy(() => import("@/components/sections/Home_GlobleEarth"));

export default function HomePage() {
    return (
        <div className="w-full overflow-hidden">
            <HeroSection />
            <Suspense fallback={<div className="h-screen" />}>
                <GlobleEarth />
            </Suspense>
            <Thinking />
            <StickyScrollRevealDemo />
            <TechnologySection />
            <TruthBoxSection />
            <FeatureSection />
            <PartnersSection />
            <Bottom />
        </div>
    );
}

