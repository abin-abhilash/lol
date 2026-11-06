import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, ArrowDown, ArrowRight, Code2, Terminal, Layers, Play, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');
  const [clickCount, setClickCount] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.25,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:py-32 overflow-hidden bg-canvas"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-5 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-[#E8E6FE]/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols on lg) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Top Badges: Location & Student Tag */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Introduction Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F3EF] border border-[#E5E5E2] text-[#171717] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{personalInfo.hero.greeting}</span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E5E2] text-xs font-medium text-[#737373] shadow-subtle">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Student / Aspiring Developer Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{personalInfo.roleTag}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.12]">
                Building my journey,{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#171717] via-accent to-[#171717]">
                  one line of code
                </span>{' '}
                at a time.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#737373] font-normal leading-relaxed max-w-xl">
                {personalInfo.hero.description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={personalInfo.hero.primaryCta.href}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#171717] text-white font-semibold text-sm hover:bg-black transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{personalInfo.hero.primaryCta.text}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href={personalInfo.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F3F3EF] hover:bg-[#EAEAE5] text-[#171717] font-semibold text-sm border border-[#E5E5E2] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{personalInfo.hero.secondaryCta.text}</span>
                <ArrowRight className="w-4 h-4 text-[#737373] transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Quick status bar */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-[#E5E5E2]/80 flex items-center gap-6 text-xs text-[#737373]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{personalInfo.status}</span>
              </div>
              <span className="text-[#E5E5E2]">•</span>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#737373]" />
                <span>React & Modern Web</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Creative Abstract Visual (5 cols on lg) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual container with refined Apple-like layered design */}
            <div className="relative w-full max-w-md">
              
              {/* Back ambient accent glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent/20 via-transparent to-accent/10 blur-xl opacity-70 -z-10" />

              {/* Main Window Card */}
              <div className="relative bg-white rounded-3xl border border-[#E5E5E2] p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-500">
                
                {/* Window header / chrome */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E5E2]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FA8072]/60 border border-[#D4D4CE]" />
                    <span className="w-3 h-3 rounded-full bg-[#E5C07B]/60 border border-[#D4D4CE]" />
                    <span className="w-3 h-3 rounded-full bg-[#98C379]/60 border border-[#D4D4CE]" />
                  </div>
                  
                  {/* Interactive Tab Switcher */}
                  <div className="flex items-center gap-1 bg-[#F3F3EF] p-1 rounded-full border border-[#E5E5E2]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full transition-all ${
                        activeTab === 'code'
                          ? 'bg-white text-[#171717] shadow-subtle font-medium'
                          : 'text-[#737373] hover:text-[#171717]'
                      }`}
                    >
                      <Code2 className="w-3 h-3 text-accent" />
                      <span>profile.js</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full transition-all ${
                        activeTab === 'preview'
                          ? 'bg-white text-[#171717] shadow-subtle font-medium'
                          : 'text-[#737373] hover:text-[#171717]'
                      }`}
                    >
                      <Play className="w-2.5 h-2.5 text-emerald-600" />
                      <span>live.jsx</span>
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === 'code' ? (
                    /* Minimalist Code Art block */
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="font-mono text-xs sm:text-[13px] leading-relaxed text-[#171717] space-y-2 py-2"
                    >
                      <p className="text-[#737373]">
                        <span className="text-accent font-semibold">const</span> developer = &#123;
                      </p>
                      <p className="pl-5 text-[#171717]">
                        name: <span className="text-emerald-700 font-medium">"{personalInfo.name}"</span>,
                      </p>
                      <p className="pl-5 text-[#171717]">
                        role: <span className="text-emerald-700 font-medium">"Aspiring Developer"</span>,
                      </p>
                      <p className="pl-5 text-[#171717]">
                        focus: <span className="text-emerald-700 font-medium">"Frontend & UI/UX"</span>,
                      </p>
                      <p className="pl-5 text-[#171717]">
                        location: <span className="text-emerald-700 font-medium">"{personalInfo.location}"</span>,
                      </p>
                      <p className="pl-5 text-[#171717]">
                        stack: [
                        <span className="text-amber-700">"HTML"</span>,{' '}
                        <span className="text-sky-700">"CSS"</span>,{' '}
                        <span className="text-yellow-700">"JS"</span>,{' '}
                        <span className="text-cyan-700">"React"</span>
                        ],
                      </p>
                      <p className="pl-5 text-[#737373]">
                        passion: <span className="text-accent font-medium">"Turning ideas into clean digital experiences"</span>
                      </p>
                      <p className="text-[#737373]">&#125;;</p>
                    </motion.div>
                  ) : (
                    /* Live Interactive React Demo */
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="py-3 px-1 space-y-4"
                    >
                      <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#E5E5E2] space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#737373]">
                          <span className="font-mono text-[11px] text-accent">React State Hook</span>
                          <span className="flex items-center gap-1 text-emerald-600 font-medium text-[11px]">
                            <CheckCircle2 className="w-3 h-3" /> Live & Reactive
                          </span>
                        </div>
                        <p className="text-xs text-[#525252]">
                          Interactive state demonstration right in the browser:
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setClickCount((c) => c + 1)}
                            className="px-3.5 py-1.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-black transition-all active:scale-95 shadow-subtle"
                          >
                            Increment State
                          </button>
                          <span className="font-mono text-xs font-bold text-[#171717] bg-white px-3 py-1 rounded-full border border-[#E5E5E2]">
                            count: {clickCount}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] font-mono text-[#737373] text-center">
                        // Built with functional components & hooks
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mini interactive tech pills badge bar */}
                <div className="mt-5 pt-4 border-t border-[#E5E5E2] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span className="font-medium text-[11px] uppercase tracking-wide">Core Stack</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F3F3EF] text-[#171717] border border-[#E5E5E2]">HTML</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F3F3EF] text-[#171717] border border-[#E5E5E2]">CSS</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#F3F3EF] text-[#171717] border border-[#E5E5E2]">JS</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-accent/10 text-accent border border-accent/20">React</span>
                  </div>
                </div>

              </div>

              {/* Floating accent card: Minimalist experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-3 sm:-right-4 bg-[#F3F3EF]/95 backdrop-blur-md border border-[#E5E5E2] rounded-2xl p-3.5 shadow-card flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-xs shadow-accent-glow">
                  AB
                </div>
                <div>
                  <p className="text-xs font-bold text-[#171717] leading-tight">Continuous Learner</p>
                  <p className="text-[11px] text-[#737373]">Every day is a code day</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
