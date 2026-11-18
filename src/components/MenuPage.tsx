import React, {useState} from 'react';
import {
  ArrowRight,
  Clock,
  Coffee,
  Droplets,
  Flame,
  Sparkles,
  Check,
  MapPin,
  Phone,
  Plus,
} from 'lucide-react';
import {
  IMAGES,
  TASTING_COLLECTION,
  CELLAR_MENU_SECTIONS,
  HONEY_PAIRINGS,
  PageId,
  MenuItem,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

interface MenuPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onAddToOrder: (item: {
    id: string;
    name: string;
    price: number;
    category: string;
    image?: string;
  }) => void;
  onInspectItem: (item: MenuItem) => void;
  onOpenReserve: () => void;
}

const CATEGORIES = [
  'All Offerings',
  'Western Ghats Specialty',
  'Honey-Infused Signatures',
  'Artisanal Espresso',
  '18h-Gravity Cold Brews',
  'Forest Bakery & Pastries',
] as const;

export const MenuPage: React.FC<MenuPageProps> = ({
  onNavigate,
  onAddToOrder,
  onInspectItem,
  onOpenReserve,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Offerings');

  const filteredItems =
    selectedCategory === 'All Offerings'
      ? TASTING_COLLECTION
      : TASTING_COLLECTION.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#F5F0E5]">
      {/* 1. MENU HERO SPLIT */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              The Kalasa Harvest · Est. 2000
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-[#38291F] tracking-tight">
              Artisanal Brews &amp;{' '}
              <span className="italic font-normal text-[#B96D35]">
                Wild Honey Pairings
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#594132] leading-relaxed max-w-xl">
              Handcrafted with shade-grown single-origin Arabica from Kudremukha
              foothills and raw comb honey gathered by indigenous cliff bees. An
              unhurried celebration of Western Ghats flora, slow roasting, and
              mountain serenity.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3">
                <p className="text-xs font-semibold text-[#38291F]">100% Shade</p>
                <p className="text-[11px] text-[#594132]">Forest Grown</p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3">
                <p className="text-xs font-semibold text-[#38291F]">Wild Comb</p>
                <p className="text-[11px] text-[#594132]">Native Apiary</p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3">
                <p className="text-xs font-semibold text-[#38291F]">Micro-Batch</p>
                <p className="text-[11px] text-[#594132]">Estate Roasted</p>
              </div>
              <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-3">
                <p className="text-xs font-semibold text-[#38291F]">Pure Springs</p>
                <p className="text-[11px] text-[#594132]">Bhadra Water</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-[#D8C8AE] shadow-warm aspect-[4/4.3] bg-[#EDE8DD]">
              <ResilientImage
                src={IMAGES.kalasaCappuccino}
                alt="Kalasa Honeycomb Cortado — Today's Roaster Pick"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-[#D9A441] text-[#241A15] flex flex-col items-center justify-center text-center shadow-warm rotate-[-8deg]">
                <span className="text-[8px] font-bold uppercase tracking-wider leading-tight">
                  Morning
                  <br />
                  Harvest
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F0]/95 backdrop-blur-sm border border-[#D8C8AE] rounded-xl p-4 flex items-center justify-between gap-4 shadow-warm">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#7D5700]">
                    Today&apos;s Roaster Pick
                  </p>
                  <p className="font-serif text-base font-semibold text-[#38291F]">
                    Kalasa Honeycomb Cortado
                  </p>
                  <p className="text-[11px] text-[#594132]">
                    A2 milk · raw wildflower cliff comb
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onAddToOrder({
                      id: 'tc-honeycomb-cortado',
                      name: 'Kalasa Honeycomb Cortado',
                      price: 260,
                      category: 'Honey-Infused Signatures',
                      image: IMAGES.honeyCinnamonLatte,
                    })
                  }
                  className="px-3 py-2 rounded-lg bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold tabular-nums cursor-pointer hover:bg-[#526447] shrink-0"
                >
                  ₹260
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <div className="border-y border-[#D8C8AE] bg-[#FAF8F0]/80 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center gap-2 overflow-x-auto">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 ${
                  active
                    ? 'bg-[#D9A441] text-[#241A15] shadow-warm'
                    : 'bg-[#F5F0E5] text-[#594132] border border-[#D8C8AE] hover:bg-[#E5D3A9]/45 hover:text-[#38291F]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. THE KALASA TASTING COLLECTION */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Estate Menu
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] mt-1">
              The Kalasa Tasting Collection
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#594132] max-w-md leading-relaxed">
            Every cup and plate carries the altitude and botanical soil
            signature of Chikmagalur&apos;s southern hills, roasted daily on
            vintage cast-iron drums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-5 flex flex-col justify-between shadow-warm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div
                  onClick={() => onInspectItem(item)}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-[#EDE8DD] cursor-pointer"
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#263F2C]/90 text-[#FAF8F0] text-[10px] font-semibold tracking-wider uppercase">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-xl font-semibold text-[#38291F]">
                    {item.name}
                  </h3>
                  <span className="font-sans text-base font-bold text-[#B96D35] tabular-nums shrink-0">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-xs text-[#594132] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Clean unboxed tasting notes */}
                <p className="text-[11px] font-medium text-[#526447]">
                  {item.tastingNotes.join(' · ')}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D8C8AE]/60 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onInspectItem(item)}
                  className="text-xs font-semibold text-[#594132] hover:text-[#38291F] underline-offset-4 hover:underline cursor-pointer"
                >
                  Taste Notes
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onAddToOrder({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      category: item.category,
                      image: item.image,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#D9A441] text-[#241A15] text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors hover:bg-[#B96D35] hover:text-[#FAF8F0]"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Order</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. ARTISANAL RESERVE & TRADITIONAL CELLAR MENU */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Curated Cellar Selections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] mt-1">
              Artisanal Reserve &amp; Traditional Cellar Menu
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#594132] max-w-sm">
            Slow manual extractions, forest wild honey infusions, and daily
            wood-fired bakery makes in small batches from early morning harvest.
          </p>
        </div>

        <div className="space-y-8">
          {CELLAR_MENU_SECTIONS.map((section) => (
            <div
              key={section.id}
              className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-8 shadow-warm"
            >
              <div className="flex items-center gap-3.5 pb-5 mb-2 border-b border-[#D8C8AE]">
                <span className="w-10 h-10 rounded-xl bg-[#263F2C] text-[#D9A441] flex items-center justify-center shrink-0">
                  {section.icon === 'coffee' && <Coffee className="w-5 h-5" />}
                  {section.icon === 'honey' && <Droplets className="w-5 h-5" />}
                  {section.icon === 'bakery' && <Flame className="w-5 h-5" />}
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#7D5700]">
                    {section.kicker}
                  </p>
                  <h3 className="font-serif text-2xl text-[#38291F]">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-[#D8C8AE]/60">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span className="font-serif text-lg font-medium text-[#38291F]">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#526447]">
                          · {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#594132] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                      <span className="font-sans text-base font-semibold text-[#B96D35] tabular-nums">
                        ₹{item.price}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onAddToOrder({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            category: item.category,
                          })
                        }
                        aria-label={`Add ${item.name} to order`}
                        className="px-3 py-1.5 rounded-lg border border-[#D8C8AE] bg-[#F5F0E5] text-[#38291F] text-xs font-semibold cursor-pointer transition-colors hover:bg-[#263F2C] hover:text-[#FAF8F0] hover:border-[#263F2C]"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTANICAL & WILD HONEY PAIRINGS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            The Sensory Matrix
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            Botanical &amp; Wild Honey Pairings
          </h2>
          <p className="text-xs sm:text-sm text-[#594132]">
            Cliff bees harvest distinctive nectars across Kalasa forests
            depending on elevation and season. Here is how our estate roasters
            pair coffee profiles with raw honey vintages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HONEY_PAIRINGS.map((pairing) => (
            <div
              key={pairing.id}
              className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 flex flex-col justify-between shadow-warm"
            >
              <div className="space-y-4">
                <span className="w-10 h-10 rounded-xl bg-[#E5D3A9]/50 text-[#7D5700] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#7D5700]">
                    {pairing.kicker}
                  </p>
                  <h3 className="font-serif text-2xl text-[#38291F] mt-0.5">
                    {pairing.title}
                  </h3>
                </div>
                <p className="text-xs text-[#594132] leading-relaxed">
                  {pairing.description}
                </p>

                <dl className="pt-3 border-t border-[#D8C8AE]/60 space-y-2 text-xs">
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#594132]">Recommended</dt>
                    <dd className="font-semibold text-[#38291F] text-right">
                      {pairing.recommended}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#594132]">Flavor Profile</dt>
                    <dd className="font-semibold text-[#B96D35] text-right">
                      {pairing.flavorProfile}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#594132]">Harmony</dt>
                    <dd className="font-semibold text-[#263F2C] text-right">
                      {pairing.harmony}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-[#594132]">Pairing</dt>
                    <dd className="font-semibold text-[#38291F] text-right">
                      {pairing.pairing}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-5 pt-4 border-t border-[#D8C8AE]/60 flex items-start gap-2.5 text-xs text-[#263F2C]">
                <Check className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{pairing.summary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR ZERO-COMPROMISE FARM CHARTER */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-10 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
                From the Kalasa Sanctuary
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] leading-tight">
                Our Zero-Compromise Farm Charter
              </h2>
              <p className="text-sm text-[#594132] leading-relaxed">
                Kalasa is an ecologically sensitive biosphere. We partner
                exclusively with smallholder planters who safeguard native tree
                cover, nurture endemic stingless bee colonies, and shun
                artificial pesticides.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#263F2C] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[#38291F]">
                      Cruelty-Free Cliff Harvesting
                    </p>
                    <p className="text-xs text-[#594132] mt-0.5">
                      We collect only excess combs, leaving brood chambers
                      intact so bee colonies flourish season after season.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#263F2C] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[#38291F]">
                      Direct Estate Micro-Lots
                    </p>
                    <p className="text-xs text-[#594132] mt-0.5">
                      Farmers receive above-fair-market rates, funding farm
                      reforestation and clean water initiatives in Chikmagalur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#38291F] hover:text-[#7D5700] cursor-pointer"
                >
                  <span>Read Our Complete Origin Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/11] rounded-xl overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD]">
                <ResilientImage
                  src={IMAGES.farmerHarvest}
                  alt="Planter hand-harvesting ripe red Arabica cherries under forest shade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISIT US IN THE HILLS CALLOUT */}
      <section className="bg-[#263F2C] text-[#FAF8F0] py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                Sanctuary &amp; Brew Bar
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F0]">
                Visit Us in the Hills
              </h2>
              <p className="text-sm text-[#E5D3A9]/90 leading-relaxed max-w-xl">
                Whether for a morning cupping session on the river view terrace
                or an unhurried sunset coffee by the garden fireplace, we invite
                you to take a slow breath with us.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <div className="rounded-xl bg-[#1E3323] border border-[#526447]/60 p-4 space-y-1">
                  <p className="text-xs font-semibold text-[#D9A441] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Opening Hours</span>
                  </p>
                  <p className="text-xs text-[#F5F0E5] tabular-nums">
                    Mon – Fri: 7:30 AM – 9:30 PM
                  </p>
                  <p className="text-xs text-[#F5F0E5] tabular-nums">
                    Sat – Sun: 7:00 AM – 10:30 PM
                  </p>
                </div>
                <div className="rounded-xl bg-[#1E3323] border border-[#526447]/60 p-4 space-y-1">
                  <p className="text-xs font-semibold text-[#D9A441] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Walk-Ins Welcome</span>
                  </p>
                  <p className="text-xs text-[#E5D3A9]">
                    Open seating across our riverfront deck, garden firepit,
                    benches, and manual brew bar.
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'contact')}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold cursor-pointer hover:bg-[#F5BD58]"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-6 space-y-4">
                <div>
                  <p className="font-serif text-xl text-[#FAF8F0]">
                    Estate Cupping Rituals
                  </p>
                  <p className="text-xs text-[#D9A441]">
                    Daily at 11:00 AM &amp; 4:00 PM
                  </p>
                </div>
                <p className="text-xs text-[#E5D3A9] leading-relaxed">
                  Join our roasters to taste seasonal micro-lots alongside raw
                  wildflower and dammar comb honey vintages.
                </p>
                <div className="pt-3 border-t border-[#526447]/50 flex items-center justify-between">
                  <span className="text-xs text-[#E5D3A9]">
                    Duration: 45 Minutes
                  </span>
                  <button
                    type="button"
                    onClick={onOpenReserve}
                    className="text-sm font-bold text-[#D9A441] hover:underline tabular-nums cursor-pointer"
                  >
                    ₹450 / Person · Book
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#D9A441]">
                    Kalasa Sanctuary
                  </p>
                  <p className="font-serif text-base text-[#FAF8F0]">
                    Bhadra River Vista Road
                  </p>
                  <p className="text-xs text-[#E5D3A9] tabular-nums">
                    Open Daily: 7:30 AM – 9:30 PM
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenReserve}
                  aria-label="Reserve by Phone or Table Form"
                  className="w-10 h-10 rounded-full bg-[#D9A441] text-[#241A15] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#F5BD58]"
                >
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
