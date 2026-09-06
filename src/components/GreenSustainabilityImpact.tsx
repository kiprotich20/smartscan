import React from 'react';
import { Leaf, TreePine, Droplets, Wind, Sparkles, CheckCircle2 } from 'lucide-react';
import { BometUniversityLogo } from './BometUniversityLogo';

export const GreenSustainabilityImpact: React.FC = () => {
  const ecoMetrics = [
    {
      icon: TreePine,
      value: '42+ Trees',
      label: 'Preserved Annually',
      desc: 'Halting paper register production and disposal across university departments.',
    },
    {
      icon: Droplets,
      value: '380,000 Liters',
      label: 'Water Conserved',
      desc: 'Eliminating the intensive water footprint required in commercial paper milling.',
    },
    {
      icon: Wind,
      value: '2.4 Metric Tons',
      label: 'CO2 Footprint Cut',
      desc: 'Lower emissions from physical paper delivery, printing, and paper waste logistics.',
    },
    {
      icon: Leaf,
      value: '100% Digital',
      label: 'Zero Paper Waste',
      desc: 'Fully aligned with Bomet University’s statutory green sustainability charter.',
    },
  ];

  return (
    <section id="sustainability-impact" className="py-20 bg-emerald-950 text-white border-b border-emerald-900 relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -top-16 w-80 h-80 bg-green-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase">
              <Leaf className="w-3.5 h-3.5 text-amber-300" />
              <span>Institutional Eco Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              A Green University for Sustainability in Action
            </h2>

            <p className="text-emerald-100 text-base leading-relaxed">
              At <span className="font-bold text-white">Bomet University</span>, sustainability is not merely a slogan—it is the foundational pillar of our campus governance and technological innovation.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              By replacing archaic paper attendance books with <span className="font-semibold text-emerald-300">SMARTSCAN</span>, Bomet University champions climate-smart digital efficiency, eliminating tons of administrative paper waste and preserving natural ecosystems.
            </p>

            {/* Quote Badge */}
            <div className="p-4 rounded-2xl bg-emerald-900/70 border border-emerald-700/70">
              <p className="text-xs font-mono text-amber-300 font-bold uppercase">
                CONFERENCE THEME ALIGNMENT
              </p>
              <p className="text-xs text-emerald-100 italic mt-1 leading-snug">
                "Promoting innovative climate-smart farmer-centered agribusiness for sustainable inclusive development."
              </p>
            </div>

            {/* University Tagline from Poster */}
            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-emerald-300 font-bold uppercase">
              <span>SMARTER ATTENDANCE</span>
              <span>•</span>
              <span>STRONGER INSTITUTIONS</span>
              <span>•</span>
              <span>A SUSTAINABLE FUTURE</span>
            </div>
          </div>

          {/* Right Column: Eco Metrics Grid & Logo */}
          <div className="lg:col-span-6">
            <div className="bg-emerald-900/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-emerald-700/60 shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-800">
                <div className="flex items-center gap-3">
                  <BometUniversityLogo size="sm" />
                  <div>
                    <span className="text-xs font-black text-white uppercase tracking-wider block">
                      Bomet University
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold italic">
                      Green University for Sustainability
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono bg-emerald-800/80 text-emerald-200 px-3 py-1 rounded-full border border-emerald-600 font-bold">
                  ECO-AUDIT VERIFIED
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {ecoMetrics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-800/80">
                      <div className="w-9 h-9 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-white font-mono block">
                        {item.value}
                      </span>
                      <span className="text-xs font-bold text-emerald-300 block mt-0.5">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-slate-300 leading-snug block mt-1">
                        {item.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
