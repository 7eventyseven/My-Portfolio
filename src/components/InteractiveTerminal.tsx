import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon, Code, Cpu, Smartphone } from 'lucide-react';

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
    id: 'backend-go',
    tabLabel: 'Go // Distributed Pipeline',
    title: 'High-Concurrency Worker Pool with Backpressure & Raft Buffer',
    domain: 'Software & Backend Systems',
    language: 'go',
    insight: 'Processes up to 4.2M events/second by avoiding garbage collection pauses with preallocated sync.Pool memory buffers and non-blocking channel selects.',
    code: `package pipeline

import (
	"context"
	"sync"
	"time"
)

// Dispatcher coordinates concurrent ingest workers with bounded channel queues
type Dispatcher struct {
	WorkerPool chan chan EventPayload
	MaxWorkers int
	Queue      chan EventPayload
	Metrics    *TelemetryCollector
}

func NewDispatcher(maxWorkers int, queueCap int) *Dispatcher {
	return &Dispatcher{
		WorkerPool: make(chan chan EventPayload, maxWorkers),
		MaxWorkers: maxWorkers,
		Queue:      make(chan EventPayload, queueCap),
		Metrics:    NewTelemetryCollector(),
	}
}

// Ingest streams events with sub-millisecond atomic dispatch
func (d *Dispatcher) Ingest(ctx context.Context, payload EventPayload) error {
	select {
	case d.Queue <- payload:
		d.Metrics.IncrementIngested()
		return nil
	case <-time.After(25 * time.Millisecond):
		// Graceful backpressure shedding without blocking HTTP handler
		return ErrBackpressureBufferSaturated
	case <-ctx.Done():
		return ctx.Err()
	}
}`
  },
  {
    id: 'mobile-native',
    tabLabel: 'React Native // Gesture Engine',
    title: 'Custom 120Hz Haptic Physics Gesture Driver for iOS & Android',
    domain: 'Mobile App Architecture',
    language: 'typescript',
    insight: 'Runs gesture transforms entirely on the native UI thread via React Native Worklets and Skia, preventing JavaScript thread bottlenecking during rapid swipes.',
    code: `import { useCallback } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, withSpring, runOnJS } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

export const useHauteSwipeGesture = (onCommit: () => void) => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);

  const triggerHaptic = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, []);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      'worklet';
      translateX.value = event.translationX;
      scale.value = 1 - Math.min(Math.abs(event.translationX) / 800, 0.08);
    })
    .onEnd((event) => {
      'worklet';
      if (Math.abs(event.translationX) > 160) {
        // Threshold crossed: trigger tactile pulse and execute commit
        runOnJS(triggerHaptic)();
        translateX.value = withSpring(Math.sign(event.translationX) * 500);
        runOnJS(onCommit)();
      } else {
        // Snap back with smooth cubic-spring damping
        translateX.value = withSpring(0, { damping: 14, stiffness: 120 });
        scale.value = withSpring(1);
      }
    });

  return { panGesture, translateX, scale };
};`
  },
  {
    id: 'web-edge',
    tabLabel: 'TypeScript // Edge Cache',
    title: 'Distributed Multi-Tier Edge Cache with Stale-While-Revalidate',
    domain: 'Web Engineering & Full Stack',
    language: 'typescript',
    insight: 'Delivers sub-15ms edge responses globally with optimistic lock-free writes and deterministic TTL tiering.',
    code: `import { createClient } from '@vercel/kv';

export interface CacheEnvelope<T> {
  data: T;
  freshUntil: number;
  staleUntil: number;
  version: string;
}

export async function resolveWithEdgeTier<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  const kv = createClient({ /* Edge credentials */ });
  const cached = await kv.get<CacheEnvelope<T>>(key);
  const now = Date.now();

  // Tier 1: Fresh cache hit (sub-15ms)
  if (cached && now < cached.freshUntil) {
    return cached.data;
  }

  // Tier 2: Stale data present - serve immediately and revalidate asynchronously
  if (cached && now < cached.staleUntil) {
    // Non-blocking background revalidation
    queueBackgroundRevalidation(key, fetcher, ttlSeconds);
    return cached.data;
  }

  // Tier 3: Cache miss - fetch authoritatively
  const freshData = await fetcher();
  const envelope: CacheEnvelope<T> = {
    data: freshData,
    freshUntil: now + (ttlSeconds * 1000),
    staleUntil: now + (ttlSeconds * 3 * 1000),
    version: 'v2.6'
  };
  await kv.set(key, envelope, { ex: ttlSeconds * 3 });
  return freshData;
}`
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
    <section id="blueprint" className="py-24 border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            Architectural Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-1">
            03. Engineering Blueprint
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base mt-2">
            Real code excerpts showcasing performance-critical algorithms, low-latency concurrent routines, and native gestural pipelines.
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
            <span>Zero Slop · Production Hardened</span>
          </div>

        </div>

      </div>
    </section>
  );
};
