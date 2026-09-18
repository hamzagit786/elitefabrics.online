import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Filter, 
  Search,
  Sparkles,
  Layers,
  Globe2,
  Leaf,
  Shirt
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { ContentCategory } from '../types';

interface BlogViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Trending Fabrics',
    'Fabric Guides',
    'Pakistani Fabrics',
    'Sustainable Fabrics',
    'How-To Guides'
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Blog Masthead */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <BookOpen className="w-4 h-4" /> Editorial Archive
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          The Elite Fabrics Blog
        </h1>
        <p className="text-sm sm:text-base text-[#5E574D] leading-relaxed">
          Deep-dive guides, seasonal trends, textile history, and practical clothing care explained in simple everyday English.
        </p>
      </div>

      {/* Featured Lead Story */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="bg-white border border-[#E6E0D7] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:border-[#9E472A]/50 transition-colors">
          <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto relative overflow-hidden bg-[#EAE4D9]">
            <img
              src={featuredArticle.featuredImage}
              alt={featuredArticle.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-[#1C1C1C] text-white text-[11px] font-mono uppercase tracking-wider rounded-sm font-semibold">
              Featured Editorial
            </span>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#7A7266]">
                <span className="px-2 py-0.5 bg-[#FAF3F0] text-[#9E472A] font-semibold rounded-xs">
                  {featuredArticle.category}
                </span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                </span>
              </div>

              <h2 
                onClick={() => onNavigate('article', featuredArticle.slug)}
                className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C] hover:text-[#9E472A] cursor-pointer transition-colors leading-tight"
              >
                {featuredArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#5E574D] leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0EAE0] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#DDD5C7]"
                />
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1C1C] block">{featuredArticle.author.name}</span>
                  <span className="text-[#8A8277]">{featuredArticle.publishDate}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('article', featuredArticle.slug)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E472A] hover:text-[#B55535] uppercase tracking-wider"
              >
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-[#E6E0D7]">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#1C1C1C] text-white font-semibold'
                  : 'bg-white border border-[#E6E0D7] text-[#5E574D] hover:bg-[#FAF8F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-[#8C8478] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles & topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-1.5 text-xs bg-white border border-[#DDD5C7] rounded-md focus:outline-hidden focus:border-[#9E472A] transition-colors"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredArticles.map((art) => (
          <article
            key={art.id}
            className="bg-white border border-[#E6E0D7] rounded-xl overflow-hidden flex flex-col justify-between hover:border-[#9E472A]/50 hover:shadow-xs transition-all group"
          >
            <div>
              <div 
                onClick={() => onNavigate('article', art.slug)}
                className="aspect-16/10 relative overflow-hidden bg-[#EAE4D9] cursor-pointer"
              >
                <img
                  src={art.featuredImage}
                  alt={art.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#1C1C1C] text-[10px] font-semibold rounded-xs uppercase tracking-wider">
                  {art.category}
                </span>
              </div>

              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-[#8C8478] font-mono">
                  <span>{art.publishDate}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 
                  onClick={() => onNavigate('article', art.slug)}
                  className="font-serif-heading font-bold text-lg text-[#1C1C1C] group-hover:text-[#9E472A] cursor-pointer transition-colors leading-snug line-clamp-2"
                >
                  {art.title}
                </h3>

                <p className="text-xs text-[#5E574D] leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-[#F0EAE0] mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {art.tags.slice(0, 2).map((t, idx) => (
                  <span key={idx} className="text-[10px] text-[#7A7266] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EDE7DE]">
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onNavigate('article', art.slug)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#9E472A] hover:text-[#B55535]"
              >
                Read <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="bg-white border border-[#E6E0D7] rounded-xl p-12 text-center space-y-3">
          <BookOpen className="w-8 h-8 text-[#8C8478] mx-auto" />
          <h3 className="font-serif-heading font-bold text-lg text-[#1C1C1C]">No Articles Found</h3>
          <p className="text-xs text-[#6B6355]">
            No articles matched your search query "{searchQuery}". Try selecting "All" or a different search term.
          </p>
        </div>
      )}

      {/* Editorial Standards Callout */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#1C1C1C] block">Editorial Independence Guarantee</span>
          <p className="text-xs text-[#6E6659] mt-0.5">
            Every guide is produced for educational insight. We do not sell fabrics or accept paid product placements.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => onNavigate('editorial-policy')}
            className="px-4 py-2 bg-white border border-[#D9D1C5] hover:bg-[#EFE9DF] text-[#1C1C1C] text-xs font-semibold rounded transition-colors"
          >
            Editorial Policy
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold rounded transition-colors"
          >
            Suggest a Topic
          </button>
        </div>
      </section>
    </div>
  );
};
