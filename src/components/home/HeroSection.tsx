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
  ArrowDown,
  Sparkles
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
    categoryName: 'Residential Timber Ceiling Fans',
    shortLabel: 'Living & Bedroom',
    heroHeadline: 'Handcrafted Timber.',
    accentWord: 'Silent Living.',
    tagline: 'Solid carved walnut blades with ultra-quiet DC motors designed for whisper-quiet bedrooms and elegant open living spaces.',
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
  const mainImageRef = useRef<HTMLImageElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

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
      // 1. Prominent Fan Image Animation (Visible slide and scale reveal)
      if (mainImageRef.current) {
        gsap.fromTo(
          mainImageRef.current,
          { opacity: 0.3, scale: 0.94, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power3.out' }
        );
      }

      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { borderColor: 'rgba(20, 121, 212, 0.4)' },
          { borderColor: 'rgba(229, 231, 235, 1)', duration: 1.2, ease: 'power2.out' }
        );
      }

      // 2. Headline animation
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

      // 3. Subtext animation
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: 'power3.out' }
        );
      }

      // 4. Badge animation
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, delay: 0.15, ease: 'back.out(1.5)' }
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
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#FAF8F5] overflow-hidden text-[#10243A] select-none border-b border-gray-200"
    >
      {/* Subtle ambient architectural background texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1479D4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* TOP NOTCH: Live Category Badge & Slide Progress */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white backdrop-blur-md border border-gray-200 shadow-sm text-[#10243A] hover:border-[#1479D4] hover:shadow-md transition-all cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-extrabold uppercase tracking-wider text-[#1479D4]">
              {currentFan.categoryName}
            </span>
            <span className="text-xs text-gray-400 font-semibold">• Click to view specs</span>
          </button>

          <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm font-['Manrope'] font-bold text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-xs">
            <span className="text-[#10243A]">Fan {currentIndex + 1} of {FAN_SLIDES.length}</span>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-700 font-semibold">{currentFan.bestFor}</span>
          </div>
        </div>

        {/* Linear progress bar */}
        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
          <div ref={progressBarRef} className="bg-[#1479D4] h-full"></div>
        </div>
      </div>

      {/* MAIN UNIFIED HERO STAGE: 90% Visual Portrayal & Large Editorial Typography */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bold Typography & Action Controls (6 cols) */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7">
          {/* Main Huge Headline — Increased Font Size */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#10243A] leading-[1.05]"
          >
            {currentFan.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479D4] to-[#20B8CE] block">
              {currentFan.accentWord}
            </span>
          </h1>

          {/* Subheading with Increased Font Size */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-normal"
          >
            {currentFan.tagline}
          </p>

          {/* Key Spec Badge */}
          <div
            ref={badgeRef}
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#1479D4] hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="font-['Manrope'] text-lg sm:text-xl font-black text-[#10243A] group-hover:text-[#1479D4] transition-colors">
                {currentFan.keyMetric}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1479D4] bg-blue-50 px-2.5 py-1 rounded-md">
                <span>View Full Specs</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              {currentFan.specPill}
            </p>
          </div>

          {/* Dual Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 sm:px-9 sm:py-4.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-extrabold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
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
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SANS 10142-1 Electrical CoC</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Free Sizing & Advice</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0" />
              <span>Gauteng-Wide Installation</span>
            </div>
          </div>
        </div>

        {/* Right Column: VIBRANT, ANIMATED, CLICKABLE FAN IMAGE SHOWCASE (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            ref={imageWrapperRef}
            onClick={() => handleNavigateToProduct(currentFan.productId)}
            className="relative w-full max-w-xl cursor-pointer group rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 bg-white transition-all duration-500 hover:shadow-cyan-500/20 hover:border-[#1479D4]"
            title={`Click image to inspect ${currentFan.categoryName} details below`}
          >
            {/* The Animated High-Resolution Image */}
            <div className="relative h-[340px] sm:h-[440px] lg:h-[480px] w-full overflow-hidden bg-gray-100">
              <img
                ref={mainImageRef}
                src={currentFan.image}
                alt={currentFan.categoryName}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/70 via-transparent to-black/10"></div>

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-['Manrope'] font-extrabold text-[#10243A] flex items-center gap-2 shadow-lg border border-gray-100">
                <Wind className="w-4 h-4 text-[#1479D4]" />
                <span>{currentFan.shortLabel}</span>
              </div>

              {/* Floating Top Right "Click to View" Pill */}
              <div className="absolute top-4 right-4 bg-[#1479D4] text-white px-3 py-1.5 rounded-full text-xs font-['Manrope'] font-bold flex items-center gap-1.5 shadow-lg group-hover:bg-[#10243A] transition-colors">
                <Eye className="w-3.5 h-3.5" />
                <span>Click to inspect ↓</span>
              </div>

              {/* Floating Bottom Card Overlaid Directly on the Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-xl flex items-center justify-between gap-3 text-[#10243A] group-hover:bg-white transition-colors">
                <div className="min-w-0">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1479D4]">
                    Featured Cooling Solution
                  </div>
                  <div className="font-['Manrope'] font-extrabold text-sm sm:text-base truncate">
                    {currentFan.categoryName}
                  </div>
                  <div className="text-xs text-gray-600 font-medium truncate">
                    {currentFan.specPill}
                  </div>
                </div>

                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1479D4] text-white flex items-center justify-center group-hover:bg-[#10243A] group-hover:translate-y-0.5 transition-all shadow-md">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>
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
