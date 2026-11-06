import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  House,
  Info,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

const address = "os. Bolesława Chrobrego 118, 60-681 Poznań";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(address);

const mapsEmbedUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(address) +
  "&output=embed";

const emails = [
  {
    icon: Mail,
    title: "Rejestracja",
    email: "rejestracja@supermed.poznan.pl",
    description:
      "Kontakt z rejestracją przychodni i pytania organizacyjne dotyczące wizyt.",
    note: null,
  },
  {
    icon: ShieldCheck,
    title: "Ochrona danych osobowych",
    email: "iodo@supermed.poznan.pl",
    description: "Kontakt w sprawach związanych z ochroną danych osobowych.",
    note: null,
  },
  {
    icon: FileText,
    title: "Prośby o recepty",
    email: "recepta@supermed.poznan.pl",
    description:
      "Ten adres służy wyłącznie do przesyłania próśb o wystawienie recepty.",
    note: "Wysłanie prośby nie oznacza automatycznego wystawienia recepty. Decyzję podejmuje lekarz.",
  },
];

const usefulLinks = [
  {
    icon: CalendarDays,
    title: "Harmonogram lekarzy",
    description: "Sprawdź godziny przyjęć i numery gabinetów.",
    to: "/lekarze-i-harmonogram",
  },
  {
    icon: House,
    title: "Wizyty domowe",
    description: "Dowiedz się, jak zgłosić wizytę domową.",
    to: "/dla-pacjenta/wizyty-domowe",
  },
  {
    icon: Info,
    title: "Zasady rejestracji",
    description: "Poznaj zasady rejestracji w przychodni.",
    to: "/dla-pacjenta/zasady-rejestracji",
  },
];

export default function ContactPage() {
  return (
    <PatientInfoLayout
      eyebrow="Kontakt i lokalizacja"
      title="Skontaktuj się z SUPERMED"
      description="Znajdź naszą przychodnię w Poznaniu, skontaktuj się z rejestracją i sprawdź najważniejsze informacje przed wizytą."
    >
      {/* MAIN CONTACT CARDS */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* ADDRESS */}
        <article className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm">
          <div className="flex size-13 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
            <MapPin size={25} />
          </div>

          <h2 className="mt-6 text-xl font-bold text-primary">
            Adres przychodni
          </h2>

          <p className="mt-3 text-sm leading-7 text-text-muted">
            SUPERMED s.c.
            <br />
            Poradnia Lekarza Pierwszego Kontaktu NZOZ
            <br />
            {address}
          </p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
          >
            Wyznacz trasę
            <ArrowUpRight size={18} />
          </a>
        </article>

        {/* PHONE */}
        <article className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm">
          <div className="flex size-13 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
            <Phone size={25} />
          </div>

          <h2 className="mt-6 text-xl font-bold text-primary">
            Kontakt telefoniczny
          </h2>

          <a
            href="tel:+48618226600"
            className="mt-3 block text-2xl font-bold text-accent hover:underline"
          >
            61 822 66 00
          </a>

          <p className="mt-3 text-sm leading-7 text-text-muted">
            Zadzwoń, aby uzyskać informacje dotyczące rejestracji, terminów
            wizyt i organizacji pracy przychodni.
          </p>
        </article>

        {/* REGISTRATION */}
        <article className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm">
          <div className="flex size-13 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
            <Clock3 size={25} />
          </div>

          <h2 className="mt-6 text-xl font-bold text-primary">
            Rejestracja pacjentów
          </h2>

          <p className="mt-3 text-sm leading-7 text-text-muted">
            Rejestracja osobista i telefoniczna rozpoczyna się od:
          </p>

          <p className="mt-3 text-3xl font-bold text-accent">08:00</p>

          <p className="mt-3 text-sm leading-7 text-text-muted">
            Informacje dotyczące organizacji przyjęć uzyskasz bezpośrednio w
            rejestracji.
          </p>
        </article>
      </section>

      {/* EMAIL CONTACT */}
      <section className="mt-14">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Kontakt e-mail
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-text-muted">
            Wybierz odpowiedni adres e-mail w zależności od rodzaju sprawy, z
            którą kontaktujesz się z przychodnią.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {emails.map(({ icon: Icon, title, email, description, note }) => (
            <article
              key={email}
              className="flex flex-col rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm"
            >
              <div className="flex size-13 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
                <Icon size={25} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-primary">{title}</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-text-muted">
                {description}
              </p>

              <a
                href={`mailto:${email}`}
                className="mt-6 inline-flex items-center gap-2 break-all font-semibold text-accent hover:underline"
              >
                {email}
                <ArrowUpRight size={17} className="shrink-0" />
              </a>

              {note && (
                <div className="mt-5 rounded-xl bg-[#EAF5F6] p-4">
                  <p className="text-xs leading-6 text-primary">{note}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-5">
          <Info size={21} className="mt-0.5 shrink-0 text-accent" />

          <p className="text-sm leading-7 text-primary">
            Ze względu na poufność informacji medycznych nie przesyłaj
            szczegółowych danych o stanie zdrowia ani dokumentacji medycznej
            zwykłą wiadomością e-mail, chyba że przychodnia wskaże odpowiedni
            sposób bezpiecznego przekazania takich informacji.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="mt-14 overflow-hidden rounded-2xl border border-[#D9E9EB] bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Navigation size={23} />
              <span className="text-sm font-semibold">Lokalizacja</span>
            </div>

            <h2 className="text-2xl font-bold text-primary">
              Jak do nas dojechać?
            </h2>

            <p className="mt-3 text-sm leading-7 text-text-muted">
              os. Bolesława Chrobrego 118
              <br />
              60-681 Poznań
            </p>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <Navigation size={18} />
            Otwórz Google Maps
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="h-85 w-full bg-[#EAF5F6] sm:h-110">
          <iframe
            title="Mapa lokalizacji przychodni SUPERMED w Poznaniu"
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </section>

      {/* USEFUL LINKS */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-primary">
          Przydatne przed wizytą
        </h2>

        <p className="mt-3 text-sm leading-7 text-text-muted">
          Sprawdź najważniejsze informacje przed wizytą w przychodni.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {usefulLinks.map(({ icon: Icon, title, description, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-[#D9E9EB] bg-white p-7 transition-all hover:border-accent hover:shadow-md"
            >
              <Icon size={26} className="text-accent" />

              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">
                {description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent group-hover:underline">
                Sprawdź
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* EMERGENCY NOTICE */}
      <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-6">
        <Info size={22} className="mt-0.5 shrink-0 text-accent" />

        <p className="text-sm leading-7 text-primary">
          W przypadku nagłego zagrożenia życia lub zdrowia zadzwoń pod numer
          alarmowy <strong>112</strong>
          lub <strong>999</strong>. Kontakt z rejestracją nie zastępuje pomocy
          ratunkowej.
        </p>
      </div>
    </PatientInfoLayout>
  );
}
