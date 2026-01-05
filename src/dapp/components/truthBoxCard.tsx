"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import PriceLabel from './base/priceLabel';
import ImageSwiper from './imageSwiper';
import { boxStatus } from '@/dapp/types/contracts/truthBox';
import StatusLabel from './base/statusLabel';


interface TruthBoxCardProps {
    data: any;
    enableIpfsUrl?: boolean;
    onClick?: () => void;
    className?: string;
    onCompleted?: () => void; 
}

const TruthBoxCard: React.FC<TruthBoxCardProps> = ({
    data,
    enableIpfsUrl = true,
    onClick,
    className,
    onCompleted, 
}) => {
    
    const shouldShowPrice = data.status !== boxStatus[0] && data.status !== boxStatus[6];

    const handleImageLoad = () => {
        if(onCompleted) {
            onCompleted();
            if(import.meta.env.DEV) {
                console.log('onCompleted: truthBoxCard');
            }
        }
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center w-full bg-card",
                "md:max-w-[350px]", 
                "mt-3 sm:mt-4 md:mt-5",
                "border border-border/50",
                "rounded-xl md:rounded-2xl shadow-lg",
                "hover:outline-2 hover:outline-theme",
                onClick && "cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            <div className={cn(
                "w-full overflow-hidden",
                // "rounded-t-xl md:rounded-t-2xl"
            )}>
                <ImageSwiper
                    images={[data.boxImage, data.nftImage]}
                    enableIpfsUrl={enableIpfsUrl}
                    altPrefix={`truthbox-${data.tokenId}`}
                    className="w-full"
                    onImageLoad={handleImageLoad} 
                />
            </div>

            <div className={cn(
                "w-full bg-card flex flex-col items-center",
                "rounded-b-xl md:rounded-b-2xl",
                "px-2 sm:px-3 md:px-4",
                "py-2 sm:py-2.5 md:py-3"
            )}>

                <p
                    className={cn(
                        "text-neutral-300 line-clamp-2",
                        "text-xs sm:text-sm md:text-md",
                        "leading-tight md:leading-normal"
                    )}
                >
                    {data.title}
                </p>
                {/* </div> */}

                <div className={cn(
                    "w-full flex justify-between items-center",
                    "mt-1 mb-1 sm:mt-1.5 sm:mb-1.5 md:mt-2 md:mb-2",
                    "min-h-[20px] sm:min-h-[22px] md:min-h-[24px]"
                )}>

                    <p
                        className="text-neutral-300 text-sm line-clamp-1 max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
                    >
                        {data.country} {data.state}
                    </p>
                    <p 
                        className="text-neutral-300 text-sm line-clamp-1"
                    >
                        {data.eventDate}
                    </p>
                </div>

                <hr className="w-full border-neutral-400/50" />

                <div className={cn(
                    "w-full flex justify-between items-center",
                    "mt-1 mb-0 sm:mt-1.5 sm:mb-0 md:mt-2 md:mb-0",
                    "min-h-[24px] sm:min-h-[26px] md:min-h-[28px]"
                )}>
                    <p className="text-white font-medium shrink-0">
                        {data.tokenId}
                    </p>

                    <div className={cn(
                        "flex items-center justify-end min-w-0",
                        "gap-1 sm:gap-1.5 md:gap-2"
                    )}>
                        {shouldShowPrice && data.price !== undefined && (
                            <PriceLabel
                                price={data.price}
                                symbol='WTRC.S'
                                variant="small"
                                responsive={true}
                                className="shrink min-w-0"
                            />
                        )}

                        <StatusLabel
                            status={data.status}
                            size="sm"
                            responsive={true}
                            className="shrink-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruthBoxCard;


