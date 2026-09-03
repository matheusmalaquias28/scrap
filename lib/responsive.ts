import manifest from "./responsive-manifest.json";

type Entry = { widths: number[]; full: number; sizes: string };

const M = manifest as Record<string, Entry>;

/**
 * Retorna `srcSet`, `sizes` e `defaultSrc` para imagens em /public com variantes
 * geradas por `scripts/gen-responsive.mjs`.
 */
export function responsive(src?: string): {
  srcSet?: string;
  sizes?: string;
  defaultSrc?: string;
} {
  if (!src) return {};
  const entry = M[src];
  if (!entry || entry.widths.length === 0) return {};

  const base = src.replace(/\.webp$/, "");
  const parts = entry.widths.map((w) => `${base}-${w}.webp ${w}w`);
  const maxVariant = entry.widths[entry.widths.length - 1];
  if (entry.full <= maxVariant) {
    parts.push(`${src} ${entry.full}w`);
  }

  return {
    srcSet: parts.join(", "),
    sizes: entry.sizes,
    defaultSrc: `${base}-${entry.widths[0]}.webp`,
  };
}

/** Menor variante responsiva — ideal como `src` padrão e preload do LCP. */
export function responsiveDefaultSrc(src?: string): string | undefined {
  if (!src) return undefined;
  const entry = M[src];
  if (!entry?.widths.length) return src;
  return src.replace(/\.webp$/, `-${entry.widths[0]}.webp`);
}
