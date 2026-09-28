import React from 'react';
import { PhoneIcon, WhatsAppIcon } from './CustomIcons';

export const StickyBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#072616]/95 backdrop-blur-md border-t-2 border-[#D4AF37] px-3.5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_25px_rgba(0,0,0,0.35)]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+919511456566"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0D3823] text-[#FFFDF7] font-bold text-base shadow-sm border border-[#D4AF37]/50 active:scale-[0.97] transition-transform min-h-[48px]"
          aria-label="Call +91 95114 56566"
        >
          <PhoneIcon className="w-5 h-5 text-[#F5D77F] shrink-0" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919511456566"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-sm border border-[#D4AF37]/50 active:scale-[0.97] transition-transform min-h-[48px]"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
