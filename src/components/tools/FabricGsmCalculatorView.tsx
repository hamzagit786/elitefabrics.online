import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

const GSM_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Weighing swatches with fraying edges or loose threads',
    solution: 'Use rotary cutters or sharp shears to ensure exact right-angle cuts. Loose threads bias swatch mass by several milligrams.'
  },
  {
    mistake: 'Using low-precision kitchen scales for small swatches',
    solution: 'A 10×10 cm swatch usually weighs between 1 and 4 grams. Scales with only 1-gram increments introduce large rounding errors; use 0.01g precision scales.'
  },
  {
    mistake: 'Equating high GSM with high fabric quality',
    solution: 'GSM measures thickness and mass, not fiber grade. Luxury lawns are 80 GSM and cheap burlap is 350 GSM.'
  },
  {
    mistake: 'Measuring swatches cut near the selvage edge',
    solution: 'Selvages contain denser weaving threads and sizing chemicals. Always cut test swatches at least 4 inches inward from the selvage.'
  }
];

interface FabricGsmCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type DimensionUnit = 'cm' | 'inch' | 'meter';

interface SwatchPreset {
  label: string;
  length: number;
  width: number;
  unit: DimensionUnit;
}

const PRESETS: SwatchPreset[] = [
  { label: '10 × 10 cm', length: 10, width: 10, unit: 'cm' },
  { label: 'A4 Swatch (21 × 29.7 cm)', length: 29.7, width: 21, unit: 'cm' },
  { label: '10 × 10 in', length: 10, width: 10, unit: 'inch' },
  { label: '1 Yard × 44" Bolt', length: 36, width: 44, unit: 'inch' },
  { label: '1 Yard × 60" Bolt', length: 36, width: 60, unit: 'inch' },
  { label: '1 × 1 Meter', length: 1, width: 1, unit: 'meter' }
];

