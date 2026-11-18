import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Trees,
  Flower2,
  Droplets,
  Hourglass,
  Award,
  Sun,
  Recycle,
  Leaf,
  MapPin,
} from 'lucide-react';
import {
  IMAGES,
  ANNUAL_RHYTHM,
  STEWARDSHIP_PILLARS,
  CUSTODIANS,
  PageId,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

interface AboutUsPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenReserve: () => void;
  onOpenExperience: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onOpenReserve,
  onOpenExperience,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="bg-[#F5F0E5]">
      {/* 1. HERO SPLIT */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Origin &amp; Botanical Heritage · Kalasa, Western Ghats
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] text-[#38291F] tracking-tight">
              Born Where the Canopy{' '}
              <span className="italic font-normal text-[#263F2C]">Breathes</span>{' '}
              and the Bees{' '}
              <span className="italic font-normal text-[#B96D35]">Forage.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#594132] leading-relaxed max-w-xl">
              Cafe Coffee Bee was founded on a quiet truth: exceptional coffee is
              not simply farmed, it is co-created with the wild soul of the
              Western Ghats. Beneath the high-altitude mists of Kalasa and
              Kudremukha, our shade-grown heirloom beans flourish in living
              reciprocity with ancient stingless dammar bees.
            </p>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3.5">
                <p className="font-serif text-xl font-semibold text-[#38291F] tabular-nums">
                  Est. 2000
                </p>
                <p className="text-[11px] text-[#594132] mt-0.5">
                  Kalasa Foothills
                </p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3.5">
                <p className="font-serif text-xl font-semibold text-[#38291F] tabular-nums">
                  3,800 Ft
                </p>
                <p className="text-[11px] text-[#594132] mt-0.5">
                  MSL Elevation
                </p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3.5">
                <p className="font-serif text-xl font-semibold text-[#38291F] tabular-nums">
                  100%
                </p>
                <p className="text-[11px] text-[#594132] mt-0.5">
                  Shade Arabica
                </p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3.5">
                <p className="font-serif text-xl font-semibold text-[#38291F] tabular-nums">
                  42 Native
                </p>
                <p className="text-[11px] text-[#594132] mt-0.5">
                  Apiary Hives
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('symbiosis')}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#526447]"
              >
                <span>Read The Story</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('four-pillars')}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#E5D3A9]/50"
              >
                <span>Our 4 Pillars</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden border border-[#D8C8AE] shadow-warm aspect-[4/4.6] bg-[#EDE8DD]">
              <ResilientImage
                src={IMAGES.kalasaMist}
                alt="Misty Western Ghats coffee estate valley in Kalasa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#FAF8F0]/95 backdrop-blur-sm border border-[#D8C8AE] rounded-xl px-3.5 py-2 shadow-warm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#263F2C]">
                  Estate Roasted Daily
                </p>
              </div>
              <div className="absolute bottom-4 right-4 bg-[#FAF8F0]/95 backdrop-blur-sm border border-[#D8C8AE] rounded-xl px-4 py-2.5 shadow-warm">
                <p className="text-xs font-semibold text-[#38291F]">
                  Dammar Bee
                </p>
                <p className="text-[10px] font-medium tracking-wider uppercase text-[#526447]">
                  Tetragonula iridipennis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE COFFEE BLOSSOM & THE STINGLESS BEE */}
      <section
        id="symbiosis"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            The Sacred Symbiosis
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            The Coffee Blossom &amp; The Stingless Bee
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <article className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-warm">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-[#E5D3A9]/50 text-[#263F2C] flex items-center justify-center">
                  <Flower2 className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#594132]">
                  01 · The Veil of White
                </span>
              </div>

              <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD]">
                <ResilientImage
                  src={IMAGES.coffeeBlossomsBees}
                  alt="Blooming white Arabica coffee blossoms with foraging native bees"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl text-[#38291F]">
                The Bloom That Feathers the Mountain
              </h3>
              <p className="text-sm text-[#594132] leading-relaxed">
                Every March, Kalasa receives brief pre-monsoon blossom showers
                that coax every heirloom coffee branch into sudden, fragrant
                snow-white flowers. For seven fleeting days, the mountain air
                fills with natural jasmine notes. Millions of tiny indigenous
                stingless bees (<em>Tetragonula iridipennis</em>) arrive in quiet
                swarms, pollinating the flowers and imparting subtle floral
                terpenes into every embryonic cherry.
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-[#D8C8AE]/60 text-xs font-medium text-[#526447]">
              Natural Non-Chemical Cross-Pollination
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-warm">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-lg bg-[#E5D3A9]/50 text-[#7D5700] flex items-center justify-center">
                  <Droplets className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#594132]">
                  02 · The Liquid Harvest
                </span>
              </div>

              <div className="aspect-[16/10] rounded-lg overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD]">
                <ResilientImage
                  src={IMAGES.forestHoneyJars}
                  alt="Small-batch jars of raw amber forest honey with wild spices"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl text-[#38291F]">
                Amber Honey from Forest Harrows
              </h3>
              <p className="text-sm text-[#594132] leading-relaxed">
                In gentle exchange, our native bees store rare, rich micro-batch
                dammar honey. Unfiltered and enzymatically alive, it carries the
                distinctive sensory blueprint of wild citrus, wild cardamom, and
                wet granite. We extract only ethical seasonal surplus comb,
                leaving ample stores so bee colonies remain autonomous, vigorous,
                and unharmed year-round.
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-[#D8C8AE]/60 text-xs font-medium text-[#7D5700]">
              Ethical Hive-Safe Comb Separation
            </p>
          </article>
        </div>

        {/* 5-step Natural Annual Rhythm */}
        <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-8 shadow-warm">
          <div className="text-center mb-6">
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#7D5700]">
              The Natural Annual Rhythm
            </p>
            <h3 className="font-serif text-xl sm:text-2xl text-[#38291F] mt-1">
              From Forest Blossom to Hearth Pour
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ANNUAL_RHYTHM.map((phase) => (
              <div
                key={phase.step}
                className="bg-[#F5F0E5] border border-[#D8C8AE]/80 rounded-xl p-4 text-center space-y-2"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E5D3A9] text-[#38291F] text-xs font-bold tabular-nums">
                  {phase.step}
                </span>
                <p className="font-serif text-sm font-semibold text-[#38291F]">
                  {phase.title}
                </p>
                <p className="text-[11px] text-[#594132] leading-snug">
                  {phase.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE FOUR PILLARS OF OUR STEWARDSHIP */}
      <section
        id="four-pillars"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            How We Nurture The Land
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            The Four Pillars of Our Stewardship
          </h2>
          <p className="text-xs sm:text-sm text-[#594132]">
            Respecting natural ecosystems allows our beans and honey to reflect
            the authentic terroir of the Western Ghats mountain biome.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEWARDSHIP_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 flex flex-col justify-between shadow-warm"
            >
              <div className="space-y-4">
                <span className="w-10 h-10 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-[#263F2C] flex items-center justify-center">
                  {idx === 0 && <Trees className="w-5 h-5" />}
                  {idx === 1 && <Leaf className="w-5 h-5" />}
                  {idx === 2 && <Hourglass className="w-5 h-5" />}
                  {idx === 3 && <Award className="w-5 h-5" />}
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#7D5700]">
                    {pillar.number}
                  </p>
                  <h3 className="font-serif text-xl text-[#38291F] mt-1">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-[#594132] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <p className="mt-6 pt-3 border-t border-[#D8C8AE]/60 text-[11px] font-semibold text-[#526447]">
                {pillar.footer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CUSTODIANS OF THE MIST */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            The People of Coffee Bee
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            Custodians of the Mist
          </h2>
          <p className="text-xs sm:text-sm text-[#594132]">
            Behind every cup is an unbroken chain of human dedication: farmers,
            cuppers, and naturalists bonded by a shared love for Kalasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTODIANS.map((person) => (
            <article
              key={person.id}
              className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-5 flex flex-col justify-between shadow-warm"
            >
              <div>
                <div className="relative aspect-[4/4.3] rounded-lg overflow-hidden mb-5 bg-[#EDE8DD]">
                  <ResilientImage
                    src={person.image}
                    alt={`${person.name}, ${person.role}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#FAF8F0]/95 text-[#38291F] text-[10px] font-semibold tracking-wide shadow-warm">
                    {person.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#38291F]">
                  {person.name}
                </h3>
                <p className="text-xs font-semibold text-[#B96D35] mt-0.5 mb-3">
                  {person.role}
                </p>
                <p className="text-xs text-[#594132] leading-relaxed">
                  {person.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#D8C8AE]/60 flex items-center justify-between text-[11px]">
                <span className="font-bold tracking-wider uppercase text-[#594132]/70">
                  Expertise
                </span>
                <span className="font-semibold text-[#263F2C]">
                  {person.expertise}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. ORGANIC ARCHITECTURE */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-10 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
                Organic Architecture
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] leading-tight">
                Built with Reclaimed Teak, Local Laterite &amp; Sunlight.
              </h2>
              <p className="text-sm text-[#594132] leading-relaxed">
                When constructing Cafe Coffee Bee in Kalasa, our first covenant
                was simple: <strong>not a single living tree would be felled</strong>.
                We repurposed 90-year-old dismantled plantation bungalows,
                combining local red laterite masonry, handmade clay tiles, and
                open verandas that catch natural mountain updrafts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-3.5 space-y-1">
                  <Droplets className="w-4 h-4 text-[#7D5700]" />
                  <p className="text-xs font-semibold text-[#38291F]">
                    Rainwater Stream
                  </p>
                  <p className="text-[11px] text-[#594132]">
                    Gravity-filtered mineral spring water
                  </p>
                </div>
                <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-3.5 space-y-1">
                  <Recycle className="w-4 h-4 text-[#263F2C]" />
                  <p className="text-xs font-semibold text-[#38291F]">
                    100% Composted
                  </p>
                  <p className="text-[11px] text-[#594132]">
                    Spent coffee grinds nourish orchard soils
                  </p>
                </div>
                <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-3.5 space-y-1">
                  <Sun className="w-4 h-4 text-[#B96D35]" />
                  <p className="text-xs font-semibold text-[#38291F]">
                    Zero Single Plastics
                  </p>
                  <p className="text-[11px] text-[#594132]">
                    Areca palm &amp; ceramic serving ware
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-[#D8C8AE] aspect-[16/11] bg-[#EDE8DD]">
                <ResilientImage
                  src={IMAGES.cafeVeranda}
                  alt="Reclaimed teak veranda overlooking Kudremukha hills"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-lg bg-[#241A15]/85 text-[#F5BD58] text-[11px] font-medium backdrop-blur-xs">
                  Passive Breeze Design · 0% HVAC Carbon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STEP INTO THE SANCTUARY CALLOUT */}
      <section className="bg-[#263F2C] text-[#FAF8F0] py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                Come Share Our Slow Hearth
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F0]">
                Step Into the Sanctuary of Kalasa
              </h2>
              <p className="text-sm text-[#E5D3A9]/90 leading-relaxed max-w-xl">
                Whether you wish to savor our wild honeycomb cortado while
                morning fog slips over the Bhadra River, or walk the quiet
                stingless bee trail with our resident botanists—our hearth is
                lit for you.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold cursor-pointer hover:bg-[#F5BD58]"
                >
                  <span>Reserve Your Table</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenExperience}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#1E3323] border border-[#526447] text-[#FAF8F0] text-sm font-semibold cursor-pointer hover:bg-[#526447]"
                >
                  <span>Explore Estate Trails</span>
                </button>
              </div>

              <p className="flex items-center gap-2 text-xs text-[#E5D3A9]/80 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>
                  Kalasa · Kudremukha Ridge · 13.2248° N, 75.3620° E · Western
                  Ghats
                </span>
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-[#FAF8F0]">
                    Visiting Kalasa
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D9A441]/20 text-[#D9A441] text-[10px] font-bold uppercase tracking-wider">
                    Open Daily
                  </span>
                </div>

                <div className="space-y-3 text-xs divide-y divide-[#526447]/40">
                  <div className="pt-1">
                    <p className="font-semibold text-[#FAF8F0]">
                      Sunrise Brew Ritual
                    </p>
                    <p className="text-[#E5D3A9]/80 mt-0.5">
                      Daily at 7:30 AM · Free-flowing single-origin pour-overs as
                      mist ascends.
                    </p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-[#FAF8F0]">
                      Canopy Walk &amp; Apiary Tour
                    </p>
                    <p className="text-[#E5D3A9]/80 mt-0.5">
                      10:00 AM &amp; 3:30 PM · Hosted by Chandrashekar Gowda.
                    </p>
                  </div>
                  <div className="pt-3">
                    <p className="font-semibold text-[#FAF8F0]">
                      Wood-Fired Iron Drum Roasting
                    </p>
                    <p className="text-[#E5D3A9]/80 mt-0.5">
                      Every Tuesday &amp; Saturday evenings at dusk.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#526447]/60 flex items-center justify-between text-xs">
                  <span className="text-[#E5D3A9]/80 uppercase tracking-wider text-[10px]">
                    Concierge Inquiries
                  </span>
                  <span className="font-bold text-[#D9A441] tabular-nums">
                    +91 98765 43210
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
