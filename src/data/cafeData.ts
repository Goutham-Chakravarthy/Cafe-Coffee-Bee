export type PageId = 'home' | 'menu' | 'about' | 'blogs' | 'blog-detail';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category:
    | 'Western Ghats Specialty'
    | 'Honey-Infused Signatures'
    | 'Artisanal Espresso'
    | '18h-Gravity Cold Brews'
    | 'Forest Bakery & Pastries';
  tag: string;
  originNote: string;
  description: string;
  tastingNotes: string[];
  image: string;
  roastProfile?: string;
  honeyPairing?: string;
  preparation?: string;
}

export interface CellarItem {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: number;
  category: string;
}

export interface CellarSection {
  id: string;
  kicker: string;
  title: string;
  icon: 'coffee' | 'honey' | 'bakery';
  items: CellarItem[];
}

export interface HoneyPairing {
  id: string;
  kicker: string;
  title: string;
  description: string;
  recommended: string;
  flavorProfile: string;
  harmony: string;
  pairing: string;
  summary: string;
  tone: 'amber' | 'forest' | 'gold';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  location: string;
  image: string;
  span?: 'wide' | 'square' | 'tall';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  source: string;
}

export interface BlogArticle {
  id: string;
  volume: string;
  studyTitle: string;
  kicker: string;
  category:
    | 'Coffee Agroforestry'
    | 'Stingless Bee Ecology'
    | 'Honey & Foraging'
    | 'Brewing Rituals'
    | 'Estate Recipes';
  tags: string[];
  readTime: string;
  audioDuration: string;
  author: string;
  authorRole: string;
  published: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  deck: string;
  excerpt: string;
  metrics?: {label: string; value: string; sub: string}[];
  image?: string;
  secondaryImage?: string;
  figure1Caption: string;
  figure1Meta: string;
  figure2Caption: string;
  section1: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    calloutTitle: string;
    calloutText: string;
    pullQuote: string;
    pullQuoteAuthor: string;
  };
  section2: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    tableTitle: string;
    tableSubtitle: string;
    colA: string;
    colB: string;
    rows: {metric: string; valueA: string; valueB: string}[];
  };
  section3: {
    kicker: string;
    heading: string;
    intro: string;
    lotCode: string;
    radarAxes: {label: string; score: number}[];
    sensoryNotes: string[];
    protocolTitle: string;
    protocolSubtitle: string;
    waterTemp: string;
    brewRatio: string;
    grindSize: string;
    targetDraw: string;
    protocolNote: string;
    acidityProfile: string;
    acidityNote: string;
    moisture: string;
    moistureNote: string;
    cuppingScore: string;
    cuppingNote: string;
  };
  bodyParagraphs: string[];
  fieldObservation: string;
}

export const IMAGES = {
  heroKalasa: '/src/assets/images/hero_kalasa_coffee_1795011389379.jpg',
  honeyCinnamonLatte: '/src/assets/images/honey_cinnamon_latte_1795011389440.jpg',
  kalasaCappuccino: '/src/assets/images/kalasa_cappuccino_1795011389514.jpg',
  amberColdBrew: '/src/assets/images/amber_cold_brew_1795011390186.jpg',
  honeyButterBrioche: '/src/assets/images/honey_butter_brioche_1795011392286.jpg',
  baristaPourover: '/src/assets/images/barista_pourover_portrait_1795011392037.jpg',
  cafeVeranda: '/src/assets/images/cafe_veranda_sanctuary_1795011390442.jpg',
  bakerySwirls: '/src/assets/images/bakery_cinnamon_swirls_1795011392164.jpg',
  kalasaMist: '/src/assets/images/kalasa_mist_mountains_1795011393225.jpg',
  coffeeBlossomsBees: '/src/assets/images/coffee_blossoms_bees_1795011393137.jpg',
  forestHoneyJars: '/src/assets/images/forest_honey_jars_1795011393591.jpg',
  planterApiarist: '/src/assets/images/planter_apiarist_portrait_1795011394267.jpg',
  monsoonMalabar: '/src/assets/images/monsoon_malabar_press_1795011395258.jpg',
  goldenElixir: '/src/assets/images/golden_turmeric_elixir_1795011395385.jpg',
  estateAffogato: '/src/assets/images/estate_affogato_jaggery_1795011396614.jpg',
  farmerHarvest: '/src/assets/images/farmer_harvest_charter_1795011396191.jpg',
};

export const SIGNATURE_CREATIONS: MenuItem[] = [
  {
    id: 'sig-honey-cinnamon-latte',
    name: 'Honey Cinnamon Latte',
    price: 280,
    category: 'Honey-Infused Signatures',
    tag: 'Signature',
    originNote: 'Kalasa Estate Espresso',
    description:
      'Velvety steamed farm milk with double-espresso infused with Kalasa raw honeycomb and fresh Ceylon cinnamon.',
    tastingNotes: ['Wild Comb Honey', 'Warm Cinnamon', 'Toasted Almond'],
    image: IMAGES.honeyCinnamonLatte,
    roastProfile: 'Medium City Roast · Kudremukha Lot 04',
    honeyPairing: 'Multi-Flora Cliff Honey',
    preparation: 'Pulled at 93°C over raw comb nectar and steamed A2 farm milk.',
  },
  {
    id: 'sig-kalasa-cappuccino',
    name: 'Kalasa Cappuccino',
    price: 240,
    category: 'Artisanal Espresso',
    tag: 'Estate Classic',
    originNote: 'Sun-Dried Arabica',
    description:
      'Rich double ristretto pulled from sun-dried estate beans with dense velvety microfoam.',
    tastingNotes: ['Roasted Hazelnut', 'Dark Cocoa', 'Caramel'],
    image: IMAGES.kalasaCappuccino,
    roastProfile: 'Medium-Dark · Bhadra Ridge Arabica',
    honeyPairing: 'Optional Forest Honey Drizzle',
    preparation: '18g double ristretto extracted for 28 seconds with textured microfoam.',
  },
  {
    id: 'sig-amber-cold-brew',
    name: 'Amber Cold Brew',
    price: 260,
    category: '18h-Gravity Cold Brews',
    tag: '18h Steeped',
    originNote: 'Mountain Spring Steeped',
    description:
      'Slow-steeped for 18 hours in mountain spring water, finished over crystal ice with wildflower syrup.',
    tastingNotes: ['Orange Zest', 'Jaggery Cane', 'Crisp Molasses'],
    image: IMAGES.amberColdBrew,
    roastProfile: 'Light-Medium · Shade-Grown Selection 795',
    honeyPairing: 'Highland Acacia Nectar',
    preparation: 'Coarse estate grind steeped at 4°C in mineral-rich Bhadra spring water.',
  },
  {
    id: 'sig-honey-butter-brioche',
    name: 'Honey Butter Brioche',
    price: 310,
    category: 'Forest Bakery & Pastries',
    tag: 'Bakery',
    originNote: 'Sourdough Hearth',
    description:
      'Warm toasted sourdough brioche served with house-churned wild forest honey butter, walnuts, and sea salt.',
    tastingNotes: ['Cultured Butter', 'Raw Honeycomb', 'Flaky Sea Salt'],
    image: IMAGES.honeyButterBrioche,
    roastProfile: 'Pair with Kalasa V60 Pour-Over',
    honeyPairing: 'Raw Comb & Wildflower Drizzle',
    preparation: '48-hour slow-fermented sourdough brioche griddled in clarified butter.',
  },
];

