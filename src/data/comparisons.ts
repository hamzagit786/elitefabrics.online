import { FabricComparison } from '../types';

export const FABRIC_COMPARISONS: FabricComparison[] = [
  {
    id: 'cotton-vs-linen',
    slug: 'cotton-vs-linen',
    title: 'Cotton vs. Linen: Which Summer Fabric is Best for You?',
    publishDate: '2026-03-15',
    updatedDate: '2026-08-10',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Cotton',
      slug: 'cotton',
      summary: 'Soft, versatile natural fiber that feels comfortable right away and is easy to wash.'
    },
    fabricB: {
      name: 'Linen',
      slug: 'linen',
      summary: 'Strong, airy plant fabric made from flax that keeps you super cool in hot weather.'
    },
    overview: 'Both cotton and linen come from natural plants and are the two most popular fabrics for warm weather. Cotton is softer right out of the box and is easier to iron. Linen feels cooler against your skin on humid days, dries faster, and actually gets softer the more you wash it.',
    criteria: [
      {
        name: 'Cooling & Breathability',
        fabricAValue: 'Breathable and absorbent; holds some moisture against the skin.',
        fabricBValue: 'Super airy; lets body heat escape faster than almost any other fabric.',
        analysis: 'Linen fibers are naturally hollow, which allows air to flow through freely. On boiling hot summer days, linen will feel cooler than cotton.'
      },
      {
        name: 'Strength & How Long It Lasts',
        fabricAValue: 'Strong and durable; lasts several years of normal washing.',
        fabricBValue: 'Twice as strong as cotton; can easily last for decades.',
        analysis: 'Linen fibers are thicker and tougher than cotton. Linen shirts and bedding can last for years without thinning out.'
      },
      {
        name: 'Wrinkles & Ironing',
        fabricAValue: 'Wrinkles a little, but smooths out quickly with an iron.',
        fabricBValue: 'Wrinkles very easily with a relaxed, crinkled look.',
        analysis: 'If you want crisp, wrinkle-free clothes for work, cotton is easier to keep neat. Linen has a natural crinkled charm that most people embrace.'
      },
      {
        name: 'Softness on the Skin',
        fabricAValue: 'Soft and comfortable from the very first day you wear it.',
        fabricBValue: 'Starts a bit crisp or stiff, then becomes buttery soft after a few washes.',
        analysis: 'Cotton gives you instant cozy softness, while linen takes a few trips through the laundry to reach peak comfort.'
      },
      {
        name: 'Care and Washing',
        fabricAValue: 'Very easy to wash in a normal machine cycle.',
        fabricBValue: 'Best washed in cool water and hung to dry so it does not shrink.',
        analysis: 'Both fabrics are easy to wash at home. Just avoid high heat in the dryer for linen.'
      }
    ],
    verdictGuidance: 'Choose **Cotton** for everyday t-shirts, loungewear, bedsheets, and clothes that need to be soft right away and simple to wash. Choose **Linen** for hot summer vacations, beach shirts, breezy wide-leg trousers, and heirloom tablecloths where you love a relaxed, breezy feel.',
    idealUseCasesA: [
      'Everyday crewneck t-shirts and casual tops',
      'Crisp office shirts and school clothes',
      'Soft everyday bed sheets',
      'Denim jeans and everyday jackets'
    ],
    idealUseCasesB: [
      'Hot summer vacation shirts and dresses',
      'Airy wide-leg pants and beach tunics',
      'Durable kitchen tea towels and tablecloths',
      'Breezy window curtains that let daylight in'
    ],
    faqs: [
      {
        question: 'Which is better for hot summer nights: Cotton or Linen sheets?',
        answer: 'Linen sheets allow heat to escape faster and do not stick to your skin when you sweat, making them wonderful for hot sleepers. Cotton sheets feel softer right away and cost less.'
      }
    ]
  },
  {
    id: 'cotton-vs-polyester',
    slug: 'cotton-vs-polyester',
    title: 'Cotton vs. Polyester: Natural Comfort vs. Tough Synthetic',
    publishDate: '2026-02-18',
    updatedDate: '2026-07-22',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Cotton',
      slug: 'cotton',
      summary: 'A natural plant fiber that is soft, breathable, and gentle on sensitive skin.'
    },
    fabricB: {
      name: 'Polyester',
      slug: 'polyester',
      summary: 'A man-made fabric that is strong, stretchy, dries fast, and rarely wrinkles.'
    },
    overview: 'Cotton and polyester are the two most common clothing fabrics in the world. Cotton comes from the cotton plant and is great for everyday comfort and letting your skin breathe. Polyester is synthetic, extremely durable, and dries quickly, making it the top choice for gym clothes and rain gear.',
    criteria: [
      {
        name: 'Sweat and Moisture',
        fabricAValue: 'Absorbs sweat naturally, but can stay damp if you sweat heavily.',
        fabricBValue: 'Pushes sweat to the surface so it dries almost immediately.',
        analysis: 'For working out or running, polyester stays lighter because it does not soak up water like cotton does.'
      },
      {
        name: 'Smell and Odors',
        fabricAValue: 'Does not trap odors; washes clean easily.',
        fabricBValue: 'Can hold onto body sweat odors over time.',
        analysis: 'Polyester fibers attract body oils, which is why gym shirts can sometimes smell even after washing. Cotton washes clean more naturally.'
      },
      {
        name: 'Wrinkles and Shrinking',
        fabricAValue: 'Can shrink in hot water and wrinkles after washing.',
        fabricBValue: 'Does not shrink and resists wrinkles completely.',
        analysis: 'If you hate ironing or need clothes that pack easily without creasing, polyester has a big advantage.'
      },
      {
        name: 'Skin Comfort',
        fabricAValue: 'Soft, natural, and never creates static cling.',
        fabricBValue: 'Can feel warm or sticky on hot, humid days.',
        analysis: 'People with sensitive skin usually find pure cotton much more comfortable for daily wear.'
      }
    ],
    verdictGuidance: 'Choose **Cotton** for everyday t-shirts, underwear, pajamas, baby clothes, and warm casual days. Choose **Polyester** for workout clothes, running shorts, rain jackets, winter coats, and travel bags.',
    idealUseCasesA: ['Casual t-shirts and polos', 'Underwear and socks', 'Baby clothing', 'Bed sheets and pillowcases'],
    idealUseCasesB: ['Gym workout tops and leggings', 'Rain jackets and windbreakers', 'Durable backpacks', 'Swimsuits'],
    faqs: [
      {
        question: 'Why are so many shirts made with a 50/50 Cotton-Polyester blend?',
        answer: 'Blends give you the best of both worlds: the softness and breathability of cotton, combined with the wrinkle-resistance and durability of polyester.'
      }
    ]
  },
  {
    id: 'silk-vs-satin',
    slug: 'silk-vs-satin',
    title: 'Silk vs. Satin: What is the Real Difference?',
    publishDate: '2026-04-02',
    updatedDate: '2026-08-14',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Silk',
      slug: 'silk',
      summary: 'A natural luxury fiber made by silkworms that is cool, smooth, and gentle on hair and skin.'
    },
    fabricB: {
      name: 'Satin',
      slug: 'satin',
      summary: 'A weaving technique that creates a shiny, glossy surface using polyester or silk.'
    },
    overview: 'Many people think silk and satin are two different fabrics, but here is the secret: Silk is a natural fiber (what the cloth is made of), while Satin is a type of weave (how the threads are crisscrossed). You can actually have silk satin, or synthetic polyester satin. When people compare them, they usually mean real natural silk versus shiny synthetic satin.',
    criteria: [
      {
        name: 'What It Is Made Of',
        fabricAValue: '100% natural protein fiber spun by silkworms.',
        fabricBValue: 'Usually man-made polyester or nylon (unless marked Pure Silk Satin).',
        analysis: 'Natural silk is breathable and skin-friendly. Synthetic satin is made from polyester threads woven in a glossy pattern.'
      },
      {
        name: 'How It Regulates Temperature',
        fabricAValue: 'Naturally keeps you warm in winter and cool in summer.',
        fabricBValue: 'Can trap body heat and make you sweat during warm nights.',
        analysis: 'Real silk breathes with your body temperature. Polyester satin can feel warm or slippery.'
      },
      {
        name: 'How It Looks',
        fabricAValue: 'Subtle, soft glow that changes color gently in the light.',
        fabricBValue: 'Bright, reflective, glassy shine.',
        analysis: 'Silk looks rich and understated, while synthetic satin has a noticeable, bright sheen.'
      },
      {
        name: 'How to Wash It',
        fabricAValue: 'Delicate; requires gentle hand washing or dry cleaning.',
        fabricBValue: 'Easy to wash on a gentle machine cycle.',
        analysis: 'Polyester satin is much easier to care for in everyday life.'
      }
    ],
    verdictGuidance: 'Choose **Real Silk** for pillowcases, luxury sleepwear, sensitive skin, hair care, and elegant evening wear. Choose **Synthetic Satin** for budget-friendly party dresses, costumes, gift ribbons, and decorative pillows.',
    idealUseCasesA: ['Gentle pillowcases for hair and skin', 'Luxury evening dresses', 'Pure silk scarves', 'Fine sleepwear'],
    idealUseCasesB: ['Party and bridesmaid dresses', 'Costumes and theater outfits', 'Ribbons and gift wrapping', 'Hair scrunchies on a budget'],
    faqs: [
      {
        question: 'Are satin pillowcases good for curly hair?',
        answer: 'Yes! Both silk and satin reduce friction compared to rough cotton, helping prevent hair breakage and frizz. Real silk is more breathable, while satin is much more budget-friendly.'
      }
    ]
  },
  {
    id: 'chiffon-vs-georgette',
    slug: 'chiffon-vs-georgette',
    title: 'Chiffon vs. Georgette: Which Flowy Fabric Should You Choose?',
    publishDate: '2026-05-12',
    updatedDate: '2026-08-30',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Chiffon',
      slug: 'chiffon',
      summary: 'Whisper-light, see-through fabric with a floating, delicate drape.'
    },
    fabricB: {
      name: 'Georgette',
      slug: 'georgette',
      summary: 'Slightly thicker, bouncy fabric with a sandy texture and more coverage.'
    },
    overview: 'Chiffon and Georgette are both airy, flowy fabrics often chosen for dresses, wedding veils, dupattas, and sarees. Chiffon is lighter and more see-through, creating a floating cloud look. Georgette has a slightly rough, pebbled texture that holds pleats better and is less transparent.',
    criteria: [
      {
        name: 'See-Through Level',
        fabricAValue: 'Completely sheer; almost always needs a lining underneath.',
        fabricBValue: 'Semi-sheer; provides more modest coverage.',
        analysis: 'Georgette offers more coverage, so darker shades often do not require thick linings.'
      },
      {
        name: 'Texture to the Touch',
        fabricAValue: 'Very soft, gossamer, and feather-light.',
        fabricBValue: 'Slightly grainy, crepe-like texture that feels bouncy.',
        analysis: 'Georgette feels a bit like fine sand when rubbed between your fingers, giving it body and bounce.'
      },
      {
        name: 'Sewing and Handling',
        fabricAValue: 'Very slippery on the sewing table; needs care.',
        fabricBValue: 'Easier to sew because the textured threads grip together.',
        analysis: 'Dressmakers find Georgette easier to sew into pleated skirts and kurtas because it slips around less.'
      }
    ],
    verdictGuidance: 'Choose **Chiffon** when you want an airy, floating effect like wedding veils, flowing scarves, or sheer sleeves. Choose **Georgette** when you need a dress, saree, or kurti that holds nice pleats and gives you more coverage.',
    idealUseCasesA: ['Bridal veils and flowing dupattas', 'Sheer blouse sleeves', 'Romantic dress ruffles'],
    idealUseCasesB: ['Pleated formal dresses and skirts', 'South Asian sarees and kurtis', 'Wrap dresses that need body'],
    faqs: [
      {
        question: 'Which is easier to sew for beginners?',
        answer: 'Georgette is noticeably easier to cut and sew than chiffon because its grainy texture keeps the fabric from sliding off your work table.'
      }
    ]
  },
  {
    id: 'khaddar-vs-linen',
    slug: 'khaddar-vs-linen',
    title: 'Khaddar vs. Linen: Winter Warmth vs. Summer Cool',
    publishDate: '2026-06-01',
    updatedDate: '2026-09-01',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Khaddar',
      slug: 'khaddar',
      summary: 'Cozy, textured cotton cloth made for chilly winter weather in Pakistan.'
    },
    fabricB: {
      name: 'Linen',
      slug: 'linen',
      summary: 'Crisp, airy flax cloth made for keeping you cool during warm summer days.'
    },
    overview: 'Khaddar and Linen look surprisingly similar at first glance because both have a rustic, textured look with little bumps in the yarn. But they are made for opposite seasons! Linen is king of summer cooling, while Khaddar is woven thick to keep you cozy during dry winter months.',
    criteria: [
      {
        name: 'Which Season to Wear',
        fabricAValue: 'Autumn and Winter; keeps body warmth trapped inside.',
        fabricBValue: 'Spring and Summer; lets air circulate and cools you down.',
        analysis: 'Wearing heavy winter Khaddar on a hot July afternoon will make you sweat, while wearing light linen in December will leave you shivering.'
      },
      {
        name: 'What It Is Made Of',
        fabricAValue: '100% thick, spun cotton yarn from local mills.',
        fabricBValue: '100% plant fiber taken from flax stems.',
        analysis: 'Khaddar uses fluffy cotton yarns that hold in warm air. Linen uses smooth, strong flax fibers that release heat.'
      },
      {
        name: 'How It Wrinkles',
        fabricAValue: 'Gentle, soft wrinkles that relax as you walk around.',
        fabricBValue: 'Sharp creases that hold their shape.',
        analysis: 'Khaddar has a softer, heavier drape, while linen keeps crisp, breezy folds.'
      }
    ],
    verdictGuidance: 'Choose **Khaddar** for cozy winter shalwar kameez, kurtas, shawls, and rustic home cushions. Choose **Linen** for beach holidays, summer shirts, light dresses, and breezy warm-weather outfits.',
    idealUseCasesA: ['Winter shalwar kameez and kurtas', 'Warm shawls and wraps', 'Rustic sofa cushion covers'],
    idealUseCasesB: ['Summer beach shirts', 'Breezy linen sundresses', 'Kitchen towels and dining runners'],
    faqs: [
      {
        question: 'Can you get Khaddar for summer?',
        answer: 'Yes! Artisans make a special "Summer Khaddar" or "Cotton Khaddar" made with finer, lighter yarns and an airy weave for warm spring and autumn days.'
      }
    ]
  },
  {
    id: 'lawn-vs-cambric',
    slug: 'lawn-vs-cambric',
    title: 'Lawn vs. Cambric: Choosing the Right Cotton for Your Outfit',
    publishDate: '2026-06-20',
    updatedDate: '2026-09-05',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Lawn',
      slug: 'lawn',
      summary: 'Feather-light, smooth cotton designed to keep you cool in hot summers.'
    },
    fabricB: {
      name: 'Cambric',
      slug: 'cambric',
      summary: 'A slightly thicker, opaque cotton that gives structure to pants and shirts.'
    },
    overview: 'In South Asian fashion, Lawn and Cambric are the dynamic duo of summer suits. Lawn is featherweight, semi-sheer, and incredibly breezy, making it ideal for shirts and scarves. Cambric is slightly thicker, completely opaque, and strong, making it the perfect fabric for trousers and pants.',
    criteria: [
      {
        name: 'Weight and Thickness',
        fabricAValue: 'Feather-light; feels like a soft summer breeze.',
        fabricBValue: 'Medium-light; about 30% to 50% heavier and firmer.',
        analysis: 'Lawn lets air pass through effortlessly, while Cambric gives you good coverage and modesty.'
      },
      {
        name: 'Is It See-Through?',
        fabricAValue: 'Can be slightly see-through in lighter pastel shades.',
        fabricBValue: 'Opaque; you cannot see through it.',
        analysis: 'Cambric is the standard fabric for pants (shalwars and cigarette trousers) because it never requires an inner lining.'
      },
      {
        name: 'Embroidery and Lace',
        fabricAValue: 'Best with lightweight prints or light thread work.',
        fabricBValue: 'Holds heavy computer embroidery and cutwork easily.',
        analysis: 'Heavy embroidered patches and necklines sit better on Cambric because the fabric is sturdy enough not to pucker.'
      }
    ],
    verdictGuidance: 'Choose **Lawn** for hot daytime summer shirts, kurtis, and dupattas when the temperature climbs. Choose **Cambric** for trousers, cigarette pants, autumn tops, and garments with heavy thread embroidery.',
    idealUseCasesA: ['Printed summer kurtis and tops', 'Lightweight summer dupattas', 'Everyday hot weather shirts'],
    idealUseCasesB: ['Shalwars and straight cigarette pants', 'Embroidered shirts', 'Spring and autumn casual wear'],
    faqs: [
      {
        question: 'Why do designer 3-piece suits combine Lawn and Cambric?',
        answer: 'Because Lawn gives you a cool, airy shirt that keeps you from sweating, while Cambric gives you durable, opaque pants that won\'t be see-through.'
      }
    ]
  },
  {
    id: 'woven-vs-knitted',
    slug: 'woven-vs-knitted',
    title: 'Woven vs. Knitted Fabrics: The Everyday Guide to How Clothes Are Made',
    publishDate: '2026-07-19',
    updatedDate: '2026-09-02',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Woven Fabric',
      slug: 'woven-fabric',
      summary: 'Made by crisscrossing vertical and horizontal threads in a grid on a loom.'
    },
    fabricB: {
      name: 'Knitted Fabric',
      slug: 'knitted-fabric',
      summary: 'Made by looping yarn together with needles, creating a stretchy, flexible cloth.'
    },
    overview: 'Almost every piece of clothing in your wardrobe is either woven or knitted. Woven fabrics (like jeans, button-down shirts, and bed sheets) hold their shape and have little to no stretch. Knitted fabrics (like t-shirts, sweaters, and socks) naturally stretch and hug your body comfortably.',
    criteria: [
      {
        name: 'How It Stretches',
        fabricAValue: 'Firm and structured; does not stretch unless spandex is added.',
        fabricBValue: 'Naturally stretchy; moves and bends with your body.',
        analysis: 'Because knits are made of interlocking loops, the loops pull open when you stretch and bounce back when you let go.'
      },
      {
        name: 'Sharp Shape & Tailoring',
        fabricAValue: 'Holds crisp lines, sharp collars, and neat ironed creases.',
        fabricBValue: 'Soft and relaxed; hugs your body curves.',
        analysis: 'Suit jackets and formal trousers need woven cloth to look sharp. Casual loungewear and workout gear need knits to feel cozy.'
      },
      {
        name: 'Edges and Fraying',
        fabricAValue: 'Fray easily if the cut edge is not hemmed or sewn.',
        fabricBValue: 'Edges do not fray into loose threads, but may roll slightly.',
        analysis: 'Woven edges need to be stitched carefully to prevent threads from pulling out in the wash.'
      }
    ],
    verdictGuidance: 'Choose **Woven fabrics** for jeans, button-down dress shirts, jackets, trousers, and structured skirts. Choose **Knitted fabrics** for everyday t-shirts, hoodies, leggings, sweaters, and socks.',
    idealUseCasesA: ['Jeans and denim jackets', 'Crisp button-down dress shirts', 'Tailored blazers and pants', 'Bed sheets'],
    idealUseCasesB: ['Crewneck t-shirts', 'Workout leggings and yoga pants', 'Cozy sweaters', 'Socks and beanies'],
    faqs: [
      {
        question: 'How can I quickly test if my shirt is woven or knitted?',
        answer: 'Give the fabric a gentle tug sideways with two hands. If it easily stretches and snaps back, it is a knit! If it stays taut and feels like paper or canvas, it is woven.'
      }
    ]
  },
  {
    id: 'natural-vs-synthetic',
    slug: 'natural-vs-synthetic',
    title: 'Natural vs. Synthetic Fabrics: Which is Better for Your Wardrobe?',
    publishDate: '2026-08-05',
    updatedDate: '2026-09-10',
    author: 'Elite Fabrics Team',
    fabricA: {
      name: 'Natural Fabrics',
      slug: 'natural-fabrics',
      summary: 'Made directly from plants (cotton, linen) or animals (wool, silk).'
    },
    fabricB: {
      name: 'Synthetic Fabrics',
      slug: 'synthetic-fabrics',
      summary: 'Man-made fibers made from polymers, like polyester, nylon, and spandex.'
    },
    overview: 'Both natural and synthetic fabrics have a place in modern life. Natural fibers let your skin breathe, feel comfortable, and break down naturally in the earth. Synthetic fibers are tough, water-resistant, fast-drying, and budget-friendly. Learning the difference helps you choose the right fabric for the right job.',
    criteria: [
      {
        name: 'Breathability & Skin Comfort',
        fabricAValue: 'Allows skin to breathe naturally; gentle on sensitive skin.',
        fabricBValue: 'Can trap body heat and sweat if not specifically engineered.',
        analysis: 'Natural fibers absorb moisture and let fresh air through, keeping you cool and comfortable all day.'
      },
      {
        name: 'Toughness and Water Resistance',
        fabricAValue: 'Can wear down with friction or be damaged by moths and mildew.',
        fabricBValue: 'Very tough, resists tearing, and dries in minutes.',
        analysis: 'Synthetics are unmatched for rain jackets, travel luggage, and tough sports equipment.'
      },
      {
        name: 'Environmental Impact',
        fabricAValue: 'Breaks down naturally in soil over a few months or years.',
        fabricBValue: 'Takes hundreds of years to break down and sheds tiny micro-fibers.',
        analysis: 'Natural fibers return to the earth when composted, while synthetics persist in landfills.'
      }
    ],
    verdictGuidance: 'Choose **Natural fabrics** for anything touching your skin: everyday t-shirts, underwear, sleepwear, summer dresses, and bed sheets. Choose **Synthetic fabrics** for rain gear, workout apparel, winter parkas, and heavy travel backpacks.',
    idealUseCasesA: ['Everyday clothing and underwear', 'Bed sheets and bath towels', 'Baby clothes', 'Summer dresses and shirts'],
    idealUseCasesB: ['Raincoats and umbrellas', 'Performance gym wear', 'Travel backpacks and tents', 'Swimwear'],
    faqs: [
      {
        question: 'Can you wear both together?',
        answer: 'Yes! Cotton-poly blends and wool-nylon blends are extremely popular because you get the soft breathability of natural fibers with the strength and wrinkle-resistance of synthetics.'
      }
    ]
  }
];
