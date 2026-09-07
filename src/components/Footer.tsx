import React from 'react';
import { SmartScanLogo } from './SmartScanLogo';
import { BometUniversityLogo } from './BometUniversityLogo';
import { Phone, Mail, Globe, MapPin, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPortal }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'hero' },
    { label: 'Features', id: 'key-features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Security', id: 'security' },
    { label: 'Impact', id: 'impact' },
    { label: 'Scalability', id: 'scalability' },
    { label: 'Demo', id: 'presentation-demo' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand, Tagline, and Affiliation (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SmartScanLogo size="md" variant="horizontal" />
            </div>

            {/* Exact Required Supporting Text */}
            <p className="text-sm font-semibold text-slate-200">
              Smart Digital Attendance & Campus Management Platform
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An intelligent, hardware-bound digital infrastructure replacing manual roll-calls with tamper-proof cryptographic QR verification and instant university analytics.
            </p>

            {/* Exact Required Affiliation Note */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
              <BometUniversityLogo size="sm" />
              <div>
                <span className="text-[11px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                  INSTITUTIONAL AFFILIATION
                </span>
                <span className="text-xs text-slate-200 font-medium">
                  Developed in affiliation with Bomet University
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Clean Platform Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="font-bold text-slate-200 tracking-wider uppercase block text-sm">
              Platform Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-emerald-400 transition-colors cursor-pointer text-xs"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenPortal}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors cursor-pointer flex items-center gap-1 mt-2"
                >
                  <span>Launch System / Login</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <span className="font-bold text-slate-200 tracking-wider uppercase block text-sm">
              Inquiries & Presentation Contact
            </span>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bomet University • Main Campus, Bomet, Kenya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>smartscan@bu.ac.ke • agabe4013@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+254 748 067 182 • +254 111 302 860</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-emerald-400">smartscan.bu.ac.ke</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 mt-4">
              <span className="text-amber-300 font-bold block mb-0.5">
                Exhibition Presentation:
              </span>
              24–26 September 2026 • University of Eldoret Sports Pavilion
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 <span className="text-white font-semibold">SMARTSCAN</span>. All rights reserved. Developed in affiliation with Bomet University.
          </p>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span>FAST</span>
            <span>•</span>
            <span>SECURE</span>
            <span>•</span>
            <span>SMART</span>
            <span>•</span>
            <span>SCALABLE</span>
            <span>•</span>
            <span>DATA-DRIVEN</span>
          </div>

          <p className="text-[11px] text-slate-400">
            Innovator: <span className="text-white font-medium">Agabe Kiprotich Ngeywo</span> • Mentor: <span className="text-white font-medium">Dr. Fredrick Odero</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
