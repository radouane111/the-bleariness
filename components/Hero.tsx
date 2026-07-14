import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { Article } from "@/lib/data";
import { formatDate } from "@/lib/data";

export default async function Hero({ article }: { article: Article }) {
  const t = await getTranslations();

  return (
    <section className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="relative h-64 sm:h-96 lg:h-full" style={{ minHeight: "450px" }}>
          <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>

        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-20 bg-white">
          <div className="max-w-lg">
            <span className="inline-block text-gold text-xs font-sans uppercase tracking-widest mb-4 pb-2 border-b border-gold">
              {t(`categories.${article.categorySlug}`)} · {t("hero.coverStory")}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl font-bold text-charcoal leading-tight mb-5">
              {article.title}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8 font-sans">
              {article.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-subtle text-sm mb-8 font-sans">
              <span className="text-charcoal font-medium">{article.author}</span>
              <span>·</span>
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.readTime} {t("hero.minRead")}</span>
            </div>
            <Link
              href={`/artikel/${article.slug}`}
              className="inline-flex items-center gap-2 text-charcoal border-b-2 border-gold pb-1 text-sm font-sans uppercase tracking-widest hover:text-gold transition-colors group"
            >
              {t("hero.readArticle")}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
