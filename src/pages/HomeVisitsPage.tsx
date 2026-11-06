import {
  Clock3,
  HeartPulse,
  House,
  Info,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

export default function HomeVisitsPage() {
  return (
    <PatientInfoLayout
      eyebrow="Opieka podstawowa"
      title="Wizyty domowe"
      description="Informacje dotyczące zgłaszania wizyt domowych dla pacjentów, których stan zdrowia może wymagać udzielenia świadczenia w miejscu zamieszkania."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#D9E9EB] bg-white p-8 shadow-sm">
          <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#EAF5F6] text-accent">
            <Clock3 size={28} />
          </div>
          <h2 className="text-2xl font-bold text-primary">
            Do której godziny zgłosić wizytę?
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-muted">
            Zgodnie z informacją publikowaną przez SUPERMED zgłoszenia wizyt
            domowych przyjmowane są codziennie do godziny:
          </p>
          <p className="mt-5 text-5xl font-bold text-accent">10:00</p>
          <p className="mt-4 text-sm text-text-muted">
            W dni pracy poradni. Termin i możliwość realizacji wizyty potwierdza
            personel przychodni.
          </p>
        </section>

        <section className="rounded-2xl border border-[#D9E9EB] bg-white p-8 shadow-sm">
          <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#EAF5F6] text-accent">
            <House size={28} />
          </div>
          <h2 className="text-2xl font-bold text-primary">
            Kiedy zgłosić potrzebę wizyty domowej?
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-muted">
            Wizyta domowa może być odpowiednią formą opieki, gdy stan zdrowia
            pacjenta uzasadnia udzielenie świadczenia w domu.
          </p>
          <p className="mt-4 text-sm leading-7 text-text-muted">
            O zasadności i sposobie realizacji wizyty decyduje personel medyczny
            na podstawie zgłoszenia oraz oceny sytuacji zdrowotnej.
          </p>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-[#D9E9EB] bg-white p-8">
        <h2 className="text-2xl font-bold text-primary">
          Jak zgłosić wizytę domową?
        </h2>

        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: PhoneCall,
              title: "Zadzwoń do poradni",
              text: "Skontaktuj się z rejestracją, najlepiej przed godziną 10:00.",
            },
            {
              icon: HeartPulse,
              title: "Opisz stan pacjenta",
              text: "Przekaż informacje o dolegliwościach oraz trudnościach w dotarciu do przychodni.",
            },
            {
              icon: House,
              title: "Ustal dalsze postępowanie",
              text: "Personel przekaże informacje dotyczące dalszej oceny zgłoszenia i organizacji opieki.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon size={25} className="mb-4 text-accent" />
              <h3 className="font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex gap-4 rounded-2xl border border-[#F2D5CF] bg-[#FFF7F5] p-6">
        <ShieldAlert size={25} className="shrink-0 text-[#B54737]" />
        <div>
          <h2 className="font-bold text-primary">
            W sytuacji zagrożenia życia
          </h2>
          <p className="mt-2 text-sm leading-7 text-text-muted">
            Wizyta domowa POZ nie zastępuje ratownictwa medycznego. W przypadku
            nagłego zagrożenia życia lub zdrowia dzwoń pod numer 112 lub 999.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 text-sm leading-7 text-text-muted">
        <Info size={19} className="mt-1 shrink-0 text-accent" />
        <p>
          Zgłoszenie wizyty nie oznacza automatycznego potwierdzenia jej
          realizacji.
        </p>
      </div>
    </PatientInfoLayout>
  );
}
