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
  category: 'Weight & Density' | 'Yardage & Projects' | 'Shrinkage & Care' | 'Unit Converters' | 'Cost & Estimations';
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
  },
  {
    id: 'curtain-fabric-calculator',
    slug: 'curtain-fabric-calculator',
    title: 'Curtain Fabric Calculator',
    shortTitle: 'Curtain Calculator',
    h1: 'Curtain Fabric Calculator',
    seoTitle: 'Curtain Fabric Calculator – Calculate Drapery Yardage | Elite Fabrics',
    metaDescription: 'Calculate how much fabric you need for window curtains and drapes. Accounts for window width, drop length, fullness ratio, hems, and pattern repeats.',
    category: 'Yardage & Projects',
    shortDescription: 'Calculate exact yardage, number of widths, and cut lengths for window drapes with custom fullness and hem allowances.',
    longDescription: 'Plan your custom drapery projects with precision. Enter window width and drop length, select your preferred fullness ratio (1.5x, 2.0x, 2.5x), bolt width (54", 60", 118"), and pattern repeat to calculate total yardage and panel cuts without expensive mistakes.',
    iconName: 'Maximize2',
    badge: 'Window Decor',
    features: [
      'Accounts for standard fullness ratios (1.5x, 2.0x, 2.5x, 3.0x)',
      'Calculates total widths/panels needed across bolt width',
      'Accommodates vertical pattern repeat matching',
      'Includes header (4") and double bottom hem (8") allowances',
      'Outputs both US linear yards and metric meters'
    ],
    faqs: [
      {
        question: 'What fullness ratio should I use for curtains?',
        answer: '2.0x fullness is the standard for most pleated or rod-pocket draperies. Sheer voile curtains look best at 2.5x to 3.0x fullness for privacy and rich gathers. Heavier fabrics like velvet look luxurious at 2.0x to 2.2x.'
      },
      {
        question: 'How much extra length do I need for curtain hems?',
        answer: 'Standard drapery construction requires 8 inches for a 4-inch double bottom hem and 4 inches for the top heading (12 inches total added to the finished drop).'
      },
      {
        question: 'What is wide-width curtain fabric?',
        answer: 'Wide-width drapery fabric (108" to 118" wide) is designed to be turned sideways (railroaded) so you can make seamless curtains for wide windows without vertical joins.'
      }
    ],
    relatedArticleSlugs: [
      'curtain-fabric-guide',
      'how-much-fabric-do-i-need',
      'fabric-yardage-explained'
    ],
    relatedFabricSlugs: ['linen', 'chiffon', 'velvet', 'cotton', 'silk']
  },
  {
    id: 'upholstery-fabric-calculator',
    slug: 'upholstery-fabric-calculator',
    title: 'Upholstery Fabric Calculator',
    shortTitle: 'Upholstery Calculator',
    h1: 'Upholstery Fabric Calculator',
    seoTitle: 'Upholstery Fabric Calculator – Estimate Furniture Yardage | Elite Fabrics',
    metaDescription: 'Estimate fabric yardage for reupholstering sofas, armchairs, dining seats, and cushions. Includes welting, pattern repeat, and cushion allowances.',
    category: 'Yardage & Projects',
    shortDescription: 'Estimate exact yardage for reupholstering sofas, armchairs, ottomans, and dining chairs with welt cord and pattern repeat factors.',
    longDescription: 'Planning a furniture reupholstery project? Calculate reliable fabric yardage benchmarks for armchairs, 2-seat loveseats, 3-seat sofas, sectionals, dining chair seats, and boxed cushions. Includes options for welt cord piping and patterned repeat matching.',
    iconName: 'Armchair',
    badge: 'Furniture Guide',
    features: [
      'Furniture presets (Armchair, Sofa, Loveseat, Dining Seats, Ottoman)',
      'Welt cord (piping) yardage calculation',
      'Pattern repeat match multipliers (up to 25% extra)',
      'Loose cushion options and deep-tufting adjustments',
      'Standard 54-inch commercial upholstery bolt width support'
    ],
    faqs: [
      {
        question: 'How much fabric do I need for a 3-cushion sofa?',
        answer: 'A standard 3-cushion 84-inch sofa typically requires 14 to 18 yards of 54-inch plain fabric. If using a large printed or plaided pattern, add 2 to 4 yards for repeat alignment.'
      },
      {
        question: 'Why is upholstery fabric always 54 inches wide?',
        answer: '54 inches (137 cm) is the worldwide standard for residential and commercial upholstery looms, allowing full coverage of furniture frames with minimal unsightly seams.'
      },
      {
        question: 'How much fabric is needed for a dining chair seat?',
        answer: 'A standard slip seat dining chair requires roughly 0.75 yards for two chairs (or about 0.5 yards per single chair seat including wrap-around stapling margin).'
      }
    ],
    relatedArticleSlugs: [
      'upholstery-fabric-guide',
      'canvas-fabric-guide',
      'how-much-fabric-do-i-need'
    ],
    relatedFabricSlugs: ['canvas', 'velvet', 'twill', 'linen', 'corduroy']
  },
  {
    id: 'quilt-fabric-calculator',
    slug: 'quilt-fabric-calculator',
    title: 'Quilt Fabric Calculator',
    shortTitle: 'Quilt Calculator',
    h1: 'Quilt Fabric Calculator',
    seoTitle: 'Quilt Fabric Calculator – Backing, Binding & Batting Yardage | Elite Fabrics',
    metaDescription: 'Calculate quilt backing yardage, binding strips, and batting dimensions for baby, crib, twin, full, queen, and king quilts with longarm overage margins.',
    category: 'Yardage & Projects',
    shortDescription: 'Calculate backing yardage, binding strips, and batting sizes for baby, twin, queen, and king quilts with standard seam options.',
    longDescription: 'Designed for quilters: determine the exact backing yardage needed for any quilt size using standard 44/45" quilting cotton or 108" wide-backs. Computes binding strip requirements (2.25" or 2.5" cuts), longarm 4-inch overage buffers, and vertical vs horizontal seams.',
    iconName: 'Grid',
    badge: 'Quilting Pro',
    features: [
      'Standard quilt size presets (Baby, Throw, Twin, Full, Queen, King)',
      'Calculates both 44" standard bolts and 108" wide-backs',
      'Binding strip calculator with mitered joining allowance',
      'Longarm quilting 4-inch perimeter buffer included',
      'Compares horizontal vs vertical backing seams to minimize waste'
    ],
    faqs: [
      {
        question: 'Why do quilt backings need 4 inches of extra fabric on all sides?',
        answer: 'Longarm quilting machines use rolling clamps that require at least 4 inches of backing and batting overage on each of the four sides (8 inches total extra width and length) to secure the quilt sandwich.'
      },
      {
        question: 'How much binding fabric do I need for a queen size quilt?',
        answer: 'A queen quilt (approx. 90" × 108") has a 396" perimeter and requires ⅔ to ¾ yard of 44" fabric cut into 2.5-inch strips.'
      },
      {
        question: 'What are 108-inch wide-backs?',
        answer: 'Wide-backs are specialty 108" (or 118") wide cotton fabrics manufactured specifically for quilt backs, allowing you to back full, queen, and king quilts seamlessly.'
      }
    ],
    relatedArticleSlugs: [
      'fabric-yardage-explained',
      'how-much-fabric-do-i-need',
      'cotton-gsm-guide'
    ],
    relatedFabricSlugs: ['cotton', 'muslin', 'poplin', 'linen', 'flannel']
  },
  {
    id: 'fabric-cost-calculator',
    slug: 'fabric-cost-calculator',
    title: 'Fabric Cost Calculator',
    shortTitle: 'Cost Calculator',
    h1: 'Fabric Cost Calculator',
    seoTitle: 'Fabric Cost Calculator – Total Project Cost Estimator | Elite Fabrics',
    metaDescription: 'Calculate the total cost of fabric, notions, lining, taxes, and labor per garment or home decor project. Free sewing project budget tool.',
    category: 'Cost & Estimations',
    shortDescription: 'Calculate total project cost including fabric yardage, tax, notions, lining, and labor with unit cost breakdowns.',
    longDescription: 'Keep your sewing, crafting, or commercial production budgets on track. Enter fabric price per yard or meter, total yardage, notions/interfacing, shipping and sales tax, plus optional sewing labor to determine cost per piece and cost per square yard.',
    iconName: 'DollarSign',
    badge: 'Budget Tool',
    features: [
      'Calculates fabric total with local sales tax and shipping',
      'Incorporates notions (zippers, buttons, thread, interfacing)',
      'Optional labor hour and hourly rate calculation',
      'Calculates cost per square yard and cost per finished piece',
      'Retail pricing markup estimator for handmade sellers'
    ],
    faqs: [
      {
        question: 'How do I calculate cost per yard of fabric including waste?',
        answer: 'Divide the total purchase cost of the fabric by the usable yardage after shrinkage and trimming. For example, if 3 yards cost $36 and shrinks by 10% (leaving 2.7 usable yards), your effective cost is $36 ÷ 2.7 = $13.33 per usable yard.'
      },
      {
        question: 'What pricing markup should handmade makers use?',
        answer: 'Standard craft and bespoke sewing formulas typically use: Wholesale = (Materials + Labor) × 2, and Retail = Wholesale × 2 (or 3x total production cost).'
      }
    ],
    relatedArticleSlugs: [
      'how-much-fabric-do-i-need',
      'fabric-yardage-explained',
      'fabric-weight-demystified-gsm-ounces-guide'
    ],
    relatedFabricSlugs: ['cotton', 'linen', 'silk', 'wool', 'denim']
  },
  {
    id: 'yarn-count-converter',
    slug: 'yarn-count-converter',
    title: 'Yarn Count Converter',
    shortTitle: 'Yarn Count Converter',
    h1: 'Yarn Count Converter (Ne, Nm, Tex, Denier)',
    seoTitle: 'Yarn Count Converter – Ne, Nm, Tex, Denier, Worsted & Lea | Elite Fabrics',
    metaDescription: 'Convert yarn count between English Cotton Count (Ne), Metric Count (Nm), Tex, Denier, Worsted Count (NeW), and Linen Lea. Live bidirectional textile converter.',
    category: 'Weight & Density',
    shortDescription: 'Bidirectional converter between English Cotton Count (Ne), Metric (Nm), Tex, Denier, Worsted (NeW), and Linen Lea.',
    longDescription: 'A precision textile engineering tool for spinners, knitters, weavers, and fabric researchers. Convert any yarn thickness across direct systems (Tex, Denier) and indirect count systems (Cotton Ne, Metric Nm, Worsted NeW, Linen Lea) with instant live formulas.',
    iconName: 'Activity',
    badge: 'Textile Science',
    features: [
      'Direct systems: Tex (g/1000m) & Denier (g/9000m)',
      'Indirect systems: Cotton Count (Ne), Metric (Nm), Worsted (NeW), Linen (Lea)',
      'Real-time multi-system synchronization',
      'Shows standard trade yarn examples (30s cotton, 150D polyester, 60s lawn)',
      'Explains direct vs indirect count mathematical inversion'
    ],
    faqs: [
      {
        question: 'What is the difference between direct and indirect yarn counts?',
        answer: 'In direct systems (Tex, Denier), the number measures weight per fixed length—higher numbers mean thicker yarns. In indirect systems (Cotton Ne, Metric Nm, Lea), the number measures length per fixed weight—higher numbers mean finer, thinner yarns.'
      },
      {
        question: 'What does "40s cotton" mean?',
        answer: '"40s cotton" refers to a 40 Ne (English Cotton Count) yarn. It means 40 hanks of 840 yards each weigh 1 pound. It is a fine, lightweight yarn used for quality shirting and premium bedsheets.'
      },
      {
        question: 'How do you convert Denier to Tex?',
        answer: 'Tex equals Denier divided by 9 (Tex = Denier ÷ 9). For example, a 150 Denier polyester thread equals 16.7 Tex.'
      }
    ],
    relatedArticleSlugs: [
      'thread-count-explained',
      'warp-vs-weft',
      'what-is-gsm-in-fabric'
    ],
    relatedFabricSlugs: ['cotton', 'silk', 'linen', 'wool', 'lawn']
  }
];

export const TOOL_CATEGORIES = [
  'All',
  'Weight & Density',
  'Yardage & Projects',
  'Shrinkage & Care',
  'Unit Converters',
  'Cost & Estimations'
] as const;

