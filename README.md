# LWS Portfolio

Personal online portfolio built with Nuxt 4 and Tailwind CSS.

## Stack

- Nuxt 4
- Vue 3
- Tailwind CSS

## Project Structure

- [`app/pages/index.vue`](/home/louise/Documents/projects/lws-portfolio/app/pages/index.vue): main landing page composition
- [`app/components/portfolio`](/home/louise/Documents/projects/lws-portfolio/app/components/portfolio): reusable portfolio sections
- [`app/data/portfolio.ts`](/home/louise/Documents/projects/lws-portfolio/app/data/portfolio.ts): navigation, projects, experience, skills, and contact content
- [`app/assets/css/tailwind.css`](/home/louise/Documents/projects/lws-portfolio/app/assets/css/tailwind.css): global Tailwind entry and custom utility styles
- [`tailwind.config.ts`](/home/louise/Documents/projects/lws-portfolio/tailwind.config.ts): theme tokens matching the mockup palette

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the local dev server at `http://localhost:3000`:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Generate a static version if needed:

```bash
npm run generate
```

## Content Updates

Most portfolio content can be updated in [`app/data/portfolio.ts`](/home/louise/Documents/projects/lws-portfolio/app/data/portfolio.ts).

- Update hero, project, experience, skills, and contact data there.
- Replace placeholder links and images with your real portfolio assets.
- Add logo/image assets under `public/` if you want company branding in the experience section.

## Notes

- The portfolio was converted from a static mockup into reusable Nuxt components.
- Navigation active state is driven by the current section in view.
- Google Fonts and Material Symbols are loaded from `nuxt.config.ts`.