export const TASTING_COLLECTION: MenuItem[] = [
  {
    id: 'tc-honeycomb-cortado',
    name: 'Kalasa Honeycomb Cortado',
    price: 260,
    category: 'Honey-Infused Signatures',
    tag: '100% Natural',
    originNote: 'From Hot-Wood Hearth',
    description:
      'Double shot espresso extracted from medium roast Kalasa Arabica, folded with silky steamed A2 Malnad valley milk, topped with a crisp cube of raw cliff comb.',
    tastingNotes: ['A2 Foam', 'Wild Acacia Comb', 'Caramel Notes'],
    image: IMAGES.honeyCinnamonLatte,
    roastProfile: 'Medium Roast · 1,240m Shade Lot',
    honeyPairing: 'Raw Cliff Comb Cube',
    preparation: 'Equal parts double ristretto and velvety A2 milk finished with raw comb.',
  },
  {
    id: 'tc-kudremukha-pourover',
    name: 'Kudremukha Mist Pour-Over',
    price: 290,
    category: 'Western Ghats Specialty',
    tag: 'Single Origin',
    originNote: 'Light Roast',
    description:
      'V60 hand-poured washed micro-lot Arabica harvested on the misty eastern slopes of Kudremukha. Fragrant blossom aroma with crisp citrus acidity.',
    tastingNotes: ['Jasmine Blossom', 'Bitter Almond', 'Wild Berries'],
    image: IMAGES.baristaPourover,
    roastProfile: 'Light Omni Roast · Washed Selection 9',
    honeyPairing: 'Served neat to honour floral clarity',
    preparation: '15g coffee to 250ml mountain spring water at 92°C in three slow pulses.',
  },
  {
    id: 'tc-spiced-amber-cold-brew',
    name: 'Spiced Amber Cold Brew',
    price: 270,
    category: '18h-Gravity Cold Brews',
    tag: '18-Hour Steep',
    originNote: 'Bhadra Spring Water',
    description:
      'Coarse estate grinds steeped cold with crushed Kalasa green cardamom pods, toasted Ceylon cinnamon, and sun-ripened orange peel infusion.',
    tastingNotes: ['18h Extracts', 'Green Cardamom', 'Citrus Acidity'],
    image: IMAGES.amberColdBrew,
    roastProfile: 'Medium-Light · Pulped Sun-Dried',
    honeyPairing: 'Wildflower Cardamom Infusion',
    preparation: 'Gravity-filtered cold extraction served over hand-carved ice.',
  },
  {
    id: 'tc-honey-glazed-brioche',
    name: 'Honey-Glazed Brioche',
    price: 310,
    category: 'Forest Bakery & Pastries',
    tag: 'Artisan Bake',
    originNote: 'Sourdough Hearth',
    description:
      '48-hour slow fermented sourdough brioche, griddled in cultured Malnad butter, crowned with molten comb honey and Maldon flaky salt.',
    tastingNotes: ['House Butter', 'Wild Acacia Honey', 'Flaky Salt'],
    image: IMAGES.honeyButterBrioche,
    roastProfile: 'Pairs with Monsoon Malabar Press',
    honeyPairing: 'Highland Acacia Nectar',
    preparation: 'Baked fresh each morning at 6:30 AM and glazed warm to order.',
  },
  {
    id: 'tc-monsoon-malabar-press',
    name: 'Monsoon Malabar Press',
    price: 280,
    category: 'Western Ghats Specialty',
    tag: 'Heritage Roast',
    originNote: 'Dark French Press',
    description:
      'Beans weathered by the Arabian sea monsoon winds, roasted dark to unlock deep notes of earthy tobacco, baker’s chocolate, and sweet malt.',
    tastingNotes: ['Earthy', 'Dark Chocolate', 'Mellow Acidity'],
    image: IMAGES.monsoonMalabar,
    roastProfile: 'Dark Roast · Aged 16 Weeks in Monsoon Mist',
    honeyPairing: 'Wild Jamun Blossom Honey',
    preparation: '4-minute brass French press immersion yielding rich crema and heavy body.',
  },
  {
    id: 'tc-wild-bee-golden-elixir',
    name: 'Wild Bee Golden Elixir',
    price: 240,
    category: 'Honey-Infused Signatures',
    tag: 'Caffeine-Free',
    originNote: 'Warming Spice',
    description:
      'Steamed A2 milk infused with wild-harvested fresh mountain Lakadong turmeric, crushed Tellicherry peppercorn, and wild forest blossom honey.',
    tastingNotes: ['Mountain Turmeric', 'Black Pepper', 'Soothing'],
    image: IMAGES.goldenElixir,
    roastProfile: 'Botanical Infusion · Zero Caffeine',
    honeyPairing: 'Multi-Flora Cliff Honey',
    preparation: 'Simmered gently with fresh grated rhizomes and whisked to silk.',
  },
  {
    id: 'tc-estate-affogato-jaggery',
    name: 'Estate Affogato & Jaggery',
    price: 295,
    category: 'Artisanal Espresso',
    tag: 'Dessert Brew',
    originNote: 'Decadent',
    description:
      'Concentrated single-origin espresso poured tableside over fresh vanilla bean gelato, dusted with caramelized Western Ghats palm jaggery crumbs.',
    tastingNotes: ['Vanilla Gelato', 'Hot Espresso', 'Palm Caramel'],
    image: IMAGES.estateAffogato,
    roastProfile: 'Medium-Dark · High-Sweetness Espresso Blend',
    honeyPairing: 'Toddy Palm Jaggery Crisp',
    preparation: 'Freshly churned Madagascar & Malnad vanilla gelato drowned in double espresso.',
  },
  {
    id: 'tc-cardamom-cinnamon-swirl',
    name: 'Cardamom Pod Cinnamon Swirl',
    price: 230,
    category: 'Forest Bakery & Pastries',
    tag: 'Morning Fresh',
    originNote: 'Estate Cardamom',
    description:
      'Laminated buttery brioche roll layered with fresh coarse-ground Kalasa green cardamom and organic Malabar cinnamon sugar glaze.',
    tastingNotes: ['Highland Cardamom', 'Laminated Dough', 'Pearl Sugar'],
    image: IMAGES.bakerySwirls,
    roastProfile: 'Pairs with Kalasa Cappuccino',
    honeyPairing: 'Brushed with Acacia Nectar',
    preparation: '27-layer cultured butter lamination baked in stone-hearth trays.',
  },
  {
    id: 'tc-cascara-cascading-tea',
    name: 'Cascara Cascading Tea',
    price: 250,
    category: 'Western Ghats Specialty',
    tag: 'Botanical Tea',
    originNote: 'Zero Waste',
    description:
      'Sun-dried husks from our shade-grown organic coffee fruit, infused with garden lemon verbena leaves and wild forest rosehip over cracked ice.',
    tastingNotes: ['Dried Cherry', 'Hibiscus Notes', 'Citrus Verbena'],
    image: IMAGES.forestHoneyJars,
    roastProfile: 'Upcycled Coffee Cherry Husk Tisane',
    honeyPairing: 'Dammar Bee Nectar',
    preparation: 'Slow-steeped at 90°C for 5 minutes, flash-chilled with wild citrus.',
  },
];

