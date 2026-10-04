import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, Sparkles, Upload, Terminal, Globe, Layers } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface HeroProps {
  profile: UserProfile;
  onOpenUpload: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  projectCount: number;
}

const HEADLINE: { text: string; highlight?: boolean }[] = [
  { text: 'Crafting' },
  { text: 'beautiful', highlight: true },
  { text: 'web,' },
  { text: 'app' },
  { text: '&' },
  { text: 'software' },
  { text: 'experiences.' }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenUpload,
  onOpenContact,
  onOpenResume,
  projectCount
}) => {
  const firstName = profile.name.split(' ')[0];

  const stats = [
    { value: String(projectCount), label: 'Projects Built' },
    { value: 'B.Sc.', label: 'Computer Science' },
    { value: '8', label: 'Industries Served' }
  ];

  return (
    <section className="relative pt-12 pb-24 md:py-24 overflow-hidden">
      {/* Drifting ambient glows */}
      <div 
        className="absolute top-10 left-[10%] w-[420px] h-[420px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none animate-blob" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-[5%] w-[380px] h-[380px] bg-[#FF9EC7]/10 rounded-full blur-[130px] pointer-events-none animate-blob [animation-delay:-7s]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            
            {/* Live Availability Status */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C875] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E5C875] font-medium">
                {profile.statusText}
              </span>
            </motion.div>

            {/* Friendly greeting */}
            <motion.p variants={fadeUp} className="font-sans text-base sm:text-lg text-neutral-300 mb-3">
              Hi there, I'm <span className="font-semibold text-[#F3E5AB]">{firstName}</span>{' '}
              <span className="animate-wave" role="img" aria-label="waving hand">👋</span>
            </motion.p>

            {/* Headline with word-by-word reveal */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-white max-w-2xl mb-5">
              {HEADLINE.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.28em] ${word.highlight ? 'text-shimmer' : ''}`}
                  initial={{ opacity: 0, y: 30, rotate: 4 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className="font-editorial italic text-lg sm:text-xl text-neutral-300 mb-5 font-normal">
              "{profile.subTitle}"
            </motion.p>

            <motion.p variants={fadeUp} className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              {profile.bio}
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                onClick={onOpenUpload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-black bg-gold-metallic rounded-full hover:brightness-110 transition-[filter] shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <Upload className="w-4 h-4 stroke-[2.5]" />
                <span>Upload New Project</span>
              </motion.button>

              <motion.a
                href="#works"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#F3E5AB] border border-[#D4AF37]/40 rounded-full hover:bg-[#D4AF37]/10 transition-colors"
              >
                <span>Explore Works ({projectCount})</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-xs sm:text-sm font-medium tracking-wide text-neutral-400 hover:text-[#F3E5AB] transition-colors cursor-pointer"
              >
                View My CV
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="pt-7 border-t border-[#D4AF37]/20 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 1.1 + i * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="font-display font-bold text-xl sm:text-2xl text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[400px] animate-float-slow">
              
              {/* Outer decorative gilded corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" aria-hidden="true" />
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-[#0F0F14] shadow-[0_0_40px_rgba(212,175,55,0.15)] group">
                <div className="aspect-square relative overflow-hidden bg-neutral-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Identity Plaque */}
                <div className="p-5 bg-[#0E0E12]/95 backdrop-blur-md border-t border-[#D4AF37]/25">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-display font-bold text-lg text-[#F3E5AB]">
                      {profile.name}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">
                      FRONTEND
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mb-4">
                    {profile.title}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#D4AF37]/15 text-center">
                    {[
                      { Icon: Layers, label: 'React & Next.js' },
                      { Icon: Globe, label: 'JS & TypeScript' },
                      { Icon: Terminal, label: 'Python & PHP' }
                    ].map(({ Icon, label }) => (
                      <motion.div
                        key={label}
                        className="flex flex-col items-center"
                        whileHover={{ y: -3, scale: 1.08 }}
                      >
                        <Icon className="w-3.5 h-3.5 text-[#D4AF37] mb-1" />
                        <span className="text-[11px] text-neutral-300 font-medium">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent pill */}
              <motion.div
                className="absolute -bottom-5 left-6 bg-[#16161D] border border-[#D4AF37]/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 14 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span className="text-xs font-medium text-[#F3E5AB]">
                  Responsive by Design
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
