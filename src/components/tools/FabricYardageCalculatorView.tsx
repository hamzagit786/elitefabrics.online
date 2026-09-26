import React, { useState, useMemo } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { FABRIC_TOOLS } from '../../data/tools';

interface FabricYardageCalculatorViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type ProjectType = 'pillow' | 'shirt' | 'dress' | 'curtains' | 'quilt' | 'custom';
type BoltWidth = '44' | '54' | '60' | 'custom';

export const FabricYardageCalculatorView: React.FC<FabricYardageCalculatorViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'fabric-yardage-calculator')!;

  // Inputs
  const [projectType, setProjectType] = useState<ProjectType>('pillow');
  const [boltWidth, setBoltWidth] = useState<BoltWidth>('44');
  const [customBoltWidth, setCustomBoltWidth] = useState<string>('44');
  const [quantity, setQuantity] = useState<number>(2);
  const [allowancePercent, setAllowancePercent] = useState<number>(10);

  // Sub-inputs
  const [pillowSize, setPillowSize] = useState<number>(18);
  const [shirtStyle, setShirtStyle] = useState<'short-sleeve' | 'long-sleeve'>('long-sleeve');
  const [shirtSize, setShirtSize] = useState<'standard' | 'plus'>('standard');
  const [dressStyle, setDressStyle] = useState<'sleeveless' | 'short-sleeve' | 'maxi'>('short-sleeve');
  const [curtainWidthInches, setCurtainWidthInches] = useState<number>(72);
  const [curtainDropInches, setCurtainDropInches] = useState<number>(84);
  const [fullness, setFullness] = useState<number>(2.0);
  const [quiltType, setQuiltType] = useState<'crib' | 'twin' | 'queen' | 'king'>('twin');
  const [customPieceLength, setCustomPieceLength] = useState<number>(24);
  const [customPieceWidth, setCustomPieceWidth] = useState<number>(18);

  const effectiveBoltWidth = useMemo(() => {
    if (boltWidth === 'custom') {
      const val = parseFloat(customBoltWidth);
      return isNaN(val) || val <= 0 ? 44 : val;
    }
    return parseFloat(boltWidth);
  }, [boltWidth, customBoltWidth]);

  // Calculations
  const calculation = useMemo(() => {
    let rawLinearInches = 0;
    let descriptionNote = '';
    const width = effectiveBoltWidth;

    if (projectType === 'pillow') {
      const cutSquare = pillowSize + 1; // 1/2" seam allowances
      const piecesAcross = Math.max(1, Math.floor(width / cutSquare));
      const totalPiecesNeeded = quantity * 2; // front and back
      const rowsNeeded = Math.ceil(totalPiecesNeeded / piecesAcross);
      rawLinearInches = rowsNeeded * cutSquare;
      descriptionNote = `${quantity} pillow(s) at ${pillowSize}"×${pillowSize}" require ${totalPiecesNeeded} square cuts (${cutSquare}"×${cutSquare}"). Fits ${piecesAcross} per row on a ${width}" bolt.`;
    } else if (projectType === 'shirt') {
      let baseInches = 72;
      if (shirtStyle === 'short-sleeve') {
        baseInches = width >= 58 ? 54 : 64;
      } else {
        baseInches = width >= 58 ? 68 : 84;
      }
      if (shirtSize === 'plus') {
        baseInches += 18;
      }
      rawLinearInches = baseInches * quantity;
      descriptionNote = `${quantity} ${shirtStyle.replace('-', ' ')} shirt(s) (${shirtSize === 'plus' ? 'Extended Sizes L–XXL' : 'Standard Sizes XS–M'}) on a ${width}" fabric bolt.`;
    } else if (projectType === 'dress') {
      let baseInches = 90;
      if (dressStyle === 'sleeveless') {
        baseInches = width >= 58 ? 64 : 80;
      } else if (dressStyle === 'short-sleeve') {
        baseInches = width >= 58 ? 80 : 96;
      } else {
        baseInches = width >= 58 ? 110 : 130;
      }
      rawLinearInches = baseInches * quantity;
      descriptionNote = `${quantity} ${dressStyle} dress(es) estimated for standard adult pattern on ${width}" fabric.`;
    } else if (projectType === 'curtains') {
      const totalWidthNeeded = curtainWidthInches * fullness;
      const panelsNeeded = Math.ceil(totalWidthNeeded / width);
      const cutLengthPerPanel = curtainDropInches + 8; // header + hem
      rawLinearInches = panelsNeeded * cutLengthPerPanel * Math.max(1, Math.floor(quantity / 2 || 1));
      descriptionNote = `${panelsNeeded} vertical panel(s) of ${cutLengthPerPanel}" cut length for ${curtainWidthInches}" window width at ${fullness}× fullness.`;
    } else if (projectType === 'quilt') {
      let yardsPerQuilt = 2;
      if (quiltType === 'crib') yardsPerQuilt = width >= 54 ? 1.5 : 1.75;
      else if (quiltType === 'twin') yardsPerQuilt = width >= 58 ? 4.25 : 5.5;
      else if (quiltType === 'queen') yardsPerQuilt = width >= 58 ? 6.5 : 8.5;
      else if (quiltType === 'king') yardsPerQuilt = width >= 58 ? 7.5 : 9.5;

      rawLinearInches = yardsPerQuilt * 36 * quantity;
      descriptionNote = `${quantity} ${quiltType.toUpperCase()} quilt backing(s) with 4-inch frame allowance.`;
    } else {
      const cutL = customPieceLength + 1;
      const cutW = customPieceWidth + 1;
      const piecesAcross = Math.max(1, Math.floor(width / cutW));
      const rows = Math.ceil(quantity / piecesAcross);
      rawLinearInches = rows * cutL;
      descriptionNote = `${quantity} cut(s) of ${customPieceLength}"×${customPieceWidth}". Fits ${piecesAcross} pieces across a ${width}" bolt.`;
    }

    const bufferedInches = rawLinearInches * (1 + allowancePercent / 100);
    const totalYardsExact = bufferedInches / 36;
    const totalMetersExact = totalYardsExact * 0.9144;

    const roundedYards = Math.ceil(totalYardsExact * 8) / 8;
    const roundedMeters = Math.round(totalMetersExact * 100) / 100;

    const whole = Math.floor(roundedYards);
    const fractionPart = Math.round((roundedYards - whole) * 8);
    let fractionStr = '';
    if (fractionPart === 1) fractionStr = '⅛';
    else if (fractionPart === 2) fractionStr = '¼';
    else if (fractionPart === 3) fractionStr = '⅜';
    else if (fractionPart === 4) fractionStr = '½';
    else if (fractionPart === 5) fractionStr = '⅝';
    else if (fractionPart === 6) fractionStr = '¾';
    else if (fractionPart === 7) fractionStr = '⅞';

    const formattedYardage = whole > 0 
      ? fractionStr ? `${whole} ${fractionStr}` : `${whole}` 
      : fractionStr || '0';

    return {
      rawLinearInches,
      bufferedInches: Math.round(bufferedInches * 10) / 10,
      totalYardsExact: Math.round(totalYardsExact * 100) / 100,
      totalMetersExact: Math.round(totalMetersExact * 100) / 100,
      roundedYards,
      formattedYardage,
      roundedMeters,
      descriptionNote
    };
  }, [
    projectType,
    effectiveBoltWidth,
    quantity,
    allowancePercent,
    pillowSize,
    shirtStyle,
    shirtSize,
    dressStyle,
    curtainWidthInches,
    curtainDropInches,
    fullness,
    quiltType,
    customPieceLength,
    customPieceWidth
  ]);

  const handleClear = () => {
    setQuantity(1);
    setAllowancePercent(0);
  };

  const resultSummary = `Fabric Yardage Required: ${calculation.formattedYardage} Yards (${calculation.roundedMeters} Meters) | Project: ${projectType.toUpperCase()} | Bolt Width: ${effectiveBoltWidth}" | Quantity: ${quantity} | Buffer: +${allowancePercent}% | Calculated via Elite Fabrics (https://elitefabrics.online/tools/fabric-yardage-calculator)`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      {/* Top Title & 1-Sentence Description */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Yardage Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#524B40] leading-normal">
          Estimate exactly how much fabric you need in yards and meters for sewing pillows, shirts, dresses, curtains, and quilts.
        </p>
      </div>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* THE CALCULATOR (At top, visible without scrolling) */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Project &amp; Bolt Parameters
          </span>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                1. Project Type
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {[
                  { id: 'pillow', label: 'Pillow' },
                  { id: 'shirt', label: 'Shirt' },
                  { id: 'dress', label: 'Dress' },
                  { id: 'curtains', label: 'Curtains' },
                  { id: 'quilt', label: 'Quilt' },
                  { id: 'custom', label: 'Custom' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as ProjectType)}
                    className={`min-h-[42px] py-2 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                      projectType === item.id
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-inputs */}
            <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded-md space-y-3">
              {projectType === 'pillow' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                    Pillow Form Size
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[16, 18, 20, 24].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setPillowSize(sz)}
                        className={`min-h-[42px] rounded-md border text-xs font-medium transition-colors ${
                          pillowSize === sz
                            ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                            : 'bg-white border-[#D0C7BA] text-[#1C1C1C] hover:bg-[#F2EDE4]'
                        }`}
                      >
                        {sz}" × {sz}"
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-[#7A7266] mt-1">
                    Accounts for front and back square cuts plus 1/2" seam allowances.
                  </p>
                </div>
              )}

              {projectType === 'shirt' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Sleeve Style
                    </label>
                    <select
                      value={shirtStyle}
                      onChange={(e) => setShirtStyle(e.target.value as any)}
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C]"
                    >
                      <option value="long-sleeve">Long Sleeve Shirt</option>
                      <option value="short-sleeve">Short Sleeve Shirt</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Size Range
                    </label>
                    <select
                      value={shirtSize}
                      onChange={(e) => setShirtSize(e.target.value as any)}
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C]"
                    >
                      <option value="standard">Standard (XS – M)</option>
                      <option value="plus">Extended (L – XXL)</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'dress' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                    Dress Length &amp; Cut
                  </label>
                  <select
                    value={dressStyle}
                    onChange={(e) => setDressStyle(e.target.value as any)}
                    className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C]"
                  >
                    <option value="sleeveless">Sleeveless A-Line / Shift Dress</option>
                    <option value="short-sleeve">Knee-Length Short Sleeve Dress</option>
                    <option value="maxi">Floor-Length Maxi Dress</option>
                  </select>
                </div>
              )}

              {projectType === 'curtains' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Window Width (in)
                    </label>
                    <input
                      type="number"
                      value={curtainWidthInches}
                      onChange={(e) => setCurtainWidthInches(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 72"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Drop Length (in)
                    </label>
                    <input
                      type="number"
                      value={curtainDropInches}
                      onChange={(e) => setCurtainDropInches(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 84"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Fullness Ratio
                    </label>
                    <select
                      value={fullness}
                      onChange={(e) => setFullness(parseFloat(e.target.value))}
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C]"
                    >
                      <option value={1.5}>1.5× Tailored</option>
                      <option value={2.0}>2.0× Standard</option>
                      <option value={2.5}>2.5× Full</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'quilt' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                    Quilt Backing Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'crib', label: 'Crib (36×52")' },
                      { id: 'twin', label: 'Twin (70×90")' },
                      { id: 'queen', label: 'Queen (90×108")' },
                      { id: 'king', label: 'King (108×108")' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setQuiltType(item.id as any)}
                        className={`min-h-[42px] rounded-md border text-xs font-medium text-center transition-colors ${
                          quiltType === item.id
                            ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                            : 'bg-white border-[#D0C7BA] text-[#1C1C1C] hover:bg-[#F2EDE4]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {projectType === 'custom' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Cut Length (Inches)
                    </label>
                    <input
                      type="number"
                      value={customPieceLength}
                      onChange={(e) => setCustomPieceLength(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 24"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                      Cut Width (Inches)
                    </label>
                    <input
                      type="number"
                      value={customPieceWidth}
                      onChange={(e) => setCustomPieceWidth(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 18"
                      className="w-full min-h-[44px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium text-[#1C1C1C]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bolt Width */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1.5">
                2. Fabric Bolt Width
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {[
                  { id: '44', label: '44" Quilting' },
                  { id: '54', label: '54" Linen' },
                  { id: '60', label: '60" Apparel' },
                  { id: 'custom', label: 'Custom Width' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBoltWidth(item.id as BoltWidth)}
                    className={`min-h-[42px] py-2 px-2 text-xs font-semibold rounded-md border text-center transition-colors ${
                      boltWidth === item.id
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-[#4A443B] border-[#D0C7BA] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {boltWidth === 'custom' && (
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    value={customBoltWidth}
                    onChange={(e) => setCustomBoltWidth(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-32 min-h-[42px] px-3 py-2 bg-white border border-[#D0C7BA] rounded-md text-xs font-medium"
                  />
                  <span className="text-xs text-[#6B655B]">inches wide</span>
                </div>
              )}
            </div>

            {/* Quantity and Safety Buffer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  3. Quantity
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 min-h-[48px] rounded-md border border-[#D0C7BA] bg-[#FAF8F5] text-lg font-bold hover:bg-[#F2EDE4]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 min-h-[48px] text-center bg-[#FAF8F5] border border-[#D0C7BA] rounded-md font-bold text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 min-h-[48px] rounded-md border border-[#D0C7BA] bg-[#FAF8F5] text-lg font-bold hover:bg-[#F2EDE4]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  4. Shrinkage Buffer
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { val: 0, label: '0%' },
                    { val: 10, label: '+10%' },
                    { val: 15, label: '+15%' }
                  ].map((buf) => (
                    <button
                      key={buf.val}
                      type="button"
                      onClick={() => setAllowancePercent(buf.val)}
                      className={`min-h-[48px] py-2 px-1 text-center rounded-md border text-xs font-semibold ${
                        allowancePercent === buf.val
                          ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                          : 'bg-white border-[#D0C7BA] text-[#524B40] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {buf.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Output (6 cols) - Clean Utility Design */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Required Fabric Yardage
                </span>
              </div>

              {/* Primary Yards */}
              <div>
                <span className="text-xs text-[#6B6357] block">Fabric Store Cut</span>
                <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                  {calculation.formattedYardage}{' '}
                  <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">
                    Yards
                  </span>
                </div>
                <p className="text-xs text-[#7A7266] mt-0.5">
                  Rounded to nearest ⅛ yard ({calculation.roundedYards} linear yards)
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
                  {Math.round(calculation.roundedMeters * 100)} cm
                </span>
              </div>

              {/* Simple Explanation */}
              <div className="text-xs text-[#4A443B] space-y-1">
                <span className="font-semibold text-[#1C1C1C]">Pattern Layout: </span>
                <p className="text-[#5C554B] leading-relaxed">
                  {calculation.descriptionNote}
                </p>
              </div>

              {/* Formula & Step-by-Step Breakdown */}
              <div className="pt-2 border-t border-[#E8E2D9] text-xs font-mono text-[#5C554B] space-y-1">
                <div className="font-sans font-semibold text-[#1C1C1C]">Formula Used:</div>
                <div>Yards = (Raw Inches × (1 + Buffer %)) ÷ 36</div>
                <div>1. Raw Length = {calculation.rawLinearInches} inches</div>
                <div>2. Buffered Length (+{allowancePercent}%) = {calculation.bufferedInches} inches</div>
                <div>3. {calculation.bufferedInches} ÷ 36 = {calculation.totalYardsExact} yd &rarr; <strong className="text-[#1C1C1C]">{calculation.formattedYardage} Yards</strong></div>
              </div>
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
          How Yardage Is Calculated in Plain English
        </h2>
        <p className="text-sm text-[#4E483F] leading-relaxed">
          Fabric is sold by the <strong>linear yard</strong> (36 inches length along the bolt). The calculation determines how many pattern pieces fit across the bolt width, how many rows are needed along the length, and adds a safety buffer for pre-wash shrinkage:
        </p>
        <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded font-mono text-sm text-[#1C1C1C]">
          Total Yards = (Total Linear Inches × (1 + Shrinkage Buffer %)) ÷ 36
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg p-6 space-y-3">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Real-World Example: Making Four 18" Throw Pillows
        </h2>
        <div className="space-y-2 text-sm text-[#4E483F] leading-relaxed">
          <p>
            You want to sew <strong>four 18" × 18" throw pillows</strong> using 100% linen from a <strong>44-inch wide</strong> fabric bolt with a standard <strong>10% shrinkage buffer</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Cut Size:</strong> Each pillow requires two 19" × 19" squares (including 1/2" seam allowances) = 8 total squares.</li>
            <li><strong>Bolt Fit:</strong> Two 19" cuts fit across the 44" bolt width (19 + 19 = 38 inches).</li>
            <li><strong>Length Needed:</strong> 8 pieces ÷ 2 across = 4 rows of 19 inches = <strong>76 linear inches</strong>.</li>
            <li><strong>Adding 10% Buffer:</strong> 76 inches × 1.10 = <strong>83.6 linear inches</strong>.</li>
            <li><strong>Yard Conversion:</strong> 83.6 ÷ 36 = 2.32 yards &rarr; order <strong>2 ⅜ yards</strong> (2.375 yd) or 2 ½ yards.</li>
          </ul>
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
