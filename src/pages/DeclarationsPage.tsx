import {
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  Info,
} from "lucide-react";

import DocumentPageLayout from "../components/layouts/DocumentPageLayout";

const declarationUrl = "/documents/deklaracja-lekarz-poz.pdf";

const steps = [
  "Pobierz formularz deklaracji wyboru lekarza POZ.",
  "Wypełnij swoje dane osobowe, w tym imię, nazwisko, PESEL oraz adres zamieszkania.",
  "Jeżeli deklaracja dotyczy osoby małoletniej, uzupełnij odpowiednie dane przedstawiciela ustawowego.",
  "Wskaż wybranego lekarza podstawowej opieki zdrowotnej.",
  "Uzupełnij wymagane oświadczenia, datę oraz podpis.",
  "Przekaż wypełnioną deklarację do poradni zgodnie z aktualnymi zasadami jej przyjmowania.",
];

function DeclarationsPage() {
  return (
    <DocumentPageLayout
      title="Deklaracje POZ"
      description="Informacje dotyczące wyboru lekarza podstawowej opieki zdrowotnej oraz formularz deklaracji do pobrania."
    >
      <div className="space-y-10">
        {/* INTRODUCTION */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <ClipboardCheck size={26} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Wybór lekarza POZ
            </h2>
          </div>

          <p>
            Pacjent ma możliwość wyboru lekarza podstawowej opieki zdrowotnej
            poprzez złożenie odpowiedniej deklaracji.
          </p>

          <p className="mt-4">
            Poniżej udostępniamy formularz deklaracji wyboru świadczeniodawcy
            oraz lekarza podstawowej opieki zdrowotnej. Dokument zawiera dane
            NZPOZ SUPERMED s.c.
          </p>
        </section>

        {/* INSTRUCTIONS */}
        <section className="rounded-2xl bg-[#F1FAFA] p-6 sm:p-8">
          <h2 className="mb-5 text-xl font-bold text-primary">
            Jak wypełnić deklarację?
          </h2>

          <ol className="list-decimal space-y-4 pl-5">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        {/* PDF DOWNLOAD */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <FileText size={25} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Formularz do pobrania
            </h2>
          </div>

          <div className="rounded-2xl border border-[#D9E9EB] bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-primary">
              Deklaracja wyboru lekarza POZ
            </h3>

            <p className="mt-3 text-sm leading-7 text-text-muted">
              Oryginalny formularz deklaracji wyboru świadczeniodawcy oraz
              lekarza podstawowej opieki zdrowotnej. Dokument zawiera 2 strony.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={declarationUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Download size={18} />
                Pobierz deklarację PDF
              </a>

              <a
                href={declarationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9E8E8] px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[#F1FAFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <ExternalLink size={18} />
                Otwórz formularz
              </a>
            </div>
          </div>
        </section>

        {/* IMPORTANT INFORMATION */}
        <section className="rounded-2xl border border-[#D9E9EB] bg-[#F8FCFC] p-6">
          <div className="flex items-start gap-3">
            <Info size={22} className="mt-1 shrink-0 text-accent" />

            <div>
              <h2 className="mb-2 text-lg font-bold text-primary">
                Ważne informacje
              </h2>

              <p>
                Udostępniony formularz dotyczy wyboru lekarza POZ. Deklaracje
                wyboru pielęgniarki i położnej POZ stanowią odrębne dokumenty.
              </p>

              <p className="mt-3">
                W przypadku pytań dotyczących składania deklaracji skontaktuj
                się z rejestracją poradni.
              </p>
            </div>
          </div>
        </section>

        {/* IKP */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-primary">
            Deklaracja przez Internetowe Konto Pacjenta
          </h2>

          <p>
            Wyboru lekarza podstawowej opieki zdrowotnej można również dokonać
            elektronicznie za pośrednictwem Internetowego Konta Pacjenta,
            zgodnie z zasadami obowiązującymi w systemie IKP.
          </p>

          <a
            href="https://pacjent.gov.pl/internetowe-konto-pacjenta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-primary"
          >
            Przejdź do Internetowego Konta Pacjenta
            <ExternalLink size={17} />
          </a>
        </section>
      </div>
    </DocumentPageLayout>
  );
}

export default DeclarationsPage;
