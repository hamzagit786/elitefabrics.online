import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Layers, 
  Sparkles, 
  Filter, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/timeline';

interface TimelineViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ onNavigate }) => {
  const [selectedEra, setSelectedEra] = useState<string>('all');

  const eras = [
    { id: 'all', label: 'All Eras (30,000 BCE – 2026+)' },
    { id: 'antiquity', label: 'Prehistory & Antiquity' },
    { id: 'classical', label: 'Classical & Silk Road' },
    { id: 'industrial', label: 'Industrial Revolution' },
    { id: 'polymer', label: 'The Synthetic Polymer Era' },
    { id: 'modern', label: 'Modern Circular Bio-Textiles' },
  ];

  const filteredEvents = TIMELINE_EVENTS.filter((evt) => {
    if (selectedEra === 'all') return true;
    const yearStr = evt.yearDisplay || evt.year || '';
    if (selectedEra === 'antiquity') return yearStr.includes('BCE') && !yearStr.includes('130 BCE');
    if (selectedEra === 'classical') return yearStr.includes('130 BCE') || yearStr.includes('CE') || evt.era?.includes('Middle Ages');
    if (selectedEra === 'industrial') return yearStr.includes('1764') || yearStr.includes('1804') || yearStr.includes('1856');
    if (selectedEra === 'polymer') return yearStr.includes('1935') || yearStr.includes('1941') || evt.era?.includes('20th Century');
    if (selectedEra === 'modern') return yearStr.includes('1990') || yearStr.includes('2026') || evt.era?.includes('Circular');
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Clock className="w-4 h-4" /> 30,000 BCE to 2026+
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          The Global Textile History Timeline
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          Human civilizational progress has continually been propelled by textile innovations: from prehistoric twisted bast flax to ancient Egyptian Pharaonic linen, Mohenjo-daro cotton mordants, the Silk Road, the Jacquard punch-card automation that inspired modern computing, and 2026 closed-loop bio-circularity.
        </p>
      </div>

      {/* Era Selector Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        {eras.map((era) => (
          <button
            key={era.id}
            onClick={() => setSelectedEra(era.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedEra === era.id
                ? 'bg-[#1C1C1C] text-white'
                : 'bg-white text-[#554E44] border border-[#DDD5C7] hover:bg-[#FAF8F5]'
            }`}
          >
            {era.label}
          </button>
        ))}
      </div>

      {/* Chronological Vertical Timeline */}
      <div className="relative border-l-2 border-[#D9D1C5] ml-4 sm:ml-36 space-y-12 py-4">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Marker Node */}
            <div className="absolute -left-2 sm:-left-2.5 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FAF8F5] border-3 border-[#9E472A] group-hover:bg-[#9E472A] transition-colors" />

            {/* Date Tag on Desktop to the left */}
            <div className="hidden sm:block absolute -left-40 top-1 text-right w-32">
              <span className="font-mono text-xs font-bold text-[#9E472A] block leading-tight">
                {evt.yearDisplay || evt.year}
              </span>
              <span className="text-[10px] text-[#8C8478] uppercase truncate block mt-0.5">
                {evt.era}
              </span>
            </div>

            {/* Event Content Card */}
            <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 hover:border-[#9E472A]/50 transition-colors shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EAE0] pb-3">
                <div className="sm:hidden font-mono text-xs font-bold text-[#9E472A]">
                  {evt.yearDisplay || evt.year} • {evt.era}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
                  {evt.title}
                </h3>
                <span className="text-xs font-mono text-[#7A7266] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#9E472A]" /> {evt.era}
                </span>
              </div>

              {evt.image && (
                <div className="aspect-16/9 sm:aspect-21/9 overflow-hidden rounded-lg bg-[#FAF8F5]">
                  <img
                    src={evt.image}
                    alt={evt.imageAlt || evt.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-[#4A443B] leading-relaxed">
                {evt.description}
              </p>

              <div className="p-4 bg-[#FAF8F5] border border-[#EAE3D5] rounded-lg text-xs text-[#595247] leading-relaxed">
                <strong className="text-[#1C1C1C] block mb-1">Historical & Technological Significance:</strong>
                {evt.significance}
              </div>

              {evt.historicalSource && (
                <div className="pt-2 text-[11px] text-[#8C8478] italic">
                  <strong>Historical Reference Archive:</strong> {evt.historicalSource}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
