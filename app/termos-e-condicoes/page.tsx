import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_PT } from "@/lib/legal-pt";

export const metadata: Metadata = {
  title: "Termos e Condições — Diário de Memórias",
  robots: { index: false, follow: true },
};

export default function TermosECondicoes() {
  return (
    <LegalPage title="Termos e Condições" updated={LEGAL_PT.updated}>
      <p>
        Estes termos regulam a compra do produto digital &quot;Diário de
        Memórias&quot; neste site. Ao concluíres a compra, aceitas as condições
        abaixo.
      </p>

      <LegalSection heading="1. Identificação">
        <p>
          {LEGAL_PT.company}, NIF {LEGAL_PT.nif}, com morada em {LEGAL_PT.address}.
          Contacto:{" "}
          <a href={`mailto:${LEGAL_PT.email}`} className="font-semibold text-[#c22745] hover:underline">
            {LEGAL_PT.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Produto">
        <p>
          O produto é um material digital (ficheiros para download/impressão),
          com modelos e guias visuais para montagem de scrapbook. Não inclui
          quaisquer bens físicos.
        </p>
      </LegalSection>

      <LegalSection heading="3. Preço e pagamento">
        <p>
          Os preços são apresentados em euros (€) e incluem os impostos
          aplicáveis. O pagamento é processado de forma segura pela plataforma
          Hotmart, com MB Way, Multibanco ou cartão de crédito.
        </p>
      </LegalSection>

      <LegalSection heading="4. Entrega">
        <p>
          O acesso ao material é enviado para o teu e-mail imediatamente após a
          confirmação do pagamento.
        </p>
      </LegalSection>

      <LegalSection heading="5. Direito de livre resolução (14 dias)">
        <p>
          Tens o direito de resolver o contrato no prazo de 14 dias, sem
          necessidade de indicar qualquer motivo, e receber o reembolso total.
          Para o exercer, basta contactar-nos através de{" "}
          <a href={`mailto:${LEGAL_PT.email}`} className="font-semibold text-[#c22745] hover:underline">
            {LEGAL_PT.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="6. Propriedade intelectual">
        <p>
          Todo o conteúdo é protegido por direitos de autor e destina-se a uso
          pessoal. Não é permitida a revenda, redistribuição ou partilha dos
          ficheiros.
        </p>
      </LegalSection>

      <LegalSection heading="7. Lei aplicável e resolução de litígios">
        <p>
          Estes termos regem-se pela lei portuguesa. Em caso de litígio de
          consumo, podes recorrer às entidades de resolução alternativa de
          litígios de consumo e à plataforma europeia de RLL
          (ec.europa.eu/consumers/odr).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
