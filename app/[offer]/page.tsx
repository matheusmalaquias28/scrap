import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { getOffer, offerMetadata, offerSlugs } from "@/lib/offers";

export const revalidate = 3600;

/** Só existem as rotas geradas por generateStaticParams; o resto vira 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return offerSlugs().map((offer) => ({ offer }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ offer: string }>;
}): Promise<Metadata> {
  const { offer } = await params;
  const content = getOffer(offer);
  return content ? offerMetadata(content) : {};
}

export default async function OfferRoute({
  params,
}: {
  params: Promise<{ offer: string }>;
}) {
  const { offer } = await params;
  const content = getOffer(offer);
  if (!content) notFound();

  return (
    <>
      <HeroPreload src={content.hero.poster.src} />
      <OfferPage content={content} />
    </>
  );
}
