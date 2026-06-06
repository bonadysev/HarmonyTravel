import type { UpcomingDeparture } from "@/data/types";

export const upcomingDepartures: UpcomingDeparture[] = [

  {
    id: "malivur-2026-05-31",
    date: "ОБНОВЛЯЕТСЯ",
    title: 'Сказочная страна "МалиВур"',
    location: "д.Добренево Минской области",
    price: "105 руб. / 110 руб.",
    format: "1 день",
    status: "Идет набор",
    statusTone: "amber",
    linkedTourId: "malivur-fairy-land",
  },
  {
    id: "zoo-dolphinarium-2026-05-30",
    date: "ОБНОВЛЯЕТСЯ",
    title: "Зоопарк + Дельфинарий",
    location: "г. Минск",
    price: "124 руб.",
    format: "1 день",
    status: "Идет набор",
    statusTone: "teal",
    linkedTourId: "minsk-zoo-dolphinarium",
  },
  {
    id: "sula-2026-05-31",
    date: "ОБНОВЛЯЕТСЯ",
    title: 'Парк-истории "Сула"',
    location: 'Минская обл., д. Сула',
    price: "125 руб.",
    format: "1 день",
    status: "Идет набор",
    statusTone: "teal",
    linkedTourId: "sula-history-park",
  },
];
