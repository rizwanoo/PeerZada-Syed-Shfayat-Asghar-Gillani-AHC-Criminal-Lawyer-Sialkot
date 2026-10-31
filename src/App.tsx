/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { ADVOCATE_INFO } from './data/legalData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { ContactPage } from './pages/ContactPage';
import { LegalInsightsPage } from './pages/LegalInsightsPage';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetAnchor, setTargetAnchor] = useState<string | undefined>(undefined);
  const [prefillMatter, setPrefillMatter] = useState<string | undefined>(undefined);
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>(undefined);

  // Scroll to top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId, anchorOrMatter?: string) => {
    setCurrentPage(page);
    if (page === 'contact' && anchorOrMatter && !anchorOrMatter.startsWith('#')) {
      setPrefillMatter(anchorOrMatter);
      setTargetAnchor(undefined);
    } else if (page === 'insights' && anchorOrMatter) {
      setSelectedArticleId(anchorOrMatter);
      setTargetAnchor(anchorOrMatter);
    } else {
      setTargetAnchor(anchorOrMatter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF7] text-[#0A131F] selection:bg-[#C5A880] selection:text-[#0A131F] flex flex-col font-sans">
      {/* Top Navigation (Pure direct links, ZERO popups) */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenArticleModal={(articleId) => handleNavigate('insights', articleId)}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'practice' && (
          <PracticeAreasPage onNavigate={handleNavigate} targetAnchor={targetAnchor} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} prefillMatter={prefillMatter} />
        )}

        {currentPage === 'insights' && (
          <LegalInsightsPage
            onNavigate={handleNavigate}
            initialArticleId={selectedArticleId}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#101D2B] border border-[#26394B] text-[#D5D9DE] hover:text-[#F3F0E9] hover:border-[#D5D9DE] flex items-center justify-center shadow-lg transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating Direct WhatsApp Intake */}
        <a
          href={ADVOCATE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#080F17] rounded-full shadow-2xl font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 group"
          title="Direct WhatsApp Consultation with Syed Shfayat Asghar Gillani"
        >
          <MessageSquare className="w-4 h-4 text-[#080F17]" />
          <span className="hidden sm:inline font-sans">WhatsApp Advocate</span>
        </a>
      </div>
    </div>
  );
}
