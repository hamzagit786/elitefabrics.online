import React from 'react';
import { BookOpen, Layers, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../../data/articles';
import { FABRICS } from '../../data/fabrics';

interface ToolRelatedResourcesProps {
  articleSlugs: string[];
  fabricSlugs: string[];
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ToolRelatedResources: React.FC<ToolRelatedResourcesProps> = ({
  articleSlugs,
  fabricSlugs,
  onNavigate
}) => {
  const relatedArticles = ARTICLES.filter(a => articleSlugs.includes(a.slug));
  const relatedFabrics = FABRICS.filter(f => fabricSlugs.includes(f.slug));

  return (
    <div className="space-y-8">
      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6E0D7]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#9E472A]" />
              <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C]">
                Recommended Reading &amp; Deep Dives
              </h3>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs text-[#9E472A] hover:underline font-semibold flex items-center gap-1"
            >
              All Articles <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('article', article.slug)}
                className="group cursor-pointer bg-white border border-[#E8E2D9] hover:border-[#9E472A] rounded-lg p-4 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8175]">
                    {article.category} • {article.readTime}
                  </span>
                  <h4 className="text-sm font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors line-clamp-2 mt-1 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#5E574D] mt-1.5 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#F2ECE3] flex items-center justify-between text-xs text-[#9E472A] font-semibold">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Fabric Profiles */}
      {relatedFabrics.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6E0D7]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9E472A]" />
              <h3 className="text-lg font-serif-heading font-bold text-[#1C1C1C]">
                Explore Matching Fabrics
              </h3>
            </div>
            <button
              onClick={() => onNavigate('fabrics')}
              className="text-xs text-[#9E472A] hover:underline font-semibold flex items-center gap-1"
            >
              Fabric Library <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {relatedFabrics.map((fabric) => (
              <div
                key={fabric.id}
                onClick={() => onNavigate('fabric', fabric.slug)}
                className="group cursor-pointer bg-white border border-[#E8E2D9] hover:border-[#9E472A] rounded-lg p-3 text-center transition-all duration-150"
              >
                <div className="text-xs font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                  {fabric.name}
                </div>
                <div className="text-[11px] text-[#70695F] mt-0.5 capitalize">
                  {fabric.category}
                </div>
                <div className="text-[10px] text-[#9E472A] mt-2 font-medium">
                  {fabric.weightGsm.split('(')[0].trim() || 'Guide'} &rarr;
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
