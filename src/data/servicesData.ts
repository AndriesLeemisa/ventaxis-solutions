import { InstallationService } from '../types';

export const INSTALLATION_SERVICES: InstallationService[] = [
  {
    id: 'srv-residential',
    title: 'Residential Ceiling Fan Installation',
    slug: 'residential-ceiling-fan-installation',
    shortDesc: 'Quiet, wobble-free installation for living rooms, bedrooms, and covered patios.',
    fullDesc: 'Enjoy silent, natural cooling in your home. Our licensed electricians install your timber, designer, or patio ceiling fans with neat concealed wiring, balanced blade alignment, and zero annoying wobble or humming.',
    iconName: 'Building2',
    keyFeatures: [
      'Whisper-quiet DC and AC motor fan installation for peaceful bedrooms',
      'Ceiling reinforcement and secure mounting for concrete, plasterboard, or timber rafters',
      'Integration with wireless handheld remotes or wall speed controllers',
      'Wet-rated outdoor patio and braai area installations'
    ],
    deliverables: [
      'Careful ceiling structural inspection and secure anchor bracket fitting',
      'Neat electrical connection to existing light points or dedicated new circuits',
      'Precision blade balancing to ensure 100% vibration-free operation',
      'SANS 10142-1 Electrical Certificate of Compliance (CoC)'
    ],
    complianceStandards: ['SANS 10142-1 Wiring Code', 'OHSAct Safety Regulations'],
    image: '/images/hero-living-fan.jpg',
  },
  {
    id: 'srv-commercial',
    title: 'Commercial & School Hall Fan Installation',
    slug: 'commercial-fan-installation',
    shortDesc: 'Reliable air movement for classrooms, exam halls, churches, and retail stores.',
    fullDesc: 'Keep large groups of people alert, cool, and comfortable without noisy air conditioning. We install durable commercial ceiling fans and mid-sized HVLS fans tailored for school assembly halls, examination centres, and worship auditoriums.',
    iconName: 'GraduationCap',
    keyFeatures: [
      'Low-noise fan specification ensuring clear acoustic conditions for speech and exams',
      'Tamper-resistant wall controllers to prevent unauthorised setting changes',
      'High CFM air circulation that prevents heat build-up and drowsiness in large gatherings',
      'Flexible after-hours installation options to prevent disruption to classes or trading'
    ],
    deliverables: [
      'Room volume and fan coverage layout calculation',
      'Heavy-duty drop rods and reinforced roof truss clamping',
      'Multi-fan centralized wall control wiring',
      'Official SANS 10142-1 Certificate of Compliance sign-off'
    ],
    complianceStandards: ['SANS 10142-1 Wiring Code', 'SANS 10400-O Indoor Ventilation Norms'],
    image: '/images/market-commercial.jpg',
  },
  {
    id: 'srv-hvls',
    title: 'Industrial Warehouse HVLS Fan Rigging',
    slug: 'hvls-fan-installation',
    shortDesc: 'Certified high-bay structural rigging of 3.6m to 7.3m large-diameter ceiling fans.',
    fullDesc: 'HVLS fans move massive volumes of air across warehouse floors, lowering perceived temperatures by up to 6°C with tiny electricity draw. Our certified Working-at-Heights riggers handle structural I-beam clamping, safety tether cables, and inverter wiring.',
    iconName: 'Fan',
    keyFeatures: [
      'Engineered structural beam clamps rated with 10x safety margins',
      'Dual aircraft-grade secondary safety retention wire ropes directly to building trusses',
      '4-point diagonal turnbuckle guy-wire anti-sway stabilization kit',
      'Wall-mounted digital speed dial and automated fire alarm shutdown link'
    ],
    deliverables: [
      'Roof structural truss inspection and load feasibility verification',
      'Mobile Elevated Work Platform (MEWP) certified rigging crew',
      'Laser blade alignment and dynamic electronic balance verification',
      'Turnkey electrical connection and commissioning sign-off'
    ],
    complianceStandards: ['AMCA 230-15 HVLS Standards', 'SANS 10142-1 Electrical Code', 'OHSAct Safe Rigging'],
    image: '/images/after-ventaxis-airflow.png',
  },
  {
    id: 'srv-wall-pedestal',
    title: 'Wall-Mounted & Workshop Fan Mounting',
    slug: 'wall-and-workshop-fan-mounting',
    shortDesc: 'Solid wall mounting and dedicated power points for heavy-duty oscillating fans.',
    fullDesc: 'Get high-velocity airflow off the floor and directed right where workers need it most. We install 750mm industrial oscillating wall fans onto brick pillars, concrete columns, or steel uprights with dedicated isolator switches.',
    iconName: 'Factory',
    keyFeatures: [
      'Heavy-gauge cast-iron wall brackets anchored with high-tensile expansion bolts',
      'Secondary safety drop cable anchoring fan head to the wall structure',
      'Dedicated local rotary isolator switch for easy and safe maintenance',
      'Protective close-mesh safety grilles protecting operators'
    ],
    deliverables: [
      'Optimal elevation and throw-distance placement consultation',
      'Galvanized conduit and surface-mounted isolator installation',
      'Oscillating angle adjustment and speed verification',
      'Full electrical circuit testing and sign-off'
    ],
    complianceStandards: ['SANS 10142-1 Electrical Code', 'OHSAct General Machinery Regulations'],
    image: '/images/product-industrial-wall.jpg',
  },
  {
    id: 'srv-upgrades',
    title: 'Fan Replacement & Energy Upgrades',
    slug: 'fan-replacement-and-upgrades',
    shortDesc: 'Replace old, noisy, or wobbly fans with silent high-efficiency models.',
    fullDesc: 'Older fans often wobble, hum, and waste electricity. We safely remove your existing units and install modern, aerodynamic DC or PMSM cooling fans, cutting power usage by up to 60% while providing far more cooling airflow.',
    iconName: 'RotateCw',
    keyFeatures: [
      'Direct-replacement retrofit matching existing ceiling junction boxes',
      'Immediate upgrade to whisper-quiet DC motors with summer/winter reverse',
      'Safe removal, decommissioning, and eco-friendly disposal of old fans',
      'Noticeable reduction in monthly electricity consumption'
    ],
    deliverables: [
      'Assessment of existing wiring and ceiling fixing integrity',
      'Neat refitting of new fan with zero damage to surrounding ceiling finishes',
      'Testing of all speeds, reverse functions, and remote controls',
      'Warranty handover and SANS compliance check'
    ],
    complianceStandards: ['SANS 10142-1 Certified', 'SANS 941 Energy Efficiency Standards'],
    image: '/images/product-commercial-ceiling.jpg',
  }
];

