"use client";

import ReactDOM from "react-dom";
import { responsive } from "@/lib/responsive";

/**
 * Faz o preload da imagem LCP (o pôster do hero) o mais cedo possível.
 *
 * Substitui o `<link rel="preload">` que ficava fixo no <head> do layout — como
 * agora cada rota tem um hero diferente, o preload precisa ser por página.
 * `ReactDOM.preload` é a forma recomendada pelo Next para resource hints e, no
 * SSR, emite um único `<link rel="preload">` direto no <head> do HTML inicial.
 */
export function HeroPreload({ src }: { src?: string }) {
  if (!src) return null;

  const { srcSet, sizes } = responsive(src);
  ReactDOM.preload(src, {
    as: "image",
    imageSrcSet: srcSet,
    imageSizes: sizes,
    fetchPriority: "high",
    type: "image/webp",
  });

  return null;
}
