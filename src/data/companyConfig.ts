import { CompanyConfig } from '../types';
import { COMPANY_DETAILS } from '../lib/constants';

export const DEFAULT_COMPANY_CONFIG: CompanyConfig = {
  brandName: COMPANY_DETAILS.brandName,
  legalCompanyName: COMPANY_DETAILS.legalEntity,
  registrationNumber: COMPANY_DETAILS.registrationNumber,
  vatNumber: COMPANY_DETAILS.vatNumber,
  physicalAddress: COMPANY_DETAILS.address.full,
  primaryMarket: 'Gauteng, South Africa (Johannesburg, Ekurhuleni, Pretoria, Midrand & Vaal)',
  telephone: COMPANY_DETAILS.contact.officeDisplay,
  emergencyHotline: COMPANY_DETAILS.contact.mobileDisplay,
  email: COMPANY_DETAILS.contact.email,
  technicalEmail: COMPANY_DETAILS.contact.technicalEmail,
  operatingHours: COMPANY_DETAILS.operatingHours,
  accreditations: COMPANY_DETAILS.accreditations,
};

const STORAGE_KEY = 'ventaxis_company_config_v2';

export function getCompanyConfig(): CompanyConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_COMPANY_CONFIG;
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_COMPANY_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn('Unable to load saved company config, using canonical default', e);
  }
  return DEFAULT_COMPANY_CONFIG;
}

export function saveCompanyConfig(config: CompanyConfig): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save company config', e);
  }
}
