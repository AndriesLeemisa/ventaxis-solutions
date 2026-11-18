import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Wind,
  Home,
  GraduationCap,
  Factory,
  Wrench,
  Sun,
  Eye,
  ArrowDown
} from 'lucide-react';

export interface FanSlide {
  id: string;
  productId: string;
  categoryName: string;
  shortLabel: string;
  heroHeadline: string;
  accentWord: string;
  tagline: string;
  image: string;
  thumbnail: string;
  bestFor: string;
  keyMetric: string;
  specPill: string;
}

const FAN_SLIDES: FanSlide[] = [
  {
    id: 'residential',
    productId: 'prod-wood-ceiling-1320',
    categoryName: 'Residential & Designer Ceiling Fans',
    shortLabel: 'Living & Bedroom',
    heroHeadline: 'Handcrafted Timber.',
    accentWord: 'Silent Living.',
    tagline: 'Solid carved walnut blades and ultra-efficient DC motors designed for whisper-quiet bedrooms and elegant open living spaces.',
    image: '/images/hero-living-fan.webp',
    thumbnail: '/images/product-wooden-fan.webp',
    bestFor: 'Homes, Master Bedrooms & Luxury Lodges',
    keyMetric: '< 29 dB(A) Whisper-Quiet',
    specPill: '1320mm Solid Walnut • Ultra-Low 35W Power Draw • 6 Speeds'
  },
  {
    id: 'commercial',
    productId: 'prod-comm-ceiling-1400',
    categoryName: 'Commercial & School Hall Fans',
    shortLabel: 'Schools & Halls',
    heroHeadline: 'Whisper-Quiet Airflow for',
    accentWord: 'Large Gatherings.',
    tagline: 'High-volume gentle air circulation across classrooms, examination halls, and church auditoriums without acoustic distraction.',
    image: '/images/ind-education.webp',
    thumbnail: '/images/market-commercial.webp',
    bestFor: 'Classrooms, Assembly Venues & Churches',
    keyMetric: '< 34 dB(A) Tested Acoustics',
    specPill: '1400mm Commercial Aerofoil • Keyed Wall Controls • SANS Certified'
  },
  {
    id: 'hvls',
    productId: 'prod-hvls-7300',
    categoryName: 'Industrial Warehouse HVLS Fans',
    shortLabel: '7.3m Warehouse HVLS',
    heroHeadline: 'Massive 7.3m Diameter.',
    accentWord: 'Deep Warehouse Cooling.',
    tagline: 'Direct-drive PMSM aerofoils moving massive air volumes to lower perceived temperature by up to 6°C across 1,800 m².',
    image: '/images/market-industrial.webp',
    thumbnail: '/images/product-commercial-ceiling.webp',
    bestFor: 'High-Bay Warehouses & Manufacturing Plants',
    keyMetric: '888,000 m³/h Massive Airflow',
    specPill: '7.3m (24ft) Span • Direct-Drive PMSM • Dual Secondary Safety Ropes'
  },
  {
    id: 'wall-pedestal',
    productId: 'prod-wall-750',
    categoryName: 'Heavy-Duty Workshop Wall & Pedestal',
    shortLabel: 'Workshop & Gym',
    heroHeadline: '750mm High-Velocity',
    accentWord: 'Directional Breeze.',
    tagline: 'Rugged 3-speed oscillating fans with solid cast-iron star bases and high-tensile wall brackets for active mechanic bays and workstations.',
    image: '/images/product-industrial-wall.webp',
    thumbnail: '/images/prod-pedestal-750.webp',
    bestFor: 'Mechanic Bays, Fitness Gyms & Packing Lines',
    keyMetric: '18,500 m³/h High Airflow',
    specPill: '750mm (30in) • 90° Oscillating Sweep • Safety Wire Guard'
  },
  {
    id: 'outdoor',
    productId: 'prod-outdoor-patio-1420',
    categoryName: 'All-Weather Outdoor Patio Fans',
    shortLabel: 'Patio & Braai Area',
    heroHeadline: 'All-Weather Outdoor',
    accentWord: 'Patio & Braai Cooling.',
    tagline: 'Wet-rated IP55 ceiling fans generating continuous downward airflow to deter insects and keep covered verandas comfortably cool.',
    image: '/images/product-outdoor-fan.webp',
    thumbnail: '/images/market-hospitality.webp',
    bestFor: 'Covered Patios, Dining Terraces & Braai Lapas',
    keyMetric: 'IP55 Weather & Rust Proof',
    specPill: '1420mm All-Weather Span • Insect Deterrent Breeze • Anti-Corrosion'
  }
];

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
  onExploreServices: () => void;
  onSelectProduct?: (productId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreProducts,
  onExploreServices,
  onSelectProduct,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const unifiedContentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const clickPromptRef = useRef<HTMLDivElement>(null);

  const currentFan = FAN_SLIDES[currentIndex];

  // Navigate directly to the corresponding product card on the website
  const handleNavigateToProduct = (productId: string) => {
    if (onSelectProduct) {
      onSelectProduct(productId);
      return;
    }

    const elem = document.getElementById(productId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.classList.add('ring-4', 'ring-[#1479D4]', 'shadow-2xl');
      setTimeout(() => {
        elem.classList.remove('ring-4', 'ring-[#1479D4]', 'shadow-2xl');
      }, 2500);
    } else {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Auto-advance slides every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FAN_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // GSAP Animations on unified hero slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Full-bleed background crossfade & subtle cinematic push-in
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { opacity: 0.65, scale: 1.05 },
          { opacity: 1, scale: 1.0, duration: 1.1, ease: 'power2.out' }
        );
      }

      // 2. Unified headline animation
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

      // 3. Subtext animation
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.12, ease: 'power3.out' }
        );
      }

      // 4. Spec pill & interactive prompt
      if (pillRef.current) {
        gsap.fromTo(
          pillRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, delay: 0.2, ease: 'back.out(1.5)' }
        );
      }

      if (clickPromptRef.current) {
        gsap.fromTo(
          clickPromptRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: 'power2.out' }
        );
      }

      // 5. Linear progress bar
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { width: '0%' },
          { width: '100%', duration: 6.5, ease: 'none' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FAN_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FAN_SLIDES.length) % FAN_SLIDES.length);
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#10243A] overflow-hidden text-[#10243A] select-none"
    >
      {/* 90% VISUAL IMAGE STAGE — Full-bleed, Clickable to navigate to product below */}
      <div
        onClick={() => handleNavigateToProduct(currentFan.productId)}
        className="absolute inset-0 z-0 cursor-pointer group"
        title={`Click to view ${currentFan.categoryName} details below`}
      >
        <img
          ref={bgImageRef}
          src={currentFan.image}
          alt={currentFan.categoryName}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Seamless, unified editorial wash (Warm natural light from left, crystal clear view on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/75 sm:to-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30"></div>

        {/* Floating "Click to inspect this fan" visual badge on the image */}
        <div
          ref={clickPromptRef}
          className="absolute top-20 right-6 sm:top-24 sm:right-10 hidden sm:flex items-center gap-2 bg-[#10243A]/85 hover:bg-[#1479D4] backdrop-blur-md text-white text-xs sm:text-sm font-['Manrope'] font-bold px-4 py-2.5 rounded-full shadow-xl transition-all duration-300 border border-white/20 group-hover:scale-105"
        >
          <Eye className="w-4 h-4 text-[#20B8CE]" />
          <span>Click image to view specifications below</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* TOP NOTCH: Category Badge & Slide Progress */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm text-[#10243A] hover:border-[#1479D4] transition-all cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-extrabold uppercase tracking-wider text-[#1479D4]">
              {currentFan.categoryName}
            </span>
            <span className="text-xs text-gray-400">• Click to view</span>
          </button>

          <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm font-['Manrope'] font-bold text-gray-700 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xs">
            <span className="text-[#10243A]">Fan {currentIndex + 1} of {FAN_SLIDES.length}</span>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-700 font-semibold">{currentFan.bestFor}</span>
          </div>
        </div>

        {/* Progress bar line */}
        <div className="w-full bg-gray-300/60 h-1 rounded-full mt-3 overflow-hidden">
          <div ref={progressBarRef} className="bg-[#1479D4] h-full"></div>
        </div>
      </div>

      {/* MAIN UNIFIED CONTENT: High-Impact Editorial Layout (One Seamless Experience) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14 my-auto w-full">
        <div
          ref={unifiedContentRef}
          className="max-w-3xl space-y-6 sm:space-y-7"
        >
          {/* Main Huge Headline — Increased Font Size */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#10243A] leading-[1.04]"
          >
            {currentFan.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479D4] to-[#20B8CE] block sm:inline">
              {currentFan.accentWord}
            </span>
          </h1>

          {/* Subheading with Increased Font Size */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-lg sm:text-2xl md:text-2xl text-gray-800 leading-relaxed font-normal max-w-2xl"
          >
            {currentFan.tagline}
          </p>

          {/* Integrated Live Spec Pill */}
          <div
            ref={pillRef}
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="inline-flex flex-wrap items-center gap-2.5 p-2 pr-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md cursor-pointer hover:border-[#1479D4] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-gray-200 bg-gray-100">
              <img
                src={currentFan.thumbnail}
                alt={currentFan.shortLabel}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="text-left">
              <div className="font-['Manrope'] text-sm sm:text-base font-black text-[#10243A] flex items-center gap-2">
                <span>{currentFan.keyMetric}</span>
                <span className="text-[11px] font-mono font-bold text-[#1479D4] uppercase bg-blue-50 px-2 py-0.5 rounded">
                  View Specs ↓
                </span>
              </div>
              <div className="text-xs text-gray-600 font-medium line-clamp-1">
                {currentFan.specPill}
              </div>
            </div>
          </div>

          {/* Dual Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 sm:px-10 sm:py-4.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-extrabold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleNavigateToProduct(currentFan.productId)}
              className="px-7 py-4 sm:px-8 sm:py-4.5 bg-white hover:bg-gray-50 text-[#10243A] font-['Manrope'] font-bold text-base sm:text-lg rounded-2xl border-2 border-gray-300 hover:border-[#1479D4] shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View This Fan Below</span>
              <ArrowDown className="w-4 h-4 text-[#1479D4]" />
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SANS 10142-1 Electrical CoC</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Free Room Sizing & Advice</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Gauteng-Wide Installation</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SEAMLESS THUMBNAIL SELECTOR BAR */}
      <div className="relative z-20 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Arrow navigation */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous fan type"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#1479D4] text-[#10243A] hover:text-white transition-all flex items-center justify-center cursor-pointer border border-gray-200 shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next fan type"
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#1479D4] text-[#10243A] hover:text-white transition-all flex items-center justify-center cursor-pointer border border-gray-200 shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Thumbnails for All 5 Fan Types */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1 justify-start md:justify-center">
            {FAN_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-3.5 py-2 rounded-xl text-left transition-all duration-200 flex items-center gap-2.5 border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#10243A] text-white border-[#10243A] shadow-md scale-102 ring-2 ring-[#1479D4]/40'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-gray-200 bg-gray-100">
                    <img
                      src={slide.thumbnail}
                      alt={slide.shortLabel}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-['Manrope'] font-bold text-xs sm:text-sm leading-tight whitespace-nowrap">
                      {slide.shortLabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="hidden xl:flex items-center gap-1.5 text-xs font-['Manrope'] font-bold text-[#1479D4] hover:text-[#10243A] uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span>Jump to {currentFan.shortLabel}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
