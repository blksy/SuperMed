import {
  ArrowUpRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Droplets,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe,
  Info,
  MapPin,
} from "lucide-react";

import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

const laboratories = [
  {
    name: "ALAB Laboratoria",
    location: "Na terenie przychodni SUPERMED",
    hours: "07:30–11:00",
    website: "https://www.alablaboratoria.pl/",
    description: "Punkt pobrań działający bezpośrednio na terenie przychodni.",
  },
  {
    name: "Diagnostyka Sp. z o.o.",
    location: "W budynku przychodni SUPERMED",
    hours: "08:00–11:00",
    website: "https://diag.pl/",
    description:
      "Punkt pobrań zlokalizowany w tym samym budynku co przychodnia.",
  },
];

const preparationTips = [
  {
    icon: Clock3,
    title: "Sprawdź wymagania badania",
    description:
      "Niektóre badania wymagają pobrania krwi rano lub pozostania na czczo. Zasady przygotowania zależą od rodzaju badania.",
  },
  {
    icon: Droplets,
    title: "Pamiętaj o nawodnieniu",
    description:
      "Przed standardowym pobraniem krwi zazwyczaj można pić wodę, chyba że otrzymasz inne zalecenia.",
  },
  {
    icon: FileText,
    title: "Przygotuj dokumenty",
    description:
      "Jeżeli badanie zostało zlecone przez lekarza, przygotuj wymagane skierowanie lub dane potrzebne do jego realizacji.",
  },
];

export default function LaboratoryTestsPage() {
  return (
    <PatientInfoLayout
      eyebrow="Diagnostyka laboratoryjna"
      title="Badania laboratoryjne"
      description="Na terenie przychodni SUPERMED oraz w jej budynku działają dwa punkty pobrań. Sprawdź godziny pracy, możliwości wykonania badań i sposoby odbioru wyników."
    >
      {/* INTRODUCTION */}
      <section className="mb-10 rounded-2xl border border-[#D9E9EB] bg-white p-7 sm:p-9">
        <div className="flex items-start gap-4">
          <div className="flex size-13 shrink-0 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
            <FlaskConical size={26} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary">
              Gdzie wykonać badania?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-text-muted">
              Pacjenci SUPERMED mają możliwość skorzystania z punktów pobrań
              ALAB Laboratoria oraz Diagnostyka, znajdujących się na terenie
              przychodni i w jej budynku.
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-8 text-text-muted">
              Badania laboratoryjne można również wykonać w innych punktach
              pobrań obu wymienionych laboratoriów, zgodnie z zasadami
              realizacji danego badania lub skierowania.
            </p>
          </div>
        </div>
      </section>

      {/* LABORATORY CARDS */}
      <div className="grid gap-6 lg:grid-cols-2">
        {laboratories.map((laboratory) => (
          <article
            key={laboratory.name}
            className="overflow-hidden rounded-2xl border border-[#D9E9EB] bg-white shadow-sm"
          >
            <div className="border-b border-[#E4EFF0] bg-[#EAF5F6] p-7">
              <Building2 size={29} className="text-accent" />

              <h2 className="mt-4 text-2xl font-bold text-primary">
                {laboratory.name}
              </h2>

              <p className="mt-2 text-sm leading-7 text-text-muted">
                {laboratory.description}
              </p>
            </div>

            <div className="space-y-6 p-7">
              <div className="flex items-start gap-3">
                <MapPin size={22} className="mt-0.5 shrink-0 text-accent" />

                <div>
                  <h3 className="font-bold text-primary">Lokalizacja</h3>
                  <p className="mt-1 text-sm leading-7 text-text-muted">
                    {laboratory.location}
                  </p>
                  <p className="text-sm text-text-muted">
                    os. Bolesława Chrobrego 118, Poznań
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 size={22} className="mt-0.5 shrink-0 text-accent" />

                <div>
                  <h3 className="font-bold text-primary">Godziny pobrań</h3>
                  <p className="mt-1 text-2xl font-bold text-accent">
                    {laboratory.hours}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Dni funkcjonowania punktu potwierdź bezpośrednio w
                    laboratorium.
                  </p>
                </div>
              </div>

              <a
                href={laboratory.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D9E9EB] px-5 py-3 font-semibold text-primary transition-colors hover:bg-[#EAF5F6]"
              >
                <Globe size={18} />
                Strona laboratorium
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* RESULTS */}
      <section className="mt-10 overflow-hidden rounded-2xl border border-[#D9E9EB] bg-white">
        <div className="border-b border-[#E4EFF0] bg-[#EAF5F6] p-7 sm:p-9">
          <div className="flex items-center gap-3">
            <CalendarClock size={27} className="text-accent" />

            <h2 className="text-2xl font-bold text-primary">
              Odbiór wyników badań
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7 text-text-muted">
            Wyniki badań są dostępne w rejestracji przychodni następnego dnia po
            godzinie 12:00. Można je również sprawdzić przez internet na
            stronach laboratoriów.
          </p>
        </div>

        <div className="grid gap-6 p-7 md:grid-cols-2 sm:p-9">
          <div>
            <CheckCircle2 size={26} className="text-accent" />
            <h3 className="mt-4 text-lg font-bold text-primary">
              Odbiór w rejestracji
            </h3>
            <p className="mt-2 text-sm leading-7 text-text-muted">
              Wyniki dostępne następnego dnia po godzinie <strong>12:00</strong>
              .
            </p>
          </div>

          <div>
            <Globe size={26} className="text-accent" />
            <h3 className="mt-4 text-lg font-bold text-primary">
              Wyniki online
            </h3>
            <p className="mt-2 text-sm leading-7 text-text-muted">
              Skorzystaj z serwisu internetowego laboratorium, w którym wykonano
              badanie.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.alablaboratoria.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
              >
                ALAB <ExternalLink size={15} />
              </a>

              <a
                href="https://diag.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
              >
                Diagnostyka <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary">
          Jak przygotować się do badań?
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted">
          Odpowiednie przygotowanie może mieć znaczenie dla wiarygodności
          wyników. Przed badaniem zapoznaj się z zaleceniami lekarza lub
          laboratorium.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {preparationTips.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#D9E9EB] bg-white p-7"
            >
              <Icon size={26} className="text-accent" />

              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-6">
        <Info size={22} className="mt-0.5 shrink-0 text-accent" />

        <p className="text-sm leading-7 text-primary">
          Czas udostępnienia wyników może zależeć od rodzaju badania. Niektóre
          analizy wymagają dłuższego opracowania. Szczegółowe informacje można
          uzyskać w laboratorium.
        </p>
      </div>
    </PatientInfoLayout>
  );
}
