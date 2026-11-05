import DocumentPageLayout from "../components/layouts/DocumentPageLayout";
import grantLogos from "../assets/images/grant.jpg";

const equipment = [
  "Aparat do szybkiej diagnostyki, w tym testów CRP",
  "Aparat EKG",
  "Przenośny aparat USG",
  "Wszechstronny aparat USG z funkcjami Doppler, kardio, naczyniowymi oraz badania jamy brzusznej",
  "Przenośna elektroniczna waga dla niemowląt",
  "Holter ciśnieniowy",
  "Kozetki lekarskie",
  "Lampy UV bakterio- i wirusobójcze",
  "Lodówka z monitoringiem temperatury",
  "Spirometr",
  "Stoły do badania niemowląt",
  "Waga medyczna dla niemowląt",
  "Waga medyczna ze wzrostomierzem",
  "Sprzęt serwerowo-sieciowy i komputerowy",
];

const goals = [
  "Zwiększenie dostępności świadczeń POZ na obszarach słabiej rozwiniętych gospodarczo, terenach wiejskich oraz obszarach zagrożonych ograniczeniem dostępu do podstawowej opieki zdrowotnej.",
  "Wsparcie infrastruktury niezbędnej do prowadzenia działalności leczniczej, poprawy funkcjonalności pomieszczeń oraz rozwoju profilaktyki, diagnostyki, leczenia i opieki koordynowanej.",
  "Zwiększenie dostępności i efektywności systemu opieki zdrowotnej poprzez niwelowanie różnic regionalnych.",
];

const outcomes = [
  "Wzrost dostępności do podstawowych i specjalistycznych usług zdrowotnych.",
  "Lepsza ochrona zdrowia i dobrostanu obywateli przed zagrożeniami związanymi ze środowiskiem.",
  "Otwarcie nowych placówek POZ, zwłaszcza na terenach o mniejszej gęstości zaludnienia.",
  "Poprawa jakości świadczonych usług zdrowotnych i wzmocnienie odporności systemu medycznego.",
];

function GrantProjectPage() {
  return (
    <DocumentPageLayout
      title="Projekt grantowy dla SUPERMED"
      description="Wsparcie podstawowej opieki zdrowotnej (POZ) w ramach Funduszy Europejskich."
    >
      <div className="space-y-10">
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
          <img
            src={grantLogos}
            alt="Fundusze Europejskie, Rzeczpospolita Polska, Unia Europejska i Narodowy Fundusz Zdrowia"
            className="h-auto w-full object-contain"
          />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            Wsparcie podstawowej opieki zdrowotnej
          </h2>

          <p>
            <strong>SUPERMED s.c.</strong> realizuje projekt grantowy pn.
            „Wsparcie podstawowej opieki zdrowotnej (POZ)” na podstawie umowy
            zawartej z Narodowym Funduszem Zdrowia.
          </p>

          <p>
            Projekt dofinansowany jest ze środków Europejskiego Funduszu Rozwoju
            Regionalnego w ramach Programu Fundusze Europejskie na
            Infrastrukturę, Klimat, Środowisko 2021–2027.
          </p>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-bold text-primary">
            Finansowanie projektu
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#F1FAFA] p-5">
              <p className="text-sm text-text-muted">
                Grant przyznany SUPERMED s.c.
              </p>
              <p className="mt-2 text-2xl font-bold text-accent">
                443 091,20 zł
              </p>
            </div>

            <div className="rounded-xl bg-[#F1FAFA] p-5">
              <p className="text-sm text-text-muted">
                Całkowita wartość projektu
              </p>
              <p className="mt-2 text-2xl font-bold text-primary">
                1 250 000 000,00 zł
              </p>
            </div>
          </div>

          <p className="mt-4">
            Wysokość wkładu Funduszy Europejskich w całym projekcie wynosi
            <strong> 996 375 000,00 zł</strong>.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-primary">
            Planowane zakupy
          </h2>

          <p className="mb-4">
            W ramach otrzymanego grantu SUPERMED s.c. planuje zakup sprzętu i
            wyposażenia medycznego oraz infrastruktury informatycznej.
          </p>

          <ul className="grid list-disc gap-x-8 gap-y-2 pl-5 sm:grid-cols-2">
            {equipment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-primary">
            Główne cele projektu
          </h2>

          <ul className="list-disc space-y-4 pl-5">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-primary">
            Oczekiwane efekty projektu
          </h2>

          <ul className="list-disc space-y-3 pl-5">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl bg-[#F1FAFA] p-6">
          <h2 className="mb-3 text-xl font-bold text-primary">
            Dla kogo przeznaczony jest projekt?
          </h2>

          <p>
            Projekt skierowany jest do podmiotów wykonujących działalność
            leczniczą, posiadających umowę z NFZ o udzielanie świadczeń w ramach
            POZ. Z efektów realizacji przedsięwzięcia będą mogli korzystać
            pacjenci placówki.
          </p>
        </section>

        <p className="text-sm font-semibold text-accent">
          #FunduszeEuropejskie #FunduszeUE #WsparciePOZ
        </p>
      </div>
    </DocumentPageLayout>
  );
}

export default GrantProjectPage;
