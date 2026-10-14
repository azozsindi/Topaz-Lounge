import React from 'react';
import { TopazLogo } from './TopazLogo.tsx';
import { Phone, MapPin, Clock, MessageSquare, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#080605] border-t border-amber-950/60 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-stone-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-amber-950/40">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TopazLogo size="sm" showSubtitle={false} />
              <div>
                <h3 className="text-xl font-black text-stone-100">توباز لاونج</h3>
                <span className="text-[10px] tracking-widest text-amber-400/80 font-latin uppercase font-semibold">
                  TOPAZ LOUNGE JEDDAH
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              وجهتكم المميزة في جدة لعشاق القهوة المختصة والجلسات الداخلية الفاخرة. نرحب
              بكم على مدار 24 ساعة بكل حفاوة وكرم.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-stone-200 mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  قائمة المشروبات والحلى
                </a>
              </li>
              <li>
                <a href="#lounge-vibes" className="hover:text-amber-400 transition-colors">
                  الجلوس داخل المكان
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  الموقع وأوقات العمل
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966562370987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  حجز طاولة عبر الواتساب
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Amenities */}
          <div>
            <h4 className="text-sm font-bold text-stone-200 mb-4">أوقات العمل والمميزات</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-amber-300">
                <Clock size={14} className="shrink-0" />
                <span>مفتوح 24 ساعة يومياً (7 أيام)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>جلسات داخلية مكيفة وفاخرة</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>واي فاي سريع ومناسب للعمل</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>بث مباشر لأهم المباريات</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-sm font-bold text-stone-200 mb-4">العنوان والتواصل</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <span>طريق المكرونة، حي النزهة، جدة 23534</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:0562370987" className="hover:text-amber-300 font-latin font-bold" dir="ltr">
                  056 237 0987
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare size={16} className="text-amber-400 shrink-0" />
                <a
                  href="https://wa.me/966562370987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 text-amber-400 font-semibold"
                >
                  مراسلة واتساب فورية
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} توباز لاونج (Topaz Lounge) - جدة. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-stone-400">
            <span>صُنع بشغف لرواد القهوة في جدة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
