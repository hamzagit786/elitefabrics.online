import React, { useState } from 'react';
import { 
  Scale, 
  ArrowLeft, 
  Check, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Award,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { FabricComparison } from '../types';
import { FABRIC_COMPARISONS } from '../data/comparisons';
import { FABRICS } from '../data/fabrics';

interface ComparisonViewProps {
  initialSlug?: string;
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ 
  initialSlug, 
  onNavigate 
}) => {
  const currentComparison = FABRIC_COMPARISONS.find(c => c.slug === initialSlug) || FABRIC_COMPARISONS[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6B655C]">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#1C1C1C] font-medium transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate('comparisons')}
          className="hover:text-[#1C1C1C] font-medium transition-colors"
        >
          Comparisons
        </button>
        <span>/</span>
        <span className="text-[#1C1C1C] font-medium truncate max-w-[200px] sm:max-w-xs">
          {currentComparison.fabricA.name} vs. {currentComparison.fabricB.name}
        </span>
      </nav>

      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <Scale className="w-4 h-4" /> Technical Head-to-Head Analyses
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          Fabric Comparisons
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          Rigorous, fact-based evaluations comparing tensile strength, moisture absorption, wrinkle recovery, and environmental impact. We never crown artificial winners—we help you choose the right textile for your specific garment silhouette.
        </p>
      </div>

      {/* Comparison Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E6E0D7]">
        {FABRIC_COMPARISONS.map((comp) => {
          const isActive = comp.id === currentComparison.id;
          return (
            <button
              key={comp.id}
              onClick={() => onNavigate('comparison', comp.slug)}
              className={`px-4 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#1C1C1C] text-white font-semibold'
                  : 'bg-white text-[#4A443B] hover:bg-[#FAF8F5] border border-[#DDD5C7]'
              }`}
            >
              {comp.fabricA.name} vs. {comp.fabricB.name}
            </button>
          );
        })}
      </div>

      {/* Active Comparison Article */}
      <div className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-10 shadow-xs">
        {/* Header Title & Overview */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C] leading-snug">
            {currentComparison.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4F493F] leading-relaxed">
            {currentComparison.overview}
          </p>
        </div>

        {/* Head-to-Head Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fabric A */}
          <div className="bg-[#FAF8F5] border border-[#E6DEC2] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DEC2]">
              <h3 className="text-2xl font-serif-heading font-bold text-[#9E472A]">
                {currentComparison.fabricA.name}
              </h3>
              <button
                onClick={() => onNavigate('fabric', currentComparison.fabricA.slug)}
                className="text-xs font-semibold text-[#9E472A] hover:underline inline-flex items-center gap-1"
              >
                View Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <p className="text-xs text-[#5C5549] leading-relaxed">
              {currentComparison.fabricA.summary}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1C] block mb-2">
                Ideal Primary Applications:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(currentComparison.idealUseCasesA || []).map((use, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-white text-[#4A453E] border border-[#DDD5C7] rounded-md"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fabric B */}
          <div className="bg-[#FAF8F5] border border-[#E6DEC2] rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6DEC2]">
              <h3 className="text-2xl font-serif-heading font-bold text-[#3B4D3C]">
                {currentComparison.fabricB.name}
              </h3>
              <button
                onClick={() => onNavigate('fabric', currentComparison.fabricB.slug)}
                className="text-xs font-semibold text-[#3B4D3C] hover:underline inline-flex items-center gap-1"
              >
                View Profile <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <p className="text-xs text-[#5C5549] leading-relaxed">
              {currentComparison.fabricB.summary}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C1C1C] block mb-2">
                Ideal Primary Applications:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(currentComparison.idealUseCasesB || []).map((use, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs bg-white text-[#4A453E] border border-[#DDD5C7] rounded-md"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Technical Criteria Breakdown */}
        <section className="space-y-6">
          <h3 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] pb-2 border-b border-[#E6E0D7]">
            Detailed Performance Metrics Breakdown
          </h3>

          <div className="space-y-6">
            {currentComparison.criteria.map((crit, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#EAE4D8] rounded-xl p-6 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="font-serif-heading font-bold text-lg text-[#1C1C1C]">
                    {crit.name}
                  </h4>
                  <span className="text-xs font-mono text-[#8C8478] uppercase">
                    Specification Criterion #{idx + 1}
                  </span>
                </div>

                {/* Two Column Metric Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-lg border border-[#E2DBD0]">
                    <span className="font-bold text-[#9E472A] block mb-1">
                      {currentComparison.fabricA.name} Spec
                    </span>
                    <p className="text-[#3A352F]">{crit.fabricAValue}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-[#E2DBD0]">
                    <span className="font-bold text-[#3B4D3C] block mb-1">
                      {currentComparison.fabricB.name} Spec
                    </span>
                    <p className="text-[#3A352F]">{crit.fabricBValue}</p>
                  </div>
                </div>

                {/* Analytical Commentary */}
                <div className="pt-2 text-xs text-[#524B41] leading-relaxed border-t border-[#EAE3D6]">
                  <strong>Editorial Technical Commentary:</strong> {crit.analysis}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Decision Verdict */}
        <section className="bg-[#1C1C1C] text-[#EFEBE4] rounded-xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B8936D]">
            <Award className="w-5 h-5" />
            <h3 className="font-serif-heading font-bold text-xl text-white">
              Objective Decision Guidance
            </h3>
          </div>
          <p className="text-sm text-[#D1CBC0] leading-relaxed">
            {currentComparison.verdictGuidance || currentComparison.verdict}
          </p>
        </section>
      </div>
    </div>
  );
};
