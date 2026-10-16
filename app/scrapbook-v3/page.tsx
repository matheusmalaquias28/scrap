import type { Metadata } from "next";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { homeFontsClass } from "@/lib/home-fonts";
import { offerMetadata, offers } from "@/lib/offers";

export const revalidate = 3600;

/**
 * LP Scrapbook v3 em rota própria — fora do `/[offer]` para carregar a
 * fonte do título do hero (Google Sans) só aqui, como na home.
 */
const content = offers["scrapbook-v3"];

export const metadata: Metadata = offerMetadata(content);

export default function ScrapbookV3() {
  return (
    <>
      <HeroPreload src={content.hero.poster.src} />
      <div className={homeFontsClass} style={{ display: "contents" }}>
        <OfferPage content={content} />
      </div>
    </>
  );
}
