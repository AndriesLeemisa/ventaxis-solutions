import React from 'react';
import {
  ShieldCheck,
  Factory,
  Clock,
  Cpu,
  Wrench,
  CheckCircle2,
  Award,
  Zap
} from 'lucide-react';

interface ValuePillar {
  icon: React.ReactNode;
  title: string;
  statement: string;
  metric: string;
}

const PILLARS: ValuePillar[] = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#20B8CE]" />,
    title: 'SANS 10142-1 CoC Certified',
    statement: 'Official statutory Certificate of Compliance issued on every electrical and mechanical HVAC installation.',
    metric: '100% Compliant'
  },
  {
    icon: <Factory className="w-7 h-7 text-[#20B8CE]" />,
    title: 'Commercial & Industrial Scale',
    statement: 'Engineered specifically for shopping malls, multi-storey corporate towers, and heavy manufacturing plants.',
    metric: 'Large-Scale Plants'
  },
  {
    icon: <Clock className="w-7 h-7 text-[#20B8CE]" />,
    title: '24/7 Priority Emergency Support',
    statement: 'Rapid on-site mechanical and cooling breakdown response across Johannesburg, Pretoria, and Gauteng.',
    metric: '24/7 Field Dispatch'
  },
  {
    icon: <Cpu className="w-7 h-7 text-[#20B8CE]" />,
    title: 'High-Efficiency Inverter Tech',
    statement: 'Advanced VRV/VRF and liquid chiller staging that slashes commercial electricity consumption by up to 40%.',
    metric: 'Up to 40% Energy Savings'
  },
  {
    icon: <Wrench className="w-7 h-7 text-[#20B8CE]" />,
    title: 'Turnkey Project Execution',
    statement: 'Complete thermal load sizing, structural rigging, pipework, automated BMS controls, and preventative SLAs.',
    metric: 'Single Point of Contact'
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-[#20B8CE]" />,
    title: 'Genuine OEM Replacement Parts',
    statement: 'Direct partnerships with leading industrial manufacturers and comprehensive warranties on all hardware.',
    metric: 'Full OEM Warranty'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#0A131F] text-white relative overflow-hidden border-t border-[#17263A]">
      {/* Background Subtle Radial Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1479D4]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#20B8CE]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-['Manrope'] font-bold uppercase tracking-wider text-[#20B8CE]">
            <Award className="w-3.5 h-3.5" />
            <span>Industrial Engineering Standards</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Choose VentAxis Solutions
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Combining rigorous mechanical engineering, licensed trade compliance, and reliable preventative maintenance across South Africa.
          </p>
        </div>

        {/* 6 Clean Visual Pillars (Short Statements & Icons, Zero Paragraphs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-7 bg-[#10243A]/70 hover:bg-[#10243A] rounded-2xl border border-white/10 hover:border-[#20B8CE] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#070E18] border border-white/10 flex items-center justify-center group-hover:bg-[#1479D4] group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#20B8CE] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="font-['Manrope'] text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#20B8CE] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {pillar.statement}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono font-semibold text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20B8CE]" />
                <span>Verified Engineering Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
