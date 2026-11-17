-- =========================================================================
-- VENTAXIS SOLUTIONS - ENTERPRISE POSTGRESQL / SUPABASE DATABASE SCHEMA
-- Brand: VentAxis Solutions | Commercial & Industrial Fan Solutions (Gauteng)
-- =========================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "citext";

-- =========================================================================
-- 1. PRODUCT CATEGORIES & PRODUCTS
-- =========================================================================

CREATE TABLE IF NOT EXISTS product_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    parent_category VARCHAR(100), -- 'AIR MOVEMENT', 'INDUSTRIAL VENTILATION', 'SPECIALIST SYSTEMS'
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    sub_category VARCHAR(100) NOT NULL,
    tagline TEXT,
    description TEXT,
    images JSONB DEFAULT '[]'::jsonb,
    manufacturer VARCHAR(150),
    model VARCHAR(150),
    airflow_capacity VARCHAR(150),
    dimensions JSONB, -- { diameterOrWidth, depthOrHeight, weightKg }
    power_requirements JSONB, -- { voltage, frequency, motorKw, currentAmps }
    ip_rating VARCHAR(50),
    sound_level_db VARCHAR(50),
    installation_considerations JSONB DEFAULT '[]'::jsonb,
    applicable_environments JSONB DEFAULT '[]'::jsonb,
    compliance JSONB DEFAULT '[]'::jsonb,
    features JSONB DEFAULT '[]'::jsonb,
    status VARCHAR(50) DEFAULT 'Available',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 2. SUPPLIERS & INVENTORY
-- =========================================================================

CREATE TABLE IF NOT EXISTS suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(200) NOT NULL,
    contact_person VARCHAR(150),
    email CITEXT,
    telephone VARCHAR(50),
    physical_address TEXT,
    component_types JSONB DEFAULT '[]'::jsonb, -- ['PMSM Motors', 'Aerofoil Blades', 'Inverters', 'VSDs']
    payment_terms VARCHAR(100) DEFAULT '30 Days Net',
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 3. CUSTOMERS & INSTITUTIONS
-- =========================================================================

CREATE TABLE IF NOT EXISTS institutions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL, -- 'School', 'Hospital', 'Factory', 'Church', 'Retail Mall', 'Logistics Warehouse'
    province VARCHAR(100) DEFAULT 'Gauteng',
    city VARCHAR(100) NOT NULL,
    suburb VARCHAR(150),
    building_sqm NUMERIC(10, 2),
    ceiling_height_m NUMERIC(6, 2),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(150) NOT NULL,
    organisation VARCHAR(200),
    institution_id UUID REFERENCES institutions(id) ON DELETE SET NULL,
    email CITEXT NOT NULL,
    telephone VARCHAR(50) NOT NULL,
    job_title VARCHAR(100),
    popia_consent_timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 4. COMMERCIAL ENQUIRIES & LEADS
-- =========================================================================

