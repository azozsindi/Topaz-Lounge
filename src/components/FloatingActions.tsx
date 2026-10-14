import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const defaultWhatsAppText = encodeURIComponent('السلام عليكم، أرغب في حجز جلسة داخلية في توباز لاونج');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('توباز لاونج طريق المكرونة النزهة جدة 23534')}`;

  return (
    <aside
      aria-label="خيارات التواصل السريع"
      className="fixed bottom-4 inset-x-4 sm:hidden z-40 flex items-center justify-between gap-2 p-2 bg-[#120f0d]/95 backdrop-blur-md border border-amber-500/40 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
    >
      <a
        href={`https://wa.me/966562370987?text=${defaultWhatsAppText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
      >
        <MessageSquare size={15} />
        واتساب توباز
      </a>

      <a
        href="tel:0562370987"
        className="py-2.5 px-4 bg-stone-900 border border-stone-800 text-amber-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5"
      >
        <Phone size={15} />
        اتصال
      </a>

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 bg-stone-900 border border-stone-800 text-stone-300 rounded-xl flex items-center justify-center"
        aria-label="الخريطة"
      >
        <MapPin size={16} />
      </a>
    </aside>
  );
};
