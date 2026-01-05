"use client";
import React from "react";

interface Button2Props {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button2({ children, onClick }: Button2Props) {

    return (
        <button onClick={onClick} className="p-[3px] relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-4 py-1 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent w-full h-full flex items-center justify-center min-w-0">
                {children}
            </div>
        </button>
    )

};
