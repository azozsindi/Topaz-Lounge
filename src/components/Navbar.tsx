import React, { useState } from 'react';
import { TopazLogo } from './TopazLogo.tsx';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0908]/90 backdrop-blur-md border-b border-amber-950/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone top bar contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark & Neon Mark (1 line) */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="توباز لاونج الصفحة الرئيسية"
          >
            <TopazLogo size="sm" showSubtitle={false} />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wide text-amber-50 group-hover:text-amber-300 transition-colors">
                توباز لاونج
              </span>
              <span className="text-[10px] tracking-widest text-amber-400/80 font-latin uppercase font-semibold">
                TOPAZ LOUNGE · JEDDAH
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links (single-line, subtle hover underlines) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a
              href="#menu"
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-amber-400 after:transition-all"
            >
              قائمة المشروبات
            </a>
            <a
              href="#lounge-vibes"
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-amber-400 after:transition-all"
            >
              تجربة المكان
            </a>
            <a
              href="#location"
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-amber-400 after:transition-all"
            >
              الموقع والمواعيد
            </a>
            <a
              href="#contact"
              className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-amber-400 after:transition-all"
            >
              تواصل ومعلومات
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              احجز طاولة / استفسار
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-400 hover:text-amber-300 rounded-lg hover:bg-stone-900 transition-colors"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0a08] border-b border-amber-950/60 px-5 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 text-base font-medium text-stone-200">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-950/30 hover:text-amber-300 transition-colors"
            >
              قائمة المشروبات والحلى
            </a>
            <a
              href="#lounge-vibes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-950/30 hover:text-amber-300 transition-colors"
            >
              تجربة المكان والجلوس الداخلي
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-950/30 hover:text-amber-300 transition-colors"
            >
              الموقع وأوقات العمل
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-amber-950/30 hover:text-amber-300 transition-colors"
            >
              معلومات الاتصال
            </a>
          </nav>

          <div className="pt-3 border-t border-amber-950/40 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-md"
            >
              احجز طاولة / استفسار فوري
            </button>
            <div className="flex items-center justify-between text-xs text-amber-200/70 px-2 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-amber-400" /> مفتوح 24 ساعة
              </span>
              <a href="tel:0562370987" className="flex items-center gap-1.5 hover:text-amber-300">
                <Phone size={14} className="text-amber-400" /> 056 237 0987
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
