import type { Metadata } from "next";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { diarioFontsClass } from "@/lib/diario-fonts";
import { offerMetadata, offers } from "@/lib/offers";

export const revalidate = 3600;

/**
 * LP Scrapbook v2 em rota própria — fora do `/[offer]` para carregar as
 * fontes do tema `.theme-diario` só aqui.
 */
const content = offers["scrapbook-v2"];

export const metadata: Metadata = offerMetadata(content);

export default function ScrapbookV2() {
  return (
    <>
      <HeroPreload src={content.hero.poster.src} />
      <div className={diarioFontsClass} style={{ display: "contents" }}>
        <OfferPage content={content} />
      </div>
    </>
  );
}
