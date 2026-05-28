# Vercel Production Environment

Set these in Vercel Project Settings -> Environment Variables:

## Required
- `NEXT_PUBLIC_SITE_URL=https://dhruvsolanki.com`
- `NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/dhruvworld`
- `NEXT_PUBLIC_GITHUB_URL=https://github.com/dhruvworld`
- `NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/dhruvworld`
- `NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@dhruvworld`
- `NEXT_PUBLIC_MEDIUM_URL=https://medium.com/@dhruvworld`

## Newsletter (Resend)
- `NEWSLETTER_PROVIDER=resend`
- `RESEND_API_KEY=...`
- `NEWSLETTER_FROM_EMAIL=updates@yourdomain.com`
- `NEWSLETTER_AUDIENCE_ID=...`

## Deployment Notes
- Production domain: `dhruvsolanki.com`
- Redirect domains: `dhruvsolankii.com`, `dhruvworld.com`
- Re-deploy after updating environment variables.
- Validate:
  - `/robots.txt`
  - `/sitemap.xml`
  - `/opengraph-image`
  - `/manifest.webmanifest`
