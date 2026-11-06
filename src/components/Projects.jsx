import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Sparkles, Clock, Hammer, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

/**
 * Reusable Project Card Component
 * Ready for when real projects are added to data/portfolio.js
 */
export function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-3xl border border-[#E5E5E2] p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      <div>
        {project.image && (
          <div className="w-full h-48 rounded-2xl bg-[#F3F3EF] mb-6 overflow-hidden border border-[#E5E5E2]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
            {project.category || 'Web Application'}
          </span>
          {project.year && (
            <span className="text-xs font-mono text-[#737373]">{project.year}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-[#171717] tracking-tight mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#737373] leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#F3F3EF] text-[#525252] border border-[#E5E5E2]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E2]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-accent"
            >
              <span>Live Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#171717]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const hasProjects = personalInfo.projectsSection.futureProjects && personalInfo.projectsSection.futureProjects.length > 0;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-canvas relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F3EF] border border-[#E5E5E2] text-xs font-semibold text-[#737373] uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-accent" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171717]">
            {personalInfo.projectsSection.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#737373]">
            Curated works, exploratory builds, and interactive experiences.
          </p>
        </motion.div>

        {/* If projects exist, render the grid; otherwise render the bespoke Empty State */}
        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInfo.projectsSection.futureProjects.map((proj) => (
              <ProjectCard key={proj.id || proj.title} project={proj} />
            ))}
          </div>
        ) : (
          /* Premium Minimalist Empty State Card */
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-3xl border border-[#E5E5E2] p-8 sm:p-14 lg:p-16 shadow-card overflow-hidden"
          >
            {/* Ambient subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Editorial Announcement */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F3EF] border border-[#E5E5E2] text-xs font-semibold text-[#171717]">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span>{personalInfo.projectsSection.emptyState.badge}</span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#171717] leading-tight">
                  {personalInfo.projectsSection.emptyState.headline}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-lg">
                  {personalInfo.projectsSection.emptyState.description}
                </p>

                {/* What's being cooked preview list */}
                <div className="pt-4 border-t border-[#E5E5E2] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#525252]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Frontend Web Applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Responsive UI Components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Interactive React Experiments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Accessible Web Experiences</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Have an idea to build together? Let's connect</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Architectural Blueprint Wireframe / Workbench Visual */}
              <div className="lg:col-span-5">
                <div className="relative bg-[#FAFAF8] rounded-2xl border border-dashed border-[#D4D4CE] p-6 space-y-4">
                  
                  {/* Mock preview bar */}
                  <div className="flex items-center justify-between border-b border-[#E5E5E2] pb-3 text-[11px] font-mono text-[#737373]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>workbench.init()</span>
                    </div>
                    <span className="text-emerald-700 font-medium">status: active</span>
                  </div>

                  {/* Wireframe skeleton cards */}
                  <div className="space-y-3">
                    <div className="h-16 rounded-xl bg-white border border-[#E5E5E2] p-3 flex items-center justify-between">
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-24 bg-[#E5E5E2] rounded-full" />
                        <div className="h-2 w-36 bg-[#F3F3EF] rounded-full" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] text-[#737373]">
                        React + Tailwind
                      </span>
                    </div>

                    <div className="h-16 rounded-xl bg-white border border-[#E5E5E2] p-3 flex items-center justify-between">
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-28 bg-[#E5E5E2] rounded-full" />
                        <div className="h-2 w-44 bg-[#F3F3EF] rounded-full" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F3F3EF] text-[#737373]">
                        JS Interactivity
                      </span>
                    </div>
                  </div>

                  {/* Workbench footer note */}
                  <div className="text-center pt-2">
                    <p className="text-[11px] text-[#737373] italic">
                      "Crafting clean foundations before shipping."
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

