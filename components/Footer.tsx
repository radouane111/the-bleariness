import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/data";

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-charcoal text-white" dir="ltr">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Logo + Social */}
        <div className="mb-8">
          <Link href="/" className="font-serif text-3xl font-bold tracking-[0.2em] uppercase text-white">
            The Bleariness
          </Link>
          <div className="flex gap-5 mt-4">
            <a href="https://www.instagram.com/thebleariness?igsh=YW13dWZyeHBkOTk3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold text-xs font-sans uppercase tracking-widest transition-colors">
              Instagram
            </a>
          </div>
        </div>

        {/* Links — über der Linie */}
        <div className="flex justify-end flex-wrap items-center gap-x-5 gap-y-1 pb-3">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/kategorie/${cat.slug}`} className="text-xs text-gray-400 hover:text-gold transition-colors font-sans">
              {t(`categories.${cat.slug}`)}
            </Link>
          ))}
          <span className="text-white/20">|</span>
          {[
            { key: "about", href: "/ueber-uns" },
            { key: "contact", href: "/kontakt" },
            { key: "imprint", href: "/impressum" },
            { key: "privacy", href: "/datenschutz" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-xs text-gray-400 hover:text-gold transition-colors font-sans">
              {t(`footer.${link.key}`)}
            </Link>
          ))}
        </div>

        {/* Linie + Copyright */}
        <div className="border-t border-white/10 pt-3 pb-3">
          <span className="text-xs text-gray-600 font-sans">
            © {new Date().getFullYear()} The Bleariness. {t("footer.copyright")}
          </span>
        </div>

      </div>
    </footer>
  );
}
