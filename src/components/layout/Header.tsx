"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-md h-14"
            : "bg-transparent h-16 sm:h-20 md:h-24"
        }`}
      >
        <a
          href="#"
          className="font-serif text-lg md:text-xl font-semibold tracking-wide text-white transition-colors duration-500"
          style={scrolled ? { color: "var(--color-ink)" } : undefined}
        >
          Xue Ting
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] md:text-xs font-sans uppercase tracking-[0.12em] text-white/80 hover:text-white transition-colors duration-300"
              style={scrolled ? { color: "var(--color-graphite)" } : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] w-6 h-6 justify-center items-center"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
            style={scrolled ? { backgroundColor: "var(--color-ink)" } : undefined}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
            style={scrolled ? { backgroundColor: "var(--color-ink)" } : undefined}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/90 backdrop-blur-sm flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-serif text-white/90 hover:text-white tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