export const FabricGsmCalculatorView: React.FC<FabricGsmCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'fabric-gsm-calculator')!;

  // Inputs
  const [weightGrams, setWeightGrams] = useState<string>('2.0');
  const [length, setLength] = useState<string>('10');
  const [width, setWidth] = useState<string>('10');
  const [unit, setUnit] = useState<DimensionUnit>('cm');

  // Real-time calculation
  const calculation = useMemo(() => {
    const w = parseFloat(weightGrams);
    const l = parseFloat(length);
    const wid = parseFloat(width);

    if (isNaN(w) || isNaN(l) || isNaN(wid) || w <= 0 || l <= 0 || wid <= 0) {
      return {
        isValid: false,
        error: 'Enter positive numbers for sample weight, length, and width.',
        gsm: 0,
        oz: 0,
        areaM2: 0,
        category: '',
        examples: [] as string[]
      };
    }

    // Convert dimensions to meters
    let lengthMeters = l;
    let widthMeters = wid;

    if (unit === 'cm') {
      lengthMeters = l / 100;
      widthMeters = wid / 100;
    } else if (unit === 'inch') {
      lengthMeters = (l * 2.54) / 100;
      widthMeters = (wid * 2.54) / 100;
    }

    const areaM2 = lengthMeters * widthMeters;
    if (areaM2 <= 0) {
      return {
        isValid: false,
        error: 'Calculated area must be greater than zero.',
        gsm: 0,
        oz: 0,
        areaM2: 0,
        category: '',
        examples: []
      };
    }

    const gsm = w / areaM2;
    const oz = gsm / 33.9057;

    // Weight classification
    let category = 'Medium Weight';
    let examples = ['Mid-weight Linen', 'Cotton T-Shirt Jersey', 'Chambray'];

    if (gsm < 100) {
      category = 'Very Lightweight / Sheer';
      examples = ['Silk Chiffon', 'Pakistani Lawn', 'Cotton Voile', 'Organza'];
    } else if (gsm < 150) {
      category = 'Lightweight';
      examples = ['Cotton Poplin', 'Rayon Challis', 'Shirting Linen'];
    } else if (gsm <= 250) {
      category = 'Medium Weight';
      examples = ['Mid-weight Linen', 'T-Shirt Cotton (180 GSM)', 'Chino Twill'];
    } else if (gsm <= 350) {
      category = 'Medium-Heavy';
      examples = ['Winter Khaddar', 'Sweatshirt Fleece', 'Light Denim (9 oz)'];
    } else {
      category = 'Heavyweight';
      examples = ['Classic 5-Pocket Denim (12–14 oz)', 'Canvas Duck', 'Wool Melton'];
    }

    return {
      isValid: true,
      error: null,
      gsm: Math.round(gsm * 10) / 10,
      oz: Math.round(oz * 100) / 100,
      areaM2: Math.round(areaM2 * 10000) / 10000,
      category,
      examples
    };
  }, [weightGrams, length, width, unit]);

  const handleApplyPreset = (preset: SwatchPreset) => {
    setLength(preset.length.toString());
    setWidth(preset.width.toString());
    setUnit(preset.unit);
  };

  const handleClear = () => {
    setWeightGrams('');
    setLength('');
    setWidth('');
  };

  const resultSummary = calculation.isValid
    ? `Fabric GSM: ${calculation.gsm} g/m² (${calculation.oz} oz/yd²) | Weight Class: ${calculation.category} | Sample: ${weightGrams}g, ${length}×${width} ${unit} | Calculated via Elite Fabrics (https://elitefabrics.online/tools/fabric-gsm-calculator)`
    : '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric GSM Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B40] leading-normal">
          Calculate fabric GSM (grams per square meter) and imperial ounces per square yard (oz/yd²) instantly from sample weight and dimensions.
        </p>
      </div>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* THE CALCULATOR (At the very top, visible without scrolling) */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Input Parameters
          </span>
          <div className="flex items-center flex-wrap gap-1.5 text-xs">
            <span className="text-xs text-[#7A7266]">Presets:</span>
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(p)}
                className="px-2 py-1 bg-white hover:bg-[#F2EDE4] text-[#4A443B] border border-[#DDD5C7] rounded text-xs transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Weight Input */}
            <div>
              <label htmlFor="gsm-weight" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Sample Weight (Grams)
              </label>
              <div className="relative">
                <input
                  id="gsm-weight"
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={weightGrams}
                  onChange={(e) => setWeightGrams(e.target.value)}
                  placeholder="e.g. 2.0"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                  grams
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">
                Weigh your cut swatch on a digital scale (kitchen or jewelry scale).
              </p>
            </div>

            {/* Length & Width in a 2-col row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="gsm-length" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Sample Length
                </label>
                <div className="relative">
                  <input
                    id="gsm-length"
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="e.g. 10"
                    className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                  />
                  <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                    {unit}
                  </span>
                </div>
                <p className="text-xs text-[#7A7266] mt-1">
                  Dimension along the grain.
                </p>
              </div>

              <div>
                <label htmlFor="gsm-width" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Sample Width
                </label>
                <div className="relative">
                  <input
                    id="gsm-width"
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="e.g. 10"
                    className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                  />
                  <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                    {unit}
                  </span>
                </div>
                <p className="text-xs text-[#7A7266] mt-1">
                  Dimension across the grain.
                </p>
              </div>
            </div>

            {/* Measurement Unit */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                Measurement Unit
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['cm', 'inch', 'meter'] as DimensionUnit[]).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUnit(u)}
                    className={`min-h-[42px] py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                      unit === u
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {u === 'cm' && 'Centimeters (cm)'}
                    {u === 'inch' && 'Inches (in)'}
                    {u === 'meter' && 'Meters (m)'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) - Clean Utility Design */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Calculation Result
                </span>
              </div>

              {calculation.isValid ? (
                <>
                  {/* Large Bold Result */}
                  <div>
                    <span className="text-xs text-[#6B6357] block">Fabric Weight</span>
                    <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                      {calculation.gsm}{' '}
                      <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">
                        g/m² (GSM)
                      </span>
                    </div>
                  </div>

                  {/* Secondary Converted Value */}
                  <div className="p-3 bg-white border border-[#E0D8CB] rounded-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#7A7266] uppercase font-mono">
                        US Trade Weight (OSY)
                      </span>
                      <div className="text-xl font-bold font-serif-heading text-[#1C1C1C]">
                        {calculation.oz} oz/yd²
                      </div>
                    </div>
                    <span className="text-xs text-[#7A7266]">
                      ounces per sq yd
                    </span>
                  </div>

                  {/* Simple Explanation */}
                  <div className="text-xs text-[#4A443B] space-y-1">
                    <span className="font-semibold text-[#1C1C1C]">Classification: </span>
                    <span className="font-medium">{calculation.category}</span>
                    <p className="text-[#6B6357]">
                      Common examples: {calculation.examples.join(', ')}.
                    </p>
                  </div>

                  {/* Formula Used */}
                  <div className="pt-2 border-t border-[#E8E2D9] text-xs font-mono text-[#5C554B] space-y-1">
                    <div className="font-sans font-semibold text-[#1C1C1C]">Formula Used:</div>
                    <div>GSM = Weight (g) ÷ Area (m²)</div>
                    <div>1. Area = {calculation.areaM2} m²</div>
                    <div>2. {weightGrams}g ÷ {calculation.areaM2} m² = <strong className="text-[#1C1C1C]">{calculation.gsm} GSM</strong></div>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-xs text-[#7A7266]">
                  {calculation.error}
                </div>
              )}
            </div>

            {/* Clear and Copy Result Buttons beside each other */}
            <ToolActionButtons
              onClear={handleClear}
              resultText={resultSummary}
            />
          </div>
        </div>
      </div>

      {/* Formula in Simple English & Step-by-Step Breakdown */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          The GSM Formula Explained
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          GSM stands for <strong>Grams per Square Meter</strong>. It indicates how much one square meter (1 m × 1 m) of fabric weighs. The standard formula is:
        </p>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-sm text-[#1C1C1C]">
          GSM = Fabric Weight in Grams ÷ Fabric Area in Square Meters
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="font-semibold text-[#1C1C1C] block mb-1">Centimeters (cm)</span>
            <code className="block text-[#4A443B]">GSM = (Weight in g × 10,000) ÷ (L × W in cm)</code>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="font-semibold text-[#1C1C1C] block mb-1">Inches (in)</span>
            <code className="block text-[#4A443B]">GSM = (Weight in g × 1,550) ÷ (L × W in inches)</code>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="font-semibold text-[#1C1C1C] block mb-1">Convert to oz/yd²</span>
            <code className="block text-[#4A443B]">oz/yd² = GSM ÷ 33.9057</code>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Testing a Cotton T-Shirt Knit
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You cut a <strong>10 cm × 10 cm</strong> swatch from a bolt of cotton jersey knit and weigh it on a digital kitchen scale. The reading is <strong>1.8 grams</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Step 1: Calculate swatch area:</strong> 10 cm × 10 cm = 100 cm² = 0.01 m².</li>
            <li><strong>Step 2: Divide weight by area:</strong> 1.8 grams ÷ 0.01 m² = <strong>180 GSM</strong>.</li>
            <li><strong>Step 3: Convert to US ounces:</strong> 180 ÷ 33.9057 = <strong>5.3 oz/yd²</strong>.</li>
          </ul>
          <p className="text-xs sm:text-sm pt-1">
            <strong>Conclusion:</strong> 180 GSM (5.3 oz/yd²) is the industry standard medium weight for quality everyday cotton t-shirts and polo shirts.
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <ToolCommonMistakes mistakes={GSM_MISTAKES} toolName="the Fabric GSM Calculator" />

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
