import type { Metadata } from "next";
import { Agbalumo, Fredoka, Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { PageGuard } from "@/components/PageGuard";
import { TrackingHead } from "@/components/TrackingHead";
import "./globals.css";
import "./page.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
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
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/**
 * Metadata GLOBAL (vale para todas as rotas). O título, a descrição e o
 * Open Graph específicos de cada oferta são definidos por página, a partir
 * de `offerMetadata()` (ver lib/offers).
 */
export const metadata: Metadata = {
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
      </head>
      <body className="scrap-page">
        {children}
        <PageGuard />
        <DeferredVercel />
      </body>
    </html>
  );
}
