import React from 'react';

interface BometUniversityLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BometUniversityLogo: React.FC<BometUniversityLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const dimensions = {
    sm: { width: 36, height: 42 },
    md: { width: 56, height: 64 },
    lg: { width: 90, height: 104 },
    xl: { width: 140, height: 160 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        id="bomet-university-crest"
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 500 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none transition-transform hover:scale-105"
        role="img"
        aria-label="Bomet University Official Crest - Green University for Sustainability"
      >
        <defs>
          {/* Shield Gradients */}
          <linearGradient id="shieldBorder" x1="0" y1="0" x2="500" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="50%" stopColor="#166534" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>

          <linearGradient id="goldRibbon" x1="0" y1="0" x2="500" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          <linearGradient id="skyGrad" x1="250" y1="100" x2="250" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>

          <linearGradient id="sunGrad" x1="250" y1="120" x2="250" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          <linearGradient id="hillsGrad" x1="100" y1="280" x2="400" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="flameGrad" x1="250" y1="190" x2="250" y2="290" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* Clip path for shield interior */}
          <clipPath id="shieldInteriorClip">
            <path d="M 120 110 C 200 95, 300 95, 380 110 C 390 240, 390 340, 360 400 C 320 460, 250 490, 250 490 C 250 490, 180 460, 140 400 C 110 340, 110 240, 120 110 Z" />
          </clipPath>
        </defs>

        {/* Outer Shield (Dark Green) */}
        <path
          d="M 95 85 C 190 70, 310 70, 405 85 C 420 250, 420 370, 380 440 C 330 510, 250 545, 250 545 C 250 545, 170 510, 120 440 C 80 370, 80 250, 95 85 Z"
          fill="url(#shieldBorder)"
          stroke="#166534"
          strokeWidth="6"
        />

        {/* Inner Gold Shield Rim */}
        <path
          d="M 112 102 C 198 88, 302 88, 388 102 C 400 245, 400 355, 368 415 C 324 475, 250 505, 250 505 C 250 505, 176 475, 132 415 C 100 355, 100 245, 112 102 Z"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="7"
        />

        {/* Interior Shield Content clipped */}
        <g clipPath="url(#shieldInteriorClip)">
          {/* Sky background */}
          <rect x="80" y="80" width="340" height="420" fill="url(#skyGrad)" />

          {/* Sunburst rays */}
          <g transform="translate(250, 270)">
            {Array.from({ length: 17 }).map((_, i) => {
              const angle = -90 + (i - 8) * 11;
              return (
                <polygon
                  key={i}
                  points="0,0 -8,-240 8,-240"
                  transform={`rotate(${angle})`}
                  fill={i % 2 === 0 ? '#ffffff' : '#fde047'}
                  opacity={0.85}
                />
              );
            })}
          </g>

          {/* Rising Sun Disk */}
          <circle cx="250" cy="270" r="58" fill="url(#sunGrad)" stroke="#f59e0b" strokeWidth="3" />

          {/* Horizon Blue Lake / Valley */}
          <ellipse cx="250" cy="300" rx="140" ry="25" fill="#0284c7" opacity={0.6} />

          {/* Rolling Green Hills */}
          <path
            d="M 90 350 Q 180 290, 250 330 T 410 330 L 410 500 L 90 500 Z"
            fill="url(#hillsGrad)"
          />
          <path
            d="M 100 380 Q 230 330, 320 370 T 410 370 L 410 500 L 100 500 Z"
            fill="#15803d"
            opacity={0.9}
          />

          {/* Sprouting Tea / Crop Seedlings (Left) */}
          <g transform="translate(160, 340)">
            <path d="M 0 35 Q 2 15, 0 0" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
            <path d="M 0 18 C -15 8, -25 20, 0 5" fill="#4ade80" stroke="#166534" strokeWidth="2" />
            <path d="M 0 10 C 15 -2, 25 10, 0 -2" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            {/* Dew drop */}
            <circle cx="-6" cy="12" r="2.5" fill="#ffffff" opacity={0.8} />
          </g>

          {/* Sprouting Tea / Crop Seedlings (Right) */}
          <g transform="translate(340, 340)">
            <path d="M 0 35 Q -2 15, 0 0" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
            <path d="M 0 18 C 15 8, 25 20, 0 5" fill="#4ade80" stroke="#166534" strokeWidth="2" />
            <path d="M 0 10 C -15 -2, -25 10, 0 -2" fill="#22c55e" stroke="#166534" strokeWidth="2" />
            {/* Dew drop */}
            <circle cx="6" cy="12" r="2.5" fill="#ffffff" opacity={0.8} />
          </g>

