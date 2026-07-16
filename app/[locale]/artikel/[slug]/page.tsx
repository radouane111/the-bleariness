import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { articles, getArticleBySlug, formatDate } from "@/lib/data";
import { routing } from "@/i18n/routing";
import ArticleCard from "@/components/ArticleCard";
import PullQuote from "@/components/PullQuote";
import ArticleActions from "@/components/ArticleActions";
import ArticleTranslationSetter from "@/components/ArticleTranslationSetter";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articles.map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations();
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ArticleTranslationSetter translations={article.translations} />
      <article className="max-w-3xl mx-auto px-6 pt-12 md:pt-16">
        <div className="mb-8">
          <Link href={`/kategorie/${article.categorySlug}`} className="text-gold text-xs font-sans uppercase tracking-widest hover:text-gold-light transition-colors">
            {t(`categories.${article.categorySlug}`)}
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mt-3 leading-tight">{article.title}</h1>
          <p className="text-muted text-lg md:text-xl mt-4 font-sans leading-relaxed">{article.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 text-subtle text-sm mt-6 pb-6 border-b border-border font-sans">
            <span className="text-charcoal font-medium">{article.author}</span>
            <span>·</span>
            <span>{formatDate(article.date, locale)}</span>
            <span>·</span>
            <span>{article.readTime} {t("article.minRead")}</span>
          </div>
        </div>
      </article>

      <div className="relative w-full bg-cream mb-10" style={{ height: "55vh", minHeight: "320px" }}>
        <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="100vw" />
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-16">
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        <PullQuote
          quote="Die Zukunft gehört nicht denen, die sie vorhersagen, sondern denen, die sie gestalten."
          attribution={article.author}
        />
        <ArticleActions articleSlug={article.slug} articleTitle={article.title} />

      </article>

      {related.length > 0 && (
        <section className="bg-cream py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-6 mb-10">
              <h2 className="font-serif text-2xl font-bold text-charcoal whitespace-nowrap">{t("article.similarArticles")}</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((a) => <ArticleCard key={a.id} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
