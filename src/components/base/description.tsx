"use client";

import { cn } from "@/lib/utils";

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';

const sizeStyles: Record<SizeVariant, string> = {
    'xs': 'text-xs md:text-sm',
    'sm': 'text-sm md:text-md',
    'md': 'text-md md:text-lg', 
    'lg': 'text-lg md:text-xl',
};


interface DescriptionProps {
    children: React.ReactNode;
    size?: SizeVariant;
    className?: string;
}

export default function Description({ 
    children, 
    size = "md", 
    className,
}: DescriptionProps) {
    // if the className contains the text-xx responsive class, do not automatically add sizeStyles
    const hasResponsiveText = className?.match(/text-(xs|sm|md|lg)/);

    return (
        <p
            className={cn(
                "leading-relaxed max-w-4xl mx-auto text-neutral-300",
                !hasResponsiveText && sizeStyles[size],
                className
            )}
        >
            {children}
        </p>
    );
}