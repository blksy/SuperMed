import {
  CalendarDays,
  FlaskConical,
  ClipboardList,
  Syringe,
  Scan,
  ShieldCheck,
} from "lucide-react";

import type { QuickService } from "../types/quickService";

export const quickServices: QuickService[] = [
  {
    id: "schedule",
    title: "Harmonogram lekarzy",
    description: "Sprawdź aktualne godziny przyjęć lekarzy naszej poradni.",
    href: "/lekarze-i-harmonogram",
    icon: CalendarDays,
  },
  {
    id: "laboratory",
    title: "Badania laboratoryjne",
    description: "Dowiedz się więcej o badaniach i przygotowaniu do nich.",
    href: "/badania/laboratoryjne",
    icon: FlaskConical,
  },
  {
    id: "declarations",
    title: "Deklaracje POZ",
    description: "Sprawdź informacje dotyczące wyboru lekarza POZ.",
    href: "/dla-pacjenta/deklaracje",
    icon: ClipboardList,
  },
  {
    id: "vaccinations",
    title: "Szczepienia",
    description: "Poznaj informacje dotyczące szczepień ochronnych.",
    href: "/szczepienia",
    icon: Syringe,
  },
  {
    id: "ultrasound",
    title: "Badania USG",
    description: "Sprawdź informacje dotyczące diagnostyki USG.",
    href: "/badania/usg",
    icon: Scan,
  },
  {
    id: "hpv",
    title: "Szczepienia HPV",
    description: "Dowiedz się więcej o profilaktyce zakażeń HPV.",
    href: "/szczepienia/hpv",
    icon: ShieldCheck,
  },
];
