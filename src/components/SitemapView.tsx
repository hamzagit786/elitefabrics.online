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
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                onClick={(e) => { e.preventDefault(); onNavigate('about'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • About Us
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Contact Us (WhatsApp)
              </a>
            </li>
            <li>
              <a 
                href="/articles" 
                onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Blog / Articles
              </a>
            </li>
            <li>
              <a 
                href="/fabrics" 
                onClick={(e) => { e.preventDefault(); onNavigate('fabrics'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Fabric Types Library
              </a>
            </li>
            <li>
              <a 
                href="/comparisons" 
                onClick={(e) => { e.preventDefault(); onNavigate('comparisons'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Fabric Comparisons
              </a>
            </li>
            <li>
              <a 
                href="/beginner" 
                onClick={(e) => { e.preventDefault(); onNavigate('beginner'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Beginner Guide
              </a>
            </li>
            <li>
              <a 
                href="/pakistani" 
                onClick={(e) => { e.preventDefault(); onNavigate('pakistani'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Pakistani Fabrics
              </a>
            </li>
            <li>
              <a 
                href="/industry" 
                onClick={(e) => { e.preventDefault(); onNavigate('industry'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Global Textile Industry
              </a>
            </li>
            <li>
              <a 
                href="/sustainable" 
                onClick={(e) => { e.preventDefault(); onNavigate('sustainable'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Sustainable Fabrics
              </a>
            </li>
            <li>
              <a 
                href="/timeline" 
                onClick={(e) => { e.preventDefault(); onNavigate('timeline'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Fabric History Timeline
              </a>
            </li>
            <li>
              <a 
                href="/care" 
                onClick={(e) => { e.preventDefault(); onNavigate('care'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Fabric Care &amp; Laundry
              </a>
            </li>
            <li>
              <a 
                href="/glossary" 
                onClick={(e) => { e.preventDefault(); onNavigate('glossary'); }} 
                className="hover:text-[#9E472A] transition-colors"
              >
                • Fabric Glossary (A–Z)
              </a>
            </li>
            <li>
              <a 
                href="/tools" 
                onClick={(e) => { e.preventDefault(); onNavigate('tools'); }} 
                className="hover:text-[#9E472A] transition-colors font-semibold text-[#9E472A]"
              >
                • Fabric Tools &amp; Calculators
              </a>
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
              <a 
                href="/tools" 
                onClick={(e) => { e.preventDefault(); onNavigate('tools'); }} 
                className="hover:text-[#9E472A] transition-colors font-medium block"
              >
                • All Calculators Landing (/tools)
              </a>
            </li>
            {FABRIC_TOOLS.map((tool) => (
              <li key={tool.id}>
                <a
                  href={`/tools/${tool.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('tools', tool.slug); }}
                  className="hover:text-[#9E472A] transition-colors text-left block"
                >
                  • {tool.title}
                </a>
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
              <a 
                href="/privacy-policy" 
                onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="/terms" 
                onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a 
                href="/disclaimer" 
                onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Website Disclaimer
              </a>
            </li>
            <li>
              <a 
                href="/cookie-policy" 
                onClick={(e) => { e.preventDefault(); onNavigate('cookie-policy'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Cookie Policy
              </a>
            </li>
            <li>
              <a 
                href="/editorial-policy" 
                onClick={(e) => { e.preventDefault(); onNavigate('editorial-policy'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Editorial Policy
              </a>
            </li>
            <li>
              <a 
                href="/corrections-policy" 
                onClick={(e) => { e.preventDefault(); onNavigate('corrections-policy'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Corrections Policy
              </a>
            </li>
            <li>
              <a 
                href="/advertising-policy" 
                onClick={(e) => { e.preventDefault(); onNavigate('advertising-policy'); }} 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • Advertising Policy
              </a>
            </li>
            <li>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9E472A] transition-colors block"
              >
                • sitemap.xml
              </a>
            </li>
            <li>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#9E472A] transition-colors block"
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
                <a
                  href={`/comparison/${comp.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('comparison', comp.slug); }}
                  className="hover:text-[#9E472A] transition-colors text-left block"
                >
                  • {comp.fabricA.name} vs. {comp.fabricB.name}
                </a>
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
              <a
                key={article.id}
                href={`/articles/${article.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate('article', article.slug); }}
                className="hover:text-[#9E472A] transition-colors text-left p-2 rounded hover:bg-[#FAF8F5] border border-transparent hover:border-[#E8E2D9] block"
              >
                <span className="font-medium text-[#1C1C1C] block line-clamp-1">• {article.title}</span>
                <span className="text-[10px] text-[#8C8478]">{article.category} · {article.readTime}</span>
              </a>
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
              <a
                key={fab.id}
                href={`/fabric/${fab.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate('fabric', fab.slug); }}
                className="hover:text-[#9E472A] transition-colors text-left truncate block"
              >
                • {fab.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
