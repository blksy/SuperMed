import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Info,
  MapPin,
  Phone,
  Search,
  Syringe,
  X,
} from "lucide-react";

import { doctors } from "../data/doctors";
import { weekdays } from "../types/doctor";
import type { ScheduleEntry, Weekday } from "../types/doctor";

type DayFilter = Weekday | "all";

function ScheduleCell({ entry }: { entry: ScheduleEntry }) {
  return (
    <div className="space-y-1.5">
      {entry.hours ? (
        <span className="font-semibold text-primary">{entry.hours}</span>
      ) : (
        <span className="text-xs leading-5 text-text-muted">
          {entry.note ?? "Brak danych"}
        </span>
      )}

      {entry.vaccination && (
        <div className="flex items-center gap-1.5 text-xs font-medium text-accent">
          <Syringe size={13} className="shrink-0" />
          <span>{entry.vaccination}</span>
        </div>
      )}
    </div>
  );
}

function DoctorsSchedulePage() {
  const [query, setQuery] = useState("");
  const [selectedDay, setSelectedDay] = useState<DayFilter>("all");
  const [vaccinationsOnly, setVaccinationsOnly] = useState(false);

  const filteredDoctors = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pl-PL");

    return doctors.filter((doctor) => {
      const matchesQuery =
        doctor.name.toLocaleLowerCase("pl-PL").includes(normalizedQuery) ||
        doctor.specialization
          .toLocaleLowerCase("pl-PL")
          .includes(normalizedQuery) ||
        (doctor.room ?? "").includes(normalizedQuery);

      const entries =
        selectedDay === "all"
          ? weekdays.map((day) => doctor.schedule[day.id])
          : [doctor.schedule[selectedDay]];

      const matchesVaccinations =
        !vaccinationsOnly ||
        entries.some((entry) => Boolean(entry.vaccination));

      return matchesQuery && matchesVaccinations;
    });
  }, [query, selectedDay, vaccinationsOnly]);

  const visibleDays =
    selectedDay === "all"
      ? weekdays
      : weekdays.filter((day) => day.id === selectedDay);

  const resetFilters = () => {
    setQuery("");
    setSelectedDay("all");
    setVaccinationsOnly(false);
  };

  return (
    <div className="min-h-screen bg-[#F5FAFC]">
      {/* HEADER */}
      <section className="bg-primary py-14 text-white sm:py-20">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-[#8CE4DE]">
            <CalendarDays size={15} />
            Informacje dla pacjentów
          </div>

          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Harmonogram przyjęć lekarzy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#C4D7E5]">
            Sprawdź godziny pracy lekarzy, numery gabinetów oraz godziny
            szczepień w poradni SUPERMED.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-360 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* INFORMATION */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="flex gap-4 rounded-2xl border border-[#D9E9EB] bg-white p-5">
            <Clock3 className="shrink-0 text-accent" size={23} />
            <div>
              <h2 className="font-bold text-primary">Rejestracja</h2>
              <p className="mt-1 text-sm leading-6 text-text-muted">
                Osobista i telefoniczna od godz. 08:00
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl border border-[#D9E9EB] bg-white p-5">
            <MapPin className="shrink-0 text-accent" size={23} />
            <div>
              <h2 className="font-bold text-primary">Wizyty domowe</h2>
              <p className="mt-1 text-sm leading-6 text-text-muted">
                Zgłoszenia codziennie do godz. 10:00
              </p>
            </div>
          </div>

          <a
            href="tel:+48618226600"
            className="flex gap-4 rounded-2xl border border-[#D9E9EB] bg-white p-5 transition-colors hover:border-accent"
          >
            <Phone className="shrink-0 text-accent" size={23} />
            <div>
              <h2 className="font-bold text-primary">Telefon do rejestracji</h2>
              <p className="mt-1 text-sm font-semibold text-accent">
                61 822 66 00
              </p>
            </div>
          </a>
        </div>

        {/* FILTERS */}
        <section
          aria-label="Filtrowanie harmonogramu"
          className="mb-8 rounded-2xl border border-[#D9E9EB] bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-primary">Znajdź lekarza</h2>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                <X size={15} />
                Wyczyść filtry
              </button>
            </div>

            <div className="relative">
              <Search
                size={20}
                className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-text-muted"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Imię, nazwisko, specjalizacja lub gabinet..."
                aria-label="Wyszukaj lekarza"
                className="w-full rounded-xl border border-[#D9E9EB] bg-[#F8FCFC] py-3.5 pr-4 pl-12 text-sm text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSelectedDay("all")}
                aria-pressed={selectedDay === "all"}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedDay === "all"
                    ? "bg-accent text-white"
                    : "bg-[#F1F6F8] text-primary hover:bg-[#E1F3F3]"
                }`}
              >
                Cały tydzień
              </button>

              {weekdays.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setSelectedDay(day.id)}
                  aria-pressed={selectedDay === day.id}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedDay === day.id
                      ? "bg-accent text-white"
                      : "bg-[#F1F6F8] text-primary hover:bg-[#E1F3F3]"
                  }`}
                >
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">{day.short}</span>
                </button>
              ))}
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-primary">
              <input
                type="checkbox"
                checked={vaccinationsOnly}
                onChange={(event) => setVaccinationsOnly(event.target.checked)}
                className="size-4 accent-[#008C91]"
              />
              Pokaż tylko lekarzy z godzinami szczepień
            </label>
          </div>
        </section>

        {/* RESULTS HEADER */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Harmonogram gabinetów
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              Znaleziono lekarzy: {filteredDoctors.length}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-accent">
            <Syringe size={16} />
            Godziny szczepień
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="rounded-2xl border border-[#D9E9EB] bg-white px-6 py-14 text-center">
            <Search size={32} className="mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-bold text-primary">
              Nie znaleziono lekarzy
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              Zmień wyszukiwaną frazę lub wybrane filtry.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 font-semibold text-accent hover:underline"
            >
              Wyczyść filtry
            </button>
          </div>
        ) : (
          <>
            {/* DESKTOP TABLE */}
            <div className="hidden overflow-x-auto rounded-2xl border border-[#D9E9EB] bg-white shadow-sm lg:block">
              <table className="w-full min-w-230 border-collapse text-left">
                <thead className="bg-[#EAF5F6]">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-5 text-sm font-bold text-primary"
                    >
                      Lekarz / gabinet
                    </th>

                    {visibleDays.map((day) => (
                      <th
                        key={day.id}
                        scope="col"
                        className="px-4 py-5 text-sm font-bold text-primary"
                      >
                        {day.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E4EFF0]">
                  {filteredDoctors.map((doctor) => (
                    <tr
                      key={doctor.id}
                      className="transition-colors hover:bg-[#F8FCFC]"
                    >
                      <th scope="row" className="min-w-55 px-5 py-5 align-top">
                        <p className="font-bold text-primary">{doctor.name}</p>
                        <p className="mt-1 text-xs font-normal leading-5 text-text-muted">
                          {doctor.specialization}
                        </p>
                        {doctor.room && (
                          <span className="mt-2 inline-block rounded-full bg-[#EAF5F6] px-3 py-1 text-xs font-semibold text-accent">
                            Gabinet {doctor.room}
                          </span>
                        )}
                      </th>

                      {visibleDays.map((day) => (
                        <td
                          key={day.id}
                          className="px-4 py-5 align-top text-sm"
                        >
                          <ScheduleCell entry={doctor.schedule[day.id]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MOBILE / TABLET CARDS */}
            <div className="grid gap-5 md:grid-cols-2 lg:hidden">
              {filteredDoctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="overflow-hidden rounded-2xl border border-[#D9E9EB] bg-white shadow-sm"
                >
                  <div className="border-b border-[#E4EFF0] bg-[#F1FAFA] p-5">
                    <h3 className="text-lg font-bold text-primary">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {doctor.specialization}
                    </p>
                    {doctor.room && (
                      <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">
                        Gabinet {doctor.room}
                      </span>
                    )}
                  </div>

                  <div className="divide-y divide-[#E4EFF0] px-5">
                    {visibleDays.map((day) => (
                      <div
                        key={day.id}
                        className="flex items-start justify-between gap-4 py-4"
                      >
                        <span className="text-sm font-semibold text-primary">
                          {day.label}
                        </span>
                        <div className="text-right text-sm">
                          <ScheduleCell entry={doctor.schedule[day.id]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* DISCLAIMER */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#D9E9EB] bg-white p-6">
          <Info size={22} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-sm leading-7 text-text-muted">
            Harmonogram opracowano na podstawie informacji opublikowanych na
            dotychczasowej stronie poradni. Godziny mogą ulegać zmianom, a
            nieobecności lekarzy nie są automatycznie uwzględniane. Przed wizytą
            warto potwierdzić aktualną dostępność w rejestracji.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorsSchedulePage;
