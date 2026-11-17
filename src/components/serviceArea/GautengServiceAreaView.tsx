import React, { useState } from 'react';
import {
  GAUTENG_REGIONS,
  GAUTENG_LOCATIONS,
  SEO_KEYWORD_MATRIX,
  PROVINCIAL_EXPANSION_PLANS
} from '../../data/gautengLocationsData';
import { GautengRegion } from '../../types';
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Search,
  Building,
  Navigation,
  ArrowRight,
  Compass
} from 'lucide-react';

interface GautengServiceAreaViewProps {
  onOpenQuote: (locationName?: string) => void;
}

export const GautengServiceAreaView: React.FC<GautengServiceAreaViewProps> = ({
  onOpenQuote,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<GautengRegion>('JOHANNESBURG');
  const [activeTab, setActiveTab] = useState<'gauteng' | 'expansion'>('gauteng');

  const filteredLocations = GAUTENG_LOCATIONS.filter((loc) => loc.region === selectedRegion);
  const currentRegionInfo = GAUTENG_REGIONS[selectedRegion];

  return (
    <section id="service-area" className="py-20 bg-white text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20B8CE]/15 text-[#10243A] text-xs font-mono font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#1479D4]" />
            <span>Operational Coverage Verification</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Gauteng Service Area & Rapid Deployment
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            VentAxis Solutions provides verified direct engineering installation and maintenance services exclusively where our mobile technical rigging teams can maintain guaranteed response SLAs.
          </p>
        </div>

        {/* View Mode Toggle: Gauteng Active vs National Expansion */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-gray-100 border border-gray-200 text-xs font-['Manrope'] font-bold">
            <button
              onClick={() => setActiveTab('gauteng')}
              className={`px-6 py-2.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'gauteng'
                  ? 'bg-[#10243A] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Active Gauteng Metropolitan Hubs
            </button>
            <button
              onClick={() => setActiveTab('expansion')}
              className={`px-6 py-2.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'expansion'
                  ? 'bg-[#10243A] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Provincial Expansion Architecture
            </button>
          </div>
        </div>

        {activeTab === 'gauteng' ? (
          <div className="space-y-10">
            {/* 4 Gauteng Sub-Region Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {(['JOHANNESBURG', 'EKURHULENI', 'PRETORIA', 'OTHER AREAS'] as GautengRegion[]).map((region) => {
                const isSelected = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#10243A] text-white border-[#10243A] shadow-md scale-102'
                        : 'bg-[#EEF3F7]/50 hover:bg-[#EEF3F7] text-gray-800 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? 'text-[#20B8CE]' : 'text-[#1479D4]'}`}>
                        Zone
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="font-['Manrope'] font-bold text-sm sm:text-base leading-tight">
                      {region}
                    </div>
                    <div className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                      {GAUTENG_REGIONS[region].averageResponseTime}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Region Overview Banner */}
            <div className="bg-[#10243A] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-[#173250]">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#1479D4]/40 text-[#20B8CE] border border-[#20B8CE]/30 text-xs font-mono font-bold">
                    Direct Engineering Depot
                  </span>
                  <span className="text-xs text-gray-300">
                    {currentRegionInfo.mainDepot}
                  </span>
                </div>
                <h3 className="font-['Manrope'] text-2xl font-bold text-white">
                  {currentRegionInfo.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {currentRegionInfo.desc}
                </p>
              </div>

              <div className="bg-[#173250] p-4 rounded-xl border border-white/10 shrink-0 text-center w-full md:w-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#20B8CE] block">
                  Assessment SLA
                </span>
                <span className="font-['Manrope'] font-extrabold text-lg text-white">
                  {currentRegionInfo.averageResponseTime}
                </span>
              </div>
            </div>

            {/* Suburb / Town Hubs Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((loc) => (
                <div
                  key={loc.name}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-[#1479D4]" />
                        <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                          {loc.name}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Operational
                      </span>
                    </div>

                    {/* Key Hubs */}
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">
                        Primary Industrial & Business Hubs:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {loc.keyHubs.map((hub, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-gray-700"
                          >
                            {hub}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Typical Facilities Serviced */}
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">
                        Regular Installations:
                      </span>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {loc.typicalFacilities.map((fac, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#1479D4]"></span>
                            <span>{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>Dispatch: {loc.dispatchTime}</span>
                    </span>
                    <button
                      onClick={() => onOpenQuote(loc.name)}
                      className="text-xs font-bold text-[#1479D4] hover:text-[#10243A] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book Assessment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Local SEO Optimisation Matrix Badge Showcase */}
            <div className="bg-[#EEF3F7]/70 rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-4">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#1479D4]" />
                <h4 className="font-['Manrope'] font-bold text-sm uppercase tracking-wider text-[#10243A]">
                  Gauteng Local Search & Engineering SEO Optimisation
                </h4>
              </div>
              <p className="text-xs text-gray-600">
                VentAxis Solutions is engineered for high-intent municipal and commercial searches across the Gauteng economic corridor:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {SEO_KEYWORD_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-gray-200 text-xs space-y-1"
                  >
                    <div className="font-['Manrope'] font-bold text-[#10243A]">
                      "{item.keyword}"
                    </div>
                    <div className="text-[11px] text-gray-500">
                      {item.intent}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Provincial Expansion Architecture View */
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl text-xs sm:text-sm text-blue-900 leading-relaxed">
              <strong className="block font-bold mb-1">Architecture Designed for Provincial Expansion:</strong>
              VentAxis Solutions maintains direct engineering hubs in Gauteng. Our logistical and database architecture is pre-configured to activate regional depots in Western Cape and KwaZulu-Natal as part of our phased commercial growth plan.
            </div>

            <div className="space-y-4">
              {PROVINCIAL_EXPANSION_PLANS.map((plan, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-['Manrope'] font-extrabold text-lg text-[#10243A]">
                        {plan.province}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                          plan.province === 'Gauteng'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {plan.province === 'Gauteng' ? 'Active Direct Depot' : 'Future Expansion'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{plan.status}</div>
                    <div className="text-xs text-gray-400 font-mono">{plan.headquarters}</div>
                  </div>

                  {plan.province === 'Gauteng' ? (
                    <button
                      onClick={() => setActiveTab('gauteng')}
                      className="px-4 py-2 bg-[#1479D4] text-white text-xs font-bold rounded-lg hover:bg-[#10243A] transition-colors"
                    >
                      View Active Locations
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg">
                      Phase 2/3 Roadmap
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
