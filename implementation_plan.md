# Portfolio Website — Implementation Plan (Final)

## Goal

Build a professional, production-ready dark-themed portfolio website for a **Junior Fullstack Web Developer** using React + TypeScript + Vite + Tailwind CSS v4 + Motion. Design inspired by [dymasalfin.web.id](https://www.dymasalfin.web.id/) layout but adapted to a **dark theme with blue accents** to harmonize with the provided portrait photo.

---

## Design Direction

### Dark Theme + Blue Accent

Your portrait photo features dramatic **dark blue lighting** against a deep dark background. This naturally defines the color palette:

- **Dark background** (`#09090b` near-black) — matches the photo's dark tones
- **Blue accent** (`#3b82f6` / blue-500) — pulled from the photo's blue lighting
- **Subtle blue glow** effects that echo the photo's lighting atmosphere
- **Clean white text** on dark surfaces for strong contrast

The result: a cohesive, moody, professional dark portfolio where the photo feels like a natural extension of the design — not pasted on top of it.

### Layout (from reference)

Same structure as the reference site:
- **Portrait-centered hero** — your photo as the dominant visual element
- **Text at bottom-left** — role title + description + CTA
- **Social links at bottom-right** — vertical pill badges
- **Clean navbar** — status indicator + links + CTA button
- **Minimal, editorial sections** below the hero

---

## Color System

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#09090b` | Main page background |
| `bg-secondary` | `#111113` | Card backgrounds, alternating sections |
| `bg-tertiary` | `#18181b` | Elevated surfaces, hover states |
| `border` | `#27272a` | Card borders, dividers |
| `border-subtle` | `#1e1e22` | Subtle separators |
| `text-primary` | `#fafafa` | Headings, primary text |
| `text-secondary` | `#a1a1aa` | Body text, descriptions |
| `text-muted` | `#71717a` | Captions, metadata |
| `accent` | `#3b82f6` | Primary accent (blue — from photo) |
| `accent-hover` | `#60a5fa` | Hovered accent |
| `accent-glow` | `rgba(59,130,246,0.15)` | Subtle glow effects |
| `status-green` | `#22c55e` | "Available" dot |

---

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Initialize Vite + React + TypeScript project
```bash
npx -y create-vite@latest ./ --template react-ts
npm install motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

---

### 2. Configuration

#### [MODIFY] vite.config.ts
- Add `@tailwindcss/vite` plugin
- Configure path aliases (`@/` → `src/`)

#### [MODIFY] index.html
- SEO: title, meta description, Open Graph tags
- Google Fonts: Inter (preconnect + link)
- Favicon (SVG)
- Dark theme meta (`theme-color: #09090b`)

#### [MODIFY] src/index.css
- `@import "tailwindcss"`
- `@theme` block with custom color tokens
- Base styles: smooth scroll, dark background, Inter font
- `prefers-reduced-motion` media query
- Custom utility classes

---

### 3. Data Layer (content separated from UI)

#### [NEW] src/data/projects.ts
4 projects: Rail Booking System, AI Multi-Chatbot, Admin Toko, SIAKAD

#### [NEW] src/data/skills.ts
4 categories: Frontend (7), Backend (4), Database (3), Tools (6)

#### [NEW] src/data/experience.ts
Internship + Education + Certifications data

#### [NEW] src/data/navigation.ts
Nav link definitions shared by Navbar + Footer

---

### 4. Hooks & Utilities

#### [NEW] src/hooks/useActiveSection.ts
IntersectionObserver hook for active nav highlighting

#### [NEW] src/utils/animations.ts
Reusable Motion animation variants

---

### 5. Components

#### [NEW] Navbar.tsx
```
[ 🟢 Available for New Project ]    [ About  Skills  Projects  Experience  Contact ]    [ View My Work → ]
```
- Sticky, backdrop-blur on scroll, bottom border appears on scroll
- Mobile hamburger with animated drawer
- Active section highlighting

#### [NEW] Hero.tsx — The centerpiece
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                  ┌──────────────┐                      │
│                  │              │                      │
│                  │  YOUR PHOTO  │                      │
│                  │  (centered,  │                      │
│                  │   large,     │                      │
│                  │   with blue  │                      │
│                  │   glow)      │                      │
│                  │              │                      │
│                  └──────────────┘                      │
│                                                        │
│  Junior Fullstack                        ┌───────────┐ │
│  Web Developer                           │  GitHub   │ │
│                                          ├───────────┤ │
│  Passionate about building modern,       │ LinkedIn  │ │
│  scalable web applications...            ├───────────┤ │
│                                          │  Email    │ │
│  [ Let's Work Together → ]               └───────────┘ │
└────────────────────────────────────────────────────────┘
```
- Full viewport height
- Centered portrait with subtle blue radial glow behind it (CSS)
- Bottom-left: role + description + CTA
- Bottom-right: social pill badges
- Staggered entrance animations

#### [NEW] About.tsx
- Section heading + accent line
- Professional bio (2-3 paragraphs)
- Scroll-reveal

#### [NEW] Skills.tsx
- 4 category cards (dark surface + border)
- Skills as pill badges with subtle hover
- Responsive 2×2 grid → stacked on mobile

#### [NEW] Projects.tsx + ProjectCard.tsx
- Generated thumbnail images for each project
- Card: thumbnail, title, description, tech tags, links
- Hover: lift + blue glow border
- Staggered scroll reveal

#### [NEW] Experience.tsx
- Timeline with blue left-border accent
- Company, role, date, responsibilities
- Scroll reveal

#### [NEW] Education.tsx
- Education + Certification cards
- Consistent with Experience styling

#### [NEW] Contact.tsx
- "Have a project in mind?" headline
- Email, GitHub, LinkedIn links
- Optional frontend-only form
- Centered layout

#### [NEW] Footer.tsx
- Name, description, nav links, social icons, copyright
- Minimal, top-border separator

#### [NEW] SectionHeading.tsx
- Reusable heading component with consistent styling

---

### 6. Assets

#### Your portrait photo
- Saved to `src/assets/portrait.jpg` (the photo you provided)
- Displayed in hero with CSS blue radial glow behind it

#### Project thumbnails
- 4 generated images for each project card

---

### 7. App Assembly

#### [MODIFY] App.tsx
All sections composed in order with proper `id` attributes for navigation

---

## Animation Strategy

| Element | Animation | Trigger |
|---------|-----------|---------|
| Navbar | Fade-in + blur transition | Load + scroll |
| Hero portrait | Scale-up + fade (0.8s) | Page load |
| Hero text | Staggered fade-up | Page load (delayed) |
| Section headings | Fade-up | Scroll viewport |
| Skill cards | Staggered fade-up | Scroll viewport |
| Project cards | Staggered fade-up | Scroll viewport |
| Card hover | Scale 1.02 + blue glow | Mouse hover |
| Timeline items | Fade-right | Scroll viewport |
| Buttons | Scale 0.97 on press | Click/tap |

All animations respect `prefers-reduced-motion`.

---

## Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `< 640px` | Single column, hamburger nav, smaller portrait, stacked cards |
| `640–768px` | 2-col skill grid |
| `768–1024px` | Full nav, 2-col project grid |
| `1024px+` | Max-width 1200px, full hero layout |
| `1280px+` | Larger typography |

---

## SEO

- **Title**: "Zidane — Junior Fullstack Web Developer"
- **Description**: Portfolio showcasing React, TypeScript, Next.js, Node.js projects
- **OG tags**: title, description, image, URL
- **Semantic HTML**: header, main, section, footer, nav
- **Single h1** in hero, h2 for sections

---

## Verification

```bash
npx tsc --noEmit    # TypeScript check
npm run build       # Production build
npm run dev         # Dev server visual check
```

Manual: responsive testing, navigation, animations, keyboard nav, no console errors, no horizontal overflow.

---

## Open Questions

> [!IMPORTANT]
> **Personal Info needed** (using placeholders for now):
> - Full name (using "Zidane")
> - Email address
> - GitHub URL
> - LinkedIn URL
> - CV/Resume download link
