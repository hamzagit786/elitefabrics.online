import React from 'react';

interface FooterProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#191919] text-[#E5E0D8] border-t border-[#33302B] mt-20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div>
          <h3 className="text-xl font-serif-heading font-bold text-white tracking-tight">
            Elite Fabrics
          </h3>
          <p className="text-xs text-[#A8A196] mt-1">
            Fabric &amp; Textile Information
          </p>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#CCC4B6]">
            <li>
              <button 
                onClick={() => onNavigate('about')} 
                className="hover:text-white transition-colors"
              >
                About
              </button>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <button 
                onClick={() => onNavigate('contact')} 
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <button 
                onClick={() => onNavigate('privacy-policy')} 
                className="hover:text-white transition-colors"
              >
                Privacy
              </button>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <button 
                onClick={() => onNavigate('terms')} 
                className="hover:text-white transition-colors"
              >
                Terms
              </button>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <button 
                onClick={() => onNavigate('tools')} 
                className="hover:text-white transition-colors"
              >
                Tools
              </button>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <button 
                onClick={() => onNavigate('sitemap')} 
                className="hover:text-white transition-colors"
              >
                Sitemap
              </button>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-[#7A7266] pt-2 border-t border-[#2A2723]">
          &copy; 2026 Elite Fabrics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
