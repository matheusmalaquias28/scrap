import { headers } from "next/headers";
import {
  QUILLING_UTMIFY_BOOT,
  QUILLING_HERO_LCP,
  UTMIFY_PIXEL_ID,
  UTMIFY_PIXEL_URL,
  UTMIFY_UTMS_URL,
} from "@/lib/tracking-boot";

/** Tags reais no HTML. Na `/quilling`, só o bootstrap UTMify (sem pixel.js duplicado). */
export async function TrackingHead() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isQuilling = pathname === "/quilling";

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
    </>
  );
}
