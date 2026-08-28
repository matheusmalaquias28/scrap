"use client";

import { useEffect } from "react";

/**
 * Hash links on this page undershoot when sections use content-visibility.
 * Expand skipped sections, then scroll the real target into view.
 */
export function AnchorScroll() {
  useEffect(() => {
    const go = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      document.querySelectorAll<HTMLElement>(".cv-auto").forEach((n) => {
        n.style.contentVisibility = "visible";
      });
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#']");
      if (!(a instanceof HTMLAnchorElement)) return;
      const id = decodeURIComponent(a.hash.replace("#", ""));
      if (!id) return;
      if (!go(id)) return;
      e.preventDefault();
      history.pushState(null, "", a.hash);
    };

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => go(hash));
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
