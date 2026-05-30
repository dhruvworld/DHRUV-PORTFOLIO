# Dhruv World — Digital Identity Platform

Personal brand, portfolio, and SEO site for **Dhruv Solanki** (Dhruv Solankii) — founder, engineer, and Quantis Global CEO.

| | |
|---|---|
| **Live site** | [https://dhruvworld.netlify.app](https://dhruvworld.netlify.app) |
| **GitHub** | [github.com/dhruvworld/DHRUV-PORTFOLIO](https://github.com/dhruvworld/DHRUV-PORTFOLIO) |
| **Business site** | [https://quantisglobal.co](https://quantisglobal.co) |
| **Org repos** | [github.com/dhruvworld](https://github.com/dhruvworld) |

---

## What this project is

A **text-first, editorial** personal site — not a generic portfolio template. It combines:

- Identity and positioning (who I help, proof, portrait, CV)
- Project catalog with **live links first**, then case studies, then GitHub
- AI Journal (blog), case studies, resources
- Full **Quantis Global** module (copy aligned with quantisglobal.co)
- SEO entity system (schema, sitemap, cluster pages, llms.txt)

Built and iterated primarily in **Cursor**.

---

## Identity model

| Name | Role |
|------|------|
| **Dhruv Solanki** | Professional identity (metadata, schema, CV) |
| **Dhruv Solankii** | Creator alias |
| **Dhruv World** | This platform / media hub |
| **Quantis Global** | Business execution layer (trade, logistics) |

Canonical env URL: `NEXT_PUBLIC_SITE_URL` (currently Netlify). Long-term target domain: `dhruvsolanki.com`.

---

## Tech stack

- **Next.js 16** (App Router, static generation)
- **TypeScript**, **Tailwind CSS v4**
- **Netlify** deployment (`netlify.toml`)
- **Vercel Analytics**
- Optional **Resend** for newsletter API

---

## Main routes

| Route | Purpose |
|-------|---------|
| `/` | Hero, proof strip, featured case study, selected work, journal, CTA |
| `/about` | Portrait, bio, skills, certifications, CV, experience & education timelines |
| `/projects` | Full project list (Quantis, Dhruv World, HG Smelters, GitHub experiments, etc.) |
| `/case-studies` | Deep breakdowns (currently: Quantis Global Brand Foundation) |
| `/blog` | AI Journal — 3 long-form posts |
| `/resources` | Copy-paste AI prompts (mirror clean, Premanand Maharaj satsang collage, etc.) |
| `/quantis-global` | Quantis services, founder story, leadership, contact |
| `/contact` | WhatsApp, LinkedIn, email channels + form |
| `/founder` | Short manifesto |
| `/ai` | AI Lab intro |
| `/search` | Site search |
| `/[slug]` | SEO cluster hubs (business, technology, gujarat, dhruv-solanki, …) |

`/portfolio` redirects to `/projects`.

---

## Where content lives

Edit copy in **`src/content/`** — no need to hunt through components:

| File | Contents |
|------|----------|
| `projects.ts` | All projects, kinds, GitHub repos, live URLs |
| `blog-posts.ts` | Journal posts (supports `sections` for long articles) |
| `case-studies.ts` | Case study narratives |
| `resources.ts` | Resources and AI prompts |
| `quantis-global-site.ts` | Quantis page copy (from quantisglobal.co + founder story) |
| `profile.ts` | Who-I-help line, proof stats, contact channels |
| `certifications.ts` | Certs + `resumePdfPath` |
| `skills.ts` | Stack and focus areas |
| `timeline.ts` | About page timelines |

Cluster hub pages: **`src/lib/route-content.ts`** (`body` sections for indexable slugs).

---

## Public assets

| Path | Usage |
|------|--------|
| `public/media/portrait.png` | Hero and About |
| `public/cv/dhruv-solanki-resume.pdf` | Download CV buttons |
| `public/llms.txt` | LLM/crawler summary |
| `src/app/icon.tsx` | Generated favicon (charcoal “D”) |

Root `potrait.png` is **gitignored** (duplicate typo filename).

---

## Environment variables

Copy `.env.example` → `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://dhruvworld.netlify.app
NEXT_PUBLIC_LINKEDIN_URL=...
NEXT_PUBLIC_GITHUB_URL=...
# Newsletter (optional — scaffold only without keys):
RESEND_API_KEY=
NEWSLETTER_FROM_EMAIL=
NEWSLETTER_AUDIENCE_ID=
```

---

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
npm run build        # production build
npm run verify       # lint + build (CI uses this)
```

---

## Deployment

- **Branch:** `main`
- **Host:** Netlify (auto-deploy on push)
- **CI:** `.github/workflows/ci.yml` runs `npm run verify` on PRs and pushes

---

## Project structure

```text
src/
  app/              # Routes, API (newsletter), icon, sitemap, robots
  components/       # UI (hero, proof, contact channels, project links, …)
  content/          # All editable copy
  lib/              # SEO, nav, project-links, route-content, social
public/
  media/            # Portrait
  cv/               # Resume PDF
.cursor/rules/      # Cursor agent rules (incl. README-on-push)
docs/               # Launch checklist, env notes
```

---

## Known gaps (honest)

- **7 projects** still have placeholder / “coming soon” copy (Megh, Sir, Epic Search, BJP Selfie, Shubham Tours, E-Resume, partial HG Smelters)
- **No project screenshots** — only portrait image in UI
- **Newsletter** needs Resend env vars to work in production
- **1 case study** on listing page (Quantis only)

---

## Recent changes

### 2026-05-29 (later)
- Added resource: **Premanand Maharaj Satsang Collage Prompt** (`/resources/premanand-maharaj-satsang-collage-prompt`) — 3-frame vertical devotional collage with reference-image identity

### 2026-05-29
- Added Cursor rule: **update README on every git commit/push** (`.cursor/rules/git-readme-on-push.mdc`)
- Rewrote this README with full project documentation
- Site favicon via `src/app/icon.tsx`; fixed blog reading time for section-based posts
- Enriched 9 indexable SEO cluster pages with real body content
- Removed unused `testimonials.ts`, `experience.ts`, dead components (`CurrentFocus`, `QuantisPreview`, etc.)
- Quantis founder story + “What Quantis Means” on `/quantis-global` and case study
- Portfolio strategy + personal brand build articles expanded in journal
- Resources: AI prompts (mirror clean, Premanand Maharaj satsang collage; removed empty placeholder resources)

### 2026-05-28
- Portrait, lean homepage, Quantis copy from quantisglobal.co
- dhruvworld project catalog, portfolio best practices (who I help, proof, PSR case study)

---

## Cursor rule for contributors

When committing or pushing, the agent **must update this README** (especially **Recent changes**) so anyone cloning the repo understands what changed and how the project works. See `.cursor/rules/git-readme-on-push.mdc`.
