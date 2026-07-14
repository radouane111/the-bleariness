import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Datenschutzerklärung — The Bleariness",
    en: "Privacy Policy — The Bleariness",
    ar: "سياسة الخصوصية — The Bleariness",
  };
  return { title: titles[locale] ?? titles.de };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale === "en") return <PrivacyEN />;
  if (locale === "ar") return <PrivacyAR />;
  return <PrivacyDE />;
}

/* ─── DEUTSCH ─────────────────────────────────────────────────────── */
function PrivacyDE() {
  return (
    <Page>
      <h1 style={h1}>Datenschutzerklärung</h1>
      <div style={goldLine} />
      <p style={body}>
        Der Schutz Ihrer personenbezogenen Daten und die Wahrung Ihrer Privatsphäre sind uns sehr wichtig. Deshalb erheben, verarbeiten und nutzen wir, die Informationsplatform The Bleariness als verantwortlicher Anbieter solche personenbezogenen Daten, die Sie beim Besuch unseres Internetangebotes hinterlassen, nur im Einklang mit den relevanten datenschutzrechtlichen Bestimmungen, insbesondere dem Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG) sowie der Datenschutz Grundverordnung (DSGVO). Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, z.B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
      </p>

      <S><H2>I. Name und Anschrift des Verantwortlichen</H2>
        <p style={body}>The Bleariness<br />Radouane El Mhamedi<br />Neuhofer Str. 1, 68219 Mannheim<br /><a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>II. Allgemeines zur Verarbeitung personenbezogener Daten</H2>
        <H3>1. Umfang der Verarbeitung</H3>
        <p style={body}>Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>
        <H3>2. Rechtsgrundlage</H3>
        <p style={body}>Soweit wir eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei Vertragserfüllung dient Art. 6 Abs. 1 lit. b DSGVO. Bei gesetzlicher Verpflichtung Art. 6 Abs. 1 lit. c DSGVO. Bei berechtigtem Interesse Art. 6 Abs. 1 lit. f DSGVO.</p>
        <H3>3. Datenlöschung und Speicherdauer</H3>
        <p style={body}>Die personenbezogenen Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, sofern keine gesetzliche Aufbewahrungspflicht besteht.</p>
      </S>

      <S><H2>III. Erhebung und Speicherung personenbezogener Daten</H2>
        <H3>1. Beim Besuch der Website</H3>
        <p style={body}>Folgende Informationen werden automatisch erfasst:</p>
        <ul style={ul}><li>IP-Adresse des anfragenden Rechners und anfragender Provider</li><li>Datum und Uhrzeit des Zugriffs</li><li>Inhalt der Anforderung (konkrete Seite)</li><li>Zugriffsstatus/http Statuscode</li><li>Name und URL der abgerufenen Seite</li><li>Referrer-URL</li><li>verwendeter Browser, Sprache und Version</li><li>Betriebssystem und Version</li><li>übertragene Datenmenge</li></ul>
        <H3>2. Bei Kontaktaufnahme per E-Mail</H3>
        <p style={body}>Die mit der E-Mail übermittelten personenbezogenen Daten werden gespeichert und ausschließlich für die Verarbeitung der Konversation verwendet. Eine Weitergabe an Dritte erfolgt nicht. Die Daten werden gelöscht, sobald die Konversation abgeschlossen ist.</p>
        <H3>3. Weitergabe von Daten</H3>
        <p style={body}>Eine Weitergabe Ihrer persönlichen Daten an Dritte findet nicht statt, außer bei ausdrücklicher Einwilligung, gesetzlicher Verpflichtung oder zur Abwicklung von Vertragsverhältnissen.</p>
        <H3>4. Cookies</H3>
        <p style={body}>Wir setzen Cookies ein. Transiente Cookies werden beim Schließen des Browsers gelöscht. Persistente Cookies ermöglichen die Wiedererkennung bei erneutem Besuch. Sie können Cookies in den Browsereinstellungen jederzeit löschen.</p>
        <H3>5. Newsletter</H3>
        <p style={body}>Wenn Sie unseren Newsletter abonnieren, speichern wir Ihre E-Mail-Adresse ausschließlich zum Versand des Newsletters. Sie können sich jederzeit abmelden. Die Abmeldung ist in jeder Newsletter-E-Mail möglich.</p>
        <H3>6. Hosting</H3>
        <p style={body}>Diese Website wird über einen externen Hosting-Anbieter betrieben. Die Verarbeitung der Server-Logs erfolgt auf dessen Servern. Weitere Informationen entnehmen Sie der Datenschutzerklärung des Hosting-Anbieters.</p>
        <H3>7. Analyse-Tools</H3>
        <p style={body}>Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Optimierung unserer Website eingesetzt.</p>
        <H3>8. Einbindung von Google Maps</H3>
        <p style={body}>Innerhalb unseres Internetangebotes können Stadtpläne von Google Maps eingebunden sein. Drittanbieter benötigen hierfür die IP-Adresse der Nutzer. Wir haben keinen Einfluss auf eine etwaige Datenspeicherung durch Drittanbieter.</p>
      </S>

      <S><H2>IV. Betroffenenrechte</H2>
        <p style={body}>Sie haben das Recht auf:</p>
        <ul style={ul}><li>Auskunft (Art. 15 DSGVO)</li><li>Berichtigung (Art. 16 DSGVO)</li><li>Löschung (Art. 17 DSGVO)</li><li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li><li>Datenübertragbarkeit (Art. 20 DSGVO)</li><li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li><li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li></ul>
      </S>

      <S><H2>V. Widerspruchsrecht</H2>
        <p style={body}>Sie haben das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen. Wenden Sie sich dazu an: <a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>VI. Datensicherheit</H2>
        <p style={body}>Die Datenübertragung im Internet kann Sicherheitslücken aufweisen. Eine vollständige Datensicherheit kann nicht gewährleistet werden.</p>
      </S>

      <S><H2>VII. Aktualität und Änderungen</H2>
        <p style={body}>Diese Datenschutzerklärung hat den Stand Juli 2026. Durch die Weiterentwicklung unserer Website kann es notwendig werden, diese Erklärung zu ändern.</p>
      </S>
    </Page>
  );
}

