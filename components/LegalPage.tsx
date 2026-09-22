import Link from "next/link";

/**
 * Moldura simples e legível para páginas legais (pt-PT). Mantém o visual
 * sóbrio, sem depender da paleta das ofertas — foco em leitura.
 */
export function LegalPage({
  title,
  updated,
  backHref = "/scrapbook-pt",
  children,
}: {
  title: string;
  updated: string;
  backHref?: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className="legal-page mx-auto max-w-[760px] px-6 py-14"
      style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif", color: "#2f241f" }}
    >
      <Link
        href={backHref}
        className="text-[14px] font-semibold text-[#c22745] hover:underline"
      >
        ← Voltar
      </Link>
      <h1 className="mt-6 font-display text-[34px] font-semibold leading-tight">
        {title}
      </h1>
      <p className="mt-2 text-[14px] text-[#6f5e56]">
        Última atualização: {updated}
      </p>
      <div className="legal-content mt-8 flex flex-col gap-6 text-[16px] leading-relaxed text-[#4a3d36]">
        {children}
      </div>
    </main>
  );
}

/** Título de secção reutilizável nas páginas legais. */
export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-[20px] font-semibold text-[#2f241f]">
        {heading}
      </h2>
      {children}
    </section>
  );
}
