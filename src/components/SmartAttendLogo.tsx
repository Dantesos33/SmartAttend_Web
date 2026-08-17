import React from 'react';
import logoDark from '../../assets/logo-dark.png';
import logoLight from '../../assets/logo-light.png';

interface SmartAttendLogoProps {
  size?: number | string;
  className?: string;
  showBackground?: boolean;
  /**
   * 'dark'  -> navy-background icon, use on light page backgrounds (default)
   * 'light' -> white-background icon, use on dark page backgrounds
   */
  variant?: 'dark' | 'light';
}

export const SmartAttendLogo: React.FC<SmartAttendLogoProps> = ({
  size = 40,
  className = '',
  variant = 'dark',
}) => {
  const src = variant === 'light' ? logoLight : logoDark;

  return (
    <div
      className={`inline-flex items-center justify-center relative flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt="SmartAttend logo"
        className="w-full h-full object-contain rounded-[22%] drop-shadow-xs"
        draggable={false}
      />
    </div>
  );
};
