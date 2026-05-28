"use client";

import { motion } from "motion/react";
import { HERO_SUBTITLE } from "@/lib/constants";

export default function Hero() {
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

      {/* Inward gradient mask */}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content: centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-4 sm:mb-6 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-sans"
        >
          Interior Design Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="font-serif font-semibold leading-[0.88] text-white tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.4rem, 8vw, 9.5rem)" }}
        >
          <span className="block">Xue</span>
          <span className="block">Ting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 sm:mt-8 max-w-xs sm:max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-white/65 font-sans"
        >
          {HERO_SUBTITLE}
        </motion.p>
      </div>
    </section>
  );
}
