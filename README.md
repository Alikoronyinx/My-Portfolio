# Onyinyechi Alikor — Product Designer Portfolio

A modern, premium, single-page portfolio website for Onyinyechi Alikor — a Product Designer specializing in simple, human-centered digital experiences.

---

## Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure & SEO meta tags |
| **Tailwind CSS** (CDN) | Utility-first styling & responsive layout |
| **Lucide Icons** (CDN) | Lightweight SVG icon set |
| **Google Fonts — DM Sans** | Primary typeface across all body and UI text |
| **Google Fonts — Instrument Serif** | Italic accent used in process step numbers |
| **Vanilla JS** | Animations, dark/light mode, modal, mobile menu |

No build tools required — open `index.html` directly in a browser.

---

## Sections

1. **Hero** — Headline, subheadline, CTAs, portrait (no scroll hint)
2. **Image Marquee** — Infinite auto-scrolling strip of all 5 project images
3. **About** — Personal bio, design philosophy, skills grid, tools
4. **Projects** — BeSafr, SkillEX, Periax, Retwix, PassForge — all HNG 2026 internship projects
5. **Design Process** — 4-step 2×2 grid: Discover, Design, Refine, Deliver ("How I Think Through Design")
6. **Experience** — Timeline (HNG 2026, Design Practice) + achievements incl. PassForge live app; proper 3-level heading hierarchy (h2 → h3 → h4)
7. **Contact** — Email, LinkedIn, Behance, Resume download
8. **Footer** — Branding + social links

---

## Projects

| Project | Category | Case Study |
|---|---|---|
| **BeSafr** | Safety App | Internal modal |
| **SkillEX** | Ed-Tech | [Behance →](https://www.behance.net/gallery/250802001/Skill-Exchange-App) |
| **Periax** | Health Tech | [Behance →](https://www.behance.net/gallery/250802767/Clinical-Trial-Web-App) |
| **Retwix** | Fictional World | [Behance →](https://www.behance.net/gallery/250803019/Fictional-World-Web-App) |
| **PassForge** | Event Tech | [Live app →](https://passforge-olive.vercel.app/) |

All five projects were completed during the **HNG 2026 Internship** (Product Design Track).

Grid layout: 2×2 + PassForge left-aligned in the last row at the same card width as the others.

---

## Project Images

| File | Used In |
|---|---|
| `images/myimage.jpeg` | Hero portrait |
| `images/saftyapp.png` | BeSafr — Safety App card |
| `images/Edtech.png` | SkillEX — Ed-Tech card |
| `images/fintech.png` | Periax — Health Tech / Clinical Trial WebApp card |
| `images/social.png` | Retwix — Social Platform card |
| `images/passforge.png` | PassForge — Event Tech card |

---

## Links

| Label | Value |
|---|---|
| Email | alikoronyx@gmail.com |
| LinkedIn | https://www.linkedin.com/in/onyinyechi-alikor-334a831b5/ |
| Behance | https://www.behance.net/onyinyechialikor |
| CV / Resume | https://drive.google.com/file/d/1xRXorz7tOf1yr-cbv_f9tqcDHaSBpfkU/view?usp=sharing |

---

## Features

- **Dark / Light mode** toggle — preference saved in `localStorage`
- **Clean & minimal aesthetic** — neutral outline-pill tags, soft card hover (−3 px), reduced section gradient mesh opacity, generous section spacing (`py-28`)
- **Infinite scroll image marquee** — auto-scrolling strip of all 5 project screenshots after the hero; contained within page margins with rounded corners; continuous (no pause on hover)
- **Gradient mesh section backgrounds** — very subtle radial-gradient per section (3–7% opacity dark, 3–5% light)
- **OA monogram logo** in navbar with indigo badge
- **Sun / pill / moon theme toggle** — knob slides with CSS transform
- **Sticky navbar** with blur-on-scroll
- **Scroll-triggered reveal animations** via `IntersectionObserver`
- **Hero entrance animations** — staggered fade-up per word
- **Project cards** — entire card (image + body) is clickable; opens Behance case study (SkillEX, Periax, Retwix), live app (PassForge), or internal modal (BeSafr)
- **Internal modal case study** for BeSafr — full overview, process steps, challenge, solution, outcomes, metrics
- **Project card image hover zoom** — `scale(1.12)` with `cubic-bezier` ease-out (.6s) + deep gradient overlay fade
- **Glassmorphism** cards via `backdrop-filter: blur`
- **Contact cards** — no drop shadow in dark or light mode
- **Inline brand SVG icons** — LinkedIn, Behance, Figma, FigJam (whiteboard/amber), Maze (maze-path/coral), Notion, Miro
- **Responsive** — mobile-first, tested down to 375 px
- **Smooth scrolling** on all anchor links
- **Accessible** — semantic HTML, `aria-labels`, alt text on all images
- **Dynamic copyright year** — always current via `new Date().getFullYear()`

---

## Local Development

No server required for basic viewing:

```bash
# Simply open in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

For a local server (avoids any CORS quirks with images):

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Customisation Quick Guide

| What to change | Where |
|---|---|
| Name / headline | Search `Onyinyechi Alikor` in `index.html` |
| Portrait | Replace `images/myimage.jpeg` |
| Project images | Replace files in `images/` folder |
| Accent color | Search `#6366f1` (indigo) and swap globally |
| Case study Behance links | `onclick="window.open(...)"` on `.proj-card-ref` divs |
| Section gradient colors | `#about`, `#projects`, `#process` etc. in `<style>` block |
| Font | Replace `DM Sans` in Google Fonts link, Tailwind config, and `body` CSS |
| Email subject line | `?subject=` param on `mailto:` in the Email contact card |

---

© 2026 Onyinyechi Alikor. All rights reserved.
