import React from 'react';
import { QuotationEnquiry } from '../../types';
import {
  CheckCircle2,
  X,
  FileText,
  Calendar,
  ShieldCheck,
  Phone,
  Mail,
  Download,
  ArrowRight
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface QuoteSuccessModalProps {
  enquiry: QuotationEnquiry | null;
  onClose: () => void;
  onOpenAdmin: () => void;
}

export const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({
  enquiry,
  onClose,
  onOpenAdmin,
}) => {
  const config = getCompanyConfig();

  if (!enquiry) return null;

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10243A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Top Celebration Header */}
        <div className="bg-gradient-to-r from-[#10243A] to-[#1479D4] p-8 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-emerald-400/20 border-2 border-emerald-400 mx-auto flex items-center justify-center mb-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-[#20B8CE] font-bold">
            Commercial Quotation Enquiry Registered
          </span>
          <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Enquiry Reference: {enquiry.id}
          </h3>
          <p className="text-xs text-[#EEF3F7]/80 mt-1">
            Submitted to VentAxis Engineering Systems (Gauteng Central Depot)
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-sm text-[#10243A]">
          {/* Summary Box */}
          <div className="p-4 bg-[#EEF3F7]/60 rounded-2xl border border-gray-200 space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-xs text-gray-500 font-mono">Client / Organisation</span>
              <span className="font-bold text-[#10243A]">{enquiry.name} • {enquiry.organisation}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-xs text-gray-500 font-mono">Location</span>
              <span className="font-semibold text-gray-800">{enquiry.city}, {enquiry.province}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-xs text-gray-500 font-mono">Facility Scope</span>
              <span className="font-semibold text-gray-800">{enquiry.institutionType} ({enquiry.estimatedBuildingSizeM2} m² @ {enquiry.ceilingHeightM}m ceiling)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 font-mono">Selected Categories</span>
              <span className="text-xs font-bold text-[#1479D4]">{enquiry.selectedCategories.join(', ')}</span>
            </div>
          </div>

          {/* Next Steps Workflow */}
          <div className="space-y-3">
            <h4 className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-gray-500">
              What Happens Next (Gauteng SLA):
            </h4>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1479D4] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                <span><strong>Lead Engineer Qualification:</strong> An accredited ventilation technician reviews your building volume and structural clearances within 4 hours.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1479D4] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                <span><strong>Site Assessment Scheduling:</strong> Our operations desk contacts you at <span className="font-mono text-[#10243A] font-semibold">{enquiry.telephone}</span> to confirm on-site laser inspection date.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#1479D4] text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                <span><strong>Itemized BOQ & SANS 10142-1 CoC Proposal:</strong> You receive an official commercial proposal with transparent labour, rigging, and equipment line items.</span>
              </div>
            </div>
          </div>

          {/* POPIA & Admin Sync Notice */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>POPIA Consent Verified. Synced to VentAxis Supabase Engineering Queue.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onOpenAdmin}
            className="text-xs text-[#1479D4] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Track in Admin Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintSummary}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-100 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print Summary</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#10243A] text-white rounded-xl text-xs font-bold hover:bg-[#1479D4] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
