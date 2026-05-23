import type { Review } from "@/data/types";

export const reviews: Review[] = [
  {
    id: "review-marina-minsk",
    author: "Марина",
    city: "Минск",
    parentContext: "Мама Кати",
    childAge: "11 лет",
    tour: "Детский тур в Могилев",
    accentTone: "violet",
    quote:
      "Очень понравилось, что менеджер честно рассказал, какой тур подойдет именно нашей дочке. В поездке была понятная связь и спокойная организация.",
  },
  {
    id: "review-evgeniy-bobruisk",
    author: "Евгений",
    city: "Бобруйск",
    parentContext: "Папа Ильи",
    childAge: "14 лет",
    tour: 'Детский тур "Зоопарк + Дельфинарий"',
    accentTone: "teal",
    quote:
      "Сын вернулся вдохновленным, а для нас важнее всего было то, что команда держала контакт и не терялась в мелочах.",
  },
  {
    id: "review-olga-zhlobin",
    author: "Ольга",
    city: "Жлобин",
    parentContext: "Мама Веры",
    childAge: "9 лет",
    tour: 'Детский тур в сказочную страну "МалиВур"',
    accentTone: "amber",
    quote:
      "Мы волновались из-за первого самостоятельного выезда, но все прошло мягко. Видно, что у компании есть опыт именно с детскими группами.",
  },
];
