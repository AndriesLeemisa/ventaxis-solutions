import { Product, ProductCategory, ProductSubCategory } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // CEILING & HVLS FANS
  // ==========================================
  {
    id: 'prod-hvls-7300',
    name: 'VentAxis AeroVortex 7.3m Industrial HVLS Fan',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Industrial HVLS Fans',
    tagline: 'Massive, gentle airflow for warehouses, factories, and large open buildings.',
    description: 'Designed for large industrial facilities, the 7.3m AeroVortex moves massive amounts of air slowly and quietly. It creates a cooling breeze across areas up to 1,800 m², making the room feel up to 6°C cooler while running on an ultra-efficient direct-drive motor.',
    images: [
      '/images/market-industrial.jpg',
      '/images/product-commercial-ceiling.jpg',
      '/images/after-ventaxis-airflow.png'
    ],
    manufacturer: 'VentAxis Engineering Systems',
    model: 'VAX-HVLS-7300-PMSM',
    airflowCapacity: '14,800 m³/min (888,000 m³/h)',
    dimensions: {
      diameterOrWidth: '7,300 mm (24 ft)',
      depthOrHeight: '1,120 mm drop rod standard',
      weightKg: 118,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.5,
      currentAmps: 3.8,
    },
    ipRating: 'IP55 Motor / IP65 Inverter',
    soundLevelDb: '< 38 dB(A) whisper-quiet',
    installationConsiderations: [
      'Clamps securely to I-beams or structural steel purlins.',
      'Includes dual secondary safety cables and 4-point guy-wire stabilizers.',
      'Recommended for ceiling heights from 5.5m to 14m.'
    ],
    applicableEnvironments: [
      'Warehouses & Logistics Hubs',
      'Manufacturing & Assembly Plants',
      'Aircraft Hangars & Transport Depots',
      'Agricultural Packing Sheds'
    ],
    compliance: [
      'SANS 10142-1 Electrical Code of Practice',
      'AMCA 230-15 Performance Tested',
      'OHSAct Machine Safety Compliant'
    ],
    features: [
      'Direct-drive PMSM motor — no gearbox oil changes or leaks',
      'Reverse winter mode to push trapped ceiling heat back down',
      'Digital wall control panel included',
      'Automated fire alarm interlock connection'
    ],
    status: 'Available',
  },
  {
    id: 'prod-hvls-4900',
    name: 'VentAxis AeroVortex 4.9m Commercial HVLS Fan',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Industrial HVLS Fans',
    tagline: 'Silent, high-capacity cooling for schools, fitness centres, and church halls.',
    description: 'A whisper-quiet 4.9m ceiling fan tailored for spaces where people gather. It delivers continuous, gentle air circulation across up to 850 m² without distracting motor noise or paper-scattering drafts.',
    images: [
      '/images/market-commercial.jpg',
      '/images/product-commercial-ceiling.jpg'
    ],
    manufacturer: 'VentAxis Engineering Systems',
    model: 'VAX-HVLS-4900-COMM',
    airflowCapacity: '8,400 m³/min (504,000 m³/h)',
    dimensions: {
      diameterOrWidth: '4,900 mm (16 ft)',
      depthOrHeight: '950 mm drop clearance',
      weightKg: 86,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.75,
      currentAmps: 4.2,
    },
    ipRating: 'IP55',
    soundLevelDb: '< 36 dB(A) at full speed',
    installationConsiderations: [
      'Runs on standard 230V single-phase electrical supply.',
      'Mounts to open timber joists, structural steel, or concrete slabs.',
      'Includes secondary steel safety wire retention.'
    ],
    applicableEnvironments: [
      'School Examination & Assembly Halls',
      'Churches & Worship Auditoriums',
      'Gyms & Indoor Sports Centres',
      'Retail Showrooms & Shopping Atriums'
    ],
    compliance: [
      'SANS 10142-1 Wiring Code',
      'SANS 10400-O Indoor Air Quality',
      'CE & NRCS Certified'
    ],
    features: [
      'Near-silent operation ideal for speech and microphone audio',
      'Clean architectural aerofoil blades',
      'Simple wall-mount speed dial',
      'Low electricity draw (under 750W at full speed)'
    ],
    status: 'Available',
  },
  {
    id: 'prod-comm-ceiling-1400',
    name: 'VentAxis AeroGlide 1400mm Commercial Ceiling Fan',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Commercial Ceiling Fans',
    tagline: 'Durable, energy-efficient cooling for classrooms, offices, and retail.',
    description: 'Built for reliable everyday cooling in public and commercial buildings. Heavy-gauge aluminium blades deliver strong, steady airflow with very low energy consumption and zero maintenance.',
    images: [
      '/images/product-commercial-ceiling.jpg',
      '/images/product-ceiling-charcoal.jpg'
    ],
    manufacturer: 'VentAxis Commercial Systems',
    model: 'VAX-AG-1400-WHT',
    airflowCapacity: '13,500 m³/h (7,950 CFM)',
    dimensions: {
      diameterOrWidth: '1,400 mm (56 in)',
      depthOrHeight: '380 mm from ceiling',
      weightKg: 7.2,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.065,
      currentAmps: 0.28,
    },
    ipRating: 'IP44',
    soundLevelDb: '< 34 dB(A)',
    installationConsiderations: [
      'Fast installation on standard ceiling boxes or concrete anchors.',
      'Heavy-duty drop rods available for tall ceilings.',
      'Supplied with lockable or standard multi-speed wall controller.'
    ],
    applicableEnvironments: [
      'Classrooms & University Lecture Rooms',
      'Offices & Reception Areas',
      'Retail Stores & Supermarkets',
      'Healthcare Waiting Rooms'
    ],
    compliance: [
      'SANS 10142-1 Certified',
      'NRCS LOA Approved',
      'SABS Safety Tested'
    ],
    features: [
      'High-efficiency copper-wound motor',
      'Heavy-duty steel drop rod and mounting shackle with safety pin',
      'Double ball-bearing design for smooth, quiet rotation',
      'Durable powder-coated gloss white or matte charcoal finish'
    ],
    status: 'Available',
  },
  {
    id: 'prod-wood-ceiling-1320',
    name: 'VentAxis Artesian 1320mm Solid Walnut Ceiling Fan',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Residential & Designer Fans',
    tagline: 'Handcrafted solid timber blades with whisper-quiet DC motor for premium homes.',
    description: 'Add warmth and natural beauty to your living room, bedroom, or boutique lodge. The Artesian features three carved walnut blades driven by an ultra-efficient, completely silent DC motor with a 6-speed remote control.',
    images: [
      '/images/product-wooden-fan.jpg',
      '/images/hero-living-fan.jpg'
    ],
    manufacturer: 'VentAxis Residential Craft',
    model: 'VAX-ART-1320-WALNUT',
    airflowCapacity: '11,200 m³/h (6,600 CFM)',
    dimensions: {
      diameterOrWidth: '1,320 mm (52 in)',
      depthOrHeight: '310 mm drop',
      weightKg: 6.4,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.035,
      currentAmps: 0.16,
    },
    ipRating: 'IP20 (Indoor living)',
    soundLevelDb: '< 29 dB(A) near silent',
    installationConsiderations: [
      'Fits standard residential ceiling mounts and pitched ceilings up to 15 degrees.',
      'Low power consumption (uses less power than a 40W light bulb).'
    ],
    applicableEnvironments: [
      'Master Bedrooms & Living Rooms',
      'Boutique Hotels & Safari Lodges',
      'Executive Boardrooms & Lounge Suites'
    ],
    compliance: [
      'SANS 10142-1 Certified',
      'NRCS LOA Approved'
    ],
    features: [
      'Hand-carved solid sustainable walnut timber blades',
      'Ultra-efficient DC motor (only 35W at top speed)',
      '6-speed handheld remote control with summer/winter reverse',
      'Completely silent operation for undisturbed sleep'
    ],
    status: 'Available',
  },
  {
    id: 'prod-designer-led-1370',
    name: 'VentAxis Lumina 1370mm Designer Ceiling Fan with LED',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Residential & Designer Fans',
    tagline: 'Architectural modern ceiling fan with integrated dimmable warm LED light.',
    description: 'A clean, contemporary fan designed for modern open-plan homes and hospitality dining areas. It combines sculpted aerodynamic blades for cooling with a warm, dimmable LED luminaire controlled via remote.',
    images: [
      '/images/product-designer-light.jpg',
      '/images/product-ceiling-charcoal.jpg'
    ],
    manufacturer: 'VentAxis Architectural Series',
    model: 'VAX-LUM-1370-MATTE',
    airflowCapacity: '12,400 m³/h (7,300 CFM)',
    dimensions: {
      diameterOrWidth: '1,370 mm (54 in)',
      depthOrHeight: '330 mm drop',
      weightKg: 6.8,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.04,
      currentAmps: 0.18,
    },
    ipRating: 'IP20',
    soundLevelDb: '< 31 dB(A)',
    installationConsiderations: [
      'Replaces existing central light fixture directly without new wiring.',
      'Includes slimline bracket and wireless remote receiver.'
    ],
    applicableEnvironments: [
      'Open-Plan Living & Dining Areas',
      'Modern Homes & Apartments',
      'Hotel Guest Rooms & Coffee Shops'
    ],
    compliance: [
      'SANS 10142-1 Certified',
      'NRCS LOA Approved'
    ],
    features: [
      'Integrated 18W dimmable LED (warm white 3000K to neutral 4000K)',
      'Quiet, high-torque DC motor with 6 airflow settings',
      'Natural breeze simulation mode',
      'Available in matte white or architectural charcoal'
    ],
    status: 'Available',
  },
  {
    id: 'prod-outdoor-patio-1420',
    name: 'VentAxis Monsoon 1420mm All-Weather Patio Ceiling Fan',
    category: 'CEILING & HVLS FANS',
    subCategory: 'Outdoor Patio Fans',
    tagline: 'Wet-rated outdoor cooling for covered patios, braai areas, and verandas.',
    description: 'Engineered specifically for outdoor South African conditions. Built with UV-stabilized composite blades and a sealed motor to resist moisture, humidity, and coastal sea spray without sagging, rust, or motor wear.',
    images: [
      '/images/product-outdoor-fan.jpg',
      '/images/market-residential.jpg'
    ],
    manufacturer: 'VentAxis Outdoor Living',
    model: 'VAX-MONS-1420-PATIO',
    airflowCapacity: '13,800 m³/h (8,120 CFM)',
    dimensions: {
      diameterOrWidth: '1,420 mm (56 in)',
      depthOrHeight: '360 mm drop',
      weightKg: 7.9,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.055,
      currentAmps: 0.25,
    },
    ipRating: 'IP55 Wet-Rated Outdoor',
    soundLevelDb: '< 35 dB(A)',
    installationConsiderations: [
      'Safe for covered patios, pergolas, and outdoor entertainment lapa structures.',
      'Stainless steel hardware included to prevent corrosion.'
    ],
    applicableEnvironments: [
      'Covered Patios & Braai Entertainment Decks',
      'Restaurant Outdoor Dining Terraces',
      'Coastal Lodges & Pool Gazebos'
    ],
    compliance: [
      'SANS 10142-1 Wiring Code',
      'IP55 Ingress Protection Certified'
    ],
    features: [
      'IP55 sealed waterproof motor housing',
      'UV-resistant composite blades that never warp or droop in summer sun',
      'Deters flies and mosquitoes with steady downward air movement',
      'Stainless steel 316 mounting hardware'
    ],
    status: 'Available',
  },

  // ==========================================
  // WALL & PEDESTAL FANS
  // ==========================================
  {
    id: 'prod-wall-750',
    name: 'VentAxis StormBreeze 750mm Wall-Mounted Cooling Fan',
    category: 'WALL & PEDESTAL FANS',
    subCategory: 'Wall-Mounted Fans',
    tagline: 'High-velocity oscillating wall fan for workshops, garages, and gyms.',
    description: 'Frees up valuable floor space while delivering strong, directional cooling. Features heavy-duty cast-iron wall mounting brackets, a 3-speed copper motor, and a 90-degree oscillating sweep to cool busy work areas.',
    images: [
      '/images/product-industrial-wall.jpg',
      '/images/market-industrial.jpg'
    ],
    manufacturer: 'VentAxis Heavy Industrial',
    model: 'VAX-SB-750-W',
    airflowCapacity: '18,500 m³/h (10,880 CFM)',
    dimensions: {
      diameterOrWidth: '750 mm (30 in)',
      depthOrHeight: '600 mm projection from wall',
      weightKg: 19.5,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.28,
      currentAmps: 1.25,
    },
    ipRating: 'IP54',
    soundLevelDb: '62 dB(A) at maximum speed',
    installationConsiderations: [
      'Mounts securely to brickwork, concrete columns, or steel structural posts.',
      'Includes safety chain and heavy-duty expansion bolts.'
    ],
    applicableEnvironments: [
      'Automotive Workshops & Mechanic Bays',
      'Fitness Centres & CrossFit Boxes',
      'Warehouses & Assembly Workstations',
      'Commercial Kitchens & Food Prep Areas'
    ],
    compliance: [
      'SANS 10142-1 Certified',
      'OHSAct Machine Safety Standards'
    ],
    features: [
      '90-degree wide-angle oscillation or fixed directional flow',
      'Finger-safe close-mesh steel wire safety grille',
      '3-speed rotary switch with pull-cord option',
      'Heavy-duty copper-wound motor with thermal overload cut-out'
    ],
    status: 'Available',
  },
  {
    id: 'prod-pedestal-750',
    name: 'VentAxis StormBreeze 750mm Heavy-Duty Pedestal Fan',
    category: 'WALL & PEDESTAL FANS',
    subCategory: 'Heavy-Duty Pedestal Fans',
    tagline: 'Portable, high-power cooling with a tip-resistant cast-iron base.',
    description: 'Move cooling right where heat gathers. Built with a solid cast-iron base that will not tip over, height adjustment up to 1.8m, and a powerful 750mm blade set that pushes air across 15+ metres.',
    images: [
      '/images/prod-pedestal-750.png',
      '/images/product-industrial-floor.jpg'
    ],
    manufacturer: 'VentAxis Heavy Industrial',
    model: 'VAX-SB-750-P',
    airflowCapacity: '18,500 m³/h (10,880 CFM)',
    dimensions: {
      diameterOrWidth: '750 mm fan head / 580 mm base',
      depthOrHeight: '1,450 mm to 1,850 mm adjustable height',
      weightKg: 24.5,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.28,
      currentAmps: 1.25,
    },
    ipRating: 'IP54',
    soundLevelDb: '62 dB(A)',
    installationConsiderations: [
      'Ready to plug into any standard 230V wall socket.',
      'Heavy cast-iron base ensures rock-solid stability on busy floors.'
    ],
    applicableEnvironments: [
      'Factory Floors & Packing Lines',
      'Event Marquees & Exhibition Halls',
      'Vehicle Service Centres',
      'Sports Complexes & Community Halls'
    ],
    compliance: [
      'SANS 10142-1 Certified Plug & Lead',
      'OHSAct Machine Guarding Compliant'
    ],
    features: [
      'Heavy cast-iron star base prevents tipping',
      'Telescopic height adjustment tube with locking collar',
      'Smooth 90-degree oscillation or lockable stationary mode',
      'Industrial-grade powder-coated matte black finish'
    ],
    status: 'Available',
  },

  // ==========================================
  // PORTABLE & DRUM FANS
  // ==========================================
  {
    id: 'prod-drum-900',
    name: 'VentAxis WhirlBarrel 900mm High-Velocity Floor Drum Fan',
    category: 'PORTABLE & DRUM FANS',
    subCategory: 'Floor Drum Fans',
    tagline: 'Tiltable barrel fan on wheels for instant floor-level cooling.',
    description: 'A rugged, rollable drum fan designed to clear hot air pockets and keep workers cool in heavy heat zones. Features a 360-degree tilt barrel, sturdy rubber wheels, and a protective safety grille.',
    images: [
      '/images/product-industrial-floor.jpg',
      '/images/market-industrial.jpg'
    ],
    manufacturer: 'VentAxis Heavy Industrial',
    model: 'VAX-WB-900-M',
    airflowCapacity: '24,000 m³/h (14,125 CFM)',
    dimensions: {
      diameterOrWidth: '900 mm drum diameter',
      depthOrHeight: '980 mm height x 380 mm depth',
      weightKg: 28.0,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.45,
      currentAmps: 2.1,
    },
    ipRating: 'IP54',
    soundLevelDb: '66 dB(A)',
    installationConsiderations: [
      'Plug-and-play operation with heavy-duty 3m power lead.',
      'Easily rolled through standard doorways.'
    ],
    applicableEnvironments: [
      'Loading Docks & Dispatch Bays',
      'Welding & Fabrication Workshops',
      'Foundries & Machinery Maintenance Shops',
      'Agricultural Sheds & Stables'
    ],
    compliance: [
      'SANS 10142-1 Compliant',
      'OHSAct Workplace Safety Approved'
    ],
    features: [
      'Full 360-degree vertical tilt adjustment',
      'Sturdy steel barrel with rolled safety rims',
      'Large rubber wheels and convenient grab handles',
      'Dual-speed heavy-duty motor with thermal overload protection'
    ],
    status: 'Available',
  },
  {
    id: 'prod-mobile-1100',
    name: 'VentAxis RollStorm 1100mm Mobile Air Cannon Man-Cooler',
    category: 'PORTABLE & DRUM FANS',
    subCategory: 'Mobile Air Cannons',
    tagline: 'High-thrust mobile air cannon projecting cooling air over 25 metres.',
    description: 'When extreme heat threatens worker comfort on factory floors, the RollStorm delivers. Its aerodynamic barrel accelerates high-velocity airflow across long distances to create an instant cooling zone.',
    images: [
      '/images/prod-mobile-1100.png',
      '/images/market-industrial.jpg'
    ],
    manufacturer: 'VentAxis Heavy Industrial',
    model: 'VAX-RS-1100-PRO',
    airflowCapacity: '38,000 m³/h (22,360 CFM)',
    dimensions: {
      diameterOrWidth: '1,100 mm barrel diameter',
      depthOrHeight: '1,250 mm height x 520 mm depth',
      weightKg: 46.0,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.75,
      currentAmps: 3.5,
    },
    ipRating: 'IP55',
    soundLevelDb: '69 dB(A)',
    installationConsiderations: [
      'Fitted with 16A industrial plug on heavy-duty rubber lead.',
      'Heavy-duty castors with step-on locking brakes.'
    ],
    applicableEnvironments: [
      'Assembly Lines & Steel Fabrication Bays',
      'Distribution Centre Packing Stations',
      'Construction & Renovation Drying Zones',
      'Outdoor Tented Events & Sports Arenas'
    ],
    compliance: [
      'SANS 10142-1 Compliant',
      'ISO 5801 Performance Verified'
    ],
    features: [
      'Throws a focused air column up to 25+ metres',
      'Pneumatic wheels for easy movement over uneven concrete or gravel',
      'Locking tilt mechanism to direct air at floor level or overhead',
      'Continuous 24/7 duty-rated motor'
    ],
    status: 'Available',
  },

  // ==========================================
  // EVAPORATIVE COOLERS
  // ==========================================
  {
    id: 'prod-evap-18000',
    name: 'VentAxis AquaBreeze 18,000 Industrial Evaporative Air Cooler',
    category: 'EVAPORATIVE COOLERS',
    subCategory: 'Evaporative Air Coolers',
    tagline: 'Fresh, 100% chilled air using natural water evaporation and minimal electricity.',
    description: 'The smart, low-cost way to cool large open buildings where air conditioning is too expensive. Delivers 18,000 m³/h of cool, fresh air by evaporating water through dense cellulose pads, cutting power bills by up to 80%.',
    images: [
      '/images/prod-evap-18000.png',
      '/images/market-commercial.jpg'
    ],
    manufacturer: 'VentAxis Evaporative Division',
    model: 'VAX-EVAP-18000-IND',
    airflowCapacity: '18,000 m³/h (10,600 CFM)',
    dimensions: {
      diameterOrWidth: '1,150 mm width x 1,150 mm depth',
      depthOrHeight: '950 mm height (plus discharge cowl)',
      weightKg: 65.0,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.1,
      currentAmps: 5.2,
    },
    ipRating: 'IP55 Outdoor Weatherproof',
    soundLevelDb: '< 65 dB(A)',
    installationConsiderations: [
      'Requires standard 15mm cold water supply connection with float valve.',
      'Can be roof-mounted, wall-mounted, or fitted to a mobile trolley.',
      'Needs open windows or roller doors for positive cross-ventilation.'
    ],
    applicableEnvironments: [
      'Dry Gauteng Summer Workshops & Factories',
      'School Auditoriums & Sports Halls',
      'Commercial Greenhouses & Hydroponics',
      'Packaging & Food Processing Facilities'
    ],
    compliance: [
      'SANS 10142-1 Certified',
      'SANS 10400-O Environmental Hygiene'
    ],
    features: [
      'Cools 100% fresh outside air (never recirculates stale indoor air)',
      'High-density 5090 cellulose evaporation cooling pads',
      'Automatic water dump cycle keeps water fresh and pads clean',
      'Consumes 80% less electricity than compressor air conditioning'
    ],
    status: 'Available',
  }
];

export const CATEGORIES_WITH_SUBCATEGORIES: Record<ProductCategory, ProductSubCategory[]> = {
  'CEILING & HVLS FANS': [
    'Industrial HVLS Fans',
    'Commercial Ceiling Fans',
    'Residential & Designer Fans',
    'Outdoor Patio Fans'
  ],
  'WALL & PEDESTAL FANS': [
    'Wall-Mounted Fans',
    'Heavy-Duty Pedestal Fans'
  ],
  'PORTABLE & DRUM FANS': [
    'Floor Drum Fans',
    'Mobile Air Cannons'
  ],
  'EVAPORATIVE COOLERS': [
    'Evaporative Air Coolers'
  ]
};
