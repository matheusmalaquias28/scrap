"use client";

import { useEffect, useState } from "react";
import type { Consent } from "@/lib/offers/types";

/**
 * Banner de consentimento (RGPD) subtil e minimalista.
 *
 * Só é renderizado quando a oferta define `content.consent` — hoje, apenas a
 * landing de Portugal (`/scrapbook-pt`). Guarda a escolha em `localStorage`
 * para não voltar a aparecer. Estilos inline propositadamente (sem CSS global)
 * para ficar escopado a esta página e fora do caminho crítico de render.
 */

const STORAGE_KEY = "scrapbook-pt-consent-v1";

export function ConsentBanner({
  text,
  acceptLabel,
  declineLabel,
  policyHref,
  policyLabel,
}: Consent) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* silencioso */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento de cookies"
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        margin: "0 auto",
        maxWidth: 560,
        zIndex: 60,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        borderRadius: 14,
        background: "rgba(24, 20, 18, 0.94)",
        color: "#fff",
        boxShadow: "0 8px 30px rgba(0,0,0,0.28)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        font: "500 13px/1.5 var(--font-manrope), system-ui, sans-serif",
      }}
    >
      <p style={{ margin: 0, flex: "1 1 220px", opacity: 0.92 }}>
        {text}{" "}
        <a
          href={policyHref}
          style={{ color: "#7fe0c4", textDecoration: "underline", whiteSpace: "nowrap" }}
        >
          {policyLabel}
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
        {declineLabel ? (
          <button
            type="button"
            onClick={() => choose("declined")}
            style={{
              cursor: "pointer",
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "#fff",
              font: "inherit",
              fontWeight: 600,
            }}
          >
            {declineLabel}
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => choose("accepted")}
          style={{
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 999,
            border: "none",
            background: "#00db6a",
            color: "#04231a",
            font: "inherit",
            fontWeight: 700,
          }}
        >
          {acceptLabel}
        </button>
      </div>
    </div>
  );
}
