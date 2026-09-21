import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Check, 
  X, 
  Sparkles,
  HelpCircle,
  Flame,
  ChevronDown,
  ChevronUp,
  Heart,
  Shirt,
  Calendar,
  Waves,
  Sun,
  ShieldAlert,
  Scale,
  BookOpen
} from 'lucide-react';
import { FabricType } from '../types';
import { FABRICS } from '../data/fabrics';
import { FABRIC_COMPARISONS } from '../data/comparisons';

interface FabricDetailViewProps {
  fabric: FabricType;
  onNavigate: (view: string, idOrSlug?: string) => void;
  onSaveBookmark: (item: { id: string; title: string; type: 'fabric' | 'article'; slug: string }) => void;
  isSaved: boolean;
}

export const FabricDetailView: React.FC<FabricDetailViewProps> = ({
  fabric,
  onNavigate,
  onSaveBookmark,
  isSaved,
}) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default for helpfulness

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

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Navigation & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        <button
          onClick={() => onNavigate('fabrics')}
          className="inline-flex items-center gap-1.5 text-[#6B655C] hover:text-[#1C1C1C] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Fabric Library
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSaveBookmark({
              id: fabric.id,
              title: fabric.name,
              type: 'fabric',
              slug: fabric.slug
            })}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors ${
              isSaved 
                ? 'bg-[#9E472A] text-white border-[#9E472A]' 
                : 'bg-white text-[#4A453E] border-[#D9D1C5] hover:bg-[#FAF8F5]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            {isSaved ? 'Saved to Reading List' : 'Save Guide'}
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D9D1C5] bg-white text-[#4A453E] hover:bg-[#FAF8F5] text-xs font-medium transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {copied ? 'Link Copied!' : 'Share Guide'}
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-1 font-bold uppercase tracking-wider bg-[#F2EDE4] text-[#70685D] rounded">
            {fabric.category} Fabric
          </span>
          <span className="text-[#8C8478]">
            Origin: {fabric.origin.split(';')[0].split('(')[0]}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Everything You Need to Know About {fabric.name}
        </h1>

        <p className="text-base sm:text-lg text-[#554E44] leading-relaxed">
          {fabric.whatIsIt || fabric.fiberComposition}
        </p>
      </header>

      {/* Featured Photo with ALT & Friendly Caption */}
      <figure className="bg-white border border-[#E6E0D7] rounded-xl overflow-hidden p-2 shadow-xs">
        <div className="aspect-16/9 overflow-hidden rounded-lg bg-[#FAF8F5]">
          <img
            src={fabric.image}
            alt={fabric.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-[#7A7266] text-center py-2.5 px-3">
          {fabric.imageCaption || `Close-up view of genuine ${fabric.name} cloth.`}
        </figcaption>
      </figure>

      {/* Quick Facts Card (Plain English, No Jargon) */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-xl p-6 sm:p-7">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#9E472A] mb-4">
          {fabric.name} at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="bg-white p-3 rounded-lg border border-[#EBE4D8]">
            <span className="text-[#8C8478] block text-[11px] mb-1">How It Feels</span>
            <span className="font-semibold text-[#1C1C1C] text-sm">{fabric.texture.split(',')[0]}</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#EBE4D8]">
            <span className="text-[#8C8478] block text-[11px] mb-1">Breathability</span>
            <span className="font-semibold text-[#1C1C1C] text-sm">{fabric.breathability}</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#EBE4D8]">
            <span className="text-[#8C8478] block text-[11px] mb-1">Stretch</span>
            <span className="font-semibold text-[#1C1C1C] text-sm">{fabric.stretch.split('(')[0]}</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#EBE4D8]">
            <span className="text-[#8C8478] block text-[11px] mb-1">Best Season</span>
            <span className="font-semibold text-[#1C1C1C] text-sm">{fabric.bestSeasons.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Helpful Person Article Flow */}
      <div className="space-y-10 text-[#2E2A25]">

        {/* 1. What is it? */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">1.</span> What is {fabric.name}?
          </h2>
          <div className="text-sm sm:text-base text-[#4A443B] leading-relaxed space-y-3">
            <p>
              {fabric.whatIsIt || `${fabric.name} is a versatile fabric made from ${fabric.fiberComposition.toLowerCase()}`}
            </p>
            {fabric.howMade && (
              <p className="text-sm text-[#635C52]">
                <strong>How it is made:</strong> {fabric.howMade}
              </p>
            )}
          </div>
        </section>

        {/* 2. Why is it popular? */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">2.</span> Why is {fabric.name} so popular?
          </h2>
          <div className="text-sm sm:text-base text-[#4A443B] leading-relaxed">
            <p>
              {fabric.whyPopular || `${fabric.name} is widely loved for its unique balance of comfort, durability, and practical everyday use. It has remained a staple material across generations because it performs reliably in everyday life.`}
            </p>
          </div>
        </section>

        {/* 3. What does it feel like? */}
        <section className="space-y-3 bg-[#FAF7F2] p-5 sm:p-6 rounded-xl border border-[#ECE4D8]">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">3.</span> What does {fabric.name} feel like?
          </h2>
          <div className="text-sm sm:text-base text-[#4A443B] leading-relaxed space-y-2">
            <p>
              {fabric.whatDoesItFeelLike || `${fabric.name} is ${fabric.texture.toLowerCase()}. It feels comfortable and gentle when worn, moving easily with your body.`}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#7A7266] pt-1">
              <span className="font-semibold text-[#1C1C1C]">Drape & Flow:</span>
              <span>{fabric.drape}</span>
              <span className="mx-1">•</span>
              <span className="font-semibold text-[#1C1C1C]">Weight:</span>
              <span>{fabric.weightGsm}</span>
            </div>
          </div>
        </section>

        {/* 4. Where is it used? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">4.</span> Where is {fabric.name} commonly used?
          </h2>
          <p className="text-sm text-[#4A443B]">
            {fabric.whereIsItUsed || `You will find ${fabric.name} used in a wide variety of clothing and household items, including:`}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {fabric.commonUses.map((use, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#DDD5C7] text-xs font-medium text-[#3A352D] rounded-lg shadow-2xs"
              >
                <Shirt className="w-3.5 h-3.5 text-[#9E472A]" />
                {use}
              </span>
            ))}
          </div>
        </section>

        {/* 5. When is it suitable? */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">5.</span> When is {fabric.name} best to wear?
          </h2>
          <p className="text-sm sm:text-base text-[#4A443B] leading-relaxed">
            {fabric.whenIsItSuitable || `${fabric.name} is best suited for ${fabric.bestSeasons.join(', ')} weather. Whether you are dressing for warm afternoons or cooler evenings, it offers natural comfort.`}
          </p>
        </section>

        {/* 6. Advantages & 7. Disadvantages */}
        <section className="space-y-4">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            <span className="text-[#9E472A]">6 & 7.</span> Advantages and Disadvantages
          </h2>
          <p className="text-xs text-[#6B655C]">
            Here is an honest, practical look at what makes {fabric.name} great, and what you should watch out for before buying or sewing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {/* Advantages */}
            <div className="bg-[#FAFDF9] border border-[#D5E6D8] rounded-xl p-5 sm:p-6">
              <h3 className="font-serif-heading font-bold text-lg text-[#2E5E35] flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-[#2E5E35]" /> Advantages of {fabric.name}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334A36]">
                {fabric.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2E5E35] font-bold mt-0.5">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disadvantages */}
            <div className="bg-[#FDF9F9] border border-[#EAD5D5] rounded-xl p-5 sm:p-6">
              <h3 className="font-serif-heading font-bold text-lg text-[#9E3535] flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-[#9E3535]" /> Disadvantages to Keep in Mind
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#523333]">
                {fabric.disadvantages.map((dis, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#9E3535] font-bold mt-0.5">•</span>
                    <span>{dis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. How to Care for It */}
        <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <span className="text-[#9E472A]">8.</span> How to Care for {fabric.name}
          </h2>
          <p className="text-xs text-[#6B655C]">
            Proper care keeps your garments looking new and lasting for years. Here are the simple guidelines:
          </p>

          {typeof fabric.careInstructions === 'string' ? (
            <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#EAE3D5] text-sm text-[#4A443B] leading-relaxed">
              <p>{fabric.careInstructions}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D5]">
                <span className="font-bold text-[#1C1C1C] block mb-1">Washing</span>
                <p className="text-[#5A544A]">{fabric.careInstructions.washing}</p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D5]">
                <span className="font-bold text-[#1C1C1C] block mb-1">Drying</span>
                <p className="text-[#5A544A]">{fabric.careInstructions.drying}</p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D5]">
                <span className="font-bold text-[#1C1C1C] block mb-1">Ironing</span>
                <p className="text-[#5A544A]">{fabric.careInstructions.ironing}</p>
              </div>
              <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE3D5]">
                <span className="font-bold text-[#1C1C1C] block mb-1">Dry Cleaning</span>
                <p className="text-[#5A544A]">{fabric.careInstructions.dryCleaning}</p>
              </div>
            </div>
          )}
        </section>

        {/* Simple Identification Tip */}
        <section className="bg-[#FAF6EE] border border-[#E2D8C5] rounded-xl p-5 sm:p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#9E472A] font-semibold text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4" /> Simple Test: How to Tell if it is Real {fabric.name}
          </div>
          <div className="text-xs sm:text-sm text-[#4F483E] leading-relaxed">
            {typeof fabric.identificationMethod === 'string' 
              ? fabric.identificationMethod 
              : fabric.identificationMethod.visualAndTactile}
          </div>
        </section>

        {/* 9. Frequently Asked Questions */}
        {fabric.faqs && fabric.faqs.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
              <span className="text-[#9E472A]">9.</span> Frequently Asked Questions About {fabric.name}
            </h2>
            <div className="space-y-3">
              {fabric.faqs.map((faq, idx) => (
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
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#524C43] leading-relaxed border-t border-[#F2EDE4] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar Fabrics to Explore */}
        {fabric.similarFabrics.length > 0 && (
          <section className="pt-6 border-t border-[#E8E2D8] space-y-4">
            <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
              Similar Fabrics You Might Like
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {fabric.similarFabrics.map((sim, idx) => {
                const matchedFabric = FABRICS.find(f => f.name.toLowerCase().includes(sim.toLowerCase()) || f.slug === sim.toLowerCase().replace(/\s+/g, '-'));
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (matchedFabric) onNavigate('fabric', matchedFabric.slug);
                      else onNavigate('fabrics');
                    }}
                    className="px-4 py-2 bg-white border border-[#D9D1C5] hover:border-[#9E472A] rounded-md text-xs font-semibold text-[#1C1C1C] hover:text-[#9E472A] transition-colors shadow-2xs"
                  >
                    {sim} →
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Head-to-Head Comparisons */}
        {(() => {
          const relatedComparisons = FABRIC_COMPARISONS.filter(
            c => c.fabricA.slug === fabric.slug || 
                 c.fabricB.slug === fabric.slug ||
                 c.title.toLowerCase().includes(fabric.name.toLowerCase()) ||
                 c.slug.includes(fabric.slug)
          );

          if (relatedComparisons.length === 0) return null;

          return (
            <section className="pt-6 border-t border-[#E8E2D8] space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#9E472A]" /> Head-to-Head Comparisons
                </h2>
                <button
                  onClick={() => onNavigate('comparisons')}
                  className="text-xs font-medium text-[#9E472A] hover:underline"
                >
                  All Comparisons →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedComparisons.map(comp => (
                  <div
                    key={comp.id}
                    onClick={() => onNavigate('comparison', comp.slug)}
                    className="p-4 bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-lg cursor-pointer transition-all hover:shadow-xs group"
                  >
                    <span className="text-[11px] font-mono uppercase text-[#9E472A] font-semibold block mb-1">
                      Side-by-Side Analysis
                    </span>
                    <h3 className="text-sm font-serif-heading font-bold text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-[#6B655C] mt-1.5 line-clamp-2">
                      {comp.overview}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Quick Cross-Links to Guides */}
        <section className="p-5 bg-[#F4EFE6] border border-[#E5DDD0] rounded-xl space-y-3 text-xs">
          <h3 className="font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2 text-sm">
            <BookOpen className="w-4 h-4 text-[#9E472A]" /> Continue Exploring Textile Knowledge
          </h3>
          <p className="text-[#5C5549] leading-relaxed">
            Deepen your textile expertise with our non-commercial research guides and historical archives:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => onNavigate('care')}
              className="px-3 py-1.5 bg-white border border-[#D9D1C5] rounded text-xs font-medium text-[#1C1C1C] hover:text-[#9E472A] hover:border-[#9E472A] transition-colors"
            >
              Fabric Care &amp; Washing Directory →
            </button>
            <button
              onClick={() => onNavigate('glossary')}
              className="px-3 py-1.5 bg-white border border-[#D9D1C5] rounded text-xs font-medium text-[#1C1C1C] hover:text-[#9E472A] hover:border-[#9E472A] transition-colors"
            >
              A-Z Textile Terminology Glossary →
            </button>
            <button
              onClick={() => onNavigate('timeline')}
              className="px-3 py-1.5 bg-white border border-[#D9D1C5] rounded text-xs font-medium text-[#1C1C1C] hover:text-[#9E472A] hover:border-[#9E472A] transition-colors"
            >
              30,000 BCE to Present Timeline →
            </button>
            <button
              onClick={() => onNavigate('industry')}
              className="px-3 py-1.5 bg-white border border-[#D9D1C5] rounded text-xs font-medium text-[#1C1C1C] hover:text-[#9E472A] hover:border-[#9E472A] transition-colors"
            >
              Global Textile Industry Hubs →
            </button>
          </div>
        </section>

      </div>
    </article>
  );
};
