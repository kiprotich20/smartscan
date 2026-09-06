import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Globe, 
  Calendar, 
  MapPin, 
  Award, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { BometUniversityLogo } from './BometUniversityLogo';

export const InnovatorAndEvent: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', institution: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="innovator-team" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5 text-emerald-700" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Innovator & Project Leadership
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Pioneered at Bomet University by passionate innovators dedicated to digital transformation and academic integrity.
          </p>
        </div>

        {/* 3 Contact Cards (From Section: CONNECT WITH THE INNOVATOR on the poster) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: The Innovator */}
          <div className="rounded-3xl bg-white border-2 border-emerald-300 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xl shadow-sm">
                  AK
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    THE INNOVATOR
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight mt-1">
                    AGABE KIPROTICH NGEYWO
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    Innovator & Software Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <a
                  href="tel:+254111302860"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Telephone:</span>
                    <span className="font-mono font-bold text-slate-900">+254 111 302 860</span>
                  </div>
                </a>

                <a
                  href="mailto:agabe4013@gmail.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Direct Email:</span>
                    <span className="font-mono font-bold text-slate-900 truncate block">agabe4013@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Lead System Architect & Developer
              </span>
            </div>
          </div>

          {/* Card 2: Project Supervisor */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 text-amber-300 flex items-center justify-center font-bold text-xl shadow-sm">
                  FO
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-700 uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    PROJECT SUPERVISOR
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight mt-1">
                    FREDRICK ODERO
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    Project Supervisor • Bomet University
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <a
                  href="tel:+254720944192"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Telephone:</span>
                    <span className="font-mono font-bold text-slate-900">+254 720 944 192</span>
                  </div>
                </a>

                <a
                  href="mailto:fredrick.odero@bu.ac.ke"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Academic Email:</span>
                    <span className="font-mono font-bold text-slate-900 truncate block">fredrick.odero@bu.ac.ke</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Academic Quality & Research Oversight
              </span>
            </div>
          </div>

          {/* Card 3: Our Client / Institution */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <BometUniversityLogo size="sm" />
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    OUR CLIENT / INSTITUTION
                  </span>
                  <h3 className="text-lg font-black text-slate-900 leading-tight mt-1">
                    BOMET UNIVERSITY
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 italic">
                    Green University for Sustainability
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <a
                  href="tel:+254748067182"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">University Contact:</span>
                    <span className="font-mono font-bold text-slate-900">+254 748 067 182</span>
                  </div>
                </a>

                <a
                  href="mailto:info@bu.ac.ke"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Official Email:</span>
                    <span className="font-mono font-bold text-slate-900">info@bu.ac.ke</span>
                  </div>
                </a>

                <a
                  href="https://www.busmartscan.ac.ke"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-2 rounded-xl hover:bg-slate-50"
                >
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Web Portal:</span>
                    <span className="font-mono font-bold text-emerald-700 underline">www.busmartscan.ac.ke</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                Chartered Public University of Kenya
              </span>
            </div>
          </div>
        </div>

        {/* Exhibition & Event Banner (Direct from poster) */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-amber-300 border border-emerald-800 text-xs font-mono font-bold uppercase">
                <Calendar className="w-3.5 h-3.5" />
                <span>OFFICIAL EXHIBITION & DEMO EVENT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Presented at the Academic Innovation Showcase
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-start gap-3 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Event Dates:</span>
                    <span className="text-sm font-bold text-white font-mono">
                      24 – 26 September 2026
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block">Exhibition Venue:</span>
                    <span className="text-sm font-bold text-white">
                      University of Eldoret Main Campus, Sports Pavilion
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 mt-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase block mb-1">
                  OFFICIAL CONFERENCE THEME
                </span>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium italic">
                  "Promoting innovative climate-smart farmer-centered agribusiness for sustainable inclusive development."
                </p>
              </div>
            </div>

            {/* Right: Quick QR Scan to Learn More badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-slate-800/60 rounded-2xl border border-slate-700">
              <div className="bg-white p-4 rounded-2xl shadow-inner mb-3">
                <div className="w-28 h-28 bg-slate-900 rounded-lg p-2 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-white rounded">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xs ${
                          (i % 2 === 0 || i % 4 === 0 || i < 5 || i > 20) && i !== 12
                            ? 'bg-slate-900'
                            : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs font-black tracking-wider uppercase text-amber-300">
                Scan to Learn More
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                www.busmartscan.ac.ke
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Inquiries / Demonstration Booking Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase block mb-1">
              INSTITUTIONAL ROLLOUT & INQUIRIES
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Request a Pilot Demonstration for Your University
            </h3>
            <p className="text-xs text-slate-600 mt-1.5">
              Interested in deploying SMARTSCAN at your faculty, school, or institution? Send a direct message to the project team.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Message Sent to Agabe Kiprotich Ngeywo!
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Thank you for your interest. The Bomet University SMARTSCAN team will get back to you shortly at your registered email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    University / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. University of Eldoret"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@university.ac.ke"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Inquiry or Pilot Deployment Scope *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your student cohort size, department requirements, or deployment inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Institutional Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
