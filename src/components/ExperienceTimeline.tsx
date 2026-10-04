import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CAREER_EXPERIENCES } from '../data/initialData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            Trajectory & Engagements
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-1">
            04. Career Journey
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2">
            A track record of engineering leadership across high-growth startups, scale-ups, and specialized luxury engineering studios.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          
          {/* Subtle vertical hairline spine on desktop */}
          <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-px bg-[#D4AF37]/25" aria-hidden="true" />

          {CAREER_EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative lg:pl-20 group"
            >
              {/* Desktop timeline marker */}
              <div 
                className="hidden lg:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#121218] border-2 border-[#D4AF37] items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-125 transition-transform" 
                aria-hidden="true"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/25 bg-[#0F0F14] hover:border-[#D4AF37]/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                
                {/* Top Row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#D4AF37]/15">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <div className="font-editorial italic text-base text-[#F3E5AB] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 text-xs">
                    <span className="font-mono text-[#D4AF37] font-semibold">
                      {exp.period}
                    </span>
                    <span className="text-neutral-400">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                  {exp.description}
                </p>

                {/* Bullet Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#D4AF37] text-xs font-mono mt-1">▪</span>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-[#D4AF37]/15 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mr-2">
                    Technologies:
                  </span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded bg-[#181820] text-[#E5C875] border border-[#D4AF37]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
