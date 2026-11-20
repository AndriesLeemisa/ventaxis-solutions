import React, { useState } from 'react';
import {
  Shield,
  ShieldCheck,
  Lock,
  ArrowRight,
  Boxes,
  Waves,
  Car,
  Zap,
  Laptop,
  Wind,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export interface FencingSolution {
  id: string;
  title: string;
  type: string;
  image: string;
  description: string;
  features: string[];
}

export const FENCING_SOLUTIONS: FencingSolution[] = [
  {
    id: 'industrial-palisade',
    title: 'Industrial Palisade Fencing',
    type: 'High-Security Perimeter',
    image: '/images/fencing-industrial-palisade.webp',
    description: 'Hot-dip galvanized steel palisade fencing with sharp 3-spike trident pales, reinforced I-beam posts, and continuous concrete footings.',
    features: [
      'Heavy cold-rolled steel angle sections',
      'Tamper-proof shear-off security fasteners',
      'Heights available from 1.8m to 3.0m'
    ]
  },
  {
    id: 'security-mesh',
    title: 'Security & Anti-Climb Mesh Fencing',
    type: 'Anti-Cut Perimeter',
    image: '/images/fencing-security-mesh.webp',
    description: 'High-density welded wire mesh with narrow aperture preventing handholds, footholds, or cutting with standard tools.',
    features: [
      'Galvanized and powder-coated architectural finish',
      'Y-standard top brackets for razor wire or electric wiring',
      'High visibility for CCTV perimeter surveillance'
    ]
  },
  {
    id: 'steel-fencing',
    title: 'Steel Fencing & Commercial Perimeter',
    type: 'Boundary Demarcation',
    image: '/images/fencing-industrial-palisade.webp',
    description: 'Heavy tubular steel boundary fencing engineered for commercial business parks, industrial depots, and educational campuses.',
    features: [
      'High-tensile corrosion-resistant steel framework',
      'Anti-tamper bracket mounting system',
      'Custom fabricated panel lengths'
    ]
  },
  {
    id: 'perimeter-gates',
    title: 'Commercial Security Gates & Access',
    type: 'Access Control',
    image: '/images/fencing-security-mesh.webp',
    description: 'Industrial cantilever sliding gates, swing gates, and automated security access barriers built to withstand heavy vehicular traffic.',
    features: [
      'Heavy-duty industrial track and roller systems',
      'Integrated electric lock and motor automation ready',
      'Serrated anti-scale security topping'
    ]
  }
];

export interface AdditionalService {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  icon: React.ReactNode;
}

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'cold-freezer',
    title: 'Cold Rooms, Freezer Rooms & Ice Machines',
    category: 'Commercial Refrigeration',
    image: '/images/prod-evap-18000.webp',
    description: 'Modular polyurethane cold rooms, -25°C blast freezers, and commercial hospitality ice makers.',
    icon: <Boxes className="w-5 h-5" />
  },
  {
    id: 'swimming-pools',
    title: 'Swimming Pools & Industrial Heat Pumps',
    category: 'Aquatic Infrastructure',
    image: '/images/product-outdoor-fan.webp',
    description: 'High-COP commercial pool heat pumps, structural fibreglass relining, and filtration overhauls.',
    icon: <Waves className="w-5 h-5" />
  },
  {
    id: 'automotive-diagnostics',
    title: 'Automotive Mechanics & Fleet Diagnostics',
    category: 'Fleet & Mechanical',
    image: '/images/hero-workshop-wall-service.webp',
    description: 'Computerised OBD-II engine diagnostic scanning, automotive air-con re-gas, and fleet servicing.',
    icon: <Car className="w-5 h-5" />
  },
  {
    id: 'electrical-plumbing',
    title: 'Electrical & Plumbing Trade Contracting',
    category: 'Certified Trades',
    image: '/images/installation-service.webp',
    description: 'Licensed SANS 10142-1 Electrical CoC certification, 3-phase DB wiring, booster pumps, and pipework.',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 'it-support',
    title: 'Computer, Wi-Fi & IT Infrastructure Support',
    category: 'Digital Systems',
    image: '/images/ind-education.webp',
    description: 'Office network cabling, Wi-Fi mesh systems, workstation repair, and bespoke website hosting.',
    icon: <Laptop className="w-5 h-5" />
  },
  {
    id: 'hvls-industrial-fans',
    title: 'High-Volume HVLS Fans & Warehouse Air Movers',
    category: 'Air Movement',
    image: '/images/hero-hvls-install.webp',
    description: 'Direct-drive 7.3m HVLS ceiling fans and 750mm workshop wall fans for floor destratification.',
    icon: <Wind className="w-5 h-5" />
  }
];

