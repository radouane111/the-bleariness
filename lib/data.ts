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
    title: "Das Bewusstsein: Allein im Strom der Masse",
    subtitle: "In einer hypervernetzten Welt fühlen sich immer mehr Menschen unsichtbar. Ist das ein persönliches Versagen – oder ein kollektives Erwachen?",
    slug: "bewusstsein-allein-in-der-masse",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 7,
    image: "/images/consciousness.png",
    excerpt: "Millionen Menschen. Millionen Stimmen. Und trotzdem – das leise, hartnäckige Gefühl, nicht gehört zu werden. Was verrät uns das über unser Bewusstsein?",
    content: `<h2>Das Paradox der Menge</h2>
<p>Stell dir vor: Du stehst mitten in einer Menschenmenge. Tausende Körper in Bewegung. Tausende Stimmen, die sich zu einem einzigen Rauschen vermischen. Und trotzdem – du stehst still. Nicht weil du nicht kannst. Sondern weil du <em>siehst</em>.</p>
<p>Dieses Bild ist kein literarisches Konstrukt. Es ist die innere Realität jener Menschen, die begonnen haben, die Welt mit wachen Augen zu betrachten. Bewusstsein ist keine Fähigkeit, die man hat oder nicht hat. Es ist ein Zustand, der sich langsam, manchmal schmerzhaft, in uns entfaltet.</p>
<h2>Was bedeutet es, bewusst zu sein?</h2>
<p>Das Wort „Bewusstsein" ist schwerer zu fassen, als es scheint. In der Philosophie bezeichnet es das Gewahrsein des eigenen Denkens – das „Ich weiß, dass ich weiß." In der Psychologie meint es die Fähigkeit, eigene Muster zu erkennen, sich von Automatismen zu lösen.</p>
<p>Aber im gesellschaftlichen Sinne bedeutet Bewusstsein etwas noch Grundlegenderes: Es bedeutet, die eigene Position in der Welt zu kennen. Zu verstehen, wie die Strukturen, in denen wir leben, uns formen – und wie wir sie formen könnten.</p>
<h2>Die Einsamkeit des Wachen</h2>
<p>Wer einmal begonnen hat, bewusst zu leben, stellt oft fest: Es macht einsam. Nicht weil man sich von anderen entfernt. Sondern weil man Dinge sieht, die andere (noch) nicht sehen. Ungerechtigkeiten. Widersprüche. Die stille Gewalt des Normalen.</p>
<p>Diese Einsamkeit ist kein Zeichen des Scheiterns. Sie ist ein Zeichen der Reife. Der Mensch auf dem Bild – mitten in der Menge, still, schauend – ist kein Außenseiter. Er ist ein Zeuge. Und Zeugen haben in jeder Gesellschaft eine unverzichtbare Funktion.</p>
<h2>Bewusstsein als kollektive Aufgabe</h2>
<p>Am Ende ist individuelles Bewusstsein nur der Anfang. Eine Gesellschaft, die sich selbst versteht – die ihre Geschichte kennt, ihre Widersprüche aushält und ihre Zukunft gestalten will – braucht nicht eine Handvoll Wacher. Sie braucht eine Kultur des Bewusstseins.</p>
<p>Das ist kein utopischer Wunsch. Es ist eine praktische Notwendigkeit. Denn eine Menge, die nicht denkt, ist kein Kollektiv. Sie ist eine Masse. Und Massen werden geführt – nicht von Ideen, sondern von Ängsten.</p>`,
    featured: false,
    editorsPick: true,
    locale: "de",
    translations: { en: "consciousness-alone-in-the-crowd", ar: "al-waiy-wahidan-fi-alzaham" },
  },
  {
    id: "11",
    title: "Consciousness: Standing Still in a Moving Crowd",
    subtitle: "In a world louder than ever, the act of stopping to think has become radical. A reflection on awareness in the age of noise.",
    slug: "consciousness-alone-in-the-crowd",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 7,
    image: "/images/consciousness.png",
    excerpt: "Millions of people. Millions of voices. And yet — a quiet, persistent feeling of not being heard. What does this tell us about consciousness?",
    content: `<h2>The Paradox of the Crowd</h2>
<p>Imagine standing in the middle of a crowd. Thousands of bodies in motion. Thousands of voices merging into a single roar. And yet — you are still. Not because you cannot move. But because you <em>see</em>.</p>
<p>This image is not a literary device. It is the inner reality of those who have begun to look at the world with open eyes. Consciousness is not a capacity you either have or don't. It is a state that unfolds within us — slowly, sometimes painfully.</p>
<h2>What Does It Mean to Be Conscious?</h2>
<p>The word "consciousness" is harder to grasp than it appears. In philosophy, it describes the awareness of one's own thinking — the "I know that I know." In psychology, it refers to the ability to recognise one's own patterns, to step back from automatism.</p>
<p>But in a social sense, consciousness means something more fundamental: knowing your position in the world. Understanding how the structures we inhabit shape us — and how we might shape them in return.</p>
<h2>The Solitude of the Awake</h2>
<p>Those who begin to live consciously often discover: it is lonely. Not because they have distanced themselves from others. But because they see things others do not yet see. Injustices. Contradictions. The quiet violence of what is considered normal.</p>
<p>This solitude is not a sign of failure. It is a sign of maturity. The person in the image — still, watching, surrounded by movement — is not an outsider. They are a witness. And witnesses have an indispensable function in every society.</p>
<h2>Consciousness as a Collective Task</h2>
<p>In the end, individual consciousness is only the beginning. A society that understands itself — that knows its history, bears its contradictions, and wants to shape its future — does not need a handful of the awakened. It needs a culture of consciousness.</p>
<p>This is not a utopian wish. It is a practical necessity. Because a crowd that does not think is not a collective. It is a mass. And masses are led — not by ideas, but by fears.</p>`,
    featured: false,
    editorsPick: true,
    locale: "en",
    translations: { de: "bewusstsein-allein-in-der-masse", ar: "al-waiy-wahidan-fi-alzaham" },
  },
  {
    id: "12",
    title: "الوعي: وحيداً في قلب الزحام",
    subtitle: "في عالم يعجّ بالأصوات، أصبح التوقفُ للتفكير فعلاً جذرياً. تأمل في مفهوم الوعي في زمن الضجيج.",
    slug: "al-waiy-wahidan-fi-alzaham",
    category: "Society",
    categorySlug: "society",
    author: "Radouane El Mhamedi",
    date: "2026-06-28",
    readTime: 7,
    image: "/images/consciousness.png",
    excerpt: "ملايين البشر. ملايين الأصوات. ومع ذلك — شعورٌ هادئ وعنيد بأنك لم تُسمع. ماذا يخبرنا هذا عن الوعي؟",
    content: `<h2>مفارقة الحشد</h2>
<p>تخيّل أنك تقف في وسط حشد من البشر. آلاف الأجساد في حركة. آلاف الأصوات تذوب في ضجيج واحد. ومع ذلك — أنت ثابت. ليس لأنك لا تستطيع أن تتحرك. بل لأنك <em>ترى</em>.</p>
<p>هذه الصورة ليست بناءً أدبياً. إنها الواقع الداخلي لأولئك الذين بدأوا ينظرون إلى العالم بعيون مفتوحة. الوعي ليس قدرةً تمتلكها أو لا تمتلكها. إنه حالةٌ تتكشّف فينا ببطء، وأحياناً بألم.</p>
<h2>ماذا يعني أن تكون واعياً؟</h2>
<p>كلمة "الوعي" أصعب في استيعابها مما تبدو. في الفلسفة، تشير إلى الإدراك الذاتي للتفكير — "أنا أعرف أنني أعرف." وفي علم النفس، تعني القدرة على التعرف على الأنماط الذاتية، والتحرر من السلوك التلقائي.</p>
<p>أما في المعنى الاجتماعي، فالوعي يعني شيئاً أكثر جوهرية: معرفة موقعك في العالم. فهم كيف تشكّلنا الأنظمة التي نعيش فيها — وكيف يمكننا نحن أن نشكّلها.</p>
<h2>وحدة اليقظ</h2>
<p>كثيراً ما يكتشف من يبدأ في العيش بوعي أن ذلك مُوحِش. ليس لأنه ابتعد عن الآخرين. بل لأنه يرى أشياء لا يراها الآخرون بعد. ظلمٌ. تناقضات. عنفٌ صامت فيما يُعدّ طبيعياً.</p>
<p>هذه الوحدة ليست دليل فشل. إنها دليل نضج. الشخص في الصورة — ثابت، يراقب، وسط زحام متحرك — ليس غريباً. إنه شاهد. والشهودُ وظيفتهم لا غنى عنها في كل مجتمع.</p>
<h2>الوعي مهمة جماعية</h2>
<p>في النهاية، الوعي الفردي مجرد بداية. المجتمع الذي يفهم نفسه — الذي يعرف تاريخه، ويتحمل تناقضاته، ويريد صياغة مستقبله — لا يحتاج إلى حفنة من اليقظين. يحتاج إلى ثقافة وعي.</p>
<p>هذا ليس حلماً طوبياوياً. إنه ضرورة عملية. لأن الحشد الذي لا يفكر ليس جماعةً. إنه كتلة. والكتل تُقاد — ليس بالأفكار، بل بالمخاوف.</p>`,
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

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
