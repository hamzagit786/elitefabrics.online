import React from 'react';
import { ShieldCheck, Calendar, Lock, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';

interface PolicyViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const PrivacyPolicyView: React.FC<PolicyViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b border-[#E6E0D7] pb-6 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> Legal & Transparency
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#7A7266] pt-1">
          <span className="flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5" /> Last Updated: September 28, 2026
          </span>
          <span>•</span>
          <span>Reviewed by: <strong className="text-[#1C1C1C]">Elite Fabrics Editorial &amp; Compliance Team</strong></span>
          <span>•</span>
          <span>Domain: <strong className="text-[#1C1C1C]">elitefabrics.online</strong></span>
        </div>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-[#3E3A34] leading-relaxed">
        {/* Intro */}
        <section className="space-y-3">
          <p>
            At <strong>Elite Fabrics</strong> ("we", "us", or "our"), accessible from <strong>https://elitefabrics.online/</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how it is used, and the choices you have concerning your data.
          </p>
          <p>
            Elite Fabrics is an independent fabric and textile educational blog. We do not sell goods or services, operate an ecommerce store, or collect payment details.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            1. Information We Collect
          </h2>
          <p>
            We collect information in only two straightforward ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>Information you provide voluntarily:</strong> If you contact us through our Contact form or via email, we collect your name, email address, subject of inquiry, and the message content you submit. This information is used solely to answer your questions or process article corrections.
            </li>
            <li>
              <strong>Automatically collected technical data (Log Files):</strong> Like almost all websites, our web hosting servers automatically record basic technical data when you load a page. This may include your IP address, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. This data is not linked to any personally identifiable identity and is used solely to analyze server performance, maintain site security, and optimize load speeds.
            </li>
          </ul>
        </section>

        {/* 2. Cookies and Tracking Technologies */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            2. Cookies and Local Storage
          </h2>
          <p>
            Cookies are small text files placed on your device to help websites function smoothly. Elite Fabrics uses basic cookies and browser local storage for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A453E]">
            <li>
              <strong>Remembering your reading preferences:</strong> For example, saving your bookmarked articles so you can read them later on your device.
            </li>
            <li>
              <strong>Cookie consent state:</strong> Remembering whether you have acknowledged our privacy and cookie notification banner.
            </li>
          </ul>
          <p>
            You can configure your browser to reject cookies or notify you when a cookie is sent. For full details on managing cookies, please read our dedicated{' '}
            <button 
              onClick={() => onNavigate('cookie-policy')} 
              className="text-[#9E472A] underline hover:text-[#B55535] font-semibold"
            >
              Cookie Policy
            </button>.
          </p>
        </section>

        {/* 3. Advertising & Google AdSense Disclosure */}
        <section className="space-y-4 border-t border-[#F0EAE0] pt-6 bg-[#FAF8F5] border border-[#E6DFC8] p-6 rounded-xl">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#9E472A]" />
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
              3. Advertising &amp; Google AdSense Disclosure
            </h2>
          </div>
          <p>
            To help support the ongoing research, hosting, and publication of free textile education guides and interactive calculators, Elite Fabrics displays advertisements served by third-party advertising networks, including <strong>Google AdSense</strong>.
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-[#4A453E] border-l-2 border-[#9E472A] pl-4">
            <p>
              <strong>Important Disclosure Regarding Third-Party Advertising &amp; the Google DoubleClick DART Cookie:</strong>
            </p>
            <p>
              • Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites across the Internet.
            </p>
            <p>
              • Google's use of the DoubleClick DART cookie enables it and its partners to serve ads to our visitors based on their visit to <em>elitefabrics.online</em> and other sites across the web.
            </p>
            <p>
              • Users may opt out of the use of the DART cookie for interest-based advertising by visiting the{' '}
              <a 
                href="https://policies.google.com/technologies/ads" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                Google Ad and Content Network Privacy Policy
              </a>.
            </p>
            <p>
              • You may also configure or opt out of personalized Google advertising at any time by visiting{' '}
              <a 
                href="https://adssettings.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                Google Ads Settings (https://adssettings.google.com/)
              </a>.
            </p>
            <p>
              • Furthermore, visitors can opt out of a wide array of third-party vendors' cookies for personalized advertising by visiting the{' '}
              <a 
                href="https://optout.aboutads.info/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                Digital Advertising Alliance Consumer Choice Tool (aboutads.info)
              </a>{' '}
              or the{' '}
              <a 
                href="https://optout.networkadvertising.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#9E472A] underline font-semibold"
              >
                Network Advertising Initiative (NAI) Opt-Out Page
              </a>.
            </p>
          </div>
        </section>

        {/* 3b. CCPA / CPRA & GDPR Rights */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            3b. GDPR &amp; CCPA/CPRA Privacy Rights
          </h2>
          <p>
            We are committed to full compliance with global privacy standards, including the European Union General Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA/CPRA).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#4A453E] pt-2">
            <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
              <strong className="text-[#1C1C1C] block text-sm">GDPR Data Protection Rights:</strong>
              <p>Under European data protection laws, visitors have:</p>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li><strong>The right to access:</strong> Request copies of any personal data we hold.</li>
                <li><strong>The right to rectification:</strong> Request correction of inaccurate information.</li>
                <li><strong>The right to erasure:</strong> Request deletion of personal data under certain conditions.</li>
                <li><strong>The right to restrict or object to processing:</strong> Limit how we process your data.</li>
                <li><strong>The right to data portability:</strong> Request transfer of data to another organization.</li>
              </ul>
            </div>
            <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-2">
              <strong className="text-[#1C1C1C] block text-sm">CCPA/CPRA California Consumer Rights:</strong>
              <p>Under California privacy regulations, California consumers have:</p>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li><strong>Right to Know:</strong> Know what personal information is collected, used, shared, or sold.</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information collected from you.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing:</strong> We do NOT sell or share personal data for monetary consideration.</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service and pricing regardless of privacy rights exercised.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#6B6355]">
            If you make a request regarding any of these rights, we have one month to respond to you. Please contact our data privacy officer at <a href="mailto:contact@elitefabrics.online" className="text-[#9E472A] underline font-semibold">contact@elitefabrics.online</a> or <a href="mailto:hsiddique0321@gmail.com" className="text-[#9E472A] underline font-semibold">hsiddique0321@gmail.com</a>.
          </p>
        </section>

        {/* 4. How We Use Your Information */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            4. How We Use Collected Information
          </h2>
          <p>
            Any information collected through Elite Fabrics is used exclusively to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#4A453E]">
            <li>Operate and maintain our website smoothly;</li>
            <li>Respond to your direct contact inquiries and feedback;</li>
            <li>Implement factual corrections and update textile articles;</li>
            <li>Understand general visitor patterns to produce more helpful guides;</li>
            <li>Prevent spam, security incidents, and unauthorized technical abuse.</li>
          </ul>
          <p className="font-semibold text-[#1C1C1C]">
            We never sell, rent, or trade your personal email or contact information to any third parties or mailing lists.
          </p>
        </section>

        {/* 5. Data Security */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            5. Data Security
          </h2>
          <p>
            We take reasonable technical and administrative precautions to safeguard any information submitted through our contact form. Our site is delivered over modern encrypted HTTPS connections. However, please remember that no transmission over the Internet is 100% secure, and we encourage you not to send sensitive or confidential details via online forms.
          </p>
        </section>

        {/* 6. Children's Privacy */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            6. Children's Privacy (COPPA)
          </h2>
          <p>
            Elite Fabrics does not knowingly collect any personal identifiable information from children under the age of 13. Our educational articles are intended for a general audience. If a parent or guardian believes that a child has submitted personal details through our contact form, please notify us immediately so we can remove that information promptly.
          </p>
        </section>

        {/* 7. External Links */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            7. Links to External Websites
          </h2>
          <p>
            Our articles may include links to external educational sites, museum archives (such as the Victoria & Albert Museum or the MET), or historical references. We do not control and are not responsible for the privacy practices or content of third-party websites. We encourage you to review their individual privacy policies.
          </p>
        </section>

        {/* 8. Updates to this Policy */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6">
          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time to reflect changes in our operational practices, legal guidelines, or third-party integrations. Any updates will be published on this page with an updated "Last Updated" timestamp.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section className="space-y-3 border-t border-[#F0EAE0] pt-6 bg-white p-6 rounded-xl border border-[#E6E0D7]">
          <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
            9. Contacting Us About Privacy
          </h2>
          <p className="text-xs sm:text-sm text-[#4A453E]">
            If you have questions, feedback, or requests regarding this Privacy Policy or your data, please contact us:
          </p>
          <div className="text-xs font-mono space-y-1 text-[#6B6355]">
            <p>Website: <a href="https://elitefabrics.online" className="text-[#9E472A]">https://elitefabrics.online/</a></p>
            <p>Primary Contact: <a href="mailto:hsiddique0321@gmail.com" className="text-[#9E472A] underline">hsiddique0321@gmail.com</a></p>
            <p>Privacy Email: <a href="mailto:contact@elitefabrics.online" className="text-[#9E472A] underline">contact@elitefabrics.online</a></p>
            <p>Editorial Desk: <a href="mailto:editorial@elitefabrics.online" className="text-[#9E472A] underline">editorial@elitefabrics.online</a></p>
            <p>Direct Inquiries: <a href="https://wa.me/923192229067" target="_blank" rel="noopener noreferrer" className="text-[#9E472A] underline">WhatsApp Support Desk</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};
