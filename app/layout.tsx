import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope } from "next/font/google";
import { DeferredVercel } from "@/components/DeferredVercel";
import { TrackingHead } from "@/components/TrackingHead";
import { hero } from "@/lib/content";
import "./globals.css";
import "./page.css";

const manropePage = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope-page",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aquarelas Personalizadas: Pinte o que Você Mais Deseja",
  description:
    "Envie uma foto e receba o molde de desenho + o guia passo a passo para pintá-la em aquarela. Transforme o sorriso do seu filho, seu pet ou qualquer foto que você ama em arte.",
  openGraph: {
    title: "Aquarelas Personalizadas: Pinte o que Você Mais Deseja",
    description:
      "Envie uma foto e receba o molde de desenho + o guia passo a passo para pintá-la em aquarela.",
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
  const pathname = (await headers()).get("x-pathname") ?? "/";

  return (
    <html lang="pt-BR" className={`${manropePage.variable} antialiased`}>
      <head>
        <TrackingHead pathname={pathname} />
        <link
          rel="preload"
          as="image"
          href={hero.poster.src}
          fetchPriority="high"
          type="image/png"
        />
      </head>
      <body className="scrap-page">
        {children}
        <DeferredVercel />
      </body>
    </html>
  );
}
