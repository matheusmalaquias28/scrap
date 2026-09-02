"use client";

import { useEffect } from "react";

/**
 * Camada de atrito CLIENT-SIDE. Leia com honestidade:
 *   - Não impede cópia de verdade (Ctrl+U, view-source, JS desligado, curl burlam tudo).
 *   - Serve para desencorajar o visitante casual e RASTREAR tentativas (beacon -> /api/trace).
 *   - A proteção real está no middleware (bot block) + robots (anti-IA) + marca d'água.
 *
 * Cuidados de UX embutidos:
 *   - Só ativa atalhos/bloqueios em telas com ponteiro fino (desktop). Mobile fica livre.
 *   - Nunca bloqueia digitação em <input>/<textarea>.
 *   - Usa overlay em vez de alert() (alert congela a aba).
 */

const ENDPOINT = "/api/trace";

function report(event: string, detail?: unknown) {
  try {
    const payload = JSON.stringify({ event, detail: detail ?? null });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: "application/json" }));
    } else {
      fetch(ENDPOINT, { method: "POST", body: payload, keepalive: true });
    }
  } catch {
    /* silencioso */
  }
}

function showOverlay(message: string) {
  if (document.getElementById("__guard_overlay")) return;
  const el = document.createElement("div");
  el.id = "__guard_overlay";
  el.setAttribute("role", "alertdialog");
  el.style.cssText =
    "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;" +
    "justify-content:center;text-align:center;padding:24px;background:rgba(10,10,15,.92);" +
    "color:#fff;font:600 18px/1.5 system-ui,sans-serif;backdrop-filter:blur(4px)";
  el.innerHTML =
    `<div><p style="margin:0 0 12px">Esta página é monitorada.</p>` +
    `<p style="margin:0;font-weight:400;opacity:.8;max-width:36ch">${message}</p></div>`;
  el.addEventListener("click", () => el.remove());
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 4000);
}

export function PageGuard() {
  useEffect(() => {
    // Só em desktop (ponteiro fino). Toque/mobile fica sem atrito.
    const isDesktop = window.matchMedia("(pointer: fine)").matches;

    const isEditable = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
    };

    // 1) Menu de contexto (botão direito).
    const onContextMenu = (e: MouseEvent) => {
      if (isEditable(e.target)) return;
      e.preventDefault();
      report("contextmenu");
    };

    // 2) Copiar/recortar: injeta marca d'água + atribuição no que for copiado.
    const onCopy = (e: ClipboardEvent) => {
      if (isEditable(e.target)) return;
      const selection = window.getSelection()?.toString() ?? "";
      if (!selection) return;
      e.preventDefault();
      // Zero-width watermark (invisível) + linha de origem = prova de cópia.
      const zw = "​‌‍⁠";
      const marked = `${selection}\n\n— Conteúdo de ${location.host} ${zw}`;
      e.clipboardData?.setData("text/plain", marked);
      report("copy", { len: selection.length });
      showOverlay("O conteúdo desta oferta é protegido e o acesso foi registrado.");
    };

    // 3) Atalhos: F12, Ctrl+Shift+I/J/C, Ctrl+U (view-source), Ctrl+S/P.
    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditable(e.target)) return;
      const k = e.key.toLowerCase();
      const block =
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
        ((e.ctrlKey || e.metaKey) && (k === "u" || k === "s" || k === "p"));
      if (block) {
        e.preventDefault();
        report("shortcut", { key: e.key, ctrl: e.ctrlKey, shift: e.shiftKey, meta: e.metaKey });
        showOverlay("Ferramentas de inspeção estão desativadas nesta página.");
      }
    };

    // 4) Detector de DevTools por diferença de viewport (docked) — throttled.
    //    Evita o truque com `debugger` de propósito: ele congela a aba (UX péssima).
    let devtoolsOpen = false;
    const THRESHOLD = 160;
    const checkDevtools = () => {
      const widthGap = window.outerWidth - window.innerWidth > THRESHOLD;
      const heightGap = window.outerHeight - window.innerHeight > THRESHOLD;
      const open = widthGap || heightGap;
      if (open && !devtoolsOpen) {
        devtoolsOpen = true;
        report("devtools_open", { widthGap, heightGap });
        showOverlay("Console de desenvolvedor detectado. Este acesso foi registrado.");
      } else if (!open && devtoolsOpen) {
        devtoolsOpen = false;
      }
    };
    const interval = window.setInterval(checkDevtools, 1500);

    // Classe que aplica user-select:none via CSS (ver globals.css).
    if (isDesktop) document.body.classList.add("guard-noselect");

    if (isDesktop) {
      document.addEventListener("contextmenu", onContextMenu);
      document.addEventListener("copy", onCopy);
      document.addEventListener("cut", onCopy);
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.classList.remove("guard-noselect");
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCopy);
      document.removeEventListener("keydown", onKeyDown);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
