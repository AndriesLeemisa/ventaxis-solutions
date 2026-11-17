import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const artifactDir = 'C:\\Users\\mphod\\.gemini\\antigravity\\brain\\35092371-1bdb-4c47-a061-6f318890db35';
const outDir = path.resolve('public/images');
fs.mkdirSync(outDir, { recursive: true });

// 1. Copy the 13 AI-generated photorealistic images from the artifact directory
const copyMap = {
  'hero_living_fan_1794906363180.jpg': 'hero-living-fan.jpg',
  'market_residential_1794906372965.jpg': 'market-residential.jpg',
  'market_commercial_1794906385904.jpg': 'market-commercial.jpg',
  'market_hospitality_1794906396746.jpg': 'market-hospitality.jpg',
  'market_industrial_1794906368003.jpg': 'market-industrial.jpg',
  'product_ceiling_charcoal_1794906364409.jpg': 'product-ceiling-charcoal.jpg',
  'product_wooden_fan_1794906375456.jpg': 'product-wooden-fan.jpg',
  'product_designer_light_1794906387266.jpg': 'product-designer-light.jpg',
  'product_outdoor_fan_1794906399004.jpg': 'product-outdoor-fan.jpg',
  'product_commercial_ceiling_1794906428541.jpg': 'product-commercial-ceiling.jpg',
  'product_industrial_wall_1794906383155.jpg': 'product-industrial-wall.jpg',
  'product_industrial_floor_1794906394725.jpg': 'product-industrial-floor.jpg',
  'installation_service_1794906390487.jpg': 'installation-service.jpg',
};

for (const [srcName, dstName] of Object.entries(copyMap)) {
  const srcPath = path.join(artifactDir, srcName);
  const dstPath = path.join(outDir, dstName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
  }
}

// 2. Helper to wrap studio equipment SVG artwork inside a dark engineering studio backdrop (1200x900)
function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildStudioSvg({ title, model, specLine, category, artworkSvg }) {
  title = esc(title);
  model = esc(model);
  specLine = esc(specLine);
  category = esc(category);
  return `<svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="studioBg" cx="50%" cy="46%" r="65%">
      <stop offset="0%" stop-color="#1A3656"/>
      <stop offset="55%" stop-color="#0F1D30"/>
      <stop offset="100%" stop-color="#060B13"/>
    </radialGradient>
    <linearGradient id="steelBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A5B6E"/>
      <stop offset="45%" stop-color="#2B394A"/>
      <stop offset="100%" stop-color="#141E2B"/>
    </linearGradient>
    <linearGradient id="steelLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8FA3B8"/>
      <stop offset="50%" stop-color="#52657A"/>
      <stop offset="100%" stop-color="#293646"/>
    </linearGradient>
    <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1479D4"/>
      <stop offset="100%" stop-color="#20B8CE"/>
    </linearGradient>
    <linearGradient id="crimsonFire" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
    <linearGradient id="polyBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="60%" stop-color="#CBD5E1"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <filter id="dropShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="22" stdDeviation="20" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>

  <!-- Studio Background -->
  <rect width="1200" height="900" fill="url(#studioBg)"/>

  <!-- Subtle CAD Engineering Grid -->
  <g stroke="#20B8CE" stroke-opacity="0.07" stroke-width="1">
    <line x1="0" y1="150" x2="1200" y2="150"/>
    <line x1="0" y1="300" x2="1200" y2="300"/>
    <line x1="0" y1="450" x2="1200" y2="450"/>
    <line x1="0" y1="600" x2="1200" y2="600"/>
    <line x1="0" y1="740" x2="1200" y2="740"/>
    <line x1="200" y1="0" x2="200" y2="900"/>
    <line x1="400" y1="0" x2="400" y2="900"/>
    <line x1="600" y1="0" x2="600" y2="900"/>
    <line x1="800" y1="0" x2="800" y2="900"/>
    <line x1="1000" y1="0" x2="1000" y2="900"/>
  </g>

  <!-- Studio Floor Horizon & Shadow Ellipse -->
  <ellipse cx="600" cy="735" rx="340" ry="38" fill="#03060B" opacity="0.75"/>

  <!-- Top Engineering Header Badge -->
  <g transform="translate(56, 46)">
    <rect width="290" height="34" rx="6" fill="#10243A" stroke="#20B8CE" stroke-opacity="0.45"/>
    <circle cx="18" cy="17" r="5" fill="#20B8CE"/>
    <text x="34" y="22" fill="#EEF3F7" font-family="Arial, sans-serif" font-size="12" font-weight="bold" letter-spacing="1.5">${category}</text>
  </g>
  <text x="1144" y="68" text-anchor="end" fill="#20B8CE" font-family="Courier New, monospace" font-size="14" font-weight="bold">MODEL: ${model}</text>

  <!-- Main Equipment Studio Render -->
  <g filter="url(#dropShadow)">
    ${artworkSvg}
  </g>

  <!-- Bottom Specification Plate -->
  <g transform="translate(56, 785)">
    <rect width="1088" height="72" rx="10" fill="#0A1422" fill-opacity="0.9" stroke="#1E3A5F"/>
    <rect x="0" y="0" width="6" height="72" rx="3" fill="url(#cyanAccent)"/>
    <text x="26" y="30" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="20" font-weight="bold">${title}</text>
    <text x="26" y="54" fill="#94A3B8" font-family="Arial, sans-serif" font-size="14">${specLine}</text>
    <text x="1064" y="42" text-anchor="end" fill="#20B8CE" font-family="Courier New, monospace" font-size="13" font-weight="bold">VENTAXIS ENGINEERED SPEC</text>
  </g>
</svg>`;
}

