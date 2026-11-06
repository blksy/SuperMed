import DocumentPageLayout from "../components/layouts/DocumentPageLayout";

function TermsPage() {
  return (
    <DocumentPageLayout
      title="Regulamin serwisu"
      description="Zasady korzystania z witryny internetowej poradni SUPERMED."
    >
      <div className="space-y-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          Projekt regulaminu — wymaga zatwierdzenia przez operatora serwisu
          przed publikacją.
        </div>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 1. Postanowienia ogólne
          </h2>
          <p>
            Niniejszy regulamin określa podstawowe zasady korzystania z serwisu
            internetowego poradni SUPERMED, dostępnego pod adresem
            supermed.poznan.pl.
          </p>
          <p className="mt-3">
            Serwis służy do udostępniania informacji o działalności poradni,
            świadczeniach medycznych, harmonogramach przyjęć i komunikatach dla
            pacjentów.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 2. Korzystanie z serwisu
          </h2>
          <p>
            Korzystanie z publicznie dostępnych treści serwisu nie wymaga
            zakładania konta. Użytkownik zobowiązany jest korzystać z witryny
            zgodnie z prawem i jej przeznaczeniem.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 3. Informacje medyczne
          </h2>
          <p>
            Informacje publikowane w serwisie mają charakter informacyjny i nie
            zastępują indywidualnej konsultacji medycznej.
          </p>
          <p className="mt-3">
            Harmonogramy oraz dostępność świadczeń mogą ulegać zmianom. Aktualne
            informacje organizacyjne można uzyskać w rejestracji poradni.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 4. Odnośniki zewnętrzne
          </h2>
          <p>
            Serwis może zawierać odnośniki do zewnętrznych witryn i systemów, w
            szczególności usług publicznych związanych z ochroną zdrowia.
            Korzystanie z nich odbywa się na zasadach określonych przez ich
            operatorów.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 5. Prawa do treści
          </h2>
          <p>
            Materiały zamieszczone w serwisie mogą podlegać ochronie prawnej.
            Korzystanie z nich powinno odbywać się zgodnie z obowiązującymi
            przepisami oraz prawami przysługującymi ich właścicielom.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">§ 6. Kontakt</h2>
          <p>
            W sprawach dotyczących funkcjonowania witryny można kontaktować się
            z poradnią SUPERMED, os. Bolesława Chrobrego 118, 60-681 Poznań.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-primary">
            § 7. Zmiany regulaminu
          </h2>
          <p>
            Regulamin może być aktualizowany w związku ze zmianami
            funkcjonalności serwisu lub obowiązujących przepisów. Aktualna
            wersja będzie udostępniana na niniejszej podstronie.
          </p>
        </section>
      </div>
    </DocumentPageLayout>
  );
}

export default TermsPage;
