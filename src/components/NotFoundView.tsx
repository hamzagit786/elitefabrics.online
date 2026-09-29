import React from 'react';
import { Home, Layers, Calculator, BookOpen, AlertCircle } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center space-y-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAF3F0] text-[#9E472A] border border-[#EEDBCE] mb-2">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold">
          Error 404 • Resource Not Found
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Page or Guide Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#5E574D] max-w-lg mx-auto leading-relaxed">
          The fabric guide, calculation tool, or article you are looking for may have been moved, renamed, or is currently unavailable.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('home')}
          className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </button>

        <button
          onClick={() => onNavigate('fabrics')}
          className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#DDD5C7] rounded-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
        >
          <Layers className="w-4 h-4" />
          <span>Fabric Library</span>
        </button>

        <button
          onClick={() => onNavigate('blog')}
          className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#DDD5C7] rounded-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Articles &amp; Guides</span>
        </button>

        <button
          onClick={() => onNavigate('tools')}
          className="px-5 py-2.5 bg-white hover:bg-[#FAF8F5] text-[#1C1C1C] border border-[#DDD5C7] rounded-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          <span>Fabric Tools</span>
        </button>
      </div>
    </div>
  );
};
