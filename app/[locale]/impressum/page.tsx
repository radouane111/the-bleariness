import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Impressum — The Bleariness" };
}

export default async function ImpressumPage() {
  const t = await getTranslations("impressum");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#0d0d0d",
          marginBottom: "0.5rem",
        }}>
          {t("title")}
        </h1>
        <div style={{ width: "3rem", height: "2px", background: "#D4A017", marginBottom: "3rem" }} />

        {/* Angaben gemäß § 5 TMG */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={sectionHeading}>{t("legalNotice")}</h2>
          <p style={bodyText}>
            Radouane El Mhamedi<br />
            Neuhofer Str. 1, 68219 Mannheim<br />
            <a href="mailto:contact@bleariness.com" style={{ color: "#D4A017" }}>
              contact@bleariness.com
            </a>
          </p>
        </section>

        {/* Verantwortlich */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={sectionHeading}>{t("responsible")}</h2>
          <p style={bodyText}>
            Radouane El Mhamedi<br />
            Neuhofer Str. 1, 68219 Mannheim
          </p>
        </section>

        {/* Art des Angebots */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={sectionHeading}>{t("nature")}</h2>
          <p style={bodyText}>{t("natureText")}</p>
        </section>

        {/* Haftungsausschluss */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={sectionHeading}>{t("disclaimer")}</h2>
          <p style={bodyText}>{t("disclaimerText")}</p>
        </section>

        {/* Urheberrecht */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={sectionHeading}>{t("copyright")}</h2>
          <p style={bodyText}>{t("copyrightText")}</p>
        </section>

        <p style={{ ...bodyText, color: "#aaa", fontSize: "0.75rem", marginTop: "4rem" }}>
          {t("lastUpdated")}
        </p>
      </div>
    </div>
  );
}

const sectionHeading: React.CSSProperties = {
  fontFamily: "var(--font-playfair)",
  fontSize: "1.1rem",
  fontWeight: 700,
  color: "#0d0d0d",
  marginBottom: "0.75rem",
  letterSpacing: "0.02em",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-inter, system-ui)",
  fontSize: "0.95rem",
  lineHeight: 1.8,
  color: "#3a3a3a",
};
