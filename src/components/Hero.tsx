import React from 'react';
import { ArrowDown, Sparkles, Upload, Terminal, Smartphone, Globe, Layers } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface HeroProps {
  profile: UserProfile;
  onOpenUpload: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  projectCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenUpload,
  onOpenContact,
  onOpenResume,
  projectCount
}) => {
  return (
    <section className="relative pt-12 pb-24 md:py-28 overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Typography & Vision */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Live Availability Status */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C875] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E5C875] font-medium">
                {profile.statusText}
              </span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-white tracking-tight max-w-3xl mb-6">
              ENGINEERING{' '}
              <span className="text-gold-gradient block sm:inline">
                HIGH-PRECISION
              </span>{' '}
              SOFTWARE & APPS.
            </h1>

            {/* Editorial Poise (Girly yet bold) */}
            <p className="font-editorial italic text-xl sm:text-2xl text-neutral-300 mb-6 font-normal">
              "{profile.subTitle}"
            </p>

            <p className="font-sans text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {profile.bio}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onOpenUpload}
                className="flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <Upload className="w-4 h-4 stroke-[2.5]" />
                <span>Upload New Project</span>
              </button>

              <a
                href="#works"
                className="flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F3E5AB] border border-[#D4AF37]/40 rounded-lg hover:bg-[#D4AF37]/10 active:scale-95 transition-all"
              >
                <span>Explore Works ({projectCount})</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-400 hover:text-[#F3E5AB] transition-colors cursor-pointer"
              >
                Curriculum Vitae
              </button>
            </div>

            {/* Quantitative Proof Metrics (Clean, unboxed tabular numbers) */}
            <div className="pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient font-mono">
                  8+
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Years In Tech
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient font-mono">
                  25+
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Apps & Systems
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient font-mono">
                  99.99%
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  System Uptime
                </div>
              </div>

              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient font-mono">
                  125k+
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                  Active Mobile MAU
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fashion Luxury Portrait Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[440px]">
              
              {/* Outer decorative gilded corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" aria-hidden="true" />
              
              {/* Image Frame with Golden Shimmer Border */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#0F0F14] shadow-[0_0_40px_rgba(212,175,55,0.15)] group">
                <div className="aspect-square relative overflow-hidden bg-neutral-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gold gradient scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlaid Chic Identity Plaque */}
                <div className="p-6 bg-[#0E0E12]/95 backdrop-blur-md border-t border-[#D4AF37]/25">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-display font-bold text-lg text-[#F3E5AB]">
                      {profile.name}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#D4AF37]">
                      ARCHITECT
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mb-4">
                    {profile.title}
                  </div>

                  {/* Discipline Triumvirate */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#D4AF37]/15 text-center">
                    <div className="flex flex-col items-center">
                      <Terminal className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="text-[11px] text-neutral-300 font-medium">Software</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Globe className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="text-[11px] text-neutral-300 font-medium">Web</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Smartphone className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                      <span className="text-[11px] text-neutral-300 font-medium">Mobile</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating chic accent pill tag (functional action) */}
              <div className="absolute -bottom-5 left-6 bg-[#16161D] border border-[#D4AF37]/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-xs font-medium text-[#F3E5AB]">
                  Built for Speed & Haute Aesthetics
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
