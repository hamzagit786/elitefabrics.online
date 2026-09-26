import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ToolFAQ } from '../../data/tools';

interface ToolFAQSectionProps {
  faqs: ToolFAQ[];
  title?: string;
}

export const ToolFAQSection: React.FC<ToolFAQSectionProps> = ({
  faqs,
  title = 'Frequently Asked Questions'
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white border border-[#E6E0D7] rounded-xl p-6 sm:p-8 space-y-5">
      <div className="flex items-center gap-2.5 pb-3 border-b border-[#F0EBE1]">
        <HelpCircle className="w-5 h-5 text-[#9E472A]" />
        <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#1C1C1C]">
          {title}
        </h2>
      </div>

      <div className="divide-y divide-[#F2ECE3]">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div key={idx} className="py-4 first:pt-1 last:pb-1">
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between text-left gap-4 font-serif-heading font-semibold text-[#1C1C1C] hover:text-[#9E472A] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8C8478] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#9E472A]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="mt-3 text-sm text-[#4E483F] leading-relaxed pr-2">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
