import {useState, useEffect} from 'react';
import {CheckCircle2} from 'lucide-react';
import {
  PageId,
  MenuItem,
  BlogArticle,
  GalleryPhoto,
  LEAD_DISPATCH,
} from './data/cafeData';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {HomePage} from './components/HomePage';
import {MenuPage} from './components/MenuPage';
import {AboutUsPage} from './components/AboutUsPage';
import {BlogsPage} from './components/BlogsPage';
import {BlogDetailPage} from './components/BlogDetailPage';
import {
  ReserveModal,
  CartDrawer,
  ItemDetailModal,
  GalleryLightbox,
  ExperienceModal,
  CartEntry,
} from './components/ModalsAndDrawers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] =
    useState<BlogArticle>(LEAD_DISPATCH);

  // Interactive Modal / Drawer States
  const [reserveOpen, setReserveOpen] = useState(false);
  const [reserveRitual, setReserveRitual] = useState('Table Seating Only');
  const [cartOpen, setCartOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [inspectedItem, setInspectedItem] = useState<MenuItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Order Bag State
  const [cartItems, setCartItems] = useState<CartEntry[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const navigate = (page: PageId, anchorId?: string) => {
    setCurrentPage(page);
    if (anchorId) {
      setPendingAnchor(anchorId);
    } else {
      setPendingAnchor(null);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const openArticleDetail = (article: BlogArticle) => {
    setSelectedArticle(article);
    setCurrentPage('blog-detail');
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    if (!pendingAnchor) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(pendingAnchor);
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
      setPendingAnchor(null);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [currentPage, pendingAnchor]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleAddToOrder = (item: {
    id: string;
    name: string;
    price: number;
    category: string;
    image?: string;
  }) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? {...entry, quantity: entry.quantity + 1}
            : entry
        );
      }
      return [...prev, {...item, quantity: 1}];
    });
    setToastMessage(`Added ${item.name} to your table tray`);
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((entry) =>
          entry.id === id
            ? {...entry, quantity: entry.quantity + delta}
            : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((entry) => entry.id !== id));
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E5] text-[#38291F]">
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenReserve={() => {
          setReserveRitual('Table Seating Only');
          setReserveOpen(true);
        }}
        onOpenCart={() => setCartOpen(true)}
        cartCount={totalCount}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onAddToOrder={handleAddToOrder}
            onOpenReserve={() => {
              setReserveRitual('Table Seating Only');
              setReserveOpen(true);
            }}
            onOpenGallery={(photo) => setActivePhoto(photo)}
            onOpenExperience={() => setExperienceOpen(true)}
            onInspectItem={(item) => setInspectedItem(item)}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            onNavigate={navigate}
            onAddToOrder={handleAddToOrder}
            onInspectItem={(item) => setInspectedItem(item)}
            onOpenReserve={() => {
              setReserveRitual('Estate Cupping Ritual (₹450 / Guest)');
              setReserveOpen(true);
            }}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage
            onNavigate={navigate}
            onOpenReserve={() => {
              setReserveRitual('Table Seating Only');
              setReserveOpen(true);
            }}
            onOpenExperience={() => setExperienceOpen(true)}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage
            onNavigate={navigate}
            onOpenReserve={() => {
              setReserveRitual('Table Seating Only');
              setReserveOpen(true);
            }}
            onOpenExperience={() => setExperienceOpen(true)}
            onReadArticle={openArticleDetail}
          />
        )}

        {currentPage === 'blog-detail' && (
          <BlogDetailPage
            article={selectedArticle}
            onBackToBlogs={() => navigate('blogs')}
            onSelectArticle={openArticleDetail}
            onNavigate={navigate}
            onOpenExperience={() => setExperienceOpen(true)}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        )}
      </main>

      <Footer
        onNavigate={navigate}
        onOpenReserve={() => {
          setReserveRitual('Table Seating Only');
          setReserveOpen(true);
        }}
      />

      {/* Interactive Overlays */}
      <ReserveModal
        isOpen={reserveOpen}
        initialRitual={reserveRitual}
        onClose={() => setReserveOpen(false)}
      />

      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <ItemDetailModal
        item={inspectedItem}
        onClose={() => setInspectedItem(null)}
        onAddToOrder={handleAddToOrder}
      />

      <GalleryLightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(photo) => setActivePhoto(photo)}
      />

      <ExperienceModal
        isOpen={experienceOpen}
        onClose={() => setExperienceOpen(false)}
        onBookRitual={(ritual) => {
          setReserveRitual(ritual);
          setReserveOpen(true);
        }}
      />

      {/* Subtle Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 bg-[#263F2C] text-[#FAF8F0] border border-[#526447] rounded-xl px-4 py-3 shadow-warm-lg flex items-center gap-3 text-xs font-medium"
        >
          <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
          <span>{toastMessage}</span>
          {totalCount > 0 && toastMessage.includes('table tray') && (
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="text-[#D9A441] font-semibold underline underline-offset-2 cursor-pointer"
            >
              View Tray
            </button>
          )}
        </div>
      )}
    </div>
  );
}
