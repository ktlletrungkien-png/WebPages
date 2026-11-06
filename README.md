# TERRA — Planetary Design & Earth Systems Studio

> **Modern ReactJS Application** converted from static HTML/CSS/JS with an interactive **Planet Earth** theme, real-time 3D Earth Globe canvas, and full English localization.

---

## 🌍 Overview

**TERRA** is a futuristic planetary design and environmental technology studio website. It represents an agency that crafts geospatial digital twins, climate intelligence interfaces, and interactive 3D simulations for Earth observation and ecological conservation.

- **Stack**: React 19, Vite, React Router DOM, Lucide Icons, Canvas Confetti.
- **Theme**: **Planet Earth / Living Biosphere** — Deep oceanic navy, bioluminescent cyan, canopy emerald green, and atmospheric auroras.
- **Language**: English (`lang: en`).
- **Interactive Centerpiece**: Interactive HTML5 Canvas 3D Earth Globe with draggable rotation, satellite telemetry orbit, active station pins, and live coordinates HUD.

---

## 🚀 Quick Start

Ensure you have **Node.js** (v18+) installed.

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
The compiled, production-ready static bundle will be generated in `dist/`.

### 4. Preview production build
```bash
npm run preview
```

---

## 🗺️ Pages & Features

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Interactive 3D Earth Globe (drag-to-rotate, orbit satellite), Live Coordinates HUD, Marquee ticker, Studio Manifesto, Real-time Impact Metrics, Selected Missions, Disciplines, 4-Phase Workflow, Call to Action. |
| `/about` | **About** | The Story of Terra, 4 Core Planetary Values (Biosphere-First, Open Science, Sensory Wonder, Regenerative Speed), Chronological Milestones (2019–2026), Global Fellows / Team, Climate & Design Laurels. |
| `/work` | **Work / Missions** | Category filters (Climate Twins, Marine & Oceans, Conservation Tech, Planetary Games) with counts, 6 detailed case studies, Deep link support (`#terrapulse-3d`), interactive case study modal dialog. |
| `/services` | **Services** | 4 Interactive expandable service accordions, Technical deliverables, Engineering tech stack matrix (WebGL, GLSL, Cesium, React 19), 3 Partnership tiers (Sprint, Flagship, Retainer), FAQ accordion. |
| `/contact` | **Contact** | Direct frequency channels with one-click **Copy Email** & **Copy Coordinates** with animated toast, Global Observatory stations (London, Tokyo, Zurich, Manaus), Interactive transmission form with validation & confetti success state. |
| `*` | **404** | "Lost in Deep Space / Out of Earth Orbit" error screen with telemetry lost badge and return to Earth Command CTA. |

---

## 🌐 Project Structure

```text
.
├── index.html                  # Vite entry HTML (Space Grotesk + Inter + JetBrains Mono)
├── vite.config.js              # Vite React configuration
├── package.json                # Project scripts & dependencies
├── public/                     # Static assets (SVGs, favicon)
│   └── assets/img/
├── src/
│   ├── main.jsx                # Application root mounting
│   ├── App.jsx                 # Routing, layout & global background effects
│   ├── components/
│   │   ├── Header.jsx          # Sticky glassmorphic navigation with mobile drawer
│   │   ├── Footer.jsx          # Studio telemetry, UTC clock, dispatch newsletter & links
│   │   ├── EarthGlobe.jsx      # Interactive 3D Canvas Earth Globe (drag-to-rotate)
│   │   ├── Starfield.jsx       # Dynamic twinkling starfield & shooting stars
│   │   └── ProjectModal.jsx    # Case study dialog with next/prev navigation
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── WorkPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── data/
│   │   └── projectsData.js     # Planetary case studies, services, team & FAQs
│   └── styles/
│       └── index.css           # Earth theme design system & styling
└── legacy-vanilla/             # Backup of the original pure HTML/CSS/JS files
```

---

## 📦 Legacy Backup

The original vanilla HTML/CSS/JS files have been safely archived in the `legacy-vanilla/` folder for historical reference.
