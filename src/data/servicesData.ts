import { InstallationService } from '../types';

export const INSTALLATION_SERVICES: InstallationService[] = [
  {
    id: 'srv-commercial',
    title: 'Commercial Fan Installation',
    slug: 'commercial-fan-installation',
    shortDesc: 'Precision air movement solutions for retail centres, corporate offices, gyms, and commercial showrooms.',
    fullDesc: 'VentAxis Solutions provides end-to-end commercial fan installations designed to optimize occupant comfort, reduce air conditioning reliance, and preserve architectural aesthetics. Our engineering teams coordinate quietly and cleanly around your trading hours to avoid operational disruptions.',
    iconName: 'Building2',
    keyFeatures: [
      'Acoustic-optimized fan selection ensuring noise levels under 40 dB(A)',
      'Architectural matching downrods and finishes (black, white, polished aluminium)',
      'Smart BMS (Building Management System) and touch-wall interface integration',
      'Flexible after-hours installation options for active retail environments'
    ],
    deliverables: [
      'Comprehensive ceiling structural load assessment',
      'Electrical supply installation and circuit isolation',
      'Complete ceiling bracket mounting with redundant safety tethering',
      'SANS 10142-1 Certificate of Compliance (CoC)'
    ],
    complianceStandards: ['SANS 10142-1 Wiring Code', 'SANS 10400-O Environmental Hygiene', 'OHSAct General Machinery Regulations'],
    image: '/images/installation-service.jpg',
  },
  {
    id: 'srv-industrial',
    title: 'Industrial Fan Installation',
    slug: 'industrial-fan-installation',
    shortDesc: 'Heavy-duty ventilation and cooling installations for manufacturing plants, assembly lines, and factories.',
    fullDesc: 'Industrial manufacturing facilities face severe thermal loads, machine heat radiation, and airborne dust. VentAxis delivers robust industrial fan installations using structural steel clamping, anti-vibration inertia bases, and 400V 3-phase high-efficiency switchgear.',
    iconName: 'Factory',
    keyFeatures: [
      'High CFM air exchange designed to disperse thermal pockets and welding fumes',
      'Direct-clamping to industrial I-beams, portal frames, and structural trusses',
      'DOL or Variable Speed Drive (VSD) starter panels with overload protection',
      'Heavy-duty safety cages and lockable emergency stop stations'
    ],
    deliverables: [
      'Factory air turnover (ACH) calculation and thermal map report',
      'Certified scissor lift / boom lift mobile elevated work platform operations',
      'Industrial conduit and armored cable (SWA) runs',
      'Vibration, amperage, and airflow anemometer verification sign-off'
    ],
    complianceStandards: ['OHSAct 85 of 1993', 'SANS 10142-1', 'ISO 5801 Aerodynamic Test Standards'],
    image: '/images/market-industrial.jpg',
  },
  {
    id: 'srv-institutional',
    title: 'Institutional Fan Installation',
    slug: 'institutional-fan-installation',
    shortDesc: 'Tailored ventilation for schools, universities, hospitals, exam halls, and government institutions.',
    fullDesc: 'Public and institutional facilities require tamper-proof, whisper-quiet, and energy-conserving air circulation. We engineer solutions that maintain cognitive alertness in classrooms and exam venues, and adhere to strict infection control airflow paths in healthcare facilities.',
    iconName: 'GraduationCap',
    keyFeatures: [
      'Tamper-resistant wall controllers with lockable master isolation',
      'Ultra-quiet operation preventing acoustic interference in examination rooms',
      'Anti-ligature and protective ceiling mounting options',
      'Compliant with Department of Basic Education & Health infrastructure standards'
    ],
    deliverables: [
      'Room volume vs air-change verification study',
      'Reinforced anchoring for concrete slab or historic timber roof structures',
      'Child-safe and student-proof mechanical wiring enclosures',
      'Facility maintenance team handover and operational training'
    ],
    complianceStandards: ['SANS 10400-O', 'DBE Minimum Uniform Norms & Standards for Public School Infrastructure', 'SANS 10142-1'],
    image: '/images/ind-education.png',
  },
  {
    id: 'srv-hvls',
    title: 'HVLS Fan Installation',
    slug: 'hvls-fan-installation',
    shortDesc: 'Certified rigging and structural mounting of large-diameter 3.6m to 7.3m High-Volume Low-Speed fans.',
    fullDesc: 'HVLS fan installation requires specialist structural engineering, certified working-at-heights riggers, and dynamic laser balancing. VentAxis Solutions is Gauteng’s specialist contractor for HVLS ceiling fans, ensuring flawless stability and maximum convective cooling across square kilometres of floor space.',
    iconName: 'Fan',
    keyFeatures: [
      'Engineered structural beam clamps rated for 10x static and dynamic safety factor',
      'Dual aircraft-grade secondary safety retention cables anchoring directly to main structure',
      'Four-point diagonal guy-wire turnbuckle stabilization kit',
      'Advanced digital touch controllers with automated temperature sensors'
    ],
    deliverables: [
      'Structural engineering review of roof truss carrying capacity',
      'Mobile Elevated Work Platform (MEWP) certified rigging team',
      'Laser blade alignment and electronic dynamic balancing check',
      'Fire alarm interlocking (automatic shutdown upon smoke detector signal)'
    ],
    complianceStandards: ['AMCA 230-15', 'SANS 10160 Basis of Structural Design and Actions', 'SANS 10142-1'],
    image: '/images/after-ventaxis-airflow.png',
  },
  {
    id: 'srv-mechanical-ventilation',
    title: 'Mechanical Ventilation Installation',
    slug: 'mechanical-ventilation-installation',
    shortDesc: 'Ducted air supply, return, and pressurization systems for basements, warehouses, and clean environments.',
    fullDesc: 'VentAxis designs and executes mechanical ventilation systems that circulate fresh outside air and prevent hazardous carbon monoxide or solvent build-up. We supply and install galvanized spiral ductwork, acoustic attenuators, and balanced inline mixed-flow or axial fans.',
    iconName: 'Wind',
    keyFeatures: [
      'Custom fabricated spiral and rectangular galvanised steel ducting',
      'Acoustic silencers and inline attenuators for low noise criteria (NC 30-35)',
      'Motorised volume control dampers and fresh air supply louvres',
      'Positive pressure systems to prevent dust ingress into sensitive process areas'
    ],
    deliverables: [
      'Static pressure loss calculations and duct velocity balancing',
      'Ductwork leakage testing and acoustic commissioning',
      'Air flow balancing per diffuser using calibrated flow hoods',
      'Comprehensive As-Built CAD layout drawings'
    ],
    complianceStandards: ['SANS 10400-O', 'ASHRAE 62.1 Ventilation for Acceptable Indoor Air Quality', 'SANS 10142-1'],
    image: '/images/prod-inline-315.png',
  },
  {
    id: 'srv-extraction',
    title: 'Extraction Systems Installation',
    slug: 'extraction-systems-installation',
    shortDesc: 'Engineered smoke, dust, toxic fume, and chemical vapor extraction for commercial and industrial plants.',
    fullDesc: 'Hazardous air contaminants demand certified capture velocity at the point of origin. Our specialist systems encompass EN12101-certified smoke spill extraction, reverse-pulse dust collectors, and acid-resistant polypropylene fume extraction blowers.',
    iconName: 'Flame',
    keyFeatures: [
      '400°C / 2-hour fire-rated smoke spill axial fans for life safety compliance',
      'Capture hoods engineered according to ACGIH Industrial Ventilation manual',
      'Polypropylene and stainless steel corrosive fume ductwork systems',
      'Reverse pulse-jet baghouses and cartridge filtration units'
    ],
    deliverables: [
      'Hazardous zone classification review and capture velocity measurement',
      'Fire rated cabling (PH120) and integration into building BMS / FACP',
      'Emissions discharge stack calculation and weatherproof cowl fitting',
      'Environmental and occupational hygiene sign-off support'
    ],
    complianceStandards: ['EN 12101-3 Smoke Control', 'SANS 10400-T Fire Protection', 'OHSAct Hazardous Chemical Substances'],
    image: '/images/prod-smoke-400.png',
  },
  {
    id: 'srv-upgrades',
    title: 'Fan Replacement and Upgrades',
    slug: 'fan-replacement-and-upgrades',
    shortDesc: 'Modernize legacy inefficient belt-drive fans with direct-drive PMSM and high-efficiency aerofoils.',
    fullDesc: 'Aging fans consume excessive electricity, suffer frequent belt failures, and deliver poor airflow. VentAxis audits your existing equipment and retrofits modern energy-efficient fans, cutting ventilation power consumption by up to 60% while dramatically reducing noise.',
    iconName: 'RotateCw',
    keyFeatures: [
      'Direct-replacement retrofit kits for legacy roof cowls and wall axials',
      'Elimination of maintenance-heavy belt and pulley drives with direct-drive motors',
      'Immediate electricity reduction and payback calculation report',
      'Safe removal, decommissioning, and eco-friendly recycling of old equipment'
    ],
    deliverables: [
      'Pre-upgrade energy and airflow baseline logging',
      'Safe dismantling and removal from height',
      'Refitting of new high-efficiency aerofoil units with adaptor transition plates',
      'Post-installation verification showing exact kWh savings and CFM increases'
    ],
    complianceStandards: ['SANS 10142-1', 'SANS 941 Energy Efficiency of Electrical Apparatus'],
    image: '/images/product-commercial-ceiling.jpg',
  },
  {
    id: 'srv-electrical-mech-coordination',
    title: 'Electrical & Mechanical Coordination',
    slug: 'electrical-and-mechanical-coordination',
    shortDesc: 'Single-source responsibility: structural rigging, electrical supply, control panels, and certified CoCs.',
    fullDesc: 'Why manage multiple contractors? VentAxis provides seamless mechanical and electrical coordination. Our in-house registered installation electricians install dedicated sub-distribution boards, cable trays, isolators, and issue legally binding SANS 10142-1 Certificates of Compliance.',
    iconName: 'Cpu',
    keyFeatures: [
      'Registered Installation Electrician (Wireman’s License) sign-off on every project',
      'Custom IP65 control panels, soft-starters, and VSD variable frequency drives',
      'Safe containment: galvanized wire mesh cable trays and steel conduit',
      'Seamless BMS, SCADA, and building fire panel interfacing'
    ],
    deliverables: [
      'Electrical single-line diagram and circuit breaker sizing schedule',
      'Supply and installation of local lockable rotary isolator switches',
      'Earth continuity and loop impedance verification testing',
      'Official Department of Employment and Labour SANS 10142-1 CoC issued'
    ],
    complianceStandards: ['SANS 10142-1 The Wiring of Premises', 'OHSAct Electrical Installation Regulations'],
    image: '/images/prod-centri-500.png',
  },
  {
    id: 'srv-maintenance',
    title: 'Maintenance and Servicing',
    slug: 'maintenance-and-servicing',
    shortDesc: 'Preventative inspection schedules, vibration diagnostics, bearing greasing, and emergency breakdown SLA.',
    fullDesc: 'Protect your ventilation capital investment with VentAxis maintenance programs. We perform scheduled preventative servicing, dynamic impeller re-balancing, infrared electrical scanning, and motor winding resistance testing across commercial and industrial facilities in Gauteng.',
    iconName: 'Wrench',
    keyFeatures: [
      'Preventative bi-annual and quarterly scheduled service contracts',
      'Ultrasonic bearing lubrication and vibration spectrum analysis',
      'Aerofoil blade degreasing and ultrasonic cleaning to restore design efficiency',
      'Priority rapid breakdown dispatch for contracted facilities'
    ],
    deliverables: [
      'Detailed multi-point digital inspection checklist and asset register log',
      'Thermal imaging report of electrical contacts and motor bearings',
      'Airflow velocity and decibel benchmark comparisons against commissioning values',
      'Transparent preventative replacement recommendations before critical failure'
    ],
    complianceStandards: ['OHSAct General Safety Regulations', 'ISO 10816 Mechanical Vibration Evaluation'],
    image: '/images/prod-roof-800.png',
  }
];

