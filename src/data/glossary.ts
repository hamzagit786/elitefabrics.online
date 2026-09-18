import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Bias',
    phonetic: '/ˈbaɪ.əs/',
    category: 'Weaving & Knitting',
    definition: 'The diagonal line drawn across a woven fabric at exactly 45 degrees to the warp and weft threads.',
    context: 'Cutting garments on the true bias gives rigid woven fabrics exceptional natural elasticity, fluid drape, and body-contouring properties, famously pioneered by 1930s couturière Madeleine Vionnet.',
    relatedTerms: ['Warp', 'Weft', 'Drape', 'Grainline']
  },
  {
    term: 'Blend',
    phonetic: '/blɛnd/',
    category: 'Fiber & Yarn',
    definition: 'A yarn or fabric composed of two or more distinct types of fibers spun or woven together.',
    context: 'Fibers are blended to combine desirable performance traits—such as blending 60% cotton with 40% polyester to achieve natural breathability with synthetic wrinkle resistance.',
    relatedTerms: ['Fiber', 'Yarn', 'Polycotton', 'Core-spun']
  },
  {
    term: 'Breathability',
    phonetic: '/ˌbrɛθ.əˈbɪl.ɪ.ti/',
    category: 'Characteristics',
    definition: 'The ability of a fabric to allow moisture vapor and ambient air to circulate freely through its porous structure.',
    context: 'Natural fibers like linen and open-weave lawn have high breathability, keeping the wearer cool in hot climates by facilitating natural evaporative perspiration.',
    relatedTerms: ['Moisture Wicking', 'Air Permeability', 'Comfort Microclimate']
  },
  {
    term: 'Calendering',
    phonetic: '/ˈkæl.ən.dər.ɪŋ/',
    category: 'Finishing & Processing',
    definition: 'A mechanical finishing process where fabric passes between heavy heated rollers under immense pressure.',
    context: 'Calendering flattens the surface of fabrics like lawn and chintz, producing a smooth, lustrous glaze and reducing thickness.',
    relatedTerms: ['Finish', 'Lawn', 'Glaze', 'Mercerization']
  },
  {
    term: 'Carding',
    phonetic: '/ˈkɑːr.dɪŋ/',
    category: 'Finishing & Processing',
    definition: 'A mechanical preliminary process that disentangles, cleans, and intermixes raw staple fibers into a continuous web.',
    context: 'Carding aligns fibers in parallel directions to prepare them for spinning into yarn. Carded cotton is slightly coarser than further-refined combed cotton.',
    relatedTerms: ['Combing', 'Staple Fiber', 'Yarn']
  },
  {
    term: 'Combing',
    phonetic: '/ˈkoʊ.mɪŋ/',
    category: 'Finishing & Processing',
    definition: 'An additional refining process following carding where fine metal combs remove short, weak fibers and align long fibers.',
    context: 'Combed cotton yarns are smoother, stronger, and more lustrous than carded yarns, making them the standard for luxury bed sheets and fine Pakistani lawn.',
    relatedTerms: ['Carding', 'Lawn', 'Supima Cotton']
  },
  {
    term: 'Denier',
    phonetic: '/ˈdɛn.jər/ or /dɪˈnɪər/',
    category: 'Testing & Measurement',
    definition: 'A unit of linear mass density representing the weight in grams of 9,000 meters of continuous filament yarn.',
    context: 'A lower denier indicates a finer thread (e.g. 15 denier for sheer tights), while a higher denier indicates thick, heavy-duty yarn (e.g. 1000D ballistic nylon for luggage).',
    relatedTerms: ['GSM', 'Thread Count', 'Filament']
  },
  {
    term: 'Drape',
    phonetic: '/dreɪp/',
    category: 'Characteristics',
    definition: 'The manner in which a fabric hangs, falls, and folds under its own gravitational weight over a three-dimensional form.',
    context: 'Chiffon and silk charmeuse have a fluid, body-skimming drape, while canvas, heavy linen, and denim have a crisp, stiff drape suited for structural tailoring.',
    relatedTerms: ['Hand Feel', 'GSM', 'Stiffness']
  },
  {
    term: 'Fiber',
    phonetic: '/ˈfaɪ.bər/',
    category: 'Fiber & Yarn',
    definition: 'The smallest fundamental hair-like unit from which yarns and textile fabrics are constructed.',
    context: 'Fibers are broadly categorized into natural (cotton, flax, wool, silk), regenerated (rayon, modal, lyocell), and synthetic (polyester, nylon, acrylic).',
    relatedTerms: ['Yarn', 'Filament', 'Staple Fiber']
  },
  {
    term: 'GSM (Grams per Square Meter)',
    phonetic: '/ˌdʒiː.ɛsˈɛm/',
    category: 'Testing & Measurement',
    definition: 'The international standard metric measurement for textile weight, quantifying the mass of one square meter of fabric in grams.',
    context: 'Lightweight fabrics range between 30–120 GSM (chiffon, lawn), medium apparel weights sit between 130–220 GSM (t-shirts, chambray), and heavyweight fabrics exceed 250+ GSM (denim, canvas, tweed).',
    relatedTerms: ['Fabric Weight', 'Denier', 'Ounce Weight']
  },
  {
    term: 'Hand Feel (Hand)',
    phonetic: '/hænd fiːl/',
    category: 'Characteristics',
    definition: 'The subjective tactile sensory reaction experienced when touching, rubbing, or manipulating a fabric between the fingers.',
    context: 'Textile professionals evaluate hand feel along several sensory axes: smoothness, roughness, warmth, coolness, stiffness, resilience, and weight.',
    relatedTerms: ['Texture', 'Drape', 'Pile']
  },
  {
    term: 'Knit',
    phonetic: '/nɪt/',
    category: 'Weaving & Knitting',
    definition: 'A fabric formed by intermeshing continuous loops of yarn using needles, rather than interlacing crossed threads.',
    context: 'Because knit fabrics consist of interconnected loops, they possess inherent mechanical stretch and contour easily to human body movement without rigid tailoring.',
    relatedTerms: ['Woven', 'Wales', 'Courses', 'Jersey']
  },
  {
    term: 'Mercerization',
    phonetic: '/ˌmɜːr.sər.aɪˈzeɪ.ʃən/',
    category: 'Finishing & Processing',
    definition: 'A chemical treatment where cotton yarn or fabric is immersed in cold caustic sodium hydroxide under controlled mechanical tension.',
    context: 'Patented by John Mercer in 1844, this causes cotton fibers to swell from flat ribbons into round tubes, increasing tensile strength by 25%, boosting dye uptake, and bestowing a permanent silk-like sheen.',
    relatedTerms: ['Cotton', 'Lawn', 'Luster']
  },
  {
    term: 'Nap',
    phonetic: '/næp/',
    category: 'Characteristics',
    definition: 'The raised, fuzzy surface of a fabric produced by brushing short fiber ends upward in a specific direction.',
    context: 'Fabrics with nap (such as velvet, flannel, and corduroy) reflect light differently depending on whether you brush with or against the grain. Garment pieces must be cut in the same direction to prevent mismatched color shades.',
    relatedTerms: ['Pile', 'Velvet', 'Flannel', 'Corduroy']
  },
  {
    term: 'Pile',
    phonetic: '/paɪl/',
    category: 'Characteristics',
    definition: 'A three-dimensional surface effect composed of raised upright loops or cut yarn ends projecting out from the structural ground weave.',
    context: 'Cut pile creates plush textiles like velvet, corduroy, and carpets; uncut loop pile creates absorbent terrycloth towels.',
    relatedTerms: ['Nap', 'Velvet', 'Terry Cloth', 'Corduroy']
  },
  {
    term: 'Sanforization',
    phonetic: '/ˌsæn.fər.aɪˈzeɪ.ʃən/',
    category: 'Finishing & Processing',
    definition: 'A patented thermo-mechanical pre-shrinking process that compresses fabric lengthwise prior to garment cutting.',
    context: 'Sanforized cotton and denim will experience less than 1% residual shrinkage in consumer laundry, eliminating the unpredictable shrinkage of raw un-sanforized goods.',
    relatedTerms: ['Shrinkage', 'Denim', 'Finishing']
  },
  {
    term: 'Selvedge (Selvage)',
    phonetic: '/ˈsɛl.vɪdʒ/',
    category: 'Weaving & Knitting',
    definition: 'The tightly woven, self-finished lengthwise edges of a fabric that prevent unraveling during manufacturing.',
    context: 'Traditional shuttle looms produce a neat, tightly bound selvedge edge (often celebrated with a colored thread in selvedge denim), whereas modern projectile looms create fringe-cut edges that must be trimmed.',
    relatedTerms: ['Denim', 'Warp', 'Weft', 'Grainline']
  },
  {
    term: 'Shrinkage',
    phonetic: '/ˈʃrɪŋ.kɪdʒ/',
    category: 'Characteristics',
    definition: 'The dimensional reduction in the length or width of a fabric or garment after washing, drying, or steaming.',
    context: 'Shrinkage occurs when tensions induced during spinning and weaving are released by water and heat (relaxation shrinkage) or when animal wool fibers interlock scales (felting shrinkage).',
    relatedTerms: ['Sanforization', 'Care Instructions', 'Pre-washing']
  },
  {
    term: 'Thread Count',
    phonetic: '/θrɛd kaʊnt/',
    category: 'Testing & Measurement',
    definition: 'The sum total of warp (lengthwise) and weft (crosswise) threads woven into one square inch of fabric.',
    context: 'While often marketed as an indicator of luxury bed linens, thread counts above 500 often count multi-ply twisted yarns rather than single-ply fibers, meaning high thread count does not automatically guarantee superior quality.',
    relatedTerms: ['Warp', 'Weft', 'Lawn', 'Bed Linens']
  },
  {
    term: 'Warp',
    phonetic: '/wɔːrp/',
    category: 'Weaving & Knitting',
    definition: 'The lengthwise parallel yarns held stationary under tension on a loom through which weft yarns are interlaced.',
    context: 'Warp threads must withstand intense mechanical tension and abrasion during weaving, so they are typically spun tighter, stronger, and smoother than filling weft yarns.',
    relatedTerms: ['Weft', 'Loom', 'Grainline', 'Selvedge']
  },
  {
    term: 'Weft',
    phonetic: '/wɛft/',
    category: 'Weaving & Knitting',
    definition: 'The horizontal crosswise yarns inserted over and under the stationary warp threads across the width of the loom (also called filling or woof).',
    context: 'In standard blue denim, the weft consists of un-dyed white cotton yarns, which is why the reverse side of blue jeans appears predominantly white.',
    relatedTerms: ['Warp', 'Loom', 'Denim', 'Shuttle']
  },
  {
    term: 'Yarn',
    phonetic: '/jɑːrn/',
    category: 'Fiber & Yarn',
    definition: 'A continuous strand of twisted or bonded staple fibers or filaments suitable for weaving, knitting, or sewing.',
    context: 'Yarns can be spun from short natural staple fibers (like cotton or wool) or extruded as continuous synthetic filaments (like nylon or polyester).',
    relatedTerms: ['Fiber', 'Twist', 'Denier', 'Spindle']
  }
];
