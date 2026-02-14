"use server";

import type { MoviesActionResponse } from "@/actions/types";

// Server action to Get a list of movies from the backend API
export async function getMovies({ limit = 8 }: { limit?: number }) {
  try {
    const parameters = new URLSearchParams();

    if (limit) {
      parameters.append("limit", limit.toString());
    }

    const response = await fetch(
      `${process.env.API_BASE_URL}/v1/movies?${parameters.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { movies }: MoviesActionResponse = await response.json();

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
