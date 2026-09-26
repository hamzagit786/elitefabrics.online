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
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Explore canvas fabric and cotton duck. Learn about numbered duck systems, water-resistant coatings, and how to sew heavy canvas on home sewing machines.',
    seoTitle: 'Canvas Fabric Guide: Duck Weights, Uses & Sewing Advice',
    metaDescription: 'Complete canvas fabric guide. Understand duck canvas numbers, GSM weights, heavy-duty applications, and sewing machine needle recommendations.',
    featuredImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Tightly woven heavy beige cotton duck canvas texture close-up',
    imageCaption: 'Heavy plain-weave cotton duck canvas provides unmatched abrasion resistance.',
    tableOfContents: [
      { id: 'what-is-canvas', title: 'What Is Canvas Fabric?', level: 2 },
      { id: 'duck-numbers', title: 'The Cotton Duck Numbering System', level: 2 },
      { id: 'sewing-tips', title: 'How to Sew Heavy Canvas at Home', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-canvas">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Is Canvas Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/canvas" class="text-[#9E472A] font-semibold underline">Canvas</a> is an extremely durable, heavy plain-weave textile traditionally woven from sturdy <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> or <a href="#fabric/hemp" class="text-[#9E472A] font-semibold underline">hemp</a> yarns.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Unlike delicate apparel fabrics, canvas utilizes thick plied yarns packed closely together, creating a rugged barrier against abrasion, wind, and tear friction.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Estimate heavy fabric project requirements using our <a href="#tools/upholstery-fabric-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Upholstery Fabric Calculator</a>.
        </p>
      </section>

      <section id="duck-numbers">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">The Cotton Duck Numbering System</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          In the United States, commercial canvas is graded using the <strong>Numbered Duck</strong> scale (from #1 to #12). Curiously, the numbering is inverted: <em>the smaller the number, the heavier the fabric</em>:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>#12 Duck (approx. 11.5 oz / 390 GSM):</strong> Lightweight canvas. Excellent for slipcovers, heavy aprons, and unlined tote bags.</li>
          <li><strong>#10 Duck (approx. 14.7 oz / 500 GSM):</strong> The classic standard. Used for Carhartt-style utility jackets, structured duffels, and utility tool rolls.</li>
          <li><strong>#8 Duck (approx. 18 oz / 610 GSM):</strong> Heavy industrial grade. Tents, boat covers, and rugged outdoor equipment.</li>
          <li><strong>#4 Duck (approx. 24 oz / 815 GSM):</strong> Extreme heavyweight. Conveyor belts, heavy tarps, and sandbags.</li>
        </ul>
      </section>

      <section id="sewing-tips">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">How to Sew Heavy Canvas at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When sewing canvas on a domestic sewing machine: install a <strong>Jeans / Denim needle (size 100/16 or 110/18)</strong>, increase stitch length to 3.5–4.0 mm, use heavy-duty polyester thread, and use a walking foot to prevent seam slippage.
        </p>
      </section>
    `,
    tags: ['Canvas', 'Duck Canvas', 'Heavyweight', 'Sewing', 'Cotton'],
    sources: [
      { title: 'Commercial Standard CS28-32 for Cotton Duck', institutionOrAuthor: 'National Bureau of Standards / US Dept of Commerce', year: '2018' }
    ],
    relatedSlugs: ['upholstery-fabric-guide', 'cotton-gsm-guide', 'twill-fabric-guide'],
    faqs: [
      {
        question: 'Is canvas fabric waterproof?',
        answer: 'Raw cotton canvas is water-resistant because yarns swell when wet, but it is not waterproof unless treated with paraffin wax or polyurethane coating.'
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
      role: 'Fashion Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Pattern fitting and prototype standards'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '6 min read',
    excerpt: 'Learn why muslin is the ultimate prototyping fabric. Discover unbleached vs bleached muslin and how to sew fitting mockups (toiles).',
    seoTitle: 'Muslin Fabric Guide: Unbleached, Bleached & Fitting Toiles',
    metaDescription: 'What is muslin fabric? Explore its rich textile history from ancient Bengal to modern design studios, with practical fitting mockup tips.',
    featuredImage: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Natural unbleached ecru cotton muslin fabric with small natural seed flecks',
    imageCaption: 'Simple plain-weave unbleached muslin is the standard prototyping fabric in fashion ateliers.',
    tableOfContents: [
      { id: 'what-is-muslin', title: 'What Is Muslin Fabric?', level: 2 },
      { id: 'bleached-vs-unbleached', title: 'Bleached vs. Unbleached Muslin', level: 2 },
      { id: 'making-a-toile', title: 'How to Make a Sewing Mockup (Toile)', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-muslin">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Is Muslin Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/muslin" class="text-[#9E472A] font-semibold underline">Muslin</a> is a plain-weave cotton fabric woven from carded yarns. It originated in Mosul (modern Iraq) and reached breathtaking heights of gossamer luxury in Dhaka (ancient Bengal).
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Today, modern commercial muslin is an affordable, accessible utility fabric used for apparel prototypes, culinary straining, and theater backdrops.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Before testing your design in expensive <a href="#fabric/silk" class="text-[#9E472A] font-semibold underline">silk</a> or wool, estimate yardage using our <a href="#tools/fabric-yardage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Yardage Calculator</a>.
        </p>
      </section>

      <section id="bleached-vs-unbleached">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Bleached vs. Unbleached Muslin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          At fabric retailers, you will notice two distinct options:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Unbleached Muslin:</strong> Natural cream/ecru color with tiny dark flecks of cotton hull. Less processed, slightly stiffer, and the cheapest option for garment fittings.</li>
          <li><strong>Bleached Muslin:</strong> Bright crisp white. Smoother and softer; often chosen for quilt backings, pocket linings, and lightweight summer curtains.</li>
        </ul>
      </section>

      <section id="making-a-toile">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">How to Make a Sewing Mockup (Toile)</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Making a "muslin" (also called a toile in French haute couture) allows you to test collar height, dart placement, and bust ease. Cut your pattern pieces from inexpensive muslin, sew with a long basting stitch (no facings or linings needed), try it on, and mark fitting adjustments directly with a pencil.
        </p>
      </section>
    `,
    tags: ['Muslin', 'Toile', 'Sewing Prototype', 'Cotton', 'Beginners'],
    sources: [
      { title: 'Draping for Apparel Design', institutionOrAuthor: 'Helen Joseph-Armstrong / Fairchild Books', year: '2020' }
    ],
    relatedSlugs: ['how-much-fabric-do-i-need', 'poplin-fabric-guide', 'cotton-gsm-guide'],
    faqs: [
      {
        question: 'Can you wear clothes made from muslin?',
        answer: 'Yes! High-count washed muslin makes wonderfully soft, breathable summer blouses and baby swaddle blankets.'
      }
    ]
  },
  {
    id: 'poplin-fabric-guide',
    slug: 'poplin-fabric-guide',
    title: 'Poplin Fabric Guide: Characteristics, Shirtings, and Care',
    subtitle: 'Everything about cotton poplin: crisp feel, fine crosswise ribs, breathability, and why it reigns supreme for office button-downs.',
    category: 'Fabric Types',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Apparel Textiles Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Apparel manufacturing research'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '6 min read',
    excerpt: 'Understand poplin fabric. Learn why its tight plain weave and subtle ribbed texture make it the ideal crisp fabric for shirts and dresses.',
    seoTitle: 'Poplin Fabric Guide: Weave, Shirtings & Garment Selection',
    metaDescription: 'What is cotton poplin fabric? Discover its signature crosswise rib weave, GSM weight range (110–140 GSM), and simple care instructions.',
    featuredImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Crisp light blue woven cotton poplin shirt fabric with fine texture',
    imageCaption: 'Poplin features tightly packed warp yarns over thicker weft yarns, creating crisp, lustrous stability.',
    tableOfContents: [
      { id: 'what-is-poplin', title: 'What Is Poplin Fabric?', level: 2 },
      { id: 'poplin-vs-broadcloth', title: 'Poplin vs Broadcloth: What Is the Difference?', level: 2 },
      { id: 'best-garments', title: 'Best Garments to Sew with Poplin', level: 2 }
    ],
    contentHtml: `
      <section id="what-is-poplin">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Is Poplin Fabric?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/poplin" class="text-[#9E472A] font-semibold underline">Poplin</a> is a strong, plain-weave cotton fabric characterized by very fine crosswise ribs.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          These ribs are formed because the lengthwise warp yarns are twice as dense and fine as the horizontal weft yarns. This construction creates a crisp, smooth surface that feels cool against the skin and resists wrinkling better than standard plain weaves.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Poplin typically registers between 110 and 140 GSM. Check weight comparisons in our <a href="#tools/gsm-to-oz-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">GSM to Oz Converter</a>.
        </p>
      </section>

      <section id="poplin-vs-broadcloth">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Poplin vs Broadcloth: What Is the Difference?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In historical European weaving, poplin used silk warp and worsted wool weft, whereas broadcloth was heavily fulled wool. In modern cotton trade, both are fine plain weaves, but poplin has a slightly pronounced horizontal rib texture and crisper drape, while broadcloth is flat and softer.
        </p>
      </section>

      <section id="best-garments">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Best Garments to Sew with Poplin</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Poplin is ideal for tailored button-down shirts, summer shirtdresses, children's clothes, pajama sets, and trench coat shell linings. It presses cleanly with a steam iron, holding sharp creases.
        </p>
      </section>
    `,
    tags: ['Poplin', 'Shirting', 'Cotton', 'Plain Weave', 'Woven'],
    sources: [
      { title: 'Fabric for Fashion: The Complete Guide', institutionOrAuthor: 'Clive Hallett & Amanda Johnston', year: '2018' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'twill-fabric-guide', 'muslin-fabric-guide'],
    faqs: [
      {
        question: 'Does cotton poplin wrinkle easily?',
        answer: 'Pure 100% cotton poplin will wrinkle moderately, but because of its high thread density, it presses smooth in seconds with standard steam.'
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
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'What makes twill so durable? Explore the diagonal weave pattern, right-hand vs left-hand twill, chino pants, gabardine, and denim.',
    seoTitle: 'Twill Fabric Guide: Diagonal Weaves, Chino & Durability',
    metaDescription: 'Learn all about twill fabric. Understand diagonal wale ribs, 2/1 and 3/1 weave structures, soil resistance, and why twill outlasts plain weave.',
    featuredImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Detailed macro shot of diagonal twill ridges on khaki cotton fabric',
    imageCaption: 'The distinctive diagonal ridge (wale) in twill distributes abrasive stress across yarns.',
    tableOfContents: [
      { id: 'diagonal-architecture', title: '1. The Diagonal Wale Architecture', level: 2 },
      { id: 'why-twill-is-stronger', title: '2. Why Twill Outlasts Plain Weaves', level: 2 },
      { id: 'famous-twills', title: '3. Famous Twill Fabrics: Chino, Denim, Gabardine', level: 2 }
    ],
    contentHtml: `
      <section id="diagonal-architecture">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. The Diagonal Wale Architecture</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/twill" class="text-[#9E472A] font-semibold underline">Twill</a> is one of the three fundamental weave structures (alongside plain weave and satin). It is easily recognized by its diagonal parallel lines, known as <strong>wales</strong>.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In a twill weave, each weft yarn floats over one or more warp yarns and under two or more, with each row staggered by one thread. This creates the signature diagonal slant.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Learn how yarns interlace across the loom in our companion guide <a href="#articles/warp-vs-weft" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Warp vs Weft</a>.
        </p>
      </section>

      <section id="why-twill-is-stronger">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Why Twill Outlasts Plain Weaves</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Because twill yarns float over multiple threads rather than crossing every single one, weavers can pack more yarns into each square inch. This tighter packing produces higher tear resistance, superior stain hiding, and better wrinkle recovery.
        </p>
      </section>

      <section id="famous-twills">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Famous Twill Fabrics: Chino, Denim, Gabardine</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong><a href="#fabric/denim" class="text-[#9E472A] underline">Denim</a>:</strong> A 3/1 warp-faced twill with indigo warp yarns and unbleached white weft yarns.</li>
          <li><strong>Chino:</strong> A smooth, lightweight to medium cotton twill originally made for military uniforms and popular for modern trousers.</li>
          <li><strong>Gabardine:</strong> A steep, tightly woven twill invented by Thomas Burberry, renowned for weather-resistant trench coats.</li>
        </ul>
      </section>
    `,
    tags: ['Twill', 'Chino', 'Weave', 'Denim', 'Durability'],
    sources: [
      { title: 'Woven Textiles: Principles, Technologies and Applications', institutionOrAuthor: 'The Textile Institute', year: '2019' }
    ],
    relatedSlugs: ['denim-gsm-chart', 'warp-vs-weft', 'poplin-fabric-guide'],
    faqs: [
      {
        question: 'Is twill good for summer trousers?',
        answer: 'Lightweight cotton chino twill (180 to 220 GSM) is great for summer; it breathes well and stays crisp.'
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
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Everything you need to know about jersey knit fabric. Discover the difference between single jersey and interlock, and learn how to sew stretch knits without puckering.',
    seoTitle: 'Jersey Fabric Guide: Knits, Stretch % & Sewing Advice',
    metaDescription: 'Complete jersey knit fabric guide. Learn about 2-way vs 4-way stretch, cotton vs modal jersey, and how to sew t-shirts without wavy seams.',
    featuredImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Soft heather gray cotton jersey knit fabric draped in gentle folds',
    imageCaption: 'Continuous yarn loops give jersey knit natural four-way elasticity and body-hugging comfort.',
    tableOfContents: [
      { id: 'knit-vs-woven', title: '1. Why Jersey Stretches: Loops vs Straight Threads', level: 2 },
      { id: 'single-vs-double', title: '2. Single Jersey vs Double Knit (Interlock)', level: 2 },
      { id: 'sewing-knits', title: '3. Essential Rules for Sewing Jersey at Home', level: 2 }
    ],
    contentHtml: `
      <section id="knit-vs-woven">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">1. Why Jersey Stretches: Loops vs Straight Threads</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Unlike woven textiles where threads cross at rigid 90-degree angles, <a href="#fabric/jersey" class="text-[#9E472A] font-semibold underline">jersey fabric</a> is knitted from a continuous series of interlocking loops.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When pulled, those yarn loops expand and flatten out, giving 100% <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">cotton</a> jersey 20% to 35% natural stretch even without a single drop of synthetic spandex or elastane.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Calculate fabric weight for your t-shirt projects using our <a href="#tools/fabric-gsm-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric GSM Calculator</a>.
        </p>
      </section>

      <section id="single-vs-double">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">2. Single Jersey vs Double Knit (Interlock)</h2>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Single Jersey:</strong> Standard t-shirt material (140–180 GSM). Front shows vertical V-stitches; back shows horizontal purl ridges. Raw cut edges curl toward the face.</li>
          <li><strong>Interlock (Double Knit):</strong> Knitted with two needle beds (200–260 GSM). Both sides look smooth and identical. Raw cut edges lie completely flat without curling.</li>
        </ul>
      </section>

      <section id="sewing-knits">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">3. Essential Rules for Sewing Jersey at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Always use a <strong>ballpoint or stretch needle (size 75/11 or 80/12)</strong>. Sharp needles will puncture and sever the knit loops, creating tiny run holes along seams after the first wash. Use a narrow zigzag stitch or serger so your seams stretch with the fabric.
        </p>
      </section>
    `,
    tags: ['Jersey', 'Knit Fabric', 'T-Shirt', 'Stretch', 'Cotton'],
    sources: [
      { title: 'Knitting Technology', institutionOrAuthor: 'David J. Spencer / Woodhead Publishing', year: '2020' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'fabric-weight-chart', 'why-cotton-shrinks'],
    faqs: [
      {
        question: 'Why does jersey fabric roll at the edges?',
        answer: 'Unbalanced knitting tension inside single jersey loops naturally causes horizontal edges to curl toward the face and vertical edges toward the back.'
      }
    ]
  }
];
