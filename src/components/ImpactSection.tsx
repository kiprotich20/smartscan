import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  Leaf,
  Calculator,
  Award
} from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const [studentCohortSize, setStudentCohortSize] = useState(3000);
  const [lecturesPerWeek, setLecturesPerWeek] = useState(120);

  // Dynamic calculations based on user input
  const minutesSavedPerWeek = lecturesPerWeek * 15;
  const hoursSavedPerSemester = Math.round((minutesSavedPerWeek * 14) / 60);
  const paperSheetsSavedPerYear = lecturesPerWeek * 28 * 4; // sheets of paper avoided per year
  const treesPreservedApprox = (paperSheetsSavedPerYear / 8333).toFixed(1);

  const benefits = [
    {
      title: 'Save Time',
      subtitle: 'Reduce manual attendance processes',
      description: 'Cuts lecture attendance from 15–20 minutes of tedious roll-calling to less than 60 seconds, restoring instructional time for core teaching and discussions.',
      icon: Clock,
      metric: '90% Time Saved',
      color: 'emerald'
    },
    {
      title: 'Improve Accuracy',
      subtitle: 'Reduce errors associated with handwritten records',
      description: 'Eliminates illegible handwriting, unreadable signatures, misplaced sheets, and manual entry errors during end-of-term score compilation.',
      icon: CheckCircle2,
      metric: 'Near-Zero Errors',
      color: 'blue'
    },
    {
      title: 'Increase Accountability',
      subtitle: 'Create clearer and more traceable attendance records',
      description: 'Cryptographically binds every attendance record with device fingerprinting and GPS coordinates, deterring proxy attendance and buddy signing.',
      icon: ShieldCheck,
      metric: 'Traceable Audit Logs',
      color: 'purple'
    },
    {
      title: 'Improve Decision Making',
      subtitle: 'Provide useful attendance analytics',
      description: 'Gives Deans, Registrars, and Course Coordinators actionable insights into class engagement patterns and early dropout risk factors.',
      icon: BarChart3,
      metric: 'Real-Time Insights',
      color: 'indigo'
    },
    {
      title: 'Reduce Paperwork',
      subtitle: 'Move attendance management into a digital environment',
      description: 'Completely eliminates physical attendance books and printed rosters, directly supporting Bomet University’s "Green University for Sustainability" vision.',
      icon: FileText,
      metric: '100% Paperless',
      color: 'amber'
    },
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Measurable Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Institutional Impact & Expected Benefits
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            SMARTSCAN delivers transformative efficiency, institutional transparency, and environmental sustainability across academic departments.
          </p>
        </div>

        {/* 5 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      {b.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {b.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mt-1">
                    {b.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Institutional Advantage</span>
                </div>
              </div>
            );
          })}

          {/* Institutional Sustainability Card */}
          <div className="bg-gradient-to-br from-emerald-800 to-green-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-md border border-emerald-700">
            <div>
              <div className="flex items-center gap-2 text-amber-300 text-xs font-mono font-bold uppercase mb-2">
                <Leaf className="w-4 h-4" />
                <span>ENVIRONMENTAL STEWARDSHIP</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Green University for Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                By removing paper rosters from university classrooms, SMARTSCAN actively advances Bomet University’s ecological vision, eliminating tons of paper waste and carbon footprint from academic operations.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-700/60 flex items-center justify-between text-xs font-mono text-amber-300">
              <span>BOMET UNIVERSITY INITIATIVE</span>
              <span>ECO-CERTIFIED</span>
            </div>
          </div>
        </div>

        {/* Interactive Campus Impact Estimator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive ROI & Resource Estimator</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Estimate Your Campus Savings with SMARTSCAN
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Adjust the sliders below to estimate the annual time and environmental savings for your institution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Enrolled Student Population:</span>
                  <span className="font-mono text-emerald-800 text-sm">{studentCohortSize.toLocaleString()} students</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="500"
                  value={studentCohortSize}
                  onChange={(e) => setStudentCohortSize(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>500</span>
                  <span>7,500</span>
                  <span>15,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Weekly Lectures / Lab Sessions Conducted:</span>
                  <span className="font-mono text-emerald-800 text-sm">{lecturesPerWeek} sessions/week</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={lecturesPerWeek}
                  onChange={(e) => setLecturesPerWeek(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>20</span>
                  <span>250</span>
                  <span>500</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Stats */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Instruction Time Saved</span>
                <span className="text-3xl font-black text-slate-900 block mt-1">{hoursSavedPerSemester} hrs</span>
                <span className="text-[11px] text-emerald-700 font-medium block mt-1">Per Semester Term</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Paper Sheets Preserved</span>
                <span className="text-3xl font-black text-emerald-700 block mt-1">{paperSheetsSavedPerYear.toLocaleString()}</span>
                <span className="text-[11px] text-emerald-800 font-medium block mt-1">Annually (No Paper Waste)</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Proxy Attendance Rate</span>
                <span className="text-3xl font-black text-emerald-700 block mt-1">~0%</span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1">Hardware GPS Enforced</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium block">Trees Saved</span>
                <span className="text-3xl font-black text-slate-900 block mt-1">{treesPreservedApprox}</span>
                <span className="text-[11px] text-emerald-700 font-medium block mt-1">Equivalent Biomass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
