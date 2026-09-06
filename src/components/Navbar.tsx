import React, { useState } from 'react';
import { SmartScanLogo } from './SmartScanLogo';
import { QrCode, Menu, X, Sparkles, MapPin, Award } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Institutional Top Ribbon */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-900 text-white py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-900/60 px-2 py-0.5 rounded text-[11px] font-semibold text-emerald-200">
              <Award className="w-3 h-3 text-amber-300" /> BOMET UNIVERSITY
            </span>
            <span className="hidden sm:inline text-emerald-200 font-medium">
              Green University for Sustainability
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-emerald-100">
            <span className="hidden md:inline font-mono tracking-wider font-semibold text-amber-300">
              SCIENCE • TECHNOLOGY • INNOVATION • EDUCATION
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-200">
              <MapPin className="w-3 h-3 text-amber-300" /> Bomet, Kenya
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Crest */}
          <div className="cursor-pointer" onClick={() => scrollTo('hero')}>
            <SmartScanLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollTo('problem-solution')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Problem & Solution
            </button>
            <button
              onClick={() => scrollTo('key-features')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Key Features
            </button>
            <button
              onClick={() => scrollTo('interactive-system')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live System Preview
            </button>
            <button
              onClick={() => scrollTo('why-smartscan')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Why SmartScan
            </button>
            <button
              onClick={() => scrollTo('sustainability-impact')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              Green Impact
            </button>
            <button
              onClick={() => scrollTo('innovator-team')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              The Innovator
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-launch-demo-btn"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <QrCode className="w-4 h-4 text-emerald-200" />
              <span>Launch Demo Simulator</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button
            onClick={() => scrollTo('problem-solution')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Problem & Solution
          </button>
          <button
            onClick={() => scrollTo('key-features')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Key Features
          </button>
          <button
            onClick={() => scrollTo('interactive-system')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 flex items-center justify-between"
          >
            <span>Live System Preview</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Interactive</span>
          </button>
          <button
            onClick={() => scrollTo('why-smartscan')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Why SmartScan
          </button>
          <button
            onClick={() => scrollTo('sustainability-impact')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            Green Impact
          </button>
          <button
            onClick={() => scrollTo('innovator-team')}
            className="block w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
          >
            The Innovator & Event
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 text-white font-bold text-base shadow-sm"
            >
              <QrCode className="w-5 h-5 text-emerald-200" />
              <span>Launch Demo Simulator</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
