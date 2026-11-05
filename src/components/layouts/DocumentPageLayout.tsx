import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

type DocumentPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function DocumentPageLayout({
  title,
  description,
  children,
}: DocumentPageLayoutProps) {
  return (
    <section className="min-h-[70vh] bg-[#F5FAFC] py-14 sm:py-20">
      <div className="mx-auto max-w-250 px-5 sm:px-8">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-primary"
        >
          <ArrowLeft size={17} />
          Strona główna
        </Link>

        <header className="mb-10">
          <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#E1F3F3] text-accent">
            <FileText size={26} />
          </div>

          <p className="mb-3 text-xs font-bold tracking-widest text-accent uppercase">
            SuperMED / Informacje i dokumenty
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-180 text-base leading-8 text-text-muted">
            {description}
          </p>
        </header>

        <div className="rounded-2xl border border-[#D9E9EB] bg-white p-6 shadow-sm sm:p-10">
          <div className="space-y-6 text-sm leading-8 text-text-muted sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentPageLayout;
