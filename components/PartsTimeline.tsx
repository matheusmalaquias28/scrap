"use client";

import { useEffect, useRef } from "react";

type Step = { title: string; desc: string };

export function PartsTimeline({
  steps,
  numbered = false,
}: {
  steps: readonly Step[];
  /** Numera todos os passos mesmo sem o prefixo "PARTE N". */
  numbered?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  // Ofertas que nomeiam as etapas como "PARTE 1..." usam esse prefixo para
  // separar etapas (numeradas na linha do tempo) de observações soltas.
  // Com `numbered`, uma oferta sem esse prefixo também ganha a linha do tempo
  // numerada — usado por listas de entregáveis (ex.: /terrario).
  const tagged = steps.filter((s) => /^PARTE\s+\d/i.test(s.title));
  const useAll = tagged.length === 0 && numbered;
  const parts = useAll ? [...steps] : tagged;
  const notes = useAll ? [] : steps.filter((s) => !/^PARTE\s+\d/i.test(s.title));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reveal = () => root.classList.add("is-in");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        io.disconnect();
      },
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="parts-timeline w-full max-w-[400px] text-left">
      <ol className="m-0 flex list-none flex-col p-0">
        {parts.map((step, i) => (
          <li
            key={step.title}
            className="parts-timeline__item flex items-stretch gap-4"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className="flex w-10 shrink-0 flex-col items-center">
              <span className="parts-timeline__node">{i + 1}</span>
              {i < parts.length - 1 ? (
                <span className="parts-timeline__seg" aria-hidden>
                  <span className="parts-timeline__track" />
                  <span className="parts-timeline__fill" />
                  <span className="parts-timeline__drop-track">
                    <span className="parts-timeline__drop" />
                  </span>
                </span>
              ) : null}
            </div>
            <div className={`parts-timeline__body ${i < parts.length - 1 ? "pb-8" : "pb-1"}`}>
              <h3 className="font-display text-[22px] font-semibold leading-snug text-white">
                {step.title}
              </h3>
              {step.desc ? (
                <p className="mt-1 text-[18px] font-medium leading-relaxed text-white/70">
                  {step.desc}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      {notes.map((note) => (
        <div
          key={note.title}
          className="parts-timeline__note mt-5 rounded-2xl px-4 py-4"
        >
          <h3 className="font-display text-[18px] font-semibold leading-snug text-white">
            {note.title}
          </h3>
          <p className="mt-1 text-[16px] font-medium leading-relaxed text-white/70">
            {note.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
