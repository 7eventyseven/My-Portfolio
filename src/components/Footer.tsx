import React from 'react';
import { ArrowUp, Download, RotateCcw, Sparkles } from 'lucide-react';
import { UserProfile } from '../types/portfolio';
import { exportPortfolioBackup } from '../utils/storage';

interface FooterProps {
  profile: UserProfile;
  onResetDefaults: () => void;
  onOpenUpload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onResetDefaults,
  onOpenUpload
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#07070A] py-14">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#D4AF37]/15">
          <div>
            <div className="font-display font-bold text-xl text-gold-gradient tracking-wide mb-1">
              {profile.brandTag}
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-md leading-relaxed">
              Haute software engineering, high-throughput backend architecture, and fluid native mobile development.
            </p>
          </div>

          {/* Quick Portfolio Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenUpload}
              className="px-3.5 py-2 text-xs font-mono text-[#F3E5AB] hover:text-white border border-[#D4AF37]/30 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              + Upload Project
            </button>

            <button
              onClick={exportPortfolioBackup}
              title="Download portfolio data as JSON backup"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Backup JSON</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm("Reset portfolio showcase back to initial curated projects?")) {
                  onResetDefaults();
                }
              }}
              title="Reset to default curated projects"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-neutral-400 hover:text-red-300 border border-neutral-800 rounded-lg hover:border-red-900/50 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Showcase</span>
            </button>

            <button
              onClick={scrollToTop}
              title="Scroll back to top"
              className="p-2 text-[#D4AF37] hover:text-white border border-[#D4AF37]/30 rounded-lg hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright & Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <div>
            © {new Date().getFullYear()} {profile.name}. All engineering rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#works" className="hover:text-[#F3E5AB] transition-colors">Works</a>
            <a href="#expertise" className="hover:text-[#F3E5AB] transition-colors">Expertise</a>
            <a href="#blueprint" className="hover:text-[#F3E5AB] transition-colors">Architecture</a>
            <a href="#journey" className="hover:text-[#F3E5AB] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#F3E5AB] transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
