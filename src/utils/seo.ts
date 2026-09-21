interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function updateDocumentSEO(config: SEOConfig) {
  if (typeof document === 'undefined') return;

  // 1. Title
  document.title = config.title;

  // Helper to set or create a meta tag
  const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // 2. Standard Meta Description
  setMetaTag('name', 'description', config.description);

  // 3. Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', config.canonicalUrl);

  // 4. Open Graph Meta Tags
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:url', config.canonicalUrl);
  setMetaTag('property', 'og:type', config.ogType || 'website');
  setMetaTag('property', 'og:site_name', 'Elite Fabrics');
  if (config.ogImage) {
    setMetaTag('property', 'og:image', config.ogImage);
  }

  // 5. Article-Specific Meta Tags
  if (config.ogType === 'article') {
    if (config.publishedTime) {
      setMetaTag('property', 'article:published_time', config.publishedTime);
    }
    if (config.modifiedTime) {
      setMetaTag('property', 'article:modified_time', config.modifiedTime);
    }
    if (config.authorName) {
      setMetaTag('property', 'article:author', config.authorName);
    }
  }

  // 6. Twitter Card
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);
  if (config.ogImage) {
    setMetaTag('name', 'twitter:image', config.ogImage);
  }

  // 7. Dynamic JSON-LD Structured Data
  let schemaScript = document.getElementById('dynamic-seo-schema');
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.setAttribute('id', 'dynamic-seo-schema');
    document.head.appendChild(schemaScript);
  }

  if (config.schema) {
    const formattedSchema = Array.isArray(config.schema)
      ? {
          '@context': 'https://schema.org',
          '@graph': config.schema
        }
      : config.schema;

    schemaScript.textContent = JSON.stringify(formattedSchema, null, 2);
  } else {
    schemaScript.textContent = '';
  }

  // 8. Safe Google Analytics SPA Pageview dispatch
  try {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', {
        page_title: config.title,
        page_location: config.canonicalUrl
      });
    }
  } catch {
    // Fail silently if analytics is blocked or unavailable
  }
}
