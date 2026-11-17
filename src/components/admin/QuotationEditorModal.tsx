import React, { useState } from 'react';
import { Quotation, QuotationItem, QuotationEnquiry } from '../../types';
import { saveQuotation } from '../../lib/supabase';
import {
  X,
  Plus,
  Trash2,
  FileCheck,
  CheckCircle2,
  Printer,
  ShieldCheck,
  Calendar,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface QuotationEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiry?: QuotationEnquiry | null;
  existingQuote?: Quotation | null;
  onSaved: (quote: Quotation) => void;
}

export const QuotationEditorModal: React.FC<QuotationEditorModalProps> = ({
  isOpen,
  onClose,
  enquiry,
  existingQuote,
  onSaved,
}) => {
  const config = getCompanyConfig();

  const [customerName, setCustomerName] = useState(existingQuote?.customerName || enquiry?.name || '');
  const [organisation, setOrganisation] = useState(existingQuote?.organisation || enquiry?.organisation || '');
  const [contactEmail, setContactEmail] = useState(existingQuote?.contactEmail || enquiry?.email || '');
  const [contactPhone, setContactPhone] = useState(existingQuote?.contactPhone || enquiry?.telephone || '');
  const [projectLocation, setProjectLocation] = useState(
    existingQuote?.projectLocation || (enquiry ? `${enquiry.city}, ${enquiry.province}` : '')
  );

  const [items, setItems] = useState<QuotationItem[]>(
    existingQuote?.items || [
      {
        id: 'item-1',
        category: 'Equipment',
        description: 'VentAxis AeroVortex 7.3m Industrial HVLS Fan (PMSM Direct Drive 400V 3-Ph)',
        quantity: 2,
        unitPriceZar: 62500,
        totalPriceZar: 125000,
      },
      {
        id: 'item-2',
        category: 'Installation Labour',
        description: 'Structural I-Beam Clamping, Guy-Wire Turnbuckles & Certified Working-at-Heights Rigging',
        quantity: 1,
        unitPriceZar: 22000,
        totalPriceZar: 22000,
      },
      {
        id: 'item-3',
        category: 'Electrical & CoC',
        description: 'Sub-Distribution Board Supply, SWA Armoured Cabling, Lockable Rotary Isolators & SANS 10142-1 CoC',
        quantity: 1,
        unitPriceZar: 18500,
        totalPriceZar: 18500,
      },
      {
        id: 'item-4',
        category: 'Transport & Logistics',
        description: 'Heavy Flatbed Site Delivery & Logistics Handling (Gauteng Route)',
        quantity: 1,
        unitPriceZar: 4500,
        totalPriceZar: 4500,
      }
    ]
  );

  // New item draft inputs
  const [newCategory, setNewCategory] = useState<QuotationItem['category']>('Equipment');
  const [newDesc, setNewDesc] = useState('');
  const [newQty, setNewQty] = useState<number>(1);
  const [newUnitPrice, setNewUnitPrice] = useState<number>(5000);

  if (!isOpen) return null;

  // Real-time calculations with South African 15% VAT
  const subtotalZar = items.reduce((sum, item) => sum + item.totalPriceZar, 0);
  const vatRate = 0.15;
  const vatAmountZar = subtotalZar * vatRate;
  const totalZar = subtotalZar + vatAmountZar;

  const handleAddItem = () => {
    if (!newDesc.trim()) return;
    const itemTotal = newQty * newUnitPrice;
    const newItem: QuotationItem = {
      id: `item-${Date.now()}`,
      category: newCategory,
      description: newDesc,
      quantity: newQty,
      unitPriceZar: newUnitPrice,
      totalPriceZar: itemTotal,
    };
    setItems([...items, newItem]);
    setNewDesc('');
    setNewQty(1);
    setNewUnitPrice(5000);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSaveAndIssue = async () => {
    const randomId = Math.floor(100 + Math.random() * 900);
    const quoteId = existingQuote?.id || `QUO-2026-${randomId}`;

    const newQuotation: Quotation = {
      id: quoteId,
      enquiryId: enquiry?.id || 'DIRECT',
      enquiryRef: enquiry?.id || quoteId,
      customerName,
      organisation,
      contactEmail,
      contactPhone,
      projectLocation,
      issueDate: new Date().toISOString().split('T')[0],
      validUntilDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'ISSUED',
      items,
      subtotalZar,
      vatRate,
      vatAmountZar,
      totalZar,
      terms: [
        'Quote validity: 30 days from date of issue.',
        'SANS 10142-1 Certificate of Compliance (CoC) issued upon final testing.',
        'All PMSM motors carry a 5-year mechanical warranty.',
        'Payment terms: 50% deposit on order, 30% delivery to site, 20% on handover.'
      ],
      paymentMilestones: [
        { milestone: '50% Initial Commitment Deposit upon Order Confirmation', percentage: 50, amountZar: totalZar * 0.5 },
        { milestone: '30% Delivery of Equipment to Client Site', percentage: 30, amountZar: totalZar * 0.3 },
        { milestone: '20% Final Commissioning, Testing & CoC Handover', percentage: 20, amountZar: totalZar * 0.2 },
      ]
    };

    await saveQuotation(newQuotation);
    onSaved(newQuotation);
    onClose();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10243A]/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#10243A] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#20B8CE]" />
            <div>
              <h3 className="font-['Manrope'] font-bold text-lg text-white">
                Commercial Quotation Builder & Costing Engine
              </h3>
              <p className="text-xs text-gray-400">
                Workflow: Equipment → Labour → Electrical CoC → 15% VAT → Milestones
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-sm text-[#10243A]">
          {/* Customer & Location Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-[#EEF3F7]/50 rounded-2xl border border-gray-200 text-xs">
            <div>
              <label className="text-gray-500 font-mono block mb-1">Customer / Contact</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full p-2 bg-white rounded-lg border border-gray-200 font-bold"
              />
            </div>
            <div>
              <label className="text-gray-500 font-mono block mb-1">Organisation</label>
              <input
                type="text"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
                className="w-full p-2 bg-white rounded-lg border border-gray-200 font-bold"
              />
            </div>
            <div>
              <label className="text-gray-500 font-mono block mb-1">Project Site Location</label>
              <input
                type="text"
                value={projectLocation}
                onChange={(e) => setProjectLocation(e.target.value)}
                className="w-full p-2 bg-white rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="text-gray-500 font-mono block mb-1">Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full p-2 bg-white rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="text-gray-500 font-mono block mb-1">Telephone</label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full p-2 bg-white rounded-lg border border-gray-200"
              />
            </div>
            <div>
              <label className="text-gray-500 font-mono block mb-1">Enquiry Reference</label>
              <div className="p-2 bg-white rounded-lg border border-gray-200 font-mono text-gray-700 font-semibold">
                {enquiry?.id || 'Direct Quotation'}
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-[#10243A] px-4 py-2.5 text-xs font-['Manrope'] font-bold text-white flex justify-between items-center">
              <span>Itemized Commercial Bill of Quantities (BOQ)</span>
              <span className="text-[11px] font-mono text-[#20B8CE]">Currency: South African Rand (ZAR)</span>
            </div>

            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 border-b border-gray-200 text-gray-600 font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Category</th>
                  <th className="p-3">Item Description</th>
                  <th className="p-3 w-16 text-center">Qty</th>
                  <th className="p-3 w-28 text-right">Unit Price (ZAR)</th>
                  <th className="p-3 w-28 text-right">Total (ZAR)</th>
                  <th className="p-3 w-10 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/70">
                    <td className="p-3 font-semibold text-[#1479D4] whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="p-3 text-gray-800">
                      {item.description}
                    </td>
                    <td className="p-3 text-center font-mono">
                      {item.quantity}
                    </td>
                    <td className="p-3 text-right font-mono">
                      R{item.unitPriceZar.toLocaleString()}
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-gray-900">
                      R{item.totalPriceZar.toLocaleString()}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1 text-gray-400 hover:text-red-600 rounded transition-colors"
                        title="Delete item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add New Line Item Row */}
            <div className="p-3 bg-gray-50 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs items-center">
              <div className="sm:col-span-3">
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full p-2 bg-white rounded border border-gray-300 text-xs"
                >
                  <option value="Equipment">Equipment</option>
                  <option value="Installation Labour">Installation Labour</option>
                  <option value="Electrical & CoC">Electrical & CoC</option>
                  <option value="Access Rigging & Scaffolding">Access & Scaffolding</option>
                  <option value="Ducting & Materials">Ducting & Materials</option>
                  <option value="Transport & Logistics">Transport & Logistics</option>
                </select>
              </div>

              <div className="sm:col-span-5">
                <input
                  type="text"
                  placeholder="Enter detailed description..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full p-2 bg-white rounded border border-gray-300 text-xs"
                />
              </div>

              <div className="sm:col-span-1">
                <input
                  type="number"
                  min="1"
                  value={newQty}
                  onChange={(e) => setNewQty(Number(e.target.value))}
                  className="w-full p-2 bg-white rounded border border-gray-300 text-xs text-center"
                />
              </div>

              <div className="sm:col-span-2">
                <input
                  type="number"
                  step="500"
                  placeholder="Unit Price"
                  value={newUnitPrice}
                  onChange={(e) => setNewUnitPrice(Number(e.target.value))}
                  className="w-full p-2 bg-white rounded border border-gray-300 text-xs text-right font-mono"
                />
              </div>

              <div className="sm:col-span-1">
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="w-full py-2 bg-[#1479D4] hover:bg-[#10243A] text-white rounded text-xs font-bold flex items-center justify-center transition-colors cursor-pointer"
                  title="Add Line Item"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Financial Summary & Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Payment Milestones */}
            <div className="p-4 bg-[#EEF3F7]/50 rounded-2xl border border-gray-200 text-xs space-y-2">
              <span className="font-['Manrope'] font-bold text-gray-700 uppercase tracking-wider block">
                Standard Commercial Payment Milestones
              </span>
              <div className="space-y-1.5">
                <div className="flex justify-between p-2 bg-white rounded-lg border border-gray-100">
                  <span>50% Deposit upon Order Sign-off</span>
                  <span className="font-mono font-bold">R{(totalZar * 0.5).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-gray-100">
                  <span>30% Delivery of Equipment to Site</span>
                  <span className="font-mono font-bold">R{(totalZar * 0.3).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-gray-100">
                  <span>20% Final Commissioning & SANS CoC</span>
                  <span className="font-mono font-bold">R{(totalZar * 0.2).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            {/* Financial Totals */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-gray-500 font-medium">Subtotal (Excl. VAT):</span>
                <span className="font-mono font-bold text-sm">R{subtotalZar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-500 font-medium">South African VAT (15%):</span>
                <span className="font-mono font-bold text-sm text-[#1479D4]">R{vatAmountZar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between py-2 text-base font-extrabold text-[#10243A]">
                <span>Total Quotation (Incl. 15% VAT):</span>
                <span className="font-mono text-emerald-700">R{totalZar.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={handlePrint}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-100 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Official Quotation</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAndIssue}
              className="px-6 py-2.5 bg-[#1479D4] hover:bg-[#10243A] text-white text-xs font-['Manrope'] font-bold rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Save & Issue Quotation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#20B8CE]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
