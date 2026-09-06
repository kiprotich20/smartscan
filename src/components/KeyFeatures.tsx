import React, { useState } from 'react';
import { 
  QrCode, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Layers, 
  Sparkles,
  Smartphone,
  Eye
} from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      id: 'qr-attendance',
      title: 'QR Code-Based Attendance',
      tagline: 'Fast and convenient attendance registration through QR scanning',
      icon: QrCode,
      color: 'emerald',
      officialSummary: 'Students use their camera or the SMARTSCAN web/mobile interface to scan a dynamic QR code projected on the lecturer’s screen or smart board. Scans register in under 3 seconds.',
      specs: [
        'Dynamic time-rotating QR tokens (refreshes every 15–30 seconds)',
        'Anti-screenshot watermarking to prevent QR code sharing via WhatsApp or Telegram',
        'Offline fallback caching with timestamp signing for intermittent connectivity',
        'Camera viewfinder with real-time barcode alignment guide',
      ],
      impact: 'Reduces lecture check-in time from 20 minutes to under 60 seconds for an entire class.',
    },
    {
      id: 'geofence',
      title: 'Geofence Technology',
      tagline: 'Ensures attendance is recorded only within approved campus locations',
      icon: MapPin,
      color: 'blue',
      officialSummary: 'Binds every attendance session to specific geographical coordinates (e.g. Bomet University Main Campus, Sports Pavilion, or Science Complex) using device GPS and Wi-Fi triangulation.',
      specs: [
        'Configurable radial fence (e.g., 25m, 50m, 100m) around lecture halls',
        'Real-time GPS coordinate validation against university lecture hall centroids',
        'Detection and blocking of mock GPS location spoofing applications',
        'Dual-layer verification combining IP subnet and device GPS precision',
      ],
      impact: 'Guarantees physical presence—students cannot mark attendance from hostels, cafes, or outside campus.',
    },
    {
      id: 'real-time-recording',
      title: 'Real-Time Recording',
      tagline: 'Attendance information captured instantly for efficient monitoring',
      icon: Clock,
      color: 'amber',
      officialSummary: 'As soon as a student scans, their name, registration number, course code, and exact millisecond timestamp appear on the lecturer’s live ledger display.',
      specs: [
        'Sub-second live streaming ledger updates via real-time sockets',
        'Automatic late classification based on lecturer grace period window (e.g. 10 mins)',
        'Instant duplicate scan prevention and audible/visual confirmation buzz',
        'Live percentage counter showing quota progress during roll call',
      ],
      impact: 'Lecturers see live headcount against registered roster instantaneously.',
    },
    {
      id: 'student-module',
      title: 'Student Management Module',
      tagline: 'Organize students by department, course, and academic year',
      icon: Users,
      color: 'indigo',
      officialSummary: 'Comprehensive academic directory tracking student profiles across schools (School of Science, Agribusiness, Computing, Education) with historical attendance logs.',
      specs: [
        'Directory organized by Department, Academic Year, and Program of Study',
        'Individual student attendance scorecards with percentage compliance indicators',
        'Automated threshold flags for students falling below the 75% exam sitting rule',
        'Self-service student portal to monitor personal attendance records',
      ],
      impact: 'Eliminates disputes over missed classes prior to semester examinations.',
    },
    {
      id: 'lecturer-module',
      title: 'Lecturer Management Module',
      tagline: 'Lecturers can create and manage attendance sessions easily',
      icon: GraduationCap,
      color: 'purple',
      officialSummary: 'Equips academic staff with intuitive session creation controls, timetable integration, attendance roster management, and manual override capabilities.',
      specs: [
        'One-click session launch for scheduled units (e.g., CSC 101, BCT 202)',
        'Session timer with automated closure when lecture commences',
        'Manual override toggle for excused medical absences or special approvals',
        'Direct notification broadcast to enrolled students regarding session start',
      ],
      impact: 'Saves lecturers an average of 45 hours of administrative overhead per academic year.',
    },
    {
      id: 'digital-records',
      title: 'Digital Records & Reports',
      tagline: 'Reduce paperwork and simplify attendance tracking and reporting',
      icon: FileSpreadsheet,
      color: 'emerald',
      officialSummary: 'Converts attendance paper clutter into audit-ready institutional reports. Generates instant PDF and Excel exports for Deans, HoDs, and Registrar Academic Affairs.',
      specs: [
        'Export formats: PDF official university seal transcripts and Excel/CSV sheets',
        'Department-wide comparison reports on student engagement and course participation',
        'Automated semester audit trails archived securely for academic accreditation',
        'Integration with University ERP (Enterprise Resource Planning) systems',
      ],
      impact: 'Eliminates 100% of attendance paperwork, saving reams of paper and administrative filing space.',
    },
    {
      id: 'secure-access',
      title: 'Secure Access & Integrity',
      tagline: 'Controlled access with authentication and session security',
      icon: ShieldCheck,
      color: 'rose',
      officialSummary: 'Multi-tiered institutional security protecting student privacy while enforcing single-device binding so one student cannot scan for another.',
      specs: [
        'Single active device binding (Hardware fingerprinting blocks credential sharing)',
        'Role-Based Access Control (RBAC) for Students, Lecturers, HoDs, and Admins',
        'Encrypted JWT session tokens with tamper-evident HMAC signatures',
        'Zero storage of intrusive biometric data; privacy-compliant architecture',
      ],
      impact: 'Completely eliminates proxy attendance and buddy punching with zero tolerance for fraud.',
    },
  ];

  const currentFeature = features[activeFeatureIndex];

  return (
    <section id="key-features" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Complete Feature Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The 7 Key Features of SMARTSCAN
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Engineered specifically for university environments to ensure fast, cheat-proof, and environmentally sustainable attendance management.
          </p>
        </div>

        {/* Feature Grid Overview (7 Cards matching poster bullets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isSelected = activeFeatureIndex === idx;

            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeatureIndex(idx)}
                className={`group rounded-2xl p-6 transition-all cursor-pointer border relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-emerald-700 text-white shadow-sm'
                          : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-700 mt-1">
                    {feature.tagline}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {feature.officialSummary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>{isSelected ? 'Currently Inspecting' : 'Click to Inspect'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-0.5'}`} />
                </div>
              </div>
            );
          })}

          {/* Institutional Integration card filling the 8th slot */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-800 to-green-950 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-700/80 flex items-center justify-center text-amber-300 mb-4 border border-emerald-600">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-300 uppercase block mb-1">
                INSTITUTIONAL DEPLOYMENT
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">
                Bomet University Standards
              </h3>
              <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                Fully tuned for high-density lecture theaters, laboratory cohorts, and outdoor pavilion events with zero downtime.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-700/60 text-xs font-semibold text-amber-300">
              SMART • SECURE • SCALABLE
            </div>
          </div>
        </div>

        {/* Interactive Feature Deep Dive Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Col: Feature Spotlight */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase mb-2">
                <span>Feature Spotlight #0{activeFeatureIndex + 1}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentFeature.title}
              </h3>
              <p className="text-sm font-semibold text-emerald-700 mt-1">
                {currentFeature.tagline}
              </p>
              <p className="text-sm text-slate-700 mt-4 leading-relaxed">
                {currentFeature.officialSummary}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Architecture & Specifications:
                </h4>
                <div className="space-y-2.5">
                  {currentFeature.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Practical Impact Showcase */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    OPERATIONAL OUTCOME
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                    Tested at Bomet University
                  </span>
                </div>

                <div className="text-xl font-bold text-white mb-4 leading-snug">
                  "{currentFeature.impact}"
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Security Rating:</span>
                    <span className="text-emerald-400 font-bold">Bank-Grade / Anti-Tamper</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Device Compatibility:</span>
                    <span className="text-emerald-400 font-bold">Android, iOS, Windows, Mac</span>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-slate-400">Deployment Status:</span>
                    <span className="text-emerald-400 font-bold">Ready for Institutional Rollout</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <span className="text-[11px] font-mono text-slate-400">
                    Module ID: BU-SMS-{currentFeature.id.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
