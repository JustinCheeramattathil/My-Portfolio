# Justin Thomas — Developer Portfolio

A premium, dark-first portfolio for a Mobile Application Engineer specializing in
Flutter, cross-platform development, and payment systems. Built to feel at home
next to Linear, Stripe, Vercel, and the Apple Developer site.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **Framer Motion** for scroll reveals, magnetic buttons, counters, 3D tilt
- **next-themes** (dark default + light theme)
- **cmdk** command palette (`⌘K` / `Ctrl+K`)
- **lucide-react** icons + inline brand SVGs

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
```

## Features

- Full-screen hero with aurora mesh gradient, drifting particles, animated counters and a tech marquee
- Storytelling **About** with an animated career timeline
- Interactive **Experience** timeline with a scroll-linked progress spine
- **Tech Stack** dashboard of 3D tilt cards with a cursor-follow spotlight
- Premium **Project** showcases with mobile app mockups, metrics, and tech badges
- Animated **Achievements** counters and a CI/CD-style **Process** pipeline
- Glassmorphic **Contact** section with a working (mailto) form
- Command palette, theme switcher, loading screen, scroll progress, mouse-follow glow
- Hidden developer easter egg — try the **Konami code** (↑↑↓↓←→←→ B A) or open the console
- Printable résumé at `/resume` (open from "Download Resume" → "Save as PDF")
- Responsive, accessible (keyboard focus, reduced-motion respected), SEO metadata

## Personalize

All content lives in **`src/lib/data.ts`** — edit one file to update your details
(contact info, social links, experience, skills, and the projects + their Play
Store links are all defined there).

To wire the contact form to a real backend, swap the `mailto:` handler in
`src/components/sections/contact.tsx` for a service like Resend, Formspree, or a
Next.js Route Handler.

## Project structure

```
src/
  app/
    layout.tsx          # fonts, metadata, app shell (nav, footer, effects)
    page.tsx            # section composition
    globals.css         # design tokens, themes, keyframes
    resume/             # printable résumé route
  components/
    sections/           # hero, about, experience, tech-stack, projects, …
    effects/            # aurora, particles, mouse-glow, reveal, counters
    ui/                 # button, badge, magnetic, tilt-card, theme-toggle …
    layout/             # navbar, footer
    command-palette.tsx, easter-egg.tsx, loading-screen.tsx, phone-mock.tsx
  lib/
    data.ts             # ← all content
    utils.ts            # cn() helper
```

---

Designed & developed by Justin Thomas.
# My-Portfolio
