import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_PT } from "@/lib/legal-pt";

export const metadata: Metadata = {
  title: "Política de Privacidade — Diário de Memórias",
  robots: { index: false, follow: true },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage title="Política de Privacidade" updated={LEGAL_PT.updated}>
      <p>
        A tua privacidade é importante para nós. Esta política explica que dados
        pessoais recolhemos, para que fins e quais os teus direitos, em
        conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD —
        Regulamento (UE) 2016/679).
      </p>

      <LegalSection heading="1. Responsável pelo tratamento">
        <p>
          {LEGAL_PT.company}, NIF {LEGAL_PT.nif}, com morada em {LEGAL_PT.address}.
          Para qualquer questão relacionada com dados pessoais, contacta-nos
          através de{" "}
          <a href={`mailto:${LEGAL_PT.email}`} className="font-semibold text-[#c22745] hover:underline">
            {LEGAL_PT.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="2. Que dados recolhemos">
        <p>
          Recolhemos apenas o necessário: os dados que nos forneces ao efetuar a
          compra (nome e e-mail, processados pela plataforma de pagamento) e
          dados de navegação recolhidos por cookies e pelo pixel da Meta
          (identificadores do dispositivo/navegador e interações com a página).
        </p>
      </LegalSection>

      <LegalSection heading="3. Finalidades e base legal">
        <p>
          Utilizamos os teus dados para: (i) processar a compra e entregar o
          produto — execução do contrato; (ii) medir e melhorar a nossa
          publicidade através do pixel da Meta — com base no teu consentimento;
          (iii) cumprir obrigações legais e fiscais.
        </p>
      </LegalSection>

      <LegalSection heading="4. Pixel da Meta e publicidade">
        <p>
          Usamos o pixel da Meta apenas para o essencial: medir o desempenho dos
          nossos anúncios e mostrar comunicações mais relevantes. Só é ativado
          após o teu consentimento no banner de cookies. Podes saber mais na{" "}
          <a href="/politica-de-cookies" className="font-semibold text-[#c22745] hover:underline">
            Política de Cookies
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="5. Subcontratantes e partilha">
        <p>
          Não vendemos os teus dados. Partilhamos apenas com prestadores
          necessários ao funcionamento do serviço: a plataforma de pagamento e
          entrega (Hotmart), a Meta Platforms (medição de publicidade) e o
          alojamento do site (Vercel). Estes tratam os dados por nossa conta e
          nos termos dos respetivos contratos.
        </p>
      </LegalSection>

      <LegalSection heading="6. Conservação">
        <p>
          Conservamos os teus dados apenas pelo período necessário às
          finalidades descritas ou pelos prazos legais aplicáveis (nomeadamente
          fiscais).
        </p>
      </LegalSection>

      <LegalSection heading="7. Os teus direitos">
        <p>
          Tens direito de acesso, retificação, eliminação, limitação, oposição e
          portabilidade dos teus dados, bem como de retirar o consentimento a
          qualquer momento. Para os exercer, contacta{" "}
          <a href={`mailto:${LEGAL_PT.email}`} className="font-semibold text-[#c22745] hover:underline">
            {LEGAL_PT.email}
          </a>
          . Tens também o direito de apresentar reclamação junto da CNPD
          (Comissão Nacional de Proteção de Dados — www.cnpd.pt).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
