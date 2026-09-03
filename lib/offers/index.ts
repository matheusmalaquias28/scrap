import type { Metadata } from "next";
import type { OfferContent } from "./types";
import { diarioMemorias } from "./diario-memorias";
import { quilling } from "./quilling";

export type { OfferContent } from "./types";

/**
 * Registro central de ofertas: slug -> conteúdo.
 *
 * ➕ Para adicionar uma nova página de oferta:
 *   1. crie `lib/offers/<slug>.ts` exportando um `OfferContent`;
 *   2. importe-o aqui e adicione uma entrada em `offers` com o slug desejado;
 *   3. coloque as imagens em `public/offers/<slug>/`.
 * A rota `/<slug>` passa a existir automaticamente.
 */
export const offers = {
  "diario-memorias": diarioMemorias,
  quilling,
} satisfies Record<string, OfferContent>;

export type OfferSlug = keyof typeof offers;

/** Slug servido na raiz (`/`). Não é duplicado em `/<slug>`. */
export const HOME_SLUG: OfferSlug = "diario-memorias";

/** Conteúdo da página principal. */
export const homeOffer: OfferContent = offers[HOME_SLUG];

/** Retorna a oferta pelo slug, ou `undefined` se não existir. */
export function getOffer(slug: string): OfferContent | undefined {
  return (offers as Record<string, OfferContent>)[slug];
}

/** Slugs das ofertas servidas em `/<slug>` (exclui a home). */
export function offerSlugs(): string[] {
  return Object.keys(offers).filter((slug) => slug !== HOME_SLUG);
}

/** Monta o objeto de metadata do Next a partir de uma oferta. */
export function offerMetadata(offer: OfferContent): Metadata {
  return {
    title: offer.meta.title,
    description: offer.meta.description,
    openGraph: {
      title: offer.meta.ogTitle,
      description: offer.meta.ogDescription,
      locale: "pt_BR",
      type: "website",
    },
  };
}
