import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Github, Linkedin, MapPin, Globe } from 'lucide-react';
import { UserProfile, Project } from '../types/portfolio';
import { CAREER_EXPERIENCES, SKILL_CATEGORIES, EDUCATION, AREAS_OF_INTEREST } from '../data/initialData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  projects: Project[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
${profile.name} - ${profile.title}
Location: ${profile.location} | Email: ${profile.email}

PROFESSIONAL SUMMARY
${profile.bio}

CORE TECHNICAL SKILLS
${SKILL_CATEGORIES.map(c => `- ${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

EXPERIENCE
${CAREER_EXPERIENCES.map(e => `
${e.role} | ${e.company} (${e.period})
${e.description}
Key Achievements:
${e.achievements.map(a => `• ${a}`).join('\n')}
Technologies: ${e.tech.join(', ')}
`).join('\n')}

SELECTED SHIPPED PROJECTS
${projects.map(p => `• ${p.title} (${[p.category, p.year].filter(Boolean).join(', ')}): ${p.tagline}`).join('\n')}

EDUCATION
${EDUCATION.map(e => `${e.degree} | ${e.institution} (${e.period})`).join('\n')}

AREAS OF INTEREST
${AREAS_OF_INTEREST.join(', ')}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0C0C10] border border-[#D4AF37]/40 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Controls */}
        <div className="px-6 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#121217] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
              Curriculum Vitae
            </span>
            <span className="text-xs text-neutral-500">·</span>
            <span className="text-xs text-neutral-300 font-medium">
              Verified Dossier
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 hover:text-white border border-[#D4AF37]/25 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-12 text-neutral-200 bg-[#0A0A0E] font-sans">
          
          {/* Header Zone */}
          <div className="pb-8 border-b border-[#D4AF37]/30 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-wide">
                {profile.name}
              </h1>
              <p className="font-editorial italic text-lg sm:text-xl text-[#F3E5AB] mt-1">
                {profile.title}
              </p>
              <p className="text-xs text-neutral-400 mt-2 max-w-xl leading-relaxed">
                {profile.bio}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${profile.email}`} className="text-[#F3E5AB] hover:underline">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#F3E5AB] hover:underline">
                  {profile.github.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="py-8 border-b border-[#D4AF37]/20">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <div className="font-display font-bold text-white mb-2">
                    {cat.title}
                  </div>
                  <p className="text-neutral-400 leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Experience */}
          <div className="py-8 border-b border-[#D4AF37]/20">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-6">
              Engineering Work History
            </h2>

            <div className="space-y-8">
              {CAREER_EXPERIENCES.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {exp.role} <span className="font-editorial italic font-normal text-[#F3E5AB]">· {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#D4AF37]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-3">{exp.description}</p>
                  
                  <ul className="space-y-1.5 pl-4 list-disc marker:text-[#D4AF37] text-xs text-neutral-300">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="leading-relaxed">{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Shipped Flagships */}
          <div className="pt-8">
            <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
              Featured Shipped Works ({projects.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-lg border border-[#D4AF37]/20 bg-[#101015]">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-display font-bold text-white line-clamp-1">{p.title}</span>
                    <span className="font-mono text-[10px] text-[#D4AF37]">{p.category}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Interests */}
          <div className="pt-8 mt-8 border-t border-[#D4AF37]/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
                Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.institution} className="text-xs">
                  <div className="font-display font-bold text-sm text-white">{edu.degree}</div>
                  <div className="font-editorial italic text-[#F3E5AB]">{edu.institution}</div>
                  <div className="font-mono text-[#D4AF37] mt-1">{edu.period}</div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
                Areas of Interest
              </h2>
              <div className="flex flex-wrap gap-2">
                {AREAS_OF_INTEREST.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs rounded bg-[#181820] text-[#E5C875] border border-[#D4AF37]/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
