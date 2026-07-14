"use client";

import { useState, useEffect } from "react";

const localeMap: Record<string, string> = {
  de: "de-DE",
  en: "en-GB",
  fr: "fr-FR",
  ar: "ar-SA-u-nu-latn",
  es: "es-ES",
};

export default function LiveClock({ locale = "de" }: { locale?: string }) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const bcp = localeMap[locale] ?? "de-DE";

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString(bcp, { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDate(now.toLocaleDateString(bcp, { day: "numeric", month: "long", year: "numeric" }));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [bcp]);

  if (!time) return null;

  return (
    <>
      <span>{date}</span>
      <span style={{ color: "#800020" }}>|</span>
      <span>{time}</span>
    </>
  );
}
