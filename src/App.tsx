/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ValuesStrip } from './components/ValuesStrip';
import { FacilitiesSection } from './components/FacilitiesSection';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1A2E22] flex flex-col font-sans selection:bg-[#0D3823] selection:text-[#FAF7F0]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#facilities"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0D3823] text-white rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Content Sections strictly in the specified order */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Values Strip */}
        <ValuesStrip />

        {/* 3. Facilities */}
        <FacilitiesSection />

        {/* 4. FAQs */}
        <FAQSection />

        {/* 5. Contact & Location */}
        <ContactLocationSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile */}
      <StickyBottomBar />
    </div>
  );
}
