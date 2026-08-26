import { trackingBootForPath, UTMIFY_PIXEL_URL } from "@/lib/tracking-boot";

type Props = {
  pathname: string;
};

/** Scripts Utmify inline no head — executam imediatamente, sem fila do Next.js. */
export function TrackingHead({ pathname }: Props) {
  const tracking = trackingBootForPath(pathname);
  if (!tracking) return null;

  return (
    <>
      <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
      <link rel="preload" href={UTMIFY_PIXEL_URL} as="script" />
      <script id={tracking.id} dangerouslySetInnerHTML={{ __html: tracking.boot }} />
    </>
  );
}
