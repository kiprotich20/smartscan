import React, { useState } from 'react';
import { 
  X, 
  Scan, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Laptop,
  Building2,
  Lock,
  Sparkles
} from 'lucide-react';
import { BometUniversityLogo } from './BometUniversityLogo';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: (mode?: 'lecturer' | 'student') => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'lecturer' | 'admin'>('lecturer');
  const [sessionStarted, setSessionStarted] = useState(false);

  if (!isOpen) return null;

  const handleLaunch = () => {
    setSessionStarted(true);
    setTimeout(() => {
      setSessionStarted(false);
      onClose();
      if (selectedRole === 'student') {
        onOpenDemo('student');
      } else {
        onOpenDemo('lecturer');
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shadow-md">
            <Scan className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-slate-900 tracking-tight">
                SMART<span className="text-emerald-700">SCAN</span>
              </span>
              <span className="text-[10px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                PORTAL ACCESS
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Smart Digital Attendance & Campus Management Platform
            </p>
          </div>
        </div>

        {/* Institutional Affiliation Badge */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 mb-6">
          <div className="flex items-center gap-2.5">
            <BometUniversityLogo size="sm" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">
                Bomet University
              </span>
              <span className="text-[10px] text-emerald-800 font-medium italic block">
                Green University for Sustainability
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white text-emerald-800 border border-emerald-200 px-2 py-1 rounded-lg">
            SSO ACTIVE
          </span>
        </div>

        {/* Role Selector */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Simulation Role for Live Demo:
          </label>

          <div className="grid grid-cols-3 gap-2.5">
            {/* Lecturer */}
            <button
              onClick={() => setSelectedRole('lecturer')}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedRole === 'lecturer'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
              }`}
            >
              <GraduationCap className={`w-5 h-5 mb-2 ${selectedRole === 'lecturer' ? 'text-white' : 'text-slate-600'}`} />
              <div>
                <span className="text-xs font-bold block leading-tight">Lecturer</span>
                <span className={`text-[10px] block mt-0.5 ${selectedRole === 'lecturer' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Control Center
                </span>
              </div>
            </button>

            {/* Student */}
            <button
              onClick={() => setSelectedRole('student')}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedRole === 'student'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
              }`}
            >
              <Smartphone className={`w-5 h-5 mb-2 ${selectedRole === 'student' ? 'text-white' : 'text-slate-600'}`} />
              <div>
                <span className="text-xs font-bold block leading-tight">Student</span>
                <span className={`text-[10px] block mt-0.5 ${selectedRole === 'student' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Mobile Scanner
                </span>
              </div>
            </button>

            {/* Administrator */}
            <button
              onClick={() => setSelectedRole('admin')}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedRole === 'admin'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
              }`}
            >
              <ShieldCheck className={`w-5 h-5 mb-2 ${selectedRole === 'admin' ? 'text-white' : 'text-slate-600'}`} />
              <div>
                <span className="text-xs font-bold block leading-tight">Admin</span>
                <span className={`text-[10px] block mt-0.5 ${selectedRole === 'admin' ? 'text-emerald-100' : 'text-slate-500'}`}>
                  Campus Audit
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Selected Role Profile Summary */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-6 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Simulated User:</span>
            <span className="font-bold text-slate-900">
              {selectedRole === 'lecturer' && 'Eng. F. Odero (Computer Science)'}
              {selectedRole === 'student' && 'Agabe Kiprotich Ngeywo (BU/SC/2024/0012)'}
              {selectedRole === 'admin' && 'Academic Registrar • Bomet University'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Access Tier:</span>
            <span className="text-emerald-800 font-mono font-bold">
              {selectedRole === 'lecturer' && 'Full Session Control & Live Attendance'}
              {selectedRole === 'student' && 'QR Scanner, Geofence GPS & My Record'}
              {selectedRole === 'admin' && 'Cross-Campus Analytics & Accreditation'}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleLaunch}
          disabled={sessionStarted}
          className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          {sessionStarted ? (
            <span>Authorizing Secure Session...</span>
          ) : (
            <>
              <span>Launch {selectedRole.toUpperCase()} Simulation</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center mt-3">
          Session authorized with institutional OAuth & single-device security handshake.
        </p>
      </div>
    </div>
  );
};
