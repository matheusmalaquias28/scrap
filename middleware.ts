import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * User-Agents de ferramentas de scraping / coleta automatizada.
 * Bloqueio no servidor — é a barreira que REALMENTE impede cópia em massa
 * (diferente de qualquer proteção client-side, que é só cosmética).
 *
 * Obs.: um scraper determinado pode forjar o User-Agent. Isto barra o grosso
 * (curl/wget/bibliotecas padrão) e os crawlers de IA que não respeitam robots.
 */
const BLOCKED_UA = [
  // ferramentas de linha de comando / bibliotecas HTTP
  "curl/",
  "wget",
  "python-requests",
  "python-urllib",
  "aiohttp",
  "httpx",
  "go-http-client",
  "java/",
  "okhttp",
  "libwww-perl",
  "scrapy",
  "node-fetch",
  "axios/",
  "guzzlehttp",
  "httpclient",
  "phantomjs",
  "headlesschrome",
  // coletores de IA (redundância ao robots.txt para os que o ignoram)
  "gptbot",
  "oai-searchbot",
  "claudebot",
  "claude-web",
  "anthropic-ai",
  "ccbot",
  "perplexitybot",
  "bytespider",
  "amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "diffbot",
];

/** Buscadores legítimos que devem SEMPRE passar (não confundir com scraper). */
const ALLOWLIST_UA = ["googlebot", "bingbot", "duckduckbot", "applebot", "facebookexternalhit", "twitterbot", "whatsapp"];

function clientIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function middleware(request: NextRequest) {
  const ua = (request.headers.get("user-agent") ?? "").toLowerCase();
  const ip = clientIp(request);

  const isAllowed = ALLOWLIST_UA.some((s) => ua.includes(s));
  const isBlocked = !isAllowed && (ua === "" || BLOCKED_UA.some((s) => ua.includes(s)));

  if (isBlocked) {
    // Log estruturado -> aparece em Vercel > Logs (Runtime Logs).
    console.warn(
      JSON.stringify({
        tag: "BOT_BLOCKED",
        ip,
        ua: request.headers.get("user-agent") ?? "",
        path: request.nextUrl.pathname,
        at: new Date().toISOString(),
      }),
    );
    return new NextResponse("Forbidden", { status: 403 });
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-client-ip", ip);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico)$).*)"],
};
