import React, { useState } from 'react';
import { MenuItem } from '../data/menuData.ts';
import { Coffee, Sparkles } from 'lucide-react';

interface ProductVisualProps {
  item: MenuItem;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ item }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-900 border border-amber-950/40 group-hover:border-amber-500/50 transition-colors">
      {/* Fallback Container (Displayed while loading or if error occurs) */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-stone-900 to-[#120f0d] flex items-center justify-center p-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-center justify-center text-amber-400 mx-auto mb-2 animate-pulse">
              <Coffee size={24} />
            </div>
            <span className="text-[11px] text-stone-500 font-latin font-medium">
              {item.nameEn}
            </span>
          </div>
        </div>
      )}

      {/* Real High-Resolution Photography */}
      {!hasError && (
        <img
          src={item.imageUrl}
          alt={item.nameAr}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Subtle vignette shadow gradient at top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

      {/* Badge / Signature Tag */}
      {item.badge && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 z-10">
          <Sparkles size={11} />
          <span>{item.badge}</span>
        </div>
      )}

      {/* Calories info */}
      {item.calories && (
        <div className="absolute bottom-3 left-3 text-[11px] text-stone-300 bg-stone-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-stone-800 z-10">
          {item.calories} سعرة
        </div>
      )}
    </div>
  );
};
