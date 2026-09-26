export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface FabricTool {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  category: 'Weight & Density' | 'Yardage & Projects' | 'Shrinkage & Care' | 'Unit Converters';
  shortDescription: string;
  longDescription: string;
  iconName: string;
  badge?: string;
  features: string[];
  faqs: ToolFAQ[];
  relatedArticleSlugs: string[];
  relatedFabricSlugs: string[];
}

export const FABRIC_TOOLS: FabricTool[] = [
  {
    id: 'fabric-gsm-calculator',
    slug: 'fabric-gsm-calculator',
    title: 'Fabric GSM Calculator',
    shortTitle: 'GSM Calculator',
    h1: 'Fabric GSM Calculator',
    seoTitle: 'Fabric GSM Calculator (Free Online) | Elite Fabrics',
    metaDescription: 'Calculate fabric GSM instantly with our free online calculator. Convert measurements and determine fabric weight accurately for cotton, linen, denim and more.',
    category: 'Weight & Density',
    shortDescription: 'Calculate grams per square meter (g/m²) from sample weight and dimensions with step-by-step formulas.',
    longDescription: 'Our free interactive Fabric GSM Calculator accurately calculates the area density (g/m²) of any woven, knitted, or non-woven fabric. Enter the sample mass in grams and the dimensions in centimeters, inches, or meters to obtain exact GSM, imperial ounces (oz/yd²), and trade weight classifications.',
    iconName: 'Scale',
    badge: 'Popular Tool',
    features: [
      'Multi-unit dimension inputs (cm, inches, meters)',
      'Instant live calculation with zero page reloads',
      'Step-by-step formula breakdown',
      'Automatic conversion to oz/yd²',
      'Garment suitability benchmarks'
    ],
    faqs: [
      {
        question: 'What is GSM?',
        answer: 'GSM stands for "Grams per Square Meter" (g/m²). It is the international metric standard used to measure fabric weight and area density. In simple terms, it represents how much a one-meter by one-meter (1 m × 1 m) cut of fabric weighs in grams. Lower GSM values (30–120) represent lightweight fabrics like silk chiffon and cotton lawn, while higher GSM values (250–500+) indicate heavy textiles like denim, fleece, and winter overcoating.'
      },
      {
        question: 'How do you calculate GSM?',
        answer: 'To calculate GSM without a specialized laboratory circular cutter: 1) Measure the length and width of your fabric swatch. 2) Weigh the swatch on a precision digital kitchen or jewelers scale in grams. 3) Calculate the surface area in square meters (Length in meters × Width in meters). 4) Divide the weight in grams by the surface area in square meters: GSM = Weight (g) / Area (m²). For centimeter dimensions, the formula is: GSM = (Weight in grams × 10,000) / (Length in cm × Width in cm).'
      },
      {
        question: 'Is higher GSM better?',
        answer: 'No, higher GSM does not necessarily mean higher quality. GSM measures weight and physical thickness, not fiber quality, yarn count, or weaving precision. For example, a luxury Pakistani lawn fabric may have a low GSM of 75 to 85 yet be woven from premium, long-staple combed cotton yarns that feel silky, breathable, and expensive. Conversely, a coarse promotional canvas bag may have a 300 GSM weight while using rough, low-grade short-staple cotton fibers. Match the GSM to your climate, silhouette, and garment requirements.'
      },
      {
        question: 'GSM for cotton fabric?',
        answer: 'Cotton fabrics span a wide GSM spectrum depending on the yarn count and weave structure: Cotton Voile & Lawn: 65–90 GSM (sheer and ultra-light); Cotton Poplin & Shirting: 110–140 GSM (lightweight dress shirts); Cotton T-Shirt Jersey: 150–200 GSM (everyday casual tees); Cotton Twill / Chino: 200–260 GSM (trousers and jackets); Cotton Khaddar: 220–320 GSM (traditional textured winter wear); Heavy Cotton Denim & Canvas: 350–500+ GSM (10–15 oz rugged workwear).'
      }
    ],
    relatedArticleSlugs: [
      'fabric-weight-demystified-gsm-ounces-guide',
      'fibers-vs-weaves-vs-knits-three-levels',
      'the-ultimate-fabric-care-manual'
    ],
    relatedFabricSlugs: ['cotton', 'denim', 'lawn', 'linen', 'khaddar']
  },
  {
    id: 'fabric-yardage-calculator',
    slug: 'fabric-yardage-calculator',
    title: 'Fabric Yardage Calculator',
    shortTitle: 'Yardage Calculator',
    h1: 'Fabric Yardage Calculator',
    seoTitle: 'Fabric Yardage Calculator – How Much Fabric Do I Need? | Elite Fabrics',
    metaDescription: 'Calculate exactly how much fabric you need in yards and meters for sewing pillows, shirts, dresses, curtains, and quilts with our free yardage calculator.',
    category: 'Yardage & Projects',
    shortDescription: 'Estimate exact yardage and meters needed for garments, pillows, curtains, and quilts based on bolt width.',
    longDescription: 'Determine how many yards or meters of fabric you need for sewing, quilting, and home decorating projects. Choose from popular presets including throw pillows, shirts, dresses, curtains, and quilts, or calculate custom rectangular cuts with bolt width adaptations and shrinkage allowances.',
    iconName: 'Scissors',
    badge: 'Sewing Essential',
    features: [
      'Built-in project presets (Pillow, Shirt, Dress, Curtains, Quilt)',
      'Accounts for standard bolt widths (44/45", 54", 60")',
      'Calculates both yards and meters simultaneously',
      'Optional shrinkage & pattern matching safety buffers',
      'Rounds to standard retail fabric cuts (1/8 yd, 1/4 yd)'
    ],
    faqs: [
      {
        question: 'How do you calculate how much fabric you need?',
        answer: 'To calculate fabric yardage: 1) Determine the finished dimensions of all pattern pieces including seam allowances and hems. 2) Check the usable width of your fabric bolt (typically 44/45 inches for cottons or 58/60 inches for apparel knits and wools). 3) Divide the total linear length required by 36 to convert inches to yards (or divide by 39.37 for meters). 4) Always add 5% to 10% extra fabric for natural fiber pre-wash shrinkage and pattern matching.'
      },
      {
        question: 'Why does fabric bolt width matter for yardage?',
        answer: 'Fabric is sold by linear yard off the bolt, but bolts come in different widths. Standard quilting cottons and lawn fabrics are usually 44 to 45 inches wide, whereas apparel wools, synthetics, and knits are commonly 58 to 60 inches wide. A wider fabric (60") allows you to place pattern pieces side by side that would otherwise require twice the linear length on a narrow 44" bolt, saving 20% to 35% in total purchased yardage.'
      },
      {
        question: 'How much extra fabric should I buy for shrinkage?',
        answer: 'For 100% natural fibers like cotton, linen, rayon, and wool, buy an additional 5% to 10% yardage. Natural fibers contract in length when first washed and dried. For example, if your pattern specifies 3 yards of 100% linen or cotton khaddar, purchase 3.25 to 3.5 yards to ensure you do not run short after pre-washing.'
      }
    ],
    relatedArticleSlugs: [
      'how-to-start-learning-fabrics-beginner',
      'the-science-of-fabric-shrinkage',
      'fibers-vs-weaves-vs-knits-three-levels'
    ],
    relatedFabricSlugs: ['cotton', 'linen', 'silk', 'denim', 'khaddar']
  },
  {
    id: 'fabric-shrinkage-calculator',
    slug: 'fabric-shrinkage-calculator',
    title: 'Fabric Shrinkage Calculator',
    shortTitle: 'Shrinkage Calculator',
    h1: 'Fabric Shrinkage Calculator',
    seoTitle: 'Fabric Shrinkage Calculator – Calculate Wash Shrinkage % | Elite Fabrics',
    metaDescription: 'Calculate fabric shrinkage percentage accurately before and after washing. Learn shrinkage rates and pre-wash allowances for cotton, linen, wool, and rayon.',
    category: 'Shrinkage & Care',
    shortDescription: 'Calculate precise shrinkage and stretch percentages before and after washing with fiber-specific guidelines.',
    longDescription: 'Measure and calculate fabric wash shrinkage percentage before cutting and sewing. Input pre-wash and post-wash swatch measurements to determine warp and weft shrinkage, check whether your fabric meets industry stability benchmarks, and discover proper pre-wash allowances.',
    iconName: 'Droplets',
    badge: 'Pre-Wash Essential',
    features: [
      'Length and width shrinkage calculations',
      'Detects fabric stretch if expansion occurs',
      'Textile stability evaluations against standard tolerances',
      'Pattern cutting compensation tips',
      'Fiber-specific reference guidelines (Cotton, Linen, Rayon, Wool)'
    ],
    faqs: [
      {
        question: 'What is the formula for calculating fabric shrinkage?',
        answer: 'The standard textile industry formula for shrinkage percentage is: Shrinkage % = ((Measurement Before Washing - Measurement After Washing) / Measurement Before Washing) × 100. For example, if a 10-inch test swatch measures 9.5 inches after washing: ((10 - 9.5) / 10) × 100 = 5% shrinkage.'
      },
      {
        question: 'What is a normal shrinkage percentage for fabrics?',
        answer: 'Normal shrinkage ranges by fiber type: Pre-shrunk / Sanforized cottons: 1% to 3%; Standard 100% Cotton & Lawn: 3% to 5%; Pure Linen: 4% to 7%; Rayon / Viscose: 5% to 8%; Untreated Wool: 5% to 15% (can shrink dramatically if exposed to hot water and agitation); Synthetics (Polyester, Nylon): 0% to 1.5%.'
      },
      {
        question: 'Why should I pre-wash fabric before sewing?',
        answer: 'Yarns undergo mechanical tension on the industrial loom during weaving. When exposed to warm water and agitation during washing, the fibers relax and contract to their natural equilibrium state. If you sew a garment before pre-washing, the finished piece will shrink along seams, distort armholes, and shorten hem lengths on the very first laundry cycle.'
      }
    ],
    relatedArticleSlugs: [
      'the-science-of-fabric-shrinkage',
      'the-ultimate-fabric-care-manual',
      'how-to-start-learning-fabrics-beginner'
    ],
    relatedFabricSlugs: ['cotton', 'linen', 'khaddar', 'wool', 'rayon']
  },
  {
    id: 'gsm-to-oz-converter',
    slug: 'gsm-to-oz-converter',
    title: 'GSM ↔ Oz/yd² Converter',
    shortTitle: 'GSM ↔ Oz/yd²',
    h1: 'GSM to Oz/yd² Fabric Weight Converter',
    seoTitle: 'GSM to Oz Converter – Fabric Weight Converter (Oz/yd² ↔ GSM) | Elite Fabrics',
    metaDescription: 'Convert GSM (g/m²) to ounces per square yard (oz/yd²) instantly with our two-way fabric weight converter. Includes comprehensive fabric weight comparison charts.',
    category: 'Unit Converters',
    shortDescription: 'Bidirectional live converter between metric GSM (g/m²) and imperial US ounces per square yard (oz/yd²).',
    longDescription: 'Seamlessly convert fabric weight between international metric GSM (grams per square meter) and American ounces per square yard (oz/yd²). Features real-time two-way synchronization, linear yard weight calculation across standard bolt widths, and a reference chart for commercial fabric categories.',
    iconName: 'ArrowLeftRight',
    badge: 'Two-Way Live',
    features: [
      'Simultaneous bidirectional updates',
      'Standard US textile conversion factor (33.9057)',
      'Linear yard mass calculator for 45", 54", and 60" bolts',
      'Quick click presets for popular apparel weights',
      'Denim, shirting, and canvas weight comparison table'
    ],
    faqs: [
      {
        question: 'What is the conversion factor between GSM and oz/yd²?',
        answer: '1 ounce per square yard (oz/yd²) equals 33.9057 grams per square meter (g/m²). To convert GSM to oz/yd², divide the GSM by 33.9057 (or multiply by 0.02949). To convert oz/yd² to GSM, multiply the ounces by 33.9057.'
      },
      {
        question: 'What does "12 oz denim" mean in GSM?',
        answer: '12 oz denim refers to 12 ounces per square yard (oz/yd²). Multiplying 12 by 33.9057 gives approximately 407 GSM. This is the classic mid-to-heavyweight category used for traditional 5-pocket blue jeans and durable denim jackets.'
      },
      {
        question: 'Is oz/yd² the same as linear yard weight?',
        answer: 'No. Ounces per square yard (oz/yd²) measures an area of 36 inches by 36 inches (1 square yard). A linear yard, however, measures 36 inches in length multiplied by the full bolt width (e.g. 54 or 60 inches wide). A 60-inch wide fabric has 1.67 square yards per linear yard, meaning a 10 oz/yd² fabric will weigh 16.7 ounces per linear yard.'
      }
    ],
    relatedArticleSlugs: [
      'fabric-weight-demystified-gsm-ounces-guide',
      'trending-fabrics-2026',
      'fibers-vs-weaves-vs-knits-three-levels'
    ],
    relatedFabricSlugs: ['denim', 'cotton', 'linen', 'khaddar', 'lawn']
  },
  {
    id: 'fabric-measurement-converter',
    slug: 'fabric-measurement-converter',
    title: 'Fabric Measurement Converter',
    shortTitle: 'Measurement Converter',
    h1: 'Fabric Measurement Converter',
    seoTitle: 'Fabric Measurement Converter – Yards, Meters, Inches & CM | Elite Fabrics',
    metaDescription: 'Instantly convert fabric lengths and widths across inches, feet, yards, meters, and centimeters. Free educational textile measurement tool for sewists and crafters.',
    category: 'Unit Converters',
    shortDescription: 'Multi-unit instant converter for fabric lengths and widths across inches, feet, yards, meters, and centimeters.',
    longDescription: 'Easily convert fabric measurements between imperial and metric textile units. Enter any value in inches, feet, yards, meters, or centimeters to see all other units synchronize instantly. Includes sewing fractional yards reference and standard bolt dimensions.',
    iconName: 'Ruler',
    badge: 'Multi-Unit Sync',
    features: [
      'Synchronizes 5 textile units simultaneously (in, ft, yd, m, cm)',
      'Quick fractional yard buttons (1/8, 1/4, 1/3, 1/2, 5/8, 3/4, 1 yd)',
      'Common bolt width reference guide (36", 44/45", 54", 58/60", 108")',
      'Clean one-click copy for cutting lists',
      'Formatted for sewing patterns and upholstery procurement'
    ],
    faqs: [
      {
        question: 'How many inches are in a yard of fabric?',
        answer: 'There are exactly 36 inches in 1 yard of fabric (3 feet or approximately 91.44 centimeters). When purchasing fabric in the United States, length is measured along the bolt edge in 36-inch yard increments.'
      },
      {
        question: 'How do you convert yards to meters for fabric?',
        answer: '1 yard equals 0.9144 meters (or 91.44 centimeters). To convert yards to meters, multiply yards by 0.9144. To convert meters to yards, divide meters by 0.9144 (or multiply by 1.09361). A 3-yard cut of fabric equals approximately 2.74 meters.'
      },
      {
        question: 'What is a fat quarter in fabric measurements?',
        answer: 'A "fat quarter" is a specialty cut popular in quilting. It is made by cutting a half-yard of fabric (18 inches long) and then cutting it in half along the widthwise fold. On a standard 44-inch bolt, a fat quarter measures approximately 18 inches by 22 inches, providing a wider, more versatile rectangle than a standard linear quarter-yard (which is 9 inches by 44 inches).'
      }
    ],
    relatedArticleSlugs: [
      'how-to-start-learning-fabrics-beginner',
      'fabric-weight-demystified-gsm-ounces-guide',
      'the-science-of-fabric-shrinkage'
    ],
    relatedFabricSlugs: ['cotton', 'lawn', 'linen', 'silk', 'khaddar']
  }
];

export const TOOL_CATEGORIES = [
  'All',
  'Weight & Density',
  'Yardage & Projects',
  'Shrinkage & Care',
  'Unit Converters'
] as const;
