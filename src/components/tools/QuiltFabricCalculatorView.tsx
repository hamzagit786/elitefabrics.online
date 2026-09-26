import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

interface QuiltFabricCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type QuiltPreset = 'baby' | 'throw' | 'twin' | 'full' | 'queen' | 'king' | 'custom';

interface QuiltDimension {
  label: string;
  width: number;
  length: number;
}

const QUILT_SIZES: Record<QuiltPreset, QuiltDimension> = {
  'baby': { label: 'Baby / Crib (36" × 52")', width: 36, length: 52 },
  'throw': { label: 'Lap / Throw (50" × 65")', width: 50, length: 65 },
  'twin': { label: 'Twin Bed (70" × 90")', width: 70, length: 90 },
  'full': { label: 'Full / Double (84" × 92")', width: 84, length: 92 },
  'queen': { label: 'Queen Bed (90" × 108")', width: 90, length: 108 },
  'king': { label: 'King Bed (108" × 108")', width: 108, length: 108 },
  'custom': { label: 'Custom Quilt Dimensions', width: 60, length: 80 }
};

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Cutting backing the exact size of the quilt top',
    solution: 'Longarm quilting machines and hand-quilting frames require at least 4 inches of extra backing on all four sides (8 inches total extra width and length) for tension clamps.'
  },
  {
    mistake: 'Forgetting mitered corner allowances when calculating binding strips',
    solution: 'Always add 12 to 18 inches to the total quilt perimeter to account for continuous bias joining seams and turning the 4 corners.'
  },
  {
    mistake: 'Not pre-washing high-contrast quilt backings',
    solution: 'A red or dark navy flannel backing can bleed into white cotton top piecing on the first wash. Always test and pre-wash backing fabrics.'
  },
  {
    mistake: 'Orienting seams horizontally on heavy quilts without reinforcement',
    solution: 'Vertical seams hang naturally on beds with gravity and feed smoother onto longarm take-up rollers.'
  }
];

