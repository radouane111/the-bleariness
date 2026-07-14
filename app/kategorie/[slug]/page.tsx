import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getArticlesByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/kategorie/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: "Kategorie nicht gefunden" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage(
  props: PageProps<"/kategorie/[slug]">
) {
  const { slug } = await props.params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(slug);

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
                  cat.slug === slug
                    ? "border-gold bg-gold text-white"
                    : "border-border text-muted hover:border-gold hover:text-gold"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
            {category.name}
          </h1>
          <p className="text-muted mt-3 font-sans text-lg max-w-xl">
            {category.description}
          </p>
          <div className="mt-4 text-subtle text-sm font-sans">
            {categoryArticles.length}{" "}
            {categoryArticles.length === 1 ? "Artikel" : "Artikel"}
          </div>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted font-sans text-lg">
                In dieser Kategorie sind noch keine Artikel verfügbar.
              </p>
              <Link
                href="/"
                className="inline-block mt-6 text-gold font-sans text-sm uppercase tracking-widest hover:underline"
              >
                Zur Startseite
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
