import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Wind,
  Eye,
  ArrowDown,
  Sparkles,
  Volume2,
  Gauge,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

export interface CinematicSlide {
  id: string;
  productId: string;
  categoryNumber: string;
  categoryName: string;
  shortLabel: string;
  heroHeadline: string;
  accentWord: string;
  tagline: string;
  bgImage: string;
  thumbnail: string;
  bestFor: string;
  keyMetric: string;
  secondaryMetric: string;
  specPill: string;
}

const CINEMATIC_SLIDES: CinematicSlide[] = [
  {
    id: 'residential',
    productId: 'prod-wood-ceiling-1320',
    categoryNumber: '01 / 05',
    categoryName: 'Residential Timber Ceiling Fans',
    shortLabel: 'Living & Master Bedroom',
    heroHeadline: 'Handcrafted Timber.',
    accentWord: 'Silent Comfort.',
    tagline: 'Carved solid walnut blades with whisper-quiet DC motors, creating gentle natural airflow for luxury homes, master bedrooms, and boutique safari lodges.',
    bgImage: '/images/hero-living-fan.webp',
    thumbnail: '/images/product-wooden-fan.webp',
    bestFor: 'Homes, Master Bedrooms & Luxury Lodges',
    keyMetric: '< 29 dB(A) Near-Silent',
    secondaryMetric: '35W Ultra-Low Power',
    specPill: '1320mm Solid Carved Walnut • Reversible Summer / Winter DC Motor'
  },
  {
    id: 'commercial',
    productId: 'prod-comm-ceiling-1400',
    categoryNumber: '02 / 05',
    categoryName: 'Commercial & School Hall Fans',
    shortLabel: 'School Halls & Churches',
    heroHeadline: 'Acoustic Air Movement for',
    accentWord: 'Mass Gatherings.',
    tagline: 'High-volume gentle air circulation engineered for school examination halls, university auditoriums, and churches where speech clarity is paramount.',
    bgImage: '/images/ind-education.webp',
    thumbnail: '/images/market-commercial.webp',
    bestFor: 'Classrooms, Assembly Halls & Auditoriums',
    keyMetric: '< 34 dB(A) Tested Acoustics',
    secondaryMetric: '13,500 m³/h Turnover',
    specPill: '1400mm Commercial Aerofoils • Keyed Anti-Tamper Wall Control'
  },
  {
    id: 'hvls',
    productId: 'prod-hvls-7300',
    categoryNumber: '03 / 05',
    categoryName: 'Industrial Warehouse HVLS Fans',
    shortLabel: '7.3m Warehouse HVLS',
    heroHeadline: 'Massive 7.3m Span.',
    accentWord: 'Deep Warehouse Cooling.',
    tagline: 'High-Volume Low-Speed direct-drive aerofoils creating a cooling breeze across 1,800 m², lowering perceived temperatures by up to 6°C with minimal energy draw.',
    bgImage: '/images/market-industrial.webp',
    thumbnail: '/images/product-commercial-ceiling.webp',
    bestFor: 'High-Bay Warehouses & Logistics Hubs',
    keyMetric: '888,000 m³/h Massive Airflow',
    secondaryMetric: '6°C Perceived Cooling',
    specPill: '7.3m (24ft) Aircraft Aluminium • Direct-Drive PMSM • Dual Safety Cables'
  },
  {
    id: 'wall-pedestal',
    productId: 'prod-wall-750',
    categoryNumber: '04 / 05',
    categoryName: 'Heavy-Duty Workshop Wall & Pedestal',
    shortLabel: 'Workshop & Gym',
    heroHeadline: '750mm High-Velocity',
    accentWord: 'Directional Breeze.',
    tagline: 'Rugged 3-speed oscillating fans with heavy cast-iron star bases and high-tensile wall brackets for active mechanic bays, gyms, and dispatch lines.',
    bgImage: '/images/product-industrial-wall.webp',
    thumbnail: '/images/prod-pedestal-750.webp',
    bestFor: 'Mechanic Bays, Fitness CrossFit & Factories',
    keyMetric: '18,500 m³/h Directional Airflow',
    secondaryMetric: '90° Wide Oscillating Sweep',
    specPill: '750mm (30in) • 3-Speed High-Torque Copper Motor • Close-Mesh Guard'
  },
  {
    id: 'outdoor',
    productId: 'prod-outdoor-patio-1420',
    categoryNumber: '05 / 05',
    categoryName: 'All-Weather Outdoor Patio Fans',
    shortLabel: 'Patio & Braai Veranda',
    heroHeadline: 'All-Weather Outdoor',
    accentWord: 'Patio & Braai Cooling.',
    tagline: 'Wet-rated IP55 ceiling fans engineered to generate continuous downward air movement that deters mosquitoes and keeps covered dining decks cool.',
    bgImage: '/images/product-outdoor-fan.webp',
    thumbnail: '/images/market-hospitality.webp',
    bestFor: 'Covered Patios, Dining Terraces & Braai Lapas',
    keyMetric: 'IP55 Outdoor Weatherproof',
    secondaryMetric: 'Insect Deterrent Breeze',
    specPill: '1420mm All-Weather Span • Anti-Rust Hardware • UV-Stabilised Blades'
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

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const categoryBadgeRef = useRef<HTMLDivElement>(null);
  const hudCardRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentSlide = CINEMATIC_SLIDES[currentIndex];

  // Navigate directly to the corresponding product card on the website
  const handleNavigateToProduct = (productId: string) => {
    if (onSelectProduct) {
      onSelectProduct(productId);
      return;
    }

    const elem = document.getElementById(productId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      elem.classList.add('ring-4', 'ring-[#20B8CE]', 'shadow-2xl');
      setTimeout(() => {
        elem.classList.remove('ring-4', 'ring-[#20B8CE]', 'shadow-2xl');
      }, 2500);
    } else {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Full-hero cinematic GSAP animation on slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Full-bleed background cinematic push-in & crossfade
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { opacity: 0.4, scale: 1.12, filter: 'brightness(0.7) blur(4px)' },
          { opacity: 1, scale: 1.02, filter: 'brightness(1) blur(0px)', duration: 1.4, ease: 'power2.out' }
        );

        // Continuous subtle cinematic drift across the 7-second slide
        gsap.to(bgImageRef.current, {
          scale: 1.07,
          duration: 7,
          ease: 'none',
          delay: 1.4
        });
      }

      // 2. Category badge slide
      if (categoryBadgeRef.current) {
        gsap.fromTo(
          categoryBadgeRef.current,
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
      }

      // 3. Huge headline dramatic reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 44, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' }
        );
      }

      // 4. Subtext fade-in
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: 'power3.out' }
        );
      }

      // 5. Floating cinematic HUD Card
      if (hudCardRef.current) {
        gsap.fromTo(
          hudCardRef.current,
          { x: 40, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 0.85, delay: 0.25, ease: 'power3.out' }
        );
      }

      // 6. Action buttons
      if (ctasRef.current) {
        gsap.fromTo(
          ctasRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.35, ease: 'power3.out' }
        );
      }

      // 7. Linear countdown progress bar
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { width: '0%' },
          { width: '100%', duration: 7, ease: 'none' }
        );
      }
    }, heroContainerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CINEMATIC_SLIDES.length) % CINEMATIC_SLIDES.length);
  };

  return (
    <section
      ref={heroContainerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[88vh] lg:min-h-[94vh] flex flex-col justify-between bg-[#0A131F] overflow-hidden text-white select-none border-b border-[#17263A]"
    >
      {/* 1. FULL-BLEED CINEMATIC BACKGROUND STAGE (Covering 100% of Hero Section) */}
      <div
        ref={bgLayerRef}
        onClick={() => handleNavigateToProduct(currentSlide.productId)}
        className="absolute inset-0 z-0 cursor-pointer group"
        title={`Click anywhere to view ${currentSlide.categoryName} in catalogue below`}
      >
        <img
          ref={bgImageRef}
          src={currentSlide.bgImage}
          alt={currentSlide.categoryName}
          className="w-full h-full object-cover object-center will-change-transform"
        />

        {/* Cinematic Vignette & Lighting Gradients (Deep rich luxury, never washed out) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070E18]/92 via-[#070E18]/65 to-[#070E18]/30 sm:via-[#070E18]/50 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070E18]/95 via-transparent to-[#070E18]/60"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40"></div>

        {/* Floating cinematic inspect prompt */}
        <div className="absolute top-24 right-6 sm:top-28 sm:right-12 hidden md:flex items-center gap-2.5 bg-black/60 hover:bg-[#1479D4] backdrop-blur-md text-white text-xs sm:text-sm font-['Manrope'] font-bold px-4 py-2.5 rounded-full shadow-2xl border border-white/20 transition-all duration-300 group-hover:scale-105">
          <Eye className="w-4 h-4 text-[#20B8CE]" />
          <span>Click scene to inspect this fan model below</span>
          <ArrowDown className="w-4 h-4 text-[#20B8CE] animate-bounce" />
        </div>
      </div>

      {/* 2. TOP CINEMATIC CONTROLS: Category Header & Progress Timeline */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Active Category Badge */}
          <div
            ref={categoryBadgeRef}
            onClick={() => handleNavigateToProduct(currentSlide.productId)}
            className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer hover:border-[#20B8CE] transition-all group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#20B8CE] shadow-sm shadow-[#20B8CE] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#20B8CE] tracking-wider uppercase">
              {currentSlide.categoryNumber}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-extrabold uppercase tracking-wider text-white group-hover:text-[#20B8CE] transition-colors">
              {currentSlide.categoryName}
            </span>
          </div>

          {/* Right Best-For Pill */}
          <div className="hidden lg:flex items-center gap-3 text-xs sm:text-sm font-['Manrope'] font-bold text-gray-300 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xs">
            <span className="text-gray-400">Application:</span>
            <span className="text-white font-semibold">{currentSlide.bestFor}</span>
          </div>
        </div>

        {/* Cinematic Linear Progress Line */}
        <div className="w-full bg-white/15 h-1.5 rounded-full mt-3 overflow-hidden backdrop-blur-xs">
          <div ref={progressBarRef} className="bg-gradient-to-r from-[#1479D4] to-[#20B8CE] h-full shadow-sm shadow-cyan-400"></div>
        </div>
      </div>

      {/* 3. MAIN CINEMATIC HERO COMPOSITION: Huge Headline + Floating Glassmorphic HUD */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Grand Editorial Headline & Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* Main Huge Headline — Commanding Font Size */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] drop-shadow-md"
          >
            {currentSlide.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B8CE] via-cyan-300 to-[#1479D4] block sm:inline drop-shadow">
              {currentSlide.accentWord}
            </span>
          </h1>

          {/* Subheading with Increased Font Size */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-normal max-w-2xl drop-shadow"
          >
            {currentSlide.tagline}
          </p>

          {/* Dual Action Buttons */}
          <div
            ref={ctasRef}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 sm:px-10 sm:py-4.5 bg-gradient-to-r from-[#1479D4] to-[#20B8CE] hover:from-[#20B8CE] hover:to-[#1479D4] text-[#070E18] font-['Manrope'] font-black text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5 text-[#070E18] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleNavigateToProduct(currentSlide.productId)}
              className="px-7 py-4 sm:px-8 sm:py-4.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-['Manrope'] font-bold text-base sm:text-lg rounded-2xl border border-white/25 hover:border-[#20B8CE] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>View This Fan Below</span>
              <ArrowDown className="w-4 h-4 text-[#20B8CE] animate-bounce" />
            </button>
          </div>

          {/* Reassurance Trust Row */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SANS 10142-1 CoC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#20B8CE] shrink-0" />
              <span>Free Engineering Sizing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#20B8CE] shrink-0" />
              <span>Gauteng Deployment</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Cinematic Glassmorphic HUD Badge (5 cols) */}
        <div
          ref={hudCardRef}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div
            onClick={() => handleNavigateToProduct(currentSlide.productId)}
            className="w-full max-w-md bg-black/60 hover:bg-black/80 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:border-[#20B8CE] shadow-2xl transition-all duration-300 cursor-pointer group space-y-4"
            title={`Click to inspect ${currentSlide.categoryName} specifications`}
          >
            {/* Top row with live status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-[#20B8CE]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                  Performance Specification
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Verified
              </span>
            </div>

            {/* Key Metrics Highlight */}
            <div className="space-y-1">
              <div className="font-['Manrope'] text-2xl sm:text-3xl font-black text-white group-hover:text-[#20B8CE] transition-colors">
                {currentSlide.keyMetric}
              </div>
              <div className="text-sm font-semibold text-gray-300">
                {currentSlide.secondaryMetric}
              </div>
            </div>

            {/* Spec Details */}
            <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-3">
              {currentSlide.specPill}
            </p>

            {/* Interactive footer bar on HUD */}
            <div className="pt-2 flex items-center justify-between text-xs font-['Manrope'] font-bold text-[#20B8CE] group-hover:text-white transition-colors">
              <span>View equipment details & CAD</span>
              <div className="w-7 h-7 rounded-full bg-[#1479D4]/40 flex items-center justify-center group-hover:bg-[#20B8CE] group-hover:text-[#070E18] transition-colors">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM CINEMATIC CONTROLS: Interactive Fan Carousel Switcher */}
      <div className="relative z-20 w-full bg-black/75 backdrop-blur-xl border-t border-white/10 py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Arrow navigation */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous fan type"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next fan type"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Thumbnails for All 5 Fan Types */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1 justify-start md:justify-center">
            {CINEMATIC_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-3.5 py-2 rounded-xl text-left transition-all duration-300 flex items-center gap-2.5 border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white border-[#20B8CE] shadow-lg shadow-cyan-500/20 scale-102 ring-1 ring-[#20B8CE]'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-white/20 bg-black/40">
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

          {/* Direct jump link */}
          <button
            onClick={() => handleNavigateToProduct(currentSlide.productId)}
            className="hidden xl:flex items-center gap-1.5 text-xs font-['Manrope'] font-bold text-[#20B8CE] hover:text-white uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span>Jump to {currentSlide.shortLabel}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
