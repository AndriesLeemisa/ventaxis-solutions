import React, { useState } from 'react';
import {
  Snowflake,
  Wind,
  Wrench,
  Boxes,
  Waves,
  Car,
  Zap,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Clock,
  Sparkles,
  FileCheck,
  HardHat,
  ChevronRight,
  Layers,
  Phone,
  MessageSquare
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  features: string[];
}

// Exactly the eight services requested (clean, modern, blue-black-white palette)
export const EIGHT_SERVICES: ServiceItem[] = [
  {
    id: 'srv-refrigeration',
    number: '01',
    title: 'Commercial & Industrial Refrigeration',
    tagline: 'Supermarket racks, chillers & industrial cooling loops',
    description: 'Turnkey engineering, installation, and maintenance of high-capacity refrigeration plants, glycol chillers, refrigerated display cases, and industrial cooling loops.',
    badge: 'Cold Chain',
    features: [
      'Multiplex compressor packs & evaporators',
      'Process fluid chillers & secondary glycol loops',
      'Digital temperature logging & HACCP compliance',
      'Natural & low-GWP eco-refrigerant conversions'
    ]
  },
  {
    id: 'srv-air-conditioning',
    number: '02',
    title: 'Air Conditioning & Cooling Systems',
    tagline: 'Central HVAC, VRV/VRF & ducted commercial airflow',
    description: 'High-efficiency commercial, retail, and residential climate control systems engineered for optimum thermal comfort, silent operation, and low energy draw.',
    badge: 'Climate Control',
    features: [
      'Inverter VRV / VRF multi-split systems',
      'Rooftop packaged units & air handling units (AHUs)',
      'Clean air filtration & fresh-air positive pressure',
      'SABS & SANS compliant electrical connections'
    ]
  },
  {
    id: 'srv-repairs-maintenance',
    number: '03',
    title: 'Repairs, Installations & Maintenance',
    tagline: '24/7 rapid breakdown response & preventative SLAs',
    description: 'Rapid on-site mechanical repairs, certified preventative maintenance agreements (SLAs), equipment retrofits, and genuine replacement parts supply.',
    badge: '24/7 Support',
    features: [
      'Guaranteed priority breakdown callout response',
      'Scheduled preventative maintenance agreements (SLAs)',
      'Compressor overhauls, motor rewinds & valve repair',
      'SABS / SANS certified engineering workmanship'
    ]
  },
  {
    id: 'srv-cold-freezer-ice',
    number: '04',
    title: 'Cold Rooms, Freezer Rooms & Ice Machines',
    tagline: 'Modular insulated panels, blast freezers & ice makers',
    description: 'Design, structural construction, and refrigeration fit-out of modular polyurethane cold rooms, -25°C blast freezers, and high-output commercial ice machines.',
    badge: 'Freezer Tech',
    features: [
      '80mm to 150mm high-density polyurethane panels',
      'Walk-in blast freezers & holding cold storage',
      'Commercial flake, gourmet cube & crescent ice makers',
      'Heavy-duty hermetic sliding doors & strip curtains'
    ]
  },
  {
    id: 'srv-pools-fibreglass',
    number: '05',
    title: 'Swimming Pools & Fibreglass Repairs',
    tagline: 'Industrial pool heat pumps, filtration & relining',
    description: 'Complete pool temperature regulation with high-COP inverter heat pumps, commercial filtration plants, structural fibreglass relining, and leak sealing.',
    badge: 'Aquatics',
    features: [
      'High-COP inverter swimming pool heat pumps',
      'Structural fibreglass relining & crack sealing',
      'High-rate sand filters & automated chlorinators',
      'Commercial resort & residential pool maintenance'
    ]
  },
  {
    id: 'srv-automotive-mechanics',
    number: '06',
    title: 'Automotive Mechanics & Diagnostics',
    tagline: 'Computerised OBD-II scanning, auto-aircon & fleet care',
    description: 'Professional mechanical repairs, multi-brand computerized electronic diagnostics, automotive air conditioning re-gassing, and commercial fleet maintenance.',
    badge: 'Diagnostics',
    features: [
      'Advanced computerized OBD-II fault diagnostics',
      'Automotive air-con leak detection & re-gas',
      'Engine, gearbox, brake & mechanical servicing',
      'Scheduled commercial delivery fleet service plans'
    ]
  },
  {
    id: 'srv-electrical-plumbing',
    number: '07',
    title: 'Electrical & Plumbing Services',
    tagline: 'SANS 10142-1 CoC certification, 3-phase wiring & pumps',
    description: 'Licensed electrical installations, distribution board wiring, statutory Certificates of Compliance (CoC), industrial booster pumps, and pipework maintenance.',
    badge: 'Certified Trade',
    features: [
      'SANS 10142-1 Electrical Certificates of Compliance (CoC)',
      '3-Phase power installations & DB board upgrades',
      'Industrial pressure booster pumps & drainage',
      'High-pressure pipe repairs & valve replacements'
    ]
  },
  {
    id: 'srv-computer-website',
    number: '08',
    title: 'Computer & Website Support',
    tagline: 'Office network cabling, PC hardware diagnostics & web dev',
    description: 'Full-spectrum digital and technical IT support, structured network cabling, Wi-Fi mesh systems, workstation hardware repair, and modern website design & hosting.',
    badge: 'IT & Digital',
    features: [
      'Structured Ethernet cabling, routers & Wi-Fi mesh',
      'PC & Mac hardware diagnostics, repair & upgrades',
      'Responsive business website design & web apps',
      'Cloud backups, domain setup & secure business email'
    ]
  }
];

