import React from 'react';
import { FABRICS } from '../data/fabrics';
import { ARTICLES } from '../data/articles';
import { FABRIC_COMPARISONS } from '../data/comparisons';
import { FABRIC_TOOLS } from '../data/tools';

interface SitemapViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const SitemapView: React.FC<SitemapViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-5 space-y-1">
        <h1 className="text-3xl font-serif-heading font-bold text-[#1C1C1C]">
          Sitemap
        </h1>
        <p className="text-sm text-[#5E574D]">
          Overview of sections and educational guides on Elite Fabrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        {/* Main Pages */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Website Pages
          </h2>
          <ul className="space-y-2 text-xs text-[#4A453E]">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-[#9E472A] transition-colors">
                • Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-[#9E472A] transition-colors">
                • About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#9E472A] transition-colors">
                • Contact Us (WhatsApp)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('blog')} className="hover:text-[#9E472A] transition-colors">
                • Blog / Articles
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('fabrics')} className="hover:text-[#9E472A] transition-colors">
                • Fabric Types Library
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('comparisons')} className="hover:text-[#9E472A] transition-colors">
                • Fabric Comparisons
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('beginner')} className="hover:text-[#9E472A] transition-colors">
                • Beginner Guide
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('pakistani')} className="hover:text-[#9E472A] transition-colors">
                • Pakistani Fabrics
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('industry')} className="hover:text-[#9E472A] transition-colors">
                • Global Textile Industry
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('sustainable')} className="hover:text-[#9E472A] transition-colors">
                • Sustainable Fabrics
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('timeline')} className="hover:text-[#9E472A] transition-colors">
                • Fabric History Timeline
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('care')} className="hover:text-[#9E472A] transition-colors">
                • Fabric Care &amp; Laundry
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('glossary')} className="hover:text-[#9E472A] transition-colors">
                • Fabric Glossary (A–Z)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('tools')} className="hover:text-[#9E472A] transition-colors font-semibold text-[#9E472A]">
                • Fabric Tools &amp; Calculators
              </button>
            </li>
          </ul>
        </div>

        {/* Fabric Tools & Calculators */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Fabric Tools &amp; Calculators
          </h2>
          <ul className="space-y-2 text-xs text-[#4A453E]">
            <li>
              <button onClick={() => onNavigate('tools')} className="hover:text-[#9E472A] transition-colors font-medium">
                • All Calculators Landing (/tools)
              </button>
            </li>
            {FABRIC_TOOLS.map((tool) => (
              <li key={tool.id}>
                <button
                  onClick={() => onNavigate('tools', tool.slug)}
                  className="hover:text-[#9E472A] transition-colors text-left"
                >
                  • {tool.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Policies */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Policies &amp; Legal
          </h2>
          <ul className="space-y-2 text-xs text-[#4A453E]">
            <li>
              <button onClick={() => onNavigate('privacy-policy')} className="hover:text-[#9E472A] transition-colors">
                • Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('terms')} className="hover:text-[#9E472A] transition-colors">
                • Terms &amp; Conditions
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('disclaimer')} className="hover:text-[#9E472A] transition-colors">
                • Website Disclaimer
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('cookie-policy')} className="hover:text-[#9E472A] transition-colors">
                • Cookie Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('editorial-policy')} className="hover:text-[#9E472A] transition-colors">
                • Editorial Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('corrections-policy')} className="hover:text-[#9E472A] transition-colors">
                • Corrections Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('advertising-policy')} className="hover:text-[#9E472A] transition-colors">
                • Advertising Policy
              </button>
            </li>
            <li>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9E472A] transition-colors"
              >
                • sitemap.xml
              </a>
            </li>
            <li>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9E472A] transition-colors"
              >
                • robots.txt
              </a>
            </li>
          </ul>
        </div>

        {/* Comparisons */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Fabric Comparisons ({FABRIC_COMPARISONS.length})
          </h2>
          <ul className="space-y-2 text-xs text-[#4A453E]">
            {FABRIC_COMPARISONS.map((comp) => (
              <li key={comp.id}>
                <button
                  onClick={() => onNavigate('comparison', comp.slug)}
                  className="hover:text-[#9E472A] transition-colors text-left"
                >
                  • {comp.fabricA.name} vs. {comp.fabricB.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Textile Articles & Guides */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3 md:col-span-2 lg:col-span-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Textile Articles &amp; Editorial Guides ({ARTICLES.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[#4A453E]">
            {ARTICLES.map((article) => (
              <button
                key={article.id}
                onClick={() => onNavigate('article', article.slug)}
                className="hover:text-[#9E472A] transition-colors text-left p-2 rounded hover:bg-[#FAF8F5] border border-transparent hover:border-[#E8E2D9]"
              >
                <span className="font-medium text-[#1C1C1C] block line-clamp-1">• {article.title}</span>
                <span className="text-[10px] text-[#8C8478]">{article.category} · {article.readTime}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Fabric Profiles */}
        <div className="bg-white border border-[#E6E0D7] rounded-lg p-5 space-y-3 md:col-span-2 lg:col-span-3">
          <h2 className="font-serif-heading font-bold text-base text-[#1C1C1C] pb-2 border-b border-[#F0EAE0]">
            Fabric Profiles ({FABRICS.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#4A453E]">
            {FABRICS.map((fab) => (
              <button
                key={fab.id}
                onClick={() => onNavigate('fabric', fab.slug)}
                className="hover:text-[#9E472A] transition-colors text-left truncate"
              >
                • {fab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
