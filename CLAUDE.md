# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Astro)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run resume:pdf   # Regenerate public/resume/adam-sneed-resume.pdf via Puppeteer
```

## Stack

- **Astro 5** — static site generator, file-based routing under `src/pages/`
- **Tailwind CSS 3** — utility-first styling; custom design tokens in `tailwind.config.mjs`
- **TypeScript** (strict) — tsconfig extends Astro strict preset
- **Cloudflare Pages** — deployment target (static output, no SSR)

## Architecture

All pages are `.astro` files. Each page imports `src/layouts/MainLayout.astro`, which handles the full HTML document, sticky header/nav, footer, and all SEO metadata (Open Graph, Twitter cards, JSON-LD schemas). Per-page schema data (Article or WebPage) is passed as props to `MainLayout`.

Content lives directly in page files — there is no CMS or markdown content collection. The one exception is `src/data/rootAccessScenarios.json`, which drives the game logic on `/game`.

The `/game` page is a fully self-contained Tetris implementation in vanilla JS + Canvas API with localStorage-based high scores.

The `scripts/generate-pdf.cjs` Puppeteer script renders a resume HTML template inline and writes the output to `public/resume/adam-sneed-resume.pdf`. Run it whenever the resume page content changes.

## Design Tokens

Custom colors defined in `tailwind.config.mjs` (use these, not raw hex values):

| Token         | Value                  | Usage                  |
|---------------|------------------------|------------------------|
| `base`        | `#090d14`              | Page background        |
| `panel`       | `#151d2d`              | Card/surface bg        |
| `accent`      | `#14b8a6`              | Teal primary           |
| `accentSoft`  | `rgba(20,184,166,0.16)`| Subtle accent fills    |
| `textMain`    | `#e7edf8`              | Primary text           |
| `textMuted`   | `#9aa8bf`              | Secondary/muted text   |
| `borderTone`  | `#2b3850`              | Borders, dividers      |

Reusable component classes (defined in `src/styles/global.css`): `.container-shell`, `.card`, `.eyebrow`, `.btn-primary`, `.btn-secondary`.

## SEO Pattern

Every page passes JSON-LD schema data to `MainLayout`. The layout handles Person, WebSite, and WebPage/Article schemas automatically. When adding a new page, follow the existing pattern of passing `pageSchema` as a prop.
