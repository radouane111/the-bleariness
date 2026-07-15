import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return { title: t("tag") };
}

export default async function ContactPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      <div className="bg-cream border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs font-sans uppercase tracking-widest mb-4 block">{t("contact.tag")}</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">{t("contact.headline")}</h1>
          <p className="text-muted mt-4 font-sans text-lg max-w-xl">{t("contact.description")}</p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">{t("contact.editorialTitle")}</h3>
              <p className="text-muted text-sm font-sans leading-loose">
                Radouane El Mhamedi<br />
                Neuhofer Str. 1, 68219 Mannheim<br /><br />
                <a href="mailto:contact@bleariness.com" className="text-gold hover:underline">
                  contact@bleariness.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">{t("contact.followTitle")}</h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/thebleariness?igsh=YW13dWZyeHBkOTk3&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-sans text-muted hover:text-gold transition-colors group"
                >
                  <span className="w-6 h-px bg-border group-hover:bg-gold transition-colors" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
