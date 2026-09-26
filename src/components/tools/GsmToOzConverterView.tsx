import React, { useState } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

const CONVERTER_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Confusing ounces per square yard (OSY) with linear yard weight',
    solution: 'OSY measures a 36" × 36" square. A linear yard of 60" fabric contains 1.67 square yards, so a 10 oz/yd² fabric weighs 16.7 oz per running linear yard.'
  },
  {
    mistake: 'Using rounded conversion factors like 28 instead of 33.9057',
    solution: 'One ounce equals 28.35 grams, but one square yard equals 0.836 square meters. Dividing 28.35 by 0.836 gives precisely 33.9057.'
  },
  {
    mistake: 'Comparing knitted GSM directly to woven GSM',
    solution: 'A 200 GSM jersey knit drapes fluidly and stretches, whereas a 200 GSM woven poplin holds sharp structural pleats.'
  }
];

interface GsmToOzConverterViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

interface CommonWeightPreset {
  label: string;
  oz: number;
  gsm: number;
  fabrics: string;
}

const COMMON_WEIGHTS: CommonWeightPreset[] = [
  { label: 'Ultra-Light Sheer', oz: 2.2, gsm: 75, fabrics: 'Pakistani Lawn, Silk Chiffon, Voile' },
  { label: 'Light Shirting', oz: 3.8, gsm: 130, fabrics: 'Cotton Poplin, Rayon Challis' },
  { label: 'Everyday T-Shirt', oz: 5.3, gsm: 180, fabrics: 'Cotton Knit, Mid-weight Linen' },
  { label: 'Chino & Twill', oz: 7.1, gsm: 240, fabrics: 'Cotton Twill, Linen Suiting' },
  { label: 'Winter Khaddar', oz: 8.8, gsm: 300, fabrics: 'Winter Khaddar, Sweatshirt Fleece' },
  { label: 'Standard Denim (5-Pocket)', oz: 12.0, gsm: 407, fabrics: 'Standard Blue Jeans Denim' },
  { label: 'Heavy Raw Denim', oz: 14.5, gsm: 492, fabrics: 'Vintage Selvedge, Workwear' },
  { label: 'Heavy Canvas & Duck', oz: 18.0, gsm: 610, fabrics: 'Duck Canvas, Winter Overcoat Wool' }
];

