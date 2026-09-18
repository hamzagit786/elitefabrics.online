import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { FabricLibraryView } from './components/FabricLibraryView';
import { FabricDetailView } from './components/FabricDetailView';
import { ArticleView } from './components/ArticleView';
import { ComparisonView } from './components/ComparisonView';
import { BeginnerGuideView } from './components/BeginnerGuideView';
import { TimelineView } from './components/TimelineView';
import { PakistaniFabricsView } from './components/PakistaniFabricsView';
import { SustainableFabricsView } from './components/SustainableFabricsView';
import { GlossaryView } from './components/GlossaryView';
import { ResourcesDirectoryView } from './components/ResourcesDirectoryView';
import { TrendingView } from './components/TrendingView';
import { FabricCareView } from './components/FabricCareView';
import { SearchModal } from './components/SearchModal';
import { SavedArticlesDrawer, SavedItem } from './components/SavedArticlesDrawer';

// New Pages: About, Contact, Blog, Policies, Sitemap & Cookie Banner
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { BlogView } from './components/BlogView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsView } from './components/TermsView';
import { DisclaimerView } from './components/DisclaimerView';
import { CookiePolicyView } from './components/CookiePolicyView';
import { EditorialPolicyView } from './components/EditorialPolicyView';
import { CorrectionsPolicyView } from './components/CorrectionsPolicyView';
import { AdvertisingPolicyView } from './components/AdvertisingPolicyView';
import { SitemapView } from './components/SitemapView';
import { CookieConsentBanner } from './components/CookieConsentBanner';

