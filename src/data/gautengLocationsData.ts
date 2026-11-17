import { GautengRegion, GautengSubArea } from '../types';

export const GAUTENG_REGIONS: Record<GautengRegion, { title: string; desc: string; mainDepot: string; averageResponseTime: string }> = {
  JOHANNESBURG: {
    title: 'City of Johannesburg Metropolitan',
    desc: 'Rapid engineering deployment covering northern commercial districts, western light industrial nodes, southern logistics corridors, and CBD high-density institutions.',
    mainDepot: 'Kramerville / Sandton Logistics Corridor',
    averageResponseTime: 'Same-Day Assessment / 2–4 Hr Emergency SLA'
  },
  EKURHULENI: {
    title: 'City of Ekurhuleni (East Rand)',
    desc: 'The manufacturing and freight capital of South Africa. Complete coverage of manufacturing corridors, airport cargo precincts, and heavy industrial nodes.',
    mainDepot: 'Aerotropolis Industrial Park, Kempton Park / Boksburg',
    averageResponseTime: 'Under 2 Hours (Primary Engineering Headquarters)'
  },
  PRETORIA: {
    title: 'City of Tshwane (Pretoria & Centurion)',
    desc: 'Dedicated service teams supporting diplomatic, governmental, research, academic, and automotive assembly hubs across greater Pretoria and Centurion.',
    mainDepot: 'Route 21 Corporate Park / Centurion Node',
    averageResponseTime: 'Same-Day Assessment / Under 3 Hours'
  },
  'OTHER AREAS': {
    title: 'Greater Gauteng Nodes & Vaal Triangle',
    desc: 'Bridging the central Gauteng commercial corridor and southern steel, petrochemical, and heavy fabrication regions.',
    mainDepot: 'Midrand Industrial Corridor / Vaal Engineering Hub',
    averageResponseTime: 'Within 24 Hours / 4 Hr Contract SLA'
  }
};

