import type { Metadata } from "next";
import type { OfferContent } from "./types";
import { diarioMemorias } from "./diario-memorias";
import { quilling } from "./quilling";
import { terrario } from "./terrario";
import { cubaResina } from "./cuba-resina";
import { concretoDecorativo } from "./concreto-decorativo";
import { scrapbookPt } from "./scrapbook-pt";
import { scrapbookV2 } from "./scrapbook-v2";
import { scrapbookV3 } from "./scrapbook-v3";

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
  terrario,
  "cuba-resina": cubaResina,
  "concreto-decorativo": concretoDecorativo,
  "scrapbook-pt": scrapbookPt,
  "scrapbook-v2": scrapbookV2,
  "scrapbook-v3": scrapbookV3,
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

/**
 * Ofertas com rota própria em `app/<slug>/page.tsx` (em vez de `/[offer]`),
 * para carregar fontes só delas. Continuam no registro para tracking/metadata.
 */
const OWN_ROUTE_SLUGS = new Set<string>(["scrapbook-v2", "scrapbook-v3"]);

/** Slugs das ofertas servidas por `/[offer]` (exclui a home e as de rota própria). */
export function offerSlugs(): string[] {
  return Object.keys(offers).filter((slug) => slug !== HOME_SLUG && !OWN_ROUTE_SLUGS.has(slug));
}

/** Monta o objeto de metadata do Next a partir de uma oferta. */
export function offerMetadata(offer: OfferContent): Metadata {
  return {
    title: offer.meta.title,
    description: offer.meta.description,
    openGraph: {
      title: offer.meta.ogTitle,
      description: offer.meta.ogDescription,
      locale: (offer.locale ?? "pt-BR").replace("-", "_"),
      type: "website",
    },
  };
}
