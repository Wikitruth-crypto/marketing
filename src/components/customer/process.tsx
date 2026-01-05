"use client";
import React from "react";
import { motion, MotionValue } from "motion/react";

interface ProcessProps {
  height: number;
  heightTransform: MotionValue<number>;
  opacityTransform: MotionValue<number>;
  activeCard: number;
  cardLength: number;
}

export const Process = ({
  height,
  heightTransform,
  opacityTransform,
  activeCard,
  cardLength,
}: ProcessProps) => {
  return (
    <div className="sticky top-0 left-0 self-start z-10 pointer-events-none" style={{ height: '100%' }}>
      <div className="relative" style={{ height: height + "px" }}>
        {/* gray background bar*/}
        <div
          className="absolute left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: height + "px" }}
        />
        
        {/* progress animation bar*/}
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute left-8 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
        
        {/* nodes - distributed according to the position of the content items*/}
        {Array.from({ length: cardLength }).map((_, index) => {
          // Calculate the position of each node on the progress bar
          // The first node is at the top, the last node is at the bottom
          const nodePosition = cardLength > 1 
            ? (index / (cardLength - 1)) * height 
            : 0;
          const isActive = activeCard === index;
          
          return (
            <div
              key={`node-${index}`}
              className="absolute left-3 pointer-events-auto"
              style={{ 
                top: `${nodePosition}px`, 
                transform: 'translateY(-50%)',
              }}
            >
              <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
                <div
                  className={`h-4 w-4 rounded-full border transition-colors ${
                    isActive
                      ? "bg-purple-500 border-purple-400"
                      : "bg-neutral-800 border-neutral-700"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



