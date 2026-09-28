import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PhoneIcon, WhatsAppIcon } from './CustomIcons';

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    id: 'who-can-stay',
    question: 'Who can stay?',
    answer: 'UG/PG students of the University of Allahabad and other students.',
  },
  {
    id: 'visitors-allowed',
    question: 'Are visitors allowed?',
    answer: 'Yes, but no overnight stay. Call for visiting hours.',
  },
  {
    id: 'mobile-phones',
    question: 'Are mobile phones allowed?',
    answer: 'Yes.',
  },
  {
    id: 'food-quality',
    question: 'Is the food good?',
    answer: 'Yes, very good and comfortable.',
  },
  {
    id: 'warden-onsite',
    question: 'Is there a warden?',
    answer: 'No warden, but a hostel person is always available and sleeps on site.',
  },
  {
    id: 'hostel-rules',
    question: 'Are there rules?',
    answer: 'Nothing strict. Just keep your room clean and organised.',
  },
  {
    id: 'wifi-included',
    question: 'Is Wi-Fi included?',
    answer: 'Yes, in the fee.',
  },
  {
    id: 'fees-availability-booking',
    question: 'How much are the fees and how do I check room availability?',
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-[#0D3823]">
          For fees and availability details, please contact directly via Phone or WhatsApp:
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="tel:+919511456566"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D3823] text-[#FAF7F0] text-sm font-bold hover:bg-[#072616] transition-colors"
          >
            <PhoneIcon className="w-4 h-4 text-[#F5D77F]" />
            <span>Call +91 95114 56566</span>
          </a>
          <a
            href="https://wa.me/919511456566"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm font-bold hover:bg-[#20ba5a] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    ),
  },
];

export const FAQSection: React.FC = () => {
  // First item open by default for immediate preview
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'who-can-stay': true,
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#F5F0E4] border-t border-[#0D3823]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3823]/10 border border-[#0D3823]/20 text-[#0D3823] text-xs font-bold uppercase tracking-widest mb-3">
            <span>Helpful Information</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D3823] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 tricolor-stripe mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-sm sm:text-base text-[#2E4436]">
            Clear answers to common questions for students and parents.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-[#FFFDF7] rounded-xl border border-[#0D3823]/15 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3823]"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#0D3823] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#0D3823]/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0D3823] text-[#F5D77F]' : 'text-[#0D3823]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#2E4436] border-t border-[#0D3823]/10 bg-[#FAF7F0]/60 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
