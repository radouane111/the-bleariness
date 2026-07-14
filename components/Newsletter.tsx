"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations("newsletter");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Fehler beim Anmelden. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="bg-charcoal text-white py-6 px-6" dir="ltr">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-gold text-xs font-sans uppercase tracking-widest mb-1 block">
          {t("tag")}
        </span>
        <h2 className="font-serif text-2xl font-bold mb-1">{t("title")}</h2>
        <p className="text-gray-400 font-sans mb-3 text-sm leading-relaxed">{t("description")}</p>
        {submitted ? (
          <p className="text-gold font-sans text-lg">{t("success")}</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("placeholder")}
                required
                className="flex-1 bg-transparent border border-white/30 text-white placeholder-gray-500 px-4 py-3 text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" disabled={loading} className="bg-gold text-white px-6 py-3 text-sm font-sans uppercase tracking-widest hover:bg-gold-light transition-colors disabled:opacity-50">
                {loading ? "..." : t("button")}
              </button>
            </form>
            {error && <p className="text-red-400 text-sm font-sans mt-2">{error}</p>}
          </>
        )}
      </div>
    </section>
  );
}
