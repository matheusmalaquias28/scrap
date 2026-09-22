import type { Metadata } from "next";
import { headers } from "next/headers";
import { Agbalumo, Fredoka, Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { PageGuard } from "@/components/PageGuard";
import { TrackingHead } from "@/components/TrackingHead";
import { getOffer } from "@/lib/offers";
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

/** Rotas em português de Portugal fora do registo de ofertas (páginas legais). */
const PT_PATHS = new Set([
  "politica-de-privacidade",
  "politica-de-cookies",
  "termos-e-condicoes",
]);

/** Resolve o `lang` do <html> a partir do pathname (locale da oferta ou pt-PT). */
async function resolveLang(): Promise<string> {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  return getOffer(slug)?.locale ?? (PT_PATHS.has(slug) ? "pt-PT" : "pt-BR");
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveLang();

  return (
    <html lang={lang} className={`${fredoka.variable} ${agbalumo.variable} ${manrope.variable} antialiased`}>
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
