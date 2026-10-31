import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { ADVOCATE_INFO, PRACTICE_AREAS, SIALKOT_LEGAL_OVERVIEW } from '../data/legalData';
import { Phone, MapPin, ExternalLink, ShieldCheck, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId, anchor?: string) => {
    onNavigate(page, anchor);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F17] border-t border-[#26394B] text-[#D5D9DE] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#26394B]">
          {/* Col 1: Identity & Chambers */}
          <div className="space-y-4">
            <Logo className="h-11" variant="light" />
            <p className="text-xs leading-relaxed text-[#D5D9DE] mt-3">
              Independent criminal defense advocacy and legal representation. Chairman of Pakistan
              Lawyer's Company. Serving clients before Magisterial, Sessions, and High Court
              jurisdictions.
            </p>
            <div className="pt-2 text-xs text-[#FFFFFF] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D5D9DE]" />
              <span className="font-semibold">District Bar Association Sialkot Member</span>
            </div>
            <div className="text-[11px] text-[#A8B4C0]">
              Punjab Bar Council Enrolled Advocate
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#FFFFFF] mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRACTICE_AREAS.map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => handleNav('practice', pa.id)}
                    className="hover:text-[#FFFFFF] transition-colors text-left cursor-pointer text-[#D5D9DE]"
                  >
                    {pa.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Insights */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#FFFFFF] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-[#D5D9DE]">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-[#D5D9DE]">
                  About The Advocate
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('practice')} className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-[#D5D9DE]">
                  Criminal Practice Areas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('insights')} className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-[#D5D9DE]">
                  Legal Insights & Articles
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-[#D5D9DE]">
                  Encrypted Consultation Intake
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#26394B]">
              <span className="text-[11px] uppercase tracking-wider text-[#D5D9DE] font-bold block mb-1">
                Community Reach
              </span>
              <p className="text-xs text-[#FFFFFF] font-medium">
                8.5K+ Followers · District Bar Sialkot Fraternity
              </p>
            </div>
          </div>

          {/* Col 4: Official Contacts & Verified Social Profiles */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#FFFFFF] mb-4">
              Direct Contact & Chambers
            </h4>

            <div className="space-y-3 text-xs">
              <a
                href={`tel:${ADVOCATE_INFO.phone}`}
                className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#D5D9DE] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm tracking-wider font-bold">{ADVOCATE_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-[#D5D9DE]">
                <MapPin className="w-4 h-4 text-[#D5D9DE] shrink-0 mt-0.5" />
                <span>
                  {ADVOCATE_INFO.city}, {ADVOCATE_INFO.province}, {ADVOCATE_INFO.country}
                  <span className="block text-[11px] text-[#A8B4C0] mt-0.5">
                    {SIALKOT_LEGAL_OVERVIEW.headquarters}
                  </span>
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#D5D9DE] font-bold block mb-2.5">
                Official Channels & Bar
              </span>
              <div className="flex flex-col space-y-2 text-xs">
                <a
                  href={ADVOCATE_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors font-medium"
                >
                  <Youtube className="w-3.5 h-3.5 text-rose-500" />
                  <span>YouTube Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={ADVOCATE_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Facebook Profile (8.5K+)</span>
                  <ExternalLink className="w-3 h-3 text-[#A8B4C0]" />
                </a>
                <a
                  href={ADVOCATE_INFO.social.districtBarSialkot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
                >
                  <span>District Bar Association Sialkot</span>
                  <ExternalLink className="w-3 h-3 text-[#A8B4C0]" />
                </a>
                <a
                  href={ADVOCATE_INFO.social.instagramPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
                >
                  <span>Instagram (@asgheradv)</span>
                  <ExternalLink className="w-3 h-3 text-[#A8B4C0]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 text-xs space-y-3">
          <p className="text-[11px] text-[#A8B4C0] leading-relaxed text-balance">
            <strong>Legal Notice & Ethical Disclaimer:</strong> The material on this website is for
            general informational purposes regarding Pakistani criminal jurisprudence and does not
            constitute binding legal advice. Neither the transmission nor receipt of information
            through this site establishes an attorney-client relationship. Official representation
            is formalized exclusively through a verified power of attorney (Vakalatnama) executed
            in accordance with the rules of the Bar Council. In accordance with professional ethics,
            past results do not guarantee future legal outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#D5D9DE] pt-2 border-t border-[#26394B]">
            <span>
              © {currentYear} PeerZada Syed Shfayat Asghar Gillani AHC. All rights reserved.
            </span>
            <span className="mt-1 sm:mt-0 font-mono font-medium">
              Pakistan Lawyer's Company · Sialkot, Punjab
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
