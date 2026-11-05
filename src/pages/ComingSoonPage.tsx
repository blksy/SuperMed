import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

function ComingSoonPage() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[#F5FAFC] px-5 py-20">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-[#E1F3F3] text-accent">
          <Construction size={30} />
        </div>

        <h1 className="text-3xl font-bold text-primary sm:text-4xl">
          Przygotowujemy tę podstronę
        </h1>

        <p className="mt-5 text-base leading-8 text-text-muted">
          Ta sekcja serwisu SuperMED jest obecnie w przygotowaniu.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <ArrowLeft size={17} />
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}

export default ComingSoonPage;
