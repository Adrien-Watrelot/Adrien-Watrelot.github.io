# Adrien Watrelot - Portfolio

Modern portfolio website built with Astro, featuring internationalization (French/English), dark mode, and static site generation optimized for GitHub Pages.

🚀 **Live Site**: [adrien-watrelot.github.io](https://adrien-watrelot.github.io)

## Features

### Core Functionality
- **Static Site Generation**: Built with Astro 4.x for optimal performance
- **Internationalization (i18n)**: Full support for French and English with language switcher
- **Dark/Light Mode**: Theme toggle with system preference detection and localStorage persistence
- **Content Collections**: Type-safe project management with Markdown and Zod schemas
- **RSS Feed**: Auto-generated feed at `/rss.xml` for projects and updates

### User Experience
- **Advanced Project Filtering**: Real-time search, multi-tag filtering, and sorting options
- **Enhanced 404 Page**: Intelligent suggestions with quick navigation to main sections
- **Modern Design**: Clean, minimalist, recruiter-friendly aesthetic with shadcn-style tokens
- **Responsive**: Mobile-first design with adaptive navigation
- **Animations**: Subtle entrance animations (fade-in, fade-in-up)

### Performance & SEO
- **Image Optimization**: Sharp integration with automatic WebP conversion
- **SEO Optimized**: Structured data (JSON-LD), OpenGraph, Twitter Cards, sitemap
- **Performance Monitoring**: Web Vitals tracking ready to enable (see PERFORMANCE.md)
- **Analytics Ready**: Plausible Analytics configured (commented, ready to activate)

### Development
- **Typography**: Inter (body), Sora (headings), JetBrains Mono (accents)
- **Type Safety**: Full TypeScript support with strict mode
- **CI/CD**: GitHub Actions workflows for validation and deployment

## Tech Stack

- **Framework**: Astro 4.x (Static Site Generation)
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript (strict mode)
- **Image Processing**: Sharp for optimization
- **RSS**: @astrojs/rss for feed generation
- **Analytics**: web-vitals for performance monitoring
- **Deployment**: GitHub Pages with Actions CI/CD
- **Fonts**: Google Fonts (Inter, Sora, JetBrains Mono)

## Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ProjectCard.astro
│   │   └── SkillCard.astro
│   ├── content/         # Content collections
│   │   ├── config.ts
│   │   └── projects/
│   │       ├── fr/      # French project content
│   │       └── en/      # English project content
│   ├── i18n/            # Internationalization
│   │   ├── fr.json
│   │   ├── en.json
│   │   └── utils.ts
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Root redirect to /fr/
│   │   ├── 404.astro
│   │   ├── fr/          # French pages
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── skills.astro
│   │   │   ├── contact.astro
│   │   │   └── projects/
│   │   └── en/          # English pages
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── skills.astro
│   │       ├── contact.astro
│   │       └── projects/
│   ├── scripts/         # Client-side scripts
│   │   └── theme.ts
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adrien-Watrelot/Adrien-Watrelot.github.io.git
cd Adrien-Watrelot.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## Development

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Customization Guide

#### 1. Update Personal Information

Replace all `TODO:` markers throughout the codebase:

- **Content**: Update `src/i18n/fr.json` and `src/i18n/en.json`
- **About page**: Edit `src/pages/fr/about.astro` and `src/pages/en/about.astro`
- **Skills**: Modify skill lists in `src/pages/fr/skills.astro` and `src/pages/en/skills.astro`
- **Projects**: Replace placeholder projects in `src/content/projects/fr/` and `src/content/projects/en/`
- **Social links**: Update footer links in `src/components/Footer.astro`

#### 2. Add New Projects

Create a new Markdown file in both language directories:

```bash
src/content/projects/fr/my-project.md
src/content/projects/en/my-project.md
```

Use this frontmatter template:

```yaml
---
title: "Project Name"
description: "Short description"
tags: ["React", "TypeScript", "Tailwind"]
featured: true
date: 2024-01-15
demoUrl: "https://example.com"
githubUrl: "https://github.com/username/project"
---

Your markdown content here...
```

#### 3. Customize Theme Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --primary: 221 83% 53%;  /* Blue accent */
  --background: 0 0% 100%; /* White background */
  /* ... other tokens */
}
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Workflows

- **CI Pipeline** (`.github/workflows/ci.yml`): Validates pull requests with type checking and build tests
- **Deploy Pipeline** (`.github/workflows/deploy.yml`): Automatically deploys to GitHub Pages on push to `main`

### Development Workflow

1. Create a feature branch from `dev`
2. Make your changes and commit
3. Push to remote and create a pull request to `main`
4. CI pipeline runs automatically to validate code
5. After approval and merge, deploy pipeline automatically publishes to production

### GitHub Pages Settings

The site is deployed via GitHub Actions to: `https://adrien-watrelot.github.io/`

To configure:
1. Repository Settings → Pages
2. Source: GitHub Actions
3. Deploy from `main` branch

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2026 Adrien Watrelot