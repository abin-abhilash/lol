import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Html5Icon, Css3Icon, JavascriptIcon, ReactIcon } from './TechIcons';
import { personalInfo } from '../data/portfolio';

export default function Skills() {
  const iconMap = {
    html: <Html5Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />,
    css: <Css3Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />,
    javascript: <JavascriptIcon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />,
    react: <ReactIcon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-45" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#F3F3EF]/50 relative border-y border-[#E5E5E2]/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E2] text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4 shadow-subtle">
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span>Core Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
              Technologies I Work With
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#737373]">
              Modern web fundamentals and libraries focused on building responsive, performant user interfaces.
            </p>
          </div>

          <div className="text-xs font-medium text-[#737373] flex items-center gap-2 self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Foundational Mastery • Hands-on Practice</span>
          </div>
        </motion.div>

        {/* 4 Premium Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personalInfo.skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-3xl p-7 border border-[#E5E5E2] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle accent hover indicator in top right */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 rounded-full bg-[#F3F3EF] flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#171717]" />
                </div>
              </div>

              <div>
                {/* Tech Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E2] flex items-center justify-center mb-6 shadow-subtle group-hover:border-accent/30 transition-colors">
                  {iconMap[skill.id]}
                </div>

                {/* Category tag */}
                <span className="text-[11px] font-mono font-medium text-[#737373] uppercase tracking-wider block mb-1">
                  {skill.category}
                </span>

                {/* Skill Title */}
                <h3 className="text-xl font-bold text-[#171717] tracking-tight mb-2.5">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#737373] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tags / Sub-skills */}
              <div className="mt-8 pt-5 border-t border-[#E5E5E2]/80 space-y-2">
                {skill.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-xs text-[#525252]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent/70 flex-shrink-0" />
                    <span className="font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Subtle Gradient Border on Hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-xs text-[#737373]"
        >
          <span>Continuously deepening frontend engineering practices, accessibility, and modern React patterns.</span>
        </motion.div>

      </div>
    </section>
  );
}
