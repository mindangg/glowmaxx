# Glowmax Landing Page

## Tech Stack
- Next.js 16.2+ (App Router, Turbopack)
- React 19+
- TypeScript 5+ (strict mode)
- Tailwind CSS v4+ (CSS-first config via `@theme {}`)
- Framer Motion for animations

## Project Structure
- `app/` — Next.js App Router pages, layouts, and route files
- `components/` — Reusable React components
- `lib/` — Utility functions and helpers
- `public/` — Static assets

## Key Conventions
- Server Components by default; add `"use client"` only when required
- Tailwind v4 with `@import "tailwindcss"` and `@theme inline {}` CSS-first config
- `cn()` utility (clsx + tailwind-merge) for conditional classes
- `next/image` for all images, `next/link` for route navigation
- `next/font/google` for font loading (Inter with Vietnamese subset)
- Vietnamese language (`lang="vi"`)
- Dark mode via `.dark` class on `<html>`

## SEO
- Metadata API in `layout.tsx` and `page.tsx`
- JSON-LD structured data in `page.tsx`
- `robots.ts` and `sitemap.ts` for search engine crawling
- Semantic HTML throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)

## Component Architecture
- **Server Components**: HookSection, Footer (no client hooks or event handlers)
- **Client Components**: Navbar, Hero, Features, HowItWorks, Testimonials, CTASection, GlobalBackground (use useState, useEffect, useRef, framer-motion)
- **UI Components**: Button (cva + radix Slot), AnimatedGroup (framer-motion)
