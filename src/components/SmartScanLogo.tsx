import React from 'react';
import { BometUniversityLogo } from './BometUniversityLogo';
import { Scan, Sparkles } from 'lucide-react';

interface SmartScanLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'stacked' | 'badge' | 'co-brand';
  className?: string;
  showSubtitle?: boolean;
  lightText?: boolean;
}

export const SmartScanLogo: React.FC<SmartScanLogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  className = '',
  showSubtitle = true,
  lightText = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  // Co-branded badge: SMARTSCAN + Official Bomet University Crest
  if (variant === 'co-brand') {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        {/* Modern Tech Brand Icon */}
        <div className="relative flex items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-900/20">
            <Scan className="w-5 h-5 text-emerald-100 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
        </div>

        {/* Wordmark */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-tight leading-none ${textSizes} ${lightText ? 'text-white' : 'text-slate-900'}`}>
              SMART<span className="text-emerald-700">SCAN</span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
              PLATFORM
            </span>
          </div>
          {showSubtitle && (
            <span className={`text-[11px] font-semibold tracking-tight mt-0.5 ${lightText ? 'text-slate-300' : 'text-slate-600'}`}>
              Smart Digital Attendance & Campus Management
            </span>
          )}
        </div>

        {/* Institutional Crest Divider */}
        <div className="hidden sm:flex items-center pl-3 border-l border-slate-300/70 gap-2.5">
          <BometUniversityLogo size="sm" />
          <div className="text-left">
            <span className={`text-[10px] font-extrabold uppercase tracking-wider block ${lightText ? 'text-white' : 'text-slate-800'}`}>
              Bomet University
            </span>
            <span className="text-[9px] font-medium text-emerald-800 italic block">
              Green University for Sustainability
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2.5 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
            <Scan className="w-6 h-6 text-emerald-100" />
          </div>
          <BometUniversityLogo size="md" />
        </div>
        <div>
          <div className="flex items-center justify-center gap-1.5">
            <span className={`font-black text-2xl lg:text-3xl tracking-tight ${lightText ? 'text-white' : 'text-slate-900'}`}>
              SMART<span className="text-emerald-700">SCAN</span>
            </span>
          </div>
          {showSubtitle && (
            <p className="text-xs font-semibold text-emerald-800 tracking-wide mt-0.5">
              Smart Digital Attendance & Campus Management Platform
            </p>
          )}
          <p className="text-[11px] font-medium text-slate-500 mt-0.5">
            Bomet University Innovation
          </p>
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm ${iconSizes}`}>
        <Scan className="w-4/6 h-4/6 text-emerald-100" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-black tracking-tight leading-none ${textSizes} ${lightText ? 'text-white' : 'text-slate-900'}`}>
            SMART<span className="text-emerald-700">SCAN</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
            PLATFORM
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[11px] font-medium tracking-tight mt-1 ${lightText ? 'text-slate-300' : 'text-slate-600'}`}>
            Smart Digital Attendance & Campus Management Platform
          </span>
        )}
      </div>

      {/* Subtle University Badge */}
      <div className="hidden md:flex items-center ml-2 pl-3 border-l border-slate-200">
        <BometUniversityLogo size="sm" />
      </div>
    </div>
  );
};
