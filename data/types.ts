export type CompanyInfo = {
  shortName: string;
  displayName: string;
  legalName: string;
  phone: string;
  telegramChannel: string;
  telegramUrl: string;
  instagramHandle: string;
  instagramUrl: string;
  legalAddress: string;
  email: string;
  director: string;
  logoPath: string;
  unp: string;
  schedule: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  title: string;
  description: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Benefit = {
  badge: string;
  title: string;
  description: string;
};

export type TourCategory = "Языковые" | "Активные" | "Морские" | "Экскурсионные";

export type Tour = {
  id: string;
  category: TourCategory;
  title: string;
  location: string;
  date: string;
  age: string;
  duration: string;
  price: string;
  description: string;
  features: string[];
  included?: string[];
  note?: string;
  colorClass: string;
  image?: {
    src: string;
    alt: string;
  };
  active: boolean;
};

export type DepartureTone = "teal" | "amber";

export type UpcomingDeparture = {
  id: string;
  date: string;
  title: string;
  location: string;
  price: string;
  format: string;
  status: string;
  statusTone: DepartureTone;
  linkedTourId: string;
};

export type SafetyItem = {
  kicker: string;
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Review = {
  id: string;
  author: string;
  city: string;
  parentContext: string;
  childAge: string;
  tour: string;
  quote: string;
  accentTone: "teal" | "violet" | "amber";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