export const QuiltFabricCalculatorView: React.FC<QuiltFabricCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'quilt-fabric-calculator')!;

  // Inputs
  const [quiltPreset, setQuiltPreset] = useState<QuiltPreset>('throw');
  const [quiltWidth, setQuiltWidth] = useState<string>('50');
  const [quiltLength, setQuiltLength] = useState<string>('65');
  const [backingFabricWidth, setBackingFabricWidth] = useState<number>(44);
  const [overageInches, setOverageInches] = useState<number>(4); // 4" each side = 8" total
  const [bindingStripWidth, setBindingStripWidth] = useState<number>(2.5);

  const handleApplyPreset = (preset: QuiltPreset) => {
    setQuiltPreset(preset);
    if (preset !== 'custom') {
      setQuiltWidth(QUILT_SIZES[preset].width.toString());
      setQuiltLength(QUILT_SIZES[preset].length.toString());
    }
  };

  // Calculations
  const calculation = useMemo(() => {
    const w = parseFloat(quiltWidth);
    const l = parseFloat(quiltLength);

    if (isNaN(w) || isNaN(l) || w <= 0 || l <= 0) {
      return {
        isValid: false,
        error: 'Please enter positive dimensions for quilt width and length.',
        backingYards: 0,
        backingMeters: 0,
        formattedBacking: '0',
        seamsNeeded: 0,
        bindingYards: 0,
        bindingStrips: 0,
        perimeterInches: 0,
        backingSize: ''
      };
    }

    const totalBackingW = w + (overageInches * 2);
    const totalBackingL = l + (overageInches * 2);

    let backingYardsExact = 0;
    let seamsNeeded = 0;

    if (backingFabricWidth >= 100) {
      // Wide back (108" fabric)
      if (totalBackingW <= 104) {
        // Fits across width
        backingYardsExact = totalBackingL / 36;
        seamsNeeded = 0;
      } else {
        backingYardsExact = totalBackingW / 36;
        seamsNeeded = 0;
      }
    } else {
      // Standard 44" cotton (usable width approx 40"-42")
      const usableW = backingFabricWidth - 2;
      const panelsAcross = Math.ceil(totalBackingW / usableW);
      seamsNeeded = panelsAcross - 1;
      backingYardsExact = (panelsAcross * totalBackingL) / 36;
    }

    const roundedBackingYards = Math.ceil(backingYardsExact * 8) / 8;
    const backingMeters = Math.round(roundedBackingYards * 0.9144 * 10) / 10;

    // Fractional display
    const whole = Math.floor(roundedBackingYards);
    const frac = roundedBackingYards - whole;
    let fracStr = '';
    if (Math.abs(frac - 0.125) < 0.01) fracStr = '⅛';
    else if (Math.abs(frac - 0.25) < 0.01) fracStr = '¼';
    else if (Math.abs(frac - 0.375) < 0.01) fracStr = '⅜';
    else if (Math.abs(frac - 0.5) < 0.01) fracStr = '½';
    else if (Math.abs(frac - 0.625) < 0.01) fracStr = '⅝';
    else if (Math.abs(frac - 0.75) < 0.01) fracStr = '¾';
    else if (Math.abs(frac - 0.875) < 0.01) fracStr = '⅞';

    const formattedBacking = fracStr ? (whole > 0 ? `${whole} ${fracStr}` : fracStr) : `${whole}`;

    // Binding Calculation
    const perimeterInches = (w * 2) + (l * 2);
    const totalBindingLength = perimeterInches + 20; // 20" join and corner buffer
    const stripsNeeded = Math.ceil(totalBindingLength / 40); // 40" usable per 44" WOF strip
    const bindingInches = stripsNeeded * bindingStripWidth;
    const bindingYards = Math.ceil((bindingInches / 36) * 8) / 8;

    return {
      isValid: true,
      error: null,
      backingYards: roundedBackingYards,
      backingMeters,
      formattedBacking,
      seamsNeeded,
      bindingYards,
      bindingStrips: stripsNeeded,
      perimeterInches,
      backingSize: `${totalBackingW}" × ${totalBackingL}" (includes ${overageInches}" overage on all 4 sides)`
    };
  }, [quiltWidth, quiltLength, backingFabricWidth, overageInches, bindingStripWidth]);

  const handleClear = () => {
    setQuiltWidth('');
    setQuiltLength('');
    setQuiltPreset('custom');
  };

  const resultSummary = calculation.isValid
    ? `Quilt Fabric: Backing = ${calculation.formattedBacking} Yards (${calculation.backingMeters}m on ${backingFabricWidth}" fabric) | Binding = ${calculation.bindingYards} yds (${calculation.bindingStrips} strips @ ${bindingStripWidth}") | Size: ${quiltWidth}"×${quiltLength}" | Calculated via Elite Fabrics (https://elitefabrics.online/tools/quilt-fabric-calculator)`
    : '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Quilt Fabric Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B42] leading-normal">
          Calculate backing yardage, binding strip cuts, and batting dimensions for standard and custom quilts.
        </p>
      </div>

      <ToolTrustSignals />

      {/* CALCULATOR */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Quilt Dimensions
          </span>
          <div className="flex items-center flex-wrap gap-1.5 text-xs text-[#7A7266]">
            <span>Presets:</span>
            {(['baby', 'throw', 'twin', 'queen', 'king'] as QuiltPreset[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => handleApplyPreset(p)}
                className={`px-2 py-1 rounded text-xs transition-colors border ${
                  quiltPreset === p
                    ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                    : 'bg-white hover:bg-[#F2EDE4] text-[#4A443B] border-[#DDD5C7]'
                }`}
              >
                {QUILT_SIZES[p].label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="quilt-w" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Finished Quilt Width (Inches)
                </label>
                <input
                  id="quilt-w"
                  type="number"
                  min="12"
                  value={quiltWidth}
                  onChange={(e) => { setQuiltWidth(e.target.value); setQuiltPreset('custom'); }}
                  placeholder="e.g. 50"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="quilt-l" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Finished Quilt Length (Inches)
                </label>
                <input
                  id="quilt-l"
                  type="number"
                  min="12"
                  value={quiltLength}
                  onChange={(e) => { setQuiltLength(e.target.value); setQuiltPreset('custom'); }}
                  placeholder="e.g. 65"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Backing Bolt Width */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                Backing Fabric Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBackingFabricWidth(44)}
                  className={`min-h-[44px] py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                    backingFabricWidth === 44
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                      : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                  }`}
                >
                  Standard Quilting Cotton (44")
                </button>
                <button
                  type="button"
                  onClick={() => setBackingFabricWidth(108)}
                  className={`min-h-[44px] py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                    backingFabricWidth === 108
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                      : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                  }`}
                >
                  Wide-Back Fabric (108" Seamless)
                </button>
              </div>
            </div>

            {/* Longarm Overage & Binding Width Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Longarm Overage per Side
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[4, 5].map((ov) => (
                    <button
                      key={ov}
                      type="button"
                      onClick={() => setOverageInches(ov)}
                      className={`min-h-[44px] py-2 text-xs font-semibold rounded-md border transition-colors ${
                        overageInches === ov
                          ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                          : 'bg-white text-[#4A443B] border-[#D0C7BA]'
                      }`}
                    >
                      {ov}" Overage
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#7A7266] mt-1">Standard is 4" on all 4 sides.</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Binding Strip Width
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[2.25, 2.5].map((bw) => (
                    <button
                      key={bw}
                      type="button"
                      onClick={() => setBindingStripWidth(bw)}
                      className={`min-h-[44px] py-2 text-xs font-semibold rounded-md border transition-colors ${
                        bindingStripWidth === bw
                          ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                          : 'bg-white text-[#4A443B] border-[#D0C7BA]'
                      }`}
                    >
                      {bw}" Strips
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#7A7266] mt-1">2.5" is the most popular double-fold.</p>
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Quilting Material Estimates
                </span>
              </div>

              {calculation.isValid ? (
                <>
                  <div>
                    <span className="text-xs text-[#6B6357] block">Backing Fabric Required</span>
                    <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                      {calculation.formattedBacking}{' '}
                      <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">
                        Yards
                      </span>
                    </div>
                    <p className="text-xs text-[#7A7266] mt-0.5">
                      On {backingFabricWidth}" wide fabric ({calculation.backingMeters} meters)
                    </p>
                  </div>

                  {/* Binding Specs */}
                  <div className="p-3 bg-white border border-[#E0D8CB] rounded-md flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#7A7266] uppercase font-mono">
                        Binding Strips Needed
                      </span>
                      <div className="text-xl font-bold font-serif-heading text-[#1C1C1C]">
                        {calculation.bindingYards} Yards
                      </div>
                    </div>
                    <span className="text-xs text-[#7A7266]">
                      {calculation.bindingStrips} strips @ {bindingStripWidth}" WOF
                    </span>
                  </div>

                  {/* Breakdown details */}
                  <div className="text-xs text-[#4A443B] space-y-1.5 p-3 bg-white border border-[#E0D8CB] rounded-md">
                    <span className="font-semibold text-[#1C1C1C] block">Workroom Cutting Specs:</span>
                    <div>• <strong>Backing Cut Dimensions:</strong> {calculation.backingSize}</div>
                    <div>• <strong>Seams in Backing:</strong> {calculation.seamsNeeded === 0 ? 'Zero seams (Seamless backing)' : `${calculation.seamsNeeded} vertical seam(s)`}</div>
                    <div>• <strong>Quilt Perimeter:</strong> {calculation.perimeterInches} linear inches</div>
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

      {/* Formula Explained */}
      <section className="bg-white border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Quilt Backing &amp; Binding Formulas
        </h2>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-xs sm:text-sm text-[#1C1C1C] space-y-1">
          <div>1. Backing Size = (Quilt Width + 8") × (Quilt Length + 8")</div>
          <div>2. Backing Panels = ⌈Backing Width ÷ Usable Bolt Width (42")⌉</div>
          <div>3. Binding Strips = ⌈(Perimeter in Inches + 20") ÷ 40" WOF⌉</div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Making a 50" × 65" Lap Throw Quilt
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You are finishing a <strong>50" × 65" throw quilt</strong> using standard <strong>44-inch quilting cotton</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Total Backing Size:</strong> 50" + 8" = 58" wide, by 65" + 8" = 73" long.</li>
            <li><strong>Panels Needed:</strong> 58" ÷ 42" usable width = 2 panels wide.</li>
            <li><strong>Backing Length:</strong> 2 panels × 73" = 146 linear inches ÷ 36 = <strong>4 ⅛ Yards</strong> (or 2 ⅛ yards if using 108" wide-back).</li>
            <li><strong>Binding:</strong> Perimeter is 230" + 20" buffer = 250" ÷ 40" = <strong>7 strips of 2.5"</strong> (½ yard cut).</li>
          </ul>
        </div>
      </section>

      <ToolCommonMistakes mistakes={COMMON_MISTAKES} toolName="the Quilt Fabric Calculator" />
      <ToolFAQSection faqs={toolData.faqs} />
      <ToolRelatedResources
        articleSlugs={toolData.relatedArticleSlugs}
        fabricSlugs={toolData.relatedFabricSlugs}
        onNavigate={onNavigate}
      />
    </div>
  );
};
