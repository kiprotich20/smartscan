import React from 'react';
import { BometUniversityLogo } from './BometUniversityLogo';

interface SmartScanLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'stacked' | 'badge';
  className?: string;
  showSubtitle?: boolean;
}

export const SmartScanLogo: React.FC<SmartScanLogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  className = '',
  showSubtitle = true,
}) => {
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        <BometUniversityLogo size={size === 'lg' ? 'lg' : 'md'} />
        <div>
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-extrabold text-2xl lg:text-3xl tracking-tight text-slate-900">
              SMART<span className="text-emerald-600">SCAN</span>
            </span>
            <span className="inline-flex items-center justify-center w-6 h-6 rounded border-2 border-emerald-600 text-emerald-700 font-mono text-xs font-bold bg-emerald-50">
              [•]
            </span>
          </div>
          {showSubtitle && (
            <p className="text-[11px] font-bold tracking-widest text-emerald-800 uppercase mt-0.5">
              Smart • Secure • Scalable
            </p>
          )}
          <p className="text-[10px] font-medium text-slate-500 mt-0.5">
            Bomet University (BOMESMARTSCAN)
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 bg-white/90 backdrop-blur border border-emerald-200/80 px-4 py-2 rounded-2xl shadow-sm ${className}`}>
        <BometUniversityLogo size="sm" />
        <div className="border-l border-emerald-200 pl-3">
          <div className="flex items-center gap-1">
            <span className="font-extrabold text-sm tracking-tight text-slate-900">
              BOMET UNIVERSITY <span className="text-emerald-600">SMARTSCAN</span>
            </span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 block">
            Digital Class Attendance System
          </span>
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <BometUniversityLogo size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-black text-xl lg:text-2xl tracking-tight text-slate-900 leading-none">
            SMART<span className="text-emerald-600">SCAN</span>
          </span>
          <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded border border-emerald-500/80 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold">
            QR
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase">
              Smart • Secure • Scalable
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[10px] text-slate-500 font-medium hidden sm:inline">
              Bomet University
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
