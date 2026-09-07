import React from 'react';
import { 
  Award, 
  GraduationCap, 
  User, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2,
  Building2,
  BookOpen
} from 'lucide-react';
import { BometUniversityLogo } from './BometUniversityLogo';

export const AboutProject: React.FC = () => {
  return (
    <section id="about-project" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Academic & Innovation Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About the SMARTSCAN Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conceived and developed at Bomet University to pioneer paperless, fraud-proof digital attendance and campus operations in Kenya and East Africa.
          </p>
        </div>

        {/* 4-Item Grid of Core Project Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Project Identity */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full block w-fit mb-3">
                PROJECT BRAND
              </span>
              <h3 className="text-xl font-black text-slate-900">
                SMARTSCAN
              </h3>
              <p className="text-xs text-emerald-800 font-bold mt-1">
                BOMESMARTSCAN Platform
              </p>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                A scalable digital class attendance & smart campus management ecosystem engineered with hardware-bound cryptographic security and real-time synchronization.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
              Version: 3.0 Production Ready
            </div>
          </div>

          {/* Institution */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full block w-fit mb-3">
                HOST INSTITUTION
              </span>
              <div className="flex items-center gap-3 mb-2">
                <BometUniversityLogo size="sm" />
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  Bomet University
                </h3>
              </div>
              <p className="text-xs text-emerald-800 font-semibold italic">
                Green University for Sustainability
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                A premier Kenyan public chartered university dedicated to science, technology, environmental sustainability, and digital innovation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" /> Bomet, Kenya
            </div>
          </div>

          {/* Lead Innovator */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full block w-fit mb-3">
                DEVELOPER & INNOVATOR
              </span>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  AK
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    Agabe Kiprotich Ngeywo
                  </h3>
                  <span className="text-[11px] text-emerald-800 font-medium">Software Engineer & Innovator</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Lead architect and full-stack software engineer responsible for SMARTSCAN’s cryptographic token logic, mobile PWA scanner, and server-side engine.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
              Reg: BU/SC/2024/0012
            </div>
          </div>

          {/* Academic Mentor */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full block w-fit mb-3">
                PROJECT MENTOR
              </span>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
                  FO
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    Dr. Fredrick Odero
                  </h3>
                  <span className="text-[11px] text-emerald-800 font-medium">Academic Supervisor & Mentor</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Senior academic supervisor providing methodological direction, institutional validation, and academic compliance guidance for university deployment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              School of Science & Computing
            </div>
          </div>
        </div>

        {/* Exhibition & Presentation Details Banner */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase">
              <Calendar className="w-4 h-4" />
              <span>OFFICIAL INNOVATION DEMONSTRATION & EXHIBITION</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              University of Eldoret Main Campus • Sports Pavilion
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Presented at the National Science, Technology, Innovation & Education Exhibition: 24th – 26th September 2026.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-center">
              <span className="text-xs text-slate-400 block font-mono">Date</span>
              <span className="text-sm font-bold text-amber-300 font-mono">24–26 Sept 2026</span>
            </div>
            <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-center">
              <span className="text-xs text-slate-400 block font-mono">Location</span>
              <span className="text-sm font-bold text-white">Eldoret, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
