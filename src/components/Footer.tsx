"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import LogoBrand from "./base/logobrand";
import TextSpan from "./base/textSpan";
import { FaDiscord, FaTwitter, FaTelegram, FaGithub, FaMailBulk, FaShareAlt } from 'react-icons/fa';
import ShareModal from "./customer/shareModal";
import Famous from "./customer/famous";
import { socialLinks } from "@/content/social";


const links = [
    { name: "@2025 All rights reserved", href: "#" },
    { name: "Terms of Service", href: "#" },
];

export default function Footer() {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

    const handleShareClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsShareModalOpen(true);
    };

    const Links = [
        {
            ...socialLinks[0],
            icon: <FaTwitter />,
            href: socialLinks[0].href,
            label: socialLinks[0].label
        },
        {
            ...socialLinks[1],
            icon: <FaTelegram />,
            href: socialLinks[1].href,
            label: socialLinks[1].label
        },
        {
            ...socialLinks[2],
            icon: <FaGithub />,
            href: socialLinks[2].href,
            label: socialLinks[2].label
        },
        
        {
            ...socialLinks[3],
            icon: <FaDiscord />,
            href: socialLinks[3].href,
            label: socialLinks[3].label
        },
        {
            ...socialLinks[4],
            icon: <FaMailBulk />,
            href: socialLinks[4].href,
            label: socialLinks[4].label
        },
        {
            name: 'share',
            icon: <FaShareAlt />,
            href: '#',
            label: 'Share',
            onClick: handleShareClick
        },
    ];

    return (
        <>
            <footer className="w-full bg-black/90 pt-10 pb-8 mt-16 border-t border-white/20">
                <Container>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-white/10 pb-6">
                        <Famous className="max-w-2xl"/>
                        <div className="flex flex-col items-end gap-2">
                            <TextSpan>Social media</TextSpan>
                            <div className="flex items-center gap-1">
                                {Links.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item.name !== 'share' ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        onClick={item.onClick}
                                    >
                                        <div className="w-10 h-10 rounded-md flex items-center justify-center opacity-80 hover:text-theme hover:scale-105 transition-all text-lg">
                                            {item.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-4">
                        <div className="flex items-center gap-2">
                            <LogoBrand />
                        </div>
                        <div className="flex gap-6">
                            {links.map((item, i) => (
                                <a key={i} href={item.href} className="text-white/70 hover:text-theme transition">
                                    <TextSpan>{item.name}</TextSpan>
                                </a>
                            ))}
                        </div>
                    </div>
                </Container>
            </footer>

            <ShareModal
                isOpen={isShareModalOpen}
                onOpenChange={setIsShareModalOpen}
            />
        </>
    );
}

