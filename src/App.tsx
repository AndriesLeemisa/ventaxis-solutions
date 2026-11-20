import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { CoreSolutionsSection } from './components/solutions/CoreSolutionsSection';
import { OtherServicesSection } from './components/services/OtherServicesSection';
import { IndustriesView } from './components/industries/IndustriesView';
import { WhyChooseUsSection } from './components/home/WhyChooseUsSection';
import { ContactSection } from './components/home/ContactSection';
import { ProductCatalogue } from './components/products/ProductCatalogue';
import { QuoteWizard } from './components/quote/QuoteWizard';
import { QuoteSuccessModal } from './components/quote/QuoteSuccessModal';
import { BrandAssetKitModal } from './components/brand/BrandAssetKitModal';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { QuotationEnquiry } from './types';
import { ChevronDown, ChevronUp, Package } from 'lucide-react';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showProductCatalogue, setShowProductCatalogue] = useState<boolean>(false);

  // Modals state
  const [quoteWizardOpen, setQuoteWizardOpen] = useState<boolean>(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<{ id: string; name: string } | null>(null);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | null>(null);
  const [selectedLocationForQuote, setSelectedLocationForQuote] = useState<string | null>(null);

  const [submittedEnquiry, setSubmittedEnquiry] = useState<QuotationEnquiry | null>(null);
  const [brandKitOpen, setBrandKitOpen] = useState<boolean>(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState<boolean>(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);
  const [adminDashboardOpen, setAdminDashboardOpen] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'products') {
      setShowProductCatalogue(true);
    }
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenQuote = (
    prefill?:
      | { id: string; name: string }
      | string
  ) => {
    if (typeof prefill === 'string') {
      setSelectedServiceForQuote(prefill);
      setSelectedProductForQuote(null);
      setSelectedLocationForQuote(null);
    } else if (prefill && typeof prefill === 'object') {
      setSelectedProductForQuote(prefill);
      setSelectedServiceForQuote(null);
      setSelectedLocationForQuote(null);
    } else {
      setSelectedProductForQuote(null);
      setSelectedServiceForQuote(null);
      setSelectedLocationForQuote(null);
    }
    setQuoteWizardOpen(true);
  };

  const handleQuoteSuccess = (enquiry: QuotationEnquiry) => {
    setQuoteWizardOpen(false);
    setSubmittedEnquiry(enquiry);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setAdminLoginOpen(false);
    setAdminDashboardOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#10243A] flex flex-col font-['Inter']">
      {/* Primary Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenAdmin={() => {
          if (isAdminAuthenticated) {
            setAdminDashboardOpen(true);
          } else {
            setAdminLoginOpen(true);
          }
        }}
      />

      {/* Main Page Layout Sections: Organized as Requested */}
      <main className="flex-1">
        {/* SECTION 1: HERO (Image-dominant, industrial HVAC focus, powerful headline & CTA) */}
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onExploreSolutions={() => handleNavigate('core-solutions')}
        />

        {/* SECTION 2: OUR CORE SOLUTIONS (Industrial HVAC, Chillers, Commercial Cooling, Ventilation) */}
        <CoreSolutionsSection
          onOpenQuote={(solutionTitle) => handleOpenQuote(`Inquiry regarding ${solutionTitle}`)}
        />

        {/* SECTION 3: OUR OTHER SERVICES (Fencing & Security Solutions + Additional Existing Services) */}
        <OtherServicesSection
          onOpenQuote={(serviceName) => handleOpenQuote(serviceName)}
        />

        {/* OPTIONAL TOGGLE FOR SPECIALIST EQUIPMENT CATALOGUE (Preserves all existing products) */}
        <div className="bg-[#EEF3F7]/50 border-y border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#10243A] text-[#20B8CE] flex items-center justify-center shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <div className="font-['Manrope'] font-bold text-sm text-[#10243A]">
                  Looking for Specific Air Movers & Fans?
                </div>
                <div className="text-xs text-gray-500">
                  Access our 11-model industrial fan, wall unit & evaporative cooler specification sheet
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowProductCatalogue(!showProductCatalogue)}
              className="px-5 py-2.5 bg-white hover:bg-gray-50 text-[#10243A] border border-gray-300 rounded-xl text-xs font-['Manrope'] font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <span>{showProductCatalogue ? 'Hide Fan Catalogue' : 'View Fan Equipment Catalogue'}</span>
              {showProductCatalogue ? <ChevronUp className="w-4 h-4 text-[#1479D4]" /> : <ChevronDown className="w-4 h-4 text-[#1479D4]" />}
            </button>
          </div>

          {showProductCatalogue && (
            <div id="products" className="mt-6 border-t border-gray-200 pt-6 animate-fadeIn">
              <ProductCatalogue
                onOpenQuote={(product) => handleOpenQuote(product)}
              />
            </div>
          )}
        </div>

        {/* SECTION 4: INDUSTRIES WE SERVE (Shopping Malls, Commercial Buildings, Plants, Warehouses) */}
        <IndustriesView
          onOpenQuote={(industryName) => handleOpenQuote(industryName)}
        />

        {/* SECTION 5: WHY CHOOSE US (Short statements and icons, minimal text) */}
        <WhyChooseUsSection />

        {/* SECTION 6: CONTACT US (Clean contact section with existing details & enquiry button) */}
        <ContactSection
          onOpenQuote={() => handleOpenQuote()}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenBrandKit={() => setBrandKitOpen(true)}
        onOpenAdmin={() => {
          if (isAdminAuthenticated) {
            setAdminDashboardOpen(true);
          } else {
            setAdminLoginOpen(true);
          }
        }}
      />

      {/* Modals */}
      {/* 1. Interactive Commercial Quotation Wizard */}
      <QuoteWizard
        isOpen={quoteWizardOpen}
        onClose={() => setQuoteWizardOpen(false)}
        onSuccess={handleQuoteSuccess}
        initialProduct={selectedProductForQuote}
        initialService={selectedServiceForQuote}
        initialLocation={selectedLocationForQuote}
      />

      {/* 2. Quotation Submission Confirmation Modal */}
      <QuoteSuccessModal
        enquiry={submittedEnquiry}
        onClose={() => setSubmittedEnquiry(null)}
        onOpenAdmin={() => {
          setSubmittedEnquiry(null);
          if (isAdminAuthenticated) {
            setAdminDashboardOpen(true);
          } else {
            setAdminLoginOpen(true);
          }
        }}
      />

      {/* 3. Corporate Brand Identity Kit & Asset Guidelines Modal */}
      <BrandAssetKitModal
        isOpen={brandKitOpen}
        onClose={() => setBrandKitOpen(false)}
      />

      {/* 4. Admin Login Portal Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* 5. Full Admin Operations Dashboard */}
      {isAdminAuthenticated && adminDashboardOpen && (
        <AdminDashboard
          onClose={() => setAdminDashboardOpen(false)}
          onLogout={() => {
            setIsAdminAuthenticated(false);
            setAdminDashboardOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
