import manifest from "./responsive-manifest.json";

type Entry = { widths: number[]; full: number; sizes: string };

const M = manifest as Record<string, Entry>;

/**
 * Retorna `srcSet` + `sizes` para uma imagem em /public que tenha variantes
 * responsivas geradas por `scripts/gen-responsive.mjs`. Se não houver variantes,
 * retorna `{}` e a imagem é servida no tamanho original (fallback do `src`).
 */
export function responsive(src?: string): { srcSet?: string; sizes?: string } {
  if (!src) return {};
  const entry = M[src];
  if (!entry || entry.widths.length === 0) return {};

  const base = src.replace(/\.webp$/, "");
  const parts = entry.widths.map((w) => `${base}-${w}.webp ${w}w`);
  parts.push(`${src} ${entry.full}w`);

  return { srcSet: parts.join(", "), sizes: entry.sizes };
}
