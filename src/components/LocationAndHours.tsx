import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';

export const LocationAndHours: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  const addressText = 'طريق المكرونة، حي النزهة، جدة 23534، المملكة العربية السعودية';
  const phoneNumber = '056 237 0987';
  const cleanPhone = '966562370987';

  // Live Saudi Arabia Time Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('ar-SA', {
          timeZone: 'Asia/Riyadh',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }).format(now);
        setCurrentTime(timeString);
      } catch {
        setCurrentTime('مفتوح الآن');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'توباز لاونج طريق المكرونة النزهة جدة 23534'
  )}`;

  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0b09] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-latin font-semibold">
            FIND & VISIT US
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-stone-100">
            الموقع وأوقات العمل
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            نسعد باستقبالك في توباز لاونج على مدار 24 ساعة في موقعنا المميز بحي النزهة على طريق المكرونة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card - 5 cols */}
          <div className="lg:col-span-5 bg-[#14100e] border border-amber-950/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Live Hours Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 to-stone-900 border border-amber-500/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                    <Clock size={20} />
                    <span>مفتوح 24 ساعة يومياً</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    مفتوح الآن
                  </span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  نستقبلكم على مدار 24 ساعة طوال أيام الأسبوع بدون انقطاع.
                </p>
                {currentTime && (
                  <div className="mt-2.5 text-[11px] text-amber-200/70 border-t border-amber-900/30 pt-2 flex items-center justify-between">
                    <span>الوقت الحالي في جدة:</span>
                    <span className="font-bold text-amber-300">{currentTime}</span>
                  </div>
                )}
              </div>

              {/* Address Box */}
              <div className="space-y-2">
                <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                  <MapPin size={15} /> عنوان اللاونج
                </span>
                <p className="text-base font-bold text-stone-100">
                  طريق المكرونة، حي النزهة، جدة 23534
                </p>
                <p className="text-xs text-stone-400">
                  المملكة العربية السعودية · بالقرب من تقاطع شارع حراء وطريق المكرونة
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-200 bg-stone-900 hover:bg-stone-850 border border-amber-950 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-400" /> تم نسخ العنوان
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> نسخ العنوان
                      </>
                    )}
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-200 hover:text-amber-300 bg-stone-900 hover:bg-stone-850 border border-stone-800 rounded-lg transition-colors"
                  >
                    <ExternalLink size={14} /> فتح في خرائط Google
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-2 pt-2 border-t border-amber-950/40">
                <span className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                  <Phone size={15} /> الاتصال المباشر والخدمة
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href={`tel:${cleanPhone}`}
                    className="text-xl font-bold font-latin text-stone-100 hover:text-amber-300 transition-colors"
                    dir="ltr"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Map & Directions CTAs */}
            <div className="mt-8 pt-6 border-t border-amber-950/40 grid grid-cols-2 gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Navigation size={15} /> فتح الاتجاهات
              </a>

              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                  'مرحباً توباز لاونج، أود الاستفسار عن تفاصيل الجلسات والوصول إلى الموقع.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#1e293b]/70 hover:bg-[#1e293b] border border-amber-500/30 text-amber-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={15} /> تواصل واتساب
              </a>
            </div>
          </div>

          {/* Interactive Map Visual - 7 cols */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-amber-950/60 bg-[#120f0d] relative flex flex-col min-h-[380px]">
            {/* Custom Atmospheric Map Canvas */}
            <div className="relative flex-1 w-full bg-[#161210] flex items-center justify-center overflow-hidden">
              {/* Subtle Road Grid lines mimicking Jeddah city plan */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cityGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cityGrid)" />
                {/* Al Makarunah Rd Main Arterial */}
                <line x1="0" y1="120" x2="100%" y2="280" stroke="#f59e0b" strokeWidth="4" opacity="0.6" />
                <line x1="30%" y1="0" x2="70%" y2="100%" stroke="#d97706" strokeWidth="3" opacity="0.5" />
              </svg>

              {/* Ambient beacon pulse on map */}
              <div className="relative z-10 flex flex-col items-center text-center p-6 bg-[#0e0c0a]/90 border border-amber-500/40 rounded-2xl max-w-sm mx-4 backdrop-blur-md shadow-2xl">
                {/* Radiant Pin */}
                <div className="relative mb-3">
                  <div className="absolute -inset-3 rounded-full bg-amber-400/20 animate-ping" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                    <MapPin size={26} className="fill-stone-950" />
                  </div>
                </div>

                <span className="text-amber-400 text-xs font-bold font-latin">TOPAZ LOUNGE</span>
                <h4 className="text-lg font-black text-stone-100 mt-1">توباز لاونج · جدة</h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  طريق المكرونة، حي النزهة، جدة 23534
                </p>
                <span className="text-[11px] text-amber-300/80 mt-1">
                  الجلوس داخل المكان · مفتوح 24 ساعة
                </span>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
                >
                  <Navigation size={13} /> الانتقال المباشر للخريطة
                </a>
              </div>
            </div>

            {/* Bottom Bar Details */}
            <div className="p-4 bg-[#0d0a08] border-t border-amber-950/60 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> حي النزهة - جدة
              </span>
              <span>سهولة الوصول من طريق الملك فهد وطريق المدينة</span>
              <span className="text-amber-300/80">مواقف سيارات متوفرة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
