# Institute of Digital Risk — IDR

> Official website for the **Institute of Digital Risk (IDR)** - an industry-led training and deployment institute focused on digital, cyber and AI risk in regulated, high-consequence environments.

**🌐 Live Site → [idr-institute.netlify.app](https://digital-institute-risk-ui.netlify.app)**

---

## 🎨 Design Note

The colour palette centres on **orange (`#F97316`)**, **black (`#111111`)** and **white**, chosen to project urgency, authority and clarity, the three qualities that define effective risk management. The hexagonal logo mark draws from circuit board geometry, its six equal faces suggesting structural resilience, while the internal alert mark (vertical bar and dot) communicates a live risk signal without decoration. **DM Sans** was selected for its technical precision and excellent legibility at small sizes, paired with **Playfair Display** in italic for display moments that add editorial weight to key headings. Together, the design language positions IDR at the intersection of rigorous academic credibility and fast-moving industry practice.

---

## 📁 Project Structure

```
idr-website/
├── index.html                         # Main HTML — semantic structure
├── assets/
│   ├── css/
│   │   └── styles.css                 # All styles — tokens, layout, components
│   ├── js/
│   │   └── main.js                    # All JS — nav, reveal, form
│   └── images/
│       └── logos/
│           ├── favicon.svg            # 32×32 browser tab icon
│           ├── idr-logo-icon.svg      # Hex icon only
│           └── idr-logo-full.svg      # Horizontal lockup — icon + wordmark
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

No build step. No dependencies. Just open the file.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/idr-website.git

# Navigate into the project
cd idr-website

# Open directly in browser
open index.html

# Or serve locally with any static server
npx serve .
# → http://localhost:3000
```

---

## 🎨 Design System

All design decisions are controlled through CSS custom properties in `:root`.

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f8fafc` | Page background |
| `--bg-alt` | `#f1f5f9` | Alternate section backgrounds |
| `--teal` | `#f97316` | Primary brand accent (orange) |
| `--text-head` | `#0f172a` | All headings |
| `--text-body` | `#334155` | Body copy |
| `--text-muted` | `#64748b` | Captions and labels |
| `--font` | DM Sans | All UI text |
| `--font-serif` | Playfair Display | Italic display accents |
| `--grad` | Orange → Amber | Buttons and highlights |

---

## 📄 Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#hero` | Mission statement, CTA buttons, key metrics |
| About | `#about` | Who IDR is, academic and industry bridge |
| Services | `#services` | Academy · Innovation · Advisory + pipeline |
| Community | `#community` | Audience types and sectors served |
| Contact | `#contact` | Register interest form |

---

## 🛠 Tech Stack

| Technology | Details |
|-----------|---------|
| **HTML5** | Semantic elements — `<nav>` `<main>` `<section>` `<article>` `<footer>` |
| **CSS3** | Custom properties, Grid, Flexbox, `clamp()`, media queries |
| **JavaScript** | Vanilla ES6+ — no frameworks, no dependencies |
| **Fonts** | Google Fonts — DM Sans + Playfair Display |
| **Hosting** | Netlify — auto deploys on push to `main` |

---

---

## 🌐 Deployment

This site is deployed on **Netlify** with automatic deploys on every push to `main`.

**Live URL:** [https://idr-institute.netlify.app](https://digital-institute-risk-ui.netlify.app)

To deploy your own copy:

1. Fork this repository
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from GitHub**
3. Select the forked repo
4. Leave build command and publish directory empty — this is a static site
5. Click **Deploy site**

---

## 🔖 Logo

The IDR logo is a **hexagonal risk node** with circuit trace arms radiating outward — a unique mark designed to suggest structure, resilience and precision engineering. Orange marks two active circuit traces and the central alert mark, communicating a live risk signal. All logo files are SVG and fully scalable.

| File | Usage |
|------|-------|
| `favicon.svg` | Browser tab icon |
| `idr-logo-icon.svg` | Mobile navbar, footer |
| `idr-logo-full.svg` | Desktop navbar |

---

## 📝 License

MIT © 2026 Institute of Digital Risk
