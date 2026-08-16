import React from 'react';

interface SmartAttendLogoProps {
  size?: number | string;
  className?: string;
  showBackground?: boolean;
}

export const SmartAttendLogo: React.FC<SmartAttendLogoProps> = ({
  size = 40,
  className = '',
  showBackground = true,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Background App Squircle (optional) */}
        {showBackground && (
          <>
            <defs>
              <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#363543" floodOpacity="0.08" />
              </filter>
            </defs>
            <rect
              x="8"
              y="8"
              width="184"
              height="184"
              rx="48"
              fill="#FFFFFF"
              stroke="#E8ECE7"
              strokeWidth="2"
              filter="url(#logoShadow)"
            />
          </>
        )}

        {/* Outer Mint Green Rounded Corner Brackets */}
        {/* Top-Left Outer Corner */}
        <path
          d="M 75 48 H 58 C 47 48 38 57 38 68 V 85"
          stroke="#8ECB8A"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Top-Right Outer Corner */}
        <path
          d="M 125 48 H 142 C 153 48 162 57 162 68 V 85"
          stroke="#8ECB8A"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Bottom-Left Outer Corner */}
        <path
          d="M 38 115 V 132 C 38 143 47 152 58 152 H 75"
          stroke="#8ECB8A"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Inner Charcoal Face Reticles */}
        {/* Top-Left Inner Reticle */}
        <path
          d="M 78 72 H 68 V 82"
          stroke="#363543"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Top-Right Inner Reticle */}
        <path
          d="M 122 72 H 132 V 82"
          stroke="#363543"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom-Left Inner Reticle */}
        <path
          d="M 68 118 V 128 H 78"
          stroke="#363543"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Person Silhouette */}
        {/* Hair and Head Shape */}
        <path
          d="M 100 62 C 86 62 76 72 76 86 C 76 96 82 101 84 107 C 86 113 92 118 100 118 C 108 118 114 113 116 107 C 118 101 124 96 124 86 C 124 72 114 62 100 62 Z"
          fill="#363543"
        />
        
        {/* Clean Negative Space Face Mask */}
        <path
          d="M 88 88 C 88 88 88 106 100 106 C 112 106 112 88 112 88 C 112 82 106 78 100 78 C 94 78 88 82 88 88 Z"
          fill="#FFFFFF"
        />

        {/* Shoulders / Bust */}
        <path
          d="M 66 142 C 66 126 80 121 100 121 C 110 121 119 123 124 128 C 121 133 119 139 119 146 C 119 148 119.2 150 119.5 152 H 76 C 70.5 152 66 147.5 66 142 Z"
          fill="#363543"
        />

        {/* Bottom-Right Verified Mint Green Check Badge */}
        <circle
          cx="142"
          cy="140"
          r="26"
          fill="#8ECB8A"
          stroke="#FFFFFF"
          strokeWidth="3.5"
        />

        {/* White Checkmark Icon */}
        <path
          d="M 132 140 L 139 147 L 153 133"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
