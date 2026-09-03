# Viking Marketing — React rebuild

A faithful React/Next.js rebuild of [vikingmarketing.ai](https://vikingmarketing.ai) (originally a GoHighLevel site): same URLs, same content, same design language, rebuilt as clean, componentized, fully static code.

**Plus `/v2`** — an original SaaS redesign of the homepage (same brand, evolved design system, Framer Motion, the "one lead, one night" narrative). It is noindexed and kept out of the sitemap until approved; see [docs/REDESIGN.md](docs/REDESIGN.md) for the rationale, token system, animation list, and the approval checklist. To promote it, point the `(site)` home route at the v2 components and lift the `robots: noindex` in `src/app/v2/page.tsx`.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript) with `output: "export"` — the build produces a plain static site in `out/`, deployable to any host.
- **Tailwind CSS v4** plus a small set of design tokens in `src/app/globals.css` measured from the live site (colors, gradients, grid backdrop, pill buttons).
- **Fonts:** Satoshi (headings) via Fontshare's free CDN, Poppins (body) and Playfair Display Italic (the gradient headline accent) self-hosted through `next/font`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build (static export)

```bash
npm run build
```

The complete site lands in `out/` — every page pre-rendered as HTML with its meta tags, JSON-LD, `sitemap.xml`, and `robots.txt`.

## Integrations (env vars)

Third-party embeds are opt-in via environment variables so no account IDs live in the code. Copy `.env.example` to `.env.local` and fill in:

| Variable | What it enables |
| --- | --- |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (analytics + the chat widget, which the live site loads through GTM) |
| `NEXT_PUBLIC_REVIEWS_WIDGET_URL` | The LeadConnector Google-reviews carousel in "What Real Businesses Say About Viking" |
| `NEXT_PUBLIC_BOOKING_WIDGET_URL` | The booking calendar on `/book-a-call` (your GHL calendar permalink) |
| `NEXT_PUBLIC_CHAT_WIDGET_SRC` | Optional direct chat-widget script if not using GTM |

Every embed renders a clean fallback when its variable is unset. `NEXT_PUBLIC_*` values are inlined at build time — rebuild after changing them.

## Deployment

**Vercel / Netlify:** import the repo, set the env vars, deploy. The static export is detected automatically (output directory `out`).

**Any static host (Hostinger, S3, nginx…):** upload the contents of `out/`. Two host rules to configure:

1. Serve extensionless URLs from their `.html` files (`/pricing` → `pricing.html`). Apache example (`.htaccess`):

   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{DOCUMENT_ROOT}/$1.html -f
   RewriteRule ^(.*)$ $1.html [L]
   ErrorDocument 404 /404.html
   ```

2. Point 404s at `404.html`.

## Project layout

```
src/
  app/                 one folder per route (URL structure mirrors the live site)
    post/[slug]/       blog posts (19, statically generated)
    blog/…             blog index, category, author pages
    sitemap.ts         sitemap.xml (mirrors the source sitemap's URL set)
    robots.ts          robots.txt (mirrors the source)
  components/          shared UI (Header, Footer, TemplatePage, FaqSection, …)
  data/
    features/          per-page content for the 9 product/feature pages
    industries/        per-page content for the 9 industry + 1 location pages
  content/
    posts/*.json       migrated blog articles (verbatim HTML + metadata)
    posts-index.json   blog card index
  lib/                 site constants, SEO/JSON-LD builders, nav data, blog loader
public/images/         all site imagery, downloaded from the original CDN
docs/                  migration reports and the page inventory
```

Content pages are data-driven: to edit copy on a feature/industry page, edit its file in `src/data/…`; the shared `TemplatePage` renders it. Blog posts live as JSON (title, meta, and the article HTML); add a new post by dropping a JSON file in `src/content/posts/` and adding an entry to `posts-index.json`.
