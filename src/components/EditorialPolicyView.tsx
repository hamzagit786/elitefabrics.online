import React from 'react';
import { BookOpen, Calendar, ShieldCheck, CheckCircle2, FileEdit, Award, Eye } from 'lucide-react';

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
          Editorial Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7266] pt-1">
          <span className="flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" /> Last Updated: September 17, 2026
          </span>
          <span>•</span>
          <span>Domain: <strong className="text-[#1C1C1C]">elitefabrics.online</strong></span>
        </div>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#3E3A34] leading-relaxed">
        {/* Core Mission */}
        <section className="space-y-3">
          <p>
            At <strong>Elite Fabrics</strong>, our goal is to publish clear, trustworthy, and approachable educational articles about fabrics and textiles. This Editorial Policy outlines how we research, write, review, and maintain our content.
          </p>
        </section>

        {/* 1. Educational Purpose & Everyday Language */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. Clear, Everyday Language for Real People
          </h2>
          <p>
            We believe textile knowledge should be accessible to anyone. We actively avoid unnecessary academic jargon and confusing technical formulas.
          </p>
          <p>
            When technical terms (such as GSM, warp and weft, or staple length) are genuinely helpful to an everyday shopper or home maker, we take the time to explain them in plain, conversational English with practical examples.
          </p>
        </section>

        {/* 2. Research & Practical Checks */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Content Verification &amp; Honest Sourcing
          </h2>
          <p>
            Before publishing, we review fabric characteristics, yarn compositions, washing guidance, and historical dates against recognized textile references, museum documentation, and practical sewing and garment experience.
          </p>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl text-xs sm:text-sm text-[#4A453E] space-y-2">
            <p className="font-semibold text-[#1C1C1C]">
              What We Do NOT Claim:
            </p>
            <p>
              We do <strong>not</strong> claim to be an academic peer-reviewed scientific journal or a government regulatory body. We position ourselves honestly as an independent fabric and textile educational resource. We cite reputable industry sources, historic records, and standards bodies where relevant.
            </p>
          </div>
        </section>

        {/* 3. Advertising & Commercial Independence */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. Strict Separation of Editorial Content and Advertising
          </h2>
          <p>
            Elite Fabrics may display third-party advertisements (such as Google AdSense) in the future to support website hosting and ongoing research.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>No paid editorial influence:</strong> We never accept payment to write positive reviews or recommend a specific fabric brand over another.
            </li>
            <li>
              <strong>Clear labeling:</strong> If sponsored content, advertising, or partnerships are ever featured, they will be prominently and unequivocally labeled so our readers always know what is editorial and what is advertising.
            </li>
            <li>
              <strong>No deceptive links:</strong> We do not hide affiliate links, disguise ads as editorial advice, or encourage artificial clicks.
            </li>
          </ul>
        </section>

        {/* 4. Responsible Use of AI Tools */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. Responsible Use of Technology &amp; AI
          </h2>
          <p>
            While modern digital tools and assistive drafting software may be used to help format or organize drafts, AI tools must <strong>never</strong> be used to fabricate expertise, invent fake statistics, generate unverified claims, or manufacture non-existent credentials.
          </p>
          <p>
            Every published guide is reviewed to ensure it reflects real, practical textile realities, natural tone, and accurate guidance.
          </p>
        </section>

        {/* 5. Corrections & Continuous Improvement */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Commitment to Corrections
          </h2>
          <p>
            We take factual accuracy seriously. When a genuine error, typo, or outdated instruction is brought to our attention, we investigate promptly and update the article. Significant factual revisions are noted with an update stamp.
          </p>
          <p>
            To learn how you can submit a correction, please review our{' '}
            <button 
              onClick={() => onNavigate('corrections-policy')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Corrections Policy
            </button>.
          </p>
        </section>

        {/* Contact Us */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            6. Editorial Feedback
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            Have thoughts on an article or an idea for a topic we haven't covered yet? Reach out through our{' '}
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Contact Page
            </button>{' '}
            or WhatsApp us at <a href="https://wa.me/923192229067" target="_blank" rel="noopener noreferrer" className="font-mono text-[#1C1C1C] underline">03192229067</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