export const GsmToOzConverterView: React.FC<GsmToOzConverterViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'gsm-to-oz-converter')!;

  const [gsmInput, setGsmInput] = useState<string>('180');
  const [ozInput, setOzInput] = useState<string>('5.31');

  // Conversion constant: 1 oz/yd² = 33.9057 g/m²
  const FACTOR = 33.9057;

  const handleGsmChange = (val: string) => {
    setGsmInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      const convertedOz = num / FACTOR;
      setOzInput((Math.round(convertedOz * 100) / 100).toString());
    } else {
      setOzInput('');
    }
  };

  const handleOzChange = (val: string) => {
    setOzInput(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      const convertedGsm = num * FACTOR;
      setGsmInput((Math.round(convertedGsm * 10) / 10).toString());
    } else {
      setGsmInput('');
    }
  };

  const handleApplyPreset = (preset: CommonWeightPreset) => {
    setGsmInput(preset.gsm.toString());
    setOzInput(preset.oz.toString());
  };

  const handleClear = () => {
    setGsmInput('');
    setOzInput('');
  };

  const currentGsm = parseFloat(gsmInput) || 0;
  const currentOz = parseFloat(ozInput) || 0;

  // Linear yard mass
  const linearOz45 = Math.round(currentOz * (45 / 36) * 10) / 10;
  const linearOz54 = Math.round(currentOz * (54 / 36) * 10) / 10;
  const linearOz60 = Math.round(currentOz * (60 / 36) * 10) / 10;

  const resultSummary = `Fabric Weight: ${currentGsm} GSM (g/m²) = ${currentOz} oz/yd² (OSY) | Linear Weights: 45" Bolt = ${linearOz45} oz/yd, 54" Bolt = ${linearOz54} oz/yd, 60" Bolt = ${linearOz60} oz/yd | Calculated via Elite Fabrics (https://elitefabrics.online/tools/gsm-to-oz-converter)`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          GSM to Oz/yd² Fabric Weight Converter
        </h1>
        <p className="text-sm sm:text-base text-[#524B40] leading-normal">
          Convert fabric weight between international metric GSM (g/m²) and American ounces per square yard (oz/yd²) with live two-way synchronization.
        </p>
      </div>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* THE CALCULATOR (At top, visible without scrolling) */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Two-Way Weight Conversion
          </span>
          <span className="text-xs text-[#7A7266]">
            Type into either box — updates live
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Synchronized Twin Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Metric GSM */}
            <div>
              <label htmlFor="gsm-metric-input" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Metric Fabric Weight (GSM)
              </label>
              <div className="relative">
                <input
                  id="gsm-metric-input"
                  type="number"
                  step="1"
                  min="0"
                  value={gsmInput}
                  onChange={(e) => handleGsmChange(e.target.value)}
                  placeholder="e.g. 180"
                  className="w-full min-h-[52px] px-4 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-2xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-4 text-xs font-mono font-bold text-[#7A7266]">
                  g/m²
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">
                Standard metric unit in Europe, Pakistan, and Asian textile mills.
              </p>
            </div>

            {/* US Imperial Oz/yd² */}
            <div>
              <label htmlFor="oz-imperial-input" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                US Trade Weight (oz/yd²)
              </label>
              <div className="relative">
                <input
                  id="oz-imperial-input"
                  type="number"
                  step="0.1"
                  min="0"
                  value={ozInput}
                  onChange={(e) => handleOzChange(e.target.value)}
                  placeholder="e.g. 5.3"
                  className="w-full min-h-[52px] px-4 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-2xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-4 text-xs font-mono font-bold text-[#7A7266]">
                  oz/yd² (OSY)
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">
                Standard US textile trade weight used in denim, quilting, and apparel.
              </p>
            </div>
          </div>

          {/* Linear Yard Mass Section */}
          <div className="p-4 bg-[#FAF8F5] border border-[#E0D8CB] rounded-md space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold block">
              Linear Yard Weight by Bolt Width (Weight per Running Yard)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white border border-[#E0D8CB] rounded">
                <span className="text-xs text-[#7A7266] block">45" Bolt (Cotton / Lawn)</span>
                <span className="text-lg font-bold font-serif-heading text-[#1C1C1C]">{linearOz45} oz</span>
                <span className="text-xs text-[#7A7266] ml-1">/ linear yd</span>
              </div>
              <div className="p-3 bg-white border border-[#E0D8CB] rounded">
                <span className="text-xs text-[#7A7266] block">54" Bolt (Linen / Decor)</span>
                <span className="text-lg font-bold font-serif-heading text-[#1C1C1C]">{linearOz54} oz</span>
                <span className="text-xs text-[#7A7266] ml-1">/ linear yd</span>
              </div>
              <div className="p-3 bg-white border border-[#E0D8CB] rounded">
                <span className="text-xs text-[#7A7266] block">60" Bolt (Garment / Denim)</span>
                <span className="text-lg font-bold font-serif-heading text-[#1C1C1C]">{linearOz60} oz</span>
                <span className="text-xs text-[#7A7266] ml-1">/ linear yd</span>
              </div>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3A352E] block mb-2">
              Common Fabric Weight Benchmarks:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {COMMON_WEIGHTS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(item)}
                  className="p-2.5 bg-white border border-[#D0C7BA] hover:border-[#1C1C1C] hover:bg-[#FAF8F5] rounded text-left transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#7A7266]">
                    <span>{item.oz} oz</span>
                    <span>{item.gsm} GSM</span>
                  </div>
                  <div className="font-semibold text-[#1C1C1C] mt-0.5 truncate">
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Clear and Copy Result Buttons beside each other */}
          <ToolActionButtons
            onClear={handleClear}
            resultText={resultSummary}
          />
        </div>
      </div>

      {/* Formula in Simple English */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          The Conversion Constant Explained
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          The international textile conversion constant between grams per square meter (g/m²) and ounces per square yard (oz/yd²) is <strong>33.9057</strong>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="font-semibold text-[#1C1C1C] block mb-1">GSM to Ounces</span>
            <code className="block text-[#4A443B]">oz/yd² = GSM ÷ 33.9057</code>
            <span className="text-[#7A7266] block mt-1">Example: 180 GSM ÷ 33.9057 = 5.31 oz/yd²</span>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="font-semibold text-[#1C1C1C] block mb-1">Ounces to GSM</span>
            <code className="block text-[#4A443B]">GSM = oz/yd² × 33.9057</code>
            <span className="text-[#7A7266] block mt-1">Example: 12 oz/yd² × 33.9057 = 407 GSM</span>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Translating 12 oz Denim to Mill GSM
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            An American denim maker is sourcing 5-pocket blue jean twill from a Pakistani textile mill. The pattern specifies standard <strong>12 oz denim</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Calculation:</strong> 12 oz/yd² × 33.9057 = <strong>407 GSM</strong>.</li>
            <li><strong>Running Yard Weight:</strong> For 60-inch wide rolls, a linear yard weighs 12 × (60 ÷ 36) = <strong>20.0 oz per linear yard</strong>.</li>
          </ul>
          <p className="text-xs sm:text-sm pt-1">
            <strong>Conclusion:</strong> Ordering 405–410 GSM denim guarantees the resulting jeans will match authentic mid-weight American denim.
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <ToolCommonMistakes mistakes={CONVERTER_MISTAKES} toolName="the GSM to Oz Converter" />

      {/* FAQs */}
      <ToolFAQSection faqs={toolData.faqs} />

      {/* Related Resources */}
      <ToolRelatedResources
        articleSlugs={toolData.relatedArticleSlugs}
        fabricSlugs={toolData.relatedFabricSlugs}
        onNavigate={onNavigate}
      />
    </div>
  );
};
