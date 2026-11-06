import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  HeartHandshake,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTubeDiagonal,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

const features = [
  {
    icon: Stethoscope,
    title: "Podstawowa opieka zdrowotna",
    text: "Konsultacje lekarskie i opieka nad pacjentami w ramach podstawowej opieki zdrowotnej.",
  },
  {
    icon: Syringe,
    title: "Profilaktyka i szczepienia",
    text: "Informacje o szczepieniach ochronnych dzieci i młodzieży oraz programie szczepień HPV.",
  },
  {
    icon: TestTubeDiagonal,
    title: "Diagnostyka",
    text: "Dostęp do informacji o badaniach laboratoryjnych, punktach pobrań oraz badaniach USG.",
  },
  {
    icon: ClipboardList,
    title: "Informacje dla pacjentów",
    text: "Zasady rejestracji, deklaracje wyboru lekarza POZ, harmonogramy oraz aktualności przychodni.",
  },
];

const links = [
  {
    icon: CalendarDays,
    title: "Harmonogram lekarzy",
    text: "Sprawdź godziny przyjęć i numery gabinetów.",
    to: "/lekarze-i-harmonogram",
  },
  {
    icon: ShieldCheck,
    title: "Szczepienia ochronne",
    text: "Dowiedz się więcej o profilaktyce i szczepieniach.",
    to: "/szczepienia",
  },
  {
    icon: TestTubeDiagonal,
    title: "Badania laboratoryjne",
    text: "Sprawdź punkty pobrań i godziny ich pracy.",
    to: "/badania/laboratoryjne",
  },
];

export default function AboutPage() {
  return (
    <PatientInfoLayout
      eyebrow="Poznaj naszą przychodnię"
      title="O przychodni SUPERMED"
      description="SUPERMED to poradnia lekarza pierwszego kontaktu zlokalizowana na osiedlu Bolesława Chrobrego w Poznaniu. Poznaj informacje o placówce i dostępnych świadczeniach."
    >
      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF5F6] px-4 py-2 text-sm font-semibold text-accent">
            <HeartPulse size={17} />
            Opieka blisko Ciebie
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary">
            Zdrowie pacjentów w centrum naszej uwagi
          </h2>

          <p className="mt-5 text-sm leading-8 text-text-muted">
            W SUPERMED pacjenci mogą korzystać z opieki lekarzy pierwszego
            kontaktu oraz uzyskać informacje dotyczące profilaktyki, szczepień,
            diagnostyki i organizacji wizyt.
          </p>

          <p className="mt-4 text-sm leading-8 text-text-muted">
            Nasza strona pomaga szybko znaleźć harmonogram przyjęć, zasady
            rejestracji, dokumenty oraz aktualne komunikaty dotyczące pracy
            poradni.
          </p>

          <Link
            to="/lekarze-i-harmonogram"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Poznaj harmonogram lekarzy
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#102F5B] p-7 text-white">
            <UsersRound size={30} className="text-[#8CE4DE]" />
            <h3 className="mt-8 text-xl font-bold">Opieka POZ</h3>
            <p className="mt-3 text-sm leading-7 text-[#C4D7E5]">
              Informacje o konsultacjach i lekarzach.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-[#D9E9EB] bg-white p-7">
            <HeartHandshake size={30} className="text-accent" />
            <h3 className="mt-8 text-xl font-bold text-primary">
              Dla pacjentów
            </h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">
              Przejrzyste zasady i przydatne dokumenty.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9E9EB] bg-white p-7">
            <ShieldCheck size={30} className="text-accent" />
            <h3 className="mt-8 text-xl font-bold text-primary">
              Profilaktyka
            </h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">
              Szczepienia i informacje zdrowotne.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#DFF3F2] p-7">
            <MapPin size={30} className="text-accent" />
            <h3 className="mt-8 text-xl font-bold text-primary">Poznań</h3>
            <p className="mt-3 text-sm leading-7 text-text-muted">
              os. Bolesława Chrobrego 118
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary">
            W czym pomagamy pacjentom?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-muted">
            Najważniejsze obszary opieki i informacje dostępne na stronie
            przychodni.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm"
            >
              <div className="flex size-13 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
                <Icon size={25} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-primary">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-primary">
          Przydatne informacje
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {links.map(({ icon: Icon, title, text, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-[#D9E9EB] bg-white p-7 transition-all hover:border-accent hover:shadow-md"
            >
              <Icon size={27} className="text-accent" />

              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-muted">{text}</p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent group-hover:underline">
                Sprawdź
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PatientInfoLayout>
  );
}
