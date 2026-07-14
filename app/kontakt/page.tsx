import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreiben Sie uns – Fragen, Feedback, Kooperationen.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-cream border-b border-border py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold text-xs font-sans uppercase tracking-widest mb-4 block">
            Kontakt
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal">
            Schreiben Sie uns.
          </h1>
          <p className="text-muted mt-4 font-sans text-lg max-w-xl">
            Fragen, Feedback, Anregungen oder Kooperationsanfragen – wir freuen
            uns von Ihnen zu hören.
          </p>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                Redaktion
              </h3>
              <p className="text-muted text-sm font-sans leading-loose">
                Spotlight Magazin
                <br />
                Rosenthaler Straße 40–41
                <br />
                10178 Berlin
                <br />
                <br />
                <a
                  href="mailto:redaktion@meridian-magazin.de"
                  className="text-gold hover:underline"
                >
                  redaktion@meridian-magazin.de
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                Folgen Sie uns
              </h3>
              <div className="space-y-3">
                {["Instagram", "X (Twitter)", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex items-center gap-3 text-sm font-sans text-muted hover:text-gold transition-colors group"
                  >
                    <span className="w-6 h-px bg-border group-hover:bg-gold transition-colors" />
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div id="impressum" className="border-t border-border pt-8">
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                Impressum
              </h3>
              <p className="text-subtle text-xs font-sans leading-relaxed">
                Spotlight Verlag GmbH
                <br />
                Geschäftsführerin: Sophie Berger
                <br />
                HRB 12345 B · AG Berlin Charlottenburg
                <br />
                USt-IdNr.: DE123456789
                <br />
                <br />
                Verantwortlich für den Inhalt i.S.d. § 55 Abs. 2 RStV:
                <br />
                Sophie Berger (Adresse wie oben)
              </p>
            </div>

            <div id="datenschutz">
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                Datenschutz
              </h3>
              <p className="text-subtle text-xs font-sans leading-relaxed">
                Wir verarbeiten Ihre Daten gemäß DSGVO. Eine detaillierte
                Datenschutzerklärung erhalten Sie auf Anfrage. Wir geben Ihre
                Daten nicht an Dritte weiter und verwenden Cookies nur mit Ihrer
                Einwilligung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
