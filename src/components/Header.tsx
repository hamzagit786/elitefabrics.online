import React, { useState } from 'react';
import { Search, Bookmark, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, idOrSlug?: string) => void;
  onOpenSearch: () => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  savedCount,
  onOpenSaved,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Fabric Types', view: 'fabrics' },
    { label: 'Guides', view: 'beginner' },
    { label: 'Comparisons', view: 'comparisons' },
    { label: 'History', view: 'timeline' },
    { label: 'Pakistani Fabrics', view: 'pakistani' },
    { label: 'Global Industry', view: 'industry' },
    { label: 'Sustainable', view: 'sustainable' },
    { label: 'Tools', view: 'tools' },
    { label: 'Blog', view: 'blog' },
  ];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E0D7]">
      {/* Masthead Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group"
          >
            <span className="block text-2xl sm:text-3xl font-serif-heading font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#9E472A] transition-colors">
              ELITE FABRICS
            </span>
            <p className="text-[11px] tracking-wider text-[#6B655C] uppercase mt-0.5 font-medium">
              Fabric &amp; Textile Information
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A453E] bg-[#F2EDE4] hover:bg-[#E8E1D5] rounded border border-[#D9D1C5] transition-colors"
              title="Search fabrics and guides"
            >
              <Search className="w-3.5 h-3.5 text-[#6B655C]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <button
              onClick={onOpenSaved}
              className="relative p-2 text-[#4A453E] hover:text-[#9E472A] hover:bg-[#F2EDE4] rounded border border-transparent hover:border-[#D9D1C5] transition-colors"
              title="Saved Articles"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold bg-[#9E472A] text-white rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4A453E] hover:text-[#1A1A1A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-[#EBE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-1 py-2 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <li key={link.view} className="whitespace-nowrap">
                  <button
                    onClick={() => handleNavClick(link.view)}
                    className={`px-3 py-1.5 rounded transition-colors text-xs font-medium ${
                      isActive
                        ? 'bg-[#1C1C1C] text-white'
                        : 'text-[#4A453E] hover:text-[#1C1C1C] hover:bg-[#EFE9DF]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E6E0D7] px-4 py-3 space-y-1">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-left px-3 py-2 rounded text-xs font-medium ${
                    isActive
                      ? 'bg-[#1C1C1C] text-white font-semibold'
                      : 'text-[#4A453E] bg-[#F2EDE4] hover:bg-[#E8E1D5]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
