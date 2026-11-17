import React from 'react';
import { AirflowCanvas } from '../common/AirflowCanvas';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Wrench,
  CheckCircle2,
  Building2,
  Factory,
  Compass,
  ChevronDown
} from 'lucide-react';

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
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#10243A] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Cinematic Industrial Image with High-Grade Engineering Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
          alt="Commercial and industrial facility with high-volume low-speed ventilation ceiling fan"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.42] contrast-[1.12]"
        />
        {/* Subtle engineering grid & gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10243A] via-[#10243A]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-[#10243A]/70"></div>
      </div>

      {/* Aerodynamic Airflow Streamlines Canvas */}
      <AirflowCanvas />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 my-auto w-full">
        <div className="max-w-3xl space-y-6">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1479D4]/20 border border-[#20B8CE]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#20B8CE] animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20B8CE]">
              Engineering Contractor • Gauteng, South Africa
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20B8CE] to-[#1479D4]">Better Airflow.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="font-['Inter'] text-lg sm:text-xl text-[#EEF3F7]/90 leading-relaxed font-normal max-w-2xl">
            Commercial and industrial fan solutions for institutions, businesses and industrial facilities across Gauteng.
          </p>

          <p className="text-sm text-gray-300 max-w-xl">
            We supply, install, wire, test, and maintain high-volume low-speed (HVLS), axial, centrifugal, and specialist extraction ventilation systems with full SANS 10142-1 CoC compliance.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-[#1479D4] hover:bg-[#20B8CE] text-[#10243A] hover:text-[#10243A] font-['Manrope'] font-extrabold text-base rounded-xl shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span className="text-white group-hover:text-[#10243A] transition-colors">REQUEST A QUOTE</span>
              <ArrowRight className="w-5 h-5 text-[#20B8CE] group-hover:text-[#10243A] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreProducts}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-['Manrope'] font-bold text-base rounded-xl border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>EXPLORE OUR SOLUTIONS</span>
            </button>
          </div>

          {/* Key Value Propositions */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/15 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#20B8CE] shrink-0" />
              <span>SANS 10142-1 CoC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#20B8CE] shrink-0" />
              <span>Certified Riggers & MEWP</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Zap className="w-4 h-4 text-[#20B8CE] shrink-0" />
              <span>Rapid Gauteng Deployment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Engineering Capabilities Bar */}
      <div className="relative z-20 w-full bg-[#0A1726]/90 border-t border-white/10 backdrop-blur-md py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-gray-400 font-mono uppercase tracking-wider text-[11px]">
              Engineered Divisions:
            </span>
            <button
              onClick={onExploreProducts}
              className="text-white hover:text-[#20B8CE] transition-colors font-semibold flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1479D4]"></span>
              HVLS & Air Movement
            </button>
            <button
              onClick={onExploreProducts}
              className="text-white hover:text-[#20B8CE] transition-colors font-semibold flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#20B8CE]"></span>
              Industrial Ventilation & Blowers
            </button>
            <button
              onClick={onExploreProducts}
              className="text-white hover:text-[#20B8CE] transition-colors font-semibold flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Specialist Smoke & Dust Extraction
            </button>
          </div>

          <div className="text-gray-400 font-mono text-[11px] hidden sm:block">
            Coverage: Johannesburg • Ekurhuleni • Pretoria • Midrand • Vaal
          </div>
        </div>
      </div>
    </section>
  );
};
