import React from 'react';
import { CPDALogo } from './CPDALogo';
import { HeroSunriseBackground } from './HeroSunriseBackground';
import { PhoneIcon, WhatsAppIcon } from './CustomIcons';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative min-h-[92vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-[#0D3823]/10">
      {/* Sunrise Hostel Photo Background with seamless cream fade */}
      <HeroSunriseBackground />

      {/* Hero Content Container:
          - Mobile/Tablet: Stacked vertically with comfortable top spacing so house remains visible at top, and text cleanly resides below on cream background.
          - Desktop (lg+): Horizontal layout with left spacer for house and text block aligned to the right.
      */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-end">
        {/* Spacer for desktop (lg+) to keep building visible on the left side */}
        <div className="hidden lg:block lg:w-7/12 xl:w-7/12 pointer-events-none" />

        {/* Text and Actions */}
        <div className="w-full md:max-w-2xl lg:max-w-none lg:w-5/12 xl:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left mt-52 sm:mt-64 md:mt-72 lg:mt-0 lg:pl-8 xl:pl-10">
          {/* Logo badge with gold aura and elevation */}
          <div className="mb-4 sm:mb-5 lg:mb-6 transform hover:scale-105 transition-transform duration-300">
            <CPDALogo size={170} className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 drop-shadow-xl" />
          </div>

          {/* Small Tricolor accent line */}
          <div className="w-24 h-1.5 rounded-full tricolor-stripe mb-4 shadow-sm" />

          {/* Main Headline - ALL CAPS full form */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] font-extrabold text-[#0D3823] tracking-wide leading-[1.2] mb-3">
            CADETS POINT DEFENCE ACADEMY <span className="block text-[#072616] mt-1 font-black">BOYS HOSTEL</span>
          </h1>

          {/* Subline Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8A6715] font-bold tracking-normal mb-5">
            Building Future Defence Officers
          </p>

          {/* Fees & Availability Details Prompt */}
          <div className="w-full max-w-lg lg:max-w-none mb-6 p-4 rounded-xl bg-[#FFFDF7] border-2 border-[#D4AF37]/60 shadow-sm text-center lg:text-left">
            <p className="text-sm sm:text-base font-bold text-[#0D3823] leading-snug">
              For fees and availability details, contact:
            </p>
            <a
              href="tel:+919511456566"
              className="mt-1.5 inline-flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg font-black text-[#8A6715] hover:text-[#0D3823] transition-colors"
            >
              <PhoneIcon className="w-4 h-4 text-[#8A6715] shrink-0" />
              <span>+91 95114 56566</span>
            </a>
          </div>

          {/* CTA Buttons: Call and WhatsApp - Perfectly matched dimensions and symmetrical shapes on mobile, tablet, and desktop */}
          <div className="w-full max-w-lg lg:max-w-none grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {/* Call Button */}
            <a
              href="tel:+919511456566"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#0D3823] hover:bg-[#072616] text-[#FFFDF7] font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-xl transition-all duration-200 border border-[#D4AF37]/40 active:scale-[0.98] min-h-[52px]"
              aria-label="Call Cadets Point Defence Academy Boys Hostel"
            >
              <PhoneIcon className="w-5 h-5 text-[#F5D77F] shrink-0" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919511456566"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-xl transition-all duration-200 border border-[#D4AF37]/40 active:scale-[0.98] min-h-[52px]"
              aria-label="Chat on WhatsApp with Cadets Point Defence Academy Boys Hostel"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Subtle phone number text for quick dial clarity */}
          <p className="mt-4 text-xs font-semibold text-[#0D3823]/70 tracking-wider uppercase">
            Direct Helpline: <span className="font-bold text-[#0D3823]">+91 95114 56566</span>
          </p>
        </div>
      </div>
    </header>
  );
};
