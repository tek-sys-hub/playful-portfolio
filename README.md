# 🍒 Playful Portfolio · Cherry (Tek Raj Awasthi)

> A tactile, neo-brutalist interactive developer portfolio built with React 19, TypeScript, physics-driven canvas simulations, Web Audio cartoon sound effects, and playful mascots.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-tekawasthi.dev-FF2A4D?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.tekawasthi.dev/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-playful--portfolio-14163A?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tek-sys-hub/playful-portfolio)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🌟 Overview

**Playful Portfolio** is the personal website of **Tek Raj Awasthi (aka Cherry)**, an independent developer and BSc. CSIT student from Nepal 🇳🇵 passionate about low-level computing, compiler design, and creative code (creator of the **Rubix** systems programming language in x86-64 assembly).

Instead of a generic static resume, this portfolio was crafted as a living, tactile digital toy:
- **Live Demo**: [https://www.tekawasthi.dev/](https://www.tekawasthi.dev/)
- **Source Code**: [https://github.com/tek-sys-hub/playful-portfolio](https://github.com/tek-sys-hub/playful-portfolio)

---

## ✨ Features

- 🍒 **Interactive Hero Mascot (Cherry Toy)**:
  - 4 distinct vibe modes: *Chill*, *400mg Caffeine*, *Chaos*, and *2 AM*.
  - Reactive thought bubble generator.
  - Clickable poke counter with squishy micro-animations.
  - Interactive "DO NOT PRESS" surprise button.
- 🫧 **Living Bloop Companion**:
  - Interactive floating blob mascot anchored to the viewport.
  - Draggable and clickable with shifting color moods and speech bubbles.
- 🎨 **Neo-Brutalist Visual Design**:
  - Chunky ink borders (`3px solid var(--navy)`), tactile box-shadows, pastel accents, and retro dot-matrix patterns.
  - Custom hand-coded SVG cover artwork for every repository.
- 🔊 **Synthesized Web Audio Engine**:
  - Procedurally generated retro cartoon sound effects (pops, boings, bleeps, bloops) using the native Web Audio API (zero audio asset downloads).
  - Global audio mute/unmute toggle.
- 🎊 **Confetti & Canvas Physics**:
  - Real-time particle engine for celebratory interaction moments.
  - Ambient floating background shapes (stars, rings, circles, crosses) floating gently on an HTML5 canvas.
- 🗂️ **Filterable Project Showcase**:
  - Filter projects by *All*, *Systems*, *Applications*, and *Creative Code*.
  - Direct links to GitHub repositories and live deployments.
- 🃏 **3D Flippable Q&A Cards**:
  - Tactile question-and-answer cards in the About section that rotate 180 degrees on click.
- 🌓 **Instant Light/Dark Theme**:
  - Smooth theme switching with tokenized CSS variables persisted to `localStorage`.
- 📱 **Responsive & Accessible**:
  - Seamless layout across mobile phones, tablets, and ultra-wide desktop monitors.
  - Respects user accessibility preferences (`prefers-reduced-motion`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | Vanilla CSS (CSS Custom Properties design system) |
| **Audio** | Native HTML5 Web Audio API (`AudioContext`) |
| **Graphics** | HTML5 2D Canvas API |
| **Icons & Art** | Custom Inline SVG Graphics |

---

## 📁 Project Structure

```text
playful-portfolio/
├── index.html                      # Entry HTML with custom Cherry favicon & meta
├── package.json                    # Project dependencies & scripts
├── public/
│   ├── favicon.svg                 # Cherry vector favicon
│   └── cherry-logo.svg             # Brand logo asset
├── src/
│   ├── App.tsx                     # Main application layout & theme provider
│   ├── main.tsx                    # React root entry point
│   ├── index.css                   # Neo-brutalist CSS design system & tokens
│   ├── components/
│   │   ├── Header.tsx              # Top navigation bar with theme & sound controls
│   │   ├── Hero.tsx                # Hero section with intro & bio
│   │   ├── FunnyHeroMascot.tsx     # Interactive Cherry Toy widget
│   │   ├── Marquee.tsx             # Infinite scrolling ticker
│   │   ├── ProjectsSection.tsx     # Filterable project showcase cards
│   │   ├── SkillsSection.tsx       # Categorized technical skill blocks
│   │   ├── AboutSection.tsx        # Bio, 3D flip cards, and philosophy
│   │   ├── ContactSection.tsx      # Social links & contact card
│   │   ├── Footer.tsx              # Bottom footer with back-to-top button
│   │   ├── Bloop.tsx               # Floating interactive companion
│   │   ├── FloatingBackground.tsx  # Ambient 2D canvas floating physics
│   │   └── ConfettiCanvas.tsx      # Confetti burst particle simulation
│   ├── data/
│   │   └── portfolioData.tsx       # Projects, skills, flip cards, and SVG cover art
│   └── utils/
│       └── sound.ts                # Web Audio API procedural sound synthesizer
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tek-sys-hub/playful-portfolio.git
   cd playful-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

---

## 👤 Author

**Tek Raj Awasthi (Cherry)**
- Website: [tekawasthi.dev](https://www.tekawasthi.dev/)
- GitHub: [@tek-sys-hub](https://github.com/tek-sys-hub)
- LinkedIn: [Tek Raj Awasthi](https://www.linkedin.com/in/tek-raj-awasthi-1a9768412)
- Email: [tekawasthi87@gmail.com](mailto:tekawasthi87@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

