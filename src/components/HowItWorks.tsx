import React, { useState } from 'react';
import { 
  LogIn, 
  PlayCircle, 
  Scan, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Smartphone, 
  Laptop, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      title: 'Student Login',
      summary: 'Student securely accesses SMARTSCAN.',
      icon: LogIn,
      description: 'The student opens the SMARTSCAN web application on their phone and signs in using their official university credentials. The device fingerprint is authenticated to ensure single-device integrity.',
      deviceLabel: 'Student Mobile Interface',
      mockupData: {
        header: 'SMARTSCAN Student Portal',
        badge: 'AUTHENTICATED',
        details: [
          { label: 'Student', val: 'Agabe Kiprotich Ngeywo' },
          { label: 'Reg No', val: 'BU/SC/2024/0012' },
          { label: 'Course', val: 'BSc Computer Science' },
          { label: 'Status', val: 'Ready to Scan' }
        ]
      }
    },
    {
      stepNumber: '02',
      title: 'Lecturer Starts Session',
      summary: 'Lecturer creates or activates an attendance session.',
      icon: PlayCircle,
      description: 'The lecturer logs into their control dashboard on the classroom PC or laptop, chooses the scheduled course unit (e.g. CSC 101), sets the grace period, and projects the live dynamic QR code.',
      deviceLabel: 'Lecturer Smart Board / Projector',
      mockupData: {
        header: 'Classroom Control Console',
        badge: 'SESSION ACTIVE',
        details: [
          { label: 'Unit Code', val: 'CSC 101: Systems Design' },
          { label: 'Venue', val: 'Science Complex, Lab 2' },
          { label: 'Geofence', val: '50m Radius GPS Enforced' },
          { label: 'QR Status', val: 'Live & Rotating Every 20s' }
        ]
      }
    },
    {
      stepNumber: '03',
      title: 'Student Scans QR',
      summary: 'Student scans the QR code using the SMARTSCAN interface.',
      icon: Scan,
      description: 'The student taps "Scan QR" inside the SMARTSCAN interface. The camera immediately detects the projected token while background GPS validates physical proximity within the lecture hall.',
      deviceLabel: 'Student Smartphone Viewfinder',
      mockupData: {
        header: 'Camera Optical Barcode Scanner',
        badge: 'GEOFENCE LOCKED',
        details: [
          { label: 'Token', val: 'BU-SEC-8942-X (Valid)' },
          { label: 'GPS Precision', val: 'Latitude -0.7812, Longitude 35.3421' },
          { label: 'Distance', val: '8.4m from Lecturer Beacon' },
          { label: 'Verification', val: 'Hardware Handshake Passed' }
        ]
      }
    },
    {
      stepNumber: '04',
      title: 'Attendance Recorded',
      summary: 'The system securely records and updates attendance instantly.',
      icon: CheckCircle2,
      description: 'In less than 3 seconds, attendance is cryptographically registered into the cloud database. The student receives a digital check-in receipt and the lecturer’s screen updates live.',
      deviceLabel: 'Real-Time Synchronized Ledger',
      mockupData: {
        header: 'Attendance Receipt & Ledger',
        badge: 'CONFIRMED & FILED',
        details: [
          { label: 'Timestamp', val: 'Today, 08:14:22.418 AM' },
          { label: 'Attendance', val: 'Present (On-Time)' },
          { label: 'Sem 1 Total', val: '88.2% (Exam Eligible)' },
          { label: 'Audit Hash', val: 'sha256:7f9a12c8...verified' }
        ]
      }
    },
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SMARTSCAN Works in 4 Simple Steps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From session initiation to instant cloud synchronization, experience the fastest, most reliable class attendance workflow.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={s.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between relative group ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      STEP {s.stepNumber}
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-emerald-700 text-white' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`text-base font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {s.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                    {s.summary}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-bold flex items-center justify-between ${
                  isActive ? 'border-slate-800 text-emerald-400' : 'border-slate-200 text-emerald-800'
                }`}>
                  <span>{isActive ? 'Active Step' : 'Click to inspect'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Visualizer Panel */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-9 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Step Explanation */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <span>Detailed Walkthrough</span>
                <span className="text-slate-600">•</span>
                <span>Step {currentStep.stepNumber} of 04</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                    {currentStep.summary}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {currentStep.description}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Duration: &lt; 3 Seconds</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Security: Tamper-Proof</span>
                </div>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center gap-2 pt-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeStep === i ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Mockup Display */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs">
                  <span className="font-mono text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {currentStep.deviceLabel}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-0.5 rounded text-[10px]">
                    {currentStep.mockupData.badge}
                  </span>
                </div>

                <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-white block">
                    {currentStep.mockupData.header}
                  </span>

                  <div className="space-y-2 text-xs">
                    {currentStep.mockupData.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex justify-between items-center py-1 border-b border-slate-800/60 last:border-0">
                        <span className="text-slate-400 font-mono text-[11px]">{d.label}:</span>
                        <span className="font-semibold text-white text-right">{d.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SMARTSCAN PROTOCOL v3.0</span>
                  <span className="text-emerald-400">STATE: SYNCHRONIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
