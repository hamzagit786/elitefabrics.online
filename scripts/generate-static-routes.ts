import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ARTICLES } from '../src/data/articles';
import { FABRICS } from '../src/data/fabrics';
import { FABRIC_COMPARISONS } from '../src/data/comparisons';
import { FABRIC_TOOLS } from '../src/data/tools';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const baseUrl = 'https://elitefabrics.online';

interface RouteDefinition {
  route: string;
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  schema?: any[];
  contentSummary?: string;
  contentHtml?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

function escapeHtml(str: any): string {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') {
    if (typeof str === 'object') {
      try {
        return Object.values(str).filter(v => typeof v === 'string').join('. ');
      } catch {
        return '';
      }
    }
    return String(str);
  }
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const routes: RouteDefinition[] = [
  // 1. Core Hub & Landing Pages
  {
    route: '',
    title: 'Elite Fabrics – Fabric & Textile Information',
    description: 'The premier encyclopedia for textile knowledge, fabric science, garment care, and free textile calculation tools. Explore 38+ comprehensive fabric profiles.',
    h1: 'The Authority on Fabric, Fibers & Textile Knowledge',
    canonicalUrl: `${baseUrl}/`,
    contentSummary: 'Elite Fabrics is an independent, non-commercial textile resource offering deep technical insights into fabric construction, fiber properties, heritage South Asian weaves, and sewing calculators.',
    contentHtml: `
      <div class="prose max-w-none text-[#33312E] leading-relaxed mb-8">
        <p class="text-xl text-[#444] mb-6">Welcome to <strong>Elite Fabrics</strong>, the independent fabric and textile knowledge database. We bridge the gap between fiber science, artisanal craftsmanship, and everyday garment making.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="p-6 bg-white rounded-lg border border-[#E6E1DA]">
            <h2 class="text-xl font-serif font-bold text-[#1C1C1C] mb-2"><a href="/fabrics" class="text-[#9E472A] hover:underline">Fabric Library (38+ Profiles)</a></h2>
            <p class="text-sm text-[#555]">Comprehensive encyclopedic entries on cotton, silk, linen, wool, denim, rayon, and heritage Pakistani fabrics like Lawn, Khaddar, and Karandi.</p>
          </div>
          <div class="p-6 bg-white rounded-lg border border-[#E6E1DA]">
            <h2 class="text-xl font-serif font-bold text-[#1C1C1C] mb-2"><a href="/tools" class="text-[#9E472A] hover:underline">Interactive Textile Tools</a></h2>
            <p class="text-sm text-[#555]">Free online GSM calculators, yardage estimators, shrinkage calculators, and fabric conversion utilities for sewists and textile professionals.</p>
          </div>
          <div class="p-6 bg-white rounded-lg border border-[#E6E1DA]">
            <h2 class="text-xl font-serif font-bold text-[#1C1C1C] mb-2"><a href="/articles" class="text-[#9E472A] hover:underline">In-Depth Textile Guides</a></h2>
            <p class="text-sm text-[#555]">69+ researched articles covering fiber science, weave structures, sustainable innovations, and garment care instructions.</p>
          </div>
          <div class="p-6 bg-white rounded-lg border border-[#E6E1DA]">
            <h2 class="text-xl font-serif font-bold text-[#1C1C1C] mb-2"><a href="/comparisons" class="text-[#9E472A] hover:underline">Fabric Comparisons</a></h2>
            <p class="text-sm text-[#555]">Detailed side-by-side comparisons: Cotton vs. Linen, Silk vs. Satin, Rayon vs. Viscose, and more.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    route: 'articles',
    title: 'The Elite Fabrics Blog: In-Depth Textile Articles & Guides',
    description: 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
    h1: 'Textile Knowledge Hub & Editorial Articles',
    canonicalUrl: `${baseUrl}/articles`,
    schema: [
      {
        '@type': 'CollectionPage',
        'name': 'Elite Fabrics Textile Articles & Guides',
        'description': 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
        'url': `${baseUrl}/articles`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Articles', 'item': `${baseUrl}/articles` }
        ]
      }
    ],
    contentSummary: 'Browse complete collection of educational textile guides, fiber science research, fabric comparisons, and garment care instructions.'
  },
  {
    route: 'tools',
    title: 'Free Fabric & Textile Calculators | Elite Fabrics',
    description: 'Free online fabric tools and calculators for sewists, quilters, designers, and textile students. Calculate fabric GSM, yardage, shrinkage rates, and conversions.',
    h1: 'Interactive Fabric Calculators & Textile Tools',
    canonicalUrl: `${baseUrl}/tools`,
    schema: [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/tools#webpage`,
        'name': 'Interactive Fabric Tools & Calculators',
        'description': 'Free online fabric calculators and textile converters.',
        'url': `${baseUrl}/tools`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/tools#breadcrumbs`,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Tools', 'item': `${baseUrl}/tools` }
        ]
      }
    ],
    contentSummary: 'Access free online calculators for fabric GSM, yardage estimation, shrinkage rates, GSM to oz/yd² conversion, yarn count, and fabric care symbols.'
  },
  {
    route: 'fabrics',
    title: 'Fabric Library: Complete Textile Directory & Specs | Elite Fabrics',
    description: 'Browse our complete catalog of natural, synthetic, traditional, and regenerated fabrics with full physical and care specs.',
    h1: 'The Comprehensive Fabric Library',
    canonicalUrl: `${baseUrl}/fabrics`,
    schema: [
      {
        '@type': 'CollectionPage',
        'name': 'Fabric Library: Complete Textile Directory & Specs',
        'description': 'Browse our complete catalog of natural, synthetic, traditional, and regenerated fabrics with full physical and care specs.',
        'url': `${baseUrl}/fabrics`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Library', 'item': `${baseUrl}/fabrics` }
        ]
      }
    ],
    contentSummary: 'Explore detailed technical profiles of 38+ natural, synthetic, semi-synthetic, and heritage fabrics with breathability, drape, and care specifications.'
  },
  {
    route: 'comparisons',
    title: 'Fabric Comparisons: Side-by-Side Material Analysis | Elite Fabrics',
    description: 'Factual, balanced fabric comparisons: Cotton vs Linen, Silk vs Satin, Rayon vs Viscose, Wool vs Fleece, and more.',
    h1: 'Side-by-Side Fabric Comparisons',
    canonicalUrl: `${baseUrl}/comparisons`,
    schema: [
      {
        '@type': 'CollectionPage',
        'name': 'Fabric Comparisons: Side-by-Side Material Analysis',
        'description': 'Factual, balanced fabric comparisons: Cotton vs Linen, Silk vs Satin, Rayon vs Viscose, Wool vs Fleece, and more.',
        'url': `${baseUrl}/comparisons`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Comparisons', 'item': `${baseUrl}/comparisons` }
        ]
      }
    ],
    contentSummary: 'Detailed head-to-head comparisons analyzing breathability, durability, moisture absorption, price, and environmental impact.'
  },
  {
    route: 'beginner',
    title: 'Fabric Fundamentals: Beginner Guide to Textile Science | Elite Fabrics',
    description: 'Learn fibers vs weaves vs knits, how to read fabric labels, and how to identify fabrics using simple burn tests.',
    h1: 'Beginner Fabric & Textile Fundamentals',
    canonicalUrl: `${baseUrl}/beginner`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Fabric Fundamentals: Beginner Guide to Textile Science',
        'description': 'Learn fibers vs weaves vs knits, how to read fabric labels, and how to identify fabrics using simple burn tests.',
        'url': `${baseUrl}/beginner`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Beginner Guide', 'item': `${baseUrl}/beginner` }
        ]
      }
    ],
    contentSummary: 'Master fundamental textile terms: natural vs synthetic fibers, plain vs twill weaves, knit structures, and basic identification techniques.'
  },
  {
    route: 'care',
    title: 'Practical Fabric Care, Washing & Stain Removal Guide | Elite Fabrics',
    description: 'Care instructions for every textile: temperature guidelines, machine cycles, drying methods, and safe iron settings.',
    h1: 'Fabric Care & Laundry Science',
    canonicalUrl: `${baseUrl}/care`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Practical Fabric Care, Washing & Stain Removal Guide',
        'description': 'Care instructions for every textile: temperature guidelines, machine cycles, drying methods, and safe iron settings.',
        'url': `${baseUrl}/care`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Care', 'item': `${baseUrl}/care` }
        ]
      }
    ],
    contentSummary: 'Universal care guidelines: temperature controls, detergents, drying precautions, and fiber-specific laundry science.'
  },
  {
    route: 'pakistani',
    title: 'Pakistani Fabrics & South Asian Textile Heritage | Elite Fabrics',
    description: 'Explore 4,500 years of Indus Valley textile history, from high-count summer lawn and pit-loom khaddar to Sindhi Ajrak block prints.',
    h1: 'Pakistani Fabrics & Heritage Textiles',
    canonicalUrl: `${baseUrl}/pakistani`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Pakistani Fabrics & South Asian Textile Heritage',
        'description': 'Explore 4,500 years of Indus Valley textile history, from high-count summer lawn and pit-loom khaddar to Sindhi Ajrak block prints.',
        'url': `${baseUrl}/pakistani`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Pakistani Fabrics', 'item': `${baseUrl}/pakistani` }
        ]
      }
    ],
    contentSummary: 'Documenting the rich textile traditions of Pakistan: artisan handloom khaddar, lightweight summer lawn, winter karandi, and block-printed Ajrak.'
  },
  {
    route: 'sustainable',
    title: 'Sustainable Fabrics & Environmental Lifecycle Guide | Elite Fabrics',
    description: 'Independent evaluation of sustainable textiles: organic cotton, linen, hemp, closed-loop lyocell, and microplastic impacts.',
    h1: 'Sustainable Textiles & Environmental Impact',
    canonicalUrl: `${baseUrl}/sustainable`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Sustainable Fabrics & Environmental Lifecycle Guide',
        'description': 'Independent evaluation of sustainable textiles: organic cotton, linen, hemp, closed-loop lyocell, and microplastic impacts.',
        'url': `${baseUrl}/sustainable`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Sustainable Textiles', 'item': `${baseUrl}/sustainable` }
        ]
      }
    ],
    contentSummary: 'Objective analysis of fiber sustainability: water footprints, pesticide usage, chemical recycling, and closed-loop manufacturing.'
  },
  {
    route: 'industry',
    title: 'Global Textile Industry Guide: Manufacturing Hubs & Trade | Elite Fabrics',
    description: 'Educational overview of major textile manufacturing nations: Pakistan, India, China, Bangladesh, Turkey, United States, United Kingdom, and Europe.',
    h1: 'Global Textile Industry & Manufacturing Hubs',
    canonicalUrl: `${baseUrl}/industry`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Global Textile Industry Guide: Manufacturing Hubs & Trade',
        'description': 'Educational overview of major textile manufacturing nations: Pakistan, India, China, Bangladesh, Turkey, United States, United Kingdom, and Europe.',
        'url': `${baseUrl}/industry`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Textile Industry', 'item': `${baseUrl}/industry` }
        ]
      }
    ],
    contentSummary: 'Analysis of major global textile exporters, mill innovations, supply chains, trade corridors, and industrial fabric production.'
  },
  {
    route: 'timeline',
    title: 'Global Textile History Timeline: 30,000 BCE to 2026 | Elite Fabrics',
    description: 'An interactive historical journey across human textile civilization: ancient flax, the Silk Road, the Industrial Revolution, and synthetic polymers.',
    h1: 'Chronological History of Human Textiles',
    canonicalUrl: `${baseUrl}/timeline`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Global Textile History Timeline: 30,000 BCE to 2026',
        'description': 'An interactive historical journey across human textile civilization: ancient flax, the Silk Road, the Industrial Revolution, and synthetic polymers.',
        'url': `${baseUrl}/timeline`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Timeline', 'item': `${baseUrl}/timeline` }
        ]
      }
    ],
    contentSummary: 'From prehistoric flax cords in Georgia to modern bio-engineered fibers: the complete chronological milestones of weaving and fiber discovery.'
  },
  {
    route: 'glossary',
    title: 'A-Z Fabric & Textile Glossary: Terms & Definitions | Elite Fabrics',
    description: 'Clear, plain-English definitions for textile terms, weaving structures, yarn counts, and fabric finishing processes.',
    h1: 'Textile Terminology & Fiber Glossary',
    canonicalUrl: `${baseUrl}/glossary`,
    schema: [
      {
        '@type': 'CollectionPage',
        'name': 'A-Z Fabric & Textile Glossary',
        'description': 'Clear, plain-English definitions for textile terms, weaving structures, yarn counts, and fabric finishing processes.',
        'url': `${baseUrl}/glossary`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Glossary', 'item': `${baseUrl}/glossary` }
        ]
      }
    ],
    contentSummary: 'Over 100 comprehensive textile definitions: warp, weft, selvedge, GSM, denier, mercerization, sanforization, jacquard, and fiber classifications.'
  },
  {
    route: 'trending',
    title: 'Trending Fabrics 2026: Modern Clothing & Textile Movements | Elite Fabrics',
    description: 'Discover popular fabrics for 2026: sustainable plant fibers, heritage weaves, natural cottons, and high-performance textiles.',
    h1: 'Trending Fabrics & Contemporary Textile Innovations',
    canonicalUrl: `${baseUrl}/trending`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Trending Fabrics 2026: Modern Clothing & Textile Movements',
        'description': 'Discover popular fabrics for 2026: sustainable plant fibers, heritage weaves, natural cottons, and high-performance textiles.',
        'url': `${baseUrl}/trending`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Trending Fabrics', 'item': `${baseUrl}/trending` }
        ]
      }
    ],
    contentSummary: 'Emerging fabric movements: low-impact cellulosic fibers, breathable summer cottons, functional technical blends, and artisan heritage textiles.'
  },
  {
    route: 'about',
    title: 'About Us | Elite Fabrics – Independent Fabric & Textile Resource',
    description: 'Learn about Elite Fabrics, our non-commercial educational mission, and our commitment to factual textile information.',
    h1: 'About Elite Fabrics',
    canonicalUrl: `${baseUrl}/about`,
    schema: [
      {
        '@type': 'AboutPage',
        'name': 'About Us | Elite Fabrics',
        'description': 'Learn about Elite Fabrics, our non-commercial educational mission, and our commitment to factual textile information.',
        'url': `${baseUrl}/about`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'About Us', 'item': `${baseUrl}/about` }
        ]
      }
    ],
    contentSummary: 'Elite Fabrics is an independent, non-commercial digital reference dedicated to fiber science, textile history, sewing guides, and educational tools.'
  },
  {
    route: 'contact',
    title: 'Contact Us | Elite Fabrics – Questions & Inquiries',
    description: 'Get in touch with the Elite Fabrics team for inquiries, corrections, or feedback.',
    h1: 'Contact Our Editorial Team',
    canonicalUrl: `${baseUrl}/contact`,
    schema: [
      {
        '@type': 'ContactPage',
        'name': 'Contact Us | Elite Fabrics',
        'description': 'Get in touch with the Elite Fabrics team for inquiries, corrections, or feedback.',
        'url': `${baseUrl}/contact`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': `${baseUrl}/contact` }
        ]
      }
    ],
    contentSummary: 'Reach out to our textile researchers and editorial staff with feedback, research inquiries, or factual corrections.'
  },
  {
    route: 'editorial-policy',
    title: 'Editorial Policy & Standards | Elite Fabrics',
    description: 'Our commitment to independent, non-commercial, fact-checked textile journalism and educational accuracy.',
    h1: 'Editorial Standards & Fact-Checking Policy',
    canonicalUrl: `${baseUrl}/editorial-policy`,
    schema: [
      {
        '@type': 'WebPage',
        'name': 'Editorial Standards & Fact-Checking Policy',
        'description': 'Our commitment to independent, non-commercial, fact-checked textile journalism and educational accuracy.',
        'url': `${baseUrl}/editorial-policy`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Editorial Policy', 'item': `${baseUrl}/editorial-policy` }
        ]
      }
    ],
    contentSummary: 'Learn about our editorial integrity, sourcing standards, non-commercial independence, and scientific verification protocols.'
  },
  {
    route: 'resources',
    title: 'Textile Industry Directory & Educational Resources | Elite Fabrics',
    description: 'Curated directory of textile research institutions, fabric standards organizations, and educational archives.',
    h1: 'Educational Resources & Industry Directory',
    canonicalUrl: `${baseUrl}/resources`,
    schema: [
      {
        '@type': 'CollectionPage',
        'name': 'Textile Industry Directory & Educational Resources',
        'description': 'Curated directory of textile research institutions, fabric standards organizations, and educational archives.',
        'url': `${baseUrl}/resources`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
          { '@type': 'ListItem', 'position': 2, 'name': 'Resources', 'item': `${baseUrl}/resources` }
        ]
      }
    ],
    contentSummary: 'Directory of international textile testing authorities, ISO textile committees, ASTM fiber standards, and museum textile collections.'
  },
  {
    route: 'privacy-policy',
    title: 'Privacy Policy | Elite Fabrics',
    description: 'Elite Fabrics privacy policy detailing our data protection standards, cookie usage, and commitment to visitor privacy.',
    h1: 'Privacy Policy',
    canonicalUrl: `${baseUrl}/privacy-policy`
  },
  {
    route: 'terms',
    title: 'Terms and Conditions | Elite Fabrics',
    description: 'Terms and conditions governing use of the Elite Fabrics independent fabric educational platform and resources.',
    h1: 'Terms and Conditions',
    canonicalUrl: `${baseUrl}/terms`
  },
  {
    route: 'disclaimer',
    title: 'Website Disclaimer | Elite Fabrics',
    description: 'Educational disclaimer regarding fabric specifications, care instructions, and material evaluations on Elite Fabrics.',
    h1: 'Educational Disclaimer',
    canonicalUrl: `${baseUrl}/disclaimer`
  },
  {
    route: 'cookie-policy',
    title: 'Cookie Policy | Elite Fabrics',
    description: 'Information about cookie technologies used on Elite Fabrics for site analytics and user preference persistence.',
    h1: 'Cookie Policy',
    canonicalUrl: `${baseUrl}/cookie-policy`
  },
  {
    route: 'corrections-policy',
    title: 'Corrections & Fact-Checking Policy | Elite Fabrics',
    description: 'How Elite Fabrics handles factual corrections, updates to textile data, and reader verification inquiries.',
    h1: 'Corrections Policy',
    canonicalUrl: `${baseUrl}/corrections-policy`
  },
  {
    route: 'advertising-policy',
    title: 'Advertising & Sponsorship Policy | Elite Fabrics',
    description: 'Clear guidelines regarding advertising standards, sponsor independence, and our non-commercial educational integrity.',
    h1: 'Advertising & Commercial Independence Policy',
    canonicalUrl: `${baseUrl}/advertising-policy`
  },
  {
    route: 'sitemap',
    title: 'HTML Sitemap | Complete Directory of Elite Fabrics',
    description: 'Complete navigational index of all fabric entries, comparisons, guides, and policies on Elite Fabrics.',
    h1: 'Directory Sitemap',
    canonicalUrl: `${baseUrl}/sitemap`
  },
  // Core Aliases
  {
    route: 'guides',
    title: 'The Elite Fabrics Blog & Textile Guides',
    description: 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
    h1: 'Textile Guides & Knowledge Hub',
    canonicalUrl: `${baseUrl}/articles`
  },
  {
    route: 'fabric-types',
    title: 'Fabric Library: Complete Textile Directory & Specs | Elite Fabrics',
    description: 'Browse our complete catalog of natural, synthetic, traditional, and regenerated fabrics with full physical and care specs.',
    h1: 'The Comprehensive Fabric Library',
    canonicalUrl: `${baseUrl}/fabrics`
  },
  {
    route: 'comparison',
    title: 'Fabric Comparisons: Side-by-Side Material Analysis | Elite Fabrics',
    description: 'Factual, balanced fabric comparisons: Cotton vs Linen, Silk vs Satin, Rayon vs Viscose, Wool vs Fleece, and more.',
    h1: 'Side-by-Side Fabric Comparisons',
    canonicalUrl: `${baseUrl}/comparisons`
  },
  {
    route: 'textile-industry',
    title: 'Global Textile Industry Guide: Manufacturing Hubs & Trade | Elite Fabrics',
    description: 'Educational overview of major textile manufacturing nations: Pakistan, India, China, Bangladesh, Turkey, United States, United Kingdom, and Europe.',
    h1: 'Global Textile Industry & Manufacturing Hubs',
    canonicalUrl: `${baseUrl}/industry`
  }
];

