import React, { useState } from 'react';
import { motion } from 'motion/react';
import { sectionReveal } from './Reveal';
import { Terminal, Globe, Smartphone, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/initialData';

export const SkillsMatrix: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <motion.section id="expertise" className="py-24 border-t border-[#D4AF37]/20 relative" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            Discipline Breakdown
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-1">
            02. Technical Mastery
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2">
            A frontend-first toolkit for building, deploying and maintaining responsive web applications with React, Next.js and TypeScript.
          </p>
        </div>

        {/* Category Tabs (Interactive buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <motion.button
                key={cat.title}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#D4AF37] bg-[#14141B] shadow-[0_0_25px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/40'
                    : 'border-neutral-800 bg-[#0E0E13] hover:border-neutral-700 text-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {idx === 0 && <Globe className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />}
                    {idx === 1 && <Cpu className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />}
                    {idx === 2 && <Terminal className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />}
                    <span className={`text-xs font-mono uppercase tracking-wider ${isActive ? 'text-[#D4AF37]' : 'text-neutral-500'}`}>
                      Domain 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className={`font-display font-bold text-base sm:text-lg mb-1 ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {cat.title}
                </div>
                
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Active Skills List Grid */}
        <div className="p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/25 bg-[#0F0F14]">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#D4AF37]/15">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                {currentCategory.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                {currentCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono text-[#D4AF37]">
              {currentCategory.skills.length} Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.skills.map((skill, i) => (
              <motion.div
                key={`${currentCategory.title}-${skill.name}`}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 rounded-xl border border-[#D4AF37]/15 bg-[#14141B] hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display font-bold text-sm sm:text-base text-white">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-[#D4AF37] px-2 py-0.5 rounded bg-[#1F1D15] border border-[#D4AF37]/30">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};
