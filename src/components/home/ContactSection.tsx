import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Send,
  Building2
} from 'lucide-react';
import { getCompanyConfig } from '../../data/companyConfig';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenQuote,
}) => {
  const config = getCompanyConfig();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#10243A] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1479D4]/10 text-[#1479D4] border border-[#1479D4]/20 text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Engineering Support</span>
          </div>

          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-black text-[#10243A] tracking-tight">
            Contact Our Engineering Team
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Schedule an on-site thermal assessment, request a formal engineering quotation, or activate 24/7 priority breakdown dispatch across Gauteng.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Phone Card */}
            <a
              href={`tel:${config.telephone.replace(/\s+/g, '')}`}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10243A] text-[#20B8CE] flex items-center justify-center group-hover:bg-[#1479D4] group-hover:text-white transition-all shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-gray-400">Head Office Telephone</div>
                <div className="font-['Manrope'] text-xl font-extrabold text-[#10243A] group-hover:text-[#1479D4] transition-colors mt-0.5">
                  {config.telephone}
                </div>
                <div className="text-xs text-gray-500 mt-1">Direct engineering lines & quotes</div>
              </div>
            </a>

            {/* WhatsApp & Emergency Hotline */}
            <a
              href={`https://wa.me/27834328294`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-emerald-500 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:bg-emerald-500 transition-all shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-gray-400">24/7 WhatsApp & Breakdown Hotline</div>
                <div className="font-['Manrope'] text-xl font-extrabold text-[#10243A] group-hover:text-emerald-600 transition-colors mt-0.5">
                  {config.emergencyHotline}
                </div>
                <div className="text-xs text-gray-500 mt-1">Instant photo sharing & site inquiries</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${config.email}`}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#1479D4] shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10243A] text-[#20B8CE] flex items-center justify-center group-hover:bg-[#1479D4] group-hover:text-white transition-all shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-gray-400">Official Tender & Email Inquiries</div>
                <div className="font-['Manrope'] text-lg font-bold text-[#10243A] group-hover:text-[#1479D4] transition-colors mt-0.5 break-all">
                  {config.email}
                </div>
                <div className="text-xs text-gray-500 mt-1">Formal RFP, drawings & specifications</div>
              </div>
            </a>

            {/* Address Card */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#10243A] text-[#20B8CE] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold uppercase text-gray-400">Physical Workshop & Office</div>
                <div className="font-['Manrope'] text-sm font-bold text-[#10243A] mt-0.5">
                  {config.physicalAddress}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Mon – Fri: 07:30 – 17:00 | 24/7 SLA Callouts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Engineering Enquiry Banner (7 cols) */}
          <div className="lg:col-span-7 bg-[#10243A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1479D4]/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20B8CE]/20 text-[#20B8CE] border border-[#20B8CE]/30 text-xs font-mono font-bold uppercase tracking-wider">
                <span>Free Technical Sizing & On-Site Consultation</span>
              </div>

              <h3 className="font-['Manrope'] text-3xl sm:text-4xl font-black text-white leading-tight">
                Ready to Upgrade Your Commercial or Industrial Climate System?
              </h3>

              <p className="font-['Inter'] text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Submit your facility requirements online or connect with our qualified HVAC project engineers. We provide comprehensive thermal calculations, equipment schedules, and formal SANS-compliant quotations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SANS 10142-1 CoC Certified Workmanship</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#20B8CE] shrink-0" />
                  <span>Fixed-Cost Itemised Engineering Quotation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#20B8CE] shrink-0" />
                  <span>Johannesburg, Pretoria & Gauteng Wide</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-Hour Quotation Turnaround</span>
                </div>
              </div>
            </div>

            {/* Prominent Action Button */}
            <div className="pt-8 sm:pt-10 relative z-10">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-[#1479D4] to-[#20B8CE] hover:from-[#20B8CE] hover:to-[#1479D4] text-[#070E18] font-['Manrope'] font-black text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>REQUEST DETAILED ENGINEERING QUOTE</span>
                <ArrowRight className="w-5 h-5 text-[#070E18] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
