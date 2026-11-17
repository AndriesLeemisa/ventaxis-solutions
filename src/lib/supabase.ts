import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { QuotationEnquiry, Quotation, MaintenanceContract, Product } from '../types';
import { PRODUCTS } from '../data/productsData';

// Environment variables for Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('your-project')
);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// =========================================================================
// LOCAL STORAGE REPOSITORY (Reactive Fallback & Instant Demo Storage)
// Ensures 100% functionality even before user enters Supabase remote API keys
// =========================================================================

const ENQUIRIES_KEY = 'ventaxis_enquiries';
const QUOTATIONS_KEY = 'ventaxis_quotations';
const CONTRACTS_KEY = 'ventaxis_maintenance_contracts';
const PRODUCTS_KEY = 'ventaxis_products';

const INITIAL_DEMO_ENQUIRIES: QuotationEnquiry[] = [
  {
    id: 'VAX-2026-1048',
    createdAt: '2026-11-15T14:32:00Z',
    name: 'Johan van der Merwe',
    organisation: 'Brakpan Heavy Forgings (Pty) Ltd',
    email: 'johan@brakpanforgings.co.za',
    telephone: '+27 82 890 1144',
    jobTitle: 'Plant Engineering Director',
    province: 'Gauteng',
    city: 'Brakpan, Ekurhuleni',
    institutionType: 'Heavy Manufacturing & Forge',
    buildingType: 'Industrial High-Bay Shed (11m truss height)',
    projectDescription: 'Severe summer heat accumulation in main press shop. Need high-volume destratification and worker cooling across 4,200 m².',
    installationLocation: 'Bay 2 & Bay 3 Primary Forging Halls',
    selectedCategories: ['AIR MOVEMENT', 'INDUSTRIAL VENTILATION'],
    selectedProducts: [
      { productId: 'prod-hvls-7300', productName: 'VentAxis AeroVortex 7.3m Industrial HVLS Fan', quantity: 3 },
      { productId: 'prod-axial-630', productName: 'VentAxis CylindroAxial 630mm Direct-Drive In-Wall Axial Fan', quantity: 4 }
    ],
    quantityEstimated: 7,
    estimatedBuildingSizeM2: 4200,
    ceilingHeightM: 11.2,
    existingVentilation: 'Insufficient Natural',
    installationType: 'New Installation',
    requiredDate: '2026-12-05',
    siteAssessmentRequired: true,
    electricalWorkRequired: true,
    budgetRange: 'R250,000 - R500,000',
    popiaConsent: true,
    status: 'SITE_ASSESSMENT_SCHEDULED',
    assignedEngineer: 'Thabo Mokoena (Pr. Cert. Eng)',
    adminNotes: 'Site assessment confirmed for 18 Nov 10:00. Scissor lift required on site.'
  },
  {
    id: 'VAX-2026-1049',
    createdAt: '2026-11-16T08:15:00Z',
    name: 'Sister Mary Teresa',
    organisation: 'St. Benedict High School & Chapel',
    email: 'bursar@stbenedicts.edu.za',
    telephone: '+27 11 455 2000',
    jobTitle: 'Estate & Operations Bursar',
    province: 'Gauteng',
    city: 'Bedfordview / Germiston, Ekurhuleni',
    institutionType: 'Educational Institution',
    buildingType: 'School Examination Hall & Chapel (Double Volume)',
    projectDescription: 'Classrooms and 800-seat multi-purpose exam hall get intensely hot in November/December exams. Must be whisper quiet under 35dB.',
    installationLocation: 'Centenary Examination Hall & Main Chapel',
    selectedCategories: ['AIR MOVEMENT'],
    selectedProducts: [
      { productId: 'prod-hvls-4900', productName: 'VentAxis AeroVortex 4.9m Commercial HVLS Fan', quantity: 2 },
      { productId: 'prod-comm-ceiling-1400', productName: 'VentAxis AeroGlide 1400mm Commercial Ceiling Fan', quantity: 12 }
    ],
    quantityEstimated: 14,
    estimatedBuildingSizeM2: 1400,
    ceilingHeightM: 7.8,
    existingVentilation: 'Existing Mechanical (Aging)',
    installationType: 'Replacement / Retrofit',
    requiredDate: '2026-11-28',
    siteAssessmentRequired: true,
    electricalWorkRequired: true,
    budgetRange: 'R100,000 - R250,000',
    popiaConsent: true,
    status: 'QUOTATION_ISSUED',
    assignedEngineer: 'Kevin Naidoo (Lead Electrical)',
    adminNotes: 'Quote QUO-2026-038 issued. Client board meeting reviewing this Thursday.'
  },
  {
    id: 'VAX-2026-1050',
    createdAt: '2026-11-17T07:45:00Z',
    name: 'Dr. Sipho Zulu',
    organisation: 'Pretoria East Day Clinic & Surgical Suites',
    email: 'szulu@pretoriahealth.co.za',
    telephone: '+27 83 456 7890',
    jobTitle: 'Medical Superintendent',
    province: 'Gauteng',
    city: 'Pretoria East, Tshwane',
    institutionType: 'Healthcare Facility',
    buildingType: 'Outpatient Clinic & Pharmacy Dispensary',
    projectDescription: 'Negative pressure ventilation upgrade for infectious disease consultation rooms and main patient waiting atrium.',
    installationLocation: 'Blocks A & C Waiting Corridors',
    selectedCategories: ['INDUSTRIAL VENTILATION', 'SPECIALIST SYSTEMS'],
    selectedProducts: [
      { productId: 'prod-inline-315', productName: 'VentAxis DuctMaster 315mm Mixed-Flow Inline Duct Fan', quantity: 4 },
      { productId: 'prod-fume-poly', productName: 'VentAxis ChemVent Anti-Corrosive Chemical & Fume Extraction Blower', quantity: 1 }
    ],
    quantityEstimated: 5,
    estimatedBuildingSizeM2: 650,
    ceilingHeightM: 3.5,
    existingVentilation: 'Insufficient Natural',
    installationType: 'New Installation',
    requiredDate: '2026-12-10',
    siteAssessmentRequired: true,
    electricalWorkRequired: true,
    budgetRange: 'R80,000 - R150,000',
    popiaConsent: true,
    status: 'QUALIFIED',
    assignedEngineer: 'Thabo Mokoena (Pr. Cert. Eng)',
    adminNotes: 'Spoke with Dr. Zulu. Needs air change calculations for Department of Health compliance.'
  }
];

