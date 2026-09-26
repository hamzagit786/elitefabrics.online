import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Layers, BookOpen, Scale, BookA, ArrowRight } from 'lucide-react';
import { FABRICS } from '../data/fabrics';
import { ARTICLES } from '../data/articles';
import { FABRIC_COMPARISONS } from '../data/comparisons';
import { GLOSSARY_TERMS } from '../data/glossary';
import { FABRIC_TOOLS } from '../data/tools';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, idOrSlug?: string) => void;
}

type SearchFilterCategory = 'All' | 'Tools' | 'Articles' | 'Fabrics' | 'Comparisons' | 'Glossary';

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<SearchFilterCategory>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedFabrics = q ? FABRICS.filter(f => 
    f.name.toLowerCase().includes(q) || 
    f.fiberComposition.toLowerCase().includes(q) || 
    f.commonUses.some(u => u.toLowerCase().includes(q))
  ).slice(0, 6) : [];

  const matchedArticles = q ? ARTICLES.filter(a => 
    a.title.toLowerCase().includes(q) || 
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.category.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q)
  ).slice(0, 6) : [];

  const matchedComparisons = q ? FABRIC_COMPARISONS.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.fabricA.name.toLowerCase().includes(q) || 
    c.fabricB.name.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const matchedGlossary = q ? GLOSSARY_TERMS.filter(g => 
    g.term.toLowerCase().includes(q) || 
    g.definition.toLowerCase().includes(q)
  ).slice(0, 5) : [];

  const matchedTools = q ? FABRIC_TOOLS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.shortDescription.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.features.some(f => f.toLowerCase().includes(q))
  ).slice(0, 5) : [];

  const showTools = (activeCategory === 'All' || activeCategory === 'Tools') && matchedTools.length > 0;
  const showArticles = (activeCategory === 'All' || activeCategory === 'Articles') && matchedArticles.length > 0;
  const showFabrics = (activeCategory === 'All' || activeCategory === 'Fabrics') && matchedFabrics.length > 0;
  const showComparisons = (activeCategory === 'All' || activeCategory === 'Comparisons') && matchedComparisons.length > 0;
  const showGlossary = (activeCategory === 'All' || activeCategory === 'Glossary') && matchedGlossary.length > 0;

  const totalMatches = matchedFabrics.length + matchedArticles.length + matchedComparisons.length + matchedGlossary.length + matchedTools.length;

  const handleSelect = (view: string, idOrSlug?: string) => {
    onNavigate(view, idOrSlug);
    onClose();
  };

  const handleQuickSearch = (term: string, cat: SearchFilterCategory = 'All') => {
    setQuery(term);
    setActiveCategory(cat);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E6E0D7] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#8C8478] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search all 10 tools, 29 articles, fabrics, comparisons (e.g. GSM, Denim, Yardage)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base bg-transparent focus:outline-hidden text-[#1C1C1C] placeholder-[#8C8478]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8C8478] hover:text-[#1C1C1C] px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#8C8478] hover:text-[#1C1C1C] rounded-md"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Pills (Part 10 requirement) */}
        <div className="px-4 py-2 bg-[#F5EFE6] border-b border-[#E8E2D8] flex items-center gap-1.5 overflow-x-auto text-xs">
          {(['All', 'Tools', 'Articles', 'Fabrics', 'Comparisons', 'Glossary'] as SearchFilterCategory[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-white text-[#4A453E] border border-[#DDD5C7] hover:bg-[#FAF8F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {!query ? (
            <div className="text-center py-6 text-[#7A7265] space-y-3">
              <p className="font-serif-heading text-lg font-bold text-[#1C1C1C]">Instant Textile Search</p>
              <p className="text-xs max-w-md mx-auto">
                Search our 10 calculators, 29 comprehensive guides, and 30+ fabric profiles with instant live results.
              </p>
              
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold block mb-2">
                  Popular Searches
                </span>
                <div className="flex flex-wrap justify-center gap-1.5 text-xs">
                  <button onClick={() => handleQuickSearch('GSM Calculator', 'Tools')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">GSM Calculator</button>
                  <button onClick={() => handleQuickSearch('Curtain', 'Tools')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Curtain Calculator</button>
                  <button onClick={() => handleQuickSearch('Cotton GSM', 'Articles')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Cotton GSM</button>
                  <button onClick={() => handleQuickSearch('Denim', 'Articles')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Denim Chart</button>
                  <button onClick={() => handleQuickSearch('Warp vs Weft', 'Articles')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Warp vs Weft</button>
                  <button onClick={() => handleQuickSearch('Shrinkage', 'Tools')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Shrinkage Calculator</button>
                  <button onClick={() => handleQuickSearch('Lawn', 'Fabrics')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded hover:border-[#1C1C1C]">Pakistani Lawn</button>
                </div>
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="text-center py-8 text-[#7A7265]">
              <p className="font-serif-heading text-base font-bold text-[#1C1C1C]">No index results found for "{query}"</p>
              <p className="text-xs mt-1">Try another keyword or switch category filters.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tools & Calculators */}
              {showTools && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <Scale className="w-3.5 h-3.5" /> Interactive Tools ({matchedTools.length})
                  </span>
                  <div className="space-y-2">
                    {matchedTools.map(t => (
                      <div
                        key={t.id}
                        onClick={() => handleSelect('tools', t.slug)}
                        className="p-3 bg-white hover:bg-[#F5F0E8] border border-[#E6E0D7] rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="font-serif-heading font-bold text-sm text-[#1C1C1C] flex items-center gap-2">
                            <span>{t.title}</span>
                            <span className="text-[10px] font-mono uppercase tracking-wider bg-[#FAF4EB] text-[#9E472A] px-2 py-0.5 rounded border border-[#EADBCA]">
                              Free Tool
                            </span>
                          </div>
                          <div className="text-[11px] text-[#7A7265] mt-0.5 line-clamp-1">{t.shortDescription}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C8478]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles & Guides */}
              {showArticles && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <BookOpen className="w-3.5 h-3.5" /> Educational Guides ({matchedArticles.length})
                  </span>
                  <div className="space-y-2">
                    {matchedArticles.map(a => (
                      <div
                        key={a.id}
                        onClick={() => handleSelect('article', a.slug)}
                        className="p-3 bg-white hover:bg-[#F5F0E8] border border-[#E6E0D7] rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="font-serif-heading font-bold text-sm text-[#1C1C1C]">{a.title}</div>
                          <div className="text-[11px] text-[#7A7265]">{a.category} • {a.readTime}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C8478]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fabrics */}
              {showFabrics && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <Layers className="w-3.5 h-3.5" /> Fabric Types ({matchedFabrics.length})
                  </span>
                  <div className="space-y-2">
                    {matchedFabrics.map(f => (
                      <div
                        key={f.id}
                        onClick={() => handleSelect('fabric', f.slug)}
                        className="p-3 bg-white hover:bg-[#F5F0E8] border border-[#E6E0D7] rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="font-serif-heading font-bold text-sm text-[#1C1C1C]">{f.name}</div>
                          <div className="text-[11px] text-[#7A7265]">{f.fiberComposition} • {f.weightGsm.split('(')[0]}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C8478]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparisons */}
              {showComparisons && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <Scale className="w-3.5 h-3.5" /> Comparisons ({matchedComparisons.length})
                  </span>
                  <div className="space-y-2">
                    {matchedComparisons.map(c => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect('comparison', c.slug)}
                        className="p-3 bg-white hover:bg-[#F5F0E8] border border-[#E6E0D7] rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="font-serif-heading font-bold text-sm text-[#1C1C1C]">{c.title}</div>
                          <div className="text-[11px] text-[#7A7265]">{c.fabricA.name} vs. {c.fabricB.name}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C8478]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Glossary */}
              {showGlossary && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <BookA className="w-3.5 h-3.5" /> Glossary Terms ({matchedGlossary.length})
                  </span>
                  <div className="space-y-2">
                    {matchedGlossary.map((g, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleSelect('glossary')}
                        className="p-3 bg-white hover:bg-[#F5F0E8] border border-[#E6E0D7] rounded-lg cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="font-serif-heading font-bold text-sm text-[#1C1C1C]">{g.term} <span className="font-normal text-xs text-[#8C8478]">({g.category})</span></div>
                          <div className="text-[11px] text-[#5C5549] line-clamp-1">{g.definition}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#8C8478]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-[#F0EAE0] border-t border-[#E6E0D7] flex items-center justify-between text-[11px] text-[#7A7265]">
          <span>Search shortcut: <strong>⌘K</strong> or <strong>Ctrl+K</strong></span>
          <span>Press <strong>ESC</strong> to exit</span>
        </div>
      </div>
    </div>
  );
};