export const CELLAR_MENU_SECTIONS: CellarSection[] = [
  {
    id: 'manual-brews',
    kicker: 'MANUAL BAR',
    title: 'Single-Origin Manual Brews',
    icon: 'coffee',
    items: [
      {
        id: 'cm-aeropress',
        name: 'Kudremukha Aeropress',
        tag: 'Single Origin',
        description: 'Bright plum and star anise aromatics with velvety jasmine undertones and clean star-like finish.',
        price: 240,
        category: 'Manual Brews',
      },
      {
        id: 'cm-v60',
        name: 'Kalasa V60 Pour-Over',
        tag: 'Organic',
        description: 'Hand-poured slow extraction highlighting delicate wildflower nectar and bright mountain citrus finish.',
        price: 230,
        category: 'Manual Brews',
      },
      {
        id: 'cm-siphon',
        name: 'Malnad Siphon Craft',
        tag: 'Bespoke',
        description: 'Tabletop vacuum halogen brew rendering supreme clarity, silky mouthfeel, and toasted almond depth.',
        price: 260,
        category: 'Manual Brews',
      },
      {
        id: 'cm-cold-drip',
        name: 'Cold Drip 24-Hr Reserve',
        tag: 'Slow Extract',
        description: 'Single drop per second cold extraction through Bhadra spring water with dark cocoa liqueur nuances.',
        price: 240,
        category: 'Manual Brews',
      },
      {
        id: 'cm-peaberry',
        name: 'French Press Estate Peaberry',
        tag: 'Peaberry',
        description: 'Dense estate peaberry micro-lot pressed for a full body, heavy praline sweetness, and roasted nut notes.',
        price: 250,
        category: 'Manual Brews',
      },
      {
        id: 'cm-moka',
        name: 'Moka Pot Espresso Reserve',
        tag: 'Heavy Roast',
        description: 'Traditional stovetop high-pressure steam brew featuring dark molasses thickness and roasted spice oils.',
        price: 290,
        category: 'Manual Brews',
      },
    ],
  },
  {
    id: 'wild-elixirs',
    kicker: 'NECTAR BLENDS',
    title: 'Wild Honey & Botanical Elixirs',
    icon: 'honey',
    items: [
      {
        id: 'we-dammar-cortado',
        name: 'Dammar Bee Spiced Cortado',
        tag: 'Raw Honey',
        description: 'Micro-lot espresso sweetened with rare stingless Dammar bee honey and stone-ground cardamom.',
        price: 320,
        category: 'Botanical Elixirs',
      },
      {
        id: 'we-turmeric-latte',
        name: 'Turmeric Malnad Golden Latte',
        tag: 'Ayurvedic',
        description: 'High-curcumin hill turmeric, gently steamed A2 milk, black pepper, jaggery, and raw cliff honey.',
        price: 240,
        category: 'Botanical Elixirs',
      },
      {
        id: 'we-cascara',
        name: 'Wild Cardamom Cascara Tea',
        tag: 'Zero-Waste',
        description: 'Sun-dried ripe coffee husks infused overnight with estate cardamom pods and wild lime essence.',
        price: 280,
        category: 'Botanical Elixirs',
      },
      {
        id: 'we-ginger-toddy',
        name: 'Honey-Ginger Mountain Toddy',
        tag: 'Non-Alcoholic',
        description: 'Brewed apple reduction infused with fresh hill ginger root, cloves, star anise, and wild flora honey.',
        price: 230,
        category: 'Botanical Elixirs',
      },
      {
        id: 'we-chicory-mint',
        name: 'Roasted Chicory & Honey Mint',
        tag: 'Herbal',
        description: 'Caffeine-free wood-roasted wild chicory root steeped with peppermint leaves and acacia honey froth.',
        price: 290,
        category: 'Botanical Elixirs',
      },
      {
        id: 'we-a2-milk',
        name: 'Steamed A2 Malnad Milk & Honey',
        tag: 'Pure',
        description: 'Pure indigenous Malnad Gidda cow milk gently warmed with raw wildflower nectar and nutmeg dust.',
        price: 160,
        category: 'Botanical Elixirs',
      },
    ],
  },
  {
    id: 'sanctuary-bakery',
    kicker: 'HEARTH BAKED',
    title: 'Sanctuary Bakery & Savouries',
    icon: 'bakery',
    items: [
      {
        id: 'sb-cardamom-bun',
        name: 'Cardamom Bun with Honey Butter',
        tag: 'Baked',
        description: 'Braided Scandinavian-style dough spiced with freshly cracked green cardamom, served with whipped honey butter.',
        price: 180,
        category: 'Sanctuary Bakery',
      },
      {
        id: 'sb-sourdough-comb',
        name: 'Sourdough Toast with Raw Comb',
        tag: 'Pure',
        description: 'Rustic sourdough slice griddled in cultured butter, crowned with freshly sliced solid forest comb.',
        price: 220,
        category: 'Sanctuary Bakery',
      },
      {
        id: 'sb-jackfruit-brioche',
        name: 'Malnad Jackfruit Brioche Roll',
        tag: 'Seasonal',
        description: 'Buttery brioche swirl filled with slow-cooked spiced jackfruit preserve, palm jaggery, and cinnamon glaze.',
        price: 240,
        category: 'Sanctuary Bakery',
      },
      {
        id: 'sb-focaccia',
        name: 'Roasted Pepper & Chutney Focaccia',
        tag: 'Savory',
        description: 'Wood-fired rosemary olive oil focaccia topped with charred red peppers and house-made coriander chutney.',
        price: 250,
        category: 'Sanctuary Bakery',
      },
      {
        id: 'sb-walnut-cake',
        name: 'Jaggery Walnut Tea Cake',
        tag: 'Pure',
        description: 'Spiced crumb cake prepared with dark Western Ghats palm jaggery, organic brown eggs, and roasted pecans.',
        price: 190,
        category: 'Sanctuary Bakery',
      },
      {
        id: 'sb-coffee-cookie',
        name: 'Warm Malnad Coffee Cookie',
        tag: 'Pure',
        description: 'Chewy dark chocolate and roasted Arabica espresso cookie sprinkled with flaky sea salt.',
        price: 120,
        category: 'Sanctuary Bakery',
      },
    ],
  },
];

export const HONEY_PAIRINGS: HoneyPairing[] = [
  {
    id: 'hp-multi-flora',
    kicker: 'ESTATE BLEND',
    title: 'Multi-Flora Cliff Honey',
    description:
      'Harvested from wild mountain cliffs amid dense polymorphous flora including coffee blossoms, wild sage, and silver oak trees.',
    recommended: 'Light-Medium Pour-Overs',
    flavorProfile: 'Stone Fruit & Citrus',
    harmony: 'Kudremukha V60 Pour-Over',
    pairing: 'Sourdough Honey Brioche',
    summary:
      'Bright floral sweetness that elevates washed coffees without masking acidity.',
    tone: 'amber',
  },
  {
    id: 'hp-jamun',
    kicker: 'DEEP & TANNIC',
    title: 'Wild Jamun Blossom Honey',
    description:
      'Gathered during the monsoon flowering season of native Jamun trees. Dark amber tone with subtle lingering herbal bitterness.',
    recommended: 'Dark Roast Espressos',
    flavorProfile: 'Bittersweet Molasses',
    harmony: 'Monsoon Malabar Press',
    pairing: 'Jaggery Walnut Cake',
    summary:
      'Rich tannic depth contrasts superbly against dark, heavy-bodied roasts.',
    tone: 'forest',
  },
  {
    id: 'hp-acacia',
    kicker: 'GENTLE & FLORAL',
    title: 'Highland Acacia Nectar',
    description:
      'Light amber nectar harvested from high-altitude canopies, with a glassy crystalline quality and gentle vanilla sweetness.',
    recommended: 'Steamed Milk Beverages',
    flavorProfile: 'Silky Vanilla Caramel',
    harmony: 'Kalasa Honey Cortado',
    pairing: 'Cardamom Swirl Roll',
    summary:
      'Mellow sugar profile integrates smoothly into warm steamed milk.',
    tone: 'gold',
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Morning Pour & Berry Tartlets',
    caption: 'Sun-dappled mornings at the teak veranda with freshly steamed rosetta cappuccinos and seasonal orchard bakes.',
    location: 'South Veranda · 8:15 AM',
    image: IMAGES.kalasaCappuccino,
    span: 'square',
  },
  {
    id: 'gal-2',
    title: 'Mist Over Kudremukha Canopy',
    caption: 'Dawn mist settling gently through three-tier shade canopies above our 1,240-meter Arabica terraces.',
    location: 'Upper Estate Ridge · 6:40 AM',
    image: IMAGES.kalasaMist,
    span: 'square',
  },
  {
    id: 'gal-3',
    title: 'Raw Cliff Comb Drizzle',
    caption: 'Unfiltered wild comb honey harvested with native Dammar apiaries, folded into chilled spiced espresso.',
    location: 'Espresso Atelier · 10:30 AM',
    image: IMAGES.honeyCinnamonLatte,
    span: 'square',
  },
  {
    id: 'gal-4',
    title: 'The Teak & Laterite Veranda',
    caption: 'Reclaimed plantation teak, cool local laterite walls, and unhurried mountain air overlooking the Bhadra valley.',
    location: 'Main Sanctuary Deck · 4:15 PM',
    image: IMAGES.cafeVeranda,
    span: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Hearth-Baked Cardamom Rolls',
    caption: '27-layer cultured butter brioche glazed warm with acacia nectar and freshly cracked Malnad cardamom.',
    location: 'Sanctuary Bakery · 7:00 AM',
    image: IMAGES.bakerySwirls,
    span: 'wide',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'The Honey Cinnamon Latte is easily one of the best specialty drinks I have tasted anywhere in Karnataka. Drinking it with the mist rolling down the Kalasa hills was pure magic.',
    author: 'Ananya Hegde',
    role: 'Bengaluru Traveler',
    source: 'Google Review',
  },
  {
    id: 'test-2',
    quote:
      'A tranquil oasis for anyone touring Kudremukha and Kalasa. The sourdough brioche with honey butter paired with their Cold Brew Amber Reserve gave us energy for our entire trek.',
    author: 'Rohan Kulkarni',
    role: 'Adventure Enthusiast',
    source: 'Google Review',
  },
  {
    id: 'test-3',
    quote:
      'The design, the warm woods, the smiling baristas, and the fragrance of roasted coffee... Cafe Coffee Bee is a love letter to the Western Ghats. Do not miss it!',
    author: 'Dr. Meera Nambiar',
    role: 'Mangaluru Resident',
    source: 'Google Review',
  },
];

export const ANNUAL_RHYTHM = [
  {
    step: '01',
    title: 'March Showers',
    subtitle: 'Fragrant white coffee blossoms awaken',
  },
  {
    step: '02',
    title: 'Dammar Pollination',
    subtitle: 'Native bees infuse wild forest terpenes',
  },
  {
    step: '03',
    title: 'Monsoon Ripening',
    subtitle: 'Cherries swell slowly under canopy shade',
  },
  {
    step: '04',
    title: 'Winter Hand-Picking',
    subtitle: 'Selective red-cherry harvesting by hand',
  },
  {
    step: '05',
    title: 'Wood-Fired Roast',
    subtitle: 'Micro-batch cast-iron roast in Kalasa',
  },
];

