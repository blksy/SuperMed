import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ExternalLink, Menu, Search, X } from "lucide-react";

import logo from "../../assets/images/logo.png";

type DropdownItem = {
  label: string;
  path: string;
};

type NavigationItem = {
  label: string;
  path?: string;
  children?: DropdownItem[];
};

const navigation: NavigationItem[] = [
  { label: "Strona główna", path: "/" },
  { label: "O nas", path: "/o-nas" },
  {
    label: "Lekarze i harmonogram",
    path: "/lekarze-i-harmonogram",
  },
  {
    label: "Badania",
    children: [
      { label: "Badania laboratoryjne", path: "/badania/laboratoryjne" },
      { label: "USG", path: "/badania/usg" },
      { label: "Szczepienia", path: "/szczepienia" },
      { label: "Profilaktyka HPV", path: "/szczepienia/hpv" },
    ],
  },
  {
    label: "Dla pacjenta",
    children: [
      { label: "Zasady rejestracji", path: "/dla-pacjenta/zasady-rejestracji" },
      { label: "Deklaracje i formularze", path: "/dla-pacjenta/deklaracje" },
      { label: "Gdzie wykonać badania?", path: "/badania/laboratoryjne" },
      { label: "Wizyty domowe", path: "/dla-pacjenta/wizyty-domowe" },
    ],
  },
  { label: "Aktualności", path: "/aktualnosci" },
  { label: "Kontakt", path: "/kontakt" },
];

const searchablePages: DropdownItem[] = navigation.flatMap((item) =>
  item.children
    ? item.children
    : item.path
      ? [{ label: item.label, path: item.path }]
      : [],
);

