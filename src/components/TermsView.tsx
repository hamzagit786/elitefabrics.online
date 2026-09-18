import React from 'react';
import { Scale, Calendar, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface TermsViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <Scale className="w-4 h-4" /> Legal Terms
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Terms &amp; Conditions
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
            Welcome to <strong>Elite Fabrics</strong> (<strong>https://elitefabrics.online/</strong>). By accessing or using our website, you agree to comply with and be bound by the following Terms &amp; Conditions. If you do not agree with these terms, please do not use this website.
          </p>
        </section>

        {/* 1. Educational and Informational Purpose */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. Strictly Educational &amp; Informational Purpose
          </h2>
          <p>
            All articles, comparison charts, care manuals, guides, and glossary entries provided on Elite Fabrics are published solely for general informational and educational purposes.
          </p>
          <div className="p-4 bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl text-xs sm:text-sm text-[#4A453E] space-y-2">
            <p className="font-semibold text-[#1C1C1C]">
              Notice Regarding Non-Commercial Nature:
            </p>
            <p>
              Elite Fabrics is <strong>NOT an ecommerce website</strong>. We do not sell fabric by the yard, clothes, sewing supplies, or retail goods. No transaction can be completed on this site.
            </p>
          </div>
        </section>

        {/* 2. Intellectual Property */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, all written articles, original guides, diagrams, and layout designs on Elite Fabrics are the property of Elite Fabrics and protected by international copyright laws.
          </p>
          <p>
            You may:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#4A453E]">
            <li>Read, bookmark, and share links to our articles for personal, educational, and non-commercial use;</li>
            <li>Quote short passages with clear attribution and a link back to the original article on <em>elitefabrics.online</em>.</li>
          </ul>
          <p>
            You may <strong>not</strong> scrape, republish full articles, or duplicate our content on commercial websites without prior written permission.
          </p>
        </section>

        {/* 3. User-Submitted Information */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. User-Submitted Content &amp; Inquiries
          </h2>
          <p>
            When you send us feedback, article corrections, or messages through our contact form, you agree not to submit defamatory, unlawful, abusive, or infringing material. Any feedback or topic suggestions you provide may be used by Elite Fabrics to improve our guides without obligation or compensation to you.
          </p>
        </section>

        {/* 4. Accuracy Limitations & Practical Advice */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. Accuracy Limitations &amp; Textile Variability
          </h2>
          <p>
            We make every reasonable effort to provide accurate, reliable, and up-to-date fabric information. However:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#4A453E]">
            <li>
              Fabric behavior depends heavily on manufacturer finishing, yarn blends, dye processes, and water hardness.
            </li>
            <li>
              Laundry tips, stain removal techniques, and shrinkage estimates are general recommendations. You should always check the care tag sewn into your garment and test any stain remover on a small hidden seam first.
            </li>
            <li>
              We cannot guarantee that every article or metric will remain completely accurate indefinitely as manufacturing methods evolve.
            </li>
          </ul>
        </section>

        {/* 5. External Links */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Links to Third-Party Websites
          </h2>
          <p>
            Elite Fabrics contains links to outside websites (e.g. textile research sites, museum archives, and historical references). These links are provided for educational convenience only. Elite Fabrics does not endorse or control the content, accuracy, or privacy policies of any third-party websites.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, Elite Fabrics and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, the information provided on this website, including but not limited to fabric damage, garment shrinkage, laundry discoloration, or project errors.
          </p>
        </section>

        {/* 7. Changes to Terms */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            7. Changes to These Terms
          </h2>
          <p>
            We reserve the right to revise these Terms &amp; Conditions at any time. Any changes will be posted on this page with an updated date. Your continued use of the website following any changes signifies your acceptance of the updated terms.
          </p>
        </section>

        {/* 8. Contact Information */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            8. Questions Regarding Terms
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            If you have questions about these Terms &amp; Conditions, please reach out via our{' '}
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
