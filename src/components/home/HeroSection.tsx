import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Wind,
  Home,
  GraduationCap,
  Factory,
  Wrench,
  Sun
} from 'lucide-react';

interface FanSlide {
  id: string;
  categoryName: string;
  shortLabel: string;
  icon: React.ReactNode;
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
    categoryName: 'Residential & Designer Fans',
    shortLabel: 'Living & Bedroom',
    icon: <Home className="w-5 h-5" />,
    heroHeadline: 'Handcrafted Timber.',
    accentWord: 'Silent Comfort.',
    tagline: 'Solid carved walnut blades and ultra-efficient DC motors designed for whisper-quiet bedrooms and elegant living spaces.',
    image: '/images/hero-living-fan.webp',
    thumbnail: '/images/product-wooden-fan.webp',
    bestFor: 'Homes, Master Bedrooms & Luxury Lodges',
    keyMetric: '< 29 dB(A) Whisper-Quiet',
    specPill: 'Ultra-Low 35W Power Draw • 6 Speeds'
  },
  {
    id: 'commercial',
    categoryName: 'Commercial & School Hall Fans',
    shortLabel: 'Schools & Halls',
    icon: <GraduationCap className="w-5 h-5" />,
    heroHeadline: 'Whisper-Quiet Airflow for',
    accentWord: 'Learners & Audiences.',
    tagline: 'High-volume gentle air circulation across examination halls, church auditoriums, and open-plan commercial venues.',
    image: '/images/ind-education.webp',
    thumbnail: '/images/market-commercial.webp',
    bestFor: 'Classrooms, Assembly Venues & Churches',
    keyMetric: '< 34 dB(A) Tested Acoustics',
    specPill: 'Lockable Wall Switches • SANS CoC Certified'
  },
  {
    id: 'hvls',
    categoryName: 'Industrial Warehouse HVLS',
    shortLabel: '7.3m Warehouse HVLS',
    icon: <Factory className="w-5 h-5" />,
    heroHeadline: 'Massive 7.3m Diameter.',
    accentWord: 'Deep Cooling Breeze.',
    tagline: 'Creates a natural cooling breeze across footprints over 1,800 m², lowering perceived temperature by up to 6°C.',
    image: '/images/market-industrial.webp',
    thumbnail: '/images/product-commercial-ceiling.webp',
    bestFor: 'High-Bay Warehouses & Manufacturing Plants',
    keyMetric: '888,000 m³/h Massive Airflow',
    specPill: 'Gearless PMSM Motor • Dual Safety Tethers'
  },
  {
    id: 'wall-pedestal',
    categoryName: 'Heavy-Duty Wall & Pedestal',
    shortLabel: 'Workshop & Gym',
    icon: <Wrench className="w-5 h-5" />,
    heroHeadline: '750mm High-Velocity',
    accentWord: 'Directional Power.',
    tagline: 'Oscillating industrial cooling fans with solid cast-iron star bases and heavy wall mounting brackets for active work zones.',
    image: '/images/product-industrial-wall.webp',
    thumbnail: '/images/prod-pedestal-750.webp',
    bestFor: 'Mechanic Bays, Fitness Gyms & Packing Lines',
    keyMetric: '18,500 m³/h Air Movement',
    specPill: '90° Wide Oscillating Sweep • Safety Wire Guard'
  },
  {
    id: 'outdoor',
    categoryName: 'All-Weather Outdoor Patio',
    shortLabel: 'Patio & Braai Area',
    icon: <Sun className="w-5 h-5" />,
    heroHeadline: 'All-Weather Outdoor',
    accentWord: 'Patio Cooling.',
    tagline: 'Wet-rated IP55 fans that generate steady downward airflow to deter insects and keep covered verandas comfortably cool.',
    image: '/images/product-outdoor-fan.webp',
    thumbnail: '/images/market-hospitality.webp',
    bestFor: 'Covered Patios, Dining Terraces & Braai Lapas',
    keyMetric: 'IP55 Weather & Rust Proof',
    specPill: 'Continuous Breeze Deters Flies & Mosquitoes'
  }
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentFan = FAN_SLIDES[currentIndex];

  // Auto-advance slides every 6.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FAN_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // GSAP Animations on slide transition
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background image crossfade and gentle cinematic push-in
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { opacity: 0.65, scale: 1.06 },
          { opacity: 1, scale: 1.0, duration: 1.1, ease: 'power2.out' }
        );
      }

      // 2. Headline and text entrance
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        );
      }

      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: 'power3.out' }
        );
      }

      // 3. Category badge
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }

      // 4. Floating image spec card
      if (floatingCardRef.current) {
        gsap.fromTo(
          floatingCardRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.25, ease: 'power3.out' }
        );
      }

      // 5. Animated progress bar
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
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#10243A] overflow-hidden text-white select-none"
    >
      {/* 90% VISUAL IMAGE STAGE — High-impact background visual */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src={currentFan.image}
          alt={currentFan.categoryName}
          className="w-full h-full object-cover object-center"
        />
        {/* Crisp editorial gradients: light wash on left for large text readability, open view on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20"></div>
      </div>

      {/* TOP NOTCH: Live Fan Type Indicator & Progress */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm text-[#10243A]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-extrabold uppercase tracking-wider text-[#1479D4]">
              {currentFan.categoryName}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm font-['Manrope'] font-bold text-gray-700 bg-white/85 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-xs">
            <span className="text-[#10243A]">Slide {currentIndex + 1} of {FAN_SLIDES.length}</span>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-700 font-semibold">{currentFan.bestFor}</span>
          </div>
        </div>

        {/* Progress bar line */}
        <div className="w-full bg-gray-200/60 h-1 rounded-full mt-3 overflow-hidden">
          <div ref={progressBarRef} className="bg-[#1479D4] h-full"></div>
        </div>
      </div>

      {/* MAIN CENTER: Increased Font Size & 90% Visual Portrayal */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Bold Editorial Typography (7 cols) */}
        <div
          ref={contentCardRef}
          className="lg:col-span-7 bg-white/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-3xl border border-white/60 lg:border-0 shadow-xl lg:shadow-none space-y-6"
        >
          {/* Main Huge Headline */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tight text-[#10243A] leading-[1.05]"
          >
            {currentFan.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1479D4] to-[#20B8CE] block sm:inline">
              {currentFan.accentWord}
            </span>
          </h1>

          {/* Subheading with Increased Font Size */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-normal max-w-2xl"
          >
            {currentFan.tagline}
          </p>

          {/* Dual Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 sm:px-9 sm:py-4.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-extrabold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>GET A FREE SIZING QUOTE</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-7 py-4 sm:px-8 sm:py-4.5 bg-white hover:bg-gray-50 text-[#10243A] font-['Manrope'] font-bold text-base sm:text-lg rounded-2xl border-2 border-gray-300 hover:border-[#1479D4] shadow-xs transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <span>Explore All Cooling Fans</span>
            </button>
          </div>

          {/* Trust strip */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm sm:text-base text-gray-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>SANS 10142-1 Electrical CoC</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1479D4] shrink-0" />
              <span>Gauteng-Wide Installation</span>
            </div>
          </div>
        </div>

        {/* Right Column: Floating Visual Spec Card (5 cols) */}
        <div
          ref={floatingCardRef}
          className="lg:col-span-5 flex justify-end"
        >
          <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-white/80 shadow-2xl max-w-md w-full space-y-4">
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={currentFan.thumbnail}
                alt={currentFan.categoryName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#10243A]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-white flex items-center gap-1.5 shadow-sm">
                <Wind className="w-3.5 h-3.5 text-[#20B8CE]" />
                <span>Featured Unit</span>
              </div>
            </div>

            <div className="space-y-2 text-[#10243A]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-['Manrope'] font-extrabold uppercase tracking-wider text-gray-500">
                  Certified Performance
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                  Ready in Stock
                </span>
              </div>

              <div className="font-['Manrope'] text-xl sm:text-2xl font-black text-[#10243A]">
                {currentFan.keyMetric}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                {currentFan.specPill}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM THUMBNAIL SELECTOR BAR (GSAP-READY) */}
      <div className="relative z-20 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 py-3 sm:py-4 px-4 sm:px-6">
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

          <div className="hidden xl:block text-xs font-['Manrope'] font-bold text-gray-500 uppercase tracking-wider shrink-0">
            Hover to Pause • Click to Switch
          </div>
        </div>
      </div>
    </section>
  );
};
