import React, {useState, useEffect} from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  Compass,
  Coffee,
  Sparkles,
} from 'lucide-react';
import {
  MenuItem,
  BlogArticle,
  GalleryPhoto,
  GALLERY_ITEMS,
} from '../data/cafeData';
import {ResilientImage} from './ResilientImage';

export interface CartEntry {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  quantity: number;
}

/* -------------------------------------------------------------------------- */
/* 1. RESERVE A TABLE / EXPERIENCE MODAL                                      */
/* -------------------------------------------------------------------------- */
interface ReserveModalProps {
  isOpen: boolean;
  initialRitual?: string;
  onClose: () => void;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({
  isOpen,
  initialRitual = 'Table Seating Only',
  onClose,
}) => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [date, setDate] = useState('2026-11-21');
  const [timeSlot, setTimeSlot] = useState('9:00 AM · Morning Mist');
  const [guests, setGuests] = useState('2 Guests');
  const [seating, setSeating] = useState('Bhadra River Teak Veranda');
  const [ritual, setRitual] = useState(initialRitual);
  const [error, setError] = useState('');
  const [confirmedCode, setConfirmedCode] = useState<string | null>(null);

  useEffect(() => {
    setRitual(initialRitual);
  }, [initialRitual]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      setError('Please enter your name and phone number or email.');
      return;
    }
    setError('');
    const code = `CCB-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedCode(code);
  };

  const resetAndClose = () => {
    setConfirmedCode(null);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A15]/60 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reserve-modal-title"
        className="w-full max-w-lg bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl shadow-warm-lg overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#D8C8AE] flex items-center justify-between bg-[#F5F0E5]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Kalasa Sanctuary Booking
            </p>
            <h2
              id="reserve-modal-title"
              className="font-serif text-2xl text-[#38291F]"
            >
              Reserve Your Veranda Table
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close reservation dialog"
            className="w-9 h-9 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#E5D3A9]/50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {confirmedCode ? (
            <div className="text-center py-4 space-y-4">
              <span className="w-12 h-12 rounded-full bg-[#263F2C] text-[#D9A441] inline-flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </span>
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#526447]">
                  Reservation Confirmed · {confirmedCode}
                </p>
                <h3 className="font-serif text-2xl text-[#38291F]">
                  Your table awaits, {guestName}.
                </h3>
                <p className="text-xs text-[#594132] max-w-sm mx-auto">
                  We have reserved the <strong>{seating}</strong> for{' '}
                  <strong>{guests}</strong> on <strong>{date}</strong> (
                  {timeSlot}).
                </p>
              </div>
              <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-4 text-left text-xs space-y-1.5 text-[#594132]">
                <p>
                  <strong className="text-[#38291F]">Experience:</strong>{' '}
                  {ritual}
                </p>
                <p>
                  <strong className="text-[#38291F]">Location:</strong> Bhadra
                  River Vista Rd, Main Plantation Junction, Kalasa
                </p>
                <p>
                  <strong className="text-[#38291F]">Contact:</strong>{' '}
                  {guestPhone}
                </p>
              </div>
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full h-11 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold cursor-pointer hover:bg-[#526447]"
              >
                Return to Sanctuary
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#38291F] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Aarav Rao"
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38291F] mb-1">
                    Phone or Email
                  </label>
                  <input
                    type="text"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98..."
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#38291F] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#7D5700]" />
                    <span>Visit Date</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#38291F] mb-1">
                    <Users className="w-3.5 h-3.5 text-[#7D5700]" />
                    <span>Party Size</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3–4 Guests</option>
                    <option>5–6 Guests</option>
                    <option>Private Estate Group (8+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-[#38291F] mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#7D5700]" />
                    <span>Preferred Slot</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  >
                    <option>7:30 AM · Sunrise Brew</option>
                    <option>9:00 AM · Morning Mist</option>
                    <option>11:00 AM · Estate Cupping</option>
                    <option>3:30 PM · Canopy Walk &amp; Tea</option>
                    <option>6:00 PM · Sunset Firepit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#38291F] mb-1">
                    Seating Zone
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                  >
                    <option>Bhadra River Teak Veranda</option>
                    <option>Glasshouse Espresso Hearth</option>
                    <option>Garden Firepit Courtyard</option>
                    <option>Manual Brew Bar Counter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#38291F] mb-1">
                  Optional Estate Experience
                </label>
                <select
                  value={ritual}
                  onChange={(e) => setRitual(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-sm text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                >
                  <option>Table Seating Only</option>
                  <option>Estate Cupping Ritual (₹450 / Guest)</option>
                  <option>Canopy Walk &amp; Dammar Apiary Tour (₹350 / Guest)</option>
                  <option>Wood-Fired Drum Roasting Session</option>
                </select>
              </div>

              {error && <p className="text-xs text-[#BA1A1A]">{error}</p>}

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#B96D35] hover:text-[#FAF8F0]"
              >
                Confirm Table Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 2. ORDER BAG SLIDE-OVER DRAWER                                             */
/* -------------------------------------------------------------------------- */
interface CartDrawerProps {
  isOpen: boolean;
  items: CartEntry[];
  onClose: () => void;
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) => {
  const [tableNote, setTableNote] = useState('Veranda Table · Dine-In');
  const [orderPlacedId, setOrderPlacedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const orderNum = `CCB-${Math.floor(100 + Math.random() * 900)}`;
    setOrderPlacedId(orderNum);
    onClearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#241A15]/60 backdrop-blur-sm"
      onClick={() => {
        setOrderPlacedId(null);
        onClose();
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Cafe Order Bag"
        className="w-full max-w-md bg-[#FAF8F0] h-full border-l border-[#D8C8AE] shadow-warm-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#D8C8AE] bg-[#F5F0E5] flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
              Kalasa Brew Bar
            </p>
            <h2 className="font-serif text-xl text-[#38291F]">
              Your Table Order
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setOrderPlacedId(null);
              onClose();
            }}
            aria-label="Close order bag"
            className="w-9 h-9 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#E5D3A9]/50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {orderPlacedId ? (
            <div className="py-10 text-center space-y-4">
              <span className="w-12 h-12 rounded-full bg-[#263F2C] text-[#D9A441] inline-flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </span>
              <h3 className="font-serif text-2xl text-[#38291F]">
                Order {orderPlacedId} Received
              </h3>
              <p className="text-xs text-[#594132] leading-relaxed max-w-xs mx-auto">
                Our baristas have started grinding your fresh Kalasa Arabica
                for <strong>{tableNote}</strong>. Ready in ~8–12 minutes.
              </p>
              <button
                type="button"
                onClick={() => {
                  setOrderPlacedId(null);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Coffee className="w-10 h-10 text-[#7D5700]/50 mx-auto" />
              <p className="font-serif text-lg text-[#38291F]">
                Your order tray is empty
              </p>
              <p className="text-xs text-[#594132] max-w-xs mx-auto">
                Explore our signature honey lattes, manual V60 pour-overs, or
                sourdough hearth brioches to begin an order.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-3.5 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-serif text-sm font-semibold text-[#38291F] truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-[#594132] tabular-nums">
                      ₹{item.price} · {item.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                      className="w-7 h-7 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] flex items-center justify-center text-[#38291F] cursor-pointer hover:bg-[#E5D3A9]/50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center text-xs font-semibold tabular-nums text-[#38291F]">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.id, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                      className="w-7 h-7 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] flex items-center justify-center text-[#38291F] cursor-pointer hover:bg-[#E5D3A9]/50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="w-7 h-7 rounded-lg text-[#594132] hover:text-[#BA1A1A] flex items-center justify-center cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="pt-3">
                <label className="block text-xs font-semibold text-[#38291F] mb-1.5">
                  Serving Preference
                </label>
                <select
                  value={tableNote}
                  onChange={(e) => setTableNote(e.target.value)}
                  className="w-full h-10 px-3 rounded-xl bg-[#F5F0E5] border border-[#D8C8AE] text-xs text-[#38291F] focus:outline-none focus:border-[#D9A441]"
                >
                  <option>Veranda Table · Dine-In</option>
                  <option>Garden Firepit Seating</option>
                  <option>Brew Bar Counter</option>
                  <option>Trailhead Express Takeaway</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && !orderPlacedId && (
          <div className="p-6 border-t border-[#D8C8AE] bg-[#F5F0E5] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#594132]">Estate Total (incl. taxes)</span>
              <span className="font-serif text-xl font-semibold text-[#38291F] tabular-nums">
                ₹{subtotal}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="w-full h-12 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold cursor-pointer transition-colors hover:bg-[#B96D35] hover:text-[#FAF8F0]"
            >
              Send Order to Brew Bar
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 3. ITEM TASTING NOTES MODAL                                                */
/* -------------------------------------------------------------------------- */
interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToOrder: (item: {
    id: string;
    name: string;
    price: number;
    category: string;
    image?: string;
  }) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToOrder,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A15]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-xl bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl overflow-hidden shadow-warm-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/9] bg-[#EDE8DD]">
          <ResilientImage
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close tasting notes"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FAF8F0]/90 text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#FAF8F0]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#526447]">
                {item.category} · {item.tag}
              </p>
              <h3 className="font-serif text-2xl text-[#38291F] mt-0.5">
                {item.name}
              </h3>
            </div>
            <span className="font-serif text-2xl font-semibold text-[#B96D35] tabular-nums">
              ₹{item.price}
            </span>
          </div>

          <p className="text-sm text-[#594132] leading-relaxed">
            {item.description}
          </p>

          <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-4 space-y-2 text-xs">
            {item.roastProfile && (
              <p>
                <strong className="text-[#38291F]">Roast / Origin:</strong>{' '}
                <span className="text-[#594132]">{item.roastProfile}</span>
              </p>
            )}
            {item.honeyPairing && (
              <p>
                <strong className="text-[#38291F]">Honey Pairing:</strong>{' '}
                <span className="text-[#594132]">{item.honeyPairing}</span>
              </p>
            )}
            {item.preparation && (
              <p>
                <strong className="text-[#38291F]">Barista Craft:</strong>{' '}
                <span className="text-[#594132]">{item.preparation}</span>
              </p>
            )}
            <p>
              <strong className="text-[#38291F]">Cupping Notes:</strong>{' '}
              <span className="text-[#263F2C] font-medium">
                {item.tastingNotes.join(' · ')}
              </span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onAddToOrder({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
                image: item.image,
              });
              onClose();
            }}
            className="w-full h-11 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-sm font-semibold cursor-pointer hover:bg-[#526447] transition-colors"
          >
            Add to Order — ₹{item.price}
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 4. ARTICLE READER MODAL                                                    */
/* -------------------------------------------------------------------------- */
interface ArticleReaderModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
}) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A15]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        role="dialog"
        aria-modal="true"
        className="w-full max-w-2xl bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl shadow-warm-lg overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#D8C8AE] bg-[#F5F0E5] flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold text-[#526447]">
            {article.category} · {article.readTime} · {article.published}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close article reader"
            className="w-8 h-8 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {article.image && (
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#D8C8AE]">
              <ResilientImage
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#38291F] leading-snug">
              {article.title}
            </h2>
            <p className="font-serif italic text-sm text-[#594132]">
              By {article.author}
            </p>
          </div>

          <div className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-4 text-xs text-[#7D5700] font-medium">
            Field Observation: {article.fieldObservation}
          </div>

          <div className="space-y-4 text-sm text-[#38291F]/90 leading-relaxed">
            {article.bodyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 5. GALLERY LIGHTBOX MODAL                                                  */
/* -------------------------------------------------------------------------- */
interface GalleryLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photo,
  onClose,
  onSelectPhoto,
}) => {
  if (!photo) return null;

  const idx = GALLERY_ITEMS.findIndex((p) => p.id === photo.id);
  const prevPhoto =
    GALLERY_ITEMS[(idx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length];
  const nextPhoto = GALLERY_ITEMS[(idx + 1) % GALLERY_ITEMS.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A15]/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-3xl bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl overflow-hidden shadow-warm-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-[#241A15]">
          <ResilientImage
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FAF8F0]/90 text-[#38291F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onSelectPhoto(prevPhoto)}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF8F0]/90 text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#FAF8F0]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => onSelectPhoto(nextPhoto)}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF8F0]/90 text-[#38291F] flex items-center justify-center cursor-pointer hover:bg-[#FAF8F0]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#526447]">
              {photo.location}
            </p>
            <h3 className="font-serif text-xl text-[#38291F]">{photo.title}</h3>
            <p className="text-xs text-[#594132] mt-1">{photo.caption}</p>
          </div>
          <span className="text-xs font-semibold text-[#7D5700] tabular-nums shrink-0">
            {idx + 1} / {GALLERY_ITEMS.length}
          </span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* 6. ESTATE EXPERIENCES MODAL                                                */
/* -------------------------------------------------------------------------- */
interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRitual: (ritualName: string) => void;
}

export const ExperienceModal: React.FC<ExperienceModalProps> = ({
  isOpen,
  onClose,
  onBookRitual,
}) => {
  if (!isOpen) return null;

  const experiences = [
    {
      title: 'Estate Cupping Ritual (₹450 / Guest)',
      schedule: 'Daily · 11:00 AM & 4:00 PM · 45 Mins',
      description:
        'Guided sensory flight of three seasonal Kudremukha single-origin Arabica micro-lots paired with raw dammar and cliff comb honeys.',
    },
    {
      title: 'Canopy Walk & Dammar Apiary Tour (₹350 / Guest)',
      schedule: 'Daily · 10:00 AM & 3:30 PM · 60 Mins',
      description:
        'Walk shaded three-tier rainforest coffee slopes with master apiarist Chandrashekar Gowda to observe our 42 stingless bee colonies.',
    },
    {
      title: 'Wood-Fired Iron Drum Roasting Session',
      schedule: 'Tuesday & Saturday Dusk · 5:30 PM',
      description:
        'Watch small-batch cast-iron drum roasting by dusk firelight and bring home a freshly sealed 250g tin of Kalasa Reserve.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241A15]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-2xl bg-[#FAF8F0] border border-[#D8C8AE] rounded-xl shadow-warm-lg overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#D8C8AE] bg-[#F5F0E5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Compass className="w-5 h-5 text-[#263F2C]" />
            <div>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#526447]">
                Kalasa Sanctuary Trails
              </p>
              <h2 className="font-serif text-xl text-[#38291F]">
                Estate Experiences &amp; Rituals
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close experiences"
            className="w-8 h-8 rounded-lg border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-[#F5F0E5] border border-[#D8C8AE] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold text-[#7D5700] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{exp.schedule}</span>
                </p>
                <h3 className="font-serif text-lg text-[#38291F]">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#594132] leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBookRitual(exp.title);
                }}
                className="px-4 py-2.5 rounded-xl bg-[#263F2C] text-[#FAF8F0] text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer hover:bg-[#526447]"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
