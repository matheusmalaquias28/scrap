type Props = {
  width: number;
  height: number;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** Ignorado — mantido só para compatibilidade com a API do next/image. */
  preload?: boolean;
  sizes?: string;
  "aria-hidden"?: boolean;
};

/** Placeholder visual até você adicionar as imagens reais em /public. */
export function ImagePlaceholder({ width, height, alt, className = "", style, "aria-hidden": ariaHidden }: Props) {
  return (
    <div
      role="img"
      aria-label={alt || undefined}
      aria-hidden={ariaHidden}
      className={`flex items-center justify-center overflow-hidden bg-[#fde8c8] text-center text-[11px] leading-tight text-[#9a7a4a] ${className}`}
      style={{ aspectRatio: `${width} / ${height}`, ...style }}
    >
      <span className="pointer-events-none line-clamp-3 select-none px-2">{alt}</span>
    </div>
  );
}
