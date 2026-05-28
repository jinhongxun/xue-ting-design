"use client";

import { motion, useReducedMotion } from "motion/react";
import { HERO_SUBTITLE } from "@/lib/constants";

export default function Hero() {
  const reduce = useReducedMotion();

  const line = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://picsum.photos/seed/xue-ting-hero/1920/1080"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Inward gradient mask: fades edges into page background color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, var(--color-bg) 0%, transparent 18%),
            linear-gradient(to top, var(--color-bg) 0%, transparent 22%),
            linear-gradient(to right, var(--color-bg) 0%, transparent 15%),
            linear-gradient(to left, var(--color-bg) 0%, transparent 15%),
            radial-gradient(ellipse at center, transparent 40%, var(--color-bg) 100%)
          `,
        }}
      />

      {/* Subtle dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content: centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={line}
          className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70 font-sans"
        >
          Interior Design Studio
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={line}
          className="font-serif font-semibold leading-[0.88] text-white tracking-[-0.02em]"
          style={{ fontSize: "clamp(3.2rem, 8vw, 9.5rem)" }}
        >
          <span className="block">Xue</span>
          <span className="block">Ting</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={line}
          className="mt-8 max-w-md text-sm md:text-base leading-relaxed text-white/65 font-sans"
        >
          {HERO_SUBTITLE}
        </motion.p>
      </div>
    </section>
  );
}
