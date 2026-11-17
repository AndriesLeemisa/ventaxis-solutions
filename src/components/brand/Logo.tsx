import React from 'react';

export type LogoVariant = 'horizontal' | 'stacked' | 'mark-only' | 'monochrome-white' | 'monochrome-dark';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  // Dimensions map
  const markDimensions = {
    sm: { w: 32, h: 32 },
    md: { w: 42, h: 42 },
    lg: { w: 56, h: 56 },
    xl: { w: 76, h: 76 },
  }[size];

  const isMonoWhite = variant === 'monochrome-white';
  const isMonoDark = variant === 'monochrome-dark';

  // SVG Geometric V with Airflow Lines
  const LogoMark = (
    <svg
      width={markDimensions.w}
      height={markDimensions.h}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 hover:scale-105"
    >
      <defs>
        <linearGradient id="vGradMain" x1="8" y1="12" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMonoWhite ? '#FFFFFF' : isMonoDark ? '#0A1726' : '#1479D4'} />
          <stop offset="100%" stopColor={isMonoWhite ? '#EEF3F7' : isMonoDark ? '#000000' : '#10243A'} />
        </linearGradient>
        <linearGradient id="flowGradMain1" x1="28" y1="56" x2="56" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMonoWhite ? '#FFFFFF' : isMonoDark ? '#2B3848' : '#1479D4'} />
          <stop offset="100%" stopColor={isMonoWhite ? '#E0E7ED' : isMonoDark ? '#4A5B6D' : '#20B8CE'} />
        </linearGradient>
        <linearGradient id="flowGradMain2" x1="32" y1="56" x2="60" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMonoWhite ? '#FFFFFF' : isMonoDark ? '#3D4F62' : '#20B8CE'} />
          <stop offset="100%" stopColor={isMonoWhite ? '#D0DCE5' : isMonoDark ? '#607488' : '#38E1F8'} />
        </linearGradient>
      </defs>

      {/* Structural Left Arm of the V */}
      <path
        d="M10 12L28 54H37L19 12H10Z"
        fill="url(#vGradMain)"
      />

      {/* Laminar Airflow Streamline 1 (Core Airfoil Curve) */}
      <path
        d="M31 54L50 12H44L27 49L31 54Z"
        fill="url(#flowGradMain1)"
      />

      {/* Laminar Airflow Streamline 2 (Outer Dynamic Vortex Curve) */}
      <path
        d="M37 45L56 12H51L34 40L37 45Z"
        fill="url(#flowGradMain2)"
      />

      {/* Laminar Airflow Streamline 3 (High-Speed Tip Line) */}
      <path
        d="M43 35L60 12H56L40 30L43 35Z"
        fill={isMonoWhite ? '#FFFFFF' : isMonoDark ? '#6B7E93' : '#20B8CE'}
        opacity={isMonoWhite ? 0.9 : 0.8}
      />
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoMark}</div>;
  }

  // Text Styling
  const primaryTextColor = isMonoWhite ? 'text-white' : isMonoDark ? 'text-black' : 'text-[#10243A]';
  const accentTextColor = isMonoWhite ? 'text-[#EEF3F7]' : isMonoDark ? 'text-neutral-800' : 'text-[#1479D4]';
  const taglineColor = isMonoWhite ? 'text-[#20B8CE]' : isMonoDark ? 'text-neutral-600' : 'text-[#1479D4]';

  const headingSizes = {
    sm: 'text-base tracking-tight',
    md: 'text-xl tracking-tight',
    lg: 'text-2xl tracking-tight',
    xl: 'text-3xl tracking-tight',
  }[size];

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {LogoMark}
        <div className="mt-2.5">
          <div className={`font-['Manrope'] font-extrabold uppercase ${headingSizes} ${primaryTextColor} leading-none`}>
            VENT<span className={accentTextColor}>AXIS</span>
          </div>
          <div className={`font-['Manrope'] font-semibold tracking-[0.25em] text-[10px] uppercase text-[#6B7A8A] mt-0.5`}>
            SOLUTIONS
          </div>
          {showTagline && (
            <div className={`font-['Inter'] font-semibold tracking-wider uppercase ${taglineSizes} ${taglineColor} mt-1.5`}>
              Engineering Better Airflow
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal Logo (Default, Monochrome-White, Monochrome-Dark)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {LogoMark}
      <div className="flex flex-col text-left">
        <div className={`font-['Manrope'] font-extrabold uppercase ${headingSizes} ${primaryTextColor} leading-none tracking-tight flex items-baseline gap-1`}>
          <span>VENT<span className={accentTextColor}>AXIS</span></span>
          <span className="font-semibold text-[0.65em] tracking-[0.2em] text-[#6B7A8A] ml-1">
            SOLUTIONS
          </span>
        </div>
        {showTagline && (
          <div className={`font-['Inter'] font-medium tracking-wide uppercase ${taglineSizes} ${taglineColor} mt-1`}>
            Engineering Better Airflow
          </div>
        )}
      </div>
    </div>
  );
};
