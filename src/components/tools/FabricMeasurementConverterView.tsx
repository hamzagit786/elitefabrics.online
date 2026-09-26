import React, { useState } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { FABRIC_TOOLS } from '../../data/tools';

interface FabricMeasurementConverterViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type UnitKey = 'inches' | 'feet' | 'yards' | 'meters' | 'cm';

interface SewingFraction {
  label: string;
  yards: number;
  inches: number;
}

const SEWING_FRACTIONS: SewingFraction[] = [
  { label: '⅛ Yard', yards: 0.125, inches: 4.5 },
  { label: '¼ Yard', yards: 0.25, inches: 9.0 },
  { label: '⅓ Yard', yards: 0.333, inches: 12.0 },
  { label: '⅜ Yard', yards: 0.375, inches: 13.5 },
  { label: '½ Yard', yards: 0.5, inches: 18.0 },
  { label: '⅝ Yard', yards: 0.625, inches: 22.5 },
  { label: '¾ Yard', yards: 0.75, inches: 27.0 },
  { label: '⅞ Yard', yards: 0.875, inches: 31.5 },
  { label: '1 Yard', yards: 1.0, inches: 36.0 },
  { label: '2 Yards', yards: 2.0, inches: 72.0 },
  { label: '3 Yards', yards: 3.0, inches: 108.0 }
];

