import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../../types';
import { PRODUCTS, CATEGORIES_WITH_SUBCATEGORIES } from '../../data/productsData';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import {
  Search,
  Filter,
  Wind,
  Layers,
  Zap,
  SlidersHorizontal,
  Check,
  RotateCcw,
  Package
} from 'lucide-react';

interface ProductCatalogueProps {
  onOpenQuote: (prefillProduct?: { id: string; name: string }) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onOpenQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'ALL'>('ALL');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('ALL');
  const [selectedVoltage, setSelectedVoltage] = useState<'ALL' | '230V' | '400V'>('ALL');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'ALL' && p.category !== selectedCategory) {
        return false;
      }
      // SubCategory filter
      if (selectedSubCategory !== 'ALL' && p.subCategory !== selectedSubCategory) {
        return false;
      }
      // Voltage filter
      if (selectedVoltage === '230V' && !p.powerRequirements.voltage.includes('230V')) {
        return false;
      }
      if (selectedVoltage === '400V' && !p.powerRequirements.voltage.includes('380V/400V')) {
        return false;
      }
      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(query);
        const matchModel = p.model.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchEnv = p.applicableEnvironments.some((env) => env.toLowerCase().includes(query));
        const matchSub = p.subCategory.toLowerCase().includes(query);
        return matchName || matchModel || matchDesc || matchEnv || matchSub;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedSubCategory, selectedVoltage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedSubCategory('ALL');
    setSelectedVoltage('ALL');
  };

  const currentSubCategories = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return Object.values(CATEGORIES_WITH_SUBCATEGORIES).flat();
    }
    return CATEGORIES_WITH_SUBCATEGORIES[selectedCategory] || [];
  }, [selectedCategory]);

  return (
    <section id="products" className="py-20 bg-gray-50 text-[#10243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1479D4]/10 text-[#1479D4] text-xs font-['Manrope'] font-bold uppercase tracking-wider">
            <Wind className="w-3.5 h-3.5" />
            <span>Cooling Fans Collection</span>
          </div>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#10243A] tracking-tight">
            High-Performance Cooling Fans
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed">
            From silent timber ceiling fans for your living room to massive 7.3m HVLS fans for warehouse floors. Fully certified and installed across Gauteng.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 mb-8 space-y-3">
          {/* Row 1: Search Bar & Primary Category Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fans by room, model, or type (e.g. HVLS, patio, 750mm, walnut)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1479D4]/30 focus:border-[#1479D4] transition-all bg-gray-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Super Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {(['ALL', 'CEILING & HVLS FANS', 'WALL & PEDESTAL FANS', 'PORTABLE & DRUM FANS', 'EVAPORATIVE COOLERS'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedSubCategory('ALL');
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-['Manrope'] font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#10243A] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'ALL' ? 'All Cooling Fans' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Sub-category pills & Voltage selector */}
          <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Subcategories Scroll */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-gray-400 font-mono text-[11px] uppercase mr-1">
                Filter by Type:
              </span>
              <button
                onClick={() => setSelectedSubCategory('ALL')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedSubCategory === 'ALL'
                    ? 'bg-[#1479D4] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Types
              </button>
              {currentSubCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedSubCategory === sub
                      ? 'bg-[#1479D4] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Secondary Voltage & Reset */}
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => setSelectedVoltage('ALL')}
                  className={`px-2 py-1 rounded-md font-medium ${
                    selectedVoltage === 'ALL' ? 'bg-white shadow-xs text-[#10243A]' : 'text-gray-500'
                  }`}
                >
                  All Power
                </button>
                <button
                  onClick={() => setSelectedVoltage('230V')}
                  className={`px-2 py-1 rounded-md font-medium ${
                    selectedVoltage === '230V' ? 'bg-white shadow-xs text-[#10243A]' : 'text-gray-500'
                  }`}
                >
                  230V 1-Ph
                </button>
                <button
                  onClick={() => setSelectedVoltage('400V')}
                  className={`px-2 py-1 rounded-md font-medium ${
                    selectedVoltage === '400V' ? 'bg-white shadow-xs text-[#10243A]' : 'text-gray-500'
                  }`}
                >
                  400V 3-Ph
                </button>
              </div>

              {(searchQuery || selectedCategory !== 'ALL' || selectedSubCategory !== 'ALL' || selectedVoltage !== 'ALL') && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                  title="Clear all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
          <span>
            Showing <strong className="text-[#10243A]">{filteredProducts.length}</strong> verified equipment models
          </span>
          <span className="font-mono text-gray-400">
            SABS / SANS Standards Aligned
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setActiveProduct(p)}
                onRequestQuote={(p) => onOpenQuote({ id: p.id, name: p.name })}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-4">
            <Package className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-['Manrope'] font-bold text-lg text-gray-800">
              No matching equipment found
            </h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Try adjusting your search keywords or clearing active category filters. Our engineering team can also custom-source bespoke ventilation solutions.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-[#1479D4] text-white text-xs font-bold rounded-lg hover:bg-[#10243A] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onRequestQuote={(p) => onOpenQuote({ id: p.id, name: p.name })}
      />
    </section>
  );
};
