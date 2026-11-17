import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export interface CanonicalCompanyDetails {
  brandName: string;
  legalEntity: string;
  registrationNumber: string;
  vatNumber: string;
  tagline: string;
  coreProposition: string;
  domain: string;
  address: {
    street: string;
    suburb: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    full: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    mobileDisplay: string;
    mobileTel: string;
    officeDisplay: string;
    officeTel: string;
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    technicalEmail: string;
  };
  operatingHours: string;
  targetAudienceAndLocations: string;
  accreditations: string[];
}
