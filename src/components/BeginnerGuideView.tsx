import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Shirt,
  CheckCircle2
} from 'lucide-react';
import { LEARNING_PATHWAY } from '../data/learningPath';

interface BeginnerGuideViewProps {
  onNavigate: (view: string, idOrSlug?: string) => void;
}

export const BeginnerGuideView: React.FC<BeginnerGuideViewProps> = ({ onNavigate }) => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  // Interactive Garment & Fabric Matcher
  const [selectedGarment, setSelectedGarment] = useState<'tshirt' | 'blouse' | 'jeans' | 'coat' | 'trouser'>('tshirt');

  const garmentProfiles = {
    tshirt: {
      name: 'Everyday T-Shirt',
      idealGsm: '160 – 200 GSM',
      weightCategory: 'Medium Weight',
      recommendedWeaveOrKnit: 'Stretchy Knitted Fabric (Single Jersey)',
      recommendedFibers: ['100% Combed Cotton', 'Cotton-Modal Blend'],
      explanation: 'T-shirts are made from looped knit fabric so they naturally stretch with your body and bounce back without feeling tight or stiff.'
    },
    blouse: {
      name: 'Summer Blouse / Dress',
      idealGsm: '70 – 110 GSM',
      weightCategory: 'Lightweight',
      recommendedWeaveOrKnit: 'Light Woven Fabric (Cotton Lawn, Voile, or Linen)',
      recommendedFibers: ['Soft Combed Cotton', 'Pure Linen'],
      explanation: 'Lightweight, airy fabrics let the breeze blow right through, keeping you cool and comfortable on hot summer afternoons.'
    },
    jeans: {
      name: 'Denim Jeans',
      idealGsm: '380 – 480 GSM (12oz – 14oz)',
      weightCategory: 'Heavyweight',
      recommendedWeaveOrKnit: 'Twill Woven Denim',
      recommendedFibers: ['100% Cotton Denim'],
      explanation: 'Denim is woven with thick diagonal threads that make jeans tough, resistant to rips, and able to last for years while molding to your body.'
    },
    coat: {
      name: 'Winter Overcoat',
      idealGsm: '450 – 650 GSM',
      weightCategory: 'Heavyweight',
      recommendedWeaveOrKnit: 'Dense Woven Wool',
      recommendedFibers: ['100% Sheep Wool', 'Wool-Cashmere Blend'],
      explanation: 'Natural wool fibers hold tiny pockets of warm air close to your body, shielding you from icy winter winds without feeling clammy.'
    },
    trouser: {
      name: 'Pants / Chinos',
      idealGsm: '220 – 280 GSM',
      weightCategory: 'Medium Weight',
      recommendedWeaveOrKnit: 'Sturdy Cotton Twill',
      recommendedFibers: ['Cotton Twill', 'Cotton-Linen Blend'],
      explanation: 'Pants need a sturdy fabric that resists creasing at the knees, hangs straight down the leg, and withstands daily wear.'
    }
  };

  const currentGarment = garmentProfiles[selectedGarment];
  const activeStage = LEARNING_PATHWAY[selectedStageIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Friendly Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E472A] font-semibold flex items-center justify-center gap-1.5">
          <BookOpen className="w-4 h-4" /> The Friendly Beginner's Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-[#1C1C1C]">
          How to Learn About Fabrics as a Beginner
        </h1>
        <p className="text-sm text-[#5E574D] leading-relaxed">
          You don’t need a degree in chemistry to understand fabrics! Follow our simple 3-step guide to learn how clothes are made, how to choose quality, and how to stop shirts from shrinking.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('article', 'how-to-start-learning-fabrics-beginner')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1C1C] hover:bg-[#333333] text-white rounded text-xs uppercase tracking-wider font-semibold shadow-2xs transition-colors"
          >
            Read the In-Depth Beginner Article <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Tool: What Fabric Weight Do I Need? */}
      <section className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E6E0D7]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E472A] font-semibold flex items-center gap-1.5">
              <Shirt className="w-4 h-4" /> Quick Fabric Matcher
            </span>
            <h2 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-1">
              What Fabric Weight Works Best for What?
            </h2>
          </div>
          <span className="text-xs text-[#7A7266]">Click an item of clothing to see what fabric it needs</span>
        </div>

        {/* Garment Buttons */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(garmentProfiles) as Array<keyof typeof garmentProfiles>).map((key) => {
            const isSelected = selectedGarment === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedGarment(key)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
                  isSelected
                    ? 'bg-[#1C1C1C] text-white shadow-2xs'
                    : 'bg-[#FAF8F5] text-[#524B41] border border-[#DDD5C7] hover:bg-[#EFE9DE]'
                }`}
              >
                {garmentProfiles[key].name}
              </button>
            );
          })}
        </div>

        {/* Garment Analysis Output */}
        <div className="bg-[#FAF8F5] border border-[#E6DEC2] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="space-y-1">
            <span className="block text-[#8A8277] uppercase font-mono text-[10px]">Recommended Weight</span>
            <span className="text-xl font-bold font-serif-heading text-[#9E472A] block">{currentGarment.idealGsm}</span>
            <span className="text-[#665F54]">{currentGarment.weightCategory}</span>
          </div>

          <div className="space-y-1">
            <span className="block text-[#8A8277] uppercase font-mono text-[10px]">How It Should Be Made</span>
            <span className="text-sm font-bold text-[#1C1C1C] block">{currentGarment.recommendedWeaveOrKnit}</span>
            <span className="text-[#665F54]">Best Fibers: {currentGarment.recommendedFibers.join(', ')}</span>
          </div>

          <div className="space-y-1 md:border-l md:border-[#E2DBD0] md:pl-6">
            <span className="block text-[#8A8277] uppercase font-mono text-[10px]">Why This Works</span>
            <p className="text-[#4A453E] leading-relaxed">{currentGarment.explanation}</p>
          </div>
        </div>
      </section>

      {/* The 3-Step Learning Steps */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-serif-heading font-bold text-[#1C1C1C]">
            The 3-Step Learning Path
          </h2>
          <p className="text-xs text-[#6B6355]">
            Pick a step to explore clear lessons on fibers, weaves, and shopping tips.
          </p>
        </div>

        {/* Step Selector Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LEARNING_PATHWAY.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-sm'
                    : 'bg-white text-[#1C1C1C] border-[#E6E0D7] hover:border-[#9E472A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#9E472A] text-white' : 'bg-[#F2EDE4] text-[#70685D]'
                    }`}>
                      {stage.level}
                    </span>
                    <span className={`text-xs font-mono ${isSelected ? 'text-[#BFB7A8]' : 'text-[#8C8478]'}`}>
                      Step {idx + 1} of 3
                    </span>
                  </div>
                  <h3 className="font-serif-heading font-bold text-lg leading-snug">
                    {stage.stageTitle}
                  </h3>
                </div>

                <div className={`mt-4 pt-3 border-t text-xs ${
                  isSelected ? 'border-[#33302B] text-[#BFB7A8]' : 'border-[#F2ECE3] text-[#70685D]'
                }`}>
                  {stage.topics.length} Lessons
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Modules */}
        <div className="bg-white border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-[#F0EAE0] pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9E472A] font-semibold">
              Step {selectedStageIndex + 1} Lessons
            </span>
            <h3 className="text-2xl font-serif-heading font-bold text-[#1C1C1C] mt-1">
              {activeStage.stageTitle}
            </h3>
            <p className="text-sm text-[#5E574D] mt-2 leading-relaxed">
              {activeStage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeStage.topics.map((topic, i) => (
              <div 
                key={i} 
                className="p-5 rounded-lg border border-[#EDE7DE] bg-[#FAF8F5] space-y-2 hover:border-[#9E472A]/40 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#1C1C1C] text-white text-[10px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <h4 className="font-serif-heading font-bold text-base text-[#1C1C1C] leading-snug">
                    {topic.title}
                  </h4>
                </div>
                <p className="text-xs text-[#524B42] pl-7 leading-relaxed">
                  {topic.summary}
                </p>
                <div className="pl-7 pt-2 flex flex-wrap gap-1.5">
                  {topic.coreConcepts.map((concept, cIdx) => (
                    <span 
                      key={cIdx} 
                      className="px-2 py-0.5 bg-white border border-[#E2DAD0] rounded text-[10px] text-[#6E6659]"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#F4EFEA] rounded-xl border border-[#E0D8CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#1C1C1C] block">Ready to explore individual fabrics?</span>
              <span className="text-xs text-[#6E6659]">Browse our library of 30+ fabrics with real photos and simple care tips.</span>
            </div>
            <button
              onClick={() => onNavigate('fabrics')}
              className="px-5 py-2.5 bg-[#9E472A] hover:bg-[#B55535] text-white rounded text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              Browse Fabric Library
            </button>
          </div>
        </div>
      </section>

      {/* Helpful FAQ Section */}
      <section className="bg-[#FAF8F5] border border-[#E6E0D7] rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <HelpCircle className="w-6 h-6 text-[#9E472A] mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1C1C1C]">
            Common Beginner Questions
          </h2>
          <p className="text-xs text-[#6B6355]">
            Quick answers to everyday questions about clothing fabrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-xs text-[#4A453E]">
          <div className="p-4 bg-white rounded-lg border border-[#E0D8CC] space-y-1.5">
            <h4 className="font-bold text-sm text-[#1C1C1C]">Why do some clothes feel sweaty even on cool days?</h4>
            <p className="leading-relaxed text-[#554E44]">
              Synthetic fabrics like 100% polyester don't absorb moisture or let air flow through easily. This traps your body heat and sweat against your skin. Natural fibers like cotton and linen allow air to circulate naturally.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-[#E0D8CC] space-y-1.5">
            <h4 className="font-bold text-sm text-[#1C1C1C]">What makes clothes shrink in the wash?</h4>
            <p className="leading-relaxed text-[#554E44]">
              During manufacturing, threads are pulled taut on industrial machines. Hot water and hot dryers cause those stretched threads to relax back to their shorter natural size. Washing in cool or lukewarm water prevents shrinking.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-[#E0D8CC] space-y-1.5">
            <h4 className="font-bold text-sm text-[#1C1C1C]">Is 100% cotton always better than a blend?</h4>
            <p className="leading-relaxed text-[#554E44]">
              Not always! While 100% cotton is soft and breathable, a blend with 10% to 20% polyester can prevent wrinkles and make the shirt last longer through hundreds of laundry washes.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-[#E0D8CC] space-y-1.5">
            <h4 className="font-bold text-sm text-[#1C1C1C]">What does GSM mean on bedsheets or shirts?</h4>
            <p className="leading-relaxed text-[#554E44]">
              GSM stands for Grams per Square Meter. It is simply how heavy or thick the cloth is. Under 130 GSM is light summer cloth; 150–220 GSM is standard for t-shirts; over 250 GSM is thick denim or winter fleece.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
