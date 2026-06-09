# Onyinyechi Alikor — Product Designer Portfolio

A modern, premium, single-page portfolio website for Onyinyechi Alikor — a Product Designer specializing in user-centered digital experiences.

---

## Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure & SEO meta tags |
| **Tailwind CSS** (CDN) | Utility-first styling & responsive layout |
| **Lucide Icons** (CDN) | Lightweight SVG icon set |
| **Google Fonts — Inter** | Clean, professional typography |
| **Vanilla JS** | Animations, dark/light mode, mobile menu |

No build tools required — open `index.html` directly in a browser.

---

## Sections

1. **Hero** — Headline, subheadline, CTAs, portrait, floating design chips
2. **About** — Bio, design philosophy, skills grid, tools
3. **Projects** — BeSafr, SkillEX, Periax, Retwix case study cards
4. **Design Process** — 6-step visual flow (Discover → Test & Iterate)
5. **Testimonials** — Mentor & collaborator quote cards
6. **Experience** — Timeline + achievements/certifications
7. **Contact** — Email, LinkedIn, Behance, Resume download
8. **Footer** — Branding + social links

---

## Project Images

| File | Used In |
|---|---|
| `images/myimage.jpeg` | Hero portrait |
| `images/saftyapp.png` | BeSafr project card |
| `images/Edtech.png` | SkillEX project card |
| `images/fintech.png` | Periax project card |
| `images/social.png` | Retwix project card |

---

## Updating Your Links

All social, contact, and CV links are marked with clear `YOUR_*_HERE` placeholders. Do a **Find & Replace** in any text editor:

| Link | Value |
|---|---|
| Email | alikoronyx@gmail.com |
| LinkedIn | https://www.linkedin.com/in/onyinyechi-alikor-334a831b5/ |
| Behance | https://www.behance.net/onyinyechialikor |
| CV / Resume | https://drive.google.com/file/d/1xRXorz7tOf1yr-cbv_f9tqcDHaSBpfkU/view?usp=sharing |

---

## Features

- **Dark / Light mode** toggle (preference saved in localStorage)
- **Sticky navbar** with blur-on-scroll
- **Scroll-triggered reveal animations** via IntersectionObserver
- **Hero entrance animations** (staggered fade-up)
- **Floating design element chips** in the hero
- **Project card hover effects** — image zoom + overlay
- **Gradient border glow** on project cards
- **Responsive** — mobile-first, tested down to 375 px
- **Smooth scrolling** on all anchor links
- **Accessible** — semantic HTML, aria-labels, alt text on all images

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
| Case study links | Find `href="#"` on "View Study" buttons |
| Copyright year | Footer, near bottom of `index.html` |

---

© 2024 Onyinyechi Alikor. All rights reserved.
