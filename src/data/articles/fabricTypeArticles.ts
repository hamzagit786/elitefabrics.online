import { Article } from '../../types';

export const FABRIC_TYPE_ARTICLES: Article[] = [
  {
    id: 'canvas-fabric-guide',
    slug: 'canvas-fabric-guide',
    title: 'Canvas Fabric Guide: Duck Canvas, Weights, and Sewing Tips',
    subtitle: 'From artist stretched canvases to heavy #10 duck workwear: everything you need to know about canvas durability, numbers, and care.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Heavyweight textile specifications'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-28',
    readTime: '8 min read',
    excerpt: 'Explore canvas fabric and cotton duck. Learn about numbered duck systems, water-resistant coatings, and how to sew heavy canvas on home sewing machines.',
    seoTitle: 'Canvas Fabric Guide: Duck Weights, Uses & Sewing Advice',
    metaDescription: 'Complete canvas fabric guide. Understand duck canvas numbers, GSM weights, heavy-duty applications, and sewing machine needle recommendations.',
    featuredImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Tightly woven heavy beige cotton duck canvas texture close-up',
    imageCaption: 'Heavy plain-weave cotton duck canvas provides unmatched abrasion resistance.',
    keyTakeaways: [
      'Canvas is a heavy-duty plain-weave fabric categorized in the US by Numbered Duck (#1 to #12), where smaller numbers indicate heavier fabrics.',
      '#10 Duck (approx. 14.7 oz / 500 GSM) is the industry standard for utility jackets, work aprons, and rugged tote bags.',
      'When sewing canvas at home, use heavy Jeans/Denim needles (size 100/16 or 110/18), a walking foot, and heavy-duty polyester thread.',
      'Waxed canvas should never be machine washed or dry-cleaned—brush dirt off dry and spot-clean with cold water.'
    ],
    imagePrompt: 'Macro product photography of thick natural ecru duck canvas fabric with visible tight basket plain weave, brass grommets, heavy bonded nylon stitching, warm ambient studio lighting.',
    pinterest: {
      title: 'Canvas Fabric Guide: Duck Weights, Uses & Sewing Advice',
      description: 'Sewing with canvas? Learn how Numbered Duck weights work, what needle size to use, and how to sew heavy canvas without breaking needles.',
      imagePrompt: 'Vertical 2:3 Pinterest infographic explaining numbered duck canvas weights from #12 to #4 with home sewing machine tips.'
    },
    relatedTool: {
      name: 'Upholstery Fabric Calculator',
      path: '#tools/upholstery-fabric-calculator',
      description: 'Calculate yardage needed for heavy canvas slipcovers, cushion covers, and furniture reupholstery.'
    },
    relatedFabrics: ['canvas', 'cotton', 'twill', 'linen'],
    tableOfContents: [
      { id: 'what-is-canvas', title: '1. What Is Canvas Fabric?', level: 2 },
      { id: 'duck-numbers', title: '2. The Cotton Duck Numbering System', level: 2 },
      { id: 'plain-vs-duck', title: '3. Single-Fill vs Double-Fill Duck Canvas', level: 2 },
      { id: 'best-applications', title: '4. Best Applications: From Totes to Slipcovers', level: 2 },
      { id: 'sewing-tips', title: '5. How to Sew Heavy Canvas at Home', level: 2 },
      { id: 'washing-and-care', title: '6. Washing, Shrinkage & Waxing Canvas', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-canvas">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. What Is Canvas Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/canvas" class="text-[#9E472A] font-semibold underline">Canvas</a> is an extremely durable, heavyweight plain-weave textile traditionally woven from sturdy <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> or <a href="#fabric/hemp" class="text-[#9E472A] font-semibold underline">hemp</a> yarns.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Unlike fine apparel fabrics, canvas utilizes thick, plied yarns packed closely together under high loom tension. This tight construction creates a rugged physical barrier that resists punctures, wind penetration, and heavy abrasive rubbing.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When estimating fabric quantities for heavy furniture slipcovers or floor cushions, calculate your yardage with our <a href="#tools/upholstery-fabric-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Upholstery Fabric Calculator</a>.
        </p>
      </section>

      <section id="duck-numbers">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. The Cotton Duck Numbering System</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          In the United States, commercial canvas is officially designated under the historic <strong>Numbered Duck</strong> scale (established by the National Bureau of Standards, from #1 to #12). In this inverted system, <em>the smaller the number, the heavier the fabric</em>:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>#12 Duck (approx. 11.5 oz / 390 GSM):</strong> The lightest numbered duck. Excellent for structured tote bags, work aprons, and fitted furniture slipcovers.</li>
          <li><strong>#10 Duck (approx. 14.7 oz / 500 GSM):</strong> The undisputed workwear industry standard. Used for Carhartt-style utility jackets, heavy tool rolls, and duffel bags.</li>
          <li><strong>#8 Duck (approx. 18 oz / 610 GSM):</strong> Industrial heavyweight grade. Tents, boat covers, tipis, and outdoor gear.</li>
          <li><strong>#4 Duck (approx. 24 oz / 815 GSM):</strong> Extreme industrial grade. Machinery belts, sandbags, and ocean-going sea bags.</li>
        </ul>
      </section>

      <section id="plain-vs-duck">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Single-Fill vs Double-Fill Duck Canvas</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Commercial duck canvas is categorized into two weaving constructions:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Single-Fill Canvas:</strong> Woven with single warp yarns and single weft yarns. It is slightly softer, less expensive, and commonly used for artist painting surfaces and light craft projects.</li>
          <li><strong>Double-Fill Canvas (Army Duck):</strong> Woven with two-ply yarns in both warp and weft directions. This creates an airtight, smooth, water-repellent surface favored by the military for field equipment. Learn more on warp and weft yarn geometry in our <a href="#articles/warp-vs-weft" class="text-[#9E472A] underline">Warp vs Weft Guide</a>.</li>
        </ul>
      </section>

      <section id="best-applications">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. Best Applications: From Totes to Slipcovers</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Canvas excels wherever structural stability and physical toughness are paramount:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Heavy Utility Bags:</strong> Tote bags, backpack bases, and duffels that stand upright on their own.</li>
          <li><strong>Workwear Outerwear:</strong> Chore coats, carpenter overalls, and work vests that endure constant scrapes. Compare canvas to denim in our <a href="#articles/denim-gsm-chart" class="text-[#9E472A] underline">Denim GSM Chart</a>.</li>
          <li><strong>Home Decor &amp; Upholstery:</strong> Heavy sofa slipcovers, boxed floor cushions, and patio furniture. Check our <a href="#articles/upholstery-fabric-guide" class="text-[#9E472A] underline">Upholstery Fabric Guide</a>.</li>
        </ul>
      </section>

      <section id="sewing-tips">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">5. How to Sew Heavy Canvas at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Sewing #10 or #12 duck on a domestic home sewing machine is entirely possible with proper setup:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Needle:</strong> Install a heavy <strong>Jeans / Denim needle (Size 100/16 or 110/18)</strong>. Its reinforced shaft prevents deflection and broken needles when punching through 4 to 6 seam layers.</li>
          <li><strong>Thread:</strong> Use heavy-duty bonded polyester or Gutermann Mara 70 thread. Standard all-purpose cotton thread will snap under tension.</li>
          <li><strong>Stitch Length:</strong> Increase your stitch length to <strong>3.5 mm to 4.0 mm</strong>. Short stitches punch too many perforations into the dense canvas, weakening the seam like a perforated paper coupon.</li>
          <li><strong>Walking Foot:</strong> A walking foot (or dual-feed mechanism) ensures the upper and lower canvas layers advance through the feed dogs at the exact same rate without bunching.</li>
        </ul>
      </section>

      <section id="washing-and-care">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">6. Washing, Shrinkage & Waxing Canvas</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          100% cotton canvas undergoes significant shrinkage during its first hot wash (often 5% to 8% in length). Always pre-wash canvas yardage before sewing slipcovers or fitted apparel.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          For outdoor waterproofing, canvas is frequently treated with a blend of beeswax and paraffin. Waxed canvas develops a rugged, distressed patina over years of use, shedding rain and wind effortlessly.
        </p>
      </section>
    `,
    tags: ['Canvas', 'Duck Canvas', 'Heavyweight', 'Sewing', 'Cotton'],
    sources: [
      { title: 'Commercial Standard CS28-32 for Cotton Duck', institutionOrAuthor: 'National Bureau of Standards / US Dept of Commerce', year: '2018' },
      { title: 'Standard Specification for Heavy Industrial Cotton Duck', institutionOrAuthor: 'ASTM D230', year: '2021' }
    ],
    relatedSlugs: ['upholstery-fabric-guide', 'cotton-gsm-guide', 'twill-fabric-guide'],
    faqs: [
      {
        question: 'Is duck canvas fabric naturally waterproof?',
        answer: 'Raw cotton duck is naturally water-resistant because the tightly packed cotton yarns swell when exposed to moisture, sealing the microscopic gaps between threads. However, it will eventually soak through in heavy downpours unless treated with paraffin or beeswax.'
      },
      {
        question: 'What is the difference between duck canvas and regular canvas?',
        answer: 'Duck canvas (from the Dutch word "doek," meaning cloth) is specifically a very tight, plain-woven cotton fabric with a smooth surface, graded under the US numbered system. "Canvas" is a broader term that also includes looser artist linen and synthetic sailcloths.'
      },
      {
        question: 'Can you wash a canvas tote bag in the washing machine?',
        answer: 'Yes, but wash in cold water on a gentle cycle and always air dry flat. Machine drying on high heat will cause severe shrinkage and permanent white crease lines across dark dyed canvas.'
      }
    ]
  },
  {
    id: 'muslin-fabric-guide',
    slug: 'muslin-fabric-guide',
    title: 'Muslin Fabric Guide: Mockups, Bleached vs Unbleached, and History',
    subtitle: 'Why every fashion designer and sewist relies on humble cotton muslin for pattern testing, draping, and quilt backing.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Fashion drafting and historic textiles'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-28',
    readTime: '7 min read',
    excerpt: 'Explore cotton muslin fabric. Learn why fashion designers use it for mockups (toiles), the difference between bleached and unbleached, and its historic origins in Dhaka.',
    seoTitle: 'Muslin Fabric Guide: Toiles, Unbleached Cotton & History',
    metaDescription: 'Everything about cotton muslin fabric. Learn how to sew test fitting mockups (toiles), understand muslin weights, and compare bleached vs unbleached fabric.',
    featuredImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Natural cream unbleached cotton muslin fabric draped on a dressmakers mannequin',
    imageCaption: 'Plain unbleached cotton muslin allows sewists and designers to test garment drape and fit before cutting expensive fashion fabric.',
    tableOfContents: [
      { id: 'what-is-muslin', title: '1. What Is Muslin Fabric?', level: 2 },
      { id: 'why-make-a-toile', title: '2. The Muslin Mockup: Why Fitting Toiles Save Money', level: 2 },
      { id: 'bleached-vs-unbleached', title: '3. Bleached vs. Unbleached Muslin', level: 2 },
      { id: 'historic-origins', title: '4. The Legendary Origins of Dhaka Muslin', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-muslin">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. What Is Muslin Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/muslin" class="text-[#9E472A] font-semibold underline">Muslin</a> is a plain-weave cotton textile produced in a wide variety of weights, from sheer airy gauze to coarse unbleached sheeting.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In contemporary fashion design and home sewing, the term "a muslin" (or <em>toile</em> in French couture) refers to a test garment sewn from inexpensive unbleached cotton to verify pattern fit, darts, and proportions before cutting into expensive silk, wool, or linen.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Calculate the exact yardage required for your pattern mockups with our <a href="#tools/fabric-yardage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Yardage Calculator</a>.
        </p>
      </section>

      <section id="why-make-a-toile">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. The Muslin Mockup: Why Fitting Toiles Save Money</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Sewing a test garment in muslin takes extra time upfront, but it prevents devastating mistakes on luxury fashion fabric:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Pin &amp; Draw Directly:</strong> You can use marking pens to draw new bust darts, raise waistlines, or slash and spread tight shoulder seams directly on the fitting body.</li>
          <li><strong>Match Weights:</strong> Choose a muslin weight that mimics your final fashion textile. Use lightweight gauze muslin when testing chiffon patterns, and coarse medium muslin when testing trousers. Check typical weights in our <a href="#articles/cotton-gsm-guide" class="text-[#9E472A] underline">Cotton GSM Guide</a>.</li>
        </ul>
      </section>

      <section id="bleached-vs-unbleached">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Bleached vs. Unbleached Muslin</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Unbleached Muslin:</strong> Retains natural cotton flecks (tiny plant specks), has a warm ecru/cream color, and contains natural sizing. The most economical choice for mockups and theatrical sets.</li>
          <li><strong>Bleached Muslin:</strong> Chemically scoured and whitened. Preferred for quilt backings, pocket linings, kitchen cheesecloth strainers, and children's craft projects.</li>
        </ul>
      </section>

      <section id="historic-origins">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. The Legendary Origins of Dhaka Muslin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          While modern muslin is viewed as everyday utility cloth, historical <strong>Dhaka muslin</strong> (from the Bengal delta) was considered the most luxurious textile on Earth. Woven from a delicate wild cotton plant (<em>Phuti karpas</em>) using ultra-fine yarn counts exceeding 300s Ne, historic royal muslin was so transparent it was called "woven air."
        </p>
      </section>
    `,
    tags: ['Muslin', 'Toile', 'Pattern Fitting', 'Cotton', 'Sewing Tips'],
    sources: [
      { title: 'The Art of Dressmaking and Tailoring Fitting', institutionOrAuthor: 'Vogue Sewing Handbook', year: '2021' },
      { title: 'Woven Air: The Muslin of Bengal', institutionOrAuthor: 'Whitechapel Art Gallery', year: '2019' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'poplin-fabric-guide', 'warp-vs-weft'],
    faqs: [
      {
        question: 'Should you pre-wash muslin before making a mockup?',
        answer: 'If you want the mockup to fit your exact final body measurements, yes—pre-wash to remove manufacturer sizing and relax shrinkage.'
      },
      {
        question: 'Can you use muslin for finished clothes?',
        answer: 'Absolutely. Quality bleached or dyed cotton muslin makes wonderfully breathable summer peasant tops, baby swaddles, and bohemian tiered skirts.'
      }
    ]
  },
  {
    id: 'poplin-fabric-guide',
    slug: 'poplin-fabric-guide',
    title: 'Poplin Fabric Guide: Weave Structure, Shirts, and Sewing Advice',
    subtitle: 'Everything about cotton poplin: crisp feel, fine crosswise ribs, breathability, and why it reigns supreme for office button-downs.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Apparel Textiles Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Apparel manufacturing research'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-28',
    readTime: '8 min read',
    excerpt: 'Understand poplin fabric. Learn why its tight plain weave and subtle ribbed texture make it the ideal crisp fabric for shirts and dresses.',
    seoTitle: 'Poplin Fabric Guide: Weave, Shirtings & Garment Selection',
    metaDescription: 'What is cotton poplin fabric? Discover its signature crosswise rib weave, GSM weight range (110–140 GSM), and simple care instructions.',
    featuredImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Crisp light blue woven cotton poplin shirt fabric with fine texture',
    imageCaption: 'Poplin features tightly packed warp yarns over thicker weft yarns, creating crisp, lustrous stability.',
    tableOfContents: [
      { id: 'what-is-poplin', title: '1. What Is Poplin Fabric?', level: 2 },
      { id: 'poplin-vs-broadcloth', title: '2. Poplin vs Broadcloth: What Is the Difference?', level: 2 },
      { id: 'poplin-gsm-and-feel', title: '3. Typical GSM and Fabric Hand', level: 2 },
      { id: 'best-garments', title: '4. Best Garments to Sew with Poplin', level: 2 },
      { id: 'sewing-poplin', title: '5. Expert Tips for Sewing Crisp Poplin', level: 2 },
      { id: 'washing-and-care', title: '6. Ironing & Laundry Care for Poplin', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-poplin">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. What Is Poplin Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/poplin" class="text-[#9E472A] font-semibold underline">Poplin</a> is a strong, plain-weave cotton fabric characterized by very fine crosswise ribs.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          These subtle ribs are formed because the lengthwise warp yarns are twice as dense and fine as the horizontal weft yarns. This construction creates a crisp, smooth surface that feels cool against the skin and resists wrinkling better than standard plain weaves.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Poplin typically registers between 110 and 140 GSM. Check weight comparisons in our <a href="#tools/gsm-to-oz-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">GSM to Oz Converter</a>.
        </p>
      </section>

      <section id="poplin-vs-broadcloth">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Poplin vs Broadcloth: What Is the Difference?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In modern retail, "poplin" and "broadcloth" are often used interchangeably, but technical differences exist:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Poplin:</strong> Features heavier weft threads that create faint horizontal ribs and a slightly stiffer, crisper drape. It holds sharp collar folds and pressed shirt pleats with clinical precision.</li>
          <li><strong>Broadcloth:</strong> Uses yarns of identical thickness in both warp and weft directions. It has a flatter, softer surface with less pronounced ribs.</li>
        </ul>
      </section>

      <section id="poplin-gsm-and-feel">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Typical GSM and Fabric Hand</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Most 100% cotton poplin sits comfortably between <strong>115 and 135 GSM</strong> (3.4 to 4.0 oz/yd²). This weight makes poplin virtually opaque in darker shades and medium pastel colors, while remaining light enough to breathe during hot humid summer days. Compare it with other cotton weights in our <a href="#articles/cotton-gsm-guide" class="text-[#9E472A] underline">Cotton GSM Guide</a>.
        </p>
      </section>

      <section id="best-garments">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. Best Garments to Sew with Poplin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Poplin is the world's premier fabric for:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Tailored Button-Down Shirts:</strong> Both men's and women's professional business attire.</li>
          <li><strong>Shirtdresses &amp; Summer Frocks:</strong> A-line silhouettes, shirt-waist dresses, and gathered skirts.</li>
          <li><strong>Pajamas &amp; Loungewear:</strong> Breathable, non-clingy sleepwear that softens with every wash.</li>
          <li><strong>Coat Shell Linings:</strong> The smooth surface glides effortlessly over knit sweaters without friction.</li>
        </ul>
      </section>

      <section id="sewing-poplin">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">5. Expert Tips for Sewing Crisp Poplin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Poplin is widely recommended as a dream fabric for beginners:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li>Use a standard <strong>Universal needle size 70/10 or 80/12</strong>.</li>
          <li>Stitch length at 2.5 mm using standard all-purpose polyester or cotton thread.</li>
          <li>Because poplin does not stretch or slip under the presser foot, cutting and pinning are straightforward.</li>
          <li>Finish seam allowances with French seams or clean pinking shears to prevent light edge fraying.</li>
        </ul>
      </section>

      <section id="washing-and-care">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">6. Ironing & Laundry Care for Poplin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Machine wash in warm water with like colors. Poplin dries rapidly on a line or low-heat tumble cycle. While 100% pure cotton poplin will wrinkle after washing, its high thread density responds immediately to a warm steam iron, pressing razor-sharp creases in seconds.
        </p>
      </section>
    `,
    tags: ['Poplin', 'Shirting', 'Cotton', 'Plain Weave', 'Woven'],
    sources: [
      { title: 'Fabric for Fashion: The Complete Guide', institutionOrAuthor: 'Clive Hallett & Amanda Johnston', year: '2018' },
      { title: 'Standard Specification for Woven Poplin Apparel Fabrics', institutionOrAuthor: 'ASTM D4037', year: '2020' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'twill-fabric-guide', 'muslin-fabric-guide'],
    faqs: [
      {
        question: 'Does cotton poplin wrinkle easily?',
        answer: 'Pure 100% cotton poplin will wrinkle moderately during washing, but its dense, smooth weave presses flat faster and easier with steam than linen or broadcloth.'
      },
      {
        question: 'Is poplin fabric stretchy?',
        answer: 'Traditional 100% cotton poplin has zero stretch. However, modern poplin blends containing 2% to 3% spandex (elastane) offer comfortable mechanical stretch for fitted shirts.'
      },
      {
        question: 'Is poplin cool to wear in hot weather?',
        answer: 'Yes! Cotton poplin is lightweight (110–135 GSM) and woven from breathable natural cotton fibers, making it exceptionally cool and comfortable for summer office wear.'
      }
    ]
  },
  {
    id: 'twill-fabric-guide',
    slug: 'twill-fabric-guide',
    title: 'Twill Fabric Guide: Diagonal Weaves, Chino, and Durability',
    subtitle: 'From khaki chinos to denim jeans: discover why the diagonal twill weave is the worlds favorite structure for durable pants and jackets.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Weave structures and durability testing'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-28',
    readTime: '8 min read',
    excerpt: 'What makes twill so durable? Explore the diagonal weave pattern, right-hand vs left-hand twill, chino pants, gabardine, and denim.',
    seoTitle: 'Twill Fabric Guide: Diagonal Weaves, Chino & Durability',
    metaDescription: 'Learn all about twill fabric. Understand diagonal wale ribs, 2/1 and 3/1 weave structures, soil resistance, and why twill outlasts plain weave.',
    featuredImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Detailed macro shot of diagonal twill ridges on khaki cotton fabric',
    imageCaption: 'The distinctive diagonal ridge (wale) in twill distributes abrasive stress across yarns.',
    tableOfContents: [
      { id: 'diagonal-architecture', title: '1. The Diagonal Wale Architecture', level: 2 },
      { id: 'why-twill-is-stronger', title: '2. Why Twill Outlasts Plain Weaves', level: 2 },
      { id: 'famous-twills', title: '3. Famous Twill Fabrics: Chino, Denim, Gabardine', level: 2 },
      { id: 'twill-directions', title: '4. Right-Hand Twill vs. Left-Hand Twill', level: 2 },
      { id: 'sewing-and-care', title: '5. Sewing & Garment Care Tips for Twill', level: 2 }
    ],
    contentHtml: `
      <section id="diagonal-architecture">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. The Diagonal Wale Architecture</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/twill" class="text-[#9E472A] font-semibold underline">Twill</a> is one of the three fundamental weave structures in textile engineering (alongside plain weave and satin). It is easily recognized by its distinctive diagonal parallel lines, known as <strong>wales</strong>.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In a twill weave, each horizontal weft yarn floats over one or more warp yarns and under two or more (for example, a 2/1 or 3/1 twill). Each successive row is stepped or staggered by one thread, creating the signature diagonal slant across the face of the fabric.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Learn how yarns interlace across the loom in our companion guide <a href="#articles/warp-vs-weft" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Warp vs Weft</a>.
        </p>
      </section>

      <section id="why-twill-is-stronger">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Why Twill Outlasts Plain Weaves</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Twill has been the global choice for military uniforms, work pants, and trench coats for centuries because of its mechanical advantages:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Higher Thread Density:</strong> Because threads float over multiple intersections rather than crossing every single thread, weavers can pack more yarns into each square inch, producing a significantly denser, more tear-resistant textile.</li>
          <li><strong>Wrinkle Recovery:</strong> Twill fabrics recover from creasing much better than rigid plain-weave cotton.</li>
          <li><strong>Soil &amp; Stain Resistance:</strong> The diagonal ridges break up visual reflection, helping disguise minor surface stains and wear patterns.</li>
        </ul>
      </section>

      <section id="famous-twills">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Famous Twill Fabrics: Chino, Denim, Gabardine</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong><a href="#fabric/denim" class="text-[#9E472A] underline">Denim</a>:</strong> A 3/1 warp-faced twill where indigo-dyed warp yarns sit on the outside, and unbleached white weft yarns remain on the inside. Read our <a href="#articles/denim-gsm-chart" class="text-[#9E472A] underline">Denim GSM Chart</a>.</li>
          <li><strong>Cotton Chino:</strong> A smooth, durable medium-weight twill (200–260 GSM) developed originally for British and US military uniforms in the late 19th century.</li>
          <li><strong>Gabardine:</strong> A steep, tightly woven twill invented by Thomas Burberry in 1879, renowned for weather-resistant trench coats and formal trousers.</li>
          <li><strong>Herringbone (Broken Twill):</strong> Reverses the diagonal direction at regular intervals, creating an attractive V-shaped zigzag pattern.</li>
        </ul>
      </section>

      <section id="twill-directions">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. Right-Hand Twill vs. Left-Hand Twill</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Examine your twill closely:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Right-Hand Twill (Z-Twill):</strong> Diagonal lines run upward to the right (/). Standard American denim and classic chinos.</li>
          <li><strong>Left-Hand Twill (S-Twill):</strong> Diagonal lines run upward to the left (\). Loosens the yarn twist slightly, producing a softer hand with fluffier drape (popular in vintage Lee jeans).</li>
        </ul>
      </section>

      <section id="sewing-and-care">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">5. Sewing & Garment Care Tips for Twill</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When sewing twill trousers: use a size 90/14 Jeans needle, lengthen stitches to 3.0 mm for topstitching, and press seams open with a damp press cloth to prevent shiny iron marks on the raised diagonal ridges.
        </p>
      </section>
    `,
    tags: ['Twill', 'Chino', 'Weave', 'Denim', 'Durability'],
    sources: [
      { title: 'Woven Textiles: Principles, Technologies and Applications', institutionOrAuthor: 'The Textile Institute', year: '2019' },
      { title: 'Standard Test Method for Tear Strength of Fabrics by Elmendorf-Type Apparatus', institutionOrAuthor: 'ASTM D1424', year: '2021' }
    ],
    relatedSlugs: ['denim-gsm-chart', 'warp-vs-weft', 'poplin-fabric-guide'],
    faqs: [
      {
        question: 'Is twill fabric 100% cotton?',
        answer: 'Not always. While traditional chino and denim are 100% cotton, twill is a weave structure, not a fiber. Twill can be woven from wool (gabardine), polyester, silk, or cotton-spandex blends.'
      },
      {
        question: 'Why is twill good for trousers and pants?',
        answer: 'Twill is thick, opaque, and drapes comfortably around the body without creasing harshly. Its high thread density resists abrasions around knees and pockets.'
      },
      {
        question: 'Does twill fabric shrink in hot water?',
        answer: 'Cotton twill will shrink 3% to 5% on its initial hot wash. Always pre-wash twill yardage before cutting trousers.'
      }
    ]
  },
  {
    id: 'jersey-fabric-guide',
    slug: 'jersey-fabric-guide',
    title: 'Jersey Fabric Guide: Single vs Double Knit, Stretch, and Sewing',
    subtitle: 'From everyday t-shirt cotton to modal knits: understand knitted loops, four-way stretch, curling raw edges, and ballpoint needles.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Knitwear production and stretch testing'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-28',
    readTime: '8 min read',
    excerpt: 'Everything you need to know about jersey knit fabric. Discover the difference between single jersey and interlock, and learn how to sew stretch knits without puckering.',
    seoTitle: 'Jersey Fabric Guide: Knits, Stretch % & Sewing Advice',
    metaDescription: 'Complete jersey knit fabric guide. Learn about 2-way vs 4-way stretch, cotton vs modal jersey, and how to sew t-shirts without wavy seams.',
    featuredImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Soft heather gray cotton jersey knit fabric draped in gentle folds',
    imageCaption: 'Continuous yarn loops give jersey knit natural four-way elasticity and body-hugging comfort.',
    tableOfContents: [
      { id: 'knit-vs-woven', title: '1. Why Jersey Stretches: Loops vs Straight Threads', level: 2 },
      { id: 'single-vs-double', title: '2. Single Jersey vs Double Knit (Interlock)', level: 2 },
      { id: 'fiber-varieties', title: '3. Cotton vs. Modal vs. Poly-Spandex Jersey', level: 2 },
      { id: 'calculating-stretch', title: '4. How to Calculate Fabric Stretch Percentage', level: 2 },
      { id: 'sewing-knits', title: '5. Essential Rules for Sewing Jersey at Home', level: 2 },
      { id: 'prevent-curling', title: '6. Taming Curling Raw Edges', level: 2 }
    ],
    contentHtml: `
      <section id="knit-vs-woven">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. Why Jersey Stretches: Loops vs Straight Threads</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Unlike woven textiles where threads cross at rigid 90-degree angles, <a href="#fabric/jersey" class="text-[#9E472A] font-semibold underline">jersey fabric</a> is knitted from a continuous series of interlocking loops.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When tension is applied, those curved yarn loops expand and flatten out, giving 100% <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> jersey 20% to 35% natural mechanical stretch even without adding any synthetic elastane or Lycra.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Calculate the weight of your t-shirt knits using our automated <a href="#tools/fabric-gsm-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric GSM Calculator</a>.
        </p>
      </section>

      <section id="single-vs-double">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Single Jersey vs Double Knit (Interlock)</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Single Jersey:</strong> Standard lightweight t-shirt material (140–180 GSM). Knitted with a single needle bed. The front displays vertical V-stitches, while the back displays horizontal wavy purl loops. The raw edges naturally curl when cut.</li>
          <li><strong>Interlock (Double Knit):</strong> Knitted with two synchronized needle beds (200–260 GSM). Both sides of the fabric look identical, smooth, and flat. Raw cut edges lie completely flat without curling, making it much easier for beginners to sew.</li>
        </ul>
      </section>

      <section id="fiber-varieties">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Cotton vs. Modal vs. Poly-Spandex Jersey</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          The base fiber alters the drape and longevity of jersey:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>100% Cotton Jersey:</strong> Breathable, structured, and absorbent. Ideal for casual, boxy t-shirts. Check our <a href="#articles/cotton-gsm-guide" class="text-[#9E472A] underline">Cotton GSM Guide</a>.</li>
          <li><strong>Modal / Rayon Jersey:</strong> Exceptionally silky with liquid drape. Clings to curves and resists pilling, making it the favorite for feminine dresses and luxury sleepwear.</li>
          <li><strong>Cotton-Spandex (95/5):</strong> Adds 5% elastane for complete recovery. Does not stretch out at the elbows or knees during movement. See our <a href="#articles/fabric-blend-guide" class="text-[#9E472A] underline">Fabric Blend Guide</a>.</li>
        </ul>
      </section>

      <section id="calculating-stretch">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">4. How to Calculate Fabric Stretch Percentage</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Sewing patterns for knitwear specify a required "Stretch Percentage" (e.g., <em>requires 50% crosswise stretch</em>):
        </p>
        <ol class="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-[#3E3A34] mb-4">
          <li>Fold your fabric crosswise and grip a 4-inch (10 cm) section between your thumbs.</li>
          <li>Hold the left thumb at the 0 mark on a ruler, and pull the right thumb gently along the ruler until the fabric resists.</li>
          <li>If the 4-inch section stretches comfortably to 6 inches, that is a 2-inch expansion: (2 ÷ 4) = <strong>50% Stretch</strong>.</li>
        </ol>
      </section>

      <section id="sewing-knits">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">5. Essential Rules for Sewing Jersey at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Avoid wavy, popped seams with these adjustments:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Always Use a Ballpoint or Stretch Needle (Size 75/11):</strong> Sharp needles puncture and sever the knitted loops, creating tiny run holes along seams after the first laundry wash. Ballpoint needles push loops aside safely.</li>
          <li><strong>Never Use a Straight Stitch on Stretch Seams:</strong> Straight stitches have zero give. When the garment stretches to pull over your head, straight stitch threads will snap. Use a narrow zigzag stitch (0.5 mm width, 2.5 mm length) or a serger/overlocker.</li>
          <li><strong>Do Not Pull While Feeding:</strong> Let the machine feed dogs pull the jersey forward naturally. Pulling while sewing stretches the seam permanently, creating an unsightly "lettuce-leaf" wavy ripple.</li>
        </ul>
      </section>

      <section id="prevent-curling">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">6. Taming Curling Raw Edges</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Single jersey curls due to unbalanced yarn tension inside the knitted loops. To tame curling when cutting and pinning: spray the raw edges generously with wash-away liquid starch, press flat with a dry iron, and sew immediately. The starch washes out completely in the first rinse.
        </p>
      </section>
    `,
    tags: ['Jersey', 'Knit Fabric', 'T-Shirt', 'Stretch', 'Cotton'],
    sources: [
      { title: 'Knitting Technology: A Comprehensive Handbook', institutionOrAuthor: 'David J. Spencer / Woodhead Publishing', year: '2020' },
      { title: 'Standard Test Methods for Stretch Properties of Knitted Fabrics', institutionOrAuthor: 'ASTM D2594', year: '2021' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'fabric-weight-chart', 'fabric-blend-guide'],
    faqs: [
      {
        question: 'Why does single jersey curl at the edges?',
        answer: 'Unbalanced knitting tension inside single jersey loops naturally causes horizontal edges to curl toward the face and vertical edges toward the back. Interlock double-knits do not curl.'
      },
      {
        question: 'What is 4-way stretch vs 2-way stretch?',
        answer: '2-way stretch stretches in only one direction (usually crosswise from selvage to selvage). 4-way stretch stretches both crosswise and lengthwise, making it necessary for activewear and swimwear.'
      },
      {
        question: 'Do I need a serger to sew jersey knit fabric?',
        answer: 'No! A domestic sewing machine equipped with a ballpoint needle and a narrow zigzag stitch can sew t-shirts and knit dresses with great success.'
      }
    ]
  }
];
