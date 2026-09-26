import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { FABRIC_TOOLS } from '../../data/tools';

interface FabricShrinkageCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type MeasurementUnit = 'inches' | 'cm';

interface FiberBenchmark {
  name: string;
  typicalShrinkage: string;
  notes: string;
}

const FIBER_BENCHMARKS: Record<string, FiberBenchmark> = {
  cotton: {
    name: '100% Cotton & Lawn',
    typicalShrinkage: '3% – 5%',
    notes: 'Natural cellulose fibers contract lengthwise. Warm water and tumble drying increase contraction.'
  },
  linen: {
    name: 'Pure Linen (Flax)',
    typicalShrinkage: '4% – 7%',
    notes: 'Bast fibers relax significantly on the first laundry cycle. Pre-washing before cutting is mandatory.'
  },
  rayon: {
    name: 'Rayon / Viscose / Modal',
    typicalShrinkage: '5% – 8%',
    notes: 'Regenerated cellulose swells and shortens when wet. Cold water and flat drying minimize loss.'
  },
  wool: {
    name: 'Wool & Cashmere',
    typicalShrinkage: '5% – 15%+',
    notes: 'Microscopic scales interlock and felt under hot water and agitation. Hand wash cold or dry clean.'
  },
  denim: {
    name: 'Raw Unsanforized Denim',
    typicalShrinkage: '8% – 12%',
    notes: 'Shrinks up to 2 inches in waist and 3 inches in inseam length on first soak.'
  },
  silk: {
    name: 'Natural Silk',
    typicalShrinkage: '2% – 4%',
    notes: 'Protein filament fibers experience minor contraction when wet. Cold hand washing recommended.'
  },
  polyester: {
    name: 'Polyester & Synthetics',
    typicalShrinkage: '0% – 1%',
    notes: 'Thermoplastic synthetic fibers are heat-set during manufacturing and remain highly stable.'
  }
};

