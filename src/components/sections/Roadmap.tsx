import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { Container } from '@/components/Container';
import {
    roadmapPhases,
    roadmapTitle,
    roadmapSubtitle,
    roadmapIntroduction,
    roadmapNote,
    type RoadmapPhase,
} from '@/content/roadmap';

export default function RoadmapSection() {
    const timelineData = roadmapPhases.map((phase: RoadmapPhase) => {
        return {
            title: phase.name,
            content: (
                <div>
                    <p className="mb-2 text-sm font-semibold text-neutral-300 md:text-base">
                        {phase.subtitle}
                    </p>
                    <p className="mb-6 text-xs font-normal text-neutral-400 md:text-sm">
                        {phase.description}
                    </p>

                    <div className="space-y-4">
                        {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="mb-6">
                                <div className="flex items-start gap-2 mb-2">
                                    <span
                                        className={`text-lg ${item.completed
                                            ? 'text-green-400'
                                            : 'text-neutral-500'
                                            }`}
                                    >
                                        {item.completed ? '✅' : '○'}
                                    </span>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-semibold text-white md:text-base mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs font-normal text-neutral-300 md:text-sm mb-2">
                                            {item.description}
                                        </p>
                                        {item.details && item.details.length > 0 && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.details.map((detail, detailIndex) => (
                                                    <div
                                                        key={detailIndex}
                                                        className="text-xs text-neutral-400 md:text-sm"
                                                        dangerouslySetInnerHTML={{
                                                            __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-300">$1</strong>'),
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        };
    });

    return (
        <div className="relative w-full overflow-clip bg-black">
            <Container className="py-20">
                <h1 className="text-2xl md:text-5xl mb-4 text-white max-w-4xl font-bold">
                    {roadmapTitle}
                </h1>
                <p className="text-lg md:text-xl mb-2 text-neutral-300 font-medium">
                    {roadmapSubtitle}
                </p>
                <p className="text-neutral-400 text-sm md:text-base max-w-3xl">
                    {roadmapIntroduction}
                </p>
            </Container>

            <div className="relative w-full">
                <Timeline data={timelineData} title="" description="" />
            </div>

            <Container className="pb-20">
                <div
                    className="text-xs md:text-sm text-neutral-400 max-w-3xl"
                    dangerouslySetInnerHTML={{
                        __html: roadmapNote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                    }}
                />
            </Container>
        </div>
    );
}
