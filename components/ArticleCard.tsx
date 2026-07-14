import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Article } from "@/lib/data";
import { formatDate } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "horizontal" | "large" | "minimal";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <Link href={`/artikel/${article.slug}`} className="group flex gap-5 items-start">
        <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden bg-cream">
          <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="128px" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-gold text-xs font-sans uppercase tracking-widest">{article.category}</span>
          <h3 className="font-serif text-base font-bold text-charcoal mt-1 group-hover:text-gold transition-colors leading-snug line-clamp-2">{article.title}</h3>
          <span className="text-muted text-xs mt-1 block font-sans">{formatDate(article.date)}</span>
        </div>
      </Link>
    );
  }

  if (variant === "large") {
    return (
      <Link href={`/artikel/${article.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream mb-5">
          <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 66vw" />
        </div>
        <span className="text-gold text-xs font-sans uppercase tracking-widest">{article.category}</span>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mt-2 mb-3 group-hover:text-gold transition-colors leading-tight">{article.title}</h2>
        <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-3 font-sans">{article.excerpt}</p>
        <div className="flex items-center gap-3 text-subtle text-xs uppercase tracking-wider font-sans">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime} Min.</span>
        </div>
      </Link>
    );
  }

  if (variant === "minimal") {
    return (
      <Link href={`/artikel/${article.slug}`} className="group block py-5 border-b border-border last:border-0">
        <span className="text-gold text-xs font-sans uppercase tracking-widest">{article.category}</span>
        <h3 className="font-serif text-lg font-bold text-charcoal mt-1 group-hover:text-gold transition-colors leading-snug">{article.title}</h3>
        <p className="text-muted text-sm mt-2 line-clamp-2 font-sans">{article.excerpt}</p>
        <span className="text-subtle text-xs mt-2 block font-sans">{formatDate(article.date)}</span>
      </Link>
    );
  }

  return (
    <Link href={`/artikel/${article.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden bg-cream mb-4">
        <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <span className="text-gold text-xs font-sans uppercase tracking-widest">{article.category}</span>
      <h3 className="font-serif text-xl font-bold text-charcoal mt-2 mb-2 group-hover:text-gold transition-colors leading-snug">{article.title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-3 line-clamp-2 font-sans">{article.excerpt}</p>
      <div className="flex items-center gap-3 text-subtle text-xs uppercase tracking-wider font-sans">
        <span>{article.author}</span>
        <span>·</span>
        <span>{formatDate(article.date)}</span>
      </div>
    </Link>
  );
}
