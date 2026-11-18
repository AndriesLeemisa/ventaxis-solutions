import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-01-logistics-pomona',
    title: 'Aerotropolis Logistics Distribution Hub — HVLS Cooling Benchmark',
    clientType: 'Industrial',
    location: 'Pomona Logistics Corridor, Kempton Park, Gauteng',
    initialChallenge: 'Demonstration benchmark: A 24,000 m² high-bay distribution centre suffered extreme roof heat during summer, with roof truss temperatures exceeding 42°C. Ground-level order pickers experienced severe thermal fatigue.',
    recommendedEquipment: [
      '6 x VentAxis AeroVortex 7.3m Industrial HVLS Fans (PMSM Direct-Drive)',
      'Integrated Wall-Mounted Speed Control Stations',
      'Dual Aircraft-Grade Secondary Safety Ropes'
    ],
    installationDescription: 'Mounted six 7.3m HVLS units onto primary structural I-beams at 11.5m elevation with 4-point guy-wire stabilization and dedicated sub-distribution wiring. Certified with SANS 10142-1 CoC.',
    results: [
      'Floor-to-ceiling thermal differential reduced from 14.5°C down to just 1.8°C in benchmark testing',
      'Perceived cooling effect of 5.2°C across picking aisles through gentle 1.2 m/s breeze',
      'Continuous air circulation achieved with zero operational downtime'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/market-industrial.webp',
  },
  {
    id: 'proj-02-school-hall-jhb',
    title: 'Centenary School Examination Hall — Whisper-Quiet HVLS Benchmark',
    clientType: 'Schools',
    location: 'Houghton / Parktown Academic Corridor, Johannesburg, Gauteng',
    initialChallenge: 'Demonstration benchmark: A heritage school assembly hall seating 1,200 learners suffered stifling heat during year-end exams. Older fans were noisy (>55 dB) and caused flickering shadows against chandeliers.',
    recommendedEquipment: [
      '3 x VentAxis AeroVortex 4.9m Commercial Architectural HVLS Fans',
      'Custom Matte-Black Powder-Coated Blades matching timber rafters',
      'Lockable Anti-Tamper Digital Wall Speed Controller'
    ],
    installationDescription: 'Precision mounting onto historic pitch-timber trusses using custom non-destructive brackets during school recess. Dynamically balanced to achieve whisper-quiet sound output under 34 dB(A).',
    results: [
      'Verified acoustic reading of 33.8 dB(A) at ear level (imperceptible background sound)',
      'Comfortable cooling breeze across all 1,200 exam seating positions',
      'Winter destratification mode recirculates rising warm air during cold mornings'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/ind-education.webp',
  },
  {
    id: 'proj-03-worship-auditorium',
    title: '3,500-Seat Church Auditorium — Thermal Destratification Benchmark',
    clientType: 'Religious institutions',
    location: 'Menlyn / Pretoria East, Gauteng',
    initialChallenge: 'Demonstration benchmark: A large auditorium with 14m tiered ceilings faced high air-conditioning electricity bills. Chilled air collected on the ground while upper balcony seating sweltered. Church sound engineers required zero motor hum.',
    recommendedEquipment: [
      '4 x VentAxis AeroVortex 6.1m Silent Direct-Drive HVLS Fans',
      'Architectural Charcoal Finish Blending into Roof Structure',
      'Stepless Digital Wall Controller'
    ],
    installationDescription: 'Mounted from overhead catwalk structures with dynamic laser alignment. Live acoustic testing confirmed zero 50Hz electrical hum or microphone feedback.',
    results: [
      'Air conditioning run-hours reduced by 35%, generating estimated R14,200 monthly power savings',
      'Balcony tier perceived temperature dropped by 5.8°C without annoying drafts',
      'Acoustic sound clarity preserved with zero interference on pulpit microphones'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/ind-religious.webp',
  },
  {
    id: 'proj-04-steel-fabrication',
    title: 'Structural Steel Workshop — High-Velocity Cooling Benchmark',
    clientType: 'Industrial',
    location: 'Wadeville Industrial Area, Germiston, Ekurhuleni',
    initialChallenge: 'Demonstration benchmark: A busy metal fabrication workshop suffered intense radiant heat from steel roofing and cutting equipment, causing operator heat fatigue during afternoon shifts.',
    recommendedEquipment: [
      '4 x VentAxis StormBreeze 750mm Wall-Mounted Oscillating Fans',
      '2 x VentAxis RollStorm 1100mm Mobile Air Cannons',
      'Dedicated Heavy-Duty Rotary Isolator Switches'
    ],
    installationDescription: 'Installed heavy cast-iron wall brackets onto structural columns with safety drop chains, plus mobile air cannons that operators can roll directly to hot fabrication bays.',
    results: [
      'Instant high-velocity directional cooling focused on active work cells',
      'Noticeable improvement in worker comfort and reduced afternoon fatigue',
      'Robust equipment withstanding workshop dust and daily vibration'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/product-industrial-wall.webp',
  },
  {
    id: 'proj-05-clinic-waiting-areas',
    title: 'Outpatient Clinic Waiting Halls — Ceiling Fan Benchmark',
    clientType: 'Healthcare',
    location: 'Soweto / Greater Johannesburg South Healthcare District',
    initialChallenge: 'Demonstration benchmark: High-density outpatient waiting halls and corridors required reliable, continuous cooling air circulation without rattling noises or high maintenance costs.',
    recommendedEquipment: [
      '14 x VentAxis AeroGlide 1400mm Commercial Ceiling Fans',
      'Keyed Master Wall Control Panels',
      'Steel Downrod Safety Shackles'
    ],
    installationDescription: 'Replaced legacy worn-out fans with smooth commercial ceiling fans. Wiring routed neatly through surface-mounted white steel conduit with registered electrician CoC sign-off.',
    results: [
      'Gentle, continuous air circulation across all waiting hall benches',
      'Eliminated rattling sounds and mechanical vibration',
      'Issued official SANS 10142-1 Certificate of Compliance model'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/market-commercial.webp',
  },
  {
    id: 'proj-06-commercial-retail-atrium',
    title: 'Covered Restaurant Piazza & Outdoor Patio Benchmark',
    clientType: 'Commercial',
    location: 'Rosebank / Sandton Commercial Node, Gauteng',
    initialChallenge: 'Demonstration benchmark: An outdoor covered dining veranda suffered stagnant summer heat, causing midday dining terrace tables to empty during heatwaves.',
    recommendedEquipment: [
      '6 x VentAxis Monsoon 1420mm All-Weather Patio Fans',
      '2 x VentAxis AeroVortex 4.9m Commercial HVLS Fans',
      'Wireless Multi-Zone Remote Controls'
    ],
    installationDescription: 'Fitted wet-rated outdoor patio fans to veranda pergolas and large architectural fans to the central atrium with weather-sealed isolators.',
    results: [
      'Comfortable 4.5°C breeze effect keeping dining guests cool through midday sun',
      'Steady downward airflow naturally keeps flies and flying insects away from tables',
      'Stylish aesthetic complementing modern outdoor architecture'
    ],
    completionStatus: 'Demonstration Engineering Benchmark',
    isDemonstrationContent: true,
    image: '/images/product-outdoor-fan.webp',
  }
];
