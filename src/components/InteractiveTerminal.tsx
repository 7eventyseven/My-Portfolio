import React, { useState } from 'react';
import { motion } from 'motion/react';
import { sectionReveal } from './Reveal';
import { Copy, Check } from 'lucide-react';

interface CodeSnippet {
  id: string;
  tabLabel: string;
  title: string;
  domain: string;
  language: string;
  code: string;
  insight: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'js-word-scramble',
    tabLabel: 'JavaScript // Word Scramble',
    title: 'Scramble & Check Logic for a Word Puzzle Game',
    domain: 'JavaScript & Interactivity',
    language: 'javascript',
    insight: 'Uses a Fisher-Yates shuffle so every arrangement is equally likely, and re-shuffles if the scrambled word accidentally matches the answer.',
    code: `function shuffle(letters) {
  const arr = [...letters];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function scrambleWord(word) {
  if (word.length < 2) return word;
  let scrambled;
  do {
    scrambled = shuffle(word).join('');
  } while (scrambled === word);
  return scrambled;
}

export function checkAnswer(attempt, word) {
  return attempt.trim().toLowerCase() === word.toLowerCase();
}`
  },
  {
    id: 'css-responsive-grid',
    tabLabel: 'CSS // Responsive Event Grid',
    title: 'Mobile-First Card Grid for Event & Product Listings',
    domain: 'Frontend Foundations',
    language: 'css',
    insight: 'A single auto-fill grid adapts from one column on phones to several on desktops, with no media query per breakpoint.',
    code: `.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.event-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background: #121217;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(212, 175, 55, 0.15);
}

.event-card img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`
  },
  {
    id: 'node-booking-api',
    tabLabel: 'Node.js // Booking API',
    title: 'Simple Express Endpoint for Booking a Session or Ticket',
    domain: 'Backend & Scripting',
    language: 'javascript',
    insight: 'Validates input up front and returns clear status codes, so the frontend can show users exactly what went wrong.',
    code: `import express from 'express';

const app = express();
app.use(express.json());

const bookings = [];

app.post('/api/bookings', (req, res) => {
  const { name, email, date } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({ error: 'Name, email and date are required.' });
  }

  if (bookings.some((b) => b.date === date)) {
    return res.status(409).json({ error: 'That slot is already booked.' });
  }

  const booking = { id: Date.now(), name, email, date };
  bookings.push(booking);
  res.status(201).json(booking);
});

app.listen(3001);`
  }
];

export const InteractiveTerminal: React.FC = () => {
  const [activeSnippetId, setActiveSnippetId] = useState(SNIPPETS[0].id);
  const [copied, setCopied] = useState(false);

  const activeSnippet = SNIPPETS.find(s => s.id === activeSnippetId) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section id="blueprint" className="py-24 border-t border-[#D4AF37]/20 relative" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            How I Build
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-1">
            03. Code Samples
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2">
            Short code excerpts showing interactive JavaScript, responsive CSS layouts and simple Node.js APIs.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl border border-[#D4AF37]/35 bg-[#0A0A0E] shadow-[0_0_50px_rgba(212,175,55,0.12)] overflow-hidden">
          
          {/* Top Bar with Tabs and Copy Button */}
          <div className="px-4 py-3 bg-[#111116] border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Dots & Tabs */}
            <div className="flex items-center gap-4 overflow-x-auto">
              {/* Luxury gold & dark window controls */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]/40 border border-[#D4AF37]/60 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#1F1F28] border border-neutral-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#1F1F28] border border-neutral-700 inline-block" />
              </div>

              {/* Snippet Tabs (Functional buttons) */}
              <div className="flex items-center gap-1">
                {SNIPPETS.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveSnippetId(snippet.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                      activeSnippetId === snippet.id
                        ? 'bg-[#1D1B13] text-[#F3E5AB] border border-[#D4AF37]/40 font-semibold'
                        : 'text-neutral-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {snippet.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white border border-[#D4AF37]/25 rounded-md hover:bg-white/5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[#D4AF37]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Snippet</span>
                </>
              )}
            </button>

          </div>

          {/* Context Banner */}
          <div className="px-6 py-4 bg-[#0D0D12] border-b border-[#D4AF37]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37]">
                {activeSnippet.domain}
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-white">
                {activeSnippet.title}
              </div>
            </div>
            <div className="text-xs text-neutral-400 sm:text-right max-w-md font-sans">
              <span className="text-[#F3E5AB] font-medium">Why it matters:</span> {activeSnippet.insight}
            </div>
          </div>

          {/* Code Body */}
          <div className="p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-[#F3E5AB]/90 bg-[#07070A]">
            <pre>
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="px-6 py-3 bg-[#0E0E13] border-t border-[#D4AF37]/15 flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Language: {activeSnippet.language.toUpperCase()}</span>
            </div>
            <span>Clean · Readable · Responsive</span>
          </div>

        </div>

      </div>
    </motion.section>
  );
};