/* ─── ENGLISH ─────────────────────────────────────────────────────── */
function PrivacyEN() {
  return (
    <Page>
      <h1 style={h1}>Privacy Policy</h1>
      <div style={goldLine} />
      <p style={body}>
        The protection of your personal data and the preservation of your privacy are very important to us. We, The Bleariness, only collect, process and use personal data that you leave when visiting our website in accordance with applicable data protection laws, in particular the German Federal Data Protection Act (BDSG), the Telemedia Act (TMG) and the General Data Protection Regulation (GDPR).
      </p>

      <S><H2>I. Name and Address of the Controller</H2>
        <p style={body}>The Bleariness<br />Radouane El Mhamedi<br />Neuhofer Str. 1, 68219 Mannheim<br /><a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>II. General Information on Data Processing</H2>
        <H3>1. Scope of Data Processing</H3>
        <p style={body}>We process personal data of our users only to the extent necessary to provide a functional website and our content and services.</p>
        <H3>2. Legal Basis</H3>
        <p style={body}>Where we obtain consent, Art. 6(1)(a) GDPR applies. For contract fulfilment, Art. 6(1)(b) GDPR. For legal obligations, Art. 6(1)(c) GDPR. For legitimate interests, Art. 6(1)(f) GDPR.</p>
        <H3>3. Data Deletion and Storage Duration</H3>
        <p style={body}>Personal data is deleted or blocked as soon as the purpose of storage ceases to apply, unless statutory retention obligations require otherwise.</p>
      </S>

      <S><H2>III. Collection and Storage of Personal Data</H2>
        <H3>1. When Visiting the Website</H3>
        <p style={body}>The following information is automatically collected:</p>
        <ul style={ul}><li>IP address of the requesting computer and provider</li><li>Date and time of access</li><li>Content of the request (specific page)</li><li>Access status / HTTP status code</li><li>Name and URL of the retrieved page</li><li>Referrer URL</li><li>Browser, language and version used</li><li>Operating system and version</li><li>Data volume transferred</li></ul>
        <H3>2. Contact by E-Mail</H3>
        <p style={body}>Personal data transmitted via e-mail is stored solely for processing the conversation and will not be shared with third parties. Data is deleted once the conversation is concluded.</p>
        <H3>3. Data Sharing</H3>
        <p style={body}>Your personal data will not be shared with third parties except with your explicit consent, for legal obligations, or for the fulfilment of contractual relationships.</p>
        <H3>4. Cookies</H3>
        <p style={body}>We use cookies. Transient cookies are deleted when you close your browser. Persistent cookies allow us to recognise you on your next visit. You can delete cookies at any time in your browser settings.</p>
        <H3>5. Newsletter</H3>
        <p style={body}>If you subscribe to our newsletter, we store your email address solely for the purpose of sending it. You can unsubscribe at any time via the link in every newsletter email.</p>
        <H3>6. Hosting</H3>
        <p style={body}>This website is operated via an external hosting provider. Server log processing takes place on their servers. Please refer to the hosting provider's privacy policy for further information.</p>
        <H3>7. Analytics</H3>
        <p style={body}>Tracking measures are carried out on the basis of Art. 6(1)(f) GDPR for the optimisation of our website.</p>
        <H3>8. Google Maps</H3>
        <p style={body}>Our website may embed Google Maps content. Third-party providers require your IP address to deliver this content. We have no control over any additional data storage by third parties.</p>
      </S>

      <S><H2>IV. Your Rights</H2>
        <p style={body}>You have the right to:</p>
        <ul style={ul}><li>Access your personal data (Art. 15 GDPR)</li><li>Rectification of inaccurate data (Art. 16 GDPR)</li><li>Erasure of your data (Art. 17 GDPR)</li><li>Restriction of processing (Art. 18 GDPR)</li><li>Data portability (Art. 20 GDPR)</li><li>Withdrawal of consent (Art. 7(3) GDPR)</li><li>Lodge a complaint with a supervisory authority (Art. 77 GDPR)</li></ul>
      </S>

      <S><H2>V. Right to Object</H2>
        <p style={body}>You have the right to object to the processing of your personal data under Art. 21 GDPR. Please contact: <a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>VI. Data Security</H2>
        <p style={body}>Data transmission over the internet may have security vulnerabilities. Complete data security cannot be guaranteed.</p>
      </S>

      <S><H2>VII. Updates to this Policy</H2>
        <p style={body}>This privacy policy is current as of July 2026. Changes may be necessary due to the further development of our website or changes in legal requirements.</p>
      </S>
    </Page>
  );
}

