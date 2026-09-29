import React, { useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Sun, 
  Wind, 
  AlertTriangle, 
  Check, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface FabricCareViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const FabricCareView: React.FC<FabricCareViewProps> = ({ onNavigate }) => {
  const [selectedFiber, setSelectedFiber] = useState<'cotton' | 'linen' | 'wool' | 'silk' | 'synthetics' | 'denim'>('cotton');

  const careProtocols = {
    cotton: {
      title: 'Cotton (Lawn, Poplin, Jersey)',
      wash: 'Warm or cold water (30°C – 40°C). Gentle to regular cycle.',
      dry: 'Tumble dry low or line dry in shade. Avoid over-drying to reduce static.',
      iron: 'Medium-high heat (150°C – 200°C) with generous steam while slightly damp.',
      criticalWarning: 'Hot water (>60°C) and hot dryer tumbling causes relaxation shrinkage in un-sanforized cotton.',
      proTip: 'Cotton is unique: its cellulose fibers actually gain 20% tensile strength when wet, making it highly durable in laundry.'
    },
    linen: {
      title: 'Flax Linen',
      wash: 'Lukewarm or cold wash (30°C). Plenty of water in machine to allow free circulation.',
      dry: 'Line dry or hang dry. Do not tumble dry completely bone-dry.',
      iron: 'High heat (200°C+) with heavy steam while fabric is noticeably damp.',
      criticalWarning: 'Never wring out twisted linen violently—folding or wringing in the exact same line repeatedly can snap rigid bast fibers over time.',
      proTip: 'Linen softens dramatically after 3–5 wash cycles as the natural pectin between flax fiber cells loosens.'
    },
    wool: {
      title: 'Wool & Cashmere',
      wash: 'Cold hand wash only (20°C – 30°C). Never use machine agitation. Use specialized wool wash.',
      dry: 'Gently squeeze water out using a rolled clean towel. Reshape and lay flat on a drying rack.',
      iron: 'Low heat (110°C) with pressing cloth, or steam horizontally without pressing.',
      criticalWarning: 'HEAT + AGITATION = PERMANENT FELTING SHRINKAGE. Wool fiber scales lock into an irreversible felt clump if tumbled.',
      proTip: 'Wool has natural antimicrobial lanolin: you can refresh it by simply airing it outdoors overnight on a balcony.'
    },
    silk: {
      title: 'Pure Silk (Mulberry, Charmeuse, Habotai)',
      wash: 'Cold hand wash with pH-neutral detergent. Never use detergents with biological enzymes (which digest protein).',
      dry: 'Never tumble dry. Roll in a clean towel to absorb water, then hang dry away from direct sunlight.',
      iron: 'Low heat setting (110°C). Always iron on the matte reverse side while slightly damp.',
      criticalWarning: 'Direct sunlight bleaches and embrittles silk fibroin proteins. Never spray perfume directly onto silk garments.',
      proTip: 'Add 1 tablespoon of distilled white vinegar to the final cold rinse to dissolve residual soap film and restore silken luster.'
    },
    synthetics: {
      title: 'Synthetics (Polyester, Nylon, Spandex)',
      wash: 'Cold wash (30°C). Use a micro-fiber filter wash bag to capture microplastics.',
      dry: 'Low heat tumble or line dry. Synthetics dry extremely fast because polymers are hydrophobic.',
      iron: 'Lowest iron setting. High heat will instantly melt synthetic polymer fibers.',
      criticalWarning: 'NEVER use fabric softener on activewear or fabrics with spandex/elastane! Softeners coat fibers in wax, ruining wicking.',
      proTip: 'Wash gym synthetic gear inside-out with an oxygen-based wash powder to prevent permanent "permastink" odor buildup.'
    },
    denim: {
      title: 'Rigid & Selvedge Denim',
      wash: 'Wash sparingly! Turn jeans inside out. Soak in cold water with gentle detergent without vigorous rubbing.',
      dry: 'Hang dry by the ankles/cuffs in shaded airflow. Never machine tumble dry raw denim.',
      iron: 'Iron inside-out with steam if crisp crease is desired, or let body heat shape the denim.',
      criticalWarning: 'Hot water washing accelerates indigo dye loss and ruins sharp contrast fading at knees and honeycombs.',
      proTip: 'Spot clean minor stains with a damp cloth rather than washing the entire pair of jeans.'
    }
  };

  const currentCare = careProtocols[selectedFiber];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Droplets className="w-4 h-4" /> Practical Garment Care & Preservation
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Practical Fabric Care & Laundry Guide
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          How to prevent shrinkage, maintain color fastness, protect delicate fibers, and ensure long-lasting wear across natural, regenerated, and synthetic textiles.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('article', 'the-ultimate-fabric-care-manual')}
            className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2"
          >
            Read Full Fabric Care Article <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Care Selector */}
      <div className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E6E0D7]">
          <div>
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
              Fiber-Specific Care Protocols
            </h2>
            <p className="text-xs text-[#7A7266] mt-0.5">Select a fiber to inspect its washing, drying, and ironing guidelines</p>
          </div>
        </div>

        {/* Fiber Selector Buttons */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(careProtocols) as Array<keyof typeof careProtocols>).map((key) => {
            const isSelected = selectedFiber === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedFiber(key)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                  isSelected
                    ? 'bg-[#1C1C1C] text-white shadow-2xs'
                    : 'bg-[#FAF8F5] text-[#524B41] border border-[#DDD5C7] hover:bg-[#EFE9DE]'
                }`}
              >
                {careProtocols[key].title}
              </button>
            );
          })}
        </div>

        {/* Care Dashboard */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D5] rounded-xl space-y-2">
              <span className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-[#2A5C8A]" /> Washing Protocol
              </span>
              <p className="text-[#4A453E] leading-relaxed">{currentCare.wash}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D5] rounded-xl space-y-2">
              <span className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
                <Wind className="w-4 h-4 text-[#8A5C2A]" /> Drying Method
              </span>
              <p className="text-[#4A453E] leading-relaxed">{currentCare.dry}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-[#EAE3D5] rounded-xl space-y-2">
              <span className="font-bold text-sm text-[#1C1C1C] flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-[#8A2A2A]" /> Ironing & Steaming
              </span>
              <p className="text-[#4A453E] leading-relaxed">{currentCare.iron}</p>
            </div>
          </div>

          {/* Warnings & Pro Tip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-[#FDF7F7] border border-[#EACDCD] rounded-xl text-[#6B2E2E] leading-relaxed space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-sm text-[#9E3535]">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Critical Care Warning:
              </span>
              <p>{currentCare.criticalWarning}</p>
            </div>

            <div className="p-4 bg-[#F7FDF8] border border-[#CDEACF] rounded-xl text-[#2E6B35] leading-relaxed space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-sm text-[#2E5E35]">
                <Check className="w-4 h-4 shrink-0" /> Textile Scientist Tip:
              </span>
              <p>{currentCare.proTip}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cluster: Fabric Care Topical Guides Hub */}
      <section className="space-y-6">
        <div className="border-b border-[#E6E0D7] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#9E472A] font-bold block">
              Topical Authority Cluster
            </span>
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
              Fabric Care &amp; Maintenance Guides
            </h2>
          </div>
          <button
            onClick={() => onNavigate('tools', 'fabric-care-symbol-guide')}
            className="text-xs font-semibold text-[#9E472A] hover:underline"
          >
            Launch Care Symbol Decoder Tool →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1. How to Wash Cotton */}
          <div 
            onClick={() => onNavigate('articles', 'washing-different-fabrics')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Laundering Guide
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                How to Wash Cotton Garments
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Safe cycle selections, water temperatures (30°C vs 60°C), enzyme detergent guidance, and avoiding fiber breakdown.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 2. How to Wash Silk */}
          <div 
            onClick={() => onNavigate('fabric', 'silk')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Delicate Fiber Care
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                How to Wash Pure Silk
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Cold hand-washing techniques, avoiding alkaline damage, vinegar restoring rinses, and preventing water rings.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>Inspect Silk Protocol</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 3. Remove Fabric Stains */}
          <div 
            onClick={() => onNavigate('articles', 'the-ultimate-fabric-care-manual')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Stain Chemistry
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                Remove Fabric Stains Safely
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Emergency treatments for oil, coffee, ink, red wine, and protein stains without bleaching or fiber friction damage.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>Read Stain Manual</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 4. Prevent Shrinking */}
          <div 
            onClick={() => onNavigate('articles', 'how-to-prevent-shrinkage')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Shrinkage Prevention
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                How to Prevent Fabric Shrinking
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Why fiber tension releases during washing, pre-soaking rules, and calculating shrinkage rates before cutting patterns.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>Read Shrinkage Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 5. Iron Different Fabrics */}
          <div 
            onClick={() => onNavigate('tools', 'fabric-care-symbol-guide')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Thermal Pressing
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                Iron Different Fabrics Safely
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Exact dot settings on your iron (110°C, 150°C, 200°C), pressing cloths, and avoiding scorched synthetic shine marks.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>View Heat Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* 6. Fabric Storage Guide */}
          <div 
            onClick={() => onNavigate('articles', 'the-ultimate-fabric-care-manual')}
            className="p-5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold block mb-1">
                Seasonal Storage
              </span>
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                Fabric Storage &amp; Preservation
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed mt-1.5">
                Breathable cotton bags vs plastic traps, cedar protection against clothing moths, and climate-controlled textile care.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F2EDE4] text-xs font-semibold text-[#9E472A] flex items-center justify-between">
              <span>Explore Storage Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
