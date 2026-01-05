"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Process } from "@/components/customer/process";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useEffect(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [contentRef]);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // adjust breakpoints calculation, ensure all cards can be activated
    // map scroll progress to card index, use a more reasonable distribution
    const progress = Math.max(0, Math.min(1, latest));
    let newActiveCard = 0;
    
    if (cardLength > 1) {
      // divide the progress range into cardLength equal parts, each card corresponds to a range
      // the activation range of each card is [i/cardLength, (i+1)/cardLength)
      const segmentSize = 1 / cardLength;
      
      // find the card index corresponding to the current progress
      for (let i = 0; i < cardLength; i++) {
        const segmentStart = i * segmentSize;
        const segmentEnd = (i + 1) * segmentSize;
        
        // if the progress is within this range, activate the corresponding card
        if (progress >= segmentStart && progress < segmentEnd) {
          newActiveCard = i;
          break;
        }
      }
      
      // ensure the last card is activated when the progress is close to 1
      if (progress >= (cardLength - 1) * segmentSize) {
        newActiveCard = cardLength - 1;
      }
    }
    
    setActiveCard(newActiveCard);
  });


  // const linearGradients = [
  //   "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  //   "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  //   "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  // ];

  // const [backgroundGradient, setBackgroundGradient] = useState(
  //   linearGradients[0],
  // );

  // useEffect(() => {
  //   setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  // }, [activeCard]);

  return (
    <motion.div
      className="relative w-full flex h-[30rem] justify-center space-x-6 overflow-y-scroll rounded-md py-4 px-0 scrollbar-hide"
      ref={ref}
    >
      {/* progress bar component*/}
      <Process
        height={height}
        heightTransform={heightTransform}
        opacityTransform={opacityTransform}
        activeCard={activeCard}
        cardLength={cardLength}
      />

      <div className="div relative flex items-start px-0" ref={contentRef}>
          <div className="max-w-4xl pl-20">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-md text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-20" />
          </div>
        </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-96 w-[40rem] overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
