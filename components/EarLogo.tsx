export default function EarLogo() {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
      {/* Main mark: .ear + sound waves */}
      <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
        {/* Dot */}
        <span style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 400,
          color: "#1a1a1a",
          letterSpacing: "-0.02em",
        }}>.</span>

        {/* ear */}
        <span style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 400,
          color: "#1a1a1a",
          letterSpacing: "-0.01em",
        }}>ear</span>

        {/* Sound waves as SVG — animated left to right */}
        <svg
          width="48" height="65"
          viewBox="0 0 28 38"
          style={{ marginLeft: "3px", marginBottom: "4px" }}
        >
          {/* Arc 1 — small, animates first */}
          <path
            d="M 4,28 Q 10,19 4,10"
            fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"
            style={{ animationName: "waveOut", animationDuration: "1.4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "0s" }}
          />
          {/* Arc 2 — medium */}
          <path
            d="M 10,32 Q 20,19 10,6"
            fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"
            style={{ animationName: "waveOut", animationDuration: "1.4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "0.25s" }}
          />
          {/* Arc 3 — large, animates last */}
          <path
            d="M 16,36 Q 30,19 16,2"
            fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round"
            style={{ animationName: "waveOut", animationDuration: "1.4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      {/* Divider + tagline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px", paddingLeft: "2px" }}>
        <div style={{ width: "36px", height: "1px", background: "#1a1a1a" }} />
        <span style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(0.45rem, 0.8vw, 0.58rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#555",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}>we hear you. we understand you.</span>
      </div>
    </div>
  );
}
