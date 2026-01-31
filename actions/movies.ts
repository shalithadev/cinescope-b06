"use server";

import type { MoviesActionResponse } from "@/actions/types";

// Server action to Get a list of movies from the backend API
export async function getMovies() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/v1/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

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
