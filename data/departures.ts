import generatedDepartures from "@/data/generated/departures.json";
import type { UpcomingDeparture } from "@/data/types";

export const upcomingDepartures: UpcomingDeparture[] = generatedDepartures as UpcomingDeparture[];
