import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  BrainCircuit, 
  Expand, 
  BarChart3, 
  Users, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface SolutionSectionProps {
  onExploreFeatures: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onExploreFeatures }) => {
  const pillars = [
    {
      name: 'Fast',
      description: 'Records attendance in under 3 seconds per student with instant touchless QR capture.',
      icon: Zap,
      badge: '< 3s Capture',
      color: 'emerald',
    },
    {
      name: 'Secure',
      description: 'Single-device binding, dynamic rotating QR tokens, and GPS geofence validation eliminate proxy signing.',
      icon: ShieldCheck,
      badge: 'Zero Fraud',
      color: 'blue',
    },
    {
      name: 'Smart',
      description: 'Automated 75% exam sitting threshold tracking, grace period filters, and timetable synchronization.',
      icon: BrainCircuit,
      badge: 'Automated Rules',
      color: 'purple',
    },
    {
      name: 'Scalable',
      description: 'Engineered to handle everything from small tutorial sessions to multi-campus cohorts with thousands of concurrent users.',
      icon: Expand,
      badge: 'Multi-Campus',
      color: 'amber',
    },
    {
      name: 'Data-Driven',
      description: 'Generates instant exportable analytics, department comparison reports, and audit-ready academic transcripts.',
      icon: BarChart3,
      badge: 'Live Insights',
      color: 'indigo',
    },
  ];

  return (
    <section id="solution-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Unified Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SMARTSCAN: Centralized Campus Management Platform
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            SMARTSCAN digitizes attendance through a unified platform that connects students, lecturers, and university administrators in real time.
          </p>
        </div>

        {/* 3-Way Connected Platform Architecture */}
        <div className="mb-16 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              CONNECTED ECOSYSTEM
            </span>
            <h3 className="text-2xl font-bold text-white">
              Connecting All Three University Stakeholders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Student Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-700/50">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1.5">Students</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Touchless check-in via mobile browser, real-time personal attendance tracking, and instant exam clearance eligibility confirmation.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/80 text-[11px] font-mono text-emerald-400">
                Self-Service Portal
              </div>
            </div>

            {/* Lecturer Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-700/50">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1.5">Lecturers</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  One-click attendance session projection, dynamic fraud-proof QR display, live verified roster stream, and manual override controls.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/80 text-[11px] font-mono text-emerald-400">
                Classroom Control Center
              </div>
            </div>

            {/* Administrator Card */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center mb-4 border border-emerald-700/50">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1.5">Administrators & Deans</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Campus-wide department analytics, automated exam clearance verification, official PDF transcripts, and accreditation audit trails.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/80 text-[11px] font-mono text-emerald-400">
                Institutional Intelligence
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-1">
              ARCHITECTURAL FOUNDATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 5 Core Pillars of SMARTSCAN
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-emerald-500 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-white text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">
                      {pillar.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center text-xs font-bold text-emerald-800">
                    <span>Pillar 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreFeatures}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Explore All 10 Key System Features</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
