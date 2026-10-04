import generatedDepartures from "@/data/generated/departures.json";
import generatedTours from "@/data/generated/tours.json";
import type { UpcomingDeparture } from "@/data/types";

const activeTourIds = new Set(generatedTours.filter((tour) => tour.active).map((tour) => tour.id));

export const upcomingDepartures: UpcomingDeparture[] = (generatedDepartures as UpcomingDeparture[]).filter((departure) =>
  activeTourIds.has(departure.linkedTourId),
);
