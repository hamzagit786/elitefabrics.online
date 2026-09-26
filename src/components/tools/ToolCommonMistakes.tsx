import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface MistakeItem {
  mistake: string;
  solution: string;
}

interface ToolCommonMistakesProps {
  mistakes: MistakeItem[];
  toolName?: string;
}

export const ToolCommonMistakes: React.FC<ToolCommonMistakesProps> = ({ mistakes, toolName = 'this calculation' }) => {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <section className="bg-white border border-[#E6E0D7] rounded-lg p-5 sm:p-6 space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-[#F0EAE1]">
        <AlertCircle className="w-5 h-5 text-[#9E472A] shrink-0" />
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Common Mistakes to Avoid
        </h2>
      </div>
      <p className="text-xs sm:text-sm text-[#5C554B]">
        Avoid these frequent measuring and estimation errors when using {toolName}:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {mistakes.map((item, idx) => (
          <div key={idx} className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-md space-y-1.5 text-xs sm:text-sm">
            <span className="font-bold text-[#1C1C1C] block text-xs uppercase tracking-wide">
              {idx + 1}. {item.mistake}
            </span>
            <p className="text-[#5C554B] leading-relaxed">
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
