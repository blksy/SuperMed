import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { quickServices } from "../../data/quickServices";

function QuickServices() {
  return (
    <section
      id="uslugi"
      aria-labelledby="quick-services-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-360 px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADER */}
        <div className="mb-10 max-w-180 sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9E8E8] bg-[#F1FAFA] px-4 py-2">
            <span className="size-2 rounded-full bg-accent" />

            <span className="text-xs font-semibold tracking-wide text-accent uppercase">
              Szybki dostęp
            </span>
          </div>

          <h2
            id="quick-services-heading"
            className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-[42px]"
          >
            W czym możemy Ci pomóc?
          </h2>

          <p className="mt-5 max-w-150 text-base leading-8 text-text-muted">
            Najważniejsze informacje i usługi naszej poradni w jednym miejscu.
            Wybierz interesujący Cię temat.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {quickServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                to={service.href}
                aria-label={`Przejdź do: ${service.title}`}
                className="group relative flex min-h-62 flex-col overflow-hidden rounded-2xl border border-[#D9E9EB] bg-[#F4FAFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white hover:shadow-[0_18px_45px_rgba(16,47,91,0.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-8"
              >
                {/* DECORATIVE CIRCLE */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-14 -right-14 size-40 rounded-full bg-[#DFF3F3]/60 transition-transform duration-500 group-hover:scale-125"
                />

                {/* ICON */}
                <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl border border-[#C9E8E8] bg-white text-accent shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* CONTENT */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-lg font-bold tracking-tight text-primary transition-colors duration-200 group-hover:text-accent sm:text-xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-70 text-sm leading-6 text-text-muted">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-sm font-semibold text-accent">
                      Sprawdź szczegóły
                    </span>

                    <span className="flex size-9 items-center justify-center rounded-full border border-[#C9E8E8] bg-white text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickServices;
