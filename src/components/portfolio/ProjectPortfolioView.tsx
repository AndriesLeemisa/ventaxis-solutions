import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { PortfolioProject } from '../../types';
import {
  Building2,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Filter,
  Layers,
  Wrench,
  Sparkles
} from 'lucide-react';

interface ProjectPortfolioViewProps {
  onOpenQuote: (projectName?: string) => void;
}

export const ProjectPortfolioView: React.FC<ProjectPortfolioViewProps> = ({
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredProjects = selectedCategory === 'ALL'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.clientType === selectedCategory);

  const categories = ['ALL', 'Schools', 'Healthcare', 'Industrial', 'Commercial', 'Religious institutions'];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-mono font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Proven Engineering Deployments</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            Commercial & Industrial Project Showcase
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            Examine our high-volume low-speed (HVLS), mechanical ventilation, and air extraction case studies across Gauteng. All projects are genuine completed installations or clearly labelled demonstration engineering benchmarks.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-['Manrope'] font-bold transition-all border cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#10243A] text-white border-[#10243A] shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'
              }`}
            >
              {cat === 'ALL' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Case Studies Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Cinematic Project Image (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto min-h-[320px] bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center brightness-[0.75] hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A] via-transparent to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide shadow-md ${
                      project.isDemonstrationContent
                        ? 'bg-amber-400 text-[#10243A]'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    {project.completionStatus}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] bg-[#10243A]/80 text-[#20B8CE] border border-[#20B8CE]/30 backdrop-blur-xs font-mono">
                    Sector: {project.clientType}
                  </span>
                </div>

                {/* Location Pill */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#20B8CE]" />
                  <span className="font-semibold drop-shadow">{project.location}</span>
                </div>
              </div>

              {/* Right Column: Case Study Data & Technical Scope (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-['Manrope'] text-xl sm:text-2xl font-extrabold text-[#10243A] leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Initial Challenge */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-700 space-y-1">
                    <span className="font-['Manrope'] font-bold text-gray-800 uppercase tracking-wider block">
                      Initial Engineering Challenge:
                    </span>
                    <p className="leading-relaxed">
                      {project.initialChallenge}
                    </p>
                  </div>

                  {/* Recommended Equipment */}
                  <div>
                    <span className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#1479D4] block mb-2">
                      Equipment Specified & Installed:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-800">
                      {project.recommendedEquipment.map((eq, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1479D4] shrink-0 mt-1.5"></span>
                          <span className="font-semibold">{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Installation Scope Description */}
                  <div>
                    <span className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-gray-500 block mb-1">
                      Installation & Rigging Execution:
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.installationDescription}
                    </p>
                  </div>

                  {/* Measured Outcomes & Verification */}
                  <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 space-y-2">
                    <span className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A] block">
                      Verified Engineering Results:
                    </span>
                    <ul className="space-y-1.5 text-xs text-blue-950">
                      {project.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">
                    Ref: {project.id} • SANS 10142-1 CoC Signed
                  </span>
                  <button
                    onClick={() => onOpenQuote(project.title)}
                    className="px-4 py-2 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Similar Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#20B8CE]" />
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
