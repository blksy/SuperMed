import type { Announcement } from "../types/announcement";

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Przykładowy komunikat — nieobecność lekarza",
    message:
      "To jest demonstracyjny komunikat. Informacje o nieobecnościach lekarzy będą publikowane po ich potwierdzeniu przez poradnię.",
    type: "urgent",
    publishedAt: "2026-11-05T08:00:00+01:00",
    isActive: true,
  },
  {
    id: "2",
    title: "Informacje dla pacjentów",
    message:
      "Aktualne informacje dotyczące organizacji pracy poradni będą pojawiały się w tej sekcji.",
    type: "info",
    publishedAt: "2026-11-05T08:00:00+01:00",
    isActive: true,
  },

  {
    id: "3",
    title:
      "Zmiany w organizacji pracy poradni — ważne informacje dla pacjentów",
    message:
      "UWAGA! Poniższy komunikat ma charakter wyłącznie testowy.\n\n" +
      "Informujemy, że w dniach 10–14 listopada 2026 roku mogą wystąpić zmiany w organizacji pracy poradni SuperMED. " +
      "W tym okresie harmonogram przyjęć poszczególnych lekarzy może ulegać modyfikacjom. " +
      "Pacjentów posiadających wcześniej umówione wizyty prosimy o sprawdzanie aktualnych informacji publikowanych na naszej stronie internetowej.\n\n" +
      "Rejestracja telefoniczna będzie udzielać informacji dotyczących dostępności terminów, " +
      "godzin przyjęć oraz ewentualnych zmian w harmonogramie. " +
      "W przypadku konieczności przełożenia wizyty prosimy o wcześniejszy kontakt z rejestracją.\n\n" +
      "Przypominamy również, że aktualne informacje o badaniach laboratoryjnych, szczepieniach " +
      "oraz innych świadczeniach medycznych można znaleźć w odpowiednich sekcjach naszej strony.\n\n" +
      "Dziękujemy za wyrozumiałość i przepraszamy za ewentualne utrudnienia.",
    type: "urgent",
    publishedAt: "2026-11-05T08:00:00+01:00",
    expiresAt: "2026-11-15T23:59:59+01:00",
    isActive: true,
  },
];
