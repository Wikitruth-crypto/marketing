"use client";
// import { useBrandColorStore } from "@/store/storeBrandColor";
import { Button } from 'antd';
import StatusStep from "@/dapp/components/statusStep";
import { Container } from "@/components/Container";
import { testBox2 } from "@/assets/data/testBox";
import { truthDescription, truthboxData } from "@/content/home";
import TruthBoxCard from "@dapp/components/truthBoxCard";
import Description from "@/components/base/description";
import {
    AlertTriangle,
    BarChart3,
    // Globe,
    Eye,
    // Heart
} from "lucide-react";


export default function TruthBoxSection() {

    return (
        <section className="w-full py-12 md:py-20 relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5"></div> */}

            <Container className="relative z-10">
                <div className="text-center mb-12">
                    <Description>
                        {truthDescription}
                    </Description>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <div className="space-y-6">
                        <TruthBoxCard data={testBox2} enableIpfsUrl={false} />

                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{truthboxData.title}</h3>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <StatusStep
                                    status="Selling"
                                    size="md"
                                    className="border border-border/50"
                                    showBackground={true}
                                    enableHorizontalScroll={true}
                                />
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-r from-theme/10 to-blue-500/10 border border-theme/20">
                            <div className="space-y-3">
                                <h5 className="text-sm font-semibold text-white flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                                    {truthboxData.h5Title}
                                </h5>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {truthboxData.h5Description}
                                </p>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    className="w-full sm:w-auto"
                                    onClick={() => {
                                        window.open(truthboxData.ctaLink, "_blank");
                                    }}
                                >
                                    <Eye className="w-4 h-4 mr-2" />
                                    {truthboxData.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}


