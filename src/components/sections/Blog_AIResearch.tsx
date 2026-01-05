import { useState } from "react"
import { Button, Card } from 'antd';
import TitleLabel from "../customer/TitleLabel"

import { Container } from "../Container"
import {
    ChevronLeft,
    ChevronRight,
    Users,
    Play,
    // ExternalLink
} from "lucide-react"
import { aiResearch } from "@/content/blog";

export default function AIResearchBlog() {
    const [selectedPost, setSelectedPost] = useState(aiResearch[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    // const isMobile = useIsMobile()

    // image navigation
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex < selectedPost.images.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <section className="w-full py-16 md:py-24">
            <Container className="flex flex-col items-center justify-center space-y-12">
                <div className="space-y-4 w-full">
                    <TitleLabel>AI Research Case</TitleLabel>
                </div>

                <Card className="w-full max-w-6xl bg-white/5 backdrop-blur-sm border-white/10">
                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* left: image carousel*/}
                            <div className="space-y-6">
                                {/* main image display*/}
                                <div className="relative bg-black rounded-xl overflow-hidden">
                                    <img
                                        src={selectedPost.images[currentIndex]}
                                        alt={`${selectedPost.title} - Image ${currentIndex + 1}`}
                                        className="w-full h-auto object-contain"
                                        loading="eager"
                                    />
                                    
                                    {/* image navigation control*/}
                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity">
                                        <Button
                                            onClick={handlePrevious}
                                            icon={<ChevronLeft className="h-5 w-6" />}
                                            disabled={currentIndex === 0}
                                            variant="outlined"
                                            size="small"
                                            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                                        >
                                        </Button>
                                        <Button
                                            onClick={handleNext}
                                            icon={<ChevronRight className="h-5 w-6" />}
                                            disabled={currentIndex === selectedPost.images.length - 1}
                                            variant="outlined"
                                            size="small"
                                            className="bg-black/50 border-white/20 text-white hover:bg-black/70"
                                        >
                                        </Button>
                                    </div>
                                </div>

                                {/* image counter*/}
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                    <span className="font-medium text-white">
                                        {currentIndex + 1}
                                    </span>
                                    <span>/</span>
                                    <span>{selectedPost.images.length}</span>
                                </div>
                            </div>

                            {/* right: blog content*/}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    {/* <div className="flex items-center gap-2 text-sm text-primary">
                                        <Target className="w-4 h-4" />
                                        <span>{selectedPost.category}</span>
                                    </div> */}
                                    
                                    <p className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                        {selectedPost.title}
                                    </p>
                                    
                                    <p className="text-md text-gray-300 font-medium">
                                        {selectedPost.subtitle}
                                    </p>
                                    
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{selectedPost.author}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{selectedPost.date}</span>
                                    </div>
                                </div>

                                

                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>{selectedPost.content.introduction}</p>
                                    <div className="space-y-3">
                                        {/* <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                            <Target className="w-5 h-5 text-primary" />
                                            Key Findings
                                        </h3> */}
                                        <ul className="space-y-2 pl-4">
                                            {selectedPost.content.keyFindings.map((finding, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                    <span>{finding}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button 
                                        type="primary"
                                        onClick={() => window.open(selectedPost.videoUrl, '_blank')}
                                    >
                                        <Play className="w-4 h-4" />
                                        To Youtube
                                    </Button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

            </Container>
        </section>
    )
}





