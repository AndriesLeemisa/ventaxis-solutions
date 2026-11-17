import React, { useState } from 'react';
import { ProductCategory, QuotationEnquiry } from '../../types';
import { submitEnquiry } from '../../lib/supabase';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  User,
  Wind,
  Calendar,
  UploadCloud,
  FileCheck,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface QuoteWizardProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (enquiry: QuotationEnquiry) => void;
  initialProduct?: { id: string; name: string } | null;
  initialService?: string | null;
  initialLocation?: string | null;
}

export const QuoteWizard: React.FC<QuoteWizardProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialProduct,
  initialService,
  initialLocation,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const [province, setProvince] = useState('Gauteng');
  const [city, setCity] = useState(initialLocation || 'Johannesburg / Sandton');
  const [institutionType, setInstitutionType] = useState('Logistics & Industrial Warehouse');
  const [buildingType, setBuildingType] = useState('High-Bay Steel Portal Frame');
  const [projectDescription, setProjectDescription] = useState(
    initialService ? `Enquiry regarding ${initialService}.` : ''
  );
  const [installationLocation, setInstallationLocation] = useState('');

  // Equipment Multiple Category Selection
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['AIR MOVEMENT']);
  const [quantityEstimated, setQuantityEstimated] = useState<number>(4);
  const [buildingSizeM2, setBuildingSizeM2] = useState<number>(1500);
  const [ceilingHeightM, setCeilingHeightM] = useState<number>(8.5);
  const [existingVentilation, setExistingVentilation] = useState<QuotationEnquiry['existingVentilation']>('Insufficient Natural');
  const [installationType, setInstallationType] = useState<QuotationEnquiry['installationType']>('New Installation');

  // Requirements
  const [requiredDate, setRequiredDate] = useState('2026-12-15');
  const [siteAssessmentRequired, setSiteAssessmentRequired] = useState<boolean>(true);
  const [electricalWorkRequired, setElectricalWorkRequired] = useState<boolean>(true);
  const [budgetRange, setBudgetRange] = useState<string>('R150,000 - R300,000');
  const [popiaConsent, setPopiaConsent] = useState<boolean>(true);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; type: string }[]>([]);

  if (!isOpen) return null;

  const handleCategoryToggle = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== cat));
      }
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFiles((prev) => [
        ...prev,
        {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          type: file.type || 'Document'
        }
      ]);
    }
  };

  const handleNext = () => {
    setFormError(null);
    if (currentStep === 1) {
      if (!name.trim() || !organisation.trim() || !email.trim() || !telephone.trim()) {
        setFormError('Please complete all required contact fields.');
        return;
      }
      if (!email.includes('@')) {
        setFormError('Please enter a valid email address.');
        return;
      }
    } else if (currentStep === 2) {
      if (!city.trim() || !projectDescription.trim()) {
        setFormError('Please provide project location and a brief description.');
        return;
      }
    } else if (currentStep === 3) {
      if (selectedCategories.length === 0) {
        setFormError('Please select at least one fan category.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setFormError(null);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!popiaConsent) {
      setFormError('You must agree to the POPIA Data Protection consent to submit.');
      return;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const savedEnquiry = await submitEnquiry({
        name,
        organisation,
        email,
        telephone,
        jobTitle,
        province,
        city,
        institutionType,
        buildingType,
        projectDescription,
        installationLocation: installationLocation || `${city} Main Building`,
        selectedCategories,
        selectedProducts: initialProduct
          ? [{ productId: initialProduct.id, productName: initialProduct.name, quantity: quantityEstimated }]
          : undefined,
        quantityEstimated,
        estimatedBuildingSizeM2: buildingSizeM2,
        ceilingHeightM,
        existingVentilation,
        installationType,
        requiredDate,
        siteAssessmentRequired,
        electricalWorkRequired,
        budgetRange,
        uploadedFiles,
        popiaConsent,
      });

      setIsSubmitting(false);
      onSuccess(savedEnquiry);
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setFormError('Error submitting quotation enquiry. Please verify details and retry.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10243A]/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="px-6 py-5 bg-[#10243A] text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20B8CE]"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#20B8CE] font-bold">
                Commercial Quotation Enquiry System
              </span>
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-white mt-0.5">
              Engineering Quotation Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator Bar */}
        <div className="bg-[#EEF3F7] px-6 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between text-xs font-['Manrope'] font-bold text-gray-500">
            <span className={currentStep >= 1 ? 'text-[#1479D4]' : ''}>1. Contact</span>
            <span>→</span>
            <span className={currentStep >= 2 ? 'text-[#1479D4]' : ''}>2. Project Site</span>
            <span>→</span>
            <span className={currentStep >= 3 ? 'text-[#1479D4]' : ''}>3. Equipment Specs</span>
            <span>→</span>
            <span className={currentStep >= 4 ? 'text-[#1479D4]' : ''}>4. Review & POPIA</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-[#1479D4] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Error Alert */}
        {formError && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-[#10243A]">
          {/* STEP 1: CONTACT INFORMATION */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                  Step 1: Contact & Organisation
                </h4>
                <p className="text-xs text-gray-500">
                  Please provide primary technical or procurement contact details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Andries Leemisa"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Organisation / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. AfriLogistics Hub (Pty) Ltd"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. engineering@company.co.za"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Telephone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="e.g. +27 (0)82 123 4567"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Job Title / Role (Optional)
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Facilities Manager / Operations Director / Consulting Engineer"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PROJECT & FACILITY LOCATION */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                  Step 2: Facility & Project Details
                </h4>
                <p className="text-xs text-gray-500">
                  Where is the installation taking place and what type of institution is it?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Province *
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="Gauteng">Gauteng (Primary Operational Market)</option>
                    <option value="Western Cape">Western Cape (Phase 2 Expansion)</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal (Phase 3 Expansion)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City / Suburb in Gauteng *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="Johannesburg / Sandton">Johannesburg (Sandton, Randburg, Rosebank)</option>
                    <option value="Johannesburg / CBD & South">Johannesburg (CBD, Soweto, City Deep, Crown Mines)</option>
                    <option value="Ekurhuleni / Kempton Park">Ekurhuleni (Kempton Park, Spartan, Pomona)</option>
                    <option value="Ekurhuleni / Boksburg & Benoni">Ekurhuleni (Boksburg, Jet Park, Benoni, Apex)</option>
                    <option value="Ekurhuleni / Germiston & Wadeville">Ekurhuleni (Germiston, Wadeville, Alrode)</option>
                    <option value="Pretoria / Tshwane CBD & Hatfield">Pretoria (CBD, Hatfield, Rosslyn)</option>
                    <option value="Pretoria / Centurion & East">Pretoria (Centurion, Menlyn, Silverton)</option>
                    <option value="Midrand / Waterfall">Midrand & Waterfall Corridor</option>
                    <option value="Vaal / Vereeniging">Vaal Triangle (Vereeniging, Vanderbijlpark)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Institution / Facility Type *
                  </label>
                  <select
                    value={institutionType}
                    onChange={(e) => setInstitutionType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="Educational (School / University)">Educational (School / University)</option>
                    <option value="Healthcare (Hospital / Clinic)">Healthcare (Hospital / Clinic)</option>
                    <option value="Religious Institution (Church / Auditorium)">Religious Institution (Church / Auditorium)</option>
                    <option value="Commercial (Mall / Retail / Office)">Commercial (Mall / Retail / Office)</option>
                    <option value="Industrial (Manufacturing / Factory)">Industrial (Manufacturing / Factory)</option>
                    <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                    <option value="Hospitality (Hotel / Venue / Restaurant)">Hospitality (Hotel / Venue / Restaurant)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Building Structure Profile
                  </label>
                  <input
                    type="text"
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value)}
                    placeholder="e.g. Steel portal frame, pitched timber trusses, concrete slab"
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Project Description & Airflow Objectives *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe the airflow issues (e.g. summer heat stagnation, stuffy exam hall, welding fumes, high ceiling destratification needed)..."
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: EQUIPMENT SELECTION & TECHNICAL DIMENSIONS */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                  Step 3: Ventilation Equipment & Building Dimensions
                </h4>
                <p className="text-xs text-gray-500">
                  Select multiple fan categories if required for comprehensive coverage.
                </p>
              </div>

              {/* Fan Categories Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Required Equipment Categories (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { key: 'AIR MOVEMENT', label: 'Air Movement (HVLS, Commercial Ceiling, Wall Fans)' },
                    { key: 'INDUSTRIAL VENTILATION', label: 'Industrial Ventilation (Axial, Centrifugal, Roof Cowls)' },
                    { key: 'SPECIALIST SYSTEMS', label: 'Specialist Systems (Smoke Spill, Dust & Fume Extraction)' }
                  ].map((item) => {
                    const isChecked = selectedCategories.includes(item.key);
                    return (
                      <button
                        type="button"
                        key={item.key}
                        onClick={() => handleCategoryToggle(item.key)}
                        className={`p-3 rounded-xl border text-left flex items-start gap-2 transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-[#1479D4]/10 border-[#1479D4] text-[#10243A]'
                            : 'bg-gray-50 border-gray-200 text-gray-600'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                            isChecked ? 'bg-[#1479D4] border-[#1479D4] text-white' : 'border-gray-300'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Numbers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Fan Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={quantityEstimated}
                    onChange={(e) => setQuantityEstimated(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Floor Size (m²)
                  </label>
                  <input
                    type="number"
                    min="20"
                    step="50"
                    value={buildingSizeM2}
                    onChange={(e) => setBuildingSizeM2(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Ceiling Height (metres)
                  </label>
                  <input
                    type="number"
                    min="2.5"
                    max="25"
                    step="0.5"
                    value={ceilingHeightM}
                    onChange={(e) => setCeilingHeightM(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Existing Ventilation Status
                  </label>
                  <select
                    value={existingVentilation}
                    onChange={(e) => setExistingVentilation(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="None">None (Sealed / Poor Airflow)</option>
                    <option value="Insufficient Natural">Insufficient Natural Airflow</option>
                    <option value="Existing Mechanical (Aging)">Existing Mechanical (Aging / Inefficient)</option>
                    <option value="Damaged/Non-Compliant">Damaged or Non-Compliant</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Installation Scope Type
                  </label>
                  <select
                    value={installationType}
                    onChange={(e) => setInstallationType(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="New Installation">New Turnkey Installation</option>
                    <option value="Replacement / Retrofit">Replacement / Retrofit of Existing Fans</option>
                    <option value="Facility Expansion">Facility Expansion / Add-On</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: PROJECT REQUIREMENTS, ATTACHMENTS & POPIA */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-2">
                <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                  Step 4: Requirements, Drawings & POPIA Consent
                </h4>
                <p className="text-xs text-gray-500">
                  Finalize execution timeline, electrical coordination, and document attachments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Target Installation / Handover Date
                  </label>
                  <input
                    type="date"
                    value={requiredDate}
                    onChange={(e) => setRequiredDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Budget Allocation Range (Optional)
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] outline-none bg-white"
                  >
                    <option value="Under R50,000">Under R50,000</option>
                    <option value="R50,000 - R150,000">R50,000 - R150,000</option>
                    <option value="R150,000 - R300,000">R150,000 - R300,000</option>
                    <option value="R300,000 - R600,000">R300,000 - R600,000</option>
                    <option value="R600,000+ (Turnkey Facility)">R600,000+ (Turnkey Industrial Facility)</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes: Site Assessment & Electrical */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <label className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2 cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={siteAssessmentRequired}
                    onChange={(e) => setSiteAssessmentRequired(e.target.checked)}
                    className="mt-0.5 rounded text-[#1479D4] focus:ring-[#1479D4]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#10243A] block">On-Site Assessment Required</span>
                    <span className="text-gray-500">Laser measurement & structural truss load verification</span>
                  </div>
                </label>

                <label className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-start gap-2 cursor-pointer hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    checked={electricalWorkRequired}
                    onChange={(e) => setElectricalWorkRequired(e.target.checked)}
                    className="mt-0.5 rounded text-[#1479D4] focus:ring-[#1479D4]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#10243A] block">Electrical Work & SANS 10142-1 CoC</span>
                    <span className="text-gray-500">Dedicated motor sub-circuits, isolators & compliance cert</span>
                  </div>
                </label>
              </div>

              {/* Upload Building Plans / Photos Simulation */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Upload Photographs or Building Plans (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors">
                  <UploadCloud className="w-8 h-8 text-[#1479D4] mx-auto mb-1" />
                  <p className="text-xs text-gray-600">
                    Drag and drop roof truss photos, architectural floor plans or CAD PDFs here
                  </p>
                  <input
                    type="file"
                    id="quoteFileInput"
                    onChange={handleSimulatedFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="quoteFileInput"
                    className="mt-2 inline-block px-3 py-1.5 bg-[#EEF3F7] hover:bg-gray-200 text-xs font-bold text-[#10243A] rounded-lg cursor-pointer transition-colors"
                  >
                    Browse Files
                  </label>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 text-left space-y-1">
                      {uploadedFiles.map((f, i) => (
                        <div key={i} className="text-xs bg-white p-2 rounded border border-gray-200 flex items-center justify-between">
                          <span className="font-medium text-[#10243A] truncate max-w-xs">{f.name}</span>
                          <span className="text-gray-400 font-mono text-[11px]">{f.size}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* POPIA Compliance Notice & Checkbox */}
              <div className="pt-3 border-t border-gray-200">
                <label className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={popiaConsent}
                    onChange={(e) => setPopiaConsent(e.target.checked)}
                    className="mt-1 rounded text-[#1479D4] focus:ring-[#1479D4]"
                  />
                  <div className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-[#10243A] block">POPIA Compliance Consent (Act No. 4 of 2013) *</strong>
                    I consent to VentAxis Solutions processing the submitted company and technical data solely for the purpose of formulating commercial ventilation quotations, conducting on-site engineering assessments, and coordinating SANS 10142-1 certified installations. Your data will never be sold or shared with unverified third parties.
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-200 rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-['Manrope'] font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#20B8CE]" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-7 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-['Manrope'] font-extrabold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Registering Enquiry...</span>
                ) : (
                  <>
                    <span>SUBMIT COMMERCIAL ENQUIRY</span>
                    <ArrowRight className="w-4 h-4 text-[#20B8CE]" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
