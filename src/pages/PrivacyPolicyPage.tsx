import DocumentPageLayout from "../components/layouts/DocumentPageLayout";

function PrivacyPolicyPage() {
  return (
    <DocumentPageLayout
      title="Polityka prywatności"
      description="Informacje o przetwarzaniu danych osobowych podczas korzystania z serwisu SUPERMED."
    >
      <div className="space-y-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Projekt dokumentu. Przed publikacją wymagane jest uzupełnienie
          informacji o administratorze, hostingu, cookies i rzeczywistych
          operacjach przetwarzania danych.
        </div>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            1. Administrator danych
          </h2>
          <p>
            Administratorem danych osobowych przetwarzanych w związku z
            funkcjonowaniem serwisu jest [pełna nazwa i dane identyfikacyjne
            administratora].
          </p>
          <p className="mt-3">
            Adres kontaktowy w sprawach ochrony danych: [adres e-mail do
            kontaktu w sprawach RODO].
          </p>
          <p className="mt-3">
            Dane kontaktowe inspektora ochrony danych, jeżeli został wyznaczony:
            [do uzupełnienia].
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            2. Zakres przetwarzanych danych
          </h2>
          <p>
            Podczas korzystania z witryny mogą być przetwarzane dane techniczne,
            takie jak adres IP, informacje o przeglądarce, czas żądania i dane
            zapisywane w dziennikach serwera.
          </p>
          <p className="mt-3">
            Zakres danych przekazywanych za pośrednictwem ewentualnych
            formularzy kontaktowych zostanie określony po wdrożeniu tych
            funkcjonalności.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            3. Cele i podstawy prawne
          </h2>
          <p>
            Dane mogą być przetwarzane w celu zapewnienia działania i
            bezpieczeństwa witryny oraz obsługi korespondencji, jeżeli taka
            funkcjonalność jest dostępna.
          </p>
          <p className="mt-3">
            Konkretne podstawy prawne, w tym właściwe przesłanki z art. 6 RODO,
            należy przypisać do poszczególnych operacji przetwarzania po ich
            zweryfikowaniu.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            4. Odbiorcy danych
          </h2>
          <p>
            Dostęp do danych mogą uzyskiwać uprawnione podmioty świadczące
            usługi techniczne, hostingowe i informatyczne. Ich kategorie należy
            potwierdzić na podstawie faktycznie wykorzystywanych usług i
            zawartych umów.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            5. Okres przechowywania danych
          </h2>
          <p>
            Okres przechowywania danych zależy od celu i podstawy prawnej
            przetwarzania. Szczegółowe okresy retencji zostaną określone po
            analizie konfiguracji serwisu i obowiązków administratora.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            6. Prawa osób, których dane dotyczą
          </h2>
          <p>
            Osobom, których dane są przetwarzane, mogą przysługiwać prawa
            dostępu do danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania, przenoszenia oraz sprzeciwu — w zakresie wynikającym
            z RODO.
          </p>
          <p className="mt-3">
            Osoba, której dane dotyczą, ma również prawo wniesienia skargi do
            Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            7. Pliki cookies i narzędzia zewnętrzne
          </h2>
          <p>
            Informacje o wykorzystywanych cookies, analityce, osadzonych
            materiałach oraz ewentualnych narzędziach marketingowych zostaną
            uzupełnione po audycie technicznym serwisu.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            8. Aktualizacja polityki
          </h2>
          <p>
            Polityka prywatności będzie aktualizowana w razie zmian
            funkcjonalności witryny, sposobów przetwarzania danych lub wymagań
            prawnych.
          </p>
        </section>
      </div>
    </DocumentPageLayout>
  );
}

export default PrivacyPolicyPage;
