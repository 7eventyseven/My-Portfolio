import React, { useState } from 'react';
import { Plus, Menu, X, ArrowUpRight } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface NavbarProps {
  profile: UserProfile;
  onOpenUpload: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenUpload,
  onOpenResume,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#08080A]/90 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Zone - Single text element wordmark */}
        <a 
          href="#" 
          className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-gold-gradient hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {profile.brandTag || "AURELIA // LANGNAN"}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-neutral-400">
          <a href="#works" className="hover:text-[#F3E5AB] transition-colors py-1">
            Works
          </a>
          <a href="#expertise" className="hover:text-[#F3E5AB] transition-colors py-1">
            Expertise
          </a>
          <a href="#blueprint" className="hover:text-[#F3E5AB] transition-colors py-1">
            Architecture
          </a>
          <a href="#journey" className="hover:text-[#F3E5AB] transition-colors py-1">
            Journey
          </a>
          <button 
            onClick={onOpenResume}
            className="hover:text-[#F3E5AB] transition-colors py-1 cursor-pointer text-left"
          >
            Resume
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenUpload}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] whitespace-nowrap cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Upload Project</span>
          </button>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#F3E5AB] border border-[#D4AF37]/35 rounded-lg hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenUpload}
            aria-label="Upload Project"
            className="p-2 text-black bg-gold-metallic rounded-md hover:brightness-110 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 text-neutral-300 hover:text-[#F3E5AB] border border-[#D4AF37]/30 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#D4AF37]/20 bg-[#0c0c10] px-6 py-5 flex flex-col gap-4">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-[#F3E5AB]"
          >
            Selected Works
          </a>
          <a
            href="#expertise"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-[#F3E5AB]"
          >
            Technical Expertise
          </a>
          <a
            href="#blueprint"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-[#F3E5AB]"
          >
            Architecture Blueprint
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-[#F3E5AB]"
          >
            Career Journey
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="text-left text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-[#F3E5AB]"
          >
            View Full Resume
          </button>
          
          <div className="pt-2 border-t border-[#D4AF37]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUpload();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg"
            >
              <Plus className="w-4 h-4" />
              <span>Upload New Project</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F3E5AB] border border-[#D4AF37]/40 rounded-lg"
            >
              Contact & Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
