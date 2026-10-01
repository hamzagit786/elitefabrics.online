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
import { GlobalIndustryView } from './components/GlobalIndustryView';
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
import { NotFoundView } from './components/NotFoundView';

// Tools Components
import { ToolsLandingView } from './components/tools/ToolsLandingView';
import { FabricGsmCalculatorView } from './components/tools/FabricGsmCalculatorView';
import { FabricYardageCalculatorView } from './components/tools/FabricYardageCalculatorView';
import { FabricShrinkageCalculatorView } from './components/tools/FabricShrinkageCalculatorView';
import { GsmToOzConverterView } from './components/tools/GsmToOzConverterView';
import { FabricMeasurementConverterView } from './components/tools/FabricMeasurementConverterView';
import { CurtainFabricCalculatorView } from './components/tools/CurtainFabricCalculatorView';
import { UpholsteryFabricCalculatorView } from './components/tools/UpholsteryFabricCalculatorView';
import { QuiltFabricCalculatorView } from './components/tools/QuiltFabricCalculatorView';
import { FabricCostCalculatorView } from './components/tools/FabricCostCalculatorView';
import { YarnCountConverterView } from './components/tools/YarnCountConverterView';
import { FabricFinderQuizView } from './components/tools/FabricFinderQuizView';
import { FabricCareSymbolGuideView } from './components/tools/FabricCareSymbolGuideView';
import { FABRIC_TOOLS } from './data/tools';

import { FABRICS } from './data/fabrics';
import { ARTICLES } from './data/articles';
import { FABRIC_COMPARISONS } from './data/comparisons';
import { updateDocumentSEO } from './utils/seo';

interface ResolvedRoute {
  view: string;
  slug: string;
  hadHash: boolean;
  canonicalPath: string;
}

