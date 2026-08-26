"use client";

import { useEffect, useState } from "react";

type Item = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  items: Item[];
  /** Intervalo entre slides, em ms. */
  intervalMs?: number;
};

/** Carrossel infinito: exibe um depoimento por vez, no tamanho original da imagem. */
export function TestimonialCarousel({ items, intervalMs = 4500 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs]);

  if (items.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.src} className="flex w-full shrink-0 justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-auto w-auto max-w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
