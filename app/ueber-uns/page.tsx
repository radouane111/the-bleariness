import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Spotlight ist ein unabhängiges Magazin für Menschen, die mehr wollen als Nachrichten.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-charcoal text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-sans uppercase tracking-widest mb-6 block">
            Über Spotlight
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Wir erzählen Geschichten, die zählen.
          </h1>
          <p className="text-gray-400 mt-6 text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            Spotlight ist ein unabhängiges Magazin für Menschen, die mehr wollen
            als Nachrichten – die Kontext, Tiefe und Haltung suchen.
          </p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-charcoal">
                Unsere Mission
              </h2>
              <div className="w-12 h-0.5 bg-gold mt-4" />
            </div>
            <div className="md:col-span-2 space-y-5 text-muted font-sans leading-relaxed">
              <p>
                Spotlight wurde 2019 gegründet mit dem Glauben, dass guter
                Journalismus Zeit braucht. Zeit zum Recherchieren, zum
                Schreiben, zum Nachdenken. In einer Welt der Geschwindigkeit
                wollen wir der Ort sein, an dem man langsamer wird.
              </p>
              <p>
                Wir berichten über Design, Kultur, Business, Gesellschaft und
                Lifestyle – nicht weil diese Themen getrennte Welten sind,
                sondern weil sie in der Realität untrennbar verbunden sind. Ein
                gutes Magazin macht diese Verbindungen sichtbar.
              </p>
              <p>
                Wir sind unabhängig. Wir sind werbefinanziert, aber redaktionell
                autonom. Keine Geschichte, die wir veröffentlichen, ist das
                Ergebnis kommerziellen Drucks – das ist unser Versprechen an
                unsere Leserinnen und Leser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-charcoal text-center mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tiefe statt Geschwindigkeit",
                text: "Wir veröffentlichen, wenn ein Text fertig ist – nicht wenn die Nachrichtenlage es verlangt. Qualität braucht Zeit.",
              },
              {
                title: "Haltung statt Neutralität",
                text: "Wir glauben nicht an falsche Balance. Wir nehmen Positionen ein, begründen sie – und überdenken sie, wenn neue Argumente kommen.",
              },
              {
                title: "Vielfalt als Stärke",
                text: "Unsere Redaktion spiegelt die Gesellschaft, über die wir schreiben: divers in Herkunft, Perspektive und Denkweise.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 border border-border">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-muted text-sm font-sans leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal whitespace-nowrap">
              Das Team
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-square overflow-hidden bg-cream mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal">
                  {member.name}
                </h3>
                <div className="text-gold text-xs font-sans uppercase tracking-widest mt-1 mb-3">
                  {member.role}
                </div>
                <p className="text-muted text-sm font-sans leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
