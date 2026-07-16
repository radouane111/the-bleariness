"use client";

import { useState, useEffect } from "react";

const SIZE = 100;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = SIZE / 2 - 1;

const AR_MONTHS = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

function formatArabicDate(date: Date): string {
  const day = date.getDate();
  const month = AR_MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

const toRad = (deg: number) => (deg * Math.PI) / 180;
const handXY = (angleDeg: number, length: number) => ({
  x: CX + length * Math.cos(toRad(angleDeg - 90)),
  y: CY + length * Math.sin(toRad(angleDeg - 90)),
});

export default function AnalogClock({ locale = "de" }: { locale?: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const h = time.getHours() % 12;
  const m = time.getMinutes();
  const s = time.getSeconds();

  const hourAngle = (h + m / 60) * 30;
  const minAngle  = (m + s / 60) * 6;

  const hourPt = handXY(hourAngle, R * 0.48);
  const minPt  = handXY(minAngle,  R * 0.68);

  const dateStr = locale === "ar"
    ? formatArabicDate(time)
    : time.toLocaleDateString(
        locale === "en" ? "en-GB" : "de-DE",
        { day: "numeric", month: "long", year: "numeric" }
      );

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>




        {/* White face */}
        <circle cx={CX} cy={CY} r={R} fill="white" />

        {/* Gold hour tick marks */}
        {Array.from({ length: 12 }, (_, i) => {
          const ang = i * 30;
          const outerEdge = R - 4;
          const x1 = CX + outerEdge * Math.cos(toRad(ang - 90));
          const y1 = CY + outerEdge * Math.sin(toRad(ang - 90));
          const x2 = CX + (outerEdge - 9) * Math.cos(toRad(ang - 90));
          const y2 = CY + (outerEdge - 9) * Math.sin(toRad(ang - 90));
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />
          );
        })}

        {/* Hour hand — black, thick */}
        <line x1={CX} y1={CY} x2={hourPt.x} y2={hourPt.y}
          stroke="#0d0d0d" strokeWidth="4.5" strokeLinecap="round" />

        {/* Minute hand — gold */}
        <line x1={CX} y1={CY} x2={minPt.x} y2={minPt.y}
          stroke="#D4A017" strokeWidth="3" strokeLinecap="round" />

        {/* Center gold dot */}
        <circle cx={CX} cy={CY} r={5.5} fill="#D4A017" />
        <circle cx={CX} cy={CY} r={2.5} fill="#b8860b" />

      </svg>

      {/* Date */}
      <span
        dir={locale === "ar" ? "rtl" : "ltr"}
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#1a1a1a",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textAlign: "center",
          width: "100%",
          display: "block",
        }}
      >{dateStr}</span>
    </div>
  );
}
