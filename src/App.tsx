import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/home/HeroSection';
import { ProductCatalogue } from './components/products/ProductCatalogue';
import { InstallationServicesView } from './components/services/InstallationServicesView';
import { IndustriesView } from './components/industries/IndustriesView';
import { GautengServiceAreaView } from './components/serviceArea/GautengServiceAreaView';
import { MaintenanceDivisionView } from './components/maintenance/MaintenanceDivisionView';
import { ProjectPortfolioView } from './components/portfolio/ProjectPortfolioView';
import { QuoteWizard } from './components/quote/QuoteWizard';
import { QuoteSuccessModal } from './components/quote/QuoteSuccessModal';
import { BrandAssetKitModal } from './components/brand/BrandAssetKitModal';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { QuotationEnquiry } from './types';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

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
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
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

      {/* Main Page Layout Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onExploreProducts={() => handleNavigate('products')}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 2. Products Catalogue (Air Movement, Industrial Ventilation, Specialist Systems) */}
        <ProductCatalogue
          onOpenQuote={(product) => handleOpenQuote(product)}
        />

        {/* 3. Installation Services & 7-Step Workflow */}
        <InstallationServicesView
          onOpenQuote={(serviceName) => handleOpenQuote(serviceName)}
        />

        {/* 4. Industries Landing Pages (Education, Healthcare, Religious, Commercial, Industrial, Hospitality) */}
        <IndustriesView
          onOpenQuote={(industryName) => handleOpenQuote(`Industry Application: ${industryName}`)}
          onExploreProducts={() => handleNavigate('products')}
        />

        {/* 5. Gauteng Service Area (Johannesburg, Ekurhuleni, Pretoria, Vaal, Midrand) */}
        <GautengServiceAreaView
          onOpenQuote={(locationName) => {
            setSelectedLocationForQuote(locationName || null);
            setQuoteWizardOpen(true);
          }}
        />

        {/* 6. Project Portfolio Showcase */}
        <ProjectPortfolioView
          onOpenQuote={(projectName) => handleOpenQuote(`Inquiry inspired by Case Study: ${projectName}`)}
        />

        {/* 7. Maintenance Division (SLAs, Inspections, Breakdown Response) */}
        <MaintenanceDivisionView
          onOpenQuote={(note) => handleOpenQuote(note || 'Annual Maintenance Agreement SLA Inquiry')}
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

      {/* 4. Administrator Authentication Modal */}
      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* 5. Fullscreen Operations & ERP Admin Dashboard */}
      {adminDashboardOpen && (
        <AdminDashboard
          onLogout={() => {
            setIsAdminAuthenticated(false);
            setAdminDashboardOpen(false);
          }}
          onClose={() => setAdminDashboardOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
