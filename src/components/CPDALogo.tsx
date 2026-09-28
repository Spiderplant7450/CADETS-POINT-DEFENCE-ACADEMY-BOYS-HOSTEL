import React, { useState } from 'react';

interface CPDALogoProps {
  className?: string;
  size?: number | string;
}

export const CPDALogo: React.FC<CPDALogoProps> = ({ className = '', size = 180 }) => {
  const [imageError, setImageError] = useState(false);

  const dimensionStyle =
    typeof size === 'number'
      ? { width: `${size}px`, height: `${size}px` }
      : { width: size, height: size };

  if (!imageError) {
    return (
      <div
        style={dimensionStyle}
        className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none ${className}`}
      >
        <picture className="w-full h-full block">
          <source type="image/webp" srcSet={`${import.meta.env.BASE_URL}images/cpda-logo.webp`} />
          <img
            src={`${import.meta.env.BASE_URL}images/cpda-logo.jpg`}
            alt="Cadets Point Defence Academy Boys Hostel Logo"
            className="w-full h-full object-contain rounded-full drop-shadow-xl"
            onError={() => setImageError(true)}
            loading="eager"
          />
        </picture>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`select-none drop-shadow-md ${className}`}
      aria-label="Cadets Point Defence Academy Boys Hostel Logo"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9DF7B" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#AA820A" />
          <stop offset="75%" stopColor="#F3CF65" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        <linearGradient id="goldBannerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDEB9E" />
          <stop offset="40%" stopColor="#E5B83B" />
          <stop offset="70%" stopColor="#C5931C" />
          <stop offset="100%" stopColor="#9E740F" />
        </linearGradient>

        <linearGradient id="militaryGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#104229" />
          <stop offset="50%" stopColor="#0B301E" />
          <stop offset="100%" stopColor="#072013" />
        </linearGradient>

        <linearGradient id="creamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="100%" stopColor="#FAF2DE" />
        </linearGradient>

        {/* Text Paths for circular text */}
        <path
          id="topArcPath"
          d="M 68,250 A 182,182 0 1,1 432,250"
          fill="none"
        />
        <path
          id="bottomArcPath"
          d="M 432,250 A 182,182 0 0,1 68,250"
          fill="none"
        />

        {/* Drop shadow */}
        <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" floodColor="#000" />
        </filter>
      </defs>

      {/* Outer Gold Border */}
      <circle cx="250" cy="250" r="246" fill="url(#goldRingGrad)" />

      {/* Main Military Green Ring */}
      <circle cx="250" cy="250" r="236" fill="url(#militaryGreenGrad)" />

      {/* Inner Gold Ring Border */}
      <circle cx="250" cy="250" r="194" fill="none" stroke="url(#goldRingGrad)" strokeWidth="4" />
      <circle cx="250" cy="250" r="190" fill="none" stroke="#072013" strokeWidth="1.5" />

      {/* Circular Text Top: CADETS POINT DEFENCE ACADEMY */}
      <text
        fill="url(#goldRingGrad)"
        fontSize="21"
        fontFamily="'Cinzel', Georgia, serif"
        fontWeight="800"
        letterSpacing="2.5"
      >
        <textPath href="#topArcPath" startOffset="50%" textAnchor="middle">
          ★ CADETS POINT DEFENCE ACADEMY ★
        </textPath>
      </text>

      {/* Circular Text Bottom: BUILDING FUTURE DEFENCE OFFICERS */}
      <text
        fill="url(#goldRingGrad)"
        fontSize="18.5"
        fontFamily="'Cinzel', Georgia, serif"
        fontWeight="800"
        letterSpacing="2.5"
      >
        <textPath href="#bottomArcPath" startOffset="50%" textAnchor="middle">
          BUILDING FUTURE DEFENCE OFFICERS
        </textPath>
      </text>

      {/* Inner Medallion Background */}
      <circle cx="250" cy="250" r="188" fill="url(#creamGrad)" />

      {/* Inner Decorative Ring */}
      <circle cx="250" cy="250" r="184" fill="none" stroke="#0D3823" strokeWidth="1" strokeOpacity="0.4" />

      {/* Indian Tricolor Swoosh at Top */}
      <g opacity="0.95">
        {/* Saffron Ribbon */}
        <path
          d="M 120,162 C 160,118 200,95 250,92 C 300,95 340,118 380,162 C 345,130 300,108 250,106 C 200,108 155,130 120,162 Z"
          fill="#FF9933"
        />
        {/* White Ribbon */}
        <path
          d="M 128,172 C 165,135 205,115 250,113 C 295,115 335,135 372,172 C 342,143 300,123 250,121 C 200,123 158,143 128,172 Z"
          fill="#FFFFFF"
          stroke="#E5E5E5"
          strokeWidth="0.5"
        />
        {/* Green Ribbon */}
        <path
          d="M 136,182 C 170,150 210,132 250,130 C 290,132 330,150 364,182 C 338,157 298,138 250,136 C 202,138 162,157 136,182 Z"
          fill="#138808"
        />
      </g>

      {/* Defence Officer Silhouette Saluting */}
      <g fill="#0D3823">
        {/* Head and Peaked Cap */}
        <path d="M 235,142 C 235,132 245,130 252,130 C 263,130 274,136 272,145 C 271,152 268,156 268,162 C 268,166 264,171 259,173 C 255,174 250,172 248,169 C 244,166 242,158 240,156 C 236,155 235,147 235,142 Z" />
        {/* Peaked Cap Visor / Crown */}
        <path d="M 233,137 C 237,130 248,124 262,125 C 274,126 282,133 277,140 C 266,137 248,135 233,137 Z" />
        <path d="M 228,141 C 238,140 248,141 254,143 C 248,146 238,146 228,141 Z" />
        {/* Saluting Right Arm & Hand Touching Brow */}
        <path d="M 175,166 C 188,140 205,126 224,124 C 232,123 238,128 238,134 C 238,138 234,140 228,141 C 215,143 203,153 194,171 C 187,185 182,198 180,205 L 160,192 C 163,184 169,174 175,166 Z" />
        {/* Torso & Shoulders with Epaulets */}
        <path d="M 180,205 C 190,196 208,187 235,185 C 258,185 278,193 294,204 C 302,210 306,218 308,226 L 168,226 C 170,217 174,210 180,205 Z" />
      </g>

      {/* Secondary Motto: DISCIPLINE TODAY A BRIGHTER TOMORROW */}
      <g transform="translate(315, 150)">
        <text
          x="0"
          y="0"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="7.5"
          fill="#0D3823"
          letterSpacing="0.8"
        >
          DISCIPLINE
        </text>
        <text
          x="0"
          y="9"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="7.5"
          fill="#0D3823"
          letterSpacing="0.8"
        >
          TODAY
        </text>
        <line x1="0" y1="12" x2="52" y2="12" stroke="#C59B27" strokeWidth="1" />
        <text
          x="0"
          y="20"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="6.5"
          fill="#0D3823"
          letterSpacing="0.6"
        >
          A BRIGHTER
        </text>
        <text
          x="0"
          y="28"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="6.5"
          fill="#0D3823"
          letterSpacing="0.6"
        >
          TOMORROW
        </text>
      </g>

      {/* Main Bold Lettering: CPDA */}
      <g filter="url(#shadowFilter)">
        {/* CPDA Gold Glow / Extrusion */}
        <text
          x="250"
          y="256"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="900"
          fontSize="72"
          letterSpacing="2"
          fill="#0D3823"
          stroke="url(#goldRingGrad)"
          strokeWidth="6"
          strokeLinejoin="round"
        >
          CPDA
        </text>
        {/* CPDA Front Face */}
        <text
          x="250"
          y="256"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="900"
          fontSize="72"
          letterSpacing="2"
          fill="#0D3823"
        >
          CPDA
        </text>
      </g>

      {/* BOYS HOSTEL Ribbon Banner */}
      <g transform="translate(0, 10)">
        {/* Ribbon Tails */}
        <polygon points="68,268 84,256 68,244 94,244 94,268" fill="#AA820A" />
        <polygon points="432,268 416,256 432,244 406,244 406,268" fill="#AA820A" />

        {/* Central Gold Plaque */}
        <rect
          x="88"
          y="244"
          width="324"
          height="38"
          rx="6"
          fill="url(#goldBannerGrad)"
          stroke="#072013"
          strokeWidth="2.5"
        />

        {/* Bed Icon Left */}
        <g transform="translate(108, 253)" fill="#0D3823">
          {/* Bed Headboard */}
          <rect x="0" y="2" width="4" height="15" rx="1" />
          {/* Pillow */}
          <rect x="6" y="5" width="7" height="4" rx="1.5" />
          {/* Mattress */}
          <rect x="4" y="9" width="22" height="4" rx="1" />
          {/* Bed Footboard */}
          <rect x="25" y="6" width="3" height="11" rx="1" />
          {/* Legs */}
          <rect x="2" y="15" width="2" height="4" />
          <rect x="25" y="15" width="2" height="4" />
        </g>

        {/* BOYS HOSTEL Text */}
        <text
          x="250"
          y="271"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="3.5"
          fill="#072616"
        >
          BOYS HOSTEL
        </text>

        {/* Bed Icon Right */}
        <g transform="translate(364, 253)" fill="#0D3823">
          <rect x="0" y="6" width="3" height="11" rx="1" />
          <rect x="2" y="9" width="22" height="4" rx="1" />
          <rect x="15" y="5" width="7" height="4" rx="1.5" />
          <rect x="24" y="2" width="4" height="15" rx="1" />
          <rect x="1" y="15" width="2" height="4" />
          <rect x="24" y="15" width="2" height="4" />
        </g>
      </g>

      {/* Values Subtext: SAFE • SECURE • DISCIPLINED • SUPPORTIVE */}
      <text
        x="250"
        y="308"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="10"
        letterSpacing="1.2"
        fill="#0D3823"
      >
        SAFE • SECURE • DISCIPLINED • SUPPORTIVE
      </text>

      {/* Secondary Line: A HOME AWAY FROM HOME with Gold Rules */}
      <g transform="translate(0, 318)">
        <line x1="120" y1="2" x2="168" y2="2" stroke="#C59B27" strokeWidth="1" />
        <text
          x="250"
          y="5"
          textAnchor="middle"
          fontFamily="'Merriweather', Georgia, serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="10"
          letterSpacing="0.8"
          fill="#0D3823"
        >
          A HOME AWAY FROM HOME
        </text>
        <line x1="332" y1="2" x2="380" y2="2" stroke="#C59B27" strokeWidth="1" />
      </g>

      {/* Small Indian Tricolor Bar */}
      <g transform="translate(195, 331)">
        <rect x="0" y="0" width="110" height="5" rx="2.5" fill="#FFFFFF" stroke="#0D3823" strokeWidth="0.5" />
        <rect x="0" y="0" width="36.6" height="5" rx="2.5" fill="#FF9933" />
        <rect x="36.6" y="0" width="36.6" height="5" fill="#FFFFFF" />
        <rect x="73.3" y="0" width="36.7" height="5" rx="2.5" fill="#138808" />
      </g>

      {/* Hostel Building Architecture Illustration */}
      <g transform="translate(138, 342)">
        {/* Sky / Base Behind building */}
        {/* Main Central Hostel Building Facade */}
        <rect x="42" y="14" width="140" height="58" fill="#F4EFE6" stroke="#0D3823" strokeWidth="1.2" />

        {/* Roof Parapet & Sign */}
        <rect x="38" y="10" width="148" height="5" fill="#C59B27" />
        <rect x="90" y="2" width="44" height="12" fill="#EAE5D9" stroke="#0D3823" strokeWidth="1" />
        <text
          x="112"
          y="10"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="5"
          letterSpacing="0.8"
          fill="#0D3823"
        >
          HOSTEL
        </text>

        {/* Windows Upper Floor */}
        <rect x="52" y="20" width="14" height="10" fill="#0D3823" rx="0.5" />
        <rect x="72" y="20" width="14" height="10" fill="#0D3823" rx="0.5" />
        <rect x="105" y="18" width="14" height="12" fill="#0D3823" rx="0.5" />
        <rect x="138" y="20" width="14" height="10" fill="#0D3823" rx="0.5" />
        <rect x="158" y="20" width="14" height="10" fill="#0D3823" rx="0.5" />

        {/* Floor Divider */}
        <line x1="42" y1="36" x2="182" y2="36" stroke="#AA820A" strokeWidth="1.2" />

        {/* Windows Lower Floor & Main Entrance */}
        <rect x="52" y="42" width="14" height="10" fill="#0D3823" rx="0.5" />
        <rect x="72" y="42" width="14" height="10" fill="#0D3823" rx="0.5" />
        {/* Entrance Portal */}
        <rect x="103" y="38" width="18" height="24" fill="#072013" rx="1" />
        <rect x="106" y="42" width="12" height="20" fill="#AA820A" opacity="0.3" />
        <rect x="138" y="42" width="14" height="10" fill="#0D3823" rx="0.5" />
        <rect x="158" y="42" width="14" height="10" fill="#0D3823" rx="0.5" />

        {/* Trees Left */}
        <ellipse cx="28" cy="46" rx="16" ry="20" fill="#138808" />
        <ellipse cx="18" cy="52" rx="12" ry="15" fill="#0D3823" opacity="0.8" />
        <ellipse cx="34" cy="38" rx="10" ry="12" fill="#2E7D32" />

        {/* Trees Right */}
        <ellipse cx="196" cy="46" rx="16" ry="20" fill="#138808" />
        <ellipse cx="206" cy="52" rx="12" ry="15" fill="#0D3823" opacity="0.8" />
        <ellipse cx="190" cy="38" rx="10" ry="12" fill="#2E7D32" />

        {/* Manicured Front Lawns and Pathway */}
        <polygon points="100,62 124,62 136,72 88,72" fill="#DFD8C7" stroke="#0D3823" strokeWidth="0.8" />
        <ellipse cx="60" cy="62" rx="14" ry="4" fill="#2E7D32" />
        <ellipse cx="164" cy="62" rx="14" ry="4" fill="#2E7D32" />
      </g>
    </svg>
  );
};
