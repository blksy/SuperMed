import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F5FAFC]"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-100 rounded-full bg-[#DDF3F3]/60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-360 items-center gap-12 px-5 pt-12 pb-20 sm:px-8 sm:pt-16 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pt-20 lg:pb-28 xl:gap-16">
        {/* LEFT COLUMN */}
        <div className="relative z-10 max-w-155">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C9E8E8] bg-white px-4 py-2 text-xs font-semibold tracking-wide text-accent sm:text-sm">
            <span className="size-2 rounded-full bg-accent" />
            PORADNIA LEKARZA RODZINNEGO
          </div>

          <h1
            id="hero-heading"
            className="text-[clamp(2.35rem,4.1vw,4rem)] leading-[1.12] font-bold tracking-tight text-primary"
          >
            Kompleksowa opieka medyczna{" "}
            <span className="text-accent">dla całej rodziny</span>
          </h1>

          <p className="mt-7 max-w-130 text-base leading-8 text-text-muted sm:text-lg">
            W SuperMED dbamy o zdrowie Twoje i Twoich bliskich. Zapewniamy
            opiekę lekarza rodzinnego, badania diagnostyczne i wsparcie na
            każdym etapie życia.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="tel:+48618226600"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#008F95]/15 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
            >
              <Phone size={18} strokeWidth={2} />
              Zadzwoń: 61 822 66 00
            </a>

            <Link
              to="/lekarze-i-harmonogram"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-[#C7D8E4] bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-sm"
            >
              Harmonogram lekarzy
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>

          {/* QUICK INFORMATION */}
          <div className="mt-12 flex flex-col gap-5 border-t border-[#DCE8EE] pt-7 sm:flex-row sm:gap-9">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F3F3] text-accent">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Poznań, Piątkowo
                </p>
                <p className="mt-1 text-xs leading-5 text-text-muted">
                  os. Bolesława Chrobrego 118
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#E1F3F3] text-accent">
                <Clock3 size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Rejestracja telefoniczna
                </p>
                <p className="mt-1 text-xs leading-5 text-text-muted">
                  61 822 66 00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — PHOTO */}
        <div className="relative mx-auto w-full max-w-160 lg:max-w-none">
          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -top-5 -right-5 hidden size-35 rounded-3xl border-2 border-[#C3E8E8] lg:block"
          />

          <div className="relative overflow-hidden rounded-[28px] bg-[#DDE9EB] shadow-[0_24px_70px_rgba(16,47,91,0.12)] sm:rounded-[36px]">
            <img
              src={heroImage}
              alt="Wnętrze rejestracji poradni SuperMED w Poznaniu"
              className="aspect-5/4 w-full object-cover object-center lg:aspect-4/5 xl:aspect-5/4"
              fetchPriority="high"
            />

            {/* Subtle gradient */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#102F5B]/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
