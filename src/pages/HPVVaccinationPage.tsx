import {
  ArrowUpRight,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Syringe,
} from "lucide-react";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

export default function HPVVaccinationPage() {
  return (
    <PatientInfoLayout
      eyebrow="Profilaktyka zdrowotna"
      title="Szczepienia przeciw HPV"
      description="Szczepienia przeciw wirusowi brodawczaka ludzkiego (HPV) pomagają chronić przed zakażeniami związanymi z rozwojem wybranych nowotworów."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            value: "9–13 lat",
            title: "Program powszechny",
            text: "Dla dziewcząt i chłopców od 9. urodzin do dnia poprzedzającego 14. urodziny.",
          },
          {
            icon: Syringe,
            value: "2 dawki",
            title: "Schemat szczepienia",
            text: "Dwie dawki podawane w odstępie od 6 do 12 miesięcy.",
          },
          {
            icon: HeartPulse,
            value: "Bezpłatnie",
            title: "Profilaktyka HPV",
            text: "Szczepienia realizowane w ramach powszechnego programu są bezpłatne dla uprawnionych dzieci.",
          },
        ].map(({ icon: Icon, value, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm"
          >
            <Icon size={28} className="text-accent" />
            <p className="mt-6 text-3xl font-bold text-primary">{value}</p>
            <h2 className="mt-3 font-bold text-primary">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-text-muted">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-[#D9E9EB] bg-white p-8">
        <h2 className="text-2xl font-bold text-primary">
          Dlaczego warto zaszczepić dziecko?
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-8 text-text-muted">
          HPV to grupa wirusów, których niektóre typy mogą prowadzić do rozwoju
          zmian przednowotworowych i nowotworów, w tym raka szyjki macicy.
          Szczepienie jest działaniem profilaktycznym zalecanym zarówno
          dziewczętom, jak i chłopcom. Największą korzyść przynosi wykonanie
          szczepienia przed potencjalnym kontaktem z wirusem.
        </p>
      </section>

      <section className="mt-8 rounded-2xl border border-[#D9E9EB] bg-white p-8">
        <div className="mb-5 flex items-center gap-3">
          <CalendarDays size={25} className="text-accent" />
          <h2 className="text-2xl font-bold text-primary">
            Jak zapisać dziecko na szczepienie?
          </h2>
        </div>

        <p className="text-sm leading-8 text-text-muted">
          Podstawowym sposobem rejestracji jest kontakt z przychodnią POZ
          realizującą szczepienia. Możliwość zapisu przez IKP lub mojeIKP zależy
          od udostępnienia takiej funkcji przez wybrany punkt szczepień.
        </p>

        <p className="mt-4 text-sm leading-8 text-text-muted">
          Przed podaniem szczepionki przeprowadzana jest kwalifikacja medyczna.
          W przypadku pytań dotyczących wcześniejszych dawek lub przeciwwskazań
          skonsultuj się z personelem medycznym.
        </p>
      </section>

      <div className="mt-8 rounded-2xl bg-[#EAF5F6] p-7">
        <h2 className="text-xl font-bold text-primary">
          Więcej informacji o programie HPV
        </h2>
        <p className="mt-3 text-sm leading-7 text-text-muted">
          Sprawdź zasady programu, dostępne szczepionki oraz aktualne informacje
          Ministerstwa Zdrowia.
        </p>
        <a
          href="https://www.gov.pl/web/zdrowie/hpv"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
        >
          Ministerstwo Zdrowia — program HPV
          <ArrowUpRight size={18} />
        </a>
      </div>
    </PatientInfoLayout>
  );
}