const renders = [
  {
    file: 'prod-pedestal-750.png',
    title: 'StormBreeze 750mm High-Velocity Pedestal Fan',
    model: 'VAX-SB-750-P',
    category: 'AIR MOVEMENT • PEDESTAL',
    specLine: '18,500 m³/h • 750mm Blade • 18kg Cast-Iron Base • 1.5m–2.0m Telescopic Column',
    artworkSvg: `
      <!-- Weighted 18kg Cast-Iron Base -->
      <ellipse cx="600" cy="715" rx="155" ry="26" fill="url(#steelBody)" stroke="#64748B" stroke-width="2"/>
      <ellipse cx="600" cy="708" rx="135" ry="18" fill="#1E293B"/>
      <!-- Telescopic Vertical Post -->
      <rect x="586" y="450" width="28" height="260" rx="6" fill="url(#steelBody)" stroke="#64748B"/>
      <rect x="591" y="310" width="18" height="160" fill="url(#steelLight)"/>
      <!-- Height Lock Collar -->
      <rect x="580" y="445" width="40" height="22" rx="4" fill="#1479D4"/>
      <circle cx="630" cy="456" r="8" fill="#20B8CE"/>
      <!-- 750mm Circular Fan Head & 3 Aerofoil Blades -->
      <circle cx="600" cy="275" r="165" fill="#0B1523" fill-opacity="0.7" stroke="url(#steelLight)" stroke-width="8"/>
      <!-- 3 Metallic Blades -->
      <path d="M600 275 C575 190, 565 130, 600 125 C635 130, 625 190, 600 275 Z" fill="url(#steelLight)"/>
      <path d="M600 275 C685 310, 735 345, 725 375 C695 395, 645 345, 600 275 Z" fill="url(#steelLight)"/>
      <path d="M600 275 C555 345, 505 395, 475 375 C465 345, 515 310, 600 275 Z" fill="url(#steelLight)"/>
      <!-- Concentric Wire Finger Guard -->
      <circle cx="600" cy="275" r="140" stroke="#94A3B8" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="600" cy="275" r="110" stroke="#94A3B8" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="600" cy="275" r="80" stroke="#94A3B8" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="600" cy="275" r="50" stroke="#94A3B8" stroke-opacity="0.45" stroke-width="1.5"/>
      <line x1="435" y1="275" x2="765" y2="275" stroke="#94A3B8" stroke-opacity="0.4" stroke-width="1.5"/>
      <line x1="600" y1="110" x2="600" y2="440" stroke="#94A3B8" stroke-opacity="0.4" stroke-width="1.5"/>
      <!-- Center Hub -->
      <circle cx="600" cy="275" r="28" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="2.5"/>
      <text x="600" y="279" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="10" font-weight="bold">VAX</text>
    `,
  },
  {
    file: 'prod-mobile-1100.png',
    title: 'RollStorm 1100mm Mobile Man-Cooler Air Cannon',
    model: 'VAX-RS-1100-MOB',
    category: 'AIR MOVEMENT • MOBILE MAN-COOLER',
    specLine: '36,500 m³/h • 35m Air Throw • 1.1kW 380V 3-Phase • All-Terrain Pneumatic Wheels',
    artworkSvg: `
      <!-- Heavy Rectangular Mobile Chassis & Pneumatic Wheels -->
      <rect x="330" y="640" width="540" height="28" rx="6" fill="url(#steelBody)" stroke="#64748B" stroke-width="2"/>
      <!-- Side Support Uprights -->
      <path d="M370 640 L410 380 H435 L405 640 Z" fill="url(#steelBody)" stroke="#64748B"/>
      <path d="M830 640 L790 380 H765 L795 640 Z" fill="url(#steelBody)" stroke="#64748B"/>
      <!-- All-Terrain Pneumatic Wheels -->
      <circle cx="390" cy="685" r="54" fill="#0F172A" stroke="#475569" stroke-width="8"/>
      <circle cx="390" cy="685" r="22" fill="#1479D4"/>
      <circle cx="810" cy="685" r="54" fill="#0F172A" stroke="#475569" stroke-width="8"/>
      <circle cx="810" cy="685" r="22" fill="#1479D4"/>
      <!-- 1100mm Venturi Barrel Drum -->
      <circle cx="600" cy="390" r="215" fill="#091320" stroke="url(#steelBody)" stroke-width="26"/>
      <circle cx="600" cy="390" r="195" stroke="#20B8CE" stroke-width="2" stroke-opacity="0.6"/>
      <!-- 6 High-Velocity Impeller Blades -->
      <g transform="translate(600,390)">
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)"/>
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)" transform="rotate(60)"/>
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)" transform="rotate(120)"/>
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)" transform="rotate(180)"/>
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)" transform="rotate(240)"/>
        <path d="M0 0 L-28 -175 L28 -175 Z" fill="url(#steelLight)" transform="rotate(300)"/>
      </g>
      <!-- Protective Mesh Grille -->
      <circle cx="600" cy="390" r="150" stroke="#94A3B8" stroke-opacity="0.35" stroke-width="2"/>
      <circle cx="600" cy="390" r="95" stroke="#94A3B8" stroke-opacity="0.35" stroke-width="2"/>
      <circle cx="600" cy="390" r="46" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="3"/>
      <!-- Integral DOL Starter & Lockable Isolator Box -->
      <rect x="815" y="455" width="68" height="96" rx="6" fill="#1E293B" stroke="#20B8CE" stroke-width="2"/>
      <circle cx="849" cy="488" r="12" fill="#EF4444"/>
      <rect x="833" y="515" width="32" height="18" rx="3" fill="#20B8CE"/>
    `,
  },
  {
    file: 'prod-axial-630.png',
    title: 'CylindroAxial 630mm Direct-Drive In-Wall Axial Fan',
    model: 'VAX-AX-630-4D',
    category: 'INDUSTRIAL VENTILATION • AXIAL FLOW',
    specLine: '16,200 m³/h @ 120 Pa • 630mm Flanged Casing • IP55 380V 3-Phase',
    artworkSvg: `
      <!-- Double-Flanged Cylindrical Steel Casing -->
      <ellipse cx="600" cy="420" rx="235" ry="235" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Bolt Hole Ring -->
      <circle cx="600" cy="420" r="218" stroke="#20B8CE" stroke-width="1.5" stroke-dasharray="8 18"/>
      <!-- Inner Cylindrical Throat -->
      <circle cx="600" cy="420" r="190" fill="#08111E" stroke="url(#steelLight)" stroke-width="10"/>
      <!-- 6 Serrated Aerofoil Blades -->
      <g transform="translate(600,420)">
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1"/>
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1" transform="rotate(60)"/>
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1" transform="rotate(120)"/>
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1" transform="rotate(180)"/>
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1" transform="rotate(240)"/>
        <path d="M0 -35 C-35 -95, -45 -165, 10 -178 C45 -160, 38 -95, 12 -35 Z" fill="url(#steelLight)" stroke="#CBD5E1" stroke-width="1" transform="rotate(300)"/>
      </g>
      <!-- Motor Struts & Die-Cast Hub -->
      <line x1="600" y1="230" x2="600" y2="610" stroke="#64748B" stroke-width="8"/>
      <line x1="410" y1="420" x2="790" y2="420" stroke="#64748B" stroke-width="8"/>
      <circle cx="600" cy="420" r="56" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="3"/>
      <!-- External IP65 Terminal Box on Top of Casing -->
      <rect x="555" y="140" width="90" height="46" rx="6" fill="#1479D4" stroke="#EEF3F7" stroke-width="2"/>
    `,
  },
  {
    file: 'prod-centri-500.png',
    title: 'CentriForce Backward-Curved Centrifugal Fan',
    model: 'VAX-CF-500-BC',
    category: 'INDUSTRIAL VENTILATION • CENTRIFUGAL',
    specLine: '11,400 m³/h @ 950 Pa High Static • 4.0kW 3-Phase • ISO 1940 G2.5 Impeller',
    artworkSvg: `
      <!-- Heavy Base Frame & Pedestal -->
      <rect x="330" y="655" width="540" height="36" rx="6" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="2"/>
      <polygon points="410,655 480,460 720,460 790,655" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
      <!-- Spiral Volute Scroll Housing (Snail Shell) -->
      <path d="M380 420 C380 240, 520 155, 665 180 L835 180 L835 350 L765 350 C775 510, 660 615, 515 600 C420 590, 380 510, 380 420 Z" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Rectangular Discharge Flange -->
      <rect x="825" y="165" width="24" height="200" rx="4" fill="url(#steelLight)" stroke="#20B8CE" stroke-width="2"/>
      <!-- Circular Suction Inlet Cone & Backward-Curved Blades -->
      <circle cx="575" cy="405" r="135" fill="#091322" stroke="url(#steelLight)" stroke-width="12"/>
      <circle cx="575" cy="405" r="152" stroke="#20B8CE" stroke-width="2" stroke-dasharray="6 14"/>
      <g transform="translate(575,405)" stroke="#94A3B8" stroke-width="5" fill="none">
        <path d="M0 -38 Q45 -75, 95 -95"/>
        <path d="M38 0 Q75 45, 95 95"/>
        <path d="M0 38 Q-45 75, -95 95"/>
        <path d="M-38 0 Q-75 -45, -95 -95"/>
        <path d="M26 -26 Q80 -10, 115 20"/>
        <path d="M-26 26 Q-80 10, -115 -20"/>
      </g>
      <circle cx="575" cy="405" r="42" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
    `,
  },
  {
    file: 'prod-inline-315.png',
    title: 'DuctMaster 315mm Mixed-Flow Inline Duct Fan',
    model: 'VAX-DM-315-MF',
    category: 'INDUSTRIAL VENTILATION • INLINE DUCT',
    specLine: '2,350 m³/h @ 280 Pa • 315mm Spigots • Low-Breakout 48 dB(A) • Swing-Out Service Core',
    artworkSvg: `
      <!-- Mounting Foot Bracket -->
      <rect x="420" y="575" width="360" height="26" rx="5" fill="url(#steelBody)" stroke="#64748B"/>
      <rect x="460" y="510" width="280" height="65" fill="#1E293B"/>
      <!-- Left 315mm Spigot Collar -->
      <rect x="250" y="340" width="95" height="170" rx="8" fill="url(#steelLight)" stroke="#94A3B8" stroke-width="2"/>
      <!-- Left Tapered Cone -->
      <polygon points="345,340 435,280 435,570 345,510" fill="url(#steelBody)" stroke="#64748B" stroke-width="2"/>
      <!-- Central Swing-Out Mixed-Flow Drum -->
      <rect x="435" y="280" width="330" height="290" rx="14" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="3"/>
      <!-- Quick-Release Swing Clamps -->
      <rect x="422" y="320" width="26" height="20" rx="4" fill="#20B8CE"/>
      <rect x="422" y="510" width="26" height="20" rx="4" fill="#20B8CE"/>
      <rect x="752" y="320" width="26" height="20" rx="4" fill="#20B8CE"/>
      <rect x="752" y="510" width="26" height="20" rx="4" fill="#20B8CE"/>
      <!-- Right Tapered Cone -->
      <polygon points="765,280 855,340 855,510 765,570" fill="url(#steelBody)" stroke="#64748B" stroke-width="2"/>
      <!-- Right 315mm Spigot Collar -->
      <rect x="855" y="340" width="95" height="170" rx="8" fill="url(#steelLight)" stroke="#94A3B8" stroke-width="2"/>
      <!-- Top 2-Speed Terminal Box -->
      <rect x="545" y="230" width="110" height="50" rx="6" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Airflow Direction Arrow on Casing -->
      <path d="M530 425 H650 L630 405 M650 425 L630 445" stroke="#20B8CE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  },
  {
    file: 'prod-roof-800.png',
    title: 'AeroTop 800mm UV-Stabilised Roof Cowl Extractor',
    model: 'VAX-AT-800-VD',
    category: 'INDUSTRIAL VENTILATION • ROOF EXTRACTOR',
    specLine: '24,500 m³/h • 800mm Throat • UV-Stabilised FRP Cowl • Gravity Backdraft Shutters',
    artworkSvg: `
      <!-- Corrugated Roof Curb Soaker Flange Base -->
      <polygon points="270,665 340,595 860,595 930,665" fill="url(#steelLight)" stroke="#94A3B8" stroke-width="3"/>
      <rect x="380" y="450" width="440" height="145" fill="url(#steelBody)" stroke="#64748B" stroke-width="2"/>
      <!-- Gravity Backdraft Louver Shutters -->
      <line x1="410" y1="485" x2="790" y2="485" stroke="#20B8CE" stroke-width="3"/>
      <line x1="410" y1="520" x2="790" y2="520" stroke="#20B8CE" stroke-width="3"/>
      <line x1="410" y1="555" x2="790" y2="555" stroke="#20B8CE" stroke-width="3"/>
      <!-- Aerodynamic Mushroom FRP Weather Cowl Dome -->
      <path d="M250 445 C260 250, 420 185, 600 185 C780 185, 940 250, 950 445 C820 465, 380 465, 250 445 Z" fill="url(#polyBody)" stroke="#94A3B8" stroke-width="4"/>
      <path d="M290 420 C350 285, 470 235, 600 235 C730 235, 850 285, 910 420" stroke="#1479D4" stroke-width="3" fill="none" opacity="0.6"/>
      <!-- Curb-Mounted IP66 Lockable Isolator -->
      <rect x="745" y="510" width="48" height="62" rx="5" fill="#1E293B" stroke="#EF4444" stroke-width="2"/>
      <circle cx="769" cy="541" r="10" fill="#EF4444"/>
    `,
  },
  {
    file: 'prod-blower-turbo.png',
    title: 'TurboVane Positive Pressure Industrial Utility Blower',
    model: 'VAX-TV-400-UB',
    category: 'INDUSTRIAL VENTILATION • UTILITY BLOWER',
    specLine: '6,200 m³/h @ 650 Pa • 2.2kW 3-Phase • Protective Roll-Cage & Quick-Clamp Spigots',
    artworkSvg: `
      <!-- Tubular Steel Roll-Cage Frame -->
      <rect x="310" y="210" width="580" height="475" rx="22" stroke="#20B8CE" stroke-width="12" fill="none"/>
      <line x1="310" y1="640" x2="890" y2="640" stroke="#64748B" stroke-width="14"/>
      <!-- Centrifugal Scroll Inside Roll-Cage -->
      <circle cx="560" cy="450" r="165" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="4"/>
      <rect x="560" y="255" width="240" height="125" rx="8" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Quick-Clamp Suction Spigot & Guard -->
      <circle cx="560" cy="450" r="105" fill="#091322" stroke="#20B8CE" stroke-width="5"/>
      <circle cx="560" cy="450" r="75" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="560" cy="450" r="45" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="560" cy="450" r="20" fill="#1479D4"/>
      <!-- DOL Starter with Emergency Stop -->
      <rect x="350" y="265" width="80" height="105" rx="6" fill="#1E293B" stroke="#94A3B8" stroke-width="2"/>
      <circle cx="390" cy="305" r="14" fill="#EF4444" stroke="#FDE047" stroke-width="3"/>
    `,
  },
  {
    file: 'prod-evap-18000.png',
    title: 'AquaBreeze 18,000 m³/h Industrial Evaporative Cooler',
    model: 'VAX-AB-18K-DD',
    category: 'SPECIALIST SYSTEMS • EVAPORATIVE COOLER',
    specLine: '18,000 m³/h • Munters CELdek 5090 Pads • Inverter DC Drive • Auto-Clean Sump',
    artworkSvg: `
      <!-- Bottom Roof Duct Dropper -->
      <rect x="450" y="590" width="300" height="115" fill="url(#steelBody)" stroke="#64748B" stroke-width="3"/>
      <!-- Drain & Water Feed Pipes -->
      <line x1="420" y1="590" x2="420" y2="690" stroke="#20B8CE" stroke-width="8"/>
      <!-- UV Polymer Main Cube Cabinet (1100x1100mm) -->
      <rect x="320" y="210" width="560" height="385" rx="16" fill="url(#polyBody)" stroke="#94A3B8" stroke-width="4"/>
      <!-- Top Weather Lid -->
      <polygon points="300,215 350,175 850,175 900,215" fill="#64748B" stroke="#94A3B8" stroke-width="2"/>
      <!-- Louvered CELdek Intake Panels (Left & Right Bays) -->
      <rect x="360" y="250" width="215" height="305" rx="6" fill="#1E293B" stroke="#1479D4" stroke-width="2"/>
      <rect x="625" y="250" width="215" height="305" rx="6" fill="#1E293B" stroke="#1479D4" stroke-width="2"/>
      <!-- Honeycomb Louver Lines -->
      <g stroke="#20B8CE" stroke-opacity="0.55" stroke-width="2">
        <line x1="375" y1="280" x2="560" y2="280"/><line x1="640" y1="280" x2="825" y2="280"/>
        <line x1="375" y1="315" x2="560" y2="315"/><line x1="640" y1="315" x2="825" y2="315"/>
        <line x1="375" y1="350" x2="560" y2="350"/><line x1="640" y1="350" x2="825" y2="350"/>
        <line x1="375" y1="385" x2="560" y2="385"/><line x1="640" y1="385" x2="825" y2="385"/>
        <line x1="375" y1="420" x2="560" y2="420"/><line x1="640" y1="420" x2="825" y2="420"/>
        <line x1="375" y1="455" x2="560" y2="455"/><line x1="640" y1="455" x2="825" y2="455"/>
        <line x1="375" y1="490" x2="560" y2="490"/><line x1="640" y1="490" x2="825" y2="490"/>
        <line x1="375" y1="525" x2="560" y2="525"/><line x1="640" y1="525" x2="825" y2="525"/>
      </g>
      <!-- Center Brand Badge -->
      <rect x="550" y="365" width="100" height="50" rx="6" fill="#10243A" stroke="#20B8CE" stroke-width="2"/>
      <text x="600" y="395" text-anchor="middle" fill="#20B8CE" font-family="Arial" font-size="13" font-weight="bold">AQUABREEZE</text>
    `,
  },
  {
    file: 'prod-smoke-400.png',
    title: 'PyroGuard 400°C / 2h Certified Smoke Spill Axial Fan',
    model: 'VAX-PG-800-F400',
    category: 'SPECIALIST SYSTEMS • EN 12101-3 SMOKE EXTRACTION',
    specLine: '32,000 m³/h @ 250 Pa • F400 (400°C / 120 Min) • 5.5kW Class-H Fire-Rated Motor',
    artworkSvg: `
      <!-- Heavy Hot-Dip Galvanized Flanged Drum with Crimson Fire Band -->
      <circle cx="600" cy="430" r="240" fill="url(#steelLight)" stroke="#DC2626" stroke-width="10"/>
      <circle cx="600" cy="430" r="222" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="10 14"/>
      <circle cx="600" cy="430" r="195" fill="#0B131E" stroke="url(#crimsonFire)" stroke-width="12"/>
      <!-- 8 Heat-Treated Aluminium Alloy Impeller Blades -->
      <g transform="translate(600,430)">
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(45)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(90)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(135)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(180)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(225)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(270)"/>
        <path d="M0 0 L-22 -180 L22 -180 Z" fill="url(#polyBody)" transform="rotate(315)"/>
      </g>
      <circle cx="600" cy="430" r="64" fill="url(#crimsonFire)" stroke="#F8FAFC" stroke-width="3"/>
      <text x="600" y="435" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="14" font-weight="bold">F400 2H</text>
      <!-- Fireman's Override PH120 Terminal Box -->
      <rect x="535" y="135" width="130" height="52" rx="6" fill="url(#crimsonFire)" stroke="#FCA5A5" stroke-width="2"/>
      <text x="600" y="166" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="11" font-weight="bold">EN 12101-3 PH120</text>
    `,
  },
  {
    file: 'prod-dust-cyclone.png',
    title: 'AeroCyclone Industrial Dust Extraction System',
    model: 'VAX-AC-5500-DEX',
    category: 'SPECIALIST SYSTEMS • CYCLONIC DUST EXTRACTION',
    specLine: '5,500 m³/h @ 2,400 Pa • Reverse Pulse-Jet PTFE Cartridges • 120L Collection Hopper',
    artworkSvg: `
      <!-- Structural Support Frame Legs -->
      <rect x="380" y="220" width="18" height="495" fill="url(#steelBody)"/>
      <rect x="802" y="220" width="18" height="495" fill="url(#steelBody)"/>
      <rect x="360" y="705" width="480" height="20" rx="4" fill="url(#steelLight)"/>
      <!-- Left Cyclonic Separator Cone & Cylinder -->
      <rect x="415" y="210" width="160" height="190" rx="8" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="2"/>
      <polygon points="415,400 575,400 520,575 470,575" fill="url(#steelLight)" stroke="#64748B" stroke-width="2"/>
      <!-- Bottom 120L Mobile Collection Bin -->
      <rect x="445" y="580" width="100" height="120" rx="6" fill="#1479D4" stroke="#EEF3F7" stroke-width="2"/>
      <!-- Right Reverse Pulse-Jet Filter Cartridge Housing -->
      <rect x="615" y="210" width="165" height="360" rx="8" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="3"/>
      <rect x="640" y="250" width="115" height="90" rx="4" fill="#0F172A" stroke="#20B8CE"/>
      <text x="697" y="300" text-anchor="middle" fill="#20B8CE" font-family="Courier New" font-size="12" font-weight="bold">PULSE-JET</text>
      <!-- Top High-Pressure Centrifugal Blower & Crossover Duct -->
      <rect x="465" y="145" width="260" height="45" rx="6" fill="url(#steelLight)"/>
      <circle cx="495" cy="165" r="42" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
    `,
  },
  {
    file: 'prod-fume-poly.png',
    title: 'ChemVent Anti-Corrosive Polypropylene Fume Blower',
    model: 'VAX-CV-315-PP',
    category: 'SPECIALIST SYSTEMS • CHEMICAL FUME EXTRACTION',
    specLine: '3,800 m³/h @ 450 Pa • 100% Solid Polypropylene Scroll • Viton Shaft Seal • SS316 Hardware',
    artworkSvg: `
      <!-- Epoxy-Coated Steel Pedestal Stand -->
      <rect x="370" y="645" width="460" height="32" rx="6" fill="url(#steelBody)"/>
      <polygon points="560,645 610,455 760,455 790,645" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
      <!-- One-Piece Moulded Solid Polypropylene Scroll Housing -->
      <path d="M370 410 C370 230, 505 155, 650 175 L805 175 L805 330 L740 330 C750 490, 640 595, 500 580 C410 570, 370 495, 370 410 Z" fill="url(#polyBody)" stroke="#94A3B8" stroke-width="5"/>
      <!-- 315mm Circular Polypropylene Suction Spigot -->
      <circle cx="555" cy="395" r="120" fill="#CBD5E1" stroke="#64748B" stroke-width="8"/>
      <circle cx="555" cy="395" r="88" fill="#0F172A" stroke="#20B8CE" stroke-width="4"/>
      <circle cx="555" cy="395" r="32" fill="url(#polyBody)"/>
      <!-- Acid/Chemical Resistance Badge -->
      <rect x="475" y="505" width="160" height="34" rx="6" fill="#0F172A" stroke="#20B8CE" stroke-width="2"/>
      <text x="555" y="527" text-anchor="middle" fill="#20B8CE" font-family="Arial" font-size="12" font-weight="bold">PP ACID-RESISTANT</text>
    `,
  },
  {
    file: 'prod-special-underground.png',
    title: 'AirPurge Confined Space Positive Pressure Skid Unit',
    model: 'VAX-AP-500-SKID',
    category: 'SPECIALIST SYSTEMS • CONFINED SPACE PURGE SKID',
    specLine: '8,900 m³/h @ 400 Pa • 500mm Duct Spigot • Forklift Skid Frame & Flexible Duct Cassette',
    artworkSvg: `
      <!-- Heavy-Duty Forklift Skid Base with Fork Pockets -->
      <rect x="260" y="635" width="680" height="48" rx="6" fill="url(#steelBody)" stroke="#94A3B8" stroke-width="3"/>
      <rect x="330" y="647" width="110" height="24" rx="3" fill="#060B13" stroke="#20B8CE" stroke-width="2"/>
      <rect x="760" y="647" width="110" height="24" rx="3" fill="#060B13" stroke="#20B8CE" stroke-width="2"/>
      <!-- Protective Skid Roll-Bar Frame -->
      <rect x="285" y="235" width="630" height="400" rx="16" stroke="url(#steelLight)" stroke-width="10" fill="none"/>
      <!-- High-Pressure Positive Purge Axial-Centrifugal Drum -->
      <rect x="330" y="310" width="270" height="260" rx="14" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="3"/>
      <!-- 500mm Flexible Purge Ducting Cassette Accordion -->
      <g fill="#1479D4" stroke="#EEF3F7" stroke-width="2">
        <rect x="600" y="330" width="42" height="220" rx="8"/>
        <rect x="646" y="330" width="42" height="220" rx="8"/>
        <rect x="692" y="330" width="42" height="220" rx="8"/>
        <rect x="738" y="330" width="42" height="220" rx="8"/>
        <rect x="784" y="330" width="42" height="220" rx="8"/>
      </g>
      <circle cx="465" cy="440" r="85" fill="#091322" stroke="#20B8CE" stroke-width="4"/>
      <circle cx="465" cy="440" r="30" fill="#1479D4"/>
    `,
  },
];

for (const item of renders) {
  const svgString = buildStudioSvg(item);
  const outPath = path.join(outDir, item.file);
  await sharp(Buffer.from(svgString)).png({ compressionLevel: 8 }).toFile(outPath);
}

console.log('Generated all product & studio images in public/images:', fs.readdirSync(outDir).length);

const extraRenders = [
  {
    file: 'ind-education.png',
    title: 'Education & Examination Hall Low-Acoustic Ventilation',
    model: 'DBE & SANS 10400-O',
    category: 'INDUSTRY VERTICAL • EDUCATION',
    specLine: 'Whisper-Quiet < 36 dB(A) HVLS & Commercial Ceiling Fans for Classrooms, Exam Halls & Lecture Theatres',
    artworkSvg: `
      <!-- High Pitched School Assembly Hall Roof Trusses -->
      <polygon points="180,220 600,130 1020,220" stroke="#64748B" stroke-width="5" fill="#0B1626"/>
      <line x1="180" y1="220" x2="1020" y2="220" stroke="#94A3B8" stroke-width="4"/>
      <!-- Suspended 4.9m Commercial HVLS Fan -->
      <rect x="594" y="135" width="12" height="105" fill="#20B8CE"/>
      <ellipse cx="600" cy="245" rx="340" ry="18" fill="url(#steelLight)" stroke="#20B8CE" stroke-width="2"/>
      <circle cx="600" cy="245" r="28" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Downward Laminar Airflow Streamlines (<36 dB) -->
      <g stroke="#20B8CE" stroke-width="2.5" stroke-dasharray="10 8" fill="none" opacity="0.75">
        <path d="M450 280 C430 390, 360 470, 290 540"/>
        <path d="M540 280 C530 400, 510 480, 480 555"/>
        <path d="M660 280 C670 400, 690 480, 720 555"/>
        <path d="M750 280 C770 390, 840 470, 910 540"/>
      </g>
      <!-- Examination Desks Grid -->
      <g fill="#1E293B" stroke="#475569" stroke-width="2">
        <rect x="260" y="585" width="120" height="45" rx="4"/><rect x="440" y="585" width="120" height="45" rx="4"/>
        <rect x="640" y="585" width="120" height="45" rx="4"/><rect x="820" y="585" width="120" height="45" rx="4"/>
        <rect x="260" y="655" width="120" height="45" rx="4"/><rect x="440" y="655" width="120" height="45" rx="4"/>
        <rect x="640" y="655" width="120" height="45" rx="4"/><rect x="820" y="655" width="120" height="45" rx="4"/>
      </g>
      <rect x="490" y="340" width="220" height="40" rx="20" fill="#10243A" stroke="#20B8CE" stroke-width="2"/>
      <text x="600" y="365" text-anchor="middle" fill="#20B8CE" font-family="Arial" font-size="14" font-weight="bold">ACOUSTIC RATING: 33.8 dB(A)</text>
    `,
  },
  {
    file: 'ind-healthcare.png',
    title: 'Healthcare & Outpatient Clinic Directional Air Turnover',
    model: 'DOH & WHO ALIGNED (>12 ACH)',
    category: 'INDUSTRY VERTICAL • HEALTHCARE',
    specLine: 'Anti-Microbial Ceiling Fans & Negative-Pressure Inline Extraction for Clinics, Wards & Pharmacies',
    artworkSvg: `
      <!-- Clinical Ward / Corridor Enclosure -->
      <rect x="200" y="170" width="800" height="520" rx="12" fill="#0B1829" stroke="#20B8CE" stroke-width="2"/>
      <!-- Top Fresh Air Make-Up & Anti-Bacterial Ceiling Fan -->
      <rect x="588" y="170" width="24" height="65" fill="url(#steelLight)"/>
      <ellipse cx="600" cy="240" rx="190" ry="14" fill="url(#polyBody)" stroke="#20B8CE" stroke-width="2"/>
      <!-- High-Level Negative Pressure Inline Extractor Duct -->
      <rect x="820" y="210" width="180" height="58" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="2"/>
      <text x="910" y="244" text-anchor="middle" fill="#20B8CE" font-family="Arial" font-size="11" font-weight="bold">HEPA EXHAUST</text>
      <!-- Directional Non-Turbulent Sweep Arrows -->
      <g stroke="#20B8CE" stroke-width="3" fill="none">
        <path d="M440 290 Q600 430, 810 250"/>
        <path d="M520 310 Q640 460, 810 265"/>
      </g>
      <!-- Medical Cross Badge -->
      <circle cx="340" cy="430" r="65" fill="#10243A" stroke="#20B8CE" stroke-width="3"/>
      <rect x="328" y="395" width="24" height="70" rx="3" fill="#20B8CE"/>
      <rect x="305" y="418" width="70" height="24" rx="3" fill="#20B8CE"/>
      <text x="600" y="615" text-anchor="middle" fill="#EEF3F7" font-family="Arial" font-size="18" font-weight="bold">12+ AIR CHANGES PER HOUR (ACH) • INFECTION CONTROL</text>
    `,
  },
  {
    file: 'ind-religious.png',
    title: 'Worship Sanctuary & Auditorium Whisper-Quiet Destratification',
    model: 'SANCTUARY HVLS (<38 dB)',
    category: 'INDUSTRY VERTICAL • RELIGIOUS INSTITUTIONS',
    specLine: 'Zero-Hum PMSM Direct-Drive HVLS Fans with DMX / BACnet Console Integration & Winter Heat Recovery',
    artworkSvg: `
      <!-- Tiered Sanctuary Arch Roof -->
      <path d="M180 320 Q600 110, 1020 320" stroke="#20B8CE" stroke-width="4" fill="none"/>
      <path d="M220 350 Q600 155, 980 350" stroke="#64748B" stroke-width="2" fill="none"/>
      <!-- Suspended 6.1m Sanctuary HVLS Fan -->
      <line x1="600" y1="215" x2="600" y2="305" stroke="#94A3B8" stroke-width="8"/>
      <ellipse cx="600" cy="310" rx="330" ry="18" fill="url(#steelBody)" stroke="#20B8CE" stroke-width="2.5"/>
      <circle cx="600" cy="310" r="28" fill="#1479D4"/>
      <!--Gentle Convection Loops -->
      <path d="M420 345 C310 430, 310 560, 460 590" stroke="#20B8CE" stroke-width="2.5" stroke-dasharray="8 8" fill="none"/>
      <path d="M780 345 C890 430, 890 560, 740 590" stroke="#20B8CE" stroke-width="2.5" stroke-dasharray="8 8" fill="none"/>
      <!-- Curved Auditorium Seating Tiers -->
      <path d="M290 610 Q600 685, 910 610" stroke="#94A3B8" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M340 655 Q600 715, 860 655" stroke="#64748B" stroke-width="12" fill="none" stroke-linecap="round"/>
      <rect x="440" y="435" width="320" height="44" rx="22" fill="#10243A" stroke="#20B8CE" stroke-width="2"/>
      <text x="600" y="462" text-anchor="middle" fill="#EEF3F7" font-family="Arial" font-size="13" font-weight="bold">ZERO 50Hz PA / MICROPHONE HUM</text>
    `,
  },
  {
    file: 'before-thermal-stagnant.png',
    title: 'BEFORE: Unventilated Thermal Stratification & Stagnant Heat Pocket',
    model: 'BASELINE THERMAL AUDIT (42.4°C ROOF)',
    category: 'THERMAL ANALYSIS • BEFORE VENTAXIS',
    specLine: '14.5°C Roof-to-Floor Temperature Differential • Stagnant Fumes • 1.2 ACH • High Worker Fatigue',
    artworkSvg: `
      <!-- Warehouse Cross Section -->
      <polygon points="180,260 600,150 1020,260 1020,690 180,690" fill="#140C10" stroke="#EF4444" stroke-width="3"/>
      <!-- Extreme Red/Orange Heat Stratification Layer at Roof Apex -->
      <polygon points="190,260 600,155 1010,260 1010,410 190,410" fill="url(#crimsonFire)" opacity="0.72"/>
      <rect x="190" y="410" width="820" height="130" fill="#EA580C" opacity="0.38"/>
      <!-- Temperature Callout Badges -->
      <rect x="460" y="220" width="280" height="46" rx="8" fill="#7F1D1D" stroke="#FCA5A5" stroke-width="2"/>
      <text x="600" y="249" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="16" font-weight="bold">ROOF APEX: 42.4°C (TRAPPED)</text>
      <rect x="450" y="445" width="300" height="44" rx="8" fill="#9A3412" stroke="#FDBA74" stroke-width="2"/>
      <text x="600" y="473" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="15" font-weight="bold">RACKING ZONE: 38.6°C STAGNANT</text>
      <rect x="440" y="605" width="320" height="44" rx="8" fill="#1E293B" stroke="#EF4444" stroke-width="2"/>
      <text x="600" y="633" text-anchor="middle" fill="#FCA5A5" font-family="Arial" font-size="14" font-weight="bold">FLOOR PICKING ZONE: 1.2 ACH • STIFLING</text>
    `,
  },
  {
    file: 'after-ventaxis-airflow.png',
    title: 'AFTER: VentAxis HVLS Destratification & Roof Cowl Extraction',
    model: 'COMMISSIONED SYSTEM (-6.2°C EFFECT)',
    category: 'THERMAL ANALYSIS • AFTER VENTAXIS',
    specLine: 'Homogenized 1.8°C Differential • 888,000 m³/h HVLS Sweep • 6.5 ACH • SANS 10142-1 CoC',
    artworkSvg: `
      <!-- Cool Homogenized Warehouse Cross Section -->
      <polygon points="180,260 600,150 1020,260 1020,690 180,690" fill="#081C2E" stroke="#20B8CE" stroke-width="3"/>
      <!-- AeroTop Roof Cowl Extractor at Ridge -->
      <rect x="565" y="105" width="70" height="45" rx="6" fill="url(#polyBody)" stroke="#20B8CE" stroke-width="2"/>
      <!-- 7.3m AeroVortex HVLS Fan Mounted Under Ridge -->
      <rect x="594" y="155" width="12" height="90" fill="#20B8CE"/>
      <ellipse cx="600" cy="250" rx="340" ry="18" fill="url(#steelLight)" stroke="#20B8CE" stroke-width="2.5"/>
      <circle cx="600" cy="250" r="26" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Full-Floor Cyan Laminar Airflow Circulation Loops -->
      <g stroke="#20B8CE" stroke-width="3.5" stroke-dasharray="12 8" fill="none">
        <path d="M520 280 L480 610 L230 610 L230 360"/>
        <path d="M680 280 L720 610 L970 610 L970 360"/>
      </g>
      <!-- Temperature Callout Badges -->
      <rect x="440" y="330" width="320" height="46" rx="8" fill="#10243A" stroke="#20B8CE" stroke-width="2"/>
      <text x="600" y="359" text-anchor="middle" fill="#20B8CE" font-family="Arial" font-size="15" font-weight="bold">UNIFORM ENVELOPE: 25.8°C EVEN</text>
      <rect x="420" y="545" width="360" height="48" rx="8" fill="#1479D4" stroke="#FFFFFF" stroke-width="2"/>
      <text x="600" y="575" text-anchor="middle" fill="#FFFFFF" font-family="Arial" font-size="15" font-weight="bold">FLOOR LEVEL: -5.8°C COOLING BREEZE</text>
    `,
  },
];

for (const item of extraRenders) {
  const svgString = buildStudioSvg(item);
  const outPath = path.join(outDir, item.file);
  await sharp(Buffer.from(svgString)).png({ compressionLevel: 8 }).toFile(outPath);
}

console.log('Total bespoke images in public/images:', fs.readdirSync(outDir).length);
