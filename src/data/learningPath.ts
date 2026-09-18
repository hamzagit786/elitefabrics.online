import { LearningPathwayStage } from '../types';

export const LEARNING_PATHWAY: LearningPathwayStage[] = [
  {
    level: 'Beginner',
    stageTitle: 'Step 1: The Basics of Cloth & Fibers',
    description: 'Start with the simple fundamentals: what fibers are, where they come from, and how to read the tags on your clothes.',
    targetKnowledge: 'Understand natural vs. synthetic fabrics, what fabric weight (GSM) means, and how to read laundry care symbols.',
    topics: [
      {
        title: 'What is the Difference Between Fiber, Yarn, and Fabric?',
        summary: 'A fiber is the tiny raw strand (like cotton from a plant). Twisting fibers makes yarn or thread. Weaving or knitting yarn creates fabric ready for clothes.',
        coreConcepts: ['Fiber is the raw hair-like strand', 'Yarn is fibers spun together', 'Fabric is the finished sheet of cloth']
      },
      {
        title: 'Natural vs. Synthetic Fabrics: Which is Which?',
        summary: 'Natural fabrics come from plants (cotton, linen) or animals (wool, silk). Synthetic fabrics (polyester, nylon) are man-made in factories from polymers.',
        coreConcepts: ['Plant fibers (cotton, linen)', 'Animal fibers (wool, silk)', 'Man-made synthetics (polyester, nylon, spandex)']
      },
      {
        title: 'Understanding Fabric Weight: What is GSM?',
        summary: 'GSM stands for Grams per Square Meter. It is simply a number that tells you how thick or heavy a fabric feels in your hand.',
        coreConcepts: ['Lightweight (<130 GSM): breezy summer clothes', 'Medium weight (140-240 GSM): everyday t-shirts and shirts', 'Heavyweight (250+ GSM): jeans, hoodies, and jackets']
      },
      {
        title: 'How to Read Clothing Tags and Laundry Symbols',
        summary: 'Learn what the five little symbols inside your shirts mean so you never accidentally shrink or ruin a favorite outfit.',
        coreConcepts: ['Washtub symbol (water temperature)', 'Square with circle (dryer heat)', 'Iron symbol (ironing heat)', 'Triangle (bleach warning)']
      },
      {
        title: 'The 5 Simple Things to Feel: Softness, Stretch, Drape, Breathability & Toughness',
        summary: 'How to use your hands and eyes to judge whether a fabric will feel comfortable and last for years.',
        coreConcepts: ['How it feels against your skin', 'How easily it stretches and snaps back', 'Whether it lets air blow through', 'How long it will last']
      }
    ]
  },
  {
    level: 'Intermediate',
    stageTitle: 'Step 2: How Clothes Are Made & Woven',
    description: 'Learn how fabrics are put together, why some clothes stretch while others hold their shape, and how to test mystery fabrics.',
    targetKnowledge: 'Know the difference between woven and knitted cloth, understand plant-based rayons, and do an easy burn test at home.',
    topics: [
      {
        title: 'Woven vs. Knitted Fabrics: The Everyday Difference',
        summary: 'Woven clothes (like jeans and button-up shirts) hold crisp shapes and do not stretch. Knits (like t-shirts and sweaters) naturally stretch with your body.',
        coreConcepts: ['Woven fabrics: crisscross grid that holds shape', 'Knitted fabrics: interlocking loops that stretch', 'Why t-shirts curl at the hem']
      },
      {
        title: 'Weaving Styles: Plain, Twill, and Satin',
        summary: 'Plain weave is simple and balanced (like bedsheets). Twill has diagonal lines for strength (like denim jeans). Satin has long surface threads that shine.',
        coreConcepts: ['Plain weave: crisp and balanced', 'Twill weave: strong diagonal ribs (denim)', 'Satin weave: shiny and smooth surface']
      },
      {
        title: 'Soft Fabrics Made from Trees: Rayon, Modal & Lyocell',
        summary: 'How natural wood pulp is processed into silk-soft, breathable fabrics that feel gentle on the skin and drape with grace.',
        coreConcepts: ['Rayon/Viscose: classic soft flow', 'Modal: extra smooth and resistant to pilling', 'Lyocell (TENCEL™): silky, breathable, and eco-friendly']
      },
      {
        title: 'Why Clothes Shrink and How to Prevent It',
        summary: 'Learn why hot water and hot dryers cause tightly pulled threads to relax and shrink, and how cold washing saves your clothes.',
        coreConcepts: ['Tension during weaving', 'Why cold water prevents shrinking', 'How to safely wash delicate wool and silk']
      },
      {
        title: 'The Simple Burn Test: Finding Out What Fabric You Have',
        summary: 'A safe, 1-minute test using tweezers and a match over a sink to tell if a mystery scrap is real cotton, wool, or synthetic polyester.',
        coreConcepts: ['Cotton smells like burning paper', 'Wool smells like burnt hair and turns to crushable ash', 'Polyester melts into a hard plastic bead']
      }
    ]
  },
  {
    level: 'Advanced',
    stageTitle: 'Step 3: Choosing Quality & Caring for Fabrics',
    description: 'Become a smart shopper. Learn to spot high-quality garments, understand sustainable choices, and preserve your favorite clothes.',
    targetKnowledge: 'Spot quality stitching and fabric, avoid greenwashing marketing tricks, and discover world-famous heritage crafts.',
    topics: [
      {
        title: 'How to Spot High-Quality Clothes When Shopping',
        summary: 'Check seams, fabric thickness, thread tightness, and fiber percentages so you spend money on clothes that last for years.',
        coreConcepts: ['Reading fiber percentage labels', 'Checking seam neatness and hem stitching', 'Testing whether fabric is see-through in daylight']
      },
      {
        title: 'Sustainable Fashion: What is Real and What is Greenwashing?',
        summary: 'Learn which fabrics actually help the planet (like rain-fed linen and closed-loop lyocell) and which are just marketing gimmicks.',
        coreConcepts: ['Crops that need little water (hemp and linen)', 'Closed-loop manufacturing', 'The problem with microplastics in synthetic fleece']
      },
      {
        title: 'Pakistani & South Asian Heritage Fabrics',
        summary: 'Discover the rich history behind Pakistani summer Lawn, cozy winter Khaddar, and 4,500-year-old hand-block printed Sindhi Ajrak.',
        coreConcepts: ['Cooling combed cotton lawn', 'Artisanal handloom Khadi and Khaddar', 'Hand-stamped Ajrak using natural river dyes']
      },
      {
        title: 'How to Pick the Right Fabric for Every Sewing Project',
        summary: 'A friendly guide matching the right fabric weight and drape to dresses, shirts, summer pants, and cozy winter wear.',
        coreConcepts: ['Breezy fabrics for hot weather', 'Structured fabrics for trousers and jackets', 'Soft stretchy knits for comfortable loungewear']
      }
    ]
  }
];
