import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, BookOpen, Calculator, Layers, Clock } from 'lucide-react';
import { FABRICS } from '../data/fabrics';
import { ARTICLES } from '../data/articles';
import { FABRIC_COMPARISONS } from '../data/comparisons';
import { FABRIC_TOOLS } from '../data/tools';
import { ToolCard } from './tools/ToolCard';

interface HomeViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenSearch }) => {
  const [toolSearch, setToolSearch] = useState('');

  // Sorted articles
  const latestArticles = [...ARTICLES]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 4);

  // Trending Guides (specifically requested in Part 2)
  const trendingSlugs = [
    'what-is-gsm-in-fabric',
    'cotton-gsm-guide',
    'denim-gsm-chart',
    'warp-vs-weft',
    'thread-count-explained',
    'why-cotton-shrinks'
  ];
  const trendingGuides = trendingSlugs
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean) as typeof ARTICLES;

  // Recently updated guides
  const recentlyUpdated = [...ARTICLES]
    .sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())
    .slice(0, 4);

  // Most Popular Tools (5 flagship calculators)
  const popularToolSlugs = [
    'fabric-gsm-calculator',
    'fabric-yardage-calculator',
    'curtain-fabric-calculator',
    'fabric-shrinkage-calculator',
    'yarn-count-converter'
  ];
  const popularTools = popularToolSlugs
    .map(slug => FABRIC_TOOLS.find(t => t.slug === slug))
    .filter(Boolean) as typeof FABRIC_TOOLS;

  const featuredFabrics = FABRICS.slice(0, 6);
  const featuredComparisons = FABRIC_COMPARISONS.slice(0, 4);
  const pakistaniFabrics = FABRICS.filter(f => f.category === 'traditional');

  // Filtered tools
  const filteredTools = toolSearch.trim()
    ? FABRIC_TOOLS.filter(t => 
        t.title.toLowerCase().includes(toolSearch.toLowerCase()) ||
        t.shortDescription.toLowerCase().includes(toolSearch.toLowerCase()) ||
        t.category.toLowerCase().includes(toolSearch.toLowerCase())
      )
    : FABRIC_TOOLS;

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* Premium Educational Hero Section */}
      <section className="bg-[#F4EFEA] border-b border-[#E2DBD0] pt-12 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D9D1C5] rounded-full text-xs text-[#524B42]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9E472A]" />
            <span>Independent Non-Commercial Textile Reference</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-[#191919] tracking-tight leading-tight">
            Learn About Fabrics &amp; Textiles
          </h1>

          <p className="text-base sm:text-lg text-[#524B42] max-w-2xl mx-auto leading-relaxed">
            Free educational calculators, fiber science guides, garment care instructions, and material directories written in clear, plain English.
          </p>

          {/* Instant Search Bar Trigger */}
          <div className="max-w-xl mx-auto pt-2">
            <button
              type="button"
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#D0C7B8] hover:border-[#1C1C1C] rounded-lg text-sm text-[#7A7266] shadow-xs transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#8C8478]" />
                <span>Search tools, fabrics, yardage, GSM...</span>
              </div>
              <span className="hidden sm:inline-block text-xs bg-[#FAF8F5] border border-[#DDD5C7] px-2 py-0.5 rounded text-[#7A7266] font-mono">
                ⌘K
              </span>
            </button>
          </div>

          {/* Quick Category Jump Tabs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-medium">
            <button
              onClick={() => onNavigate('tools')}
              className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded-md uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Fabric Tools</span>
            </button>
            <button
              onClick={() => onNavigate('fabrics')}
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Fabric Library</span>
            </button>
            <button
              onClick={() => onNavigate('comparisons')}
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Comparisons
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Articles &amp; Guides</span>
            </button>
            <button
              onClick={() => onNavigate('pakistani')}
              className="px-4 py-2 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#D0C7B8] rounded-md uppercase tracking-wider font-semibold transition-colors"
            >
              Pakistani Fabrics
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* SECTION: MOST POPULAR TOOLS (Requested in Part 2) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold mb-1">
                Fast Live Utilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Most Popular Tools
              </h2>
              <p className="text-xs sm:text-sm text-[#5C554B] mt-1">
                Free high-utility calculators for sewing, measuring, and textile science.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tools')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline shrink-0"
            >
              Explore All 10 Tools &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>

        {/* SECTION: TRENDING FABRIC GUIDES (Requested in Part 2) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold mb-1">
                Reader Favorites
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Trending Fabric Guides
              </h2>
              <p className="text-xs sm:text-sm text-[#5C554B] mt-1">
                Practical, in-depth explanations of weight metrics, weave structures, and material care.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs font-semibold uppercase tracking-wider text-[#9E472A] hover:underline shrink-0"
            >
              All Guides &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingGuides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => onNavigate('article', guide.slug)}
                className="cursor-pointer bg-white border border-[#E8E2D9] rounded-lg p-5 hover:border-[#9E472A] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#787167] font-mono">
                    <span>{guide.category}</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C] hover:text-[#9E472A] transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#5E584E] line-clamp-2 leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
                  <span className="text-[#6A6359]">{guide.author.name}</span>
                  <span className="text-[#9E472A] font-semibold flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: RECENTLY UPDATED (Requested in Part 2) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pb-3 border-b border-[#E6E0D7]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-semibold mb-1">
                Fact-Checked Content
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                Recently Updated
              </h2>
              <p className="text-xs sm:text-sm text-[#5C554B] mt-1">
                Reviewed against current ASTM, ISO, and AATCC textile testing standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentlyUpdated.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('article', article.slug)}
                className="cursor-pointer bg-white border border-[#E8E2D9] rounded-lg p-4 hover:border-[#9E472A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7A7266] font-mono mb-1.5">
                    <Clock className="w-3 h-3 text-[#9E472A]" />
                    <span>Updated {article.updatedDate}</span>
                  </div>
                  <h3 className="text-sm font-serif-heading font-bold text-[#1C1C1C] line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#5E584E] mt-1.5 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-2 mt-3 border-t border-[#F2ECE3] text-right">
                  <span className="text-xs text-[#9E472A] font-semibold">View Article &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: FABRIC TOOLS SECTION (All 10 Tools with Instant Filter) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 pb-3 border-b border-[#E6E0D7]">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
                All Fabric Tools &amp; Calculators
              </h2>
              <p className="text-xs sm:text-sm text-[#5C554B] mt-1">
                Browse our complete suite of 10 free interactive utilities.
              </p>
            </div>

            {/* In-Page Quick Filter */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                value={toolSearch}
                onChange={(e) => setToolSearch(e.target.value)}
                placeholder="Filter tools by keyword..."
                className="w-full px-3 py-1.5 bg-white border border-[#D0C7BA] rounded-md text-xs text-[#1C1C1C] placeholder-[#8C8478] focus:outline-none focus:border-[#1C1C1C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>

        {/* SECTION: FABRIC TYPES LIBRARY */}
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

        {/* SECTION: FABRIC COMPARISONS */}
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

        {/* SECTION: PAKISTANI HERITAGE */}
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

      </div>
    </div>
  );
};
