import React, { useState } from 'react';
import { Clock, CheckCircle2, Leaf, BarChart3, ShieldCheck, Sparkles, Calculator, ArrowRight } from 'lucide-react';

export const WhySmartScan: React.FC = () => {
  // Calculator state for university estimation
  const [studentCohort, setStudentCohort] = useState(1200);
  const [classesPerWeek, setClassesPerWeek] = useState(80);

  // Math: 15 minutes saved per lecture session
  const hoursSavedPerSemester = Math.round((classesPerWeek * 14 * 15) / 60);
  const paperSheetsSaved = Math.round(classesPerWeek * 14 * 3); // 3 pages of paper registers per lecture
  const paperReamsSaved = (paperSheetsSaved / 500).toFixed(1);
  const fraudIncidentsPrevented = Math.round(studentCohort * 0.18 * 14);

  const pillars = [
    {
      title: 'SAVE TIME',
      subtitle: 'Automate attendance and focus on what really matters.',
      description: 'Reclaim 15–20 minutes of instructional time every lecture. Lecturers can begin teaching immediately without roll-call disruptions.',
      icon: Clock,
      color: 'bg-emerald-600',
      badge: 'Speed Boost',
    },
    {
      title: 'REDUCE ERRORS',
      subtitle: 'Accurate digital records with fewer mistakes.',
      description: 'Eliminates misread handwriting, accidental omissions, and duplicate entries. Every student timestamp is cryptographically verified.',
      icon: CheckCircle2,
      color: 'bg-blue-600',
      badge: 'Zero Fault',
    },
    {
      title: 'GO PAPERLESS',
      subtitle: 'Environment-friendly and cost-effective solution.',
      description: 'Supports Bomet University’s green vision by replacing thousands of paper registers and physical storage files with clean digital storage.',
      icon: Leaf,
      color: 'bg-emerald-700',
      badge: 'Eco Friendly',
    },
    {
      title: 'IMPROVE MONITORING',
      subtitle: 'Real-time insights for better decision making.',
      description: 'Deans and HoDs get instant attendance visibility. Early alerts identify struggling students before end-of-semester exam disqualifications.',
      icon: BarChart3,
      color: 'bg-indigo-600',
      badge: 'Real-time BI',
    },
    {
      title: 'SECURE & RELIABLE',
      subtitle: 'Data protection and system integrity.',
      description: 'Hardware fingerprinting, geofenced GPS boundaries, and expiring QR tokens guarantee zero proxy signing or buddy punching.',
      icon: ShieldCheck,
      color: 'bg-purple-600',
      badge: 'Bank-grade',
    },
  ];

  return (
    <section id="why-smartscan" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Value Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHY SMARTSCAN?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Engineered from the ground up to solve the real administrative and academic challenges of modern universities.
          </p>
        </div>

        {/* 5 Core Pillars from Poster */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${pillar.color} text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 mt-1 leading-snug">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {pillar.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive University Impact Calculator */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Description & Sliders */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase mb-3">
                <Calculator className="w-3.5 h-3.5 text-amber-300" />
                <span>Semester Impact Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Calculate Time & Resource Savings for Your University
              </h3>
              <p className="text-sm text-emerald-100 mt-2 leading-relaxed max-w-xl">
                Adjust student cohort size and weekly lecture sessions to project institutional efficiency gains over a 14-week semester.
              </p>

              {/* Sliders */}
              <div className="mt-6 space-y-5 max-w-lg">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span>Enrolled Student Population:</span>
                    <span className="text-amber-300 font-mono text-sm">{studentCohort.toLocaleString()} students</span>
                  </div>
                  <input
                    type="range"
                    min={200}
                    max={5000}
                    step={100}
                    value={studentCohort}
                    onChange={(e) => setStudentCohort(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span>Weekly Class Sessions (Across All Units):</span>
                    <span className="text-amber-300 font-mono text-sm">{classesPerWeek} lectures/week</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={300}
                    step={10}
                    value={classesPerWeek}
                    onChange={(e) => setClassesPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Output Numbers */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-700/60 text-center">
                  <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono">
                    {hoursSavedPerSemester}h
                  </span>
                  <span className="block text-xs font-semibold text-emerald-200 mt-1">
                    Teaching Hours Recovered
                  </span>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">
                    No more roll-call waste
                  </span>
                </div>

                <div className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-700/60 text-center">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-300 font-mono">
                    {paperSheetsSaved.toLocaleString()}
                  </span>
                  <span className="block text-xs font-semibold text-emerald-200 mt-1">
                    Paper Sheets Eliminated
                  </span>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">
                    ~{paperReamsSaved} standard reams
                  </span>
                </div>

                <div className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-700/60 text-center">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    100%
                  </span>
                  <span className="block text-xs font-semibold text-emerald-200 mt-1">
                    Geofenced Accuracy
                  </span>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">
                    Zero off-campus scans
                  </span>
                </div>

                <div className="bg-emerald-950/80 rounded-2xl p-4 border border-emerald-700/60 text-center">
                  <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono">
                    {fraudIncidentsPrevented.toLocaleString()}
                  </span>
                  <span className="block text-xs font-semibold text-emerald-200 mt-1">
                    Proxy Attempts Blocked
                  </span>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">
                    Single device hardware lock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
