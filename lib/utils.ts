import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(person: { imageId: string }, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Generate an array of years from the current year to 100 years back
export function getAllYears(): string[] {
  return Array.from({ length: 100 }, (_, i) =>
    (new Date().getFullYear() - i).toString(),
  );
}

export function getAllGenres(): string[] {
  // In future, this can be fetched from the backend or a config file
  return [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western",
  ];
}

export function getAllStatuses(): string[] {
  // In future, this can be fetched from the backend or a config file
  return ["published", "draft", "archived"];
}
