"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PHILOSOPHY } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const reduce = useReducedMotion();
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imgRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="about" className="bg-bg py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Image: left */}
        <div ref={imgRef} className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/xue-ting-about/600/800"
              alt="Xue Ting in her studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Text: right */}
        <div ref={textRef} className="md:col-span-6 md:col-start-7">
          <span className="mb-5 block text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-text-muted font-sans">
            About
          </span>
          <h2
            className="font-serif font-semibold text-charcoal leading-[1.05] tracking-[-0.01em] mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
          >
            {PHILOSOPHY.heading}
          </h2>
          <p className="text-sm md:text-base text-text leading-[1.8] max-w-[50ch]">
            {PHILOSOPHY.body}
          </p>
        </div>
      </div>
    </section>
  );
}