const INITIAL_DEMO_QUOTATIONS: Quotation[] = [
  {
    id: 'QUO-2026-038',
    enquiryId: 'VAX-2026-1049',
    enquiryRef: 'VAX-2026-1049',
    customerName: 'Sister Mary Teresa',
    organisation: 'St. Benedict High School & Chapel',
    contactEmail: 'bursar@stbenedicts.edu.za',
    contactPhone: '+27 11 455 2000',
    projectLocation: 'Bedfordview, Ekurhuleni, Gauteng',
    issueDate: '2026-11-16',
    validUntilDate: '2026-12-16',
    status: 'ISSUED',
    items: [
      {
        id: 'item-1',
        category: 'Equipment',
        description: 'VentAxis AeroVortex 4.9m Commercial HVLS Architectural Fan (230V Single Phase, PMSM Direct Drive, Matte-Black)',
        quantity: 2,
        unitPriceZar: 48500,
        totalPriceZar: 97000
      },
      {
        id: 'item-2',
        category: 'Equipment',
        description: 'VentAxis AeroGlide 1400mm All-Metal Heavy-Duty Commercial Ceiling Fan with 5-Speed Anti-Tamper Wall Regulators',
        quantity: 12,
        unitPriceZar: 2200,
        totalPriceZar: 26400
      },
      {
        id: 'item-3',
        category: 'Access Rigging & Scaffolding',
        description: 'Certified Scissor Lift (Electric, Non-Marking Tyres for Polished Parquet Flooring) + Rigging Safety Harnesses',
        quantity: 1,
        unitPriceZar: 8500,
        totalPriceZar: 8500
      },
      {
        id: 'item-4',
        category: 'Installation Labour',
        description: 'Structural Truss Clamping, Guy-Wire Turnbuckle Stabilization & Mechanical Mounting (Certified Riggers)',
        quantity: 1,
        unitPriceZar: 18500,
        totalPriceZar: 18500
      },
      {
        id: 'item-5',
        category: 'Electrical & CoC',
        description: 'Dedicated Isolator Feeds, Armoured Cabling, Conduit, Interlocking & Official SANS 10142-1 CoC Issue',
        quantity: 1,
        unitPriceZar: 14200,
        totalPriceZar: 14200
      },
      {
        id: 'item-6',
        category: 'Transport & Logistics',
        description: 'Site Delivery, Packaging Removal & Eco-Friendly Decommissioning of Old Failing Units',
        quantity: 1,
        unitPriceZar: 3400,
        totalPriceZar: 3400
      }
    ],
    subtotalZar: 168000,
    vatRate: 0.15,
    vatAmountZar: 25200,
    totalZar: 193200,
    terms: [
      'Validity: 30 days from date of issue.',
      'SANS 10142-1 Electrical Certificate of Compliance provided upon final commissioning.',
      'Equipment carries 5-year PMSM motor warranty and 2-year electronics warranty.',
      'Rigging conducted during agreed non-operational hours to prevent academic disruption.'
    ],
    paymentMilestones: [
      { milestone: '50% Initial Commitment Deposit upon Order Confirmation', percentage: 50, amountZar: 96600 },
      { milestone: '30% Delivery of Equipment to St. Benedict Campus', percentage: 30, amountZar: 57960 },
      { milestone: '20% Final Commissioning, Testing & Handover of CoC', percentage: 20, amountZar: 38640 }
    ]
  }
];

