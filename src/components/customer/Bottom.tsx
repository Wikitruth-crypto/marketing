import { cn } from "@/lib/utils";

function processMarkdown(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-neutral-200 font-semibold">$1</strong>');
}

export default function Bottom({ title, content }: { title: string, content: string[] }) {
    return (
        <div className="p-[3px] relative">
            {/* gradient border background + gradient shadow*/}
            <div className={cn('absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-2xl md:rounded-3xl',
            ' shadow-lg md:shadow-2xl shadow-indigo-500/50 shadow-purple-500/50') } />
            
            <div className="relative bg-gradient-to-r from-neutral-950 to-gray-950 rounded-xl md:rounded-2xl p-8 md:p-12">
                <div className="relative z-10">
                    <div className="mb-8 md:mb-12 w-full items-center justify-center">
                        <h2 className="text-xl md:text-2xl text-center font-bold text-white">
                            {title}
                        </h2>
                    </div>

                    <div className="space-y-3 md:space-y-5 max-w-4xl mx-auto text-center">
                        {content.map((content, index) => {
                            return (
                                <p
                                    key={index}
                                    className="text-neutral-300 text-md md:text-lg leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: processMarkdown(content),
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