export const FabricMeasurementConverterView: React.FC<FabricMeasurementConverterViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'fabric-measurement-converter')!;

  const [inches, setInches] = useState<string>('36');
  const [feet, setFeet] = useState<string>('3');
  const [yards, setYards] = useState<string>('1');
  const [meters, setMeters] = useState<string>('0.9144');
  const [cm, setCm] = useState<string>('91.44');

  const roundNice = (val: number, decimals: number = 4): string => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(val * factor) / factor;
    return rounded.toString();
  };

  const updateFromMeters = (m: number, source: UnitKey) => {
    if (isNaN(m) || m < 0) {
      if (source !== 'inches') setInches('');
      if (source !== 'feet') setFeet('');
      if (source !== 'yards') setYards('');
      if (source !== 'meters') setMeters('');
      if (source !== 'cm') setCm('');
      return;
    }

    const inVal = m * 39.3700787;
    const ftVal = inVal / 12;
    const ydVal = inVal / 36;
    const cmVal = m * 100;

    if (source !== 'inches') setInches(roundNice(inVal, 2));
    if (source !== 'feet') setFeet(roundNice(ftVal, 2));
    if (source !== 'yards') setYards(roundNice(ydVal, 3));
    if (source !== 'meters') setMeters(roundNice(m, 4));
    if (source !== 'cm') setCm(roundNice(cmVal, 2));
  };

  const handleInchesChange = (val: string) => {
    setInches(val);
    const num = parseFloat(val);
    updateFromMeters(num * 0.0254, 'inches');
  };

  const handleFeetChange = (val: string) => {
    setFeet(val);
    const num = parseFloat(val);
    updateFromMeters(num * 0.3048, 'feet');
  };

  const handleYardsChange = (val: string) => {
    setYards(val);
    const num = parseFloat(val);
    updateFromMeters(num * 0.9144, 'yards');
  };

  const handleMetersChange = (val: string) => {
    setMeters(val);
    const num = parseFloat(val);
    updateFromMeters(num, 'meters');
  };

  const handleCmChange = (val: string) => {
    setCm(val);
    const num = parseFloat(val);
    updateFromMeters(num / 100, 'cm');
  };

  const handleApplyFraction = (frac: SewingFraction) => {
    setYards(frac.yards.toString());
    updateFromMeters(frac.yards * 0.9144, 'yards');
  };

  const handleClear = () => {
    setYards('');
    setInches('');
    setFeet('');
    setMeters('');
    setCm('');
  };

  const resultSummary = `Fabric Length: ${yards || 0} Yards = ${meters || 0} Meters = ${inches || 0} Inches = ${cm || 0} cm | Calculated via Elite Fabrics (https://elitefabrics.online/tools/fabric-measurement-converter)`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Measurement Converter
        </h1>
        <p className="text-sm sm:text-base text-[#524B40] leading-normal">
          Convert fabric lengths and widths across inches, feet, yards, meters, and centimeters with instant live synchronization.
        </p>
      </div>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* THE CALCULATOR (At top, visible without scrolling) */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            5-Way Live Length Converter
          </span>
          <span className="text-xs text-[#7A7266]">
            Type in any box — all units update instantly
          </span>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Yards */}
            <div>
              <label htmlFor="len-yards" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Yards (yd)
              </label>
              <input
                id="len-yards"
                type="number"
                step="0.125"
                min="0"
                value={yards}
                onChange={(e) => handleYardsChange(e.target.value)}
                placeholder="e.g. 1"
                className="w-full min-h-[48px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
              />
              <span className="text-xs text-[#7A7266] mt-1 block">US retail unit</span>
            </div>

            {/* Meters */}
            <div>
              <label htmlFor="len-meters" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Meters (m)
              </label>
              <input
                id="len-meters"
                type="number"
                step="0.1"
                min="0"
                value={meters}
                onChange={(e) => handleMetersChange(e.target.value)}
                placeholder="e.g. 0.914"
                className="w-full min-h-[48px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
              />
              <span className="text-xs text-[#7A7266] mt-1 block">Metric international</span>
            </div>

            {/* Inches */}
            <div>
              <label htmlFor="len-inches" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Inches (in)
              </label>
              <input
                id="len-inches"
                type="number"
                step="0.5"
                min="0"
                value={inches}
                onChange={(e) => handleInchesChange(e.target.value)}
                placeholder="e.g. 36"
                className="w-full min-h-[48px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
              />
              <span className="text-xs text-[#7A7266] mt-1 block">1 yd = 36 in</span>
            </div>

            {/* Centimeters */}
            <div>
              <label htmlFor="len-cm" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Centimeters (cm)
              </label>
              <input
                id="len-cm"
                type="number"
                step="1"
                min="0"
                value={cm}
                onChange={(e) => handleCmChange(e.target.value)}
                placeholder="e.g. 91.4"
                className="w-full min-h-[48px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
              />
              <span className="text-xs text-[#7A7266] mt-1 block">1 in = 2.54 cm</span>
            </div>

            {/* Feet */}
            <div>
              <label htmlFor="len-feet" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Feet (ft)
              </label>
              <input
                id="len-feet"
                type="number"
                step="0.5"
                min="0"
                value={feet}
                onChange={(e) => handleFeetChange(e.target.value)}
                placeholder="e.g. 3"
                className="w-full min-h-[48px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-xl font-serif-heading font-bold text-[#1C1C1C] focus:bg-white focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none"
              />
              <span className="text-xs text-[#7A7266] mt-1 block">1 yd = 3 ft</span>
            </div>
          </div>

          {/* Quick Sewing Cuts */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3A352E] block mb-2">
              Common Retail Fabric Cuts:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {SEWING_FRACTIONS.map((frac, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyFraction(frac)}
                  className="px-3 py-2 bg-[#FAF8F5] hover:bg-[#F2EDE4] border border-[#D0C7BA] rounded text-[#1C1C1C] transition-colors"
                >
                  <span className="font-semibold">{frac.label}</span>
                  <span className="text-[#7A7266] ml-1">({frac.inches}")</span>
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
          Standard Textile Conversion Factors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="text-[#7A7266] block">Yards to Meters</span>
            <div className="font-semibold text-[#1C1C1C] text-sm mt-0.5">1 Yard = 0.9144 m</div>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="text-[#7A7266] block">Meters to Yards</span>
            <div className="font-semibold text-[#1C1C1C] text-sm mt-0.5">1 Meter = 1.0936 yd</div>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="text-[#7A7266] block">Yards to Inches</span>
            <div className="font-semibold text-[#1C1C1C] text-sm mt-0.5">1 Yard = 36 Inches</div>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded">
            <span className="text-[#7A7266] block">Inches to Centimeters</span>
            <div className="font-semibold text-[#1C1C1C] text-sm mt-0.5">1 Inch = 2.54 cm</div>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Converting European Patterns to US Yardage
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You are following a European sewing tutorial calling for <strong>2.4 meters</strong> of fabric:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Calculation:</strong> 2.4 meters ÷ 0.9144 = <strong>2.625 yards</strong>.</li>
            <li><strong>Fractional Equivalent:</strong> 2.625 yards = <strong>2 ⅝ yards</strong>.</li>
            <li><strong>Inches:</strong> 2.625 × 36 = <strong>94.5 inches</strong>.</li>
          </ul>
          <p className="text-xs sm:text-sm pt-1">
            <strong>Store tip:</strong> Request <strong>2 ⅝ yards</strong> (or 2 ¾ yards for safety allowance) at the cutting counter.
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
