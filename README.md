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

1. **Hero** — Headline, subheadline, CTAs, portrait, floating design chips
2. **About** — Personal bio, design philosophy, skills grid, tools
3. **Projects** — BeSafr, SkillEX, Periax, Retwix, PassForge — all HNG 2026 internship projects
4. **Design Process** — 6-step visual flow (Discover → Test & Iterate)
5. **Experience** — Timeline (HNG 2026, Design Practice) + achievements & certifications incl. PassForge live app
6. **Contact** — Email, LinkedIn, Behance, Resume download
7. **Footer** — Branding + social links

---

## Projects

| Project | Category | Case Study |
|---|---|---|
| **BeSafr** | Safety App | Internal modal |
| **SkillEX** | Ed-Tech | [Behance →](https://www.behance.net/gallery/250802001/Skill-Exchange-App) |
| **Periax** | Health Tech | [Behance →](https://www.behance.net/gallery/250802767/Clinical-Trial-Web-App) |
| **Retwix** | Social | [Behance →](https://www.behance.net/gallery/250803019/Fictional-World-Web-App) |
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
- **Gradient mesh section backgrounds** — unique radial-gradient treatment per section, subtle in light mode
- **OA monogram logo** in navbar with indigo badge
- **Sun / pill / moon theme toggle** — knob slides with CSS transform
- **Sticky navbar** with blur-on-scroll
- **Scroll-triggered reveal animations** via `IntersectionObserver`
- **Hero entrance animations** — staggered fade-up per word
- **Floating design chips** in the hero with text labels
- **Project cards** — click opens Behance case study (SkillEX, Periax, Retwix), live app (PassForge), or internal modal (BeSafr)
- **Internal modal case study** for BeSafr — full overview, process steps, challenge, solution, outcomes, metrics
- **Glassmorphism** cards via `backdrop-filter: blur`
- **Inline brand SVG icons** — LinkedIn, Behance, Figma, FigJam, Notion, Miro
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
