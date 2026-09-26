import React from 'react';
import { ShieldCheck, BookOpen, Calculator, Award, Layers } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF4EB] border border-[#EADBCA] text-[#9E472A] rounded-full text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Non-Commercial Educational Resource</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          About Elite Fabrics
        </h1>
        <p className="text-base sm:text-lg text-[#5E574D] leading-relaxed max-w-2xl">
          An independent, open-access educational encyclopedia and utility suite dedicated to fabric science, weaving heritage, and garment care.
        </p>
      </div>

      {/* Main Purpose Card */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 text-sm text-[#4A453E] leading-relaxed">
        <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
          Our Educational Mission
        </h2>
        <p>
          Elite Fabrics was founded to address a persistent frustration in the textile world: most fabric information online is either commercial advertising designed to sell clothing, or dense academic papers obscured by impenetrable laboratory jargon.
        </p>
        <p>
          Our mission is to translate complex textile engineering principles—such as yarn counts, dimensional relaxation, warp vs. weft tension, and area density (GSM)—into straightforward, actionable English for everyday sewists, quilters, fashion students, and curious consumers.
        </p>
        <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-xs space-y-1 text-[#524B42]">
          <strong className="text-[#1C1C1C] block text-sm">Our Non-Negotiable Editorial Principles:</strong>
          <div>• <strong>100% Free &amp; Non-Commercial:</strong> We do not sell textiles, clothing, or sewing machines. We do not operate an e-commerce storefront.</div>
          <div>• <strong>No Sponsored Reviews:</strong> We do not accept paid manufacturer endorsements or biased product rankings.</div>
          <div>• <strong>Data-Backed Standards:</strong> Our guides and formulas are grounded in published testing methods from <strong>ASTM International</strong>, <strong>ISO</strong>, <strong>AATCC</strong>, and the <strong>USDA Cotton Standards</strong>.</div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
          Core Pillars of Elite Fabrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#524B42]">
          <div className="p-5 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Layers className="w-4 h-4 text-[#9E472A]" />
              <h3>Fabric Types Library</h3>
            </div>
            <p className="leading-relaxed">
              Exhaustive profiles of 30+ natural, synthetic, and traditional textiles—from Egyptian cotton and Irish linen to mulberry silk, modal, and workwear duck canvas.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Calculator className="w-4 h-4 text-[#9E472A]" />
              <h3>10 Interactive Fabric Tools</h3>
            </div>
            <p className="leading-relaxed">
              Instant utility calculators for fabric GSM, yardage estimation, wash shrinkage percentages, drapery fullness, furniture upholstery, quilt backings, and yarn counts.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <BookOpen className="w-4 h-4 text-[#9E472A]" />
              <h3>Textile Science &amp; Care</h3>
            </div>
            <p className="leading-relaxed">
              Practical guides on laundry temperatures, stain removal chemistry, unraveling the bedsheet thread-count myth, and fiber blend performance.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Award className="w-4 h-4 text-[#9E472A]" />
              <h3>Heritage &amp; Regional Weaving</h3>
            </div>
            <p className="leading-relaxed">
              In-depth historical coverage of South Asian textile traditions, including high-count summer Lawn, pit-loom Khaddar, and traditional Sindhi Ajrak block-printing.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility & References */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 text-xs text-[#524B42] leading-relaxed">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Sources &amp; Institutional Standards
        </h2>
        <p>
          All factual statements, density formulas, and laundry recommendations on Elite Fabrics are cross-checked against recognized textile authorities:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>ASTM International:</strong> ASTM D3776 (Mass per Unit Area of Fabric), ASTM D4157 (Oscillatory Cylinder Abrasion), ASTM D3774 (Fabric Width).</li>
          <li><strong>ISO (International Organization for Standardization):</strong> ISO 3801 (Fabric Mass Determination), ISO 6330 (Domestic Washing and Drying Procedures).</li>
          <li><strong>AATCC (American Association of Textile Chemists and Colorists):</strong> AATCC 135 (Dimensional Changes of Fabrics after Laundering).</li>
          <li><strong>The Textile Institute (UK):</strong> Handbooks on weaving mechanics, knitwear loop geometries, and yarn numbering systems.</li>
          <li><strong>USDA Agricultural Marketing Service:</strong> Official classification and staple length standards of cotton.</li>
        </ul>
      </section>

      {/* Contact prompt */}
      <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-[#5E574D]">
          <p className="font-semibold text-sm text-[#1C1C1C]">Questions, Corrections, or Academic Collaboration?</p>
          <p>We welcome fact-checking inquiries, educator suggestions, and feedback from the textile community.</p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors shrink-0"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};
