export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export type ScheduleEntry = {
  hours: string | null;
  vaccination?: string;
  note?: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  room: string | null;
  schedule: Record<Weekday, ScheduleEntry>;
};

export const weekdays: { id: Weekday; label: string; short: string }[] = [
  { id: "monday", label: "Poniedziałek", short: "Pon." },
  { id: "tuesday", label: "Wtorek", short: "Wt." },
  { id: "wednesday", label: "Środa", short: "Śr." },
  { id: "thursday", label: "Czwartek", short: "Czw." },
  { id: "friday", label: "Piątek", short: "Pt." },
];
