import React from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  Calendar, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { FABRICS } from '../data/fabrics';

interface TrendingViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const TrendingView: React.FC<TrendingViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-[#9E472A] border border-[#ECDCC9] text-xs font-mono font-bold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5" /> Market Research Report • Researched September 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Trending Fabrics & Textile Movements in 2026
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          An empirical analysis of current consumer preference, runway specifications, and international mill production data. We never award arbitrary rankings—we report verified data from Première Vision Paris and Textile Exchange.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('article', 'trending-fabrics-2026')}
            className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2"
          >
            Read Full Long-Form Trend Analysis <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main 2026 Macro Shift Banner */}
      <div className="bg-[#1C1C1C] text-[#EFEBE4] rounded-2xl p-6 sm:p-10 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8936D]">
          The Definitive Macro Shift
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white leading-snug">
          Tactile Honesty: Rejecting Petroleum Slickness
        </h2>
        <p className="text-xs sm:text-sm text-[#D1CBC0] leading-relaxed max-w-3xl">
          After a decade of homogeneous, petroleum-based fast-fashion microfibers, 2026 marks a structural turning point toward visible, touchable fiber character. Designers and consumers are actively seeking unbleached bast flecks, slubbed raw cottons, irregular linen yarns, and heavy twills that celebrate the authentic irregularities of nature.
        </p>
      </div>

      {/* The 4 Major 2026 Material Trends */}
      <div className="space-y-6">
        <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] pb-2 border-b border-[#E6E0D7]">
          Verified Material Trends
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trend 1 */}
          <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A] bg-[#FAF0E6] px-2 py-0.5 rounded">
                Trend 01
              </span>
              <span className="text-xs font-mono text-[#8C8478]">+42% Mill Demand</span>
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-[#1C1C1C]">
              Closed-Loop Lyocell (TENCEL™) & Refibra™ Blends
            </h3>
            <p className="text-xs text-[#524B40] leading-relaxed">
              Propelled by European Union circular textile regulations, demand for solvent-spun Lyocell has surged. Blends combining 60% combed cotton with 40% lyocell offer silky drape with closed-loop ecological peace of mind.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('fabric', 'lyocell')}
                className="text-xs font-semibold text-[#9E472A] hover:underline inline-flex items-center gap-1"
              >
                Inspect Lyocell Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Trend 2 */}
          <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A] bg-[#FAF0E6] px-2 py-0.5 rounded">
                Trend 02
              </span>
              <span className="text-xs font-mono text-[#8C8478]">Search Vol +65%</span>
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-[#1C1C1C]">
              Heavyweight Rigid Selvedge Denim (14oz+)
            </h3>
            <p className="text-xs text-[#524B40] leading-relaxed">
              Consumer backlash against fragile 2% elastane stretch jeans has catalyzed a massive renaissance for 100% all-cotton shuttle-loom selvedge denim. Buyers prioritize heirloom durability and natural indigo fading.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('fabric', 'denim')}
                className="text-xs font-semibold text-[#9E472A] hover:underline inline-flex items-center gap-1"
              >
                Inspect Denim Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Trend 3 */}
          <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A] bg-[#FAF0E6] px-2 py-0.5 rounded">
                Trend 03
              </span>
              <span className="text-xs font-mono text-[#8C8478]">Climate Resilient</span>
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-[#1C1C1C]">
              High-Twist Open Weaves (Airy Voiles & Tropical Fresco)
            </h3>
            <p className="text-xs text-[#524B40] leading-relaxed">
              As global summer heat records tumble, high-twist porous weaves that let wind pass through while keeping structured tailoring lines have become essential. Combed cotton lawns and tropical worsted fresco lead this charge.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('fabric', 'lawn')}
                className="text-xs font-semibold text-[#9E472A] hover:underline inline-flex items-center gap-1"
              >
                Inspect Lawn Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Trend 4 */}
          <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A] bg-[#FAF0E6] px-2 py-0.5 rounded">
                Trend 04
              </span>
              <span className="text-xs font-mono text-[#8C8478]">South Asian Heritage</span>
            </div>
            <h3 className="font-serif-heading font-bold text-xl text-[#1C1C1C]">
              Artisanal Pit-Loom Khaddar & Handloom Khadi
            </h3>
            <p className="text-xs text-[#524B40] leading-relaxed">
              South Asian heritage textiles are being celebrated in haute couture runways. Hand-spun desi cotton khaddar offers natural slubbed texture and micro-air pockets unmatched by industrial projectile looms.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('pakistani')}
                className="text-xs font-semibold text-[#9E472A] hover:underline inline-flex items-center gap-1"
              >
                Explore Pakistani Heritage Portal <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
