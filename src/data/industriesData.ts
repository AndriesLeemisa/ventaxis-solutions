import { Industry } from '../types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'ind-education',
    name: 'Education',
    slug: 'education',
    headline: 'High-Volume, Low-Acoustic Air Circulation for Schools & Universities',
    shortDesc: 'Enhancing student focus and thermal comfort in classrooms, examination halls, lecture theatres, and sports complexes.',
    challenges: [
      'Stifling heat build-up during Gauteng summer months leading to reduced cognitive focus in examination halls',
      'High background acoustic noise from cheap conventional fans making lectures and teacher instruction difficult to hear',
      'High student occupancy requiring continuous fresh air exchange to mitigate airborne pathogens and drowsiness',
      'Vandalism and safety risks: need for tamper-proof controls and safe blade clearances'
    ],
    solutions: [
      'Large-diameter HVLS fans (4.3m to 6.1m) operating under 36 dB(A) for expansive school assembly and sports halls',
      'Heavy-duty commercial steel ceiling fans with tamper-proof keyed wall controls for standard classrooms',
      'Fresh air inline mechanical ventilation systems for windowless university lecture halls and libraries',
      'High-velocity oscillating wall-mounted fans installed at safe >2.4m elevations for school laboratories'
    ],
    recommendedCategories: [
      'AeroVortex 4.9m Commercial HVLS Fan',
      'AeroGlide 1400mm Commercial Ceiling Fan',
      'DuctMaster 315mm Inline Mixed-Flow Fan'
    ],
    standardsHighlight: 'Meets Department of Basic Education (DBE) Norms & Standards for Public School Infrastructure and SANS 10400-O.',
    image: '/images/ind-education.png',
    iconName: 'GraduationCap'
  },
  {
    id: 'ind-healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    headline: 'Hygienic, Controlled Airflow for Hospitals, Clinics & Care Facilities',
    shortDesc: 'Protecting vulnerable patients and healthcare professionals with strict directional airflow and continuous ventilation.',
    challenges: [
      'Stringent infection prevention protocols requiring non-turbulent directional airflow away from sterile zones',
      'High patient density in outpatient waiting areas requiring elevated air change rates to dilute airborne viral particles',
      'Need for continuous 24/7 reliability without motor overheating or vibration noise in recovery wards',
      'Surfaces must withstand aggressive clinical disinfection and chemical cleaning agents'
    ],
    solutions: [
      'Continuous-duty positive and negative pressure ventilation fans for isolation wards and TB screening rooms',
      'Ultra-quiet brushless DC ceiling and inline fans engineered for quiet convalescent environments (<35 dB)',
      'Sealed chemical-resistant motor housings (IP65) with anti-microbial smooth blade coatings',
      'High-capacity extractors with differential pressure monitoring for clinic sluice rooms and dispensaries'
    ],
    recommendedCategories: [
      'DuctMaster Inline Extraction Fans',
      'AeroGlide Commercial Ceiling Fans (Antibacterial coating)',
      'ChemVent Polypropylene Air Extraction Blowers'
    ],
    standardsHighlight: 'Aligned with National Department of Health Guidelines for Environmental Infection Control in Healthcare Facilities.',
    image: '/images/ind-healthcare.png',
    iconName: 'HeartPulse'
  },
  {
    id: 'ind-religious',
    name: 'Religious Institutions',
    slug: 'religious-institutions',
    headline: 'Serene, Whisper-Quiet Air Movement for Churches & Auditoriums',
    shortDesc: 'Eliminating stuffy, hot worship halls without intruding on sermon audio, musical acoustics, or video production.',
    challenges: [
      'High-volume cavernous sanctuaries with tall pitched ceilings (6m to 15m) trapping hot air at the apex',
      'Large congregations generating intense body heat and humidity during packed Sunday and weekend services',
      'Strict acoustic requirements: zero hum, motor buzz, or resonant vibration that could interfere with microphones or PA systems',
      'Architectural sensitivity: equipment must blend into high open timber or steel trusses without visual distraction'
    ],
    solutions: [
      'Direct-drive PMSM HVLS ceiling fans delivering massive air volume at near-silent operation (<38 dB)',
      'Reversible winter destratification mode: gently pushes warm trapped ceiling air down to floor level, saving winter heating fuel',
      'Architectural custom finishes: custom powder-coated blades and housings to match interior church aesthetic',
      'Zone-controlled multi-fan digital touch panels easily managed by church technical and volunteer teams'
    ],
    recommendedCategories: [
      'AeroVortex 6.1m / 4.9m Architectural HVLS Fans',
      'StormBreeze High-Velocity Wall Mounted Fans (Auxiliary halls)',
      'AeroTop Low-Profile Roof Extractors'
    ],
    standardsHighlight: 'Acoustically tested and verified under 38 dB(A) to satisfy sound engineering benchmarks for live recording spaces.',
    image: '/images/ind-religious.png',
    iconName: 'Church'
  },
  {
    id: 'ind-commercial',
    name: 'Commercial',
    slug: 'commercial',
    headline: 'Energy-Smart Thermal Comfort for Shopping Centres & Offices',
    shortDesc: 'Lowering HVAC electricity bills while keeping shoppers, diners, and office occupants comfortably cool.',
    challenges: [
      'Escalating municipal electricity tariffs in Johannesburg and Pretoria making air conditioning financially punishing',
      'Massive glass shopfronts and atrium skylights generating severe solar radiant heat loads',
      'Customer discomfort in multi-level retail malls causing reduced dwell time and lower footfall retail revenue',
      'Need for integration into complex central Building Management Systems (BMS)'
    ],
    solutions: [
      'HVLS and high-volume commercial ceiling fans working in hybrid synergy with existing air conditioning systems',
      'Air velocity cooling: 1 m/s to 1.5 m/s breeze lowers perceived temperature by 4°C to 6°C, allowing HVAC setpoints to be raised',
      'BACnet and Modbus RS485 connectivity for automated scheduling and central facility manager control',
      'Aesthetically elegant units that complement modern corporate and retail interior architecture'
    ],
    recommendedCategories: [
      'AeroVortex Commercial HVLS Series',
      'DuctMaster Inline HVAC Boosters',
      'AeroGlide Premium Commercial Ceiling Fans'
    ],
    standardsHighlight: 'Contributes toward Green Star SA energy rating credits and SANS 10400-XA Energy Usage in Buildings.',
    image: '/images/market-commercial.jpg',
    iconName: 'Building2'
  },
  {
    id: 'ind-industrial',
    name: 'Industrial',
    slug: 'industrial',
    headline: 'Heavy-Duty Heat, Fume & Dust Control for Factories & Warehouses',
    shortDesc: 'Protecting worker safety and machinery reliability in high-heat manufacturing and logistics environments.',
    challenges: [
      'Extreme radiant heat from furnaces, boilers, injection moulders, and sheet metal roofing exceeding 38°C on factory floors',
      'Airborne dust, metal grinding particulates, and solvent fumes creating health and safety liability under OHSAct',
      'Severe thermal stratification in 12m+ high-bay distribution warehouses degrading stored perishable goods',
      'Harsh operating conditions: continuous vibrations, abrasive airborne particles, and fluctuating voltage supply'
    ],
    solutions: [
      'Industrial-grade 7.3m HVLS fans moving over 880,000 m³/h to homogenize warehouse temperatures and cool staff',
      'Heavy-gauge axial and centrifugal through-wall exhaust fans for continuous factory envelope air renewal',
      'Specialist cyclonic dust extraction and ATEX/flameproof fume exhaust blowers at active work cells',
      'Industrial evaporative cooling systems delivering 100% fresh cool air at a fraction of traditional chiller costs'
    ],
    recommendedCategories: [
      'AeroVortex 7.3m Industrial HVLS Fans',
      'CylindroAxial 630mm Wall Fans',
      'AquaBreeze 18,000 m³/h Evaporative Coolers',
      'AeroCyclone Dust Extraction Systems'
    ],
    standardsHighlight: 'Strict compliance with OHSAct Environmental Regulations for Workplaces (Thermal Conditions & Ventilation).',
    image: '/images/market-industrial.jpg',
    iconName: 'Factory'
  },
  {
    id: 'ind-hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    headline: 'Outdoor & Indoor Climate Control for Hotels, Restaurants & Venues',
    shortDesc: 'Creating unforgettable guest experiences on dining patios, event venues, reception lounges, and conference centres.',
    challenges: [
      'Outdoor dining decks and covered verandas becoming uncomfortably sweltering during lunchtime and afternoon sun',
      'Flies, mosquitoes, and insects bothering dining guests on open-air patios and garden marquees',
      'Commercial kitchen heat and grease migration into customer dining rooms and reception lobbies',
      'Need for ultra-stylish designer fans that enhance five-star hospitality ambience and photographs'
    ],
    solutions: [
      'High-velocity directional air curtains and wall-mounted oscillating fans that deter flying insects while cooling patrons',
      'IP55 weather-rated outdoor ceiling fans with rust-proof aluminium components and tropicalized motor windings',
      'Commercial kitchen canopy exhaust centrifugal blowers with certified grease-rated air handling',
      'Evaporative cooling systems creating comfortable microclimates for outdoor beer gardens and marquee venues'
    ],
    recommendedCategories: [
      'AeroVortex 3.6m Hospitality HVLS Fan',
      'StormBreeze IP55 Outdoor Wall Fans',
      'AquaBreeze Evaporative Cooling Units',
      'CentriForce Kitchen Extraction Fans'
    ],
    standardsHighlight: 'Complies with Municipal Food Premises Hygiene By-Laws and SANS 10400-O Commercial Kitchen Standards.',
    image: '/images/market-hospitality.jpg',
    iconName: 'UtensilsCrossed'
  }
];
