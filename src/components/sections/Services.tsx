"use client";

import { useRef, useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-item");
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={ref} className="bg-bg py-28 md:py-36 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-item border-t border-stone pt-8">
              <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-text-muted leading-[1.75] max-w-[40ch]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
