import React, { useState } from 'react';
import { 
  Scan, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BarChart3, 
  FileCheck, 
  ShieldCheck, 
  Sparkles, 
  Smartphone, 
  Laptop,
  Layers,
  Clock,
  MapPin,
  TrendingUp,
  Award
} from 'lucide-react';
import { BometUniversityLogo } from './BometUniversityLogo';

interface HeroProps {
  onExploreSMARTSCAN: () => void;
  onViewFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSMARTSCAN, onViewFeatures }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'student' | 'analytics'>('live');

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/70 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-b from-emerald-100/50 via-teal-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Institutional Badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200/90 shadow-xs px-4 py-2 rounded-full mb-6">
            <BometUniversityLogo size="sm" />
            <div className="text-left border-l border-slate-200 pl-3">
              <span className="text-xs font-black tracking-wider text-slate-900 uppercase block">
                Bomet University
              </span>
              <span className="text-[11px] font-semibold text-emerald-800 italic block">
                Green University for Sustainability
              </span>
            </div>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight max-w-5xl leading-[1.08]">
            SMARTSCAN
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-800 mt-2">
              Smarter Attendance. Better Campus Management.
            </span>
          </h1>

          {/* Platform Category Descriptor */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800">
            <span>Smart</span>
            <span className="text-slate-300">•</span>
            <span>Secure</span>
            <span className="text-slate-300">•</span>
            <span>Scalable</span>
            <span className="text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-500 font-medium">Next-Gen Campus OS</span>
          </div>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl leading-relaxed">
            A secure, intelligent and scalable digital platform designed to simplify attendance management, reduce manual processes, improve accountability and provide real-time insights.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
            <button
              id="hero-explore-smartscan-btn"
              onClick={onExploreSMARTSCAN}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore SMARTSCAN</span>
              <ArrowRight className="w-4 h-4 text-emerald-200" />
            </button>

            <button
              id="hero-view-features-btn"
              onClick={onViewFeatures}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>View Features</span>
            </button>
          </div>
        </div>

        {/* System Showcase Tabs & Mockup Visual */}
        <div className="mt-10 lg:mt-12 max-w-6xl mx-auto">
          {/* View Mode Switcher */}
          <div className="flex items-center justify-center mb-5">
            <div className="inline-flex p-1 rounded-2xl bg-slate-200/80 border border-slate-300/80 text-xs font-bold text-slate-700">
              <button
                onClick={() => setActiveTab('live')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'live'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Attendance Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab('student')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'student'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Student QR Scanner</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'analytics'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analytics & Records</span>
              </button>
            </div>
          </div>

          {/* Main Visual Display Card */}
          <div className="bg-slate-900 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  smartscan.bu.ac.ke/platform/live-session
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono">LIVE SESSION: CSC 101 • SCIENCE LAB 2</span>
              </div>
            </div>

            {/* TAB 1: Real-time Statistics & Attendance Dashboard */}
            {activeTab === 'live' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Metrics + Recent Scans */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Metric Cards Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700">
                      <span className="text-[11px] font-medium text-slate-400 block">Total Enrolled</span>
                      <span className="text-2xl font-black text-white mt-0.5 block">120</span>
                      <span className="text-[10px] text-slate-400 font-mono">CSC 101 Cohort</span>
                    </div>
                    <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700">
                      <span className="text-[11px] font-medium text-emerald-400 block">Present Now</span>
                      <span className="text-2xl font-black text-emerald-400 mt-0.5 block">88</span>
                      <span className="text-[10px] text-emerald-300 font-mono">73.3% Quota Met</span>
                    </div>
                    <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700">
                      <span className="text-[11px] font-medium text-amber-400 block">Late (Grace Period)</span>
                      <span className="text-2xl font-black text-amber-300 mt-0.5 block">14</span>
                      <span className="text-[10px] text-amber-300/80 font-mono">Within 10m window</span>
                    </div>
                    <div className="bg-slate-800/90 rounded-2xl p-3.5 border border-slate-700">
                      <span className="text-[11px] font-medium text-red-400 block">Absent</span>
                      <span className="text-2xl font-black text-red-400 mt-0.5 block">18</span>
                      <span className="text-[10px] text-red-300/80 font-mono">Unverified</span>
                    </div>
                  </div>

                  {/* Real-time Ledger Stream */}
                  <div className="bg-slate-800/70 rounded-2xl p-4 border border-slate-700/80">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" /> Live Scans Ledger Stream
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                        GPS Geofence: 50m • Verified
                      </span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Agabe Kiprotich Ngeywo', reg: 'BU/SC/2024/0012', time: '08:14:22 AM', status: 'Present', dist: '6m' },
                        { name: 'Mercy Chepkemoi', reg: 'BU/SC/2024/0045', time: '08:14:38 AM', status: 'Present', dist: '12m' },
                        { name: 'Brian Kipkorir', reg: 'BU/SC/2024/0088', time: '08:15:04 AM', status: 'Late', dist: '19m' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-emerald-900/60 text-emerald-300 flex items-center justify-center font-bold text-[11px]">
                              {item.name.charAt(0)}
                            </div>
                            <div>
                              <span className="font-bold text-white block">{item.name}</span>
                              <span className="text-[10px] font-mono text-slate-400">{item.reg}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.status === 'Present' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
                            }`}>
                              {item.status}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">{item.time} ({item.dist})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Session Projection QR Box */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-800/60 rounded-2xl p-5 border border-slate-700 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    PROJECTED CLASS QR
                  </span>

                  {/* QR Box with Laser Scan Effect */}
                  <div className="bg-white p-3 rounded-2xl shadow-inner relative mb-3">
                    <div className="w-36 h-36 bg-slate-900 rounded-xl p-2.5 flex items-center justify-center relative overflow-hidden">
                      <div className="grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded">
                        {Array.from({ length: 36 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-xs ${
                              (i % 2 === 0 || i % 5 === 0 || i < 6 || i > 30) && i !== 14
                                ? 'bg-slate-900'
                                : 'bg-white'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="absolute inset-x-0 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981] animate-bounce" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Token: BU-SEC-8942-X
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Rotates dynamically every 20 seconds. Anti-screenshot protected.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Student Mobile Phone Scanner */}
            {activeTab === 'student' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>SMARTSCAN MOBILE WEB APP</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Instant Touchless Check-in
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Students open the SMARTSCAN interface on any smartphone browser. With integrated camera permissions and GPS geofence verification, attendance is recorded in under 3 seconds with zero paper friction.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Single device binding prevents proxy attendance / buddy signing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Hardware GPS confirms presence within designated lecture hall</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Instant digital attendance receipt with audit timestamp</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-[270px] bg-slate-950 rounded-3xl p-3 border-4 border-slate-700 shadow-2xl">
                    <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2" />
                    <div className="bg-slate-900 rounded-2xl p-4 text-center border border-slate-800">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                        <span className="font-bold text-white">SMARTSCAN</span>
                        <span className="text-[10px] text-emerald-400 font-mono">GPS LOCKED</span>
                      </div>
                      <div className="bg-emerald-600 text-white p-3 rounded-xl mb-3 shadow-md">
                        <CheckCircle2 className="w-7 h-7 mx-auto mb-1 text-emerald-100" />
                        <span className="text-xs font-black tracking-wide uppercase block">
                          Attendance Verified
                        </span>
                        <span className="text-[10px] opacity-90 block">
                          CSC 101 • Science Lab 2
                        </span>
                      </div>
                      <div className="bg-slate-800 p-2 rounded-lg text-left text-[10px] font-mono text-slate-300 space-y-1">
                        <div>Student: <span className="text-white font-bold">Agabe K. Ngeywo</span></div>
                        <div>Reg No: <span className="text-emerald-400 font-bold">BU/SC/2024/0012</span></div>
                        <div>Timestamp: <span className="text-slate-300">Today, 08:14 AM</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Analytics & Digital Records */}
            {activeTab === 'analytics' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700">
                    <span className="text-xs text-slate-400 block">Semester 1 Campus Average</span>
                    <span className="text-3xl font-black text-emerald-400">88.4%</span>
                    <span className="text-[11px] text-slate-400 block mt-1">Across 8 Academic Departments</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700">
                    <span className="text-xs text-slate-400 block">Audit-Ready Transcripts</span>
                    <span className="text-3xl font-black text-white">100%</span>
                    <span className="text-[11px] text-slate-400 block mt-1">Exportable PDF & Excel Ledgers</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700">
                    <span className="text-xs text-slate-400 block">Paper Eliminated</span>
                    <span className="text-3xl font-black text-emerald-400">142,000+</span>
                    <span className="text-[11px] text-slate-400 block mt-1">Sheets preserved annually</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="font-bold text-white block">Official University Examination Clearance Matrix</span>
                      <span className="text-slate-400 text-[11px]">Enforces the 75% lecture attendance threshold automatically before exam card issuance.</span>
                    </div>
                  </div>
                  <span className="font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-800">
                    COMPLIANT: BU-ACAD-POL-04
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Proof Strip */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">
                  A practical, reliable, and secure digital solution for universities.
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">
                SMARTSCAN v3.0 • BOMET UNIVERSITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
