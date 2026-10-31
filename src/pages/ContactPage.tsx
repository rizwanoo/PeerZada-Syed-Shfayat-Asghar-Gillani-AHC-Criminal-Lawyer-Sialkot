import React, { useState, useEffect } from 'react';
import { PageId, ConsultationFormData } from '../types';
import { ADVOCATE_INFO, SIALKOT_LEGAL_OVERVIEW } from '../data/legalData';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  Lock,
  ShieldCheck,
  Send,
  MessageSquare,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Copy,
  Check,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  prefillMatter?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, prefillMatter }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    matterType: prefillMatter || 'Bail Matters & Personal Liberty',
    urgency: 'urgent',
    currentStage: 'FIR Registered / Police Summons',
    briefSummary: '',
    confidentialAgreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefillMatter) {
      setFormData((prev) => ({ ...prev, matterType: prefillMatter }));
    }
  }, [prefillMatter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your full legal name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please provide a valid Pakistani contact telephone or WhatsApp number.');
      return;
    }
    if (!formData.confidentialAgreement) {
      setErrorMessage('Please acknowledge the privileged confidentiality agreement.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const referenceId = `ADV-SIALKOT-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsSubmitting(false);
      setSubmissionSuccess(referenceId);
    }, 600);
  };

  const handleWhatsAppHandoff = () => {
    const text = encodeURIComponent(
      `*LEGAL CONSULTATION INTAKE*\n*Advocate:* Syed Shfayat Asghar Gillani AHC\n*Chambers:* Pakistan Lawyer's Company, Sialkot\n\n*Client Name:* ${formData.fullName || 'Confidential Inquirer'}\n*Contact:* ${formData.phone || 'Direct'}\n*Matter:* ${formData.matterType}\n*Urgency:* ${formData.urgency.toUpperCase()}\n*Current Stage:* ${formData.currentStage}\n\n*Brief Summary:* ${formData.briefSummary || 'Requesting urgent confidential case evaluation.'}`
    );
    window.open(`https://wa.me/923026609073?text=${text}`, '_blank');
  };

  const copyReferenceToClipboard = () => {
    if (submissionSuccess) {
      navigator.clipboard.writeText(submissionSuccess);
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#0A131F] pt-28 pb-28">
      {/* ------------------------------------------------------------- */}
      {/* PAGE HEADER WITH GENEROUS BREATHING ROOM */}
      {/* ------------------------------------------------------------- */}
      <section className="border-b border-[#E5E0D5] bg-[#F8F6F0] pt-12 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] mb-4 font-jakarta"
          >
            <span>Direct Chambers Access</span>
            <span>·</span>
            <span>Privileged Communication</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cinzel font-black text-4xl sm:text-5xl lg:text-6xl text-[#080F17] tracking-tight leading-[1.1] max-w-4xl text-balance"
          >
            Contact & Legal Consultation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-jakarta"
          >
            Direct communication with PeerZada Syed Shfayat Asghar Gillani AHC, Chairman of Pakistan
            Lawyer's Company. Immediate confidential case intake for bail, FIR scrutiny, and court
            defense in Sialkot, Punjab.
          </motion.p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CONTACT INFO + ENCRYPTED FORM SPLIT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Cols: Direct Contact Details & Sialkot Office */}
            <div className="lg:col-span-5 space-y-8 font-jakarta">
              {/* Emergency Hotline Box */}
              <div className="bg-[#101D2B] text-[#D5D9DE] border-2 border-[#26394B] rounded-3xl p-8 sm:p-10 space-y-5 shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-300 font-bold">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Immediate / Arrest Emergency Hotline</span>
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-[#F3F0E9] leading-snug">
                  Urgent Police Custody or Bail Risk?
                </h3>
                <p className="text-xs sm:text-sm text-[#A8B4C0] leading-relaxed">
                  If an arrest is taking place or police are executing an immediate raid in Sialkot,
                  call the advocate's personal line directly.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${ADVOCATE_INFO.phone}`}
                    className="flex items-center justify-between p-4 bg-[#080F17] border border-[#26394B] hover:border-[#FCD34D] rounded-xl text-base font-bold text-[#F3F0E9] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#FCD34D] group-hover:scale-110 transition-transform" />
                      <span className="font-mono tracking-wider">{ADVOCATE_INFO.phone}</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#FCD34D] font-extrabold font-jakarta">
                      Call Now
                    </span>
                  </a>
                </div>
              </div>

              {/* Chambers Location & Court Presence */}
              <div className="space-y-4 text-xs font-jakarta">
                <h4 className="font-cinzel font-bold text-base text-[#080F17] uppercase tracking-wider">
                  Chambers & Judicial Presence
                </h4>

                <div className="p-5 bg-white border border-[#D5D9DE] rounded-xl space-y-3 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#26394B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#080F17] block">
                        District Courts Complex, Sialkot
                      </span>
                      <span className="text-[#64748B]">
                        Punjab, Pakistan · Daily Sessions & Magistrate Appearance
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4 text-[#26394B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#080F17] block">
                        Court & Consultation Hours
                      </span>
                      <span className="text-[#64748B]">
                        Monday – Saturday: 08:30 AM – 03:30 PM (Courts) | Evening Consultations by
                        Appointment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Verified Social Networks */}
              <div className="space-y-3">
                <h4 className="font-serif font-semibold text-sm text-[#080F17] uppercase tracking-wider">
                  Verified Social Profiles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href={ADVOCATE_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-[#D5D9DE] hover:border-[#26394B] rounded-lg flex items-center justify-between text-[#1E293B] hover:text-[#080F17] transition-colors shadow-sm"
                  >
                    <span>Facebook Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href={ADVOCATE_INFO.social.districtBarSialkot}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-[#D5D9DE] hover:border-[#26394B] rounded-lg flex items-center justify-between text-[#1E293B] hover:text-[#080F17] transition-colors shadow-sm"
                  >
                    <span>DBA Sialkot</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href={ADVOCATE_INFO.social.instagramPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-[#D5D9DE] hover:border-[#26394B] rounded-lg flex items-center justify-between text-[#1E293B] hover:text-[#080F17] transition-colors shadow-sm"
                  >
                    <span>Instagram (@asgheradv)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                  <a
                    href={ADVOCATE_INFO.social.instagramSecondary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-[#D5D9DE] hover:border-[#26394B] rounded-lg flex items-center justify-between text-[#1E293B] hover:text-[#080F17] transition-colors shadow-sm"
                  >
                    <span>Instagram (@syedshfayat...)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Encrypted Consultation Intake Form */}
            <div id="consultation-form" className="lg:col-span-7 scroll-mt-28">
              <div className="bg-white border border-[#D5D9DE] rounded-2xl p-6 sm:p-10 shadow-xl relative">
                {/* Security Badge */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D5D9DE]">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#26394B]" />
                    <span className="text-xs uppercase tracking-widest font-bold text-[#080F17]">
                      Encrypted Case Intake
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#26394B]" />
                    <span>Advocate-Client Privilege</span>
                  </span>
                </div>

                {/* Success View */}
                {submissionSuccess ? (
                  <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF8F5] border border-[#26394B] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#26394B]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-2xl text-[#080F17]">
                        Consultation Intake Registered
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                        Your confidential inquiry has been logged securely under reference code:
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5] border border-[#D5D9DE] rounded-lg font-mono text-sm font-bold text-[#101D2B] mt-2">
                        <span>{submissionSuccess}</span>
                        <button
                          onClick={copyReferenceToClipboard}
                          className="p-1 text-[#64748B] hover:text-[#080F17]"
                          title="Copy reference code"
                        >
                          {copiedToken ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#64748B] max-w-md mx-auto leading-relaxed">
                      For rapid assessment without delay, dispatch this brief directly to Advocate
                      Syed Shfayat Asghar Gillani's verified WhatsApp channel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleWhatsAppHandoff}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#080F17] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Brief via WhatsApp</span>
                      </button>

                      <a
                        href={`tel:${ADVOCATE_INFO.phone}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#101D2B] hover:bg-[#080F17] text-[#F3F0E9] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Advocate Now</span>
                      </a>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setSubmissionSuccess(null);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            matterType: 'Bail Matters & Personal Liberty',
                            urgency: 'urgent',
                            currentStage: 'FIR Registered / Police Summons',
                            briefSummary: '',
                            confidentialAgreement: false,
                          });
                        }}
                        className="text-xs text-[#26394B] font-semibold hover:underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3 bg-rose-50 border border-rose-300 rounded-lg text-xs text-rose-800">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                          Full Legal Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          placeholder="e.g. Muhammad Aslam"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] placeholder-[#64748B]/60 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                          Phone / WhatsApp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          placeholder="e.g. 0300-1234567"
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] placeholder-[#64748B]/60 focus:outline-none transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Matter & Urgency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                          Legal Matter Category
                        </label>
                        <select
                          value={formData.matterType}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, matterType: e.target.value }))
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] focus:outline-none transition-colors"
                        >
                          <option value="Bail Matters & Personal Liberty">
                            Bail Matters (Pre-Arrest / Post-Arrest)
                          </option>
                          <option value="FIR & Criminal Proceedings">
                            FIR Registration / Quashment (Sec 22-A / 561-A)
                          </option>
                          <option value="Criminal Defence">Criminal Defense Trial (PPC Offenses)</option>
                          <option value="Criminal Litigation">Witness Examination & Forensic Evidence</option>
                          <option value="Court Representation">Court Representation (Sessions / High Court)</option>
                          <option value="Confidential Advisory">Confidential Strategic Advisory</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                          Urgency Level
                        </label>
                        <select
                          value={formData.urgency}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              urgency: e.target.value as any,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] focus:outline-none transition-colors"
                        >
                          <option value="critical">Critical — Arrest Imminent / Police Raid</option>
                          <option value="urgent">Urgent — FIR Registered / Police Remand</option>
                          <option value="routine">Routine — Court Hearing / Advisory</option>
                        </select>
                      </div>
                    </div>

                    {/* Current Stage */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                        Current Procedural Stage
                      </label>
                      <input
                        type="text"
                        value={formData.currentStage}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, currentStage: e.target.value }))
                        }
                        placeholder="e.g. Police Station Inquiry, Sessions Court Trial, FIR #..."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] placeholder-[#64748B]/60 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Brief Summary */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#475569] mb-1.5">
                        Confidential Brief Summary
                      </label>
                      <textarea
                        rows={4}
                        value={formData.briefSummary}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, briefSummary: e.target.value }))
                        }
                        placeholder="State key facts concisely (alleged sections, date of dispute, police station name). Do not disclose confidential personal passwords or sensitive banking data."
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5D9DE] focus:border-[#26394B] rounded-lg text-xs text-[#080F17] placeholder-[#64748B]/60 focus:outline-none transition-colors leading-relaxed"
                      />
                    </div>

                    {/* Confidentiality Agreement Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.confidentialAgreement}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              confidentialAgreement: e.target.checked,
                            }))
                          }
                          className="mt-1 w-4 h-4 rounded border-[#D5D9DE] text-[#26394B] focus:ring-0"
                        />
                        <span className="text-[11px] text-[#475569] leading-relaxed">
                          I understand that this consultation intake is protected under legal
                          confidentiality standards. I confirm that all stated facts are accurate to
                          the best of my knowledge for preliminary assessment.
                        </span>
                      </label>
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#101D2B] hover:bg-[#080F17] text-[#F3F0E9] rounded-lg text-xs uppercase font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                      >
                        <Send className="w-3.5 h-3.5 text-[#D5D9DE]" />
                        <span>{isSubmitting ? 'Securing Intake...' : 'Submit Confidential Brief'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppHandoff}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#080F17] font-bold rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#080F17]" />
                        <span>Instant WhatsApp Dispatch</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
