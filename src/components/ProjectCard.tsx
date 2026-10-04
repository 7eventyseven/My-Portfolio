import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Smartphone, Edit3, Trash2, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectMedia } from './ProjectMedia';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
  isWide?: boolean;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onEdit,
  onDelete,
  isWide = false,
  index = 0
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
      onClick={() => onSelect(project)}
      className={`group relative rounded-2xl bg-[#0D0D12] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-[border-color,box-shadow] duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-[0_0_35px_rgba(212,175,55,0.14)] ${
        isWide ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Cover Media Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
          <ProjectMedia project={project} />
          
          {/* Subtle dark gold gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/30 to-transparent" />

          {/* Quick Edit / Delete Controls for Custom Uploads */}
          <div 
            className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1 rounded-lg border border-[#D4AF37]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onEdit(project)}
              title="Edit Project"
              className="p-1.5 text-neutral-300 hover:text-[#F3E5AB] rounded hover:bg-white/10 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                if (window.confirm(`Delete "${project.title}" from your portfolio?`)) {
                  onDelete(project.id);
                }
              }}
              title="Delete Project"
              className="p-1.5 text-neutral-300 hover:text-red-400 rounded hover:bg-white/10 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Discipline Flag */}
          <div className="absolute bottom-3 left-4 text-xs font-mono tracking-widest text-[#F3E5AB] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#D4AF37]/25">
            {project.category}
          </div>
        </div>

        {/* Content Zone */}
        <div className="p-6">
          {/* Clean unboxed metadata with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2.5">
            {project.year && (
              <>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span>{project.role}</span>
            {project.clientOrContext && (
              <>
                <span aria-hidden="true">·</span>
                <span className="truncate max-w-[150px]">{project.clientOrContext}</span>
              </>
            )}
          </div>

          {/* Primary Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#F3E5AB] transition-colors mb-2.5 line-clamp-1">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-5">
            {project.tagline}
          </p>

          {/* Clean unboxed tech list */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-mono mb-6">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span key={tech} className="text-[#DFBA53]">
                {tech}{i < Math.min(project.techStack.length - 1, 3) && <span className="text-neutral-600 ml-3">/</span>}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-neutral-500">+{project.techStack.length - 4}</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Zone: Tabular metrics & Action link */}
      <div className="px-6 pb-6 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
        {project.metrics && project.metrics.length > 0 ? (
          <div className="flex items-center gap-4">
            <div>
              <div className="font-mono font-bold text-sm text-gold-gradient">
                {project.metrics[0].value}
              </div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
                {project.metrics[0].label}
              </div>
            </div>
            {project.metrics[1] && (
              <div className="hidden sm:block">
                <div className="font-mono font-bold text-sm text-gold-gradient">
                  {project.metrics[1].value}
                </div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
                  {project.metrics[1].label}
                </div>
              </div>
            )}
          </div>
        ) : (
          <span className="text-xs text-neutral-500 italic">View Case Study</span>
        )}

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <span className="flex items-center gap-1 text-xs font-semibold text-[#F3E5AB] group-hover:translate-x-0.5 transition-transform pl-2">
            <span>Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
