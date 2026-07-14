"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState } from "react";

const LANG_LABELS: Record<string, { label: string; flag: string }> = {
  de: { label: "DE", flag: "🇩🇪" },
  en: { label: "EN", flag: "🇬🇧" },
  fr: { label: "FR", flag: "🇫🇷" },
  ar: { label: "AR", flag: "🇸🇦" },
  es: { label: "ES", flag: "🇪🇸" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  const current = LANG_LABELS[locale];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest hover:text-gold transition-colors border px-2.5 py-1.5"
        style={{ color: "#D4A017", borderColor: "#D4A017" }}
        aria-label="Language / Sprache"
      >
        <span>{current?.flag}</span>
        <span>{current?.label}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-border shadow-lg z-50 min-w-[110px]">
          {routing.locales.map((loc) => {
            const lang = LANG_LABELS[loc];
            return (
              <button
                key={loc}
                onClick={() => handleChange(loc)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-sans uppercase tracking-widest transition-colors text-left ${
                  loc === locale
                    ? "text-gold bg-cream"
                    : "text-charcoal hover:text-gold hover:bg-cream"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
