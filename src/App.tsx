/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { UploadProjectModal } from './components/UploadProjectModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, UserProfile } from './types/portfolio';
import {
  getStoredProjects,
  saveProjects,
  getStoredProfile,
  saveProfile,
  resetPortfolioData
} from './utils/storage';
import { Check, Sparkles, X } from 'lucide-react';

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile());
  const [isLoaded, setIsLoaded] = useState(false);

  // Modals
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const loadedProjects = getStoredProjects();
    const loadedProfile = getStoredProfile();
    setProjects(loadedProjects);
    setProfile(loadedProfile);
    setIsLoaded(true);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add or update project
  const handleSaveProject = (projectData: Project) => {
    let updated: Project[];
    const exists = projects.some(p => p.id === projectData.id);
    if (exists) {
      updated = projects.map(p => p.id === projectData.id ? projectData : p);
      showToast(`Updated "${projectData.title}" successfully.`);
    } else {
      updated = [projectData, ...projects];
      showToast(`Published "${projectData.title}" to portfolio.`);
    }
    setProjects(updated);
    saveProjects(updated);
    setProjectToEdit(null);
  };

  // Delete project
  const handleDeleteProject = (projectId: string) => {
    const target = projects.find(p => p.id === projectId);
    const updated = projects.filter(p => p.id !== projectId);
    setProjects(updated);
    saveProjects(updated);
    if (selectedProject?.id === projectId) {
      setSelectedProject(null);
    }
    showToast(`Deleted "${target?.title || 'Project'}" from portfolio.`);
  };

  // Edit project trigger
  const handleEditProject = (project: Project) => {
    setProjectToEdit(project);
    setIsUploadOpen(true);
  };

  // Open fresh upload
  const handleOpenUpload = () => {
    setProjectToEdit(null);
    setIsUploadOpen(true);
  };

  // Reset showcase to initial curated projects
  const handleResetDefaults = () => {
    const { projects: defaultProjects, profile: defaultProfile } = resetPortfolioData();
    setProjects(defaultProjects);
    setProfile(defaultProfile);
    showToast('Reset portfolio showcase to initial curated projects.');
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#08080A] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08080A] text-neutral-200 selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#15151D] border border-[#D4AF37] text-white shadow-[0_0_30px_rgba(212,175,55,0.35)] animate-in slide-in-from-bottom-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-gold-metallic text-black flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs font-medium text-[#F3E5AB]">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        profile={profile}
        onOpenUpload={handleOpenUpload}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content */}
      <main>
        {/* Bold Luxury Split Hero */}
        <Hero
          profile={profile}
          onOpenUpload={handleOpenUpload}
          onOpenContact={handleOpenContact}
          onOpenResume={() => setIsResumeOpen(true)}
          projectCount={projects.length}
        />

        {/* 01. Selected Works with Live Filter & Search */}
        <ProjectShowcase
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenUpload={handleOpenUpload}
          onEditProject={handleEditProject}
          onDeleteProject={handleDeleteProject}
        />

        {/* 02. Technical Mastery Matrix */}
        <SkillsMatrix />

        {/* 03. Interactive Engineering Terminal Blueprint */}
        <InteractiveTerminal />

        {/* 04. Career Experience Timeline */}
        <ExperienceTimeline />

        {/* 05. Direct Inquiries & Working Contact Form */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onResetDefaults={handleResetDefaults}
        onOpenUpload={handleOpenUpload}
      />

      {/* Upload / Edit Project Modal */}
      <UploadProjectModal
        isOpen={isUploadOpen}
        onClose={() => {
          setIsUploadOpen(false);
          setProjectToEdit(null);
        }}
        onSaveProject={handleSaveProject}
        projectToEdit={projectToEdit}
      />

      {/* Fullscreen Case Study Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEdit={(proj) => {
          setSelectedProject(null);
          handleEditProject(proj);
        }}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        projects={projects}
      />

    </div>
  );
}
