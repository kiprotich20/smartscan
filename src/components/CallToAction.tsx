import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Building2,
  Calendar
} from 'lucide-react';
import { SmartScanLogo } from './SmartScanLogo';

interface CallToActionProps {
  onExploreDemo: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onExploreDemo }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    role: 'University Management',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', institution: '', role: 'University Management', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            {/* Left: Message & Action Buttons */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Steps for Institutions</span>
              </div>

              {/* Exact Requested Title */}
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready for Smarter Attendance Management?
              </h2>

              {/* Exact Requested Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Explore how SMARTSCAN can transform attendance management through secure, intelligent and efficient digital technology.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="cta-explore-demo-btn"
                  onClick={onExploreDemo}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all"
                >
                  <span>Contact Us</span>
                </a>
              </div>

              {/* Quick Institutional Contact Information */}
              <div className="pt-6 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Bomet University • Department of Computer Science</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Main Campus, Bomet, Kenya</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>smartscan@bu.ac.ke • innovation@bu.ac.ke</span>
                </div>
              </div>
            </div>

            {/* Right: Institutional Inquiry / Demo Request Form */}
            <div id="contact-form" className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-1">
                Institutional Partnership & Demo Request
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Connect with the SMARTSCAN development team for campus rollout discussions or innovation evaluations.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-700 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-emerald-200">
                    Thank you! The SMARTSCAN project team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Prof. David Koech"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Institution / University
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. Bomet University"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Institutional Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="University Management">University Management / Dean</option>
                        <option value="Lecturer / Academic Staff">Lecturer / Academic Staff</option>
                        <option value="Student Representative">Student Representative</option>
                        <option value="Innovation Judge / Partner">Innovation Judge / Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@university.ac.ke"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Message / Partnership Goal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details on your faculty size or scheduling questions..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
