import React, { useState } from 'react';
import {
  MAINTENANCE_TIERS,
  MAINTENANCE_SERVICES_LIST,
  MaintenanceTier
} from '../../data/maintenanceData';
import {
  Wrench,
  ShieldCheck,
  ClipboardCheck,
  Activity,
  Sparkles,
  Zap,
  PackageCheck,
  Gauge,
  Clock,
  CheckCircle2,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface MaintenanceDivisionViewProps {
  onOpenQuote: (serviceNote?: string) => void;
}

export const MaintenanceDivisionView: React.FC<MaintenanceDivisionViewProps> = ({
  onOpenQuote,
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('tier-gold');
  const [activeEnquiryType, setActiveEnquiryType] = useState<'contract' | 'emergency'>('contract');
  const config = getCompanyConfig();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'Gauge': return <Gauge className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="maintenance" className="py-20 bg-white text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-mono font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Preventative Plant Asset Management</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Dedicated Ventilation Maintenance Division
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            Industrial and commercial ventilation assets require routine dynamic balancing, thermal imaging, and ultrasonic cleaning. VentAxis maintains facility uptime with structured Annual Service Agreements (SLAs) and 4-hour breakdown guarantees.
          </p>
        </div>

        {/* 8 Core Maintenance Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MAINTENANCE_SERVICES_LIST.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#EEF3F7]/40 rounded-2xl border border-gray-200 hover:border-[#1479D4]/40 hover:bg-white hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1479D4] shadow-2xs">
                {getServiceIcon(srv.icon)}
              </div>
              <h4 className="font-['Manrope'] font-bold text-sm text-[#10243A]">
                {srv.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Annual Service Agreements (SLA) Pricing & Deliverables Comparison */}
        <div className="bg-[#10243A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-[#20B8CE] text-xs font-mono font-bold uppercase tracking-widest">
              Recurring Peace-of-Mind
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white">
              Annual Maintenance Agreements (SLA Tiers)
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              Tailored service plans for schools, commercial offices, distribution warehouses, and 24/7 manufacturing plants across Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAINTENANCE_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#173250] border-[#20B8CE] shadow-xl scale-102 ring-2 ring-[#20B8CE]/30'
                      : 'bg-[#0A1726]/60 border-white/10 hover:border-white/30 text-gray-300'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-white/10 text-[#20B8CE]">
                        {tier.badge}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {tier.emergencySla}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-['Manrope'] font-extrabold text-xl text-white">
                        {tier.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">
                        {tier.recommendedFor}
                      </p>
                    </div>

                    <div className="p-3 bg-black/30 rounded-xl border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono uppercase text-gray-400">Inspection Schedule</div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#20B8CE]" />
                        <span>{tier.inspectionFrequency}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase text-gray-400 block">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-gray-200">
                        {tier.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8CE] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                    <div className="text-xs font-mono text-gray-300">
                      {tier.startingPriceZar}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuote(`Annual Maintenance SLA: ${tier.name}`);
                      }}
                      className="w-full py-2.5 bg-[#1479D4] hover:bg-[#20B8CE] text-white hover:text-[#10243A] font-['Manrope'] font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Enquire for Facility</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Breakdown Emergency Assistance Contact Banner */}
        <div className="bg-[#EEF3F7] rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-['Manrope'] font-extrabold text-lg text-[#10243A]">
              Urgent Mechanical Breakdown or Fan Vibration Emergency?
            </h4>
            <p className="text-xs text-gray-600">
              Contracted clients receive 4-hour on-site dispatch. Mobile service vans equipped with replacement bearings, isolators, and laser balancing tools.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${config.emergencyHotline.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold font-['Manrope'] rounded-xl shadow-md transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>24/7 Breakdown: {config.emergencyHotline}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
