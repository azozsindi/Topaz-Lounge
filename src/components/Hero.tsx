import React, { useState } from 'react';
import { TopazLogo } from './TopazLogo.tsx';
import { Clock, MapPin, Phone, Sparkles, Coffee, Armchair, ChevronDown, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [neonActive, setNeonActive] = useState(true);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-16 bg-[#0a0807]">
      {/* Background Architectural Atmosphere & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] transition-opacity duration-700 ${
            neonActive ? 'opacity-40 bg-amber-600/30' : 'opacity-10 bg-amber-900/20'
          }`}
        />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0b0908] to-transparent" />
        
        {/* Subtle architectural grid / acoustic wall texture lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Live Status Line - No generic pill badges, clean typography */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-amber-200/90 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/20 rounded-full text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            مفتوح الآن · خدمة على مدار 24 ساعة
          </span>
          <span className="hidden sm:inline text-stone-600">|</span>
          <span className="text-stone-300">طريق المكرونة، حي النزهة، جدة</span>
        </div>

        {/* The Exact Glowing Neon Emblem (From User's Photo) */}
        <div className="relative my-4 cursor-pointer group" onClick={() => setNeonActive(!neonActive)} title="انقر لتجربة تأثير إضاءة النيون">
          <TopazLogo
            size="xl"
            glow={neonActive}
            className={`transition-all duration-500 ${neonActive ? 'scale-100' : 'brightness-50 grayscale-[40%]'}`}
          />
          
          {/* Subtle neon toggle hint */}
          <div className="mt-2 text-[11px] text-stone-500 group-hover:text-amber-400/80 transition-colors flex items-center justify-center gap-1.5">
            <Sparkles size={12} className={neonActive ? 'text-amber-400' : 'text-stone-600'} />
            <span>{neonActive ? 'إضاءة النيون مُفعلة (انقر للتبديل)' : 'إضاءة النيون خافتة (انقر للتشغيل)'}</span>
          </div>
        </div>

        {/* Headline & Subhead */}
        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-100 tracking-tight leading-[1.25] text-balance max-w-4xl">
          ملاذك الهادئ في قلب جدة..{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-200 via-amber-400 to-amber-500">
            على مدار الساعة
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed text-balance">
          جلسات داخلية فاخرة صُممت لراحتك التامة، قهوة مختصة محضرة بشغف، وأجواء ليلية راقية
          ترحب بك في أي وقت ليلاً أو نهاراً.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Coffee size={18} />
            استكشف قائمة القهوة والحلى
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-amber-200 bg-stone-900/80 hover:bg-stone-800 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Armchair size={18} className="text-amber-400" />
            احجز طاولتك بالداخل
          </button>
        </div>

        {/* Direct WhatsApp Quick Connect */}
        <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-stone-400">
          <span>حجز سريع ومباشر:</span>
          <a
            href={`https://wa.me/966562370987?text=${encodeURIComponent(
              'السلام عليكم، أرغب في حجز جلسة داخلية في توباز لاونج'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
          >
            <MessageSquare size={15} />
            واتساب 056 237 0987
          </a>
        </div>

        {/* Four Real Proof Highlights Strip - Concise, No Repetition */}
        <div className="mt-14 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-amber-950/40 pt-8 text-right">
          <div className="bg-[#120f0d]/80 border border-amber-950/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="text-amber-400 text-sm font-semibold mb-1 flex items-center gap-2">
              <Armchair size={17} /> جلسات داخلية وثيرة
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              أرائك مريحة وطاولات واسعة صُممت للخصوصية والاسترخاء.
            </p>
          </div>

          <div className="bg-[#120f0d]/80 border border-amber-950/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="text-amber-400 text-sm font-semibold mb-1 flex items-center gap-2">
              <Clock size={17} /> خدمة 24/7
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              أبوابنا مفتوحة طوال الليل والنهار لاستقبالكم.
            </p>
          </div>

          <div className="bg-[#120f0d]/80 border border-amber-950/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="text-amber-400 text-sm font-semibold mb-1 flex items-center gap-2">
              <Coffee size={17} /> محاصيل مختصة
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              تقطير يدوي متقن وخيارات حلى طازجة يومياً.
            </p>
          </div>

          <div className="bg-[#120f0d]/80 border border-amber-950/50 rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="text-amber-400 text-sm font-semibold mb-1 flex items-center gap-2">
              <MapPin size={17} /> حي النزهة
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              طريق المكرونة، جدة، وصول سهل ومواقف متوفرة.
            </p>
          </div>
        </div>
      </div>

      {/* Down Chevron indicator */}
      <a
        href="#menu"
        className="mt-8 text-stone-500 hover:text-amber-400 transition-colors animate-bounce p-2"
        aria-label="الانتقال للمنيو"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
};
