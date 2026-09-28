import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  Info,
  CheckCircle2,
  X
} from 'lucide-react';

interface CareSymbol {
  id: string;
  category: 'washing' | 'bleaching' | 'drying' | 'ironing' | 'dry-cleaning';
  symbolSvg: React.ReactNode;
  name: string;
  code: string;
  plainEnglish: string;
  typicalFabrics: string[];
  riskIfIgnored: string;
  temperature?: string;
}

interface FabricCareSymbolGuideViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const FabricCareSymbolGuideView: React.FC<FabricCareSymbolGuideViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSymbol, setSelectedSymbol] = useState<CareSymbol | null>(null);

  const symbols: CareSymbol[] = [
    // Washing
    {
      id: 'wash-normal',
      category: 'washing',
      name: 'Machine Wash Normal',
      code: 'ISO 3758 / ASTM D5489',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c6 3 12-3 18 0s12 3 18 0v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16z" />
        </svg>
      ),
      plainEnglish: 'Wash normally using standard agitation, warm or cold water, and regular detergent cycle.',
      typicalFabrics: ['100% Cotton', 'Denim', 'Polyester Blends', 'Canvas'],
      riskIfIgnored: 'Low risk. Standard cycle is designed for durable everyday apparel.'
    },
    {
      id: 'wash-cold-30',
      category: 'washing',
      name: 'Machine Wash Cold (30°C / 85°F)',
      code: '30°C or 1 Dot',
      temperature: '30°C (85°F)',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c6 3 12-3 18 0s12 3 18 0v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16z" />
          <circle cx="24" cy="27" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Wash in cold water (maximum 30°C / 85°F). Saves energy, protects vibrant dyes, and prevents heat shrinkage.',
      typicalFabrics: ['Modal', 'Rayon', 'Dark Denim', 'Spandex Gymwear', 'Lawn'],
      riskIfIgnored: 'Hot water washes out dyes rapidly and shrinks cellulose fibers.'
    },
    {
      id: 'wash-warm-40',
      category: 'washing',
      name: 'Machine Wash Warm (40°C / 105°F)',
      code: '40°C or 2 Dots',
      temperature: '40°C (105°F)',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c6 3 12-3 18 0s12 3 18 0v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16z" />
          <circle cx="18" cy="27" r="2" fill="currentColor" />
          <circle cx="30" cy="27" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Wash in warm water (max 40°C / 105°F). Dissolves body oils and detergent effectively for regular shirts and towels.',
      typicalFabrics: ['White Cotton', 'Bedding Percale', 'Poplin Shirting', 'Synthetic Workwear'],
      riskIfIgnored: 'Cold water may not lift heavy kitchen grease or body oils effectively.'
    },
    {
      id: 'wash-perm-press',
      category: 'washing',
      name: 'Permanent Press Wash',
      code: '1 Bar Under Tub',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 14c6 3 12-3 18 0s12 3 18 0v14a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V14z" />
          <line x1="10" y1="41" x2="38" y2="41" />
        </svg>
      ),
      plainEnglish: 'Wash using reduced spin speed and cool rinse to minimize wrinkles on wrinkle-resistant synthetic fabrics.',
      typicalFabrics: ['Polyester', 'Nylon', 'Rayon Blends', 'Wrinkle-Free Twill'],
      riskIfIgnored: 'High-speed spinning creates permanent heat wrinkles in synthetic fibers.'
    },
    {
      id: 'wash-gentle',
      category: 'washing',
      name: 'Delicate / Gentle Wash',
      code: '2 Bars Under Tub',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12c6 3 12-3 18 0s12 3 18 0v14a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V12z" />
          <line x1="10" y1="38" x2="38" y2="38" />
          <line x1="10" y1="42" x2="38" y2="42" />
        </svg>
      ),
      plainEnglish: 'Gentle mechanical action with slow spin. Designed for delicate knits, sheer weaves, and lightweight lace.',
      typicalFabrics: ['Silk Scarf', 'Lawn', 'Viscose', 'Fine Jersey', 'Chiffon'],
      riskIfIgnored: 'Vigorous agitation rips gossamer seams and produces heavy surface pilling.'
    },
    {
      id: 'wash-hand',
      category: 'washing',
      name: 'Hand Wash Only',
      code: 'Hand Reaching Into Tub',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c6 3 12-3 18 0s12 3 18 0v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16z" />
          <path d="M20 7v9m4-11v11m4-10v10m4-7v7c0 4-4 7-8 7" />
        </svg>
      ),
      plainEnglish: 'Do not wash in an automated machine. Gently submerge and squeeze by hand in cool water with mild wool/silk wash.',
      typicalFabrics: ['Raw Wool Sweaters', 'Cashmere', '100% Silk', 'Embroidered Ajrak'],
      riskIfIgnored: 'Washing machine agitation will felt wool fibers permanently or shred fine silk threads.'
    },
    {
      id: 'wash-do-not',
      category: 'washing',
      name: 'Do Not Wash',
      code: 'X Over Tub',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c6 3 12-3 18 0s12 3 18 0v16a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6V16z" />
          <line x1="10" y1="12" x2="38" y2="40" stroke="#C93B2B" strokeWidth="3" />
          <line x1="38" y1="12" x2="10" y2="40" stroke="#C93B2B" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Water will damage this material. Must be professionally dry cleaned or spot cleaned with solvent.',
      typicalFabrics: ['Structured Wool Suits', 'Velvet Blazer', 'Leather & Suede', 'Banarsi Brocade'],
      riskIfIgnored: 'Garment structure, shoulder pads, and lining will distort and ruin completely.'
    },

    // Bleaching
    {
      id: 'bleach-any',
      category: 'bleaching',
      name: 'Any Bleach Allowed',
      code: 'Open Triangle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,8 42,40 6,40" />
        </svg>
      ),
      plainEnglish: 'Chlorine bleach or oxygen-based bleach can be safely used when necessary.',
      typicalFabrics: ['100% White Cotton Bleached Towels', 'White Cotton Canvas'],
      riskIfIgnored: 'None for permitted fabrics, but always dilute.'
    },
    {
      id: 'bleach-non-chlorine',
      category: 'bleaching',
      name: 'Non-Chlorine Bleach Only',
      code: 'Triangle with 2 Diagonal Lines',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,8 42,40 6,40" />
          <line x1="21" y1="20" x2="15" y2="38" />
          <line x1="28" y1="20" x2="22" y2="38" />
        </svg>
      ),
      plainEnglish: 'Only use oxygen-based, color-safe bleach. Never use chlorine bleach.',
      typicalFabrics: ['Colored Cottons', 'Linen', 'Polyester Shirting'],
      riskIfIgnored: 'Chlorine bleach will strip colors and degrade cellulose and polyester fibers.'
    },
    {
      id: 'bleach-do-not',
      category: 'bleaching',
      name: 'Do Not Bleach',
      code: 'Crossed Triangle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,8 42,40 6,40" />
          <line x1="10" y1="14" x2="38" y2="40" stroke="#C93B2B" strokeWidth="3" />
          <line x1="38" y1="14" x2="10" y2="40" stroke="#C93B2B" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Do not use bleach of any kind, including oxygen bleach. Clean using mild detergent only.',
      typicalFabrics: ['Wool', 'Silk', 'Spandex / Lycra', 'Printed Ajrak'],
      riskIfIgnored: 'Bleach dissolves wool and silk protein fibers and ruins elastane stretch.'
    },

    // Drying
    {
      id: 'dry-tumble-normal',
      category: 'drying',
      name: 'Tumble Dry Normal',
      code: 'Circle in Square',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <circle cx="24" cy="24" r="11" />
        </svg>
      ),
      plainEnglish: 'Tumble dry in automated clothes dryer on regular high temperature setting.',
      typicalFabrics: ['Cotton Towels', 'Denim Jeans', 'Heavy Cotton Canvas'],
      riskIfIgnored: 'High heat can cause excessive shrinkage in non-preshrunk garments.'
    },
    {
      id: 'dry-tumble-low',
      category: 'drying',
      name: 'Tumble Dry Low Heat',
      code: '1 Dot in Circle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Tumble dry on low heat setting. Protects elastane, synthetics, and fine woven threads.',
      typicalFabrics: ['Polyester Fleece', 'Rayon', 'Jersey Knits', 'Spandex Activewear'],
      riskIfIgnored: 'High dryer heat melts synthetic polymer fibers and makes elastic brittle.'
    },
    {
      id: 'dry-flat',
      category: 'drying',
      name: 'Dry Flat (Reshape)',
      code: 'Horizontal Bar in Square',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <line x1="16" y1="24" x2="32" y2="24" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Lay flat on a clean dry towel in natural horizontal position. Do not hang on a hanger.',
      typicalFabrics: ['Wool Sweaters', 'Cashmere', 'Heavy Knits', 'Linen Knitwear'],
      riskIfIgnored: 'Hanging wet knits stretches them out of shape permanently due to water weight.'
    },
    {
      id: 'dry-line',
      category: 'drying',
      name: 'Line Dry (Hang to Dry)',
      code: 'Droop / Curved Line',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <path d="M12 12c6 6 18 6 24 0" />
        </svg>
      ),
      plainEnglish: 'Hang damp garment on clothesline or hanger in well-ventilated space.',
      typicalFabrics: ['Dress Shirts', 'Cotton Poplin', 'Lawn Suits', 'Linen Pants'],
      riskIfIgnored: 'Gentle, zero heat, and prevents dryer lint loss.'
    },
    {
      id: 'dry-do-not-tumble',
      category: 'drying',
      name: 'Do Not Tumble Dry',
      code: 'Crossed Tumble Circle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <circle cx="24" cy="24" r="11" />
          <line x1="10" y1="10" x2="38" y2="38" stroke="#C93B2B" strokeWidth="3" />
          <line x1="38" y1="10" x2="10" y2="38" stroke="#C93B2B" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Never put in a mechanical dryer. Heat and rotation will damage fibers.',
      typicalFabrics: ['Silk', 'Wool', 'Tulle', 'Velvet', 'Corduroy'],
      riskIfIgnored: 'Massive shrinkage (up to 15%), fabric puckering, and pile crushing.'
    },

    // Ironing
    {
      id: 'iron-low',
      category: 'ironing',
      name: 'Iron Low Heat (110°C / 230°F)',
      code: '1 Dot in Iron',
      temperature: '110°C (230°F)',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 32h32c0-8-6-14-14-14H18c-6 0-10 6-10 14z" />
          <line x1="8" y1="36" x2="40" y2="36" />
          <circle cx="24" cy="25" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Iron on lowest heat setting without steam. Suitable for delicate synthetics and silk.',
      typicalFabrics: ['Nylon', 'Acrylic', 'Silk Scarf', 'Acetate'],
      riskIfIgnored: 'Iron will glaze, melt, or burn a hole through synthetic fibers instantly.'
    },
    {
      id: 'iron-medium',
      category: 'ironing',
      name: 'Iron Medium Heat (150°C / 300°F)',
      code: '2 Dots in Iron',
      temperature: '150°C (300°F)',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 32h32c0-8-6-14-14-14H18c-6 0-10 6-10 14z" />
          <line x1="8" y1="36" x2="40" y2="36" />
          <circle cx="20" cy="25" r="2" fill="currentColor" />
          <circle cx="28" cy="25" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Iron on medium setting. Use pressing cloth for wool to prevent shiny iron marks.',
      typicalFabrics: ['Wool Flannel', 'Polyester Blends', 'Modal', 'Rayon'],
      riskIfIgnored: 'Direct high heat creates permanent shiny scorch marks on wool.'
    },
    {
      id: 'iron-high',
      category: 'ironing',
      name: 'Iron High Heat (200°C / 390°F)',
      code: '3 Dots in Iron',
      temperature: '200°C (390°F)',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 32h32c0-8-6-14-14-14H18c-6 0-10 6-10 14z" />
          <line x1="8" y1="36" x2="40" y2="36" />
          <circle cx="16" cy="25" r="2" fill="currentColor" />
          <circle cx="24" cy="25" r="2" fill="currentColor" />
          <circle cx="32" cy="25" r="2" fill="currentColor" />
        </svg>
      ),
      plainEnglish: 'Iron with high heat and steam. Best performed while fabric is slightly damp.',
      typicalFabrics: ['100% Linen', 'Heavy Cotton', 'Denim', 'Canvas'],
      riskIfIgnored: 'Without sufficient heat and steam, linen creases will refuse to flatten.'
    },
    {
      id: 'iron-do-not',
      category: 'ironing',
      name: 'Do Not Iron',
      code: 'Crossed Iron',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 32h32c0-8-6-14-14-14H18c-6 0-10 6-10 14z" />
          <line x1="8" y1="36" x2="40" y2="36" />
          <line x1="10" y1="14" x2="38" y2="38" stroke="#C93B2B" strokeWidth="3" />
          <line x1="38" y1="14" x2="10" y2="38" stroke="#C93B2B" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Do not touch with an iron. Heat will permanently crush pile, melt coatings, or destroy embossing.',
      typicalFabrics: ['Crushed Velvet', 'Waterproof Coated Fabrics', 'Tulle', 'Sequined Items'],
      riskIfIgnored: 'Melts fibers or crushes pile texture flat irreversibly.'
    },

    // Dry Cleaning
    {
      id: 'dry-clean-any',
      category: 'dry-cleaning',
      name: 'Professional Dry Clean',
      code: 'Circle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
        </svg>
      ),
      plainEnglish: 'Garment should be professionally dry cleaned by standard commercial methods.',
      typicalFabrics: ['Tailored Suits', 'Silk Dresses', 'Velvet Coats', 'Wool Overcoats'],
      riskIfIgnored: 'Home water washing causes fiber distortion, shrinkage, or seam puckering.'
    },
    {
      id: 'dry-clean-p',
      category: 'dry-cleaning',
      name: 'Dry Clean Any Solvent Except Trichloroethylene',
      code: 'Circle with P',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <text x="24" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor" stroke="none">P</text>
        </svg>
      ),
      plainEnglish: 'Standard commercial dry cleaner solvent (Perchloroethylene or Hydrocarbons).',
      typicalFabrics: ['Apparel Tailoring', 'Fine Woven Wool', 'Lined Garments'],
      riskIfIgnored: 'Cleaners need this code to calibrate proper chemical solvent bath.'
    },
    {
      id: 'dry-clean-do-not',
      category: 'dry-cleaning',
      name: 'Do Not Dry Clean',
      code: 'Crossed Circle',
      symbolSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-current fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <line x1="12" y1="12" x2="36" y2="36" stroke="#C93B2B" strokeWidth="3" />
          <line x1="36" y1="12" x2="12" y2="36" stroke="#C93B2B" strokeWidth="3" />
        </svg>
      ),
      plainEnglish: 'Do not use dry cleaning chemical solvents. Clean by water washing only.',
      typicalFabrics: ['Technical PVC Coatings', 'Gore-Tex Membranes', 'Rubberized Rainwear'],
      riskIfIgnored: 'Chemical solvents dissolve membrane glue and waterproof polyurethane backings.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Symbols' },
    { id: 'washing', label: 'Washing (Tub)' },
    { id: 'bleaching', label: 'Bleach (Triangle)' },
    { id: 'drying', label: 'Drying (Square)' },
    { id: 'ironing', label: 'Ironing (Iron)' },
    { id: 'dry-cleaning', label: 'Dry Clean (Circle)' },
  ];

  const q = searchQuery.toLowerCase().trim();

  const filteredSymbols = symbols.filter(s => {
    const matchesCat = activeCategory === 'all' || s.category === activeCategory;
    const matchesQuery = !q || 
      s.name.toLowerCase().includes(q) || 
      s.plainEnglish.toLowerCase().includes(q) || 
      s.code.toLowerCase().includes(q) ||
      s.typicalFabrics.some(f => f.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header & Breadcrumbs */}
      <div>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6B655C] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:text-[#1C1C1C]">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('tools')} className="hover:text-[#1C1C1C]">Tools</button>
          <span>/</span>
          <span className="text-[#1C1C1C] font-semibold">Fabric Care Symbol Guide</span>
        </nav>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-[#F2EDE4] text-[#9E472A] font-bold rounded">
            Interactive Laundry Tag Decoder
          </span>
          <span className="text-xs text-[#7A7265] font-mono">ASTM D5489 &amp; ISO 3758 Compliant</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C] tracking-tight">
          Fabric Care Symbol Decoder: What Do Laundry Icons Mean?
        </h1>
        <p className="text-base sm:text-lg text-[#524B41] font-light leading-relaxed mt-2 max-w-3xl">
          Decoding tag symbols saves garments from shrinking, felting, melting, and fading. Click any icon or search below for plain-English laundering instructions.
        </p>
      </div>

      {/* Interactive Controls: Search & Category Tabs */}
      <div className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl p-5 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8478]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by keyword, e.g. 'cold water', 'dry flat', 'wool', 'tumble'..."
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D9D1C5] rounded-xl text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E472A]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#7A7265] hover:text-[#1C1C1C]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === c.id
                  ? 'bg-[#9E472A] text-white shadow-2xs'
                  : 'bg-white text-[#524B41] border border-[#D9D1C5] hover:border-[#9E472A]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Symbols Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#7A7265]">
          <span>Showing {filteredSymbols.length} care symbols</span>
          <span>Click any symbol card for full fiber guidelines</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSymbols.map(sym => (
            <div
              key={sym.id}
              onClick={() => setSelectedSymbol(sym)}
              className="bg-white border border-[#E6E0D7] hover:border-[#9E472A] rounded-xl p-5 cursor-pointer transition-all hover:shadow-sm group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 mx-auto rounded-lg bg-[#FAF8F5] border border-[#EFEAE2] flex items-center justify-center text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors">
                  {sym.symbolSvg}
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E472A] font-bold block">
                    {sym.code}
                  </span>
                  <h3 className="font-serif-heading font-bold text-sm text-[#1C1C1C] group-hover:text-[#9E472A] transition-colors mt-0.5">
                    {sym.name}
                  </h3>
                </div>
                <p className="text-xs text-[#5C5549] line-clamp-2 text-center leading-relaxed">
                  {sym.plainEnglish}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2EDE4] text-[11px] text-[#9E472A] font-semibold text-center group-hover:underline">
                View Full Details →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Detail Drawer when symbol is clicked */}
      {selectedSymbol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-in fade-in duration-150">
          <div 
            className="w-full max-w-lg bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#9E472A] shrink-0">
                  {selectedSymbol.symbolSvg}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#9E472A] font-bold">
                    {selectedSymbol.code}
                  </span>
                  <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
                    {selectedSymbol.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedSymbol(null)}
                className="p-1.5 rounded-lg text-[#8C8478] hover:text-[#1C1C1C] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#3E3A33]">
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl space-y-1">
                <span className="text-xs font-bold text-[#1C1C1C] block">Plain English Meaning:</span>
                <p className="leading-relaxed text-[#524B41]">{selectedSymbol.plainEnglish}</p>
              </div>

              <div>
                <span className="font-bold text-xs uppercase font-mono text-[#7A7265] block mb-1.5">
                  Fabrics That Often Carry This Symbol:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSymbol.typicalFabrics.map((fab, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#F5F0E8] text-[#5C5549] rounded text-xs font-medium">
                      {fab}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#FFF8F7] border border-[#F5D8D5] rounded-xl space-y-1 text-xs">
                <span className="font-bold text-[#C93B2B] flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> What Happens If Ignored:
                </span>
                <p className="text-[#6E2A23] leading-relaxed">{selectedSymbol.riskIfIgnored}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#E8E2D8]">
              <button
                onClick={() => {
                  setSelectedSymbol(null);
                  onNavigate('tools', 'fabric-shrinkage-calculator');
                }}
                className="text-xs font-semibold text-[#9E472A] hover:underline"
              >
                Check Shrinkage Calculator →
              </button>
              <button
                onClick={() => setSelectedSymbol(null)}
                className="px-4 py-2 bg-[#1C1C1C] hover:bg-[#333] text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Close Decoder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Laundry Science Educational Section */}
      <section className="p-6 sm:p-8 bg-white border border-[#E6E0D7] rounded-2xl space-y-6">
        <h3 className="text-xl font-serif-heading font-bold text-[#1C1C1C]">
          The 5 International Care Symbol Categories Explained
        </h3>
        <p className="text-xs text-[#524B41] leading-relaxed">
          Standardized globally under ISO 3758 and in the United States under ASTM D5489, laundry labels always appear in this exact left-to-right sequence on garment tags:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs">
          <div className="p-3 bg-[#FAF8F5] border border-[#EFEAE2] rounded-xl space-y-1">
            <span className="font-bold text-[#9E472A] block font-mono">1. Tub</span>
            <span className="font-semibold text-[#1C1C1C] block">Washing</span>
            <p className="text-[#666] text-[11px]">Water temp, mechanical cycle, hand washing, or no wash.</p>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#EFEAE2] rounded-xl space-y-1">
            <span className="font-bold text-[#9E472A] block font-mono">2. Triangle</span>
            <span className="font-semibold text-[#1C1C1C] block">Bleaching</span>
            <p className="text-[#666] text-[11px]">Chlorine vs oxygen-based color-safe bleach tolerance.</p>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#EFEAE2] rounded-xl space-y-1">
            <span className="font-bold text-[#9E472A] block font-mono">3. Square</span>
            <span className="font-semibold text-[#1C1C1C] block">Drying</span>
            <p className="text-[#666] text-[11px]">Tumble dryer heat dots, line dry, drip dry, or dry flat.</p>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#EFEAE2] rounded-xl space-y-1">
            <span className="font-bold text-[#9E472A] block font-mono">4. Iron</span>
            <span className="font-semibold text-[#1C1C1C] block">Ironing</span>
            <p className="text-[#666] text-[11px]">1 dot (110°C), 2 dots (150°C), 3 dots (200°C), steam.</p>
          </div>
          <div className="p-3 bg-[#FAF8F5] border border-[#EFEAE2] rounded-xl space-y-1">
            <span className="font-bold text-[#9E472A] block font-mono">5. Circle</span>
            <span className="font-semibold text-[#1C1C1C] block">Dry Clean</span>
            <p className="text-[#666] text-[11px]">Solvent instructions for commercial garment cleaners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
