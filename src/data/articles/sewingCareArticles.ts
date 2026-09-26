import { Article } from '../../types';

export const SEWING_CARE_ARTICLES: Article[] = [
  {
    id: 'how-much-fabric-do-i-need',
    slug: 'how-much-fabric-do-i-need',
    title: 'How Much Fabric Do I Need? Yardage Estimates for Common Projects',
    subtitle: 'A practical guide to estimating fabric yardage for pillows, curtains, shirts, dresses, and pants before heading to the fabric store.',
    category: 'How-To Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Pattern Making & Textile Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Apparel construction standards and yardage metrics'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '8 min read',
    excerpt: 'Never buy too much or too little fabric again. See exact yardage benchmarks for throw pillows, curtains, shirts, dresses, and trousers.',
    seoTitle: 'How Much Fabric Do I Need? Yardage Cheat Sheet for Sewists',
    metaDescription: 'Find out how much fabric you need for shirts, dresses, pillows, and curtains. Quick yardage estimates for 45-inch and 60-inch fabric bolts.',
    featuredImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Measuring tape lying over rolled linen fabric ready for cutting',
    imageCaption: 'Accurate yardage estimation prevents wasteful fabric surplus and mid-project fabric shortages.',
    tableOfContents: [
      { id: 'the-basics', title: 'Why Fabric Width Changes Everything', level: 2 },
      { id: 'yardage-table', title: 'Quick Yardage Cheat Sheet by Project', level: 2 },
      { id: 'shrinkage-buffer', title: 'The Non-Negotiable Shrinkage Buffer', level: 2 },
      { id: 'napped-fabrics', title: 'Directional Prints, Stripes, and Velvet', level: 2 }
    ],
    contentHtml: `
      <section id="the-basics">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Why Fabric Width Changes Everything</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Fabric is sold by linear length (yards or meters), but bolts come in different widths. Standard quilting <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> is typically <strong>44 to 45 inches wide</strong>, whereas apparel wools and knits are usually <strong>58 to 60 inches wide</strong>.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Because a 60-inch bolt offers roughly 33% more surface area per linear yard than a 45-inch bolt, you can often fit pattern pieces side by side and purchase significantly less total yardage.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Calculate your exact project dimensions instantly using our free <a href="#tools/fabric-yardage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Yardage Calculator</a>.
        </p>
      </section>

      <section id="yardage-table">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Quick Yardage Cheat Sheet by Project</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Sewing Project</th>
                <th class="p-3 font-semibold">44"–45" Fabric Width</th>
                <th class="p-3 font-semibold">58"–60" Fabric Width</th>
                <th class="p-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">18" × 18" Throw Pillow</td>
                <td class="p-3">⅝ Yard</td>
                <td class="p-3">⅝ Yard</td>
                <td class="p-3">Yields 1 pillow (front + back cuts)</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Women's Blouse (Short Sleeve)</td>
                <td class="p-3">1 ¾ to 2 Yards</td>
                <td class="p-3">1 ¼ to 1 ½ Yards</td>
                <td class="p-3">Standard adult sizes S–L</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Men's Dress Shirt (Long Sleeve)</td>
                <td class="p-3">2 ½ to 2 ¾ Yards</td>
                <td class="p-3">1 ⅞ to 2 ¼ Yards</td>
                <td class="p-3">Includes collar band, cuffs, and placket</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">A-Line Knee-Length Dress</td>
                <td class="p-3">2 ½ to 3 Yards</td>
                <td class="p-3">1 ¾ to 2 ¼ Yards</td>
                <td class="p-3">Assumes plain solid weave</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Casual Trousers / Slacks</td>
                <td class="p-3">2 ½ to 2 ¾ Yards</td>
                <td class="p-3">1 ½ to 1 ¾ Yards</td>
                <td class="p-3">Pattern legs fit side-by-side on 60"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="shrinkage-buffer">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">The Non-Negotiable Shrinkage Buffer</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Always add an extra <strong>10% to your yardage</strong> when working with natural fibers like pure cotton, <a href="#fabric/linen" class="text-[#9E472A] font-semibold underline">linen</a>, or rayon. A 3-yard cut of raw linen will frequently lose 4 to 6 inches after the first pre-wash and drying cycle.
        </p>
      </section>
    `,
    tags: ['Yardage', 'Sewing', 'Fabric Width', 'Dressmaking', 'Patterns'],
    sources: [
      { title: 'Reader’s Digest Complete Guide to Sewing', institutionOrAuthor: 'Reader’s Digest Association', year: '2019' }
    ],
    relatedSlugs: ['fabric-yardage-explained', 'how-to-measure-fabric', 'fabric-shrinkage-guide'],
    faqs: [
      {
        question: 'How much fabric do I need for standard 84-inch curtains?',
        answer: 'For a standard window pair at 2x fullness on 54-inch fabric, you generally need 5 to 6 yards.'
      },
      {
        question: 'Can I make pants with 1.5 yards of fabric?',
        answer: 'Yes, if the fabric is 60 inches wide and your inseam is average or cropped. On 45-inch fabric, you will need at least 2.5 yards.'
      }
    ]
  },
  {
    id: 'fabric-yardage-explained',
    slug: 'fabric-yardage-explained',
    title: 'Fabric Yardage Explained: Yards, Bolts, and Fractions Simplified',
    subtitle: 'Demystifying how fabric is measured and sold in US stores: linear yards, fractional cuts, bolt folds, and grainlines.',
    category: 'How-To Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Retail fabric trade standards'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '6 min read',
    excerpt: 'What does a yard of fabric actually look like? Understand linear yards, common fractional cuts (⅛, ¼, ½ yard), and how bolts are folded.',
    seoTitle: 'Fabric Yardage Explained: Yards, Bolts & Fractions Guide',
    metaDescription: 'New to buying fabric? Learn how fabric yardage works, what 1 yard measures in inches and centimeters, and how cutting tables measure cuts.',
    featuredImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Cutting table in a fabric shop showing wooden yardstick and bolt cardboard core',
    imageCaption: 'Fabric yardage is measured along the selvage edge regardless of how wide the bolt is.',
    tableOfContents: [
      { id: 'what-is-a-yard', title: 'What Exactly Is a Yard of Fabric?', level: 2 },
      { id: 'fractions-chart', title: 'Fractional Yards in Inches and Centimeters', level: 2 },
      { id: 'fat-quarter', title: 'What Is a Fat Quarter?', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-a-yard">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Exactly Is a Yard of Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          One yard of fabric is a rectangular piece measuring <strong>36 inches long</strong> (3 feet or 91.44 cm) cut along the length of the bolt.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          The other dimension depends on the bolt. If the bolt is 44 inches wide, 1 yard is 36" × 44". If the bolt is 60 inches wide, 1 yard is 36" × 60".
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Convert any length instantly with our <a href="#tools/fabric-measurement-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Measurement Converter</a>.
        </p>
      </section>

      <section id="fractions-chart">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Fractional Yards in Inches and Centimeters</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Fabric Store Fraction</th>
                <th class="p-3 font-semibold">Decimal Yards</th>
                <th class="p-3 font-semibold">Length in Inches</th>
                <th class="p-3 font-semibold">Metric (cm)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">⅛ Yard</td>
                <td class="p-3">0.125 yd</td>
                <td class="p-3">4.5 inches</td>
                <td class="p-3">11.4 cm</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">¼ Yard</td>
                <td class="p-3">0.250 yd</td>
                <td class="p-3">9 inches</td>
                <td class="p-3">22.9 cm</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">⅓ Yard</td>
                <td class="p-3">0.333 yd</td>
                <td class="p-3">12 inches</td>
                <td class="p-3">30.5 cm</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">½ Yard</td>
                <td class="p-3">0.500 yd</td>
                <td class="p-3">18 inches</td>
                <td class="p-3">45.7 cm</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">¾ Yard</td>
                <td class="p-3">0.750 yd</td>
                <td class="p-3">27 inches</td>
                <td class="p-3">68.6 cm</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">1 Full Yard</td>
                <td class="p-3">1.000 yd</td>
                <td class="p-3">36 inches</td>
                <td class="p-3">91.4 cm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="fat-quarter">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Is a Fat Quarter?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          A standard quarter-yard is 9" long by 44" wide—a long, skinny strip. Quilters prefer a <strong>Fat Quarter</strong>, which takes a half-yard (18" × 44") and cuts it in half across the fold, creating an 18" × 22" piece. It contains the exact same area (396 sq in) but in a much more useful squarish shape.
        </p>
      </section>
    `,
    tags: ['Fabric Yardage', 'Sewing Basics', 'Fat Quarter', 'Measurements'],
    sources: [
      { title: 'The Sewing Book', institutionOrAuthor: 'Alison Smith / Dorling Kindersley', year: '2018' }
    ],
    relatedSlugs: ['how-much-fabric-do-i-need', 'how-to-measure-fabric', 'fabric-weight-chart'],
    faqs: [
      {
        question: 'Can you buy a half-yard of fabric at stores?',
        answer: 'Yes, most fabric stores happily cut in ⅛-yard or ¼-yard increments.'
      }
    ]
  },
  {
    id: 'how-to-measure-fabric',
    slug: 'how-to-measure-fabric',
    title: 'How to Measure Fabric Accurately: Length, Width, and Grainline',
    subtitle: 'Learn how to measure fabric yardage at home, check for straight grain, and measure body dimensions for sewing patterns.',
    category: 'How-To Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Pattern Making & Textile Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Apparel sizing and measuring guidelines'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Step-by-step guide to measuring fabric length, finding the true grainline, and accounting for usable width inside the selvages.',
    seoTitle: 'How to Measure Fabric Accurately: Step-by-Step Sewing Guide',
    metaDescription: 'Learn how to measure fabric correctly. Understand selvages, usable width, straightening grainlines, and measuring for clothing patterns.',
    featuredImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Hands measuring patterned fabric with a tailor’s tape measure on a wooden workspace',
    imageCaption: 'Measuring fabric on a flat table ensures grainline alignment and pattern precision.',
    tableOfContents: [
      { id: 'table-setup', title: '1. Lay Fabric Completely Flat', level: 2 },
      { id: 'selvage-to-selvage', title: '2. Measuring Usable Width (Ignoring Selvages)', level: 2 },
      { id: 'finding-grain', title: '3. Checking True Grainline Before Measuring', level: 2 }
    ],
    contentHtml: `
      <section id="table-setup">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. Lay Fabric Completely Flat</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Never measure fabric while it hangs off the edge of a table or over your lap. Gravity stretches textiles lengthwise, causing you to misjudge cuts by several inches. Always lay fabric flat on a cutting mat or clean hard floor.
        </p>
      </section>

      <section id="selvage-to-selvage">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Measuring Usable Width (Ignoring Selvages)</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          The finished, tightly woven edges along the sides of a fabric bolt are called <strong>selvages</strong> (or selvedges). Selvages often feature needle holes, brand text, and tighter weave tension that puckers in wash.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When checking width for a sewing project, measure inside the selvages. A 45-inch bolt generally has only <strong>43 to 44 inches of usable width</strong>.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Need quick dimension calculations? Check our <a href="#tools/fabric-measurement-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Measurement Converter</a>.
        </p>
      </section>

      <section id="finding-grain">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Checking True Grainline Before Measuring</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Woven fabrics have warp threads (lengthwise) and weft threads (crosswise) meeting at 90-degree angles. If raw edges were cut crooked at the store, pull a single crosswise thread across the fabric width and cut along that pulled thread path to establish a true 90-degree square edge.
        </p>
      </section>
    `,
    tags: ['Measuring', 'Sewing', 'Selvage', 'Grainline', 'Fabric Width'],
    sources: [
      { title: 'ASTM D3774 Standard Test Method for Width of Textile Fabric', institutionOrAuthor: 'ASTM International', year: '2019' }
    ],
    relatedSlugs: ['how-much-fabric-do-i-need', 'fabric-yardage-explained', 'warp-vs-weft'],
    faqs: [
      {
        question: 'Should I include the selvage when cutting patterns?',
        answer: 'No. The selvage behaves differently in laundry and will cause puckering along seams. Always trim selvages off.'
      }
    ]
  },
  {
    id: 'why-cotton-shrinks',
    slug: 'why-cotton-shrinks',
    title: 'Why Cotton Shrinks: The Science of Fiber Relaxation in Laundry',
    subtitle: 'Understand the molecular reasons behind cotton shrinkage, the difference between hot water and mechanical tumble drying, and how to stop it.',
    category: 'Fabric Care',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Fiber Science & Textile Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Textile chemistry research based on AATCC 135 standards'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '6 min read',
    excerpt: 'Ever wonder why your favorite cotton t-shirt shrank after washing? Learn why cotton fibers contract in heat and how to prevent shrinkage.',
    seoTitle: 'Why Cotton Shrinks: The Science & How to Prevent It',
    metaDescription: 'Discover why 100% cotton shrinks in hot water and dryer heat. Learn the science of tension relaxation and practical tips to protect your clothes.',
    featuredImage: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern washing machine laundry drum with clean white cotton towels inside',
    imageCaption: 'Moisture, heat, and mechanical agitation release loom tension, causing natural cotton fibers to contract.',
    tableOfContents: [
      { id: 'loom-tension', title: '1. Loom Tension Relaxation', level: 2 },
      { id: 'hydrogen-bonds', title: '2. Water and Cellulose Hydrogen Bonds', level: 2 },
      { id: 'washer-vs-dryer', title: '3. Washer vs Dryer: What Causes More Shrinkage?', level: 2 },
      { id: 'prevention-rules', title: '4. Five Rules to Stop Cotton Shrinking', level: 2 }
    ],
    contentHtml: `
      <section id="loom-tension">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. Loom Tension Relaxation</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          During industrial manufacturing, <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> yarns are pulled tight under heavy mechanical tension as looms weave thousands of threads per minute.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When you submerge fabric into warm water, the stressed cotton fibers relax back to their coiled, natural equilibrium state. This is known in textile science as <strong>relaxation shrinkage</strong>.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Calculate the exact shrinkage rate of your fabric using our interactive <a href="#tools/fabric-shrinkage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Shrinkage Calculator</a>.
        </p>
      </section>

      <section id="hydrogen-bonds">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Water and Cellulose Hydrogen Bonds</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Cotton is 90% pure cellulose. When wet, water molecules penetrate the fiber walls and temporarily break hydrogen bonds between polymer chains. As heat evaporates the water in a clothes dryer, the cellulose chains draw together closer than they originally were, locking in smaller dimensions.
        </p>
      </section>

      <section id="washer-vs-dryer">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Washer vs Dryer: What Causes More Shrinkage?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Many people blame hot wash water, but <strong>the tumble dryer is the real culprit</strong>. The combination of high heat and violent mechanical tumbling compresses relaxed fibers into tightly curled loops. Drying your clothes on a drying rack eliminates up to 80% of laundry shrinkage.
        </p>
      </section>

      <section id="prevention-rules">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. Five Rules to Stop Cotton Shrinking</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li>Always pre-wash raw cotton yardage before cutting sewing patterns.</li>
          <li>Wash cotton garments in cold water (30°C / 85°F).</li>
          <li>Select gentle wash spin speeds (800 RPM instead of 1400 RPM).</li>
          <li>Tumble dry on delicate low heat, or better yet, line dry outdoors or on a rack.</li>
          <li>Gently reshape and smooth collar and hem seams with your hands while wet.</li>
        </ul>
      </section>
    `,
    tags: ['Cotton', 'Shrinkage', 'Fabric Care', 'Laundry', 'Cellulose'],
    sources: [
      { title: 'Dimensional Changes of Fabrics after Home Laundering (AATCC 135)', institutionOrAuthor: 'American Association of Textile Chemists and Colorists', year: '2018' }
    ],
    relatedSlugs: ['fabric-shrinkage-guide', 'washing-different-fabrics', 'cotton-gsm-guide'],
    faqs: [
      {
        question: 'Can you un-shrink a 100% cotton shirt?',
        answer: 'Partially. Soak the garment in lukewarm water with 2 tablespoons of hair conditioner for 30 minutes, gently stretch the fibers out on a flat towel, and let it dry flat.'
      },
      {
        question: 'Does cotton keep shrinking every wash?',
        answer: 'No. Most cotton fabrics shrink between 3% and 5% during the first two washing cycles, after which dimensions stabilize.'
      }
    ]
  },
  {
    id: 'fabric-shrinkage-guide',
    slug: 'fabric-shrinkage-guide',
    title: 'Fabric Shrinkage Guide: Expected Shrinkage Rates for Every Fiber',
    subtitle: 'From zero-shrink polyester to 10% raw linen: benchmarks, pre-wash recommendations, and cutting allowances for sewists.',
    category: 'Fabric Care',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Science & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Dimensional stability testing based on ISO 6330 and AATCC 135'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Comprehensive fabric shrinkage guide. Compare shrinkage percentages for cotton, linen, silk, wool, rayon, and polyester before cutting.',
    seoTitle: 'Fabric Shrinkage Guide: Rates & Allowances by Fiber Type',
    metaDescription: 'Find out how much cotton, linen, wool, and rayon shrink in the wash. Benchmark percentages and sewing allowances for every popular textile.',
    featuredImage: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clothes hanging on an indoor wooden drying rack to prevent laundry shrinkage',
    imageCaption: 'Different textile fibers experience varying degrees of dimensional relaxation in warm water.',
    tableOfContents: [
      { id: 'shrinkage-table', title: 'Expected Shrinkage Rates by Fiber', level: 2 },
      { id: 'how-to-test', title: 'How to Test Swatch Shrinkage at Home', level: 2 },
      { id: 'sanforization', title: 'What Does "Sanforized" or "Pre-Shrunk" Mean?', level: 2 }
    ],
    contentHtml: `
      <section id="shrinkage-table">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Expected Shrinkage Rates by Fiber</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Fiber / Fabric Type</th>
                <th class="p-3 font-semibold">Standard Shrinkage</th>
                <th class="p-3 font-semibold">Pre-Wash Yardage Buffer</th>
                <th class="p-3 font-semibold">Primary Risk</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">100% <a href="#fabric/cotton" class="text-[#9E472A] underline">Cotton</a></td>
                <td class="p-3">3% to 5%</td>
                <td class="p-3">+5% to 8%</td>
                <td class="p-3">Hot water wash &amp; high dryer heat</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Pure <a href="#fabric/linen" class="text-[#9E472A] underline">Linen</a></td>
                <td class="p-3">5% to 8%</td>
                <td class="p-3">+10%</td>
                <td class="p-3">High warp (lengthwise) contraction</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/rayon" class="text-[#9E472A] underline">Rayon</a> / Viscose</td>
                <td class="p-3">5% to 10%</td>
                <td class="p-3">+10% to 12%</td>
                <td class="p-3">High shrinkage even in lukewarm water</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Untreated <a href="#fabric/wool" class="text-[#9E472A] underline">Wool</a></td>
                <td class="p-3">10% to 25%+ (Felting)</td>
                <td class="p-3">Dry Clean Only</td>
                <td class="p-3">Irreversible fiber scale interlocking</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/polyester" class="text-[#9E472A] underline">Polyester</a> / Nylon</td>
                <td class="p-3">0% to 1.5%</td>
                <td class="p-3">None required</td>
                <td class="p-3">High heat iron melting (not shrinkage)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="how-to-test">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">How to Test Swatch Shrinkage at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Before cutting an expensive pattern, cut a 10" × 10" square swatch with pinking shears. Wash and dry it exactly as you plan to care for the finished garment. Measure again. If it now measures 9.5" × 9.7", you have 5% length shrinkage and 3% width shrinkage.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Enter your measurements into our free <a href="#tools/fabric-shrinkage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Shrinkage Calculator</a> for precise results.
        </p>
      </section>
    `,
    tags: ['Fabric Shrinkage', 'Linen', 'Cotton', 'Rayon', 'Wool', 'Care'],
    sources: [
      { title: 'ISO 6330 Domestic washing and drying procedures for textile testing', institutionOrAuthor: 'International Organization for Standardization', year: '2021' }
    ],
    relatedSlugs: ['why-cotton-shrinks', 'washing-different-fabrics', 'how-much-fabric-do-i-need'],
    faqs: [
      {
        question: 'Should I wash fabric before sewing?',
        answer: 'Yes! Always pre-wash fabric using the exact laundry routine you intend to use for the finished piece.'
      }
    ]
  },
  {
    id: 'washing-different-fabrics',
    slug: 'washing-different-fabrics',
    title: 'Washing Different Fabrics: Temperature, Detergent, and Cycle Guide',
    subtitle: 'The essential laundry handbook covering cold vs warm wash settings, detergent types, and safe drying methods for every fabric.',
    category: 'Fabric Care',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Care & Conservation',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Laundry testing and fabric maintenance standards'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Never ruin clothes in the wash again. Simple temperature rules, gentle detergent recommendations, and cycle guidelines for all fabrics.',
    seoTitle: 'Washing Different Fabrics: Complete Temperature & Care Guide',
    metaDescription: 'How to wash cotton, linen, silk, wool, and synthetics safely. Practical water temperature, detergent, and drying rules to keep clothes looking new.',
    featuredImage: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Neatly folded stacks of clean natural laundry on a laundry shelf',
    imageCaption: 'Sorting textiles by fiber fragility and color prevents fiber abrasion, bleeding, and shrinkage.',
    tableOfContents: [
      { id: 'temperature-rules', title: 'Water Temperature Guidelines', level: 2 },
      { id: 'fiber-matrix', title: 'Laundry Matrix by Fiber Type', level: 2 },
      { id: 'drying-methods', title: 'Air Drying vs Machine Drying', level: 2 }
    ],
    contentHtml: `
      <section id="temperature-rules">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Water Temperature Guidelines</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Modern laundry detergents use active enzymes that dissolve oils and dirt effectively even in cold water. In fact, <strong>washing in cold water (30°C / 85°F)</strong> protects fibers from color fade, heat shrinkage, and micro-breakage. Reserve hot water (60°C / 140°F) strictly for white cotton bedding, sanitizing kitchen towels, and cloth diapers.
        </p>
      </section>

      <section id="fiber-matrix">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Laundry Matrix by Fiber Type</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Fabric</th>
                <th class="p-3 font-semibold">Ideal Water Temp</th>
                <th class="p-3 font-semibold">Cycle Setting</th>
                <th class="p-3 font-semibold">Drying Method</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/cotton" class="text-[#9E472A] underline">Cotton</a></td>
                <td class="p-3">Cold to Warm (30–40°C)</td>
                <td class="p-3">Normal / Regular</td>
                <td class="p-3">Tumble dry low or line dry</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/linen" class="text-[#9E472A] underline">Linen</a></td>
                <td class="p-3">Cold to Warm (30°C)</td>
                <td class="p-3">Gentle / Delicate</td>
                <td class="p-3">Line dry; iron while damp</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/silk" class="text-[#9E472A] underline">Silk</a></td>
                <td class="p-3">Cool (Under 30°C)</td>
                <td class="p-3">Hand wash or Delicate mesh bag</td>
                <td class="p-3">Air dry flat away from direct sunlight</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/wool" class="text-[#9E472A] underline">Wool</a></td>
                <td class="p-3">Cold (Under 30°C)</td>
                <td class="p-3">Wool / Handwash (Zero spin)</td>
                <td class="p-3">Dry flat on a towel; never tumble</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/polyester" class="text-[#9E472A] underline">Polyester</a></td>
                <td class="p-3">Warm (40°C)</td>
                <td class="p-3">Permanent Press / Normal</td>
                <td class="p-3">Tumble dry low; dries quickly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="drying-methods">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Air Drying vs Machine Drying</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Tumble drying creates friction that causes pilling and lint shedding. Air drying on a wooden drying rack or clothesline preserves elasticity, prevents garment distortion, and cuts household energy bills.
        </p>
      </section>
    `,
    tags: ['Laundry', 'Fabric Care', 'Washing Guide', 'Cotton', 'Linen', 'Silk', 'Wool'],
    sources: [
      { title: 'Care Labeling of Textile Apparel (16 CFR Part 423)', institutionOrAuthor: 'Federal Trade Commission', year: '2020' }
    ],
    relatedSlugs: ['why-cotton-shrinks', 'fabric-shrinkage-guide', 'fabric-blend-guide'],
    faqs: [
      {
        question: 'Is fabric softener bad for clothes?',
        answer: 'Yes, for towels and athletic wear. Softeners coat fibers in a waxy chemical film that reduces absorbency in cotton towels and traps odor in workout polyester.'
      }
    ]
  }
];
