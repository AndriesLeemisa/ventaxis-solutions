import React from 'react';
import {
  Wind,
  Snowflake,
  Wrench,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  Factory,
  Boxes,
  Zap,
  CheckCircle2
} from 'lucide-react';

export interface CoreSolution {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
  bestFor: string;
}

export const CORE_SOLUTIONS: CoreSolution[] = [
  {
    id: 'industrial-hvac',
    title: 'Industrial HVAC Systems',
    subTitle: 'Rooftop Package Plants & Air Handling',
    category: 'Large-Scale Climate Control',
    image: '/images/hvac-rooftop-hero.webp',
    description: 'Heavy-duty rooftop package units and custom air handling plants engineered for factories, logistics centres, and shopping malls.',
    specifications: [
      'High-tonnage commercial rooftop units',
      'Multi-zone supply & return air balancing',
      'Automated fire-damper & BMS integration'
    ],
    bestFor: 'Warehouses, Manufacturing Plants & Shopping Centres'
  },
  {
    id: 'commercial-ac',
    title: 'Commercial Air Conditioning',
    subTitle: 'VRV / VRF Inverter Multi-Split Networks',
    category: 'Commercial Infrastructure',
    image: '/images/hvac-rooftop-condensers.webp',
    description: 'High-efficiency inverter VRV/VRF systems delivering individual zone temperature control with minimal electrical consumption.',
    specifications: [
      'Simultaneous cooling and heating heat recovery',
      'Low sound output for executive boardrooms',
      'Smart centralized scheduling and energy metering'
    ],
    bestFor: 'Office Parks, Commercial Towers & Educational Campuses'
  },
  {
    id: 'industrial-chillers',
    title: 'Industrial Chillers',
    subTitle: 'Water-Cooled & Air-Cooled Liquid Chillers',
    category: 'Process Cooling Infrastructure',
    image: '/images/hvac-chiller-plant-room.webp',
    description: 'Centralised heavy liquid chiller installations, cooling towers, and secondary chilled water/glycol loops for high-demand facilities.',
    specifications: [
      'Screw and centrifugal compressor configurations',
      'Process cooling loops with insulated piping',
      'Redundant dual-circuit reliability for 24/7 runtimes'
    ],
    bestFor: 'Industrial Plants, Refineries, Hospitals & Data Centres'
  },
  {
    id: 'commercial-cooling',
    title: 'Commercial Cooling Systems',
    subTitle: 'High-Capacity Air Turnover for Atriums',
    category: 'Public Facilities',
    image: '/images/industry-shopping-mall.webp',
    description: 'Mass air volume turnover engineered for high-traffic public spaces, ensuring even temperature distribution without thermal pockets.',
    specifications: [
      'High-velocity linear slot diffusers & jet nozzles',
      'Fresh-air positive pressure ventilation',
      'SABS and SANS 10400-O compliance certification'
    ],
    bestFor: 'Shopping Malls, Convention Centres & Airport Terminals'
  },
  {
    id: 'industrial-refrigeration',
    title: 'Industrial Refrigeration',
    subTitle: 'Cold Chain, Chilled Warehouses & Multiplex',
    category: 'Cold Chain Engineering',
    image: '/images/hero-hangar-maintenance.webp',
    description: 'Turnkey industrial cold chain facilities, walk-in holding freezers, and centralized multiplex refrigeration racks with low-GWP refrigerants.',
    specifications: [
      'Multiplex compressor packs & evaporators',
      'Sub-zero blast freezing and temperature logging',
      'Food-grade HACCP hygiene standard finishes'
    ],
    bestFor: 'Food Processing, Abattoirs & Cold Storage Logistics'
  },
  {
    id: 'ventilation-systems',
    title: 'Ventilation Systems',
    subTitle: 'Spiral Ducting, Smoke Extraction & Turnover',
    category: 'Air Movement & Safety',
    image: '/images/hvac-ventilation-ductwork.webp',
    description: 'Custom engineered spiral sheet metal ducting networks, industrial axial smoke spill systems, and continuous fresh air changeover.',
    specifications: [
      'Galvanized spiral ductwork fabricated to SMACNA specs',
      'Emergency high-temperature smoke extraction fans',
      'Dust collection and air scrubbing integration'
    ],
    bestFor: 'Assembly Lines, Underground Parking & Chemical Facilities'
  },
  {
    id: 'centralised-cooling',
    title: 'Centralised Cooling Solutions',
    subTitle: 'Integrated Plant Room & Energy Management',
    category: 'Turnkey Infrastructure',
    image: '/images/market-industrial.webp',
    description: 'End-to-end plant room engineering integrating chillers, air handlers, variable speed pumping stations, and automated BMS controllers.',
    specifications: [
      'Variable Speed Drive (VSD) pump energy savings',
      'Remote monitoring and automated alert dispatch',
      'Preventative maintenance service contracts (SLAs)'
    ],
    bestFor: 'Mixed-Use Developments & Industrial Campuses'
  }
];

interface CoreSolutionsSectionProps {
  onOpenQuote: (solutionTitle: string) => void;
}

export const CoreSolutionsSection: React.FC<CoreSolutionsSectionProps> = ({
  onOpenQuote,
}) => {
  return (
    <section id="core-solutions" className="py-20 sm:py-28 bg-white text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1479D4]/10 text-[#1479D4] border border-[#1479D4]/20 text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Factory className="w-3.5 h-3.5" />
            <span>Primary Engineering Division</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight">
            Our Core HVAC & Cooling Solutions
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Engineered climate control, heavy-duty liquid chillers, and large-scale ventilation systems designed for commercial buildings, factories, warehouses, and shopping malls across South Africa.
          </p>
        </div>

        {/* Large Visual Cards Grid (75–80% Visual, 20–25% Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SOLUTIONS.map((solution, idx) => (
            <div
              key={solution.id}
              onClick={() => onOpenQuote(solution.title)}
              className={`group bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between cursor-pointer ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Large Industrial Photograph (Dominates the card) */}
              <div className={`relative overflow-hidden bg-gray-900 ${idx === 0 ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/25 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#10243A]/80 backdrop-blur-md text-[#20B8CE] border border-white/20">
                    {solution.category}
                  </span>
                </div>

                {/* Overlaid Bottom Title on Image */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-xs text-[#20B8CE] font-mono font-bold uppercase tracking-wider mb-1">
                    {solution.subTitle}
                  </div>
                  <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {solution.title}
                  </h3>
                </div>
              </div>

              {/* Brief Informative Details (Minimal text) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

                {/* 3 Key Specs */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  {solution.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8CE] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Best For Tag & CTA */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-gray-500 truncate max-w-[200px] sm:max-w-xs">
                    <strong className="text-gray-700">Ideal for:</strong> {solution.bestFor}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote(solution.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-['Manrope'] font-bold text-[#1479D4] group-hover:text-[#20B8CE] transition-colors shrink-0"
                  >
                    <span>Inquire System</span>
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
