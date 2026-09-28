import React, { useState } from 'react';

export const HeroSunriseBackground: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Background warm morning sky base */}
      <div className="absolute inset-0 bg-[#FAF7F0]" />

      {!imgError ? (
        <picture className="absolute inset-0 w-full h-full block">
          <source type="image/webp" srcSet="/images/hero-bg.webp" />
          <img
            src="/images/desktop-bg.jpg"
            alt="Cadets Point Defence Academy Boys Hostel building in sunrise morning light"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-[15%_top] sm:object-[20%_top] md:object-[22%_top] lg:object-left"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      ) : (
        /* Fallback illustrated scene */
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE8B8] via-[#FFF3D6] to-[#FAF7F0]" />
      )}

      {/* 
        Seamless Cream Overlays:
        Using a single continuous master photo across all devices ensures ZERO image swap/jump
        when switching devices or resizing browser windows.
        
        - Mobile & Tablet: The building sits naturally at the top. A smooth gradient covers the lower 60%
          where the title, details, and buttons sit in crisp, high-contrast readability.
        - Desktop (lg+): The building sits on the left, with the right 50% smoothly fading to cream.
      */}
      {/* Mobile & Tablet fade: smooth gradient covering lower half of screen where text lives */}
      <div className="block lg:hidden absolute inset-x-0 bottom-0 h-[68%] sm:h-[62%] md:h-[58%] bg-gradient-to-t from-[#FAF7F0] via-[#FAF7F0]/95 to-transparent pointer-events-none" />

      {/* Desktop right fade reinforcement */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%] xl:w-[48%] bg-gradient-to-r from-transparent via-[#FAF7F0]/85 to-[#FAF7F0] pointer-events-none" />

      {/* Bottom border edge blending */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#FAF7F0] pointer-events-none" />
    </div>
  );
};
