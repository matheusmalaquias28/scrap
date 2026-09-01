/**
 * Gera variantes responsivas (.webp) das imagens usadas na landing e escreve
 * lib/responsive-manifest.json (src -> { widths, full, sizes }).
 *
 * As imagens originais NÃO são alteradas — elas continuam sendo o maior degrau
 * do srcset (o fallback do atributo `src`). Rode com: npm run images:responsive
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const PUBLIC = "public";
const QUALITY = 78;

/** Cada entrada define os degraus responsivos e o atributo `sizes` do layout. */
const PLAN = [
  // Hero (LCP) — container no máx. 383px CSS.
  { src: "/hero.webp", widths: [384, 512, 640, 768], sizes: "(max-width: 423px) calc(100vw - 40px), 383px" },

  // Marquee de diários — cada item tem 260px CSS fixos.
  ...["diario-01-nova-york", "diario-02-aniversario", "diario-03-vintage", "diario-04-ilha", "diario-05-narbonne"].map(
    (n) => ({ src: `/diarios/${n}.webp`, widths: [260, 390, 520], sizes: "260px" }),
  ),

  // Kit / planos (1024²) dentro de cartão de no máx. ~448px CSS.
  ...["/kit-diario.webp", "/plano-basico.webp", "/plano-completo.webp"].map((src) => ({
    src,
    widths: [384, 560, 768],
    sizes: "(max-width: 520px) 88vw, 448px",
  })),

  // Bônus (900²) — grid de 1 col no mobile, 2 col em telas maiores.
  ...["bonus-01-elementos", "bonus-02-frases", "bonus-03-molduras", "bonus-04-papeis"].map((n) => ({
    src: `/bonus/${n}.webp`,
    widths: [384, 560, 768],
    sizes: "(max-width: 640px) 88vw, 400px",
  })),

  // Depoimentos de alunas (720x960) — carrossel, 1 por vez no mobile.
  ...["aluna-01-tbilisi", "aluna-02-june", "aluna-03-hawaii-trip", "aluna-04-lago", "aluna-05-hawaii", "aluna-06-2024"].map(
    (n) => ({ src: `/alunas/${n}.webp`, widths: [384, 560], sizes: "(max-width: 600px) 90vw, 460px" }),
  ),

  // Selo de garantia (482²) — exibido a 241px CSS.
  { src: "/guarantee-seal.webp", widths: [241], sizes: "241px" },

  // Selo de compra segura (640x192) — exibido a no máx. 320px CSS.
  { src: "/entregaveis-v2/compra-segura-hotmart-640.webp", widths: [320], sizes: "(max-width: 360px) 88vw, 320px" },
];

const manifest = {};

for (const { src, widths, sizes } of PLAN) {
  const abs = path.join(PUBLIC, src);
  if (!fs.existsSync(abs)) {
    console.warn(`! pulei (não existe): ${src}`);
    continue;
  }
  const meta = await sharp(abs).metadata();
  const full = meta.width;
  const base = src.replace(/\.webp$/, "");
  const emitted = [];

  for (const w of widths) {
    if (w >= full) continue; // nunca aumentar
    const out = path.join(PUBLIC, `${base}-${w}.webp`);
    await sharp(abs)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(out);
    emitted.push(w);
    console.log(`  ${base}-${w}.webp  (${Math.round(fs.statSync(out).size / 1024)}KB)`);
  }

  manifest[src] = { widths: emitted, full, sizes };
}

fs.writeFileSync("lib/responsive-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n✓ ${Object.keys(manifest).length} imagens no manifesto -> lib/responsive-manifest.json`);