          {/* Central Academic Torch */}
          <g transform="translate(250, 370)">
            {/* Torch handle and bowl */}
            <path d="M -16 -40 L 16 -40 L 12 -20 L -12 -20 Z" fill="#1f2937" stroke="#111827" strokeWidth="2" />
            <path d="M -9 -20 L 9 -20 L 6 70 L -6 70 Z" fill="#374151" stroke="#111827" strokeWidth="2" />
            <circle cx="0" cy="72" r="8" fill="#1f2937" />

            {/* Glowing Flame */}
            <path
              d="M 0 -42 C -18 -65, -12 -95, 0 -115 C 12 -95, 18 -65, 0 -42 Z"
              fill="url(#flameGrad)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            <path
              d="M 0 -44 C -8 -60, -5 -80, 0 -95 C 5 -80, 8 -60, 0 -44 Z"
              fill="#fef08a"
            />
          </g>
        </g>

        {/* Top Arc Ribbon: BOMET UNIVERSITY */}
        <g id="top-arch-title">
          <path
            d="M 100 80 C 195 55, 305 55, 400 80 L 390 125 C 300 105, 200 105, 110 125 Z"
            fill="#15803d"
            stroke="#eab308"
            strokeWidth="3"
          />
          {/* Gold decorative stars */}
          <polygon points="128,102 131,108 138,109 133,114 134,120 128,116 122,120 123,114 118,109 125,108" fill="#facc15" />
          <polygon points="250,70 253,75 259,76 255,80 256,86 250,83 244,86 245,80 241,76 247,75" fill="#facc15" />
          <polygon points="372,102 375,108 382,109 377,114 378,120 372,116 366,120 367,114 362,109 369,108" fill="#facc15" />

          {/* Arched Text */}
          <path id="textArcPath" d="M 125 116 Q 250 82 375 116" fill="none" />
          <text fill="#ffffff" fontWeight="800" fontSize="28" letterSpacing="4" fontFamily="'Outfit', sans-serif">
            <textPath href="#textArcPath" startOffset="50%" textAnchor="middle">
              BOMET UNIVERSITY
            </textPath>
          </text>
        </g>

        {/* Lower Motto Gold Ribbon: Green University for Sustainability */}
        <g id="motto-banner" transform="translate(0, 15)">
          {/* Ribbon Ends */}
          <path d="M 40 435 L 85 415 L 85 455 Z" fill="#ca8a04" />
          <path d="M 460 435 L 415 415 L 415 455 Z" fill="#ca8a04" />

          {/* Main Flowing Ribbon */}
          <path
            d="M 45 428 Q 250 395 455 428 L 445 468 Q 250 435 55 468 Z"
            fill="url(#goldRibbon)"
            stroke="#a16207"
            strokeWidth="3"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />

          {/* Ribbon Text */}
          <path id="mottoArcPath" d="M 65 452 Q 250 422 435 452" fill="none" />
          <text fill="#14532d" fontWeight="800" fontStyle="italic" fontSize="20" letterSpacing="0.5" fontFamily="'Outfit', sans-serif">
            <textPath href="#mottoArcPath" startOffset="50%" textAnchor="middle">
              Green University for Sustainability
            </textPath>
          </text>
        </g>

        {/* Open Book of Knowledge at the Base */}
        <g id="open-book" transform="translate(250, 520)">
          {/* Book Pages */}
          <path
            d="M 0 5 C -40 -15, -120 -15, -180 5 C -120 20, -40 20, 0 35 C 40 20, 120 20, 180 5 C 120 -15, 40 -15, 0 5 Z"
            fill="#ffffff"
            stroke="#16a34a"
            strokeWidth="4"
          />
          {/* Book Spine Center Marker */}
          <circle cx="0" cy="20" r="14" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
          <path d="M -160 8 Q -100 -5 -20 12" stroke="#16a34a" strokeWidth="3" fill="none" />
          <path d="M 20 12 Q 100 -5 160 8" stroke="#16a34a" strokeWidth="3" fill="none" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight uppercase">
            Bomet University
          </span>
          <span className="text-xs font-semibold text-emerald-700 tracking-wide">
            Green University for Sustainability
          </span>
        </div>
      )}
    </div>
  );
};
