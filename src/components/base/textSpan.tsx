"use client"

import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function TextSpan({ children, className }: Props) {


    return (

        <span className={`text-xs md:text-sm font-mono text-neutral-400 transition ${className}`}>
            {children}
        </span>
    );
}


