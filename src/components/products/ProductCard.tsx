import React from 'react';
import { Product } from '../../types';
import { Wind, Zap, Gauge, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onRequestQuote,
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#1479D4]/40">
      {/* Top Image Container with Badges */}
      <div>
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 via-transparent to-transparent"></div>

          {/* SubCategory Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-bold font-mono tracking-wide rounded-md bg-[#10243A]/85 text-[#20B8CE] border border-[#20B8CE]/30 backdrop-blur-xs">
              {product.subCategory}
            </span>
          </div>

          {/* Voltage Tag */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-black/60 text-white backdrop-blur-xs">
              {product.powerRequirements.voltage.includes('3-Phase') ? '380V/400V 3-Phase' : '230V Single-Phase'}
            </span>
          </div>

          {/* Airflow Capacity Highlight Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-1.5 font-medium drop-shadow">
              <Wind className="w-3.5 h-3.5 text-[#20B8CE]" />
              <span className="font-bold">{product.airflowCapacity.split(' at ')[0]}</span>
            </div>
            <span className="text-[11px] text-gray-200 font-mono">
              {product.model}
            </span>
          </div>
        </div>

        {/* Product Details Body */}
        <div className="p-5 space-y-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#1479D4]">
              {product.category}
            </div>
            <h3 className="font-['Manrope'] font-bold text-base text-[#10243A] group-hover:text-[#1479D4] transition-colors leading-snug mt-1">
              {product.name}
            </h3>
          </div>

          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Technical Micro Specs Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-[11px] text-gray-600">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Diameter/Size</span>
              <span className="font-semibold text-gray-800">{product.dimensions.diameterOrWidth.split(' ')[0]} {product.dimensions.diameterOrWidth.split(' ')[1] || ''}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Motor Rating</span>
              <span className="font-semibold text-gray-800">{product.powerRequirements.motorKw} kW ({product.powerRequirements.currentAmps}A)</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-mono">Noise Output</span>
              <span className="font-semibold text-gray-800">{product.soundLevelDb.split(' at ')[0]}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-mono">IP Rating</span>
              <span className="font-semibold text-gray-800">{product.ipRating.split(' ')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          onClick={() => onSelect(product)}
          className="px-3 py-2 text-xs font-bold text-[#10243A] bg-[#EEF3F7] hover:bg-gray-200 rounded-lg transition-colors text-center cursor-pointer"
        >
          Tech Specs
        </button>
        <button
          onClick={() => onRequestQuote(product)}
          className="px-3 py-2 text-xs font-bold text-white bg-[#1479D4] hover:bg-[#10243A] rounded-lg transition-colors flex items-center justify-center gap-1 group/btn cursor-pointer"
        >
          <span>Quote</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-[#20B8CE]" />
        </button>
      </div>
    </div>
  );
};
