import React from 'react';
import { Armchair, Clock, Wifi, Tv, Sparkles, Users, Coffee, ShieldCheck } from 'lucide-react';

interface LoungeExperienceProps {
  onOpenBooking: () => void;
}

export const LoungeExperience: React.FC<LoungeExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="lounge-vibes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0807] relative overflow-hidden">
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-latin font-semibold">
            THE INDOOR EXPERIENCE
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-black text-stone-100">
            مساحات داخلية صُممت لراحتك
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            بيئة هادئة ومريحة تجمع بين فخامة الجلسات وجودة المشروبات.
          </p>
        </div>

        {/* Feature Grid - Clean, Punchy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#120f0d] border border-amber-950/50 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
              <Armchair size={22} />
            </div>
            <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
              أرائك وثيرة وخصوصية
            </h3>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              توزيع مدروس للطاولات يضمن مساحتك الخاصة مع تكييف هواء مركزي منعش.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#120f0d] border border-amber-950/50 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
              <Coffee size={22} />
            </div>
            <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
              إعداد احترافي للقهوة
            </h3>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              استخلاص متقن وخيارات متعددة لمحاصيل القهوة المقطرة والإسبريسو.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#120f0d] border border-amber-950/50 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-105 transition-transform">
              <Users size={22} />
            </div>
            <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
              حفاوة وضيافة متواصلة
            </h3>
            <p className="mt-2 text-xs text-stone-400 leading-relaxed">
              طاقم عمل مرحب يحرص على تقديم تجربة استثنائية من لحظة وصولك.
            </p>
          </div>
        </div>

        {/* Lounge Booking Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-950/30 via-[#181411] to-amber-950/30 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div>
            <h3 className="text-xl font-bold text-stone-100">
              تفضل بزيارتنا في أي وقت أو رتّب جلستك مسبقاً
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-400">
              طريق المكرونة، حي النزهة، جدة. نرحب بكم على مدار الساعة.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md"
            >
              حجز جلسة داخلية
            </button>
            <a
              href={`https://wa.me/966562370987?text=${encodeURIComponent(
                'السلام عليكم، أرغب في حجز جلسة داخلية في توباز لاونج'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-amber-500/40 text-amber-300 hover:bg-amber-950/40 font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              واتساب مباشر
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
