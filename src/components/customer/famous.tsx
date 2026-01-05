"use client"

import { useState, useEffect } from 'react'
import famous from '@/assets/data/famous'
import { cn } from '@/lib/utils';


interface Props {
    textDirection?:'left'|'right'|'default'; 
    fontSize?: number;
    fontColor?: string;
    className?: string;
    autoPlay?: boolean; 
    interval?: number; // The time interval between switching quotes
}

export default function Famous({
    textDirection = 'default',
    fontSize = 16,
    fontColor = 'white',
    className,
    autoPlay = true,
    interval = 10000
}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [nextQuote, setNextQuote] = useState(famous[0])
    const [mounted, setMounted] = useState(false)

    // 
    const getRandomQuote = () => {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * famous.length)
        } while (randomIndex === currentIndex && famous.length > 1)
        return { index: randomIndex, quote: famous[randomIndex] }
    }

    // 
    const switchToNext = () => {
        setIsVisible(false)
        
        setTimeout(() => {
            const { index, quote } = getRandomQuote()
            setCurrentIndex(index)
            setNextQuote(quote)
            setIsVisible(true)
        }, 300) // 
    }

    // 
    useEffect(() => {
        setMounted(true)
    }, [])

    // 
    useEffect(() => {
        if (!autoPlay || !mounted) return

        const timer = setInterval(() => {
            switchToNext()
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, interval, currentIndex, mounted])

    // Initialize random quote (only on client)
    useEffect(() => {
        if (mounted) {
            const { quote } = getRandomQuote()
            setNextQuote(quote)
        }
    }, [mounted])

    // 
    const getTextAlignment = () => {
        switch (textDirection) {
            case 'left':
                return {
                    proverb: 'text-left',
                    author: 'text-left'
                }
            case 'right':
                return {
                    proverb: 'text-right',
                    author: 'text-right'
                }
            case 'default':
            default:
                return {
                    proverb: 'text-left',
                    author: 'text-right'
                }
        }
    }

    const alignment = getTextAlignment()

    return (
        <div 
            className={cn(
                "flex-1 transition-all duration-300 ease-in-out",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
                className
            )}
            style={{ 
                fontSize: `${fontSize}px`,
                color: fontColor 
            }}
        >
            {/* Quote content */}
            <p 
                className={cn(
                    "leading-relaxed mb-2 transition-all duration-300",
                    "italic ",
                    alignment.proverb
                )}
                style={{ 
                    fontSize: `${fontSize}px`,
                    color: fontColor 
                }}
            >
                "{nextQuote.proverb}"
            </p>
            
            {/* Author/Source */}
            <p 
                className={cn(
                    "text-sm opacity-60 transition-all duration-300",
                    alignment.author
                )}
                style={{ 
                    fontSize: `${fontSize * 0.875}px`,
                    color: fontColor 
                }}
            >
                —— {nextQuote.from}
            </p>

            {/* Manual switch button (optional) */}
            {!autoPlay && (
                <button
                    onClick={switchToNext}
                    className="mt-4 px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors"
                    style={{ color: fontColor }}
                >
                    Next
                </button>
            )}
        </div>
    )
}


