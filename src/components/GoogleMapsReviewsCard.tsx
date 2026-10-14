import React from 'react';
import { Star, MapPin, ExternalLink, MessageSquare, Instagram, Heart } from 'lucide-react';

export const GoogleMapsReviewsCard: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'توباز لاونج طريق المكرونة النزهة جدة 23534'
  )}`;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0c0a08] border-t border-amber-950/30">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#16120f] via-[#120f0d] to-[#0f0c0a] border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-2 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/20">
              <Star size={14} className="fill-amber-400" />
              <span>تقييمات موثقة عبر خرائط Google</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100 leading-snug">
              رأيك يهمنا ويصنع الفرق
            </h3>

            <p className="mt-2.5 text-stone-400 text-sm leading-relaxed">
              يسعدنا دائماً سماع تجربتك في توباز لاونج. يمكنك قراءة تقييمات الزوار الحقيقية
              أو مشاركة رأيك وصورك معنا عبر صفحتنا في خرائط Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              <ExternalLink size={16} />
              التقييمات على خرائط Google
            </a>

            <a
              href="https://wa.me/966562370987?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%AD%D8%A8%D9%8A%D8%AA%20%D8%A3%D8%B4%D8%A7%D8%B1%D9%83%D9%83%D9%85%20%D8%A7%D9%86%D8%B7%D8%A8%D8%A7%D8%B9%D9%8A%20%D8%B9%D9%86%20%D8%B2%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A%20%D9%84%D8%AA%D9%88%D8%A8%D8%A7%D8%B2%20%D9%84%D8%A7%D9%88%D9%86%D8%AC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-stone-900 border border-amber-950 hover:border-amber-500/40 text-stone-300 hover:text-amber-300 font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare size={16} className="text-amber-400" />
              أرسل ملاحظتك لإدارة اللاونج
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
