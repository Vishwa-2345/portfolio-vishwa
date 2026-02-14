# Vishwa V — Developer Portfolio

A modern, animated developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- **Immersive Intro Scene (simplified)** — Animated particles and a short "Let's see the developer" reveal (2s) before entering the portfolio. The previous console/monitor build-step sequence has been removed for a faster, cleaner entry.
- **Dark / Light Theme** — Toggle between themes with localStorage persistence and smooth CSS transitions.
- **Responsive Design** — Fully adaptive layout from mobile to desktop.
- **Smooth Animations** — Framer Motion–powered scroll reveals, staggered entries, and hover effects throughout.
- **Skills Showcase** — Grouped by Frontend, Backend, and Tools with alternating layout sections.
- **Project Cards** — Hover-to-reveal details with GitHub and live-demo links.
- **Contact Form** — EmailJS integration with FormSubmit and mailto fallbacks.
- **Scroll Progress Bar** — Gradient progress indicator fixed at the top.

## Tech Stack

| Category  | Technologies                                     |
| --------- | ------------------------------------------------ |
| Framework | React 18, TypeScript, Vite                       |
| Styling   | Tailwind CSS, custom CSS utilities               |
| Animation | Framer Motion, CSS keyframes                     |
| Icons     | react-icons (Si, Hi, Fi sets)                    |
| Email     | @emailjs/browser, FormSubmit (fallback)          |
| Deploy    | Vercel / Netlify (static build)                  |

## Project Structure

```
portfolio-vishwa/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/
│   │   ├── About.tsx         # About section with adaptive profile card
│   │   ├── Contact.tsx       # Contact form + email integration
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Hero.tsx          # Hero section with animated text
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── ProjectCard.tsx   # Individual project card
│   │   ├── Projects.tsx      # Projects grid section
│   │   ├── SkillCard.tsx     # Individual skill badge
│   │   ├── Skills.tsx        # Skills section (grouped layout)
│   │   └── ThemeToggle.tsx   # Dark/light mode toggle
│   ├── data/
│   │   ├── projectsData.ts   # Projects content
│   │   └── skillsData.ts     # Skills & tools content
│   ├── utils/
│   │   └── animations.ts     # Shared Framer Motion variants
│   ├── App.tsx               # Root component + intro scene
│   ├── index.css             # Global styles & theme utilities
│   ├── main.tsx              # React entry point
│   └── vite-env.d.ts         # Vite type declarations
├── index.html                # HTML shell
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Email Setup (Optional)

To enable the contact form's EmailJS integration, create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE=your_service_id
VITE_EMAILJS_TEMPLATE=your_template_id
VITE_EMAILJS_PUBLIC=your_public_key
```

Without these, the form falls back to FormSubmit and then to a mailto link.

## Deployment

Build the project and deploy the `dist/` folder to any static hosting:

```bash
npm run build
```

Works out of the box with **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

## License

MIT — feel free to use this as a starting point for your own portfolio.
