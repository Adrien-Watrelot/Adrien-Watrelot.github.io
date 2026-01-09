# Project Structure Documentation

This document provides a detailed overview of the portfolio architecture.

## Directory Tree

```
Adrien-Watrelot.github.io/
│
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI pipeline for PR validation
│       └── deploy.yml          # Deployment pipeline to GitHub Pages
│
├── public/                     # Static assets (copied as-is to dist/)
│   └── favicon.svg             # Site favicon
│
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── FeaturedProject.astro    # Featured project card (home)
│   │   ├── Footer.astro        # Site footer with social links
│   │   ├── Header.astro        # Sticky header with navigation
│   │   ├── LanguageSwitcher.astro  # FR/EN language toggle
│   │   ├── ProjectCard.astro   # Project preview card
│   │   ├── SkillCard.astro     # Skill category card
│   │   ├── ThemeToggle.astro   # Light/dark mode toggle
│   │   └── Timeline.astro      # Timeline for experience/education
│   │
│   ├── content/                # Content collections
│   │   ├── config.ts           # Collection schemas
│   │   └── projects/
│   │       ├── fr/             # French projects
│   │       │   ├── project-1.md
│   │       │   └── project-2.md
│   │       └── en/             # English projects
│   │           ├── project-1.md
│   │           └── project-2.md
│   │
│   ├── i18n/                   # Internationalization
│   │   ├── en.json             # English translations
│   │   ├── fr.json             # French translations
│   │   └── utils.ts            # i18n helper functions
│   │
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro    # Main layout with header/footer
│   │
│   ├── pages/                  # File-based routing
│   │   ├── index.astro         # Root (redirects to /fr/)
│   │   ├── 404.astro           # Not found page
│   │   │
│   │   ├── fr/                 # French routes (/fr/*)
│   │   │   ├── index.astro     # Home page
│   │   │   ├── about.astro     # About page
│   │   │   ├── skills.astro    # Skills page
│   │   │   ├── contact.astro   # Contact page
│   │   │   └── projects/
│   │   │       ├── index.astro         # Projects listing
│   │   │       └── [slug].astro        # Project detail (dynamic)
│   │   │
│   │   └── en/                 # English routes (/en/*)
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── skills.astro
│   │       ├── contact.astro
│   │       └── projects/
│   │           ├── index.astro
│   │           └── [slug].astro
│   │
│   ├── scripts/                # Client-side TypeScript
│   │   └── theme.ts            # Theme management logic
│   │
│   └── styles/                 # Global styles
│       └── global.css          # Tailwind + custom CSS variables
│
├── .gitignore                  # Git ignore rules
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
├── README.md                   # Project documentation
├── STRUCTURE.md                # This file
├── tailwind.config.mjs         # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## CI/CD Pipeline

### GitHub Actions Workflows

**CI Pipeline** (`.github/workflows/ci.yml`):
- Triggers on pull requests to `main`
- Validates code with type checking (`npm run astro check`)
- Builds the project to ensure no build errors
- Verifies build output (checks for minimum 15 pages)
- Required status check for branch protection

**Deploy Pipeline** (`.github/workflows/deploy.yml`):
- Triggers on push to `main` or manual workflow dispatch
- Runs type checking and build
- Uploads build artifact to GitHub Pages
- Automatically deploys to production
- Provides deployment URL in logs

**Branch Protection**:
- `main` branch is protected
- Requires pull request reviews
- Requires "Validate Code" status check to pass
- No direct commits or force pushes allowed

**Development Workflow**:
1. Create feature branch from `dev`
2. Make changes and commit
3. Push branch and create PR to `main`
4. CI pipeline validates automatically
5. After approval and merge, deploy pipeline publishes to production

## Key Concepts

### 1. Internationalization (i18n)

**Implementation**: Astro's built-in i18n with custom utilities

**Files**:
- `astro.config.mjs`: Configures locales and routing
- `src/i18n/utils.ts`: Translation helpers (`t()`, `getLocalizedPath()`, etc.)
- `src/i18n/fr.json` & `src/i18n/en.json`: Translation dictionaries

**URL Structure**:
- `/fr/` → French homepage
- `/en/` → English homepage
- `/fr/projects/project-1` → French project detail
- `/en/projects/project-1` → English project detail

**Language Switching**: Preserves current page when switching languages

### 2. Content Collections

**Purpose**: Type-safe content management for projects

**Location**: `src/content/projects/`

**Schema** (`src/content/config.ts`):
```typescript
{
  title: string
  description: string
  tags: string[]
  featured: boolean
  date: Date
  demoUrl?: string
  githubUrl?: string
}
```

**Separation**: Content is split by locale (`fr/` and `en/` subdirectories)

### 3. Theme System

**Files**:
- `src/scripts/theme.ts`: Theme logic (get/set/toggle)
- `src/styles/global.css`: CSS variables for light/dark mode
- `src/components/ThemeToggle.astro`: UI component

**Features**:
- System preference detection
- localStorage persistence
- No FOUC (Flash of Unstyled Content) via inline script

**CSS Variables**:
```css
:root { /* Light mode */ }
.dark { /* Dark mode */ }
```

### 4. Routing

**Type**: File-based routing (Astro standard)

**Static Routes**:
- `src/pages/fr/index.astro` → `/fr/`
- `src/pages/en/about.astro` → `/en/about/`

**Dynamic Routes**:
- `src/pages/fr/projects/[slug].astro` → `/fr/projects/*`
- Uses `getStaticPaths()` to generate routes from content collections

**Root Redirect**:
- `src/pages/index.astro` redirects `/` to `/fr/` (default locale)

### 5. Styling Architecture

**Framework**: Tailwind CSS with custom design tokens

**Approach**: shadcn-style CSS variables mapped to Tailwind utilities

**Global Styles**: `src/styles/global.css`
- Font imports (Inter, Sora, JetBrains Mono)
- CSS variable definitions
- Component classes (`.card`, `.btn`, `.badge`)
- Animation utilities

**Configuration**: `tailwind.config.mjs`
- Custom color palette using HSL variables
- Font family overrides
- Custom animations (fade-in, fade-in-up)

### 6. Components

**Header** (`src/components/Header.astro`):
- Sticky navigation with blur backdrop
- Active link highlighting
- Mobile menu with toggle animation
- Language switcher and theme toggle
- Responsive navigation with dropdown support

**Footer** (`src/components/Footer.astro`):
- Social links (GitHub, LinkedIn, Email)
- Copyright notice
- Built with Astro badge

**FeaturedProject** (`src/components/FeaturedProject.astro`):
- Prominent featured project card on homepage
- Displays featured project image or placeholder
- Shows title, description, and tags
- Link-style CTA to project detail
- Responsive grid layout

**ProjectCard** (`src/components/ProjectCard.astro`):
- Compact project preview with title, description, tags
- Hover effects and animations
- Link-style CTA to project detail
- Used in projects listing page

**SkillCard** (`src/components/SkillCard.astro`):
- Skill category grouping with icons
- Checkmark list items for individual skills
- Card-based layout

**Timeline** (`src/components/Timeline.astro`):
- Timeline component for experience and education
- Vertical line with dots marking events
- Date, title, location, duration display
- Fade-in-up animation with forwards fill mode
- Responsive layout

**ThemeToggle** (`src/components/ThemeToggle.astro`):
- Sun/moon icon animation
- Client-side toggle logic with smooth transitions

**LanguageSwitcher** (`src/components/LanguageSwitcher.astro`):
- Dropdown-style language selector
- Preserves page context when switching
- Shows current locale with flag/icon

### 7. Pages

#### Home (`index.astro`)
- Hero section with gradient background
- Name and title with animations
- CTA buttons (View Projects, Contact)
- Featured project section with FeaturedProject component
- Link-style CTAs matching overall design

#### About (`about.astro`)
- Profile photo with static border
- Personal introduction with role and description
- Experience section using Timeline component
- Education section using Timeline component
- Skills highlight section with link to skills page
- Interests section with icons (aquarium, gaming, music, sport)
- CTA section with links to contact, projects, and LinkedIn
- Download CV button

#### Skills (`skills.astro`)
- Skill categories (Frontend, Backend, Database, Tools, Soft Skills)
- Grid layout with SkillCard components
- Icon and checklist for each category
- Comprehensive technology stack display

#### Projects Listing (`projects/index.astro`)
- Fetches projects from content collections
- Filters by locale
- Sorts by date (newest first)
- Category-based dropdown filter
- Project count display
- Grid layout with ProjectCard components
- Responsive design with hover effects

#### Project Detail (`projects/[slug].astro`)
- Dynamic route generation via getStaticPaths
- Full project content (Markdown rendering)
- Project metadata (date, role, duration)
- Technologies used with badges
- Demo and GitHub links (when available)
- Visual banner or placeholder
- Back to projects button
- Architecture diagrams and code blocks with syntax highlighting

#### Contact (`contact.astro`)
- Contact form with name, email, message fields
- Form validation
- Success/error message handling
- Direct contact information (email, LinkedIn, GitHub)
- Responsive layout

#### 404 (`404.astro`)
- Custom not found page
- Bilingual support
- Back to home button

## Data Flow

### Page Rendering

```
Request → Astro Router
  → Locale detection (from URL)
  → Fetch translations (i18n utils)
  → Fetch content (if applicable)
  → Render layout (BaseLayout)
  → Inject components (Header, Footer, etc.)
  → Output static HTML
```

### Theme Switching

```
User clicks ThemeToggle
  → toggleTheme() in theme.ts
  → Update localStorage
  → Toggle .dark class on <html>
  → CSS variables apply new theme
```

### Language Switching

```
User clicks LanguageSwitcher
  → switchLanguage(currentPath, targetLocale)
  → Calculate new URL
  → Navigate to equivalent page in new locale
```

## Build Output

**Command**: `npm run build`

**Output Directory**: `dist/`

**Structure**:
```
dist/
├── index.html          # Root redirect
├── 404.html            # Not found page
├── fr/
│   ├── index.html
│   ├── about/index.html
│   ├── skills/index.html
│   ├── contact/index.html
│   └── projects/
│       ├── index.html
│       ├── project-1/index.html
│       └── project-2/index.html
├── en/
│   └── (same structure)
└── _astro/             # Optimized assets (CSS, JS, fonts)
```

## GitHub Pages Deployment

**Configuration** (`astro.config.mjs`):
- `site: "https://adrien-watrelot.github.io"`
- `base: "/"` (served from root, not subpath)
- All internal links use `getLocalizedPath()` helper

**GitHub Actions Workflows**:
- CI pipeline validates pull requests before merging
- Deploy pipeline automatically publishes on push to `main`
- No manual deployment steps required
- Build artifacts uploaded to GitHub Pages

**Branch Strategy**:
- `main`: Production branch (protected, auto-deploys)
- `dev`: Development branch (base for feature branches)
- Feature branches: Created from `dev`, merged to `main` via PR

## Customization Points

### Content
1. ✅ Translation files fully populated (`src/i18n/fr.json`, `src/i18n/en.json`)
2. ✅ Real projects added to `src/content/projects/` (ArtConnect, Frysa, Article27)
3. ✅ Skills pages updated with actual tech stack
4. ✅ About page personalized with real experience and education
5. Update profile photo in `public/assets/images/`
6. Add CV PDF file and link from about page

### Styling
1. ✅ CSS variables configured in `src/styles/global.css`
2. ✅ Tailwind config customized in `tailwind.config.mjs`
3. ✅ Fonts configured (Inter, Sora, JetBrains Mono)
4. ✅ Theme system (light/dark mode) fully functional
5. ✅ shadcn-style design tokens implemented

### Functionality
1. ✅ Contact form structure in place (ready for backend integration)
2. ✅ Project filtering with category dropdown
3. ✅ Featured project on homepage
4. Add analytics (Plausible, Fathom, Google Analytics)
5. Add blog section (optional future enhancement)
6. Add OG image for better social media sharing

### CI/CD
1. ✅ GitHub Actions workflows created (ci.yml, deploy.yml)
2. ✅ Branch protection configured on `main`
3. ✅ Automated deployment to GitHub Pages
4. ✅ PR validation with status checks

## Performance Considerations

- **Static Generation**: All pages pre-rendered at build time
- **Minimal JavaScript**: Only essential client-side scripts (theme, mobile menu)
- **Font Loading**: Google Fonts with `display=swap`
- **Image Optimization**: (TODO: Add images and use Astro's image component)
- **Code Splitting**: Astro automatically splits JavaScript per page

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties (CSS variables)
- localStorage API
- matchMedia API (for system theme detection)

## Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast (WCAG AA compliant)
- Responsive design (mobile-first)

## Future Enhancements

- [ ] Add blog section with content collections
- [ ] Implement CMS integration (e.g., Astro Content Layer, Tina CMS)
- [ ] Add Open Graph image generation for social sharing
- [ ] Implement search functionality for projects and blog posts
- [ ] Add RSS feed for blog
- [ ] Set up automated testing (Playwright, Vitest)
- [ ] Add performance monitoring (Web Vitals, Lighthouse CI)
- [ ] Implement sitemap generation (Astro plugin)
- [ ] Add structured data (JSON-LD) for better SEO
- [ ] Integrate analytics (Plausible, Fathom)
- [ ] Add email newsletter subscription
- [ ] Implement advanced project filtering (search, tags, technologies)
- [ ] Add testimonials/recommendations section
