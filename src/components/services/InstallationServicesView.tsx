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
  Flame,
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
      case 'Flame': return <Flame className="w-5 h-5" />;
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-mono font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Rigging</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Specialist Installation Services
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            VentAxis Solutions operates as a professional engineering and installation contractor. We provide single-source accountability: structural load calculations, scissor-lift rigging, dedicated electrical supplies, and official SANS 10142-1 CoC sign-off.
          </p>
        </div>

        {/* 9 Services Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Left: Services Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">
              Select Installation Discipline:
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
            <div className="relative h-64 w-full overflow-hidden bg-gray-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#20B8CE] font-bold">
                  Engineering Scope of Work
                </span>
                <h3 className="font-['Manrope'] text-2xl font-extrabold text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Service Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Key Features */}
              <div className="space-y-2.5">
                <h4 className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A]">
                  Key Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeService.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-[#1479D4] shrink-0 mt-0.5" />
                      <span className="text-gray-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & CoC */}
              <div className="space-y-2.5 pt-4 border-t border-gray-200">
                <h4 className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A]">
                  Formal Project Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {activeService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#20B8CE]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeService.complianceStandards.map((std, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#10243A]/5 border border-gray-200 text-[11px] font-mono text-gray-700 flex items-center gap-1"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {std}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Site assessments available across all Gauteng locations within 24–48 hours.
                </div>
                <button
                  onClick={() => onOpenQuote(activeService.title)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST QUOTE FOR THIS SERVICE</span>
                  <ArrowRight className="w-4 h-4 text-[#20B8CE]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Step Installation Workflow Timeline */}
        <div className="my-24 bg-[#10243A] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1479D4]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[#20B8CE] text-xs font-mono font-bold uppercase tracking-widest">
              Standardized Quality Assurance
            </span>
            <h3 className="font-['Manrope'] text-3xl font-extrabold text-white">
              The VentAxis 7-Step Installation Workflow
            </h3>
            <p className="text-gray-300 text-sm">
              Every project follows an uncompromising engineering lifecycle from laser site measurement to final SANS 10142-1 Electrical Certificate of Compliance handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTALLATION_WORKFLOW.slice(0, 4).map((step) => (
              <div
                key={step.step}
                className="bg-[#173250]/60 border border-[#20B8CE]/20 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#20B8CE]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Manrope'] text-3xl font-black text-[#20B8CE]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="font-['Manrope'] font-bold text-base text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#20B8CE] font-semibold flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {INSTALLATION_WORKFLOW.slice(4).map((step) => (
              <div
                key={step.step}
                className="bg-[#173250]/60 border border-[#20B8CE]/20 rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#20B8CE]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Manrope'] text-3xl font-black text-[#20B8CE]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="font-['Manrope'] font-bold text-base text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] text-[#20B8CE] font-semibold flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety and Compliance Section */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#1479D4] tracking-wider">
              Legal & Safety Governance
            </span>
            <h3 className="font-['Manrope'] text-2xl font-extrabold text-[#10243A]">
              Rigorous Safety & Compliance Protocols
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              VentAxis strictly conforms to the Occupational Health and Safety Act and South African National Standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_AND_COMPLIANCE.map((item) => (
              <div
                key={item.code}
                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs font-bold text-[#1479D4] mb-1">
                  {item.code}
                </div>
                <h4 className="font-['Manrope'] font-bold text-sm text-[#10243A] mb-2">
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
