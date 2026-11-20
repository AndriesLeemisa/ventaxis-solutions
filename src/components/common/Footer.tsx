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
  Lock,
  Shield,
  Wind
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
    <footer className="bg-[#070E18] text-white pt-16 pb-10 border-t border-[#173250] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Callout Banner */}
        <div className="bg-gradient-to-r from-[#10243A] via-[#1479D4] to-[#20B8CE] rounded-2xl p-8 mb-14 shadow-xl border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#070E18] bg-white/90 px-3 py-1 rounded-full text-xs font-['Manrope'] uppercase tracking-widest font-black">
              Industrial HVAC & Cooling Engineering
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white">
              Ready to engineer your facility's climate system?
            </h3>
            <p className="text-white/90 text-sm max-w-2xl">
              Turnkey industrial HVAC plants, liquid chillers, multi-zone VRV/VRF air conditioning, and security perimeter fencing across Gauteng.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-white text-[#10243A] font-['Manrope'] font-black rounded-xl shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>REQUEST ENGINEERING QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#1479D4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="px-5 py-3.5 bg-[#070E18]/80 hover:bg-[#070E18] text-white font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-2"
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
              VentAxis Solutions is a premier industrial HVAC, large-scale cooling, and commercial engineering contractor in Gauteng, South Africa. Specialising in centralized chiller plants, rooftop air-conditioning, industrial ventilation, and perimeter security infrastructure.
            </p>

            {/* Configurable Legal Entity Box */}
            <div className="p-3.5 bg-[#0A131F] rounded-xl border border-[#173250] text-xs space-y-1.5 text-gray-300">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#20B8CE]" />
                <span>{config.legalCompanyName}</span>
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                Registration: {config.registrationNumber}
              </div>
              <div className="text-[11px] text-gray-400 font-mono">
                VAT: {config.vatNumber}
              </div>
              <div className="text-[11px] text-gray-400 pt-1 border-t border-[#173250]">
                {config.physicalAddress}
              </div>
            </div>
          </div>

          {/* Column 2: Core HVAC Solutions */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-white text-sm uppercase tracking-wider">
              Core HVAC Solutions
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial HVAC Systems & Rooftops
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial Liquid Chillers & Towers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Commercial Air Conditioning (VRV/VRF)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Commercial Cooling Systems (Malls & Atriums)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial Refrigeration & Cold Chain
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Ventilation & Spiral Ducting Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('core-solutions')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Centralised Cooling & Plant Infrastructure
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Fencing & Other Services */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-white text-sm uppercase tracking-wider">
              Fencing & Other Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigate('fencing-security')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Industrial Palisade Security Fencing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fencing-security')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Anti-Climb High-Security Mesh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fencing-security')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Steel Fencing & Perimeter Gates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('other-services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Cold Rooms & Blast Freezers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('other-services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Swimming Pool Industrial Heat Pumps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('other-services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Automotive Diagnostics & Fleet HVAC
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('other-services')} className="hover:text-[#20B8CE] transition-colors text-left">
                  Electrical & Plumbing Contracting
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
                <span className="font-semibold text-white">Johannesburg:</span> Sandton, Rosebank, Randburg, CBD.
              </div>
              <div>
                <span className="font-semibold text-white">Ekurhuleni:</span> Kempton Park, Boksburg, Germiston, Benoni.
              </div>
              <div>
                <span className="font-semibold text-white">Tshwane (Pretoria):</span> Centurion, Menlyn, Rosslyn.
              </div>
              <div>
                <span className="font-semibold text-white">Greater Gauteng:</span> Midrand, Vanderbijlpark & Vaal.
              </div>
            </div>

            <div className="pt-3 border-t border-[#173250]">
              <div className="text-[11px] text-[#20B8CE] font-semibold mb-1">
                Engineering Compliance:
              </div>
              <div className="text-[10px] text-gray-400 space-y-0.5">
                <div>• SANS 10142-1 (Wiring Code of Practice)</div>
                <div>• SANS 10400-O (Building Ventilation)</div>
                <div>• OHSAct 85 of 1993 Machine Safety</div>
                <div>• SARACCA Gas Safety Aligned</div>
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
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Direct Engineering Contact
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
