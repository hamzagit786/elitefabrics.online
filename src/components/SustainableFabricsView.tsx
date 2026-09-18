import React from 'react';
import { 
  Droplet, 
  Leaf, 
  Recycle, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface SustainableFabricsViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const SustainableFabricsView: React.FC<SustainableFabricsViewProps> = ({ onNavigate }) => {
  const lcaData = [
    {
      fiber: 'Conventional Cotton',
      waterUse: 'High (7,000–10,000 L/kg)',
      pesticides: 'Very High (16% of global insecticides)',
      carbon: 'Medium (4.3 kg CO2e/kg)',
      microplastics: 'None (Biodegradable in soil in 1–5 months)',
      circularity: 'High mechanical recyclability downcycled to insulation'
    },
    {
      fiber: 'GOTS Organic Cotton',
      waterUse: 'Moderate (Rainfed priority, but yield is lower)',
      pesticides: 'Zero synthetic chemical pesticides/fertilizers',
      carbon: 'Low-to-Medium (46% lower greenhouse gas)',
      microplastics: 'None (Natural cellulose)',
      circularity: 'High circularity with untreated cotton sewing thread'
    },
    {
      fiber: 'Industrial Hemp',
      waterUse: 'Very Low (Rainfall sufficient; 70% less than cotton)',
      pesticides: 'Extremely Low (Natural weed suppressor)',
      carbon: 'Negative-to-Neutral (High carbon sequestration in soil)',
      microplastics: 'None (Extremely strong bast fiber)',
      circularity: '100% biodegradable and soil rehabilitating'
    },
    {
      fiber: 'European Flax (Linen)',
      waterUse: 'Very Low (Relies purely on natural Atlantic rainwater)',
      pesticides: 'Low (Naturally pest-resilient bast crop)',
      carbon: 'Low (Minimal mechanical field processing)',
      microplastics: 'None (Natural cellulose)',
      circularity: 'Heirloom longevity; fully compostable unbleached'
    },
    {
      fiber: 'Closed-Loop Lyocell (TENCEL™)',
      waterUse: 'Low (FSC certified eucalyptus forest rainfall)',
      pesticides: 'Zero (Managed non-agricultural tree plantations)',
      carbon: 'Low (Renewable biorefinery energy)',
      microplastics: 'None (Pure wood cellulosic)',
      circularity: '>99.5% solvent and water continuously recovered'
    },
    {
      fiber: 'Recycled Polyester (rPET)',
      waterUse: 'Very Low (No crop irrigation required)',
      pesticides: 'Zero agricultural pesticides',
      carbon: 'Moderate (~40% less than virgin polyester)',
      microplastics: 'CRITICAL HAZARD (Sheds thousands of microfibers per home wash)',
      circularity: 'Bottles downcycled to fabric; difficult to re-recycle again'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2E5E35] font-semibold flex items-center justify-center gap-1.5">
          <Leaf className="w-4 h-4" /> Empirical Life-Cycle Assessment (LCA)
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Sustainable Fabrics & Circular Materials
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          Cutting through commercial fashion greenwashing. We analyze peer-reviewed life-cycle metrics including agricultural water depletion, closed-loop chemical solvents, post-consumer microplastic shedding, and circular biodegradability.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('article', 'sustainable-fabrics-lifecycle-guide')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Read Long-Form Article: Sustainable Fabrics Decoded <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* The Empirical LCA Comparison Matrix Table */}
      <section className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-[#E6E0D7] pb-4">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Textile Environmental Impact Matrix
          </h2>
          <p className="text-xs text-[#7A7266] mt-1">
            Data synthesized from Textile Exchange Materials Market Reports and peer-reviewed LCA journals.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#FAF8F5] text-[#1C1C1C] border-b border-[#E6DEC2]">
                <th className="p-3.5 font-bold">Fiber Variety</th>
                <th className="p-3.5 font-bold">Irrigation Water</th>
                <th className="p-3.5 font-bold">Agrochemicals</th>
                <th className="p-3.5 font-bold">Carbon Footprint</th>
                <th className="p-3.5 font-bold">Microplastic Risk</th>
                <th className="p-3.5 font-bold">Circularity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EAE0]">
              {lcaData.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                  <td className="p-3.5 font-semibold text-[#1C1C1C]">{row.fiber}</td>
                  <td className="p-3.5 text-[#554E43]">{row.waterUse}</td>
                  <td className="p-3.5 text-[#554E43]">{row.pesticides}</td>
                  <td className="p-3.5 text-[#554E43]">{row.carbon}</td>
                  <td className={`p-3.5 font-medium ${row.microplastics.includes('CRITICAL') ? 'text-[#9E3535]' : 'text-[#2E5E35]'}`}>
                    {row.microplastics}
                  </td>
                  <td className="p-3.5 text-[#554E43]">{row.circularity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Two Deep-Dives: Closed-Loop Solvents & The Microplastic Hazard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FAFDF9] border border-[#D5E6D8] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#2E5E35]">
            <Recycle className="w-5 h-5" />
            <h3 className="font-serif-heading font-bold text-xl text-[#20382E]">
              The Closed-Loop Lyocell Standard
            </h3>
          </div>
          <p className="text-xs text-[#3E5242] leading-relaxed">
            Traditional rayon synthesis relies on hazardous carbon disulfide. In contrast, Lyocell uses direct organic dissolution with N-Methylmorpholine N-oxide (NMMO). Over 99.5% of the solvent and wash water is purified and fed back into the next production batch, preventing chemical toxic effluent release into public waterways.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('fabric', 'lyocell')}
              className="text-xs font-semibold text-[#2E5E35] hover:underline inline-flex items-center gap-1"
            >
              Inspect Lyocell Technical Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-[#FDF9F9] border border-[#EAD5D5] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#9E3535]">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-serif-heading font-bold text-xl text-[#5E2020]">
              The Microplastic Truth of rPET
            </h3>
          </div>
          <p className="text-xs text-[#5C3E3E] leading-relaxed">
            While recycling PET beverage bottles into synthetic polyester keeps plastic out of landfills, apparel garments made from recycled fleece shed between 700,000 and 1,000,000 microscopic plastic filaments during each washing cycle. Because these fibers do not biodegrade, they pass directly through wastewater plants into marine ecosystems.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('care')}
              className="text-xs font-semibold text-[#9E3535] hover:underline inline-flex items-center gap-1"
            >
              Learn How Washing Cold Minimizes Shedding <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
