"use client";

import { useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { responsive } from "@/lib/responsive";

type Item = {
  src?: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  items: Item[];
  /** Intervalo entre slides, em ms. */
  intervalMs?: number;
};

function Slide({ item }: { item: Item }) {
  if (item.src) {
    const { srcSet, sizes, defaultSrc } = responsive(item.src);
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={defaultSrc ?? item.src}
        srcSet={srcSet}
        sizes={sizes}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="h-auto w-full rounded-[10px]"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <ImagePlaceholder
      alt={item.alt}
      width={item.width}
      height={item.height}
      className="w-full rounded-[10px]"
    />
  );
}

/** Carrossel: 1 imagem no mobile, 2 no desktop. */
export function TestimonialCarousel({ items, intervalMs = 4500 }: Props) {
  const [perView, setPerView] = useState(1);
  const [active, setActive] = useState(0);
  const pageCount = Math.max(1, Math.ceil(items.length / perView));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setPerView(mq.matches ? 2 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setActive((i) => i % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (pageCount <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % pageCount);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [pageCount, intervalMs]);

  if (items.length === 0) return null;

  const pages = Array.from({ length: pageCount }, (_, page) =>
    items.slice(page * perView, page * perView + perView),
  );

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
      >
        {pages.map((page, pageIndex) => (
          <div
            key={page.map((item) => item.src ?? item.alt).join("-")}
            className="flex w-full shrink-0 justify-center gap-4 px-0"
          >
            {page.map((item, i) => (
              <div
                key={item.src ?? `${item.alt}-${pageIndex}-${i}`}
                className="min-w-0 w-full flex-1 lg:max-w-[460px]"
              >
                <Slide item={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
