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
  ArrowRight
} from 'lucide-react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const relatedArticles = ARTICLES.filter(a => a.id !== article.id && (article.relatedSlugs?.includes(a.slug) || a.category === article.category)).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Top Breadcrumb & Utilities */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-[#6B655C] hover:text-[#1C1C1C] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

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

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight leading-[1.15]">
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

      {/* Featured Photo with ALT & Caption */}
      <div className="bg-white border border-[#E6E0D7] rounded-xl overflow-hidden p-2">
        <div className="aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-lg bg-[#FAF8F5]">
          <img
            src={article.featuredImage}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        {article.imageCaption && (
          <p className="text-xs text-[#7A7266] italic text-center py-2 px-4">
            {article.imageCaption}
          </p>
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
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            className="space-y-6 text-[#2B2723] text-base sm:text-[17px] leading-[1.8] font-normal"
          />

          {/* References & Recommended Sources */}
          {article.sources && article.sources.length > 0 && (
            <section className="mt-14 pt-8 border-t border-[#E6E0D7]">
              <div className="bg-[#FAF8F5] border border-[#E6DFC8] rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#9E472A]" />
                  <h4 className="font-serif-heading font-bold text-lg text-[#1C1C1C]">
                    Helpful References & Recommended Reading
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

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t border-[#E6E0D7] space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-heading font-bold text-2xl text-[#1C1C1C]">
              Related Textile Inquiries
            </h3>
            <button
              onClick={() => onNavigate('home')}
              className="text-xs font-semibold text-[#9E472A] hover:underline"
            >
              Explore All Articles →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate('article', rel.slug)}
                className="group cursor-pointer bg-white border border-[#E8E2D9] rounded-lg overflow-hidden hover:border-[#9E472A] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#F2EDE4]">
                    <img 
                      src={rel.featuredImage} 
                      alt={rel.imageAlt}
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
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
