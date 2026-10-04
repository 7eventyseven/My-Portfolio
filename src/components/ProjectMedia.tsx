import React from 'react';
import { Project } from '../types/portfolio';

interface ProjectMediaProps {
  project: Project;
  align?: 'center' | 'right';
}

export const ProjectMedia: React.FC<ProjectMediaProps> = ({ project, align = 'center' }) => {
  const style = project.imageStyle ?? 'cover';

  if (style === 'cover') {
    return (
      <img
        src={project.imageUrl}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    );
  }

  const justify = align === 'right' ? 'justify-end pr-8 sm:pr-16' : 'justify-center';

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blurred backdrop from the same screenshot */}
      <img
        src={project.imageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-60"
      />
      <div className="absolute inset-0 bg-black/30" />

      {style === 'mobile' ? (
        <div className={`absolute inset-0 flex items-start pt-6 ${justify}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-[115%] w-auto rounded-[1.6rem] border-[5px] border-[#1a1a22] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:-translate-y-4 group-hover:rotate-[-1.5deg] transition-transform duration-700 ease-out"
          />
        </div>
      ) : (
        <div className={`absolute inset-0 flex items-center ${justify}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-[62%] w-auto rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out"
          />
        </div>
      )}
    </div>
  );
};