/* ─── ARABIC ──────────────────────────────────────────────────────── */
function PrivacyAR() {
  return (
    <Page dir="rtl">
      <h1 style={h1}>سياسة الخصوصية</h1>
      <div style={goldLine} />
      <p style={body}>
        تُعدّ حماية بياناتك الشخصية والحفاظ على خصوصيتك أمراً بالغ الأهمية بالنسبة لنا. تلتزم منصة The Bleariness بجمع البيانات الشخصية ومعالجتها واستخدامها وفقاً لأحكام قانون حماية البيانات الألماني (BDSG) وقانون الوسائط الإلكترونية (TMG) واللائحة الأوروبية العامة لحماية البيانات (GDPR).
      </p>

      <S><H2>أولاً: اسم وعنوان المسؤول</H2>
        <p style={body}>The Bleariness<br />Radouane El Mhamedi<br />Neuhofer Str. 1, 68219 Mannheim<br /><a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>ثانياً: معلومات عامة حول معالجة البيانات الشخصية</H2>
        <H3>١. نطاق المعالجة</H3>
        <p style={body}>نعالج البيانات الشخصية للمستخدمين فقط بالقدر اللازم لتوفير موقع إلكتروني يعمل بشكل سليم ومحتوياتنا وخدماتنا.</p>
        <H3>٢. الأساس القانوني</H3>
        <p style={body}>عند الحصول على الموافقة: المادة 6(1)(أ) من اللائحة GDPR. لتنفيذ العقود: المادة 6(1)(ب). للالتزامات القانونية: المادة 6(1)(ج). للمصالح المشروعة: المادة 6(1)(و).</p>
        <H3>٣. حذف البيانات ومدة التخزين</H3>
        <p style={body}>يتم حذف البيانات الشخصية أو حجبها فور انتفاء الغرض من تخزينها، ما لم تُلزمنا التشريعات بالاحتفاظ بها.</p>
      </S>

      <S><H2>ثالثاً: جمع البيانات الشخصية وتخزينها</H2>
        <H3>١. عند زيارة الموقع</H3>
        <p style={body}>يتم جمع المعلومات التالية تلقائياً:</p>
        <ul style={{ ...ul, paddingRight: "1.4rem", paddingLeft: 0 }}>
          <li>عنوان IP للجهاز ومزود الخدمة</li>
          <li>تاريخ ووقت الوصول</li>
          <li>محتوى الطلب (الصفحة المحددة)</li>
          <li>حالة الوصول / رمز HTTP</li>
          <li>اسم وعنوان URL للصفحة المطلوبة</li>
          <li>عنوان URL المرجعي</li>
          <li>المتصفح واللغة والإصدار المستخدم</li>
          <li>نظام التشغيل وإصداره</li>
          <li>حجم البيانات المنقولة</li>
        </ul>
        <H3>٢. التواصل عبر البريد الإلكتروني</H3>
        <p style={body}>يتم حفظ البيانات الشخصية المرسلة عبر البريد الإلكتروني لمعالجة المراسلة فحسب، ولا تُشارَك مع أطراف ثالثة. تُحذف البيانات فور إغلاق المراسلة.</p>
        <H3>٣. مشاركة البيانات</H3>
        <p style={body}>لا يتم مشاركة بياناتك الشخصية مع أطراف ثالثة إلا بموافقتك الصريحة، أو بموجب التزام قانوني، أو لتنفيذ علاقات تعاقدية.</p>
        <H3>٤. ملفات تعريف الارتباط (Cookies)</H3>
        <p style={body}>نستخدم ملفات تعريف ارتباط. تُحذف الملفات المؤقتة عند إغلاق المتصفح. تتيح الملفات الدائمة التعرف عليك عند زيارتك التالية. يمكنك حذف هذه الملفات في إعدادات المتصفح في أي وقت.</p>
        <H3>٥. النشرة البريدية</H3>
        <p style={body}>إذا اشتركت في نشرتنا البريدية، نحتفظ بعنوان بريدك الإلكتروني فقط لأغراض الإرسال. يمكنك إلغاء الاشتراك في أي وقت عبر الرابط في كل نشرة.</p>
        <H3>٦. الاستضافة</H3>
        <p style={body}>يُشغَّل هذا الموقع عبر مزود استضافة خارجي. تتم معالجة سجلات الخادم على خوادمهم. يرجى الرجوع إلى سياسة الخصوصية الخاصة بهم لمزيد من المعلومات.</p>
        <H3>٧. أدوات التحليل</H3>
        <p style={body}>تُنفَّذ إجراءات التتبع استناداً إلى المادة 6(1)(و) من اللائحة GDPR بهدف تحسين موقعنا الإلكتروني.</p>
        <H3>٨. خرائط Google</H3>
        <p style={body}>قد يتضمن موقعنا خرائط Google. يحتاج مزودو الطرف الثالث إلى عنوان IP الخاص بك لتقديم هذا المحتوى. ليس بإمكاننا التحكم في أي تخزين إضافي للبيانات من قِبلهم.</p>
      </S>

      <S><H2>رابعاً: حقوقك</H2>
        <p style={body}>يحق لك في أي وقت:</p>
        <ul style={{ ...ul, paddingRight: "1.4rem", paddingLeft: 0 }}>
          <li>الاطلاع على بياناتك الشخصية (المادة 15 GDPR)</li>
          <li>تصحيح البيانات غير الدقيقة (المادة 16 GDPR)</li>
          <li>حذف بياناتك (المادة 17 GDPR)</li>
          <li>تقييد المعالجة (المادة 18 GDPR)</li>
          <li>نقل البيانات (المادة 20 GDPR)</li>
          <li>سحب الموافقة (المادة 7(3) GDPR)</li>
          <li>تقديم شكوى لجهة رقابية (المادة 77 GDPR)</li>
        </ul>
      </S>

      <S><H2>خامساً: حق الاعتراض</H2>
        <p style={body}>يحق لك الاعتراض على معالجة بياناتك وفقاً للمادة 21 من اللائحة GDPR. للتواصل: <a href="mailto:contact@bleariness.com" style={link}>contact@bleariness.com</a></p>
      </S>

      <S><H2>سادساً: أمان البيانات</H2>
        <p style={body}>قد تحتوي عمليات نقل البيانات عبر الإنترنت على ثغرات أمنية. لا يمكن ضمان أمان البيانات بشكل كامل في جميع الأوقات.</p>
      </S>

      <S><H2>سابعاً: تحديثات سياسة الخصوصية</H2>
        <p style={body}>هذه السياسة سارية المفعول اعتباراً من يوليو 2026. قد تستدعي التطورات التشريعية أو تطوير موقعنا تعديل هذه السياسة.</p>
      </S>
    </Page>
  );
}

