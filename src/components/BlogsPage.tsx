import React, {useState} from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Droplets,
  Trees,
  Coffee,
  Flame,
  Utensils,
} from 'lucide-react';
import {
  LEAD_DISPATCH,
  DISPATCH_ESSAYS,
  BlogArticle,
  PageId,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

interface BlogsPageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenReserve: () => void;
  onOpenExperience: () => void;
  onReadArticle: (article: BlogArticle) => void;
}

const BLOG_CATEGORIES = [
  'All Dispatches',
  'Coffee Agroforestry',
  'Stingless Bee Ecology',
  'Honey & Foraging',
  'Brewing Rituals',
  'Estate Recipes',
] as const;

export const BlogsPage: React.FC<BlogsPageProps> = ({
  onOpenReserve,
  onOpenExperience,
  onReadArticle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Dispatches');
  const [openEssayIds, setOpenEssayIds] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const toggleEssay = (id: string) => {
    setOpenEssayIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredEssays = DISPATCH_ESSAYS.filter((essay) => {
    const matchesCat =
      selectedCategory === 'All Dispatches' ||
      essay.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      essay.title.toLowerCase().includes(q) ||
      essay.excerpt.toLowerCase().includes(q) ||
      essay.author.toLowerCase().includes(q) ||
      essay.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const showLeadDispatch =
    (selectedCategory === 'All Dispatches' ||
      selectedCategory === LEAD_DISPATCH.category) &&
    (!searchQuery.trim() ||
      LEAD_DISPATCH.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      LEAD_DISPATCH.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailInput.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterMsg({
        type: 'error',
        text: 'Please enter a valid email address for our seasonal harvest letters.',
      });
      return;
    }
    setNewsletterMsg({
      type: 'success',
      text: `Subscribed ${email}. Expect our next Kalasa dispatch at the Blossom equinox.`,
    });
    setEmailInput('');
  };

  const getEssayIcon = (category: BlogArticle['category']) => {
    switch (category) {
      case 'Stingless Bee Ecology':
        return <Droplets className="w-4 h-4" />;
      case 'Coffee Agroforestry':
        return <Trees className="w-4 h-4" />;
      case 'Brewing Rituals':
        return <Coffee className="w-4 h-4" />;
      case 'Estate Recipes':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Flame className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-[#F5F0E5]">
      {/* 1. HERO HEADER & SEARCH / FILTERS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-10 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            Field Notes &amp; Canopy Chronicles · Kalasa, Western Ghats
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#38291F] tracking-tight">
            Dispatches from the Mist, Soil &amp; Hive.
          </h1>
          <p className="text-sm sm:text-base text-[#594132] leading-relaxed">
            Essays on high-altitude agroforestry, native stingless bee ecology (
            <em>Tetragonula iridipennis</em>), seasonal honey harvests, and the
            meditative quietude of single-estate brewing rituals.
          </p>

          {/* Search Bar */}
          <div className="pt-3 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-[#594132]/70 absolute left-4 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chronicles, harvest notes, botanical guides..."
                aria-label="Search field dispatches"
                className="w-full h-11 pl-11 pr-20 rounded-xl bg-[#FAF8F0] border border-[#D8C8AE] text-xs sm:text-sm text-[#38291F] placeholder-[#594132]/55 focus:outline-none focus:border-[#D9A441]"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Dispatches');
                }}
                className="absolute right-2 px-2.5 py-1 rounded-lg bg-[#F5F0E5] border border-[#D8C8AE] text-[11px] font-semibold text-[#594132] hover:text-[#38291F] cursor-pointer"
              >
                {searchQuery ? 'Clear' : 'Index'}
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {BLOG_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              const label =
                category === 'All Dispatches'
                  ? `All Dispatches (${DISPATCH_ESSAYS.length + 1})`
                  : category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    active
                      ? 'bg-[#D9A441] text-[#241A15] shadow-warm'
                      : 'bg-[#FAF8F0] text-[#594132] border border-[#D8C8AE] hover:bg-[#E5D3A9]/50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. LEAD DISPATCH FEATURED CARD */}
      {showLeadDispatch && (
        <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-14">
          <article className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl overflow-hidden shadow-warm grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[420px] bg-[#EDE8DD]">
              <ResilientImage
                src={LEAD_DISPATCH.image || ''}
                alt={LEAD_DISPATCH.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#FAF8F0]/95 text-[#38291F] text-[10px] font-bold uppercase tracking-wider shadow-warm">
                  Lead Dispatch
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#B96D35] text-[#FAF8F0] text-[10px] font-bold uppercase tracking-wider shadow-warm">
                  Vol. 14
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-[11px] font-medium text-[#526447]">
                  Harvest Report · {LEAD_DISPATCH.readTime} · Published{' '}
                  {LEAD_DISPATCH.published}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F] leading-snug">
                  {LEAD_DISPATCH.title}{' '}
                  <span className="italic font-normal text-[#B96D35]">
                    {LEAD_DISPATCH.titleHighlight}
                  </span>{' '}
                  {LEAD_DISPATCH.titleEnd}
                </h2>
                <p className="font-serif italic text-xs sm:text-sm text-[#594132]">
                  By {LEAD_DISPATCH.author}
                </p>
                <p className="text-xs sm:text-sm text-[#594132] leading-relaxed">
                  {LEAD_DISPATCH.excerpt}
                </p>
              </div>

              <div className="space-y-5">
                {LEAD_DISPATCH.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D8C8AE]/70">
                    {LEAD_DISPATCH.metrics.slice(0, 3).map((m) => (
                      <div key={m.label}>
                        <p className="text-[10px] font-bold tracking-wider uppercase text-[#594132]/75">
                          {m.label}
                        </p>
                        <p className="font-serif text-base sm:text-lg font-semibold text-[#B96D35] tabular-nums">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <button
                    type="button"
                    onClick={() => onReadArticle(LEAD_DISPATCH)}
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#D9A441] text-[#241A15] text-xs sm:text-sm font-semibold cursor-pointer transition-colors hover:bg-[#B96D35] hover:text-[#FAF8F0]"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Article</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* 3. CANOPY CHRONICLES & FIELD STUDIES (INTERACTIVE DRAWERS) */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              The Archives · Interactive Essays
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] mt-1">
              Canopy Chronicles &amp; Field Studies
            </h2>
          </div>
          <p className="text-xs text-[#594132] max-w-sm">
            Explore complete harvest notes and laboratory insights. Click any
            dispatch to expand its full research drawer.
          </p>
        </div>

        {filteredEssays.length === 0 ? (
          <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-10 text-center space-y-3">
            <p className="font-serif text-xl text-[#38291F]">
              No matching dispatches in this archive shelf.
            </p>
            <p className="text-xs text-[#594132]">
              Try clearing your search filter or switching back to All
              Dispatches.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Dispatches');
              }}
              className="px-4 py-2 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-xs font-semibold cursor-pointer"
            >
              Show All Chronicles
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEssays.map((essay) => {
              const isOpen = openEssayIds.includes(essay.id);
              return (
                <article
                  key={essay.id}
                  className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl overflow-hidden shadow-warm transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleEssay(essay.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#F5F0E5]/60 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-[#263F2C] flex items-center justify-center shrink-0 mt-0.5">
                        {getEssayIcon(essay.category)}
                      </span>
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-medium text-[#526447]">
                          {essay.category} · {essay.readTime} · By{' '}
                          {essay.author}
                        </p>
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#38291F]">
                          {essay.title} {essay.titleHighlight} {essay.titleEnd}
                        </h3>
                        <p className="text-xs text-[#594132] leading-relaxed max-w-3xl">
                          {essay.excerpt}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D8C8AE] bg-[#F5F0E5] text-[11px] font-semibold text-[#38291F] shrink-0">
                      <span>{isOpen ? 'Close Drawer' : 'Open Drawer'}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#D8C8AE]/60 bg-[#FEF9EE] space-y-4">
                      <div className="sm:pl-14 space-y-3 max-w-3xl">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7D5700]">
                          Field Observation · {essay.fieldObservation}
                        </p>
                        {essay.bodyParagraphs.map((para, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-[#38291F]/90 leading-relaxed"
                          >
                            {para}
                          </p>
                        ))}
                        <div className="pt-2 flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => onReadArticle(essay)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-xs font-semibold cursor-pointer hover:bg-[#526447] transition-colors"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Read Full Field Study</span>
                          </button>
                          <span className="text-[11px] text-[#594132]">
                            Published {essay.published}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. RECEIVE OUR SEASONAL HARVEST LETTERS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="max-w-2xl mx-auto bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-8 sm:p-10 text-center shadow-warm space-y-5">
          <span className="w-10 h-10 rounded-xl bg-[#E5D3A9]/60 text-[#7D5700] inline-flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </span>
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F]">
              Receive Our Seasonal Harvest Letters
            </h2>
            <p className="text-xs sm:text-sm text-[#594132] leading-relaxed max-w-lg mx-auto">
              Dispatches delivered four times a year in sync with the Ghats
              solar seasons: <strong>Blossom (March)</strong>,{' '}
              <strong>Monsoon (July)</strong>,{' '}
              <strong>Harvest (November)</strong>, and{' '}
              <strong>Firepit (January)</strong>. No spam, only botanical and
              roasting essays.
            </p>
          </div>

          <form
            onSubmit={handleNewsletter}
            className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-1"
            noValidate
          >
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your email address..."
              aria-label="Email address for seasonal harvest letters"
              className="flex-1 h-11 px-4 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-xs sm:text-sm text-[#38291F] placeholder-[#594132]/55 focus:outline-none focus:border-[#D9A441]"
            />
            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-[#D9A441] text-[#241A15] text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer hover:bg-[#B96D35] hover:text-[#FAF8F0] transition-colors"
            >
              Subscribe
            </button>
          </form>

          {newsletterMsg && (
            <div
              className={`text-xs flex items-center justify-center gap-1.5 ${
                newsletterMsg.type === 'success'
                  ? 'text-[#263F2C] font-medium'
                  : 'text-[#B96D35] font-medium'
              }`}
            >
              {newsletterMsg.type === 'success' && (
                <CheckCircle2 className="w-4 h-4 text-[#263F2C]" />
              )}
              <span>{newsletterMsg.text}</span>
            </div>
          )}

          <p className="text-[11px] text-[#594132]/80">
            Privacy strictly observed · 100% Unhurried Writing
          </p>
        </div>
      </section>

      {/* 5. TASTE THE STORIES IN PERSON AT KALASA */}
      <section className="bg-[#263F2C] text-[#FAF8F0] py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                Highland Immersion
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F0]">
                Taste the Stories in Person at Kalasa.
              </h2>
              <p className="text-sm text-[#E5D3A9]/90 leading-relaxed max-w-xl">
                The scent of freshly bloomed Arabica, the quiet murmur of the
                Bhadra River, and raw honey warm from our bee boxes. Walk our
                shaded canopy trails, join an origin cupping flight, or savor a
                slow afternoon overlooking Kudremukha.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenReserve}
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold cursor-pointer hover:bg-[#F5BD58]"
                >
                  <span>Reserve a Table</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenExperience}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#1E3323] border border-[#526447] text-[#FAF8F0] text-sm font-semibold cursor-pointer hover:bg-[#526447]"
                >
                  <span>Explore Estate Experiences</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#1E3323] border border-[#526447]/70 p-6 space-y-3">
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                  Sanctuary Visit Coordinates
                </p>
                <div className="space-y-2.5 text-xs text-[#F5F0E5]/90">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                    <span>
                      Bhadra River Vista Road, Main Plantation Junction, Kalasa,
                      Chikkamagaluru, Karnataka 577124
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#D9A441] shrink-0" />
                    <span className="tabular-nums">
                      Daily: 7:30 AM – 9:30 PM (Fresh morning roasts at dawn)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                    <span className="tabular-nums">+91 98765 43210</span>
                  </div>
                </div>
                <p className="pt-3 border-t border-[#526447]/50 text-[11px] text-[#E5D3A9]/80">
                  Open every day, rain or shine. No prior booking required for
                  walk-in bar seating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
