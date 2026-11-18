import { CanonicalCompanyDetails } from './types';

/**
 * SINGLE SOURCE OF TRUTH — VENTAXIS SOLUTIONS CANONICAL BUSINESS IDENTITY
 * Reference COMPANY_DETAILS everywhere across components, pages, forms, metadata, and JSON-LD.
 */
export const COMPANY_DETAILS: CanonicalCompanyDetails = {
  brandName: 'VENTAXIS SOLUTIONS',
  legalEntity: 'VentAxis Solutions (Pty) Ltd',
  registrationNumber: '2024 / 489210 / 07',
  vatNumber: '4920281902',
  tagline: 'Engineering Better Airflow.',
  coreProposition:
    'Turnkey commercial and industrial fan supply, structural rigging, SANS 10142-1 electrical integration, and preventative maintenance across Gauteng and South Africa.',
  domain: 'https://ventaxis.co.za',
  address: {
    street: '77 Wilmington Crescent',
    suburb: 'Lyndhurst',
    city: 'Johannesburg',
    province: 'Gauteng',
    postalCode: '2192',
    country: 'South Africa',
    full: '77 Wilmington Crescent, Lyndhurst, Johannesburg, Gauteng, 2192, South Africa',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=77+Wilmington+Crescent,+Lyndhurst,+Johannesburg,+2192,+South+Africa',
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=77+Wilmington+Crescent,+Lyndhurst,+Johannesburg,+South+Africa&output=embed',
    coordinates: {
      lat: -26.1268,
      lng: 28.1014,
    },
  },
  contact: {
    mobileDisplay: '083 432 8294',
    mobileTel: '+27834328294',
    officeDisplay: '011 346 5018',
    officeTel: '+27113465018',
    whatsappNumber: '27834328294',
    whatsappUrl: 'https://wa.me/27834328294',
    email: 'info@afrismmehub.co.za',
    technicalEmail: 'info@afrismmehub.co.za',
  },
  operatingHours:
    'Monday – Friday: 07:30 – 17:00 (SAST) | 24/7 Emergency Breakdown Response for Contracted SLA Facilities',
  targetAudienceAndLocations:
    'Commercial enterprises, industrial manufacturing & logistics facilities, educational & healthcare institutions, hospitality groups, and religious auditoriums across Johannesburg, Ekurhuleni, Pretoria (Tshwane), Midrand, Vaal Triangle, and South Africa.',
  accreditations: [
    'SANS 10142-1 Electrical CoC Certified Integration',
    'OHSAct 85 of 1993 Health & Safety Aligned',
    'Working at Heights (SAQA Unit Standard 229998) Certified Riggers',
    'ISO 5801 & AMCA 230-15 Fan Performance Standards Aligned',
  ],
};
