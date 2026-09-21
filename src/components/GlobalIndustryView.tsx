import React, { useState } from 'react';
import { 
  Globe, 
  Building2, 
  MapPin, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  History, 
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { GLOBAL_INDUSTRIES } from '../data/industries';
import { GlobalIndustryProfile } from '../types';

interface GlobalIndustryViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
  initialCountrySlug?: string;
}

export const GlobalIndustryView: React.FC<GlobalIndustryViewProps> = ({ 
  onNavigate,
  initialCountrySlug 
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialCountrySlug || GLOBAL_INDUSTRIES[0].slug
  );

  const activeIndustry: GlobalIndustryProfile = 
    GLOBAL_INDUSTRIES.find(i => i.slug === selectedSlug) || GLOBAL_INDUSTRIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Globe className="w-4 h-4" /> Global Textile Geography & Manufacturing
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          World Textile Industries
        </h1>
        <p className="text-sm sm:text-base text-[#5E574D] leading-relaxed">
          An objective educational compendium of major international textile manufacturing nations. Explore industrial hubs, primary raw materials, trade flows, historical roots, modern technological transitions, and ecological challenges.
        </p>
      </div>

      {/* Country Selection Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#EAE6DF] pb-4">
        {GLOBAL_INDUSTRIES.map((ind) => {
          const isActive = ind.slug === selectedSlug;
          return (
            <button
              key={ind.slug}
              onClick={() => setSelectedSlug(ind.slug)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 whitespace-nowrap ${
                isActive
                  ? 'bg-[#1C1C1C] text-white shadow-sm'
                  : 'bg-[#F4F1EA] text-[#5E574D] hover:bg-[#EAE6DF] hover:text-[#1C1C1C]'
              }`}
            >
              {ind.country}
            </button>
          );
        })}
      </div>

      {/* Selected Country Profile Showcase */}
      <div className="space-y-10">
        {/* Country Banner */}
        <div className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#EAE6DF] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9E472A]">
                <MapPin className="w-3.5 h-3.5" /> {activeIndustry.region}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C] mt-1">
                {activeIndustry.country} Textile Industry
              </h2>
              <p className="text-sm font-medium text-[#73331E] mt-1">
                {activeIndustry.headline}
              </p>
            </div>
            <div className="text-xs text-[#5E574D] bg-white border border-[#EAE6DF] rounded-lg px-3.5 py-2 max-w-xs">
              <span className="font-semibold text-[#1C1C1C]">Global Role:</span> {activeIndustry.globalSignificance}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#3D3A34] leading-relaxed">
            {activeIndustry.overview}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {activeIndustry.keyStats.map((stat, idx) => (
              <div key={idx} className="bg-white border border-[#EAE6DF] rounded-lg p-3.5 space-y-1">
                <div className="text-[11px] uppercase font-mono text-[#5E574D] tracking-wider">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1C1C1C]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Deep Dive: Sectors & Hubs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Major Sectors */}
          <div className="bg-white border border-[#EAE6DF] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#9E472A]" /> Major Industrial Sectors
            </h3>
            <ul className="space-y-2.5">
              {activeIndustry.majorSectors.map((sec, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D3A34]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E472A] mt-1.5 shrink-0" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#EAE6DF] space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#5E574D] font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Common Materials & Fibers
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeIndustry.commonMaterials.map((mat, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-[#F4F1EA] text-[#3D3A34] px-2.5 py-1 rounded-md border border-[#EAE6DF]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Manufacturing Hubs */}
          <div className="bg-white border border-[#EAE6DF] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9E472A]" /> Key Manufacturing Cities & Hubs
            </h3>
            <div className="space-y-3">
              {activeIndustry.manufacturingHubs.map((hub, i) => (
                <div key={i} className="p-3 bg-[#FAF8F5] border border-[#EAE6DF] rounded-lg space-y-1">
                  <div className="text-xs font-bold text-[#1C1C1C]">
                    {hub.cityOrRegion}
                  </div>
                  <div className="text-xs text-[#5E574D] leading-relaxed">
                    {hub.specialization}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Historical, Modern, Sustainability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#EAE6DF] rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <History className="w-4 h-4 text-[#9E472A]" /> Historical Roots
            </h4>
            <p className="text-xs text-[#5E574D] leading-relaxed">
              {activeIndustry.historicalRoots}
            </p>
          </div>

          <div className="bg-white border border-[#EAE6DF] rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#9E472A]" /> Modern Developments
            </h4>
            <p className="text-xs text-[#5E574D] leading-relaxed">
              {activeIndustry.modernDevelopments}
            </p>
          </div>

          <div className="bg-white border border-[#EAE6DF] rounded-xl p-5 space-y-3">
            <h4 className="text-sm font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#9E472A]" /> Sustainability Challenges
            </h4>
            <ul className="space-y-1.5">
              {activeIndustry.sustainabilityChallenges.map((chal, i) => (
                <li key={i} className="text-xs text-[#5E574D] flex items-start gap-1.5 leading-relaxed">
                  <span className="text-[#9E472A] font-bold">•</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Internal Cross-Linking Section */}
        <div className="bg-[#F4F1EA] border border-[#EAE6DF] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-serif-heading font-bold text-[#1C1C1C]">
              Explore Related Fabric Entries & Textile History
            </h4>
            <p className="text-xs text-[#5E574D]">
              Deepen your understanding of traditional manufacturing, fiber science, and historical timelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigate('pakistani')}
              className="px-3.5 py-1.5 text-xs font-medium bg-white text-[#1C1C1C] border border-[#EAE6DF] rounded-lg hover:border-[#9E472A] transition-colors"
            >
              Pakistani Fabrics Section
            </button>
            <button
              onClick={() => onNavigate('timeline')}
              className="px-3.5 py-1.5 text-xs font-medium bg-white text-[#1C1C1C] border border-[#EAE6DF] rounded-lg hover:border-[#9E472A] transition-colors"
            >
              Textile History Timeline
            </button>
            <button
              onClick={() => onNavigate('fabrics')}
              className="px-3.5 py-1.5 text-xs font-medium bg-[#1C1C1C] text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Fabric Library
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
