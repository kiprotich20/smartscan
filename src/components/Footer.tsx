import React from 'react';
import { SmartScanLogo } from './SmartScanLogo';
import { BometUniversityLogo } from './BometUniversityLogo';
import { Phone, Mail, Globe, MapPin, Award, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Crest (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BometUniversityLogo size="md" />
              <div>
                <span className="font-extrabold text-lg text-white block">
                  BOMET UNIVERSITY
                </span>
                <span className="text-xs font-semibold text-emerald-400 italic block">
                  Green University for Sustainability
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <span className="text-white font-bold">SMARTSCAN (BOMESMARTSCAN)</span> is an institutional QR-based attendance management system transforming university lecture tracking through smart, secure, and eco-friendly digital innovation.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-wider font-bold text-amber-300 uppercase bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 inline-block">
                SCIENCE • TECHNOLOGY • INNOVATION • EDUCATION
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-slate-200 tracking-wider uppercase block text-sm">
              System Modules
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  System Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('problem-solution')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  The Problem & Solution
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('key-features')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  7 Key Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('interactive-system')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Live Attendance Simulator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-smartscan')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Why SmartScan & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('sustainability-impact')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Green Sustainability Impact
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('innovator-team')} className="hover:text-emerald-400 transition-colors cursor-pointer">
                  The Innovator & Event
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="font-bold text-slate-200 tracking-wider uppercase block text-sm">
              University Office & Support
            </span>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bomet University College, Bomet, Kenya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@bu.ac.ke | agabe4013@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+254 748 067 182 | +254 111 302 860</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-emerald-400">www.busmartscan.ac.ke</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 mt-4">
              <span className="text-emerald-300 font-bold block mb-0.5">
                Exhibition Event:
              </span>
              24 – 26 September 2026 • University of Eldoret Main Campus, Sports Pavilion
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 <span className="text-white font-semibold">BOMET UNIVERSITY</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span>SMARTER ATTENDANCE</span>
            <span>|</span>
            <span>STRONGER INSTITUTIONS</span>
            <span>|</span>
            <span>A SUSTAINABLE FUTURE</span>
          </div>

          <p className="text-[11px] text-slate-400">
            Innovator: <span className="text-white font-medium">Agabe Kiprotich Ngeywo</span> • Supervisor: <span className="text-white font-medium">Fredrick Odero</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
