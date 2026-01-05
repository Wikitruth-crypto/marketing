"use client";

import { cn } from "@/lib/utils";

type SizeVariant = 'xs' | 'sm' | 'md' | 'lg';
type WeightVariant = 'light' | 'normal' | 'medium' | 'semibold';

const sizeStyles: Record<SizeVariant, string> = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-md', 
    'lg': 'text-lg',
};

const weightStyles: Record<WeightVariant, string> = {
    'light': 'font-light',
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
};


const lineClampStyles: Record<number | 'none', string> = {
    1: 'line-clamp-1',
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5',
    6: 'line-clamp-6',
    'none': '',
};

interface ParagraphProps {
    children: React.ReactNode;
    size?: SizeVariant;
    weight?: WeightVariant;
    isCopy?: boolean;
    lineClamp?: number| 'none';
    className?: string;
    maxLength?: number;
}


export default function Paragraph({ 
    children, 
    size = "md", 
    weight = "normal", 
    lineClamp = 2, 
    isCopy = false,
    className,
    maxLength,
}: ParagraphProps) {
    // if the className contains the text-xx responsive class, do not automatically add sizeStyles
    const hasResponsiveText = className?.match(/text-(xs|sm|md|lg)/);

    // handle maximum length
    let displayText = children;
    let isTruncated = false;
    if (typeof children === 'string' && maxLength && children.length > maxLength) {
        displayText = children.slice(0, maxLength) + '...';
        isTruncated = true;
    }

    const textContent = String(displayText);
    const fullContent = String(children);

    return (
        <p
            className={cn(
                "leading-relaxed font-p",
                !hasResponsiveText && sizeStyles[size],
                weightStyles[weight],
                lineClampStyles[lineClamp],
                className
            )}
            title={isTruncated ? fullContent : undefined}
        >
            {textContent}
        </p>
    );
}