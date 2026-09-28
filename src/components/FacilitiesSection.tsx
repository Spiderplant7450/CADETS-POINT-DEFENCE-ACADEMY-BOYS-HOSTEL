import React from 'react';
import { Utensils, Wifi, Bath, Droplets, UserCheck } from 'lucide-react';
import { PhoneIcon } from './CustomIcons';

interface Facility {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const facilities: Facility[] = [
  {
    title: 'Mess',
    description: 'Breakfast, lunch, snacks and dinner, with very good, comfortable food.',
    icon: Utensils,
    tag: '4 Meals Daily',
  },
  {
    title: 'Wi-Fi',
    description: 'Included in the fee, with no usage limits.',
    icon: Wifi,
    tag: 'Unlimited Access',
  },
  {
    title: 'Washrooms',
    description: 'Indian and Western toilets.',
    icon: Bath,
    tag: 'Both Options',
  },
  {
    title: 'RO Water Cooler',
    description: 'Clean drinking water.',
    icon: Droplets,
    tag: 'Purified Water',
  },
  {
    title: 'Someone Always on Site',
    description: 'A hostel person is available at all times and stays on the premises.',
    icon: UserCheck,
    tag: '24/7 Presence',
  },
];

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3823]/10 border border-[#0D3823]/20 text-[#0D3823] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Essential Amenities</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3823] tracking-tight">
            Hostel Facilities
          </h2>
          <div className="w-16 h-1 tricolor-stripe mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-[#2E4436]">
            Thoughtfully provided amenities ensuring every cadet stays focused, healthy, and supported.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            // Center the 5th item on larger screens if needed or make it span cleanly
            const isLastOnLg = index === 4;
            return (
              <div
                key={facility.title}
                className={`bg-[#FFFDF7] rounded-2xl p-6 sm:p-7 border border-[#0D3823]/15 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between ${
                  isLastOnLg ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Header with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#0D3823] text-[#F5D77F] flex items-center justify-center shadow-md border border-[#D4AF37]/50">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D3823] bg-[#0D3823]/10 px-2.5 py-1 rounded-md border border-[#0D3823]/15">
                      {facility.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-[#0D3823] mb-2 tracking-tight">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#3A4E40] leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Subtle Gold Accent Baseline */}
                <div className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#0D3823]/70 font-semibold">
                  <span>Available on premises</span>
                  <span className="text-[#C59B27] font-bold">✓ Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fees and Availability Banner Card */}
        <div className="mt-12 bg-gradient-to-r from-[#072616] to-[#0D3823] rounded-2xl p-6 sm:p-8 text-[#FAF7F0] border-2 border-[#D4AF37]/50 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-block text-[#F5D77F] text-xs font-bold tracking-widest uppercase mb-1">
              Admission & Inquiries
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#FAF7F0] tracking-wide mb-1">
              For fees and availability details contact phone number:
            </h3>
            <p className="text-sm sm:text-base text-[#D0E2D6]">
              Get instant updates on current seat vacancies, room options, and full fee structure.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919511456566"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FAF7F0] text-[#0D3823] font-black text-base hover:bg-white shadow-md transition-all active:scale-[0.98]"
            >
              <PhoneIcon className="w-4 h-4 text-[#0D3823]" />
              <span>+91 95114 56566</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