// 4-Step Technical Workflow
const SERVICE_PROCESS = [
  {
    step: '01',
    duration: '24h Turnaround',
    title: 'Consultation & Site Sizing',
    description: 'Detailed evaluation of your facility, thermal load requirements, structural specifications, and trade needs.',
    deliverable: 'Free Technical Scope & Sizing Advice'
  },
  {
    step: '02',
    duration: 'Same-Day Quotation',
    title: 'Transparent Written Quotation',
    description: 'Clear itemised pricing with exact equipment specifications, parts schedule, and labour allowances.',
    deliverable: 'Fixed Cost Formal Proposal'
  },
  {
    step: '03',
    duration: 'Rapid On-Site Execution',
    title: 'Certified Field Workmanship',
    description: 'Qualified technicians perform precision installation, repairs, or servicing following strict safety protocols.',
    deliverable: 'Clean & Calibrated Systems'
  },
  {
    step: '04',
    duration: 'Handover & Sign-Off',
    title: 'Testing, Sign-Off & CoC',
    description: 'Full performance verification, operational training, and official statutory certification sign-off.',
    deliverable: 'SANS CoC & Warranty Guarantee'
  }
];

interface InstallationServicesViewProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const InstallationServicesView: React.FC<InstallationServicesViewProps> = ({
  onOpenQuote,
}) => {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const config = getCompanyConfig();

  // Helper to render the matching icon for each service
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'srv-refrigeration':
        return <Snowflake className="w-6 h-6" />;
      case 'srv-air-conditioning':
        return <Wind className="w-6 h-6" />;
      case 'srv-repairs-maintenance':
        return <Wrench className="w-6 h-6" />;
      case 'srv-cold-freezer-ice':
        return <Boxes className="w-6 h-6" />;
      case 'srv-pools-fibreglass':
        return <Waves className="w-6 h-6" />;
      case 'srv-automotive-mechanics':
        return <Car className="w-6 h-6" />;
      case 'srv-electrical-plumbing':
        return <Zap className="w-6 h-6" />;
      case 'srv-computer-website':
        return <Laptop className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F8FAFC] text-[#10243A] relative overflow-hidden border-b border-slate-200">
      {/* Background Subtle Geometric Accents (Cooling & Industry theme) */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1479D4]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#20B8CE]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10243A] text-[#20B8CE] border border-[#173250] text-xs font-['Manrope'] font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#20B8CE]" />
            <span>Dedicated Technical & Engineering Division</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight leading-[1.12]">
            Comprehensive Engineering & Technical Services
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From commercial refrigeration and advanced climate control to certified electrical, plumbing, mechanical diagnostics, and digital support across Johannesburg, Pretoria, and Gauteng.
          </p>

          {/* Quick Trust Highlights Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              SANS 10142-1 CoC Certified
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#1479D4] shrink-0" />
              24/7 Breakdown Response
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#20B8CE] shrink-0" />
              Free Estimates & Sizing
            </span>
          </div>
        </div>

        {/* 8 INDIVIDUAL SERVICE CARDS — RESPONSIVE GRID (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-16 sm:mb-20">
          {EIGHT_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onOpenQuote(srv.title)}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#1479D4] shadow-xs hover:shadow-xl hover:shadow-[#1479D4]/10 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Card Top Indicator Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#10243A] via-[#1479D4] to-[#20B8CE] opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Header Row: Icon + Number + Category Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#10243A] text-[#20B8CE] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#1479D4] group-hover:to-[#20B8CE] group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 shrink-0">
                    {renderServiceIcon(srv.id)}
                  </div>

                  <div className="text-right">
                    <span className="block font-mono text-xs font-black text-slate-400 group-hover:text-[#1479D4] transition-colors">
                      {srv.number}
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#1479D4]/10 text-[#1479D4] border border-[#1479D4]/20">
                      {srv.badge}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-['Manrope'] text-lg font-extrabold text-[#10243A] group-hover:text-[#1479D4] transition-colors leading-snug mb-1.5">
                  {srv.title}
                </h3>

                {/* Tagline */}
                <div className="text-xs font-semibold text-[#1479D4] leading-tight mb-3">
                  {srv.tagline}
                </div>

                {/* Description */}
                <p className="font-['Inter'] text-xs text-slate-600 leading-relaxed mb-5">
                  {srv.description}
                </p>

                {/* Bullet Highlights */}
                <div className="mt-auto space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8CE] shrink-0 mt-0.5" />
                      <span className="leading-tight text-[11.5px] text-slate-600">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA Button */}
              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuote(srv.title);
                  }}
                  className="w-full py-2.5 px-3.5 bg-[#EEF3F7] group-hover:bg-[#10243A] text-[#10243A] group-hover:text-white text-xs font-['Manrope'] font-bold rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer border border-slate-200/60 group-hover:border-[#10243A]"
                >
                  <span>Request Quote & Info</span>
                  <div className="w-6 h-6 rounded-lg bg-white/80 group-hover:bg-[#1479D4] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1479D4] group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 24/7 RAPID DISPATCH BANNER (Blue, Black, White Colour Palette) */}
        <div className="bg-gradient-to-r from-[#070E18] via-[#10243A] to-[#1479D4] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl mb-16 border border-[#20B8CE]/20">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#20B8CE]/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Field Support • Johannesburg & Pretoria</span>
              </div>
              <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-black text-white">
                Require Immediate Technical Assistance or a Custom Quote?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our certified technicians and trade specialists are ready to assist with emergency breakdowns, maintenance agreements, or new system installations across Gauteng.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${config.telephone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#10243A] text-xs sm:text-sm font-['Manrope'] font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#1479D4]" />
                <span>Call {config.telephone}</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 bg-[#20B8CE] hover:bg-cyan-400 text-[#070E18] text-xs sm:text-sm font-['Manrope'] font-black rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Service Online</span>
                <ArrowRight className="w-4 h-4 text-[#070E18]" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-STEP SERVICE PROCESS */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1.5">
            <span className="text-[#1479D4] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
              Straightforward & Reliable
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-[#10243A]">
              Our 4-Step Technical Workflow
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              From free initial assessment to final certification sign-off and warranty handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_PROCESS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200 rounded-2xl p-5 relative flex flex-col justify-between hover:border-[#1479D4] hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Manrope'] text-2xl font-black text-[#1479D4]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-[#EEF3F7] px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="font-['Manrope'] font-bold text-sm text-[#10243A] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-slate-100 text-[11px] text-[#1479D4] font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-[#20B8CE] shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SAFETY & STATUTORY COMPLIANCE ROW */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2 text-[#1479D4] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
                <HardHat className="w-4 h-4 text-[#1479D4]" />
                <span>Certified & Insured Trades</span>
              </div>
              <h4 className="font-['Manrope'] text-xl font-bold text-[#10243A]">
                Standards & Safety Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All mechanical, refrigeration, and electrical projects comply with national South African standards, including SANS 10142-1 Wiring Code, OHSAct machine safety, and HACCP environmental food standards.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-[#EEF3F7] border border-slate-200 text-xs font-mono font-bold text-[#10243A]">
                SANS 10142-1
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-[#EEF3F7] border border-slate-200 text-xs font-mono font-bold text-[#10243A]">
                OHSAct Compliant
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-[#EEF3F7] border border-slate-200 text-xs font-mono font-bold text-[#10243A]">
                HACCP Hygiene
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-[#EEF3F7] border border-slate-200 text-xs font-mono font-bold text-[#10243A]">
                SARACCA Gas Card
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
