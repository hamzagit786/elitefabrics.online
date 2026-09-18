import React from 'react';

interface AboutViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          About Elite Fabrics
        </h1>
        <p className="text-base text-[#5E574D]">
          An independent informational website dedicated to fabric and textile education.
        </p>
      </div>

      {/* Main Content */}
      <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-4 text-sm text-[#4A453E] leading-relaxed">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          Our Purpose
        </h2>
        <p>
          Elite Fabrics was created to provide straightforward, practical explanations about textiles and fabrics. Many fabric sources online are either retail shops trying to sell products or dense academic articles full of technical jargon.
        </p>
        <p>
          Our goal is simple: explain how fabrics feel, how they behave in different seasons, how to care for them, and where they come from in clear, everyday English.
        </p>
        <p>
          We do not sell fabrics, clothing, or sewing supplies. We do not operate an online store or process orders. Elite Fabrics is completely free to read and exists solely as an informational reference.
        </p>
      </section>

      {/* Topics Covered */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          What We Cover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#524B42]">
          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <h3 className="font-semibold text-sm text-[#1C1C1C]">Fabric Types Library</h3>
            <p className="leading-relaxed">Profiles of common fibers including cotton, linen, wool, silk, modal, rayon, and polyester.</p>
          </div>
          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <h3 className="font-semibold text-sm text-[#1C1C1C]">Fabric Comparisons</h3>
            <p className="leading-relaxed">Direct side-by-side guides comparing warmth, breathability, durability, and texture.</p>
          </div>
          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <h3 className="font-semibold text-sm text-[#1C1C1C]">Care &amp; Laundry Guides</h3>
            <p className="leading-relaxed">Practical advice on washing temperatures, shrinking prevention, and fabric maintenance.</p>
          </div>
          <div className="p-4 bg-white border border-[#E6E0D7] rounded-lg space-y-1.5">
            <h3 className="font-semibold text-sm text-[#1C1C1C]">Pakistani Textile Heritage</h3>
            <p className="leading-relaxed">Information on regional fabrics such as Lawn, Khaddar, and traditional Ajrak block prints.</p>
          </div>
        </div>
      </section>

      {/* Contact prompt */}
      <div className="p-5 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs text-[#5E574D]">
          <p className="font-semibold text-[#1C1C1C]">Questions or Corrections?</p>
          <p>If you have any feedback or notice an error in our articles, please reach out to us.</p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333333] text-white text-xs font-semibold rounded uppercase tracking-wider transition-colors shrink-0"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};
