import React, { useState } from 'react';
import { PageId, LegalArticle } from '../types';
import { LEGAL_ARTICLES, ADVOCATE_INFO } from '../data/legalData';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  Shield,
  Phone,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface LegalInsightsPageProps {
  onNavigate: (page: PageId, anchor?: string) => void;
  initialArticleId?: string;
}

export const LegalInsightsPage: React.FC<LegalInsightsPageProps> = ({
  onNavigate,
  initialArticleId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // Expanded article state for inline reading - ZERO POPUPS
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(
    initialArticleId || null
  );

  const categories = [
    'all',
    'Criminal Procedure',
    'First Response',
    'Judicial Remedies',
    'Constitutional Protections',
  ];

  const filteredArticles = LEGAL_ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleArticle = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-[#0A131F] pt-28 pb-28">
      {/* Header with Generous Breathing Room */}
      <section className="border-b border-[#E5E0D5] bg-[#F8F6F0] pt-12 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-extrabold text-[#26394B] mb-4 font-jakarta"
          >
            <span>Advocacy & Jurisprudence</span>
            <span>·</span>
            <span>Educational Series</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cinzel font-black text-4xl sm:text-5xl lg:text-6xl text-[#080F17] tracking-tight leading-[1.1] max-w-4xl text-balance"
          >
            Legal Insights & Practice Guides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-jakarta"
          >
            Analytical commentaries on Pakistani criminal law, bail procedures, FIR quashments, and
            constitutional safeguards published by the chambers of PeerZada Syed Shfayat Asghar
            Gillani AHC.
          </motion.p>

          {/* Search & Filter Strip */}
          <div className="mt-12 pt-8 border-t border-[#D5D9DE] flex flex-col md:flex-row md:items-center justify-between gap-6 font-jakarta">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#080F17] text-white shadow-md'
                      : 'bg-white text-[#475569] border border-[#D5D9DE] hover:border-[#080F17] hover:text-[#080F17]'
                  }`}
                >
                  {cat === 'all' ? 'All Guides' : cat}
                </button>
              ))}
            </div>

            {/* Quick search input (inline, no popup) */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search legal topics..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D5D9DE] focus:border-[#080F17] rounded-xl text-xs text-[#080F17] placeholder-[#64748B]/70 focus:outline-none transition-colors shadow-sm font-jakarta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles List with Direct In-Page Reading (NO POPUPS) */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center text-sm text-[#64748B] font-jakarta">
              No legal publications found matching your query.
            </div>
          ) : (
            <div className="space-y-10 lg:space-y-12">
              {filteredArticles.map((art, idx) => {
                const isExpanded = expandedArticleId === art.id;

                return (
                  <motion.div
                    key={art.id}
                    id={art.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white border-2 border-[#D5D9DE] hover:border-[#080F17] rounded-3xl p-8 sm:p-12 transition-all duration-300 shadow-sm hover:shadow-xl"
                  >
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#64748B] mb-4 gap-2 font-jakarta">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#C5A880] uppercase tracking-wider">
                          {art.category}
                        </span>
                        <span>·</span>
                        <div className="flex items-center gap-1 font-mono text-[11px]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{art.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-[11px]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{art.date}</span>
                      </div>
                    </div>

                    <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-[#080F17] leading-snug">
                      {art.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-jakarta">
                      {art.summary}
                    </p>

                    {/* Expand/Collapse Inline Reading Toggle */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between font-jakarta">
                      <button
                        onClick={() => toggleArticle(art.id)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F3F0E9] border border-[#D5D9DE] hover:border-[#080F17] rounded-xl text-xs font-bold text-[#101D2B] transition-all cursor-pointer shadow-sm"
                      >
                        <BookOpen className="w-4 h-4 text-[#26394B]" />
                        <span>{isExpanded ? 'Hide Full Publication' : 'Read Full Publication'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => onNavigate('contact', art.title)}
                        className="text-xs font-bold uppercase tracking-wider text-[#26394B] hover:text-[#080F17] flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Inquire About This Subject</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Inline Article Body (Direct on page, NO POPUP) */}
                    {isExpanded && (
                      <div className="mt-8 pt-8 border-t border-[#D5D9DE] space-y-6 animate-in fade-in duration-300">
                        <div className="space-y-4 text-base leading-relaxed text-[#1E293B]">
                          {art.content.map((paragraph, pIdx) => (
                            <p key={pIdx} className={pIdx === 0 ? 'drop-cap-ivory' : ''}>
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Practical Tips Box */}
                        <div className="bg-[#FAF8F5] border border-[#D5D9DE] rounded-xl p-6 space-y-3 mt-6">
                          <h4 className="font-serif font-bold text-sm text-[#080F17] uppercase tracking-wider flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#26394B]" />
                            <span>Practical Guidance from Advocate Gillani</span>
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                            {art.practicalTips.map((tip, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#26394B] mt-2 shrink-0" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Handoff */}
                        <div className="p-4 bg-[#F3F0E9] rounded-xl border border-[#D5D9DE] flex flex-col sm:flex-row items-center justify-between gap-3">
                          <div className="text-xs text-[#334155]">
                            Facing an FIR or proceedings related to this topic in Sialkot?
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${ADVOCATE_INFO.phone}`}
                              className="px-4 py-2 bg-white border border-[#D5D9DE] rounded-lg text-xs font-semibold text-[#101D2B] flex items-center gap-1.5"
                            >
                              <Phone className="w-3.5 h-3.5 text-[#26394B]" />
                              <span>{ADVOCATE_INFO.phone}</span>
                            </a>
                            <button
                              onClick={() => onNavigate('contact', art.title)}
                              className="px-4 py-2 bg-[#101D2B] hover:bg-[#080F17] text-[#F3F0E9] rounded-lg text-xs uppercase font-semibold tracking-wider transition-colors"
                            >
                              Consult With Advocate
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Advisory Bottom Box */}
      <section className="py-16 bg-[#101D2B] text-[#D5D9DE] border-t border-[#26394B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Shield className="w-8 h-8 text-[#D5D9DE] mx-auto" />
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#F3F0E9]">
            Have a Specific Case in the Courts of Sialkot?
          </h3>
          <p className="text-sm text-[#A8B4C0] max-w-xl mx-auto">
            These legal commentaries serve as informational overviews. If you are directly named in
            an FIR or notice, reach out for individual evaluation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#26394B] hover:bg-[#344b62] text-[#F3F0E9] rounded-lg text-xs uppercase font-semibold tracking-wider transition-colors cursor-pointer border border-[#A8B4C0]/30 shadow-md"
            >
              Request Confidential Intake
            </button>
            <a
              href={`tel:${ADVOCATE_INFO.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#080F17] hover:bg-[#101D2B] text-[#F3F0E9] border border-[#26394B] rounded-lg text-xs font-mono font-semibold tracking-wider cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#D5D9DE]" />
              <span>Call: {ADVOCATE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
