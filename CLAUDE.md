# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev            # Start dev server (Astro) — requires wrangler login for AI binding
npm run build          # Production build → dist/
npm run preview        # Preview production build locally
npm run deploy:staging # Build + rsync to dev.adamsneed.com (192.168.100.50)
npm run deploy:prod    # Build + deploy to Cloudflare Pages (adamsneed.com)
npm run resume:pdf     # Regenerate public/resume/adam-sneed-resume.pdf via Puppeteer
```

## Stack

- **Astro 5** — static site generator with SSR for API routes, file-based routing under `src/pages/`
- **Tailwind CSS 3** — utility-first styling; custom design tokens in `tailwind.config.mjs`
- **TypeScript** (strict) — tsconfig extends Astro strict preset
- **Cloudflare Pages** — production deployment with Pages Functions for SSR routes
- **Cloudflare Workers AI** — `@cf/meta/llama-3.1-8b-instruct` powers the homepage chat
- **Cloudflare D1** — SQLite analytics database (`adamsneed-analytics`) for tracking chat questions, slash commands, and events
- **@astrojs/cloudflare** adapter — enables SSR API routes while keeping pages static
- **Internal nginx** — staging at `dev.adamsneed.com` / `192.168.100.50`

## Architecture

All pages are `.astro` files. Each page imports `src/layouts/MainLayout.astro`, which provides:
- Full HTML document with SEO metadata (Open Graph, Twitter cards, JSON-LD)
- Fixed navigation with mobile hamburger toggle (vanilla JS)
- Multi-color particle network canvas background with trail effect (vanilla JS, Canvas API)
- IntersectionObserver-based scroll reveal system (`[data-reveal]` attributes)
- Optional footer (hidden on homepage via `hideFooter` prop)

### Homepage Terminal (`src/pages/index.astro`)

The homepage is an interactive terminal UI branded as `~/.adam`:
- **Boot sequence** — animated startup lines on page load
- **Slash commands** — `/help`, `/resume`, `/skills`, `/experience`, `/work`, `/about`, `/contact`, `/game`, `/clear` — all handled client-side, no API call
- **Autocomplete** — dropdown appears when typing `/`, navigable with arrow keys, Tab to fill, Enter to execute
- **AI chat** — non-slash input goes to `/api/chat` which calls Workers AI with a system prompt containing Adam's full resume, background, and personal context
- **Simulated streaming** — API returns full response, frontend emits tokens with delay for typewriter effect
- **Permission mode bar** — cosmetic, cycles through modes on Shift+Tab
- **Animated teal border** — CSS `conic-gradient` with `@property` for rotation, pulses faster during AI "thinking"
- **Session tracking** — generates UUID per session, tracks slash commands and chat to D1

### API Routes (SSR, `prerender = false`)

- `src/pages/api/chat.ts` — Receives messages, calls Workers AI, logs question + response to D1, rate-limited (20/hr per IP)
- `src/pages/api/event.ts` — Receives tracking events (slash commands, PDF downloads), logs to D1

### Cloudflare Bindings (wrangler.toml)

- `AI` — Workers AI binding for chat
- `DB` — D1 database binding for analytics (`adamsneed-analytics`, ID: `27b73e51-7470-4c4e-81c2-84258615a3ba`)

### Other Pages

Pages control their own spacing/layout (no shared container wrapper on `<main>`). Inner pages use `pt-32` to clear the fixed nav. The game page uses legacy component classes (`.card`, `.eyebrow`, etc.) kept in global.css for backward compatibility. Game is not in the nav — accessible via `/game` slash command from the terminal.

Content lives directly in page files — no CMS or markdown content collection. The one exception is `src/data/rootAccessScenarios.json`, which drives the game logic on `/game`.

The `scripts/generate-pdf.cjs` Puppeteer script renders a resume HTML template inline and writes the output to `public/resume/adam-sneed-resume.pdf`. Run it whenever the resume page content changes.

## Design System

- **Particle network** — Canvas-based animated background with mouse-responsive particles in teal, blue, purple, pink, and amber with trail effect
- **Terminal UI** — macOS-style window chrome, JetBrains Mono throughout, dot grid texture, scanline overlay, animated gradient border
- **Three accent colors** — Teal (physical/primary), blue (software), purple (ops/agentic)
- **Scroll reveals** — CSS transition-based, triggered by IntersectionObserver, configurable delay via `data-reveal-delay`
- **Lucide icons** — Inline SVGs throughout (no icon library dependency)
- **JetBrains Mono Variable** — Display/heading/terminal font; Inter for body text
- **Respects `prefers-reduced-motion`** — All animations disabled, content visible

### Color Tokens

Defined in `tailwind.config.mjs`:

| Token          | Value                   | Usage                          |
|----------------|-------------------------|--------------------------------|
| `base`         | `#090d14`               | Page background                |
| `panel`        | `#151d2d`               | Card/surface bg                |
| `accent`       | `#14b8a6`               | Teal primary                   |
| `accentSoft`   | `rgba(20,184,166,0.16)` | Subtle accent fills            |
| `accentBlue`   | `rgb(80,180,255)`       | Software/agents accent         |
| `accentPurple` | `rgb(160,120,255)`      | Ops/agentic accent             |
| `textMain`     | `#e7edf8`               | Primary text                   |
| `textMuted`    | `#8494ad`               | Secondary/muted text           |
| `borderTone`   | `#2b3850`               | Borders, dividers              |

### Legacy Component Classes

These are defined in `src/styles/global.css` and used **only by game.astro**: `.container-shell`, `.card`, `.eyebrow`, `.section-title`, `.lead`, `.btn-primary`, `.btn-secondary`, `.metric-label`, `.metric-value`. Do not remove them.

## SEO & Analytics

- **JSON-LD** — Person, WebSite, and WebPage/Article schemas on every page
- **Cloudflare Web Analytics** — beacon loaded in MainLayout
- **Google Search Console** — verified via DNS
- **D1 Analytics** — chat questions, AI responses, slash command usage, resume downloads logged to `adamsneed-analytics` D1 database
- Query analytics: `npx wrangler d1 execute adamsneed-analytics --remote --command "SELECT * FROM chat_messages ORDER BY created_at DESC LIMIT 20"`

## Deployment

See `DEPLOY.md` for full details. Key points:
- **Staging**: `npm run deploy:staging` — rsyncs `dist/` to `root@192.168.100.50`
- **Production**: `npm run deploy:prod` — uses Wrangler with API token from `~/.cache/zip/credentials.json`
- **Cloudflare**: Project `adamsneed`, do NOT touch MX/SPF/DKIM records (Office 365 mail)
- **D1 schema**: `schema.sql` — run `npx wrangler d1 execute adamsneed-analytics --remote --file=schema.sql` to recreate tables
