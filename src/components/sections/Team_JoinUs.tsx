"use client"

import React, { useState } from "react";
import { Container } from "../Container";
import {Button} from 'antd'
import { cn } from "@/lib/utils";
import {
    Users,
    Mail,
} from "lucide-react";
import { teamRecruitmentTitle, teamRecruitmentContent, teamContactEmail } from "@/content/team";

const worksTags = [
    { name: "Developers", icon: Users, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "Community", icon: Users, color: "bg-green-500/20 text-green-400 border-green-500/30" },
    { name: "Lawyers", icon: Users, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { name: 'Media Operator', icon: Users, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
];

export default function JoinUsSection() {

    return (
        <section className="py-8 md:py-12 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-primary/20 mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4 md:mb-8">
                        <div>
                            <h3 className="text-lg md:text-2xl font-bold text-white">{teamRecruitmentTitle}</h3>
                        </div>
                    </div>
                    <p className="text-gray-300 font-p text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                        {teamRecruitmentContent}
                    </p>

                    <div className="w-full max-w-4xl mb-8">
                        <div className="flex flex-wrap justify-center gap-3">
                            {worksTags.map((tag, index) => {
                                const Icon = tag.icon;
                                return (
                                    <div
                                        key={index}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-full border",
                                            "text-sm font-medium",
                                            tag.color
                                        )}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{tag.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            icon={<Mail className="w-4 h-4" />}
                            variant="solid"
                            size="middle"
                            className="px-8 py-4 text-white md:text-lg"
                            // disabled={true}
                        >
                            Join Us
                        </Button>
                        <div className="flex items-center gap-4 text-gray-400">
                            <a
                                href="mailto:hr@wikitruth.io"
                                className="text-theme hover:text-theme/80 transition-colors text-sm md:text-base font-medium"
                            >
                                {teamContactEmail}
                            </a>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}
