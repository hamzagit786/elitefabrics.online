import React from 'react';
import { 
  Building2, 
  BarChart3, 
  ShieldCheck, 
  FileText, 
  Globe2, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface PartnershipsViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const PartnershipsView: React.FC<PartnershipsViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-[#E6E0D7] pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF4EB] border border-[#EADBCA] text-[#9E472A] rounded-full text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Brand Collaborations &amp; Advertising</span>
          </div>
          <span className="text-xs text-[#7A7266] font-mono">
            Updated: October 2026 • Commercial Transparency
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Partnerships &amp; Media Kit
        </h1>
        <p className="text-base sm:text-lg text-[#5E574D] leading-relaxed max-w-2xl">
          Partner with an independent, international textile education and fiber science platform trusted by designers, students, tailors, and textile professionals worldwide.
        </p>
      </div>

      {/* Verified Baseline Audience & Metrics */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EAE0] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4" /> Performance Baseline
            </span>
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-1">
              Audience Overview &amp; Search Reach
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#7A7266] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E6E0D7] self-start sm:self-auto">
            Verified GSC Baseline
          </span>
        </div>

        <p className="text-sm text-[#4A453E] leading-relaxed">
          Elite Fabrics is in an active organic growth cycle, expanding rapidly across technical textile keywords, fabric weight calculations, and regional weave profiles. We maintain total transparency: our metrics below represent verified baseline Search Console performance data without inflation.
        </p>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1C1C1C]">4.62K+</div>
            <div className="text-xs text-[#7A7266] font-medium">Quarterly Impressions</div>
            <div className="text-[10px] text-[#2E7D32] font-semibold font-mono">41,927% Growth</div>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1C1C1C]">160+</div>
            <div className="text-xs text-[#7A7266] font-medium">Educational Guides</div>
            <div className="text-[10px] text-[#7A7266] font-mono">Peer-Reviewed</div>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1C1C1C]">10</div>
            <div className="text-xs text-[#7A7266] font-medium">Textile Web Tools</div>
            <div className="text-[10px] text-[#7A7266] font-mono">High Dwell Time</div>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#1C1C1C]">6+</div>
            <div className="text-xs text-[#7A7266] font-medium">Core Demographics</div>
            <div className="text-[10px] text-[#7A7266] font-mono">PK, IN, BD, ID, CA, US</div>
          </div>
        </div>

        {/* Audience Profiles */}
        <div className="border-t border-[#F0EAE0] pt-6 space-y-3">
          <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C] flex items-center gap-2">
            <Users className="w-4 h-4 text-[#9E472A]" /> Who Reads Elite Fabrics?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#524B42]">
            <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
              <strong className="text-[#1C1C1C] block mb-1">Apparel Makers &amp; Sewists</strong>
              Home sewists, quilters, independent fashion designers, and custom tailors sourcing materials.
            </div>
            <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
              <strong className="text-[#1C1C1C] block mb-1">Students &amp; Researchers</strong>
              Fashion design students and textile engineering candidates researching GSM, fibers, and yarn counts.
            </div>
            <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
              <strong className="text-[#1C1C1C] block mb-1">Global Fabric Sourcing</strong>
              International buyers and diaspora consumers exploring Pakistani heritage textiles and sustainable mills.
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Collaboration Opportunities
          </h2>
          <p className="text-sm text-[#5E574D]">
            We offer bespoke sponsorship formats that deliver genuine value to our textile audience while maintaining strict editorial integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#9E472A] px-2 py-0.5 bg-[#FAF4EB] rounded border border-[#EADBCA] inline-block">
                Educational Sponsorship
              </span>
              <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C]">
                Underwritten Topic Series
              </h3>
              <p className="text-xs text-[#524B42] leading-relaxed">
                Sponsor an educational series exploring sustainable weaving, zero-impact dye chemistries, organic cotton farming, or artisan loom preservation.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EAE0] text-[11px] text-[#7A7266]">
              Includes prominent institutional underwriting disclosure &amp; compliant sponsored link.
            </div>
          </div>

          <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#9E472A] px-2 py-0.5 bg-[#FAF4EB] rounded border border-[#EADBCA] inline-block">
                Tool &amp; Utility Placement
              </span>
              <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C]">
                Interactive Calculator Placement
              </h3>
              <p className="text-xs text-[#524B42] leading-relaxed">
                Connect your brand with high-intent decision makers directly beneath calculation results on our popular GSM, yardage, and shrinkage calculators.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EAE0] text-[11px] text-[#7A7266]">
              High dwell-time positioning with zero deceptive ad formatting.
            </div>
          </div>

          <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#9E472A] px-2 py-0.5 bg-[#FAF4EB] rounded border border-[#EADBCA] inline-block">
                Directory &amp; Mill Profiles
              </span>
              <h3 className="text-base font-serif-heading font-bold text-[#1C1C1C]">
                Verified Supplier Profile
              </h3>
              <p className="text-xs text-[#524B42] leading-relaxed">
                Profile your spinning mill, dye house, or certified organic fabric brand within our global textile directory and verified sourcing guides.
              </p>
            </div>
            <div className="pt-3 border-t border-[#F0EAE0] text-[11px] text-[#7A7266]">
              Detailed capability listing with OEKO-TEX / GOTS certification verification.
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Independence & Disclosure Constitution */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 text-sm text-[#4A453E] leading-relaxed">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#9E472A]" />
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Our Editorial Independence Constitution
          </h2>
        </div>
        <p>
          Elite Fabrics takes reader trust seriously. In accordance with the <strong>Federal Trade Commission (FTC)</strong>, the <strong>UK Advertising Standards Authority (ASA)</strong>, and <strong>Google Search Quality Evaluator Guidelines</strong>:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4A453E] pt-2">
          <div className="p-4 bg-white border border-[#E8E2D9] rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1C1C]">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <h4>Mandatory Clear Disclosures</h4>
            </div>
            <p>
              Any sponsored article or underwritten tool is explicitly labeled with standard disclosures at the top before any editorial body copy.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E2D9] rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1C1C]">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <h4>Google-Compliant Link Attributes</h4>
            </div>
            <p>
              All paid hyperlinks and commercial partner references strictly use <code className="bg-[#FAF4EB] px-1 py-0.5 rounded text-[#9E472A]">rel="sponsored"</code> or <code className="bg-[#FAF4EB] px-1 py-0.5 rounded text-[#9E472A]">rel="nofollow"</code> attributes.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E2D9] rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1C1C]">
              <AlertCircle className="w-4 h-4 text-[#C62828]" />
              <h4>No Manipulative Do-Follow Link Sales</h4>
            </div>
            <p>
              We decline all requests for paid do-follow links, hidden keyword anchor texts, or PBN linking networks. No exceptions.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#E8E2D9] rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1C1C]">
              <AlertCircle className="w-4 h-4 text-[#C62828]" />
              <h4>Uncompromised Scientific Testing</h4>
            </div>
            <p>
              Sponsors cannot alter ASTM / ISO test results, fabric comparison outcomes, fiber durability ratings, or care instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Prohibited Sponsor Categories */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Prohibited Categories
        </h2>
        <div className="p-5 bg-white border border-[#E6E0D7] rounded-xl text-xs text-[#524B42] space-y-2">
          <p>To preserve our reputation as an educational reference, Elite Fabrics does NOT accept partnerships with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vendors of counterfeit, replica, or illegally mislabeled textiles.</li>
            <li>Brands promoting unsubstantiated greenwashing claims without third-party laboratory certifications (e.g., GOTS, OEKO-TEX Standard 100, Bluesign).</li>
            <li>Gambling, predatory loan schemes, adult products, or unrelated commercial niches.</li>
            <li>Commercial stores requesting fake editorial reviews masquerading as objective research.</li>
          </ul>
        </div>
      </section>

      {/* Partnership Inquiry & Media Kit Request */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 text-sm text-[#4A453E]">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> Start a Conversation
          </span>
          <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C]">
            Request a Partnership or Custom Campaign
          </h2>
          <p className="text-xs sm:text-sm text-[#5E574D]">
            Interested in collaborating with Elite Fabrics? We welcome inquiries from textile mills, pattern companies, sewing tool manufacturers, testing laboratories, and educational institutions.
          </p>
        </div>

        <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#9E472A]" />
            <strong className="text-[#1C1C1C]">Direct Contact Channels:</strong>
          </div>
          <div>
            • <strong>Email:</strong> Reach our partnerships team directly via our{' '}
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#9E472A] underline font-semibold hover:text-[#7A3620]"
            >
              Contact Form
            </button>{' '}
            or write to <span className="font-mono text-[#1C1C1C]">editorial@elitefabrics.online</span>.
          </div>
          <div>
            • <strong>WhatsApp:</strong> Direct verified editorial desk at{' '}
            <a 
              href="https://wa.me/923192229067" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-[#1C1C1C] underline hover:text-[#9E472A]"
            >
              +92 319 2229067
            </a>.
          </div>
          <div className="text-[11px] text-[#7A7266] pt-1">
            Please include your company name, website URL, campaign objectives, and expected timeframe. We typically respond within 24–48 business hours.
          </div>
        </div>
      </section>
    </div>
  );
};
