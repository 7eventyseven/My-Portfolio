import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, Image as ImageIcon, Sparkles, Plus, Trash2, Check, ExternalLink } from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';

// Curated presets for quick selection
import fintechImg from '../assets/images/project_fintech_gold_1791112055912.jpg';
import coutureImg from '../assets/images/project_couture_ecommerce_1791112068069.jpg';
import cloudImg from '../assets/images/project_cloud_system_1791112079441.jpg';

const PRESET_IMAGES = [
  { name: 'Fintech & Mobile Gold', url: fintechImg },
  { name: 'Haute Web & Fashion', url: coutureImg },
  { name: 'Software Cloud Engine', url: cloudImg },
];

const SUGGESTED_TECHS = [
  'React', 'Next.js', 'React Native', 'Swift', 'TypeScript', 'Go', 
  'Python', 'Node.js', 'Tailwind CSS', 'Docker', 'PostgreSQL', 'Redis',
  'GraphQL', 'WebSockets', 'Three.js', 'Kubernetes'
];

interface UploadProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (project: Project) => void;
  projectToEdit?: Project | null;
}

export const UploadProjectModal: React.FC<UploadProjectModalProps> = ({
  isOpen,
  onClose,
  onSaveProject,
  projectToEdit
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Web');
  const [year, setYear] = useState('2026');
  const [role, setRole] = useState('Lead Software Engineer');
  const [clientOrContext, setClientOrContext] = useState('');
  const [imageUrl, setImageUrl] = useState(fintechImg);
  const [imageUploadType, setImageUploadType] = useState<'preset' | 'file' | 'url'>('preset');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  const [description, setDescription] = useState('');
  const [challenge, setChallenge] = useState('');
  const [solution, setSolution] = useState('');
  const [techStack, setTechStack] = useState<string[]>(['React', 'TypeScript', 'Tailwind CSS']);
  const [customTechInput, setCustomTechInput] = useState('');
  const [metric1Value, setMetric1Value] = useState('+180%');
  const [metric1Label, setMetric1Label] = useState('Conversion / Speed');
  const [metric2Value, setMetric2Value] = useState('99.99%');
  const [metric2Label, setMetric2Label] = useState('System Reliability');
  const [featuresText, setFeaturesText] = useState('Zero-latency responsive architecture\nEnd-to-end type safety with strict runtime validation\nOptimized for 60-120fps fluid interaction');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Hydrate form when editing
  useEffect(() => {
    if (projectToEdit) {
      setTitle(projectToEdit.title);
      setTagline(projectToEdit.tagline);
      setCategory(projectToEdit.category);
      setYear(projectToEdit.year);
      setRole(projectToEdit.role);
      setClientOrContext(projectToEdit.clientOrContext || '');
      setImageUrl(projectToEdit.imageUrl);
      setFeatured(!!projectToEdit.featured);
      setDescription(projectToEdit.description);
      setChallenge(projectToEdit.challenge || '');
      setSolution(projectToEdit.solution || '');
      setTechStack(projectToEdit.techStack);
      setMetric1Value(projectToEdit.metrics[0]?.value || '');
      setMetric1Label(projectToEdit.metrics[0]?.label || '');
      setMetric2Value(projectToEdit.metrics[1]?.value || '');
      setMetric2Label(projectToEdit.metrics[1]?.label || '');
      setFeaturesText(projectToEdit.features?.join('\n') || '');
      setLiveUrl(projectToEdit.liveUrl || '');
      setGithubUrl(projectToEdit.githubUrl || '');
      setStoreUrl(projectToEdit.storeUrl || '');
    } else {
      // Reset defaults for fresh upload
      setTitle('');
      setTagline('');
      setCategory('Web');
      setYear(new Date().getFullYear().toString());
      setRole('Lead Software Engineer');
      setClientOrContext('');
      setImageUrl(fintechImg);
      setFeatured(false);
      setDescription('');
      setChallenge('');
      setSolution('');
      setTechStack(['React', 'TypeScript', 'Tailwind CSS']);
      setMetric1Value('< 40ms');
      setMetric1Label('Response Latency');
      setMetric2Value('99.99%');
      setMetric2Label('System Uptime');
      setFeaturesText('Modular component architecture\nOptimized high-performance client rendering\nAutomated CI/CD deployment pipeline');
      setLiveUrl('');
      setGithubUrl('');
      setStoreUrl('');
    }
    setErrorMsg('');
  }, [projectToEdit, isOpen]);

  if (!isOpen) return null;

  // Handle local file upload (converts to base64 Data URL)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select an image file (PNG, JPG, WebP).');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg('Image size exceeds 8MB. Please use a smaller image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setImageUrl(event.target.result);
        setImageUploadType('file');
        setErrorMsg('');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleToggleTech = (tech: string) => {
    if (techStack.includes(tech)) {
      setTechStack(techStack.filter(t => t !== tech));
    } else {
      setTechStack([...techStack, tech]);
    }
  };

  const handleAddCustomTech = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault();
    const trimmed = customTechInput.trim();
    if (trimmed && !techStack.includes(trimmed)) {
      setTechStack([...techStack, trimmed]);
      setCustomTechInput('');
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechStack(techStack.filter(t => t !== tech));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Project Title is required.');
      return;
    }
    if (!tagline.trim()) {
      setErrorMsg('Short Tagline is required.');
      return;
    }
    if (techStack.length === 0) {
      setErrorMsg('Please specify at least one tech stack item.');
      return;
    }

    const featuresList = featuresText
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    const metricsList = [];
    if (metric1Value && metric1Label) {
      metricsList.push({ value: metric1Value.trim(), label: metric1Label.trim() });
    }
    if (metric2Value && metric2Label) {
      metricsList.push({ value: metric2Value.trim(), label: metric2Label.trim() });
    }

    const newProject: Project = {
      id: projectToEdit ? projectToEdit.id : `proj-${Date.now()}`,
      title: title.trim(),
      tagline: tagline.trim(),
      category,
      year: year.trim() || '2026',
      role: role.trim() || 'Software Engineer',
      clientOrContext: clientOrContext.trim() || undefined,
      imageUrl: imageUrl.trim() || coutureImg,
      featured,
      description: description.trim() || tagline.trim(),
      challenge: challenge.trim() || undefined,
      solution: solution.trim() || undefined,
      techStack,
      metrics: metricsList,
      features: featuresList.length > 0 ? featuresList : ['High-performance system architecture'],
      liveUrl: liveUrl.trim() || undefined,
      githubUrl: githubUrl.trim() || undefined,
      storeUrl: storeUrl.trim() || undefined,
      isCustomUpload: true,
      createdAt: projectToEdit ? projectToEdit.createdAt : Date.now()
    };

    onSaveProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#0C0C10] border border-[#D4AF37]/35 rounded-2xl shadow-[0_0_60px_rgba(212,175,55,0.2)] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#121217]">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
              {projectToEdit ? 'Project Studio // Edit' : 'Project Studio // New Upload'}
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              {projectToEdit ? 'Update Project Showcase' : 'Upload Subsequent Project'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - 2 Columns (Form & Live Luxury Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 divide-y lg:divide-y-0 lg:divide-x divide-[#D4AF37]/20">
          
          {/* Left: Input Form Controls */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {errorMsg && (
              <div className="p-3 text-xs bg-red-950/80 border border-red-500/40 text-red-200 rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Title & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lumina // Distributed Cloud Gateway"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Discipline *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                  className="w-full px-3 py-2.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-sm text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Web">Web Application</option>
                  <option value="Mobile">Mobile App</option>
                  <option value="Software">Software & Backend</option>
                  <option value="Full Stack">Full Stack</option>
                </select>
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Tagline / Elevator Pitch *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ultra-low-latency distributed cache engine handling 2M+ read ops/sec."
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Role, Year, Client */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Your Role
                </label>
                <input
                  type="text"
                  placeholder="Lead Architect"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Year
                </label>
                <input
                  type="text"
                  placeholder="2026"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Client / Context
                </label>
                <input
                  type="text"
                  placeholder="e.g. Private Client / OSS"
                  value={clientOrContext}
                  onChange={(e) => setClientOrContext(e.target.value)}
                  className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Cover Image Upload (Device File / URL / Preset) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Project Visual / Cover Image
              </label>

              {/* Upload method tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-[#16161D] rounded-lg mb-3">
                <button
                  type="button"
                  onClick={() => setImageUploadType('preset')}
                  className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                    imageUploadType === 'preset' ? 'bg-gold-metallic text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Curated Presets
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setImageUploadType('file');
                    fileInputRef.current?.click();
                  }}
                  className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                    imageUploadType === 'file' ? 'bg-gold-metallic text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Upload Device File
                </button>
                <button
                  type="button"
                  onClick={() => setImageUploadType('url')}
                  className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                    imageUploadType === 'url' ? 'bg-gold-metallic text-black font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Image URL
                </button>
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {imageUploadType === 'preset' && (
                <div className="grid grid-cols-3 gap-3">
                  {PRESET_IMAGES.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setImageUrl(preset.url)}
                      className={`relative aspect-video rounded-lg overflow-hidden border transition-all ${
                        imageUrl === preset.url ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50 scale-[1.02]' : 'border-neutral-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-end p-1.5 text-[10px] text-white font-medium">
                        {preset.name}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {imageUploadType === 'file' && (
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-xl p-6 text-center cursor-pointer bg-[#14141A] transition-colors"
                >
                  <Upload className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-xs text-neutral-300 font-medium">
                    Click to browse or drop your project screenshot
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    PNG, JPG, or WebP (Stored securely in local app memory)
                  </p>
                </div>
              )}

              {imageUploadType === 'url' && (
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/project-screenshot.jpg"
                    value={customImageUrl}
                    onChange={(e) => setCustomImageUrl(e.target.value)}
                    className="flex-1 px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customImageUrl.trim()) {
                        setImageUrl(customImageUrl.trim());
                      }
                    }}
                    className="px-4 py-2 text-xs font-semibold text-black bg-gold-metallic rounded-lg"
                  >
                    Apply URL
                  </button>
                </div>
              )}
            </div>

            {/* Tech Stack Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Tech Stack & Tools *
                </label>
                <span className="text-[11px] text-neutral-500">
                  {techStack.length} selected
                </span>
              </div>

              {/* Quick Suggestions */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {SUGGESTED_TECHS.map((tech) => {
                  const active = techStack.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleToggleTech(tech)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                        active 
                          ? 'bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F3E5AB] font-medium' 
                          : 'bg-[#181820] text-neutral-400 hover:text-white border border-transparent'
                      }`}
                    >
                      {active ? `✓ ${tech}` : `+ ${tech}`}
                    </button>
                  );
                })}
              </div>

              {/* Selected tags list with remove button */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-[#14141A] rounded-lg border border-[#D4AF37]/20">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs bg-[#24221A] text-[#F3E5AB] border border-[#D4AF37]/30"
                  >
                    <span>{tech}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(tech)}
                      className="hover:text-red-400"
                    >
                      ×
                    </button>
                  </span>
                ))}
                
                {/* Custom tech input */}
                <div className="flex items-center gap-1 flex-1 min-w-[140px]">
                  <input
                    type="text"
                    placeholder="Custom tech + enter"
                    value={customTechInput}
                    onChange={(e) => setCustomTechInput(e.target.value)}
                    onKeyDown={handleAddCustomTech}
                    className="w-full bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none px-1"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomTech}
                    className="p-1 text-[#D4AF37] hover:brightness-125"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case Study Details: Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  The Engineering Challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the architectural bottleneck or complexity faced..."
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  The Implemented Solution
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the chosen tech, pattern, or algorithm used..."
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Metric 1
                  </label>
                  <input
                    type="text"
                    placeholder="< 30ms"
                    value={metric1Value}
                    onChange={(e) => setMetric1Value(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-gold-gradient font-mono font-bold"
                  />
                </div>
                <div className="w-2/3">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Label
                  </label>
                  <input
                    type="text"
                    placeholder="Execution Latency"
                    value={metric1Label}
                    onChange={(e) => setMetric1Label(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white"
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Metric 2
                  </label>
                  <input
                    type="text"
                    placeholder="99.99%"
                    value={metric2Value}
                    onChange={(e) => setMetric2Value(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-gold-gradient font-mono font-bold"
                  />
                </div>
                <div className="w-2/3">
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Label
                  </label>
                  <input
                    type="text"
                    placeholder="Production SLA"
                    value={metric2Label}
                    onChange={(e) => setMetric2Label(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white"
                  />
                </div>
              </div>
            </div>

            {/* Key Features (One per line) */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Key Architectural Highlights (One per line)
              </label>
              <textarea
                rows={3}
                placeholder="High-throughput batch processor&#10;End-to-end telemetry&#10;Sub-second responsive layout"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                className="w-full px-3 py-2 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* URLs: Live, GitHub, App Store */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Live URL
                </label>
                <input
                  type="url"
                  placeholder="https://app.example.com"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  GitHub Repository
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/..."
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  App Store / Play URL
                </label>
                <input
                  type="url"
                  placeholder="https://apps.apple.com/..."
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#16161D] border border-[#D4AF37]/25 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Featured toggle */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="featuredCheck"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded text-[#D4AF37] focus:ring-[#D4AF37] bg-[#16161D] border-[#D4AF37]/40"
              />
              <label htmlFor="featuredCheck" className="text-xs text-neutral-300 font-medium cursor-pointer">
                Feature prominently as Flagship Showcase Card
              </label>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>{projectToEdit ? 'Save Changes' : 'Publish to Portfolio'}</span>
              </button>
            </div>

          </form>

          {/* Right: Live Card Preview Pane */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#09090D] flex flex-col justify-start">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
                Live Card Preview
              </span>
              <span className="text-[11px] text-neutral-500">
                Matches active portfolio styling
              </span>
            </div>

            {/* Preview Card Mockup */}
            <div className="rounded-xl border border-[#D4AF37]/40 bg-[#101015] overflow-hidden shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-neutral-900">
                <img
                  src={imageUrl}
                  alt={title || 'Preview'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Discipline Tag */}
                <div className="absolute top-3 left-3 bg-[#08080A]/85 backdrop-blur-md border border-[#D4AF37]/35 rounded px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#F3E5AB]">
                  {category}
                </div>
              </div>

              <div className="p-5">
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <span>{year || '2026'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{role || 'Engineer'}</span>
                  {clientOrContext && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{clientOrContext}</span>
                    </>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 line-clamp-1">
                  {title || 'Project Title Here'}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
                  {tagline || 'Your compelling architectural summary will appear here.'}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {techStack.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#181820] text-[#E5C875] border border-[#D4AF37]/20">
                      {t}
                    </span>
                  ))}
                  {techStack.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#181820] text-neutral-400">
                      +{techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Sample metric */}
                {metric1Value && metric1Label && (
                  <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">{metric1Label}</span>
                    <span className="font-mono font-bold text-gold-gradient">{metric1Value}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-[#D4AF37]/15 bg-[#121218] text-xs text-neutral-400 leading-relaxed">
              <div className="font-medium text-[#F3E5AB] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Instant Persistence</span>
              </div>
              Uploaded projects are stored immediately in your browser workspace. You can edit, delete, or backup to JSON anytime using the export tools in the footer.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
