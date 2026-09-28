import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  Calculator, 
  ShieldCheck, 
  Scissors, 
  ChevronRight,
  Info
} from 'lucide-react';
import { FABRICS } from '../../data/fabrics';
import { FabricType } from '../../types';

interface FabricFinderQuizViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

interface QuizState {
  projectType: string;
  season: string;
  drape: string;
  care: string;
}

export const FabricFinderQuizView: React.FC<FabricFinderQuizViewProps> = ({ onNavigate }) => {
  const [answers, setAnswers] = useState<QuizState>({
    projectType: 'shirt',
    season: 'summer',
    drape: 'breathable',
    care: 'easy'
  });

  const [hasCalculated, setHasCalculated] = useState(true);

  const projects = [
    { id: 'shirt', label: 'T-Shirt, Shirt or Blouse', icon: '👔', desc: 'Tops, button-downs, casual tees' },
    { id: 'pants', label: 'Trousers, Chinos or Jeans', icon: '👖', desc: 'Bottoms needing structure & durability' },
    { id: 'dress', label: 'Dress or Skirt', icon: '👗', desc: 'Flowy garments, formalwear, summer dresses' },
    { id: 'outerwear', label: 'Jacket, Blazer or Coat', icon: '🧥', desc: 'Heavyweight insulation, wind & structure' },
    { id: 'curtain', label: 'Curtains & Window Drapes', icon: '🪟', desc: 'Light filtering, privacy, or blackout' },
    { id: 'upholstery', label: 'Sofa, Chair or Cushion', icon: '🛋️', desc: 'High abrasion resistance & tear strength' },
    { id: 'bedding', label: 'Bedsheets, Duvet or Quilt', icon: '🛏️', desc: 'Soft against skin, moisture-wicking' },
    { id: 'activewear', label: 'Gym, Leggings or Swim', icon: '🏃', desc: 'Elastic recovery, sweat management' },
  ];

  const seasons = [
    { id: 'summer', label: 'Warm Summer / Hot Climate', desc: 'Lightweight, ultra-breathable, cooling' },
    { id: 'winter', label: 'Cold Autumn & Winter', desc: 'Insulating, dense, wind-resistant' },
    { id: 'all-season', label: 'Year-Round Everyday', desc: 'Balanced medium weight, versatile' },
  ];

  const drapes = [
    { id: 'breathable', label: 'Airy, Soft & Lightweight', desc: 'Loose drape, gentle next to skin' },
    { id: 'structured', label: 'Crisp, Tailored & Structured', desc: 'Holds pleats, sharp collars, durable' },
    { id: 'fluid', label: 'Fluid, Flowing & Silky', desc: 'High drape, elegant movement' },
    { id: 'rugged', label: 'Heavy, Sturdy & Rugged', desc: 'Maximum toughness and abrasion resistance' },
  ];

  const cares = [
    { id: 'easy', label: 'Low Maintenance (Machine Wash & Dry)', desc: 'Toss in washer without special care' },
    { id: 'gentle', label: 'Gentle Care OK (Cold Wash / Air Dry)', desc: 'Willing to hang dry or use delicate cycle' },
    { id: 'any', label: 'Dry Clean or Handwash OK', desc: 'Looking for luxury, special-occasion fibers' },
  ];

  // Scoring algorithm based on physical fabric metadata
  const scoredFabrics = FABRICS.map(fabric => {
    let score = 50;
    const why: string[] = [];

    // Project matching
    if (answers.projectType === 'shirt') {
      if (['cotton', 'linen', 'poplin', 'jersey', 'lawn', 'cambric', 'silk'].includes(fabric.slug)) {
        score += 30;
        why.push(`Naturally suited for apparel tops and daily next-to-skin comfort.`);
      }
      if (['canvas', 'corduroy', 'tweed'].includes(fabric.slug)) score -= 25;
    } else if (answers.projectType === 'pants') {
      if (['denim', 'twill', 'canvas', 'corduroy', 'linen', 'khaddar'].includes(fabric.slug)) {
        score += 35;
        why.push(`Possesses strong tensile strength and structural body for pants.`);
      }
      if (['chiffon', 'georgette', 'organza'].includes(fabric.slug)) score -= 40;
    } else if (answers.projectType === 'dress') {
      if (['silk', 'chiffon', 'linen', 'rayon', 'viscose', 'modal', 'satin', 'lawn', 'cotton'].includes(fabric.slug)) {
        score += 35;
        why.push(`Offers graceful drape and fluid silhouette movement.`);
      }
    } else if (answers.projectType === 'outerwear') {
      if (['wool', 'tweed', 'flannel', 'denim', 'canvas', 'fleece'].includes(fabric.slug)) {
        score += 35;
        why.push(`High areal density and thermal insulation block chilly wind.`);
      }
      if (['chiffon', 'lawn', 'organza'].includes(fabric.slug)) score -= 40;
    } else if (answers.projectType === 'curtain') {
      if (['linen', 'velvet', 'cotton', 'chiffon', 'organza', 'jacquard'].includes(fabric.slug)) {
        score += 35;
        why.push(`Proven drapery behavior with balanced vertical hanging tension.`);
      }
    } else if (answers.projectType === 'upholstery') {
      if (['canvas', 'twill', 'velvet', 'corduroy', 'jacquard', 'jute'].includes(fabric.slug)) {
        score += 35;
        why.push(`High Martindale abrasion tolerance and heavy fabric weight.`);
      }
      if (['silk', 'chiffon', 'rayon'].includes(fabric.slug)) score -= 45;
    } else if (answers.projectType === 'bedding') {
      if (['cotton', 'linen', 'poplin', 'satin', 'lawn'].includes(fabric.slug)) {
        score += 35;
        why.push(`Hypoallergenic fiber profile with exceptional moisture absorption.`);
      }
    } else if (answers.projectType === 'activewear') {
      if (['spandex', 'nylon', 'polyester', 'jersey', 'fleece'].includes(fabric.slug)) {
        score += 35;
        why.push(`High tensile elasticity, fast evaporation rate, and durable recovery.`);
      }
      if (['wool', 'silk', 'jute'].includes(fabric.slug)) score -= 30;
    }

    // Season matching
    if (answers.season === 'summer') {
      if (fabric.breathability === 'Very High' || fabric.breathability === 'High') {
        score += 15;
        why.push(`High breathability keeps body temperatures comfortable in heat.`);
      }
      if (['wool', 'fleece', 'velvet', 'tweed'].includes(fabric.slug)) score -= 25;
    } else if (answers.season === 'winter') {
      if (['wool', 'fleece', 'velvet', 'corduroy', 'flannel', 'tweed', 'acrylic'].includes(fabric.slug)) {
        score += 20;
        why.push(`Excellent thermal retention keeps you cozy in cold weather.`);
      }
      if (['lawn', 'chiffon', 'organza'].includes(fabric.slug)) score -= 25;
    }

    // Drape matching
    if (answers.drape === 'structured' && (fabric.drape.includes('Moderate') || fabric.drape.includes('Low') || fabric.drape.includes('Crisp'))) {
      score += 15;
    } else if (answers.drape === 'fluid' && (fabric.drape.includes('High') || fabric.drape.includes('Fluid') || fabric.drape.includes('Supple'))) {
      score += 15;
    } else if (answers.drape === 'rugged' && ['canvas', 'denim', 'twill', 'corduroy'].includes(fabric.slug)) {
      score += 20;
    }

    // Care matching
    if (answers.care === 'easy') {
      if (['cotton', 'polyester', 'nylon', 'denim', 'canvas', 'fleece', 'jersey'].includes(fabric.slug)) {
        score += 15;
        why.push(`100% machine-wash friendly with minimal specialized laundry steps.`);
      }
      if (['silk', 'wool', 'velvet'].includes(fabric.slug)) score -= 20;
    }

    return {
      fabric,
      score: Math.min(99, Math.max(45, score)),
      reasons: why.slice(0, 2)
    };
  })
  .sort((a, b) => b.score - a.score)
  .slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header & Breadcrumbs */}
      <div>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6B655C] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1C1C1C]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('tools')} className="hover:text-[#1C1C1C]">Tools</button>
          <span>/</span>
          <span className="text-[#1C1C1C] font-semibold">Fabric Finder Quiz</span>
        </nav>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-[#F2EDE4] text-[#9E472A] font-bold rounded">
            Interactive Textile Matcher
          </span>
          <span className="text-xs text-[#7A7265] font-mono">100% Free • No Sign-Up</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Finder Quiz: What Fabric Should I Use?
        </h1>
        <p className="text-base sm:text-lg text-[#524B41] font-light leading-relaxed mt-2 max-w-3xl">
          Answer four simple questions about your sewing, fashion, or home decor project. Our textile matching engine analyzes fiber breathability, drape, weight, and care needs to find your ideal fabrics.
        </p>
      </div>

      {/* Quiz Control Form */}
      <div className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl p-6 sm:p-8 space-y-8">
        {/* Step 1 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9E472A] text-white flex items-center justify-center text-xs font-mono">1</span>
              What are you creating?
            </label>
            <span className="text-xs text-[#7A7265]">Select garment or project</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {projects.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, projectType: p.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  answers.projectType === p.id 
                    ? 'bg-white border-[#9E472A] shadow-xs ring-1 ring-[#9E472A]' 
                    : 'bg-white/70 border-[#E0D8CC] hover:bg-white hover:border-[#BDB3A4]'
                }`}
              >
                <div className="text-2xl mb-1">{p.icon}</div>
                <div className="text-xs font-bold text-[#1C1C1C] leading-snug">{p.label}</div>
                <div className="text-[11px] text-[#7A7265] mt-1 line-clamp-1">{p.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9E472A] text-white flex items-center justify-center text-xs font-mono">2</span>
              What is the season or temperature environment?
            </label>
            <span className="text-xs text-[#7A7265]">Thermal comfort</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {seasons.map(s => (
              <button
                key={s.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, season: s.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  answers.season === s.id 
                    ? 'bg-white border-[#9E472A] shadow-xs ring-1 ring-[#9E472A]' 
                    : 'bg-white/70 border-[#E0D8CC] hover:bg-white hover:border-[#BDB3A4]'
                }`}
              >
                <div className="text-xs font-bold text-[#1C1C1C]">{s.label}</div>
                <div className="text-[11px] text-[#7A7265] mt-1">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9E472A] text-white flex items-center justify-center text-xs font-mono">3</span>
              How should the fabric feel and hang?
            </label>
            <span className="text-xs text-[#7A7265]">Tactile drape</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {drapes.map(d => (
              <button
                key={d.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, drape: d.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  answers.drape === d.id 
                    ? 'bg-white border-[#9E472A] shadow-xs ring-1 ring-[#9E472A]' 
                    : 'bg-white/70 border-[#E0D8CC] hover:bg-white hover:border-[#BDB3A4]'
                }`}
              >
                <div className="text-xs font-bold text-[#1C1C1C] leading-snug">{d.label}</div>
                <div className="text-[11px] text-[#7A7265] mt-1 line-clamp-2">{d.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#9E472A] text-white flex items-center justify-center text-xs font-mono">4</span>
              What are your laundering and care preferences?
            </label>
            <span className="text-xs text-[#7A7265]">Maintenance level</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cares.map(c => (
              <button
                key={c.id}
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, care: c.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  answers.care === c.id 
                    ? 'bg-white border-[#9E472A] shadow-xs ring-1 ring-[#9E472A]' 
                    : 'bg-white/70 border-[#E0D8CC] hover:bg-white hover:border-[#BDB3A4]'
                }`}
              >
                <div className="text-xs font-bold text-[#1C1C1C]">{c.label}</div>
                <div className="text-[11px] text-[#7A7265] mt-1">{c.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E6E0D7] pb-4">
          <div>
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#9E472A]" /> Top Recommended Fabric Matches
            </h2>
            <p className="text-xs text-[#7A7265] mt-1">
              Ranked by fiber performance, weave density, drape profile, and maintenance affinity.
            </p>
          </div>
          <button
            onClick={() => setAnswers({ projectType: 'shirt', season: 'summer', drape: 'breathable', care: 'easy' })}
            className="text-xs text-[#9E472A] hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Quiz
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scoredFabrics.map((item, index) => {
            const { fabric, score, reasons } = item;
            return (
              <div 
                key={fabric.id}
                className="bg-white border border-[#E8E2D9] rounded-2xl overflow-hidden hover:border-[#9E472A] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Match Score */}
                  <div className="p-5 pb-3 flex items-start justify-between gap-3 border-b border-[#F2ECE1] bg-[#FAF8F5]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#9E472A]">
                          #{index + 1} Best Fit
                        </span>
                        <span className="text-[11px] uppercase font-mono px-2 py-0.5 bg-white text-[#70685D] rounded border border-[#E6E0D7]">
                          {fabric.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-1">
                        {fabric.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-serif-heading font-bold text-[#9E472A]">
                        {score}%
                      </div>
                      <div className="text-[10px] text-[#7A7265] uppercase font-mono">Match Score</div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed">
                      {fabric.whatIsIt || fabric.whyPopular || fabric.fiberComposition}
                    </p>

                    {/* Why this matches */}
                    {reasons.length > 0 && (
                      <div className="p-3 bg-[#FAF5EE] border border-[#EBE2D3] rounded-lg space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-[#9E472A] font-bold block">
                          Why It Matches Your Project:
                        </span>
                        <ul className="text-xs text-[#524B41] space-y-1">
                          {reasons.map((r, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#9E472A] shrink-0 mt-0.5" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2 bg-[#FAF8F5] rounded border border-[#EFE9DF]">
                        <span className="text-[#8C8478] block text-[10px] uppercase font-mono">Weight / GSM</span>
                        <span className="font-semibold text-[#1C1C1C]">{fabric.weightGsm.split('(')[0]}</span>
                      </div>
                      <div className="p-2 bg-[#FAF8F5] rounded border border-[#EFE9DF]">
                        <span className="text-[#8C8478] block text-[10px] uppercase font-mono">Drape Behavior</span>
                        <span className="font-semibold text-[#1C1C1C]">{fabric.drape}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 bg-[#FAF8F5] border-t border-[#F2EDE4] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('fabric', fabric.slug)}
                    className="flex-1 py-2 px-3 bg-[#9E472A] hover:bg-[#833B22] text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    View {fabric.name} Guide <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('tools', 'gsm-to-oz-converter')}
                    className="py-2 px-3 bg-white border border-[#D9D1C5] hover:border-[#9E472A] text-[#1C1C1C] rounded-lg text-xs font-medium transition-colors"
                    title="Check GSM & Ounce Weight"
                  >
                    Weight Tool
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Practical Guide & Common Mistakes */}
      <section className="p-6 sm:p-8 bg-white border border-[#E6E0D7] rounded-2xl space-y-6">
        <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          3 Golden Rules Before Purchasing Any Fabric
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#524B41]">
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
              <span className="text-[#9E472A] font-mono">01.</span> Always Pre-Wash Natural Fibers
            </h4>
            <p className="leading-relaxed">
              Cotton, linen, and rayon can shrink 3% to 10% during their initial wash cycle. If you cut before laundering, your finished garment will come out too tight after the first laundry wash.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
              <span className="text-[#9E472A] font-mono">02.</span> Check Bolt Width (44" vs 60")
            </h4>
            <p className="leading-relaxed">
              Quilting cotton is commonly 44–45 inches wide, whereas apparel jersey and wools are usually 58–60 inches wide. Wider fabric requires less linear yardage.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
              <span className="text-[#9E472A] font-mono">03.</span> Match Needle to Fabric Weight
            </h4>
            <p className="leading-relaxed">
              Use a fine 70/10 needle for lightweight silks and lawns, an 80/12 universal for poplins, and a 90/14 or 100/16 jeans needle for heavyweight denim and canvas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
