# Zavryon Software & Business Solutions

The portfolio and marketing website for Zavryon Software & Business Solutions — a software and automation consultancy for small and mid-sized businesses.

**We Solve Problems. You Grow.**

## About

Zavryon Software & Business Solutions builds websites, custom software, business process automation, and AI-powered solutions for small and mid-sized businesses. The focus is practical: understand how a business actually operates, then build or automate around that — rather than forcing a business into a generic platform.

This repository is the agency's own website, built as a real, production-quality React application rather than a static mockup.

## Services

- Website Development & Improvement
- Custom Business Software
- Business Process Automation
- AI Automation & AI Agents
- CRM & API Integrations
- Website Maintenance & Technical Support

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for tooling and dev server
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- No backend, database, or CMS — content is data-driven from local config/data files

## Features

- Fully responsive, mobile-first layout with an accessible mobile navigation menu
- Central `src/config/site.ts` file for brand name, tagline, contact details, social links, and CTA copy — no hard-coded brand strings scattered across components
- Six service cards, a four-step process section, and business-problem-focused "Solutions" cards, all driven from typed data files in `src/data/`
- A custom-built SVG diagram (no stock imagery) illustrating how a business problem moves through connected systems and automation to better operations
- A portfolio section with two clearly labeled **Concept Projects** — demonstration builds, not real client work
- A client-side-validated contact form with loading/success/error states and a placeholder submission handler that is explicit about not being connected to a live backend yet
- Semantic HTML, visible focus states, labeled form fields, and `prefers-reduced-motion` support
- SEO basics: descriptive `<title>`, meta description, Open Graph/Twitter tags, `robots.txt`, and `sitemap.xml`

## Running Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

Other scripts:

```bash
npm run build     # type-check and build for production (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Deployment

The site builds to a static `dist/` folder and can be deployed to any static host.

### Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

### Netlify

1. Push this repository to GitHub.
2. Create a new site from the repository in Netlify.
3. Build command: `npm run build`. Publish directory: `dist`.

### Cloudflare Pages

1. Push this repository to GitHub.
2. Create a new Pages project from the repository.
3. Build command: `npm run build`. Build output directory: `dist`.

After deploying, update `siteConfig.url` in `src/config/site.ts` and the canonical/Open Graph URLs in `index.html` to match the live domain.

## Project Status

This is the agency's own portfolio and marketing website — actively evolving as the agency name, brand, and first real project work are finalized.

## Disclaimer

Portfolio projects shown on this website are concept/demo projects unless explicitly identified otherwise. No client relationships, testimonials, or results are claimed or implied by this repository or the deployed site.
