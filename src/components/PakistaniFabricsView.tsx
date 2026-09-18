import React from 'react';
import { 
  ArrowRight, 
  Compass, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Award,
  Globe
} from 'lucide-react';
import { FABRICS } from '../data/fabrics';

interface PakistaniFabricsViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const PakistaniFabricsView: React.FC<PakistaniFabricsViewProps> = ({ onNavigate }) => {
  const pakistaniFabrics = FABRICS.filter(f => f.category === 'traditional');

  const regions = [
    {
      name: 'Sindh (Bhit Shah, Hala, Matiari)',
      specialty: 'Sindhi Ajrak & Susi Weaves',
      desc: 'Known for 4,500-year-old geometric block printing using natural indigo, madder root, and camel dung emulsifiers.'
    },
    {
      name: 'Punjab (Faisalabad, Multan, Kamalia)',
      specialty: 'Kamalia Khaddar & High-Count Combed Lawn',
      desc: 'The industrial and handloom textile capital of Pakistan, producing heavyweight pit-loom winter khaddar and world-class 80s lawn.'
    },
    {
      name: 'Khyber Pakhtunkhwa (Swat, Islampur)',
      specialty: 'Swati Karandi, Wool Shawls & Patti',
      desc: 'Mountain handloom clusters weaving textured raw silk slub Karandi and pure mountain sheep wool patti for intense winter warmth.'
    },
    {
      name: 'Karachi & Lahore Artisanal Clusters',
      specialty: 'Banarsi Brocades & Zari Jaal Weaving',
      desc: 'Migrant master weavers who preserved the intricate multi-generation Jacquard gold and silver supplemental weft traditions.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Globe className="w-4 h-4" /> 4,500 Years of Indus Valley Mastery
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Pakistani Fabrics & Textiles
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          Pakistan holds an unbroken lineage of textile civilization tracing back to Mohenjo-daro in 2500 BCE. From world-famous combed summer lawn to regional artisanal pit-loom khaddar, raw-silk Karandi, and sacred Sindhi Ajrak.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate('article', 'the-art-of-pakistani-lawn')}
            className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
          >
            Read: The Art of Pakistani Lawn <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigate('article', 'the-living-legacy-of-sindhi-ajrak')}
            className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#DDD5C7] rounded text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
          >
            Read: Sindhi Ajrak 14 Stages <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Regional Weaving Clusters */}
      <section className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="border-b border-[#E6E0D7] pb-4">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Regional Artisanal Centers of Pakistan
          </h2>
          <p className="text-xs text-[#6B6355] mt-1">
            Distinct geographical regions specialize in specialized fiber preparations and weaving traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {regions.map((reg, idx) => (
            <div key={idx} className="p-5 bg-[#FAF8F5] border border-[#EAE3D5] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9E472A]">
                <MapPin className="w-4 h-4 shrink-0" /> {reg.name}
              </div>
              <h4 className="font-serif-heading font-bold text-base text-[#1C1C1C]">{reg.specialty}</h4>
              <p className="text-xs text-[#595247] leading-relaxed">{reg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pakistani Fabric Profiles Grid */}
      <section className="space-y-6">
        <div className="border-b border-[#E6E0D7] pb-4">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Heritage Fabric Catalog ({pakistaniFabrics.length} Traditional Profiles)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pakistaniFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="group bg-white border border-[#E8E2D9] rounded-xl overflow-hidden hover:border-[#9E472A] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => onNavigate('fabric', fabric.slug)}
                  className="aspect-16/10 overflow-hidden bg-[#F2EDE4] cursor-pointer"
                >
                  <img
                    src={fabric.image}
                    alt={fabric.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E472A]">
                    {fabric.origin.split(';')[0]}
                  </span>
                  <h3 
                    onClick={() => onNavigate('fabric', fabric.slug)}
                    className="text-xl font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors mt-1 cursor-pointer"
                  >
                    {fabric.name}
                  </h3>
                  <p className="text-xs text-[#524B40] mt-2 line-clamp-3 leading-relaxed">
                    {fabric.description || fabric.texture}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#F2EDE4] grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-[#8C8478]">GSM Weight</span>
                      <span className="font-semibold text-[#1C1C1C] font-mono">{fabric.weightGsm.split('(')[0]}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-[#8C8478]">Ideal Seasons</span>
                      <span className="font-semibold text-[#1C1C1C]">{fabric.bestSeasons.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-3 bg-[#FAF8F5] border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                <span className="text-[#7A7265] text-[11px] font-mono">{fabric.fiberComposition.slice(0, 25)}...</span>
                <button
                  onClick={() => onNavigate('fabric', fabric.slug)}
                  className="font-semibold text-[#9E472A] hover:text-[#7A3620] inline-flex items-center gap-1"
                >
                  Inspect Profile <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
