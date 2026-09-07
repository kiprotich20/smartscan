import React, { useState } from 'react';
import { 
  QrCode, 
  ShieldCheck, 
  Clock, 
  Users, 
  GraduationCap, 
  Building2, 
  BarChart3, 
  FileSpreadsheet, 
  Lock, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const features = [
    {
      id: 'qr-attendance',
      number: '01',
      title: 'QR-Based Attendance',
      summary: 'Students can scan a generated QR code to record attendance quickly.',
      icon: QrCode,
      details: [
        'Dynamic auto-rotating QR seed to block screenshots shared across messaging apps',
        'Camera viewfinder with instant optical barcode detection (<3 seconds per scan)',
        'Zero specialized hardware required; operates on any standard mobile browser',
        'Visual and audible check-in verification feedback'
      ],
      impact: 'Reduces roll-call overhead by 90%, taking less than a minute for a full lecture cohort.',
      badge: 'Touchless & Fast'
    },
    {
      id: 'secure-authentication',
      number: '02',
      title: 'Secure Authentication',
      summary: 'Protect accounts and attendance records using secure authentication mechanisms.',
      icon: ShieldCheck,
      details: [
        'Institutional Single Sign-On (SSO) integration with university credentials',
        'Cryptographic session tokens with HMAC tamper-evident verification',
        'Multi-factor security verification for academic staff and administrative personnel',
        'Encrypted database storage complying with student privacy and academic data policies'
      ],
      impact: 'Prevents unauthorized access to university records and safeguards student data.',
      badge: 'Enterprise Security'
    },
    {
      id: 'real-time-tracking',
      number: '03',
      title: 'Real-Time Attendance Tracking',
      summary: 'Lecturers can monitor attendance as it happens.',
      icon: Clock,
      details: [
        'Sub-second live streaming ledger updates on the lecturer’s screen as students scan',
        'Real-time attendance progress bar measuring active headcount against registered roster',
        'Instant late categorization based on customizable grace period timers',
        'Immediate notification of anomalous or duplicate scanning attempts'
      ],
      impact: 'Provides lecturers with immediate classroom headcount verification with zero delay.',
      badge: 'Live Stream'
    },
    {
      id: 'student-management',
      number: '04',
      title: 'Student Management',
      summary: 'Manage student profiles, departments, courses and academic information.',
      icon: Users,
      details: [
        'Comprehensive directory organized by School, Department, Degree Program, and Year',
        'Student profile dashboards tracking cumulative attendance percentage per unit',
        'Automated warning triggers for students at risk of falling below attendance thresholds',
        'Self-service student portal for checking personal attendance compliance'
      ],
      impact: 'Eliminates disputes over class attendance prior to semester examinations.',
      badge: 'Student Directory'
    },
    {
      id: 'lecturer-dashboard',
      number: '05',
      title: 'Lecturer Dashboard',
      summary: 'Provide lecturers with an easy-to-use interface for managing classes and attendance.',
      icon: GraduationCap,
      details: [
        'One-click session launch for scheduled timetable units (e.g. CSC 101, BCT 202)',
        'Interactive session controls: Start, Pause, Grace Period, and Session Close',
        'Manual override toggle for verified medical absences or university assignments',
        'Instant CSV and PDF class roster export formatted for university department submissions'
      ],
      impact: 'Saves lecturers an estimated 45 hours of tedious administration each academic year.',
      badge: 'Lecturer Portal'
    },
    {
      id: 'admin-dashboard',
      number: '06',
      title: 'Admin Dashboard',
      summary: 'Administrators can manage users, departments, courses and system activities.',
      icon: Building2,
      details: [
        'Centralized oversight across all faculties, lecture halls, and academic departments',
        'Course allocation, lecturer assignment, and academic calendar configuration',
        'Campus-wide activity audit logs and security monitoring telemetry',
        'Bulk user import/export supporting University Enterprise Resource Planning (ERP) sync'
      ],
      impact: 'Gives Deans and Registrars comprehensive institutional visibility in a single click.',
      badge: 'Campus Control'
    },
    {
      id: 'attendance-analytics',
      number: '07',
      title: 'Attendance Analytics',
      summary: 'Generate meaningful attendance statistics and insights.',
      icon: BarChart3,
      details: [
        'Longitudinal attendance trend graphs across semesters and academic cohorts',
        'Department-level comparison charts highlighting participation rates',
        'Predictive risk modeling to detect student dropout patterns early',
        'High-density visual charts formatted for Academic Board presentations'
      ],
      impact: 'Empowers university leadership to make evidence-based policy and curriculum decisions.',
      badge: 'Data Intelligence'
    },
    {
      id: 'digital-records',
      number: '08',
      title: 'Digital Attendance Records',
      summary: 'Replace manual paperwork with centralized digital records.',
      icon: FileSpreadsheet,
      details: [
        'Permanent cloud-backed attendance archives accessible anytime, anywhere',
        'Tamper-proof digital ledger eliminating lost physical attendance sheets',
        'One-click official PDF transcript generation with institutional watermarking',
        'Full compliance with university accreditation and academic quality assurance criteria'
      ],
      impact: 'Replaces 100% of attendance paperwork, saving university reams of paper and storage costs.',
      badge: 'Paperless System'
    },
    {
      id: 'anti-fraud-controls',
      number: '09',
      title: 'Anti-Fraud Controls',
      summary: 'Include mechanisms designed to reduce attendance manipulation and proxy attendance.',
      icon: Lock,
      details: [
        'Hardware-level single device binding preventing students from logging into absent peers’ phones',
        'GPS geofence radius restriction ensuring scans only succeed within approved venues',
        'Time-expiring cryptographic tokens preventing remote QR sharing via screenshots',
        'Intelligent duplicate detection instantly flagging simultaneous scan attempts'
      ],
      impact: 'Restores complete trust in university attendance registers with zero proxy signing.',
      badge: 'Fraud Prevention'
    },
    {
      id: 'responsive-platform',
      number: '10',
      title: 'Responsive Platform',
      summary: 'Ensure SMARTSCAN works effectively across phones, tablets and computers.',
      icon: Smartphone,
      details: [
        'Progressive web architecture optimized for Android smartphones, iPhones, and tablets',
        'Adaptive desktop layouts tailored for lecture hall projectors and PC workstations',
        'Lightweight data footprint designed to run smoothly on low-bandwidth 3G/4G campus Wi-Fi',
        'Accessible, high-contrast user interface meeting modern accessibility guidelines'
      ],
      impact: 'Enables every student and lecturer to participate seamlessly regardless of device type.',
      badge: 'Cross-Device'
    },
  ];

  const currentFeature = features[selectedFeatureIndex];
  const CurrentIcon = currentFeature.icon;

  return (
    <section id="key-features" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Features of SMARTSCAN
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ten core capabilities built specifically to transform attendance management from a tedious manual chore into a seamless, intelligent digital operation.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const isSelected = selectedFeatureIndex === idx;

            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeatureIndex(idx)}
                className={`rounded-2xl p-5 transition-all cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-700 shadow-md ring-2 ring-emerald-600/20'
                    : 'bg-white hover:bg-slate-50/90 border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-emerald-50 text-emerald-800 group-hover:bg-emerald-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {feat.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                    {feat.summary}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-800">
                  <span>{isSelected ? 'Selected' : 'Inspect'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-emerald-700' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Spotlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Specification Details */}
            <div className="lg:w-7/12">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase mb-2">
                <span>Feature Spotlight • {currentFeature.number} of 10</span>
                <span className="text-slate-300">|</span>
                <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900 font-sans">
                  {currentFeature.badge}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-sm">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentFeature.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-700 mt-3 leading-relaxed">
                {currentFeature.summary}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  System Architecture & Capabilities:
                </h4>
                <div className="space-y-2.5">
                  {currentFeature.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Operational Impact & Enterprise Metric */}
            <div className="lg:w-5/12 w-full">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 text-white relative overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    OPERATIONAL OUTCOME
                  </span>
                  <span className="text-[11px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                    Campus-Ready
                  </span>
                </div>

                <div className="text-lg font-bold text-white mb-4 leading-snug">
                  "{currentFeature.impact}"
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Implementation:</span>
                    <span className="text-emerald-400 font-bold">Core Production Module</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Data Integrity:</span>
                    <span className="text-emerald-400 font-bold">Audit-Certified</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Scalability Scope:</span>
                    <span className="text-emerald-400 font-bold">University-Wide Deployment</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SMARTSCAN PLATFORM</span>
                  <span className="text-emerald-400">BU-FEAT-{currentFeature.number}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
