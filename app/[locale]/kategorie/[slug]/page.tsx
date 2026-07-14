import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { categories, getArticlesByCategory } from "@/lib/data";
import { routing } from "@/i18n/routing";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    categories.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Not found" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(slug, locale);

  return (
    <div className="min-h-screen">
      <div className="bg-cream border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategorie/${cat.slug}`}
                className={`text-xs font-sans uppercase tracking-widest px-4 py-2 border transition-colors ${
                  cat.slug === slug ? "border-gold bg-gold text-white" : "border-border text-muted hover:border-gold hover:text-gold"
                }`}
              >
                {t(`categories.${cat.slug}`)}
              </Link>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
            {t(`categories.${category.slug}`)}
          </h1>
          <p className="text-muted mt-3 font-sans text-lg max-w-xl">{category.description}</p>
          <div className="mt-4 text-subtle text-sm font-sans">
            {categoryArticles.length} {t("category.articles")}
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categoryArticles.map((article) => <ArticleCard key={article.id} article={article} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted font-sans text-lg">{t("category.noArticles")}</p>
              <Link href="/" className="inline-block mt-6 text-gold font-sans text-sm uppercase tracking-widest hover:underline">
                {t("category.backHome")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
