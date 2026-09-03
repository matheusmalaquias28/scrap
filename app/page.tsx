import type { Metadata } from "next";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { homeOffer, offerMetadata } from "@/lib/offers";

export const revalidate = 3600;

export const metadata: Metadata = offerMetadata(homeOffer);

export default function Home() {
  return (
    <>
      <HeroPreload src={homeOffer.hero.poster.src} />
      <OfferPage content={homeOffer} />
    </>
  );
}
