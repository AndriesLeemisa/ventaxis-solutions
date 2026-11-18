import React, { useState } from 'react';
import {
  INSTALLATION_SERVICES,
  INSTALLATION_WORKFLOW,
  SAFETY_AND_COMPLIANCE
} from '../../data/servicesData';
import { InstallationService } from '../../types';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileCheck,
  HardHat,
  Zap,
  Building2,
  Factory,
  GraduationCap,
  Wind,
  RotateCw,
  Cpu,
  Wrench,
  ChevronRight
} from 'lucide-react';

interface InstallationServicesViewProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const InstallationServicesView: React.FC<InstallationServicesViewProps> = ({
  onOpenQuote,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(INSTALLATION_SERVICES[0].id);

  const activeService = INSTALLATION_SERVICES.find((s) => s.id === selectedServiceId) || INSTALLATION_SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'RotateCw': return <RotateCw className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Wind className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5" />
            <span>Certified Installation & Wiring</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Specialist Fan Installation
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            Professional fan supply, secure structural mounting, and certified electrical wiring across Johannesburg, Pretoria, and Gauteng with official SANS 10142-1 CoC sign-off.
          </p>
        </div>

        {/* 5 Services Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Services Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-['Manrope'] font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
              Select Installation Service:
            </div>
            {INSTALLATION_SERVICES.map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-[#10243A] text-white border-[#10243A] shadow-md'
                      : 'bg-[#EEF3F7]/50 hover:bg-[#EEF3F7] text-gray-800 border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected ? 'bg-[#1479D4] text-white' : 'bg-white text-[#1479D4] border border-gray-200'
                      }`}
                    >
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <div>
                      <h4 className="font-['Manrope'] font-bold text-sm leading-tight">
                        {srv.title}
                      </h4>
                      <p className={`text-xs line-clamp-1 mt-0.5 ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
                        {srv.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#20B8CE]' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Deep Dive Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#EEF3F7]/40 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Service Banner Image */}
            <div className="relative h-60 w-full overflow-hidden bg-gray-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/90 via-[#10243A]/40 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#20B8CE] font-bold">
                  Scope of Service
                </span>
                <h3 className="font-['Manrope'] text-2xl font-extrabold text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Service Details Body */}
            <div className="p-6 sm:p-7 space-y-5">
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A]">
                  What We Deliver:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {activeService.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-gray-200">
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Includes SANS 10142-1 CoC</span>
                </div>
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="px-5 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-['Manrope'] font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book this Installation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Human Process Section */}
        <div className="bg-[#10243A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl mb-16">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-[#20B8CE] text-xs font-['Manrope'] font-bold uppercase tracking-widest">
              Straightforward & Reliable
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white">
              Our 4-Step Installation Process
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm">
              From free fan sizing advice to final electrical Certificate of Compliance handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INSTALLATION_WORKFLOW.map((step) => (
              <div
                key={step.step}
                className="bg-[#173250]/70 border border-[#20B8CE]/20 rounded-2xl p-5 relative flex flex-col justify-between hover:border-[#20B8CE]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Manrope'] text-2xl font-black text-[#20B8CE]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="font-['Manrope'] font-bold text-sm text-white mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-2.5 border-t border-white/10 text-[11px] text-[#20B8CE] font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety and Compliance Section */}
        <div>
          <div className="max-w-xl mb-6 space-y-1">
            <span className="text-xs font-['Manrope'] font-bold uppercase text-[#1479D4] tracking-wider">
              Safety First
            </span>
            <h3 className="font-['Manrope'] text-2xl font-extrabold text-[#10243A]">
              Compliance & Safety Standards
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Every fan is securely anchored and wired according to national South African electrical codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAFETY_AND_COMPLIANCE.map((item) => (
              <div
                key={item.code}
                className="p-5 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs font-bold text-[#1479D4] mb-1">
                  {item.code}
                </div>
                <h4 className="font-['Manrope'] font-bold text-sm text-[#10243A] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
