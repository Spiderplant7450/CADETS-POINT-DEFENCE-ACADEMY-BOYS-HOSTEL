import React, { useState } from 'react';
import { MapPin, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import { PhoneIcon, WhatsAppIcon } from './CustomIcons';

export const ContactLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const addressText =
    'House No. 258/335 (B.H.S), Baghambari Housing Scheme, near Shiva Ji Park, Allahpur, Prayagraj, Uttar Pradesh 211006';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3823]/10 border border-[#0D3823]/20 text-[#0D3823] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Location & Inquiries</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3823] tracking-tight">
            Contact & Location
          </h2>
          <div className="w-16 h-1 tricolor-stripe mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-[#2E4436]">
            Conveniently situated in Allahpur, Prayagraj, close to Allahabad University and city transit.
          </p>
        </div>

        {/* 2-Column Layout: Details on left, Interactive Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 border border-[#0D3823]/15 shadow-sm space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D3823] text-[#F5D77F] flex items-center justify-center shrink-0 shadow-sm border border-[#D4AF37]/50 mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-lg text-[#0D3823] mb-1">
                  Hostel Address
                </h3>
                <p className="text-sm sm:text-base text-[#2E4436] leading-relaxed mb-3">
                  House No. 258/335 (B.H.S), Baghambari Housing Scheme, near Shiva Ji Park, Allahpur, Prayagraj, Uttar Pradesh 211006
                </p>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FAF7F0] hover:bg-[#F3EEDF] text-[#0D3823] text-xs font-semibold border border-[#0D3823]/20 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visiting Hours Notice */}
            <div className="p-4 rounded-xl bg-[#FAF7F0] border-l-4 border-[#C59B27] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#8A6715] shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0D3823] tracking-wide">
                  Visiting hours: please call
                </p>
                <p className="text-xs text-[#3A4E40] mt-0.5">
                  Kindly coordinate in advance prior to visiting.
                </p>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2 space-y-3">
              {/* Call */}
              <a
                href="tel:+919511456566"
                className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#0D3823] hover:bg-[#072616] text-[#FFFDF7] font-bold text-base shadow-sm transition-all duration-200 border border-[#D4AF37]/40 active:scale-[0.99] min-h-[48px]"
              >
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-[#F5D77F]" />
                  <span>Call Direct</span>
                </div>
                <span className="text-[#F5D77F] font-mono text-sm tracking-wide">+91 95114 56566</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919511456566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-sm transition-all duration-200 border border-[#D4AF37]/40 active:scale-[0.99] min-h-[48px]"
              >
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Chat on WhatsApp</span>
                </div>
                <span className="text-white text-sm font-semibold">Message Us</span>
              </a>

              {/* Open in Google Maps Link */}
              <a
                href="https://maps.app.goo.gl/7ihBAaSSYRLzuTXeA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFFDF7] hover:bg-[#FAF7F0] text-[#0D3823] font-bold text-base border-2 border-[#0D3823] shadow-xs transition-colors min-h-[48px]"
              >
                <ExternalLink className="w-4 h-4 text-[#C59B27]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#FFFDF7] rounded-2xl p-3 sm:p-4 border border-[#0D3823]/15 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-[#0D3823]/10 bg-[#E8DECF]">
              <iframe
                title="Cadets Boys Home - Cadets Point Defence Academy Boys Hostel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.524006448725!2d81.86883979999999!3d25.4541725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab552079fd7a1%3A0x549909509276160b!2sCadets%20Boys%20Home!5e0!3m2!1sen!2sin!4v1790610015418!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>

            <div className="mt-3 px-2 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2E4436] gap-2">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#0D3823]" />
                Baghambari Housing Scheme, Allahpur, Prayagraj 211006
              </span>
              <a
                href="https://maps.app.goo.gl/7ihBAaSSYRLzuTXeA"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0D3823] hover:text-[#072616] underline inline-flex items-center gap-1"
              >
                <span>View Full Map & Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
