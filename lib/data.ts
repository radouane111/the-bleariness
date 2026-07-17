export interface Category {
  name: string;
  slug: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  excerpt: string;
  content: string;
  featured: boolean;
  editorsPick: boolean;
  locale?: string;
  translations?: Record<string, string>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Society",
    slug: "society",
    description: "What connects us, what divides us – and what defines us.",
  },
  {
    name: "Politics & Economy",
    slug: "business",
    description: "Power, markets, and the decisions that shape our world.",
  },
  {
    name: "History",
    slug: "history",
    description: "The past that shapes our present and our future.",
  },
  {
    name: "Culture",
    slug: "culture",
    description: "Art, film, literature, and the cultural heritage of our time.",
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    description: "Music, cinema, sports, and everything that moves us.",
  },
];

export const articles: Article[] = [
  {
    id: "10",
    title: "Demnächst auf The Bleariness",
    subtitle: "Die ersten Artikel sind auf dem Weg. Wir arbeiten an Geschichten, die zählen.",
    slug: "bewusstsein-allein-in-der-masse",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 3,
    image: "/images/consciousness.png",
    excerpt: "Spannende Geschichten aus Gesellschaft, Kultur, Wirtschaft und Politik. Unsere ersten Artikel erscheinen bald.",
    content: `<h2>Bald verfügbar</h2>
<p>Wir befinden uns noch im Aufbau. Die ersten Artikel von The Bleariness sind in Arbeit und erscheinen in Kürze.</p>
<p>Wir glauben, dass guter Journalismus Zeit braucht. Deshalb nehmen wir uns diese Zeit – für Geschichten, die wirklich etwas zu sagen haben.</p>
<h2>Was Sie erwartet</h2>
<p>Tiefgründige Reportagen. Klare Analysen. Geschichten aus Gesellschaft, Kultur, Wirtschaft und Politik – unabhängig, ohne kommerziellen Druck.</p>
<p>Abonnieren Sie unseren Newsletter, um als Erste informiert zu werden, wenn neue Artikel erscheinen.</p>`,
    featured: false,
    editorsPick: true,
    locale: "de",
    translations: { en: "consciousness-alone-in-the-crowd", ar: "al-waiy-wahidan-fi-alzaham" },
  },
  {
    id: "11",
    title: "Coming Soon to The Bleariness",
    subtitle: "The first articles are on their way. We are working on stories that matter.",
    slug: "consciousness-alone-in-the-crowd",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 3,
    image: "/images/consciousness.png",
    excerpt: "Compelling stories from society, culture, business and politics. Our first articles are coming soon.",
    content: `<h2>Coming Soon</h2>
<p>We are still getting started. The first articles from The Bleariness are in the works and will be published shortly.</p>
<p>We believe that good journalism takes time. So we are taking that time — for stories that truly have something to say.</p>
<h2>What to Expect</h2>
<p>In-depth reporting. Clear analysis. Stories from society, culture, business and politics — independent, free from commercial pressure.</p>
<p>Subscribe to our newsletter to be the first to know when new articles go live.</p>`,
    featured: false,
    editorsPick: true,
    locale: "en",
    translations: { de: "bewusstsein-allein-in-der-masse", ar: "al-waiy-wahidan-fi-alzaham" },
  },
  {
    id: "12",
    title: "قريباً على The Bleariness",
    subtitle: "المقالات الأولى في طريقها. نعمل على قصص تستحق أن تُروى.",
    slug: "al-waiy-wahidan-fi-alzaham",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 3,
    image: "/images/consciousness.png",
    excerpt: "قصص من المجتمع والثقافة والأعمال والسياسة. مقالاتنا الأولى ستصدر قريباً.",
    content: `<h2>قريباً</h2>
<p>ما زلنا في طور البناء. المقالات الأولى لـ The Bleariness قيد الإعداد وستُنشر في وقت قريب.</p>
<p>نؤمن أن الصحافة الجيدة تحتاج إلى وقت. لذلك نأخذ هذا الوقت — لقصص تملك ما تقوله حقاً.</p>
<h2>ما الذي ينتظرك</h2>
<p>تقارير معمّقة. تحليلات واضحة. قصص من المجتمع والثقافة والأعمال والسياسة — مستقلة وبعيدة عن أي ضغط تجاري.</p>
<p>اشترك في نشرتنا البريدية لتكون أول من يعلم عند نشر مقالات جديدة.</p>`,
    featured: false,
    editorsPick: false,
    locale: "ar",
    translations: { de: "bewusstsein-allein-in-der-masse", en: "consciousness-alone-in-the-crowd" },
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Radouane El Mhamedi",
    role: "Schriftsteller",
    bio: "Radouane El Mhamedi ist Gründer und Chefredakteur von The Bleariness. Mit seinem Hintergrund im investigativen Journalismus und digitalen Medien prägt er die redaktionelle Vision des Magazins.",
    image: "https://picsum.photos/seed/radouane/400/400",
  },
  {
    id: "2",
    name: "Anass El Mhamedi",
    role: "Schriftsteller",
    bio: "Anass El Mhamedi schreibt über Gesellschaft, Kunst und Gegenwartskultur. Seine Texte verbinden analytische Tiefe mit einer klaren, zugänglichen Sprache.",
    image: "https://picsum.photos/seed/anass/400/400",
  },
  {
    id: "4",
    name: "El Mehdi Naor",
    role: "Schriftsteller",
    bio: "El Mehdi Naor ist Autor und Geschichtenerzähler. Seine Beiträge beleuchten Politik, Reisen und das menschliche Leben mit einer einzigartigen Perspektive.",
    image: "https://picsum.photos/seed/elmehdi/400/400",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

function matchesLocale(article: Article, locale?: string): boolean {
  if (!article.locale) return true;
  return article.locale === locale;
}

export function getArticlesByCategory(slug: string, locale?: string): Article[] {
  return articles.filter((a) => a.categorySlug === slug && matchesLocale(a, locale));
}

export function getFeatured(locale?: string): Article | undefined {
  return articles.find((a) => a.featured && matchesLocale(a, locale));
}

export function getEditorsPicks(locale?: string): Article[] {
  return articles.filter((a) => a.editorsPick && matchesLocale(a, locale));
}

const AR_MONTHS = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];

export function formatDate(dateStr: string, locale = "de"): string {
  const date = new Date(dateStr);
  if (locale === "ar") {
    return `${date.getDate()} ${AR_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  }
  return date.toLocaleDateString(locale === "en" ? "en-GB" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
