# Shazib Siddique — Portfolio & Services Website

A production-ready portfolio and lead generation site built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **MDX** for content management.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · MDX · Lucide Icons  
**Design:** Dark navy + cadetblue, Poppins, mobile-first, WCAG-accessible  
**Lighthouse targets:** Performance 90+ · Accessibility 90+ · Best Practices 90+ · SEO 90+

---

## Site Map

```
/                   Homepage (hero + metrics + services preview + projects + results + CTA)
/services           Full service packages with pricing
/portfolio          Filterable project grid
/portfolio/[slug]   Individual case study pages (MDX-powered)
/about              Story, values, how I work
/resume             PDF viewer + downloadable resume + highlights
/contact            Contact form with validation + local JSON storage
/sitemap.xml        Auto-generated sitemap
/robots.txt         Auto-generated robots.txt
```

---

## File Tree

```
shazib-portfolio/
├── .env.example                    # Environment variable template
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
│
├── content/
│   └── projects/                   # MDX case study files (edit to update content)
│       ├── ai-knowledge-optimization.mdx
│       ├── uber-clone.mdx
│       ├── client-website.mdx
│       ├── marketmate.mdx
│       └── athletics-systems.mdx
│
├── public/
│   ├── favicon.ico                 # Add your favicon
│   ├── apple-touch-icon.png        # 180×180px
│   ├── favicon-16x16.png           # 16×16px
│   ├── resume.pdf                  # ← ADD YOUR RESUME HERE
│   └── images/
│       ├── og/
│       │   └── og-default.png      # 1200×630px Open Graph image
│       └── projects/               # Project screenshots
│           ├── ai-knowledge-01.png     # 1280×800px
│           ├── ai-knowledge-02.png
│           ├── uber-clone-01.png
│           ├── uber-clone-02.png
│           ├── client-website-01.png
│           ├── marketmate-01.png
│           └── athletics-systems-01.png
│
├── data/                           # Auto-created — contact form submissions (gitignored)
│   └── contact-submissions.json
│
└── src/
    ├── app/
    │   ├── globals.css             # Design system: tokens, components, animations
    │   ├── layout.tsx              # Root layout: fonts, metadata, JSON-LD, nav, footer
    │   ├── page.tsx                # Homepage
    │   ├── not-found.tsx           # 404 page
    │   ├── sitemap.ts              # Auto-generates /sitemap.xml
    │   ├── robots.ts               # Auto-generates /robots.txt
    │   ├── about/page.tsx
    │   ├── contact/page.tsx        # Form with client validation + API submission
    │   ├── portfolio/
    │   │   ├── page.tsx            # Filterable grid (client-side)
    │   │   └── [slug]/page.tsx     # Dynamic case study (MDX + fallback)
    │   ├── resume/page.tsx         # PDF embed + download + highlights
    │   ├── services/page.tsx       # Full pricing packages
    │   └── api/contact/route.ts    # POST handler: validate + save to JSON
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx          # Sticky, mobile-responsive, accessible
    │   │   └── Footer.tsx
    │   ├── sections/               # Homepage section components
    │   │   ├── Hero.tsx
    │   │   ├── CredibilityBar.tsx
    │   │   ├── ServicesPreview.tsx
    │   │   ├── FeaturedProjects.tsx
    │   │   ├── ResultsHighlights.tsx
    │   │   └── HomeCTA.tsx
    │   └── ui/
    │       ├── index.tsx           # Section, SectionHeader, Badge, MetricCard, ImgPlaceholder
    │       └── RevealOnScroll.tsx  # IntersectionObserver scroll reveal
    │
    └── lib/
        ├── config.ts               # ← PRIMARY CONTENT FILE: all site data, services, projects
        ├── mdx.ts                  # MDX file reading utilities
        └── utils.ts                # cn(), slugify(), formatDate()
```

---

## Quick Start

### Prerequisites
- Node.js 18.17+ (required by Next.js 14)
- npm 9+ or pnpm 8+

### 1. Clone and install

```bash
git clone <your-repo-url> shazib-portfolio
cd shazib-portfolio
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-actual-link
```

### 3. Add your resume PDF

Place your resume at:
```
public/resume.pdf
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for production

```bash
npm run build
npm run start
```

---

## How to Update Content

### Update your name, email, Calendly link, social URLs

Edit **`src/lib/config.ts`** — this is the single source of truth for all site-wide settings:

```ts
export const siteConfig = {
  name: "Shazib Siddique",
  email: "siddiqueshazib5@gmail.com",
  calendly: "https://calendly.com/your-link",   // ← update
  linkedin: "https://linkedin.com/in/...",       // ← update
  github: "https://github.com/...",              // ← update
  url: "https://yourdomain.com",                 // ← update before deploy
};
```

### Update proof metrics (homepage credibility bar)

In `src/lib/config.ts`, edit `proofMetrics`:

```ts
export const proofMetrics = [
  { value: "99.9%", label: "Uptime maintained", sub: "Athletics website SLA" },
  // ...add or edit entries
];
```

### Update service packages

In `src/lib/config.ts`, edit the `services` array. Each service has:
- `title`, `tagline`, `audience`, `problems[]`, `deliverables[]`
- `timeline`, `price`, `featured` (boolean — marks "Most Popular")

### Update portfolio projects (list + metadata)

In `src/lib/config.ts`, edit the `projects` array for grid display, tags, and metrics.

### Update case study content (full write-up)

Edit the corresponding MDX file in `content/projects/`:

```
content/projects/ai-knowledge-optimization.mdx
content/projects/uber-clone.mdx
content/projects/client-website.mdx
content/projects/marketmate.mdx
content/projects/athletics-systems.mdx
```

MDX frontmatter controls metadata:
```mdx
---
title: "Project Title"
slug: "project-slug"
category: "Web"
summary: "One sentence summary for the card view."
stack: ["Next.js", "TypeScript"]
metrics: ["Metric 1", "Metric 2"]
featured: true
---

