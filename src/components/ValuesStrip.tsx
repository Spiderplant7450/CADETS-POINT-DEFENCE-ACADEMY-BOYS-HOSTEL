import React from 'react';
import { ShieldCheck, Lock, Award, HeartHandshake } from 'lucide-react';

export const ValuesStrip: React.FC = () => {
  const values = [
    { title: 'Safe', icon: ShieldCheck },
    { title: 'Secure', icon: Lock },
    { title: 'Disciplined', icon: Award },
    { title: 'Supportive', icon: HeartHandshake },
  ];

  return (
    <section className="relative bg-[#072616] text-[#FAF7F0] border-y-2 border-[#D4AF37]/50 shadow-md">
      {/* Top subtle tricolor accent line */}
      <div className="w-full h-1 tricolor-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* Values Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0D3823] border border-[#D4AF37]/60 flex items-center justify-center shadow-inner">
                    <Icon className="w-4 h-4 text-[#F5D77F]" />
                  </div>
                  <span className="font-heading font-bold text-sm sm:text-base lg:text-lg tracking-wider text-[#FAF7F0]">
                    {val.title}
                  </span>
                  {idx < values.length - 1 && (
                    <span className="text-[#D4AF37] font-bold text-xs hidden sm:inline-block ml-4 sm:ml-6">
                      ★
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Secondary Line: Your home away from home */}
          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-[#D4AF37]/30 pt-3 md:pt-0 md:pl-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0D3823] to-[#124b30] border border-[#D4AF37]/50 shadow-inner">
              <span className="text-[#F5D77F] text-xs">✦</span>
              <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#F5D77F] tracking-wide">
                Your home away from home
              </span>
              <span className="text-[#F5D77F] text-xs">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
