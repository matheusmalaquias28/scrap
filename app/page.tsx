import type { Metadata } from "next";
import { Google_Sans_Flex, Instrument_Serif } from "next/font/google";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { homeOffer, offerMetadata } from "@/lib/offers";

export const revalidate = 3600;

export const metadata: Metadata = offerMetadata(homeOffer);

/**
 * Fonte dos títulos da home (ver `.theme-diario` em app/page.css).
 * Carregada aqui, e não no layout, para ser pré-carregada só nesta rota.
 */
const googleSansFlex = Google_Sans_Flex({
  variable: "--font-gsflex",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/** Itálico serifado dos destaques (`*texto*`) nos títulos da home. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-iserif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export default function Home() {
  return (
    <>
      <HeroPreload src={homeOffer.hero.poster.src} />
      <div className={`${googleSansFlex.variable} ${instrumentSerif.variable}`} style={{ display: "contents" }}>
        <OfferPage content={homeOffer} />
      </div>
    </>
  );
}
