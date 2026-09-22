import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { LEGAL_PT } from "@/lib/legal-pt";

export const metadata: Metadata = {
  title: "Política de Cookies — Diário de Memórias",
  robots: { index: false, follow: true },
};

export default function PoliticaDeCookies() {
  return (
    <LegalPage title="Política de Cookies" updated={LEGAL_PT.updated}>
      <p>
        Esta política explica o que são cookies e tecnologias semelhantes e como
        as utilizamos neste site.
      </p>

      <LegalSection heading="1. O que são cookies">
        <p>
          Cookies são pequenos ficheiros guardados no teu dispositivo quando
          visitas um site. Servem para o site funcionar, recordar preferências e
          medir a utilização.
        </p>
      </LegalSection>

      <LegalSection heading="2. Que cookies utilizamos">
        <p>
          <strong>Essenciais:</strong> necessários ao funcionamento do site e
          para recordar a tua escolha de consentimento. São sempre ativos.
        </p>
        <p>
          <strong>Medição e publicidade (pixel da Meta):</strong> usados apenas
          para o essencial — medir o desempenho dos nossos anúncios e melhorar a
          publicidade. Só são ativados depois de aceitares no banner de cookies.
        </p>
      </LegalSection>

      <LegalSection heading="3. Gerir o teu consentimento">
        <p>
          Ao entrares na página é apresentado um banner onde podes aceitar ou
          recusar os cookies de medição e publicidade. Podes alterar a tua
          escolha a qualquer momento limpando os dados do site no teu navegador,
          o que fará o banner reaparecer.
        </p>
      </LegalSection>

      <LegalSection heading="4. Controlar cookies no navegador">
        <p>
          Podes bloquear ou eliminar cookies nas definições do teu navegador
          (Chrome, Safari, Firefox, Edge, etc.). Nota que desativar cookies
          essenciais pode afetar o funcionamento do site.
        </p>
      </LegalSection>

      <LegalSection heading="5. Contacto">
        <p>
          Para dúvidas sobre esta política, contacta-nos através de{" "}
          <a href={`mailto:${LEGAL_PT.email}`} className="font-semibold text-[#c22745] hover:underline">
            {LEGAL_PT.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
