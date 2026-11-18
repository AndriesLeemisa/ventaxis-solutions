import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY_DETAILS } from '../../lib/constants';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreProducts,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[82vh] flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Sunlit Architectural Background — Bright, Natural, No Dark Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-living-fan.jpg"
          alt="Sunlit architectural space with premium ceiling fan"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, warm light wash for effortless legibility while keeping the sunlit interior visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/30"></div>
      </div>

      {/* Main Decluttered Above-the-Fold Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full">
        <div className="max-w-2xl bg-white/80 backdrop-blur-md sm:bg-transparent sm:backdrop-blur-none p-6 sm:p-0 rounded-3xl border border-white/60 sm:border-0 shadow-lg sm:shadow-none space-y-6">
          {/* Subtle Human Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243A]/5 border border-[#10243A]/10 text-[#10243A]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-['Manrope'] font-semibold tracking-wide">
              Cooling Fan Supply & Installation • Gauteng
            </span>
          </div>

          {/* Clean, Human Headline */}
          <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#10243A] leading-[1.1]">
            Cooling, <span className="text-[#1479D4]">Refined.</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 block mt-2">
              The right fans, expertly installed.
            </span>
          </h1>

          {/* Concise, Human Statement (No robotic filler) */}
          <p className="font-['Inter'] text-base sm:text-lg text-gray-700 leading-relaxed">
            Keep your home, classroom, or workplace cool all year round. We help you choose the right fan for your room size and install it cleanly with full SANS electrical compliance.
          </p>

          {/* Direct Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-6 py-3.5 bg-white hover:bg-gray-50 text-[#10243A] font-['Manrope'] font-semibold text-sm sm:text-base rounded-xl border border-gray-300 shadow-xs transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <span>Browse Cooling Fans</span>
            </button>
          </div>

          {/* Trust Points — Simple, Human, Clear */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200/80">
            <div className="flex items-center gap-1.5 font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SANS 10142-1 CoC Certified</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Free Sizing & Advice</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Johannesburg & Pretoria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
