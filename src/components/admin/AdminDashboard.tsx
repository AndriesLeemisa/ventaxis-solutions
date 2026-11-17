import React, { useState, useEffect } from 'react';
import {
  fetchEnquiries,
  fetchQuotations,
  fetchMaintenanceContracts,
  fetchAllProducts,
  updateEnquiryStatus,
  isSupabaseConfigured
} from '../../lib/supabase';
import { QuotationEnquiry, Quotation, MaintenanceContract, Product } from '../../types';
import { QuotationEditorModal } from './QuotationEditorModal';
import { getCompanyConfig, saveCompanyConfig } from '../../data/companyConfig';
import {
  Layers,
  Inbox,
  FileCheck,
  Package,
  Wrench,
  Settings,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  Edit,
  ExternalLink,
  LogOut,
  RefreshCw,
  Building2,
  DollarSign,
  Calendar,
  FileText
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onClose }) => {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'quotations' | 'products' | 'contracts' | 'settings'>('enquiries');

  const [enquiries, setEnquiries] = useState<QuotationEnquiry[]>([]);
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [contracts, setContracts] = useState<MaintenanceContract[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Quote builder modal state
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [activeQuoteEnquiry, setActiveQuoteEnquiry] = useState<QuotationEnquiry | null>(null);
  const [activeExistingQuote, setActiveExistingQuote] = useState<Quotation | null>(null);

  // Company Settings Form State
  const [companyConfigState, setCompanyConfigState] = useState(getCompanyConfig());
  const [settingsSavedMessage, setSettingsSavedMessage] = useState<boolean>(false);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [enqs, quotes, contrs, prods] = await Promise.all([
        fetchEnquiries(),
        fetchQuotations(),
        fetchMaintenanceContracts(),
        fetchAllProducts()
      ]);
      setEnquiries(enqs);
      setQuotations(quotes);
      setContracts(contrs);
      setProducts(prods);
    } catch (e) {
      console.error('Failed to load admin data', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleStatusChange = async (enquiryId: string, newStatus: QuotationEnquiry['status']) => {
    await updateEnquiryStatus(enquiryId, newStatus);
    setEnquiries((prev) =>
      prev.map((e) => (e.id === enquiryId ? { ...e, status: newStatus } : e))
    );
  };

  const handleOpenQuoteBuilder = (enquiry?: QuotationEnquiry, quote?: Quotation) => {
    setActiveQuoteEnquiry(enquiry || null);
    setActiveExistingQuote(quote || null);
    setQuoteModalOpen(true);
  };

  const handleSaveCompanySettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveCompanyConfig(companyConfigState);
    setSettingsSavedMessage(true);
    setTimeout(() => setSettingsSavedMessage(false), 3000);
  };

  // Pipeline metrics
  const totalEnquiryCount = enquiries.length;
  const newLeadsCount = enquiries.filter((e) => e.status === 'NEW').length;
  const quotesIssuedCount = quotations.length;
  const totalPipelineZar = quotations.reduce((acc, q) => acc + q.totalZar, 0);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-100 text-[#10243A] overflow-hidden animate-fadeIn">
      {/* Top Admin Bar */}
      <header className="bg-[#10243A] text-white px-6 py-3.5 flex items-center justify-between border-b border-[#173250] shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1479D4] flex items-center justify-center font-['Manrope'] font-extrabold text-sm text-white">
            VA
          </div>
          <div>
            <h1 className="font-['Manrope'] font-bold text-base leading-tight">
              VentAxis Operations & ERP Portal
            </h1>
            <p className="text-[11px] text-[#20B8CE] font-mono flex items-center gap-2">
              <span>Gauteng Technical Services</span>
              <span>•</span>
              <span>
                Backend: {isSupabaseConfigured ? 'Supabase Connected' : 'Local Storage Engine (Active)'}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={loadAllData}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors cursor-pointer"
          >
            View Live Site
          </button>
          <button
            onClick={onLogout}
            className="p-2 rounded-lg bg-rose-600/80 hover:bg-rose-600 text-white transition-colors flex items-center gap-1 cursor-pointer"
            title="Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace (Sidebar + Content) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shrink-0 p-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase text-gray-400 px-3 mb-2">
              Management Modules
            </div>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'enquiries'
                  ? 'bg-[#10243A] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Inbox className="w-4 h-4 text-[#1479D4]" />
                <span>Enquiries & Leads</span>
              </div>
              {newLeadsCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#20B8CE] text-[#10243A]">
                  {newLeadsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('quotations')}
              className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'quotations'
                  ? 'bg-[#10243A] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-[#1479D4]" />
                <span>Quotations (BOQ)</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">
                {quotations.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('contracts')}
              className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'contracts'
                  ? 'bg-[#10243A] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-[#1479D4]" />
                <span>Maintenance SLAs</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">
                {contracts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-[#10243A] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Package className="w-4 h-4 text-[#1479D4]" />
                <span>Product Catalogue</span>
              </div>
              <span className="text-[11px] font-mono text-gray-400">
                {products.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full p-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-[#10243A] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Settings className="w-4 h-4 text-[#1479D4]" />
                <span>Company Config</span>
              </div>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            </button>
          </div>

          {/* Quick Metrics Widget in Sidebar */}
          <div className="p-3 bg-[#EEF3F7] rounded-xl border border-gray-200 text-xs space-y-2">
            <div className="font-['Manrope'] font-bold text-gray-700 uppercase tracking-wider text-[10px]">
              Active Gauteng Pipeline
            </div>
            <div className="text-base font-extrabold text-[#10243A] font-mono">
              R{totalPipelineZar.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="text-[11px] text-gray-500">
              {quotesIssuedCount} quotes issued • {totalEnquiryCount} active enquiries
            </div>
          </div>
        </aside>

        {/* Dynamic Content Pane */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: ENQUIRIES & LEADS */}
          {activeTab === 'enquiries' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-['Manrope'] font-bold text-xl text-[#10243A]">
                    Commercial Quotation Enquiries
                  </h2>
                  <p className="text-xs text-gray-500">
                    Received from institutional, commercial, and industrial facilities across Gauteng.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenQuoteBuilder()}
                    className="px-4 py-2 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Manual Quotation</span>
                  </button>
                </div>
              </div>

              {/* Enquiries Table */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#10243A] text-white text-[10px] font-mono uppercase">
                    <tr>
                      <th className="p-3.5">Ref / Date</th>
                      <th className="p-3.5">Client & Organisation</th>
                      <th className="p-3.5">Location & Scope</th>
                      <th className="p-3.5">Equipment / Size</th>
                      <th className="p-3.5">Status Workflow</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {enquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-gray-50/70 transition-colors">
                        <td className="p-3.5 whitespace-nowrap">
                          <div className="font-mono font-bold text-[#1479D4]">{enq.id}</div>
                          <div className="text-[11px] text-gray-400">
                            {enq.createdAt.split('T')[0]}
                          </div>
                        </td>

                        <td className="p-3.5">
                          <div className="font-bold text-[#10243A]">{enq.name}</div>
                          <div className="text-[11px] text-gray-500">{enq.organisation}</div>
                          <div className="text-[10px] text-gray-400 font-mono">{enq.telephone}</div>
                        </td>

                        <td className="p-3.5">
                          <div className="font-medium text-gray-800">{enq.city}</div>
                          <div className="text-[11px] text-gray-500">{enq.institutionType}</div>
                          <div className="text-[10px] text-gray-400 italic line-clamp-1">{enq.projectDescription}</div>
                        </td>

                        <td className="p-3.5">
                          <div className="font-semibold text-gray-700">
                            {enq.quantityEstimated} Units • {enq.estimatedBuildingSizeM2} m²
                          </div>
                          <div className="text-[11px] text-[#1479D4]">
                            {enq.selectedCategories.join(', ')}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            Ceiling: {enq.ceilingHeightM}m | CoC: {enq.electricalWorkRequired ? 'Required' : 'No'}
                          </div>
                        </td>

                        <td className="p-3.5">
                          <select
                            value={enq.status}
                            onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                            className={`p-1.5 rounded-lg text-[11px] font-bold border outline-none ${
                              enq.status === 'NEW'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : enq.status === 'QUALIFIED'
                                ? 'bg-blue-50 text-blue-800 border-blue-300'
                                : enq.status === 'SITE_ASSESSMENT_SCHEDULED'
                                ? 'bg-purple-50 text-purple-800 border-purple-300'
                                : enq.status === 'QUOTATION_ISSUED'
                                ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
                                : enq.status === 'APPROVED'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : 'bg-gray-100 text-gray-800 border-gray-300'
                            }`}
                          >
                            <option value="NEW">01. New Lead</option>
                            <option value="QUALIFIED">02. Qualified</option>
                            <option value="SITE_ASSESSMENT_SCHEDULED">03. Site Assessment</option>
                            <option value="QUOTATION_ISSUED">04. Quote Issued</option>
                            <option value="APPROVED">05. Approved</option>
                            <option value="IN_PROGRESS">06. Installing</option>
                            <option value="COMPLETED">07. Handover Complete</option>
                            <option value="CANCELLED">Cancelled</option>
                          </select>
                        </td>

                        <td className="p-3.5 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleOpenQuoteBuilder(enq)}
                            className="px-3 py-1.5 bg-[#1479D4] hover:bg-[#10243A] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1"
                          >
                            <FileCheck className="w-3.5 h-3.5" />
                            <span>Prepare Quote</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: QUOTATIONS LIST */}
          {activeTab === 'quotations' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-['Manrope'] font-bold text-xl text-[#10243A]">
                    Issued Quotations & BOQs
                  </h2>
                  <p className="text-xs text-gray-500">
                    Commercial costing schedules with 15% South African VAT and milestone breakdowns.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenQuoteBuilder()}
                  className="px-4 py-2 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Quotation</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quotations.map((q) => (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b pb-3 border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-base text-[#1479D4]">{q.id}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {q.status}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 font-mono">
                          Valid: {q.validUntilDate}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <h3 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                          {q.organisation}
                        </h3>
                        <p className="text-xs text-gray-600">
                          Attention: {q.customerName} • {q.projectLocation}
                        </p>
                      </div>

                      {/* Items list preview */}
                      <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5 text-xs">
                        <div className="text-[10px] font-mono text-gray-400 uppercase">
                          Scope of Work Items ({q.items.length}):
                        </div>
                        {q.items.slice(0, 3).map((it, idx) => (
                          <div key={idx} className="flex justify-between text-gray-700">
                            <span className="truncate max-w-[240px]">• {it.description}</span>
                            <span className="font-mono font-semibold">R{it.totalPriceZar.toLocaleString()}</span>
                          </div>
                        ))}
                        {q.items.length > 3 && (
                          <div className="text-[11px] text-gray-400 italic">
                            + {q.items.length - 3} more line items...
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Financial total footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase block">Total (Incl. 15% VAT)</span>
                        <span className="font-mono font-extrabold text-lg text-emerald-700">
                          R{q.totalZar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <button
                        onClick={() => handleOpenQuoteBuilder(undefined, q)}
                        className="px-3.5 py-2 bg-gray-100 hover:bg-[#10243A] hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit / Print</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MAINTENANCE AGREEMENTS */}
          {activeTab === 'contracts' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-['Manrope'] font-bold text-xl text-[#10243A]">
                  Active Maintenance Agreements (SLAs)
                </h2>
                <p className="text-xs text-gray-500">
                  Facilities under contractual servicing across Johannesburg, Ekurhuleni, and Pretoria.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.map((ct) => (
                  <div
                    key={ct.id}
                    className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-mono font-bold text-xs text-[#1479D4]">{ct.id}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1479D4]/15 text-[#1479D4]">
                        {ct.tier} Tier
                      </span>
                    </div>

                    <div>
                      <h4 className="font-['Manrope'] font-bold text-base text-[#10243A]">
                        {ct.organisation}
                      </h4>
                      <p className="text-xs text-gray-500">{ct.facilityLocation}</p>
                    </div>

                    <div className="p-3 bg-[#EEF3F7] rounded-xl text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Fan Units Covered:</span>
                        <span className="font-bold">{ct.fanUnitsCovered} Fans</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Inspection Cycle:</span>
                        <span className="font-semibold">{ct.inspectionFrequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Emergency Response:</span>
                        <span className="font-bold text-emerald-700">{ct.emergencySlaHours}-Hour SLA</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-gray-400 font-mono">
                      Renewal Due: {ct.renewalDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PRODUCT CATALOG MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-['Manrope'] font-bold text-xl text-[#10243A]">
                    Product Catalogue Database
                  </h2>
                  <p className="text-xs text-gray-500">
                    {products.length} technical equipment specifications loaded.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#10243A] text-white text-[10px] font-mono uppercase">
                    <tr>
                      <th className="p-3.5">Model / ID</th>
                      <th className="p-3.5">Product Name</th>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Airflow Capacity</th>
                      <th className="p-3.5">Power Spec</th>
                      <th className="p-3.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="p-3.5 font-mono text-gray-700">{p.model}</td>
                        <td className="p-3.5 font-bold text-[#10243A]">{p.name}</td>
                        <td className="p-3.5 text-[#1479D4] font-medium">{p.subCategory}</td>
                        <td className="p-3.5 font-mono text-xs">{p.airflowCapacity.split(' at ')[0]}</td>
                        <td className="p-3.5 font-mono text-[11px] text-gray-600">
                          {p.powerRequirements.motorKw}kW • {p.powerRequirements.voltage.split(' ')[0]}
                        </td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {p.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: COMPANY CONFIGURATION (Configurable Legal Entity & Registration) */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="font-['Manrope'] font-bold text-xl text-[#10243A]">
                  Company Legal & Registration Settings
                </h2>
                <p className="text-xs text-gray-500">
                  Update legal entity name, CIPC registration details, VAT numbers, and Gauteng depot addresses. Updates persist immediately across the entire website and quotation outputs.
                </p>
              </div>

              {settingsSavedMessage && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Company settings successfully saved and updated across all views!</span>
                </div>
              )}

              <form onSubmit={handleSaveCompanySettings} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 shadow-xs text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Brand Name (Trading As)
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.brandName}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, brandName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Legal Registered Company Name *
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.legalCompanyName}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, legalCompanyName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-bold text-[#1479D4]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      CIPC Company Registration Number
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.registrationNumber}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, registrationNumber: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      SARS VAT Registration Number
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.vatNumber}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, vatNumber: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-1">
                      Physical Head Office & Central Engineering Depot (Gauteng)
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.physicalAddress}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, physicalAddress: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Main Telephone Line
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.telephone}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, telephone: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      24/7 Breakdown Hotline
                    </label>
                    <input
                      type="text"
                      value={companyConfigState.emergencyHotline}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, emergencyHotline: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-mono text-rose-700 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      General Enquiries Email
                    </label>
                    <input
                      type="email"
                      value={companyConfigState.email}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                      Engineering Submissions Email
                    </label>
                    <input
                      type="email"
                      value={companyConfigState.technicalEmail}
                      onChange={(e) => setCompanyConfigState({ ...companyConfigState, technicalEmail: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-gray-200 text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Save & Apply Configuration
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>

      {/* Quotation Editor Modal */}
      <QuotationEditorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        enquiry={activeQuoteEnquiry}
        existingQuote={activeExistingQuote}
        onSaved={(newQuote) => {
          setQuotations((prev) => [newQuote, ...prev.filter((q) => q.id !== newQuote.id)]);
          if (activeQuoteEnquiry) {
            handleStatusChange(activeQuoteEnquiry.id, 'QUOTATION_ISSUED');
          }
        }}
      />
    </div>
  );
};
