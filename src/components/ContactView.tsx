import React from 'react';

interface ContactViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#1C1C1C]">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#5E574D] leading-relaxed">
          Have a question about fabrics, care instructions, or suggestions for our textile guides? Reach out directly via WhatsApp.
        </p>
      </div>

      {/* WhatsApp Contact Box */}
      <div className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5 shadow-2xs">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#7A7266] font-semibold block">
            Direct Messaging
          </span>
          <p className="text-lg sm:text-xl font-medium text-[#1C1C1C] mt-1">
            WhatsApp: <span className="font-semibold">03192229067</span>
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#5E574D] leading-relaxed">
          Click the button below to message us directly on WhatsApp for inquiries, content feedback, or corrections:
        </p>

        <div>
          <a
            href="https://wa.me/923192229067"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-md text-sm transition-colors shadow-xs"
          >
            Chat on WhatsApp (03192229067)
          </a>
        </div>
      </div>

      {/* Simple Information Note */}
      <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D9] rounded-lg text-xs text-[#6B6355] leading-relaxed space-y-1">
        <p className="font-semibold text-[#1C1C1C]">Educational Website Note</p>
        <p>
          Elite Fabrics provides educational guides on fabric types, weaves, and garment care. We do not sell fabrics, clothes, or swatches.
        </p>
      </div>
    </div>
  );
};
