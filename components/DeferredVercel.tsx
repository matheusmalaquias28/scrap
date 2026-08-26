"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Analytics da Vercel fora do caminho crítico. */
export function DeferredVercel() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onReady = () => setReady(true);
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(onReady, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }
    const id = globalThis.setTimeout(onReady, 3000);
    return () => globalThis.clearTimeout(id);
  }, []);

  if (!ready) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
