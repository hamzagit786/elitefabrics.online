import React from 'react';
import { 
  Compass, 
  ExternalLink, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { TEXTILE_RESOURCES } from '../data/resources';

interface ResourcesDirectoryViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ResourcesDirectoryView: React.FC<ResourcesDirectoryViewProps> = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Compass className="w-4 h-4" /> Non-Commercial Educational Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Top Fabric Websites & Textile Research Resources
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          An objective, curated directory of the world's most reputable textile science institutions, historical museum archives, and standardized testing authorities. We present factual institutional descriptions with zero commercial ranking bias or affiliate marketing.
        </p>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEXTILE_RESOURCES.map((res, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E8E2D9] rounded-xl p-6 sm:p-7 space-y-4 hover:border-[#9E472A]/60 transition-colors shadow-2xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3 border-b border-[#F2EDE4] pb-3">
                <div>
                  <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
                    {res.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#9E472A] block mt-0.5">
                    {res.reputableStatus}
                  </span>
                </div>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#7A7266] hover:text-[#9E472A] hover:bg-[#FAF8F5] rounded border border-[#E6E0D7] transition-colors"
                  title={`Visit ${res.name} official website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8478] block">
                    Specialization
                  </span>
                  <p className="font-semibold text-[#1C1C1C] mt-0.5">{res.specialization}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8478] block">
                    Educational Scope & Data Provided
                  </span>
                  <p className="text-[#4A453E] leading-relaxed mt-0.5">{res.provides}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8478] block">
                    Target Audience
                  </span>
                  <p className="text-[#615B51] mt-0.5">{res.targetAudience}</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs">
              <span className="text-[#8C8478] text-[11px] truncate max-w-xs font-mono">{res.url}</span>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9E472A] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Official Site <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