export const STEWARDSHIP_PILLARS = [
  {
    number: 'PILLAR 01',
    title: 'Shade Canopy Ecology',
    description:
      'We cultivate heirloom Arabica varieties beneath three tiers of indigenous rainforest canopy—wild figs, jackfruit, silver oaks, and rosewoods—filtering fierce sun and sheltering over 90 migratory bird species.',
    footer: 'Zero clear-cutting',
  },
  {
    number: 'PILLAR 02',
    title: 'Dammar Bee Guardianship',
    description:
      'We ban synthetic neonicotinoids and glyphosates entirely. Our 42 natural hive boxes mimic hollow jungle trunks, protecting native bees that have pollinated the Malnad ghats for thousands of seasons.',
    footer: 'Pesticide-free sanctuary',
  },
  {
    number: 'PILLAR 03',
    title: 'Living Slowness & Craft',
    description:
      'We reject industrial rush. Our coffee undergoes extended mountain fermentation, sourdough breads slow-ferment for 48 hours, and coffee is roasted in micro-batches over cast-iron drums on demand.',
    footer: 'Unrushed artisanal touch',
  },
  {
    number: 'PILLAR 04',
    title: 'Fair Farmer Stewardship',
    description:
      'Direct trade is not a slogan for us; it is family heritage. We buy directly from 14 surrounding Malnad tribal and smallholder planter families, paying a guaranteed premium 40% above fair-market baseline rates.',
    footer: 'Direct community trade',
  },
];

export const CUSTODIANS = [
  {
    id: 'cus-naveen',
    badge: '3rd Generation Planter',
    name: 'Naveen Hegde',
    role: 'Founder & Agro-Ecologist',
    bio: 'Born and raised on the slopes of Kalasa, Naveen shifted the ancestral plantation from intensive monoculture back to ancestral multi-layer canopy agroforestry in 2010.',
    expertise: 'Soil & Canopy Biology',
    image: IMAGES.farmerHarvest,
  },
  {
    id: 'cus-maya',
    badge: 'SCA Certified Q-Grader',
    name: 'Maya Shenoy',
    role: 'Head Barista & Sensory Lead',
    bio: 'With over a decade of specialty coffee cupping, Maya developed our signature honey-infused brew profiles, calibrating grind and temperature to elevate delicate blossom notes.',
    expertise: 'Terroir Extraction & Roasting',
    image: IMAGES.baristaPourover,
  },
  {
    id: 'cus-chandrashekar',
    badge: 'Master Apiarist',
    name: 'Chandrashekar Gowda',
    role: 'Native Apiary Conservationist',
    bio: 'An indigenous naturalist with lifelong knowledge of Malnad forest flora, Chandrashekar oversees all 42 stingless dammar colonies, ensuring gentle extraction and hive wellness.',
    expertise: 'Indigenous Bee Ecology',
    image: IMAGES.planterApiarist,
  },
];

export const LEAD_DISPATCH: BlogArticle = {
  id: 'lead-pre-monsoon-blossom',
  volume: 'Vol. 14',
  studyTitle: 'Kudremukha Micro-Terroir Study',
  kicker: 'Western Ghats Agro-Ecology Series',
  category: 'Coffee Agroforestry',
  tags: ['Harvest Report', 'Native Apiculture', '18 March 2025'],
  readTime: '7 min read',
  audioDuration: '6:48',
  author: 'Naveen Hegde & Chandrashekar Gowda',
  authorRole: 'Agro-Ecologist (C.C.B) & Indigenous Apiarist, Kalasa Field Station',
  published: 'March 21, 2025',
  title: 'The Pre-Monsoon Blossom Shower:',
  titleHighlight: 'How Stingless Dammar Bees',
  titleEnd: 'Set the Terroir of Kudremukha Arabica',
  deck: 'A botanical observation of the seven-day equinox bloom in Kalasa. When the early showers wake the white jasmine canopies, 42 colonies of tiny Tetragonula iridipennis bees perform an ancient enzymatic imprinting that commercial hives cannot replicate.',
  excerpt:
    'When the first thunderstorm breaks over Kalasa in late March, thirty thousand coffee trees bloom white in a single dawn. For seven days, our forty-two native stingless dammar bee colonies work uninterrupted, sealing wild forest floral nectar into the embryonic fruit and creating the rare stone-fruit sweetness of our washed lot.',
  metrics: [
    {label: 'Bloom Window', value: '7 Days', sub: 'March 14–21 Equinox'},
    {label: 'Active Colonies', value: '42 Hives', sub: 'T. iridipennis (Dammar)'},
    {label: 'Brix Sugar Spike', value: '+18.4%', sub: 'Floral Nectar & Juice Transfer'},
    {label: 'Micro-Lot Yield', value: '140 Bags', sub: 'Single-Origin Washed Lot'},
  ],
  image: IMAGES.coffeeBlossomsBees,
  secondaryImage: IMAGES.kalasaMist,
  figure1Caption:
    'Fig. 1.1 — Stingless dammar bee (Tetragonula iridipennis) hovering off white coffee flower calyx at 6:12 AM (3,800 ft elevation).',
  figure1Meta: 'Captured at ISO 140 · f/2.8 · 1/500s · 85mm',
  figure2Caption:
    'Fig. 1.2 — Plot 04 shade-canopy at 1,240m MSL showing silver oak and native canopy over the terraced Arabica slopes.',
  section1: {
    kicker: 'Section 01 · Phenology of March Equinox',
    heading: 'The Fleeting Seven-Day Window',
    paragraphs: [
      'At three in the morning over the Bababudangiri and Kudremukha ridgelines, the heavy Western Ghats air shifts without warning. The barometer plummets, and within thirty minutes, the parchment-dry red soils of Kalasa receive thirty-two millimeters of torrential, sweet mountain rain. In the vernacular of Malnad planters, this is the Koledu shower—the blossom rain that awakens sixty thousand coffee trees from their dry winter dormancy.',
      'By dawn of day three, forty-two contiguous acres of shaded Arabica transform into an unbroken white ocean. The olfactory wave is immediate: intense mountain jasmine, green citrus, and candied ginger blossom. But the flowering of high-altitude Arabica is ruthlessly brief. Within seven days, every single white corolla wilts and falls to the carpet of fallen teak leaves, leaving behind the pin-sized ovary that will ripen into next winter’s coffee cherry.',
    ],
    calloutTitle: 'The Micro-Climatic Advantage of Native Bees',
    calloutText:
      'Standard Italian honeybees (Apis mellifera) demand ambient temperatures above 18°C and sunlight before departing their hives. In contrast, Kalasa’s native dammar bees (Tetragonula iridipennis), sheltered inside hollow ancient jackfruit trees, begin foraging at 5:45 AM through thick highland mist at 12°C. They reach the bloom four hours before any commercial hives awaken.',
    pullQuote:
      'In seven fleeting days, our forty-two colonies work uninterrupted, sealing wild forest floral nectar into the embryonic fruit and creating the rare stone-fruit sweetness of our washed lot.',
    pullQuoteAuthor: 'Chandrashekar Gowda, Head of Sustainable Apiculture, Cafe Coffee Bee',
  },
  section2: {
    kicker: 'Section 02 · Biochemical Fingerprinting',
    heading: 'Enzymatic Imprinting & The Trehalulose Secret',
    paragraphs: [
      'What makes stingless dammar bee pollination fundamentally distinct from standard apiculture is their unique oral secretions and nesting ecology. Unlike stinging bees who construct comb with beeswax, Tetragonula iridipennis build their brood cells from cerumen—a complex biological resin composed of tree sap, propolis, and salivary enzymes collected from surrounding wild Malnad flora.',
      'When a dammar bee enters the deep tubular corolla of the Arabica flower, its microscopic body (scarcely four millimeters in length) brushes past the floral stigmas, depositing traces of wild propolis and converting sucrose-heavy nectar into Trehalulose—a rare low-glycemic structural disaccharide with high natural antioxidant properties. This enzymatic transfer shields the newly fertilized coffee seed from fungal stress during the humid pre-monsoon weeks.',
    ],
    tableTitle: 'Comparative Pollination Dynamics',
    tableSubtitle: 'Field Trials Conducted across Plots 04–07 (Elevation: 3,750–3,920 ft)',
    colA: 'Dammar Bee (Tetragonula)',
    colB: 'Commercial Bee (Apis mellifera)',
    rows: [
      {
        metric: 'Body Scale & Petal Access',
        valueA: '3.8 mm (Deep Corolla Insertion)',
        valueB: '12.5 mm (Shallow Surface Only)',
      },
      {
        metric: 'Nectar Moisture Content',
        valueA: '24–28% (Enzymatically Stabilized)',
        valueB: '16–18% (Standard Honey)',
      },
      {
        metric: 'Terpene Fixation (Linalool)',
        valueA: '+24% Jasmine Volatile Retention',
        valueB: 'Baseline Control (+0%)',
      },
      {
        metric: 'Fruit Set Efficiency',
        valueA: '88.2% Healthy Cherry Nodes',
        valueB: '71.6% Healthy Cherry Nodes',
      },
    ],
  },
  section3: {
    kicker: 'Section 03 · Sensory Profiling & Brewing',
    heading: 'From Branch to Brew: What You Taste in the Cup',
    intro:
      'When this particular washed micro-lot reaches our roastery at Cafe Coffee Bee in Kalasa, our head roasters apply a gentle, elongated Maillard roast curve. Because the bean’s cellular density is enriched by balanced natural sugars, harsh roast notes are dialed back in favor of transparent, floral aromatics.',
    lotCode: 'LOT #KCL-2025',
    radarAxes: [
      {label: 'Wild Honey', score: 92},
      {label: 'Ripe Apricot', score: 86},
      {label: 'Green Cardamom', score: 78},
      {label: 'Wildflower', score: 88},
      {label: 'Night Jasmine', score: 94},
    ],
    sensoryNotes: [
      'Wild Myrtle Honey',
      'Night Jasmine',
      'Green Cardamom',
      'Ripe Apricot',
    ],
    protocolTitle: 'Kalasa Pour-Over Protocol',
    protocolSubtitle: 'Designed for flat-bottom drippers (Kalita Wave 185) with mountain spring water.',
    waterTemp: '92.0°C',
    brewRatio: '1 : 16.5',
    grindSize: 'Medium-Coarse',
    targetDraw: '3m 15s',
    protocolNote:
      'Kudremukha spring water with TDS 65–75 ppm highlights the jasmine finish best.',
    acidityProfile: 'Phosphoric & Malic',
    acidityNote: 'Effervescent sensation mimicking green apple & stone fruit.',
    moisture: '10.2% Stable',
    moistureNote: 'Achieved via slow drying under parabolic netting for 19 days.',
    cuppingScore: '89.5 Points',
    cuppingNote: 'Certified Specialty Grade micro-lot with supreme cleanliness.',
  },
  fieldObservation:
    'Recorded at Plot 04 (1,240m MSL) following 32mm of March blossom rain.',
  bodyParagraphs: [
    'Every spring in the Kudremukha foothills begins with silence and dust. For six weeks following the winter harvest, our shade-grown Selection 795 and Kent Arabica branches rest in tight dormancy, holding tiny pale-green buds along every node until the first March afternoon thunderstorm breaks across the Bhadra valley.',
    'Within forty-eight hours of that single shower, thirty thousand coffee shrubs burst simultaneously into snow-white jasmine-scented flowers. The canopy turns white overnight. That narrow seven-day bloom window decides the entire sensory arc of next winter’s harvest.',
    'Unlike imported European honeybees, our indigenous stingless dammar bees (Tetragonula iridipennis) thrive in misty, shaded rainforest corridors. Measuring barely four millimeters long, they slip effortlessly into dense understory branches at dawn when mist still lingers at 82% humidity.',
    'Cross-pollination by dammar colonies raises cherry sugar density by an average of +18.4% Brix while suppressing uneven twin-berry deformities. When we wash and sun-dry these micro-lots on raised bamboo tables ten months later, that spring symbiosis surfaces in the cup as bright stone-fruit sweetness and lingering white-tea florals.',
  ],
};

