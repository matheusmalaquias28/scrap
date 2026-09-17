import { headers } from "next/headers";
import {
  QUILLING_UTMIFY_BOOT,
  QUILLING_HERO_LCP,
  UTMIFY_PIXEL_ID,
  UTMIFY_PIXEL_URL,
  UTMIFY_UTMS_URL,
  cashflowPixelUrl,
} from "@/lib/tracking-boot";
import { getOffer, homeOffer } from "@/lib/offers";

/** Resolve a oferta servida em um pathname (`/` = home, `/<slug>` = oferta). */
function offerForPath(pathname: string) {
  if (pathname === "/") return homeOffer;
  const slug = pathname.replace(/^\/+/, "").split("/")[0];
  return getOffer(slug);
}

/**
 * Pixel Cashflow INDIVIDUAL da oferta: cada página tem seu próprio offer ID
 * (`cashflowOfferId` em `lib/offers/<slug>.ts`). Sem ID definido, nada é
 * emitido. Os `data-*` reproduzem a tag entregue pelo painel do Cashflow.
 */
function CashflowPixel({ offerId }: { offerId?: string }) {
  if (!offerId) return null;
  return (
    <>
      <link rel="dns-prefetch" href="https://cashflow.mentoriaprocesso.com" />
      <script
        src={cashflowPixelUrl(offerId)}
        data-offer={offerId}
        data-nowprocket=""
        data-no-minify="1"
        data-no-optimize="1"
        data-cfasync="false"
        async
      />
    </>
  );
}

/** Tags reais no HTML. Na `/quilling`, só o bootstrap UTMify (sem pixel.js duplicado). */
export async function TrackingHead() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isQuilling = pathname === "/quilling";
  const cashflowOfferId = offerForPath(pathname)?.cashflowOfferId;

  if (isQuilling) {
    return (
      <>
        <link
          rel="preload"
          as="image"
          href={QUILLING_HERO_LCP.href}
          imageSrcSet={QUILLING_HERO_LCP.srcSet}
          imageSizes={QUILLING_HERO_LCP.sizes}
          fetchPriority="high"
          type="image/webp"
        />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://tracking.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <script
          dangerouslySetInnerHTML={{
            __html: QUILLING_UTMIFY_BOOT,
          }}
        />
        <CashflowPixel offerId={cashflowOfferId} />
      </>
    );
  }

  return (
    <>
      <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.pixelId="${UTMIFY_PIXEL_ID}";`,
        }}
      />
      <script src={UTMIFY_PIXEL_URL} />
      <script src={UTMIFY_UTMS_URL} async data-utmify-prevent-subids="" />
      <CashflowPixel offerId={cashflowOfferId} />
    </>
  );
}
