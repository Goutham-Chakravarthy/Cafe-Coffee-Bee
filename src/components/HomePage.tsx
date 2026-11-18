import React, {useState} from 'react';
import {
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  Send,
  Star,
  Car,
  Wifi,
  PawPrint,
  Trees,
  CheckCircle2,
  Compass,
  BookOpen,
} from 'lucide-react';
import {
  IMAGES,
  SIGNATURE_CREATIONS,
  GALLERY_ITEMS,
  TESTIMONIALS,
  PageId,
  MenuItem,
  GalleryPhoto,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

interface HomePageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onAddToOrder: (item: {
    id: string;
    name: string;
    price: number;
    category: string;
    image?: string;
  }) => void;
  onOpenReserve: () => void;
  onOpenGallery: (photo: GalleryPhoto) => void;
  onOpenExperience: () => void;
  onInspectItem: (item: MenuItem) => void;
}

const SANCTUARY_VIEWS = [
  {
    id: 'veranda',
    label: 'The Teak Veranda',
    caption: 'Bhadra Valley View · 7:30 AM Mist',
    image: IMAGES.cafeVeranda,
  },
  {
    id: 'pourover',
    label: 'Manual Brew Bar',
    caption: 'Single-Origin V60 & Copper Kettles',
    image: IMAGES.baristaPourover,
  },
  {
    id: 'canopy',
    label: 'Kudremukha Canopy',
    caption: '1,240m Shade-Grown Arabica Slopes',
    image: IMAGES.kalasaMist,
  },
];

