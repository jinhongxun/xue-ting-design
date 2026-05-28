"use client";

import { useRef, useEffect } from "react";
import { CONTACT_HEADING, CONTACT_EMAIL } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      className="bg-bg py-20 sm:py-32 md:py-44 px-4 sm:px-6 md:px-16 lg:px-24 text-center"
    >
      <div ref={ref}>
        <h2
          className="font-serif font-semibold text-ink leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
        >
          {CONTACT_HEADING}
        </h2>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 md:mt-10 inline-block border-b border-charcoal pb-1 text-xs md:text-sm uppercase tracking-[0.15em] text-charcoal hover:text-accent transition-colors duration-300"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </section>
  );
}
