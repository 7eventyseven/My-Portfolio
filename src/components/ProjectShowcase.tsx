import React, { useState, useMemo } from 'react';
import { Search, Plus, Filter, Sparkles, Layers } from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenUpload: () => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
  onOpenUpload,
  onEditProject,
  onDeleteProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Category counts
  const counts = useMemo(() => {
    return {
      all: projects.length,
      Web: projects.filter(p => p.category === 'Web').length,
      Mobile: projects.filter(p => p.category === 'Mobile').length,
      Software: projects.filter(p => p.category === 'Software').length,
      'Full Stack': projects.filter(p => p.category === 'Full Stack').length,
    };
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        const matchesTech = project.techStack.some(t => t.toLowerCase().includes(query));
        const matchesClient = project.clientOrContext?.toLowerCase().includes(query);
        return matchesTitle || matchesTagline || matchesTech || matchesClient;
      }
      return true;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="works" className="py-24 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
                Curated Engineering Catalog
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              01. Selected Works
            </h2>
            <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Production-grade systems, high-traffic web applications, and fluid native mobile platforms.
            </p>
          </div>

          {/* Quick upload project button */}
          <button
            onClick={onOpenUpload}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Upload Subsequent Project</span>
          </button>
        </div>

        {/* Interactive Filter Bar & Search (Buttons/tabs allowed for interactive controls) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#D4AF37]/15">
          
          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#121217] rounded-xl border border-[#D4AF37]/20 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-gold-metallic text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Works ({counts.all})
            </button>

            <button
              onClick={() => setSelectedCategory('Web')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Web'
                  ? 'bg-gold-metallic text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Web Apps ({counts.Web})
            </button>

            <button
              onClick={() => setSelectedCategory('Mobile')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Mobile'
                  ? 'bg-gold-metallic text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Mobile Apps ({counts.Mobile})
            </button>

            <button
              onClick={() => setSelectedCategory('Software')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Software'
                  ? 'bg-gold-metallic text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Software & Backend ({counts.Software})
            </button>

            <button
              onClick={() => setSelectedCategory('Full Stack')}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Full Stack'
                  ? 'bg-gold-metallic text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Full Stack ({counts['Full Stack']})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by title, stack (e.g. Go, Swift, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#121217] border border-[#D4AF37]/25 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid: Bento & Editorial Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => {
              // First project or explicitly featured project gets wide layout
              const isWide = project.featured && (idx === 0 || idx === 3);
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={onSelectProject}
                  onEdit={onEditProject}
                  onDelete={onDeleteProject}
                  isWide={isWide}
                />
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center rounded-2xl border border-dashed border-[#D4AF37]/30 bg-[#101015] p-8 max-w-xl mx-auto">
            <Layers className="w-12 h-12 text-[#D4AF37]/60 mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-white mb-2">
              No matching projects found
            </h3>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              No projects match "{searchQuery}" in the selected category. You can clear your search or upload a new project directly.
            </p>
            <div className="flex justify-center gap-3">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 text-xs font-medium text-neutral-300 border border-neutral-700 rounded-lg hover:text-white"
                >
                  Reset Filter
                </button>
              )}
              <button
                onClick={onOpenUpload}
                className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-black bg-gold-metallic rounded-lg"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Upload This Project</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
