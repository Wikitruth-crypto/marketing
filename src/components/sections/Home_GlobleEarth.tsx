"use client";
import Earth3D from "@/components/earth3d/Earth3D";
import { Container } from "@/components/Container";
import WorldMap from "@/components/ui/world-map";
import Description from "@/components/base/description";

import {
    ArrowRight,
    Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { crimeStats, crimeStatsTitle, crimeStatsDescription, moreData } from "@/content/home";


export default function GlobleEarth() {

    return (
        <section className="w-full relative overflow-hidden">

            <Container className="relative z-10">
                <div className="grid grid-cols-1 gap-3 lg:gap-6">
                    {/* First part: WorldMap background + title content + earth */}
                    <div className="relative h-[300px] md:h-[350px] lg:h-[450px] overflow-hidden">
                        {/* WorldMap background*/}
                        <div className="absolute inset-0 opacity-30 overflow-hidden">
                            <WorldMap />
                        </div>

                        {/* */}
                        <div className="absolute inset-0 z-10 -mx-8 md:-mx-12 w-[calc(100%+4rem)] md:w-[calc(100%+6rem)] overflow-hidden">
                            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[900px] translate-y-0">
                                <Earth3D
                                    themeColor='0xc6a9fc'
                                    isWaveLevelOpen={true}
                                    isDisableZoom={true}
                                    earthScale={0.8}
                                    glowSize={60}
                                    levelColors={{
                                        low: 0xFFFF00,
                                        middle: 0xFFA500,
                                        high: 0xFF0000,
                                    }}
                                    rotationSpeed={0.005}
                                />
                            </div>
                        </div>

                        <div className="relative z-20 space-y-4 text-center mt-8 md:mt-12">
                            <h2 className="text-xl md:text-2xl font-bold text-white">
                                {crimeStatsTitle}
                            </h2>
                            <Description>
                                {crimeStatsDescription}
                            </Description>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {crimeStats.map((stat, index) => (
                                <a
                                    key={index}
                                    href={stat.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", stat.bgColor)}>
                                            <stat.icon className={cn("w-4 h-4", stat.color)} />
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-white group-hover:text-theme transition-colors">{stat.value}</div>
                                            <div className="text-xs text-neutral-400">{stat.label}</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-400">{stat.description}</p>
                                </a>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-theme/10 to-blue-500/10 border border-primary/20">
                            <a href={moreData.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-theme" />
                                    <div>
                                        <p className="text-sm text-white font-medium">{moreData.title}</p>
                                        <p className="text-xs text-neutral-400">{moreData.website}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-theme ml-auto" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}





