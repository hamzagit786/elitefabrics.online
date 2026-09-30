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
              <a 
                href="/about"
                onClick={(e) => { e.preventDefault(); onNavigate('about'); }} 
                className="hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/contact"
                onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} 
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/privacy-policy"
                onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }} 
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/terms"
                onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} 
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/tools/fabric-finder-quiz"
                onClick={(e) => { e.preventDefault(); onNavigate('tools', 'fabric-finder-quiz'); }} 
                className="hover:text-white transition-colors"
              >
                Fabric Finder
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/tools/fabric-care-symbol-guide"
                onClick={(e) => { e.preventDefault(); onNavigate('tools', 'fabric-care-symbol-guide'); }} 
                className="hover:text-white transition-colors"
              >
                Care Symbols
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/tools"
                onClick={(e) => { e.preventDefault(); onNavigate('tools'); }} 
                className="hover:text-white transition-colors"
              >
                Tools
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/editorial-policy"
                onClick={(e) => { e.preventDefault(); onNavigate('editorial-policy'); }} 
                className="hover:text-white transition-colors"
              >
                Editorial Policy
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/disclaimer"
                onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }} 
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </a>
            </li>
            <li className="text-[#555048]" aria-hidden="true">|</li>
            <li>
              <a 
                href="/sitemap"
                onClick={(e) => { e.preventDefault(); onNavigate('sitemap'); }} 
                className="hover:text-white transition-colors"
              >
                Sitemap
              </a>
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