export const INSTALLATION_WORKFLOW = [
  {
    step: '01',
    title: 'Site Assessment',
    headline: 'Detailed On-Site Engineering Survey',
    description: 'Our qualified ventilation engineers visit your Gauteng facility with laser distance meters, digital anemometers, and structural gauges. We inspect roof trusses, beam profiles, electrical feed availability, ambient thermal loads, and architectural clearances.',
    duration: 'Within 24–48 Hours of Request',
    deliverable: 'Site Assessment Data Sheet & Structural Feasibility Confirmation'
  },
  {
    step: '02',
    title: 'Technical Evaluation',
    headline: 'Airflow & Heat Load Calculations',
    description: 'We calculate required air change rates (ACH), total cubic metres per hour (m³/h), static pressure drops, and target throw velocity. For complex industrial environments, we evaluate dust particulate loads or chemical vapor concentrations.',
    duration: '24–48 Hours Post-Assessment',
    deliverable: 'Technical Air Turnover Calculation & Equipment Sizing Model'
  },
  {
    step: '03',
    title: 'Equipment Selection',
    headline: 'Application-Specific Fan Specification',
    description: 'We match your building dynamics to high-efficiency fans—selecting precise blade diameters, PMSM vs induction motors, acoustic decibel ratings, and chemical/weatherproofing IP ratings. We balance capital outlay with long-term electricity consumption.',
    duration: 'Integrated with Evaluation',
    deliverable: 'Detailed Technical Specifications & Certified Performance Curves'
  },
  {
    step: '04',
    title: 'Quotation and Approval',
    headline: 'Transparent Commercial Proposal',
    description: 'We issue an itemized commercial quotation detailing equipment costs, installation labour, electrical materials, crane/access equipment, and transport. Payment milestones, delivery schedules, and SANS compliance commitments are clearly defined.',
    duration: 'Immediate Electronic Dispatch',
    deliverable: 'Formal Bill of Quantities & Scope of Work Document'
  },
  {
    step: '05',
    title: 'Installation',
    headline: 'Certified Rigging & Precision Mounting',
    description: 'Our certified Working-at-Heights riggers and installation teams arrive with calibrated rigging gear and mobile scissor lifts. All fans are mounted with primary engineered clamps plus redundant secondary aircraft-grade steel safety arrestors.',
    duration: 'Scheduled Around Client Operations',
    deliverable: 'Turnkey Mechanical Mounting & Electrical Conduit Infrastructure'
  },
  {
    step: '06',
    title: 'Testing & Commissioning',
    headline: 'Rigorous Multi-Point Verification',
    description: 'Every fan undergoes dynamic vibration testing, full-load electrical amperage checks, phase rotation validation, and anemometer airflow measurement. Multi-fan networks and emergency fire alarm cut-offs are functionally tested.',
    duration: 'Same-Day as Installation Finalization',
    deliverable: 'Commissioning Verification Checklist & Anemometer Flow Record'
  },
  {
    step: '07',
    title: 'Handover & Maintenance',
    headline: 'Formal CoC Sign-Off & Servicing Roadmap',
    description: 'We provide client team operational training, hand over user manuals and warranties, issue the SANS 10142-1 Electrical Certificate of Compliance, and establish a preventative maintenance schedule to ensure lifelong performance.',
    duration: 'Project Sign-Off',
    deliverable: 'Certificate of Compliance (CoC), Warranty Document & Maintenance Plan'
  }
];

export const SAFETY_AND_COMPLIANCE = [
  {
    code: 'OHSAct 85 of 1993',
    title: 'Occupational Health & Safety Act',
    description: 'All installation procedures comply with South African occupational safety laws, including certified scaffolding, safety harnesses, and mandatory PPE.'
  },
  {
    code: 'SANS 10142-1',
    title: 'Electrical Wiring of Premises',
    description: 'All electrical isolators, sub-distribution boards, motor circuit breakers, and cabling are signed off by a Registered Installation Electrician with an official CoC.'
  },
  {
    code: 'SANS 10400-O',
    title: 'Environmental Hygiene & Ventilation',
    description: 'Ensures natural and mechanical ventilation rates comply with national building standards for air turnover and occupant safety.'
  },
  {
    code: 'Working at Heights',
    title: 'SAQA US 229998 Certified Riggers',
    description: 'Riggers and technicians are certified for work on elevated platforms, scissor lifts, and industrial roof structures with full fall-arrest systems.'
  }
];
