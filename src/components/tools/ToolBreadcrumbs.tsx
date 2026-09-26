import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ToolBreadcrumbsProps {
  toolTitle?: string;
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ToolBreadcrumbs: React.FC<ToolBreadcrumbsProps> = ({ toolTitle, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumbs" className="text-xs text-[#70695F] mb-6">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#9E472A] transition-colors"
          >
            Home
          </button>
        </li>
        <li className="flex items-center text-[#B0A79B]">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        <li>
          <button
            onClick={() => onNavigate('tools')}
            className={`hover:text-[#9E472A] transition-colors ${!toolTitle ? 'font-semibold text-[#1C1C1C]' : ''}`}
            aria-current={!toolTitle ? 'page' : undefined}
          >
            Tools
          </button>
        </li>
        {toolTitle && (
          <>
            <li className="flex items-center text-[#B0A79B]">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="font-semibold text-[#1C1C1C] truncate max-w-[240px] sm:max-w-none" aria-current="page">
              {toolTitle}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};
