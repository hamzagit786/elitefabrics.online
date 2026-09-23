export type ContentCategory =
  | 'Trending Fabrics'
  | 'Fabric Types'
  | 'Fabric Guides'
  | 'Fabric Comparisons'
  | 'How-To Guides'
  | 'Fabric History'
  | 'Textile History'
  | 'Pakistani Fabrics'
  | 'World Fabrics'
  | 'Sustainable Fabrics'
  | 'Fabric Care'
  | 'Textile Industry'
  | 'Fashion Fabrics'
  | 'Home Textile Fabrics'
  | 'Fabric Glossary'
  | 'Textile News & Trends'
  | 'Beginner Guides'
  | 'Top Fabric Websites';

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSource {
  title: string;
  institutionOrAuthor: string;
  year?: string;
  url?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ContentCategory;
  author: {
    name: string;
    role: string;
    avatar: string;
    credentials?: string;
  };
  publishDate: string;
  updatedDate: string;
  readTime: string;
  excerpt: string;
  seoTitle?: string;
  metaDescription?: string;
  featuredImage: string;
  imageAlt: string;
  imageCaption: string;
  tableOfContents: TableOfContentsItem[];
  contentHtml: string;
  tags: string[];
  sources?: ArticleSource[];
  relatedSlugs: string[];
  faqs?: FAQItem[];
  researchDate?: string;
}

export type FabricClassification = 'natural' | 'synthetic' | 'regenerated' | 'weave' | 'traditional';

export interface CareInstructions {
  washing: string;
  drying: string;
  ironing: string;
  dryCleaning: string;
}

export interface IdentificationMethod {
  visualAndTactile: string;
  burnTest: string;
}

export interface FabricType {
  id: string;
  slug: string;
  name: string;
  category: FabricClassification;
  fiberComposition: string; // Everyday simple explanation of what it is made of
  whatIsIt?: string; // What is this fabric in simple terms?
  whyPopular?: string; // Why do people love this fabric?
  whatDoesItFeelLike?: string; // What does it feel like against the skin?
  whereIsItUsed?: string; // Where is it commonly used (clothes, home, etc.)?
  whenIsItSuitable?: string; // Best seasons and occasions
  origin: string;
  howMade?: string;
  howItIsMade?: string;
  description?: string;
  texture: string;
  weightGsm: string; // e.g. "Lightweight (100 - 150 GSM)"
  drape: string;
  stretch: string;
  breathability: string;
  durability: string;
  commonUses: string[];
  advantages: string[];
  disadvantages: string[];
  bestSeasons: string[];
  careInstructions: string | CareInstructions;
  identificationMethod: string | IdentificationMethod;
  similarFabrics: string[];
  faqs: FAQItem[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  technicalSpecs?: {
    label: string;
    value: string;
  }[];
}

export interface ComparisonCriterion {
  name: string;
  fabricAValue: string;
  fabricBValue: string;
  analysis: string;
}

export interface FabricComparison {
  id: string;
  slug: string;
  title: string;
  fabricA: {
    name: string;
    slug: string;
    summary: string;
    bestFor?: string[];
  };
  fabricB: {
    name: string;
    slug: string;
    summary: string;
    bestFor?: string[];
  };
  overview: string;
  criteria: ComparisonCriterion[];
  verdictGuidance?: string;
  verdict?: string;
  idealUseCasesA?: string[];
  idealUseCasesB?: string[];
  faqs?: FAQItem[];
  publishDate?: string;
  updatedDate?: string;
  author?: string;
}

export interface TimelineEvent {
  id: string;
  era?: string;
  year?: string;
  yearDisplay?: string;
  location?: string;
  title: string;
  description: string;
  significance: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  historicalSource?: string;
  relatedFabrics?: string[];
}

export interface GlossaryTerm {
  term: string;
  phonetic?: string;
  category: 'Fiber & Yarn' | 'Weaving & Knitting' | 'Finishing & Processing' | 'Testing & Measurement' | 'Characteristics';
  definition: string;
  context: string;
  relatedTerms: string[];
}

export interface ResourceWebsite {
  name: string;
  url: string;
  specialization: string;
  provides: string;
  targetAudience: string;
  description: string;
  reputableStatus: string;
}

export interface LearningTopic {
  title: string;
  slug?: string;
  summary: string;
  coreConcepts: string[];
}

export interface LearningPathwayStage {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  stageTitle: string;
  description: string;
  targetKnowledge: string;
  topics: LearningTopic[];
}

export interface GlobalIndustryProfile {
  id: string;
  slug: string;
  country: string;
  region: string;
  headline: string;
  overview: string;
  majorSectors: string[];
  manufacturingHubs: {
    cityOrRegion: string;
    specialization: string;
  }[];
  commonMaterials: string[];
  historicalRoots: string;
  modernDevelopments: string;
  sustainabilityChallenges: string[];
  globalSignificance: string;
  keyStats: {
    label: string;
    value: string;
  }[];
}

