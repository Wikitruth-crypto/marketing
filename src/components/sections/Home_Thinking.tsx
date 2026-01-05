"use client";
import { Container } from "@/components/Container";
import { thinking, thinkingLink } from "@/content/home";
import { ArrowRight } from "lucide-react";

export default function Thinking() {

  return (
    <section className="w-full py-10 md:py-16">
      <Container className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col max-w-4xl items-center justify-center">

          <span className="text-2xl font-bold text-neutral-300 ">{thinking.question}</span>
          <span className="text-2xl font-bold text-neutral-300 ">{thinking.answer}</span>
        </div>

        <div className="flex flex-col max-w-4xl items-center justify-center mt-4 md:mt-8">

          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400">
            <span className="text-2xl font-bold">{thinking.thinking}</span>
          </div>

          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400">
            <span className="text-2xl font-bold">{thinking.thinking2}</span>
          </div>
        </div>


        <div className="flex items-center bg-theme/10 p-2 border border-theme/20 rounded-full mt-2 md:mt-4">
          <a href={thinkingLink.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <span className="text-sm text-neutral-300 hover:text-theme flex-1 items-center justify-between">
              {thinkingLink.title}
            </span>
            <ArrowRight className="w-4 h-4 text-theme ml-auto" />
          </a>
        </div>
      </Container>
    </section>
  );
}




