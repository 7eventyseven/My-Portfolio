import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Smartphone, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEdit: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onEdit
}) => {
  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0B0B0F] border border-[#D4AF37]/40 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header with Close & Action buttons */}
        <div className="px-6 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#111116] z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
              {project.category} // CASE STUDY
            </span>
            <span className="text-xs text-neutral-500">·</span>
            <span className="text-xs text-neutral-400 font-medium">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onEdit(project);
              }}
              className="px-3 py-1.5 text-xs text-[#F3E5AB] hover:text-white border border-[#D4AF37]/30 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Edit Details
            </button>
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1">
          
          {/* Hero Media Container */}
          <div className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden bg-neutral-950">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2 max-w-3xl">
                {project.title}
              </h2>
              <p className="font-editorial italic text-lg sm:text-xl text-[#F3E5AB] max-w-2xl font-normal">
                "{project.tagline}"
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Metadata Bar & External Links */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-[#D4AF37]/20">
              <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-300">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">Role</div>
                  <div className="font-medium text-white mt-0.5">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">Timeline</div>
                  <div className="font-medium text-white mt-0.5">{project.year}</div>
                </div>
                {project.clientOrContext && (
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">Context</div>
                    <div className="font-medium text-white mt-0.5">{project.clientOrContext}</div>
                  </div>
                )}
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">Discipline</div>
                  <div className="font-medium text-[#F3E5AB] mt-0.5">{project.category}</div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-neutral-200 border border-[#D4AF37]/40 rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
                {project.storeUrl && (
                  <a
                    href={project.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-neutral-200 border border-[#D4AF37]/40 rounded-lg hover:bg-[#D4AF37]/10 transition-colors"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>App Store</span>
                  </a>
                )}
              </div>
            </div>

            {/* Quantitative Proof Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
                  Verified Engineering Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div 
                      key={i}
                      className="p-5 rounded-xl border border-[#D4AF37]/25 bg-[#121218] flex flex-col justify-between"
                    >
                      <div className="font-mono font-bold text-2xl sm:text-3xl text-gold-gradient">
                        {metric.value}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-neutral-400 mt-2">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Depth Overview */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-3">
                Architectural Overview
              </h4>
              <p className="font-sans text-neutral-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* The Challenge & The Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenge && (
                  <div className="p-6 rounded-xl border border-[#D4AF37]/20 bg-[#121217]">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="p-6 rounded-xl border border-[#D4AF37]/35 bg-[#14141C]">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F3E5AB] mb-2">
                      <Zap className="w-4 h-4 text-[#D4AF37]" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features Bullet List */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-4">
                  Core Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-lg border border-[#D4AF37]/15 bg-[#101015]"
                    >
                      <span className="text-[#D4AF37] font-mono text-xs mt-0.5">▪</span>
                      <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Complete Tech Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#16161F] text-[#F3E5AB] border border-[#D4AF37]/30"
                  >
                    {tech}
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
