import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // ==========================================
  // AIR MOVEMENT
  // ==========================================
  {
    id: 'prod-hvls-7300',
    name: 'VentAxis AeroVortex 7.3m Industrial HVLS Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'HVLS ceiling fans',
    tagline: 'High-Volume Low-Speed airflow for massive warehouses and distribution centres.',
    description: 'Engineered for massive open-span industrial facilities, the AeroVortex 7.3m employs 6 aerofoil-extruded aircraft-grade aluminium blades driven by an ultra-efficient Permanent Magnet Synchronous Motor (PMSM). Provides deep destratification and evaporative cooling effect up to 6°C across floor footprints exceeding 1,800 m² with negligible noise.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineering Systems',
    model: 'VAX-HVLS-7300-PMSM',
    airflowCapacity: '14,800 m³/min (888,000 m³/h)',
    dimensions: {
      diameterOrWidth: '7,300 mm (24 ft)',
      depthOrHeight: '1,120 mm drop rod standard (customisable)',
      weightKg: 118,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.5,
      currentAmps: 3.8,
    },
    ipRating: 'IP65 Drive / IP55 Motor',
    soundLevelDb: '< 38 dB(A) at 3m distance',
    installationConsiderations: [
      'Requires rigid structural steel I-beam or purlin engineered clamping bracket.',
      'Minimum ceiling clearance of 1.2m above blades and 5.0m to 12.0m floor clearance.',
      'Dedicated secondary steel safety wire rope anchoring to primary building trusses.',
      'Vibration damping guy-wire stabilization kit included.'
    ],
    applicableEnvironments: [
      'Logistics & Distribution Warehouses',
      'Heavy Manufacturing Plants',
      'Aircraft Hangars & Transport Hubs',
      'Agricultural Packhouses & Cold Chain Loading Bays'
    ],
    compliance: [
      'SANS 10142-1 Electrical Code of Practice',
      'AMCA 230-15 Laboratory Methods for Testing HVLS Fans',
      'OHSAct 85 of 1993 Machine Safety Regulations'
    ],
    features: [
      'PMSM Direct-Drive (No gearbox oil changes or maintenance leaks)',
      'Reverse rotation winter destratification mode (heat recovery)',
      'Modbus / BACnet BMS building automation interface integrated',
      'Emergency fire alarm interface with automatic trip trigger'
    ],
    status: 'Available',
  },
  {
    id: 'prod-hvls-4900',
    name: 'VentAxis AeroVortex 4.9m Commercial HVLS Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'HVLS ceiling fans',
    tagline: 'Architectural-grade low-noise HVLS fan for institutional halls and commercial spaces.',
    description: 'Designed specifically for schools, sports complexes, religious auditoriums, and commercial transit halls where acoustics and sleek aesthetics are paramount. Delivers gentle continuous air movement across 850 m² with whisper-quiet sound emission under 36 dB(A).',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
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
    soundLevelDb: '< 36 dB(A) at 100% full load',
    installationConsiderations: [
      'Mountable on open web steel joists, laminated timber beams, or concrete ceilings.',
      'Standard 230V 16A dedicated isolator feed required.',
      '3-point safety wire arrestor and blade retention brackets standard.'
    ],
    applicableEnvironments: [
      'School Examination & Assembly Halls',
      'Churches & Mega-Worship Auditoriums',
      'Shopping Malls & Retail Atriums',
      'Commercial Fitness Centres & Sports Arenas'
    ],
    compliance: [
      'SANS 10142-1 Wiring of Premises',
      'SANS 10400-O Environmental Hygiene & Ventilation',
      'CE Certified Controller'
    ],
    features: [
      'Stepless touch-screen digital speed controller',
      'Architectural anodized aluminium finish or custom powder coating',
      'Ultra-low power consumption (equivalent to standard domestic appliances)',
      'Dual optical sensor anti-collision safety cut-off'
    ],
    status: 'Available',
  },
  {
    id: 'prod-comm-ceiling-1400',
    name: 'VentAxis AeroGlide 1400mm Commercial Ceiling Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'Commercial ceiling fans',
    tagline: 'Heavy-duty steel 3-blade commercial ceiling fan for high-traffic institutions.',
    description: 'Rugged all-metal commercial ceiling fan engineered for South African schools, government clinics, correctional facilities, and light commercial buildings. Fitted with heavy-gauge balanced steel blades and double-sealed ball bearings for continuous 24/7 duty.',
    images: [
      'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Industrial Components',
    model: 'VAX-AGC-1400-HD',
    airflowCapacity: '15,600 m³/h',
    dimensions: {
      diameterOrWidth: '1,400 mm (56 inch)',
      depthOrHeight: '480 mm standard downrod',
      weightKg: 8.5,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.075,
      currentAmps: 0.35,
    },
    ipRating: 'IP44',
    soundLevelDb: '< 42 dB(A)',
    installationConsiderations: [
      'Secure mounting to concrete anchor plugs or heavy timber batten.',
      'Minimum blade clearance of 2.4m above finished floor level as per SANS 10142-1.',
      'Surface mounted 5-speed wall regulator supplied with each unit.'
    ],
    applicableEnvironments: [
      'Classrooms, University Lecture Rooms & Libraries',
      'Primary Healthcare Clinics & Hospital Waiting Areas',
      'Municipal Customer Service Centres',
      'Staff Canteens & General Commercial Offices'
    ],
    compliance: [
      'SABS Approved Motor Standard SANS 60335-2-80',
      'SANS 10142-1 CoC Ready'
    ],
    features: [
      'Anti-tamper steel casing and wall switch',
      'Thermal overload protection with auto-reset',
      'Double ball-bearing permanent split capacitor motor',
      'High corrosion resistance powder-coated white or industrial charcoal'
    ],
    status: 'Available',
  },
  {
    id: 'prod-wall-750',
    name: 'VentAxis StormBreeze 750mm Industrial Oscillating Wall Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'Wall-mounted fans',
    tagline: 'High-velocity 30-inch oscillating wall fan with reinforced steel finger guard.',
    description: 'Designed to deliver directional cooling in congested workshops, factory assembly lines, and commercial kitchens where floor space must be kept unobstructed. Features an 80-degree wide oscillation sweep and heavy-duty steel wall mounting bracket.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Industrial Components',
    model: 'VAX-SB-750-W',
    airflowCapacity: '18,200 m³/h (10,700 CFM)',
    dimensions: {
      diameterOrWidth: '820 mm (guard diameter), 750 mm (blade)',
      depthOrHeight: '450 mm bracket projection',
      weightKg: 14.2,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.28,
      currentAmps: 1.3,
    },
    ipRating: 'IP54',
    soundLevelDb: '68 dB(A) at maximum speed',
    installationConsiderations: [
      'Mounts to solid brick, reinforced concrete or structural steel stanchions.',
      'Requires heavy-duty M10 masonry expanding sleeve anchors.',
      'Supplied with 2.5m industrial rubber cable and 3-pin 16A plug.'
    ],
    applicableEnvironments: [
      'Automotive Repair Workshops & Dealership Bays',
      'Fabrication & Welding Shops',
      'Commercial Kitchens & Laundries',
      'Distribution Dispatch Offices'
    ],
    compliance: [
      'OHSAct Machine Guarding Regulations',
      'SANS 60335-1 / SANS 60335-2-80 Electrical Safety'
    ],
    features: [
      '3-speed wired rotary switch with pull-cord selector',
      'Close-mesh steel safety finger guard',
      'Gear-driven 80° mechanical oscillation with fixed-position lock',
      'Die-cast aluminium aerofoil blade assembly'
    ],
    status: 'Available',
  },
  {
    id: 'prod-pedestal-750',
    name: 'VentAxis StormBreeze 750mm High-Velocity Pedestal Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'Pedestal fans',
    tagline: 'Adjustable heavy-base industrial pedestal fan with high air throw.',
    description: 'A mobile spot-cooling powerhouse for industrial plants, event halls, and temporary assembly areas. Built on a cast-iron 18 kg anti-topple weighted base with telescopic height adjustment from 1.5m to 2.0m.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Industrial Components',
    model: 'VAX-SB-750-P',
    airflowCapacity: '18,500 m³/h',
    dimensions: {
      diameterOrWidth: '820 mm guard / 560 mm base diameter',
      depthOrHeight: '1,500 mm to 2,000 mm adjustable',
      weightKg: 28.5,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.28,
      currentAmps: 1.3,
    },
    ipRating: 'IP54',
    soundLevelDb: '68 dB(A)',
    installationConsiderations: [
      'Pre-assembled by VentAxis or flat-pack on-site assembly.',
      'Position on level stable flooring.',
      'Keep clear of loose curtains or lightweight paper flimsies.'
    ],
    applicableEnvironments: [
      'Manufacturing Workstations',
      'Temporary Exhibition Marquees & Auditoriums',
      'Loading Docks & Dispatch Desks',
      'Fitness Facilities & Crossfit Boxes'
    ],
    compliance: ['SANS 60335-2-80', 'OHSAct Safe Machine Guards'],
    features: [
      'Cast-iron anti-vibration balanced circular base',
      'Telescopic lock collar with safety stop pin',
      'Tiltable motor head up to 30 degrees vertical angle',
      '100% copper wound commercial motor'
    ],
    status: 'Available',
  },
  {
    id: 'prod-drum-900',
    name: 'VentAxis WhirlBarrel 900mm Heavy-Duty Industrial Drum Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'Drum fans',
    tagline: 'High-volume portable steel barrel fan for rapid shopfloor air turnover.',
    description: 'Designed for heavy plant applications requiring focused high-velocity laminar air blast. Housed in a heavy-gauge 1.6mm rolled steel cylindrical drum with 360-degree tilt capability and heavy-duty puncture-proof rubber transport wheels.',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Industrial Components',
    model: 'VAX-WB-900-DF',
    airflowCapacity: '27,400 m³/h (16,100 CFM)',
    dimensions: {
      diameterOrWidth: '980 mm outer drum diameter',
      depthOrHeight: '420 mm drum depth / 1,050 mm overall height',
      weightKg: 34.0,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.55,
      currentAmps: 2.6,
    },
    ipRating: 'IP55',
    soundLevelDb: '72 dB(A)',
    installationConsiderations: [
      'Zero installation required (plug-and-play).',
      'Supplied with 3m heavy-duty trailing cable with cable-tidy brackets.',
      'Wheel brakes on both rear castors.'
    ],
    applicableEnvironments: [
      'Steel Fabrication & Welding Bays',
      'Foundry & Forging Floors',
      'Warehouse Cross-Docking Lanes',
      'Construction Site Dehydration & Curing'
    ],
    compliance: ['OHSAct Machine Regulations', 'SANS 10142-1'],
    features: [
      'Direct-drive high-efficiency balanced steel blades',
      '360° axial pivot rotation on tubular steel cradle frame',
      'Dual rear rubber transport wheels with non-marking tread',
      'Industrial textured epoxy-polyester powder coat'
    ],
    status: 'Available',
  },
  {
    id: 'prod-mobile-1100',
    name: 'VentAxis RollStorm 1100mm Mobile Man-Cooler Fan',
    category: 'AIR MOVEMENT',
    subCategory: 'Mobile industrial fans',
    tagline: 'Industrial mobile cooling station with high throw distance up to 35 metres.',
    description: 'The RollStorm 1100 is an ultra-high performance mobile air cannon developed for blast furnace operations, heavy machinery assembly, and mine surface support workshops. Delivers a focused air stream reaching personnel up to 35m away.',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineering Systems',
    model: 'VAX-RS-1100-MOB',
    airflowCapacity: '36,500 m³/h (21,500 CFM)',
    dimensions: {
      diameterOrWidth: '1,180 mm outer frame',
      depthOrHeight: '620 mm depth / 1,350 mm height',
      weightKg: 62.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.1,
      currentAmps: 2.7,
    },
    ipRating: 'IP65',
    soundLevelDb: '76 dB(A)',
    installationConsiderations: [
      'Connects via industrial 4-pin or 5-pin 16A red CEE-form socket.',
      'Locking foot brakes must be engaged prior to running on high speed.',
      'VentAxis provides on-site test and demonstration.'
    ],
    applicableEnvironments: [
      'Mining Maintenance Surface Workshops',
      'Power Generation Boiler Maintenance Floors',
      'Automotive Press & Paint Facilities',
      'Container Packing Stations'
    ],
    compliance: ['OHSAct Electrical Regulations', 'ISO 5801'],
    features: [
      'Integral DOL starter with thermal overload and lockable isolator',
      'High-impact aerodynamic venturi inlet nozzle',
      'Large 250mm all-terrain pneumatic transport wheels',
      'Heavy-gauge hot-dip galvanized and powder-coated steel cage'
    ],
    status: 'Available',
  },

  // ==========================================
  // INDUSTRIAL VENTILATION
  // ==========================================
  {
    id: 'prod-axial-630',
    name: 'VentAxis CylindroAxial 630mm Direct-Drive In-Wall Axial Fan',
    category: 'INDUSTRIAL VENTILATION',
    subCategory: 'Axial flow fans',
    tagline: 'Flanged high-flow axial fan for wall mounting and through-wall continuous ventilation.',
    description: 'Designed for general factory air renewal and building envelope ventilation. Aerodynamically profiled polypropylene blades with pitch adjustment at standstill, housed within an electro-galvanized cylindrical steel casing with dual mounting flanges.',
    images: [
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineered Ventilation',
    model: 'VAX-AX-630-4D',
    airflowCapacity: '16,200 m³/h at 120 Pa static pressure',
    dimensions: {
      diameterOrWidth: '630 mm nominal casing / 720 mm flange outer',
      depthOrHeight: '380 mm depth',
      weightKg: 29.5,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.75,
      currentAmps: 1.9,
    },
    ipRating: 'IP55 Class F Insulation',
    soundLevelDb: '64 dB(A) at 3m',
    installationConsiderations: [
      'Wall aperture opening 650 x 650 mm with steel subframe.',
      'Exterior gravity louvre shutter recommended to prevent rain ingress and backdraft.',
      'Flexible canvas duct connection required if connected to rigid ductwork.'
    ],
    applicableEnvironments: [
      'Warehouse Perimeter Wall Ventilation',
      'Electrical Substation & Switchgear Cooling',
      'Compressor Rooms & Generator Enclosures',
      'Agricultural Greenhouses & Poultry Facilities'
    ],
    compliance: ['SANS 10142-1', 'ISO 5801 Aerodynamic Test Standard'],
    features: [
      'External terminal box for quick electrical connection',
      'Serrated blade trailing edge for acoustic noise reduction',
      'Continuous duty rating S1 from -20°C to +60°C ambient',
      'Reversible airflow blade configuration available upon request'
    ],
    status: 'Available',
  },
  {
    id: 'prod-centri-500',
    name: 'VentAxis CentriForce High-Pressure Backward-Curved Centrifugal Fan',
    category: 'INDUSTRIAL VENTILATION',
    subCategory: 'Centrifugal fans',
    tagline: 'High static pressure centrifugal fan for complex industrial duct systems.',
    description: 'The CentriForce series features a precision-balanced backward-curved single-inlet centrifugal impeller designed to overcome high system resistance in industrial ductwork, extraction hoods, and multi-stage air filtration banks.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineered Ventilation',
    model: 'VAX-CF-500-BC',
    airflowCapacity: '11,400 m³/h at 950 Pa static pressure',
    dimensions: {
      diameterOrWidth: '920 mm casing width',
      depthOrHeight: '840 mm height / 760 mm depth',
      weightKg: 78.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 4.0,
      currentAmps: 8.2,
    },
    ipRating: 'IP55 (Optional IP65 ATEX Motor)',
    soundLevelDb: '74 dB(A) at outlet',
    installationConsiderations: [
      'Requires heavy concrete inertia base or spring anti-vibration mounts.',
      'Flexible inlet and discharge connections to prevent duct acoustic resonance.',
      'Direct-on-line or variable speed drive (VSD) control panel coordination.'
    ],
    applicableEnvironments: [
      'Industrial Exhaust & Spray Booth Systems',
      'Baghouse & Cartridge Filter Extraction Units',
      'Commercial Kitchen Exhaust with Grease Filters',
      'Textile & Paper Processing Facilities'
    ],
    compliance: ['ISO 1940-1 Grade G2.5 Impeller Dynamic Balance', 'SANS 10142-1'],
    features: [
      'Self-cleaning non-overloading backward-curved impeller',
      'Split scroll housing for simplified cleaning and inspection access',
      'Drain plug fitted at lowest point of scroll for condensate evacuation',
      'Standard 8-position discharge orientation flexibility (0° to 315°)'
    ],
    status: 'Available',
  },
  {
    id: 'prod-inline-315',
    name: 'VentAxis DuctMaster 315mm Mixed-Flow Inline Duct Fan',
    category: 'INDUSTRIAL VENTILATION',
    subCategory: 'Inline duct fans',
    tagline: 'Compact low-profile mixed flow inline fan for commercial HVAC ducting.',
    description: 'Combines the high airflow of an axial fan with the static pressure capability of a centrifugal fan. The central motor and impeller unit can be removed from the duct line without dismantling connected spiral or flexible ducting.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineered Ventilation',
    model: 'VAX-DM-315-MF',
    airflowCapacity: '2,350 m³/h at 280 Pa',
    dimensions: {
      diameterOrWidth: '315 mm spigot diameter',
      depthOrHeight: '560 mm length / 350 mm height',
      weightKg: 12.8,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 0.23,
      currentAmps: 1.1,
    },
    ipRating: 'IP44',
    soundLevelDb: '48 dB(A) at 3m casing breakout',
    installationConsiderations: [
      'Install inline within 315mm standard spiral galvanised ducting.',
      'Mount using vibration isolation hanging brackets with threaded M8 rods.',
      'Maintain minimum 1x duct diameter straight run before inlet.'
    ],
    applicableEnvironments: [
      'Commercial Office Restrooms & Ablution Exhaust',
      'Retail Change Rooms & Fitout Ducting',
      'Hospital Ward Fresh Air Make-up',
      'School Science Laboratories & Preparation Rooms'
    ],
    compliance: ['SANS 10400-O Building Ventilation Regulations', 'SANS 10142-1'],
    features: [
      '2-speed external terminal block switching',
      'Swing-out casing design for rapid in-situ cleaning',
      'Polypropylene high-efficiency mixed flow blade profile',
      'Thermal overload protection with automatic reset'
    ],
    status: 'Available',
  },
  {
    id: 'prod-roof-800',
    name: 'VentAxis AeroTop 800mm High-Volume Roof Cowl Extractor',
    category: 'INDUSTRIAL VENTILATION',
    subCategory: 'Roof extractors',
    tagline: 'Weatherproof UV-stabilised industrial roof cowl extractor for warehouse ridge lines.',
    description: 'Engineered specifically for South Africa’s extreme UV radiation and severe Gauteng summer hailstorms. Aerodynamic weather cowl in heavy-duty UV-stabilised fiberglass reinforced polyester (FRP) with vertical discharge and automatic backdraft dampers.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineered Ventilation',
    model: 'VAX-AT-800-VD',
    airflowCapacity: '24,500 m³/h at 60 Pa',
    dimensions: {
      diameterOrWidth: '1,200 mm cowl base / 800 mm throat',
      depthOrHeight: '1,050 mm height above roof curb',
      weightKg: 58.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.5,
      currentAmps: 3.6,
    },
    ipRating: 'IP65 Tropicalised Weatherproof',
    soundLevelDb: '66 dB(A) at 3m',
    installationConsiderations: [
      'Mounted onto factory-formed roof curb soaker flange matching IBR or Corrugated roof sheets.',
      'VentAxis certified riggers coordinate crane lift and roof flashings.',
      'Includes lockable IP66 isolator switch mounted directly on curb base.'
    ],
    applicableEnvironments: [
      'Industrial Warehouses & Steel Fabrication Sheds',
      'Food & Beverage Bottling Plants',
      'Automotive Assembly Plants',
      'Retail Wholesale Cash & Carry Depots'
    ],
    compliance: ['SANS 10400-O', 'SANS 10142-1 CoC Compliant'],
    features: [
      'Automatic gravity shutter flaps prevent rain entry when powered down',
      'UV-stabilised anti-fade gel-coat finish (Standard RAL 7035 light grey or custom)',
      'Direct-drive industrial motor mounted out of contaminated airstream',
      'High wind uplift resistance certified to Gauteng design wind loads'
    ],
    status: 'Available',
  },
  {
    id: 'prod-blower-turbo',
    name: 'VentAxis TurboVane Positive Pressure Industrial Utility Blower',
    category: 'INDUSTRIAL VENTILATION',
    subCategory: 'Industrial blowers',
    tagline: 'High-velocity utility blower for process cooling and confined workspace purging.',
    description: 'Heavy-duty centrifugal utility blower engineered for high volume air delivery through long runs of flexible ducting. Perfect for tank ventilation, underground utility tunnel purge, and equipment cooling in industrial facilities.',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Engineered Ventilation',
    model: 'VAX-TV-400-UB',
    airflowCapacity: '6,200 m³/h at 650 Pa static pressure',
    dimensions: {
      diameterOrWidth: '580 mm width x 620 mm length',
      depthOrHeight: '680 mm height',
      weightKg: 42.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 2.2,
      currentAmps: 4.8,
    },
    ipRating: 'IP55',
    soundLevelDb: '73 dB(A)',
    installationConsiderations: [
      'Supplied with round inlet and outlet spigots for quick-clamp flexible canvas hose connection.',
      'Tubular protective roll-cage with 4 lifting handles.',
      'Direct on-line starter with lockable mushroom emergency stop.'
    ],
    applicableEnvironments: [
      'Confined Space Tank & Silo Maintenance',
      'Foundry Mold Cooling & Cupola Air Assist',
      'Mining Shaft Substation Pressurization',
      'Industrial Drying Tunnels'
    ],
    compliance: ['OHSAct Confined Space Regulations', 'SANS 10142-1'],
    features: [
      'Dynamically balanced forward-curved multiblade steel wheel',
      'Heavy-wall steel housing with continuous seal-welded seams',
      'Quick-clamp ducting collars on both suction and discharge',
      'Vibration isolated base runners'
    ],
    status: 'Available',
  },

  // ==========================================
  // SPECIALIST SYSTEMS
  // ==========================================
  {
    id: 'prod-evap-18000',
    name: 'VentAxis AquaBreeze 18,000 m³/h Down-Discharge Evaporative Cooler',
    category: 'SPECIALIST SYSTEMS',
    subCategory: 'Evaporative coolers',
    tagline: 'High-efficiency industrial evaporative cooling unit with 100% fresh chilled air.',
    description: 'Cools massive industrial buildings at up to 80% lower electricity consumption than conventional refrigerated HVAC. Utilises Munters high-efficiency CELdek 5090 cooling pads with automatic water dumping, salinity monitoring, and inverter speed modulation.',
    images: [
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Specialist Systems',
    model: 'VAX-AB-18K-DD',
    airflowCapacity: '18,000 m³/h at 180 Pa',
    dimensions: {
      diameterOrWidth: '1,100 mm x 1,100 mm cabinet',
      depthOrHeight: '980 mm height / 650 x 650 mm duct dropper',
      weightKg: 68,
    },
    powerRequirements: {
      voltage: '230V Single-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.1,
      currentAmps: 5.2,
    },
    ipRating: 'IP65 UV Resilient Polymer Cabinet',
    soundLevelDb: '65 dB(A) at 3m',
    installationConsiderations: [
      'Roof mounted with engineered curb and structural support.',
      'Requires 15mm cold potable water feed with minimum 1.5 bar pressure.',
      'Requires 25mm PVC overflow and automated drain-to-waste line.',
      'SANS 10142-1 electrical supply with local weatherproof isolator.'
    ],
    applicableEnvironments: [
      'Plastics Injection Moulding & Extrusion Plants',
      'Commercial Print & Packaging Facilities',
      'High School & University Sports Arenas',
      'Food Processing & Commercial Bakery Facilities'
    ],
    compliance: ['SANS 10400-O', 'SANS 10142-1', 'Legionella Prevention Protocols (Auto-Dump Cycle)'],
    features: [
      'Auto-Clean cycle drains sump every 4 to 24 hours to prevent algae and scale',
      'Variable speed DC inverter drive with LCD wall controller and remote thermostat',
      'High-grade 100mm Munters cellulose fluted cooling pads',
      'Winter cover protection kit included'
    ],
    status: 'Available',
  },
  {
    id: 'prod-smoke-400',
    name: 'VentAxis PyroGuard 400°C / 2h Certified Smoke Spill Axial Fan',
    category: 'SPECIALIST SYSTEMS',
    subCategory: 'Smoke extraction fans',
    tagline: 'Life safety high-temperature emergency smoke and heat extraction fan.',
    description: 'Certified to European Standard EN 12101-3 and SANS compliance for 400°C operation for a minimum duration of 120 minutes. In an emergency fire event, the PyroGuard extracts toxic smoke and gases from escape routes and shopping mall atriums to maintain breathable visibility.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Specialist Systems',
    model: 'VAX-PG-800-F400',
    airflowCapacity: '32,000 m³/h at 250 Pa static pressure',
    dimensions: {
      diameterOrWidth: '800 mm internal diameter / 920 mm outer flanges',
      depthOrHeight: '750 mm casing length',
      weightKg: 115.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 5.5,
      currentAmps: 11.4,
    },
    ipRating: 'IP55 Class H High-Temp Fire-Rated Motor',
    soundLevelDb: '78 dB(A)',
    installationConsiderations: [
      'Must be wired using SANS 10139 fire-resistant silicone cable (PH120 certified).',
      'Connected to building Fire Alarm Control Panel (FACP) with automatic run-on override.',
      'Flexible duct connections must be certified fire-rated silicone/fiberglass fabric.'
    ],
    applicableEnvironments: [
      'Shopping Mall Atriums & Enclosed Retail Centres',
      'Underground Basement Car Parks & Transit Terminals',
      'Multi-Storey Hospital Escape Stairwells & Corridors',
      'Auditoriums & Public Gathering Facilities'
    ],
    compliance: [
      'EN 12101-3 F400 (400°C / 2 hours certified)',
      'SANS 10400-T Fire Protection Regulations',
      'SANS 10142-1 CoC'
    ],
    features: [
      'High-grade heat-treated aluminium alloy aerofoil impeller blades',
      'Dual purpose design: continuous daily ventilation + emergency smoke extraction',
      'Lockable firemans override terminal enclosure',
      'Heavy structural steel casing hot-dip galvanized to SANS 121 / ISO 1461'
    ],
    status: 'Available',
  },
  {
    id: 'prod-dust-cyclone',
    name: 'VentAxis AeroCyclone Industrial Dust Extraction System',
    category: 'SPECIALIST SYSTEMS',
    subCategory: 'Dust extraction fans',
    tagline: 'High-pressure cyclonic separator with pulse-jet cartridge filter for airborne particulates.',
    description: 'Engineered for timber processing, metal grinding, and cement handling operations. Combines primary centrifugal cyclonic separation for coarse chips with automated reverse pulse-jet compressed air cleaning for fine PM2.5/PM10 dust.',
    images: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Specialist Systems',
    model: 'VAX-AC-5500-DEX',
    airflowCapacity: '5,500 m³/h at 2,400 Pa high static pressure',
    dimensions: {
      diameterOrWidth: '1,400 mm width x 1,200 mm depth',
      depthOrHeight: '3,200 mm total height with quick-release collection hopper',
      weightKg: 285.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 5.5,
      currentAmps: 11.2,
    },
    ipRating: 'IP65 Control Enclosure',
    soundLevelDb: '72 dB(A) with acoustic silencer fitted',
    installationConsiderations: [
      'Requires compressed air supply: 5-7 bar clean dry air for pulse jet manifold.',
      'Concrete plinth mounting with chemical M16 anchor studs.',
      'Explosion relief venting panel required for combustible organic dusts (e.g. wood flour).'
    ],
    applicableEnvironments: [
      'Woodworking, Joinery & Furniture Manufacturing',
      'Metal Grinding, Polishing & Deburring Shops',
      'Chemical, Fertilizer & Mineral Bagging Plants',
      'Pharmaceutical Excipient Handling Areas'
    ],
    compliance: ['OHSAct Hazardous Chemical Substances Regulations', 'SANS 10142-1'],
    features: [
      'Automated timer-based reverse pulse-jet cartridge cleaning',
      'Quick-clamping 120-litre mobile steel collection bin with viewing sight glass',
      'Spunbond polyester PTFE-membrane filter cartridges with 99.9% efficiency at 0.5 micron',
      'Integral backward-inclined radial blade spark-resistant fan'
    ],
    status: 'Available',
  },
  {
    id: 'prod-fume-poly',
    name: 'VentAxis ChemVent Anti-Corrosive Chemical & Fume Extraction Blower',
    category: 'SPECIALIST SYSTEMS',
    subCategory: 'Fume extraction systems',
    tagline: 'Solid polypropylene chemical-resistant centrifugal blower for acid and laboratory fumes.',
    description: 'Constructed from one-piece injection-moulded solid polypropylene (PP) resistant to aggressive acids, alkalis, solvent vapors, and saline industrial atmospheres. Designed for electroplating plants, battery charging rooms, and university science laboratories.',
    images: [
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Specialist Systems',
    model: 'VAX-CV-315-PP',
    airflowCapacity: '3,800 m³/h at 450 Pa',
    dimensions: {
      diameterOrWidth: '315 mm circular suction & discharge spigots',
      depthOrHeight: '620 mm height x 540 mm depth',
      weightKg: 24.5,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 1.5,
      currentAmps: 3.4,
    },
    ipRating: 'IP55 Chemical Resistant Enclosure',
    soundLevelDb: '62 dB(A) at 3m',
    installationConsiderations: [
      'Install with welded polypropylene or PVC round ductwork.',
      'Condensate drain trap must be routed to approved chemical neutralization sump.',
      'Support with corrosion-proof stainless steel 316 or epoxy brackets.'
    ],
    applicableEnvironments: [
      'Mining Assay & Metallurgical Laboratories',
      'Electroplating & Metal Anodising Plants',
      'Industrial Forklift Battery Charging Stations',
      'University & Pharmaceutical Research Fume Hoods'
    ],
    compliance: ['OHSAct Lead & Chemical Substances Regulations', 'SANS 10142-1'],
    features: [
      '100% metal-free airstream (Polypropylene housing & forward-curved PP impeller)',
      'Viton mechanical labyrinth shaft seal prevents corrosive fumes attacking motor shaft',
      'Stainless steel 316 assembly hardware throughout',
      'Direct-drive industrial B3 motor mounted on reinforced steel pedestal'
    ],
    status: 'Available',
  },
  {
    id: 'prod-special-underground',
    name: 'VentAxis AirPurge Underground & Confined Space Positive Pressure Ventilation Unit',
    category: 'SPECIALIST SYSTEMS',
    subCategory: 'Specialist industrial ventilation equipment',
    tagline: 'Heavy-duty skid-mounted positive pressure blower with duct cassette for hazardous workspace purging.',
    description: 'A rugged specialized positive pressure system designed for deep utility trenches, underground water chambers, tunnel boring portals, and heavy industrial manholes. Rapidly dilutes hazardous combustible gases and displaces stagnant air with high-pressure clean outdoor atmosphere.',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
    ],
    manufacturer: 'VentAxis Specialist Systems',
    model: 'VAX-AP-500-SKID',
    airflowCapacity: '8,900 m³/h at 400 Pa',
    dimensions: {
      diameterOrWidth: '500 mm duct spigot diameter',
      depthOrHeight: '850 mm width x 920 mm length x 980 mm height',
      weightKg: 64.0,
    },
    powerRequirements: {
      voltage: '380V/400V 3-Phase',
      frequency: '50 Hz (RSA Standard)',
      motorKw: 2.2,
      currentAmps: 4.9,
    },
    ipRating: 'IP66 Industrial Tough Enclosure',
    soundLevelDb: '74 dB(A)',
    installationConsiderations: [
      'Skid mounted with crane hoisting certified lifting lugs and forklift pockets.',
      'Compatible with anti-static collapsible ducting lengths up to 30m.',
      'Built-in earth bonding stud for electrostatic dissipation.'
    ],
    applicableEnvironments: [
      'Municipal Water & Sewerage Pump Stations',
      'Electrical Cable Tunnel Shafts & Subways',
      'Petrochemical Storage Tank Entry & Refurbishment',
      'Deep Foundation & Culvert Construction Sites'
    ],
    compliance: ['SANS 10108 / SANS 60079 Explosive Atmospheres', 'OHSAct General Safety Regulations'],
    features: [
      'Integrated heavy-duty steel roll-cage protection frame',
      'Quick-connect cam-lock duct cassette couplings',
      'Dual-speed operation for emergency high-flow purge vs continuous fresh air supply',
      'Airflow pressure differential indicator gauge'
    ],
    status: 'Available',
  }
];

export const CATEGORIES_WITH_SUBCATEGORIES: Record<string, string[]> = {
  'AIR MOVEMENT': [
    'HVLS ceiling fans',
    'Commercial ceiling fans',
    'Wall-mounted fans',
    'Pedestal fans',
    'Drum fans',
    'Mobile industrial fans'
  ],
  'INDUSTRIAL VENTILATION': [
    'Axial flow fans',
    'Centrifugal fans',
    'Inline duct fans',
    'Roof extractors',
    'Industrial blowers'
  ],
  'SPECIALIST SYSTEMS': [
    'Evaporative coolers',
    'Smoke extraction fans',
    'Dust extraction fans',
    'Fume extraction systems',
    'Specialist industrial ventilation equipment'
  ]
};
