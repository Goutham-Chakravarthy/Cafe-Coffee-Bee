import React, {useState} from 'react';
import {ShoppingBag, ArrowRight, Menu, X} from 'lucide-react';
import {PageId} from '../data/cafeData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenReserve: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenReserve,
  onOpenCart,
  cartCount,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: {label: string; page: PageId; anchor?: string}[] = [
    {label: 'Home', page: 'home'},
    {label: 'Menu', page: 'menu'},
    {label: 'Experience', page: 'home', anchor: 'experience'},
    {label: 'About Us', page: 'about'},
    {label: 'Gallery', page: 'home', anchor: 'gallery'},
    {label: 'Blogs', page: 'blogs'},
    {label: 'Contact', page: 'home', anchor: 'contact'},
  ];

  const handleNavClick = (page: PageId, anchor?: string) => {
    setMobileOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F0]/95 backdrop-blur-md border-b border-[#D8C8AE]/70">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Clean single-line brand wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A441] rounded-md"
        >
          <span className="w-8 h-8 rounded-lg bg-[#263F2C] flex items-center justify-center text-[#D9A441] shrink-0 transition-transform duration-200 group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 4c-2.5 0-4.5 2-4.5 4.5S9.5 13 12 13s4.5-2 4.5-4.5S14.5 4 12 4Z" />
              <path d="M12 13v7" />
              <path d="M7.5 8.5C5 7 3 8.5 3.5 11c.5 2 3.5 2 4.5 1" />
              <path d="M16.5 8.5C19 7 21 8.5 20.5 11c-.5 2-3.5 2-4.5 1" />
            </svg>
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-[#38291F] whitespace-nowrap">
            Cafe Coffee Bee
          </span>
        </button>

        {/* Zone 2: Clean single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#594132]"
        >
          {navItems.map((item) => {
            const isActive =
              !item.anchor &&
              (currentPage === item.page ||
                (item.page === 'blogs' && currentPage === 'blog-detail'));
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.page, item.anchor)}
                className={`relative py-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A441] rounded-sm ${
                  isActive
                    ? 'text-[#38291F] font-semibold'
                    : 'text-[#594132] hover:text-[#38291F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#D9A441] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Order Bag Drawer Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenReserve}
            className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-[#D9A441] text-[#241A15] text-[13px] font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-all duration-150 hover:bg-[#B96D35] hover:text-[#FAF8F0] hover:shadow-honey focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38291F]"
          >
            <span>Reserve a Table</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open order bag (${cartCount} items)`}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] cursor-pointer transition-colors duration-150 hover:bg-[#E5D3A9]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#263F2C] text-[#FAF8F0] text-[10px] font-bold flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#D8C8AE] bg-[#FAF8F0] text-[#38291F] cursor-pointer hover:bg-[#E5D3A9]/50"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#D8C8AE] bg-[#FAF8F0] px-4 py-4 space-y-1 shadow-warm-lg">
          {navItems.map((item) => {
            const isActive =
              !item.anchor &&
              (currentPage === item.page ||
                (item.page === 'blogs' && currentPage === 'blog-detail'));
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.page, item.anchor)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#E5D3A9]/50 text-[#38291F] font-semibold'
                    : 'text-[#594132] hover:bg-[#F5F0E5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenReserve();
              }}
              className="w-full h-11 rounded-xl bg-[#D9A441] text-[#241A15] text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer hover:bg-[#B96D35] hover:text-[#FAF8F0]"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
