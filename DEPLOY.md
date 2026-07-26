# Deploying AdamSneed.com

Repo: `~/dev/adamsneed.com`
Build output: `dist/`

## Staging (internal nginx)
Target: `dev.adamsneed.com` → `192.168.100.50`

```bash
cd ~/dev/adamsneed.com
npm run deploy:staging
```

What it does:
- `npm run build`
- `rsync -avz --delete dist/ root@192.168.100.50:/var/www/adamsneed.com/`

## Production (Cloudflare Pages)
Target: `adamsneed.com` + `www`

```bash
cd ~/dev/adamsneed.com
# one-time (or if auth expires): npx wrangler login
npm run deploy:prod
```

What it does:
- `npm run build`
- Runs `npx wrangler pages deploy dist --project-name adamsneed --commit-dirty=true`
- Auth: Wrangler OAuth (`wrangler login`) preferred. Optional: set `CLOUDFLARE_API_TOKEN` in the environment.
- Homepage chat uses Workers AI `@cf/meta/llama-3.1-8b-instruct-fast` (base `llama-3.1-8b-instruct` was deprecated 2026-05-30).

Cloudflare:
- Project: `adamsneed`
- Account ID: `1fcc7d83253bff4d6809cc7e5864328b`
- Zone ID: `f5d90d01c671f50a169e15e73aaadcb7`
- Pages host: `adamsneed.pages.dev`

⚠️ `adamsneed.com` has Office 365 mail — do NOT touch MX/SPF/DKIM/autodiscover.

## Resume PDF
```bash
cd ~/dev/adamsneed.com
npm run resume:pdf
```
Output: `public/resume/adam-sneed-resume.pdf`