// 2. Add All 69 Articles (canonical /articles/:slug and aliases /guides/:slug, /article/:slug)
for (const a of ARTICLES) {
  const pageUrl = `${baseUrl}/articles/${a.slug}`;
  const schemas: any[] = [
    {
      '@type': 'Article',
      'headline': a.title,
      'description': a.metaDescription || a.excerpt,
      'author': { '@type': 'Person', 'name': a.author?.name || 'Editorial Team' },
      'datePublished': a.publishDate,
      'dateModified': a.updatedDate || a.publishDate,
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

  const articleEntryBase = {
    title: a.seoTitle || `${a.title} | Elite Fabrics`,
    description: a.metaDescription || a.excerpt,
    h1: a.title,
    canonicalUrl: pageUrl,
    ogType: 'article' as const,
    ogImage: a.featuredImage,
    publishedTime: a.publishDate,
    modifiedTime: a.updatedDate || a.publishDate,
    authorName: a.author?.name || 'Elite Fabrics Editorial Team',
    schema: schemas,
    contentSummary: a.excerpt,
    contentHtml: a.contentHtml,
    faqs: a.faqs
  };

  // A. Canonical route: /articles/:slug
  routes.push({
    ...articleEntryBase,
    route: `articles/${a.slug}`
  });

  // B. Alias route: /guides/:slug (canonical points to /articles/:slug)
  routes.push({
    ...articleEntryBase,
    route: `guides/${a.slug}`
  });

  // C. Alias route: /article/:slug (singular! canonical points to /articles/:slug)
  routes.push({
    ...articleEntryBase,
    route: `article/${a.slug}`
  });
}

// 3. Add All 38 Fabrics (canonical /fabric/:slug and aliases /fabric-types/:slug, /fabrics/:slug)
for (const f of FABRICS) {
  const pageUrl = `${baseUrl}/fabric/${f.slug}`;
  const schemas: any[] = [
    {
      '@type': 'TechArticle',
      'headline': `${f.name} Fabric Guide: Characteristics, Uses & Care`,
      'description': f.whatIsIt || f.whatDoesItFeelLike || `Comprehensive guide to ${f.name} fabric.`,
      'author': { '@type': 'Organization', 'name': 'Elite Fabrics Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` },
      'mainEntityOfPage': pageUrl
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

  const careText = typeof f.careInstructions === 'string'
    ? f.careInstructions
    : (f.careInstructions ? Object.entries(f.careInstructions).map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`).join('. ') : '');

  const commonUsesText = Array.isArray(f.commonUses) ? f.commonUses.join(', ') : (f.commonUses || '');

  const fabricHtml = `
    <div class="prose max-w-none text-[#33312E] leading-relaxed mb-6">
      <p class="text-lg text-[#444] mb-4">${escapeHtml(f.whatIsIt || f.whatDoesItFeelLike || '')}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div class="p-5 bg-white rounded-lg border border-[#E6E1DA]">
          <h3 class="font-bold text-[#1C1C1C] text-lg mb-2">Key Properties</h3>
          <ul class="list-disc pl-5 space-y-1 text-sm text-[#555]">
            <li><strong>Category:</strong> ${escapeHtml(f.category || '')}</li>
            <li><strong>Breathability:</strong> ${f.breathability ?? 'N/A'}/10</li>
            <li><strong>Durability:</strong> ${f.durability ?? 'N/A'}/10</li>
            <li><strong>Texture:</strong> ${escapeHtml(f.texture || 'N/A')}</li>
          </ul>
        </div>
        <div class="p-5 bg-white rounded-lg border border-[#E6E1DA]">
          <h3 class="font-bold text-[#1C1C1C] text-lg mb-2">Recommended Uses & Care</h3>
          ${commonUsesText ? `<p class="text-sm text-[#555] mb-2"><strong>Common Uses:</strong> ${escapeHtml(commonUsesText)}</p>` : ''}
          ${careText ? `<p class="text-sm text-[#555]"><strong>Care Guidelines:</strong> ${escapeHtml(careText)}</p>` : ''}
        </div>
      </div>
    </div>
  `;

  const fabricEntryBase = {
    title: `${f.name} Fabric Guide | Elite Fabrics`,
    description: `Comprehensive ${f.name.toLowerCase()} fabric guide. Learn about ${f.name.toLowerCase()} fiber properties, breathability, durability, sewing uses, and garment care instructions.`,
    h1: `${f.name} Fabric: Properties, Uses & Care`,
    canonicalUrl: pageUrl,
    ogType: 'article' as const,
    schema: schemas,
    contentSummary: f.whatIsIt || f.whatDoesItFeelLike,
    contentHtml: fabricHtml,
    faqs: f.faqs
  };

  // A. Canonical route: /fabric/:slug
  routes.push({
    ...fabricEntryBase,
    route: `fabric/${f.slug}`
  });

  // B. Alias route: /fabric-types/:slug
  routes.push({
    ...fabricEntryBase,
    route: `fabric-types/${f.slug}`
  });

  // C. Alias route: /fabrics/:slug
  routes.push({
    ...fabricEntryBase,
    route: `fabrics/${f.slug}`
  });

  // D. Alternate spelling alias: banarasi -> banarsi
  if (f.slug === 'banarsi') {
    routes.push({
      ...fabricEntryBase,
      route: 'fabric/banarasi'
    });
    routes.push({
      ...fabricEntryBase,
      route: 'fabric-types/banarasi'
    });
    routes.push({
      ...fabricEntryBase,
      route: 'fabrics/banarasi'
    });
  }
}

// 4. Add All 20 Comparisons (canonical /comparison/:slug and aliases /comparisons/:slug, and /articles/:slug if unreserved)
const articleSlugsSet = new Set(ARTICLES.map(a => a.slug));

for (const c of FABRIC_COMPARISONS) {
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

  const comparisonHtml = `
    <div class="prose max-w-none text-[#33312E] leading-relaxed mb-6">
      <p class="text-lg text-[#444] mb-4">${escapeHtml(c.overview || '')}</p>
      ${c.verdictGuidance ? `<div class="p-5 bg-[#FAF5EE] rounded-lg border border-[#EBDDCF] mb-6"><strong>Verdict Guidance:</strong> <p class="text-[#555048] mt-1 leading-relaxed">${escapeHtml(c.verdictGuidance)}</p></div>` : ''}
      ${c.criteria && c.criteria.length > 0 ? `
        <div class="space-y-4 my-6">
          <h2 class="text-2xl font-serif font-bold text-[#1C1C1C] mb-4">Detailed Head-to-Head Comparison</h2>
          ${c.criteria.map(crit => `
            <div class="p-4 bg-white rounded-lg border border-[#E6E1DA]">
              <h3 class="font-bold text-[#1C1C1C] text-lg mb-2">${escapeHtml(crit.name)}</h3>
              <p class="text-sm text-[#555048] mb-1"><strong>${escapeHtml(c.fabricA?.name || 'Fabric A')}:</strong> ${escapeHtml(crit.fabricAValue)}</p>
              <p class="text-sm text-[#555048] mb-2"><strong>${escapeHtml(c.fabricB?.name || 'Fabric B')}:</strong> ${escapeHtml(crit.fabricBValue)}</p>
              ${crit.analysis ? `<p class="text-sm text-[#777] italic">${escapeHtml(crit.analysis)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  const comparisonEntryBase = {
    title: `${c.title} | Elite Fabrics Comparisons`,
    description: c.overview.slice(0, 160),
    h1: c.title,
    canonicalUrl: pageUrl,
    ogType: 'article' as const,
    schema: schemas,
    contentSummary: c.overview,
    contentHtml: comparisonHtml,
    faqs: c.faqs
  };

  // A. Canonical route: /comparison/:slug
  routes.push({
    ...comparisonEntryBase,
    route: `comparison/${c.slug}`
  });

  // B. Alias route: /comparisons/:slug (plural)
  routes.push({
    ...comparisonEntryBase,
    route: `comparisons/${c.slug}`
  });

  // C. Cross alias route: /articles/:slug (if there isn't already a separate editorial article with this exact slug)
  if (!articleSlugsSet.has(c.slug)) {
    routes.push({
      ...comparisonEntryBase,
      route: `articles/${c.slug}`
    });
  }

  // D. Reversed comparison alias (e.g. linen-vs-cotton for cotton-vs-linen)
  const reversedSlug = c.slug.includes('-vs-') ? c.slug.split('-vs-').reverse().join('-vs-') : '';
  if (reversedSlug && reversedSlug !== c.slug) {
    routes.push({
      ...comparisonEntryBase,
      route: `comparison/${reversedSlug}`
    });
    routes.push({
      ...comparisonEntryBase,
      route: `comparisons/${reversedSlug}`
    });
  }
}

// 5. Add All 12 Tools (canonical /tools/:slug and aliases /:slug, /tool/:slug)
for (const t of FABRIC_TOOLS) {
  const pageUrl = `${baseUrl}/tools/${t.slug}`;
  const schemas: any[] = [
    {
      '@type': ['WebApplication', 'SoftwareApplication'],
      '@id': `${pageUrl}#webapp`,
      'name': t.title,
      'headline': t.h1,
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'All',
      'description': t.metaDescription,
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
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumbs`,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseUrl}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Fabric Tools', 'item': `${baseUrl}/tools` },
        { '@type': 'ListItem', 'position': 3, 'name': t.title, 'item': pageUrl }
      ]
    }
  ];

  if (t.faqs && t.faqs.length > 0) {
    schemas.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      'mainEntity': t.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  const toolHtml = `
    <div class="prose max-w-none text-[#33312E] leading-relaxed mb-6">
      <p class="text-lg text-[#444] mb-4">${escapeHtml(t.longDescription || t.metaDescription || '')}</p>
      ${t.features && t.features.length > 0 ? `
        <div class="p-5 bg-white rounded-lg border border-[#E6E1DA] mb-6">
          <h2 class="text-xl font-serif font-bold text-[#1C1C1C] mb-3">Key Features & Calculations</h2>
          <ul class="list-disc pl-5 space-y-1.5 text-sm text-[#555048]">
            ${t.features.map(feat => `<li>${escapeHtml(feat)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;

  const toolEntryBase = {
    title: t.seoTitle || `${t.title} | Elite Fabrics`,
    description: t.metaDescription,
    h1: t.h1 || t.title,
    canonicalUrl: pageUrl,
    schema: schemas,
    contentSummary: t.metaDescription,
    contentHtml: toolHtml,
    faqs: t.faqs
  };

  // A. Canonical route: /tools/:slug
  routes.push({
    ...toolEntryBase,
    route: `tools/${t.slug}`
  });

  // B. Direct alias route: /:slug (e.g. /fabric-gsm-calculator)
  routes.push({
    ...toolEntryBase,
    route: t.slug
  });

  // C. Singular alias route: /tool/:slug
  routes.push({
    ...toolEntryBase,
    route: `tool/${t.slug}`
  });

  // D. Common legacy/short aliases for fabric-gsm-calculator
  if (t.slug === 'fabric-gsm-calculator') {
    routes.push({
      ...toolEntryBase,
      route: 'tools/gsm-calculator'
    });
    routes.push({
      ...toolEntryBase,
      route: 'gsm-calculator'
    });
    routes.push({
      ...toolEntryBase,
      route: 'tool/gsm-calculator'
    });
  }
}

// Generate static HTML for every route
function generateStaticRoutes() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('Error: dist/index.html does not exist! Please run "vite build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf8');

  console.log(`Starting static route generation for ${routes.length} canonical routes...`);

  let count = 0;

  for (const r of routes) {
    let html = baseHtml;

    // 1. Replace <title>
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(r.title)}</title>`);

    // 2. Replace meta description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(r.description)}" />`
    );

    // 3. Replace canonical URL
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${r.canonicalUrl}" />`
    );

    // 4. Update OpenGraph tags
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(r.title)}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(r.description)}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:url" content="${r.canonicalUrl}" />`
    );
    html = html.replace(
      /<meta\s+property=["']og:type["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta property="og:type" content="${r.ogType || 'website'}" />`
    );
    if (r.ogImage) {
      if (/<meta\s+property=["']og:image["']/.test(html)) {
        html = html.replace(
          /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
          `<meta property="og:image" content="${r.ogImage}" />`
        );
      } else {
        html = html.replace('</head>', `    <meta property="og:image" content="${r.ogImage}" />\n  </head>`);
      }
    }

    // 5. Update Twitter tags
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeHtml(r.title)}" />`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeHtml(r.description)}" />`
    );
    if (r.ogImage) {
      if (/<meta\s+name=["']twitter:image["']/.test(html)) {
        html = html.replace(
          /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
          `<meta name="twitter:image" content="${r.ogImage}" />`
        );
      } else {
        html = html.replace('</head>', `    <meta name="twitter:image" content="${r.ogImage}" />\n  </head>`);
      }
    }

    // 6. Injected structured data (Schema.org JSON-LD matching client-side id="dynamic-seo-schema")
    if (r.schema && r.schema.length > 0) {
      const formattedSchema = Array.isArray(r.schema)
        ? {
            '@context': 'https://schema.org',
            '@graph': r.schema
          }
        : r.schema;
      const schemaTag = `\n    <script type="application/ld+json" id="dynamic-seo-schema">\n${JSON.stringify(formattedSchema, null, 2)}\n    </script>\n`;
      html = html.replace('</head>', `${schemaTag}  </head>`);
    }

    // 7. Inject crawlable pre-rendered HTML in #root for non-JS/pre-hydration crawlers
    const prerenderedBody = `
      <header class="bg-[#FAF8F5] border-b border-[#E6E1DA] py-4 px-6">
        <a href="/" class="text-xl font-serif font-bold text-[#1C1C1C]">Elite Fabrics</a>
      </header>
      <main class="max-w-4xl mx-auto px-6 py-12">
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-[#1C1C1C] mb-4">${escapeHtml(r.h1)}</h1>
        <p class="text-lg text-[#555048] mb-6">${escapeHtml(r.description)}</p>
        ${r.contentHtml ? `<div class="prose max-w-none text-[#33312E] leading-relaxed mb-8">${r.contentHtml}</div>` : (r.contentSummary ? `<div class="prose text-[#33312E] leading-relaxed mb-8">${escapeHtml(r.contentSummary)}</div>` : '')}
        ${r.faqs && r.faqs.length > 0 ? `
          <section class="mt-8 pt-8 border-t border-[#E6E1DA]">
            <h2 class="text-2xl font-serif font-bold text-[#1C1C1C] mb-6">Frequently Asked Questions</h2>
            <div class="space-y-4">
              ${r.faqs.map(faq => `
                <div class="bg-white p-5 rounded-lg border border-[#E6E1DA]">
                  <h3 class="font-bold text-[#1C1C1C] text-lg mb-2">${escapeHtml(faq.question)}</h3>
                  <p class="text-[#555048] leading-relaxed">${escapeHtml(faq.answer)}</p>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}
        <nav class="pt-8 mt-12 border-t border-[#E6E1DA] flex flex-wrap gap-4 text-sm text-[#9E472A]">
          <a href="/" class="hover:underline">Home</a>
          <a href="/articles" class="hover:underline">Articles</a>
          <a href="/fabrics" class="hover:underline">Fabric Library</a>
          <a href="/comparisons" class="hover:underline">Comparisons</a>
          <a href="/tools" class="hover:underline">Tools & Calculators</a>
        </nav>
      </main>
    `;

    // Place inside <div id="root">
    html = html.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${prerenderedBody}</div>`
    );

    // Save to:
    // A. dist/{route}/index.html
    const targetDir = path.join(distDir, r.route);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');

    // B. dist/{route}.html (for servers/CDNs that look for route.html before route/index.html)
    if (r.route) {
      const targetHtmlFile = path.join(distDir, `${r.route}.html`);
      // Ensure parent directory exists for nested routes like articles/what-is-cotton.html
      fs.mkdirSync(path.dirname(targetHtmlFile), { recursive: true });
      fs.writeFileSync(targetHtmlFile, html, 'utf8');
    }

    count++;
  }

  console.log(`Successfully generated static HTML for ${count} routes in dist/!`);
}

// Generate clean, canonical XML sitemap
function generateSitemapXml() {
  const today = '2026-10-19';

  interface SitemapEntry {
    loc: string;
    lastmod: string;
  }

  const sitemapEntries: SitemapEntry[] = [];
  const addedUrls = new Set<string>();

  const addUrl = (url: string, lastmod: string) => {
    if (!addedUrls.has(url)) {
      addedUrls.add(url);
      sitemapEntries.push({ loc: url, lastmod });
    }
  };

  // 1. Core Hub & Content Pages (24 pages)
  const corePaths = [
    '', // Homepage
    'articles',
    'fabrics',
    'comparisons',
    'tools',
    'beginner',
    'care',
    'pakistani',
    'sustainable',
    'industry',
    'timeline',
    'glossary',
    'trending',
    'about',
    'contact',
    'editorial-policy',
    'resources',
    'privacy-policy',
    'terms',
    'disclaimer',
    'cookie-policy',
    'corrections-policy',
    'advertising-policy',
    'sitemap'
  ];

  for (const p of corePaths) {
    const url = p ? `${baseUrl}/${p}` : `${baseUrl}/`;
    addUrl(url, today);
  }

  // 2. All 38 Fabric Profiles (canonical /fabric/:slug)
  for (const f of FABRICS) {
    addUrl(`${baseUrl}/fabric/${f.slug}`, today);
  }

  // 3. All 20 Comparison Pages (canonical /comparison/:slug)
  for (const c of FABRIC_COMPARISONS) {
    const modDate = c.updatedDate || c.publishDate || today;
    addUrl(`${baseUrl}/comparison/${c.slug}`, modDate);
  }

  // 4. All 12 Tool Pages (canonical /tools/:slug)
  for (const t of FABRIC_TOOLS) {
    addUrl(`${baseUrl}/tools/${t.slug}`, today);
  }

  // 5. All 69 Article Guides (canonical /articles/:slug)
  for (const a of ARTICLES) {
    const modDate = a.updatedDate || a.publishDate || today;
    addUrl(`${baseUrl}/articles/${a.slug}`, modDate);
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of sitemapEntries) {
    xml += '  <url>\n';
    xml += `    <loc>${entry.loc}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  // Write to public/sitemap.xml and dist/sitemap.xml
  const publicSitemap = path.join(rootDir, 'public', 'sitemap.xml');
  const distSitemap = path.join(distDir, 'sitemap.xml');

  fs.writeFileSync(publicSitemap, xml, 'utf8');
  fs.writeFileSync(distSitemap, xml, 'utf8');

  console.log(`Successfully generated sitemap.xml with ${sitemapEntries.length} canonical URLs!`);
}

generateStaticRoutes();
generateSitemapXml();
