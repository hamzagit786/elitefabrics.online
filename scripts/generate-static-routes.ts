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
}

function escapeHtml(str: string): string {
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
    route: 'articles',
    title: 'The Elite Fabrics Blog: In-Depth Textile Articles & Guides',
    description: 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
    h1: 'Textile Knowledge Hub & Editorial Articles',
    canonicalUrl: `${baseUrl}/articles`,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': 'Elite Fabrics Textile Articles & Guides',
        'description': 'Authoritative articles on textile history, sustainable innovations, fabric selection, and fiber science.',
        'url': `${baseUrl}/articles`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@context': 'https://schema.org',
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
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${baseUrl}/tools#webpage`,
        'name': 'Interactive Fabric Tools & Calculators',
        'description': 'Free online fabric calculators and textile converters.',
        'url': `${baseUrl}/tools`,
        'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
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
    contentSummary: 'Explore detailed technical profiles of 38+ natural, synthetic, semi-synthetic, and heritage fabrics with breathability, drape, and care specifications.'
  },
  {
    route: 'comparisons',
    title: 'Fabric Comparisons: Side-by-Side Material Analysis | Elite Fabrics',
    description: 'Factual, balanced fabric comparisons: Cotton vs Linen, Silk vs Satin, Rayon vs Viscose, Wool vs Fleece, and more.',
    h1: 'Side-by-Side Fabric Comparisons',
    canonicalUrl: `${baseUrl}/comparisons`,
    contentSummary: 'Detailed head-to-head comparisons analyzing breathability, durability, moisture absorption, price, and environmental impact.'
  },
  {
    route: 'beginner',
    title: 'Fabric Fundamentals: Beginner Guide to Textile Science | Elite Fabrics',
    description: 'Learn fibers vs weaves vs knits, how to read fabric labels, and how to identify fabrics using simple burn tests.',
    h1: 'Beginner Fabric & Textile Fundamentals',
    canonicalUrl: `${baseUrl}/beginner`
  },
  {
    route: 'care',
    title: 'Practical Fabric Care, Washing & Stain Removal Guide | Elite Fabrics',
    description: 'Care instructions for every textile: temperature guidelines, machine cycles, drying methods, and safe iron settings.',
    h1: 'Fabric Care & Laundry Science',
    canonicalUrl: `${baseUrl}/care`
  },
  {
    route: 'pakistani',
    title: 'Pakistani Fabrics & South Asian Textile Heritage | Elite Fabrics',
    description: 'Explore 4,500 years of Indus Valley textile history, from high-count summer lawn and pit-loom khaddar to Sindhi Ajrak block prints.',
    h1: 'Pakistani Fabrics & Heritage Textiles',
    canonicalUrl: `${baseUrl}/pakistani`
  },
  {
    route: 'sustainable',
    title: 'Sustainable Fabrics & Environmental Lifecycle Guide | Elite Fabrics',
    description: 'Independent evaluation of sustainable textiles: organic cotton, linen, hemp, closed-loop lyocell, and microplastic impacts.',
    h1: 'Sustainable Textiles & Environmental Impact',
    canonicalUrl: `${baseUrl}/sustainable`
  },
  {
    route: 'industry',
    title: 'Global Textile Industry Guide: Manufacturing Hubs & Trade | Elite Fabrics',
    description: 'Educational overview of major textile manufacturing nations: Pakistan, India, China, Bangladesh, Turkey, United States, United Kingdom, and Europe.',
    h1: 'Global Textile Industry & Manufacturing Hubs',
    canonicalUrl: `${baseUrl}/industry`
  },
  {
    route: 'timeline',
    title: 'Global Textile History Timeline: 30,000 BCE to 2026 | Elite Fabrics',
    description: 'An interactive historical journey across human textile civilization: ancient flax, the Silk Road, the Industrial Revolution, and synthetic polymers.',
    h1: 'Chronological History of Human Textiles',
    canonicalUrl: `${baseUrl}/timeline`
  },
  {
    route: 'glossary',
    title: 'A-Z Fabric & Textile Glossary: Terms & Definitions | Elite Fabrics',
    description: 'Clear, plain-English definitions for textile terms, weaving structures, yarn counts, and fabric finishing processes.',
    h1: 'Textile Terminology & Fiber Glossary',
    canonicalUrl: `${baseUrl}/glossary`
  },
  {
    route: 'trending',
    title: 'Trending Fabrics 2026: Modern Clothing & Textile Movements | Elite Fabrics',
    description: 'Discover popular fabrics for 2026: sustainable plant fibers, heritage weaves, natural cottons, and high-performance textiles.',
    h1: 'Trending Fabrics & Contemporary Textile Innovations',
    canonicalUrl: `${baseUrl}/trending`
  },
  {
    route: 'about',
    title: 'About Us | Elite Fabrics – Independent Fabric & Textile Resource',
    description: 'Learn about Elite Fabrics, our non-commercial educational mission, and our commitment to factual textile information.',
    h1: 'About Elite Fabrics',
    canonicalUrl: `${baseUrl}/about`
  },
  {
    route: 'contact',
    title: 'Contact Us | Elite Fabrics – Questions & Inquiries',
    description: 'Get in touch with the Elite Fabrics team for inquiries, corrections, or feedback.',
    h1: 'Contact Our Editorial Team',
    canonicalUrl: `${baseUrl}/contact`
  },
  {
    route: 'editorial-policy',
    title: 'Editorial Policy & Standards | Elite Fabrics',
    description: 'Our commitment to independent, non-commercial, fact-checked textile journalism and educational accuracy.',
    h1: 'Editorial Standards & Fact-Checking Policy',
    canonicalUrl: `${baseUrl}/editorial-policy`
  },
  {
    route: 'resources',
    title: 'Textile Industry Directory & Educational Resources | Elite Fabrics',
    description: 'Curated directory of textile research institutions, fabric standards organizations, and educational archives.',
    h1: 'Educational Resources & Industry Directory',
    canonicalUrl: `${baseUrl}/resources`
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
  }
];

