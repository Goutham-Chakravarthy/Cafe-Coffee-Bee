import React from 'react';
import {MapPin, Phone, MessageSquare, Instagram, Mail, ArrowUpRight} from 'lucide-react';
import {PageId} from '../data/cafeData';

interface FooterProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({onNavigate, onOpenReserve}) => {
  return (
    <footer className="bg-[#241A15] text-[#F5F0E5] border-t border-[#38291F]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#38291F]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-[#263F2C] flex items-center justify-center text-[#D9A441]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
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
              <span className="font-serif text-xl font-semibold text-[#FAF8F0]">
                Cafe Coffee Bee
              </span>
            </div>

            <p className="font-serif italic text-[#D9A441] text-base">
              A Little Buzz. A Lot of Goodness.
            </p>

            <p className="text-xs leading-relaxed text-[#D8C8AE]/80 max-w-sm">
              Nestled amidst the mist-clad highland canopies of Kalasa,
              Karnataka. Estate-roasted single-origins meet sun-ripened artisanal
              honey in a grounding sensory refuge.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', 'contact');
                }}
                aria-label="Instagram & Sanctuary Gallery"
                className="w-9 h-9 rounded-lg border border-[#38291F] bg-[#32261F] flex items-center justify-center text-[#D8C8AE] hover:text-[#D9A441] hover:border-[#D9A441]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', 'contact');
                }}
                aria-label="Message Sanctuary"
                className="w-9 h-9 rounded-lg border border-[#38291F] bg-[#32261F] flex items-center justify-center text-[#D8C8AE] hover:text-[#D9A441] hover:border-[#D9A441]/50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', 'contact');
                }}
                aria-label="Email Concierge"
                className="w-9 h-9 rounded-lg border border-[#38291F] bg-[#32261F] flex items-center justify-center text-[#D8C8AE] hover:text-[#D9A441] hover:border-[#D9A441]/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Exploration Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-[#D9A441]">
              Exploration
            </h3>
            <ul className="space-y-2 text-xs text-[#D8C8AE]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'experience')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Estate Rituals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'gallery')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Art & Ambience
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('blogs')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Origin Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  Our Heritage
                </button>
              </li>
            </ul>
          </div>

          {/* Retreat Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-[#D9A441]">
              Retreat Timings
            </h3>
            <div className="space-y-2.5 text-xs text-[#D8C8AE]/90">
              <div>
                <p className="font-semibold text-[#FAF8F0]">Monday – Friday</p>
                <p className="tabular-nums text-[#D8C8AE]/80">7:30 AM – 9:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#FAF8F0]">Saturday – Sunday</p>
                <p className="tabular-nums text-[#D8C8AE]/80">7:00 AM – 10:30 PM</p>
              </div>
              <p className="pt-1 text-[#D9A441] font-medium">
                Fresh Sunrise Brews daily at 7:30 AM
              </p>
            </div>
          </div>

          {/* Sanctuary Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans text-[11px] font-bold tracking-[0.12em] uppercase text-[#D9A441]">
              Sanctuary Coordinates
            </h3>
            <div className="space-y-2.5 text-xs text-[#D8C8AE]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>
                  Bhadra River Vista Road, Main Plantation Junction, Kalasa,
                  Chikkamagaluru, Karnataka 577124
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="tabular-nums">+91 98765 43210</span>
              </div>
              <button
                type="button"
                onClick={onOpenReserve}
                className="inline-flex items-center gap-1.5 text-[#D9A441] hover:text-[#F5BD58] font-medium transition-colors cursor-pointer pt-1"
              >
                <span>Reserve a Table or Trail Walk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#D8C8AE]/65">
          <p>
            © 2026 Cafe Coffee Bee. Handcrafted with reverence in Kalasa,
            Western Ghats. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
            >
              Farm Charter
            </button>
            <button
              type="button"
              onClick={() => onNavigate('blogs')}
              className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
            >
              Field Dispatches
            </button>
            <button
              type="button"
              onClick={() => onNavigate('home', 'contact')}
              className="hover:text-[#FAF8F0] transition-colors cursor-pointer"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