export const FabricShrinkageCalculatorView: React.FC<FabricShrinkageCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'fabric-shrinkage-calculator')!;

  // Inputs
  const [unit, setUnit] = useState<MeasurementUnit>('inches');
  const [selectedFiber, setSelectedFiber] = useState<string>('cotton');
  const [useSeparateAxes, setUseSeparateAxes] = useState<boolean>(true);

  const [beforeLength, setBeforeLength] = useState<string>('10.0');
  const [afterLength, setAfterLength] = useState<string>('9.5');
  const [beforeWidth, setBeforeWidth] = useState<string>('10.0');
  const [afterWidth, setAfterWidth] = useState<string>('9.7');

  const calculation = useMemo(() => {
    const bL = parseFloat(beforeLength);
    const aL = parseFloat(afterLength);

    if (isNaN(bL) || isNaN(aL) || bL <= 0 || aL < 0) {
      return {
        isValid: false,
        error: 'Enter positive numbers for your swatch measurements.'
      };
    }

    const diffL = bL - aL;
    const percentL = ((bL - aL) / bL) * 100;
    const isStretchL = aL > bL;

    let widthData: {
      diffW: number;
      percentW: number;
      isStretchW: boolean;
      isValid: boolean;
    } | null = null;

    if (useSeparateAxes) {
      const bW = parseFloat(beforeWidth);
      const aW = parseFloat(afterWidth);
      if (!isNaN(bW) && !isNaN(aW) && bW > 0 && aW >= 0) {
        widthData = {
          diffW: bW - aW,
          percentW: ((bW - aW) / bW) * 100,
          isStretchW: aW > bW,
          isValid: true
        };
      }
    }

    const absPercent = Math.abs(percentL);
    let recommendation = '';

    if (isStretchL) {
      recommendation = `Fabric expanded by ${Math.abs(percentL).toFixed(1)}%. Common in loose knits or spandex that stretch when wet.`;
    } else if (absPercent <= 3.0) {
      recommendation = `Low shrinkage (${percentL.toFixed(1)}%). Excellent dimensional stability. Pre-shrunk fabric. Standard seam allowances are fine.`;
    } else if (absPercent <= 6.0) {
      recommendation = `Standard natural fiber shrinkage (${percentL.toFixed(1)}%). Pre-wash before cutting and add extra hem allowance.`;
    } else {
      recommendation = `High shrinkage (${percentL.toFixed(1)}%). Wash swatches twice prior to cutting and add extra pattern length.`;
    }

    return {
      isValid: true,
      error: null,
      percentL: Math.round(percentL * 10) / 10,
      diffL: Math.round(Math.abs(diffL) * 100) / 100,
      isStretchL,
      widthData: widthData
        ? {
            percentW: Math.round(widthData.percentW * 10) / 10,
            diffW: Math.round(Math.abs(widthData.diffW) * 100) / 100,
            isStretchW: widthData.isStretchW
          }
        : null,
      recommendation
    };
  }, [beforeLength, afterLength, beforeWidth, afterWidth, useSeparateAxes]);

  const handleClear = () => {
    setBeforeLength('');
    setAfterLength('');
    setBeforeWidth('');
    setAfterWidth('');
  };

  const currentBenchmark = FIBER_BENCHMARKS[selectedFiber] || FIBER_BENCHMARKS.cotton;

  const resultSummary = calculation.isValid
    ? `Fabric Shrinkage Result: ${calculation.isStretchL ? '+' : ''}${calculation.percentL}% Length ${calculation.isStretchL ? 'Stretch' : 'Shrinkage'}${calculation.widthData ? ` | Width: ${calculation.widthData.percentW}%` : ''} | Fiber: ${currentBenchmark.name} | Swatch: Before ${beforeLength}${unit}, After ${afterLength}${unit} | Calculated via Elite Fabrics (https://elitefabrics.online/tools/fabric-shrinkage-calculator)`
    : '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Shrinkage Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B40] leading-normal">
          Calculate length and width shrinkage percentages before cutting to ensure your garments fit properly after laundering.
        </p>
      </div>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* THE CALCULATOR (At top, visible without scrolling) */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Swatch Measurements
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#7A7266] mr-1">Unit:</span>
            <button
              type="button"
              onClick={() => setUnit('inches')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                unit === 'inches' ? 'bg-[#1C1C1C] text-white' : 'bg-white text-[#524B40] border border-[#DDD5C7]'
              }`}
            >
              Inches (in)
            </button>
            <button
              type="button"
              onClick={() => setUnit('cm')}
              className={`px-2.5 py-1 text-xs font-semibold rounded ${
                unit === 'cm' ? 'bg-[#1C1C1C] text-white' : 'bg-white text-[#524B40] border border-[#DDD5C7]'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Fiber selector */}
            <div>
              <label htmlFor="shrinkage-fiber" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Fiber Type (Reference Benchmark)
              </label>
              <select
                id="shrinkage-fiber"
                value={selectedFiber}
                onChange={(e) => setSelectedFiber(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-[#D0C7BA] rounded-md text-sm font-medium text-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C]"
              >
                {Object.keys(FIBER_BENCHMARKS).map((key) => (
                  <option key={key} value={key}>
                    {FIBER_BENCHMARKS[key].name} (Typical: {FIBER_BENCHMARKS[key].typicalShrinkage})
                  </option>
                ))}
              </select>
            </div>

            {/* Length Inputs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Length (Warp Grain)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="before-length" className="block text-xs text-[#6B6357] mb-1">Before Wash</label>
                  <div className="relative">
                    <input
                      id="before-length"
                      type="number"
                      step="0.05"
                      min="0.1"
                      value={beforeLength}
                      onChange={(e) => setBeforeLength(e.target.value)}
                      placeholder="e.g. 10.0"
                      className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
                    />
                    <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">{unit}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="after-length" className="block text-xs text-[#6B6357] mb-1">After Wash</label>
                  <div className="relative">
                    <input
                      id="after-length"
                      type="number"
                      step="0.05"
                      min="0.1"
                      value={afterLength}
                      onChange={(e) => setAfterLength(e.target.value)}
                      placeholder="e.g. 9.5"
                      className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
                    />
                    <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">{unit}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Width Inputs */}
            {useSeparateAxes && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Width (Weft Grain)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="before-width" className="block text-xs text-[#6B6357] mb-1">Before Wash</label>
                    <div className="relative">
                      <input
                        id="before-width"
                        type="number"
                        step="0.05"
                        min="0.1"
                        value={beforeWidth}
                        onChange={(e) => setBeforeWidth(e.target.value)}
                        placeholder="e.g. 10.0"
                        className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
                      />
                      <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">{unit}</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="after-width" className="block text-xs text-[#6B6357] mb-1">After Wash</label>
                    <div className="relative">
                      <input
                        id="after-width"
                        type="number"
                        step="0.05"
                        min="0.1"
                        value={afterWidth}
                        onChange={(e) => setAfterWidth(e.target.value)}
                        placeholder="e.g. 9.7"
                        className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
                      />
                      <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">{unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Axis toggle */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-[#6B6357]">Measure width (weft) separately:</span>
              <button
                type="button"
                onClick={() => setUseSeparateAxes(!useSeparateAxes)}
                className="text-xs font-semibold text-[#1C1C1C] hover:underline"
              >
                {useSeparateAxes ? 'Disable Width' : 'Enable Width'}
              </button>
            </div>
          </div>

          {/* Results Output (6 cols) - Clean Utility Design */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Shrinkage Rate
                </span>
              </div>

              {calculation.isValid ? (
                <>
                  {/* Large Bold Result */}
                  <div>
                    <span className="text-xs text-[#6B6357] block">Length (Warp) Shrinkage</span>
                    <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                      {calculation.isStretchL ? '+' : ''}{calculation.percentL}%
                    </div>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      {calculation.isStretchL
                        ? `Fabric expanded by ${calculation.diffL} ${unit}`
                        : `Lost ${calculation.diffL} ${unit} along length`}
                    </p>
                  </div>

                  {/* Width result */}
                  {calculation.widthData && (
                    <div className="p-3 bg-white border border-[#E0D8CB] rounded-md flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#7A7266] uppercase font-mono">
                          Width (Weft) Shrinkage
                        </span>
                        <div className="text-xl font-bold font-serif-heading text-[#1C1C1C]">
                          {calculation.widthData.isStretchW ? '+' : ''}{calculation.widthData.percentW}%
                        </div>
                      </div>
                      <span className="text-xs text-[#7A7266]">
                        {calculation.widthData.diffW} {unit} {calculation.widthData.isStretchW ? 'growth' : 'loss'}
                      </span>
                    </div>
                  )}

                  {/* Simple Explanation */}
                  <div className="text-xs text-[#4A443B] space-y-1">
                    <span className="font-semibold text-[#1C1C1C]">Recommendation: </span>
                    <p className="text-[#5C554B] leading-relaxed">
                      {calculation.recommendation}
                    </p>
                  </div>

                  {/* Formula Used */}
                  <div className="pt-2 border-t border-[#E8E2D9] text-xs font-mono text-[#5C554B] space-y-1">
                    <div className="font-sans font-semibold text-[#1C1C1C]">Formula Used:</div>
                    <div>Shrinkage % = ((Before - After) ÷ Before) × 100</div>
                    <div>(({beforeLength} - {afterLength}) ÷ {beforeLength}) × 100 = <strong className="text-[#1C1C1C]">{calculation.percentL}%</strong></div>
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

      {/* Formula in Simple English */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          The Shrinkage Formula in Plain English
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          The textile industry calculates shrinkage as the dimensional change between pre-wash and post-wash measurements relative to the original size:
        </p>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-sm text-[#1C1C1C]">
          Shrinkage % = ((Before Wash - After Wash) ÷ Before Wash) × 100
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Pre-Washing Pure Linen for a Dress
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You buy 100% linen to sew a 40-inch long summer dress. Before cutting, you cut a <strong>10.0-inch × 10.0-inch</strong> swatch and wash it in warm water:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>After Wash Measurement:</strong> 9.4 inches long by 9.7 inches wide.</li>
            <li><strong>Length Shrinkage:</strong> ((10.0 - 9.4) ÷ 10.0) × 100 = <strong>6.0% shrinkage</strong>.</li>
            <li><strong>Width Shrinkage:</strong> ((10.0 - 9.7) ÷ 10.0) × 100 = <strong>3.0% shrinkage</strong>.</li>
          </ul>
          <p className="text-xs sm:text-sm pt-1">
            <strong>Why it matters:</strong> Without pre-washing, the 40-inch dress hem would have shortened by <strong>2.4 inches</strong> (40" × 6%) on its very first wash.
          </p>
        </div>
      </section>

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
