import React from 'react';
import { 
  Expand, 
  CalendarClock, 
  BellRing, 
  LineChart, 
  GraduationCap, 
  Coffee, 
  CreditCard, 
  Building, 
  Network,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const ScalabilitySection: React.FC = () => {
  const futureCapabilities = [
    {
      title: 'Smart Timetable Management',
      description: 'Intelligent scheduling algorithm that automatically resolves room booking conflicts, faculty availability, and cohort overlaps.',
      icon: CalendarClock,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Student Notifications',
      description: 'Instant push notifications and SMS alerts for upcoming classes, room changes, attendance warnings, and emergency broadcasts.',
      icon: BellRing,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Performance Analytics',
      description: 'Correlating lecture attendance data with continuous assessment test (CAT) and final exam grades to identify student intervention needs.',
      icon: LineChart,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Examination Management',
      description: 'Automated digital exam hall card generation, seated verification, invigilator headcounts, and exam cheating prevention.',
      icon: GraduationCap,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Campus Services Integration',
      description: 'Extending QR credentials to library checkouts, cafeteria dining plans, hostel access control, and sports facility check-ins.',
      icon: Coffee,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Digital Identification',
      description: 'Unified cryptographic mobile student and faculty ID cards stored securely on personal smartphones with NFC and QR capabilities.',
      icon: CreditCard,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Institution-Wide Analytics',
      description: 'Cross-faculty business intelligence dashboards for Vice Chancellors, University Councils, and Academic Quality bodies.',
      icon: Building,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
    {
      title: 'Multi-Campus Support',
      description: 'Seamless multi-tenant infrastructure connecting satellite campuses, constituent colleges, and distance learning centers into one unified cloud.',
      icon: Network,
      phase: 'Future Development',
      badgeColor: 'amber'
    },
  ];

  return (
    <section id="scalability" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Expand className="w-3.5 h-3.5 text-emerald-700" />
            <span>Architected for Tomorrow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed to Scale Beyond Attendance
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            SMARTSCAN is not merely a single-purpose QR attendance utility. It is an extensible digital ecosystem engineered to evolve into a comprehensive, multi-campus Smart Campus Management Platform.
          </p>
        </div>

        {/* Current Core vs Future Ecosystem Ribbon */}
        <div className="mb-12 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              PLATFORM ROADMAP
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              From Attendance Engine to Smart Campus OS
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              While our core attendance and verification modules are production-ready today, our modular microservice architecture is ready to absorb broader university services across Kenya and Eastern Africa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-bold font-mono">
              Phase 1: Attendance Live
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-amber-300 text-xs font-bold font-mono">
              Phase 2: Ecosystem (Coming Soon)
            </span>
          </div>
        </div>

        {/* 8 Future Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {futureCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-200/70 text-slate-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Explicitly Labeled Future Development Badge */}
                    <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300/80 px-2 py-0.5 rounded-full">
                      {cap.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Planned Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
