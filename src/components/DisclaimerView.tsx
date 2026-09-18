import React from 'react';
import { AlertCircle, Calendar, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

interface DisclaimerViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const DisclaimerView: React.FC<DisclaimerViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" /> Editorial Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Website Disclaimer
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
        {/* General Disclaimer */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. General Informational and Educational Purpose
          </h2>
          <p>
            The information published on <strong>Elite Fabrics</strong> (<strong>https://elitefabrics.online/</strong>) is provided exclusively for general informational and educational purposes.
          </p>
          <p>
            While our team strives to make every fabric profile, comparison, laundry tip, and historical article as clear, practical, and helpful as possible, all content is presented "as is" without warranties of completeness, absolute accuracy, or fitness for a particular project.
          </p>
        </section>

        {/* Practical Guidance, Not Professional Advice */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. General Guidance Rather Than Professional Advice
          </h2>
          <p>
            Content on this website—including discussions on fabric care, stain removal, fabric selection, shrinkage, and material sustainability—should be treated as general guidance rather than professional commercial textile consultation, legal certification, or industrial advice.
          </p>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl text-xs sm:text-sm text-[#4A453E] space-y-2">
            <p className="font-semibold text-[#1C1C1C]">
              Everyday Laundry &amp; Garment Care:
            </p>
            <p>
              Different clothing manufacturers use different dyes, chemical finishes, and fiber blends. We strongly advise that you always follow the care label stitched into your garment and test any spot-cleaning technique or iron heat setting on a small, hidden inside seam before applying it to the entire garment.
            </p>
          </div>
        </section>

        {/* Verification from Primary Sources */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. Verification of Important Information
          </h2>
          <p>
            Textile manufacturing, environmental certifications (such as GOTS or OEKO-TEX), and retail regulations evolve over time. Readers should independently verify critical material specifications, safety standards, or commercial fabric requirements with the manufacturer, certified testing lab, or official standards body.
          </p>
          <p>
            Elite Fabrics does not warrant that every article, fiber weight, or benchmark will remain current forever as industry standards develop.
          </p>
        </section>

        {/* External Links Disclaimer */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. External Links Disclaimer
          </h2>
          <p>
            Elite Fabrics may include hyperlinks to external websites, including museums, educational directories, and research databases. We do not monitor, endorse, guarantee, or assume responsibility for the accuracy, completeness, or policies of any external websites. Visiting external links is done solely at your own discretion.
          </p>
        </section>

        {/* Non-Commercial Statement */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Non-Commercial Status
          </h2>
          <p>
            Elite Fabrics is not an online fabric store and does not sell fabrics, clothing, sewing patterns, or retail inventory. Mention of specific fabric types (e.g. linen, lawn, chiffon, cashmere) or brand technologies (e.g. TENCEL™) is strictly for educational context and does not constitute a commercial endorsement.
          </p>
        </section>

        {/* Questions */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            6. Inquiries and Factual Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            If you have questions about this disclaimer, or if you believe an article contains an outdated reference that needs review, please contact us through our{' '}
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Contact Page
            </button>{' '}
            or read our{' '}
            <button 
              onClick={() => onNavigate('corrections-policy')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Corrections Policy
            </button>.
          </p>
        </section>
      </div>
    </div>
  );
};
