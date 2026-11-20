import React, { useState, useEffect } from 'react';
import { Logo } from '../brand/Logo';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  FileText,
  Lock,
  Layers,
  Wrench,
  Sparkles,
  ArrowRight,
  Shield,
  Wind
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuote: (prefillProduct?: { id: string; name: string }) => void;
  onOpenBrandKit: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenQuote,
  onOpenBrandKit,
  onOpenAdmin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const config = getCompanyConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#070E18] text-[#EEF3F7] text-xs py-2 px-4 border-b border-[#173250]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#20B8CE] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Johannesburg & Pretoria • Gauteng</span>
            </span>
            <span className="hidden sm:inline-block text-[#EEF3F7]/30">•</span>
            <span className="hidden sm:inline-block text-[#EEF3F7]/80">
              SANS 10142-1 CoC Certified Industrial HVAC & Infrastructure
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-[#20B8CE] transition-colors"
              title="Office Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#20B8CE]" />
              <span className="font-medium">{config.telephone}</span>
            </a>
            <span className="text-[#EEF3F7]/30">|</span>
            <a
              href={`https://wa.me/27834328294`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              title="WhatsApp Emergency Dispatch"
            >
              <span>WhatsApp: {config.emergencyHotline}</span>
            </a>
            <span className="hidden md:inline-block text-[#EEF3F7]/30">|</span>
            <a
              href={`mailto:${config.email}`}
              className="hidden md:flex items-center gap-1 hover:text-[#20B8CE] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#20B8CE]" />
              <span>{config.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`px-4 sm:px-6 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-md bg-white/95 backdrop-blur-md' : 'py-4.5 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="focus:outline-none text-left cursor-pointer"
          >
            <Logo variant="horizontal" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-[#10243A]">
            {/* Core HVAC Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('core-solutions')}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors hover:text-[#1479D4] ${
                  activeSection === 'core-solutions' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
                }`}
              >
                <span>Industrial HVAC Solutions</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 py-2 mt-1 space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => handleNavClick('core-solutions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs font-bold text-[#10243A] uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>All Core HVAC Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1479D4]" />
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('core-solutions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Industrial HVAC & Rooftop Units</div>
                    <div className="text-[11px] text-gray-500">Commercial packaged plants & air handlers</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('core-solutions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Industrial Chillers & Cooling Towers</div>
                    <div className="text-[11px] text-gray-500">Water-cooled, air-cooled & process chillers</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('core-solutions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Commercial Air Conditioning & VRV/VRF</div>
                    <div className="text-[11px] text-gray-500">Zoned multi-split climate control networks</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('core-solutions')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Ventilation & Spiral Ductwork</div>
                    <div className="text-[11px] text-gray-500">Galvanized ducting & smoke spill fans</div>
                  </button>
                </div>
              )}
            </div>

            {/* Fencing & Security Link */}
            <button
              onClick={() => handleNavClick('fencing-security')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] flex items-center gap-1 ${
                activeSection === 'fencing-security' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#1479D4]" />
              <span>Fencing & Security</span>
            </button>

            {/* Other Services Link */}
            <button
              onClick={() => handleNavClick('other-services')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'other-services' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Other Services
            </button>

            {/* Industries Link */}
            <button
              onClick={() => handleNavClick('industries')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'industries' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Industries We Serve
            </button>

            {/* Why Choose Us Link */}
            <button
              onClick={() => handleNavClick('why-us')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'why-us' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Why Choose Us
            </button>

            {/* Contact Link */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'contact' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 bg-gradient-to-r from-[#1479D4] to-[#20B8CE] hover:from-[#20B8CE] hover:to-[#1479D4] text-[#070E18] font-['Manrope'] font-black text-sm rounded-lg shadow-md hover:shadow-cyan-400/25 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#070E18]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#10243A] hover:bg-[#EEF3F7] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1 font-semibold text-sm">
            <button
              onClick={() => handleNavClick('core-solutions')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#1479D4] font-bold"
            >
              • Industrial HVAC & Cooling Solutions
            </button>
            <button
              onClick={() => handleNavClick('fencing-security')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              • Fencing & Security Solutions
            </button>
            <button
              onClick={() => handleNavClick('other-services')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              • Other Mechanical & Technical Services
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              • Industries We Serve (Malls, Plants, Hubs)
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              • Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              • Contact Engineering Team
            </button>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-[#1479D4] text-white font-['Manrope'] font-bold text-center rounded-lg shadow-sm"
            >
              REQUEST AN ENGINEERING QUOTE
            </button>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandKit();
                }}
                className="py-2 px-3 border border-gray-200 rounded-lg text-gray-700 flex items-center justify-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5 text-[#20B8CE]" />
                <span>Brand Identity</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="py-2 px-3 border border-gray-200 rounded-lg text-gray-700 flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Admin Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