export const GAUTENG_LOCATIONS: GautengSubArea[] = [
  // =====================
  // JOHANNESBURG
  // =====================
  {
    name: 'Sandton & Bryanston',
    region: 'JOHANNESBURG',
    keyHubs: ['Sandton CBD', 'Bryanston Commercial Node', 'Rivonia', 'Kramerville Design District'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['Corporate Headquarters', 'High-End Retail Atriums', 'Fitness Centres', 'Private Colleges'],
    activeSupport: true
  },
  {
    name: 'Randburg & Northriding',
    region: 'JOHANNESBURG',
    keyHubs: ['Strijdom Park Industrial', 'Northriding Kya Sand', 'Ferndale', 'Cresta Commercial Area'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['Commercial Fitouts', 'Automotive Showrooms', 'Film Studios', 'Light Fabrication Workshops'],
    activeSupport: true
  },
  {
    name: 'Roodepoort & West Rand',
    region: 'JOHANNESBURG',
    keyHubs: ['Laser Park', 'Wilropark', 'Florida Industrial', 'Constantia Kloof Corporate'],
    dispatchTime: '2 - 4 Hours',
    typicalFacilities: ['Distribution Warehouses', 'Engineering Workshops', 'Schools & Colleges', 'Churches'],
    activeSupport: true
  },
  {
    name: 'Soweto & Diepkloof',
    region: 'JOHANNESBURG',
    keyHubs: ['Baragwanath Medical Precinct', 'Diepkloof Commercial', 'Jabulani Cultural Hub', 'Orlando West'],
    dispatchTime: '2 - 4 Hours',
    typicalFacilities: ['Public Hospitals & Clinics', 'Secondary Schools', 'Community Worship Halls', 'Retail Centres'],
    activeSupport: true
  },
  {
    name: 'Johannesburg CBD & Braamfontein',
    region: 'JOHANNESBURG',
    keyHubs: ['Braamfontein Academic Precinct', 'Marshalltown Financial', 'Maboneng', 'City Deep Logistics Terminal'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['University Lecture Theatres', 'Fresh Produce Freight Logistics', 'Government Buildings', 'Basement Parking'],
    activeSupport: true
  },
  {
    name: 'Johannesburg South & Crown Mines',
    region: 'JOHANNESBURG',
    keyHubs: ['Crown Mines', 'Alrode South Access', 'Ormonde', 'Aeroton Industrial', 'Booysens'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['Food Manufacturing', 'Heavy Logistics Depots', 'Textile Plants', 'Large Wholesalers'],
    activeSupport: true
  },

  // =====================
  // EKURHULENI
  // =====================
  {
    name: 'Kempton Park & OR Tambo Cargo',
    region: 'EKURHULENI',
    keyHubs: ['OR Tambo Freight Zone', 'Spartan Industrial', 'Pomona Logistics Corridor', 'Plumbago Business Park'],
    dispatchTime: '1 - 2 Hours (Local Hub)',
    typicalFacilities: ['Airfreight Distribution Depots', 'Cold Chain Warehouses', 'Pharmaceutical Logistics', 'Precision Assembly'],
    activeSupport: true
  },
  {
    name: 'Boksburg & Jet Park',
    region: 'EKURHULENI',
    keyHubs: ['Jet Park Industrial', 'Dunswart Heavy Engineering', 'Boksburg East', 'Atlas Road Logistics Corridor'],
    dispatchTime: '1 - 2 Hours (Local Hub)',
    typicalFacilities: ['Mining Equipment Rebuilders', 'Commercial Warehouses', 'Retail Mega-Centres', 'Steel Processing'],
    activeSupport: true
  },
  {
    name: 'Benoni & Apex',
    region: 'EKURHULENI',
    keyHubs: ['Apex Industrial', 'Benoni South', 'Northmead Commercial', 'Rynfield'],
    dispatchTime: '1 - 2 Hours',
    typicalFacilities: ['Foundries & Casting Works', 'Schools & Sports Halls', 'Commercial Showrooms', 'Packaging Plants'],
    activeSupport: true
  },
  {
    name: 'Germiston & Wadeville',
    region: 'EKURHULENI',
    keyHubs: ['Wadeville Industrial Area', 'Knights', 'Driehoek', 'Industria West'],
    dispatchTime: '1 - 2 Hours',
    typicalFacilities: ['Heavy Steel Fabrication', 'Chemical Manufacturing', 'Railway Engineering', 'Bulk Storage Facilities'],
    activeSupport: true
  },
  {
    name: 'Alberton & Alrode',
    region: 'EKURHULENI',
    keyHubs: ['Alrode Industrial Complex', 'Alberton North', 'New Redruth', 'Meyersdal'],
    dispatchTime: '2 Hours',
    typicalFacilities: ['Automotive Component Plants', 'Plastics Injection Moulding', 'Auditoriums', 'Wholesale Facilities'],
    activeSupport: true
  },
  {
    name: 'Edenvale & Sebenza',
    region: 'EKURHULENI',
    keyHubs: ['Sebenza Industrial', 'Meadowdale Freight Hub', 'Greenstone Commercial', 'Edenvale Central'],
    dispatchTime: '1 - 2 Hours',
    typicalFacilities: ['Electronic Assembly', 'Commercial Retail Parks', 'Gymnasiums', 'Distribution Depots'],
    activeSupport: true
  },
  {
    name: 'Springs & Brakpan',
    region: 'EKURHULENI',
    keyHubs: ['Nuffield Industrial', 'Vulcania', 'New Era Heavy Industrial', 'Selection Park'],
    dispatchTime: '2 Hours',
    typicalFacilities: ['Glass & Sheet Metal Production', 'Food & Cereal Milling', 'Workshops', 'Technical High Schools'],
    activeSupport: true
  },

  // =====================
  // PRETORIA (TSHWANE)
  // =====================
  {
    name: 'Pretoria CBD & Hatfield',
    region: 'PRETORIA',
    keyHubs: ['Pretoria Central Government Precinct', 'Hatfield University Hub', 'Arcadia', 'Sunnyside'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['University Campuses', 'Government Buildings', 'Examination Halls', 'Public Health Facilities'],
    activeSupport: true
  },
  {
    name: 'Pretoria East & Menlyn',
    region: 'PRETORIA',
    keyHubs: ['Menlyn Maine Commercial', 'Silverton Industrial (Automotive)', 'Waltloo', 'Garsfontein'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['Automotive Assembly & Stamping', 'Mega-Retail Centres', 'Mega-Churches & Auditoriums', 'Corporate Parks'],
    activeSupport: true
  },
  {
    name: 'Pretoria North & Rosslyn',
    region: 'PRETORIA',
    keyHubs: ['Rosslyn Automotive Cluster', 'Pretoria North Light Industrial', 'Wonderboom Industrial'],
    dispatchTime: '2 - 3 Hours',
    typicalFacilities: ['OEM Automotive Manufacturing', 'Foundry Operations', 'Heavy Machinery Workshops', 'Agricultural Packhouses'],
    activeSupport: true
  },
  {
    name: 'Centurion & Highveld',
    region: 'PRETORIA',
    keyHubs: ['Highveld Techno Park', 'Route 21 Corporate Park', 'Hennopspark Industrial', 'Centurion Central'],
    dispatchTime: '2 Hours',
    typicalFacilities: ['Data Centres & Telecom Hubs', 'Aerospace Laboratories', 'Distribution Warehouses', 'Private Colleges'],
    activeSupport: true
  },

  // =====================
  // OTHER AREAS
  // =====================
  {
    name: 'Midrand & Waterfall City',
    region: 'OTHER AREAS',
    keyHubs: ['Waterfall Logistics Hub', 'Halfway House Industrial', 'Grand Central', 'Corporate Park North & South'],
    dispatchTime: '1 - 2 Hours',
    typicalFacilities: ['High-Bay FMCG Distribution', 'Data Warehouses', 'Pharmaceutical Clean Rooms', 'Shopping Atriums'],
    activeSupport: true
  },
  {
    name: 'Vereeniging & Vanderbijlpark (Vaal)',
    region: 'OTHER AREAS',
    keyHubs: ['Duncanville Industrial', 'Vanderbijlpark Heavy Industrial Complex', 'Sebokeng', 'Meyerton Engineering Hub'],
    dispatchTime: '3 - 4 Hours',
    typicalFacilities: ['Steel Mills & Rolling Plants', 'Petrochemical Processing', 'Heavy Equipment Workshops', 'Technical Training Colleges'],
    activeSupport: true
  }
];

export const SEO_KEYWORD_MATRIX = [
  { keyword: 'Fan installation Gauteng', intent: 'Commercial & Industrial Turnkey Installation across all Gauteng metros' },
  { keyword: 'Industrial fans Johannesburg', intent: 'Heavy-duty axial, centrifugal, and wall-mounted industrial air movers' },
  { keyword: 'Commercial fan installation Pretoria', intent: 'Acoustic-optimised ventilation for institutions, universities, and commercial sites' },
  { keyword: 'Warehouse ventilation Gauteng', intent: 'High-volume low-speed (HVLS) and roof cowl air renewal for logistics' },
  { keyword: 'School ceiling fan installation', intent: 'Low-noise SANS compliant institutional fans for classrooms & examination halls' },
  { keyword: 'HVLS fan installation Johannesburg', intent: 'Certified rigging and installation of 3.6m to 7.3m large diameter ceiling fans' },
  { keyword: 'Industrial extractor fans Gauteng', intent: 'Smoke spill, dust collection, and chemical fume extraction systems' },
];

export const PROVINCIAL_EXPANSION_PLANS = [
  { province: 'Gauteng', status: 'Active Direct Engineering Operations', headquarters: 'Kempton Park / Boksburg, Gauteng' },
  { province: 'Western Cape', status: 'Expansion Phase 2 Planned (Cape Town / Winelands logistics hubs)', headquarters: 'Regional Partner Network Planned' },
  { province: 'KwaZulu-Natal', status: 'Expansion Phase 3 Planned (Durban Port / Pinetown manufacturing)', headquarters: 'Regional Partner Network Planned' },
];
