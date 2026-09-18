import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Layers, BookOpen, Scale, BookA, Clock, ArrowRight } from 'lucide-react';
import { FABRICS } from '../data/fabrics';
import { ARTICLES } from '../data/articles';
import { FABRIC_COMPARISONS } from '../data/comparisons';
import { GLOSSARY_TERMS } from '../data/glossary';
import { TIMELINE_EVENTS } from '../data/timeline';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
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
  ).slice(0, 4) : [];

  const matchedArticles = q ? ARTICLES.filter(a => 
    a.title.toLowerCase().includes(q) || 
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.category.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const matchedComparisons = q ? FABRIC_COMPARISONS.filter(c => 
    c.title.toLowerCase().includes(q) || 
    c.fabricA.name.toLowerCase().includes(q) || 
    c.fabricB.name.toLowerCase().includes(q)
  ).slice(0, 3) : [];

  const matchedGlossary = q ? GLOSSARY_TERMS.filter(g => 
    g.term.toLowerCase().includes(q) || 
    g.definition.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const totalMatches = matchedFabrics.length + matchedArticles.length + matchedComparisons.length + matchedGlossary.length;

  const handleSelect = (view: string, idOrSlug?: string) => {
    onNavigate(view, idOrSlug);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E6E0D7] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#8C8478] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search fabrics, articles, comparisons, glossary (e.g. Lawn, GSM, Linen vs Cotton)..."
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

        {/* Search Results Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {!query ? (
            <div className="text-center py-8 text-[#7A7265] space-y-2">
              <p className="font-serif-heading text-lg font-bold text-[#1C1C1C]">Global Fabric & Textile Search Index</p>
              <p className="text-xs">Type a fabric name (e.g. "Lawn", "Silk"), technical property ("GSM", "Sanforization"), or compare ("Cotton vs Linen").</p>
              
              <div className="pt-4 flex flex-wrap justify-center gap-2">
                <button onClick={() => setQuery('Lawn')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs hover:text-[#9E472A]">Pakistani Lawn</button>
                <button onClick={() => setQuery('GSM')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs hover:text-[#9E472A]">GSM Weight</button>
                <button onClick={() => setQuery('Silk')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs hover:text-[#9E472A]">Silk</button>
                <button onClick={() => setQuery('Denim')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs hover:text-[#9E472A]">Denim</button>
                <button onClick={() => setQuery('Sustainable')} className="px-2.5 py-1 bg-white border border-[#DDD5C7] rounded text-xs hover:text-[#9E472A]">Lyocell & Circular</button>
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="text-center py-8 text-[#7A7265]">
              <p className="font-serif-heading text-base font-bold text-[#1C1C1C]">No index results found for "{query}"</p>
              <p className="text-xs mt-1">Try another textile term or browse the Fabric Library or Glossary.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Fabrics */}
              {matchedFabrics.length > 0 && (
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

              {/* Articles */}
              {matchedArticles.length > 0 && (
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E472A] font-bold flex items-center gap-1 mb-2">
                    <BookOpen className="w-3.5 h-3.5" /> Editorial Articles ({matchedArticles.length})
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

              {/* Comparisons */}
              {matchedComparisons.length > 0 && (
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
              {matchedGlossary.length > 0 && (
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
