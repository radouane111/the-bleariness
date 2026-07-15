import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { team } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return { title: t("tag") };
}

export default async function AboutPage() {
  const t = await getTranslations();

  return (
    <div>
      <div className="bg-charcoal text-white py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs font-sans uppercase tracking-widest mb-6 block">{t("about.tag")}</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t("about.headline")}</h1>
          <p className="text-gray-400 mt-6 text-lg font-sans leading-relaxed max-w-2xl mx-auto">{t("about.description")}</p>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-charcoal">{t("about.missionTitle")}</h2>
              <div className="w-12 h-0.5 bg-gold mt-4" />
            </div>
            <div className="md:col-span-2 space-y-5 text-muted font-sans leading-relaxed">
              <p>{t("about.missionText1")}</p>
              <p>{t("about.missionText2")}</p>
              <p>{t("about.missionText3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-charcoal text-center mb-12">{t("about.valuesTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(["1", "2", "3"] as const).map((n) => (
              <div key={n} className="bg-white p-8 border border-border">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">{t(`about.value${n}Title`)}</h3>
                <p className="text-muted text-sm font-sans leading-relaxed">{t(`about.value${n}Text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal whitespace-nowrap">{t("about.teamTitle")}</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="group">
                <div className="relative aspect-square overflow-hidden bg-cream mb-5">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal">{member.name}</h3>
                <div className="text-gold text-xs font-sans uppercase tracking-widest mt-1">{t("about.teamRole")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
