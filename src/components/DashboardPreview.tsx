import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  XCircle, 
  Percent, 
  Radio, 
  Clock, 
  BarChart3, 
  FileText, 
  Sparkles, 
  Filter, 
  Download,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('ALL');

  const courseStats = [
    { code: 'CSC 101', name: 'Intro to Computer Systems', enrolled: 120, present: 94, rate: '78.3%', lecturer: 'Eng. F. Odero', status: 'Live' },
    { code: 'BCT 202', name: 'Building Technology II', enrolled: 85, present: 71, rate: '83.5%', lecturer: 'Dr. K. Bett', status: 'Completed' },
    { code: 'AGR 301', name: 'Sustainable Agribusiness', enrolled: 110, present: 74, rate: '67.2%', lecturer: 'Prof. M. Langat', status: 'Completed' },
    { code: 'EDU 104', name: 'Educational Psychology', enrolled: 210, present: 165, rate: '78.5%', lecturer: 'Dr. S. Rotich', status: 'Scheduled' },
    { code: 'ECO 205', name: 'Microeconomic Theory', enrolled: 95, present: 72, rate: '75.7%', lecturer: 'Dr. C. Koech', status: 'Completed' },
  ];

  const recentAttendanceLog = [
    { id: '1', name: 'Agabe Kiprotich Ngeywo', reg: 'BU/SC/2024/0012', course: 'CSC 101', time: '08:14:22 AM', status: 'Present', venue: 'Lab 2', verified: true },
    { id: '2', name: 'Mercy Chepkemoi', reg: 'BU/SC/2024/0045', course: 'CSC 101', time: '08:14:38 AM', status: 'Present', venue: 'Lab 2', verified: true },
    { id: '3', name: 'Brian Kipkorir', reg: 'BU/SC/2024/0088', course: 'CSC 101', time: '08:15:04 AM', status: 'Late', venue: 'Lab 2', verified: true },
    { id: '4', name: 'Faith Chebet', reg: 'BU/SC/2024/0115', course: 'CSC 101', time: '08:15:45 AM', status: 'Present', venue: 'Lab 2', verified: true },
    { id: '5', name: 'Dennis Cheruiyot', reg: 'BU/SC/2024/0091', course: 'BCT 202', time: '09:02:11 AM', status: 'Present', venue: 'Pavilion A', verified: true },
    { id: '6', name: 'Sharon Jelagat', reg: 'BU/SC/2024/0034', course: 'AGR 301', time: '10:11:05 AM', status: 'Present', venue: 'Hall 3', verified: true },
  ];

  const filteredLogs = selectedCourse === 'ALL' 
    ? recentAttendanceLog 
    : recentAttendanceLog.filter(l => l.course === selectedCourse);

  return (
    <section id="dashboard-preview" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Unified Institutional Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              SMARTSCAN Executive Dashboard Preview
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl">
              Real-time attendance intelligence, active session monitoring, and audit-grade academic reports at a glance.
            </p>
          </div>

          {/* Prominent Demo Data Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-xl text-xs font-bold self-start md:self-auto shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Interactive Demo Data • Semester 1 Simulated Cohort</span>
          </div>
        </div>

        {/* Top 5 High-Impact Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {/* Metric 1: Total Students */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Students</span>
              <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <span className="text-3xl font-black text-slate-900 block">912</span>
            <span className="text-[11px] font-medium text-emerald-700 mt-1 block">
              Across 8 Departments
            </span>
          </div>

          {/* Metric 2: Present */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-emerald-700 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Present</span>
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <span className="text-3xl font-black text-emerald-700 block">667</span>
            <span className="text-[11px] font-medium text-emerald-800 mt-1 block">
              Verified Attendance
            </span>
          </div>

          {/* Metric 3: Absent */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-red-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Absent</span>
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <XCircle className="w-4 h-4" />
              </div>
            </div>
            <span className="text-3xl font-black text-red-600 block">113</span>
            <span className="text-[11px] font-medium text-red-700 mt-1 block">
              Unverified / Excused
            </span>
          </div>

          {/* Metric 4: Attendance Percentage */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-blue-700 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Attendance Rate</span>
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
                <Percent className="w-4 h-4" />
              </div>
            </div>
            <span className="text-3xl font-black text-blue-700 block">73.1%</span>
            <span className="text-[11px] font-medium text-blue-800 mt-1 block">
              Campus Average
            </span>
          </div>

          {/* Metric 5: Active Sessions */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-emerald-700 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Active Sessions</span>
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Radio className="w-4 h-4 animate-pulse" />
              </div>
            </div>
            <span className="text-3xl font-black text-slate-900 block">14</span>
            <span className="text-[11px] font-medium text-emerald-700 mt-1 block">
              Live in Lecture Theaters
            </span>
          </div>
        </div>

        {/* Dashboard Panels Grid: Trends + Course Stats + Recent Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (7 cols): Attendance Trends & Course Statistics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Attendance Trends Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Attendance Trends (Weekly Longitudinal)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Demonstrating consistent student participation across academic weeks
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                  Weeks 1–12 (Demo Data)
                </span>
              </div>

              {/* Visual Simulated Attendance Bar Chart */}
              <div className="h-44 w-full flex items-end justify-between gap-2 pt-6 pb-2 px-2">
                {[
                  { week: 'W1', rate: 82 },
                  { week: 'W2', rate: 79 },
                  { week: 'W3', rate: 76 },
                  { week: 'W4', rate: 74 },
                  { week: 'W5', rate: 71 },
                  { week: 'W6', rate: 69 },
                  { week: 'W7', rate: 73 },
                  { week: 'W8', rate: 77 },
                  { week: 'W9', rate: 75 },
                  { week: 'W10', rate: 78 },
                  { week: 'W11', rate: 84 },
                  { week: 'W12', rate: 88 },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[10px] font-mono font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.rate}%
                    </span>
                    <div
                      className={`w-full rounded-t-md transition-all group-hover:brightness-95 ${
                        bar.rate >= 75 ? 'bg-emerald-600' : 'bg-amber-500'
                      }`}
                      style={{ height: `${(bar.rate / 100) * 110}px` }}
                    />
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      {bar.week}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-600 mt-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-emerald-600" /> &gt;75% Exam Threshold Met
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" /> &lt;75% Attention Required
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Target: 80% Institutional Quota</span>
              </div>
            </div>

            {/* Course Statistics Table */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Course Statistics & Unit Headcount
                  </h3>
                  <p className="text-xs text-slate-500">
                    Active lecture sessions and real-time student participation
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  Demo Data
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-mono text-[10px]">
                      <th className="pb-2.5">Course Unit</th>
                      <th className="pb-2.5">Lecturer</th>
                      <th className="pb-2.5 text-right">Enrolled</th>
                      <th className="pb-2.5 text-right">Present</th>
                      <th className="pb-2.5 text-right">Rate</th>
                      <th className="pb-2.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {courseStats.map((c) => (
                      <tr key={c.code} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5">
                          <span className="font-bold text-slate-900 block">{c.code}</span>
                          <span className="text-[11px] text-slate-500">{c.name}</span>
                        </td>
                        <td className="py-2.5 font-medium text-slate-700">{c.lecturer}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-slate-800">{c.enrolled}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-emerald-700">{c.present}</td>
                        <td className="py-2.5 text-right font-mono font-black text-slate-900">{c.rate}</td>
                        <td className="py-2.5 text-right">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            c.status === 'Live' ? 'bg-emerald-100 text-emerald-800 animate-pulse' :
                            c.status === 'Completed' ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Recent Attendance Feed */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Recent Attendance Log
                    </h3>
                    <p className="text-xs text-slate-500">
                      Live millisecond cryptographic scan ledger
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    LIVE STREAM
                  </span>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 text-xs">
                  <span className="text-[11px] text-slate-400 font-medium mr-1 flex items-center gap-1">
                    <Filter className="w-3 h-3" /> Unit:
                  </span>
                  {['ALL', 'CSC 101', 'BCT 202', 'AGR 301'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCourse(c)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedCourse === c
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* Scans List */}
                <div className="space-y-2.5">
                  {filteredLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100/70 border border-slate-200/80 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                          {log.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 text-xs block leading-snug">
                            {log.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 block">
                            {log.reg} • <span className="text-emerald-800 font-semibold">{log.course}</span>
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          log.status === 'Present'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {log.status}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                          {log.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Institutional Export Action */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">
                  All Records Signed with RSA-2048
                </span>
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 cursor-pointer hover:underline">
                  <Download className="w-3.5 h-3.5" /> Export PDF Ledger
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
