# VENTAXIS SOLUTIONS
## Engineering Better Airflow – Commercial & Industrial Fan Solutions (Gauteng, South Africa)

VentAxis Solutions is an enterprise-grade web platform and commercial operations system for a commercial and industrial fan supply, installation, and maintenance contractor operating in Gauteng, South Africa.

---

### 1. Brand Identity & Design System
- **Brand Name**: VENTAXIS SOLUTIONS
- **Tagline**: Engineering Better Airflow.
- **Primary Market**: Gauteng, South Africa (City of Johannesburg, City of Ekurhuleni, City of Tshwane / Pretoria, Midrand & Vaal Triangle).
- **Positioning**: Professional engineering and installation contractor with full mechanical and electrical coordination (not merely an online fan retailer).
- **Corporate Color Tokens**:
  - Deep Navy: `#10243A`
  - Corporate Blue: `#1479D4`
  - Cyan Airflow: `#20B8CE`
  - Light Grey: `#EEF3F7`
  - Pure White: `#FFFFFF`
- **Typography**:
  - Headings: Manrope (Google Fonts)
  - Body: Inter (Google Fonts)
- **Emblem / Logo**: Geometric structural "V" incorporating three aerodynamic laminar airflow streamlines curving upward and outward.

---

### 2. Core Functional Modules

#### A. Searchable & Filterable Product Catalogue
Comprehensive technical catalogue covering:
1. **Air Movement**:
   - HVLS Ceiling Fans (3.6m to 7.3m large diameter PMSM direct-drive)
   - Commercial Ceiling Fans (1400mm heavy-duty steel)
   - Wall-Mounted Heavy-Duty Fans (750mm oscillating)
   - Pedestal Fans (adjustable height, 18kg weighted base)
   - Drum Fans (900mm heavy rolled-steel barrel)
   - Mobile Industrial Fans (1100mm high-throw man-coolers up to 35m)
2. **Industrial Ventilation**:
   - Axial Flow Fans (in-wall and cased direct-drive)
   - Centrifugal Fans (backward-curved high-static pressure)
   - Inline Duct Fans (mixed-flow HVAC boosters)
   - Roof Extractors (heavy-duty UV-stabilised fiberglass cowls)
   - Industrial Blowers (positive pressure utility blowers)
3. **Specialist Systems**:
   - Evaporative Coolers (18,000 m³/h Munters CELdek pads)
   - Smoke Extraction Fans (EN 12101-3 / SANS 400°C / 2-hour fire rated)
   - Dust Extraction Fans (reverse pulse-jet cyclonic separator systems)
   - Fume Extraction Systems (solid polypropylene chemical-resistant blowers)
   - Specialist Industrial Equipment (underground positive pressure purge skids)

Every product includes verified manufacturer data, airflow capacity (m³/h / CFM), dimensions, power supply (230V 1-phase vs 380V/400V 3-phase 50Hz RSA standard), installation considerations, applicable environments, and direct "Add to Quotation" CTA.

#### B. Installation Services & 7-Step Workflow
- Commercial, Industrial, Institutional, HVLS, Mechanical, Extraction, Upgrades, Electrical Coordination, and Maintenance.
- **7-Step Engineering Workflow**:
  `01. Site Assessment` → `02. Technical Evaluation` → `03. Equipment Selection` → `04. Quotation & Approval` → `05. Installation` → `06. Testing & Commissioning` → `07. Handover & Maintenance`.
- **Compliance & Safety**:
  - SANS 10142-1 (Wiring of Premises & Certificate of Compliance CoC)
  - OHSAct 85 of 1993 (Health & Safety in Workplaces)
  - SANS 10400-O (Building Environmental Hygiene & Ventilation)
  - Working at Heights (SAQA Unit Standard 229998 certified riggers).

