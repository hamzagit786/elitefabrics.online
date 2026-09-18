import React from 'react';
import { Cookie, Calendar, ShieldCheck, CheckCircle2, Settings } from 'lucide-react';

interface CookiePolicyViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const CookiePolicyView: React.FC<CookiePolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <Cookie className="w-4 h-4" /> Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Cookie Policy
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
        {/* What are Cookies? */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files that a website places on your computer or mobile device when you visit. They are widely used across the Internet to allow websites to function properly, remember your preferences over time, and provide anonymous performance data.
          </p>
          <p>
            Cookies cannot run programs, deliver viruses, or read private files on your computer.
          </p>
        </section>

        {/* Why We Use Cookies */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Why Does Elite Fabrics Use Cookies?
          </h2>
          <p>
            We use cookies and similar local storage technologies for simple, practical reasons:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>Essential functionality:</strong> To allow you to save articles in your browser's reading list so you can find them later without having to create an account or provide an email.
            </li>
            <li>
              <strong>Remembering your acknowledgment:</strong> To record whether you have seen and dismissed our cookie notification banner so it doesn't repeatedly appear on every page.
            </li>
            <li>
              <strong>Site performance and analytics:</strong> To monitor basic traffic patterns and page load speeds so we can keep our fabric guides fast and responsive on mobile devices.
            </li>
            <li>
              <strong>Third-party advertising:</strong> To support third-party advertising services (such as Google AdSense) that may serve relevant advertisements based on your browsing interests.
            </li>
          </ul>
        </section>

        {/* Categories of Cookies */}
        <section className="space-y-4 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3. Types of Cookies Used on This Website
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-2">
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C]">
                Essential & Functional Local Storage
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed">
                These elements are necessary for core site features to function. For example, saving your bookmarked fabric profiles using your browser's LocalStorage. They do not track you across external sites.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-2">
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C]">
                Performance & Analytics Cookies
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed">
                These collect aggregated, non-identifiable statistics about how visitors move around our site (e.g., which fabric guides are read most often and how fast pages load).
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-2">
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C]">
                Google Advertising Cookies
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed">
                Third-party advertising networks, such as Google AdSense, use cookies to serve ads based on prior visits to our site or other websites. These cookies allow advertisers to deliver ads relevant to your interests.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-2">
              <h3 className="font-serif-heading font-bold text-base text-[#1C1C1C]">
                Third-Party Integration Cookies
              </h3>
              <p className="text-xs text-[#5C5549] leading-relaxed">
                Occasionally, third-party content (such as embedded museum charts, web fonts from Google Fonts, or external citations) may place their own cookies when rendered in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* How Users Can Manage Cookies */}
        <section className="space-y-4 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. How You Can Manage or Disable Cookies
          </h2>
          <p>
            You have full control over cookies. Most web browsers allow you to view, manage, and block cookies through their settings menu.
          </p>
          <div className="bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl p-5 space-y-3 text-xs sm:text-sm text-[#4A453E]">
            <span className="font-bold text-[#1C1C1C] block">Browser Controls:</span>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies</li>
              <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Apple Safari:</strong> Settings &gt; Safari &gt; Advanced &gt; Privacy &gt; Block all cookies</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
            </ul>
            <p className="text-xs text-[#6B6355] pt-2">
              <em>Note:</em> Disabling all cookies may affect minor convenience features, such as remembering your bookmarked fabrics across browser restarts.
            </p>
          </div>
        </section>

        {/* Managing Personalized Advertising */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Managing Advertising Cookies Specifically
          </h2>
          <p>
            If you wish to opt out of personalized advertising delivered by Google or other advertising networks without disabling all website cookies, you can use these official opt-out tools:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-[#4A453E]">
            <li>
              <strong>Google Ads Settings:</strong>{' '}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                https://www.google.com/settings/ads
              </a>
            </li>
            <li>
              <strong>Digital Advertising Alliance (US):</strong>{' '}
              <a 
                href="https://www.aboutads.info/choices/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                https://www.aboutads.info/choices/
              </a>
            </li>
            <li>
              <strong>European Interactive Digital Advertising Alliance (EU):</strong>{' '}
              <a 
                href="https://www.youronlinechoices.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                https://www.youronlinechoices.com/
              </a>
            </li>
          </ul>
        </section>

        {/* Questions */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            6. Questions About Our Cookie Policy?
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            If you have questions regarding our use of cookies or technical storage, please reach out through our{' '}
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#9E472A] underline font-semibold"
            >
              Contact Page
            </button>{' '}
            or email us at <span className="font-mono text-[#1C1C1C]">contact@elitefabrics.online</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
