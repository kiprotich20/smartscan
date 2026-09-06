import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Clock, FileText, Users, ShieldAlert, Cpu, Database, BarChart3, QrCode } from 'lucide-react';

export const ProblemVsSolution: React.FC = () => {
  const problemPoints = [
    {
      title: 'Time-Consuming & Manual Processes',
      desc: 'Lecturers spend 15–20 valuable minutes passing paper sheets around or calling out names in crowded lecture halls.',
      icon: Clock,
    },
    {
      title: 'Prone to Errors & Proxy Duplication',
      desc: 'Students signing for absent friends ("buddy punching"), forged signatures, and lost paper logs.',
      icon: ShieldAlert,
    },
    {
      title: 'Difficult to Monitor & Manage',
      desc: 'Attendance data stays trapped on paper sheets, making institutional compliance and student audits nearly impossible.',
      icon: AlertTriangle,
    },
    {
      title: 'Dependent on Paper-Based Records',
      desc: 'Huge volumes of paper sheets create administrative clutter, storage headaches, and run counter to green sustainability.',
      icon: FileText,
    },
    {
      title: 'Inefficient for Large Student Populations',
      desc: 'As university cohorts expand into hundreds of students per unit, manual tracking completely collapses under scale.',
      icon: Users,
    },
  ];

  const solutionPoints = [
    {
      title: 'Instant QR Code Attendance',
      desc: 'Fast, touchless student self-registration via mobile device scanning in under 3 seconds per student.',
      icon: QrCode,
    },
    {
      title: 'Geofence Campus Verification',
      desc: 'GPS geofencing ensures attendance can ONLY be marked inside the designated lecture hall or campus pavilion.',
      icon: CheckCircle2,
    },
    {
      title: 'Real-Time Synchronized Ledgers',
      desc: 'Immediate attendance recording visible to lecturers and administrators instantly as scans occur.',
      icon: Cpu,
    },
    {
      title: 'Paperless Green Innovation',
      desc: 'Zero paper consumption, directly fulfilling Bomet University’s mission as a Green University for Sustainability.',
      icon: Sparkles,
    },
    {
      title: 'Smart Student & Lecturer Management',
      desc: 'Modular management by academic year, department, course units, and automated exam clearance eligibility.',
      icon: Database,
    },
  ];

  const storySteps = [
    {
      step: '01',
      title: 'Manual Attendance',
      desc: 'Paper sheets, long roll calls, proxy signatures, and physical storage folders.',
      badge: 'Legacy Process',
      icon: FileText,
      status: 'past',
    },
    {
      step: '02',
      title: 'QR Technology',
      desc: 'Dynamic encrypted QR codes generated per lecture session with auto-expiry.',
      badge: 'Rapid Adoption',
      icon: QrCode,
      status: 'active',
    },
    {
      step: '03',
      title: 'Digital Records',
      desc: 'Cloud-synced ledgers, real-time geofence checks, and tamper-proof student logs.',
      badge: 'Real-Time Sync',
      icon: Database,
      status: 'active',
    },
    {
      step: '04',
      title: 'Smart Management',
      desc: 'Automated analytics, department reporting, and institutional intelligence.',
      badge: 'Intelligent Future',
      icon: BarChart3,
      status: 'future',
    },
  ];

  return (
    <section id="problem-solution" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span>System Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why University Attendance Needed a Revolution
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From error-prone manual paper registers to a state-of-the-art QR digital attendance ecosystem engineered at Bomet University.
          </p>
        </div>

        {/* 2-Column Comparison: The Problem vs The Solution (Directly translating Poster Sections 1 & 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* THE PROBLEM CARD */}
          <div className="rounded-3xl bg-red-50/40 border-2 border-red-200/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-red-200/30 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                  1
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                      THE PROBLEM
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-red-700 mt-0.5">
                    Traditional Class Attendance is Slow, Manual & Prone to Errors
                  </p>
                </div>
              </div>

              {/* Problem Points List */}
              <div className="space-y-4 mb-6">
                {problemPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 bg-white/80 rounded-2xl p-4 border border-red-100 shadow-xs">
                      <div className="p-2 rounded-xl bg-red-100 text-red-700 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Callout */}
            <div className="bg-red-600 text-white p-4 rounded-2xl flex items-center gap-3">
              <XCircle className="w-6 h-6 shrink-0" />
              <p className="text-xs sm:text-sm font-bold leading-snug">
                Traditional attendance wastes hundreds of university lecture hours each term while generating inaccurate records.
              </p>
            </div>
          </div>

          {/* THE SOLUTION CARD */}
          <div className="rounded-3xl bg-emerald-50/50 border-2 border-emerald-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-200/40 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-black text-lg shadow-sm">
                  2
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                      THE SOLUTION: SMARTSCAN
                    </h3>
                  </div>
                  <p className="text-xs font-bold text-emerald-800 mt-0.5">
                    Adopt SMARTSCAN • Scan to Mark Attendance (CLASS CSC 101)
                  </p>
                </div>
              </div>

              {/* Solution Description from Poster */}
              <div className="bg-white rounded-2xl p-4.5 border border-emerald-200 mb-5 shadow-xs">
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                  <span className="font-extrabold text-emerald-800">SMARTSCAN</span> is a QR-based digital attendance management system designed to make student attendance <span className="text-emerald-700 font-bold">faster, smarter, more reliable, and easier to manage</span>.
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Students scan a unique session QR code using their mobile devices while lecturers and administrators manage attendance digitally in real-time.
                </p>
              </div>

              {/* Solution Points List */}
              <div className="space-y-4 mb-6">
                {solutionPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs">
                      <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Callout */}
            <div className="bg-emerald-700 text-white p-4 rounded-2xl flex items-center gap-3 shadow-xs">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-200" />
              <p className="text-xs sm:text-sm font-bold leading-snug">
                Attendance marked in under 3 seconds per student with 100% geolocated biometric and credential verification.
              </p>
            </div>
          </div>
        </div>

        {/* THE INNOVATION STORY ROADMAP (From Section on Poster) */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase block mb-1">
              THE INNOVATION STORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              A Four-Stage Evolution of Academic Integrity
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {storySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center group">
                  {/* Step Connector Line on Desktop */}
                  {idx < storySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 z-0" />
                  )}

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-emerald-500/80 flex items-center justify-center text-emerald-400 mb-4 z-10 shadow-lg group-hover:scale-105 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-amber-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full mb-2">
                    {step.step} • {step.badge}
                  </span>

                  <h4 className="text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
