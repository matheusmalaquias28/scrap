import { preload } from "react-dom";
import { responsive, responsiveDefaultSrc } from "@/lib/responsive";

/**
 * Preload da imagem LCP (pôster do hero) durante o SSR — sem esperar hidratação.
 * Usa a menor variante como href e repassa srcset/sizes para o navegador escolher.
 */
export function HeroPreload({ src }: { src?: string }) {
  if (!src) return null;

  const href = responsiveDefaultSrc(src) ?? src;
  const { srcSet, sizes } = responsive(src);

  preload(href, {
    as: "image",
    fetchPriority: "high",
    type: "image/webp",
    ...(srcSet ? { imageSrcSet: srcSet, imageSizes: sizes } : {}),
  });

  return null;
}
