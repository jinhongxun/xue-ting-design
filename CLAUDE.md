# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Xue Ting Interior Design Studio homepage. A single-page editorial portfolio site built with Next.js 16 (App Router), Tailwind CSS v4, and TypeScript.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (static export to ./out)
npm start          # Serve production build
```

## Tech Stack

- **Next.js 16** App Router with static export (`output: "export"` in next.config.ts)
- **Tailwind CSS v4** using `@theme inline` blocks in `src/app/globals.css` (no tailwind.config.js)
- **Cormorant Garamond** (serif display) + **Inter** (sans body) via `next/font/google`
- **Motion** (`motion/react`) for entrance animations
- **GSAP** + ScrollTrigger for scroll-driven reveals
- **Images**: `next/image` with `unoptimized: true` (required for static export)

## Architecture

- `src/app/page.tsx` assembles all sections (Server Component)
- All interactive components use `"use client"` (required for Motion/GSAP)
- GSAP animations must clean up via `gsap.context()` + `ctx.revert()` in `useEffect` return
- Design tokens are in `src/app/globals.css` under `@theme inline` (Tailwind v4 pattern)
- Content/copy lives in `src/lib/constants.ts` (single source of truth)
- Font variables defined in `src/lib/fonts.ts`, applied in `src/app/layout.tsx`

## Key Conventions

- **Color palette**: Cold luxury monochrome (`--color-bg: #FDFCFA`, `--color-ink: #1A1816`, `--color-accent: #7B8C8E`)
- **Typography**: Serif for headings (`font-serif`), sans for body (`font-sans`). Display sizes use `clamp()` for fluid scaling.
- **Layout**: Desktop-first, asymmetric editorial grids. All multi-col layouts collapse to single column on mobile (`max-md:` overrides).
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Pushing to `main` triggers automatic build and deploy to `https://jinhongxun.github.io/xue-ting-design/`.
- **External images**: Only `picsum.photos` is configured in `next.config.ts`. Add new hosts to `images.remotePatterns` if needed.

## Redeployment

After any change, push to `main`:
```bash
git add -A && git commit -m "description" && git push
```
GitHub Actions rebuilds and deploys automatically (~1-2 min).
