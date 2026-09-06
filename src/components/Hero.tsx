import React from 'react';
import { BometUniversityLogo } from './BometUniversityLogo';
import { QrCode, ShieldCheck, MapPin, Zap, CheckCircle2, Users, ArrowRight, Sparkles, Smartphone, Laptop } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onExploreFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onExploreFeatures }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200/80">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Crest & Institutional Heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-3.5 bg-white border border-emerald-200/90 shadow-sm px-4 py-2 rounded-full mb-6">
            <BometUniversityLogo size="sm" />
            <div className="text-left border-l border-emerald-200 pl-3">
              <span className="text-xs font-black tracking-wider text-emerald-900 uppercase block">
                Bomet University
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 italic block">
                Green University for Sustainability
              </span>
            </div>
          </div>

          {/* Pillars Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
            {['SCIENCE', 'TECHNOLOGY', 'INNOVATION', 'EDUCATION'].map((pillar, idx) => (
              <span
                key={pillar}
                className="text-[11px] font-black tracking-widest px-3 py-1 rounded-md bg-emerald-900 text-amber-300 shadow-xs uppercase"
              >
                {pillar}
              </span>
            ))}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight max-w-5xl leading-[1.08]">
            <span className="text-slate-900">SMART</span>
            <span className="text-emerald-700">SCAN</span>
            <span className="text-slate-400 font-light mx-2">/</span>
            <span className="text-emerald-800 text-3xl sm:text-5xl font-extrabold block sm:inline mt-2 sm:mt-0">
              BOMESMARTSCAN
            </span>
          </h1>

          {/* Tagline from Poster */}
          <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-emerald-800 font-black tracking-widest text-xs sm:text-sm uppercase">
            <span>Smart</span>
            <span className="text-emerald-500">•</span>
            <span>Secure</span>
            <span className="text-emerald-500">•</span>
            <span>Scalable</span>
          </div>

          {/* Subtitle & Mission */}
          <p className="mt-5 text-xl sm:text-2xl font-bold text-slate-800 max-w-3xl leading-snug">
            Smarter Attendance, Brighter Futures
          </p>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Transforming University Class Attendance Through Smart, Secure & Digital Innovation and Technology at Bomet University.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <button
              id="hero-try-demo-btn"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <QrCode className="w-5 h-5 text-emerald-200" />
              <span>Simulate QR Scan</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>

            <button
              id="hero-explore-features-btn"
              onClick={onExploreFeatures}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-base shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>Explore Key Features</span>
            </button>
          </div>
        </div>

        {/* Dual Mockup Showcase: Dashboard & Mobile Scanner (Recreating Section 3 from Poster) */}
        <div className="mt-10 lg:mt-14 relative max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  smartscan.bu.ac.ke/lecturer/dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>SESSION ACTIVE: CSC 101</span>
              </div>
            </div>

            {/* Grid Layout: Desktop Dashboard on Left + Mobile Phone Scanner on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Desktop Dashboard Section (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Stats Row from Official Poster */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                    <span className="text-[11px] font-medium text-slate-400 block">Total Sessions</span>
                    <span className="text-2xl font-black text-white">1,248</span>
                    <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">+14 today</span>
                  </div>
                  <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                    <span className="text-[11px] font-medium text-slate-400 block">Total Students</span>
                    <span className="text-2xl font-black text-white">912</span>
                    <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">8 Departments</span>
                  </div>
                  <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700">
                    <span className="text-[11px] font-medium text-slate-400 block">Attendance Rate</span>
                    <span className="text-2xl font-black text-emerald-400">73.1%</span>
                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Sem 1 Average</span>
                  </div>
                </div>

                {/* Dashboard Chart Mockup & Status */}
                <div className="bg-slate-800/70 rounded-xl p-4 border border-slate-700/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-300">Attendance Overview & Verification</span>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded font-mono">
                      Geofence: 50m Radius ACTIVE
                    </span>
                  </div>

                  {/* SVG Wave Chart */}
                  <div className="h-24 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 60 Q 50 20, 100 45 T 200 25 T 300 50 T 400 15 L 400 80 L 0 80 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M 0 60 Q 50 20, 100 45 T 200 25 T 300 50 T 400 15"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>

                  {/* Breakdown pill status */}
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-700/60 mt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Present: 73.1%
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Late: 14.5%
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Absent: 12.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup Section (5 Cols) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] bg-slate-950 rounded-3xl p-3 border-4 border-slate-700 shadow-2xl relative">
                  {/* Speaker notch */}
                  <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700"></div>
                  </div>

                  {/* Phone Screen */}
                  <div className="bg-slate-900 rounded-2xl p-4 text-center border border-slate-800">
                    {/* Header in phone */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                      <span className="font-bold text-white flex items-center gap-1">
                        <Smartphone className="w-3 h-3 text-emerald-400" /> SMARTSCAN
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">08:15 AM</span>
                    </div>

                    {/* QR Code Container */}
                    <div className="bg-white p-3 rounded-xl inline-block shadow-inner mb-3 relative group">
                      <div className="w-32 h-32 bg-slate-900 rounded-lg p-2 flex items-center justify-center relative overflow-hidden">
                        {/* Realistic QR Pattern */}
                        <div className="grid grid-cols-6 gap-1 w-full h-full p-1 bg-white rounded">
                          {Array.from({ length: 36 }).map((_, i) => (
                            <div
                              key={i}
                              className={`rounded-xs ${
                                (i % 2 === 0 || i % 7 === 0 || i < 6 || i > 30) && i !== 14
                                  ? 'bg-slate-900'
                                  : 'bg-white'
                              }`}
                            />
                          ))}
                        </div>
                        {/* Laser Scan line effect */}
                        <div className="absolute inset-x-0 h-1 bg-emerald-500/80 shadow-[0_0_8px_#10b981] animate-bounce" />
                      </div>
                    </div>

                    {/* Green Attendance Recorded Badge from Poster */}
                    <div className="bg-emerald-600 text-white py-2 px-3 rounded-xl mb-2 flex items-center justify-center gap-1.5 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="text-xs font-black tracking-wide uppercase">
                        Attendance Recorded
                      </span>
                    </div>

                    <div className="bg-slate-800 py-1.5 px-3 rounded-lg border border-slate-700">
                      <span className="text-xs font-mono font-bold text-emerald-300">
                        CLASS CSC 101
                      </span>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        📍 Venue: Science Lab 2 • Verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tagline Banner from Poster */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-medium">
                  A practical, reliable, and secure digital solution for universities.
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">
                BOMESMARTSCAN v2.6 • BOMET UNIVERSITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
