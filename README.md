# Kai Hoang — Portfolio

Dark, minimalist portfolio with neon accents. Built with React 19, TanStack Start, Tailwind CSS v4, and Framer Motion.

## Sections
Hero · About · Projects · Skills · Experience · Contact

## Effects
- Canvas particle background (with connection lines, respects `prefers-reduced-motion`)
- Parallax hero
- Typewriter rotating tagline
- Scroll-reveal staggered animations (Framer Motion)
- Hover micro-interactions (glow, underline sweeps)

## Setup
```bash
bun install   # or npm install
bun dev       # start dev server
bun run build # production build
```

## Editing
- Design tokens: `src/styles.css` (oklch neon palette)
- Components: `src/components/portfolio/*`
- Page composition: `src/routes/index.tsx`

Update copy/projects/jobs by editing the arrays at the top of each section component.
