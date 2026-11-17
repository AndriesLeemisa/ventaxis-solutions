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
  ArrowRight
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
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
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
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#10243A] text-[#EEF3F7] text-xs py-2 px-4 border-b border-[#173250]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#20B8CE] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gauteng Hub: Johannesburg • Ekurhuleni • Pretoria</span>
            </span>
            <span className="hidden md:inline-block text-[#EEF3F7]/30">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#EEF3F7]/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SANS 10142-1 CoC Certified Installation Contractor</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#20B8CE] transition-colors"
              title="Office Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#1479D4]" />
              <span className="font-medium">{config.telephone}</span>
            </a>
            <span className="text-[#EEF3F7]/30">/</span>
            <a
              href={`tel:${config.emergencyHotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#20B8CE] transition-colors"
              title="Mobile & WhatsApp"
            >
              <span className="font-medium">{config.emergencyHotline}</span>
            </a>
            <span className="text-[#EEF3F7]/30">|</span>
            <a
              href={`mailto:${config.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#20B8CE] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#20B8CE]" />
              <span>{config.email}</span>
            </a>
            <span className="hidden sm:inline-block text-[#EEF3F7]/30">|</span>
            <button
              onClick={onOpenBrandKit}
              className="hidden lg:flex items-center gap-1 hover:text-[#20B8CE] transition-colors"
              title="Brand Identity Guidelines & Assets"
            >
              <Layers className="w-3.5 h-3.5 text-[#20B8CE]" />
              <span>Brand Kit</span>
            </button>
            <span className="hidden lg:inline-block text-[#EEF3F7]/30">|</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-[#EEF3F7]/70 hover:text-white transition-colors"
              title="Administrator Management Dashboard"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Portal</span>
            </button>
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
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors hover:text-[#1479D4] ${
                  activeSection === 'products' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-3 py-2 mt-1 space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs font-bold text-[#10243A] uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Full Product Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1479D4]" />
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Air Movement</div>
                    <div className="text-[11px] text-gray-500">HVLS, Commercial Ceiling, Wall & Pedestal</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Industrial Ventilation</div>
                    <div className="text-[11px] text-gray-500">Axials, Centrifugal, Inline Duct & Roof Cowls</div>
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs text-[#10243A]"
                  >
                    <div className="font-semibold text-[#1479D4]">Specialist Systems</div>
                    <div className="text-[11px] text-gray-500">Evaporative Coolers, Smoke & Dust Extraction</div>
                  </button>
                </div>
              )}
            </div>

            {/* Installation Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors hover:text-[#1479D4] ${
                  activeSection === 'services' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
                }`}
              >
                <span>Installation Services</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-3 py-2 mt-1 space-y-1 animate-fadeIn z-50">
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-xs font-bold text-[#10243A] uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>Our 7-Step Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1479D4]" />
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-left px-3 py-1.5 rounded hover:bg-[#EEF3F7] text-gray-700 hover:text-[#1479D4]"
                    >
                      • HVLS Fan Rigging & Mounting
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-left px-3 py-1.5 rounded hover:bg-[#EEF3F7] text-gray-700 hover:text-[#1479D4]"
                    >
                      • Commercial & Institutional Fan Installations
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-left px-3 py-1.5 rounded hover:bg-[#EEF3F7] text-gray-700 hover:text-[#1479D4]"
                    >
                      • Smoke & Fume Extraction Systems
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-left px-3 py-1.5 rounded hover:bg-[#EEF3F7] text-gray-700 hover:text-[#1479D4]"
                    >
                      • Electrical Coordination & SANS 10142-1 CoC
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('industries')}
                className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors hover:text-[#1479D4] ${
                  activeSection === 'industries' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
                }`}
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {industriesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 mt-1 space-y-0.5 animate-fadeIn z-50 text-xs">
                  {['Education', 'Healthcare', 'Religious Institutions', 'Commercial', 'Industrial', 'Hospitality'].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => handleNavClick('industries')}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#EEF3F7] text-gray-700 hover:text-[#1479D4] font-medium"
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gauteng Service Area Link */}
            <button
              onClick={() => handleNavClick('service-area')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'service-area' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Gauteng Service Area
            </button>

            {/* Portfolio Link */}
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] ${
                activeSection === 'portfolio' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              Projects
            </button>

            {/* Maintenance Link */}
            <button
              onClick={() => handleNavClick('maintenance')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-[#1479D4] flex items-center gap-1 ${
                activeSection === 'maintenance' ? 'text-[#1479D4] bg-[#EEF3F7]' : ''
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-[#1479D4]" />
              <span>Maintenance SLA</span>
            </button>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#20B8CE]" />
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
              onClick={() => handleNavClick('products')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              Products Catalogue
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              Installation Services & 7-Step Workflow
            </button>
            <button
              onClick={() => handleNavClick('industries')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              Industries (Education, Healthcare, Commercial, etc.)
            </button>
            <button
              onClick={() => handleNavClick('service-area')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              Gauteng Service Coverage
            </button>
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A]"
            >
              Project Showcase
            </button>
            <button
              onClick={() => handleNavClick('maintenance')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#EEF3F7] text-[#10243A] flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-[#1479D4]" />
              <span>Maintenance & Servicing SLA</span>
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
              REQUEST A QUOTE
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
