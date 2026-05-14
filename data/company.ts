import type { CompanyInfo } from "@/data/types";

const repoBasePath = process.env.NODE_ENV === "production" ? "/HarmonyTravel" : "";

export const brand: CompanyInfo = {
  shortName: "Harmony Travel",
  displayName: "Гармония Трэвел",
  legalName: 'Общество с ограниченной ответственностью "Гармония Трэвел"',
  phone: "+375445123883",
  telegramChannel: "@Harmony_TraveI",
  telegramUrl: "https://t.me/Harmony_TraveI",
  instagramHandle: "harmony__travel",
  instagramUrl: "https://www.instagram.com/harmony__travel?igsh=aXRvczBpZ2ptNWc5",
  legalAddress: "Республика Беларусь, г. Жлобин",
  email: "harmonytravel.by@gmail.com",
  director: "Овсяникова И.В.",
  logoPath: `${repoBasePath}/harmony-travel-logo.jpg`,
  unp: "491471681",
  schedule: "Пн-Пт: 10:00-19:00, Сб-Вс: 10:00-18:00",
};
