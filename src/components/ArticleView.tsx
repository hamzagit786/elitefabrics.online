import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Clock, 
  Calendar, 
  BookOpen, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  ShieldCheck,
  Tag,
  ArrowRight,
  Calculator,
  Layers,
  Lightbulb,
  CheckCircle2,
  Copy,
  Check,
  Image as ImageIcon
} from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { FABRICS } from '../data/fabrics';
import { FABRIC_COMPARISONS } from '../data/comparisons';

interface ArticleViewProps {
  article: Article;
  onNavigate: (view: string, idOrSlug?: string) => void;
  onSaveBookmark: (item: { id: string; title: string; type: 'fabric' | 'article'; slug: string }) => void;
  isSaved: boolean;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onNavigate,
  onSaveBookmark,
  isSaved,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedPin, setCopiedPin] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://elitefabrics.online/articles/${article.slug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href) return;
    // Let on-page jump anchors (e.g. #section-id) work natively
    if (href.startsWith('#')) return;
    // Internal links
    if (href.startsWith('/') || href.startsWith('https://elitefabrics.online/')) {
      e.preventDefault();
      const cleanPath = href.replace(/^https?:\/\/elitefabrics\.online/, '').replace(/^\//, '');
      const parts = cleanPath.split('/');
      const view = parts[0];
      const slug = parts[1] || '';
      onNavigate(view, slug);
    }
  };

  const handleCopyPin = () => {
    if (!navigator.clipboard || !article.pinterest) return;
    const pinText = `${article.pinterest.title}\n\n${article.pinterest.description}\n\nLearn more: ${window.location.href}`;
    navigator.clipboard.writeText(pinText);
    setCopiedPin(true);
    setTimeout(() => setCopiedPin(false), 2000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Find 3 related articles
  const relatedArticles = ARTICLES.filter(
    a => a.id !== article.id && (article.relatedSlugs?.includes(a.slug) || a.category === article.category)
  ).slice(0, 3);

  // Find 2 related fabrics
  let matchedFabrics = FABRICS.filter(f => 
    article.relatedFabrics?.includes(f.slug) ||
    article.tags?.some(t => t.toLowerCase() === f.name.toLowerCase() || t.toLowerCase() === f.slug) ||
    article.title.toLowerCase().includes(f.name.toLowerCase())
  ).slice(0, 2);

  if (matchedFabrics.length < 2) {
    const fallbacks = FABRICS.filter(f => !matchedFabrics.some(m => m.id === f.id));
    matchedFabrics = [...matchedFabrics, ...fallbacks.slice(0, 2 - matchedFabrics.length)];
  }

  // Derive key takeaways if not provided
  const takeaways = article.keyTakeaways && article.keyTakeaways.length > 0 
    ? article.keyTakeaways 
    : [
        `Understand the core textile science behind ${article.title.toLowerCase().replace(/explained.*|guide.*/i, '').trim()}.`,
        'Apply standard measurement formulas and physical textile metrics to choose the right materials.',
        'Follow practical laundering, pre-washing, and cutting tips to prevent avoidable project mistakes.'
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Top Breadcrumb & Utilities */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[#6B655C]">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className="hover:text-[#1C1C1C] font-medium transition-colors"
          >
            Home
          </a>
          <span>/</span>
          <a
            href="/articles"
            onClick={(e) => { e.preventDefault(); onNavigate('articles'); }}
            className="hover:text-[#1C1C1C] font-medium transition-colors"
          >
            Guides &amp; Articles
          </a>
          <span>/</span>
          <span className="text-[#1C1C1C] font-medium truncate max-w-[180px] sm:max-w-xs">
            {article.title}
          </span>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSaveBookmark({
              id: article.id,
              title: article.title,
              type: 'article',
              slug: article.slug
            })}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
              isSaved 
                ? 'bg-[#9E472A] text-white border-[#9E472A]' 
                : 'bg-white text-[#4A453E] border-[#D9D1C5] hover:bg-[#FAF8F5]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            {isSaved ? 'Saved in Reading List' : 'Save Article'}
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D9D1C5] bg-white text-[#4A453E] hover:bg-[#FAF8F5] text-xs font-medium transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {copied ? 'Link Copied!' : 'Share Article'}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#F2EDE4] text-[#70685D] rounded">
            {article.category}
          </span>
          <span className="text-xs text-[#8C8478] font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-base sm:text-xl text-[#524B41] font-light leading-relaxed">
            {article.subtitle}
          </p>
        )}

        {/* Author Bio & Date Bar */}
        <div className="pt-4 border-t border-[#EBE4D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#6B6355]">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              loading="lazy"
              decoding="async"
              width="40"
              height="40"
              className="w-10 h-10 rounded-full object-cover border border-[#D5CDBC]"
            />
            <div>
              <p className="font-semibold text-sm text-[#1C1C1C]">{article.author.name}</p>
              <p className="text-[11px] text-[#7A7265]">{article.author.role} • {article.author.credentials}</p>
            </div>
          </div>

          <div className="font-mono text-[11px] text-[#7A7265] space-y-0.5 sm:text-right">
            <div>Published: {article.publishDate}</div>
            {article.updatedDate && (
              <div className="text-[#9E472A]">Revised: {article.updatedDate}</div>
            )}
            <div className="text-[10px] text-[#8C8478] pt-0.5">
              <button onClick={() => onNavigate('editorial-policy')} className="hover:underline text-[#70685D]">Editorial Policy</button>
              {' • '}
              <button onClick={() => onNavigate('corrections-policy')} className="hover:underline text-[#70685D]">Fact-Checking Standards</button>
            </div>
          </div>
        </div>

        {/* Research Date Disclaimer for trending topics */}
        {article.researchDate && (
          <div className="p-3 bg-[#FAF4ED] border border-[#E6D7C3] rounded-md text-xs text-[#7A5638] flex items-start gap-2">
            <Award className="w-4 h-4 shrink-0 mt-0.5 text-[#9E472A]" />
            <span><strong>Research Transparency:</strong> {article.researchDate}</span>
          </div>
        )}
      </header>

      {/* Featured Snippet Direct Answer Box (40–60 words) */}
      <section className="p-5 sm:p-6 bg-white border border-[#E6E0D7] rounded-xl shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E472A]">
            <CheckCircle2 className="w-4 h-4 text-[#9E472A]" />
            <span>Direct Answer &amp; Core Summary</span>
          </div>
          <span className="text-[10px] font-mono text-[#8C8478] uppercase hidden sm:inline">
            Textile Standards Verified
          </span>
        </div>
        <p className="text-base sm:text-[17px] text-[#1C1C1C] font-medium leading-relaxed">
          {article.excerpt}
        </p>
      </section>

      {/* Key Takeaways Box */}
      <section className="bg-[#FAF8F5] border-l-4 border-[#9E472A] border-y border-r border-[#E8E2D8] rounded-r-xl p-5 sm:p-6 space-y-3 shadow-2xs">
        <div className="flex items-center gap-2 text-[#9E472A] font-bold text-sm uppercase tracking-wider font-mono">
          <Lightbulb className="w-4 h-4" />
          <span>Key Takeaways &amp; Quick Summary</span>
        </div>
        <ul className="space-y-2 text-sm text-[#3E3A33] leading-relaxed">
          {takeaways.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Photo with ALT, Caption & Prompt Transparency */}
      <div className="bg-white border border-[#E6E0D7] rounded-xl overflow-hidden p-2 space-y-2">
        <div className="aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-lg bg-[#FAF8F5] relative">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            loading="eager"
            decoding="async"
            width="1200"
            height="630"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-2 py-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#7A7266]">
          {article.imageCaption && (
            <p className="italic">
              {article.imageCaption}
            </p>
          )}
          {article.imagePrompt && (
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              className="font-mono text-[10px] text-[#9E472A] hover:underline self-end sm:self-auto shrink-0 flex items-center gap-1"
            >
              <ImageIcon className="w-3 h-3" />
              {showPrompt ? 'Hide Photography Notes' : 'Photo Styling Notes'}
            </button>
          )}
        </div>
        {showPrompt && article.imagePrompt && (
          <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-md text-[11px] text-[#635B50] font-mono leading-relaxed mx-2 mb-2">
            <span className="font-bold text-[#1C1C1C]">Editorial Visual Spec:</span> {article.imagePrompt}
          </div>
        )}
      </div>

      {/* Main Grid: Sticky Table of Contents & Article Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sticky Table of Contents on Desktop */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 bg-[#FAF8F5] border border-[#E6E0D7] rounded-xl p-5 space-y-3">
              <h3 className="font-serif-heading font-bold text-sm text-[#1C1C1C] uppercase tracking-wider pb-2 border-b border-[#E6E0D7]">
                Table of Contents
              </h3>
              <nav className="space-y-2 text-xs">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-[#595248] hover:text-[#9E472A] transition-colors py-1 leading-snug"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Article Body Content */}
        <article className={`${article.tableOfContents ? 'lg:col-span-8' : 'lg:col-span-12'} order-1 lg:order-2 space-y-8 max-w-prose`}>
          <div 
            onClick={handleContentClick}
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            className="space-y-6 text-[#2B2723] text-base sm:text-[17px] leading-[1.8] font-normal"
          />

          {/* Dedicated Related Interactive Tool Box */}
          {article.relatedTool ? (
            <div className="mt-10 p-6 bg-[#FAF8F5] border-2 border-[#E2DAD0] rounded-xl space-y-3 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#9E472A] flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Recommended Educational Tool
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#F0EAE1] text-[#7A7265] rounded">
                  Free Utility
                </span>
              </div>
              <h4 className="text-lg font-serif-heading font-bold text-[#1C1C1C]">
                {article.relatedTool.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C5549] leading-relaxed">
                {article.relatedTool.description}
              </p>
              <a
                href={`/tools/${article.relatedTool.path.replace(/^#?\/?(tools\/)?/, '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('tools', article.relatedTool!.path.replace(/^#?\/?(tools\/)?/, ''));
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#9E472A] hover:bg-[#833B22] text-white rounded-md text-xs font-semibold transition-colors"
              >
                Launch {article.relatedTool.name} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="mt-10 p-6 bg-[#FAF8F5] border border-[#E6E0D7] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#9E472A] flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Textile Calculation Suite
                </span>
                <h4 className="text-base font-serif-heading font-bold text-[#1C1C1C] mt-1">
                  Need Exact Fabric Measurements or Shrinkage Estimations?
                </h4>
                <p className="text-xs text-[#5C5549] mt-0.5">
                  Use our free calculators for yardage, GSM conversion, drape weight, and wash shrinkage.
                </p>
              </div>
              <a
                href="/tools"
                onClick={(e) => { e.preventDefault(); onNavigate('tools'); }}
                className="shrink-0 px-4 py-2 bg-[#9E472A] hover:bg-[#833B22] text-white rounded-md text-xs font-semibold transition-colors"
              >
                Browse All Tools →
              </a>
            </div>
          )}

          {/* Related Fabric Profiles (Always 2 Fabrics Linked) */}
          <section className="mt-12 pt-8 border-t border-[#E6E0D7] space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif-heading font-bold text-xl text-[#1C1C1C] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#9E472A]" /> Related Fabric Profiles
              </h4>
              <a
                href="/fabrics"
                onClick={(e) => { e.preventDefault(); onNavigate('fabrics'); }}
                className="text-xs font-medium text-[#9E472A] hover:underline"
              >
                View Fabric Library ({FABRICS.length}) →
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedFabrics.map((fab) => (
                <a
                  key={fab.id}
                  href={`/fabric/${fab.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('fabric', fab.slug); }}
                  className="block p-4 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl cursor-pointer transition-all hover:shadow-xs group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                      {fab.name}
                    </h5>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#FAF8F5] text-[#8C8478] rounded border border-[#E6E0D7]">
                      {fab.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#5C5549] line-clamp-2 leading-relaxed">
                    {fab.whatIsIt || fab.fiberComposition}
                  </p>
                  <div className="pt-2 text-[11px] text-[#7A7265] flex items-center justify-between border-t border-[#F2EDE4]">
                    <span>Weight: <strong>{fab.weightGsm.split('(')[0]}</strong></span>
                    <span className="text-[#9E472A] font-semibold group-hover:underline">Explore Profile →</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Related Fabric Comparisons */}
          {(() => {
            const relComparisons = FABRIC_COMPARISONS.filter(c =>
              matchedFabrics.some(f => f.slug === c.fabricA.slug || f.slug === c.fabricB.slug) ||
              article.title.toLowerCase().includes(c.fabricA.name.toLowerCase()) ||
              article.title.toLowerCase().includes(c.fabricB.name.toLowerCase())
            ).slice(0, 2);

            if (relComparisons.length === 0) return null;

            return (
              <section className="mt-8 pt-6 border-t border-[#E6E0D7] space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif-heading font-bold text-lg text-[#1C1C1C] flex items-center gap-2">
                    <span>Side-by-Side Material Comparisons</span>
                  </h4>
                  <a
                    href="/comparisons"
                    onClick={(e) => { e.preventDefault(); onNavigate('comparisons'); }}
                    className="text-xs font-medium text-[#9E472A] hover:underline"
                  >
                    All Comparisons →
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relComparisons.map(comp => (
                    <a
                      key={comp.id}
                      href={`/comparison/${comp.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate('comparison', comp.slug); }}
                      className="block p-3.5 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-lg cursor-pointer transition-all hover:shadow-xs group"
                    >
                      <span className="text-[10px] font-mono uppercase text-[#9E472A] font-semibold block mb-0.5">
                        Technical Comparison
                      </span>
                      <h5 className="text-sm font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors leading-snug">
                        {comp.title}
                      </h5>
                      <p className="text-xs text-[#6B655C] mt-1 line-clamp-1">
                        {comp.overview}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* References & Recommended Sources */}
          {article.sources && article.sources.length > 0 && (
            <section className="mt-10 pt-6 border-t border-[#E6E0D7]">
              <div className="bg-[#FAF8F5] border border-[#E6DFC8] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#9E472A]" />
                  <h4 className="font-serif-heading font-bold text-base sm:text-lg text-[#1C1C1C]">
                    Helpful References &amp; Recommended Reading
                  </h4>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#5C5549] leading-relaxed">
                  {article.sources.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[#9E472A] font-semibold shrink-0">[{idx + 1}]</span>
                      <span>
                        <strong>{src.title}</strong> — {src.institutionOrAuthor} ({src.year})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Article FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-10 space-y-4">
              <h3 className="font-serif-heading font-bold text-2xl text-[#1C1C1C]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {article.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-[#E6E0D7] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                    >
                      <span className="font-semibold text-sm text-[#1C1C1C]">{faq.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-[#8C8478] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8C8478] shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-5 pb-5 text-xs text-[#524C43] leading-relaxed border-t border-[#F2EDE4] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Pinterest Preparation & Pin Specs Card */}
          {article.pinterest && (
            <section className="mt-10 p-5 bg-[#FAF8F5] border border-[#E8DFD3] rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#C93B2B] flex items-center gap-1.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Pinterest Resource &amp; Study Pin
                </span>
                <button
                  onClick={handleCopyPin}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#D9D1C5] hover:border-[#C93B2B] rounded text-xs font-medium text-[#1C1C1C] transition-colors"
                >
                  {copiedPin ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPin ? 'Copied Pin Details' : 'Copy Pin Info'}
                </button>
              </div>
              <div className="text-xs space-y-1.5 text-[#5C5549]">
                <p><strong>Pin Title:</strong> {article.pinterest.title}</p>
                <p><strong>Pin Description:</strong> {article.pinterest.description}</p>
                <p className="text-[11px] text-[#8C8478] italic">Ideal aspect ratio: 1000 × 1500 (2:3 standard vertical pin).</p>
              </div>
            </section>
          )}

          {/* Tags */}
          <div className="pt-6 border-t border-[#E6E0D7] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#8C8478] flex items-center gap-1 font-mono">
              <Tag className="w-3.5 h-3.5" /> Topics:
            </span>
            {article.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 bg-[#F2EDE4] text-[#5C5549] rounded-md font-medium text-[11px]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </div>

      {/* Related Articles Section (At least 3) */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t border-[#E6E0D7] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading font-bold text-2xl text-[#1C1C1C]">
              Related Textile Inquiries
            </h3>
            <a
              href="/articles"
              onClick={(e) => { e.preventDefault(); onNavigate('articles'); }}
              className="text-xs font-semibold text-[#9E472A] hover:underline"
            >
              Explore All Articles →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <a
                key={rel.id}
                href={`/articles/${rel.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate('articles', rel.slug); }}
                className="group block bg-white border border-[#E8E2D9] rounded-lg overflow-hidden hover:border-[#9E472A] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#F2EDE4]">
                    <img 
                      src={rel.featuredImage} 
                      alt={rel.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="250"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E472A]">
                      {rel.category}
                    </span>
                    <h4 className="font-serif-heading font-bold text-base text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors mt-1 line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                </div>

                <div className="p-4 pt-0 text-xs text-[#7A7265] flex items-center justify-between">
                  <span>{rel.readTime}</span>
                  <span className="font-semibold text-[#9E472A] inline-flex items-center gap-1">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
