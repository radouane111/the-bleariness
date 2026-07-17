"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import type { Article } from "@/lib/data";
import { formatDate } from "@/lib/data";

const INTERVAL = 5000;

export default function CoverSlider({ articles }: { articles: Article[] }) {
  const t = useTranslations();
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setProgress(0);
      setVisible(true);
    }, 250);
  }, []);

  const goNext = useCallback(() => goTo((current + 1) % articles.length), [current, articles.length, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + articles.length) % articles.length), [current, articles.length, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  useEffect(() => {
    setProgress(0);
    const step = 100 / (INTERVAL / 50);
    const bar = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 50);
    return () => clearInterval(bar);
  }, [current]);

  const article = articles[current];

  return (
    <section
      className="relative overflow-hidden border-b-2 border-gray-800"
      style={{ height: "58vh", minHeight: "380px" }}
    >
      {/* Bilder gestapelt, Fade */}
      {articles.map((a, idx) => (
        <div
          key={a.id}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <Image src={a.image} alt={a.title} fill priority={idx === 0} className="object-cover" sizes="100vw" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-16 px-5 md:px-16 max-w-3xl transition-opacity duration-250"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          <span className="block w-6 h-px bg-red-500" />
          <span className="text-red-400 text-xs font-sans font-bold uppercase tracking-widest">
            {t(`categories.${article.categorySlug}`)}
          </span>
        </div>

        <h1 className="font-serif text-white font-bold leading-tight mb-2 md:mb-4"
          style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}>
          {article.title}
        </h1>

        <p className="hidden sm:block text-white/70 text-base font-sans leading-relaxed mb-4 max-w-xl line-clamp-2">
          {article.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <div className="hidden sm:flex items-center gap-2 text-white/60 text-xs font-sans uppercase tracking-wider">
            <span className="text-white font-semibold">{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.date, locale)}</span>
            <span>·</span>
            <span>{article.readTime} {t("hero.minRead")}</span>
          </div>
          <Link
            href={`/artikel/${article.slug}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-sans uppercase tracking-widest px-4 py-2 md:px-5 md:py-2.5 transition-colors"
          >
            {t("hero.readArticle")}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Pfeile */}
      <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-red-600 text-white transition-colors" aria-label="Previous">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-red-600 text-white transition-colors" aria-label="Next">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        {articles.map((_, idx) => (
          <button key={idx} onClick={() => goTo(idx)} aria-label={`Slide ${idx + 1}`}>
            <span className={`block rounded-full transition-all duration-300 ${idx === current ? "w-5 h-1.5 bg-red-500" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`} />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-5 z-20 text-white/40 text-xs font-sans tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
      </div>

      {/* Fortschrittsbalken */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-20">
        <div className="h-full bg-red-600 transition-none" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
