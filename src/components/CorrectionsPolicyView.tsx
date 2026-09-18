import React from 'react';
import { FileEdit, Calendar, CheckCircle2, AlertCircle, ArrowRight, Mail } from 'lucide-react';

interface CorrectionsPolicyViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const CorrectionsPolicyView: React.FC<CorrectionsPolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <FileEdit className="w-4 h-4" /> Editorial Integrity
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Corrections Policy
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
        {/* Intro */}
        <section className="space-y-3">
          <p>
            At <strong>Elite Fabrics</strong>, we are committed to publishing accurate, reliable, and fair information. However, textiles, manufacturing techniques, and historical discoveries evolve, and mistakes can occasionally occur.
          </p>
          <p>
            When errors occur, our policy is to acknowledge and correct them promptly and transparently.
          </p>
        </section>

        {/* 1. How Readers Can Report Errors */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. How to Report a Factual Error
          </h2>
          <p>
            We welcome and encourage readers to report any inaccuracies, broken links, outdated metrics, or typos they find on our website.
          </p>
          <p>
            To submit a correction, please message us through our{' '}
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Contact Page
            </button>{' '}
            via WhatsApp. Please include:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#4A453E]">
            <li>The title or URL of the article;</li>
            <li>The specific sentence or section that you believe is incorrect;</li>
            <li>The correct information, along with any reference link or source if available.</li>
          </ul>
        </section>

        {/* 2. Review and Verification Process */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. How We Review Corrections
          </h2>
          <p>
            Once a report is received:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>Initial review:</strong> Our editorial team reviews the reported issue and verifies it against primary textile references, industry standards, or reliable historical archives.
            </li>
            <li>
              <strong>Correction implementation:</strong> If a factual error is confirmed, we immediately update the text, table, or care instruction.
            </li>
            <li>
              <strong>Minor typos:</strong> Simple spelling or grammatical errors are corrected directly without a formal notice.
            </li>
            <li>
              <strong>Substantive updates:</strong> If an article requires a significant factual correction (such as an incorrect wash temperature or a misstated historical date), an editorial update note and date stamp are added to the article.
            </li>
          </ol>
        </section>

        {/* 3. Feedback Acknowledgement */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. Acknowledging Reader Contributions
          </h2>
          <p>
            We deeply appreciate the keen eyes of our readers, home sewers, craft enthusiasts, and textile hobbyists. Reader contributions help keep Elite Fabrics one of the most practical and dependable free fabric resources on the web.
          </p>
        </section>

        {/* Submit a Correction CTA */}
        <section className="space-y-4 border-t border-[#F0EAE0] pt-6 bg-[#FAF8F5] border border-[#E2DBD0] p-6 sm:p-8 rounded-xl text-center">
          <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            Spotted Something Incorrect?
          </h3>
          <p className="text-xs sm:text-sm text-[#5E574D] max-w-lg mx-auto">
            Help us maintain the highest standard of clarity. Let us know which article needs a tune-up.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Submit a Correction <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
