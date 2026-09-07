import React, { useState } from 'react';
import { SmartScanLogo } from './SmartScanLogo';
import { Menu, X, LogIn, Sparkles, Award, MapPin, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenPortal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about-project' },
    { label: 'Features', id: 'key-features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Security', id: 'security' },
    { label: 'Demo', id: 'presentation-demo' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Institutional Top Strip */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded text-[11px] font-bold text-emerald-300">
              <Award className="w-3 h-3 text-amber-300" /> BOMET UNIVERSITY
            </span>
            <span className="hidden sm:inline text-slate-400 font-medium text-[11px]">
              Green University for Sustainability
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline font-mono text-emerald-400 font-medium">
              Smart Digital Attendance & Campus Management Platform
            </span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-emerald-400" /> Bomet, Kenya
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="cursor-pointer" onClick={() => scrollTo('hero')}>
            <SmartScanLogo size="md" variant="horizontal" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-800 transition-colors cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs: Launch System / Login */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 px-3 py-2 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              See Live Demo
            </button>

            <button
              id="nav-launch-system-btn"
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <LogIn className="w-4 h-4 text-emerald-200" />
              <span>Launch System / Login</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onOpenPortal}
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm shadow-sm"
            >
              <LogIn className="w-4 h-4 text-emerald-200" />
              <span>Launch System / Portal Login</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs"
            >
              <span>Explore Interactive Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
