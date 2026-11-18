export type ProductCategory =
  | 'CEILING & HVLS FANS'
  | 'WALL & PEDESTAL FANS'
  | 'PORTABLE & DRUM FANS'
  | 'EVAPORATIVE COOLERS';

export type ProductSubCategory =
  // Ceiling & HVLS
  | 'Industrial HVLS Fans'
  | 'Commercial Ceiling Fans'
  | 'Residential & Designer Fans'
  | 'Outdoor Patio Fans'
  // Wall & Pedestal
  | 'Wall-Mounted Fans'
  | 'Heavy-Duty Pedestal Fans'
  // Portable & Drum
  | 'Floor Drum Fans'
  | 'Mobile Air Cannons'
  // Evaporative
  | 'Evaporative Air Coolers';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory: ProductSubCategory;
  tagline: string;
  description: string;
  images: string[];
  manufacturer: string;
  model: string;
  airflowCapacity: string; // e.g., "13,800 m³/h" or "320,000 CFM"
  dimensions: {
    diameterOrWidth: string;
    depthOrHeight: string;
    weightKg: number;
  };
  powerRequirements: {
    voltage: '230V Single-Phase' | '380V/400V 3-Phase';
    frequency: '50 Hz (RSA Standard)';
    motorKw: number;
    currentAmps: number;
  };
  ipRating: string;
  soundLevelDb: string;
  installationConsiderations: string[];
  applicableEnvironments: string[];
  compliance: string[];
  features: string[];
  status: 'Available' | 'Made-to-Order' | 'Custom Engineered';
}

export interface InstallationService {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  deliverables: string[];
  complianceStandards: string[];
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  headline: string;
  shortDesc: string;
  challenges: string[];
  solutions: string[];
  recommendedCategories: string[];
  standardsHighlight: string;
  image: string;
  iconName: string;
}

export type GautengRegion = 'JOHANNESBURG' | 'EKURHULENI' | 'PRETORIA' | 'OTHER AREAS';

export interface GautengSubArea {
  name: string;
  region: GautengRegion;
  keyHubs: string[];
  dispatchTime: string;
  typicalFacilities: string[];
  activeSupport: boolean;
}

export type EnquiryStatus =
  | 'NEW'
  | 'QUALIFIED'
  | 'SITE_ASSESSMENT_SCHEDULED'
  | 'QUOTATION_ISSUED'
  | 'APPROVED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'CANCELLED';

export interface QuotationEnquiry {
  id: string; // e.g. VAX-2026-1042
  createdAt: string;
  name: string;
  organisation: string;
  email: string;
  telephone: string;
  jobTitle?: string;
  province: string;
  city: string;
  institutionType: string;
  buildingType: string;
  projectDescription: string;
  installationLocation: string;
  selectedCategories: string[];
  selectedProducts?: { productId: string; productName: string; quantity: number }[];
  quantityEstimated: number;
  estimatedBuildingSizeM2: number;
  ceilingHeightM: number;
  existingVentilation: 'None' | 'Insufficient Natural' | 'Existing Mechanical (Aging)' | 'Damaged/Non-Compliant';
  installationType: 'New Installation' | 'Replacement / Retrofit' | 'Facility Expansion';
  requiredDate: string;
  siteAssessmentRequired: boolean;
  electricalWorkRequired: boolean;
  budgetRange?: string;
  uploadedFiles?: { name: string; size: string; type: string }[];
  popiaConsent: boolean;
  status: EnquiryStatus;
  adminNotes?: string;
  assignedEngineer?: string;
}

export interface QuotationItem {
  id: string;
  category: 'Equipment' | 'Installation Labour' | 'Electrical & CoC' | 'Access Rigging & Scaffolding' | 'Ducting & Materials' | 'Transport & Logistics';
  description: string;
  quantity: number;
  unitPriceZar: number;
  totalPriceZar: number;
}

export interface Quotation {
  id: string; // e.g. QUO-2026-042
  enquiryId: string;
  enquiryRef: string;
  customerName: string;
  organisation: string;
  contactEmail: string;
  contactPhone: string;
  projectLocation: string;
  issueDate: string;
  validUntilDate: string;
  status: 'DRAFT' | 'ISSUED' | 'APPROVED' | 'DECLINED' | 'INVOICED';
  items: QuotationItem[];
  subtotalZar: number;
  vatRate: number; // 0.15 for 15% SA VAT
  vatAmountZar: number;
  totalZar: number;
  terms: string[];
  paymentMilestones: {
    milestone: string;
    percentage: number;
    amountZar: number;
  }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientType: 'Schools' | 'Healthcare' | 'Industrial' | 'Commercial' | 'Religious institutions';
  location: string;
  initialChallenge: string;
  recommendedEquipment: string[];
  installationDescription: string;
  results: string[];
  completionStatus: 'Completed & Certified' | 'Commissioning in Progress' | 'Demonstration Benchmark' | 'Demonstration Engineering Benchmark';
  isDemonstrationContent: boolean;
  image: string;
}

export interface MaintenanceContract {
  id: string;
  clientName: string;
  organisation: string;
  facilityLocation: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
  fanUnitsCovered: number;
  inspectionFrequency: 'Bi-Annual (2x/year)' | 'Quarterly (4x/year)' | 'Monthly';
  startDate: string;
  renewalDate: string;
  status: 'Active' | 'Review Due' | 'Expired';
  emergencySlaHours: number;
}

export interface CompanyConfig {
  brandName: string;
  legalCompanyName: string;
  registrationNumber: string;
  vatNumber: string;
  physicalAddress: string;
  primaryMarket: string;
  telephone: string;
  emergencyHotline: string;
  email: string;
  technicalEmail: string;
  operatingHours: string;
  accreditations: string[];
}
