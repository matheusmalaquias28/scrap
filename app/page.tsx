import dynamic from "next/dynamic";
import { CtaButton } from "@/components/CtaButton";
import { Marquee } from "@/components/Marquee";
import {
  theme,
  offerBar,
  hero,
  materials,
  whySection,
  idealSection,
  offerSection,
  plansSection,
  guarantee,
  contact,
  testimonials,
  stepsSection,
  faq,
  footer,
} from "@/lib/content";

const StickyCta = dynamic(() =>
  import("@/components/StickyCta").then((m) => m.StickyCta),
);
const TestimonialCarousel = dynamic(() =>
  import("@/components/TestimonialCarousel").then((m) => m.TestimonialCarousel),
);
/* ── palette ── */
const P = {
  cream:  "#fdf8f0",
  white:  "#ffffff",
  green:  "#3a7d44",
  dark:   "#131313",
  navy:   "#041774",
} as const;

const BELOW = "cv-auto contain-paint";
const SUB = "text-[18px] font-medium";
const CHECKOUT_URL =
  "https://pay.hotmart.com/N107138478A?off=a375p5al&checkoutMode=10&bid=1787453658844";

function LazyImg({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "low"}
      className={className}
    />
  );
}

/* ── shared atoms ── */

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: from }}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 56 }}
        aria-hidden
      >
        <path d="M0,56 L0,28 C480,0 960,56 1440,28 L1440,56 Z" fill={to} />
      </svg>
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 13" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M17 1L6 12L1 7" stroke="#07C707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={`w-4 shrink-0 ${className}`} aria-hidden>
      <path d="M1 1L13 13M13 1L1 13" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SecurePurchaseBadge() {
  const badge = plansSection.securePurchaseBadge;
  return (
    <LazyImg
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      className="w-full max-w-[320px]"
    />
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`z-10 inline-block rounded-full bg-badge px-4 py-2 text-[13px] font-semibold text-white ${className}`}>
      {children}
    </span>
  );
}

