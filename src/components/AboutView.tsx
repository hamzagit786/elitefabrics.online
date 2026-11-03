import React from 'react';
import { ShieldCheck, BookOpen, Calculator, Award, Layers, Mail, UserCheck, Search, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF4EB] border border-[#EADBCA] text-[#9E472A] rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Non-Commercial Educational Resource</span>
          </div>
          <span className="text-xs text-[#7A7266] font-mono">
            Maintained by Hamza Siddique &amp; Research Contributors
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          About Elite Fabrics
        </h1>
        <p className="text-base sm:text-lg text-[#5E574D] leading-relaxed max-w-2xl">
          An independent, open-access educational encyclopedia and textile engineering utility suite dedicated to fabric science, weaving heritage, and garment care.
        </p>
      </div>

      {/* Main Purpose Card */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 text-sm text-[#4A453E] leading-relaxed">
        <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
          Our Educational Mission
        </h2>
        <p>
          Elite Fabrics was founded to address a persistent void in the textile world: most fabric information published on the web is either commercial marketing copy designed to sell clothing, or dense technical papers hidden behind expensive academic paywalls.
        </p>
        <p>
          Our mission is to translate complex textile engineering principles—such as yarn numbering systems (Cotton Ne, Tex, Denier), dimensional relaxation shrinkage, warp vs. weft tension, and area density (GSM)—into straightforward, actionable English for home sewists, fashion students, quilters, and conscious consumers.
        </p>
        <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-xs space-y-1.5 text-[#524B42]">
          <strong className="text-[#1C1C1C] block text-sm">Our Core Non-Commercial Commitments:</strong>
          <div>• <strong>100% Free &amp; Non-Commercial:</strong> We do not sell textiles, clothing, or sewing machinery. We do not operate an e-commerce storefront or dropshipping operation.</div>
          <div>• <strong>No Sponsored Reviews:</strong> We do not accept paid manufacturer endorsements, sponsored textile reviews, or commercial ranking placements.</div>
          <div>• <strong>Standards-Grounded Data:</strong> Our formulas, measurement tools, and fabric profiles are synthesized directly from published testing standards from <strong>ASTM International</strong>, <strong>ISO</strong>, <strong>AATCC</strong>, and the <strong>USDA Cotton Standards</strong>.</div>
        </div>
      </section>

      {/* Verified Operator & Editorial Leadership */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 text-sm text-[#4A453E] leading-relaxed">
        <div className="flex items-center gap-2.5">
          <UserCheck className="w-5 h-5 text-[#9E472A]" />
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Editorial Leadership &amp; Publisher
          </h2>
        </div>
        <p>
          Elite Fabrics is owned, operated, and edited by <strong>Hamza Siddique</strong>, an independent textile researcher and developer based in Pakistan with a passionate focus on South Asian textile heritage and fiber education.
        </p>
        <div className="p-5 bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-semibold text-[#1C1C1C] block text-sm mb-1">Hamza Siddique</span>
            <span className="text-[#9E472A] font-semibold block mb-2">Publisher &amp; Lead Researcher</span>
            <p className="text-[#5C5549] leading-relaxed">
              Curates technical guides, maintains calculation tools, coordinates primary research across historic weaving districts (Multan, Kamalia, Haripur), and ensures strict compliance with non-commercial educational standards.
            </p>
          </div>
          <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-[#E2DBD0] pt-3 sm:pt-0 sm:pl-4">
            <span className="font-semibold text-[#1C1C1C] block">Direct Contact:</span>
            <div className="flex items-center gap-1.5 text-[#3A352E]">
              <Mail className="w-3.5 h-3.5 text-[#9E472A]" />
              <a href="mailto:hsiddique0321@gmail.com" className="font-mono text-[#9E472A] underline hover:text-[#7A3620]">
                hsiddique0321@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-[#3A352E]">
              <Mail className="w-3.5 h-3.5 text-[#9E472A]" />
              <a href="mailto:editorial@elitefabrics.online" className="font-mono text-[#9E472A] underline hover:text-[#7A3620]">
                editorial@elitefabrics.online
              </a>
            </div>
            <p className="text-[11px] text-[#7A7266] pt-1">
              For academic inquiries, corrections, or fact-checking submissions, inquiries are reviewed within 48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-[#524B42] leading-relaxed">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-[#9E472A]" />
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            Our Research Methodology
          </h2>
        </div>
        <p>
          To maintain high reliability without manufacturing synthetic credentials, our content creation follows a rigorous 3-step synthesis pipeline:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded-lg space-y-1">
            <span className="font-bold text-[#1C1C1C] block">1. Standards Verification</span>
            <p className="text-[#6B6357]">
              Every metric, formula, and density category is cross-referenced against official ASTM International, ISO, or AATCC testing procedures.
            </p>
          </div>
          <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded-lg space-y-1">
            <span className="font-bold text-[#1C1C1C] block">2. Heritage Documentation</span>
            <p className="text-[#6B6357]">
              Pakistani and South Asian artisanal fabrics (Khaddar, Karandi, Ajrak, Lawn) are verified through Lok Virsa cultural archives and regional weaving guilds.
            </p>
          </div>
          <div className="p-3.5 bg-[#FAF8F5] border border-[#E2DBD0] rounded-lg space-y-1">
            <span className="font-bold text-[#1C1C1C] block">3. Practical Validation</span>
            <p className="text-[#6B6357]">
              Worked calculations, shrinkage ratios, and sewing needle recommendations are verified on physical yardage swatches before publication.
            </p>
          </div>
        </div>
      </section>

      {/* Core Topics Covered */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
          The 6 Core Pillars of Elite Fabrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-[#524B42]">
          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Layers className="w-4 h-4 text-[#9E472A]" />
              <h3>Fabric Types Library</h3>
            </div>
            <p className="leading-relaxed">
              Exhaustive profiles of 30+ natural, synthetic, and luxury textiles—cotton, linen, silk, modal, denim, canvas, and wool.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Award className="w-4 h-4 text-[#9E472A]" />
              <h3>Pakistani Textiles</h3>
            </div>
            <p className="leading-relaxed">
              Specialized documentation of Indus Valley weaving: high-count Lawn, pit-loom Khaddar, raw-silk Karandi, and Banarasi brocades.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <BookOpen className="w-4 h-4 text-[#9E472A]" />
              <h3>Fabric Comparisons</h3>
            </div>
            <p className="leading-relaxed">
              Side-by-side technical breakdowns: Khaddar vs Karandi, Poplin vs Lawn, Linen vs Cotton, and Tencel vs Viscose.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <Calculator className="w-4 h-4 text-[#9E472A]" />
              <h3>Interactive Tools</h3>
            </div>
            <p className="leading-relaxed">
              10 dedicated mathematical calculators: Fabric GSM, Yardage, Wash Shrinkage, Curtain fullness, Upholstery yardage, and Yarn counts.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <CheckCircle2 className="w-4 h-4 text-[#9E472A]" />
              <h3>Textile Care Guides</h3>
            </div>
            <p className="leading-relaxed">
              Practical laundry temperatures, wash shrinkage prevention, stain removal chemistry, and care symbol decoders.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1C1C1C]">
              <BookOpen className="w-4 h-4 text-[#9E472A]" />
              <h3>Textile Glossary</h3>
            </div>
            <p className="leading-relaxed">
              A comprehensive A-to-Z dictionary explaining over 70 weaving, spinning, and finishing terms in clear, plain English.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility & References */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 text-xs text-[#524B42] leading-relaxed">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Sources &amp; Institutional Standards Cited
        </h2>
        <p>
          All factual statements, density equations, and laundry recommendations on Elite Fabrics cite established textile authorities:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>ASTM International:</strong> ASTM D3776 (Fabric Weight / Mass per Unit Area), ASTM D1907 (Yarn Linear Density), ASTM D4157 (Abrasion Resistance).</li>
          <li><strong>ISO (International Organization for Standardization):</strong> ISO 3801 (Fabric Mass Determination), ISO 2060 (Yarn Count by Skein Method), ISO 6330 (Domestic Washing Procedures).</li>
          <li><strong>AATCC (American Association of Textile Chemists and Colorists):</strong> AATCC 135 (Dimensional Changes of Fabrics after Laundering).</li>
          <li><strong>USDA Agricultural Marketing Service:</strong> Official Grade and Staple Length Standards of American Upland Cotton.</li>
          <li><strong>Lok Virsa National Institute of Folk &amp; Traditional Heritage:</strong> Folk textiles and weaving traditions of Pakistan.</li>
        </ul>
      </section>

      {/* Contact & Corrections Prompt */}
      <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-[#5E574D]">
          <p className="font-semibold text-sm text-[#1C1C1C]">Found a Factual Discrepancy or Have Feedback?</p>
          <p>We review technical corrections and suggestions with utmost gratitude. Email <a href="mailto:hsiddique0321@gmail.com" className="font-mono text-[#9E472A] underline font-semibold">hsiddique0321@gmail.com</a>.</p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors shrink-0"
        >
          Contact Editorial Team
        </button>
      </div>
    </div>
  );
};
