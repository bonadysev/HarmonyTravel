import generatedTours from "@/data/generated/tours.json";
import type { Tour, TourCategory } from "@/data/types";

const repoBasePath = process.env.NODE_ENV === "production" ? "/HarmonyTravel" : "";

export const tourCategories: Array<"Все" | TourCategory> = ["Все", "Активные", "Морские", "Экскурсионные"];
export const tours: Tour[] = generatedTours.filter((tour) => tour.active).map((tour) => ({
  ...tour,
  image: tour.image
    ? { ...tour.image, src: `${repoBasePath}/${tour.image.src.replace(/^\/+/, "")}` }
    : undefined,
})) as Tour[];
