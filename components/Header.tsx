"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { categories } from "@/lib/data";
import AnalogClock from "./AnalogClock";
import EarLogo from "./EarLogo";
import SearchOverlay from "./SearchOverlay";
import { useArticleLocale } from "./ArticleLocaleContext";

const LANG_LABELS: Record<string, string> = {
  de: "Deutsch",
  en: "English",
  ar: "عربي",
};

const LOGO_CHARS = [
  { char: "T",  gold: false },
  { char: "h",  gold: false },
  { char: "e",  gold: false },
  { char: " ",  gold: false },
  { char: "B",  gold: false },
  { char: "l",  gold: false },
  { char: "e",  gold: true  },
  { char: "a",  gold: true  },
  { char: "r",  gold: true  },
  { char: "i",  gold: false },
  { char: "n",  gold: false },
  { char: "e",  gold: false },
  { char: "s",  gold: false },
  { char: "s",  gold: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { slugMap } = useArticleLocale();

  const handleLocale = (loc: string) => {
    if (slugMap && slugMap[loc]) {
      router.push(`/artikel/${slugMap[loc]}`, { locale: loc });
    } else {
      router.replace(pathname, { locale: loc });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white" dir="ltr">

      {/* ── TOP BAR: Suche | Sprachen | Kontakt ── */}
      <div className="border-b border-gray-200 py-2 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4">

          {/* Links: Suche */}
          <div>
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-sans text-gray-400 hover:bg-gray-200 transition-colors"
              style={{ background: "#f0f0f0", minWidth: "180px" }}
              aria-label="Suchen"
            >
              <span className="flex-1 text-left">{t("search.placeholder")}</span>
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
          </div>

          {/* Mitte: Sprachen — exakt unter dem Titel */}
          <div className="flex items-center justify-center flex-wrap gap-0">
            {(["en", "de", "ar"] as const).map((loc, idx) => (
              <span key={loc} className="flex items-center">
                {idx > 0 && <span className="text-gray-300 mx-2 text-xs select-none">|</span>}
                <button
                  onClick={() => handleLocale(loc)}
                  className="text-xs font-sans tracking-widest transition-colors whitespace-nowrap"
                  style={{
                    color: loc === locale ? "#D4A017" : "#888",
                    fontWeight: loc === locale ? 700 : 400,
                  }}
                >
                  {LANG_LABELS[loc]}
                </button>
              </span>
            ))}
          </div>

          {/* Rechts: leer */}
          <div />



        </div>
      </div>

      {/* ── LOGO BAR: Uhr | Großer Titel | About ── */}
      <div className="px-6 py-5" style={{ borderBottom: "2px solid #0d0d0d" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-4">

          {/* Links: .ear Logo */}
          <div className="flex justify-start">
            <EarLogo />
          </div>

          {/* Mitte: Titel im Bild-Stil */}
          <div className="text-center">
            <Link href="/" className="group inline-block">
              <div style={{ lineHeight: 1 }}>
                {/* "the" klein, kursiv */}
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#0d0d0d",
                  letterSpacing: "0.04em",
                  marginBottom: "-0.25em",
                }}>the</div>

                {/* "bleariness" groß, fett — Buchstaben einzeln animiert */}
                <div style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                  fontWeight: 900,
                  letterSpacing: "0.01em",
                  lineHeight: 0.9,
                }}>
                  {"Bleariness".split("").map((char, i) => {
                    const isGold = i >= 2 && i <= 4;
                    const isB = i === 0;
                    return (
                      <span
                        key={i}
                        style={{
                          display: "inline-block",
                          color: isGold ? "#D4A017" : "#0d0d0d",
                          animation: `letterSlideIn 7s ease infinite`,
                          animationDelay: `${i * 0.07}s`,
                          opacity: 0,
                          fontSize: isB ? "clamp(2.8rem, 7vw, 5.8rem)" : undefined,
                          lineHeight: 1,
                          verticalAlign: "bottom",
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>

                {/* "— MAGAZINE —" */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5em",
                  marginTop: "0.35em",
                }}>
                  <span style={{ display: "block", height: "1px", width: "2em", background: "#0d0d0d" }} />
                  <span style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(0.5rem, 1vw, 0.65rem)",
                    fontWeight: 400,
                    letterSpacing: "0.25em",
                    color: "#0d0d0d",
                    textTransform: "uppercase",
                  }}>Magazine</span>
                  <span style={{ display: "block", height: "1px", width: "2em", background: "#0d0d0d" }} />
                </div>
              </div>
            </Link>
          </div>

          {/* Rechts: Analoge Uhr */}
          <div className="flex justify-end items-center pr-2">
            <AnalogClock locale={locale} />
          </div>

        </div>
      </div>

      {/* ── SECTION NAV ── */}
      <nav className="hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center justify-center overflow-x-auto">
            {(locale === "ar" ? [...categories].reverse() : categories).map((cat) => (
              <li key={cat.slug} className="flex-shrink-0">
                <Link
                  href={`/kategorie/${cat.slug}`}
                  className="block px-4 py-2.5 text-xs font-sans font-semibold uppercase tracking-widest text-gray-700 transition-colors border-b-2 border-transparent whitespace-nowrap"
                  onMouseEnter={e => { e.currentTarget.style.color = "#D4A017"; e.currentTarget.style.borderBottomColor = "#D4A017"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ""; e.currentTarget.style.borderBottomColor = "transparent"; }}
                >
                  {t(`categories.${cat.slug}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── MOBILE MENU BUTTON ── */}
      <div className="md:hidden flex items-center justify-between px-6 py-2 border-b border-gray-200">
        <span className="text-xs font-sans text-gray-500 uppercase tracking-widest">Menu</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-charcoal p-1" aria-label="Menu">
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <ul className="divide-y divide-gray-100">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/kategorie/${cat.slug}`}
                  className="block px-6 py-3.5 text-sm font-sans uppercase tracking-widest text-charcoal hover:text-black transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`categories.${cat.slug}`)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/ueber-uns" className="block px-6 py-3.5 text-sm font-sans uppercase tracking-widest text-charcoal" onClick={() => setMenuOpen(false)}>
                {t("nav.about")}
              </Link>
            </li>
          </ul>
        </div>
      )}

    </header>
  );
}
