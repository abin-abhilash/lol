# Abin Abhilash — Personal Portfolio

A complete, premium-quality personal portfolio website for **Abin Abhilash** built with **Vite**, **React**, **Tailwind CSS**, and **Framer Motion**.

Designed with an Apple-inspired minimalist aesthetic, generous whitespace, refined typography, and a sophisticated light theme.

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Pixel-Perfect Authentic Tech Vectors
- **Design System**: Light Theme (`#FAFAF8`, `#F3F3EF`, `#171717`, `#737373`, `#6C63FF`, `#E5E5E2`)

## 🎨 Design Principles

- **Apple-inspired Light Theme**: Minimalist, clean, and distraction-free.
- **Editorial Hierarchy**: Refined typography using *Plus Jakarta Sans* and *JetBrains Mono*.
- **Authentic Identity**: Accurate representation of Abin Abhilash as an aspiring frontend developer without fabricated projects or false credentials.
- **Micro-Interactions**: Smooth entrance animations, active section pill indicator, and hover states.
- **Accessibility**: Keyboard navigable, semantic markup, and `prefers-reduced-motion` compliance.

## 📁 Project Structure

```
src/
├── assets/         # Static assets
├── components/     # UI Components
│   ├── About.jsx       # Editorial bio & 3 info cards
│   ├── Contact.jsx     # Email copy card & mailto contact form
│   ├── Footer.jsx      # Credits, dynamic year & back-to-top
│   ├── Hero.jsx        # Typography, badges & abstract code visual
│   ├── Navbar.jsx      # Sticky blur nav, active indicator & mobile menu
│   ├── Projects.jsx    # "Selected Projects" with bespoke empty state & card template
│   ├── Skills.jsx      # 4 authentic skill cards (HTML, CSS, JS, React)
│   └── TechIcons.jsx   # Official SVG vector icons
├── data/
│   └── portfolio.js    # Centralized portfolio content & future project schema
├── App.jsx         # App shell & section composition
├── index.css       # Tailwind directives & design system variables
└── main.jsx        # Vite entry point
```

## 🛠️ Development & Build

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
