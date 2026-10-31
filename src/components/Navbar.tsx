import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { ADVOCATE_INFO } from '../data/legalData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Advocate' },
    { id: 'practice', label: 'Practice Areas' },
    { id: 'insights', label: 'Legal Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080F17]/95 border-b border-[#D5D9DE]/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Zone (NO background behind logo) */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none shrink-0 group cursor-pointer"
            aria-label="Go to Homepage"
          >
            <Logo className="h-10" variant="light" />
          </button>

          {/* Zone 2: Navigation Links (Clean single line text with hover underline) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-[#D5D9DE]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-white font-bold' : 'text-[#D5D9DE] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880] rounded-full animate-in fade-in duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct Action & Primary Action (NO POPUPS) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${ADVOCATE_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 rounded-lg text-xs font-semibold text-[#F3F0E9] hover:text-white transition-all whitespace-nowrap shrink-0 backdrop-blur-sm shadow-sm"
              title="Call Advocate directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="font-mono tabular-nums">{ADVOCATE_INFO.phone}</span>
            </a>

            {/* Primary Action Consultation Button */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#C5A880] hover:bg-[#B89758] text-[#080F17] hover:text-black rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#080F17]" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D5D9DE] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#080F17]/98 backdrop-blur-xl border-b border-[#26394B] shadow-2xl p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#26394B]/60">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A8B4C0]">
                Navigation Menu
              </span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm py-2 px-3 rounded-lg font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#26394B] text-[#F3F0E9] font-semibold'
                    : 'text-[#D5D9DE] hover:bg-[#26394B]/30 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-[#26394B] flex flex-col gap-2.5">
              <a
                href={`tel:${ADVOCATE_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#101D2B] border border-[#26394B] rounded-lg text-sm font-semibold text-[#F3F0E9]"
              >
                <Phone className="w-4 h-4 text-[#D5D9DE]" />
                <span>Call {ADVOCATE_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-2.5 px-4 bg-[#26394B] text-[#F3F0E9] rounded-lg text-sm font-semibold uppercase tracking-wider text-center"
              >
                Request Legal Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
