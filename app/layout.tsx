import type { Metadata } from "next";
import { Agbalumo, Fredoka, Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { PageGuard } from "@/components/PageGuard";
import { TrackingHead } from "@/components/TrackingHead";
import { hero } from "@/lib/content";
import { responsive } from "@/lib/responsive";
import "./globals.css";
import "./page.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const heroResponsive = responsive(hero.poster.src);

export const metadata: Metadata = {
  title: "Diário de Memórias — Crie Seu Scrapbooking de Forma Simples e Prática",
  description:
    "Use referências visuais para posicionar fotos, papéis, frases e elementos decorativos sem precisar inventar tudo do zero.",
  openGraph: {
    title: "Diário de Memórias — Crie Seu Scrapbooking de Forma Simples e Prática",
    description:
      "Crie seu Diário de Memórias com modelos prontos que mostram exatamente como montar cada página.",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${agbalumo.variable} ${manrope.variable} antialiased`}>
      <head>
        <TrackingHead />
        {hero.poster.src ? (
          <link
            rel="preload"
            as="image"
            href={hero.poster.src}
            imageSrcSet={heroResponsive.srcSet}
            imageSizes={heroResponsive.sizes}
            fetchPriority="high"
            type="image/webp"
          />
        ) : null}
      </head>
      <body className="scrap-page">
        {children}
        <PageGuard />
        <DeferredVercel />
      </body>
    </html>
  );
}
