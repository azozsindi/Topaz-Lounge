import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'lounge-interior',
    title: 'الجلسات الداخلية الفاخرة',
    subtitle: 'أرائك وثيرية مريحة وتوزيع مدروس يضمن الخصوصية التامة.',
    category: 'أجواء المكان',
    tag: 'راحة استثنائية',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'barista-craft',
    title: 'ركن الباريستا والقهوة المختصة',
    subtitle: 'استخلاص يدوي متقن لمحاصيل عالمية بدرجات حرارة مثالية.',
    category: 'حرفية القهوة',
    tag: 'محاصيل عالمية',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'work-focus',
    title: 'مساحات الهدوء والمذاكرة',
    subtitle: 'طاولات رحبة وإضاءة دافئة تساعد على التركيز والإنجاز.',
    category: 'عمل ومذاكرة',
    tag: 'بيئة هادئة',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dessert-signature',
    title: 'أطباق الحلى والسيجنتشر',
    subtitle: 'حلويات طازجة ومشروبات مميزة تكتمل بها جلساتكم.',
    category: 'حلويات فاخرة',
    tag: 'طازج يومياً',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const VisualGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0807] border-t border-amber-950/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-latin font-semibold">
              VISUAL HIGHLIGHTS
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-100">
              لقطات من روح توباز لاونج
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md">
            أجواء صُممت لراحتكم وتفاصيل ترحب بكم في أي وقت على مدار الساعة.
          </p>
        </div>

        {/* Real Photography Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-[#120f0d] border border-amber-950/50 hover:border-amber-500/40 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col"
            >
              {/* Photo Viewport */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Tag Badge */}
                <div className="absolute top-3 right-3 text-[10px] font-semibold bg-stone-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md z-10">
                  {item.tag}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 text-xs font-bold shadow-lg">
                    <Maximize2 size={13} /> تكبير الصورة
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-amber-400/80">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-stone-100 mt-0.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-[#14100e] border border-amber-500/40 rounded-3xl max-w-3xl w-full p-6 text-right relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 left-4 p-2 text-stone-300 hover:text-amber-300 rounded-xl bg-black/60 hover:bg-stone-900 transition-colors z-20"
                aria-label="إغلاق"
              >
                <X size={20} />
              </button>

              <div className="h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-black mb-5 border border-amber-950/60 relative">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-amber-950/40">
                <div>
                  <span className="text-xs text-amber-400 font-semibold">{activeItem.category}</span>
                  <h3 className="text-xl font-bold text-stone-100 mt-0.5">{activeItem.title}</h3>
                </div>
                <span className="text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full">
                  {activeItem.tag}
                </span>
              </div>

              <p className="mt-3 text-sm text-stone-300 leading-relaxed">
                {activeItem.subtitle}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