// 2. Add All 69 Articles (canonical /articles/:slug and alias /guides/:slug)
for (const a of ARTICLES) {
  const pageUrl = `${baseUrl}/articles/${a.slug}`;
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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

  // Canonical route: /articles/:slug
  routes.push({
    route: `articles/${a.slug}`,
    title: a.seoTitle || `${a.title} | Elite Fabrics`,
    description: a.metaDescription || a.excerpt,
    h1: a.title,
    canonicalUrl: pageUrl,
    ogType: 'article',
    ogImage: a.featuredImage,
    publishedTime: a.publishDate,
    modifiedTime: a.updatedDate || a.publishDate,
    authorName: a.author?.name || 'Elite Fabrics Editorial Team',
    schema: schemas,
    contentSummary: a.excerpt
  });

  // Alias route: /guides/:slug (canonical points to /articles/:slug)
  routes.push({
    route: `guides/${a.slug}`,
    title: a.seoTitle || `${a.title} | Elite Fabrics`,
    description: a.metaDescription || a.excerpt,
    h1: a.title,
    canonicalUrl: pageUrl,
    ogType: 'article',
    ogImage: a.featuredImage,
    publishedTime: a.publishDate,
    modifiedTime: a.updatedDate || a.publishDate,
    authorName: a.author?.name || 'Elite Fabrics Editorial Team',
    schema: schemas,
    contentSummary: a.excerpt
  });
}