const INITIAL_DEMO_CONTRACTS: MaintenanceContract[] = [
  {
    id: 'MC-2026-012',
    clientName: 'Willem De Klerk',
    organisation: 'SuperCargo Logistics Hub',
    facilityLocation: 'Isando Industrial Node, Ekurhuleni',
    tier: 'Platinum',
    fanUnitsCovered: 14,
    inspectionFrequency: 'Quarterly (4x/year)',
    startDate: '2026-01-15',
    renewalDate: '2027-01-15',
    status: 'Active',
    emergencySlaHours: 4
  },
  {
    id: 'MC-2026-014',
    clientName: 'Fatima Omar',
    organisation: 'Roodekrans Christian Fellowship Auditorium',
    facilityLocation: 'Roodepoort, City of Johannesburg',
    tier: 'Silver',
    fanUnitsCovered: 4,
    inspectionFrequency: 'Bi-Annual (2x/year)',
    startDate: '2026-03-01',
    renewalDate: '2027-03-01',
    status: 'Active',
    emergencySlaHours: 24
  }
];

// Helper to seed localStorage safely in SSR + Client environments
function getLocalItem<T>(key: string, defaultVal: T): T {
  if (typeof window === 'undefined') {
    return defaultVal;
  }
  try {
    const val = window.localStorage.getItem(key);
    if (!val) {
      window.localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return JSON.parse(val);
  } catch {
    return defaultVal;
  }
}

function setLocalItem<T>(key: string, val: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error('Failed to store to localStorage', e);
  }
}

// =========================================================================
// UNIFIED DATA ACCESS API (Transparent Supabase & Local Fallback)
// =========================================================================

export async function fetchEnquiries(): Promise<QuotationEnquiry[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as QuotationEnquiry[];
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local database', e);
    }
  }
  return getLocalItem<QuotationEnquiry[]>(ENQUIRIES_KEY, INITIAL_DEMO_ENQUIRIES);
}

