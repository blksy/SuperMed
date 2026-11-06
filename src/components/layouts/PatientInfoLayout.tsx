import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HeartPulse, Phone } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function PatientInfoLayout({
  eyebrow,
  title,
  description,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#F5FAFC]">
      <section className="bg-primary py-14 text-white sm:py-20">
        <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
          <Link
            to="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-[#C4D7E5] hover:text-white"
          >
            <ArrowLeft size={16} />
            Strona główna
          </Link>

          <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#8CE4DE]">
            <HeartPulse size={18} />
            {eyebrow}
          </div>

          <h1 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#C4D7E5]">
            {description}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-360 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {children}

        <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-primary p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h2 className="text-xl font-bold">
              Potrzebujesz dodatkowych informacji?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#C4D7E5]">
              Skontaktuj się z rejestracją poradni SUPERMED.
            </p>
          </div>

          <a
            href="tel:+48618226600"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#008C91] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#00767A]"
          >
            <Phone size={18} />
            61 822 66 00
          </a>
        </div>
      </main>
    </div>
  );
}
