import React, { useState } from 'react';
import { PageId } from '../types';
import { ADVOCATE_INFO, SIALKOT_LEGAL_OVERVIEW } from '../data/legalData';
import { motion } from 'motion/react';
import {
  Scale,
  ShieldCheck,
  MapPin,
  Phone,
  ArrowRight,
  ExternalLink,
  Award,
  BookOpen,
  Youtube,
  Landmark,
  UserCheck,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#0A131F] pt-28 pb-28">
      {/* ------------------------------------------------------------- */}
      {/* EDITORIAL HERO: ADVOCATE PROFILE WITH GENEROUS BREATHING ROOM */}
      {/* ------------------------------------------------------------- */}
      <section className="border-b border-[#E5E0D5] bg-[#F8F6F0] pt-16 pb-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] font-extrabold text-[#C5A880] mb-6 font-jakarta"
          >
            <span className="px-3 py-1 bg-[#0A131F] text-[#FCD34D] rounded-md">Official Profile</span>
            <span>·</span>
            <span>Advocate High Court (AHC)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cinzel font-black text-4xl sm:text-5xl lg:text-6xl text-[#0A131F] tracking-tight leading-[1.1] max-w-5xl text-balance"
          >
            PeerZada SYED SHFAYAT ASGHAR GILLANI AHC
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#475569] font-jakarta"
          >
            <span className="text-[#0A131F] font-extrabold">Chairman — Pakistan Lawyer's Company</span>
            <span>·</span>
            <span>Criminal Lawyer & Advocate</span>
            <span>·</span>
            <span>Sialkot, Punjab, Pakistan</span>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ASYMMETRIC BIOGRAPHY & VIVID PHOTOGRAPH COMPOSITION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-[#D5D9DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left 5 Cols: Crisp Framed Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="relative border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl overflow-hidden bg-white shadow-xl transition-all">
                <img
                  src={ADVOCATE_INFO.courtRobePhoto || '/about_advocate.jpg'}
                  alt="PeerZada Syed Shfayat Asghar Gillani AHC in High Court advocate robes"
                  className="w-full aspect-[4/5] object-cover object-top filter brightness-[1.03] contrast-[1.02] hover:scale-[1.02] transition-transform duration-500"
                  onError={() => {
                    if (!imageError) setImageError(true);
                  }}
                />

                <div className="p-4 bg-white border-t border-[#D5D9DE] text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-[#080F17]">
                      PeerZada Syed Shfayat Asghar Gillani
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] font-bold px-2 py-0.5 bg-[#080F17] rounded">
                      Court Robes
                    </span>
                  </div>
                  <div className="text-[11px] text-[#475569]">
                    Advocate High Court · Al Syed Chambers, Sialkot
                  </div>
                </div>
              </div>

              {/* Bar Association affiliation & Lineage */}
              <div className="bg-white border border-[#D5D9DE] rounded-xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#26394B]">
                  <ShieldCheck className="w-4 h-4 text-[#26394B]" />
                  <span>Institutional Credentials</span>
                </div>
                <div className="space-y-2 text-xs text-[#475569]">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1E293B]">
                      Son of: <strong>{ADVOCATE_INFO.fatherName}</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1E293B]">
                      Roots: <strong>{ADVOCATE_INFO.ancestralHouse}</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1E293B]">
                      {ADVOCATE_INFO.barCouncilEnrollment}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1E293B]">
                      Chairman, Pakistan Lawyer's Company
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-1.5 shrink-0" />
                    <span className="font-medium text-[#1E293B]">
                      Member, District Bar Association Sialkot (DBA Sialkot)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right 7 Cols: Narrative & Practice Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 space-y-8 leading-relaxed text-[#101D2B]"
            >
              <div className="space-y-5">
                <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] font-jakarta">
                  Professional Background & Heritage
                </span>
                <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17] leading-tight tracking-tight">
                  Dedicated Criminal Defense in Sialkot, Punjab
                </h2>
                <p className="text-base sm:text-lg drop-cap-ivory font-jakarta leading-relaxed">
                  PeerZada Syed Shfayat Asghar Gillani is a recognized criminal advocate in Sialkot,
                  Punjab. As Chairman of <strong>Pakistan Lawyer's Company</strong>, his legal work
                  is defined by an exacting approach to criminal jurisprudence, unwavering loyalty to
                  the legal interests of his clients, and profound respect for the administration of
                  justice in Pakistan.
                </p>
                <p className="text-sm sm:text-base text-[#334155] font-jakarta leading-loose">
                  Hailing from the respected Gillani Syed family of Al Syed House, Pasrur (Sialkot
                  District), Advocate Gillani brings a deep heritage of community responsibility and
                  principled public advocacy. In the criminal courtrooms of Sialkot and the superior
                  appellate benches of Lahore, the stakes of an indictment are absolute. An accusation
                  under the Pakistan Penal Code (PPC) can disrupt entire families and jeopardize
                  fundamental liberties.
                </p>
              </div>

              {/* Storytelling Timeline Milestones */}
              <div className="space-y-6 pt-4">
                <h3 className="font-cinzel font-bold text-2xl text-[#080F17] tracking-tight">
                  Milestones of Service & Advocacy
                </h3>
                <div className="space-y-4">
                  {ADVOCATE_INFO.storyMilestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl shadow-sm transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-playfair font-bold text-lg text-[#080F17]">
                          {m.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A880] font-bold px-2.5 py-1 bg-[#080F17] rounded">
                          {m.year}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-jakarta">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Philosophy Block */}
              <div className="bg-white border-2 border-[#D5D9DE] rounded-2xl p-8 sm:p-10 space-y-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#26394B] font-extrabold font-jakarta">
                  <Scale className="w-4 h-4 text-[#26394B]" />
                  <span>Legal Philosophy & Approach</span>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-[#080F17]">
                  Upholding the Presumption of Innocence
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-jakarta">
                  Under the Pakistani legal system and Islamic criminal jurisprudence, the burden of
                  proof rests unequivocally upon the state. The accused is under no obligation to
                  prove innocence until the prosecution establishes its case beyond all reasonable
                  doubt. Our courtroom strategy centers on exposing contradictions, procedural
                  irregularities, and bad-faith motivations (mala fide) in registration of FIRs.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs font-jakarta">
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D5D9DE]">
                    <span className="font-bold text-[#080F17] block mb-1 text-sm font-playfair">
                      Procedural Vigilance
                    </span>
                    <span className="text-[#64748B] leading-relaxed">
                      Holding police investigating officers strictly to the Code of Criminal
                      Procedure.
                    </span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D5D9DE]">
                    <span className="font-bold text-[#080F17] block mb-1 text-sm font-playfair">
                      Direct Client Counsel
                    </span>
                    <span className="text-[#64748B] leading-relaxed">
                      Honest appraisal of trial realities without false promises or complacency.
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-[#101D2B] hover:bg-[#080F17] text-[#FFFFFF] rounded-lg text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Request Confidential Consultation
                </button>
                <a
                  href={`tel:${ADVOCATE_INFO.phone}`}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#101D2B] border border-[#D5D9DE] rounded-lg text-xs font-bold tracking-wider transition-colors font-mono cursor-pointer"
                >
                  Direct Call: {ADVOCATE_INFO.phone}
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: COMMUNITY REACH, YOUTUBE & BAR PRESENCE */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* SECTION: COMMUNITY REACH, YOUTUBE & BAR PRESENCE WITH BREATHTAKING SPACE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#FAF8F5] border-b border-[#D5D9DE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] font-jakarta">
              Bar Association & Digital Community
            </span>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17] tracking-tight">
              Community Presence & Legal Fraternity
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-jakarta">
              Deeply engaged with the legal fraternity in Sialkot, upholding the professional
              standards of the Bar while maintaining open public legal educational channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="font-mono text-2xl font-bold text-[#26394B]">DBA Sialkot</div>
              <h4 className="font-playfair font-bold text-xl text-[#080F17]">
                District Bar Association Sialkot
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed font-jakarta">
                Active member within the District Bar Association, participating in professional
                bar conferences and criminal court proceedings in the Sialkot courts complex.
              </p>
              <a
                href={ADVOCATE_INFO.social.districtBarSialkot}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#26394B] font-extrabold uppercase tracking-wider hover:underline pt-2 font-jakarta"
              >
                <span>View DBA Sialkot Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="font-mono text-2xl font-bold text-rose-600 flex items-center gap-2">
                <Youtube className="w-6 h-6 text-rose-600" />
                <span>YouTube Channel</span>
              </div>
              <h4 className="font-playfair font-bold text-xl text-[#080F17]">
                Pakistan Lawyer's Company
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed font-jakarta">
                Watch video commentaries on criminal court updates, FIR procedures, and legal
                rights under Pakistani criminal jurisprudence.
              </p>
              <a
                href={ADVOCATE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-rose-600 font-extrabold uppercase tracking-wider hover:underline pt-2 font-jakarta"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-xl transition-all">
              <div className="font-mono text-2xl font-bold text-[#26394B]">8.5K+ Reach</div>
              <h4 className="font-playfair font-bold text-xl text-[#080F17]">
                Facebook & Social Community
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed font-jakarta">
                Engaging over 8.5K followers through public legal awareness, commentary on
                citizens' statutory rights, and criminal trial updates.
              </p>
              <a
                href={ADVOCATE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#26394B] font-extrabold uppercase tracking-wider hover:underline pt-2 font-jakarta"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FINAL CALLOUT WITH BREATHTAKING SPACE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#F3F0E9]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <h3 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17] tracking-tight">
            Speak Directly With Syed Shfayat Asghar Gillani
          </h3>
          <p className="text-base text-[#475569] max-w-2xl mx-auto leading-relaxed font-jakarta">
            If you or a family member is facing criminal exposure, urgent bail proceedings, or a
            disputed FIR in Sialkot, schedule an appointment today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-9 py-4 bg-[#080F17] hover:bg-[#14202E] text-white rounded-xl text-xs uppercase font-extrabold tracking-widest transition-all shadow-xl hover:scale-105 cursor-pointer font-jakarta"
            >
              Schedule Legal Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
