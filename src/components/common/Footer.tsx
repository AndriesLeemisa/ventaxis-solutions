import React from 'react';
import { Logo } from '../brand/Logo';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  ArrowUpRight,
  Lock
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuote: () => void;
  onOpenBrandKit: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenBrandKit,
  onOpenAdmin,
}) => {
  const config = getCompanyConfig();

  return (
    <footer className="bg-[#10243A] text-white pt-16 pb-10 border-t border-[#173250] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-[#173250] to-[#1479D4] rounded-2xl p-8 mb-14 shadow-xl border border-[#20B8CE]/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#20B8CE] text-xs font-['Manrope'] uppercase tracking-widest font-bold">
              Expert Cooling Fan Supply & Installation
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white">
              Ready to keep your space comfortable and cool?
            </h3>
            <p className="text-white/80 text-sm max-w-2xl">
              From designer residential fans and school hall cooling to massive warehouse HVLS installations across Gauteng.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-white text-[#10243A] font-['Manrope'] font-bold rounded-xl shadow-lg hover:bg-[#EEF3F7] transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#1479D4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 bg-[#10243A]/80 hover:bg-[#10243A] text-white font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#20B8CE]" />
              <span>{config.telephone}</span>
            </a>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#173250]">
          {/* Column 1: Brand & Configurable Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="monochrome-white" size="md" />
            <p className="text-gray-300 text-xs leading-relaxed max-w-sm mt-3">
              VentAxis Solutions supplies, installs and maintains commercial and industrial fans and mechanical ventilation systems across Gauteng, South Africa. Positioned as a dedicated engineering contractor.
            </p>

            {/* Configurable Legal Entity Box */}
            <div className="p-3.5 bg-[#0A1726] rounded-xl border border-[#173250] text-xs space-y-1.5 text-gray-300">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#20B8CE]" />
                <span>{config.legalCompanyName}</span>
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                {config.registrationNumber}
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                {config.vatNumber}
              </div>
              <div className="text-[11px] text-gray-400 pt-1 border-t border-[#173250]">
                {config.physicalAddress}
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Categories */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-white text-sm uppercase tracking-wider">
              Cooling Fans
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial HVLS Ceiling Fans (7.3m & 4.9m)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Commercial Ceiling Fans (1400mm)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Solid Timber & Designer Ceiling Fans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  All-Weather Patio & Braai Fans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Wall-Mounted Oscillating Fans (750mm)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Heavy-Duty Pedestal & Floor Drum Fans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial Evaporative Air Coolers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Installation & Industries */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-white text-sm uppercase tracking-wider">
              Services & Sectors
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Commercial & Industrial Installation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Certified HVLS Fan Rigging
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Electrical & Mechanical CoC Sign-Off
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Schools & Universities (Education)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Healthcare & Hospital Airflow
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('industries')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Religious Auditoriums & Churches
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('maintenance')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Annual Maintenance Agreements (SLA)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Gauteng Coverage & Compliance */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-white text-sm uppercase tracking-wider">
              Gauteng Operational Hubs
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div>
                <span className="font-semibold text-white">Johannesburg:</span> Sandton, Randburg, Roodepoort, Soweto, CBD.
              </div>
              <div>
                <span className="font-semibold text-white">Ekurhuleni:</span> Kempton Park, Boksburg, Germiston, Benoni, Alberton.
              </div>
              <div>
                <span className="font-semibold text-white">Tshwane (Pretoria):</span> Menlyn, Centurion, Hatfield, Rosslyn.
              </div>
              <div>
                <span className="font-semibold text-white">Greater Gauteng:</span> Midrand, Vanderbijlpark & Vaal.
              </div>
            </div>

            <div className="pt-3 border-t border-[#173250]">
              <div className="text-[11px] text-[#20B8CE] font-semibold mb-1">
                South African Standards:
              </div>
              <div className="text-[10px] text-gray-400 space-y-0.5">
                <div>• SANS 10142-1 (Wiring of Premises)</div>
                <div>• SANS 10400-O (Building Ventilation)</div>
                <div>• OHSAct 85 of 1993 Health & Safety</div>
              </div>
            </div>
          </div>
        </div>

        {/* POPIA & Regulatory Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <div>
              © 2026 {config.legalCompanyName}. All rights reserved. Engineering Better Airflow.
            </div>
            <div className="text-[11px] text-gray-400">
              POPIA Notice: VentAxis Solutions processes commercial information in strict accordance with the Protection of Personal Information Act No. 4 of 2013 (POPIA).
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenBrandKit}
              className="hover:text-white transition-colors"
            >
              Brand Identity Guidelines
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('service-area')}
              className="hover:text-white transition-colors"
            >
              Gauteng Service Matrix
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Management</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
