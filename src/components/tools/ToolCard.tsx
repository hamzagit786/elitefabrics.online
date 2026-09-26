import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FabricTool } from '../../data/tools';

interface ToolCardProps {
  tool: FabricTool;
  onNavigate: (view: string, idOrSlug?: string) => void;
  featured?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate }) => {
  return (
    <div
      onClick={() => onNavigate('tools', tool.slug)}
      className="group cursor-pointer bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-lg p-6 transition-all duration-150 flex flex-col justify-between h-full"
    >
      <div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#7A7266] font-medium mb-1.5">
          {tool.category}
        </div>

        <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors leading-snug">
          {tool.title}
        </h3>

        <p className="text-sm text-[#5C554B] mt-2.5 leading-relaxed">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F2ECE3]">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('tools', tool.slug);
          }}
          className="w-full py-2.5 px-4 bg-[#1C1C1C] group-hover:bg-[#9E472A] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9E472A]"
        >
          <span>Use Tool</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
