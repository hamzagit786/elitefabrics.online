import React, { useState } from 'react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolActionButtons } from './ToolActionButtons';
import { ToolFAQSection } from './ToolFAQSection';
import { ToolRelatedResources } from './ToolRelatedResources';
import { ToolTrustSignals } from './ToolTrustSignals';
import { ToolCommonMistakes, MistakeItem } from './ToolCommonMistakes';
import { FABRIC_TOOLS } from '../../data/tools';

interface YarnCountConverterViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

const COMMON_MISTAKES: MistakeItem[] = [
  {
    mistake: 'Confusing direct vs indirect counting systems',
    solution: 'In direct systems (Denier, Tex), higher numbers mean thicker, heavier yarns. In indirect systems (Cotton Ne, Metric Nm), higher numbers mean thinner, finer yarns.'
  },
  {
    mistake: 'Applying cotton count (Ne) directly to wool or linen without conversion',
    solution: 'Cotton count uses an 840-yard hank, worsted wool uses a 560-yard hank, and linen uses a 300-yard lea. A 30s cotton yarn is significantly finer than a 30s worsted wool yarn.'
  },
  {
    mistake: 'Forgetting plied yarn notation (e.g. 40/2 or 2/40)',
    solution: 'A 40/2 cotton yarn consists of two single 40s strands twisted together, resulting in an effective yarn thickness equivalent to a single 20s yarn.'
  }
];

