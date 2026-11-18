import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowDown
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
}

const CINEMATIC_SLIDES: CinematicSlide[] = [
  {
    id: 'hvls-install',
    productId: 'prod-hvls-7300',
    categoryNumber: '01 / 10',
    categoryName: 'Logistics Warehouse HVLS Installation',
    shortLabel: 'Warehouse HVLS Install',
    heroHeadline: 'High-Bay Warehouse',
    accentWord: 'HVLS Installation.',
    tagline: 'Certified technicians installing massive 7.3m direct-drive HVLS fans on structural steel with elevated scissor lifts.',
    bgImage: '/images/hero-hvls-install.webp',
    thumbnail: '/images/hero-hvls-install.webp',
    bestFor: 'Distribution Hubs & Warehouses'
  },
  {
    id: 'hvls-maintenance',
    productId: 'prod-hvls-7300',
    categoryNumber: '02 / 10',
    categoryName: 'HVLS Motor Hub Torque Servicing',
    shortLabel: 'HVLS Maintenance',
    heroHeadline: 'Precision Servicing.',
    accentWord: 'HVLS Motor Hub Maintenance.',
    tagline: 'South African electrical technicians performing scheduled torque calibrations and vibration balancing from aerial work platforms.',
    bgImage: '/images/hero-hvls-maintenance.webp',
    thumbnail: '/images/hero-hvls-maintenance.webp',
    bestFor: 'Automotive & Heavy Manufacturing'
  },
  {
    id: 'workshop-wall',
    productId: 'prod-wall-750',
    categoryNumber: '03 / 10',
    categoryName: 'Workshop Wall Fan Servicing',
    shortLabel: 'Workshop Wall Fan',
    heroHeadline: 'Rugged Workshop',
    accentWord: 'Directional Cooling.',
    tagline: 'Skilled technicians servicing heavy-duty 750mm oscillating wall fans in busy mechanics bays and fabrication workshops.',
    bgImage: '/images/hero-workshop-wall-service.webp',
    thumbnail: '/images/hero-workshop-wall-service.webp',
    bestFor: 'Mechanic Bays & Repair Workshops'
  },
  {
    id: 'hangar-maintenance',
    productId: 'prod-hvls-7300',
    categoryNumber: '04 / 10',
    categoryName: 'Aviation Hangar Fan Maintenance',
    shortLabel: 'Aircraft Hangar',
    heroHeadline: 'Aviation Scale.',
    accentWord: 'Hangar Destratification.',
    tagline: 'Aviation engineers on hydraulic boom lifts conducting annual inspections on large-span cooling and destratification fans.',
    bgImage: '/images/hero-hangar-maintenance.webp',
    thumbnail: '/images/hero-hangar-maintenance.webp',
    bestFor: 'Aircraft Hangars & Aerospace Workshops'
  },
  {
    id: 'industrial-rigging',
    productId: 'prod-comm-ceiling-1400',
    categoryNumber: '05 / 10',
    categoryName: 'Industrial Ceiling Fan Rigging',
    shortLabel: 'Industrial Rigging',
    heroHeadline: 'Certified Rigging.',
    accentWord: 'Industrial Fan Systems.',
    tagline: 'Professional electrical contractors mounting high-volume industrial ceiling fan systems to eliminate stagnant heat.',
    bgImage: '/images/installation-service.webp',
    thumbnail: '/images/installation-service.webp',
    bestFor: 'Factory Assembly Lines & Food Processing'
  },
  {
    id: 'school-hall',
    productId: 'prod-comm-ceiling-1400',
    categoryNumber: '06 / 10',
    categoryName: 'School Examination & Assembly Halls',
    shortLabel: 'School Assembly Hall',
    heroHeadline: 'Acoustic Air Movement.',
    accentWord: 'School Hall Comfort.',
    tagline: 'Near-silent commercial aerofoils providing gentle air turnover without disturbing examinations or hall speech clarity.',
    bgImage: '/images/ind-education.webp',
    thumbnail: '/images/ind-education.webp',
    bestFor: 'School Halls, Universities & Auditoriums'
  },
  {
    id: 'church-auditorium',
    productId: 'prod-comm-ceiling-1400',
    categoryNumber: '07 / 10',
    categoryName: 'Church & Community Auditoriums',
    shortLabel: 'Church Auditorium',
    heroHeadline: 'Quiet Ventilation.',
    accentWord: 'Worship Auditoriums.',
    tagline: 'High-ceiling fan arrays keeping congregations cool during high-capacity weekend services across Gauteng.',
    bgImage: '/images/ind-religious.webp',
    thumbnail: '/images/ind-religious.webp',
    bestFor: 'Churches, Temples & Community Centres'
  },
  {
    id: 'pedestal-spot',
    productId: 'prod-pedestal-750',
    categoryNumber: '08 / 10',
    categoryName: 'Heavy-Duty Pedestal Spot Cooling',
    shortLabel: '750mm Pedestal Fan',
    heroHeadline: 'High-Velocity',
    accentWord: 'Portable Spot Cooling.',
    tagline: 'Cast-iron base 750mm pedestal fans engineered for intense heat dissipation in welding and fabrication zones.',
    bgImage: '/images/prod-pedestal-750.webp',
    thumbnail: '/images/prod-pedestal-750.webp',
    bestFor: 'Welding Bays, Foundry & Packing Stations'
  },
  {
    id: 'patio-outdoor',
    productId: 'prod-outdoor-patio-1420',
    categoryNumber: '09 / 10',
    categoryName: 'All-Weather Outdoor Patio Fans',
    shortLabel: 'Patio & Braai Veranda',
    heroHeadline: 'All-Weather Comfort.',
    accentWord: 'Patio & Braai Cooling.',
    tagline: 'IP55 wet-rated outdoor ceiling fans keeping dining decks cool while naturally deterring mosquitoes.',
    bgImage: '/images/product-outdoor-fan.webp',
    thumbnail: '/images/product-outdoor-fan.webp',
    bestFor: 'Covered Decks, Restaurants & Safari Lodges'
  },
  {
    id: 'timber-residential',
    productId: 'prod-wood-ceiling-1320',
    categoryNumber: '10 / 10',
    categoryName: 'Residential Timber Ceiling Fans',
    shortLabel: 'Timber Living Fan',
    heroHeadline: 'Handcrafted Timber.',
    accentWord: 'Silent DC Comfort.',
    tagline: 'Solid carved walnut ceiling fans with ultra-efficient whisper-quiet DC motors for modern South African homes.',
    bgImage: '/images/hero-living-fan.webp',
    thumbnail: '/images/hero-living-fan.webp',
    bestFor: 'Living Rooms, Master Bedrooms & Suites'
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

      // 3. Headline dramatic reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 35, opacity: 0, filter: 'blur(8px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out' }
        );
      }

      // 4. Subtext fade-in
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, delay: 0.15, ease: 'power3.out' }
        );
      }

      // 5. Action buttons
      if (ctasRef.current) {
        gsap.fromTo(
          ctasRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.25, ease: 'power3.out' }
        );
      }

      // 6. Linear countdown progress bar
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

        {/* Soft, targeted gradient that leaves the technicians and fans 85%+ clear and unblocked */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/95 via-[#060D17]/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D17]/85 via-transparent to-transparent hidden lg:block"></div>

        {/* Floating inspect prompt */}
        <div className="absolute top-20 right-6 sm:top-24 sm:right-10 hidden md:flex items-center gap-2 bg-black/50 hover:bg-[#1479D4] backdrop-blur-md text-white text-xs sm:text-sm font-['Manrope'] font-bold px-4 py-2 rounded-full shadow-lg border border-white/20 transition-all duration-300">
          <Eye className="w-4 h-4 text-[#20B8CE]" />
          <span>Click scene to jump to product</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#20B8CE]" />
        </div>
      </div>

      {/* 2. TOP CINEMATIC CONTROLS: Category Header & Progress Timeline */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Active Category Badge */}
          <div
            ref={categoryBadgeRef}
            onClick={() => handleNavigateToProduct(currentSlide.productId)}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer hover:border-[#20B8CE] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#20B8CE] shadow-sm shadow-[#20B8CE] animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-[#20B8CE] tracking-wider uppercase">
              {currentSlide.categoryNumber}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-bold uppercase tracking-wider text-white group-hover:text-[#20B8CE] transition-colors">
              {currentSlide.categoryName}
            </span>
          </div>

          {/* Right Best-For Pill */}
          <div className="hidden md:flex items-center gap-2 text-xs font-['Manrope'] font-medium text-gray-300 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <span className="text-gray-400">Environment:</span>
            <span className="text-white font-semibold">{currentSlide.bestFor}</span>
          </div>
        </div>

        {/* Cinematic Linear Progress Line */}
        <div className="w-full bg-white/15 h-1 rounded-full mt-2.5 overflow-hidden backdrop-blur-xs">
          <div ref={progressBarRef} className="bg-gradient-to-r from-[#1479D4] to-[#20B8CE] h-full shadow-sm shadow-cyan-400"></div>
        </div>
      </div>

      {/* 3. MAIN CINEMATIC HERO COMPOSITION: Clean, Decluttered, Positioned to not block imagery */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 mt-auto mb-6 sm:mb-10 w-full">
        <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-5">
          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08] drop-shadow-lg"
          >
            {currentSlide.heroHeadline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B8CE] via-cyan-300 to-[#1479D4] block sm:inline drop-shadow">
              {currentSlide.accentWord}
            </span>
          </h1>

          {/* Single Clear Sub-line (Decluttered, leaves 85%+ of image open) */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-normal max-w-xl drop-shadow"
          >
            {currentSlide.tagline}
          </p>

          {/* Action Buttons */}
          <div
            ref={ctasRef}
            className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[#1479D4] to-[#20B8CE] hover:from-[#20B8CE] hover:to-[#1479D4] text-[#070E18] font-['Manrope'] font-black text-sm sm:text-base rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#070E18]" />
            </button>

            <button
              onClick={() => handleNavigateToProduct(currentSlide.productId)}
              className="px-5 py-3.5 sm:px-6 sm:py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-['Manrope'] font-bold text-sm sm:text-base rounded-xl border border-white/25 hover:border-[#20B8CE] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>View This Fan Below</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#20B8CE]" />
            </button>
          </div>

          {/* Reassurance Trust Row */}
          <div className="flex items-center gap-4 text-xs text-gray-300 font-medium pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              SANS 10142-1 CoC Certified Rigging & Installation
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8CE] shrink-0" />
              Gauteng On-Site Servicing & Maintenance
            </span>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM CINEMATIC CONTROLS: 10 Fan Interactive Scrubber */}
      <div className="relative z-20 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 py-2.5 sm:py-3 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Arrow navigation */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous fan"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next fan"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Thumbnails for All 10 Fan Types */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1 justify-start">
            {CINEMATIC_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-2.5 py-1.5 rounded-lg text-left transition-all duration-300 flex items-center gap-2 border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white border-[#20B8CE] shadow-md shadow-cyan-500/20 ring-1 ring-[#20B8CE]'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                  title={`${slide.categoryNumber}: ${slide.shortLabel}`}
                >
                  <div className="w-6 h-6 rounded-md overflow-hidden shrink-0 border border-white/20 bg-black/40">
                    <img
                      src={slide.thumbnail}
                      alt={slide.shortLabel}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-['Manrope'] font-bold text-xs whitespace-nowrap">
                    <span className="text-[#20B8CE] mr-1">{String(index + 1).padStart(2, '0')}</span>
                    <span className={isActive ? 'text-white' : 'text-gray-300'}>{slide.shortLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Direct jump counter */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-gray-400 shrink-0">
            <span className="text-[#20B8CE]">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </section>
  );
};
