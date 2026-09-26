import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { ToolBreadcrumbs } from './ToolBreadcrumbs';
import { ToolCard } from './ToolCard';
import { ToolTrustSignals } from './ToolTrustSignals';
import { FABRIC_TOOLS, TOOL_CATEGORIES } from '../../data/tools';

interface ToolsLandingViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ToolsLandingView: React.FC<ToolsLandingViewProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter tools
  const filteredTools = useMemo(() => {
    return FABRIC_TOOLS.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'All' || tool.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        tool.title.toLowerCase().includes(q) ||
        tool.shortDescription.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.features.some(f => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
      <ToolBreadcrumbs onNavigate={onNavigate} />

      {/* Header & Clean Search Section */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#191919] tracking-tight">
            Fabric Calculators &amp; Converters
          </h1>
          <p className="text-base text-[#524B42] leading-relaxed">
            Free textile calculators for sewing, quilting, and garment manufacturing. Convert measurements, calculate fabric weight, and determine yardage accurately.
          </p>
        </div>

        {/* Search Bar - Immediately Visible */}
        <div className="max-w-xl">
          <label htmlFor="tool-search" className="sr-only">Search calculators</label>
          <div className="relative">
            <Search className="w-4 h-4 text-[#7A7266] absolute left-3.5 top-3.5" />
            <input
              id="tool-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (e.g., GSM, yardage, shrinkage, converter)..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#D9D1C5] rounded-md text-sm text-[#1C1C1C] placeholder-[#8A8275] focus:outline-none focus:ring-2 focus:ring-[#9E472A] focus:border-transparent transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-[#7A7266] hover:text-[#1C1C1C] p-0.5"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters: Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0EBE1] border border-[#DDD5C7] rounded-md max-w-fit">
          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-[#1C1C1C] shadow-2xs'
                  : 'text-[#615A4F] hover:text-[#1C1C1C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <ToolTrustSignals />

      {/* Most Popular Tools (Top 2) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6E0D7]">
            <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
              Most Popular Tools
            </h2>
            <span className="text-xs text-[#7A7266]">Frequently used utilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FABRIC_TOOLS.slice(0, 2).map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Tools Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            {selectedCategory === 'All' ? 'All Calculators' : `${selectedCategory} Tools`}
          </h2>
          <span className="text-xs text-[#7A7266]">
            {filteredTools.length} tool{filteredTools.length === 1 ? '' : 's'} available
          </span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-white border border-[#E6E0D7] rounded-lg space-y-2">
            <p className="text-sm font-medium text-[#1C1C1C]">
              No calculators matched "{searchQuery}"
            </p>
            <p className="text-xs text-[#6B655B]">
              Try searching for GSM, yardage, shrinkage, or inches.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-3 py-1.5 bg-[#1C1C1C] text-white text-xs font-semibold rounded-md hover:bg-[#333333]"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