/* ─── Shared layout & style helpers ──────────────────────────────── */
function Page({ children, dir }: { children: React.ReactNode; dir?: string }) {
  return (
    <div className="min-h-screen bg-white" dir={dir}>
      <div className="max-w-2xl mx-auto px-6 py-20">{children}</div>
    </div>
  );
}
function S({ children }: { children: React.ReactNode }) {
  return <section style={{ marginBottom: "2.5rem" }}>{children}</section>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={h2}>{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 style={h3}>{children}</h3>;
}

const h1: React.CSSProperties = { fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.5rem" };
const goldLine: React.CSSProperties = { width: "3rem", height: "2px", background: "#D4A017", marginBottom: "3rem" };
const h2: React.CSSProperties = { fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.75rem" };
const h3: React.CSSProperties = { fontFamily: "var(--font-playfair)", fontSize: "1rem", fontWeight: 600, color: "#0d0d0d", marginTop: "1.25rem", marginBottom: "0.5rem" };
const body: React.CSSProperties = { fontFamily: "var(--font-inter,system-ui)", fontSize: "0.95rem", lineHeight: 1.8, color: "#3a3a3a" };
const ul: React.CSSProperties = { fontFamily: "var(--font-inter,system-ui)", fontSize: "0.95rem", lineHeight: 1.8, color: "#3a3a3a", paddingLeft: "1.4rem", marginTop: "0.5rem" };
const link: React.CSSProperties = { color: "#D4A017" };
