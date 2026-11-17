import React, { useState } from 'react';
import { Product } from '../../types';
import {
  X,
  Wind,
  Zap,
  Gauge,
  ShieldCheck,
  Check,
  Building,
  ArrowRight,
  Maximize2,
  FileText,
  AlertCircle
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#10243A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#10243A] text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#1479D4]/40 text-[#20B8CE] border border-[#20B8CE]/30 text-xs font-mono font-bold uppercase">
              {product.subCategory}
            </span>
            <span className="text-gray-400 text-xs font-mono">
              Model: {product.model}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-sm text-[#10243A]">
          {/* Top Gallery & Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Gallery */}
            <div className="space-y-3">
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner">
                <img
                  src={product.images[selectedImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-[11px] font-mono">
                  {selectedImageIdx + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIdx(i)}
                      className={`h-16 w-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImageIdx === i
                          ? 'border-[#1479D4] ring-2 ring-[#1479D4]/20 scale-102'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Technical Summary */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#1479D4] uppercase tracking-wider">
                  {product.category}
                </div>
                <h2 className="font-['Manrope'] text-2xl font-extrabold text-[#10243A] leading-tight mt-1">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-500 font-mono mt-0.5">
                  Manufacturer: {product.manufacturer} • Model: {product.model}
                </p>

                <p className="text-gray-700 text-xs sm:text-sm mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Capacity Banner */}
              <div className="p-3.5 bg-[#EEF3F7] rounded-xl border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Verified Airflow Capacity</span>
                  <span className="text-base font-bold text-[#10243A] flex items-center gap-1.5">
                    <Wind className="w-4 h-4 text-[#1479D4]" />
                    {product.airflowCapacity}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Noise Level</span>
                  <span className="text-sm font-semibold text-gray-800">{product.soundLevelDb}</span>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product);
                  }}
                  className="w-full py-3.5 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>REQUEST FORMAL QUOTATION FOR THIS ITEM</span>
                  <ArrowRight className="w-4 h-4 text-[#20B8CE] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-5 py-3 bg-[#EEF3F7] border-b border-gray-200 font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#1479D4]" />
              <span>Verified Engineering Specifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 text-xs">
              <div className="p-4 space-y-2.5">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Power Supply / Voltage:</span>
                  <span className="font-bold text-gray-800">{product.powerRequirements.voltage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Frequency (RSA Grid):</span>
                  <span className="font-semibold text-gray-800">{product.powerRequirements.frequency}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Motor Power Rating:</span>
                  <span className="font-bold text-gray-800">{product.powerRequirements.motorKw} kW ({product.powerRequirements.currentAmps} Amps)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 font-medium">Enclosure Protection:</span>
                  <span className="font-bold text-gray-800">{product.ipRating}</span>
                </div>
              </div>

              <div className="p-4 space-y-2.5">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Diameter / Blade Span:</span>
                  <span className="font-bold text-gray-800">{product.dimensions.diameterOrWidth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Height / Projection:</span>
                  <span className="font-semibold text-gray-800">{product.dimensions.depthOrHeight}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">Dry Weight:</span>
                  <span className="font-bold text-gray-800">{product.dimensions.weightKg} kg</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500 font-medium">Acoustic Sound Pressure:</span>
                  <span className="font-semibold text-gray-800">{product.soundLevelDb}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Considerations & Applicable Environments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Considerations */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2.5">
              <div className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Installation Considerations</span>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {product.installationConsiderations.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1479D4] font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applicable Environments */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2.5">
              <div className="font-['Manrope'] font-bold text-xs uppercase tracking-wider text-[#10243A] flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#1479D4]" />
                <span>Applicable Environments</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.applicableEnvironments.map((env, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs text-gray-800 font-medium shadow-xs"
                  >
                    {env}
                  </span>
                ))}
              </div>

              {/* Compliance Standard Badges */}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <span className="text-[10px] text-gray-500 block uppercase font-mono mb-1">Compliance Certifications</span>
                <div className="flex flex-wrap gap-1">
                  {product.compliance.map((c, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1"
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs">
          <span className="text-gray-500 font-mono">
            VentAxis Engineering Spec Sheet • SANS 10142-1 CoC Compliant
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="px-5 py-2 bg-[#1479D4] hover:bg-[#10243A] text-white font-['Manrope'] font-bold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Add to Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#20B8CE]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
