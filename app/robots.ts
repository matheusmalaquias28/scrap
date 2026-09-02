import type { MetadataRoute } from "next";

/**
 * robots.txt gerado pelo Next (App Router).
 *
 * IMPORTANTE: isto só barra bots que RESPEITAM o robots.txt (Google, Bing e os
 * crawlers de IA "de boa-fé"). Scraper malicioso ignora — a barreira real contra
 * esses está no middleware.ts (bloqueio por User-Agent + rate hints).
 *
 * Estratégia: continua indexável no Google/Bing (você quer SEO), mas nega os
 * coletores de dataset de IA para não alimentar treinamento/respostas com sua copy.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "cohere-ai",
  "Diffbot",
  "Timpibot",
  "ImagesiftBot",
  "Omgilibot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Buscadores tradicionais: liberado (SEO).
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Coletores de IA: bloqueio total.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
  };
}
