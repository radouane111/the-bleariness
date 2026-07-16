"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { articles, categories } from "@/lib/data";
import { formatDate } from "@/lib/data";

interface Props {
  onClose: () => void;
}

export default function SearchOverlay({ onClose }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim().length > 0
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.author.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : articles.slice(0, 4);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) onClose();
    };
    setTimeout(() => document.addEventListener("mousedown", handler), 100);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div ref={overlayRef} className="bg-white w-full shadow-2xl" style={{ maxHeight: "90vh", overflowY: "auto" }}>

        {/* ── SUCHLEISTE ── */}
        <div className="flex items-stretch border-b border-gray-200">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="flex-1 px-6 py-4 text-base font-sans text-gray-800 outline-none placeholder-gray-400"
          />
          <button
            className="flex items-center gap-2 px-6 py-4 text-white text-sm font-sans uppercase tracking-widest font-semibold"
            style={{ background: "#0d0d0d" }}
            onClick={onClose}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {t("search.button")}
          </button>
          <button onClick={onClose} className="px-4 text-gray-400 hover:text-gray-700 border-l border-gray-200" aria-label="Schließen">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── DROPDOWN PANEL ── */}
        <div className="max-w-3xl mx-auto px-6 py-6">

          {/* Suchvorschläge (Kategorien als Chips) */}
          {query.trim().length === 0 && (
            <>
              <p className="text-sm font-sans font-semibold text-gray-800 mb-4">
                {t("search.suggestions")}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setQuery(t(`categories.${cat.slug}`))}
                    className="px-4 py-2 border border-gray-300 text-sm font-sans text-gray-700 hover:border-gray-800 hover:text-gray-900 transition-colors"
                  >
                    {t(`categories.${cat.slug}`)}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Artikel-Liste */}
          <p className="text-sm font-sans font-semibold text-gray-800 mb-1">
            {query.trim().length > 0 ? t("search.resultsFor", { query }) : t("search.mostRead")}
          </p>
          <div className="divide-y divide-gray-100 mt-3">
            {filtered.length === 0 ? (
              <p className="text-sm font-sans text-gray-400 py-4">{t("search.noResults")}</p>
            ) : (
              filtered.map((article) => (
                <Link
                  key={article.id}
                  href={`/artikel/${article.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-4 py-4 hover:bg-gray-50 transition-colors group -mx-2 px-2"
                >
                  {/* Kleines farbiges Icon */}
                  <div
                    className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ background: "#D4A017" }}
                  >
                    {article.title.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-sans font-semibold text-gray-900 group-hover:text-black leading-snug mb-1 line-clamp-2">
                      {article.title}
                    </p>
                    <p className="text-xs font-sans text-gray-400">
                      {article.author} · {formatDate(article.date, locale)}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
