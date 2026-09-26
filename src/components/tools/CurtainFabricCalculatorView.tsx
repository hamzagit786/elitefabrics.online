import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

interface CurtainFabricCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Ordering fabric equal to window width with zero fullness',
    solution: 'Flat sheets across a window look cheap and skimpy. Multiply window track width by 1.5x to 2.5x so the drapery forms deep, elegant folds when drawn shut.'
  },
  {
    mistake: 'Forgetting header and hem turn-under allowances',
    solution: 'Always add 12 inches to the finished drop length (8 inches for a weighted double bottom hem and 4 inches for top buckram heading).'
  },
  {
    mistake: 'Ignoring vertical pattern repeats on patterned fabrics',
    solution: 'If your fabric has a 16-inch floral or damask repeat, each cut panel must be rounded up to a full repeat multiple so patterns line up horizontally across the window.'
  },
  {
    mistake: 'Measuring from the window frame rather than the curtain rod',
    solution: 'Curtain rods are typically installed 4 to 8 inches above the window frame and extend 6 to 12 inches past each side to maximize natural light.'
  }
];

export const CurtainFabricCalculatorView: React.FC<CurtainFabricCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'curtain-fabric-calculator')!;

  // Inputs
  const [windowWidth, setWindowWidth] = useState<string>('72');
  const [finishedDrop, setFinishedDrop] = useState<string>('84');
  const [fullness, setFullness] = useState<number>(2.0);
  const [boltWidth, setBoltWidth] = useState<number>(54);
  const [hemAllowance, setHemAllowance] = useState<string>('12');
  const [patternRepeat, setPatternRepeat] = useState<string>('0');
  const [pairCount, setPairCount] = useState<number>(1);

  // Live calculation
  const calculation = useMemo(() => {
    const width = parseFloat(windowWidth);
    const drop = parseFloat(finishedDrop);
    const hem = parseFloat(hemAllowance) || 12;
    const repeat = parseFloat(patternRepeat) || 0;

    if (isNaN(width) || isNaN(drop) || width <= 0 || drop <= 0) {
      return {
        isValid: false,
        error: 'Please enter valid positive numbers for window width and drop length.',
        totalWidths: 0,
        cutLengthInches: 0,
        totalYardsExact: 0,
        roundedYards: 0,
        formattedYards: '0',
        roundedMeters: 0,
        panelNote: ''
      };
    }

    // 1. Total gathered width needed
    const totalGatheredWidth = width * fullness;

    // 2. Number of fabric widths/panels needed across bolt width
    const widthsPerWindow = Math.ceil(totalGatheredWidth / boltWidth);
    const totalWidths = widthsPerWindow * pairCount;

    // 3. Raw cut length per panel
    let cutLength = drop + hem;

    // If there is a pattern repeat, adjust cut length to next multiple of repeat
    if (repeat > 0) {
      cutLength = Math.ceil(cutLength / repeat) * repeat;
    }

    // 4. Total linear inches & yards
    const totalLinearInches = totalWidths * cutLength;
    const totalYardsExact = totalLinearInches / 36;
    const roundedYards = Math.ceil(totalYardsExact * 8) / 8; // round to 1/8 yard
    const roundedMeters = Math.round(roundedYards * 0.9144 * 10) / 10;

    // Fractional yardage display
    const whole = Math.floor(roundedYards);
    const frac = roundedYards - whole;
    let fracStr = '';
    if (Math.abs(frac - 0.125) < 0.01) fracStr = '⅛';
    else if (Math.abs(frac - 0.25) < 0.01) fracStr = '¼';
    else if (Math.abs(frac - 0.375) < 0.01) fracStr = '⅜';
    else if (Math.abs(frac - 0.5) < 0.01) fracStr = '½';
    else if (Math.abs(frac - 0.625) < 0.01) fracStr = '⅝';
    else if (Math.abs(frac - 0.75) < 0.01) fracStr = '¾';
    else if (Math.abs(frac - 0.875) < 0.01) fracStr = '⅞';

    const formattedYards = fracStr ? (whole > 0 ? `${whole} ${fracStr}` : fracStr) : `${whole}`;

    const panelNote = `${totalWidths} panel width(s) of ${cutLength}" cut length (${widthsPerWindow} widths for ${width}" track at ${fullness}× fullness on ${boltWidth}" bolt).`;

    return {
      isValid: true,
      error: null,
      totalWidths,
      cutLengthInches: cutLength,
      totalYardsExact: Math.round(totalYardsExact * 100) / 100,
      roundedYards,
      formattedYards,
      roundedMeters,
      panelNote
    };
  }, [windowWidth, finishedDrop, fullness, boltWidth, hemAllowance, patternRepeat, pairCount]);

  const handleClear = () => {
    setWindowWidth('');
    setFinishedDrop('');
    setPatternRepeat('0');
  };

  const resultSummary = calculation.isValid
    ? `Curtain Yardage: ${calculation.formattedYards} Yards (${calculation.roundedMeters}m) | ${calculation.totalWidths} panels @ ${calculation.cutLengthInches}" cut | ${windowWidth}" wide window @ ${fullness}x fullness on ${boltWidth}" bolt | Calculated via Elite Fabrics (https://elitefabrics.online/tools/curtain-fabric-calculator)`
    : '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Curtain Fabric Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B42] leading-normal">
          Calculate the exact yardage, number of panel widths, and cut lengths for custom window curtains and draperies.
        </p>
      </div>

      <ToolTrustSignals />

      {/* THE CALCULATOR */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Window &amp; Drapery Parameters
          </span>
          <div className="flex items-center gap-2 text-xs text-[#7A7266]">
            <span>Preset Windows:</span>
            <button
              type="button"
              onClick={() => { setWindowWidth('36'); setFinishedDrop('63'); setFullness(2.0); }}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              Small (36"×63")
            </button>
            <button
              type="button"
              onClick={() => { setWindowWidth('72'); setFinishedDrop('84'); setFullness(2.0); }}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              Standard (72"×84")
            </button>
            <button
              type="button"
              onClick={() => { setWindowWidth('96'); setFinishedDrop('96'); setFullness(2.5); }}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              Grand (96"×96")
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Window Width & Drop Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="curtain-win-width" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Track / Rod Width (Inches)
                </label>
                <input
                  id="curtain-win-width"
                  type="number"
                  min="10"
                  step="1"
                  value={windowWidth}
                  onChange={(e) => setWindowWidth(e.target.value)}
                  placeholder="e.g. 72"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <p className="text-xs text-[#7A7266] mt-1">Width of rod including past-frame overlap.</p>
              </div>

              <div>
                <label htmlFor="curtain-drop" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Finished Drop Length (Inches)
                </label>
                <input
                  id="curtain-drop"
                  type="number"
                  min="20"
                  step="1"
                  value={finishedDrop}
                  onChange={(e) => setFinishedDrop(e.target.value)}
                  placeholder="e.g. 84"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <p className="text-xs text-[#7A7266] mt-1">From rod down to sill or floor.</p>
              </div>
            </div>

            {/* Fullness Ratio */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                Fullness Ratio (Gathering Density)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: '1.5× Wave', val: 1.5 },
                  { label: '2.0× Standard', val: 2.0 },
                  { label: '2.5× Rich', val: 2.5 },
                  { label: '3.0× Sheer', val: 3.0 }
                ].map((f) => (
                  <button
                    key={f.val}
                    type="button"
                    onClick={() => setFullness(f.val)}
                    className={`min-h-[42px] py-1.5 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                      fullness === f.val
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bolt Width */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                Fabric Bolt Width
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '54" Standard', val: 54 },
                  { label: '60" Wide Apparel', val: 60 },
                  { label: '118" Extra-Wide', val: 118 }
                ].map((bw) => (
                  <button
                    key={bw.val}
                    type="button"
                    onClick={() => setBoltWidth(bw.val)}
                    className={`min-h-[42px] py-1.5 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                      boltWidth === bw.val
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {bw.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Pattern Repeat & Hems */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="curtain-repeat" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Vertical Pattern Repeat (Inches)
                </label>
                <input
                  id="curtain-repeat"
                  type="number"
                  min="0"
                  step="0.5"
                  value={patternRepeat}
                  onChange={(e) => setPatternRepeat(e.target.value)}
                  placeholder="0 for solids"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <p className="text-xs text-[#7A7266] mt-1">Leave at 0 for solid fabrics.</p>
              </div>

              <div>
                <label htmlFor="curtain-hems" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Hem + Header Allowance
                </label>
                <input
                  id="curtain-hems"
                  type="number"
                  min="4"
                  step="1"
                  value={hemAllowance}
                  onChange={(e) => setHemAllowance(e.target.value)}
                  placeholder="12"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <p className="text-xs text-[#7A7266] mt-1">Standard: 8" bottom + 4" header (12").</p>
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Required Drapery Yardage
                </span>
              </div>

              {calculation.isValid ? (
                <>
                  {/* Large Bold Result */}
                  <div>
                    <span className="text-xs text-[#6B6357] block">Fabric Store Cut</span>
                    <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                      {calculation.formattedYards}{' '}
                      <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">
                        Yards
                      </span>
                    </div>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      Exact linear measurement: {calculation.totalYardsExact} yards
                    </p>
                  </div>

                  {/* Secondary Converted Metric */}
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
                      {calculation.totalWidths} panels required
                    </span>
                  </div>

                  {/* Cutting Breakdown */}
                  <div className="text-xs text-[#4A443B] space-y-1.5 p-3 bg-white border border-[#E0D8CB] rounded-md">
                    <span className="font-semibold text-[#1C1C1C] block">Workroom Cutting Breakdown:</span>
                    <div>• <strong>Panel Cut Length:</strong> {calculation.cutLengthInches} inches per panel</div>
                    <div>• <strong>Total Panel Widths:</strong> {calculation.totalWidths} full widths across {boltWidth}" fabric</div>
                    <div>• <strong>Layout:</strong> {calculation.panelNote}</div>
                  </div>

                  {/* Formula Breakdown */}
                  <div className="pt-2 border-t border-[#E8E2D9] text-xs font-mono text-[#5C554B] space-y-1">
                    <div className="font-sans font-semibold text-[#1C1C1C]">Formula Used:</div>
                    <div>1. Widths = ⌈({windowWidth}" × {fullness}) ÷ {boltWidth}"⌉ = {calculation.totalWidths} panels</div>
                    <div>2. Cut Length = {finishedDrop}" drop + {hemAllowance}" hems = {calculation.cutLengthInches}"</div>
                    <div>3. Total Yards = ({calculation.totalWidths} × {calculation.cutLengthInches}") ÷ 36 = <strong className="text-[#1C1C1C]">{calculation.formattedYards} yds</strong></div>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-xs text-[#7A7266]">
                  {calculation.error}
                </div>
              )}
            </div>

            <ToolActionButtons
              onClear={handleClear}
              resultText={resultSummary}
            />
          </div>
        </div>
      </div>

      {/* Formula in Plain English */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          The Curtain Yardage Formula in Plain English
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          Curtain yardage is determined in three simple steps:
        </p>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-xs sm:text-sm text-[#1C1C1C] space-y-1">
          <div>Step 1: Total Fabric Width = Track Width × Fullness Ratio</div>
          <div>Step 2: Number of Panels = Total Fabric Width ÷ Bolt Width (rounded up)</div>
          <div>Step 3: Total Yards = (Number of Panels × Cut Length in Inches) ÷ 36</div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Making Floor-Length Living Room Drapes
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You want to make a pair of pinch-pleat drapes for a <strong>72-inch wide</strong> window track with an <strong>84-inch finished drop</strong> using <strong>54-inch wide linen fabric</strong> at <strong>2.0x fullness</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Gathered Width:</strong> 72" × 2.0 = 144 inches of fabric needed.</li>
            <li><strong>Panels:</strong> 144" ÷ 54" bolt width = 2.66 &rarr; round up to <strong>3 panel widths</strong> (1.5 panels per side).</li>
            <li><strong>Cut Length:</strong> 84" drop + 12" hem/header = <strong>96 inches</strong> per panel.</li>
            <li><strong>Total Yardage:</strong> 3 panels × 96" = 288 linear inches ÷ 36 = <strong>8.0 Yards (7.3 meters)</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Common Mistakes */}
      <ToolCommonMistakes mistakes={COMMON_MISTAKES} toolName="the Curtain Fabric Calculator" />

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
