import { Industry } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'ind-residential',
    name: 'Residential Homes',
    slug: 'residential-homes',
    headline: 'Quiet, Elegant Cooling for Living Spaces & Bedrooms',
    shortDesc: 'Handcrafted solid timber and architectural ceiling fans designed for silent bedroom cooling and modern living spaces.',
    challenges: [
      'Hot summer nights making sleep uncomfortable and driving up home air-conditioning electricity bills',
      'Cheap ceiling fans that wobble, click, and create distracting mechanical motor hum',
      'Covered outdoor patios and braai areas exposed to extreme heat and flying insects'
    ],
    solutions: [
      'Ultra-efficient DC motor timber fans running under 29 dB for whisper-quiet, undisturbed sleep',
      'All-weather wet-rated patio fans that keep outdoor entertainment areas cool and deter insects',
      'Integrated warm LED luminaire fans replacing central lights with clean, contemporary styling'
    ],
    recommendedCategories: [
      'Artesian 1320mm Solid Walnut Ceiling Fan',
      'Lumina 1370mm Designer Fan with Dimmable LED',
      'Monsoon 1420mm All-Weather Patio Fan'
    ],
    standardsHighlight: 'SANS 10142-1 certified electrical installation with neat concealed wiring and zero ceiling damage.',
    image: '/images/hero-living-fan.webp',
    iconName: 'Building2'
  },
  {
    id: 'ind-education',
    name: 'Schools & Universities',
    slug: 'schools-and-universities',
    headline: 'Whisper-Quiet Air Movement for Examination Halls & Classrooms',
    shortDesc: 'Keeping learners cool, focused, and alert during hot Gauteng terms without noisy distractions.',
    challenges: [
      'Stifling heat build-up during summer terms causing learner fatigue and loss of focus in exam venues',
      'Noisy fans that interfere with teacher instruction, student concentration, and hall acoustics',
      'Vandalism risks requiring tamper-proof wall speed controls and safe ceiling clearances'
    ],
    solutions: [
      'High-volume 4.9m HVLS ceiling fans that circulate gentle air across entire assembly halls under 36 dB',
      'Durable aluminium commercial ceiling fans with lockable wall switches for classrooms',
      'Safe high-elevation wall fans for school laboratories and practical workshops'
    ],
    recommendedCategories: [
      'AeroVortex 4.9m Commercial HVLS Fan',
      'AeroGlide 1400mm Commercial Ceiling Fan',
      'StormBreeze 750mm Wall-Mounted Fan'
    ],
    standardsHighlight: 'Meets Department of Basic Education (DBE) infrastructure norms and SANS 10400-O standards.',
    image: '/images/ind-education.webp',
    iconName: 'GraduationCap'
  },
  {
    id: 'ind-religious',
    name: 'Churches & Auditoriums',
    slug: 'churches-and-auditoriums',
    headline: 'Silent Cooling for Sanctuaries & Mega-Auditoriums',
    shortDesc: 'Eliminating stuffy worship halls with near-silent HVLS fans that respect acoustic clarity and sermon audio.',
    challenges: [
      'High pitched ceilings trapping hot air at the roof while congregations suffer in packed seating',
      'Strict acoustic demands: zero motor hum or buzz that could interfere with sound systems or microphones',
      'Architectural sensitivity: equipment must blend naturally into timber or steel roof trusses'
    ],
    solutions: [
      'Direct-drive PMSM HVLS ceiling fans providing massive air circulation without any audible motor noise',
      'Reverse winter mode pushing warm trapped ceiling air gently down, cutting winter heating costs',
      'Architectural finishes matching church interior decor and truss colours'
    ],
    recommendedCategories: [
      'AeroVortex 4.9m / 7.3m Commercial HVLS Fans',
      'AeroGlide 1400mm Commercial Ceiling Fans',
      'StormBreeze 750mm Oscillating Wall Fans'
    ],
    standardsHighlight: 'Acoustically verified under 36 dB(A) to ensure zero interference with church audio recording.',
    image: '/images/ind-religious.webp',
    iconName: 'Church'
  },
  {
    id: 'ind-commercial',
    name: 'Commercial & Retail',
    slug: 'commercial-and-retail',
    headline: 'Energy-Smart Cooling for Showrooms, Offices & Retail',
    shortDesc: 'Lowering municipal electricity bills while keeping customers, diners, and office staff pleasantly cool.',
    challenges: [
      'High commercial electricity tariffs in Gauteng making 100% air conditioning financially punitive',
      'Large glass shopfronts and atrium skylights generating severe radiant heat loads',
      'Customer discomfort in warm shopping areas leading to shorter visits and reduced footfall'
    ],
    solutions: [
      'Cooling fans operating alongside air conditioning to lower perceived temperature by up to 5°C',
      'Allows HVAC thermostats to be set higher, reducing monthly energy bills by up to 30%',
      'Sleek modern designs that enhance contemporary commercial and retail architecture'
    ],
    recommendedCategories: [
      'AeroGlide 1400mm Commercial Ceiling Fan',
      'AeroVortex 4.9m Commercial HVLS Fan',
      'Lumina 1370mm Designer Ceiling Fan'
    ],
    standardsHighlight: 'Complies with SANS 10400-XA Energy Usage in Buildings and SANS 10142-1 Wiring Code.',
    image: '/images/market-commercial.webp',
    iconName: 'Building2'
  },
  {
    id: 'ind-industrial',
    name: 'Warehouses & Industry',
    slug: 'warehouses-and-industry',
    headline: 'High-Volume Cooling for Factories, Workshops & Logistics',
    shortDesc: 'Protecting workforce safety, comfort, and productivity in high-heat industrial and warehouse facilities.',
    challenges: [
      'Corrugated iron and steel roofs radiating intense heat down onto factory and warehouse floors',
      'Fatigue and reduced worker safety when warehouse temperatures exceed 32°C during summer',
      'Severe heat stratification in tall 8m–14m high-bay distribution centres'
    ],
    solutions: [
      'Industrial 7.3m HVLS ceiling fans moving up to 888,000 m³/h for deep evaporative cooling',
      'Heavy-duty 750mm wall and pedestal fans for focused cooling at active work cells and packing lines',
      'Industrial evaporative air coolers delivering fresh chilled air at 80% lower electricity cost'
    ],
    recommendedCategories: [
      'AeroVortex 7.3m Industrial HVLS Fan',
      'StormBreeze 750mm Wall & Pedestal Fans',
      'WhirlBarrel 900mm Floor Drum Fan',
      'AquaBreeze 18,000 Evaporative Air Cooler'
    ],
    standardsHighlight: 'Fully compliant with OHSAct Environmental Regulations for Workplaces (Thermal Conditions).',
    image: '/images/market-industrial.webp',
    iconName: 'Factory'
  },
  {
    id: 'ind-hospitality',
    name: 'Hospitality & Venues',
    slug: 'hospitality-and-venues',
    headline: 'Comfortable Outdoor Patios, Dining Decks & Lodges',
    shortDesc: 'Delighting diners and lodge guests with gentle breezes that deter insects and keep outdoor spaces cool.',
    challenges: [
      'Covered dining verandas and outdoor braai decks becoming sweltering during summer lunch hours',
      'Flies, mosquitoes, and insects bothering patrons on open-air dining decks',
      'Need for premium aesthetic fans that elevate guest reviews and photo backdrops'
    ],
    solutions: [
      'IP55 wet-rated outdoor ceiling fans that generate continuous downward air movement to deter insects',
      'Hand-carved timber fans for luxury guest suites, safari lodges, and boutique reception areas',
      'High-capacity evaporative coolers creating a refreshing microclimate in tented venues'
    ],
    recommendedCategories: [
      'Monsoon 1420mm All-Weather Patio Fan',
      'Artesian 1320mm Solid Walnut Ceiling Fan',
      'AquaBreeze 18,000 Evaporative Air Cooler'
    ],
    standardsHighlight: 'Wet-rated IP55 certification ensuring safe operation in high-humidity and outdoor rain-sheltered areas.',
    image: '/images/market-hospitality.webp',
    iconName: 'UtensilsCrossed'
  }
];
