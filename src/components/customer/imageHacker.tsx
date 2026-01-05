"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import hacker from "@/assets/image/hacker21.png";

interface ImageHackerProps {
  width: number;
  height: number;
}

export default function ImageHacker({ width, height }: ImageHackerProps) {
  return (
    <div className="w-full h-full flex items-end justify-center">
        <PixelatedCanvas
          src={hacker}
          width={width}
          height={height}
          cellSize={6} 
          dotScale={0.35} 
          shape="square" 
          // backgroundColor="#000000"
          dropoutStrength={0.1} // 
          interactive  // 
          distortionStrength={2} // 
          distortionRadius={100} // 
          distortionMode="swirl" // 
          followSpeed={0.2} // 
          jitterStrength={5} // 
          jitterSpeed={4} // 
          // sampleAverage // 
          className="w-full h-auto"
        />
    </div>
  );
}


