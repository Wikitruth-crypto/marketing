import MemberCard from "@/components/customer/memberCard";
import { Container } from "@/components/Container";
import { Shield, Eye } from "lucide-react";
import { teamTitle, teamSubtitle, teamStory, teamMembers } from "@/content/team";

export default function TeamSection() {

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            
            <Container className="relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4 md:mb-8">
                        <h3 className="text-lg md:text-2xl font-bold text-white">{teamTitle}</h3>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary/20 mb-12">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{teamStory.title}</h3>
                            <Eye className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-gray-300 text-center font-p text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                            {teamStory.content}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <MemberCard key={index} data={member} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme/10 p-2 border border-theme/20">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-400">{teamSubtitle}</span>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

