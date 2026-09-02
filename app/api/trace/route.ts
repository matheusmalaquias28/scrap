import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Endpoint de rastreio de eventos suspeitos disparados pelo PageGuard
 * (console aberto, tentativa de copiar, atalho de devtools, etc).
 *
 * Por ora apenas LOGA (console.*) — aparece em Vercel > Runtime Logs.
 * Para persistir de verdade, trocar o console.log por escrita em Vercel KV/Postgres.
 *
 * LGPD: IP é dado pessoal. Só use isto com um aviso de privacidade na página
 * declarando que registra IP/User-Agent para segurança e prevenção de abuso.
 */
export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-client-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  let body: Record<string, unknown> = {};
  try {
    body = await request.json();
  } catch {
    // corpo vazio/invalido — segue com {}
  }

  console.warn(
    JSON.stringify({
      tag: "GUARD_EVENT",
      ip,
      ua: request.headers.get("user-agent") ?? "",
      referer: request.headers.get("referer") ?? "",
      event: body.event ?? "unknown",
      detail: body.detail ?? null,
      at: new Date().toISOString(),
    }),
  );

  // 204: resposta enxuta; o cliente usa sendBeacon e não espera corpo.
  return new NextResponse(null, { status: 204 });
}

// Bloqueia métodos que não usamos.
export function GET() {
  return NextResponse.json({ error: "method not allowed" }, { status: 405 });
}
