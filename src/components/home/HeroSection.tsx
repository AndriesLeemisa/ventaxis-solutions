import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Building2,
  Phone,
  ArrowDown
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

export interface HvacHeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  facilityType: string;
  spec: string;
}

const HVAC_HERO_SLIDES: HvacHeroSlide[] = [
  {
    id: 'rooftop-hvac',
    badge: 'Industrial Rooftop HVAC & Chiller Plant',
    title: 'Industrial HVAC & Advanced Cooling Solutions',
    subtitle: 'Delivering reliable cooling, ventilation and climate-control solutions for commercial and industrial environments.',
    image: '/images/hvac-rooftop-hero.webp',
    facilityType: 'Commercial Complex & Malls',
    spec: 'Large-Scale Rooftop Package Units & Chillers'
  },
  {
    id: 'chiller-plant',
    badge: 'Centralised Chiller Infrastructure',
    title: 'Engineered Liquid Chillers & Plant Rooms',
    subtitle: 'Heavy-duty water-cooled and air-cooled liquid chiller plants engineered for continuous industrial operations.',
    image: '/images/hvac-chiller-plant-room.webp',
    facilityType: 'Industrial Plants & Refineries',
    spec: 'Dual Compressor Circuits & Process Glycol Loops'
  },
  {
    id: 'rooftop-condensers',
    badge: 'Commercial Air-Conditioning Networks',
    title: 'High-Capacity Multi-Zone Climate Systems',
    subtitle: 'Engineered multi-unit condenser arrays and centralized ventilation ducting for major corporate facilities.',
    image: '/images/hvac-rooftop-condensers.webp',
    facilityType: 'Corporate Headquarters & Campuses',
    spec: 'Inverter VRV / VRF Energy-Optimised Climate'
  },
  {
    id: 'ventilation-ducting',
    badge: 'Large-Scale Industrial Ventilation',
    title: 'High-Volume Facility Air Handling & Ducting',
    subtitle: 'Custom spiral ducting, high-output air handlers, and thermal extraction systems for manufacturing plants.',
    image: '/images/hvac-ventilation-ductwork.webp',
    facilityType: 'Manufacturing & Logistics Hubs',
    spec: 'Galvanized Spiral Ductwork & Air Handling Units'
  }
];

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreSolutions,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroContainerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  const currentSlide = HVAC_HERO_SLIDES[currentIndex];
  const config = getCompanyConfig();

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HVAC_HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // GSAP subtle cinematic push-in & text reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.08, filter: 'brightness(0.7) blur(2px)' },
          { scale: 1.02, filter: 'brightness(1) blur(0px)', duration: 1.6, ease: 'power2.out' }
        );

        // Continuous subtle drift
        gsap.to(bgImageRef.current, {
          scale: 1.05,
          duration: 8,
          ease: 'none',
          delay: 1.6
        });
      }

      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
      }

      if (headlineRef.current) {
        gsap.fromTo(headlineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' });
      }

      if (subtextRef.current) {
        gsap.fromTo(subtextRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: 'power3.out' });
      }

      if (ctasRef.current) {
        gsap.fromTo(ctasRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.25, ease: 'power3.out' });
      }
    }, heroContainerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HVAC_HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HVAC_HERO_SLIDES.length) % HVAC_HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      ref={heroContainerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[88vh] lg:min-h-[94vh] flex flex-col justify-between bg-[#070E18] text-white overflow-hidden select-none border-b border-[#17263A]"
    >
      {/* 1. LARGE HIGH-QUALITY INDUSTRIAL HVAC PHOTOGRAPHY (Occupies most of the hero) */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgImageRef}
          src={currentSlide.image}
          alt={currentSlide.badge}
          className="w-full h-full object-cover object-center will-change-transform"
        />

        {/* Soft, targeted gradient that keeps the industrial photograph bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/95 via-[#060D17]/35 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D17]/85 via-transparent to-transparent hidden lg:block"></div>
      </div>

      {/* 2. TOP INDUSTRIAL STATUS BADGE */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 w-full flex items-center justify-between">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-['Manrope'] font-bold uppercase tracking-wider text-[#20B8CE] shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#20B8CE] animate-pulse"></span>
          <span>{currentSlide.badge}</span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs font-['Manrope'] font-medium text-gray-300 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <span className="text-gray-400">Application:</span>
          <span className="text-white font-semibold">{currentSlide.facilityType}</span>
        </div>
      </div>

      {/* 3. HERO CONTENT: Short, Powerful Headline + Supporting Statement + CTA Button */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 mt-auto mb-8 sm:mb-12 w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-['Manrope'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-lg"
          >
            {currentSlide.title}
          </h1>

          {/* Short Supporting Statement */}
          <p
            ref={subtextRef}
            className="font-['Inter'] text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl drop-shadow"
          >
            {currentSlide.subtitle}
          </p>

          {/* Call-to-Action Buttons */}
          <div
            ref={ctasRef}
            className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onExploreSolutions}
              className="px-7 py-4 bg-gradient-to-r from-[#1479D4] to-[#20B8CE] hover:from-[#20B8CE] hover:to-[#1479D4] text-[#070E18] font-['Manrope'] font-black text-sm sm:text-base rounded-xl shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Solutions</span>
              <ArrowDown className="w-4 h-4 text-[#070E18] animate-bounce" />
            </button>

            <button
              onClick={onOpenQuote}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-['Manrope'] font-bold text-sm sm:text-base rounded-xl border border-white/25 hover:border-[#20B8CE] transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request Engineering Quote</span>
              <ArrowRight className="w-4 h-4 text-[#20B8CE]" />
            </button>
          </div>

          {/* Clean Industrial Trust Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-gray-300 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              SANS 10142-1 CoC Certified Mechanical & Electrical
            </span>
            <span className="hidden sm:inline-block text-gray-500">•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#20B8CE] shrink-0" />
              Turnkey Sizing, Rigging & Commissioning
            </span>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM INTERACTIVE THUMBNAIL SCRUBBER FOR INDUSTRIAL SITES */}
      <div className="relative z-20 w-full bg-black/85 backdrop-blur-xl border-t border-white/10 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous HVAC Installation"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next HVAC Installation"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#20B8CE] text-white hover:text-[#070E18] transition-all flex items-center justify-center cursor-pointer border border-white/15"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-1 justify-start">
            {HVAC_HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-3 py-1.5 rounded-lg text-left transition-all duration-300 flex items-center gap-2.5 border shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white border-[#20B8CE] shadow-md shadow-cyan-500/20 ring-1 ring-[#20B8CE]'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                >
                  <div className="w-7 h-7 rounded-md overflow-hidden shrink-0 border border-white/20 bg-black/40">
                    <img
                      src={slide.image}
                      alt={slide.badge}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-['Manrope'] font-bold text-xs whitespace-nowrap">
                    <span className="text-[#20B8CE] mr-1">{String(index + 1).padStart(2, '0')}</span>
                    <span className={isActive ? 'text-white' : 'text-gray-300'}>{slide.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-gray-400 shrink-0">
            <span className="text-[#20B8CE]">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>04</span>
          </div>
        </div>
      </div>
    </section>
  );
};
