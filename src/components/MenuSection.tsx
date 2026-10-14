import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/menuData.ts';
import { ProductVisual } from './ProductVisual.tsx';
import { Search, Coffee, MessageSquare, Info } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleWhatsAppOrder = (item: MenuItem) => {
    const text = encodeURIComponent(
      `السلام عليكم توباز لاونج،\nأود طلب وتجهيز:\n• ${item.nameAr} (${item.nameEn})\n• السعر: ${item.price} ر.س\nشكراً لكم.`
    );
    window.open(`https://wa.me/966562370987?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0b09] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-latin font-semibold">
            TOPAZ ARTISAN MENU
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-stone-100">
            قائمة المشروبات والحلى الفاخر
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            محاصيل مختارة بعناية من أفضل المزارع العالمية، ووصفات حلى صُنعت خصيصاً لتكتمل
            بها جلستك في توباز لاونج.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-amber-950/40">
          {/* Functional Button Segmented Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#14100e] border border-amber-950/60 rounded-xl w-full lg:w-auto">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                  }`}
                >
                  {cat.labelAr}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search
              size={18}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none"
            />
            <input
              type="text"
              placeholder="ابحث عن مشروب أو حلى..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14100e] border border-amber-950/60 rounded-xl pl-4 pr-10 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center text-stone-400">
            <Coffee size={40} className="mx-auto text-amber-500/50 mb-3" />
            <p className="text-base font-semibold">لم نجد أي صنف يطابق بحثك</p>
            <p className="text-xs text-stone-500 mt-1">جرّب البحث باسم آخر أو اختر تصنيفاً مختلفاً</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#120f0d] border border-amber-950/40 hover:border-amber-500/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.15)] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div>
                  <ProductVisual item={item} />

                  {/* Title & Price Header */}
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                        {item.nameAr}
                      </h3>
                      <span className="text-xs text-stone-500 font-latin font-medium block">
                        {item.nameEn}
                      </span>
                    </div>

                    <div className="text-left shrink-0">
                      <span className="text-lg font-bold font-latin tabular-nums text-amber-400">
                        {item.price}
                      </span>
                      <span className="text-xs text-stone-400 mr-1">ر.س</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-stone-400 leading-relaxed line-clamp-2">
                    {item.descriptionAr}
                  </p>

                  {/* Tasting notes if available */}
                  {item.notes && (
                    <div className="mt-3 text-[11px] text-amber-300/80 bg-amber-950/20 border border-amber-900/30 px-2.5 py-1.5 rounded-lg">
                      {item.notes}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 border-t border-amber-950/30 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <Info size={14} /> تفاصيل الصنف
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(item);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageSquare size={13} /> اطلب في طاولتك
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Item Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#14110f] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 text-right relative shadow-[0_0_50px_rgba(245,158,11,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-amber-950/40">
                <div>
                  <h3 className="text-xl font-bold text-amber-100">{selectedItem.nameAr}</h3>
                  <span className="text-xs text-stone-400 font-latin">{selectedItem.nameEn}</span>
                </div>
                <div className="text-left">
                  <span className="text-2xl font-black font-latin tabular-nums text-amber-400">
                    {selectedItem.price}
                  </span>
                  <span className="text-xs text-stone-400 mr-1">ريال</span>
                </div>
              </div>

              {/* Real Photo in Modal */}
              <div className="mt-4 h-52 w-full rounded-xl overflow-hidden bg-stone-900 border border-amber-950/50">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.nameAr}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="my-5 space-y-4">
                <p className="text-sm text-stone-300 leading-relaxed">
                  {selectedItem.descriptionAr}
                </p>

                {selectedItem.notes && (
                  <div className="bg-amber-950/30 border border-amber-500/20 p-3 rounded-xl text-xs text-amber-300">
                    <span className="font-bold block mb-1">ملاحظات الباريستا وتفاصيل الطعم:</span>
                    {selectedItem.notes}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-amber-950/30">
                  <span>الجلوس متاح داخل اللاونج</span>
                  {selectedItem.calories && <span>السعرات: {selectedItem.calories} كالوري</span>}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleWhatsAppOrder(selectedItem)}
                  className="flex-1 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare size={16} /> اطلب هذا الصنف عبر الواتساب
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 border border-stone-800 hover:bg-stone-900 text-stone-300 font-semibold text-sm rounded-xl transition-colors"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
