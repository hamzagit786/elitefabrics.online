import React, { useState, useMemo } from 'react';
import { Search, BookA, Sparkles, Filter, ArrowRight } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/glossary';

interface GlossaryViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'Weaving & Knitting', label: 'Weaving & Knitting' },
    { id: 'Fiber & Yarn', label: 'Fiber & Yarn' },
    { id: 'Finishing & Processing', label: 'Finishing & Processing' },
    { id: 'Testing & Measurement', label: 'Testing & Measurement' },
    { id: 'Characteristics', label: 'Tactile Characteristics' },
  ];

  // Available letters
  const letters = useMemo(() => {
    const set = new Set(GLOSSARY_TERMS.map(t => t.term[0].toUpperCase()));
    return Array.from(set).sort();
  }, []);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const matchesSearch = 
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.context.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLetter = selectedLetter === 'all' || term.term[0].toUpperCase() === selectedLetter;
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;

      return matchesSearch && matchesLetter && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedLetter, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <BookA className="w-4 h-4" /> Comprehensive Technical Lexicon
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          The A-Z Fabric & Textile Glossary
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          Demystifying complex industry terminology: from GSM and Denier to Mercerization, Selvedge, Bias, Combing, and Sanforization. Clear, beginner-friendly explanations with professional manufacturing context.
        </p>
      </div>

      {/* Control Filters Bar */}
      <div className="bg-white border border-[#E6E0D7] rounded-xl p-5 space-y-4 shadow-2xs">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#8C8478] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search glossary terms (e.g. GSM, warp, bias, nap, combing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-hidden focus:border-[#9E472A] focus:bg-white transition-colors"
          />
        </div>

        {/* Alphabet Bar */}
        <div className="pt-2 border-t border-[#F0EAE0] flex flex-wrap items-center gap-1">
          <button
            onClick={() => setSelectedLetter('all')}
            className={`px-2.5 py-1 text-xs font-mono rounded ${
              selectedLetter === 'all'
                ? 'bg-[#1C1C1C] text-white font-bold'
                : 'text-[#665F54] hover:bg-[#F2EDE4]'
            }`}
          >
            All
          </button>
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 text-xs font-mono rounded flex items-center justify-center ${
                selectedLetter === letter
                  ? 'bg-[#9E472A] text-white font-bold'
                  : 'text-[#524B40] hover:bg-[#F2EDE4]'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-[#FAF8F5] text-[#5C554B] hover:bg-[#EFE9DF] border border-[#E6DEC2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Cards List */}
      <div className="space-y-4">
        <div className="text-xs text-[#7A7266]">
          Showing <strong className="text-[#1C1C1C]">{filteredTerms.length}</strong> terms
        </div>

        {filteredTerms.length === 0 ? (
          <div className="text-center py-12 bg-white border border-[#E6E0D7] rounded-xl p-8 space-y-2">
            <p className="font-serif-heading font-bold text-lg text-[#1C1C1C]">No glossary terms found</p>
            <p className="text-xs text-[#7A7266]">Try adjusting your search query or selecting "All Categories".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTerms.map((term, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D9] rounded-xl p-5 space-y-3 hover:border-[#9E472A]/60 transition-colors shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2 border-b border-[#F2EDE4] pb-2.5">
                  <div>
                    <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
                      {term.term}
                    </h3>
                    {term.phonetic && (
                      <span className="text-xs font-mono text-[#8C8478]">{term.phonetic}</span>
                    )}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#FAF8F5] text-[#70685D] border border-[#E0D8CB] rounded">
                    {term.category}
                  </span>
                </div>

                <p className="text-xs text-[#332E29] leading-relaxed font-medium">
                  {term.definition}
                </p>

                <div className="text-xs text-[#5E574D] bg-[#FAF8F5] p-3 rounded-lg border border-[#EBE3D6] leading-relaxed">
                  <strong className="text-[#1C1C1C]">Practical Context:</strong> {term.context}
                </div>

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs text-[#7A7266]">
                    <span className="text-[11px]">Related:</span>
                    {term.relatedTerms.map((rel, rIdx) => (
                      <button
                        key={rIdx}
                        onClick={() => {
                          setSearchQuery(rel);
                          setSelectedLetter('all');
                          setSelectedCategory('all');
                        }}
                        className="px-2 py-0.5 bg-white text-[#9E472A] hover:underline border border-[#DDD5C7] rounded text-[11px]"
                      >
                        {rel}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
