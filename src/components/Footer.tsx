import React from 'react';
import { MapPin } from 'lucide-react';
import { CPDALogo } from './CPDALogo';
import { PhoneIcon } from './CustomIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072616] text-[#FAF7F0] border-t-4 border-[#D4AF37] pt-12 pb-24 md:pb-14 relative">
      {/* Top tricolor band */}
      <div className="absolute top-0 left-0 right-0 h-1.5 tricolor-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-5">
            <CPDALogo size={130} className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-lg" />
          </div>

          {/* Academy Name in ALL CAPITAL LETTERS */}
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#FAF7F0] tracking-wide mb-2">
            CADETS POINT DEFENCE ACADEMY BOYS HOSTEL
          </h3>

          {/* Motto / Secondary Line */}
          <p className="text-base sm:text-lg text-[#F5D77F] font-bold mb-6 tracking-wide">
            &ldquo;Discipline Today, A Brighter Tomorrow&rdquo;
          </p>

          {/* Phone Number Box */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0D3823] border border-[#D4AF37]/50 shadow-inner mb-8">
            <PhoneIcon className="w-5 h-5 text-[#F5D77F]" />
            <a
              href="tel:+919511456566"
              className="font-mono text-lg sm:text-xl font-bold text-[#FAF7F0] hover:text-[#F5D77F] transition-colors"
            >
              +91 95114 56566
            </a>
          </div>

          {/* Location note */}
          <p className="text-xs sm:text-sm text-[#A5C2B0] max-w-lg mb-8 flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Baghambari Housing Scheme, Allahpur, Prayagraj, Uttar Pradesh 211006</span>
          </p>

          {/* Divider */}
          <div className="w-full max-w-2xl border-t border-[#D4AF37]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8EA898] gap-3">
            <p>© {new Date().getFullYear()} Cadets Point Defence Academy Boys Hostel.</p>
            <p className="text-[#F5D77F]/90 font-medium">Safe • Secure • Disciplined • Supportive</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
