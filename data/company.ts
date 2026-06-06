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
  director: "Овсяникова Ирина Владимировна",
  logoPath: `${repoBasePath}/harmony-travel-logo.jpg`,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C%2C+%D0%B3.+%D0%96%D0%BB%D0%BE%D0%B1%D0%B8%D0%BD%2C+%D1%83%D0%BB.+%D0%9A%D0%BE%D0%B7%D0%BB%D0%BE%D0%B2%D0%B0+25",
  unp: "491471681",
  schedule: "Пн-Пт: 10:00-19:00, Сб-Вс: 10:00-18:00",
};
