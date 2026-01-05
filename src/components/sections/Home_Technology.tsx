import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { technologyData, } from "@/content/home";
import { Container } from "@/components/Container";

export function TechnologySection() {

    return (
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
            {technologyData.map((feature, index) => (
                <Feature 
                key={feature.title} 
                title={feature.title} 
                description={feature.description} 
                features={feature.features} 
                icon={feature.icon} 
                index={index} />
            ))}
        </div>
        </Container>
    );
}

const Feature = ({
    title,
    description,
    features,
    icon: Icon,
    index,
}: {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
    features: string[];
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-600",
                (index === 0 || index === 4) && "lg:border-l border-neutral-600",
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-400 group-hover/feature:text-theme transition-all duration-200">
                {Icon && <Icon />}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-theme transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm font-mono text-neutral-300 max-w-md relative z-10 px-10">
                {description}
            </p>
            <hr className="border-neutral-600 my-4 mx-10" />
            <div className="text-sm text-neutral-300 max-w-md relative z-10 px-10">
                {features.map((feature, index) => (
                    <div key={feature}>
                        <span className="text-neutral-300 font-mono">·</span>  {feature}
                    </div>
                ))}
            </div>
        </div>
    );
};