const MAP_PINS = [
  {
    id: 'cafe',
    label: 'Cafe Coffee Bee',
    subtitle: 'Your Sanctuary in Kalasa · Main Veranda',
    coords: {x: 42, y: 68},
    primary: true,
  },
  {
    id: 'apiary',
    label: 'Dammar Apiary Grove',
    subtitle: '42 Native Stingless Bee Hives · Plot 04',
    coords: {x: 68, y: 42},
    primary: false,
  },
  {
    id: 'bhadra',
    label: 'Bhadra River Vista',
    subtitle: 'Scenic Bridge & Morning Mist Overlook',
    coords: {x: 24, y: 36},
    primary: false,
  },
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToOrder,
  onOpenReserve,
  onOpenGallery,
  onOpenExperience,
  onInspectItem,
}) => {
  const [activeSanctuaryIdx, setActiveSanctuaryIdx] = useState(0);
  const [selectedPinId, setSelectedPinId] = useState('cafe');
  const [contactForm, setContactForm] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [contactError, setContactError] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const selectedPin =
    MAP_PINS.find((p) => p.id === selectedPinId) || MAP_PINS[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.contact.trim() || !contactForm.message.trim()) {
      setContactError('Please enter your name, email or phone, and a short note.');
      return;
    }
    setContactError('');
    setContactSubmitted(true);
    setContactForm({name: '', contact: '', message: ''});
  };

  return (
    <div className="bg-[#F5F0E5]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#241A15] min-h-[540px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.heroKalasa}
            alt="Cafe Coffee Bee outdoor table overlooking misty Kalasa hills at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#241A15]/90 via-[#241A15]/68 to-[#241A15]/30" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F0]/12 border border-[#E5D3A9]/25 text-[#F5BD58] text-[11px] font-semibold tracking-[0.12em] uppercase">
              Kalasa, Western Ghats · Single-Origin Forest Coffee
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#FAF8F0]">
              A Little Buzz.
              <br />
              <span className="italic font-normal text-[#D9A441]">
                — A Lot of Goodness.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#F5F0E5]/90 leading-relaxed max-w-xl">
              Perched amidst the emerald ridges and rolling mist of Kalasa in
              the Western Ghats. Where shade-grown single-origin coffee meets
              wild forest honey harvested alongside native bees.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#E5D3A9]">
              <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
              <span>
                1150–1300m Kudremukha Foothills · Western Ghats Origin (3,800 ft)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold whitespace-nowrap cursor-pointer transition-all duration-150 hover:bg-[#B96D35] hover:text-[#FAF8F0] hover:shadow-honey"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('home', 'contact')}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#FAF8F0] text-[#38291F] text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors duration-150 hover:bg-[#E5D3A9]"
              >
                <Compass className="w-4 h-4 text-[#263F2C]" />
                <span>Visit Us in Kalasa</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SIGNATURE CREATIONS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            Our Favourites
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px w-10 bg-[#D8C8AE]" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] tracking-tight">
              Our Signature Creations
            </h2>
            <span className="hidden sm:block h-px w-10 bg-[#D8C8AE]" />
          </div>
          <p className="text-sm sm:text-base text-[#594132] leading-relaxed">
            Handcrafted with single-origin beans, mountain spices, and natural
            wild comb honey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_CREATIONS.map((item) => (
            <article
              key={item.id}
              className="group bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 flex flex-col justify-between shadow-warm transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div
                  onClick={() => onInspectItem(item)}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 cursor-pointer bg-[#EDE8DD]"
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#38291F]/85 text-[#FAF8F0] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() => onInspectItem(item)}
                    className="text-left font-serif text-lg font-semibold text-[#38291F] hover:text-[#7D5700] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                  <p className="text-xs text-[#594132] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D8C8AE]/60 flex items-center justify-between gap-2">
                <span className="text-base font-semibold text-[#B96D35] tabular-nums">
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
                      image: item.image,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors duration-150 hover:bg-[#526447]"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#E5D3A9]/50"
          >
            <span>Explore Full Menu</span>
            <BookOpen className="w-4 h-4 text-[#7D5700]" />
          </button>
        </div>
      </section>

      {/* 3. MORE THAN JUST A CAFE, IT'S A RHYTHM */}
      <section
        id="experience"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-20"
      >
        <div className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 sm:p-10 lg:p-12 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
                Our Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F] leading-tight">
                More Than Just a Cafe, It&apos;s a Rhythm.
              </h2>
              <p className="text-sm sm:text-base text-[#594132] leading-relaxed">
                Cafe Coffee Bee was born from a simple belief: that genuine
                coffee and thoughtful food transform everyday routines into
                unhurried moments of pause. A sanctuary perched right in the
                rolling mist of Kalasa, where laughter lingers and nature sets
                the tempo.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {SANCTUARY_VIEWS.map((view, idx) => (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setActiveSanctuaryIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      activeSanctuaryIdx === idx
                        ? 'bg-[#263F2C] text-[#FAF8F0]'
                        : 'bg-[#F5F0E5] text-[#594132] border border-[#D8C8AE] hover:bg-[#E5D3A9]/40'
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenExperience}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#526447]"
                >
                  <span>Discover Our Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden border border-[#D8C8AE] aspect-[16/10] bg-[#EDE8DD]">
                <ResilientImage
                  src={SANCTUARY_VIEWS[activeSanctuaryIdx].image}
                  alt={SANCTUARY_VIEWS[activeSanctuaryIdx].label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#241A15]/85 via-[#241A15]/40 to-transparent flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#F5BD58]">
                      Kalasa Sanctuary
                    </p>
                    <p className="font-serif text-lg sm:text-xl text-[#FAF8F0]">
                      {SANCTUARY_VIEWS[activeSanctuaryIdx].label}
                    </p>
                    <p className="text-xs text-[#F5F0E5]/85">
                      {SANCTUARY_VIEWS[activeSanctuaryIdx].caption}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenReserve}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#D9A441] text-[#241A15] text-xs font-semibold whitespace-nowrap cursor-pointer hover:bg-[#F5BD58]"
                  >
                    Book Veranda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A LITTLE PLACE WITH A LOT OF HEART */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[#D8C8AE] shadow-warm bg-[#EDE8DD]">
                <ResilientImage
                  src={IMAGES.baristaPourover}
                  alt="Head barista hand-pouring Kalasa V60 coffee with copper kettle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:absolute sm:-bottom-5 sm:right-5 mt-4 sm:mt-0 bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-4 shadow-warm max-w-xs">
                <p className="font-serif text-sm font-semibold text-[#38291F]">
                  Western Ghats Heritage
                </p>
                <p className="text-xs text-[#594132] mt-0.5 leading-relaxed">
                  Sun-dried beans, painstakingly crafted for every pour.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 lg:pl-4">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-[#38291F]">
              A Little Place with a Lot of Heart.
            </h2>
            <p className="text-sm sm:text-base text-[#594132] leading-relaxed">
              Surrounded by the ancient peaks and emerald slopes of Kalasa, our
              journey started with deep reverence for Karnataka&apos;s storied
              coffee traditions. We wanted to build a haven where travelers on
              the hill roads could pull in, inhale the aroma of freshly roasted
              beans, and taste the unadulterated sweetness of estate living.
            </p>
            <p className="text-sm sm:text-base text-[#594132] leading-relaxed">
              The &apos;Bee&apos; in our name honors the unsung architects of the
              Western Ghats canopy: the wild pollinators that sustain our
              shade-grown coffee blossom ecosystems. Every drop of forest honey
              we whip into our brioche and specialty lattes is harvested with
              restorative beekeeping ethics.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#526447]"
              >
                <span>Know Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A GLIMPSE INTO OUR HIVE (GALLERY) */}
      <section
        id="gallery"
        className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24"
      >
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            Moments & Flavours
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            A Glimpse into Our Hive
          </h2>
          <p className="text-sm text-[#594132]">
            Sun-dappled afternoons, freshly pulled espresso, and handcrafted
            artisan bakery delicacies.
          </p>
        </div>

        {/* Row 1: 3 square/4:3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {GALLERY_ITEMS.slice(0, 3).map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => onOpenGallery(photo)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD] text-left cursor-pointer shadow-warm"
            >
              <ResilientImage
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                <div>
                  <p className="font-serif text-base text-[#FAF8F0]">
                    {photo.title}
                  </p>
                  <p className="text-[11px] text-[#E5D3A9]">{photo.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Row 2: 2 wider landscape cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GALLERY_ITEMS.slice(3, 5).map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => onOpenGallery(photo)}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD] text-left cursor-pointer shadow-warm"
            >
              <ResilientImage
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                <div>
                  <p className="font-serif text-base text-[#FAF8F0]">
                    {photo.title}
                  </p>
                  <p className="text-[11px] text-[#E5D3A9]">{photo.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-9 text-center">
          <button
            type="button"
            onClick={() => onOpenGallery(GALLERY_ITEMS[0])}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#E5D3A9]/50"
          >
            <span>Explore Full Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#7D5700]" />
          </button>
        </div>
      </section>

      {/* 6. SWEET WORDS FROM OUR GUESTS */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 pb-20">
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10">
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#526447]">
            Community Love
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38291F]">
            Sweet Words from Our Guests
          </h2>
          <p className="text-sm text-[#594132]">
            What wanderers, coffee enthusiasts, and locals cherish about Cafe
            Coffee Bee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl p-6 flex flex-col justify-between shadow-warm"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#D9A441]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D9A441] text-[#D9A441]"
                    />
                  ))}
                </div>
                <p className="font-serif italic text-sm sm:text-[15px] text-[#38291F] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D8C8AE]/60 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold text-[#38291F]">
                    {item.author}
                  </p>
                  <p className="text-[11px] text-[#594132]">{item.role}</p>
                </div>
                <span className="text-[11px] font-medium text-[#526447]">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. YOUR NEXT FAVOURITE SPOT AWAITS (DARK CONTACT + MAP SECTION) */}
      <section
        id="contact"
        className="relative bg-[#241A15] text-[#F5F0E5] pt-16 pb-20"
      >
        {/* Subtle organic curved crest divider */}
        <div
          className="absolute -top-8 left-0 right-0 h-8 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            className="w-full h-full fill-[#241A15]"
          >
            <path d="M0,48 L0,24 Q360,0 720,24 T1440,24 L1440,48 Z" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Contact details & Inquiry Form */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#D9A441]">
                  Come Say Hello
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F0]">
                  Your Next Favourite Spot Awaits.
                </h2>
                <p className="text-sm text-[#D8C8AE]/90 leading-relaxed max-w-lg">
                  Tucked amidst the lush greenery of Kalasa. Stop by for your
                  morning brew, afternoon respite, or weekend recharge.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#E5D3A9]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                  <span>
                    Bhadra River Vista Road, Main Plantation Junction, Kalasa,
                    Chikkamagaluru District, Karnataka 577124
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span className="tabular-nums">
                    Monday – Sunday: 7:30 AM – 9:30 PM
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span className="tabular-nums">
                    +91 98765 43210 (Phone & WhatsApp Concierge)
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setSelectedPinId('cafe')}
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#D9A441] text-[#241A15] text-xs font-semibold cursor-pointer transition-colors hover:bg-[#F5BD58]"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Highlight Sanctuary on Map</span>
                </button>
              </div>

              {/* Working Contact Form */}
              <form
                onSubmit={handleContactSubmit}
                className="space-y-3 pt-2 max-w-lg"
                noValidate
              >
                {contactSubmitted ? (
                  <div className="rounded-xl border border-[#78866A] bg-[#263F2C]/60 p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#FAF8F0]">
                        Message received at the Kalasa Veranda
                      </p>
                      <p className="text-xs text-[#D8C8AE] mt-1">
                        Our hospitality host will respond shortly via your
                        preferred contact. Looking forward to welcoming you.
                      </p>
                      <button
                        type="button"
                        onClick={() => setContactSubmitted(false)}
                        className="mt-2 text-xs font-semibold text-[#D9A441] hover:underline cursor-pointer"
                      >
                        Send another note
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({...contactForm, name: e.target.value})
                      }
                      aria-label="Your Name"
                      className="w-full h-11 px-4 rounded-xl bg-[#32261F] border border-[#594132] text-sm text-[#FAF8F0] placeholder-[#D8C8AE]/55 focus:outline-none focus:border-[#D9A441]"
                    />
                    <input
                      type="text"
                      placeholder="Email Address / Phone Number"
                      value={contactForm.contact}
                      onChange={(e) =>
                        setContactForm({...contactForm, contact: e.target.value})
                      }
                      aria-label="Email Address or Phone Number"
                      className="w-full h-11 px-4 rounded-xl bg-[#32261F] border border-[#594132] text-sm text-[#FAF8F0] placeholder-[#D8C8AE]/55 focus:outline-none focus:border-[#D9A441]"
                    />
                    <textarea
                      rows={3}
                      placeholder="Tell us what you are planning (table booking, celebration, or private event)..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({...contactForm, message: e.target.value})
                      }
                      aria-label="Message"
                      className="w-full p-4 rounded-xl bg-[#32261F] border border-[#594132] text-sm text-[#FAF8F0] placeholder-[#D8C8AE]/55 focus:outline-none focus:border-[#D9A441] resize-none"
                    />
                    {contactError && (
                      <p className="text-xs text-[#F5BD58]">{contactError}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full h-11 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#B96D35] hover:text-[#FAF8F0]"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Right: Interactive Botanical Map & Amenity Grid */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F0] text-[#38291F] rounded-xl p-4 sm:p-5 border border-[#D8C8AE] shadow-warm-lg space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-[#D8C8AE] bg-[#EDE8DD] aspect-[16/11]">
                  {/* Bespoke Topographic Botanical Map of Kalasa */}
                  <svg
                    viewBox="0 0 600 400"
                    className="w-full h-full"
                    aria-label="Topographic map of Kalasa and Cafe Coffee Bee"
                  >
                    <rect width="600" height="400" fill="#EAE4D3" />
                    {/* Forest Canopy Zones */}
                    <path
                      d="M0,0 L260,0 Q230,90 170,130 Q100,160 0,140 Z"
                      fill="#DCE3CE"
                    />
                    <path
                      d="M360,0 L600,0 L600,240 Q510,210 460,150 Q410,90 360,0 Z"
                      fill="#DCE3CE"
                    />
                    <path
                      d="M340,400 Q420,300 600,290 L600,400 Z"
                      fill="#D5DFC4"
                    />
                    {/* Contour Lines */}
                    <path
                      d="M-20,260 Q140,210 290,260 T620,230"
                      fill="none"
                      stroke="#D8C8AE"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M-20,310 Q160,260 320,320 T620,290"
                      fill="none"
                      stroke="#D8C8AE"
                      strokeWidth="1.5"
                    />
                    {/* Bhadra River */}
                    <path
                      d="M40,400 Q110,270 160,190 T240,0"
                      fill="none"
                      stroke="#A9C7C9"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <text
                      x="130"
                      y="120"
                      fill="#4A654F"
                      fontSize="11"
                      fontWeight="600"
                      transform="rotate(-62 130 120)"
                    >
                      Bhadra River
                    </text>
                    {/* Plantation Roads */}
                    <path
                      d="M0,220 L210,250 L430,180 L600,150"
                      fill="none"
                      stroke="#FAF8F0"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M210,250 L260,400"
                      fill="none"
                      stroke="#FAF8F0"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <text
                      x="255"
                      y="228"
                      fill="#594132"
                      fontSize="10"
                      fontWeight="600"
                      transform="rotate(-17 255 228)"
                    >
                      Bhadra River Vista Rd
                    </text>
                    <text
                      x="460"
                      y="90"
                      fill="#526447"
                      fontSize="11"
                      fontWeight="600"
                    >
                      Kalasa Coffee Estates
                    </text>
                    <text
                      x="30"
                      y="65"
                      fill="#526447"
                      fontSize="11"
                      fontWeight="600"
                    >
                      Kudremukha Foothills
                    </text>
                  </svg>

                  {/* Interactive Landmark Pins */}
                  {MAP_PINS.map((pin) => {
                    const active = pin.id === selectedPinId;
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => setSelectedPinId(pin.id)}
                        style={{
                          left: `${pin.coords.x}%`,
                          top: `${pin.coords.y}%`,
                        }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold flex items-center gap-1.5 shadow-warm cursor-pointer transition-transform duration-150 ${
                          active
                            ? 'bg-[#263F2C] text-[#FAF8F0] scale-105 z-20 ring-2 ring-[#D9A441]'
                            : 'bg-[#FAF8F0] text-[#38291F] border border-[#D8C8AE] hover:scale-105 z-10'
                        }`}
                      >
                        <MapPin
                          className={`w-3.5 h-3.5 shrink-0 ${
                            active ? 'text-[#D9A441]' : 'text-[#7D5700]'
                          }`}
                        />
                        <span className="whitespace-nowrap">{pin.label}</span>
                      </button>
                    );
                  })}

                  {/* Active Location Floating Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:min-w-[260px] bg-[#FAF8F0]/95 backdrop-blur-sm border border-[#D8C8AE] rounded-xl p-3 shadow-warm flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#D9A441]/25 text-[#7D5700] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#38291F]">
                        {selectedPin.label}
                      </p>
                      <p className="text-[11px] text-[#594132]">
                        {selectedPin.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Sanctuary Amenities */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5F0E5] text-xs font-medium text-[#38291F]">
                    <Car className="w-4 h-4 text-[#7D5700] shrink-0" />
                    <span>Ample Hillside Parking</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5F0E5] text-xs font-medium text-[#38291F]">
                    <Wifi className="w-4 h-4 text-[#7D5700] shrink-0" />
                    <span>High-Speed Work Cafe Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5F0E5] text-xs font-medium text-[#38291F]">
                    <PawPrint className="w-4 h-4 text-[#7D5700] shrink-0" />
                    <span>Pet-Friendly Veranda</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5F0E5] text-xs font-medium text-[#38291F]">
                    <Trees className="w-4 h-4 text-[#7D5700] shrink-0" />
                    <span>Scenic Forest Trail Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
