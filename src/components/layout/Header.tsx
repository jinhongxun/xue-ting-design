"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md h-16"
          : "bg-transparent h-20 md:h-24"
      }`}
    >
      <a
        href="#"
        className="font-serif text-lg md:text-xl font-semibold tracking-wide text-white transition-colors duration-500"
        style={scrolled ? { color: "var(--color-ink)" } : undefined}
      >
        Xue Ting
      </a>

      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] md:text-xs font-sans uppercase tracking-[0.12em] text-white/80 hover:text-white transition-colors duration-300"
            style={
              scrolled
                ? { color: "var(--color-graphite)" }
                : undefined
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
