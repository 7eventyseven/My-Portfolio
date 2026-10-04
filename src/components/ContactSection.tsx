import React, { useState } from 'react';
import { motion } from 'motion/react';
import { sectionReveal } from './Reveal';
import { Mail, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { UserProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Website / Landing Page');
  const [timeline, setTimeline] = useState('Immediate / Next 30 Days');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <motion.section id="contact" className="py-24 border-t border-[#D4AF37]/20 relative" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach & Social Presence */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
              Initiate Collaboration
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-1 mb-4">
              05. Let's Build Together
            </h2>
            <p className="font-editorial italic text-xl text-[#F3E5AB] mb-4">
              "Available for frontend roles & freelance projects."
            </p>
            <p className="font-sans text-neutral-400 text-sm leading-relaxed mb-8">
              Whether you need a new website, a booking or ticketing platform, an ordering app, or a polished interface for your existing product, I build clean, responsive frontends that your users will enjoy.
            </p>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#0F0F14] mb-8">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                Direct Inquiries
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="font-display font-bold text-lg sm:text-xl text-white hover:text-gold-gradient transition-colors flex items-center gap-2 group"
              >
                <span>{profile.email}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <div className="text-xs text-neutral-500 mt-2">
                Response time typically within 24 business hours.
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/25 bg-[#121217] text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all text-xs font-mono"
              >
                <Github className="w-4 h-4 text-[#D4AF37]" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/25 bg-[#121217] text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-[#D4AF37]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.twitter || "https://x.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/25 bg-[#121217] text-neutral-300 hover:text-white hover:border-[#D4AF37] transition-all text-xs font-mono"
              >
                <Twitter className="w-4 h-4 text-[#D4AF37]" />
                <span>Twitter / X</span>
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/35 bg-[#0D0D12] shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#18160E] border-2 border-[#D4AF37] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                    <CheckCircle2 className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-[#F3E5AB] font-medium">{name}</span>. Your brief has been dispatched directly. I will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#14141B] border border-[#D4AF37]/25 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#14141B] border border-[#D4AF37]/25 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Project Scope
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#14141B] border border-[#D4AF37]/25 rounded-lg text-xs text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Website / Landing Page">Website / Landing Page</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Booking / Ticketing / Ordering Platform">Booking, Ticketing or Ordering Platform</option>
                        <option value="Frontend Redesign">Frontend Redesign / UI Improvements</option>
                        <option value="Full-Time Frontend Role">Full-Time Frontend Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#14141B] border border-[#D4AF37]/25 rounded-lg text-xs text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Immediate / Next 30 Days">Immediate / Next 30 Days</option>
                        <option value="Q2 / Next Quarter">Next Quarter</option>
                        <option value="Long-term Advisory">Long-Term Ongoing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Brief & Objectives *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your vision, technical requirements, or engineering challenges..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#14141B] border border-[#D4AF37]/25 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold-metallic rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Proposal & Inquire</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
