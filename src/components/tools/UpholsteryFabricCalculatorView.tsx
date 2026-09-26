import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

interface UpholsteryFabricCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type FurnitureItem = 'armchair' | 'wingback' | 'loveseat' | 'sofa' | 'sectional' | 'dining-chair' | 'ottoman';

interface FurnitureBenchmark {
  label: string;
  baseYards: number;
  description: string;
}

const BENCHMARKS: Record<FurnitureItem, FurnitureBenchmark> = {
  'armchair': { label: 'Standard Armchair / Club Chair', baseYards: 7.5, description: 'Single seat armchair with tight back and 1 loose seat cushion.' },
  'wingback': { label: 'Wingback Chair', baseYards: 8.5, description: 'High back wing chair with side wings and loose cushion.' },
  'loveseat': { label: '2-Seat Loveseat (55"–65")', baseYards: 12.0, description: 'Standard 2-seat sofa with 2 seat and 2 back cushions.' },
  'sofa': { label: '3-Seat Sofa (78"–88")', baseYards: 16.0, description: 'Standard 3-cushion family room couch with arms and back.' },
  'sectional': { label: 'Large L-Sectional (5-Seat)', baseYards: 28.0, description: 'Corner sectional sofa with chaise and multi-seat cushions.' },
  'dining-chair': { label: 'Dining Chair (Seat Cushion Only)', baseYards: 0.75, description: 'Slip-seat dining chair pad wrapped over foam and stapled to plywood base.' },
  'ottoman': { label: 'Standard Ottoman / Footstool', baseYards: 2.5, description: 'Rectangular footstool or cube storage ottoman.' }
};

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Using lightweight apparel fabric instead of upholstery-grade textiles',
    solution: 'Apparel fabrics lack backing stabilizers and tear quickly along seam tension points. Choose fabrics with at least 15,000+ Wyzenbeek double rubs.'
  },
  {
    mistake: 'Forgetting bias welt cord (piping) yardage',
    solution: 'Welt cord requires long strips cut on the 45-degree true bias to wrap neatly around curved corners. Add 1.5 to 2.5 yards if your piece features contrast piping.'
  },
  {
    mistake: 'Ignoring plaid or floral pattern repeat alignment',
    solution: 'Centering a large medallion or aligning stripes across cushions, seat deck, and arms consumes 15% to 25% extra fabric.'
  },
  {
    mistake: 'Not accounting for fabric pull and stapling margins',
    solution: 'Upholsterers need at least 2 to 3 inches of excess perimeter allowance around every frame component to grip and pull fabric taut before air-stapling.'
  }
];

