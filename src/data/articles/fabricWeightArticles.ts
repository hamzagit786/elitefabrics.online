import { Article } from '../../types';

export const FABRIC_WEIGHT_ARTICLES: Article[] = [
  {
    id: 'what-is-gsm-in-fabric',
    slug: 'what-is-gsm-in-fabric',
    title: 'What Is GSM in Fabric? Grams Per Square Meter Explained Simply',
    subtitle: 'Learn what fabric GSM means, how to check it at home, and which GSM weight is best for shirts, dresses, jeans, and blankets.',
    category: 'Fabric Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Based on ASTM D3776 and ISO 3801 standards'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '6 min read',
    excerpt: 'GSM stands for grams per square meter. It measures how heavy a fabric is. Learn what different GSM numbers mean and how to choose the right fabric weight.',
    seoTitle: 'What Is GSM in Fabric? Plain English Guide & Weight Chart',
    metaDescription: 'What is GSM in fabric? Learn what grams per square meter means, see everyday examples from 70 to 450 GSM, and find the perfect weight for your project.',
    featuredImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stacked fabric bolts in clean neutral tones showing different fabric thicknesses and weights',
    imageCaption: 'Fabric weight measured in grams per square meter (GSM) indicates fabric thickness and density.',
    tableOfContents: [
      { id: 'gsm-definition', title: 'What Does GSM Stand For?', level: 2 },
      { id: 'everyday-ranges', title: 'Common Fabric GSM Ranges', level: 2 },
      { id: 'how-to-calculate', title: 'How to Calculate GSM at Home', level: 2 },
      { id: 'quality-myth', title: 'Does Higher GSM Mean Better Quality?', level: 2 },
      { id: 'selection-guide', title: 'Choosing the Right GSM for Your Clothes', level: 2 }
    ],
    contentHtml: `
      <section id="gsm-definition">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">What Does GSM Stand For?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <strong>GSM</strong> stands for <strong>Grams per Square Meter</strong> (g/m²). It is the standard metric unit used worldwide to measure fabric weight and thickness.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Imagine cutting a piece of fabric exactly 1 meter long and 1 meter wide. If you place that square on a scale, the weight in grams is its GSM. A gossamer silk scarf might weigh 40 grams (40 GSM), while a rugged winter coat might weigh 450 grams (450 GSM).
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          To quickly convert between metric GSM and American ounces, use our free <a href="#tools/gsm-to-oz-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">GSM to Oz Converter</a>.
        </p>
      </section>

      <section id="everyday-ranges">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Common Fabric GSM Ranges</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          Fabrics generally fall into four practical weight brackets:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li><strong>Lightweight (Under 150 GSM):</strong> Chiffon (40–60 GSM), <a href="#fabric/lawn" class="text-[#9E472A] font-semibold underline">cotton lawn</a> (70–90 GSM), and lightweight shirting. Breathable and semi-sheer.</li>
          <li><strong>Medium Weight (150–250 GSM):</strong> Standard t-shirt jersey (160–200 GSM), everyday <a href="#fabric/linen" class="text-[#9E472A] font-semibold underline">linen</a> (180–220 GSM), and casual trousers.</li>
          <li><strong>Medium-Heavy (250–350 GSM):</strong> Chino twill, lightweight denim (8–10 oz), and sweatshirt fleece. Opaque and durable.</li>
          <li><strong>Heavyweight (350+ GSM):</strong> Heavy raw <a href="#fabric/denim" class="text-[#9E472A] font-semibold underline">denim</a> (12–16 oz), upholstery canvas, and wool overcoating.</li>
        </ul>
      </section>

      <section id="how-to-calculate">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">How to Calculate GSM at Home</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          You do not need a commercial textile lab to measure GSM. Follow these simple steps:
        </p>
        <ol class="list-decimal pl-5 space-y-2 text-[#3A3A3A] mb-4">
          <li>Cut a neat 10 cm × 10 cm square swatch from your fabric scrap.</li>
          <li>Weigh it on a digital kitchen or jewelry scale in grams.</li>
          <li>Multiply that weight by 100. That gives you the GSM!</li>
        </ol>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          For any custom sample size, input your swatch dimensions into our instant <a href="#tools/fabric-gsm-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric GSM Calculator</a>.
        </p>
      </section>

      <section id="quality-myth">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Does Higher GSM Mean Better Quality?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          No. <strong>GSM measures weight, not quality.</strong> A fine summer dress made from luxury Egyptian cotton lawn has a low GSM (80 GSM) but uses superior long-staple fibers. A cheap tote bag may have a high GSM (300 GSM) made from rough, scratchy cotton scraps. Always pick the GSM that matches your climate and garment style.
        </p>
      </section>
    `,
    tags: ['GSM', 'Fabric Weight', 'Cotton', 'Lawn', 'Sewing Basics'],
    sources: [
      { title: 'Standard Test Method for Mass Per Unit Area (Weight) of Fabric', institutionOrAuthor: 'ASTM International (ASTM D3776)', year: '2020' },
      { title: 'Determination of mass per unit length and mass per unit area', institutionOrAuthor: 'ISO 3801', year: '2019' }
    ],
    relatedSlugs: ['cotton-gsm-guide', 'fabric-weight-chart', 'denim-gsm-chart'],
    faqs: [
      {
        question: 'What is a good GSM for a cotton t-shirt?',
        answer: 'Standard everyday t-shirts range from 150 to 180 GSM. Heavyweight streetwear tees usually weigh between 220 and 280 GSM.'
      },
      {
        question: 'How do I convert GSM to ounces?',
        answer: 'Divide the GSM by 33.9057. For example, 200 GSM divided by 33.9057 equals 5.9 oz/yd².'
      },
      {
        question: 'Is 200 GSM thick or thin?',
        answer: '200 GSM is a medium weight. It is completely opaque, durable, and comfortable for shirts, polo shirts, and light dresses.'
      }
    ]
  },
  {
    id: 'cotton-gsm-guide',
    slug: 'cotton-gsm-guide',
    title: 'Cotton GSM Guide: Weights for Voile, Lawn, Poplin, and Canvas',
    subtitle: 'From airy 60 GSM cotton voile to heavy 400 GSM duck canvas: understand cotton fabric weights and how to choose the right one.',
    category: 'Fabric Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Based on USDA Cotton Standards and ASTM D3776'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Complete guide to cotton fabric weights. See typical GSM for cotton lawn, poplin, twill, flannel, and canvas with easy garment recommendations.',
    seoTitle: 'Cotton GSM Guide: From Voile to Heavy Canvas Weights',
    metaDescription: 'Explore the full spectrum of cotton fabric GSM. Discover the exact weight ranges for lawn, poplin, flannel, chino twill, and cotton canvas.',
    featuredImage: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Folded natural unbleached cotton textiles showcasing weave textures and weights',
    imageCaption: 'Cotton fabrics range from airy 65 GSM lawns to heavy 450 GSM workwear canvas.',
    tableOfContents: [
      { id: 'overview', title: 'Why Cotton Weights Vary', level: 2 },
      { id: 'gsm-chart', title: 'Cotton Fabric Weight Chart', level: 2 },
      { id: 'popular-types', title: 'Key Cotton Fabric Types & GSM', level: 2 },
      { id: 'care-tips', title: 'Washing & Shrinkage by Cotton Weight', level: 2 }
    ],
    contentHtml: `
      <section id="overview">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Why Cotton Weights Vary</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          <a href="#fabric/cotton" class="text-[#9E472A] font-semibold underline">Cotton</a> is the most versatile natural fiber on Earth. By spinning cotton into thin or thick yarns and weaving them loosely or tightly, mills produce textiles suited for tropical summers or sub-zero winter coats.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Understanding the GSM of cotton fabrics ensures you never accidentally purchase a see-through dress fabric or an uncomfortably stiff summer shirt. Test your own cotton scraps using our <a href="#tools/fabric-gsm-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric GSM Calculator</a>.
        </p>
      </section>

      <section id="gsm-chart">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Cotton Fabric Weight Chart</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Cotton Fabric Type</th>
                <th class="p-3 font-semibold">Typical GSM</th>
                <th class="p-3 font-semibold">Ounces (oz/yd²)</th>
                <th class="p-3 font-semibold">Best Uses</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Cotton Voile</td>
                <td class="p-3">60–80 GSM</td>
                <td class="p-3">1.8–2.4 oz</td>
                <td class="p-3">Sheer blouses, scarves, curtains</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Cotton <a href="#fabric/lawn" class="text-[#9E472A] underline">Lawn</a></td>
                <td class="p-3">75–95 GSM</td>
                <td class="p-3">2.2–2.8 oz</td>
                <td class="p-3">Summer dresses, handkerchiefs, linings</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Cotton <a href="#fabric/poplin" class="text-[#9E472A] underline">Poplin</a></td>
                <td class="p-3">110–140 GSM</td>
                <td class="p-3">3.2–4.1 oz</td>
                <td class="p-3">Button-down shirts, pajamas, skirts</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Quilting Cotton</td>
                <td class="p-3">140–160 GSM</td>
                <td class="p-3">4.1–4.7 oz</td>
                <td class="p-3">Patchwork quilts, crafts, totes</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Cotton Twill / Chino</td>
                <td class="p-3">200–260 GSM</td>
                <td class="p-3">5.9–7.7 oz</td>
                <td class="p-3">Trousers, jackets, hats</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Duck <a href="#fabric/canvas" class="text-[#9E472A] underline">Canvas</a></td>
                <td class="p-3">300–450 GSM</td>
                <td class="p-3">8.8–13.3 oz</td>
                <td class="p-3">Tote bags, slipcovers, work jackets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="popular-types">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Key Cotton Fabric Types & GSM</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          For hot summer weather, aim for cottons under 120 GSM. For durable pants and jackets that hold their shape through years of daily washing, select cotton twills over 220 GSM.
        </p>
      </section>
    `,
    tags: ['Cotton', 'GSM', 'Poplin', 'Canvas', 'Lawn', 'Sewing'],
    sources: [
      { title: 'The Classification of Cotton', institutionOrAuthor: 'USDA Agricultural Marketing Service', year: '2021' },
      { title: 'Physical Testing of Textiles', institutionOrAuthor: 'The Textile Institute', year: '2018' }
    ],
    relatedSlugs: ['what-is-gsm-in-fabric', 'fabric-weight-chart', 'poplin-fabric-guide'],
    faqs: [
      {
        question: 'What GSM is best for a crisp summer dress shirt?',
        answer: 'A 115 to 135 GSM cotton poplin or broadcloth offers the ideal balance of breathability, opacity, and crisp collar structure.'
      },
      {
        question: 'Does heavy cotton canvas shrink more than lightweight lawn?',
        answer: 'Both shrink 3% to 5% if untreated, but heavier cotton can feel significantly tighter after shrinkage because of its thicker yarn structure.'
      }
    ]
  },
  {
    id: 'denim-gsm-chart',
    slug: 'denim-gsm-chart',
    title: 'Denim GSM Chart: Converting Ounces to GSM for Jeans & Jackets',
    subtitle: 'Understand denim weight categories: from lightweight 8 oz chambray to heavyweight 16 oz raw Japanese selvedge denim.',
    category: 'Fabric Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Denim manufacturing research based on ASTM D3776'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '7 min read',
    excerpt: 'Complete denim weight chart converting ounces per square yard to GSM. Learn what 10 oz, 12 oz, 14 oz, and 16 oz denim feels like on body.',
    seoTitle: 'Denim GSM Chart: Ounces to GSM for Jeans & Jackets',
    metaDescription: 'Understand denim weights easily. See our comprehensive Denim GSM Chart converting 6 oz to 21 oz denim to GSM, with recommendations for jeans.',
    featuredImage: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stacked blue indigo denim jeans showing twill texture and heavy fabric weight',
    imageCaption: 'Denim weight determines durability, break-in time, and warmth in finished jeans.',
    tableOfContents: [
      { id: 'why-ounces', title: 'Why Denim Is Measured in Ounces', level: 2 },
      { id: 'denim-chart', title: 'Complete Denim Ounces to GSM Chart', level: 2 },
      { id: 'weight-brackets', title: 'Lightweight vs Mid-Weight vs Heavyweight Denim', level: 2 },
      { id: 'how-to-pick', title: 'How to Pick the Right Denim Weight', level: 2 }
    ],
    contentHtml: `
      <section id="why-ounces">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Why Denim Is Measured in Ounces</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          In textile retail, almost every fabric is measured in GSM—except <a href="#fabric/denim" class="text-[#9E472A] font-semibold underline">denim</a>. In the United States and globally, jeans manufacturers describe fabric by ounces per square yard (oz/yd²).
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          When you see "12 oz denim," it means one square yard of that twill fabric weighs 12 avoirdupois ounces. To convert that to metric GSM, multiply by 33.906. You can do this live with our <a href="#tools/gsm-to-oz-converter" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">GSM to Oz Converter</a>.
        </p>
      </section>

      <section id="denim-chart">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Complete Denim Ounces to GSM Chart</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Denim Weight (oz)</th>
                <th class="p-3 font-semibold">Metric GSM</th>
                <th class="p-3 font-semibold">Classification</th>
                <th class="p-3 font-semibold">Typical Garment</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">6–8 oz</td>
                <td class="p-3">203–271 GSM</td>
                <td class="p-3">Lightweight / Chambray</td>
                <td class="p-3">Denim button-down shirts, summer dresses</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">9–11 oz</td>
                <td class="p-3">305–373 GSM</td>
                <td class="p-3">Medium-Light</td>
                <td class="p-3">Summer jeans, women's stretch jeans</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">12–13 oz</td>
                <td class="p-3">407–441 GSM</td>
                <td class="p-3">Classic Standard</td>
                <td class="p-3">Classic Levi's 501 jeans, denim trucker jackets</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">14–15 oz</td>
                <td class="p-3">475–509 GSM</td>
                <td class="p-3">Medium-Heavy</td>
                <td class="p-3">Durable workwear jeans, unwashed raw denim</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">16–21+ oz</td>
                <td class="p-3">542–712+ GSM</td>
                <td class="p-3">Heavyweight Selvedge</td>
                <td class="p-3">Heritage collector denim, heavy winter jackets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="weight-brackets">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Lightweight vs Mid-Weight vs Heavyweight Denim</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-3">
          For year-round comfort, <strong>12 oz denim (approx. 407 GSM)</strong> is the undisputed sweet spot. It breathes well in moderate warmth yet shields against cold wind in autumn and winter.
        </p>
      </section>
    `,
    tags: ['Denim', 'GSM', 'Jeans', 'Twill', 'Fabric Weight'],
    sources: [
      { title: 'Denim: Manufacture, Finishing and Applications', institutionOrAuthor: 'The Textile Institute / Woodhead Publishing', year: '2019' }
    ],
    relatedSlugs: ['what-is-gsm-in-fabric', 'twill-fabric-guide', 'fabric-weight-chart'],
    faqs: [
      {
        question: 'What is the most popular denim weight for regular jeans?',
        answer: 'Classic 5-pocket blue jeans are most commonly made from 11.5 to 13 oz denim (390 to 440 GSM).'
      },
      {
        question: 'What is considered heavy denim?',
        answer: 'Any denim weighing 14 oz (475 GSM) or heavier is classified as heavyweight. It requires weeks of wear to break in and soften.'
      }
    ]
  },
  {
    id: 'fabric-weight-chart',
    slug: 'fabric-weight-chart',
    title: 'Fabric Weight Chart: Master Guide for All Major Textiles',
    subtitle: 'A single reference table matching GSM and ounces per square yard across cotton, silk, linen, wool, and synthetics.',
    category: 'Fabric Guides',
    author: {
      name: 'Elite Fabrics Editorial Staff',
      role: 'Textile Research & Education',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      credentials: 'Textile density compilations based on ISO 3801'
    },
    publishDate: '2026-09-24',
    updatedDate: '2026-09-26',
    readTime: '8 min read',
    excerpt: 'Comprehensive fabric weight chart. Compare GSM, ounces per square yard, and ideal clothing applications for over 25 common textiles.',
    seoTitle: 'Fabric Weight Chart: Comprehensive GSM & Ounces Guide',
    metaDescription: 'Compare fabric weights easily with our complete Fabric Weight Chart. Includes GSM, oz/yd², and practical sewing advice for natural and synthetic textiles.',
    featuredImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Variety of colorful fabric swatches and textiles arranged on a sewing workshop table',
    imageCaption: 'A master reference chart helps sewists choose fabrics that drape and perform correctly.',
    tableOfContents: [
      { id: 'how-to-use', title: 'How to Read This Weight Chart', level: 2 },
      { id: 'master-chart', title: 'Master Fabric Weight Reference Table', level: 2 },
      { id: 'drape-correlation', title: 'Does Heavier Always Mean Stiffer?', level: 2 }
    ],
    contentHtml: `
      <section id="how-to-use">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">How to Read This Weight Chart</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Sewing patterns often tell you to pick a "medium weight woven" or "lightweight jersey," but rarely give numbers. This chart bridges that gap by connecting textile names to their verified GSM and ounce weights.
        </p>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Check your project yardage needs alongside this weight data with our <a href="#tools/fabric-yardage-calculator" class="text-[#9E472A] font-semibold underline hover:text-[#7A3620]">Fabric Yardage Calculator</a>.
        </p>
      </section>

      <section id="master-chart">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Master Fabric Weight Reference Table</h2>
        <div class="overflow-x-auto my-4 border border-[#E6E0D7] rounded-lg">
          <table class="w-full text-xs sm:text-sm text-left border-collapse">
            <thead class="bg-[#FAF8F5] border-b border-[#E6E0D7] text-[#1C1C1C]">
              <tr>
                <th class="p-3 font-semibold">Fabric</th>
                <th class="p-3 font-semibold">Typical GSM</th>
                <th class="p-3 font-semibold">Ounces (oz/yd²)</th>
                <th class="p-3 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E6E0D7] text-[#4A453E]">
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/silk" class="text-[#9E472A] underline">Silk</a> Chiffon</td>
                <td class="p-3">30–50 GSM</td>
                <td class="p-3">0.9–1.5 oz</td>
                <td class="p-3">Sheer / Very Light</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/cotton" class="text-[#9E472A] underline">Cotton</a> Lawn</td>
                <td class="p-3">75–90 GSM</td>
                <td class="p-3">2.2–2.7 oz</td>
                <td class="p-3">Lightweight</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/rayon" class="text-[#9E472A] underline">Rayon</a> Challis</td>
                <td class="p-3">100–130 GSM</td>
                <td class="p-3">3.0–3.8 oz</td>
                <td class="p-3">Lightweight Drape</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Cotton <a href="#fabric/jersey" class="text-[#9E472A] underline">Jersey</a> (T-Shirt)</td>
                <td class="p-3">160–200 GSM</td>
                <td class="p-3">4.7–5.9 oz</td>
                <td class="p-3">Medium Weight Knit</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]">Mid-Weight <a href="#fabric/linen" class="text-[#9E472A] underline">Linen</a></td>
                <td class="p-3">180–220 GSM</td>
                <td class="p-3">5.3–6.5 oz</td>
                <td class="p-3">Medium Weight Woven</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/denim" class="text-[#9E472A] underline">Denim</a> (Classic 501)</td>
                <td class="p-3">400–440 GSM</td>
                <td class="p-3">12.0–13.0 oz</td>
                <td class="p-3">Heavyweight Woven</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#1C1C1C]"><a href="#fabric/wool" class="text-[#9E472A] underline">Wool</a> Melton (Coat)</td>
                <td class="p-3">450–600 GSM</td>
                <td class="p-3">13.3–17.7 oz</td>
                <td class="p-3">Extra Heavy Woven</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="drape-correlation">
        <h2 class="text-xl font-serif-heading font-bold text-[#1C1C1C] mt-6 mb-3">Does Heavier Always Mean Stiffer?</h2>
        <p class="text-[#3A3A3A] leading-relaxed mb-4">
          Not always. A 220 GSM silk satin has substantial weight but flows fluidly like liquid. Conversely, a 150 GSM crisp cotton organdy feels stiff and holds sharp architectural pleats despite being relatively light. Weave architecture and fiber resilience matter just as much as weight.
        </p>
      </section>
    `,
    tags: ['Fabric Weight', 'GSM', 'Textile Chart', 'Silk', 'Linen', 'Wool'],
    sources: [
      { title: 'Textile Fabric Weight and Thickness Standards', institutionOrAuthor: 'ISO 3801 / ASTM D3776', year: '2020' }
    ],
    relatedSlugs: ['what-is-gsm-in-fabric', 'cotton-gsm-guide', 'denim-gsm-chart'],
    faqs: [
      {
        question: 'What is the most versatile all-purpose fabric weight?',
        answer: 'Medium weight (180 to 220 GSM) is the most versatile range. It works beautifully for dresses, tops, casual pants, and home pillow covers.'
      }
    ]
  }
];
