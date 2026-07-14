import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel, Cormorant_Garamond, GFS_Didot, UnifrakturMaguntia, Bodoni_Moda, Newsreader } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArticleLocaleProvider } from "@/components/ArticleLocaleContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const blackletter = UnifrakturMaguntia({
  subsets: ["latin"],
  variable: "--font-blackletter",
  display: "swap",
  weight: ["400"],
});

const didot = GFS_Didot({
  subsets: ["latin"],
  variable: "--font-didot",
  display: "swap",
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "The Bleariness", template: "%s | The Bleariness" },
  description: "The Bleariness — A magazine for stories that matter.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en" | "ar")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${playfair.variable} ${inter.variable} ${cinzel.variable} ${cormorant.variable} ${didot.variable} ${blackletter.variable} ${bodoni.variable} ${newsreader.variable}`}
    >
      <body className="bg-white text-charcoal min-h-screen flex flex-col font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <ArticleLocaleProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ArticleLocaleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
