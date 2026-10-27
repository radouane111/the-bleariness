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
  quote?: string;
  locale?: string;
  translations?: Record<string, string>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
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
    id: "13",
    title: "الضرورة الحتمية",
    subtitle: "",
    slug: "al-darura-al-hatmiya",
    category: "Culture",
    categorySlug: "culture",
    author: "Radouane El Mhamedi",
    date: "2026-10-27",
    readTime: 4,
    image: "/images/sunset-dialogue.png",
    excerpt: "بعد حوار داخلي طويل، سادته لحظات من الشد والجذب، قررت أخيرًا أن أخطو خطوة إلى الأمام؛ أن أتعرف عليه عن قرب، وأن أجلس إليه، وأتحدث معه، وأن أتيح له فرصة أن يعرّفني بنفسه، كما أتيح لنفسي فرصة أن أصارحه بما أعرفه عنه. أردت أن أتحقق مما يُقال عنه: أهو صحيح حقًّا؟ وهل أفهمه كما أظن، أم أن سوء فهم قد حال بيني وبين حقيقته؟",
    content: `<p>بعد حوار داخلي طويل، سادته لحظات من الشد والجذب، قررت أخيرًا أن أخطو خطوة إلى الأمام؛ أن أتعرف عليه عن قرب، وأن أجلس إليه، وأتحدث معه، وأن أتيح له فرصة أن يعرّفني بنفسه، كما أتيح لنفسي فرصة أن أصارحه بما أعرفه عنه. أردت أن أتحقق مما يُقال عنه: أهو صحيح حقًّا؟ وهل أفهمه كما أظن، أم أن سوء فهم قد حال بيني وبين حقيقته؟</p>
<p>بعد مفاوضات طويلة، حسم أمره أخيرًا ووافق على لقائي. انشرح صدري لهذا القرار، فجهزت أغراضي وشددت الرحال إليه. كان يسكن بعيدًا عني بعض الشيء، وإن كنت قد لمحته مرارًا يحوم حولي.</p>
<p>وبعد رحلة لم تكن بالقصيرة، التقينا أخيرًا وجهًا لوجه. غير أن ما أثار انتباهي منذ اللحظات الأولى أننا بدونا كأننا لا نعرف بعضنا بعضًا؛ غريبان جمعهما لقاء طال انتظاره، ولكل منهما ما يقوله للآخر.</p>
<p>لكن ما أحرجني حقًّا أنه لم يستقبلني بالترحيب الذي كنت أراه لائقًا بمقامنا الرفيع. كان يحمل في نفسه شيئًا من العتب، بل كثيرًا منه. وكانت حجته أنه مظلوم، وأنني طالما تحاملت عليه، واستخدمته متى شئت، وكيفما شئت، ومع من شئت، دون أن أكلف نفسي عناء معرفته على حقيقته.</p>
<p>عاتبني لأنني اتخذت منه قنطرة أعبر بها هربًا من النقاش، سواء أكان نقاشًا مثمرًا يستحق الخوض فيه، أم جدلًا عقيمًا لا طائل منه. لكن ما كان يؤلمه أكثر هو أنني كنت أستخدمه استخدامًا سطحيًّا فظًّا، وأتعامل معه كما لو كان مفتاحًا سحريًّا لحل جميع مشكلات الأنثروبولوجيا، موهمًا نفسي والآخرين بأنني عبقري زماني، وأنني قد عثرت أخيرًا على الحل لكل معضلة مجتمعية.</p>
<p>كان منزعجًا أشد الانزعاج، ولم يتردد في توبيخي. أصغيت إلى عتابه، ثم حاولت، بإصرار لم يكن بالقليل، أن أقنعه بمنحي فرصة أخرى. وأبديت له صدق رغبتي في التتلمذ على يديه، وفي أن أتعرف إليه كما ينبغي، بعيدًا عن الأحكام المسبقة والتصورات التي طالما حملتها عنه.</p>
<p>فكّر مليًّا، ثم اتخذ قراره: أن يفتح معي صفحة جديدة، وأن يعرّفني بنفسه تعريفًا يزيل ما علق بشخصه من سوء فهم أو لبس، سواء أكان ذلك عن قصد أم عن غير قصد، حتى لا يتكرر الأمر مستقبلًا.</p>
<p>ثم فتح لي باب الحوار على مصراعيه، وأتاح لي أن أسأل ما أشاء، وكيفما أشاء. وهكذا انطلقنا في حوار مباشر وهادئ، غايته أن أفهمه فهمًا أعمق وأصدق.</p>
<p>غير أنه وضع شرطًا واحدًا قبل أن نبدأ: أن أنسى كل ما كنت أظن أنني أعرفه عنه.</p>
<p>بدأت بالسؤال البديهي:</p>
<p>من أنت؟ عرّفني بنفسك، جزاك الله خيرًا.</p>
<p>إذا بحثت في معجم لسان العرب، يعرّفني ابن منظور كالتالي: «يُقال: وَعَى الشَّيْءَ وَالْحَدِيثَ يَعِيهِ وَعْيًا وَأَوْعَاهُ، أي حَفِظَهُ وَفَهِمَهُ وَقَبِلَهُ، ويُقال: فُلَانٌ أَوْعَى مِنْ فُلَانٍ، أي أَحْفَظُ وَأَفْهَمُ».</p>
<p>وبعد هذا التعريف البسيط و المفهوم ، انتقلت إلى سؤالي التالي:</p>
<p>أريد منكم أن تدلّوني على أهم الركائز التي يجب أن تتوفر في شخصي لكي أستطيع أن أسير على نهجكم، وأتخذكم رفيق دربي في هذه الحياة، حفظكم المولى من كل مكروه.</p>
<p>يبدأ كل شيء منك، من إدراكك وفهمك وقدرتك على التفكير المستقل. عندما تستطيع أن تفكر بناءً على الأدلة والتحليل العقلي الاستفهامي المنطقي، وتبني أفكارًا مستقلة دون الذوبان في أفكار الجماعة أو الوقوع ضحيةً للتكرار الأعمى، فإنك بذلك تحقق أهم ركيزة من ركائز الوعي كفرد، ويمكن في المستقبل أن يُترجم ذلك إلى الجماعة، والجماعة دائمًا ما تشكّل البيئة التي تسمح بالإنتاج والتنمية. بالمختصر المفيد، تنفع نفسك، وفي الوقت نفسه تنفع غيرك.</p>
<p>وبعد هذا الجواب، انتقلت إلى سؤالي الأخير:</p>
<p>إذا أردنا أن نختم هذا الحوار الجميل بسؤال جوهري وجواب آخذه كبوصلة ترشدني في مراحل الحياة الكبيرة، اليك : كيف أقيّم نفسي أو أعرف أنني فعلًا أقتدي بك الاقتداء الخالص في كل زمان ومكان، دام فضلكم؟</p>
<p>يجب أن يتوفر فيك شرط واحد، ألا وهو أن تكون مستقلًّا حتى عن ذاتك. الاستقلال عن الذات، أي ألّا تكون أسير مصالحك أو أهوائك أو انتماءاتك الضيقة عند النظر إلى الحقيقة؛ لأن الموضوعية لا تتحقق إلا عندما تستطيع أن تخرج من مركزية نفسك وتنظر إلى الواقع كما هو بحيادية.</p>
<p>لان الانسان أنانيٌّ بطبعه، محبٌّ للدنيا، مولعٌ بمتاع الحياة، باحثٌ عن الراحة في كل مكان وزمان، ماديُّ النزعة، زبونٌ دائمٌ للرفاهية وعاشقٌ لها. الأحقية فيه تتجسد إلى درجات الخسران. يظن أنه الرابح في صفقات الحياة دون الحضور في اجتماع مناقصة. التوهم بالاستقرار دربه، ناسيًا أن عقله ينسج تخيلات فقط لا غير، والقلب يبدع في أسرها.</p>
<p>إنه كائن مركب ومعقد، يحسب أن في نفسه فهمًا ومعرفةً وبراعةً في حل قرائح الدنيا وكيفية التعامل معها، بل والاستفادة من كل جوانبها. يفرّق الفتاوى هنا وهناك، ويتفنن في لبس ثوب الناصح. يمارس الأستاذية على الآخر، ولا يرضى لنفسه التلمذة على يد الغير. نادرًا ما يقف أمام المرآة ويحاسب نفسه، لكن ما يغفل عنه أنه ورقة، ربما سطر، أو كلمة، أو حرف في كتاب كبير ورائع لا نهائي اسمه الدنيا.</p>
<p>والمشكلة تكمن في الأصل؛ إنه الأصل الدنيء، الخسيس، النذل، الوضيع، الخبيث، اللئيم، الحقير، المنافق، الجشع، المتعالي، الحقود، الشامت، الغدّار، المتشفّي، وعديم الضمير. المعضلة تكمن فيه.</p>
<p>لهذا يجب على المرء أن يحاول جاهدًا أن يشكم هذا الأصل ويقمعه بانتظام، وألّا يسمح له بأن يشارك في كاستينغ لأداء دور المفعول به من قِبل الشهوات: شهوة الجسد، والبطن، والمال، والخيل المسوّمة، أو بأن يُصاب بحمى الاستعراض، والكبر، والتفاخر، والأنانية لأنه هو العقبة و ما ادرك ما العقبة فك رقبة</p>
<p>الأصل هو النفس، والنفس داعية إلى الطغيان، والدنيا ورقة امتحانها.</p>`,
    featured: false,
    editorsPick: true,
    locale: "ar",
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Radouane El Mhamedi",
    role: "Schriftsteller",
    bio: "Radouane El Mhamedi ist Gründer und Chefredakteur von Bleariness. Mit seinem Hintergrund im investigativen Journalismus und digitalen Medien prägt er die redaktionelle Vision des Magazins.",
  },
  {
    id: "2",
    name: "Anass El Mhamedi",
    role: "Schriftsteller",
    bio: "Anass El Mhamedi schreibt über Gesellschaft, Kunst und Gegenwartskultur. Seine Texte verbinden analytische Tiefe mit einer klaren, zugänglichen Sprache.",
  },
  {
    id: "4",
    name: "El Mehdi Naor",
    role: "Schriftsteller",
    bio: "El Mehdi Naor ist Autor und Geschichtenerzähler. Seine Beiträge beleuchten Politik, Reisen und das menschliche Leben mit einer einzigartigen Perspektive.",
  },
  {
    id: "5",
    name: "Mohssine El Azizi",
    role: "Schriftsteller",
    bio: "",
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