export const UpholsteryFabricCalculatorView: React.FC<UpholsteryFabricCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'upholstery-fabric-calculator')!;

  // Inputs
  const [furnitureType, setFurnitureType] = useState<FurnitureItem>('sofa');
  const [quantity, setQuantity] = useState<number>(1);
  const [includeWelting, setIncludeWelting] = useState<boolean>(true);
  const [includeSkirt, setIncludeSkirt] = useState<boolean>(false);
  const [patternMatchPercent, setPatternMatchPercent] = useState<number>(0);
  const [extraSafetyMargin, setExtraSafetyMargin] = useState<number>(10);

  // Live calculation
  const calculation = useMemo(() => {
    const item = BENCHMARKS[furnitureType];
    let yards = item.baseYards * quantity;

    // Add welting piping
    let weltingYards = 0;
    if (includeWelting) {
      if (furnitureType === 'dining-chair') weltingYards = 0.25 * quantity;
      else if (furnitureType === 'ottoman') weltingYards = 0.75 * quantity;
      else if (furnitureType === 'armchair' || furnitureType === 'wingback') weltingYards = 1.5 * quantity;
      else if (furnitureType === 'loveseat') weltingYards = 2.0 * quantity;
      else if (furnitureType === 'sofa') weltingYards = 2.5 * quantity;
      else if (furnitureType === 'sectional') weltingYards = 4.0 * quantity;
    }

    // Add tailored skirt
    let skirtYards = 0;
    if (includeSkirt) {
      if (furnitureType === 'dining-chair') skirtYards = 0.5 * quantity;
      else if (furnitureType === 'armchair' || furnitureType === 'wingback') skirtYards = 1.5 * quantity;
      else if (furnitureType === 'loveseat') skirtYards = 2.0 * quantity;
      else if (furnitureType === 'sofa') skirtYards = 2.5 * quantity;
      else if (furnitureType === 'sectional') skirtYards = 4.5 * quantity;
    }

    const subtotal = yards + weltingYards + skirtYards;

    // Pattern repeat factor
    const patternExtra = subtotal * (patternMatchPercent / 100);

    // Safety waste margin
    const safetyExtra = (subtotal + patternExtra) * (extraSafetyMargin / 100);

    const totalYardsExact = subtotal + patternExtra + safetyExtra;
    const roundedYards = Math.ceil(totalYardsExact * 4) / 4; // round to 1/4 yard
    const roundedMeters = Math.round(roundedYards * 0.9144 * 10) / 10;

    return {
      baseYards: Math.round(yards * 10) / 10,
      weltingYards: Math.round(weltingYards * 10) / 10,
      skirtYards: Math.round(skirtYards * 10) / 10,
      patternExtra: Math.round(patternExtra * 10) / 10,
      safetyExtra: Math.round(safetyExtra * 10) / 10,
      totalYardsExact: Math.round(totalYardsExact * 100) / 100,
      roundedYards,
      roundedMeters,
      description: item.description
    };
  }, [furnitureType, quantity, includeWelting, includeSkirt, patternMatchPercent, extraSafetyMargin]);

  const handleClear = () => {
    setFurnitureType('sofa');
    setQuantity(1);
    setIncludeWelting(true);
    setIncludeSkirt(false);
    setPatternMatchPercent(0);
  };

  const resultSummary = `Upholstery Yardage: ${calculation.roundedYards} Yards (${calculation.roundedMeters}m) of 54" fabric for ${quantity} × ${BENCHMARKS[furnitureType].label} | Includes welting: ${includeWelting ? 'Yes' : 'No'} | Calculated via Elite Fabrics (https://elitefabrics.online/tools/upholstery-fabric-calculator)`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Upholstery Fabric Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B42] leading-normal">
          Estimate reliable fabric yardage benchmarks for reupholstering sofas, armchairs, dining seats, and ottomans.
        </p>
      </div>

      <ToolTrustSignals />

      {/* CALCULATOR */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Furniture Specifications (54" Standard Bolt Width)
          </span>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Furniture Type Selector */}
            <div>
              <label htmlFor="furniture-select" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Furniture Piece
              </label>
              <select
                id="furniture-select"
                value={furnitureType}
                onChange={(e) => setFurnitureType(e.target.value as FurnitureItem)}
                className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
              >
                {Object.entries(BENCHMARKS).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.label} ({val.baseYards} yds base)
                  </option>
                ))}
              </select>
              <p className="text-xs text-[#7A7266] mt-1">{BENCHMARKS[furnitureType].description}</p>
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="uph-quantity" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Quantity of Pieces
              </label>
              <input
                id="uph-quantity"
                type="number"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
              />
            </div>

            {/* Options Checkboxes */}
            <div className="p-3.5 bg-[#FAF8F5] border border-[#E4DDD1] rounded-md space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3A352E] block">
                Styling &amp; Detail Options
              </span>

              <label className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3A352E] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeWelting}
                  onChange={(e) => setIncludeWelting(e.target.checked)}
                  className="w-4 h-4 rounded border-[#C0B7A8] text-[#1C1C1C] focus:ring-[#1C1C1C]"
                />
                <span>Include Self-Fabric Welt Cord / Piping (+1.5–2.5 yds)</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3A352E] cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeSkirt}
                  onChange={(e) => setIncludeSkirt(e.target.checked)}
                  className="w-4 h-4 rounded border-[#C0B7A8] text-[#1C1C1C] focus:ring-[#1C1C1C]"
                />
                <span>Include Tailored Box-Pleat Skirt (+1.5–2.5 yds)</span>
              </label>
            </div>

            {/* Pattern Matching */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                Pattern Repeat Match Factor
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Solid (0%)', val: 0 },
                  { label: 'Small (10%)', val: 10 },
                  { label: 'Medium (15%)', val: 15 },
                  { label: 'Large (20%)', val: 20 }
                ].map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => setPatternMatchPercent(p.val)}
                    className={`min-h-[42px] py-1.5 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                      patternMatchPercent === p.val
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Recommended Upholstery Yardage
                </span>
              </div>

              <div>
                <span className="text-xs text-[#6B6357] block">Commercial Bolt Cut</span>
                <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                  {calculation.roundedYards}{' '}
                  <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">
                    Yards
                  </span>
                </div>
                <p className="text-xs text-[#7A7266] mt-0.5">
                  Standard 54-inch wide upholstery fabric ({calculation.totalYardsExact} exact yds)
                </p>
              </div>

              {/* Metric Equivalent */}
              <div className="p-3 bg-white border border-[#E0D8CB] rounded-md flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A7266] uppercase font-mono">
                    Metric Equivalent
                  </span>
                  <div className="text-xl font-bold font-serif-heading text-[#1C1C1C]">
                    {calculation.roundedMeters} Meters
                  </div>
                </div>
                <span className="text-xs text-[#7A7266]">
                  137 cm bolt width
                </span>
              </div>

              {/* Itemized Yardage Breakdown */}
              <div className="text-xs text-[#4A443B] space-y-1.5 p-3 bg-white border border-[#E0D8CB] rounded-md">
                <span className="font-semibold text-[#1C1C1C] block">Workroom Yardage Breakdown:</span>
                <div className="flex justify-between">
                  <span>• Base Frame &amp; Cushions:</span>
                  <span className="font-mono">{calculation.baseYards} yds</span>
                </div>
                {includeWelting && (
                  <div className="flex justify-between">
                    <span>• Bias Welt Cord Piping:</span>
                    <span className="font-mono">+{calculation.weltingYards} yds</span>
                  </div>
                )}
                {includeSkirt && (
                  <div className="flex justify-between">
                    <span>• Tailored Skirt:</span>
                    <span className="font-mono">+{calculation.skirtYards} yds</span>
                  </div>
                )}
                {patternMatchPercent > 0 && (
                  <div className="flex justify-between">
                    <span>• Pattern Repeat Match ({patternMatchPercent}%):</span>
                    <span className="font-mono">+{calculation.patternExtra} yds</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 border-t border-[#F0EAE1]">
                  <span>• Pull Margin &amp; Cutting Waste (10%):</span>
                  <span className="font-mono">+{calculation.safetyExtra} yds</span>
                </div>
              </div>
            </div>

            <ToolActionButtons
              onClear={handleClear}
              resultText={resultSummary}
            />
          </div>
        </div>
      </div>

      {/* Formula Explained */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Upholstery Yardage Benchmark Formula
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          Upholstery estimation compiles industry workroom averages adjusted for cushion count, welting, and pattern alignment:
        </p>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-xs sm:text-sm text-[#1C1C1C]">
          Total Yardage = (Base Furniture Yards + Welt Piping + Skirt) × (1 + Pattern Factor %) × 1.10 (Waste Margin)
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Reupholstering a 3-Cushion Family Sofa
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You want to reupholster a classic <strong>84-inch sofa</strong> with 3 loose seat cushions and self-fabric welt cord using a solid performance velvet:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Base Sofa Yardage:</strong> 16.0 yards (body, back, arms, and cushions).</li>
            <li><strong>Self-Fabric Welting:</strong> +2.5 yards cut on the true bias.</li>
            <li><strong>Subtotal:</strong> 18.5 yards.</li>
            <li><strong>Safety &amp; Pull Allowance (10%):</strong> 18.5 × 1.10 = <strong>20.35 &rarr; 20.5 Yards (18.7 meters)</strong>.</li>
          </ul>
        </div>
      </section>

      <ToolCommonMistakes mistakes={COMMON_MISTAKES} toolName="the Upholstery Fabric Calculator" />
      <ToolFAQSection faqs={toolData.faqs} />
      <ToolRelatedResources
        articleSlugs={toolData.relatedArticleSlugs}
        fabricSlugs={toolData.relatedFabricSlugs}
        onNavigate={onNavigate}
      />
    </div>
  );
};
