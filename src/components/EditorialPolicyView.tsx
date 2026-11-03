import React from 'react';
import { BookOpen, Calendar, ShieldCheck, CheckCircle2, FileEdit, Award, Eye, Mail, UserCheck } from 'lucide-react';

interface EditorialPolicyViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const EditorialPolicyView: React.FC<EditorialPolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" /> Standards &amp; Principles
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Editorial Policy &amp; Standards
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7266] pt-1">
          <span className="flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" /> Last Updated: October 2026
          </span>
          <span>•</span>
          <span>Publisher &amp; Editor: <strong className="text-[#1C1C1C]">Hamza Siddique</strong></span>
          <span>•</span>
          <span>Domain: <strong className="text-[#1C1C1C]">elitefabrics.online</strong></span>
        </div>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#3E3A34] leading-relaxed">
        {/* Core Mission */}
        <section className="space-y-3">
          <p>
            At <strong>Elite Fabrics</strong>, our goal is to publish authoritative, unbiased, and accessible educational reference materials covering textile science, fiber identification, fabric care, and heritage weaving.
          </p>
          <p>
            This Editorial Policy explains our research standards, commercial independence, correction workflows, and the guidelines governing how every piece of textile information is prepared and verified.
          </p>
        </section>

        {/* 1. Publisher Transparency & Ownership */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#9E472A]" />
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
              1. Ownership &amp; Editorial Accountability
            </h2>
          </div>
          <p>
            Elite Fabrics is independently owned and managed by <strong>Hamza Siddique</strong>, based in Pakistan. Unlike anonymous content farms or corporate e-commerce blogs designed solely to funnel sales, Elite Fabrics operates with direct human editorial oversight.
          </p>
          <div className="p-4 bg-[#FAF8F5] border border-[#E6E0D7] rounded-lg text-xs sm:text-sm text-[#4A453E] space-y-1">
            <p><strong>Primary Editorial Contact:</strong> Hamza Siddique, Editor &amp; Publisher</p>
            <p><strong>Direct Inquiries:</strong> <a href="mailto:hsiddique0321@gmail.com" className="font-mono text-[#9E472A] underline">hsiddique0321@gmail.com</a> | <a href="mailto:editorial@elitefabrics.online" className="font-mono text-[#9E472A] underline">editorial@elitefabrics.online</a></p>
          </div>
        </section>

        {/* 2. Research & Practical Checks */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Standards-Based Sourcing &amp; Verification
          </h2>
          <p>
            Before any article, comparison, or tool is published on Elite Fabrics, all factual specifications (such as fiber micronaire, yarn count conversions, washing temperatures, and GSM ranges) are verified against accredited international and national standards bodies:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#4A453E]">
            <li><strong>ASTM International:</strong> ASTM D3776 (Fabric Weight), ASTM D1907 (Yarn Linear Density), ASTM D3774 (Fabric Width).</li>
            <li><strong>ISO:</strong> ISO 3801 (Fabric Mass Determination), ISO 2060 (Yarn Count Testing), ISO 6330 (Domestic Laundering).</li>
            <li><strong>AATCC:</strong> AATCC 135 (Dimensional Stability &amp; Shrinkage after Home Laundering).</li>
            <li><strong>USDA AMS Cotton Program:</strong> Staple length classifications, micronaire benchmarks, and grade standards.</li>
            <li><strong>Lok Virsa National Heritage Institute:</strong> Archival documentation on South Asian handloom traditions (Khaddar, Karandi, Ajrak, Dori work).</li>
          </ul>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl text-xs sm:text-sm text-[#4A453E] space-y-2">
            <p className="font-semibold text-[#1C1C1C]">
              What We Do NOT Claim:
            </p>
            <p>
              We do <strong>not</strong> claim to operate a commercial testing laboratory or a peer-reviewed academic university press. We position ourselves honestly as an independent, open-access textile research resource dedicated to translating technical engineering literature into clear, helpful guidance.
            </p>
          </div>
        </section>

        {/* 3. Advertising & Commercial Independence */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. Strict Separation of Editorial Content and Advertising
          </h2>
          <p>
            Elite Fabrics displays contextual advertisements (via Google AdSense) to fund web hosting, domain maintenance, and ongoing research. Our editorial independence is protected by strict boundaries:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>Zero Paid Endorsements:</strong> We never accept financial compensation or free fabric yardage in exchange for positive reviews or favorable rankings.
            </li>
            <li>
              <strong>Clear Differentiation:</strong> All display advertisements are clearly labeled and separated from editorial copy. We do not disguise advertisements as editorial articles.
            </li>
            <li>
              <strong>No E-Commerce Conflict:</strong> Elite Fabrics sells no fabrics, garments, or sewing machines. We have no commercial inventory to promote or liquidate.
            </li>
          </ul>
        </section>

        {/* 4. Responsible AI & Anti-Slop Discipline */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. Anti-Slop Discipline &amp; Authentic Authorship
          </h2>
          <p>
            In compliance with Google Search Essentials and quality guidelines, we strictly reject the practice of churning out thin, automated AI content or manufacturing fake expert credentials.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>We do not invent synthetic author personas with fabricated university degrees or fake testing laboratories.</li>
            <li>All technical calculations, tool formulas, and comparison matrices are mathematically validated before deployment.</li>
            <li>Every guide must deliver tangible, practical answers not found in generic dictionary definitions.</li>
          </ul>
        </section>

        {/* 5. Corrections Policy */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Commitment to Corrections &amp; Peer Feedback
          </h2>
          <p>
            Factual accuracy is our highest priority. When a reader, educator, or textile technician points out a typo, incorrect conversion constant, or outdated care guidance:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-[#4A453E]">
            <li>We review the submission against primary ASTM/ISO or archival sources within 48 hours.</li>
            <li>If verified, the correction is implemented immediately in the live codebase.</li>
            <li>Material factual revisions are marked with an updated timestamp and explanatory changelog note.</li>
          </ol>
          <p>
            Read our full{' '}
            <button 
              onClick={() => onNavigate('corrections-policy')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Corrections Policy
            </button>{' '}
            for detailed submission guidelines.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            6. How to Contact the Editorial Team
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            We welcome corrections, suggestions for new fabric guides, and questions from the global textile community:
          </p>
          <div className="pt-2 text-xs font-mono space-y-1 text-[#1C1C1C]">
            <div>Publisher: Hamza Siddique</div>
            <div>Direct Email: <a href="mailto:hsiddique0321@gmail.com" className="text-[#9E472A] underline">hsiddique0321@gmail.com</a></div>
            <div>Editorial Inquiries: <a href="mailto:editorial@elitefabrics.online" className="text-[#9E472A] underline">editorial@elitefabrics.online</a></div>
          </div>
        </section>
      </div>
    </div>
  );
};
