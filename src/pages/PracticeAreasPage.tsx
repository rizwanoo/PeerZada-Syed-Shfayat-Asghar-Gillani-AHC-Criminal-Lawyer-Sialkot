import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { PRACTICE_AREAS, ADVOCATE_INFO } from '../data/legalData';
import { motion } from 'motion/react';
import {
  Shield,
  Scale,
  ArrowRight,
  Phone,
  CheckCircle2,
  AlertCircle,
  FileSearch,
  Filter,
  Layers,
} from 'lucide-react';

interface PracticeAreasPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  targetAnchor?: string;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({ onNavigate, targetAnchor }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'bail' | 'fir' | 'trial' | 'advisory'>('all');

  useEffect(() => {
    if (targetAnchor) {
      const el = document.getElementById(targetAnchor);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [targetAnchor]);

  const filteredAreas = PRACTICE_AREAS.filter((pa) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bail') return pa.id === 'bail-matters';
    if (selectedFilter === 'fir') return pa.id === 'fir-proceedings';
    if (selectedFilter === 'trial')
      return (
        pa.id === 'criminal-defence' ||
        pa.id === 'criminal-litigation' ||
        pa.id === 'court-representation'
      );
    if (selectedFilter === 'advisory') return pa.id === 'legal-consultation';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#0A131F] pt-28 pb-32">
      {/* ------------------------------------------------------------- */}
      {/* HEADER SECTION (BRIGHT EDITORIAL SILK PORCELAIN WITH GENEROUS BREATHING ROOM) */}
      {/* ------------------------------------------------------------- */}
      <section className="border-b border-[#E5E0D5] bg-[#F8F6F0] pt-16 pb-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] mb-6 font-jakarta"
          >
            <span>Pakistani Criminal Jurisprudence</span>
            <span>·</span>
            <span>Subordinate & Superior Courts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cinzel font-black text-4xl sm:text-5xl lg:text-6xl text-[#080F17] tracking-tight leading-[1.1] max-w-5xl text-balance"
          >
            Criminal Law Practice Areas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-jakarta"
          >
            Methodical defense representation and procedural advocacy under the Pakistan Penal Code
            (PPC) and the Code of Criminal Procedure (CrPC). Each case is evaluated on strictly verified
            facts and established superior court precedents.
          </motion.p>

          {/* Interactive Stage Filter Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-[#D5D9DE] font-jakarta"
          >
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#26394B] mr-2 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Filter:</span>
            </span>
            {[
              { id: 'all', label: 'All Practice Areas' },
              { id: 'bail', label: 'Bail & Liberty' },
              { id: 'fir', label: 'FIR & Quashment' },
              { id: 'trial', label: 'Trial & Litigation' },
              { id: 'advisory', label: 'Confidential Advisory' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-[#080F17] text-white shadow-md scale-105'
                    : 'bg-white text-[#475569] border border-[#D5D9DE] hover:border-[#080F17] hover:text-[#080F17]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PRACTICE AREAS: BRIGHT EDITORIAL CARD STACK SCROLL EFFECT WITH BREATHTAKING SPACE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-center gap-2 text-xs font-mono text-[#475569] font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#26394B]" />
            <span>Interactive Stacked Dossier — Scroll to Explore</span>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {filteredAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-28 sticky rounded-3xl p-10 sm:p-14 lg:p-16 shadow-2xl transition-all duration-300 border-2 border-[#14202E] bg-white text-[#080F17]"
                style={{
                  // CARD STACK SCROLL EFFECT: sticky with progressive top offset
                  top: `${95 + index * 14}px`,
                  zIndex: index + 10,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left 4 Cols: Index, Title & Provisions */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-[#C5A880]">
                        {area.number}
                      </span>
                      <span className="w-12 h-[2px] bg-[#080F17]" />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#26394B] font-extrabold">
                        Procedural Branch
                      </span>
                    </div>

                    <h2 className="font-cinzel font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#080F17] tracking-tight">
                      {area.title}
                    </h2>

                    <p className="text-sm font-semibold leading-relaxed text-[#475569] font-jakarta">
                      {area.tagline}
                    </p>

                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold block text-[#26394B]">
                        Governing Statutory Provisions
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {area.keyProvisions.map((prov, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#FAF8F5] border border-[#D5D9DE] text-[#080F17] font-semibold"
                          >
                            {prov}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate('contact', area.title)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer bg-[#080F17] hover:bg-[#14202E] text-white shadow-md"
                      >
                        <span>Inquire Regarding {area.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Right 8 Cols: Legal Breakdown & Steps */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-widest font-bold mb-2 text-[#26394B]">
                        Factual & Legal Context
                      </h3>
                      <p className="text-sm leading-relaxed text-[#080F17] font-normal">
                        {area.description}
                      </p>
                      <p className="text-sm leading-relaxed mt-3 text-[#475569]">
                        {area.context}
                      </p>
                    </div>

                    {/* Procedural Stages */}
                    <div className="rounded-xl p-5 sm:p-6 space-y-3 border-2 border-[#D5D9DE] bg-[#FAF8F5]">
                      <h4 className="text-xs uppercase tracking-wider font-bold flex items-center gap-2 text-[#080F17]">
                        <FileSearch className="w-4 h-4 text-[#26394B]" />
                        <span>Procedural Stages & Defense Steps</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                        {area.stages.map((stage, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#080F17]" />
                            <span className="font-medium">{stage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Considerations */}
                    <div className="rounded-xl p-4 sm:p-5 border border-[#D5D9DE] bg-white">
                      <span className="text-[10px] uppercase tracking-wider font-bold block mb-2 flex items-center gap-1.5 text-[#26394B]">
                        <AlertCircle className="w-3.5 h-3.5 text-[#26394B]" />
                        <span>Client Considerations & Candor</span>
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#475569]">
                        {area.clientConsiderations.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#080F17] font-bold">·</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* PROCEDURAL ROADMAP BANNER (BRIGHT EDITORIAL) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 bg-[#FAF8F5] text-[#080F17] border-t border-b border-[#D5D9DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#26394B]">
              The Criminal Process In Pakistan
            </span>
            <h2 className="font-serif font-bold text-3xl text-[#080F17] mt-2">
              Chronological Stages of a Criminal Matter
            </h2>
            <p className="text-sm text-[#475569] mt-1">
              Every phase dictates specific statutory rights and legal countermeasures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: 'Phase 01',
                title: 'FIR Registration',
                law: 'Section 154 CrPC',
                desc: 'Allegation registered at police station; cognizable offenses trigger police investigation.',
              },
              {
                step: 'Phase 02',
                title: 'Bail & Custody',
                law: 'Sec. 497 / 498 CrPC',
                desc: 'Interlocutory protection against physical detention or judicial remand.',
              },
              {
                step: 'Phase 03',
                title: 'Police Challan',
                law: 'Section 173 CrPC',
                desc: 'Police submit final investigation report to the Judicial Magistrate.',
              },
              {
                step: 'Phase 04',
                title: 'Trial & Evidence',
                law: 'QSO 1984',
                desc: 'Charges framed, prosecution witnesses examined and cross-examined.',
              },
              {
                step: 'Phase 05',
                title: 'Judgment & Appeal',
                law: 'Sec. 410 / 417 CrPC',
                desc: 'Acquittal or conviction; appellate challenges before Sessions or High Court.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#D5D9DE] rounded-xl p-5 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#26394B] block mb-1 font-bold">
                    {p.step}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#080F17]">{p.title}</h4>
                  <span className="text-[11px] font-mono text-[#475569] font-bold block mt-1">{p.law}</span>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FINAL INTAKE CALLOUT */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-[#F3F0E9] text-[#080F17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#080F17]">
            Need Targeted Legal Representation?
          </h3>
          <p className="text-sm text-[#475569] max-w-xl mx-auto">
            Contact our chambers directly with the details of your FIR or pending litigation for
            structured, confidential assessment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#080F17] hover:bg-[#14202E] text-white rounded-lg text-xs uppercase font-bold tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Open Consultation Form
            </button>
            <a
              href={`tel:${ADVOCATE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-[#080F17] border-2 border-[#D5D9DE] rounded-lg text-xs font-bold tracking-wider transition-colors font-mono cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#080F17]" />
              <span>Direct: {ADVOCATE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
