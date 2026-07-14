"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Fehler beim Senden.");
      setSubmitted(true);
    } catch {
      setError("Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.");
    } finally {
      setLoading(false);
    }
  };

  const options: string[] = t.raw("subjectOptions") as string[];

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">{t("successTitle")}</h2>
        <p className="text-muted font-sans">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-sans uppercase tracking-widest text-muted mb-2">{t("nameLabel")}</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t("namePlaceholder")}
            className="w-full border-b border-border bg-transparent text-charcoal py-3 text-sm font-sans focus:outline-none focus:border-charcoal transition-colors placeholder-subtle" />
        </div>
        <div>
          <label className="block text-xs font-sans uppercase tracking-widest text-muted mb-2">{t("emailLabel")}</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("emailPlaceholder")}
            className="w-full border-b border-border bg-transparent text-charcoal py-3 text-sm font-sans focus:outline-none focus:border-charcoal transition-colors placeholder-subtle" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-sans uppercase tracking-widest text-muted mb-2">{t("subjectLabel")}</label>
        <select name="subject" value={form.subject} onChange={handleChange} required
          className="w-full border-b border-border bg-transparent text-charcoal py-3 text-sm font-sans focus:outline-none focus:border-charcoal transition-colors">
          <option value="" disabled>{t("subjectPlaceholder")}</option>
          {options.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-xs font-sans uppercase tracking-widest text-muted mb-2">{t("messageLabel")}</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder={t("messagePlaceholder")}
          className="w-full border-b border-border bg-transparent text-charcoal py-3 text-sm font-sans focus:outline-none focus:border-charcoal transition-colors placeholder-subtle resize-none" />
      </div>
      {error && <p className="text-red-500 text-sm font-sans">{error}</p>}
      <button type="submit" disabled={loading} className="bg-charcoal text-white px-8 py-4 text-xs font-sans uppercase tracking-widest hover:bg-gold transition-colors disabled:opacity-50">
        {loading ? "..." : t("sendButton")}
      </button>
    </form>
  );
}
