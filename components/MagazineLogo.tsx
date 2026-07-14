export default function MagazineLogo({ size = 1 }: { size?: number }) {
  const dim = Math.round(130 * size);

  return (
    <svg width={dim} height={dim} viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Circular path for text — starts at top, goes clockwise */}
        <path
          id="logo-circle-path"
          d="M 65,10 A 55,55 0 1,1 64.99,10"
          fill="none"
        />
        {/* Gold radial gradient for outer ring */}
        <radialGradient id="goldGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#f0d060" />
          <stop offset="100%" stopColor="#a07810" />
        </radialGradient>
      </defs>

      {/* Outer gold ring */}
      <circle cx="65" cy="65" r="62" fill="url(#goldGrad)" />

      {/* Main black circle */}
      <circle cx="65" cy="65" r="56" fill="#0d0d0d" />

      {/* Inner gold decorative ring */}
      <circle cx="65" cy="65" r="50" fill="none" stroke="#D4A017" strokeWidth="0.7" />
      <circle cx="65" cy="65" r="47" fill="none" stroke="#D4A017" strokeWidth="0.3" />

      {/* Large "B" monogram */}
      <text
        x="65" y="80"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="700"
        fill="white"
      >B</text>

      {/* Thin gold line under B */}
      <line x1="42" y1="88" x2="88" y2="88" stroke="#D4A017" strokeWidth="0.8" />

      {/* Circular text — THE BLEARINESS */}
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7.2"
        fontWeight="400"
        fill="#D4A017"
        letterSpacing="3.2"
      >
        <textPath href="#logo-circle-path" startOffset="6%">
          THE BLEARINESS  ✦  EST. 2024
        </textPath>
      </text>

      {/* Small decorative dots on the gold ring */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={65 + 59 * Math.cos(rad)}
            cy={65 + 59 * Math.sin(rad)}
            r="1.8"
            fill="#0d0d0d"
          />
        );
      })}
    </svg>
  );
}
