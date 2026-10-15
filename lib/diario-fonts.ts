import { Google_Sans_Flex, Instrument_Serif } from "next/font/google";

/**
 * Fontes do tema `.theme-diario` (`/scrapbook-v2`). Ficam fora do layout
 * para serem pré-carregadas só nas rotas que importam este módulo.
 */

/** Títulos (ver `.theme-diario` em app/page.css). */
const googleSansFlex = Google_Sans_Flex({
  variable: "--font-gsflex",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

/** Itálico serifado dos destaques (`*texto*`) nos títulos. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-iserif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

/** Classes que expõem as variáveis `--font-gsflex` e `--font-iserif`. */
export const diarioFontsClass = `${googleSansFlex.variable} ${instrumentSerif.variable}`;
