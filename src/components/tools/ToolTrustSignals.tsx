import React from 'react';
import { ShieldCheck, Zap, Smartphone, GraduationCap } from 'lucide-react';

export const ToolTrustSignals: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 px-4 bg-white border border-[#E6E0D7] rounded-lg text-xs text-[#5C554B]">
      <div className="inline-flex items-center gap-1.5 font-medium">
        <Zap className="w-3.5 h-3.5 text-[#9E472A]" />
        <span>100% Free to Use</span>
      </div>
      <span className="text-[#D0C7BA] hidden sm:inline">•</span>
      <div className="inline-flex items-center gap-1.5 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-[#9E472A]" />
        <span>No Sign-Up Required</span>
      </div>
      <span className="text-[#D0C7BA] hidden sm:inline">•</span>
      <div className="inline-flex items-center gap-1.5 font-medium">
        <Smartphone className="w-3.5 h-3.5 text-[#9E472A]" />
        <span>Mobile Friendly</span>
      </div>
      <span className="text-[#D0C7BA] hidden sm:inline">•</span>
      <div className="inline-flex items-center gap-1.5 font-medium">
        <GraduationCap className="w-3.5 h-3.5 text-[#9E472A]" />
        <span>Educational Textile Resource</span>
      </div>
    </div>
  );
};