// 3. Add All 38 Fabrics (canonical /fabric/:slug and alias /fabric-types/:slug)
for (const f of FABRICS) {
  const pageUrl = `${baseUrl}/fabric/${f.slug}`;
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': `${f.name} Fabric Guide: Characteristics, Uses & Care`,
      'description': f.whatIsIt || f.description || `Comprehensive guide to ${f.name} fabric.`,
      'author': { '@type': 'Organization', 'name': 'Elite Fabrics Editorial Team' },
      'publisher': { '@type': 'Organization', 'name': 'Elite Fabrics', 'url': `${baseUrl}/` },
      'mainEntityOfPage': pageUrl
    },
    {
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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

  // Canonical route: /fabric/:slug
  routes.push({
    route: `fabric/${f.slug}`,
    title: `${f.name} Fabric Guide | Elite Fabrics`,
    description: `Comprehensive ${f.name.toLowerCase()} fabric guide. Learn about ${f.name.toLowerCase()} fiber properties, breathability, durability, sewing uses, and garment care instructions.`,
    h1: `${f.name} Fabric: Properties, Uses & Care`,
    canonicalUrl: pageUrl,
    ogType: 'article',
    schema: schemas,
    contentSummary: f.whatIsIt || f.description
  });

  // Alias route: /fabric-types/:slug (canonical points to /fabric/:slug)
  routes.push({
    route: `fabric-types/${f.slug}`,
    title: `${f.name} Fabric Guide | Elite Fabrics`,
    description: `Comprehensive ${f.name.toLowerCase()} fabric guide. Learn about ${f.name.toLowerCase()} fiber properties, breathability, durability, sewing uses, and garment care instructions.`,
    h1: `${f.name} Fabric: Properties, Uses & Care`,
    canonicalUrl: pageUrl,
    ogType: 'article',
    schema: schemas,
    contentSummary: f.whatIsIt || f.description
  });
}

// 4. Add All 20 Comparisons (canonical /comparison/:slug and alias /comparisons/:slug)
for (const c of FABRIC_COMPARISONS) {
  const pageUrl = `${baseUrl}/comparison/${c.slug}`;
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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

  // Canonical route: /comparison/:slug
  routes.push({
    route: `comparison/${c.slug}`,
    title: `${c.title} | Elite Fabrics Comparisons`,
    description: c.overview.slice(0, 160),
    h1: c.title,
    canonicalUrl: pageUrl,
    ogType: 'article',
    schema: schemas,
    contentSummary: c.overview
  });

  // Alias route: /comparisons/:slug (plural! canonical points to /comparison/:slug)
  routes.push({
    route: `comparisons/${c.slug}`,
    title: `${c.title} | Elite Fabrics Comparisons`,
    description: c.overview.slice(0, 160),
    h1: c.title,
    canonicalUrl: pageUrl,
    ogType: 'article',
    schema: schemas,
    contentSummary: c.overview
  });
}

// 5. Add All 12 Tools (canonical /tools/:slug and direct alias /:slug)
for (const t of FABRIC_TOOLS) {
  const pageUrl = `${baseUrl}/tools/${t.slug}`;
  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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
      '@context': 'https://schema.org',
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

  // Canonical route: /tools/:slug
  routes.push({
    route: `tools/${t.slug}`,
    title: t.seoTitle || `${t.title} | Elite Fabrics`,
    description: t.metaDescription,
    h1: t.h1 || t.title,
    canonicalUrl: pageUrl,
    schema: schemas,
    contentSummary: t.metaDescription
  });

  // Direct tool alias route: /:slug (e.g. /fabric-gsm-calculator, canonical points to /tools/:slug)
  routes.push({
    route: t.slug,
    title: t.seoTitle || `${t.title} | Elite Fabrics`,
    description: t.metaDescription,
    h1: t.h1 || t.title,
    canonicalUrl: pageUrl,
    schema: schemas,
    contentSummary: t.metaDescription
  });
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

    // 6. Injected structured data (Schema.org JSON-LD)
    if (r.schema && r.schema.length > 0) {
      const schemaTag = `\n    <script type="application/ld+json" id="prerendered-schema">\n${JSON.stringify(r.schema, null, 2)}\n    </script>\n`;
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
        ${r.contentSummary ? `<div class="prose text-[#33312E] leading-relaxed mb-8">${escapeHtml(r.contentSummary)}</div>` : ''}
        <nav class="pt-6 border-t border-[#E6E1DA] flex flex-wrap gap-4 text-sm text-[#9E472A]">
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
    const targetHtmlFile = path.join(distDir, `${r.route}.html`);
    // Ensure parent directory exists for nested routes like articles/what-is-cotton.html
    fs.mkdirSync(path.dirname(targetHtmlFile), { recursive: true });
    fs.writeFileSync(targetHtmlFile, html, 'utf8');

    count++;
  }

  console.log(`Successfully generated static HTML for ${count} routes in dist/!`);
}

generateStaticRoutes();
