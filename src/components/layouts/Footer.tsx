import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone, Mail, HeartPulse } from "lucide-react";

const footerLinks = [
  {
    title: "Dla pacjenta",
    links: [
      { label: "Harmonogram lekarzy", href: "/lekarze-i-harmonogram" },
      { label: "Badania laboratoryjne", href: "/badania/laboratoryjne" },
      { label: "Deklaracje POZ", href: "/dla-pacjenta/deklaracje" },
      { label: "Szczepienia", href: "/szczepienia" },
      { label: "Badania USG", href: "/badania/usg" },
      { label: "Szczepienia HPV", href: "/szczepienia/hpv" },
    ],
  },
  {
    title: "Informacje",
    links: [
      { label: "Aktualności", href: "/aktualnosci" },
      {
        label: "Standardy Ochrony Małoletnich",
        href: "/standardy-ochrony-maloletnich",
      },
      { label: "Projekt Grantowy", href: "/projekt-grantowy" },
    ],
  },
  {
    title: "Dokumenty",
    links: [
      { label: "Regulamin", href: "/regulamin" },
      {
        label: "Polityka prywatności",
        href: "/polityka-prywatnosci",
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-[#102F5B] text-white">
      <div className="mx-auto max-w-360 px-5 pt-16 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-8">
          {/* BRAND AND CONTACT */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="SuperMED — strona główna"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-[#58D2CF]">
                <HeartPulse size={27} strokeWidth={1.8} />
              </div>

              <div>
                <span className="block text-2xl font-bold tracking-tight">
                  Super<span className="text-[#58D2CF]">MED</span>
                </span>
                <span className="block text-[10px] tracking-widest text-[#C4D7E5] uppercase">
                  Poradnia Lekarza Rodzinnego
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#C4D7E5]">
              Informacje o świadczeniach medycznych, harmonogramach przyjęć i
              aktualnościach poradni w jednym miejscu.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3 text-sm text-[#C4D7E5]">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#58D2CF]" />
                <span>
                  os. Bolesława Chrobrego 118
                  <br />
                  Poznań
                </span>
              </div>

              <a
                href="tel:+48618226600"
                className="flex items-center gap-3 text-sm text-[#C4D7E5] transition-colors hover:text-white"
              >
                <Phone size={18} className="text-[#58D2CF]" />
                61 822 66 00
              </a>

              <a
                href="mailto:rejestracja@supermed.poznan.pl"
                className="flex items-center gap-3 break-all text-sm text-[#C4D7E5] transition-colors hover:text-white"
              >
                <Mail size={18} className="shrink-0 text-[#58D2CF]" />
                rejestracja@supermed.poznan.pl
              </a>
            </div>
          </div>

          {/* NAVIGATION GROUPS */}
          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-6 text-sm font-bold tracking-wide text-white">
                {group.title}
              </h2>

              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-start gap-1.5 text-sm leading-6 text-[#C4D7E5] transition-colors hover:text-[#58D2CF]"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={13}
                        className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-[#C4D7E5] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SuperMED. Wszelkie prawa zastrzeżone.
          </p>

          <a
            href="https://github.com/blksy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#58D2CF]"
          >
            Projekt i realizacja: Bartosz Oleksy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
