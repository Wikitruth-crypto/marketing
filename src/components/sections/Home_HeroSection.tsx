"use client";
import { Container } from "@/components/Container";
import Button1 from "@/components/base/button1";
import Button3 from "@/components/base/button3";
import ImageHacker from "../customer/imageHacker";
import { useEffect, useState } from "react";
import TitleText from "@/components/base/titleText";
import { heroData } from "@/content/home";

// Constants consistent with imageHacker.tsx
const MAX_WIDTH = 1152; // 6xl
const MINI_BREAKPOINT = 425;
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;
const DEFAULT_ASPECT_RATIO = 16 / 9;

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 1152, height: 648, sectionHeight: 648 }); // 默认尺寸

  useEffect(() => {
    // Calculate responsive width and height
    const updateDimensions = () => {
      const windowWidth = window.innerWidth;
      let calculatedWidth: number;
      let aspectRatio: number = 16 / 9;

      if (windowWidth >= DESKTOP_BREAKPOINT) {
        // Desktop: Maximum width 6xl (1152px), but not exceeding window width
        calculatedWidth = Math.min(MAX_WIDTH, windowWidth * 0.95);
        aspectRatio = 16 / 9;
      } else if (windowWidth >= TABLET_BREAKPOINT) {
        // Tablet: 90% of window width, but not exceeding 6xl
        calculatedWidth = Math.min(MAX_WIDTH, windowWidth * 0.9);
        aspectRatio = 16 / 9;
      } else if (windowWidth >= MOBILE_BREAKPOINT) {
        calculatedWidth = windowWidth * 1;
        aspectRatio = 16 / 10;
      } else if (windowWidth >= MINI_BREAKPOINT) {
        calculatedWidth = windowWidth * 1.2;
        aspectRatio = 16 / 11;
      } else {
        calculatedWidth = windowWidth * 1.3;
        aspectRatio = 16 / 12;
      }

      // Calculate height and section height
      const calculatedHeight = calculatedWidth / DEFAULT_ASPECT_RATIO;
      const calculatedSectionHeight = calculatedWidth / aspectRatio;
      setDimensions({
        width: calculatedWidth,
        height: calculatedHeight,
        sectionHeight: calculatedSectionHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleGetStart = (): void => {
    window.open(heroData.primaryCta.link, "_blank");
  };
  const handleLearnMore = (): void => {
    window.open(heroData.secondaryCta.link, "_blank");
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ height: `${dimensions.sectionHeight}px` }}
    >
      <div className="absolute inset-0 z-0">
        <ImageHacker width={dimensions.width} height={dimensions.height} />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center h-full pointer-events-none">
        <div>
          <h1 className="mb-4 text-xl md:text-3xl lg:text-6xl font-brand text-theme">{heroData.title}</h1>
        </div>

        <TitleText size="h6" className="leading-relaxed mx-auto text-neutral-300">
          {heroData.subtitle}
        </TitleText>
        <TitleText size="h6" className="leading-relaxed max-w-4xl mx-auto text-neutral-300">
          {heroData.subtitle2}
        </TitleText>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center mt-6 md:mt-10 pointer-events-auto">

          <Button3 onClick={handleGetStart}>{heroData.primaryCta.text}</Button3>
          <Button1 onClick={handleLearnMore}>{heroData.secondaryCta.text}</Button1>
        </div>
      </Container>
    </section>
  );
}


