import React, { useState } from 'react';
import { INDUSTRIES } from '../../data/industriesData';
import { Industry } from '../../types';
import {
  GraduationCap,
  HeartPulse,
  Church,
  Building2,
  Factory,
  UtensilsCrossed,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package
} from 'lucide-react';

interface IndustriesViewProps {
  onOpenQuote: (industryName?: string) => void;
  onExploreProducts: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onOpenQuote,
  onExploreProducts,
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Church': return <Church className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-gray-50 text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Sectors We Serve</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Cooling for Every Environment
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            Every building has different airflow needs. We provide tailored cooling fan solutions for homes, schools, auditoriums, commercial stores, and warehouses across Gauteng.
          </p>
        </div>

        {/* Industry Sector Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`px-5 py-3 rounded-xl font-['Manrope'] font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#10243A] text-white border-[#10243A] shadow-md scale-102'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
                }`}
              >
                <span className={isSelected ? 'text-[#20B8CE]' : 'text-[#1479D4]'}>
                  {getIndustryIcon(ind.iconName)}
                </span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Presentation */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl">
          {/* Hero Banner for Sector */}
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-900">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.name}
              className="w-full h-full object-cover brightness-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-[#1479D4] text-white text-xs font-mono font-bold uppercase tracking-wider">
                  Sector: {activeIndustry.name}
                </span>
              </div>
              <h3 className="font-['Manrope'] text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeIndustry.headline}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                {activeIndustry.shortDesc}
              </p>
            </div>
          </div>

          {/* Environmental Challenges vs Engineered Solutions */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Column */}
              <div className="bg-rose-50/60 rounded-2xl p-6 border border-rose-100 space-y-4">
                <div className="flex items-center gap-2 text-rose-800 font-['Manrope'] font-bold text-sm uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Specific Environmental Challenges</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {activeIndustry.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-100 space-y-4">
                <div className="flex items-center gap-2 text-[#10243A] font-['Manrope'] font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#1479D4]" />
                  <span>VentAxis Engineered Solutions</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                  {activeIndustry.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1479D4] shrink-0 mt-2"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Equipment & Regulatory Highlight */}
            <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 bg-[#EEF3F7]/50 p-6 rounded-2xl">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider block">
                  Recommended Equipment Configurations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.recommendedCategories.map((eq, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-[#10243A] shadow-2xs flex items-center gap-1.5"
                    >
                      <Package className="w-3.5 h-3.5 text-[#1479D4]" />
                      <span>{eq}</span>
                    </span>
                  ))}
                </div>
                <div className="text-xs text-emerald-800 flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{activeIndustry.standardsHighlight}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <button
                  onClick={onExploreProducts}
                  className="px-4 py-3 bg-white text-[#10243A] border border-gray-200 hover:bg-gray-50 rounded-xl text-xs font-bold font-['Manrope'] transition-colors text-center"
                >
                  View Suitable Fans
                </button>
                <button
                  onClick={() => onOpenQuote(activeIndustry.name)}
                  className="px-6 py-3 bg-[#1479D4] hover:bg-[#10243A] text-white rounded-xl text-xs font-bold font-['Manrope'] shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>REQUEST {activeIndustry.name.toUpperCase()} QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#20B8CE] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
