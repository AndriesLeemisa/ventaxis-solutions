export interface MaintenanceTier {
  id: string;
  name: string;
  badge: string;
  recommendedFor: string;
  inspectionFrequency: string;
  emergencySla: string;
  features: string[];
  startingPriceZar: string;
}

export const MAINTENANCE_TIERS: MaintenanceTier[] = [
  {
    id: 'tier-silver',
    name: 'Silver Inspection Agreement',
    badge: 'Standard Compliance',
    recommendedFor: 'Commercial offices, retail stores, small schools, and community worship auditoriums.',
    inspectionFrequency: 'Bi-Annual (2 Scheduled Service Visits / Year)',
    emergencySla: '24-Hour Breakdown Response',
    features: [
      'Comprehensive visual inspection of blade fasteners, downrods & safety cables',
      'Acoustic bearing listen & vibration check',
      'Electrical connection tightening & thermal scan of isolators',
      'Airflow velocity baseline spot check',
      'Written engineering condition audit & asset register update',
      '10% discount on OEM replacement parts and emergency call-out labour'
    ],
    startingPriceZar: 'From R4,500 / year (up to 4 fan units)'
  },
  {
    id: 'tier-gold',
    name: 'Gold Operational Agreement',
    badge: 'Most Popular for Industry',
    recommendedFor: 'Busy logistics warehouses, high schools, private colleges, and standard manufacturing plants.',
    inspectionFrequency: 'Quarterly (4 Scheduled Service Visits / Year)',
    emergencySla: '8-Hour Priority Breakdown Response',
    features: [
      'All Silver tier inspection deliverables',
      'Full blade degreasing, dust decontamination & ultrasonic aerofoil cleaning',
      'Dynamic laser balancing of fan impellers & blade pitch verification',
      'Full-load motor current (amperage) and winding resistance insulation testing (Megger)',
      'Lubrication of serviceable bearings with high-temperature synthetic grease',
      'Inspection and testing of fire alarm trip interface and emergency stops',
      '15% discount on OEM components and priority technician dispatch'
    ],
    startingPriceZar: 'From R8,800 / year (up to 6 fan units)'
  },
  {
    id: 'tier-platinum',
    name: 'Platinum Critical Plant SLA',
    badge: '24/7 Mission Critical',
    recommendedFor: 'Cold-storage logistics, 24/7 automotive & food manufacturing plants, hospitals, and high-heat foundries.',
    inspectionFrequency: 'Bi-Monthly / 6 Visits per Year + Unlimited Diagnostics',
    emergencySla: '4-Hour Guaranteed On-Site SLA (Gauteng-Wide)',
    features: [
      'All Gold tier inspection & preventative maintenance deliverables',
      'Full infrared thermographic scan report of all motor control panels and isolators',
      'Critical spare parts consignment stock reserved at our Kempton Park depot',
      'Guaranteed 4-hour on-site dispatch 24 hours a day, 365 days a year',
      'Annual SANS 10142-1 electrical re-inspection and CoC renewal endorsement',
      'Dedicated lead ventilation engineer assigned to your facility account',
      '25% discount on replacement units and 0 call-out surcharge on breakdowns'
    ],
    startingPriceZar: 'From R16,500 / year (tailored to facility size)'
  }
];

export const MAINTENANCE_SERVICES_LIST = [
  {
    title: 'Scheduled Fan Inspections',
    desc: 'Systematic multi-point health audits ensuring all mechanical mountings, structural beam clamps, and safety cables maintain their certified 10x safety load factors.',
    icon: 'ClipboardCheck'
  },
  {
    title: 'Motor & Bearing Diagnostics',
    desc: 'Infrared thermography, Megger insulation resistance testing, and vibration spectrum analysis to detect bearing pitting or winding breakdown months before failure occurs.',
    icon: 'Activity'
  },
  {
    title: 'Ultrasonic Cleaning & Servicing',
    desc: 'Heavy dust, grease, and airborne particulate build-up degrades aerofoil efficiency by up to 25% and causes rotational unbalance. We restore factory laminar airflow.',
    icon: 'Sparkles'
  },
  {
    title: 'Electrical Inspections & CoC',
    desc: 'Verifying earth continuity, circuit breaker ratings, contactor wear, local isolator waterproofing, and compliance with SANS 10142-1 regulations.',
    icon: 'Zap'
  },
  {
    title: 'OEM Replacement Components',
    desc: 'We stock genuine replacement motors, PMSM drive controllers, aerofoil blades, safety wires, and IP65 rotary isolators at our Gauteng central depot.',
    icon: 'PackageCheck'
  },
  {
    title: 'Anemometer Performance Checks',
    desc: 'Measuring real-time face velocity and air turnover (m³/h) with calibrated hot-wire anemometers, comparing live performance against initial commissioning benchmarks.',
    icon: 'Gauge'
  },
  {
    title: 'Rapid Breakdown Repairs',
    desc: 'Fast mechanical rigging and electrical repair crews dispatched across Johannesburg, Ekurhuleni, and Pretoria with fully equipped mobile service vans.',
    icon: 'Wrench'
  },
  {
    title: 'Annual Maintenance Agreements (SLA)',
    desc: 'Custom recurring preventative maintenance contracts with locked-in labour tariffs, discounted spare parts, and contractual response time guarantees.',
    icon: 'ShieldCheck'
  }
];