CREATE TABLE IF NOT EXISTS enquiries (
    id VARCHAR(50) PRIMARY KEY, -- e.g. VAX-2026-1048
    created_at TIMESTAMPTZ DEFAULT NOW(),
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    name VARCHAR(150) NOT NULL,
    organisation VARCHAR(200) NOT NULL,
    email CITEXT NOT NULL,
    telephone VARCHAR(50) NOT NULL,
    job_title VARCHAR(100),
    province VARCHAR(100) DEFAULT 'Gauteng',
    city VARCHAR(150) NOT NULL,
    institution_type VARCHAR(100) NOT NULL,
    building_type VARCHAR(150),
    project_description TEXT NOT NULL,
    installation_location VARCHAR(200),
    selected_categories JSONB DEFAULT '[]'::jsonb,
    selected_products JSONB DEFAULT '[]'::jsonb,
    quantity_estimated INTEGER DEFAULT 1,
    estimated_building_size_m2 NUMERIC(10, 2),
    ceiling_height_m NUMERIC(6, 2),
    existing_ventilation VARCHAR(100),
    installation_type VARCHAR(100), -- 'New Installation', 'Replacement / Retrofit'
    required_date DATE,
    site_assessment_required BOOLEAN DEFAULT true,
    electrical_work_required BOOLEAN DEFAULT true,
    budget_range VARCHAR(100),
    popia_consent BOOLEAN DEFAULT true NOT NULL,
    status VARCHAR(50) DEFAULT 'NEW', -- NEW, QUALIFIED, SITE_ASSESSMENT_SCHEDULED, QUOTATION_ISSUED, APPROVED, IN_PROGRESS, COMPLETED, CANCELLED
    assigned_engineer VARCHAR(150),
    admin_notes TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 5. SITE ASSESSMENTS
-- =========================================================================

CREATE TABLE IF NOT EXISTS site_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enquiry_id VARCHAR(50) REFERENCES enquiries(id) ON DELETE CASCADE,
    scheduled_date TIMESTAMPTZ NOT NULL,
    assessing_engineer VARCHAR(150) NOT NULL,
    roof_truss_profile VARCHAR(150), -- 'I-Beam', 'Lattice Truss', 'Cast Concrete'
    safe_hanging_load_kg NUMERIC(8, 2),
    electrical_feed_available VARCHAR(100), -- '230V 1-Phase', '400V 3-Phase'
    measured_ceiling_height_m NUMERIC(6, 2),
    ambient_temperature_c NUMERIC(4, 1),
    target_air_changes_per_hour NUMERIC(6, 2),
    obstruction_notes TEXT,
    photographs JSONB DEFAULT '[]'::jsonb,
    status VARCHAR(50) DEFAULT 'Pending Review', -- Scheduled, Conducted, Approved for Quoting
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 6. QUOTATIONS & COMMERCIAL BILLS OF QUANTITIES
-- =========================================================================

CREATE TABLE IF NOT EXISTS quotations (
    id VARCHAR(50) PRIMARY KEY, -- e.g. QUO-2026-038
    enquiry_id VARCHAR(50) REFERENCES enquiries(id) ON DELETE SET NULL,
    enquiry_ref VARCHAR(50),
    customer_name VARCHAR(150) NOT NULL,
    organisation VARCHAR(200) NOT NULL,
    contact_email CITEXT NOT NULL,
    contact_phone VARCHAR(50) NOT NULL,
    project_location VARCHAR(255) NOT NULL,
    issue_date DATE DEFAULT CURRENT_DATE,
    valid_until_date DATE DEFAULT CURRENT_DATE + INTERVAL '30 days',
    status VARCHAR(50) DEFAULT 'DRAFT', -- DRAFT, ISSUED, APPROVED, DECLINED, INVOICED
    subtotal_zar NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    vat_rate NUMERIC(4, 2) NOT NULL DEFAULT 0.15, -- 15% South African VAT
    vat_amount_zar NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    total_zar NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    terms JSONB DEFAULT '[]'::jsonb,
    payment_milestones JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quotation_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    quotation_id VARCHAR(50) REFERENCES quotations(id) ON DELETE CASCADE,
    category VARCHAR(100) NOT NULL, -- Equipment, Installation Labour, Electrical & CoC, Scaffolding, Transport
    description TEXT NOT NULL,
    quantity NUMERIC(10, 2) NOT NULL DEFAULT 1,
    unit_price_zar NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    total_price_zar NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 7. PROJECTS & INSTALLATIONS TRACKING
-- =========================================================================

CREATE TABLE IF NOT EXISTS projects (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    quotation_id VARCHAR(50) REFERENCES quotations(id) ON DELETE SET NULL,
    client_type VARCHAR(100) NOT NULL, -- Schools, Healthcare, Industrial, Commercial, Religious institutions
    location VARCHAR(200) NOT NULL,
    initial_challenge TEXT,
    recommended_equipment JSONB DEFAULT '[]'::jsonb,
    installation_description TEXT,
    results JSONB DEFAULT '[]'::jsonb,
    completion_status VARCHAR(100) DEFAULT 'Completed & Certified',
    is_demonstration_content BOOLEAN DEFAULT false,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS installations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id VARCHAR(100) REFERENCES projects(id) ON DELETE CASCADE,
    enquiry_id VARCHAR(50) REFERENCES enquiries(id) ON DELETE SET NULL,
    lead_technician VARCHAR(150),
    installation_date DATE,
    mewp_scaffolding_provider VARCHAR(150),
    secondary_safety_cables_verified BOOLEAN DEFAULT true,
    laser_balancing_verified BOOLEAN DEFAULT true,
    anemometer_reading_achieved VARCHAR(100),
    coc_number VARCHAR(100), -- SANS 10142-1 CoC
    coc_issued_by VARCHAR(150),
    handover_signoff_date DATE,
    status VARCHAR(50) DEFAULT 'Scheduled', -- Scheduled, In-Progress, Commissioned, Handed-Over
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 8. MAINTENANCE AGREEMENTS & SLA
-- =========================================================================

CREATE TABLE IF NOT EXISTS maintenance_contracts (
    id VARCHAR(50) PRIMARY KEY, -- e.g. MC-2026-012
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    client_name VARCHAR(150) NOT NULL,
    organisation VARCHAR(200) NOT NULL,
    facility_location VARCHAR(255) NOT NULL,
    tier VARCHAR(50) NOT NULL, -- Silver, Gold, Platinum
    fan_units_covered INTEGER DEFAULT 1,
    inspection_frequency VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    renewal_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Active', -- Active, Review Due, Expired
    emergency_sla_hours INTEGER DEFAULT 24,
    annual_value_zar NUMERIC(10, 2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 9. UPLOADED DOCUMENTS & PLANS (POPIA Compliant Storage)
-- =========================================================================

CREATE TABLE IF NOT EXISTS uploaded_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enquiry_id VARCHAR(50) REFERENCES enquiries(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(100),
    file_size_bytes BIGINT,
    document_category VARCHAR(100) DEFAULT 'Building Plan', -- Building Plan, Structural Drawing, Photo, CoC Certificate
    uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- 10. ROW LEVEL SECURITY (RLS) & ACCESS CONTROL
-- =========================================================================

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_assessments ENABLE ROW LEVEL SECURITY;

-- Public can submit new enquiries (anon insert)
CREATE POLICY "Public can insert quotation enquiries"
    ON enquiries FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Authenticated admins can view and update all enquiries
CREATE POLICY "Admins have full access to enquiries"
    ON enquiries FOR ALL
    TO authenticated
    USING (true);

-- Products are publicly viewable
CREATE POLICY "Public read access to products"
    ON products FOR SELECT
    TO anon, authenticated
    USING (true);

-- Admins manage products
CREATE POLICY "Admins manage product catalog"
    ON products FOR ALL
    TO authenticated
    USING (true);

-- Quotations accessible to authenticated engineers and admins
CREATE POLICY "Admins manage quotations"
    ON quotations FOR ALL
    TO authenticated
    USING (true);

-- =========================================================================
-- SEED INITIAL SYSTEM DATA (Category Tree)
-- =========================================================================

INSERT INTO product_categories (name, parent_category, description)
VALUES
    ('HVLS ceiling fans', 'AIR MOVEMENT', 'High-volume low-speed large-diameter 3.6m to 7.3m commercial & industrial fans'),
    ('Commercial ceiling fans', 'AIR MOVEMENT', 'Heavy-duty 1400mm steel fans for schools, healthcare clinics and offices'),
    ('Wall-mounted fans', 'AIR MOVEMENT', 'High-velocity 750mm oscillating wall fans for workshops and congested floors'),
    ('Pedestal fans', 'AIR MOVEMENT', 'Mobile telescopic industrial fans with heavy cast-iron bases'),
    ('Drum fans', 'AIR MOVEMENT', 'Portable high-output rolled-steel barrel fans with transport wheels'),
    ('Mobile industrial fans', 'AIR MOVEMENT', 'Heavy air cannons for long-distance throw up to 35m in heavy industrial bays'),
    ('Axial flow fans', 'INDUSTRIAL VENTILATION', 'In-wall and cased direct-drive axial flow ventilation fans'),
    ('Centrifugal fans', 'INDUSTRIAL VENTILATION', 'High static pressure backward-curved blowers for ducted systems'),
    ('Inline duct fans', 'INDUSTRIAL VENTILATION', 'Mixed flow compact duct fans for HVAC booster and washroom extraction'),
    ('Roof extractors', 'INDUSTRIAL VENTILATION', 'UV-stabilised heavy duty weatherproof roof cowl extractors'),
    ('Industrial blowers', 'INDUSTRIAL VENTILATION', 'High-pressure positive air displacement blowers for confined spaces'),
    ('Evaporative coolers', 'SPECIALIST SYSTEMS', '100% fresh cool air evaporative cooling systems for factories'),
    ('Smoke extraction fans', 'SPECIALIST SYSTEMS', 'EN 12101-3 F400 400C/2h life safety smoke and heat exhaust fans'),
    ('Dust extraction fans', 'SPECIALIST SYSTEMS', 'Reverse pulse-jet cartridge and cyclonic airborne particulate extraction'),
    ('Fume extraction systems', 'SPECIALIST SYSTEMS', 'Polypropylene chemical and acid vapor extraction blowers'),
    ('Specialist industrial ventilation equipment', 'SPECIALIST SYSTEMS', 'Positive pressure purge skids for underground and confined spaces')
ON CONFLICT (name) DO NOTHING;
