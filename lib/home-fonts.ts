import { Google_Sans } from "next/font/google";

/**
 * Fonte do título do hero da home (`/`) e da `/scrapbook-v3`. Fica fora do
 * layout para ser pré-carregada só nas rotas que importam este módulo.
 */
const googleSans = Google_Sans({
  variable: "--font-gsans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/** Classe que expõe a variável `--font-gsans`. */
export const homeFontsClass = googleSans.variable;
