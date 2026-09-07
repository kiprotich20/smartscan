import React from 'react';
import { 
  FileSpreadsheet, 
  Clock, 
  ShieldAlert, 
  FileText, 
  SearchX, 
  TrendingDown, 
  FolderArchive,
  AlertTriangle,
  ArrowDown
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Manual Attendance Taking',
      description: 'Lecturers are forced to pass handwritten sheets or tick boxes manually while attempting to conduct high-density lectures.',
      icon: FileText,
      metric: '15-20 mins lost',
      tag: 'Lecture Overhead'
    },
    {
      title: 'Time-Consuming Roll Calls',
      description: 'Calling names one by one in cohorts of 100 to 500+ students drains valuable instruction and laboratory time.',
      icon: Clock,
      metric: '35+ hrs/year',
      tag: 'Productivity Waste'
    },
    {
      title: 'Attendance Fraud & Proxy Attendance',
      description: 'Students regularly sign registers on behalf of absent friends ("buddy punching") without being physically present on campus.',
      icon: ShieldAlert,
      metric: 'Up to 28% false records',
      tag: 'Integrity Breach'
    },
    {
      title: 'Paper-Based Records',
      description: 'Paper registers tear, get misplaced, consume thousands of reams annually, and contradict green institutional sustainability goals.',
      icon: FileSpreadsheet,
      metric: 'Thousands of sheets',
      tag: 'Environmental Cost'
    },
    {
      title: 'Difficult Attendance Tracking',
      description: 'Aggregating paper sheets across multiple weeks, lecturers, and campuses makes student compliance audits extremely difficult.',
      icon: SearchX,
      metric: 'Weeks of delay',
      tag: 'Filing Friction'
    },
    {
      title: 'Lack of Real-Time Attendance Insights',
      description: 'Deans and HoDs have zero immediate visibility into student absenteeism until the end of the academic semester.',
      icon: TrendingDown,
      metric: 'Zero live visibility',
      tag: 'Data Blackout'
    },
    {
      title: 'Inefficient Record Management',
      description: 'Archiving and retrieving past records for graduation clearance, accreditation, or disciplinary reviews requires tedious manual filing.',
      icon: FolderArchive,
      metric: 'Prone to lost files',
      tag: 'Administrative Bottleneck'
    },
  ];

  return (
    <section id="problem-section" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-wider uppercase mb-3 border border-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>The Institutional Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Problems with Traditional Campus Attendance
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Traditional paper-based roll calls compromise academic integrity, waste precious instructional hours, and burden university staff with administrative clutter.
          </p>
        </div>

        {/* 7 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-full">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Impact:</span>
                  <span className="font-bold text-red-700 font-mono">{prob.metric}</span>
                </div>
              </div>
            );
          })}

          {/* Cumulative Problem Impact Summary Card */}
          <div className="bg-gradient-to-br from-red-900 via-slate-900 to-slate-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-md border border-red-900/50 md:col-span-2 lg:col-span-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-300 block mb-1">
                INSTITUTIONAL COST
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Over 200 hours lost per department each semester
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                When scaled across universities with thousands of students, paper attendance creates severe administrative friction, compliance risks for regulatory bodies, and massive paper waste.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-red-200">
              <span>SMARTSCAN transforms this paradigm completely.</span>
              <span className="font-mono text-emerald-400">See the Solution Below ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
