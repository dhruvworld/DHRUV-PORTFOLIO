# Dhruv Solanki Digital Identity Platform

Personal brand, portfolio, SEO authority, and media ecosystem platform for:
- Dhruv Solanki
- Dhruv Solankii
- Dhruv World

## Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Vercel Analytics

## Implemented Modules
- Brand and identity homepage with premium hero system
- Route architecture for core pages and SEO clusters
- Dynamic page generation for cluster and identity routes
- Blog/resource/case-study content engine with static generation
- JSON-LD schema system (`Person`, `WebSite`, `Organization`, `BreadcrumbList`, `BlogPosting`)
- Technical SEO routes (`/robots.txt`, `/sitemap.xml`)
- Search page across content collections
- Newsletter/community page with API scaffold and tracking hooks
- Quantis Global premium business module

## Project Structure
- `src/app` route and API layer
- `src/components` reusable UI and form components
- `src/content` seeded editorial data sources
- `src/lib` SEO and analytics helpers
- `docs/launch-checklist.md` deployment and launch runbook

## Local Setup
1. Install dependencies:
   - `npm install`
2. Setup environment:
   - `cp .env.example .env.local`
3. Run development server:
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Build and Validation
- Lint: `npm run lint`
- Production build: `npm run build`
- Start production server: `npm run start`
- Pre-deploy verification: `npm run verify`
- CI: GitHub Actions runs `npm run verify` on PRs and pushes to `main`/`master`

## Newsletter Integration
- API scaffold is at `src/app/api/newsletter/route.ts`.
- Connect your provider (Resend/ConvertKit/Beehiiv/etc.) in that endpoint.
- Client event tracking is in `src/lib/metrics.ts`.

## SEO Notes
- Primary canonical domain should be `https://dhruvsolanki.com`.
- Secondary domains should redirect to primary:
  - `dhruvsolankii.com`
  - `dhruvworld.com`
- Ensure identity mapping is consistently present across content and metadata:
  - Dhruv Solanki = Dhruv Solankii = Dhruv World

# DHRUV-PORTFOLIO
