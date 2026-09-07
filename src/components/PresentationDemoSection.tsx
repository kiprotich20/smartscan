import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Laptop, 
  Smartphone, 
  Building2, 
  Download, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import { InteractiveSystemDemo } from './InteractiveSystemDemo';

interface PresentationDemoSectionProps {
  onOpenPortal: () => void;
}

export const PresentationDemoSection: React.FC<PresentationDemoSectionProps> = ({ onOpenPortal }) => {
  const [isDemoExpanded, setIsDemoExpanded] = useState(true);

  return (
    <section id="presentation-demo" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Live Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See SMARTSCAN in Action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience the complete digital attendance workflow. Test the dynamic rotating QR projection, trigger live student mobile check-ins, and observe real-time ledger synchronization.
          </p>

          {/* Prominent Launch Live Demo Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-950 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Live Demo Portal</span>
            </button>

            <button
              onClick={() => {
                const demoEl = document.getElementById('demo-console');
                if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all cursor-pointer"
            >
              <span>Explore Interactive Simulator Below</span>
            </button>
          </div>
        </div>

        {/* Embedded Interactive Console */}
        <div id="demo-console" className="pt-4">
          <InteractiveSystemDemo />
        </div>
      </div>
    </section>
  );
};
