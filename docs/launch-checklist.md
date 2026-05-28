# Launch Checklist

## Domain and Hosting
- Set `dhruvsolanki.com` as the primary production domain.
- Configure `dhruvsolankii.com` and `dhruvworld.com` to redirect to primary.
- Add HTTPS on all domains and validate canonical behavior.

## Environment Setup
- Copy `.env.example` to `.env.local`.
- Set all social profile URLs to final handles.
- Connect newsletter provider credentials for `/api/newsletter`.

## SEO and Entity Validation
- Verify `/robots.txt` and `/sitemap.xml` in production.
- Run schema validation for `Person`, `WebSite`, and `Organization`.
- Confirm canonical tags for home, cluster pages, and all article/resource/case detail pages.
- Confirm identity mapping appears consistently:
  - Dhruv Solanki
  - Dhruv Solankii
  - Dhruv World

## Content Readiness
- Publish first 3 long-form blog articles.
- Publish first 3 resources and 2 case studies with real content.
- Add real portfolio projects and contact pathways.

## Analytics and KPI Tracking
- Connect GTM/GA4 to consume `dataLayer` events.
- Track:
  - `newsletter_submit_started`
  - `newsletter_submit_success`
  - `newsletter_submit_error`
  - `search_query_changed`
- Build dashboard for branded search, indexed pages, conversion events, and newsletter growth.

## QA and Performance
- Run `npm run lint` and `npm run build`.
- Manual QA on mobile and desktop for:
  - navigation
  - theme toggle
  - search
  - newsletter form
- Verify Core Web Vitals baseline in production.