## The Problem
...full write-up in Markdown...
```

### Add a new project

1. Add an entry to `projects` in `src/lib/config.ts`
2. Create `content/projects/your-slug.mdx`
3. Add screenshots to `public/images/projects/`

---

## Adding Images

### Placeholder replacement guide

| File path | Purpose | Recommended size |
|-----------|---------|-----------------|
| `public/resume.pdf` | Resume embed + download | — |
| `public/favicon.ico` | Browser tab icon | 32×32px |
| `public/apple-touch-icon.png` | iOS home screen | 180×180px |
| `public/images/og/og-default.png` | Social sharing preview | 1200×630px |
| `public/images/projects/{slug}-01.png` | Case study hero | 1280×800px |
| `public/images/projects/{slug}-02.png` | Case study detail | 1280×800px |

### Naming convention for project screenshots

```
public/images/projects/
├── ai-knowledge-01.png     (main screenshot)
├── ai-knowledge-02.png     (detail view)
├── uber-clone-01.png
├── uber-clone-02.png
├── client-website-01.png
├── marketmate-01.png
└── athletics-systems-01.png
```

To use actual images, replace `ImgPlaceholder` components in the case study page with Next.js `<Image>` components:

```tsx
// In src/app/portfolio/[slug]/page.tsx, replace ImgPlaceholder with:
import Image from "next/image";

<Image
  src={`/images/projects/${params.slug}-01.png`}
  alt={`${title} screenshot`}
  width={1280}
  height={800}
  className="rounded-xl w-full"
  priority
/>
```

---

## Contact Form Storage

### How it works (development / low-volume production)

Submissions are written to `data/contact-submissions.json` (auto-created, gitignored):

```json
[
  {
    "id": "1718000000000-abc123",
    "name": "Jane Smith",
    "email": "jane@company.com",
    "company": "Smith Co",
    "role": "Operations / Admin Support",
    "budget": "$1,000–$2,500",
    "timeline": "1 month",
    "message": "I need help with...",
    "submittedAt": "2024-06-10T14:30:00.000Z"
  }
]
```

### How to enable email notifications

1. Install nodemailer:
   ```bash
   npm install nodemailer @types/nodemailer
   ```

2. Add to `.env.local`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=siddiqueshazib5@gmail.com
   ```

3. In `src/app/api/contact/route.ts`, uncomment the `sendNotificationEmail` function and the call to it in the `POST` handler.

### Production alternatives

For higher-volume or serverless deployments (Vercel):
- **Resend** (recommended): `npm install resend` — simple API, generous free tier
- **SendGrid**: well-documented email API
- **Vercel KV** or **PlanetScale**: database storage instead of JSON file
- **Supabase**: full Postgres with REST API, free tier available

---

## Deploying to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

1. Push your code to GitHub (or GitLab/Bitbucket)

2. Go to [vercel.com/new](https://vercel.com/new) and import the repo

3. Set environment variables in Vercel dashboard:

   | Variable | Value |
   |----------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |
   | `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/your-link` |

4. Click **Deploy**

### Custom domain

In Vercel dashboard → Project → Settings → Domains → Add your domain.

### Important: JSON file storage on Vercel

Vercel uses a **read-only filesystem** in production — `data/contact-submissions.json` will **not persist** between deployments. For production on Vercel, switch to one of these:

- **Resend** (email-only, simplest): [resend.com](https://resend.com)
- **Vercel KV** (Redis): `npm install @vercel/kv`
- **Supabase** (Postgres): `npm install @supabase/supabase-js`

See the contact form section above for implementation guidance.

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full URL of your deployed site (no trailing slash) |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Calendly booking page URL |
| `EMAIL_HOST` | No | SMTP host for email notifications |
| `EMAIL_PORT` | No | SMTP port (usually 587) |
| `EMAIL_USER` | No | SMTP username |
| `EMAIL_PASS` | No | SMTP password / app password |
| `EMAIL_TO` | No | Where to send contact form notifications |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID |

---

## Customizing the Design

### Change accent color

Update in `src/app/globals.css`:
```css
:root {
  --accent: #5F9EA0;  /* ← change to your color */
}
```

And in `tailwind.config.ts`, update the `cadet` color scale.

### Change fonts

In `src/app/layout.tsx`, replace `Poppins` with any Google Font:
```ts
import { YourFont } from "next/font/google";
const yourFont = YourFont({ ... });
```

### Update the "How I Work" process steps (About page)

In `src/app/about/page.tsx`, edit the `workProcess` array.

---

## SEO Checklist

Before going live:

- [ ] Update `siteConfig.url` in `src/lib/config.ts` to your real domain
- [ ] Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
- [ ] Add real `public/images/og/og-default.png` (1200×630px)
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Submit `https://yourdomain.com/sitemap.xml` to Google Search Console
- [ ] Verify LinkedIn and GitHub URLs in `siteConfig`
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) after deploy

---

## ATS / Recruiter Notes

The resume page (`/resume`) is designed for both purposes:
- **Hiring managers**: inline PDF embed with download button + scannable metrics list
- **ATS systems**: all key metrics and skills are present as semantic HTML text (not just in the PDF)

To update the resume highlights shown on the page, edit the `highlights` array in `src/app/resume/page.tsx`.

---

*Built with Next.js 14 · TypeScript · Tailwind CSS · MDX*
