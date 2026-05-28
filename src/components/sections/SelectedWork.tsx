"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="bg-surface py-16 sm:py-28 md:py-36 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <h2
          ref={headingRef}
          className="font-serif font-semibold text-charcoal leading-[1.05] tracking-[-0.01em] mb-16 md:mb-20"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
        >
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 md:gap-y-16">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`work-card group cursor-pointer ${project.span} max-md:!col-span-1 max-md:!col-start-auto`}
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <div className="mt-4 md:mt-5">
                <h3 className="font-serif text-lg md:text-xl font-medium text-charcoal">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-text-muted font-sans tracking-wide">
                  {project.category}, {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
