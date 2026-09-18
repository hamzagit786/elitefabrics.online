import { TimelineEvent } from '../types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'ancient-flax-linen',
    era: 'Prehistoric & Antiquity',
    yearDisplay: 'c. 30,000 – 5,000 BCE',
    title: 'The Dawn of Spun Fibers & Ancient Egyptian Linen',
    description: 'Wild flax fibers discovered in Dzudzuana Cave (Georgia) date spun fibers back 30,000 years. By 5,000 BCE, ancient Egyptians mastered flax cultivation along the Nile Delta, weaving sheer white linen celebrated as "woven moonlight" and wrapping pharaonic mummies for eternity.',
    significance: 'Established the earliest agricultural fiber economy and demonstrated linen\'s extraordinary preservation longevity.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Ancient flax linen woven texture',
    historicalSource: 'British Museum Egyptian Textile Archives & Dzudzuana Archaeological Expedition.'
  },
  {
    id: 'indus-valley-cotton',
    era: 'Bronze Age',
    yearDisplay: 'c. 3,000 – 2,500 BCE',
    title: 'Indus Valley Civilization: Birthplace of Cotton Agriculture',
    description: 'Excavations at Mohenjo-daro and Harappa (modern-day Pakistan) unearthed the earliest known woven cotton textiles and mordant-dyed madder threads wrapped around silver vessels. The famous King-Priest sculpture wears an intricately patterned trefoil shawl reminiscent of Sindhi Ajrak.',
    significance: 'Proved the South Asian subcontinent as the premier global cradle of cotton domestication, spinning wheels, and herbal mordant dyeing.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Raw cotton bolls and ancient spinning heritage',
    historicalSource: 'Archaeological Survey of India / Mohenjo-daro Archaeological Records.'
  },
  {
    id: 'chinese-sericulture',
    era: 'Ancient Dynasties',
    yearDisplay: 'c. 2,700 BCE',
    title: 'Chinese Sericulture & Empress Leizu',
    description: 'According to classical Chinese historical tradition, Empress Leizu discovered silk when a cocoon dropped into her hot cup of tea, unraveling a continuous shimmering filament. China fiercely guarded sericulture secrets under pain of death for over two millennia.',
    significance: 'Created the world\'s most valuable luxury trade commodity and laid the foundation for trans-continental trade.',
    image: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luminous draped pure silk fabric',
    imageCaption: 'Sericulture: harvesting continuous protein filaments of Bombyx mori.',
    historicalSource: 'Records of the Grand Historian (Shiji) by Sima Qian.'
  },
  {
    id: 'silk-road',
    era: 'Classical Antiquity to Middle Ages',
    yearDisplay: '130 BCE – 1453 CE',
    title: 'The Trans-Eurasian Silk Road',
    description: 'The Han Dynasty formally established overland trade routes spanning 6,400 kilometers through Central Asia, Persia, and the Levant to Rome. Silk was so coveted in imperial Rome that Roman philosopher Seneca lamented it as an excessive luxury, trading literally pound-for-pound for gold.',
    significance: 'Spurred unprecedented cultural, technological, and linguistic cross-pollination between East Asia, the Islamic world, and Europe.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich historical brocade textile reflecting Silk Road opulence',
    historicalSource: 'UNESCO Silk Road Programme Cultural Heritage Reports.'
  },
  {
    id: 'medieval-islamic-textiles',
    era: 'Islamic Golden Age & Medieval Europe',
    yearDisplay: '8th – 14th Century CE',
    title: 'Tiraz Guilds, Damascus Silks & European Wool Fairs',
    description: 'Islamic royal workshops (Tiraz) across Baghdad, Cairo, and Damascus elevated intricate tapestry, damask, and block printing. Meanwhile, Flanders and Florence flourished through wool merchant guilds (Arte della Lana), laying the financial groundwork for the Italian Renaissance.',
    significance: 'Created state-controlled textile monopolies, standardized currency systems based on cloth value, and gave birth to term words like "damask" and "muslin".',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rich woolen weave reflecting medieval merchant trade',
    historicalSource: 'Metropolitan Museum of Art Islamic Art Department.'
  },
  {
    id: 'industrial-revolution',
    era: 'The Mechanical Era',
    yearDisplay: '1733 – 1785 CE',
    title: 'The Industrial Revolution: Mechanization of the Loom',
    description: 'John Kay\'s Flying Shuttle (1733), James Hargreaves\' Spinning Jenny (1764), Richard Arkwright\'s Water Frame (1769), and Edmund Cartwright\'s Power Loom (1785) transformed textile manufacturing from pastoral cottage industries into steam-powered factories, centered in Manchester ("Cottonopolis").',
    significance: 'Spawned the modern factory system, urban migration, labor movements, and vastly expanded global cotton trade.',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Industrial woven denim twill machine fabric',
    historicalSource: 'Science Museum London Industrial Machinery Archives.'
  },
  {
    id: 'jacquard-loom',
    era: '19th Century',
    yearDisplay: '1804 CE',
    title: 'The Jacquard Loom: The Ancestor of Computing',
    description: 'Joseph Marie Jacquard automated the weaving of intricate pictorial tapestries and brocades using interchangeable punched cards to control warp threads. This binary mechanical automation directly inspired Charles Babbage and Ada Lovelace to conceive the first analytical programmable computers.',
    significance: 'Democratized complex woven patterns while pioneering the fundamental logic of computer coding.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Intricate jacquard brocade relief pattern',
    historicalSource: 'Musée des Tissus et des Arts Décoratifs, Lyon, France.'
  },
  {
    id: 'synthetic-revolution',
    era: 'The Polymer Century',
    yearDisplay: '1935 – 1958 CE',
    title: 'The Rise of Synthetic Polymers: Nylon, Polyester & Spandex',
    description: 'Wallace Carothers synthesized Nylon at DuPont in 1935, creating an instant sensation with women\'s stockings in 1940 and wartime parachutes. Polyester followed in 1941, acrylic in 1950, and Lycra (spandex) in 1958, freeing apparel from agricultural dependence.',
    significance: 'Synthetics overtook natural fibers by total global volume by the late 20th century, enabling ultra-low-cost clothing and modern activewear.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Synthetic technical ripstop textile',
    historicalSource: 'DuPont Corporate Historical Archives & Science History Institute.'
  },
  {
    id: 'sustainable-circularity',
    era: 'Modern Era',
    yearDisplay: '2020 – 2026+',
    title: 'Closed-Loop Regeneration, Circular Fashion & Bio-Materials',
    description: 'In response to textile landfill waste and aquatic microplastic pollution, the textile sector is transitioning toward closed-loop Lyocell (TENCEL™), mechanical and chemical cotton recycling, agricultural waste fibers (banana, pineapple Piñatex), and mycelium lab-grown leathers.',
    significance: 'Redefining the fundamental relationship between fashion consumption, agricultural land use, and planetary boundaries.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern sustainable closed-loop eucalyptus textile',
    historicalSource: 'Textile Exchange Annual Materials Market Report (2025/2026).'
  },
  {
    id: 'future-smart-fabrics',
    era: 'The Frontier',
    yearDisplay: '2026 and Beyond',
    title: 'Smart Textiles, Conductive Yarns & Programmable Fibers',
    description: 'Integration of microscopic carbon nanotubes, conductive silver-coated yarns, and phase-change thermoregulating microcapsules directly into weaving matrices. Garments will actively monitor cardiovascular health, adapt thermal insulation dynamically, and harvest ambient kinetic energy.',
    significance: 'Merges apparel with electronic computing and medical biosensing without sacrificing wearable tactile drape.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineered high-tech functional fabric in action',
    historicalSource: 'MIT Media Lab Tangible Media Group & Advanced Functional Fabrics of America (AFFOA).'
  }
];