export const YarnCountConverterView: React.FC<YarnCountConverterViewProps> = ({ onNavigate }) => {
  const toolData = FABRIC_TOOLS.find(t => t.slug === 'yarn-count-converter')!;

  // Values stored in Tex as internal single source of truth
  const [currentTex, setCurrentTex] = useState<number>(19.68); // defaults to 30s cotton

  // Form input strings
  const [cottonNe, setCottonNe] = useState<string>('30');
  const [metricNm, setMetricNm] = useState<string>('50.8');
  const [texVal, setTexVal] = useState<string>('19.7');
  const [denierVal, setDenierVal] = useState<string>('177.2');
  const [worstedNeW, setWorstedNeW] = useState<string>('45');
  const [linenLea, setLinenLea] = useState<string>('84');

  const updateFromTex = (tex: number) => {
    setCurrentTex(tex);
    if (tex <= 0) return;

    const ne = 590.541 / tex;
    const nm = 1000 / tex;
    const den = tex * 9;
    const newCount = 885.811 / tex;
    const lea = 1653.515 / tex;

    setCottonNe((Math.round(ne * 10) / 10).toString());
    setMetricNm((Math.round(nm * 10) / 10).toString());
    setTexVal((Math.round(tex * 10) / 10).toString());
    setDenierVal((Math.round(den * 10) / 10).toString());
    setWorstedNeW((Math.round(newCount * 10) / 10).toString());
    setLinenLea((Math.round(lea * 10) / 10).toString());
  };

  const handleCottonChange = (val: string) => {
    setCottonNe(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      const tex = 590.541 / num;
      setCurrentTex(tex);
      setMetricNm((Math.round((1000 / tex) * 10) / 10).toString());
      setTexVal((Math.round(tex * 10) / 10).toString());
      setDenierVal((Math.round((tex * 9) * 10) / 10).toString());
      setWorstedNeW((Math.round((885.811 / tex) * 10) / 10).toString());
      setLinenLea((Math.round((1653.515 / tex) * 10) / 10).toString());
    }
  };

  const handleTexChange = (val: string) => {
    setTexVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      updateFromTex(num);
    }
  };

  const handleDenierChange = (val: string) => {
    setDenierVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      updateFromTex(num / 9);
    }
  };

  const handleMetricChange = (val: string) => {
    setMetricNm(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      updateFromTex(1000 / num);
    }
  };

  const handleWorstedChange = (val: string) => {
    setWorstedNeW(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      updateFromTex(885.811 / num);
    }
  };

  const handleClear = () => {
    updateFromTex(19.68);
  };

  const resultSummary = `Yarn Count: ${cottonNe} Ne (Cotton) = ${denierVal} Denier = ${texVal} Tex = ${metricNm} Nm = ${worstedNeW} Worsted | Converted via Elite Fabrics (https://elitefabrics.online/tools/yarn-count-converter)`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      <ToolBreadcrumbs toolTitle={toolData.title} onNavigate={onNavigate} />

      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Yarn Count Converter
        </h1>
        <p className="text-sm sm:text-base text-[#524B42] leading-normal">
          Convert yarn counts across English Cotton Count (Ne), Denier, Tex, Metric Count (Nm), and Worsted Count.
        </p>
      </div>

      <ToolTrustSignals />

      {/* CALCULATOR */}
      <div className="bg-white border border-[#D9D1C5] rounded-lg shadow-xs overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-[#E8E2D9] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
            Live Bidirectional Converter (Type In Any Field)
          </span>
          <div className="flex items-center flex-wrap gap-1.5 text-xs text-[#7A7266]">
            <span>Presets:</span>
            <button
              type="button"
              onClick={() => handleCottonChange('20')}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              20s Heavy Tee
            </button>
            <button
              type="button"
              onClick={() => handleCottonChange('30')}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              30s Standard Cotton
            </button>
            <button
              type="button"
              onClick={() => handleCottonChange('60')}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              60s Fine Lawn
            </button>
            <button
              type="button"
              onClick={() => handleDenierChange('150')}
              className="px-2 py-1 bg-white hover:bg-[#F2EDE4] border border-[#DDD5C7] rounded text-xs transition-colors"
            >
              150D Poly Filament
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs Section (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Cotton Ne */}
            <div>
              <label htmlFor="yarn-ne" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                English Cotton Count (Ne)
              </label>
              <div className="relative">
                <input
                  id="yarn-ne"
                  type="number"
                  step="0.5"
                  value={cottonNe}
                  onChange={(e) => handleCottonChange(e.target.value)}
                  placeholder="30"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                  Ne (Indirect)
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">Standard for cotton apparel, shirting, and bedding.</p>
            </div>

            {/* Denier */}
            <div>
              <label htmlFor="yarn-denier" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Denier (g / 9,000 meters)
              </label>
              <div className="relative">
                <input
                  id="yarn-denier"
                  type="number"
                  step="1"
                  value={denierVal}
                  onChange={(e) => handleDenierChange(e.target.value)}
                  placeholder="177"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                  Denier (Direct)
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">Standard for silk filament and synthetic polyester/nylon yarns.</p>
            </div>

            {/* Tex */}
            <div>
              <label htmlFor="yarn-tex" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                Tex (g / 1,000 meters)
              </label>
              <div className="relative">
                <input
                  id="yarn-tex"
                  type="number"
                  step="0.5"
                  value={texVal}
                  onChange={(e) => handleTexChange(e.target.value)}
                  placeholder="20"
                  className="w-full min-h-[48px] px-3.5 py-3 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-base font-medium text-[#1C1C1C] focus:bg-white focus:border-[#1C1C1C] focus:ring-1 focus:ring-[#1C1C1C] focus:outline-none transition-colors"
                />
                <span className="absolute right-3.5 top-3.5 text-xs font-mono text-[#7A7266]">
                  Tex (ISO Standard)
                </span>
              </div>
              <p className="text-xs text-[#7A7266] mt-1">International metric standard for sewing threads and technical yarns.</p>
            </div>

            {/* Metric Nm & Worsted NeW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="yarn-nm" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Metric Count (Nm)
                </label>
                <input
                  id="yarn-nm"
                  type="number"
                  step="0.5"
                  value={metricNm}
                  onChange={(e) => handleMetricChange(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C]"
                />
                <span className="text-[11px] text-[#7A7266]">Meters per gram</span>
              </div>

              <div>
                <label htmlFor="yarn-worsted" className="block text-xs font-bold uppercase tracking-wider text-[#3A352E] mb-1">
                  Worsted Count (NeW)
                </label>
                <input
                  id="yarn-worsted"
                  type="number"
                  step="0.5"
                  value={worstedNeW}
                  onChange={(e) => handleWorstedChange(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 bg-[#FAF8F5] border border-[#D0C7BA] rounded-md text-sm text-[#1C1C1C]"
                />
                <span className="text-[11px] text-[#7A7266]">560-yd wool hanks</span>
              </div>
            </div>
          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5] border border-[#D9D1C5] rounded-md p-5 sm:p-6">
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#E8E2D9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6357] font-semibold">
                  Equivalent Yarn Numbers
                </span>
              </div>

              <div>
                <span className="text-xs text-[#6B6357] block">English Cotton Count</span>
                <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
                  {cottonNe} <span className="text-xl sm:text-2xl font-sans font-normal text-[#5C554B]">Ne</span>
                </div>
                <p className="text-xs text-[#7A7266] mt-0.5">
                  {currentTex < 15 ? 'Very Fine / Sheer Yarn' : currentTex < 25 ? 'Fine Shirting & Apparel Yarn' : currentTex < 50 ? 'Medium Apparel & Denim Weft' : 'Heavy Workwear & Industrial Yarn'}
                </p>
              </div>

              {/* Conversion Equivalency Table */}
              <div className="p-3.5 bg-white border border-[#E0D8CB] rounded-md text-xs space-y-2">
                <span className="font-semibold text-[#1C1C1C] block">Direct &amp; Indirect Equivalents:</span>
                <div className="grid grid-cols-2 gap-2 text-[#4A443B]">
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#EDE7DC]">
                    <span className="text-[#7A7266] block text-[10px] uppercase font-mono">Denier</span>
                    <strong className="text-sm text-[#1C1C1C]">{denierVal} D</strong>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#EDE7DC]">
                    <span className="text-[#7A7266] block text-[10px] uppercase font-mono">ISO Tex</span>
                    <strong className="text-sm text-[#1C1C1C]">{texVal} Tex</strong>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#EDE7DC]">
                    <span className="text-[#7A7266] block text-[10px] uppercase font-mono">Metric Count</span>
                    <strong className="text-sm text-[#1C1C1C]">{metricNm} Nm</strong>
                  </div>
                  <div className="p-2 bg-[#FAF8F5] rounded border border-[#EDE7DC]">
                    <span className="text-[#7A7266] block text-[10px] uppercase font-mono">Linen Lea</span>
                    <strong className="text-sm text-[#1C1C1C]">{linenLea} Lea</strong>
                  </div>
                </div>
              </div>

              {/* Real World Comparison */}
              <div className="text-xs text-[#5C554B] p-3 bg-white border border-[#E0D8CB] rounded-md leading-relaxed">
                <strong className="text-[#1C1C1C]">Textile Context: </strong>
                A {cottonNe}s cotton yarn produces a fabric thickness roughly equivalent to standard {parseFloat(denierVal) > 300 ? 'heavy denim' : parseFloat(denierVal) > 150 ? 'mid-weight everyday tees' : 'crisp poplin shirting'}.
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
          Yarn Conversion Mathematical Constants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-[#3A352E]">
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded space-y-1">
            <span className="font-sans font-bold text-[#1C1C1C] block">Direct to Indirect:</span>
            <div>Tex = 590.541 ÷ Cotton Ne</div>
            <div>Denier = Tex × 9</div>
            <div>Nm = 1,000 ÷ Tex</div>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#E2DBD0] rounded space-y-1">
            <span className="font-sans font-bold text-[#1C1C1C] block">Indirect to Indirect:</span>
            <div>Cotton Ne = Metric Nm × 0.5905</div>
            <div>Worsted NeW = Cotton Ne × 1.5</div>
            <div>Linen Lea = Cotton Ne × 2.8</div>
          </div>
        </div>
      </section>

      <ToolCommonMistakes mistakes={COMMON_MISTAKES} toolName="the Yarn Count Converter" />
      <ToolFAQSection faqs={toolData.faqs} />
      <ToolRelatedResources
        articleSlugs={toolData.relatedArticleSlugs}
        fabricSlugs={toolData.relatedFabricSlugs}
        onNavigate={onNavigate}
      />
    </div>
  );
};
