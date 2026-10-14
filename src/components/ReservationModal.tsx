import React, { useState } from 'react';
import { X, Armchair, Users, Clock, Calendar, MessageSquare, Phone, Check } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('شخصين');
  const [seatingType, setSeatingType] = useState('جلسة كنب فاخرة');
  const [timePreference, setTimePreference] = useState('خلال ساعة من الآن');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleInstantQuickBook = () => {
    const text = encodeURIComponent('السلام عليكم، أرغب في حجز جلسة داخلية في توباز لاونج');
    window.open(`https://wa.me/966562370987?text=${text}`, '_blank');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `السلام عليكم،\nأرغب في حجز جلسة داخلية في توباز لاونج:\n• عدد الأشخاص: ${guests}\n• الوقت المطلوب: ${timePreference}\n• نوع الجلسة: ${seatingType}${name ? `\n• الاسم: ${name}` : ''}${notes ? `\n• ملاحظات: ${notes}` : ''}\n\nشكراً لكم.`;

    window.open(`https://wa.me/966562370987?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#14100e] border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-right relative shadow-[0_0_60px_rgba(245,158,11,0.25)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-stone-400 hover:text-amber-300 rounded-xl hover:bg-stone-900 transition-colors"
          aria-label="إغلاق"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-latin font-semibold">
            TOPAZ INDOOR SEATING
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-stone-100 mt-1">
            حجز جلسة داخلية
          </h3>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            تفضل بزيارتنا مباشرة أو تواصل عبر الواتساب لتجهيز طاولتك مسبقاً.
          </p>
        </div>

        {/* 1-Tap Quick Action (WhatsApp Direct) */}
        <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-500/30 text-center">
          <button
            type="button"
            onClick={handleInstantQuickBook}
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageSquare size={16} /> حجز سريع ومباشر عبر الواتساب
          </button>
          <span className="text-[11px] text-stone-400 mt-2 block">
            يرسل تلقائياً: «السلام عليكم، أرغب في حجز جلسة داخلية في توباز لاونج»
          </span>
        </div>

        <div className="relative flex py-1 items-center mb-4">
          <div className="flex-grow border-t border-amber-950/40"></div>
          <span className="flex-shrink mx-3 text-stone-500 text-[11px]">أو خصص التفاصيل أدناه</span>
          <div className="flex-grow border-t border-amber-950/40"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Guest Count */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-2 flex items-center gap-1.5">
              <Users size={14} className="text-amber-400" /> عدد الضيوف
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['1', '2', '3-4', '5+'].map((count) => (
                <button
                  type="button"
                  key={count}
                  onClick={() => setGuests(count)}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                    guests === count
                      ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-sm'
                      : 'bg-stone-900 border-stone-800 text-stone-300 hover:border-amber-500/50'
                  }`}
                >
                  {count} {count === '1' ? 'شخص' : 'أشخاص'}
                </button>
              ))}
            </div>
          </div>

          {/* Seating Type */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-2 flex items-center gap-1.5">
              <Armchair size={14} className="text-amber-400" /> نوع الجلسة المفضلة
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'جلسة كنب فاخرة',
                'طاولة عمل وهدوء',
                'جلسة عائلية ومجموعات',
                'قريب من الشاشات',
              ].map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setSeatingType(type)}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-right transition-all flex items-center justify-between ${
                    seatingType === type
                      ? 'bg-amber-400/15 border-amber-400 text-amber-200'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span>{type}</span>
                  {seatingType === type && <Check size={14} className="text-amber-400" />}
                </button>
              ))}
            </div>
          </div>

          {/* Time Preference */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-2 flex items-center gap-1.5">
              <Clock size={14} className="text-amber-400" /> وقت الحضور المتوقع (مفتوح 24 ساعة)
            </label>
            <select
              value={timePreference}
              onChange={(e) => setTimePreference(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-400"
            >
              <option value="خلال ساعة من الآن">خلال ساعة من الآن (وصول فوري)</option>
              <option value="اليوم في المساء (بين 8 - 12 ليلاً)">اليوم في المساء (بين 8 - 12 ليلاً)</option>
              <option value="جلسة سهر ليلية (بعد منتصف الليل)">جلسة سهر ليلية (بعد منتصف الليل)</option>
              <option value="جلسة فجر أو صباح باكر">جلسة فجر أو صباح باكر</option>
              <option value="موعد آخر محدد">موعد آخر محدد</option>
            </select>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              الاسم الكريم (اختياري)
            </label>
            <input
              type="text"
              placeholder="مثال: عبدالله أو أم فهد"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              ملاحظات أو رغبات خاصة (اختياري)
            </label>
            <input
              type="text"
              placeholder="مثلاً: نحتاج أفياش شحن، أو طاولة هادئة"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all"
            >
              <MessageSquare size={16} /> تأكيد وإرسال عبر الواتساب
            </button>

            <a
              href="tel:0562370987"
              className="py-3 px-4 border border-stone-800 hover:bg-stone-900 text-stone-300 font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={16} className="text-amber-400" /> اتصال فوري
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
