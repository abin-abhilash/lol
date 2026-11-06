import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Globe, Terminal, ArrowRight, Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const cardIcons = [
    <Terminal className="w-5 h-5 text-accent" />,
    <Sparkles className="w-5 h-5 text-accent" />,
    <Globe className="w-5 h-5 text-accent" />,
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAFAF8] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F3EF] border border-[#E5E5E2] text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4 shadow-subtle">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {personalInfo.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373] font-normal">
            {personalInfo.about.subtitle}
          </p>
        </motion.div>

        {/* Editorial Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Editorial Text - Left Side (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5E2] shadow-subtle hover:shadow-card transition-all duration-300 relative overflow-hidden group">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent block">
                  Philosophy & Background
                </span>
                <Quote className="w-6 h-6 text-[#E5E5E2] group-hover:text-accent/30 transition-colors" />
              </div>

              <p className="text-lg sm:text-xl md:text-[22px] font-medium text-[#171717] leading-relaxed tracking-tight">
                "I'm <span className="font-bold text-black">Abin Abhilash</span>, a student and aspiring developer from India. I'm passionate about technology and enjoy exploring how ideas can turn into useful digital experiences."
              </p>

              <div className="my-6 h-px bg-[#E5E5E2]" />

              <p className="text-base sm:text-lg text-[#737373] leading-relaxed font-normal">
                "I'm currently developing my frontend development skills, experimenting with modern technologies, and continuously learning to become a better developer."
              </p>

              <div className="mt-8 pt-6 border-t border-[#E5E5E2] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#737373] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Committed to clean code, semantic structure, and modern UX standards.</span>
                </div>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-accent transition-colors group/link"
                >
                  <span>Explore Technical Skills</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1 text-accent" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3 Information Cards - Right Side (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {personalInfo.about.infoCards.map((card, idx) => (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-[#F3F3EF]/70 hover:bg-white border border-[#E5E5E2] transition-all duration-300 shadow-subtle hover:shadow-card relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-[#F3F3EF] border border-[#E5E5E2] flex items-center justify-center transition-colors shadow-subtle flex-shrink-0">
                      {cardIcons[idx]}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider block">
                        {card.number} — {card.label}
                      </span>
                      <h3 className="text-lg font-bold text-[#171717] tracking-tight mt-0.5">
                        {card.value}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#737373] leading-relaxed pl-14">
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
