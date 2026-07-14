import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { articles, categories, getFeatured, getEditorsPicks } from "@/lib/data";

export default function HomePage() {
  const featured = getFeatured();
  const editorsPicks = getEditorsPicks();
  const recentArticles = articles.filter((a) => !a.featured).slice(0, 6);

  return (
    <>
      {featured && <Hero article={featured} />}

      <section className="border-b border-border bg-cream py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategorie/${cat.slug}`}
              className="text-xs font-sans uppercase tracking-widest px-4 py-2 border border-border text-charcoal hover:border-gold hover:text-gold transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal whitespace-nowrap">
              Aktuelle Artikel
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal whitespace-nowrap">
              Editor&apos;s Picks
            </h2>
            <div className="flex-1 h-px bg-border" />
            <span className="text-gold text-xs font-sans uppercase tracking-widest whitespace-nowrap hidden md:block">
              Kuratiert von der Redaktion
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {editorsPicks[0] && (
              <div className="lg:col-span-2">
                <ArticleCard article={editorsPicks[0]} variant="large" />
              </div>
            )}
            <div className="flex flex-col divide-y divide-border">
              {editorsPicks.slice(1, 4).map((article) => (
                <ArticleCard key={article.id} article={article} variant="minimal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
