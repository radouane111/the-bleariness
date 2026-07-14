"use client";

import { useState, useEffect } from "react";

const SEGS: Record<number, number[]> = {
  0: [1,1,1,1,1,1,0],
  1: [0,1,1,0,0,0,0],
  2: [1,1,0,1,1,0,1],
  3: [1,1,1,1,0,0,1],
  4: [0,1,1,0,0,1,1],
  5: [1,0,1,1,0,1,1],
  6: [1,0,1,1,1,1,1],
  7: [1,1,1,0,0,0,0],
  8: [1,1,1,1,1,1,1],
  9: [1,1,1,1,0,1,1],
};

function Digit({ n }: { n: number }) {
  const s = SEGS[n] ?? SEGS[0];
  const ON = "#ffffff";
  const OFF = "#1e1e1e";
  const glow: React.CSSProperties = { filter: "drop-shadow(0 0 4px rgba(255,255,255,0.85))" };

  return (
    <svg width="26" height="44" viewBox="0 0 26 44">
      {/* Top (a) */}
      <polygon points="4,0 22,0 24,2.5 20,4.5 6,4.5 2,2.5"
        fill={s[0] ? ON : OFF} style={s[0] ? glow : undefined} />
      {/* Top-right (b) */}
      <polygon points="23,1 25,3 25,19 23,21 21,19 21,5"
        fill={s[1] ? ON : OFF} style={s[1] ? glow : undefined} />
      {/* Bottom-right (c) */}
      <polygon points="23,23 25,25 25,41 23,43 21,41 21,25"
        fill={s[2] ? ON : OFF} style={s[2] ? glow : undefined} />
      {/* Bottom (d) */}
      <polygon points="2,41.5 6,39.5 20,39.5 24,41.5 22,44 4,44"
        fill={s[3] ? ON : OFF} style={s[3] ? glow : undefined} />
      {/* Bottom-left (e) */}
      <polygon points="0,25 2,23 5,25 5,41 2,43 0,41"
        fill={s[4] ? ON : OFF} style={s[4] ? glow : undefined} />
      {/* Top-left (f) */}
      <polygon points="0,3 2,1 5,5 5,19 2,21 0,19"
        fill={s[5] ? ON : OFF} style={s[5] ? glow : undefined} />
      {/* Middle (g) */}
      <polygon points="2,21.5 4,19.5 22,19.5 24,21.5 22,23.5 4,23.5"
        fill={s[6] ? ON : OFF} style={s[6] ? glow : undefined} />
    </svg>
  );
}

export default function DigitalClock({ locale = "de" }: { locale?: string }) {
  const [time, setTime] = useState(new Date());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date());
      setBlink(b => !b);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const h = time.getHours();
  const m = time.getMinutes();
  const isPM = h >= 12;
  const h12 = h % 12 || 12;

  const d1 = Math.floor(h12 / 10);
  const d2 = h12 % 10;
  const d3 = Math.floor(m / 10);
  const d4 = m % 10;

  const dateStr = time.toLocaleDateString(
    locale === "ar" ? "ar-SA-u-nu-latn" : locale === "en" ? "en-GB" : locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "de-DE",
    { day: "numeric", month: "short", year: "numeric" }
  );

  return (
    <div className="flex flex-col items-start gap-1">
      <div style={{
        background: "#080808",
        borderRadius: "10px",
        padding: "8px 12px 10px 12px",
        display: "inline-block",
        boxShadow: "0 0 18px rgba(255,255,255,0.06), inset 0 0 12px rgba(0,0,0,0.8)",
      }}>
        {/* AM/PM */}
        <div style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "9px",
          fontFamily: "monospace",
          letterSpacing: "1px",
          marginBottom: "4px",
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.5))",
        }}>
          {isPM ? "PM" : "AM"}
        </div>

        {/* Digits + colon */}
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <Digit n={d1} />
          <Digit n={d2} />

          {/* Blinking colon */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0 3px", marginBottom: "2px" }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: blink ? "#fff" : "#1e1e1e",
              boxShadow: blink ? "0 0 6px rgba(255,255,255,0.9)" : "none",
              transition: "background 0.1s",
            }} />
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: blink ? "#fff" : "#1e1e1e",
              boxShadow: blink ? "0 0 6px rgba(255,255,255,0.9)" : "none",
              transition: "background 0.1s",
            }} />
          </div>

          <Digit n={d3} />
          <Digit n={d4} />
        </div>
      </div>

      {/* Date */}
      <span style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "0.8rem",
        fontWeight: 800,
        fontStyle: "italic",
        color: "#1a1a1a",
        letterSpacing: "0.02em",
      }}>{dateStr}</span>
    </div>
  );
}
