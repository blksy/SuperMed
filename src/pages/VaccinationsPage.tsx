import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Info,
  ShieldCheck,
  Syringe,
} from "lucide-react";
import { Link } from "react-router-dom";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

type Category = "all" | "mandatory" | "recommended";

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "mandatory", label: "Obowiązkowe" },
  { id: "recommended", label: "Zalecane" },
] as const;

const vaccineGroups = [
  {
    age: "Noworodki",
    type: "mandatory",
    vaccines: "Gruźlica (BCG), wirusowe zapalenie wątroby typu B",
    description: "Szczepienia rozpoczynające ochronę dziecka po urodzeniu.",
  },
  {
    age: "Niemowlęta",
    type: "mandatory",
    vaccines:
      "Błonica, tężec, krztusiec, polio, Hib, pneumokoki, rotawirusy, WZW B",
    description: "Kolejne dawki zgodnie z indywidualnym kalendarzem szczepień.",
  },
  {
    age: "Drugi rok życia",
    type: "mandatory",
    vaccines: "Odra, świnka, różyczka oraz kolejne dawki wybranych szczepionek",
    description: "Kontynuacja szczepień rozpoczętych w niemowlęctwie.",
  },
  {
    age: "Dzieci w wieku szkolnym",
    type: "mandatory",
    vaccines: "Dawki przypominające przeciw wybranym chorobom zakaźnym",
    description: "Terminy zależą od wieku i historii szczepień dziecka.",
  },
  {
    age: "Od 9. do 14. urodzin",
    type: "recommended",
    vaccines: "HPV",
    description: "Bezpłatny program powszechny dla dziewcząt i chłopców.",
  },
  {
    age: "Dzieci i młodzież",
    type: "recommended",
    vaccines: "Między innymi meningokoki, grypa, kleszczowe zapalenie mózgu",
    description:
      "Zakres i termin zależą od wieku, wskazań oraz historii szczepień.",
  },
] as const;

export default function VaccinationsPage() {
  const [category, setCategory] = useState<Category>("all");

  const filtered = vaccineGroups.filter(
    (group) => category === "all" || group.type === category,
  );

  return (
    <PatientInfoLayout
      eyebrow="Profilaktyka zdrowotna"
      title="Szczepienia ochronne"
      description="Poznaj najważniejsze informacje o szczepieniach obowiązkowych i zalecanych oraz sprawdź oficjalny kalendarz szczepień dzieci i młodzieży."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-[#D9E9EB] bg-white p-7">
          <ShieldCheck size={28} className="text-accent" />
          <h2 className="mt-5 text-xl font-bold text-primary">
            Szczepienia obowiązkowe
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            Są realizowane zgodnie z Programem Szczepień Ochronnych. Obejmują
            ochronę przed określonymi chorobami zakaźnymi w przewidzianych
            grupach wieku.
          </p>
        </article>

        <article className="rounded-2xl border border-[#D9E9EB] bg-white p-7">
          <Syringe size={28} className="text-accent" />
          <h2 className="mt-5 text-xl font-bold text-primary">
            Szczepienia zalecane
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            Stanowią dodatkową formę profilaktyki. Niektóre są finansowane ze
            środków publicznych dla określonych grup pacjentów, inne mogą
            wymagać zakupu szczepionki.
          </p>
        </article>
      </div>

      <section className="mt-10">
        <div className="mb-6 flex items-center gap-3">
          <CalendarDays size={27} className="text-accent" />
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Przegląd szczepień według wieku
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              Orientacyjny podział — bez szczegółowych terminów dawek.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              aria-pressed={category === item.id}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                category === item.id
                  ? "bg-accent text-white"
                  : "bg-white text-primary hover:bg-[#EAF5F6]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((group) => (
            <article
              key={group.age}
              className="rounded-2xl border border-[#D9E9EB] bg-white p-6"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-primary">{group.age}</h3>
                <span className="rounded-full bg-[#EAF5F6] px-3 py-1 text-xs font-semibold text-accent">
                  {group.type === "mandatory" ? "Obowiązkowe" : "Zalecane"}
                </span>
              </div>

              <p className="text-sm font-semibold leading-7 text-primary">
                {group.vaccines}
              </p>
              <p className="mt-3 text-sm leading-7 text-text-muted">
                {group.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-[#D9E9EB] bg-white p-7 sm:p-9">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={26} className="text-accent" />
          <h2 className="text-2xl font-bold text-primary">
            Oficjalny kalendarz szczepień 2026
          </h2>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-8 text-text-muted">
          Szczegółowe terminy podawania poszczególnych dawek należy sprawdzać w
          aktualnym Programie Szczepień Ochronnych. Indywidualny harmonogram
          dziecka może różnić się w zależności od wcześniejszych szczepień i
          zaleceń medycznych.
        </p>

        <a
          href="https://pacjent.gov.pl/kalendarz-szczepien-dzieci-i-mlodziezy-na-2026-rok"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <CalendarDays size={19} />
          Zobacz kalendarz 2026
          <ExternalLink size={16} />
        </a>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Link
          to="/szczepienia/hpv"
          className="group rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-7"
        >
          <h2 className="text-xl font-bold text-primary">
            Szczepienia przeciw HPV
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            Dowiedz się, kto może skorzystać z bezpłatnego programu szczepień.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent group-hover:underline">
            Sprawdź informacje <ArrowUpRight size={18} />
          </span>
        </Link>

        <a
          href="https://ptp.edu.pl/kalendarz-szczepien/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-[#D9E9EB] bg-white p-7"
        >
          <h2 className="text-xl font-bold text-primary">
            Polskie Towarzystwo Pediatryczne
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">
            Dodatkowe materiały edukacyjne dotyczące szczepień dzieci i
            młodzieży. Sprawdź rok publikacji przed korzystaniem z tabel.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent group-hover:underline">
            Odwiedź stronę PTP <ArrowUpRight size={18} />
          </span>
        </a>
      </div>

      <div className="mt-8 flex gap-3 rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-6">
        <Info size={22} className="shrink-0 text-accent" />
        <p className="text-sm leading-7 text-primary">
          Powyższy przegląd ma charakter informacyjny i nie zastępuje aktualnego
          Programu Szczepień Ochronnych ani indywidualnych zaleceń lekarza.
        </p>
      </div>
    </PatientInfoLayout>
  );
}
