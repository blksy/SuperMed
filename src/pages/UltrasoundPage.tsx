import {
  ArrowUpRight,
  Building2,
  Clock3,
  FileText,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

const locations = [
  {
    name: "Szpital MSWiA w Poznaniu",
    department: "Zakład Diagnostyki Obrazowej",
    address: "ul. Dojazd 34, Poznań",
    details: "Parter, pomieszczenie 23A",
    phone: "61 846 47 50",
    phoneHref: "tel:+48618464750",
    hours: "Poniedziałek–piątek, 07:30–18:00",
    phoneHours: "11:00–14:00",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Szpital+MSWiA+Dojazd+34+Poznan",
  },
  {
    name: "POSUM",
    department: "Poznański Ośrodek Specjalistycznych Usług Medycznych",
    address: "al. Solidarności 36, Poznań",
    details: "Rejestracja osobista",
    phone: "61 647 77 35",
    phoneHref: "tel:+48616477735",
    hours: "Poniedziałek–piątek, 08:00–17:30",
    phoneHours: null,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=POSUM+Solidarnosci+36+Poznan",
  },
];

export default function UltrasoundPage() {
  return (
    <PatientInfoLayout
      eyebrow="Diagnostyka obrazowa"
      title="Badania USG"
      description="Sprawdź miejsca wskazane przez SUPERMED, w których można uzyskać informacje dotyczące rejestracji na badania ultrasonograficzne."
    >
      <section className="mb-10 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: Stethoscope,
            title: "Badanie ultrasonograficzne",
            text: "USG wykorzystuje fale ultradźwiękowe do obrazowania wybranych narządów i tkanek.",
          },
          {
            icon: FileText,
            title: "Skierowanie",
            text: "Przed rejestracją sprawdź, czy dane badanie wymaga skierowania i jakie dokumenty należy przygotować.",
          },
          {
            icon: Clock3,
            title: "Termin badania",
            text: "Dostępność terminów oraz zasady przygotowania potwierdź bezpośrednio w wybranej placówce.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-[#D9E9EB] bg-white p-7"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
              <Icon size={24} />
            </div>
            <h2 className="text-lg font-bold text-primary">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-text-muted">{text}</p>
          </article>
        ))}
      </section>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">
          Gdzie można zarejestrować się na USG?
        </h2>
        <p className="mt-3 text-sm leading-7 text-text-muted">
          Poniżej przedstawiamy placówki wymienione na dotychczasowej stronie
          SUPERMED.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {locations.map((location) => (
          <article
            key={location.name}
            className="overflow-hidden rounded-2xl border border-[#D9E9EB] bg-white shadow-sm"
          >
            <div className="border-b border-[#E4EFF0] bg-[#EAF5F6] p-7">
              <Building2 size={28} className="text-accent" />
              <h3 className="mt-4 text-xl font-bold text-primary">
                {location.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                {location.department}
              </p>
            </div>

            <div className="space-y-6 p-7">
              <div className="flex gap-3">
                <MapPin size={21} className="shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-primary">
                    {location.address}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {location.details}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3 size={21} className="shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-primary">
                    Rejestracja osobista
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {location.hours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={21} className="shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-primary">
                    Rejestracja telefoniczna
                  </p>
                  <a
                    href={location.phoneHref}
                    className="mt-1 block font-bold text-accent hover:underline"
                  >
                    {location.phone}
                  </a>
                  {location.phoneHours && (
                    <p className="mt-1 text-sm text-text-muted">
                      Godziny: {location.phoneHours}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D9E9EB] px-5 py-3 font-semibold text-primary transition-colors hover:bg-[#EAF5F6]"
              >
                <MapPin size={18} />
                Pokaż na mapie
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </PatientInfoLayout>
  );
}