export const DISPATCH_ESSAYS: BlogArticle[] = [
  {
    id: 'essay-dammar-chemistry',
    volume: 'Vol. 13',
    studyTitle: 'Spectroscopic Honey Study',
    kicker: 'Stingless Bee Ecology Series',
    category: 'Stingless Bee Ecology',
    tags: ['Biochemistry', 'Dammar Honey', 'February 2025'],
    readTime: '6 min read',
    audioDuration: '5:32',
    author: 'Maya Shenoy',
    authorRole: 'Head Barista & SCA Q-Grader, Kalasa Roastery',
    published: 'February 18, 2025',
    title: 'The Chemistry of Wild Forest Honey:',
    titleHighlight: 'Enzymatic Differences',
    titleEnd: 'Between Dammar Bee Nectar and Commercial Honey',
    deck: 'A spectroscopic breakdown reveals high trehalulose content, low natural sucrose, and an extraordinarily dense concentration of antimicrobial phytochemicals harvested from Western Ghats tree trunks.',
    excerpt:
      'A spectroscopic breakdown reveals high trehalulose content, low natural sucrose, and an extraordinarily dense concentration of antimicrobial phytochemicals harvested from Western Ghats tree trunks.',
    metrics: [
      {label: 'Trehalulose Share', value: '45.2%', sub: 'Low-glycemic disaccharide'},
      {label: 'Moisture Level', value: '21.4%', sub: 'Living enzyme active'},
      {label: 'Antioxidant ORAC', value: '3.4x', sub: 'vs. filtered clover honey'},
      {label: 'Cerumen Maturation', value: '90 Days', sub: 'Hollow jackfruit hives'},
    ],
    image: IMAGES.forestHoneyJars,
    secondaryImage: IMAGES.honeyCinnamonLatte,
    figure1Caption:
      'Fig. 2.1 — Raw small-batch amber honey stored in traditional glass apothecary vessels after cold gravity straining.',
    figure1Meta: 'Kalasa Apiary Lab · Batch 04/2025',
    figure2Caption:
      'Fig. 2.2 — Dammar honey folded directly into espresso cortados preserves bright citrus acidity.',
    section1: {
      kicker: 'Section 01 · Nectar Enzymology',
      heading: 'Why Wild Pot-Honey Tastes Alive',
      paragraphs: [
        'Take one spoonful of raw dammar bee honey beside supermarket clover honey and the contrast is unmistakable before it even touches your palate. Wild stingless bee honey arrives bright, tangy, slightly resinous, and alive with fermented forest fruit rather than flat cane sweetness.',
        'Unlike commercial Apis mellifera honeys dominated by sucrose and glucose, Tetragonula iridipennis honey stores up to 45% of its sugars as trehalulose—a rare low-glycemic disaccharide formed enzymatically inside the bees’ propolis-lined cerumen pots.',
      ],
      calloutTitle: 'The Propolis Cerumen Pot Effect',
      calloutText:
        'Stingless bees never build hexagonal wax combs. Instead, they craft spherical resin pots from wild tree saps and propolis, allowing slow natural lacto-fermentation that stabilizes moisture without heat pasteurization.',
      pullQuote:
        'Because cerumen pots sit inside hollow jackfruit trunks for months, the nectar absorbs volatile terpenes from wild forest resins.',
      pullQuoteAuthor: 'Maya Shenoy, SCA Q-Grader & Sensory Lead',
    },
    section2: {
      kicker: 'Section 02 · Spectroscopic Comparison',
      heading: 'Trehalulose vs. Commercial Sucrose Profiles',
      paragraphs: [
        'In our espresso bar, that natural organic acidity brightens dark-roasted chocolate tones instead of turning a cortado cloying. Below is the laboratory analysis comparing our Kalasa Plot 04 harvest against pasteurized commercial wildflower honey.',
      ],
      tableTitle: 'Sugar & Enzyme Breakdown',
      tableSubtitle: 'HPLC Carbohydrate Assay · Chikmagalur Apiary Cooperative',
      colA: 'Kalasa Dammar Honey',
      colB: 'Commercial Pasteurized Honey',
      rows: [
        {metric: 'Trehalulose Content', valueA: '45.2% (Dominant)', valueB: '< 1.0% (Trace)'},
        {metric: 'Free Sucrose', valueA: '1.4% (Ultra-low)', valueB: '8.5% – 14.0%'},
        {metric: 'Total Polyphenols', valueA: '1,420 mg GAE/kg', valueB: '380 mg GAE/kg'},
        {metric: 'Diastase Enzyme Activity', valueA: '28.4 Schade units', valueB: '4.1 (Heat degraded)'},
      ],
    },
    section3: {
      kicker: 'Section 03 · Espresso Integration',
      heading: 'Pairing Raw Pot-Honey with Espresso',
      intro:
        'Because dammar honey melts seamlessly at 62°C without scorching volatile floral aromatics, we add it to the porcelain vessel before pulling the ristretto.',
      lotCode: 'APIARY #DM-04',
      radarAxes: [
        {label: 'Tangy Citrus', score: 90},
        {label: 'Propolis Resin', score: 82},
        {label: 'Cardamom', score: 75},
        {label: 'Wild Berry', score: 85},
        {label: 'Clean Finish', score: 88},
      ],
      sensoryNotes: ['Tamarind Tang', 'Forest Resin', 'Green Cardamom', 'Wild Berry'],
      protocolTitle: 'Honey Cortado Calibration',
      protocolSubtitle: 'Balanced to preserve living honey enzymes below pasteurization thresholds.',
      waterTemp: '62.0°C Milk',
      brewRatio: '1 : 2 Ristretto',
      grindSize: 'Fine Espresso',
      targetDraw: '28s Pull',
      protocolNote: 'Never stir honey into boiling water above 68°C to retain diastase enzymes.',
      acidityProfile: 'Gluconic & Citric',
      acidityNote: 'Brightens medium-dark roasted cocoa notes without bitterness.',
      moisture: '21.4% Raw',
      moistureNote: 'Cold-strained through raw cotton mesh only.',
      cuppingScore: 'Batch 04 Reserve',
      cuppingNote: 'Limited to 180 jars per post-monsoon harvest.',
    },
    fieldObservation:
      'Spectroscopic moisture measured at 21.4% with natural trehalulose dominance.',
    bodyParagraphs: [
      'Take one spoonful of raw dammar bee honey beside supermarket clover honey and the contrast is unmistakable before it even touches your palate. Wild stingless bee honey arrives bright, tangy, slightly resinous, and alive with fermented forest fruit rather than flat cane sweetness.',
      'Unlike commercial Apis mellifera honeys dominated by sucrose and glucose, Tetragonula iridipennis honey stores up to 45% of its sugars as trehalulose—a rare low-glycemic disaccharide formed enzymatically inside the bees’ propolis-lined cerumen pots.',
      'Because these cerumen pots sit inside hollow jackfruit and rosewood trunks for months before harvest, the nectar absorbs volatile terpenes and polyphenolic acids from wild forest resins. In our espresso bar, that natural organic acidity brightens dark-roasted chocolate tones instead of turning a cortado cloying.',
    ],
  },
  {
    id: 'essay-canopy-stratification',
    volume: 'Vol. 12',
    studyTitle: 'Three-Tier Rainforest Canopy Study',
    kicker: 'Coffee Agroforestry Series',
    category: 'Coffee Agroforestry',
    tags: ['Agroforestry', 'Biodiversity', 'January 2025'],
    readTime: '5 min read',
    audioDuration: '4:50',
    author: 'Naveen Hegde',
    authorRole: 'Founder & Agro-Ecologist, Cafe Coffee Bee',
    published: 'January 14, 2025',
    title: 'Shade Canopy Stratification:',
    titleHighlight: 'Why We Plant Three Tiers',
    titleEnd: 'of Native Trees Instead of Monoculture',
    deck: 'How multi-layered tropical foliage mimics old-growth rainforest, moderates temperature swings by up to 5°C, and nurtures 92 migratory bird species across the Bhadra river basin.',
    excerpt:
      'How multi-layered tropical foliage mimics old-growth rainforest, moderates temperature swings by up to 5°C, and nurtures 92 migratory bird species across the Bhadra river basin.',
    metrics: [
      {label: 'Canopy Tiers', value: '3 Layers', sub: 'Emergent, Mid & Understory'},
      {label: 'Temp Moderation', value: '-5.2°C', sub: 'Peak afternoon cooling'},
      {label: 'Avian Species', value: '92 Birds', sub: 'Annual Bhadra bird count'},
      {label: 'Soil Moisture', value: '+34%', sub: 'Dry-season retention'},
    ],
    image: IMAGES.kalasaMist,
    secondaryImage: IMAGES.farmerHarvest,
    figure1Caption:
      'Fig. 3.1 — Three-tier shade canopy filtering early sunbeams across our Kalasa Arabica terraces.',
    figure1Meta: 'Upper Ridge Plot · 3,850 ft',
    figure2Caption:
      'Fig. 3.2 — Understory cherries ripening evenly beneath dappled jackfruit and pepper-vine shade.',
    section1: {
      kicker: 'Section 01 · Rainforest Architecture',
      heading: 'Rejecting Full-Sun Monoculture',
      paragraphs: [
        'Full-sun coffee produces fast yields for five years and exhausted soil for twenty. When our family began restoring the upper Kalasa slopes in 2010, we replaced single-species silver oak stands with a deliberate three-tier native rainforest canopy.',
        'At the uppermost canopy layer—twenty-five to thirty meters overhead—emergent wild fig (Ficus) and rosewood giants filter afternoon UV glare. Below them sits a mid-canopy of native jackfruit, wild nutmeg, and black pepper vines climbing every trunk. Beneath both layers, Arabica shrubs receive dappled 45% sunlight.',
      ],
      calloutTitle: 'Natural Leaf-Litter Mulching',
      calloutText:
        'Each acre of multi-species forest canopy drops nearly 4.2 metric tons of organic leaf litter annually, feeding fungal mycorrhizal networks that keep our red laterite soil supple without chemical fertilizers.',
      pullQuote:
        'This living roof locks moisture into the laterite slopes through dry February afternoons while cradling ninety-two Western Ghats bird species.',
      pullQuoteAuthor: 'Naveen Hegde, Founder & Agro-Ecologist',
    },
    section2: {
      kicker: 'Section 02 · Microclimate Data',
      heading: 'Canopy vs. Sun-Exposed Plot Metrics',
      paragraphs: [
        'Temperature loggers placed across our shaded plots and neighboring cleared hillsides reveal dramatic protection against heat-induced cherry sunburn.',
      ],
      tableTitle: 'Micro-Climatic Plot Comparison',
      tableSubtitle: 'Recorded Feb–April Dry Season · 1,240m MSL',
      colA: '3-Tier Native Canopy',
      colB: 'Monoculture / Open Sun',
      rows: [
        {metric: 'Midday Leaf Temperature', valueA: '24.6°C (Optimal)', valueB: '31.4°C (Heat Stress)'},
        {metric: 'Topsoil Humus Carbon', valueA: '4.8% Organic Carbon', valueB: '1.6% Organic Carbon'},
        {metric: 'Cherry Maturation Span', valueA: '8.5 Months (Slow)', valueB: '6.0 Months (Rushed)'},
        {metric: 'Bird & Pollinator Count', valueA: '92 Species Observed', valueB: '14 Species Observed'},
      ],
    },
    section3: {
      kicker: 'Section 03 · Cup Impact',
      heading: 'Slow Ripening Equals Dense Sugars',
      intro:
        'Because shade slows cherry maturation by ten extra weeks, the coffee seed packs higher citric acids and sucrose precursors before winter harvest.',
      lotCode: 'PLOT #04 SHADE',
      radarAxes: [
        {label: 'Sweet Cocoa', score: 88},
        {label: 'Ripe Plum', score: 84},
        {label: 'Nutty Praline', score: 82},
        {label: 'Body Weight', score: 86},
        {label: 'Clean Finish', score: 90},
      ],
      sensoryNotes: ['Ripe Plum', 'Roasted Praline', 'Dark Cocoa', 'Wild Fig'],
      protocolTitle: 'Estate French Press Brew',
      protocolSubtitle: 'Highlights the syrupy body produced by slow-ripened shade cherries.',
      waterTemp: '93.5°C',
      brewRatio: '1 : 15.0',
      grindSize: 'Coarse',
      targetDraw: '4m 00s',
      protocolNote: 'Skim the top crust at 3:30 before plunging gently.',
      acidityProfile: 'Balanced Malic',
      acidityNote: 'Juicy plum sweetness without harsh sharpness.',
      moisture: '10.4% Stable',
      moistureNote: 'Raised-bed sun dried under filtered canopy shade.',
      cuppingScore: '88.25 Points',
      cuppingNote: 'Consistent estate flagship lot across three harvests.',
    },
    fieldObservation:
      'Soil moisture retention increases 34% during peak dry-season February weeks.',
    bodyParagraphs: [
      'Full-sun coffee produces fast yields for five years and exhausted soil for twenty. When our family began restoring the upper Kalasa slopes in 2010, we replaced single-species silver oak stands with a deliberate three-tier native rainforest canopy.',
      'At the uppermost canopy layer—twenty-five to thirty meters overhead—emergent wild fig (Ficus) and rosewood giants filter afternoon UV glare. Below them sits a mid-canopy of native jackfruit, wild nutmeg, and black pepper vines climbing every trunk. Beneath both layers, Arabica shrubs receive dappled 45% sunlight.',
      'This living roof drops leaf litter year-round, building dark fungal-rich humus that locks moisture into the laterite slopes through dry February afternoons while cradling ninety-two resident and migratory Western Ghats bird species.',
    ],
  },
  {
    id: 'essay-water-mineralization',
    volume: 'Vol. 11',
    studyTitle: 'Bhadra Spring Hydrology',
    kicker: 'Brewing Rituals Series',
    category: 'Brewing Rituals',
    tags: ['Water Chemistry', 'Pour-Over', 'December 2024'],
    readTime: '4 min read',
    audioDuration: '4:15',
    author: 'Maya Shenoy',
    authorRole: 'Head Barista & SCA Q-Grader',
    published: 'December 12, 2024',
    title: 'Dialing In the Kalasa Pour-Over:',
    titleHighlight: 'Water Mineralization',
    titleEnd: 'from Kudremukha Natural Springs',
    deck: 'Why the mineral profile of local mountain spring runoff unlocks delicate jasmine florals that reverse osmosis water completely flattens.',
    excerpt:
      'Why the mineral profile of local mountain spring runoff unlocks delicate jasmine florals that reverse osmosis water completely flattens.',
    metrics: [
      {label: 'Total Dissolved Solids', value: '68 ppm', sub: 'Natural spring ideal'},
      {label: 'Mg : Ca Ratio', value: '2 : 1', sub: 'Floral aroma binding'},
      {label: 'Alkalinity (KH)', value: '28 ppm', sub: 'Preserves bright acidity'},
      {label: 'Brew pH', value: '7.1', sub: 'Neutral mountain balance'},
    ],
    image: IMAGES.baristaPourover,
    secondaryImage: IMAGES.kalasaCappuccino,
    figure1Caption:
      'Fig. 4.1 — Hand-pouring spring water at 92.0°C over freshly ground Kudremukha Arabica.',
    figure1Meta: 'Manual Brew Bar · Kalasa',
    figure2Caption:
      'Fig. 4.2 — Proper magnesium balance boosts crema stability and aromatic clarity.',
    section1: {
      kicker: 'Section 01 · The Invisible 98%',
      heading: 'Why City RO Water Mutes Mountain Coffee',
      paragraphs: [
        'Every cup of pour-over is ninety-eight percent water, yet water chemistry remains the quietest variable in specialty coffee. When travelers take our Kudremukha Mist beans back to city apartments running heavy RO purifiers, they often call asking why the jasmine note vanished.',
        'Kalasa’s spring streams percolate slowly through weathered gneiss and iron-rich laterite rock, emerging naturally balanced around 68 ppm total dissolved solids with gentle magnesium ions and low bicarbonate alkalinity.',
      ],
      calloutTitle: 'Magnesium as an Aroma Magnet',
      calloutText:
        'Magnesium ions carry a small, tight charge radius that binds oxygen-rich floral esters and berry acids directly during extraction, letting delicate florals shine without astringency.',
      pullQuote:
        'At the bar, we pass raw spring water through ceramic micro-filtration alone—never stripping its mountain signature.',
      pullQuoteAuthor: 'Maya Shenoy, Head Barista & Sensory Lead',
    },
    section2: {
      kicker: 'Section 02 · Mineral Assay',
      heading: 'Spring Water vs. Municipal RO Water',
      paragraphs: [
        'Side-by-side refractometer and titration tests show how mineral balance dictates extraction yield.',
      ],
      tableTitle: 'Brew Water Mineral Comparison',
      tableSubtitle: 'Tested at Cafe Coffee Bee Brew Lab · 1,200m Elevation',
      colA: 'Kalasa Ceramic-Filtered Spring',
      colB: 'Standard City RO Water',
      rows: [
        {metric: 'Total Dissolved Solids', valueA: '68 ppm (Balanced)', valueB: '14 ppm (Flat / Empty)'},
        {metric: 'Magnesium (Mg2+)', valueA: '14 mg/L', valueB: '2 mg/L'},
        {metric: 'Bicarbonate Buffer', valueA: '28 mg/L', valueB: '8 mg/L'},
        {metric: 'Extraction Yield', valueA: '21.2% Sweet & Crisp', valueB: '18.4% Sour / Hollow'},
      ],
    },
    section3: {
      kicker: 'Section 03 · Home Recipe',
      heading: 'Recreating Kalasa Water at Home',
      intro:
        'If your home filter drops TDS below 30 ppm, add a pinch of magnesium-rich mineral drops to restore floral vibrancy.',
      lotCode: 'BREW #H2O-68',
      radarAxes: [
        {label: 'Jasmine', score: 94},
        {label: 'Bergamot', score: 86},
        {label: 'Sweetness', score: 88},
        {label: 'Clarity', score: 95},
        {label: 'Aftertaste', score: 87},
      ],
      sensoryNotes: ['White Jasmine', 'Bergamot', 'Cane Sugar', 'Crisp Spring'],
      protocolTitle: 'V60 Three-Pulse Pour',
      protocolSubtitle: 'Clean conical extraction for maximum floral lift.',
      waterTemp: '92.0°C',
      brewRatio: '1 : 16.0',
      grindSize: 'Medium-Fine',
      targetDraw: '2m 50s',
      protocolNote: '45g bloom for 40 seconds, followed by two concentric pours.',
      acidityProfile: 'Crisp Citric',
      acidityNote: 'Sweet mandarin sparkle across cooling temperatures.',
      moisture: '68 ppm Water',
      moistureNote: 'Zero reverse-osmosis remineralization required on-site.',
      cuppingScore: '21.2% EY',
      cuppingNote: 'Optimal sweet extraction zone verified via refractometer.',
    },
    fieldObservation:
      'Target brew water: 68 ppm TDS, balanced magnesium-to-calcium 2:1.',
    bodyParagraphs: [
      'Every cup of pour-over is ninety-eight percent water, yet water chemistry remains the quietest variable in specialty coffee. When travelers take our Kudremukha Mist beans back to city apartments running heavy RO purifiers, they often call asking why the jasmine note vanished.',
      'Kalasa’s spring streams percolate slowly through weathered gneiss and iron-rich laterite rock, emerging naturally balanced around 68 ppm total dissolved solids with gentle magnesium ions and low bicarbonate alkalinity.',
      'Magnesium binds effortlessly to delicate aromatic esters and berry acids in light-roasted Arabica, while keeping alkalinity low prevents dulling the citrus sparkle. At the bar, we pass raw spring water through ceramic micro-filtration alone—never stripping its mountain signature.',
    ],
  },
  {
    id: 'essay-cold-fermentation',
    volume: 'Vol. 10',
    studyTitle: '48-Hour Stoneware Fermentation',
    kicker: 'Coffee Agroforestry Series',
    category: 'Coffee Agroforestry',
    tags: ['Fermentation', 'Micro-Lot', 'November 2024'],
    readTime: '8 min read',
    audioDuration: '7:12',
    author: 'Naveen Hegde & Maya Shenoy',
    authorRole: 'Agro-Ecologist & Head Q-Grader',
    published: 'November 28, 2024',
    title: '48-Hour Cold Fermentation:',
    titleHighlight: 'Reimagining Malnad',
    titleEnd: 'Honey-Processed Micro-Lots',
    deck: 'An experimental processing trial investigating native airborne yeasts inoculated from stingless bee hives, yielding an unprecedented 89.5 cupping score.',
    excerpt:
      'An experimental processing trial investigating native airborne yeasts inoculated from stingless bee hives, yielding an unprecedented 89.5 cupping score.',
    metrics: [
      {label: 'Tank Temp', value: '14.5°C', sub: 'Steady night cool'},
      {label: 'Ferment Duration', value: '48 Hours', sub: 'Stoneware vats'},
      {label: 'Cupping Score', value: '89.5 Pts', sub: 'Blind Q-panel'},
      {label: 'Lot Volume', value: '240 kg', sub: 'Single-day pick'},
    ],
    image: IMAGES.monsoonMalabar,
    secondaryImage: IMAGES.amberColdBrew,
    figure1Caption:
      'Fig. 5.1 — Small-batch fermented Lot 19 brewed via brass immersion to preserve silky fruit sugars.',
    figure1Meta: 'Wet Mill Trial · Lot 19',
    figure2Caption:
      'Fig. 5.2 — Chilled extractions reveal sparkling blackcurrant and toasted macadamia.',
    section1: {
      kicker: 'Section 01 · Controlled Microflora',
      heading: 'Elegance Without Overripe Funk',
      paragraphs: [
        'Most experimental anaerobic coffees lean loudly on boozy, overripe fruit notes that fatigue the palate after three sips. Our goal in Lot 19 was the opposite: calm, crystalline sweetness rooted strictly in Kalasa’s native microflora.',
        'By pulping hand-selected crimson cherries without water and resting the mucilage-coated parchment in cool stoneware vats at 14.5°C for forty-eight hours alongside trace wild hive yeast cultures, enzymatic breakdown slowed down cleanly.',
      ],
      calloutTitle: 'Zero Water Wet-Mill Processing',
      calloutText:
        'Cold stoneware fermentation cuts wet-mill water usage by 80% while retaining rich mucilage sugars directly around the parchment hull during drying.',
      pullQuote:
        'On the cupping table three months later, the blind score settled at 89.5—marked by silky blackcurrant and raw sugarcane finish.',
      pullQuoteAuthor: 'Naveen Hegde & Maya Shenoy',
    },
    section2: {
      kicker: 'Section 02 · Processing Trial',
      heading: 'Stoneware Cold vs. Open Tank Ferment',
      paragraphs: [
        'Temperature discipline kept acetic acid bacteria dormant while beneficial lactic strains elevated mouthfeel.',
      ],
      tableTitle: 'Fermentation Kinetics Comparison',
      tableSubtitle: 'Lot 19 Experimental Mill · November Harvest',
      colA: '48h Cold Stoneware (14.5°C)',
      colB: '24h Ambient Tank (26°C)',
      rows: [
        {metric: 'Final Mucilage pH', valueA: '4.15 (Clean Lactic)', valueB: '3.65 (Sharp Acetic)'},
        {metric: 'Drying Table Duration', valueA: '21 Days Parabolic', valueB: '14 Days Open Sun'},
        {metric: 'Dominant Aromatics', valueA: 'Blackcurrant & Macadamia', valueB: 'Dark Roast & Cocoa'},
        {metric: 'Blind SCA Score', valueA: '89.50 Points', valueB: '85.25 Points'},
      ],
    },
    section3: {
      kicker: 'Section 03 · Cupping Notes',
      heading: 'Blackcurrant, Macadamia & Sugarcane',
      intro:
        'Resting the green parchment in sealed GrainPro bags for 90 days before roasting unified the acidity.',
      lotCode: 'LOT #19-COLD',
      radarAxes: [
        {label: 'Blackcurrant', score: 91},
        {label: 'Sugarcane', score: 89},
        {label: 'Macadamia', score: 84},
        {label: 'Silky Body', score: 90},
        {label: 'Balance', score: 92},
      ],
      sensoryNotes: ['Blackcurrant', 'Macadamia', 'Raw Sugarcane', 'Silky Cocoa'],
      protocolTitle: '18h Gravity Cold Drip',
      protocolSubtitle: 'Unlocks deep berry sweetness with zero bitterness.',
      waterTemp: '4.0°C Ice',
      brewRatio: '1 : 10.0',
      grindSize: 'Medium',
      targetDraw: '18 Hours',
      protocolNote: 'Serve neat over one large hand-cut crystal ice cube.',
      acidityProfile: 'Silky Tartaric',
      acidityNote: 'Structured grape-like juiciness.',
      moisture: '10.1% Stable',
      moistureNote: 'Slow-cured on raised bamboo beds.',
      cuppingScore: '89.5 Points',
      cuppingNote: 'Highest scoring micro-lot of the 2024/25 season.',
    },
    fieldObservation:
      'Fermentation tank held steady at 14.5°C across two consecutive misty nights.',
    bodyParagraphs: [
      'Most experimental anaerobic coffees lean loudly on boozy, overripe fruit notes that fatigue the palate after three sips. Our goal in Lot 19 was the opposite: calm, crystalline sweetness rooted strictly in Kalasa’s native microflora.',
      'By pulping hand-selected crimson cherries without water and resting the mucilage-coated parchment in cool stoneware vats at 14.5°C for forty-eight hours alongside trace wild hive yeast cultures, enzymatic breakdown slowed down cleanly.',
      'On the cupping table three months later, the blind score settled at 89.5—marked by silky blackcurrant, toasted macadamia, and raw sugarcane finish without a trace of harsh vinegar.',
    ],
  },
  {
    id: 'essay-sourdough-brioche',
    volume: 'Vol. 09',
    studyTitle: 'Wild Honey Levain Study',
    kicker: 'Estate Recipes Series',
    category: 'Estate Recipes',
    tags: ['Bakery', 'Sourdough', 'October 2024'],
    readTime: '5 min read',
    audioDuration: '4:40',
    author: 'Chef Ananya Rao',
    authorRole: 'Head Baker, Sanctuary Hearth Kitchen',
    published: 'October 19, 2024',
    title: 'The Wild Honey Comb Brioche:',
    titleHighlight: 'Sourdough Starter Born',
    titleEnd: 'from Kalasa Forest Flora',
    deck: 'How our kitchen created an heirloom wild yeast starter using raw stingless bee honey, stone-milled wheat, and mountain rainwater for our signature cafe brioche.',
    excerpt:
      'How our kitchen created an heirloom wild yeast starter using raw stingless bee honey, stone-milled wheat, and mountain rainwater for our signature cafe brioche.',
    metrics: [
      {label: 'Cold Retard', value: '48 Hours', sub: 'Slow lactic rise'},
      {label: 'Hearth Temp', value: '195°C', sub: 'Cast-iron bake'},
      {label: 'Butter Culture', value: 'A2 Malnad', sub: 'Grass-fed cream'},
      {label: 'Starter Age', value: '3 Years', sub: 'Forest-captured levain'},
    ],
    image: IMAGES.honeyButterBrioche,
    secondaryImage: IMAGES.bakerySwirls,
    figure1Caption:
      'Fig. 6.1 — Golden sourdough brioche griddled in cultured butter with raw forest comb honey.',
    figure1Meta: 'Sanctuary Hearth · Baked 6:30 AM Daily',
    figure2Caption:
      'Fig. 6.2 — Morning tray of laminated cardamom honey rolls resting on oak racks.',
    section1: {
      kicker: 'Section 01 · Capturing Forest Yeasts',
      heading: 'A Levain Fed With Mountain Rain & Raw Honey',
      paragraphs: [
        'Commercial baker’s yeast rises in ninety minutes and leaves behind flat starch. Our bakery starter began three monsoons ago in a wide terracotta crock fed with stone-milled Khapli wheat, rain-fed spring water, and half a teaspoon of raw wildflower comb honey.',
        'Wild yeasts carried on unwashed coffee cherry skins and mountain pollen colonized the jar within four days, creating a gentle lactic levain with zero sharp sour bite—only warm yogurt and sweet grain aromatics.',
      ],
      calloutTitle: 'Why Sourdough Brioche Feels Lighter',
      calloutText:
        'A 48-hour cold ferment naturally breaks down complex gluten chains and phytic acid, yielding feather-light crumb structure rich in cultured butter aroma.',
      pullQuote:
        'Each loaf folds in cultured Malnad A2 butter and rests forty-eight hours before meeting our cast-iron hearth.',
      pullQuoteAuthor: 'Chef Ananya Rao, Sanctuary Hearth Kitchen',
    },
    section2: {
      kicker: 'Section 02 · Hearth Specifications',
      heading: 'Heirloom Levain vs. Commercial Baker’s Yeast',
      paragraphs: [
        'Patience transforms texture, digestibility, and caramelization on the griddle.',
      ],
      tableTitle: 'Fermentation & Crumb Comparison',
      tableSubtitle: 'Sanctuary Bakery Test Kitchen · Kalasa',
      colA: '48h Honey Levain Brioche',
      colB: '90m Instant Yeast Loaf',
      rows: [
        {metric: 'Proofing Schedule', valueA: '48h Cold Retard (4°C)', valueB: '90m Warm Proof'},
        {metric: 'Flour Base', valueA: 'Stone-Milled Khapli & T65', valueB: 'Bleached Roller Flour'},
        {metric: 'Sweetener', valueA: 'Raw Cliff Honey & Jaggery', valueB: 'Refined White Sugar'},
        {metric: 'Shelf Freshness', valueA: '4 Days Moist Crumb', valueB: 'Stales in 18 Hours'},
      ],
    },
    section3: {
      kicker: 'Section 03 · Table Pairing',
      heading: 'How We Serve It at Dawn',
      intro:
        'Sliced thick, toasted in brown butter until the edges crisp, and finished with flaky sea salt and fresh comb.',
      lotCode: 'BAKE #HB-48',
      radarAxes: [
        {label: 'Cultured Butter', score: 95},
        {label: 'Raw Honey', score: 90},
        {label: 'Toasted Walnut', score: 82},
        {label: 'Crumb Feather', score: 92},
        {label: 'Salt Balance', score: 86},
      ],
      sensoryNotes: ['Brown Butter', 'Warm Honeycomb', 'Toasted Walnut', 'Sea Salt'],
      protocolTitle: 'Morning Hearth Pairing',
      protocolSubtitle: 'Best paired alongside clean, high-acidity manual pour-overs.',
      waterTemp: '195°C Oven',
      brewRatio: '1 : 4 Butter',
      grindSize: 'Khapli Stone',
      targetDraw: '28m Bake',
      protocolNote: 'Pair with Kudremukha Mist V60 to cut through the rich honey butter.',
      acidityProfile: 'Mild Lactic',
      acidityNote: 'Soft yogurt sweetness with zero vinegar sharpness.',
      moisture: '64% Hydration',
      moistureNote: 'Enriched with free-range Malnad egg yolks.',
      cuppingScore: 'Daily 6:30 AM',
      cuppingNote: 'Served warm throughout morning veranda hours.',
    },
    fieldObservation:
      '48-hour cold retard fermentation before hearth baking at 195°C.',
    bodyParagraphs: [
      'Commercial baker’s yeast rises in ninety minutes and leaves behind flat starch. Our bakery starter began three monsoons ago in a wide terracotta crock fed with stone-milled Khapli wheat, rain-fed spring water, and half a teaspoon of raw wildflower comb honey.',
      'Wild yeasts carried on unwashed coffee cherry skins and mountain pollen colonized the jar within four days, creating a gentle lactic levain with zero sharp sour bite—only warm yogurt and sweet grain aromatics.',
      'Each batch of brioche dough folds in cultured Malnad A2 butter and rests forty-eight hours in cold storage before meeting our cast-iron hearth, emerging tender enough to pull apart in golden ribbons under melting honey butter.',
    ],
  },
];

