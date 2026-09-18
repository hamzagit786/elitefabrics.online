import React from 'react';
import { DollarSign, Calendar, ShieldCheck, CheckCircle2, AlertCircle, Ban } from 'lucide-react';

interface AdvertisingPolicyViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const AdvertisingPolicyView: React.FC<AdvertisingPolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> Commercial Independence
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Advertising Policy
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
        {/* Purpose */}
        <section className="space-y-3">
          <p>
            <strong>Elite Fabrics</strong> is an independent fabric and textile educational resource. Our mission is to provide clear, reliable, and accessible information about fabrics, fibers, weaving traditions, and garment care.
          </p>
          <p>
            To fund the costs of web hosting, research, domain maintenance, and ongoing content creation, Elite Fabrics may display advertisements provided by third-party advertising networks, including <strong>Google AdSense</strong>. This Advertising Policy outlines the guidelines that govern how advertising appears on our site.
          </p>
        </section>

        {/* 1. Clear Separation Between Editorial and Advertising */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. Strict Separation Between Editorial Content and Advertisements
          </h2>
          <p>
            Editorial independence is fundamental to our relationship with our readers. We enforce a strict separation between our educational articles and any commercial advertising:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>No paid editorial bias:</strong> Advertisers have no say over our editorial topics, article conclusions, fabric ratings, or side-by-side comparisons.
            </li>
            <li>
              <strong>Distinct visual presentation:</strong> Advertisements are clearly demarcated from editorial text through layout spacing and standard ad indicators.
            </li>
            <li>
              <strong>No native masquerading:</strong> We never format advertisements to mimic editorial articles or deceive readers into clicking commercial links.
            </li>
          </ul>
        </section>

        {/* 2. Third-Party Advertising Networks & Google AdSense */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Third-Party Ad Networks (Google AdSense)
          </h2>
          <p>
            Advertisements displayed on Elite Fabrics may be delivered automatically by third-party advertising networks, such as Google AdSense. These networks determine which advertisements to display based on contextual relevance and user browsing history.
          </p>
          <p>
            Elite Fabrics does not directly control the specific products or services featured in automated network ads, nor does the appearance of an advertisement imply endorsement or recommendation by Elite Fabrics.
          </p>
        </section>

        {/* 3. Prohibition of Deceptive Ad Engagement */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-[#FAF8F5] border border-[#E2DBD0] p-6 rounded-xl">
          <div className="flex items-center gap-2">
            <Ban className="w-5 h-5 text-[#9E472A]" />
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
              3. Our Anti-Deception &amp; Click-Bait Policy
            </h2>
          </div>
          <p>
            In compliance with Google AdSense program policies and our commitment to our readers:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#4A453E]">
            <li>We do not encourage, solicit, or incentivize visitors to click on advertisements.</li>
            <li>We never publish phrases such as "Click our ads", "Support our site by clicking ads", or "Check out these sponsors".</li>
            <li>We do not place ads in misleading positions where accidental clicks could occur.</li>
            <li>We do not create fake sponsored reviews or fabricated user ratings.</li>
          </ul>
        </section>

        {/* 4. Sponsored Content Rules */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. Sponsored Content Guidelines
          </h2>
          <p>
            If Elite Fabrics ever accepts paid sponsorships, guest placements, or brand collaborations in the future:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#4A453E]">
            <li>The content will be labeled prominently as "Sponsored Content" or "Advertisement" at the very top of the page.</li>
            <li>The sponsor will be clearly identified.</li>
            <li>Any associated hyperlinks will include appropriate Google-compliant link attributes (e.g. <code>rel="sponsored"</code> or <code>rel="nofollow"</code>).</li>
          </ul>
        </section>

        {/* 5. Inquiries About Advertising */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Inquiries About Advertising
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            If you have questions about our advertising practices or want to discuss legitimate sponsorship inquiries that align with our textile education mission, please reach out via our{' '}
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