#### C. Industries
Dedicated landing pages addressing specific environmental challenges and engineered solutions for:
- **Education**: Low-noise (<35 dB) air movement for classrooms, exam halls, and university libraries.
- **Healthcare**: Controlled directional air turnover for outpatient clinics and isolation wards.
- **Religious Institutions**: Sanctuary destratification without acoustic interference with sermon microphones.
- **Commercial**: Energy-saving hybrid cooling for shopping malls and retail atriums.
- **Industrial**: High-heat dispersal, welding fume extraction, and warehouse destratification.
- **Hospitality**: Outdoor dining mist-cooling and kitchen canopy exhaust systems.

#### D. Gauteng Service Area
- Direct coverage across **Johannesburg** (Sandton, Randburg, Roodepoort, Soweto, CBD, South), **Ekurhuleni** (Kempton Park, Boksburg, Germiston, Benoni, Alberton, Edenvale, Springs, Brakpan), **Pretoria / Tshwane** (CBD, East, North, Hatfield, Menlyn, Centurion), and **Other Nodes** (Midrand, Vereeniging, Vanderbijlpark).
- Local SEO targeting with verified response SLAs.
- Multi-provincial expansion architecture (Western Cape and KwaZulu-Natal roadmaps).

#### E. Commercial Quotation Wizard & POPIA Compliance
- Multi-step interactive commercial quoting wizard supporting multiple equipment categories in one request.
- Generates unique reference numbers (e.g. `VAX-2026-XXXX`).
- Mandatory Protection of Personal Information Act (POPIA No. 4 of 2013) consent.
- Immediate dual-storage in Supabase and persistent local database fallback.

#### F. Administration Dashboard & Quotation Engine
- **Full-featured ERP / Operations Portal**:
  - Lead qualification & status transitions (`New` → `Qualified` → `Site Assessment` → `Quotation Issued` → `Approved` → `Handover`).
  - Quotation Builder & Costing Engine: Equipment, Labour, Electrical CoC, Scaffolding/Cherry Picker, Logistics, automatic 15% South African VAT calculation, printable quotation output, and payment milestone scheduling.
  - Product catalogue management.
  - Annual Maintenance Agreement (SLA) tracking.
  - **Configurable Company Settings**: Live update of legal entity name, CIPC registration number, SARS VAT number, Gauteng depot address, and emergency telephone lines.

---

### 3. Supabase Database Setup

A complete PostgreSQL schema script is provided at `supabase/schema.sql`.

To link to your remote Supabase instance:
1. Create a project on [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in Supabase and paste the contents of `supabase/schema.sql`.
3. Create a `.env` file from `.env.example`:
```bash
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```
4. Run `npm run build` or `npm run dev`.

*Note: The platform features a reactive local storage database fallback, guaranteeing 100% full functionality even without remote Supabase credentials.*

---

### 4. Tech Stack & Commands

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + bespoke VentAxis color tokens
- **Icons**: Lucide React
- **Animations**: GSAP aerodynamic canvas & smooth CSS keyframes
- **Backend**: Supabase (`@supabase/supabase-js`) with offline dual-layer repository

#### Development:
```bash
npm.cmd run dev
```

#### Production Build:
```bash
npm.cmd run build
```

#### Preview:
```bash
npm.cmd run preview
```

---

### 5. Collaborator Onboarding: Inviting "mpho" to GitHub

To grant **mpho** collaborator access to this repository on GitHub:

1. **Push this repository to GitHub**:
   ```bash
   git remote add origin https://github.com/AndriesLeemisa/ventaxis-solutions.git
   git branch -M main
   git push -u origin main
   ```
2. **Invite mpho on GitHub**:
   - Navigate to the repository on GitHub: `https://github.com/AndriesLeemisa/ventaxis-solutions/settings/access`
   - Click **"Add people"**
   - Search for **mpho** (or Mpho's GitHub username / email address)
   - Click **"Add mpho to this repository"**
   - Mpho will receive an email invitation to collaborate with write access.
