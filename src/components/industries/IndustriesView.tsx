import React from 'react';
import {
  Building2,
  Factory,
  Store,
  Warehouse,
  Flame,
  Building,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export interface IndustrySector {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  coolingApplication: string;
  keyFeature: string;
}

export const INDUSTRIES_SERVED: IndustrySector[] = [
  {
    id: 'shopping-malls',
    name: 'Shopping Malls & Retail Atriums',
    subtitle: 'High-Density Public Cooling',
    image: '/images/industry-shopping-mall.webp',
    coolingApplication: 'Centralised high-capacity HVAC and low-noise air turnover maintaining customer comfort across multiple retail levels.',
    keyFeature: 'Linear slot diffusers, continuous fresh air circulation & energy recovery.'
  },
  {
    id: 'commercial-buildings',
    name: 'Commercial Office Buildings',
    subtitle: 'Multi-Storey Climate Control',
    image: '/images/market-commercial.webp',
    coolingApplication: 'Zoned inverter VRV/VRF systems providing precise temperature control for tenant suites and executive boardrooms.',
    keyFeature: 'Whisper-quiet operation, individual floor metering & smart BMS integration.'
  },
  {
    id: 'manufacturing-facilities',
    name: 'Manufacturing Facilities',
    subtitle: 'Process Heat & Worker Cooling',
    image: '/images/market-industrial.webp',
    coolingApplication: 'Heavy-duty extraction, high-velocity air movement, and process spot cooling to eliminate excessive heat from industrial machinery.',
    keyFeature: 'High-temperature smoke extraction, dust scrubbers & 24/7 duty motors.'
  },
  {
    id: 'warehouses',
    name: 'Warehouses & Logistics Hubs',
    subtitle: 'High-Bay Thermal Destratification',
    image: '/images/hero-hvls-install.webp',
    coolingApplication: 'High-Volume Low-Speed (HVLS) aerofoil fans and roof exhaust systems preventing trapped heat at ceiling level.',
    keyFeature: 'Lowers perceived temperature by up to 6°C with minimal electricity consumption.'
  },
  {
    id: 'industrial-plants',
    name: 'Industrial Plants & Refineries',
    subtitle: 'Chiller Loops & Heavy Duty Plants',
    image: '/images/hvac-rooftop-condensers.webp',
    coolingApplication: 'Heavy water-cooled and air-cooled liquid chillers with closed-loop glycol circuits for demanding continuous production.',
    keyFeature: 'Explosion-proof ratings, redundant dual circuits & automated valve control.'
  },
  {
    id: 'commercial-developments',
    name: 'Large Commercial Developments',
    subtitle: 'Turnkey Centralised Plant Infrastructure',
    image: '/images/market-hospitality.webp',
    coolingApplication: 'Complete architectural central plant engineering, district cooling piping, rooftop units, and physical perimeter security.',
    keyFeature: 'SANS 10142-1 certified electrical integration with official CoC sign-off.'
  }
];

interface IndustriesViewProps {
  onOpenQuote: (industryName?: string) => void;
  onExploreProducts?: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({
  onOpenQuote,
}) => {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1479D4]/10 text-[#1479D4] border border-[#1479D4]/20 text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Industrial & Commercial Sectors</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight">
            Industries We Serve
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From premier shopping centres and commercial headquarters to heavy manufacturing plants and distribution warehouses across Gauteng.
          </p>
        </div>

        {/* Visual Cards Grid (75-80% Visual Content, 20-25% Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_SERVED.map((industry) => (
            <div
              key={industry.id}
              onClick={() => onOpenQuote(`Industry: ${industry.name}`)}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
            >
              {/* Large Photograph (Dominates the card) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/30 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#10243A]/80 backdrop-blur-md text-[#20B8CE] border border-white/20">
                    {industry.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="font-['Manrope'] text-xl sm:text-2xl font-black text-white leading-tight">
                    {industry.name}
                  </h3>
                </div>
              </div>

              {/* Minimal Informative Text (Short and punchy) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="font-['Inter'] text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {industry.coolingApplication}
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-500 truncate max-w-[220px]">
                    <strong className="text-gray-700">Spec:</strong> {industry.keyFeature}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-['Manrope'] font-bold text-[#1479D4] group-hover:text-[#20B8CE] transition-colors shrink-0"
                  >
                    <span>Sector Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