export function resolveRouteState(pathname: string, hash: string): ResolvedRoute {
  let hadHash = false;
  let raw = hash.replace(/^#\/?/, '');
  if (raw) {
    hadHash = true;
  } else if (pathname && pathname !== '/') {
    raw = pathname.replace(/^\//, '');
  }

  if (!raw) {
    return { view: 'home', slug: '', hadHash, canonicalPath: '/' };
  }

  const parts = raw.split('/');
  const view = parts[0];
  const slug = parts[1] || '';

  // Handle article routes: /articles or /articles/slug or /article/slug
  if (view === 'articles' || view === 'article') {
    if (slug) {
      const articleMatch = ARTICLES.find(a => a.slug === slug);
      if (articleMatch) {
        return {
          view: 'article',
          slug,
          hadHash: hadHash || view === 'article',
          canonicalPath: `/articles/${slug}`
        };
      }
      return {
        view: '404',
        slug,
        hadHash,
        canonicalPath: `/articles/${slug}`
      };
    }
    return {
      view: 'blog',
      slug: '',
      hadHash: hadHash || view === 'article',
      canonicalPath: '/articles'
    };
  }

  // Fabric detail routes: /fabric/slug or /fabric-types/slug or /fabrics/slug
  if (view === 'fabric' || view === 'fabric-types' || view === 'fabrics') {
    const normalizedSlug = slug === 'banarasi' ? 'banarsi' : slug;
    if (normalizedSlug) {
      const fabricMatch = FABRICS.find(f => f.slug === normalizedSlug);
      if (fabricMatch) {
        return {
          view: 'fabric',
          slug: fabricMatch.slug,
          hadHash: hadHash || view !== 'fabric' || slug !== fabricMatch.slug,
          canonicalPath: `/fabric/${fabricMatch.slug}`
        };
      }
      return {
        view: '404',
        slug,
        hadHash,
        canonicalPath: `/fabric/${slug}`
      };
    }
    return {
      view: 'fabrics',
      slug: '',
      hadHash: hadHash || view !== 'fabrics',
      canonicalPath: '/fabrics'
    };
  }

  // Comparison detail routes: /comparison/slug or /comparisons/slug
  if (view === 'comparison' || view === 'comparisons') {
    if (slug) {
      const reversedSlug = slug.includes('-vs-') ? slug.split('-vs-').reverse().join('-vs-') : '';
      const compMatch = FABRIC_COMPARISONS.find(c => c.slug === slug || (reversedSlug && c.slug === reversedSlug));
      if (compMatch) {
        return {
          view: 'comparison',
          slug: compMatch.slug,
          hadHash: hadHash || view !== 'comparison' || slug !== compMatch.slug,
          canonicalPath: `/comparison/${compMatch.slug}`
        };
      }
      return {
        view: '404',
        slug,
        hadHash,
        canonicalPath: `/comparison/${slug}`
      };
    }
    return {
      view: 'comparisons',
      slug: '',
      hadHash: hadHash || view !== 'comparisons',
      canonicalPath: '/comparisons'
    };
  }

  // Tools detail routes: /tools/slug or /tools
  if (view === 'tools') {
    if (slug) {
      const toolMatch = FABRIC_TOOLS.find(t => t.slug === slug);
      if (toolMatch) {
        return {
          view: 'tools',
          slug,
          hadHash,
          canonicalPath: `/tools/${slug}`
        };
      }
      return {
        view: '404',
        slug,
        hadHash,
        canonicalPath: `/tools/${slug}`
      };
    }
    return {
      view: 'tools',
      slug: '',
      hadHash,
      canonicalPath: '/tools'
    };
  }

  // Guide aliases
  if (view === 'guide' || view === 'guides') {
    if (slug) {
      const isArticle = ARTICLES.some(a => a.slug === slug);
      if (isArticle) {
        return {
          view: 'article',
          slug,
          hadHash: true,
          canonicalPath: `/articles/${slug}`
        };
      }
      return {
        view: 'beginner',
        slug,
        hadHash: true,
        canonicalPath: '/beginner'
      };
    }
    return {
      view: 'blog',
      slug: '',
      hadHash: true,
      canonicalPath: '/articles'
    };
  }

  // Direct tool routing aliases like /fabric-gsm-calculator
  const directToolMatch = FABRIC_TOOLS.find(t => t.slug === view);
  if (directToolMatch) {
    return {
      view: 'tools',
      slug: directToolMatch.slug,
      hadHash: true,
      canonicalPath: `/tools/${directToolMatch.slug}`
    };
  }

  const validViews = [
    'home',
    'about',
    'contact',
    'blog',
    'articles',
    'fabrics',
    'fabric',
    'article',
    'comparisons',
    'comparison',
    'beginner',
    'guides',
    'timeline',
    'pakistani',
    'industry',
    'textile-industry',
    'sustainable',
    'glossary',
    'resources',
    'trending',
    'care',
    'tools',
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
    const canonicalView = (view === 'blog' || view === 'articles') ? 'articles' : view;
    return {
      view: (view === 'articles' || view === 'blog') ? 'blog' : view,
      slug,
      hadHash,
      canonicalPath: slug ? `/${canonicalView}/${slug}` : `/${canonicalView}`
    };
  }

  return {
    view: '404',
    slug: raw,
    hadHash,
    canonicalPath: `/${raw}`
  };
}

export default function App() {
  const [currentView, setCurrentView] = useState<string>(() => {
    if (typeof window === 'undefined') return 'home';
    return resolveRouteState(window.location.pathname, window.location.hash).view;
  });
  const [currentSlug, setCurrentSlug] = useState<string>(() => {
    if (typeof window === 'undefined') return '';
    return resolveRouteState(window.location.pathname, window.location.hash).slug;
  });
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

  // Handle clean HTML5 URL routing and upgrade legacy hash navigation
  const parseRoute = () => {
    if (typeof window === 'undefined') return;
    const resolved = resolveRouteState(window.location.pathname, window.location.hash);
    setCurrentView(resolved.view);
    setCurrentSlug(resolved.slug);
    if (resolved.hadHash) {
      window.history.replaceState(null, '', resolved.canonicalPath);
    }
  };

  useEffect(() => {
    parseRoute();
    window.addEventListener('popstate', parseRoute);
    window.addEventListener('hashchange', parseRoute);
    return () => {
      window.removeEventListener('popstate', parseRoute);
      window.removeEventListener('hashchange', parseRoute);
    };
  }, []);

  // Update Document Meta Tags, Canonical Links, and Structured Data (JSON-LD)
  useEffect(() => {
    const baseUrl = 'https://elitefabrics.online';

    if (currentView === 'home') {
      updateDocumentSEO({
        title: 'Fabric Types Guide & Textile Library | Elite Fabrics',
        description: 'Explore our fabric types guide, textile guide, and fabric information library. Master material comparisons, weave structures, and garment care instructions.',
        canonicalUrl: `${baseUrl}/`,
        schema: [
          {
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            'name': 'Elite Fabrics',
            'url': `${baseUrl}/`,
            'description': 'Explore our fabric types guide, textile guide, and fabric information library. Master material comparisons, weave structures, and garment care instructions.',
            'publisher': { '@id': `${baseUrl}/#organization` },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': `${baseUrl}/articles?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            },
            'inLanguage': 'en-US'
          },
          {
            '@type': 'Organization',
            '@id': `${baseUrl}/#organization`,
            'name': 'Elite Fabrics',
            'url': `${baseUrl}/`,
            'logo': `${baseUrl}/favicon.svg`,
            'description': 'An independent, non-commercial fabric and textile information website providing practical guides on fibers, weaves, and garment care.'
          }
        ]
      });
    } else if (currentView === 'fabric' && currentSlug) {
      const f = FABRICS.find(item => item.slug === currentSlug);
      if (f) {
        const pageUrl = `${baseUrl}/fabric/${f.slug}`;
        const schemas: any[] = [
          {
            '@type': 'TechArticle',
            'headline': `${f.name} Fabric Guide: Characteristics, Uses & Care`,
            'description': f.whatIsIt || f.description || `Comprehensive guide to ${f.name} fabric.`,
            'author': { '@type': 'Organization', 'name': 'Elite Fabrics Editorial Team' },
            'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` },
            'mainEntityOfPage': pageUrl
          },
          {
            '@type': 'DefinedTerm',
            '@id': `${pageUrl}#term`,
            'name': `${f.name} Fabric`,
            'description': f.whatIsIt || f.description || `Technical and structural guide to ${f.name} fabric.`,
            'inDefinedTermSet': {
              '@type': 'DefinedTermSet',
              'name': 'Elite Fabrics Textile Library',
              'url': `${baseUrl}/fabrics`
            }
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
              { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Library', 'item': `${baseUrl}/fabrics` },
              { '@type': 'ListItem', 'position': 3, 'name': f.name, 'item': pageUrl }
            ]
          }
        ];

        // Add FAQ schema ONLY if actual visible FAQs exist on this fabric
        if (f.faqs && f.faqs.length > 0) {
          schemas.push({
            '@type': 'FAQPage',
            'mainEntity': f.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          });
        }

        updateDocumentSEO({
          title: `${f.name} Fabric Guide | Elite Fabrics`,
          description: `Comprehensive ${f.name.toLowerCase()} fabric guide. Learn about ${f.name.toLowerCase()} fiber properties, breathability, durability, sewing uses, and garment care instructions.`,
          canonicalUrl: pageUrl,
          ogType: 'article',
          schema: schemas
        });
      }
    } else if (currentView === 'article' && currentSlug) {
      const a = ARTICLES.find(item => item.slug === currentSlug);
      if (a) {
        const pageUrl = `${baseUrl}/articles/${a.slug}`;
        const schemas: any[] = [
          {
            '@type': 'Article',
            'headline': a.title,
            'description': a.metaDescription || a.excerpt,
            'author': { '@type': 'Person', 'name': a.author.name },
            'datePublished': a.publishDate,
            'dateModified': a.updatedDate,
            'image': a.featuredImage,
            'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` },
            'mainEntityOfPage': pageUrl
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
              { '@type': 'ListItem', 'position': 2, 'name': 'Articles', 'item': `${baseUrl}/articles` },
              { '@type': 'ListItem', 'position': 3, 'name': a.title, 'item': pageUrl }
            ]
          }
        ];

        // Add FAQ schema ONLY if genuine visible FAQs exist
        if (a.faqs && a.faqs.length > 0) {
          schemas.push({
            '@type': 'FAQPage',
            'mainEntity': a.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          });
        }

        updateDocumentSEO({
          title: a.seoTitle || `${a.title} | Elite Fabrics`,
          description: a.metaDescription || a.excerpt,
          canonicalUrl: pageUrl,
          ogType: 'article',
          ogImage: a.featuredImage,
          publishedTime: a.publishDate,
          modifiedTime: a.updatedDate,
          authorName: a.author.name,
          schema: schemas
        });
      }
    } else if (currentView === 'comparison' || currentView === 'comparisons') {
      const c = currentSlug ? FABRIC_COMPARISONS.find(item => item.slug === currentSlug) : null;
      if (c) {
        const pageUrl = `${baseUrl}/comparison/${c.slug}`;
        const schemas: any[] = [
          {
            '@type': 'Article',
            'headline': c.title,
            'description': c.overview,
            'author': { '@type': 'Organization', 'name': c.author || 'Elite Fabrics Team' },
            'datePublished': c.publishDate || '2026-01-01',
            'dateModified': c.updatedDate || '2026-09-01',
            'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` },
            'mainEntityOfPage': pageUrl
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
              { '@type': 'ListItem', 'position': 2, 'name': 'Comparisons', 'item': `${baseUrl}/comparisons` },
              { '@type': 'ListItem', 'position': 3, 'name': c.title, 'item': pageUrl }
            ]
          }
        ];

        if (c.faqs && c.faqs.length > 0) {
          schemas.push({
            '@type': 'FAQPage',
            'mainEntity': c.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          });
        }

        updateDocumentSEO({
          title: `${c.title} | Elite Fabrics Comparisons`,
          description: c.overview.slice(0, 160),
          canonicalUrl: pageUrl,
          ogType: 'article',
          schema: schemas
        });
      } else {
        updateDocumentSEO({
          title: 'Fabric Comparisons: Side-by-Side Material Analysis | Elite Fabrics',
          description: 'Factual, balanced fabric comparisons: Cotton vs Linen, Silk vs Satin, Rayon vs Viscose, Wool vs Fleece, and more.',
          canonicalUrl: `${baseUrl}/comparisons`
        });
      }
    } else if (currentView === 'industry' || currentView === 'textile-industry') {
      updateDocumentSEO({
        title: 'Global Textile Industry Guide: Manufacturing Hubs & Trade | Elite Fabrics',
        description: 'Educational overview of major textile manufacturing nations: Pakistan, India, China, Bangladesh, Turkey, United States, United Kingdom, and Europe.',
        canonicalUrl: `${baseUrl}/industry`,
        schema: [
          {
            '@type': 'CollectionPage',
            'name': 'Global Textile Industry Guide',
            'description': 'Educational profiles of international textile manufacturing nations and regional clusters.',
            'url': `${baseUrl}/industry`
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
              { '@type': 'ListItem', 'position': 2, 'name': 'Global Industry', 'item': `${baseUrl}/industry` }
            ]
          }
        ]
      });
    } else if (currentView === 'pakistani') {
      updateDocumentSEO({
        title: 'Pakistani Fabrics & South Asian Textile Heritage | Elite Fabrics',
        description: 'Explore 4,500 years of Indus Valley textile history, from high-count summer lawn and pit-loom khaddar to Sindhi Ajrak block prints.',
        canonicalUrl: `${baseUrl}/pakistani`
      });
    } else if (currentView === 'sustainable') {
      updateDocumentSEO({
        title: 'Sustainable Fabrics & Environmental Lifecycle Guide | Elite Fabrics',
        description: 'Independent evaluation of sustainable textiles: organic cotton, linen, hemp, closed-loop lyocell, and microplastic impacts.',
        canonicalUrl: `${baseUrl}/sustainable`
      });
    } else if (currentView === 'timeline') {
      updateDocumentSEO({
        title: 'Global Textile History Timeline: 30,000 BCE to 2026 | Elite Fabrics',
        description: 'An interactive historical journey across human textile civilization: ancient flax, the Silk Road, the Industrial Revolution, and synthetic polymers.',
        canonicalUrl: `${baseUrl}/timeline`
      });
    } else if (currentView === 'care') {
      updateDocumentSEO({
        title: 'Practical Fabric Care, Washing & Stain Removal Guide | Elite Fabrics',
        description: 'Care instructions for every textile: temperature guidelines, machine cycles, drying methods, and safe iron settings.',
        canonicalUrl: `${baseUrl}/care`
      });
    } else if (currentView === 'glossary') {
      updateDocumentSEO({
        title: 'A-Z Fabric & Textile Glossary: Terms & Definitions | Elite Fabrics',
        description: 'Clear, plain-English definitions for textile terms, weaving structures, yarn counts, and fabric finishing processes.',
        canonicalUrl: `${baseUrl}/glossary`
      });
    } else if (currentView === 'fabrics') {
      updateDocumentSEO({
        title: 'Fabric Library: Complete Textile Directory & Specs | Elite Fabrics',
        description: 'Browse our complete catalog of natural, synthetic, traditional, and regenerated fabrics with full physical and care specs.',
        canonicalUrl: `${baseUrl}/fabrics`
      });
    } else if (currentView === 'beginner') {
      updateDocumentSEO({
        title: 'Fabric Fundamentals: Beginner Guide to Textile Science | Elite Fabrics',
        description: 'Learn fibers vs weaves vs knits, how to read fabric labels, and how to identify fabrics using simple burn tests.',
        canonicalUrl: `${baseUrl}/beginner`
      });
    } else if (currentView === 'blog') {
      updateDocumentSEO({
        title: 'The Elite Fabrics Blog: In-Depth Textile Articles & Guides',
        description: 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
        canonicalUrl: `${baseUrl}/articles`
      });
    } else if (currentView === 'about') {
      updateDocumentSEO({
        title: 'About Us | Elite Fabrics – Independent Fabric & Textile Resource',
        description: 'Learn about Elite Fabrics, our non-commercial educational mission, and our commitment to factual textile information.',
        canonicalUrl: `${baseUrl}/about`
      });
    } else if (currentView === 'contact') {
      updateDocumentSEO({
        title: 'Contact Us | Elite Fabrics – Questions & Inquiries',
        description: 'Get in touch with the Elite Fabrics team for inquiries, corrections, or feedback.',
        canonicalUrl: `${baseUrl}/contact`
      });
    } else if (currentView === 'sitemap') {
      updateDocumentSEO({
        title: 'HTML Sitemap | Complete Directory of Elite Fabrics',
        description: 'Complete navigational index of all fabric entries, comparisons, guides, and policies on Elite Fabrics.',
        canonicalUrl: `${baseUrl}/sitemap`
      });
    } else if (currentView === 'trending') {
      updateDocumentSEO({
        title: 'Trending Fabrics 2026: Modern Clothing & Textile Movements | Elite Fabrics',
        description: 'Discover popular fabrics for 2026: sustainable plant fibers, heritage weaves, natural cottons, and high-performance textiles.',
        canonicalUrl: `${baseUrl}/trending`
      });
    } else if (currentView === 'resources') {
      updateDocumentSEO({
        title: 'Textile Industry Directory & Educational Resources | Elite Fabrics',
        description: 'Curated directory of textile research institutions, fabric standards organizations, and educational archives.',
        canonicalUrl: `${baseUrl}/resources`
      });
    } else if (currentView === 'privacy-policy') {
      updateDocumentSEO({
        title: 'Privacy Policy | Elite Fabrics',
        description: 'Elite Fabrics privacy policy detailing our data protection standards, cookie usage, and commitment to visitor privacy.',
        canonicalUrl: `${baseUrl}/privacy-policy`
      });
    } else if (currentView === 'terms') {
      updateDocumentSEO({
        title: 'Terms and Conditions | Elite Fabrics',
        description: 'Terms and conditions governing use of the Elite Fabrics independent fabric educational platform and resources.',
        canonicalUrl: `${baseUrl}/terms`
      });
    } else if (currentView === 'disclaimer') {
      updateDocumentSEO({
        title: 'Website Disclaimer | Elite Fabrics',
        description: 'Educational disclaimer regarding fabric specifications, care instructions, and material evaluations on Elite Fabrics.',
        canonicalUrl: `${baseUrl}/disclaimer`
      });
    } else if (currentView === 'cookie-policy') {
      updateDocumentSEO({
        title: 'Cookie Policy | Elite Fabrics',
        description: 'Information about cookie technologies used on Elite Fabrics for site analytics and user preference persistence.',
        canonicalUrl: `${baseUrl}/cookie-policy`
      });
    } else if (currentView === 'editorial-policy') {
      updateDocumentSEO({
        title: 'Editorial Policy & Standards | Elite Fabrics',
        description: 'Our commitment to independent, non-commercial, fact-checked textile journalism and educational accuracy.',
        canonicalUrl: `${baseUrl}/editorial-policy`
      });
    } else if (currentView === 'corrections-policy') {
      updateDocumentSEO({
        title: 'Corrections & Fact-Checking Policy | Elite Fabrics',
        description: 'How Elite Fabrics handles factual corrections, updates to textile data, and reader verification inquiries.',
        canonicalUrl: `${baseUrl}/corrections-policy`
      });
    } else if (currentView === 'advertising-policy') {
      updateDocumentSEO({
        title: 'Advertising & Sponsorship Policy | Elite Fabrics',
        description: 'Clear guidelines regarding advertising standards, sponsor independence, and our non-commercial educational integrity.',
        canonicalUrl: `${baseUrl}/advertising-policy`
      });
    } else if (currentView === 'tools') {
      if (currentSlug) {
        const tool = FABRIC_TOOLS.find(t => t.slug === currentSlug);
        if (tool) {
          const pageUrl = `${baseUrl}/tools/${tool.slug}`;
          const schemas: any[] = [
            {
              '@type': ['WebApplication', 'SoftwareApplication'],
              '@id': `${pageUrl}#webapp`,
              'name': tool.title,
              'headline': tool.h1,
              'applicationCategory': 'UtilitiesApplication',
              'operatingSystem': 'All',
              'description': tool.metaDescription,
              'url': pageUrl,
              'offers': {
                '@type': 'Offer',
                'price': '0',
                'priceCurrency': 'USD'
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'Elite Fabrics',
                'url': `${baseUrl}/`
              }
            },
            {
              '@type': 'WebPage',
              '@id': `${pageUrl}#webpage`,
              'name': tool.title,
              'description': tool.metaDescription,
              'url': pageUrl,
              'publisher': {
                '@type': 'Organization',
                'name': 'Elite Fabrics',
                'url': `${baseUrl}/`
              }
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${pageUrl}#breadcrumbs`,
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
                { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Tools', 'item': `${baseUrl}/tools` },
                { '@type': 'ListItem', 'position': 3, 'name': tool.title, 'item': pageUrl }
              ]
            }
          ];

          if (tool.faqs && tool.faqs.length > 0) {
            schemas.push({
              '@type': 'FAQPage',
              '@id': `${pageUrl}#faq`,
              'mainEntity': tool.faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': faq.answer
                }
              }))
            });
          }

          updateDocumentSEO({
            title: tool.seoTitle,
            description: tool.metaDescription,
            canonicalUrl: pageUrl,
            schema: schemas
          });
        }
      } else {
        const pageUrl = `${baseUrl}/tools`;
        updateDocumentSEO({
          title: 'Free Fabric & Textile Calculators | Elite Fabrics',
          description: 'Free online fabric tools and calculators for sewists, quilters, designers, and textile students. Calculate fabric GSM, yardage, shrinkage rates, and conversions.',
          canonicalUrl: pageUrl,
          schema: [
            {
              '@type': 'WebPage',
              '@id': `${pageUrl}#webpage`,
              'name': 'Interactive Fabric Tools & Calculators',
              'description': 'Free online fabric calculators and textile converters.',
              'url': pageUrl,
              'publisher': {
                '@type': 'Organization',
                'name': 'Elite Fabrics',
                'url': `${baseUrl}/`
              }
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${pageUrl}#breadcrumbs`,
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
                { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Tools', 'item': pageUrl }
              ]
            }
          ]
        });
      }
    } else if (currentView === '404') {
      updateDocumentSEO({
        title: 'Page Not Found (404) | Elite Fabrics',
        description: 'The fabric guide or resource you requested could not be found. Explore our Fabric Library, textile calculators, or blog guides.',
        canonicalUrl: `${baseUrl}/`,
        noindex: true
      });
    } else {
      updateDocumentSEO({
        title: 'Fabric Types Guide & Textile Library | Elite Fabrics',
        description: 'Explore our fabric types guide, textile guide, and fabric information library. Master material comparisons, weave structures, and garment care instructions.',
        canonicalUrl: `${baseUrl}/`
      });
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
    let targetRoute = view;
    if (view === 'article' || view === 'blog') {
      targetRoute = 'articles';
    }

    const internalView = view === 'articles' && idOrSlug 
      ? 'article' 
      : (view === 'articles' && !idOrSlug ? 'blog' : (view === 'blog' ? 'blog' : view));

    setCurrentView(internalView);
    setCurrentSlug(idOrSlug || '');

    const newPath = targetRoute === 'home'
      ? '/'
      : (idOrSlug ? `/${targetRoute}/${idOrSlug}` : `/${targetRoute}`);

    if (window.location.pathname !== newPath || window.location.hash) {
      window.history.pushState(null, '', newPath);
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

        {(currentView === 'industry' || currentView === 'textile-industry') && (
          <GlobalIndustryView
            initialCountrySlug={currentSlug}
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

        {(currentView === 'blog' || currentView === 'articles') && (
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

        {currentView === 'tools' && (
          <>
            {currentSlug === 'fabric-gsm-calculator' ? (
              <FabricGsmCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-yardage-calculator' ? (
              <FabricYardageCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-shrinkage-calculator' ? (
              <FabricShrinkageCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'gsm-to-oz-converter' ? (
              <GsmToOzConverterView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-measurement-converter' ? (
              <FabricMeasurementConverterView onNavigate={navigateTo} />
            ) : currentSlug === 'curtain-fabric-calculator' ? (
              <CurtainFabricCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'upholstery-fabric-calculator' ? (
              <UpholsteryFabricCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'quilt-fabric-calculator' ? (
              <QuiltFabricCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-cost-calculator' ? (
              <FabricCostCalculatorView onNavigate={navigateTo} />
            ) : currentSlug === 'yarn-count-converter' ? (
              <YarnCountConverterView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-finder-quiz' ? (
              <FabricFinderQuizView onNavigate={navigateTo} />
            ) : currentSlug === 'fabric-care-symbol-guide' ? (
              <FabricCareSymbolGuideView onNavigate={navigateTo} />
            ) : (
              <ToolsLandingView onNavigate={navigateTo} />
            )}
          </>
        )}

        {(currentView === 'fabric-finder' || currentView === 'quiz') && (
          <FabricFinderQuizView onNavigate={navigateTo} />
        )}

        {(currentView === 'care-symbols' || currentView === 'care-symbol-guide') && (
          <FabricCareSymbolGuideView onNavigate={navigateTo} />
        )}

        {currentView === 'sitemap' && (
          <SitemapView 
            onNavigate={navigateTo} 
          />
        )}

        {currentView === '404' && (
          <NotFoundView 
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
