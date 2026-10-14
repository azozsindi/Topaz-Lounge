import React from 'react';

interface TopazLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  glow?: boolean;
}

export const TopazLogo: React.FC<TopazLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  glow = true,
}) => {
  // Responsive sizing classes
  const sizeClasses = {
    sm: 'w-[120px] sm:w-[140px]',
    md: 'w-[180px] sm:w-[220px]',
    lg: 'w-[260px] sm:w-[320px]',
    xl: 'w-[280px] min-[375px]:w-[310px] sm:w-[380px] md:w-[440px]',
  }[size];

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none max-w-full ${sizeClasses} ${className}`}
    >
      <svg
        viewBox="0 0 340 180"
        className={`w-full h-auto overflow-visible transition-all duration-300 ${glow ? 'animate-subtle-glow' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense Neon Amber Glow Filter */}
          <filter id="neonGlowGold" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feGaussianBlur stdDeviation="16" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="neonSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradients */}
          <linearGradient id="neonGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="35%" stopColor="#fef08a" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>

          <linearGradient id="neonCoreWhite" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fff7ed" />
          </linearGradient>
        </defs>

        {/* Ambient background bloom */}
        <ellipse
          cx="170"
          cy="90"
          rx="125"
          ry="65"
          transform="rotate(-12 170 90)"
          fill="rgba(245, 158, 11, 0.08)"
          filter="url(#neonGlowGold)"
        />

        {/* Outer Oval Ring - Tilted Neon Tube */}
        <g transform="rotate(-13 170 90)">
          {/* Deep Amber Bloom Line */}
          <ellipse
            cx="170"
            cy="90"
            rx="135"
            ry="62"
            fill="none"
            stroke="#b45309"
            strokeWidth="10"
            opacity="0.4"
            filter="url(#neonGlowGold)"
          />
          {/* Primary Golden Neon Tube */}
          <ellipse
            cx="170"
            cy="90"
            rx="135"
            ry="62"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="4.5"
            filter="url(#neonSoftGlow)"
          />
          {/* Intense Bright White Core of the Neon Tube */}
          <ellipse
            cx="170"
            cy="90"
            rx="135"
            ry="62"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            opacity="0.95"
          />
        </g>

        {/* Dynamic Slash / Cut line through neon sign */}
        <line
          x1="52"
          y1="140"
          x2="115"
          y2="120"
          stroke="#f59e0b"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#neonSoftGlow)"
        />
        <line
          x1="52"
          y1="140"
          x2="115"
          y2="120"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Arabic Calligraphy: "توباز" */}
        <g transform="translate(170, 96) rotate(-10)" filter="url(#neonGlowGold)">
          {/* Glowing Calligraphic Path for "توباز" */}
          {/* Outer glow stroke */}
          <path
            d="M 68,-30 C 58,-10 35,5 -5,12 C -45,18 -85,15 -105,-4 C -95,-12 -80,-14 -70,-8 C -55,0 -20,2 10,-3 C 35,-8 55,-20 62,-32 Z
               M -28,-36 C -32,-36 -35,-32 -32,-28 C -30,-25 -25,-25 -24,-28 C -22,-32 -25,-36 -28,-36 Z
               M -15,-39 C -19,-39 -22,-35 -19,-31 C -17,-28 -12,-28 -11,-31 C -9,-35 -12,-39 -15,-39 Z
               M -50,-12 C -54,-12 -58,-8 -55,-4 C -53,-1 -48,-1 -47,-4 C -45,-8 -48,-12 -50,-12 Z
               M 42,-5 C 38,-5 35,-1 38,3 C 40,6 45,6 46,3 C 48,-1 45,-5 42,-5 Z"
            fill="#d97706"
            opacity="0.5"
          />

          {/* Authentic Stylized Arabic Text Tube */}
          <text
            x="0"
            y="2"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Tajawal', 'Cairo', sans-serif"
            fontWeight="900"
            fontSize="56"
            letterSpacing="2"
            fill="#fffdfa"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinejoin="round"
            style={{
              textShadow:
                '0 0 8px #ffffff, 0 0 16px #fbbf24, 0 0 32px #f59e0b, 0 0 50px #d97706',
            }}
          >
            تـوبـاز
          </text>
        </g>

        {/* English "LOUNGE" in luminous white-gold neon tubing */}
        <g transform="translate(170, 142)">
          {/* Amber Under-shadow */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="8"
            fill="#ffffff"
            stroke="#f59e0b"
            strokeWidth="4"
            filter="url(#neonSoftGlow)"
            opacity="0.9"
          >
            LOUNGE
          </text>

          {/* Core White Neon Tube */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="8"
            fill="#ffffff"
            style={{
              textShadow:
                '0 0 5px #ffffff, 0 0 15px #fef08a, 0 0 30px #f59e0b',
            }}
          >
            LOUNGE
          </text>
        </g>

        {/* Subtle Arabic Subtitle: لاونج */}
        {showSubtitle && (
          <text
            x="170"
            y="168"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Tajawal', sans-serif"
            fontWeight="700"
            fontSize="14"
            letterSpacing="6"
            fill="#fbbf24"
            opacity="0.85"
            style={{ textShadow: '0 0 8px rgba(245, 158, 11, 0.6)' }}
          >
            لاونـــج
          </text>
        )}
      </svg>
    </div>
  );
};
