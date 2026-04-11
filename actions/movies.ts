"use server";

import { db } from "@/db";
import type { MoviesActionResponse } from "@/actions/types";

// Server action to Get a list of movies from the backend API
// Based on /v1/movies endpoint, with optional limit query parameter
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

// Sever action to search movies by title.
// Based on direct MongoDB query to search movies by title, with case-insensitive regex matching
export async function searchMovies(query: string) {
  try {
    const movies = await db
      .collection("movies")
      .find({ title: { $regex: query, $options: "i" } }) // Case-insensitive search on the title field
      .limit(50)
      .toArray();

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: `Found ${movies.length} movies matching "${query}"`,
        data: movies,
      };
    } else {
      return {
        success: false,
        message: `No movies found matching "${query}"`,
        data: [],
      };
    }
  } catch (error) {
    console.error("Error searching movies:", error);
    return {
      success: false,
      message: "An error occurred while searching for movies.",
      data: [],
    };
  }
}
