import React from 'react';
import { 
  ShieldCheck, 
  KeyRound, 
  Lock, 
  UserCheck, 
  Database, 
  CheckSquare, 
  FileCheck2, 
  ShieldAlert,
  Server,
  Fingerprint
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      title: 'Secure Authentication',
      description: 'Protects user accounts through multi-factor authentication, cryptographic passwords, and single-device session handshakes.',
      icon: KeyRound,
      spec: 'JWT + Institutional SSO'
    },
    {
      title: 'Session Management',
      description: 'Enforces strict session expiry, dynamic token rotation, and active session invalidation upon logout or timeout.',
      icon: Lock,
      spec: 'Auto-Expiring Sessions'
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description: 'Restricts permissions strictly across student, lecturer, head of department, and campus administrator tiers.',
      icon: UserCheck,
      spec: 'Granular Privilege Segregation'
    },
    {
      title: 'Protected Attendance Records',
      description: 'Stores attendance entries in encrypted database tables with tamper-detection checksums to prevent unauthorized alteration.',
      icon: Database,
      spec: 'AES-256 Storage Encryption'
    },
    {
      title: 'Validation of Attendance Sessions',
      description: 'Every session requires multi-point verification: lecturer authorization, dynamic QR seeds, and lecture hall GPS boundaries.',
      icon: CheckSquare,
      spec: 'Dual-Layer Validation'
    },
    {
      title: 'Controlled Administrative Access',
      description: 'Access to system configurations, bulk records, and academic policies is restricted to verified university administrative accounts.',
      icon: Server,
      spec: 'Supervised Admin Privileges'
    },
    {
      title: 'Audit-Friendly Digital Records',
      description: 'Comprehensive immutable event logs record creation, modification, and export actions for institutional compliance and audits.',
      icon: FileCheck2,
      spec: 'Complete Audit Trails'
    },
  ];

  return (
    <section id="security" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wider uppercase mb-3 border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Integrity & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built With Security in Mind
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            SMARTSCAN incorporates industry-standard security architectures to protect academic records, safeguard user privacy, and uphold verifiable institutional accountability.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full">
                      {pillar.spec}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Enforced by Default</span>
                </div>
              </div>
            );
          })}

          {/* Privacy & Anti-Tamper Commitment Box */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between border border-slate-800 shadow-md md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <Fingerprint className="w-4 h-4" />
                <span>DATA PRIVACY & REGULATORY COMPLIANCE</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Zero Intrusive Biometrics • Strict Privacy Protection
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                SMARTSCAN is intentionally designed to preserve student civil liberties. Rather than requiring expensive, intrusive facial recognition or fingerprint scanners that raise severe privacy and biometric data liability concerns, SMARTSCAN achieves ironclad verification through cryptographic device binding, GPS geofencing, and dynamic rotation tokens.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="font-mono text-emerald-400">Compliant with Kenya Data Protection Act (KDPA) standards</span>
              <span className="text-slate-300 font-medium">Academic Quality Assurance Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
