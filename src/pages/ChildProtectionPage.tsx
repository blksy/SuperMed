import {
  Download,
  ExternalLink,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Mail,
} from "lucide-react";

import DocumentPageLayout from "../components/layouts/DocumentPageLayout";

const documentUrl = "/documents/standardy-ochrony-maloletnich.pdf";

const rules = [
  "Masz prawo czuć się bezpiecznie podczas wizyty w przychodni.",
  "Personel powinien traktować Cię z szacunkiem i życzliwością.",
  "Lekarz powinien wyjaśnić Ci, co będzie robił podczas badania.",
  "Możesz zadawać pytania i mówić o swoich obawach.",
  "Nikt nie może Cię poniżać, wyśmiewać ani krzywdzić.",
  "Jeżeli coś Cię niepokoi, możesz zwrócić się o pomoc.",
];

const helplines = [
  {
    label: "Telefon zaufania dla dzieci i młodzieży",
    number: "116 111",
    href: "tel:116111",
  },
  {
    label: "Dziecięcy Telefon Zaufania RPD",
    number: "800 12 12 12",
    href: "tel:800121212",
  },
  {
    label: "Niebieska Linia",
    number: "800 120 002",
    href: "tel:800120002",
  },
  {
    label: "Ogólnopolska linia pomocy pokrzywdzonym",
    number: "+48 222 309 900",
    href: "tel:+48222309900",
  },
];

function ChildProtectionPage() {
  return (
    <DocumentPageLayout
      title="Standardy Ochrony Małoletnich"
      description="Zasady bezpieczeństwa i ochrony dzieci oraz młodzieży w NZPOZ SUPERMED s.c."
    >
      <div className="space-y-10">
        {/* INTRODUCTION */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck size={26} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Bezpieczeństwo najmłodszych pacjentów
            </h2>
          </div>

          <p>
            W NZPOZ SUPERMED s.c. obowiązują Standardy Ochrony Małoletnich
            określające zasady bezpiecznych relacji pomiędzy personelem a
            dziećmi oraz sposób reagowania na podejrzenie krzywdzenia
            małoletnich.
          </p>

          <p className="mt-4">
            Dokument obejmuje między innymi zasady postępowania personelu,
            procedury interwencji, ochronę wizerunku dziecka oraz zasady
            udostępniania standardów.
          </p>
        </section>

        {/* CHILD-FRIENDLY SUMMARY */}
        <section className="rounded-2xl bg-[#F1FAFA] p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <HeartHandshake size={26} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Informacje dla dzieci i młodzieży
            </h2>
          </div>

          <p className="mb-5">
            Każde dziecko ma prawo do bezpieczeństwa, szacunku i właściwego
            traktowania. Najważniejsze zasady obowiązujące w naszej poradni:
          </p>

          <ul className="list-disc space-y-3 pl-5">
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>

          <p className="mt-5 text-sm">
            Powyższe informacje stanowią uproszczone podsumowanie zasad
            zawartych w dokumencie poradni. Pełna wersja oraz wersja skrócona
            dla dzieci są dostępne poniżej.
          </p>
        </section>

        {/* PDF DOWNLOAD */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-primary">
            Dokumenty do pobrania
          </h2>

          <p className="mb-6">
            Udostępniamy oryginalny dokument Standardów Ochrony Małoletnich
            NZPOZ SUPERMED s.c. wraz z wersją skróconą przeznaczoną dla dzieci i
            młodzieży.
          </p>

          <div className="rounded-2xl border border-[#D9E9EB] bg-white p-6 sm:p-8">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-primary">
                Standardy Ochrony Małoletnich — SUPERMED
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                Oficjalny dokument poradni · PDF · 8 stron
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={documentUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Download size={18} />
                Pobierz dokument PDF
              </a>

              <a
                href="/documents/standardy-ochrony-maloletnich.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C9E8E8] px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[#F1FAFA]"
              >
                <ExternalLink size={18} />
                Otwórz w przeglądarce
              </a>
            </div>
          </div>
        </section>

        {/* REPORTING */}
        <section className="rounded-2xl border border-[#D9E9EB] p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <Mail size={24} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Zgłaszanie niepokojących sytuacji
            </h2>
          </div>

          <p>
            Zgodnie z dokumentem poradni podejrzenia naruszenia standardów lub
            krzywdzenia małoletnich można zgłaszać do Piotra Ząbki.
          </p>

          <a
            href="mailto:supermed.zabek@wp.pl"
            className="mt-4 inline-flex items-center gap-2 break-all font-semibold text-accent hover:underline"
          >
            <Mail size={17} className="shrink-0" />
            supermed.zabek@wp.pl
          </a>
        </section>

        {/* HELPLINES */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <Phone size={24} className="shrink-0 text-accent" />

            <h2 className="text-xl font-bold text-primary">
              Gdzie szukać pomocy?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {helplines.map((helpline) => (
              <a
                key={helpline.number}
                href={helpline.href}
                className="rounded-xl border border-[#D9E9EB] bg-[#F8FCFC] p-5 transition-colors hover:border-accent/50 hover:bg-[#F1FAFA]"
              >
                <p className="text-sm text-text-muted">{helpline.label}</p>

                <p className="mt-2 text-lg font-bold text-primary">
                  {helpline.number}
                </p>
              </a>
            ))}
          </div>

          <p className="mt-5 text-sm">
            W przypadku bezpośredniego zagrożenia życia lub zdrowia należy
            zadzwonić pod numer alarmowy{" "}
            <a href="tel:112" className="font-bold text-accent hover:underline">
              112
            </a>
            .
          </p>
        </section>
      </div>
    </DocumentPageLayout>
  );
}

export default ChildProtectionPage;
