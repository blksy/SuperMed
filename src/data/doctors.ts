import type { Doctor } from "../types/doctor";

const hours = (value: string) => ({ hours: value });

export const doctors: Doctor[] = [
  {
    id: "ewa-malicka",
    name: "Ewa Malicka",
    specialization: "Specjalista medycyny rodzinnej",
    room: "201",
    schedule: {
      monday: hours("08:00–13:00"),
      tuesday: hours("13:00–18:00"),
      wednesday: hours("08:00–13:00"),
      thursday: hours("13:00–18:00"),
      friday: hours("08:00–13:00"),
    },
  },
  {
    id: "ewa-zarebska",
    name: "Ewa Zarębska",
    specialization: "Internista, specjalista reumatolog",
    room: "202",
    schedule: {
      monday: hours("13:00–18:00"),
      tuesday: hours("08:00–13:00"),
      wednesday: hours("13:00–18:00"),
      thursday: hours("08:00–13:00"),
      friday: hours("08:00–13:00"),
    },
  },
  {
    id: "natalia-wieclaw",
    name: "Natalia Więcław",
    specialization: "Lekarz medycyny",
    room: "205",
    schedule: {
      monday: { hours: null, note: "Godziny ulegają zmianie" },
      tuesday: { hours: null, note: "Godziny ulegają zmianie" },
      wednesday: { hours: null, note: "Godziny ulegają zmianie" },
      thursday: { hours: null, note: "Godziny ulegają zmianie" },
      friday: { hours: null, note: "Godziny ulegają zmianie" },
    },
  },
  {
    id: "jolanta-zabek",
    name: "Jolanta Ząbek",
    specialization: "Lekarz medycyny",
    room: null,
    schedule: {
      monday: hours("13:00–18:00"),
      tuesday: hours("13:00–18:00"),
      wednesday: hours("13:00–18:00"),
      thursday: hours("13:00–18:00"),
      friday: hours("13:00–18:00"),
    },
  },
  {
    id: "katarzyna-bartkowiak",
    name: "Katarzyna Bartkowiak",
    specialization: "Specjalista medycyny rodzinnej",
    room: "208",
    schedule: {
      monday: {
        hours: "08:00–13:00",
        vaccination: "09:30–11:00",
      },
      tuesday: {
        hours: "13:00–18:00",
        vaccination: "16:00–17:30",
      },
      wednesday: { hours: "08:00–13:00" },
      thursday: { hours: "13:00–18:00" },
      friday: {
        hours: "08:00–13:00",
        vaccination: "08:00–09:00",
      },
    },
  },
  {
    id: "piotr-zabek",
    name: "Piotr Ząbek",
    specialization: "Specjalista medycyny rodzinnej",
    room: "209",
    schedule: {
      monday: {
        hours: "13:00–18:00",
        vaccination: "14:00–15:30",
      },
      tuesday: {
        hours: "08:00–13:00",
        vaccination: "10:00–11:30",
      },
      wednesday: {
        hours: "13:00–18:00",
        vaccination: "15:30–17:00",
      },
      thursday: {
        hours: "08:00–13:00",
        vaccination: "08:00–09:00",
      },
      friday: {
        hours: "08:00–13:00",
        vaccination: "08:30–09:00",
      },
    },
  },
  {
    id: "maria-kolodziej-dolecka",
    name: "Maria Kołodziej-Dolecka",
    specialization: "Lekarz medycyny",
    room: "212",
    schedule: {
      monday: hours("08:00–13:00"),
      tuesday: hours("13:00–18:00"),
      wednesday: hours("08:00–13:00"),
      thursday: hours("08:00–13:00"),
      friday: hours("13:00–18:00"),
    },
  },
  {
    id: "aneta-kaczynska",
    name: "Aneta Kaczyńska",
    specialization: "Specjalista medycyny rodzinnej",
    room: "213",
    schedule: {
      monday: {
        hours: "13:00–18:00",
        vaccination: "16:00–17:00",
      },
      tuesday: {
        hours: "08:00–13:00",
        vaccination: "11:00–12:00",
      },
      wednesday: {
        hours: "08:00–13:00",
        vaccination: "10:00–11:00",
      },
      thursday: {
        hours: "08:00–13:00",
        vaccination: "10:00–11:00",
      },
      friday: {
        hours: "13:00–18:00",
        vaccination: "15:00–16:00",
      },
    },
  },
];