function FeatureItem({
  text,
  light = false,
  struck = false,
}: {
  text: string;
  light?: boolean;
  struck?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-3 py-[9px] ${SUB} leading-snug
        ${struck ? "opacity-40 line-through" : ""}
        ${light ? "text-white" : "text-ink"}`}
    >
      {struck ? (
        <CrossIcon className="mt-[2px]" />
      ) : (
        <Check className="mt-[2px]" />
      )}
      <span>{text}</span>
    </li>
  );
}

function Avatars() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center">
        {(
          [
            ["avatar-2", "size-[28px]"],
            ["avatar-4", "size-[34px]"],
            ["avatar-5", "size-[42px] z-10"],
            ["avatar-3", "size-[34px]"],
            ["avatar-1", "size-[28px]"],
          ] as [string, string][]
        ).map(([a, cls], i) => (
          <LazyImg
            key={a}
            src={`/${a}.webp`}
            alt=""
            width={42}
            height={42}
            className={`rounded-full object-cover ring-2 ring-white ${cls} ${i > 0 ? "-ml-2" : ""}`}
          />
        ))}
      </div>
      <p className={`${SUB} text-ink`}>{hero.socialProofLabel}</p>
    </div>
  );
}

/* ── page ── */

export const revalidate = 3600;

export default function Home() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
    <main
      className="flex w-full flex-col overflow-x-hidden"
      style={{
        "--color-brand": theme.brandColor,
        fontFamily: "var(--font-manrope-page), Manrope, sans-serif",
      } as React.CSSProperties}
    >
      {/* Offer bar */}
      <div className="flex items-center justify-center bg-red-600 px-4 py-[10px]">
        <p className="text-center font-display text-[12px] font-semibold leading-snug text-white">
          {offerBar.text} {today}
        </p>
      </div>

      <StickyCta label={hero.ctaLabel} />

      {/* ══ HERO ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className="px-5 pb-1 pt-4 text-center"
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-[#ecf7ee] px-4 py-2 text-[12px] font-semibold leading-snug text-ink shadow-[0_2px_8px_rgba(58,125,68,0.08)]">
            {hero.secureSeal}
          </span>
          <div role="heading" aria-level={1} className="leading-[1.05]">
            <p className="block font-display text-[26px] font-semibold text-brand">
              {hero.titleHighlight}
            </p>
            <p className="block font-display text-[25px] font-semibold" style={{ color: "#5a5a5a" }}>
              {hero.title}
            </p>
          </div>

          <div className="relative mt-2 w-full max-w-[383px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.poster.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full rounded-[10px]"
            />
          </div>

          <p className={`max-w-[340px] ${SUB} leading-relaxed text-muted`}>
            {hero.subtitle}
          </p>

          <CtaButton
            href="#plano-completo"
            label={hero.ctaLabel}
            id="hero"
            className="w-full max-w-[382px]"
          />
          {hero.deliveryNoteLines.length > 0 && (
            <p className={`text-center ${SUB} leading-snug text-muted`}>
              {hero.deliveryNoteLines[0]}
              <br />
              {hero.deliveryNoteLines[1]}
            </p>
          )}
          {hero.socialProofLabel ? <Avatars /> : null}
        </div>
      </section>

      {/* Wave cream→white */}
      <WaveDivider from={P.cream} to={P.white} />

      {/* ══ MATERIAIS ══ */}
      <section style={{ backgroundColor: P.white }} className={`${BELOW} pb-14 pt-4 text-center`}>
        <div className="mx-auto max-w-[640px] px-5">
          <h2 className="mb-7 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {materials.title}
          </h2>
        </div>
        <Marquee
          duration={32}
          itemWidth={260}
          containerClassName="max-w-[480px] lg:max-w-[560px] mx-auto"
          imageSize={materials.imageSize}
          items={materials.items}
        />
      </section>

      {/* Wave white→green */}
      <WaveDivider from={P.white} to={P.green} />

      {/* ══ POR QUÊ ══ */}
      <section
        style={{ backgroundColor: P.green }}
        className={`${BELOW} px-6 pb-16 pt-12 text-center`}
      >
        <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-white">
          {whySection.title}
        </h2>
        <div className="mx-auto grid w-full max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whySection.cards.map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-2xl bg-white px-5 py-5 text-left"
            >
              <span className="text-[30px] leading-none" aria-hidden>
                {c.icon}
              </span>
              <div>
                <p className="font-display text-[19px] font-semibold leading-snug text-ink">
                  {c.title}
                </p>
                <p className={`mt-1 ${SUB} leading-snug`} style={{ color: "#555" }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wave green→cream */}
      <WaveDivider from={P.green} to={P.cream} />

      {/* ══ IDEAL PARA VOCÊ ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto max-w-[960px]">
          <h2 className="mb-9 font-display text-[36px] font-semibold leading-[0.9] text-ink">
            {idealSection.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {idealSection.items.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-7 text-left"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <span
                  className="font-display text-[52px] font-semibold leading-none select-none"
                  style={{ color: "rgba(58,125,68,0.18)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[16px] font-bold uppercase leading-tight text-ink">
                  {item.title}
                </p>
                <p className={`${SUB} leading-relaxed`} style={{ color: "#666" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave cream→dark */}
      <WaveDivider from={P.cream} to={P.dark} />

      {/* ══ OFERTA PRINCIPAL ══ */}
      <section
        style={{ backgroundColor: P.dark }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center gap-5">
          <Badge>{offerSection.pill}</Badge>
          <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
            {offerSection.title}
          </h2>
          <p className={`font-display ${SUB} text-white/60`}>
            {offerSection.cardTitle}
          </p>

          <LazyImg
            src={offerSection.image.src}
            alt={offerSection.image.alt}
            width={offerSection.image.width}
            height={offerSection.image.height}
            className="w-full max-w-[383px] rounded-[12px]"
          />

          <div className="flex w-full max-w-[400px] flex-col gap-5 text-left">
            {offerSection.howItWorks.map((step) => (
              <div key={step.title}>
                <h3 className="font-display text-[22px] font-semibold leading-snug text-white">
                  {step.title}
                </h3>
                <p className={`mt-1 ${SUB} leading-relaxed text-white/70`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave dark→white */}
      <WaveDivider from={P.dark} to={P.white} />

      {/* ══ PLANOS ══ */}
      <section
        id="plano-completo"
        style={{ backgroundColor: P.white }}
        className={`${BELOW} scroll-mt-4 px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto max-w-[1040px]">
          <Badge className="whitespace-nowrap px-3 py-1.5 text-[10px]">{plansSection.pill}</Badge>
          <h2 className="my-7 font-display text-[38px] font-semibold leading-[0.9] text-ink">
            {plansSection.title}
          </h2>

          <div className="mx-auto flex max-w-[480px] flex-col items-center">
            {/* Plano Completo */}
            <div className="flex w-full flex-col items-center">
              <div
                className="flex w-full flex-col items-center gap-4 rounded-2xl px-6 pb-10 pt-6"
                style={{ backgroundColor: P.dark }}
              >
                <span
                  className="mt-3 inline-block whitespace-nowrap rounded-full px-3 py-1.5 font-display text-[10px] font-bold text-white"
                  style={{ backgroundColor: "#e30000" }}
                >
                  {plansSection.complete.badge}
                </span>
                <p
                  className="px-3 py-2 font-display text-[22px] font-semibold text-white sm:text-[24px]"
                  style={{ backgroundColor: P.green }}
                >
                  {plansSection.complete.name}
                </p>
                {plansSection.complete.allBonusesLabel ? (
                  <p className={`flex items-center gap-2 font-display ${SUB} text-white`}>
                    <Check /> {plansSection.complete.allBonusesLabel}
                  </p>
                ) : null}
                <LazyImg
                  src={plansSection.complete.image.src}
                  alt={plansSection.complete.image.alt}
                  width={plansSection.complete.image.width}
                  height={plansSection.complete.image.height}
                  className="w-full max-w-[320px] rounded-xl"
                />
                <Badge>{plansSection.complete.pill}</Badge>
                <ul className="w-full max-w-[320px] text-left">
                  {plansSection.complete.features.map((f) => (
                    <FeatureItem key={f} text={f} light />
                  ))}
                </ul>
                <p className="font-display text-[18px] text-alert line-through">
                  {plansSection.complete.oldPrice}
                </p>
                <p className="font-display text-[60px] font-semibold leading-none text-white">
                  {plansSection.complete.price}
                </p>
                <p className={`font-display ${SUB} text-white`}>
                  {plansSection.complete.installments}
                </p>
                <p className={`font-display ${SUB} text-white`}>
                  {plansSection.complete.savings}
                </p>
                <CtaButton
                  href={CHECKOUT_URL}
                  label={plansSection.complete.ctaLabel}
                  id="plano_completo"
                  planName="Completo"
                />
                <SecurePurchaseBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave white→navy */}
      <WaveDivider from={P.white} to={P.navy} />

      {/* ══ GARANTIA ══ */}
      <section
        style={{ backgroundColor: P.navy }}
        className={`${BELOW} px-10 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex max-w-[400px] flex-col items-center gap-5">
          <LazyImg
            src="/guarantee-seal.webp"
            alt={guarantee.seal.alt}
            width={guarantee.seal.width}
            height={guarantee.seal.height}
          />
          <h2 className="font-display text-[32px] font-semibold leading-snug text-white">
            {guarantee.title}
          </h2>
          <div className={`text-left ${SUB} leading-relaxed`} style={{ color: "rgba(255,255,255,0.82)" }}>
            <p className="text-center">{guarantee.intro}</p>
            <p className="mt-4">{guarantee.lead}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {guarantee.bullets.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="mt-[7px] size-2 shrink-0 rounded-full bg-alert"
                    aria-hidden
                  />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {guarantee.outro} <strong>{guarantee.outroStrong}</strong>
            </p>
          </div>
          <p className={SUB} style={{ color: "rgba(255,255,255,0.55)" }}>
            {guarantee.helpLabel}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-cta px-6 py-3 font-display text-[18px] font-semibold text-navy transition hover:brightness-110"
          >
            {contact.email}
          </a>
        </div>
      </section>

      {/* Wave navy→cream */}
      <WaveDivider from={P.navy} to={P.cream} />

      {/* ══ DEPOIMENTOS ══ */}
      <section
        style={{ backgroundColor: P.cream }}
        className={`${BELOW} px-5 pb-16 pt-12 text-center`}
      >
        <div className="mx-auto flex w-full max-w-[553px] flex-col items-center gap-7">
          <h2 className="max-w-[480px] font-display text-[32px] font-semibold leading-[0.95] text-ink">
            {testimonials.title}
          </h2>
          <TestimonialCarousel items={testimonials.items} />
        </div>
      </section>

      {/* Wave cream→green */}
      <WaveDivider from={P.cream} to={P.green} />

      {/* ══ COMO FUNCIONA ══ */}
      <section
        style={{ backgroundColor: P.green }}
        className={`${BELOW} px-6 pb-16 pt-12 text-center`}
      >
        <h2 className="font-display text-[36px] font-semibold leading-[0.9] text-white">
          {stepsSection.title}
        </h2>
        {stepsSection.subtitle ? (
          <p className={`mt-2 font-display ${SUB} text-white/65`}>
            {stepsSection.subtitle}
          </p>
        ) : null}

        <div className="mx-auto mt-9 flex w-full max-w-[640px] flex-col gap-0">
          {stepsSection.steps.map((s, i) => (
            <div key={s.title} className="flex items-stretch gap-4 text-left">
              <div className="flex flex-col items-center">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-[17px] font-bold text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.5)" }}
                >
                  {i + 1}
                </div>
                {i < stepsSection.steps.length - 1 && (
                  <div
                    className="w-[2px] flex-1 my-1"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", minHeight: 24 }}
                    aria-hidden
                  />
                )}
              </div>
              <div className="mb-4 flex flex-1 flex-col gap-1 rounded-2xl bg-white p-5">
                <p className="font-display text-[20px] font-semibold text-ink">{s.title}</p>
                {s.desc ? (
                  <p className={SUB} style={{ color: "#666" }}>{s.desc}</p>
                ) : null}
                {s.items.length > 0 ? (
                  <ul className="mt-1 flex flex-col gap-1">
                    {s.items.map((t) => (
                      <li key={t} className={`flex items-center gap-2 ${SUB} text-ink`}>
                        <Check className="!w-[12px]" /> {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <CtaButton
            href="#plano-completo"
            label={stepsSection.ctaLabel}
            id="passo_a_passo"
          />
        </div>
      </section>

      {/* Wave green→white */}
      <WaveDivider from={P.green} to={P.white} />

      {/* ══ FAQ ══ */}
      <section
        style={{ backgroundColor: P.white }}
        className={`${BELOW} px-5 pb-16 pt-12`}
      >
        <div className="mx-auto max-w-[640px]">
          <h2 className="mb-8 text-center font-display text-[36px] font-semibold leading-[0.9] text-ink">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-2">
            {faq.map(([q, a]) => (
              <details
                key={q}
                className="rounded-xl"
                style={{ backgroundColor: "#f4f4f2" }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display text-[15px] font-semibold text-ink">
                  {q}
                  <svg
                    viewBox="0 0 13 7"
                    className="faq-chevron w-3 shrink-0 transition-transform duration-200"
                    aria-hidden
                  >
                    <path
                      d="M0.5 0.5L6.5 6.5L12.5 0.5"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </summary>
                <p className={`px-5 pb-5 ${SUB} leading-relaxed text-muted`}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RODAPÉ ══ */}
      <footer
        style={{ backgroundColor: P.cream }}
        className="px-6 py-10 text-center"
      >
        <p className={`${SUB} text-ink`}>
          Copyright {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className={`mt-2 ${SUB}`}>
          Contato:{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-brand hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <p className={`mt-6 ${SUB} text-muted`}>{footer.legal}</p>
      </footer>
    </main>
    </>
  );
}
