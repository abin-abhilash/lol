import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for styling navbar and active section fallbacks
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);

      // Top of page guarantee
      if (scrollPos < 120) {
        setActiveSection('home');
        return;
      }

      // Bottom of page guarantee (for short contact section)
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (scrollPos + windowHeight >= fullHeight - 100) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY >= 120) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E5E5E2] shadow-subtle py-3.5'
          : 'bg-transparent border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
          aria-label="Abin Abhilash Home"
        >
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-[#171717] transition-colors group-hover:text-black">
            {personalInfo.logoText.replace('.', '')}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F3F3EF]/80 p-1.5 rounded-full border border-[#E5E5E2] backdrop-blur-sm" aria-label="Main Navigation">
          {personalInfo.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'text-[#171717] font-bold'
                    : 'text-[#737373] hover:text-[#171717]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-white rounded-full shadow-subtle border border-[#E5E5E2]/80"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#171717] text-[#FAFAF8] hover:bg-black transition-all duration-200 shadow-subtle hover:shadow-card hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-[#F3F3EF] border border-[#E5E5E2] text-[#171717] hover:bg-[#EAEAE5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-[#E5E5E2] rounded-2xl shadow-elevated p-6 z-50 overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373] px-3 pb-1 border-b border-[#E5E5E2]/60">
                Navigation
              </span>
              {personalInfo.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F3F3EF] text-[#171717] font-semibold'
                        : 'text-[#737373] hover:text-[#171717] hover:bg-[#F3F3EF]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </a>
                );
              })}
              
              <div className="pt-3 border-t border-[#E5E5E2]/60 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl bg-[#171717] text-[#FAFAF8] hover:bg-black transition-colors shadow-subtle"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