interface OtherServicesSectionProps {
  onOpenQuote: (serviceName: string) => void;
}

export const OtherServicesSection: React.FC<OtherServicesSectionProps> = ({
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'fencing' | 'trades'>('fencing');

  return (
    <section id="other-services" className="py-20 sm:py-24 bg-[#F8FAFC] text-[#10243A] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243A] text-[#20B8CE] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Secondary Infrastructure Division</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight">
            Fencing, Security & Other Services
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Providing commercial and industrial facilities with certified physical security perimeter fencing, mechanical maintenance, cold storage, and technical trade solutions.
          </p>

          {/* Toggle Pills */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('fencing')}
              className={`px-5 py-2.5 rounded-xl text-xs font-['Manrope'] font-bold transition-all cursor-pointer ${
                activeTab === 'fencing'
                  ? 'bg-[#10243A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200'
              }`}
            >
              Fencing & Security Solutions (4)
            </button>
            <button
              onClick={() => setActiveTab('trades')}
              className={`px-5 py-2.5 rounded-xl text-xs font-['Manrope'] font-bold transition-all cursor-pointer ${
                activeTab === 'trades'
                  ? 'bg-[#10243A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200'
              }`}
            >
              Additional Technical Services (6)
            </button>
          </div>
        </div>

        {/* TAB 1: FENCING & SECURITY SOLUTIONS (Secondary Category) */}
        {activeTab === 'fencing' && (
          <div id="fencing-security" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {FENCING_SOLUTIONS.map((fence) => (
              <div
                key={fence.id}
                onClick={() => onOpenQuote(fence.title)}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Large Photograph */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                  <img
                    src={fence.image}
                    alt={fence.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/85 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#10243A]/80 backdrop-blur-md text-[#20B8CE] border border-white/20">
                      {fence.type}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-['Manrope'] text-lg font-extrabold text-[#10243A] group-hover:text-[#1479D4] transition-colors leading-snug mb-1">
                      {fence.title}
                    </h3>
                    <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                      {fence.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    {fence.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                        <CheckCircle2 className="w-3 h-3 text-[#20B8CE] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2 px-3 bg-[#EEF3F7] group-hover:bg-[#10243A] text-[#10243A] group-hover:text-white text-xs font-['Manrope'] font-bold rounded-xl transition-all flex items-center justify-between"
                    >
                      <span>Get Fencing Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1479D4] group-hover:text-[#20B8CE]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: ADDITIONAL EXISTING SERVICES (Retained & neatly organized) */}
        {activeTab === 'trades' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {ADDITIONAL_SERVICES.map((srv) => (
              <div
                key={srv.id}
                onClick={() => onOpenQuote(srv.title)}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/85 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#10243A]/80 backdrop-blur-md text-[#20B8CE] border border-white/20">
                      {srv.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/90 text-[#1479D4] flex items-center justify-center">
                    {srv.icon}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-['Manrope'] text-base font-extrabold text-[#10243A] group-hover:text-[#1479D4] transition-colors leading-snug mb-1">
                      {srv.title}
                    </h3>
                    <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2 px-3 bg-[#EEF3F7] group-hover:bg-[#10243A] text-[#10243A] group-hover:text-white text-xs font-['Manrope'] font-bold rounded-xl transition-all flex items-center justify-between"
                    >
                      <span>Inquire About Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1479D4] group-hover:text-[#20B8CE]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
