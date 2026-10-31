import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', variant = 'light', compact = false }) => {
  // Pure transparent logo with zero background box or rect
  const isDarkSurface = variant === 'light'; // on dark surface, text is ivory/silver
  const primaryTextColor = isDarkSurface ? '#F3F0E9' : '#080F17';
  const subtitleColor = isDarkSurface ? '#D5D9DE' : '#26394B';
  const accentColor = isDarkSurface ? '#A8B4C0' : '#475569';
  const pillarStroke = isDarkSurface ? '#D5D9DE' : '#101D2B';
  const panFill = isDarkSurface ? '#26394B' : '#D5D9DE';
  const panStroke = isDarkSurface ? '#D5D9DE' : '#101D2B';

  if (compact) {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {/* Transparent Scales of Justice Icon (NO background) */}
        <svg viewBox="0 0 64 64" className="h-full w-auto aspect-square shrink-0" fill="none">
          {/* Central Scales of Justice Pillar */}
          <path d="M32 8V54" stroke={pillarStroke} strokeWidth="2.8" strokeLinecap="round" />
          <path d="M20 54H44" stroke={pillarStroke} strokeWidth="2.8" strokeLinecap="round" />
          <path d="M25 57H39" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="9" r="2.8" fill={pillarStroke} />
          {/* Crossbeam Balance */}
          <path d="M12 20C22 16 42 16 52 20" stroke={pillarStroke} strokeWidth="2.4" strokeLinecap="round" />
          {/* Left Pan */}
          <path d="M14 21L10 34M14 21L18 34" stroke={accentColor} strokeWidth="1.3" />
          <path d="M8 34C8 39 20 39 20 34H8Z" fill={panFill} stroke={panStroke} strokeWidth="1.6" />
          {/* Right Pan */}
          <path d="M50 21L46 34M50 21L54 34" stroke={accentColor} strokeWidth="1.3" />
          <path d="M44 34C44 39 56 39 56 34H44Z" fill={panFill} stroke={panStroke} strokeWidth="1.6" />
        </svg>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-xs tracking-wider uppercase" style={{ color: primaryTextColor }}>
            Syed Shfayat Asghar
          </span>
          <span className="text-[10px] tracking-widest uppercase font-medium" style={{ color: subtitleColor }}>
            Advocate High Court · Sialkot
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Pure Transparent Emblem (NO background) */}
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" fill="none">
        {/* Central Scales of Justice Pillar */}
        <path d="M32 8V54" stroke={pillarStroke} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M20 54H44" stroke={pillarStroke} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M25 57H39" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="9" r="2.8" fill={pillarStroke} />
        {/* Crossbeam Balance */}
        <path d="M12 20C22 16 42 16 52 20" stroke={pillarStroke} strokeWidth="2.4" strokeLinecap="round" />
        {/* Left Pan */}
        <path d="M14 21L10 34M14 21L18 34" stroke={accentColor} strokeWidth="1.3" />
        <path d="M8 34C8 39 20 39 20 34H8Z" fill={panFill} stroke={panStroke} strokeWidth="1.6" />
        {/* Right Pan */}
        <path d="M50 21L46 34M50 21L54 34" stroke={accentColor} strokeWidth="1.3" />
        <path d="M44 34C44 39 56 39 56 34H44Z" fill={panFill} stroke={panStroke} strokeWidth="1.6" />
      </svg>

      {/* Brand Typographic Lockup */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] tracking-[0.22em] uppercase font-semibold" style={{ color: accentColor }}>
            PeerZada · Sialkot
          </span>
        </div>
        <span
          className="font-serif font-bold text-sm tracking-wide whitespace-nowrap"
          style={{ color: primaryTextColor }}
        >
          SYED SHFAYAT ASGHAR GILLANI
        </span>
        <span
          className="text-[10px] tracking-wider uppercase font-medium whitespace-nowrap"
          style={{ color: subtitleColor }}
        >
          Chairman — Pakistan Lawyer's Company
        </span>
      </div>
    </div>
  );
};
