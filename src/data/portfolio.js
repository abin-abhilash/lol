/**
 * Portfolio Data Configuration for Abin Abhilash
 * Fully typed and centralized for easy updates.
 */

export const personalInfo = {
  name: "Abin Abhilash",
  logoText: "ABIN.",
  title: "Student | Aspiring Developer",
  roleTag: "Student / Aspiring Developer",
  location: "India",
  email: "abinabhilash1@gmail.com",
  experience: "Fresher / Student",
  status: "Available for internships & collaborations",
  
  hero: {
    greeting: "HELLO, I'M ABIN ABHILASH",
    headline: "Building my journey, one line of code at a time.",
    description: "I'm a student and aspiring developer passionate about creating clean, modern, and user-friendly digital experiences.",
    primaryCta: { text: "Explore My Work", href: "#projects" },
    secondaryCta: { text: "Get In Touch", href: "#contact" },
  },

  about: {
    title: "A Little About Me",
    subtitle: "Curious mind. Creative thinking. Passion for technology.",
    bioParagraphs: [
      "I'm Abin Abhilash, a student and aspiring developer from India. I'm passionate about technology and enjoy exploring how ideas can turn into useful digital experiences.",
      "I'm currently developing my frontend development skills, experimenting with modern technologies, and continuously learning to become a better developer."
    ],
    infoCards: [
      {
        number: "01",
        label: "Current Focus",
        value: "Frontend Development",
        detail: "Mastering modern web foundations & component architecture",
      },
      {
        number: "02",
        label: "Experience",
        value: "Fresher / Student",
        detail: "Building strong fundamentals through hands-on practice",
      },
      {
        number: "03",
        label: "Location",
        value: "India",
        detail: "Open to remote opportunities & global collaboration",
      },
    ],
  },

  skills: [
    {
      id: "html",
      name: "HTML",
      category: "Structure & Semantics",
      description: "Building structured web experiences.",
      icon: "SiHtml5",
      color: "#E34F26",
      bgSubtle: "#FDF1EE",
      tags: ["Semantic Markup", "Accessibility (a11y)", "SEO-Friendly"],
    },
    {
      id: "css",
      name: "CSS",
      category: "Styling & Responsive UI",
      description: "Creating beautiful and responsive interfaces.",
      icon: "SiCss3",
      color: "#1572B6",
      bgSubtle: "#EDF5FB",
      tags: ["Responsive Design", "Flexbox & Grid", "Modern Layouts"],
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Core Logic & Interactivity",
      description: "Adding functionality and interactivity.",
      icon: "SiJavascript",
      color: "#F7DF1E",
      badgeColor: "#8C7A00",
      bgSubtle: "#FEFCE8",
      tags: ["ES6+ Syntax", "DOM Manipulation", "Asynchronous Code"],
    },
    {
      id: "react",
      name: "React",
      category: "Modern UI Framework",
      description: "Building modern component-based interfaces.",
      icon: "SiReact",
      color: "#00D8FE",
      badgeColor: "#0284C7",
      bgSubtle: "#F0F9FF",
      tags: ["Component Architecture", "Hooks & State", "Declarative UI"],
    },
  ],

  projectsSection: {
    heading: "Selected Projects",
    emptyState: {
      headline: "Something exciting is in the works.",
      description: "I'm currently learning, experimenting, and working towards building projects that bring ideas to life. Stay tuned!",
      badge: "In Development",
    },
    // Schema prepared for future projects when ready
    futureProjects: [],
  },

  contact: {
    heading: "Let's Create Something Together.",
    description: "Have an idea, opportunity, or just want to say hello? I'd love to hear from you.",
    email: "abinabhilash1@gmail.com",
    ctaText: "Send an Email",
  },

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
};

