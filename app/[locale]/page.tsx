import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import { articles, categories, getEditorsPicks, formatDate } from "@/lib/data";

import CoverSlider from "@/components/CoverSlider";


export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();
  const editorsPicks = getEditorsPicks(locale);
  const localeArticles = articles
    .filter((a) => !a.locale || a.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const recentArticles = localeArticles.slice(0, 4);
  const sliderArticles = localeArticles.slice(0, 6);

  return (
    <div className="bg-white">

      {/* ── COVER SLIDER ─────────────────────────────────────────────── */}
      <div className="pt-[10px]">
        <CoverSlider articles={sliderArticles} />
      </div>

      {/* ── MAIN EDITORIAL GRID ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto pt-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">

          {/* LEFT — Latest Articles (text-heavy) */}
          <div className="lg:col-span-2 divide-y divide-border border-r border-border">
            <div className="px-6 py-1 bg-charcoal">
              <span className="text-white text-xs font-sans uppercase tracking-widest font-semibold">
                {t("home.latestArticles")}
              </span>
            </div>
            {recentArticles.map((article) => (
              <Link key={article.id} href={`/artikel/${article.slug}`} className="group flex gap-5 p-5 hover:bg-cream transition-colors">
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden bg-cream hidden sm:block">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="96px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="block w-3 h-0.5 bg-accent" />
                    <span className="text-accent text-xs font-sans uppercase tracking-widest font-semibold">
                      {t(`categories.${article.categorySlug}`)}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal leading-snug mb-1 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm font-sans leading-snug line-clamp-2 mb-2">{article.excerpt}</p>
                  <span className="text-subtle text-xs font-sans">{formatDate(article.date)}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* RIGHT — Editor's Picks (compact) */}
          <div className="flex flex-col">
            <div className="px-6 py-1 bg-accent">
              <span className="text-white text-xs font-sans uppercase tracking-widest font-semibold">
                {t("home.editorsPicks")}
              </span>
            </div>
            <div className="divide-y divide-border flex-1">
              {editorsPicks.slice(0, 4).map((article) => (
                <Link key={article.id} href={`/artikel/${article.slug}`} className="group block p-5 hover:bg-cream transition-colors">
                  <span className="text-accent text-xs font-sans uppercase tracking-widest font-semibold block mb-1.5">
                    {t(`categories.${article.categorySlug}`)}
                  </span>
                  <h3 className="font-serif text-base font-bold text-charcoal leading-snug group-hover:text-accent transition-colors mb-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1 text-subtle text-xs font-sans">
                    <span>{article.readTime} {t("hero.minRead")}</span>
                    <span>·</span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

<Newsletter />
    </div>
  );
}
