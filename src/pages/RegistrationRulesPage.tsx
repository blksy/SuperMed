import {
  CalendarCheck,
  Clock3,
  ClipboardList,
  Info,
  Phone,
  UserRound,
} from "lucide-react";
import PatientInfoLayout from "../components/layouts/PatientInfoLayout";

const steps = [
  {
    icon: Phone,
    title: "Skontaktuj się z rejestracją",
    text: "Wizytę możesz umówić osobiście w przychodni lub telefonicznie. Rejestracja rozpoczyna się od godziny 08:00.",
  },
  {
    icon: UserRound,
    title: "Przygotuj dane pacjenta",
    text: "Podczas rejestracji przygotuj dane umożliwiające identyfikację pacjenta. W razie potrzeby personel poprosi o dodatkowe informacje.",
  },
  {
    icon: CalendarCheck,
    title: "Ustal termin wizyty",
    text: "Pracownik rejestracji przekaże informacje o dostępnych terminach oraz sposobie przygotowania się do wizyty, jeśli jest to wymagane.",
  },
];

export default function RegistrationRulesPage() {
  return (
    <PatientInfoLayout
      eyebrow="Dla pacjenta"
      title="Zasady rejestracji"
      description="Dowiedz się, jak umówić wizytę w poradni SUPERMED oraz jak przygotować się do kontaktu z rejestracją."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <article
            key={title}
            className="rounded-2xl border border-[#D9E9EB] bg-white p-7 shadow-sm"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#EAF5F6] text-accent">
                <Icon size={23} />
              </div>
              <span className="text-3xl font-bold text-[#D3E7EA]">
                0{index + 1}
              </span>
            </div>

            <h2 className="text-lg font-bold text-primary">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-text-muted">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#D9E9EB] bg-white p-7">
          <div className="mb-4 flex items-center gap-3 text-accent">
            <Clock3 size={24} />
            <h2 className="text-xl font-bold text-primary">
              Godziny rejestracji
            </h2>
          </div>
          <p className="text-sm leading-7 text-text-muted">
            Rejestracja osobista i telefoniczna rozpoczyna się od godziny{" "}
            <strong>08:00</strong>.
          </p>
          <a
            href="tel:+48618226600"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
          >
            <Phone size={17} />
            61 822 66 00
          </a>
        </section>

        <section className="rounded-2xl border border-[#D9E9EB] bg-white p-7">
          <div className="mb-4 flex items-center gap-3 text-accent">
            <ClipboardList size={24} />
            <h2 className="text-xl font-bold text-primary">Przed wizytą</h2>
          </div>
          <p className="text-sm leading-7 text-text-muted">
            Przygotuj dokument tożsamości, listę przyjmowanych leków oraz
            posiadaną dokumentację medyczną, jeśli może być przydatna podczas
            konsultacji.
          </p>
        </section>
      </div>

      <div className="mt-8 flex gap-3 rounded-2xl border border-[#D9E9EB] bg-[#EAF5F6] p-6">
        <Info className="shrink-0 text-accent" size={22} />
        <p className="text-sm leading-7 text-primary">
          W przypadku nagłego zagrożenia życia lub zdrowia nie czekaj na termin
          wizyty w poradni. Zadzwoń pod numer alarmowy <strong>112</strong>.
        </p>
      </div>
    </PatientInfoLayout>
  );
}
