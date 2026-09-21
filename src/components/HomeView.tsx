import React from 'react';
import { FABRICS } from '../data/fabrics';
import { ARTICLES } from '../data/articles';
import { FABRIC_COMPARISONS } from '../data/comparisons';

interface HomeViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenSearch }) => {
  const latestArticles = [...ARTICLES]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 4);
  const featuredFabrics = FABRICS.slice(0, 6);
  const featuredComparisons = FABRIC_COMPARISONS.slice(0, 4);
  const pakistaniFabrics = FABRICS.filter(f => f.category === 'traditional');

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Clean, Human Hero Section */}
      <section className="bg-[#F4EFEA] border-b border-[#E2DBD0] pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-widest text-[#7A7266] font-semibold">
            Fabric &amp; Textile Information
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-[#191919] tracking-tight leading-tight">
            Learn About Fabrics &amp; Textiles
          </h1>

          <p className="text-base sm:text-lg text-[#524B42] max-w-2xl mx-auto leading-relaxed">
            Practical explanations about fibers, weaves, garment care, and textile history in simple, readable English.
          </p>

          {/* Clean Quick Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            <button
              onClick={() => onNavigate('fabrics')}
              className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Fabric Types Library
            </button>
            <button
              onClick={() => onNavigate('comparisons')}
              className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Fabric Comparisons
            </button>
            <button
              onClick={() => onNavigate('beginner')}
              className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Beginner Guide
            </button>
            <button
              onClick={() => onNavigate('pakistani')}
              className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Pakistani Fabrics
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* SECTION 1: LATEST ARTICLES */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7] mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Latest Guides &amp; Articles
              </h2>
              <p className="text-xs text-[#6B655C] mt-1">
                Helpful articles on material properties, selection, and everyday garment tips.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline"
            >
              View All Articles &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.map((article) => (
              <article 
                key={article.id}
                onClick={() => onNavigate('article', article.slug)}
                className="cursor-pointer flex flex-col bg-white border border-[#E8E2D9] rounded-lg overflow-hidden hover:border-[#9E472A] transition-colors"
              >
                <div className="aspect-16/10 overflow-hidden bg-[#F2EDE4]">
                  <img 
                    src={article.featuredImage} 
                    alt={article.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] text-[#787167] mb-1.5 font-mono">
                      <span>{article.category}</span> • <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C] hover:text-[#9E472A] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#5E584E] mt-2 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                    <span className="text-[#6A6359]">{article.author.name}</span>
                    <span className="text-[#9E472A] font-semibold">Read &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 2: FABRIC TYPES LIBRARY PREVIEW */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7] mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Explore Fabric Types
              </h2>
              <p className="text-xs text-[#6B655C] mt-1">
                Detailed breakdowns of what each fabric feels like, how it behaves, and common applications.
              </p>
            </div>
            <button
              onClick={() => onNavigate('fabrics')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline"
            >
              Browse All Fabrics &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredFabrics.map((fabric) => (
              <div
                key={fabric.id}
                onClick={() => onNavigate('fabric', fabric.slug)}
                className="cursor-pointer bg-white border border-[#E8E2D9] rounded-lg p-5 hover:border-[#9E472A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F2EDE4] text-[#635C52] rounded">
                      {fabric.category}
                    </span>
                    <span className="text-[11px] text-[#7A7266]">
                      {fabric.bestSeasons.join(', ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C]">
                    {fabric.name}
                  </h3>
                  
                  <p className="text-xs text-[#5E584E] mt-1.5 line-clamp-2">
                    {fabric.whatIsIt || fabric.fiberComposition}
                  </p>

                  <div className="mt-3 p-2.5 bg-[#FAF8F5] rounded border border-[#ECE5D9] text-xs text-[#524B42] space-y-1">
                    <div>
                      <span className="text-[#7A7266]">Texture: </span>
                      <span className="font-medium text-[#1C1C1C]">{fabric.texture.split(',')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[#7A7266]">Common uses: </span>
                      <span className="truncate inline-block max-w-[200px] align-bottom">
                        {fabric.commonUses.slice(0, 2).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                  <span className="text-[#7A7266]">{fabric.breathability} Breathability</span>
                  <span className="text-[#9E472A] font-semibold">View Guide &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FABRIC COMPARISONS */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7] mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Side-by-Side Comparisons
              </h2>
              <p className="text-xs text-[#6B655C] mt-1">
                Clear comparisons to help choose the right fabric for any season or garment.
              </p>
            </div>
            <button
              onClick={() => onNavigate('comparisons')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline"
            >
              All Comparisons &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredComparisons.map((comp) => (
              <div 
                key={comp.id}
                onClick={() => onNavigate('comparison', comp.slug)}
                className="cursor-pointer bg-white border border-[#E8E2D9] rounded-lg p-5 hover:border-[#9E472A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="font-semibold text-[#9E472A]">{comp.fabricA.name}</span>
                    <span className="text-[#8C8478]">vs</span>
                    <span className="font-semibold text-[#4A443B]">{comp.fabricB.name}</span>
                  </div>

                  <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C] leading-snug">
                    {comp.title}
                  </h3>

                  <p className="text-xs text-[#5E584E] mt-2 line-clamp-2 leading-relaxed">
                    {comp.overview}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                  <span className="text-[#7A7266]">{comp.criteria.length} criteria compared</span>
                  <span className="text-[#9E472A] font-semibold">Compare &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PAKISTANI HERITAGE */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7] mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Pakistani Fabrics &amp; Traditions
              </h2>
              <p className="text-xs text-[#6B655C] mt-1">
                Explore lightweight Lawn, cozy winter Khaddar, and traditional Ajrak printing.
              </p>
            </div>
            <button
              onClick={() => onNavigate('pakistani')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline"
            >
              Explore Pakistani Fabrics &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pakistaniFabrics.slice(0, 3).map((fabric) => (
              <div 
                key={fabric.id}
                onClick={() => onNavigate('fabric', fabric.slug)}
                className="cursor-pointer bg-white border border-[#E8E2D9] rounded-lg overflow-hidden hover:border-[#9E472A] transition-colors"
              >
                <div className="aspect-16/10 overflow-hidden bg-[#F2EDE4]">
                  <img 
                    src={fabric.image} 
                    alt={fabric.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C]">
                    {fabric.name}
                  </h3>
                  <p className="text-xs text-[#5E584E] line-clamp-2 leading-relaxed">
                    {fabric.whatIsIt || fabric.texture}
                  </p>
                  <div className="pt-2 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#7A7266]">{fabric.bestSeasons.join(', ')}</span>
                    <span className="text-[#9E472A] font-semibold">Read &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: FABRIC HISTORY & GLOBAL INDUSTRY TEASERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold">
                Historical Archive
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Fabric History &amp; Timeline
              </h2>
              <p className="text-sm text-[#5E574D] leading-relaxed">
                From early Egyptian linen and Indus Valley cotton weaving to modern textile developments, discover how fabrics evolved over centuries.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('timeline')}
                className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                View History Timeline &rarr;
              </button>
            </div>
          </section>

          <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold">
                International Manufacturing
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Global Textile Industry
              </h2>
              <p className="text-sm text-[#5E574D] leading-relaxed">
                Educational profiles of major manufacturing centers across Pakistan, India, China, Bangladesh, Turkey, USA, UK, and Europe.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('industry')}
                className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Explore Global Industry &rarr;
              </button>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};
