import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#E5E5E2] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#E5E5E2]">
          
          {/* Brand & Title */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#171717]">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="text-xs text-[#737373] mt-1 font-medium">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-[#171717] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{personalInfo.email}</span>
            </a>

            <div className="h-4 w-px bg-[#E5E5E2]" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F3F3EF] border border-[#E5E5E2] text-xs font-semibold text-[#171717] transition-colors shadow-subtle group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-accent" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#737373]">
          <div className="flex items-center gap-1">
            <span>Designed & developed with care.</span>
          </div>

          <div className="font-mono text-[11px] text-[#A3A3A3]">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