export async function submitEnquiry(enquiry: Omit<QuotationEnquiry, 'id' | 'createdAt' | 'status'>): Promise<QuotationEnquiry> {
  const timestamp = new Date().toISOString();
  // Generate unique South African commercial reference: VAX-2026-XXXX
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const id = `VAX-2026-${randomSuffix}`;

  const fullEnquiry: QuotationEnquiry = {
    ...enquiry,
    id,
    createdAt: timestamp,
    status: 'NEW',
  };

  // Try saving to Supabase if configured
  if (supabase) {
    try {
      const { error } = await supabase.from('enquiries').insert([
        {
          id: fullEnquiry.id,
          created_at: fullEnquiry.createdAt,
          name: fullEnquiry.name,
          organisation: fullEnquiry.organisation,
          email: fullEnquiry.email,
          telephone: fullEnquiry.telephone,
          job_title: fullEnquiry.jobTitle,
          province: fullEnquiry.province,
          city: fullEnquiry.city,
          institution_type: fullEnquiry.institutionType,
          building_type: fullEnquiry.buildingType,
          project_description: fullEnquiry.projectDescription,
          installation_location: fullEnquiry.installationLocation,
          selected_categories: fullEnquiry.selectedCategories,
          selected_products: fullEnquiry.selectedProducts,
          quantity_estimated: fullEnquiry.quantityEstimated,
          estimated_building_size_m2: fullEnquiry.estimatedBuildingSizeM2,
          ceiling_height_m: fullEnquiry.ceilingHeightM,
          existing_ventilation: fullEnquiry.existingVentilation,
          installation_type: fullEnquiry.installationType,
          required_date: fullEnquiry.requiredDate,
          site_assessment_required: fullEnquiry.siteAssessmentRequired,
          electrical_work_required: fullEnquiry.electricalWorkRequired,
          budget_range: fullEnquiry.budgetRange,
          popia_consent: fullEnquiry.popiaConsent,
          status: fullEnquiry.status,
        }
      ]);
      if (error) {
        console.warn('Supabase insert warning, saving locally:', error);
      }
    } catch (e) {
      console.warn('Supabase insertion error:', e);
    }
  }

  // Always update local cache for instant UI reactivity and offline robustness
  const existing = getLocalItem<QuotationEnquiry[]>(ENQUIRIES_KEY, INITIAL_DEMO_ENQUIRIES);
  const updated = [fullEnquiry, ...existing];
  setLocalItem(ENQUIRIES_KEY, updated);

  return fullEnquiry;
}

export async function updateEnquiryStatus(id: string, status: QuotationEnquiry['status'], notes?: string): Promise<void> {
  if (supabase) {
    try {
      await supabase
        .from('enquiries')
        .update({ status, admin_notes: notes })
        .eq('id', id);
    } catch (e) {
      console.warn('Supabase update failed:', e);
    }
  }
  const existing = getLocalItem<QuotationEnquiry[]>(ENQUIRIES_KEY, INITIAL_DEMO_ENQUIRIES);
  const updated = existing.map(item =>
    item.id === id ? { ...item, status, ...(notes ? { adminNotes: notes } : {}) } : item
  );
  setLocalItem(ENQUIRIES_KEY, updated);
}

export async function fetchQuotations(): Promise<Quotation[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('quotations').select('*');
      if (!error && data && data.length > 0) {
        return data as Quotation[];
      }
    } catch (e) {
      console.warn('Supabase quotations fetch failed:', e);
    }
  }
  return getLocalItem<Quotation[]>(QUOTATIONS_KEY, INITIAL_DEMO_QUOTATIONS);
}

export async function saveQuotation(quote: Quotation): Promise<void> {
  if (supabase) {
    try {
      await supabase.from('quotations').upsert([quote]);
    } catch (e) {
      console.warn('Supabase save quote error:', e);
    }
  }
  const existing = getLocalItem<Quotation[]>(QUOTATIONS_KEY, INITIAL_DEMO_QUOTATIONS);
  const idx = existing.findIndex(q => q.id === quote.id);
  const updated = idx >= 0 ? existing.map(q => q.id === quote.id ? quote : q) : [quote, ...existing];
  setLocalItem(QUOTATIONS_KEY, updated);
}

export async function fetchMaintenanceContracts(): Promise<MaintenanceContract[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('maintenance_contracts').select('*');
      if (!error && data && data.length > 0) {
        return data as MaintenanceContract[];
      }
    } catch (e) {
      console.warn('Supabase contracts fetch failed:', e);
    }
  }
  return getLocalItem<MaintenanceContract[]>(CONTRACTS_KEY, INITIAL_DEMO_CONTRACTS);
}

export async function fetchAllProducts(): Promise<Product[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (!error && data && data.length > 0) {
        return data as Product[];
      }
    } catch (e) {
      console.warn('Supabase products fetch failed:', e);
    }
  }
  return getLocalItem<Product[]>(PRODUCTS_KEY, PRODUCTS);
}

export async function saveProductToCatalog(product: Product): Promise<void> {
  const existing = getLocalItem<Product[]>(PRODUCTS_KEY, PRODUCTS);
  const idx = existing.findIndex(p => p.id === product.id);
  const updated = idx >= 0 ? existing.map(p => p.id === product.id ? product : p) : [product, ...existing];
  setLocalItem(PRODUCTS_KEY, updated);

  if (supabase) {
    try {
      await supabase.from('products').upsert([product]);
    } catch (e) {
      console.warn('Supabase save product error:', e);
    }
  }
}
