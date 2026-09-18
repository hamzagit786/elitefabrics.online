import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowRight, Layers, Sparkles, Scale } from 'lucide-react';
import { FabricType } from '../types';
import { FABRICS } from '../data/fabrics';

interface FabricLibraryViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
  onSelectForComparison?: (fabricSlug: string) => void;
}

export const FabricLibraryView: React.FC<FabricLibraryViewProps> = ({ 
  onNavigate,
  onSelectForComparison 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWeight, setSelectedWeight] = useState<string>('all');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'weight-asc' | 'weight-desc'>('name');

  const categories = [
    { id: 'all', label: 'All Fabrics' },
    { id: 'natural', label: 'Natural Fibers' },
    { id: 'synthetic', label: 'Synthetics' },
    { id: 'regenerated', label: 'Regenerated' },
    { id: 'weave', label: 'Specialty Weaves' },
    { id: 'traditional', label: 'Pakistani Heritage' },
  ];

  const weights = [
    { id: 'all', label: 'All Weights' },
    { id: 'light', label: 'Light (<120 GSM)' },
    { id: 'medium', label: 'Medium (120-220 GSM)' },
    { id: 'heavy', label: 'Heavy (>220 GSM)' },
  ];

  const seasons = [
    { id: 'all', label: 'All Seasons' },
    { id: 'Summer', label: 'Summer' },
    { id: 'Winter', label: 'Winter' },
    { id: 'Spring', label: 'Spring' },
    { id: 'Autumn', label: 'Autumn' },
  ];

  const filteredFabrics = useMemo(() => {
    return FABRICS.filter((fabric) => {
      // Search filter
      const matchesSearch = 
        fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.fiberComposition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (fabric.description || fabric.texture).toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.commonUses.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === 'all' || fabric.category === selectedCategory;

      // Weight filter
      let matchesWeight = true;
      const gsmMatch = fabric.weightGsm.match(/(\d+)/);
      const approxGsm = gsmMatch ? parseInt(gsmMatch[1], 10) : 150;
      if (selectedWeight === 'light') matchesWeight = approxGsm <= 120;
      else if (selectedWeight === 'medium') matchesWeight = approxGsm > 120 && approxGsm <= 220;
      else if (selectedWeight === 'heavy') matchesWeight = approxGsm > 220;

      // Season filter
      const matchesSeason = selectedSeason === 'all' || fabric.bestSeasons.includes(selectedSeason as any);

      return matchesSearch && matchesCategory && matchesWeight && matchesSeason;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      const gsmA = parseInt(a.weightGsm.match(/(\d+)/)?.[1] || '0', 10);
      const gsmB = parseInt(b.weightGsm.match(/(\d+)/)?.[1] || '0', 10);
      if (sortBy === 'weight-asc') return gsmA - gsmB;
      if (sortBy === 'weight-desc') return gsmB - gsmA;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedWeight, selectedSeason, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold">
          Comprehensive Textile Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Fabric Types Library
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          An exhaustive technical reference catalog of natural, synthetic, regenerated, and heritage weaves. Examine fiber metrics, GSM weights, drape properties, and scientific care guides.
        </p>
      </div>

      {/* Control Filters Bar */}
      <div className="bg-white border border-[#E6E0D7] rounded-xl p-5 space-y-4 shadow-2xs">
        {/* Search Input & Sort */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C8478] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by fabric name, fiber type, or end use (e.g. linen, denim, lawn)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF8F5] border border-[#DDD5C7] rounded-md focus:outline-hidden focus:border-[#9E472A] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8478] hover:text-[#1C1C1C]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#7A7266] whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-[#FAF8F5] border border-[#DDD5C7] rounded-md px-3 py-2.5 text-[#1C1C1C] focus:outline-hidden focus:border-[#9E472A]"
            >
              <option value="name">Alphabetical (A-Z)</option>
              <option value="weight-asc">Weight: Low to High GSM</option>
              <option value="weight-desc">Weight: High to Low GSM</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-2 border-t border-[#F0EAE0] flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1C1C] text-white'
                  : 'bg-[#FAF8F5] text-[#5C554B] hover:bg-[#EFE9DF] border border-[#E6DEC2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Filters: Weight & Season */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6B6355]">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1C1C1C]">GSM Weight:</span>
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="bg-[#FAF8F5] border border-[#DDD5C7] rounded px-2.5 py-1 text-xs text-[#1C1C1C]"
              >
                {weights.map(w => (
                  <option key={w.id} value={w.id}>{w.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1C1C1C]">Season:</span>
              <select
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="bg-[#FAF8F5] border border-[#DDD5C7] rounded px-2.5 py-1 text-xs text-[#1C1C1C]"
              >
                {seasons.map(s => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            Showing <strong className="text-[#1C1C1C]">{filteredFabrics.length}</strong> of {FABRICS.length} fabrics
          </div>
        </div>
      </div>

      {/* Fabric Cards Grid */}
      {filteredFabrics.length === 0 ? (
        <div className="text-center py-16 bg-white border border-[#E6E0D7] rounded-xl p-8 space-y-3">
          <p className="text-lg font-serif-heading font-bold text-[#1C1C1C]">No fabrics found matching your filters</p>
          <p className="text-xs text-[#7A7266]">Try clearing your search query or selecting "All Fabrics".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedWeight('all');
              setSelectedSeason('all');
            }}
            className="mt-2 px-4 py-2 text-xs font-semibold bg-[#1C1C1C] text-white rounded"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="group bg-white border border-[#E8E2D9] rounded-xl overflow-hidden hover:border-[#9E472A] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div 
                  onClick={() => onNavigate('fabric', fabric.slug)}
                  className="aspect-16/10 overflow-hidden bg-[#F2EDE4] relative cursor-pointer"
                >
                  <img
                    src={fabric.image}
                    alt={fabric.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-xs text-white rounded">
                    {fabric.category}
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 text-[10px] font-mono bg-white/90 text-[#1C1C1C] rounded border border-[#E0D8CC]">
                    {fabric.weightGsm.split('(')[0]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 
                      onClick={() => onNavigate('fabric', fabric.slug)}
                      className="text-xl font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors cursor-pointer"
                    >
                      {fabric.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#70685D] mt-1 line-clamp-1 font-mono">
                    {fabric.fiberComposition}
                  </p>

                  <p className="text-xs text-[#524B40] mt-3 line-clamp-2 leading-relaxed">
                    {fabric.description || fabric.texture}
                  </p>

                  {/* Visual Spec Meters */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] bg-[#FAF8F5] p-2.5 rounded border border-[#EAE3D5]">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-[#8C8478]">Drape</span>
                      <span className="font-semibold text-[#1C1C1C]">{fabric.drape}</span>
                    </div>
                    <div className="border-x border-[#E2DBD0]">
                      <span className="block text-[9px] uppercase tracking-wider text-[#8C8478]">Breathability</span>
                      <span className="font-semibold text-[#1C1C1C]">{fabric.breathability}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-[#8C8478]">Durability</span>
                      <span className="font-semibold text-[#1C1C1C]">{fabric.durability}</span>
                    </div>
                  </div>

                  {/* Common Uses Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {fabric.commonUses.slice(0, 3).map((use, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] bg-[#F2EDE4] text-[#635C52] rounded">
                        {use}
                      </span>
                    ))}
                    {fabric.commonUses.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-[#8A8277]">
                        +{fabric.commonUses.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 bg-[#FAF8F5] border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#787165]">
                  Seasons: {fabric.bestSeasons.join(', ')}
                </span>
                <button
                  onClick={() => onNavigate('fabric', fabric.slug)}
                  className="font-semibold text-[#9E472A] hover:text-[#7A3620] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Full Profile <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
