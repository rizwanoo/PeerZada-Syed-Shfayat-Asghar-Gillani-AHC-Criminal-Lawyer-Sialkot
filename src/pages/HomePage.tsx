import React, { useState } from 'react';
import { PageId } from '../types';
import { ADVOCATE_INFO, PRACTICE_AREAS, LEGAL_ARTICLES } from '../data/legalData';
import { CaseScopingTool } from '../components/CaseScopingTool';
import { motion } from 'motion/react';
import {
  Shield,
  Scale,
  ArrowRight,
  Phone,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  Youtube,
  ExternalLink,
  Landmark,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  onOpenArticleModal?: (articleId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3F0E9] text-[#080F17]">
      {/* ------------------------------------------------------------- */}
      {/* SECTION B: ULTRA PREMIUM CINEMATIC HERO (CHOREOGRAPHED ENTRANCE & UNOBSTRUCTED LAWYER PHOTO) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-end overflow-hidden bg-[#080F17] text-white border-b-2 border-[#14202E]">
        {/* Full-Bleed Advocate Background Photograph with Choreographed Zoom & Opacity Reveal */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={imageError ? ADVOCATE_INFO.heroPhotoFallback : ADVOCATE_INFO.heroPhoto}
            alt="PeerZada Syed Shfayat Asghar Gillani AHC — Criminal Advocate Sialkot"
            className="w-full h-full object-cover object-[78%_center] sm:object-[75%_center] lg:object-[80%_center] filter brightness-[1.08] contrast-[1.05]"
            referrerPolicy="no-referrer"
            onError={() => {
              if (!imageError) setImageError(true);
            }}
          />

          {/* Minimal top hairline vignette so navbar text remains crisp and readable */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

          {/* Bottom gentle gradient for the cinematic bottom bar */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-36 bg-gradient-to-t from-[#080F17] via-[#080F17]/75 to-transparent pointer-events-none" />
        </motion.div>

        {/* Top-Right Official Badge with Delayed Staggered Fade */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="hidden sm:flex items-center gap-2 absolute top-24 right-6 lg:right-10 z-10 px-3.5 py-1.5 bg-black/60 border border-white/20 rounded-full text-xs text-white shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-serif font-semibold">پاکستان لائرز کمپنی</span>
          <span className="text-white/40">·</span>
          <span className="text-[11px] text-[#FCD34D] font-mono font-bold">DBA Sialkot</span>
        </motion.div>

        {/* Sleek Cinematic Bottom Editorial Bar with Breathtaking Space, Pure HD Background, and Vivid Contrast */}
        <div className="relative z-10 w-full pt-16 pb-12 sm:pt-20 sm:pb-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-t from-[#080F17] via-[#080F17]/85 to-transparent border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            
            {/* Left: Authority Typography with Choreographed Sequence & Ultra-Bright Contrast */}
            <div className="space-y-4 max-w-4xl">
              {/* Choreographed Step 1: Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2.5 sm:gap-3 flex-wrap"
              >
                <span className="text-xs sm:text-sm uppercase tracking-[0.28em] font-extrabold text-[#FCD34D] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] font-jakarta">
                  Advocate High Court · Sialkot, Pakistan
                </span>
                <span className="text-[#FCD34D] font-light text-sm hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm text-white font-bold tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] font-jakarta">
                  Chairman — Pakistan Lawyer's Company
                </span>
              </motion.div>

              {/* Choreographed Step 2: Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-cinzel font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-[1.1] text-balance drop-shadow-[0_4px_30px_rgba(0,0,0,0.98)]"
              >
                JUSTICE DESERVES A STRONG VOICE.
              </motion.h1>

              {/* Choreographed Step 3: Narrative Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sm sm:text-base lg:text-lg text-[#FFFFFF] font-jakarta font-normal leading-relaxed max-w-3xl drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] pt-1"
              >
                Dedicated criminal defense and high-court trial advocacy in Sialkot, Punjab.
                Protecting constitutional rights, procedural due process, and personal liberty.
              </motion.p>
            </div>

            {/* Right: Choreographed Step 4: Direct Actions & Contact Hotline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3.5 shrink-0 pt-2 lg:pt-0"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#FCD34D] hover:bg-[#F59E0B] text-[#080F17] rounded-xl text-xs uppercase font-extrabold tracking-widest transition-all shadow-2xl hover:scale-105 cursor-pointer font-jakarta"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#080F17]" />
              </button>

              <a
                href={`tel:${ADVOCATE_INFO.phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-4 bg-white/15 hover:bg-white/25 text-white border border-white/35 hover:border-white/60 rounded-xl text-sm font-bold tracking-wider font-mono transition-all backdrop-blur-lg shadow-xl cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FCD34D]" />
                <span className="text-white">{ADVOCATE_INFO.phone}</span>
              </a>

              <button
                onClick={() => onNavigate('practice')}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-4 bg-black/40 hover:bg-black/60 text-white text-xs uppercase font-bold tracking-wider rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-md transition-all cursor-pointer font-jakarta"
              >
                <span>Practice Areas</span>
                <ChevronRight className="w-4 h-4 text-[#FCD34D]" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION C: PROFESSIONAL INTRODUCTION (PRESTIGIOUS SILK PORCELAIN EDITORIAL) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FDFCF7] text-[#0A131F] py-28 lg:py-36 border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Cols: Identity & Principles */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#26394B]">
                  Professional Introduction
                </span>
                <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17] leading-tight">
                  PeerZada SYED SHFAYAT ASGHAR GILLANI AHC
                </h2>
                <div className="text-sm font-bold text-[#26394B] tracking-wide pt-1">
                  Chairman — Pakistan Lawyer's Company
                </div>
              </div>

              {/* Official Court Robes Portrait */}
              <div className="relative border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-xl overflow-hidden bg-white shadow-md group transition-all">
                <img
                  src={ADVOCATE_INFO.courtRobePhoto || '/about_advocate.jpg'}
                  alt="PeerZada Syed Shfayat Asghar Gillani AHC in High Court advocate robes"
                  className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-white border-t border-[#D5D9DE] flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-[#080F17]">In High Court Advocate Robes</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#C5A880] px-2 py-0.5 bg-[#080F17] rounded">
                    Official Chambers
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white border-2 border-[#D5D9DE] rounded-xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#26394B]">
                  <Scale className="w-4 h-4 text-[#26394B]" />
                  <span>The Fundamental Principle</span>
                </div>
                <blockquote className="font-serif italic text-base text-[#080F17] leading-relaxed">
                  "Every individual brought before the court stands cloaked in the constitutional
                  presumption of innocence. True advocacy lies in holding the state strictly to the
                  demands of evidence and due process."
                </blockquote>
                <div className="text-xs font-semibold text-[#475569] pt-2 border-t border-slate-100">
                  Criminal Defense & Procedural Law · Sialkot, Punjab
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#080F17]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#080F17]" />
                  <span className="font-semibold">Licensed Advocate of the High Court (AHC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#080F17]" />
                  <span className="font-semibold">Active member of District Bar Association Sialkot</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#080F17]" />
                  <span className="font-semibold">Focused criminal litigation across trial & appellate forums</span>
                </div>
              </div>
            </motion.div>

            {/* Right 7 Cols: Editorial Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6 text-[#080F17] leading-relaxed"
            >
              <p className="text-base sm:text-lg drop-cap-editorial">
                Practicing in Sialkot and appearing before the superior and subordinate courts of
                Punjab, PeerZada Syed Shfayat Asghar Gillani brings an unwavering commitment to the
                defense of individuals facing criminal proceedings. In criminal law, where personal
                reputation, constitutional freedom, and future livelihood hang in the balance,
                advocacy cannot be casual.
              </p>

              <p className="text-sm sm:text-base text-[#334155]">
                As Chairman of <strong>Pakistan Lawyer's Company</strong>, his practice is rooted
                in rigorous factual deconstruction. Whether challenging an unlawful First
                Information Report (FIR), securing protective or pre-arrest bail under statutory
                safeguards, or conducting cross-examination in complex trials, each case is
                approached with methodical preparation and adherence to legal ethics.
              </p>

              <p className="text-sm sm:text-base text-[#334155]">
                Recognizing that criminal litigation is often compounded by procedural intimidation
                and public stress, our chambers provide calm, direct, and unvarnished legal guidance.
                We do not make illusory promises; instead, we build tenacious, evidence-backed
                defenses under the Pakistan Penal Code (PPC) and the Code of Criminal Procedure
                (CrPC).
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080F17] hover:bg-[#14202E] text-white rounded-lg text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  <span>Read Full Profile & Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#080F17] text-[#080F17] hover:bg-black/5 rounded-lg text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
                >
                  <span>Consult With Advocate</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION: AUTHENTIC STORYTELLING & FACEBOOK / DOCUMENTARY MEDIA */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#F8F6F0] text-[#0A131F] border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#26394B] mb-2 font-jakarta">
              <GraduationCap className="w-4 h-4 text-[#26394B]" />
              <span>Let's Learn Law with Syed Shfayat</span>
            </div>
            <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17]">
              Chambers, Courtroom & Digital Advocacy
            </h2>
            <p className="text-sm text-[#475569] mt-2 font-jakarta">
              Documentary photography from the courts of Sialkot, legal research chambers, and public
              educational media by Advocate Syed Shfayat Asghar Gillani.
            </p>
          </div>

          {/* Documentary Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVOCATE_INFO.gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-[#080F17]/90 backdrop-blur-md rounded text-[10px] font-mono text-white font-semibold">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="font-playfair font-bold text-base text-[#080F17] group-hover:text-[#26394B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed font-jakarta">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Channels Strip: YouTube, Facebook (8.5K+), Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-8 bg-white border-2 border-[#D5D9DE] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-rose-600 font-bold font-jakarta">
                <Youtube className="w-5 h-5 text-rose-600" />
                <span>Official Video Channel & Digital Community</span>
              </div>
              <h3 className="font-cinzel font-bold text-2xl text-[#080F17]">
                Pakistan Lawyer's Company & Legal Broadcasts
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-xl">
                Advocate Syed Shfayat Asghar Gillani regularly broadcasts legal rights analysis,
                bail explainers, and criminal procedure updates for citizens and young lawyers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={ADVOCATE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={ADVOCATE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#080F17] hover:bg-[#14202E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Facebook (8.5K+)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={ADVOCATE_INFO.social.instagramPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#FAF8F5] border border-[#D5D9DE] hover:border-[#080F17] text-[#080F17] rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION D: CRIMINAL LAW PRACTICE — SIGNATURE CARD STACK SCROLL EFFECT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#FDFCF7] text-[#0A131F] border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D5D9DE] gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] font-jakarta">
                Areas of Legal Focus
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-[#080F17] tracking-tight">
                Criminal Defense Stacked Dossier
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#475569] max-w-lg leading-relaxed font-jakarta">
              Scroll down to explore each procedural defense practice area as the cards stack in sequence.
            </p>
          </div>

          {/* CARD STACK SCROLL EFFECT: Interactive Sticky Stacked Cards */}
          <div className="space-y-12 lg:space-y-16">
            {PRACTICE_AREAS.map((pa, idx) => (
              <div
                key={pa.id}
                className="scroll-mt-28 sticky rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl transition-all duration-300 border-2 border-[#14202E] bg-white text-[#080F17]"
                style={{
                  top: `${90 + idx * 14}px`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Tagline */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 bg-[#101D2B] text-[#F3F0E9] rounded-lg tracking-wider">
                        {pa.number}
                      </span>
                      <span className="text-xs uppercase tracking-widest font-extrabold text-[#26394B] font-jakarta">
                        {pa.tagline}
                      </span>
                    </div>

                    <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#080F17] leading-snug">
                      {pa.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-jakarta">
                      {pa.description}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onNavigate('practice', pa.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080F17] hover:bg-[#14202E] text-white rounded-xl text-xs uppercase font-extrabold tracking-wider transition-all shadow-md cursor-pointer font-jakarta"
                      >
                        <span>View Practice Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FCD34D]" />
                      </button>

                      <button
                        onClick={() => onNavigate('contact', pa.title)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#26394B] hover:bg-black/5 text-[#080F17] rounded-xl text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer font-jakarta"
                      >
                        <span>Consult on this Matter</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Statutory Provisions & Procedural Safeguards */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#D5D9DE] rounded-2xl p-6 sm:p-8 space-y-5">
                    <div className="flex items-center justify-between border-b border-[#D5D9DE] pb-3">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#26394B] font-jakarta">
                        Key Statutory Provisions & Precedents
                      </span>
                      <Shield className="w-4 h-4 text-[#26394B]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pa.keyProvisions.map((prov, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-[#080F17] font-medium font-jakarta">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{prov}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#D5D9DE]">
                      <div className="text-xs uppercase font-bold text-[#64748B] tracking-wider mb-2 font-jakarta">
                        Advocate's Strategic Approach:
                      </div>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-jakarta italic">
                        "{pa.context}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('practice')}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#080F17] hover:bg-[#14202E] text-white rounded-xl text-xs uppercase font-bold tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-xl font-jakarta"
            >
              <span>Explore All Legal Practice Frameworks</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION E: WHY PROFESSIONAL REPRESENTATION MATTERS (BRIGHT EDITORIAL) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#F8F6F0] text-[#0A131F] border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] font-jakarta">
                Core Pillars of Advocacy
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A131F] leading-tight tracking-tight">
                Why Professional Legal Representation Matters
              </h2>
              <p className="text-base text-[#475569] leading-relaxed font-jakarta">
                Criminal allegations carry severe personal, familial, and economic repercussions.
                Navigating police stations and courtrooms without strategic counsel compromises
                fundamental rights before the trial even commences.
              </p>
              <div className="p-4 bg-white border border-[#E5E0D5] rounded-xl text-xs font-bold text-[#0A131F] font-jakarta shadow-sm">
                No outcome is ever guaranteed; preparation, statutory mastery, and fearlessness
                govern success.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: 'Constitutional Due Process',
                  desc: 'Enforcing Article 10 & 10-A protections against arbitrary arrest, forced confessions, and detention beyond statutory 24-hour limits.',
                },
                {
                  title: 'Surgical Evidentiary Scrutiny',
                  desc: 'Dissecting contradictions between witness statements under Section 161 CrPC, FIR allegations, and medico-legal reports.',
                },
                {
                  title: 'Timely Bail Intervention',
                  desc: 'Moving immediate pre-arrest or protective bail applications to shield against the indignity of unwarranted police lockup.',
                },
                {
                  title: 'Uncompromised Integrity',
                  desc: 'Maintaining direct, candid communication without false assurances. You receive unvarnished legal analysis at every stage.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#E5E0D5] rounded-2xl p-7 sm:p-8 space-y-3 hover:border-[#0A131F] transition-all shadow-sm hover:shadow-md"
                >
                  <h4 className="font-playfair font-bold text-xl text-[#0A131F] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-jakarta">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PROCEDURAL SCOPING SCREENER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 bg-[#FDFCF7] border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <CaseScopingTool onNavigateToContact={(stage) => onNavigate('contact', stage)} />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* LEGAL INSIGHTS PREVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#F8F6F0] text-[#0A131F] border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#D5D9DE] gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] font-jakarta">
                Constitutional & Legal Guides
              </span>
              <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-[#080F17] tracking-tight">
                Legal Insights & Practice Notes
              </h2>
            </div>
            <button
              onClick={() => onNavigate('insights')}
              className="text-xs uppercase font-extrabold tracking-wider text-[#26394B] hover:text-[#080F17] flex items-center gap-2 cursor-pointer font-jakarta"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {LEGAL_ARTICLES.slice(0, 2).map((art) => (
              <div
                key={art.id}
                className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span className="font-bold text-[#C5A880] uppercase tracking-wider">{art.category}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-[#080F17] leading-snug">{art.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed line-clamp-3 font-jakarta">
                    {art.summary}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#64748B] font-mono">{art.date}</span>
                  <button
                    onClick={() => onNavigate('insights', art.id)}
                    className="text-xs uppercase font-extrabold tracking-wider text-[#080F17] hover:text-[#C5A880] flex items-center gap-1.5 cursor-pointer font-jakarta transition-colors"
                  >
                    <span>Read Publication</span>
                    <BookOpen className="w-4 h-4 text-[#26394B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FINAL CONSULTATION CTA (HIGH-IMPACT OBSIDIAN STRUCTURAL BLOCK WITH BREATHTAKING SPACE) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-28 lg:py-36 bg-[#080F17] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.28em] font-extrabold text-[#FCD34D] font-jakarta">
            Urgent Representation & Confidential Case Intake
          </span>

          <h2 className="font-cinzel font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance tracking-wide">
            WHEN YOUR FREEDOM MATTERS, EVERY LEGAL STEP MATTERS.
          </h2>

          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-jakarta">
            Do not let procedural errors jeopardize your defense. Consult with an experienced
            criminal advocate in Sialkot for immediate bail evaluation and trial representation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-9 py-4 bg-[#FCD34D] hover:bg-[#F59E0B] text-[#080F17] rounded-xl text-xs uppercase font-extrabold tracking-widest transition-all shadow-2xl hover:scale-105 cursor-pointer font-jakarta"
            >
              Contact For a Consultation
            </button>

            <a
              href={`tel:${ADVOCATE_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl text-xs font-bold tracking-wider transition-all cursor-pointer font-mono backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#FCD34D]" />
              <span>Call: {ADVOCATE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
