import { headers } from "next/headers";
import {
  QUILLING_UTMIFY_BOOT,
  UTMIFY_PIXEL_ID,
  UTMIFY_PIXEL_URL,
  UTMIFY_UTMS_URL,
} from "@/lib/tracking-boot";

/** Tags reais no HTML, com pixelId definido antes do pixel.js. */
export async function TrackingHead() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isQuilling = pathname === "/quilling";

  return (
    <>
      {isQuilling ? (
        <script
          dangerouslySetInnerHTML={{
            __html: QUILLING_UTMIFY_BOOT,
          }}
        />
      ) : null}
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
