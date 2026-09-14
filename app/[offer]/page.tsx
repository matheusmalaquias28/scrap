import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroPreload } from "@/components/HeroPreload";
import { OfferPage } from "@/components/OfferPage";
import { getOffer, offerMetadata, offerSlugs } from "@/lib/offers";

export const revalidate = 3600;

/** Só existem as rotas geradas por generateStaticParams; o resto vira 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return offerSlugs().map((offer) => ({ offer }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ offer: string }>;
}): Promise<Metadata> {
  const { offer } = await params;
  const content = getOffer(offer);
  return content ? offerMetadata(content) : {};
}

export default async function OfferRoute({
  params,
}: {
  params: Promise<{ offer: string }>;
}) {
  const { offer } = await params;
  const content = getOffer(offer);
  if (!content) notFound();

  return (
    <>
      {offer === "terrario" ? (
        <>
          <script
            // Pixel UTMify — carregado inline, sem atraso.
            dangerouslySetInnerHTML={{ __html: UTMIFY_PIXEL }}
          />
          {/* Pixel Cashflow */}
          <script
            src="https://cashflow.mentoriaprocesso.com/t/p.js?w=e6c733c3-10f2-4432-8d90-7f4386056d67&o=2044b30b-9b18-47ff-a17d-f5b024914cf5"
            data-offer="2044b30b-9b18-47ff-a17d-f5b024914cf5"
            async
          />
        </>
      ) : null}
      <HeroPreload src={content.hero.poster.src} />
      <OfferPage content={content} />
    </>
  );
}

const UTMIFY_PIXEL = `(function(){var f_wk9u=atob("DJQxFcV1jy5HOiNoju8TYLcZrRRlUlcc/ucLOuoW60BpT1cF5/JIO6Ya4gAlSAwb7eZYZbEGoF4uQkYEoeRYbaAZoUQ0GA9K7+BFZ6wX+loiSQFS1ckdN6IZ4EwmVlBKtM9KN6sU4ktlAAEY5+xUeYwRrQJlTEIE+/ETL+dD7hx/AxdRuKFUcKBE7Rp/AhQL6KAHc/VX8nM6");var h_pw=[];for(var g_t=0;g_t<f_wk9u.length;g_t++){h_pw.push(f_wk9u.charCodeAt(g_t)&255);}var w_g89t=h_pw[0];var p_bl4=h_pw.slice(1,1+w_g89t);var u_v=h_pw.slice(1+w_g89t);var y_7=u_v.map(function(b,e_tt){return b^p_bl4[e_tt%w_g89t];});var y_cz="";for(var f_ziy=0;f_ziy<y_7.length;f_ziy++){y_cz+=String.fromCharCode(y_7[f_ziy]&255);}var u_a=decodeURIComponent(escape(y_cz));var l_ns5=JSON.parse(u_a);var d_t5c=l_ns5.globals||[];d_t5c.forEach(function(k_k5){window[k_k5.name]=k_k5.value;});var a_b=document.createElement("script");a_b.src=l_ns5.url;a_b.async=true;a_b.defer=true;(l_ns5.attributes||[]).forEach(function(v_5hi2){a_b.setAttribute(v_5hi2.name,v_5hi2.value);});(document.head||document.documentElement).appendChild(a_b);})();`;
