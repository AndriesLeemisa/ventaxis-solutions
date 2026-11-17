import React, { useState } from 'react';
import { Logo } from './Logo';
import { X, Copy, Check, Download, ExternalLink, ShieldCheck, Palette, Type, Layers } from 'lucide-react';

interface BrandAssetKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandAssetKitModal: React.FC<BrandAssetKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'logos' | 'colors' | 'typography' | 'social'>('logos');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const brandColors = [
    { name: 'Deep Navy', hex: '#10243A', rgb: 'rgb(16, 36, 58)', role: 'Primary Brand, Headings & Authority' },
    { name: 'Corporate Blue', hex: '#1479D4', rgb: 'rgb(20, 121, 212)', role: 'Interactive Primary, Buttons & Accent' },
    { name: 'Cyan Airflow', hex: '#20B8CE', rgb: 'rgb(32, 184, 206)', role: 'Aerodynamic Highlights, CTAs & Flow Vectors' },
    { name: 'Light Grey', hex: '#EEF3F7', rgb: 'rgb(238, 243, 247)', role: 'Technical Surface, Card Backings & Borders' },
    { name: 'Pure White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', role: 'Contrast Canvas & Clean Space' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10243A]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#EEF3F7]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#10243A] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1479D4]/30 flex items-center justify-center border border-[#20B8CE]/40">
              <Layers className="w-4 h-4 text-[#20B8CE]" />
            </div>
            <div>
              <h3 className="font-['Manrope'] font-bold text-lg text-white">
                VentAxis Brand Identity & Asset Guidelines
              </h3>
              <p className="text-xs text-[#EEF3F7]/70">
                Engineering Better Airflow – Corporate Specification
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EEF3F7] px-6 bg-[#EEF3F7]/40">
          <button
            onClick={() => setActiveTab('logos')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'logos'
                ? 'border-[#1479D4] text-[#1479D4]'
                : 'border-transparent text-gray-600 hover:text-[#10243A]'
            }`}
          >
            <Layers className="w-4 h-4" /> Logo Suite
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'colors'
                ? 'border-[#1479D4] text-[#1479D4]'
                : 'border-transparent text-gray-600 hover:text-[#10243A]'
            }`}
          >
            <Palette className="w-4 h-4" /> Colour Palette
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'typography'
                ? 'border-[#1479D4] text-[#1479D4]'
                : 'border-transparent text-gray-600 hover:text-[#10243A]'
            }`}
          >
            <Type className="w-4 h-4" /> Typography
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'social'
                ? 'border-[#1479D4] text-[#1479D4]'
                : 'border-transparent text-gray-600 hover:text-[#10243A]'
            }`}
          >
            <ExternalLink className="w-4 h-4" /> Social Brand Assets
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'logos' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#EEF3F7]/50 rounded-xl border border-[#EEF3F7] text-sm text-[#10243A]">
                <strong className="text-[#10243A]">Concept Rational:</strong> The VentAxis emblem fuses a sharp, authoritative geometric structural "V" with three aerodynamic laminar airflow streamlines curving upward and outward. This symbolizes high-efficiency convective cooling, precision engineering, and directional ventilation control.
              </div>

              {/* Grid of Logos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Primary Horizontal */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl flex flex-col justify-between shadow-sm">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    1. Primary Horizontal Logo (Light Backgrounds)
                  </div>
                  <div className="py-6 flex items-center justify-center">
                    <Logo variant="horizontal" size="lg" />
                  </div>
                  <div className="text-xs text-gray-500 mt-2 border-t pt-2">
                    Usage: Corporate website header, quotation stationery, vehicle signage.
                  </div>
                </div>

                {/* 2. Stacked Logo */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl flex flex-col justify-between shadow-sm">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    2. Stacked Logo (Centered Applications)
                  </div>
                  <div className="py-6 flex items-center justify-center">
                    <Logo variant="stacked" size="md" />
                  </div>
                  <div className="text-xs text-gray-500 mt-2 border-t pt-2">
                    Usage: Technical data sheets, equipment packaging, apparel embroidery.
                  </div>
                </div>

                {/* 3. Monochrome White on Deep Navy */}
                <div className="p-6 bg-[#10243A] border border-[#173250] rounded-xl flex flex-col justify-between shadow-sm">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    3. Reversed White (Dark Surfaces)
                  </div>
                  <div className="py-6 flex items-center justify-center">
                    <Logo variant="monochrome-white" size="lg" />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 border-t border-white/10 pt-2">
                    Usage: Dark engineering blueprints, dark footers, high-contrast industrial decals.
                  </div>
                </div>

                {/* 4. Favicon & App Icon Mark */}
                <div className="p-6 bg-[#EEF3F7] border border-gray-200 rounded-xl flex flex-col justify-between shadow-sm">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    4. Standalone Geometric Emblem & Favicon
                  </div>
                  <div className="py-6 flex items-center justify-center gap-6">
                    <div className="p-3 bg-[#10243A] rounded-xl shadow-md">
                      <Logo variant="mark-only" size="lg" />
                    </div>
                    <div className="p-2 bg-white rounded-lg shadow-sm border">
                      <Logo variant="mark-only" size="md" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 border-t pt-2">
                    Usage: Browser tab favicon, app icon, social profile avatar, watermark.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                The VentAxis Solutions corporate palette reflects engineering precision, atmospheric purity, and commercial reliability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {brandColors.map((color) => (
                  <div
                    key={color.name}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="h-20 w-full relative" style={{ backgroundColor: color.hex }}>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/40 text-white backdrop-blur-xs">
                        {color.hex}
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="font-['Manrope'] font-bold text-sm text-[#10243A]">
                        {color.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{color.role}</div>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="font-mono text-xs text-gray-600">{color.hex}</span>
                        <button
                          onClick={() => copyToClipboard(color.hex, color.name)}
                          className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-[#1479D4] transition-colors"
                          title="Copy Hex Code"
                        >
                          {copiedColor === color.name ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-4">
                <div>
                  <div className="text-xs font-bold text-[#1479D4] uppercase tracking-wider">
                    Primary Display & Heading Font
                  </div>
                  <h4 className="font-['Manrope'] text-3xl font-extrabold text-[#10243A] mt-1">
                    Manrope (Google Fonts)
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Geometric sans-serif with precision optical kerning. Used for all hero titles, section headlines, and engineering specifications.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t">
                  <div className="p-3 bg-[#EEF3F7] rounded-lg text-center">
                    <span className="font-['Manrope'] font-normal text-lg">Regular 400</span>
                  </div>
                  <div className="p-3 bg-[#EEF3F7] rounded-lg text-center">
                    <span className="font-['Manrope'] font-semibold text-lg">SemiBold 600</span>
                  </div>
                  <div className="p-3 bg-[#EEF3F7] rounded-lg text-center">
                    <span className="font-['Manrope'] font-bold text-lg">Bold 700</span>
                  </div>
                  <div className="p-3 bg-[#EEF3F7] rounded-lg text-center">
                    <span className="font-['Manrope'] font-extrabold text-lg">ExtraBold 800</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-4">
                <div>
                  <div className="text-xs font-bold text-[#20B8CE] uppercase tracking-wider">
                    Primary Body & UI Font
                  </div>
                  <h4 className="font-['Inter'] text-2xl font-bold text-[#10243A] mt-1">
                    Inter (Google Fonts)
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Highly legible, neutral grotesque typeface tailored for computer screens, complex tabular technical specifications, and body copy.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 leading-relaxed font-['Inter']">
                  "VentAxis Solutions designs, supplies, installs and maintains commercial and industrial fans for institutions, businesses and industrial facilities across Gauteng, South Africa. Engineering Better Airflow."
                </div>
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <p className="text-sm text-gray-600">
                Cohesive social media identity assets for LinkedIn corporate presence, Facebook business page, and OpenGraph link previews.
              </p>

              {/* LinkedIn / Website Banner Preview */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-2 text-xs font-bold text-gray-500 border-b">
                  LinkedIn Corporate Cover Banner (1584 x 396 ratio)
                </div>
                <div className="relative h-44 bg-gradient-to-r from-[#10243A] via-[#143250] to-[#1479D4] p-6 flex items-center justify-between text-white overflow-hidden">
                  <div className="relative z-10 max-w-md">
                    <Logo variant="monochrome-white" size="md" />
                    <h5 className="font-['Manrope'] text-xl font-bold text-white mt-2">
                      Commercial & Industrial Fan Solutions
                    </h5>
                    <p className="text-xs text-[#20B8CE] mt-1 font-semibold tracking-wide">
                      Gauteng • Johannesburg • Ekurhuleni • Pretoria
                    </p>
                  </div>
                  {/* Decorative background airflow lines */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                    <Logo variant="mark-only" size="xl" />
                  </div>
                </div>
              </div>

              {/* Social Media Square Post Card */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm max-w-sm">
                <div className="bg-gray-100 px-4 py-2 text-xs font-bold text-gray-500 border-b">
                  Social Post Asset (1080 x 1080 Square)
                </div>
                <div className="aspect-square bg-[#10243A] p-6 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <Logo variant="monochrome-white" size="sm" />
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1479D4]/40 text-[#20B8CE] border border-[#20B8CE]/30">
                      SANS 10142-1 CoC
                    </span>
                  </div>

                  <div className="my-auto text-center py-4">
                    <div className="text-xs uppercase tracking-widest text-[#20B8CE] font-bold">
                      Ventilation Engineering
                    </div>
                    <div className="font-['Manrope'] text-2xl font-extrabold text-white mt-1 leading-tight">
                      Engineering Better Airflow for Gauteng Facilities
                    </div>
                    <p className="text-xs text-[#EEF3F7]/70 mt-2">
                      HVLS • Industrial Axials • Centrifugal • Smoke Extraction
                    </p>
                  </div>

                  <div className="text-center border-t border-white/10 pt-3 text-[11px] text-gray-300">
                    www.ventaxis.co.za • info@ventaxis.co.za
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>VentAxis Solutions Registered Brand Assets • All Rights Reserved</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#10243A] text-white rounded-lg font-semibold hover:bg-[#1479D4] transition-colors"
          >
            Close Guidelines
          </button>
        </div>
      </div>
    </div>
  );
};