export const INSTALLATION_WORKFLOW = [
  {
    step: '01',
    title: 'Free Sizing & Advice',
    headline: 'Right Fan for Your Room',
    description: 'Tell us about your space. We calculate the correct blade span, motor power, and drop height so you get real cooling breeze without guesswork.',
    duration: 'Within 24 Hours',
    deliverable: 'Accurate Fan Sizing Recommendation'
  },
  {
    step: '02',
    title: 'Clear, Upfront Quote',
    headline: 'Fixed Transparent Pricing',
    description: 'We send a detailed quote covering the fans, brackets, electrical wiring, and installation. No hidden surprises or unexpected extra charges.',
    duration: 'Same-Day Quote',
    deliverable: 'Itemised Fixed-Price Quotation'
  },
  {
    step: '03',
    title: 'Professional Installation',
    headline: 'Certified, Neat Workmanship',
    description: 'Our certified installation teams arrive on schedule. We anchor mounts securely, wire switches cleanly, and balance blades for wobble-free running.',
    duration: 'Scheduled at Your Convenience',
    deliverable: 'Secure Mounting & Neat Electrical Wiring'
  },
  {
    step: '04',
    title: 'Testing & SANS CoC',
    headline: '100% Tested with Legal Certificate',
    description: 'We test all speeds and safety features, clean up completely, demonstrate the controls, and issue your official SANS 10142-1 Electrical CoC.',
    duration: 'Same-Day Handover',
    deliverable: 'SANS 10142-1 Certificate of Compliance'
  }
];

export const SAFETY_AND_COMPLIANCE = [
  {
    code: 'SANS 10142-1',
    title: 'Electrical Wiring of Premises',
    description: 'All wiring, circuit breakers, isolators, and switches are installed by registered electricians and certified with an official CoC.'
  },
  {
    code: 'OHSAct 85 of 1993',
    title: 'Health & Safety Compliant',
    description: 'Strict adherence to South African occupational safety standards, protective equipment, and safe installation practices.'
  },
  {
    code: 'Working at Heights',
    title: 'Certified Riggers & Access',
    description: 'Trained and certified technicians for high-ceiling, scaffold, and scissor-lift installations with dual safety tethering.'
  },
  {
    code: 'SANS 10400-O',
    title: 'Ventilation & Airflow Norms',
    description: 'Ensures recommended air movement rates comply with national building regulations for occupant health and comfort.'
  }
];