const IKP_URL = "https://pacjent.gov.pl/internetowe-konto-pacjenta";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    mobileToggleRef.current?.focus();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleBreakpointChange = () => {
      setMobileOpen(false);
      setActiveDropdown(null);
      setSearchOpen(false);
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setSearchOpen(false);
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const toggleMobileMenu = () => {
    setSearchOpen(false);
    setActiveDropdown(null);
    setMobileOpen((current) => !current);
  };

  const toggleSearch = () => {
    setActiveDropdown(null);
    setSearchOpen((current) => !current);
    setSearchQuery("");
  };

  const searchResults = searchablePages.filter((page) =>
    page.label
      .toLocaleLowerCase("pl")
      .includes(searchQuery.trim().toLocaleLowerCase("pl")),
  );

  const handleSearchNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const isDropdownActive = (item: NavigationItem) =>
    item.children?.some((child) => child.path === location.pathname) ?? false;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md"
      >
        {/* MAIN NAVBAR */}
        <div className="mx-auto flex h-21 max-w-400 items-center justify-between gap-4 px-5 sm:px-8 lg:h-24 lg:px-10 xl:gap-5 xl:px-8 2xl:px-12">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="relative z-50 flex shrink-0 items-center"
            aria-label="SuperMED — Strona główna"
          >
            <img
              src={logo}
              alt="SuperMED — Poradnia Lekarza Rodzinnego"
              className="block h-auto w-45 object-contain sm:w-50 xl:w-55"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Nawigacja główna"
            className="hidden h-full min-w-0 items-center gap-3 xl:flex 2xl:gap-5"
          >
            {navigation.map((item) => {
              if (item.children) {
                const isOpen = activeDropdown === item.label;
                const isActive = isDropdownActive(item);

                return (
                  <div
                    key={item.label}
                    className="relative flex h-full items-center"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => toggleDropdown(item.label)}
                      className={`relative flex h-full items-center gap-1 whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 2xl:text-sm ${
                        isActive || isOpen
                          ? "text-accent"
                          : "text-primary hover:text-accent"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />

                      {isActive && (
                        <span className="absolute right-0 bottom-4 left-0 h-0.5 bg-accent" />
                      )}
                    </button>

                    {/* DESKTOP DROPDOWN */}
                    {isOpen && (
                      <div className="absolute top-full left-0 z-50 w-65 overflow-hidden rounded-b-xl border border-slate-100 bg-white py-2 shadow-xl">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `block px-5 py-3 text-sm transition-colors duration-200 hover:bg-surface hover:text-accent ${
                                isActive
                                  ? "bg-surface font-semibold text-accent"
                                  : "text-primary"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  end={item.path === "/"}
                  onClick={() => {
                    setActiveDropdown(null);
                    setSearchOpen(false);
                  }}
                  className={({ isActive }) =>
                    `relative flex h-full items-center whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 2xl:text-sm ${
                      isActive
                        ? "text-accent after:absolute after:right-0 after:bottom-4 after:left-0 after:h-0.5 after:bg-accent"
                        : "text-primary hover:text-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-4">
            <button
              type="button"
              aria-label={
                searchOpen ? "Zamknij wyszukiwarkę" : "Otwórz wyszukiwarkę"
              }
              aria-expanded={searchOpen}
              aria-controls="desktop-search"
              onClick={toggleSearch}
              className="flex size-10 items-center justify-center rounded-full text-primary transition-colors duration-200 hover:bg-surface hover:text-accent"
            >
              {searchOpen ? (
                <X size={21} strokeWidth={2} />
              ) : (
                <Search size={21} strokeWidth={2} />
              )}
            </button>

            <a
              href={IKP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Przejdź do Internetowego Konta Pacjenta"
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-accent to-accent-hover px-5 py-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:brightness-110 2xl:px-7 2xl:text-sm"
            >
              eWUŚ / IKP
              <ExternalLink size={14} />
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            ref={mobileToggleRef}
            type="button"
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMobileMenu}
            className="relative z-50 flex size-11 shrink-0 items-center justify-center rounded-lg text-primary transition-colors duration-200 hover:bg-surface xl:hidden"
          >
            <span className="relative flex size-7 items-center justify-center">
              <Menu
                size={28}
                strokeWidth={2}
                className={`absolute transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />

              <X
                size={28}
                strokeWidth={2}
                className={`absolute transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* DESKTOP SEARCH */}
        {searchOpen && (
          <div
            id="desktop-search"
            className="absolute top-full right-0 left-0 z-50 hidden border-t border-slate-100 bg-white p-5 shadow-lg xl:block"
          >
            <div className="mx-auto max-w-225">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-accent">
                <Search size={20} className="shrink-0 text-accent" />

                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Czego szukasz?"
                  aria-label="Wyszukaj podstronę"
                  className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-slate-400"
                />
              </div>

              {searchQuery.trim() && (
                <div className="mt-2 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <button
                        key={result.path}
                        type="button"
                        onClick={() => handleSearchNavigation(result.path)}
                        className="flex w-full items-center justify-between px-5 py-3 text-left text-sm text-primary transition-colors hover:bg-surface hover:text-accent"
                      >
                        {result.label}
                        <Search size={15} />
                      </button>
                    ))
                  ) : (
                    <p className="px-5 py-4 text-sm text-text-muted">
                      Nie znaleziono pasującej podstrony.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          inert={!mobileOpen}
          className={`absolute top-full right-0 left-0 z-50 overflow-hidden border-t border-slate-100 bg-white shadow-xl transition-[max-height,opacity,visibility] duration-300 ease-in-out xl:hidden ${
            mobileOpen
              ? "visible max-h-[calc(100dvh-84px)] opacity-100"
              : "invisible max-h-0 border-t-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Nawigacja mobilna"
            className="max-h-[calc(100dvh-84px)] overflow-y-auto overscroll-contain px-5 py-5 sm:px-8"
          >
            {navigation.map((item) => {
              if (item.children) {
                const isOpen = activeDropdown === item.label;
                const isActive = isDropdownActive(item);

                return (
                  <div key={item.label} className="border-b border-slate-100">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold transition-colors ${
                        isActive || isOpen
                          ? "text-accent"
                          : "text-primary hover:text-accent"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 pb-4 pl-3">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={closeMenu}
                              tabIndex={isOpen ? 0 : -1}
                              className={({ isActive }) =>
                                `block rounded-lg px-4 py-3 text-sm transition-colors ${
                                  isActive
                                    ? "bg-surface font-semibold text-accent"
                                    : "text-text-muted hover:bg-surface hover:text-accent"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path!}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block border-b border-slate-100 py-4 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? "text-accent"
                        : "text-primary hover:text-accent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}

            {/* MOBILE CTA */}
            <a
              href={IKP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              aria-label="Przejdź do Internetowego Konta Pacjenta"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent to-accent-hover px-6 py-4 text-[15px] font-semibold text-white transition-all hover:brightness-110"
            >
              eWUŚ / IKP
              <ExternalLink size={16} />
            </a>

            <div className="mt-6 border-t border-slate-100 pt-5 text-center">
              <p className="text-xs font-medium text-text-muted">
                SuperMED — Poradnia Lekarza Rodzinnego
              </p>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Zamknij menu nawigacji"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 cursor-default bg-black/40 xl:hidden"
        />
      )}
    </>
  );
}

export default Navbar;
