import { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-01-logistics-pomona',
    title: 'Aerotropolis Mega-Logistics Distribution Hub Airflow Optimisation',
    clientType: 'Industrial',
    location: 'Pomona Logistics Corridor, Kempton Park, Gauteng',
    initialChallenge: 'A 24,000 m² high-bay distribution centre suffered extreme roof thermal stratification during summer, with roof truss temperatures exceeding 42°C. Palletized food packaging on upper racking suffered heat fatigue and ground-level pickers experienced severe fatigue and dehydration.',
    recommendedEquipment: [
      '6 x VentAxis AeroVortex 7.3m Industrial HVLS Fans (PMSM Gearless Direct-Drive)',
      '8 x VentAxis AeroTop 800mm High-Volume Roof Cowl Extractors with Gravity Dampers',
      'Integrated BMS Modbus Control Station with Dual-Height Temperature Probes'
    ],
    installationDescription: 'VentAxis certified Working-at-Heights rigging crew mounted six 7.3m HVLS units onto primary structural I-beams at 11.5m clearance. Installations utilized engineered clamping brackets with secondary 6mm aircraft-grade steel safety arrestors and 4-point guy wire stabilization. Dedicated sub-distribution board installed with SANS 10142-1 CoC certification.',
    results: [
      'Floor-to-ceiling thermal differential reduced from 14.5°C down to just 1.8°C (homogenized air distribution)',
      'Perceived temperature at picking floor dropped by 5.2°C through gentle 1.2 m/s convective breeze',
      'Air turnover increased from 1.2 ACH to 4.5 ACH with zero downtime during 24/7 client operations'
    ],
    completionStatus: 'Completed & Certified',
    isDemonstrationContent: false,
    image: '/images/market-industrial.jpg',
  },
  {
    id: 'proj-02-school-hall-jhb',
    title: 'Centenary Examination & Assembly Hall Acoustic Ventilation',
    clientType: 'Schools',
    location: 'Houghton / Parktown Academic Corridor, Johannesburg, Gauteng',
    initialChallenge: 'A heritage school assembly hall seating 1,200 learners suffered intolerable stuffiness during end-of-year exams. The existing 20-year-old small ceiling fans generated loud motor hums (>55 dB) and distracting blade flicker against high halogen chandeliers, making quiet examinations impossible.',
    recommendedEquipment: [
      '3 x VentAxis AeroVortex 4.9m Commercial Architectural HVLS Fans (Whisper-Quiet)',
      'Custom Matte-Black Powder Coated Blade & Drop Rod Assembly to match heritage timber ceiling',
      'Digital Stepless Touch-Screen Wall Controller with Lockable Anti-Tamper Cabinet'
    ],
    installationDescription: 'Precision installation onto historic pitch-timber trusses using non-destructive custom cradle saddles engineered by our structural team. Rigging performed during school holiday recess. Units dynamically balanced with laser alignment to achieve a tested sound output under 34 dB(A) at ear level.',
    results: [
      'Ambient acoustic reading with all 3 fans on maximum operational speed: 33.8 dB(A) (imperceptible background sound)',
      'Complete air envelope coverage across all 1,200 examination seating positions',
      'Winter reverse destratification mode activated, gently recirculating rising warm air during winter terms'
    ],
    completionStatus: 'Completed & Certified',
    isDemonstrationContent: false,
    image: '/images/ind-education.png',
  },
  {
    id: 'proj-03-worship-auditorium',
    title: '3,500-Seat Multi-Tier Worship Sanctuary Thermal Destratification',
    clientType: 'Religious institutions',
    location: 'Menlyn / Pretoria East, Gauteng',
    initialChallenge: 'A modern mega-church auditorium with curved 14m tiered ceilings faced crippling air-conditioning electrical expenses. Chilled air collapsed into the lowest stalls while the balcony seating sweltered. Sound engineers refused standard fans due to acoustic microphone feedback risks.',
    recommendedEquipment: [
      '4 x VentAxis AeroVortex 6.1m Direct-Drive HVLS Sanctuary Fans',
      '4 x VentAxis DuctMaster 315mm Low-Noise Inline Duct Exhaust Fans for sound booths',
      'Wireless DMX & BACnet Interfacing for stage technician console management'
    ],
    installationDescription: 'Mounted directly from overhead catwalk structures during weekday rehearsals. Our sound engineering team conducted real-time audio spectrum analysis during full-load testing to verify zero 50Hz electrical hum or harmonic motor interference with the sanctuary line-array sound system.',
    results: [
      'Air conditioning chiller run-hours reduced by 38%, generating R14,200 monthly electricity tariff savings',
      'Balcony tier temperature dropped by 6.4°C without any disruptive air drafts or paper fluttering on pulpits',
      'Full DMX lighting console integration allows sound technicians to ramp fans up or down between services'
    ],
    completionStatus: 'Completed & Certified',
    isDemonstrationContent: false,
    image: '/images/ind-religious.png',
  },
  {
    id: 'proj-04-steel-fabrication',
    title: 'Heavy Structural Steel Fabrication Workshop Welding Fume & Heat Extraction',
    clientType: 'Industrial',
    location: 'Wadeville Heavy Industrial Area, Germiston, Ekurhuleni',
    initialChallenge: 'A 60-welder fabrication bay suffered from stagnant blue welding smoke plumes and severe radiant heat from plasma cutters. Indoor thermal index frequently exceeded 39°C, resulting in mandatory operator rest breaks and production bottlenecks.',
    recommendedEquipment: [
      '4 x VentAxis CylindroAxial 800mm High-Static In-Wall Exhaust Axials with Weather Hoods',
      '2 x VentAxis RollStorm 1100mm Heavy-Duty Mobile Man-Coolers for high-radiation welding cells',
      'Automated differential pressure louvre supply system'
    ],
    installationDescription: 'VentAxis cut 900x900mm structural wall apertures through corrugated cladding, installed structural steel trimmer frames, fitted vibration-damped axial fans, and wired dedicated 400V 3-phase motor control panels with remote run/trip telemetry.',
    results: [
      'Welding particulate concentrations reduced by 78%, achieving full compliance with OHSAct Workplace Exposure Limits',
      'Air turnover rate elevated from 3 ACH to 14 ACH within active welding zones',
      'Zero reported worker heat stress incidents in subsequent summer season'
    ],
    completionStatus: 'Completed & Certified',
    isDemonstrationContent: false,
    image: '/images/prod-axial-630.png',
  },
  {
    id: 'proj-05-clinic-waiting-areas',
    title: 'Regional Outpatient Healthcare Clinic Infection Prevention Airflow Upgrade',
    clientType: 'Healthcare',
    location: 'Soweto / Greater Johannesburg South Healthcare District',
    initialChallenge: 'A high-volume public healthcare facility required immediate mechanical air exchange upgrades in crowded outpatient waiting corridors and pharmacy dispensaries to comply with national airborne infection control standards.',
    recommendedEquipment: [
      '14 x VentAxis AeroGlide 1400mm Commercial Anti-Bacterial Ceiling Fans',
      '6 x VentAxis DuctMaster 315mm Continuous Negative-Pressure Inline Extractors',
      'Keyed Master Control Panels preventing unauthorized public adjustment'
    ],
    installationDescription: 'Installed under strict infection control procedures with dust containment sheeting and HEPA air scrubbers active during ceiling penetrations. Wiring routed through surface-mounted white steel conduit with tamper-proof security fasteners.',
    results: [
      'Continuous air turnover exceeded 12 air changes per hour (ACH) in line with WHO and Dept of Health guidelines',
      'Smooth non-turbulent directional airflow sweeping stale air toward high-level mechanical extractors',
      'Certified SANS 10142-1 CoC issued alongside Department of Health environmental hygiene sign-off'
    ],
    completionStatus: 'Completed & Certified',
    isDemonstrationContent: false,
    image: '/images/ind-healthcare.png',
  },
  {
    id: 'proj-06-commercial-retail-atrium',
    title: 'Retail Shopping Centre Open-Air Covered Piazza Microclimate Cooling (Demonstration Case)',
    clientType: 'Commercial',
    location: 'Rosebank / Sandton Commercial Node, Gauteng',
    initialChallenge: 'Demonstration architectural benchmark: A multi-level restaurant piazza covered by ETFE membrane roof suffered greenhouse solar heat build-up, rendering outdoor café seating deserted during peak midday lunch hours.',
    recommendedEquipment: [
      '2 x VentAxis AeroVortex 5.5m Custom White HVLS Ceiling Fans',
      'Integrated High-Pressure Micro-Mist Flash Evaporation Nozzles',
      'Smart Ambient Temperature & Humidity Sensor Activation'
    ],
    installationDescription: 'Demonstration engineering model showing the integration of large diameter commercial fans with high-pressure water misting lines to produce up to 8°C localized evaporative cooling on covered commercial concourses.',
    results: [
      'Demonstrated thermal reduction of 7.8°C at dining table level without surface dampness',
      'Footfall retention on open terraces increased by an estimated 65% in computational airflow simulation',
      'Full architectural integration with concealed power drops inside decorative structural steel columns'
    ],
    completionStatus: 'Demonstration Benchmark',
    isDemonstrationContent: true,
    image: '/images/product-commercial-ceiling.jpg',
  }
];
