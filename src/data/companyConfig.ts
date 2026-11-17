import { CompanyConfig } from '../types';

export const DEFAULT_COMPANY_CONFIG: CompanyConfig = {
  brandName: 'VENTAXIS SOLUTIONS',
  legalCompanyName: 'VentAxis Solutions (Pty) Ltd',
  registrationNumber: 'Reg: 2026 / 148920 / 07 (Pending Final Gazette)',
  vatNumber: 'VAT No: 4920281902 (Registered)',
  physicalAddress: 'Building 4, Aerotropolis Industrial Park, Atlas Road, Kempton Park / Boksburg Border, Gauteng, 1619',
  primaryMarket: 'Gauteng, South Africa (Johannesburg, Ekurhuleni, Pretoria & Surrounds)',
  telephone: '+27 (0)11 593 4800',
  emergencyHotline: '+27 (0)82 491 8830',
  email: 'info@ventaxis.co.za',
  technicalEmail: 'engineering@ventaxis.co.za',
  operatingHours: 'Mon - Fri: 07:30 - 17:00 | 24/7 Breakdown Response for Contracted Facilities',
  accreditations: [
    'SANS 10142-1 Electrical CoC Certified Integration',
    'OHSAct 85 of 1993 Health & Safety Aligned',
    'Working at Heights (SAQA Unit Standard 229998) Certified Riggers',
    'ISO 5801 Industrial Fan Testing Performance Standards Aligned',
  ],
};

const STORAGE_KEY = 'ventaxis_company_config';

export function getCompanyConfig(): CompanyConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_COMPANY_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn('Unable to load saved company config, using default', e);
  }
  return DEFAULT_COMPANY_CONFIG;
}

export function saveCompanyConfig(config: CompanyConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save company config', e);
  }
}