import { FABRICS } from './data/fabrics';
import { ARTICLES } from './data/articles';
import { FABRIC_COMPARISONS } from './data/comparisons';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const stored = localStorage.getItem('elitefabrics_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('elitefabrics_saved', JSON.stringify(savedItems));
    } catch {
      // ignore
    }
  }, [savedItems]);

  // Handle URL Hash navigation
  const parseHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) {
      setCurrentView('home');
      setCurrentSlug('');
      return;
    }

    const parts = hash.split('/');
    const view = parts[0];
    const slug = parts[1] || '';

    const validViews = [
      'home',
      'about',
      'contact',
      'blog',
      'fabrics',
      'fabric',
      'article',
      'comparisons',
      'comparison',
      'beginner',
      'timeline',
      'pakistani',
      'sustainable',
      'glossary',
      'resources',
      'trending',
      'care',
      'privacy-policy',
      'terms',
      'disclaimer',
      'cookie-policy',
      'editorial-policy',
      'corrections-policy',
      'advertising-policy',
      'sitemap'
    ];

    if (validViews.includes(view)) {
      setCurrentView(view);
      setCurrentSlug(slug);
    } else {
      setCurrentView('home');
      setCurrentSlug('');
    }
  };

  useEffect(() => {
    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  // Update Document Title Dynamically for SEO
  useEffect(() => {
    if (currentView === 'home') {
      document.title = 'Elite Fabrics | Independent Fabric & Textile Information, Trends, Guides & History';
    } else if (currentView === 'about') {
      document.title = 'About Us | Elite Fabrics – Independent Fabric & Textile Information';
    } else if (currentView === 'contact') {
      document.title = 'Contact Us | Elite Fabrics – Questions, Corrections & Inquiries';
    } else if (currentView === 'blog') {
      document.title = 'The Elite Fabrics Blog | Fabric Guides, Fashion Trends & Textile Insights';
    } else if (currentView === 'privacy-policy') {
      document.title = 'Privacy Policy & AdSense Disclosure | Elite Fabrics';
    } else if (currentView === 'terms') {
      document.title = 'Terms & Conditions | Elite Fabrics';
    } else if (currentView === 'disclaimer') {
      document.title = 'Website Disclaimer & Educational Scope | Elite Fabrics';
    } else if (currentView === 'cookie-policy') {
      document.title = 'Cookie Policy & Consent Management | Elite Fabrics';
    } else if (currentView === 'editorial-policy') {
      document.title = 'Editorial Policy & Verification Standards | Elite Fabrics';
    } else if (currentView === 'corrections-policy') {
      document.title = 'Corrections Policy & Error Reporting | Elite Fabrics';
    } else if (currentView === 'advertising-policy') {
      document.title = 'Advertising Policy & Sponsored Content Rules | Elite Fabrics';
    } else if (currentView === 'sitemap') {
      document.title = 'HTML Sitemap | Complete Directory of Elite Fabrics';
    } else if (currentView === 'fabric' && currentSlug) {
      const f = FABRICS.find(item => item.slug === currentSlug);
      document.title = f ? `${f.name} Fabric Guide & Characteristics | Elite Fabrics` : 'Fabric Profile | Elite Fabrics';
    } else if (currentView === 'article' && currentSlug) {
      const a = ARTICLES.find(item => item.slug === currentSlug);
      document.title = a ? `${a.title} | Elite Fabrics` : 'Textile Article | Elite Fabrics';
    } else if (currentView === 'comparison' || currentView === 'comparisons') {
      const c = FABRIC_COMPARISONS.find(item => item.slug === currentSlug);
      document.title = c ? `${c.title} | Elite Fabrics Comparisons` : 'Fabric Comparisons | Elite Fabrics';
    } else if (currentView === 'fabrics') {
      document.title = 'Fabric Types Library & Specifications | Elite Fabrics';
    } else if (currentView === 'trending') {
      document.title = 'Trending Fabrics 2026: Material Preferences & Innovations | Elite Fabrics';
    } else if (currentView === 'beginner') {
      document.title = 'How to Start Learning About Fabrics as a Beginner | Elite Fabrics';
    } else if (currentView === 'pakistani') {
      document.title = 'Pakistani Fabrics & South Asian Textile Heritage | Elite Fabrics';
    } else if (currentView === 'sustainable') {
      document.title = 'Sustainable Fabrics & Lifecycle Guide | Elite Fabrics';
    } else if (currentView === 'timeline') {
      document.title = 'Global Textile History Timeline: 30,000 BCE to 2026 | Elite Fabrics';
    } else if (currentView === 'care') {
      document.title = 'Practical Fabric Care & Laundry Guide | Elite Fabrics';
    } else if (currentView === 'glossary') {
      document.title = 'A-Z Fabric & Textile Glossary | Elite Fabrics';
    } else if (currentView === 'resources') {
      document.title = 'Fabric Websites & Textile Resource Directory | Elite Fabrics';
    }
  }, [currentView, currentSlug]);

  // Global Keyboard Shortcut for Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (view: string, idOrSlug?: string) => {
    setCurrentView(view);
    setCurrentSlug(idOrSlug || '');
    if (idOrSlug) {
      window.location.hash = `#${view}/${idOrSlug}`;
    } else {
      window.location.hash = `#${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (item: SavedItem) => {
    setSavedItems((prev) => {
      const exists = prev.some(i => i.id === item.id);
      if (exists) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveSaved = (id: string) => {
    setSavedItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearSaved = () => {
    setSavedItems([]);
  };

  // Resolve active objects
  const selectedFabric = currentSlug ? FABRICS.find(f => f.slug === currentSlug) || FABRICS[0] : FABRICS[0];
  const selectedArticle = currentSlug ? ARTICLES.find(a => a.slug === currentSlug) || ARTICLES[0] : ARTICLES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1C1C] font-sans antialiased selection:bg-[#EBDDCF] selection:text-[#1C1C1C]">
      {/* Editorial Header */}
      <Header
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        savedCount={savedItems.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView 
            onNavigate={navigateTo} 
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        )}

        {currentView === 'fabrics' && (
          <FabricLibraryView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'fabric' && (
          <FabricDetailView
            fabric={selectedFabric}
            onNavigate={navigateTo}
            onSaveBookmark={handleToggleBookmark}
            isSaved={savedItems.some(i => i.id === selectedFabric.id)}
          />
        )}

        {currentView === 'article' && (
          <ArticleView
            article={selectedArticle}
            onNavigate={navigateTo}
            onSaveBookmark={handleToggleBookmark}
            isSaved={savedItems.some(i => i.id === selectedArticle.id)}
          />
        )}

        {(currentView === 'comparisons' || currentView === 'comparison') && (
          <ComparisonView
            initialSlug={currentSlug}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'beginner' && (
          <BeginnerGuideView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'trending' && (
          <TrendingView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'pakistani' && (
          <PakistaniFabricsView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'sustainable' && (
          <SustainableFabricsView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'timeline' && (
          <TimelineView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'care' && (
          <FabricCareView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'glossary' && (
          <GlossaryView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'resources' && (
          <ResourcesDirectoryView
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'about' && (
          <AboutView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'contact' && (
          <ContactView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'blog' && (
          <BlogView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'privacy-policy' && (
          <PrivacyPolicyView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'terms' && (
          <TermsView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'disclaimer' && (
          <DisclaimerView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'cookie-policy' && (
          <CookiePolicyView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'editorial-policy' && (
          <EditorialPolicyView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'corrections-policy' && (
          <CorrectionsPolicyView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'advertising-policy' && (
          <AdvertisingPolicyView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === 'sitemap' && (
          <SitemapView 
            onNavigate={navigateTo} 
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Cookie and Privacy Consent Notice */}
      <CookieConsentBanner onNavigate={navigateTo} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Saved Bookmarks Drawer */}
      <SavedArticlesDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleRemoveSaved}
        onClearAll={handleClearSaved}
        onNavigate={navigateTo}
      />
    </div>
  );
}
