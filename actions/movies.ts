"use server";

import { ObjectId } from "mongodb";
import { db } from "@/db";
import type { MoviesActionResponse, AddMovieData } from "@/actions/types";

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
      .collection("movies_v2")
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

// Server action to add a new movie to the database.
// Based on direct MongoDB insertOne operation to add a new movie document to the movies collection
export async function addMovie(movieDoc: AddMovieData) {
  if (!movieDoc.title || !movieDoc.year) {
    return {
      success: false,
      message: "Title and Year are required fields.",
      data: null,
    };
  }

  try {
    const result = await db.collection("movies_v2").insertOne(movieDoc);

    console.log("Insert Result:", result.insertedId);

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie added successfully",
        // data: { id: result.insertedId },
      };
    } else {
      return {
        success: false,
        message: "Failed to add movie",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error adding movie:", error);
    return {
      success: false,
      message: "An error occurred while adding the movie.",
      data: null,
    };
  }
}

// Server action to update an existing movie in the database.
// Based on direct MongoDB replaceOne operation to update a movie document in the movies collection
export async function updateMovie(id: string, movieDoc: AddMovieData) {
  // Validate that the required fields are present before attempting to update
  if (!movieDoc.title || !movieDoc.year) {
    return {
      success: false,
      message: "Title and Year are required fields.",
      data: null,
    };
  }

  try {
    const result = await db
      .collection("movies_v2")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movieDoc },
        { upsert: false },
      );

    if (result.acknowledged && result.modifiedCount > 0) {
      return {
        success: true,
        message: "Movie updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to update movie",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error updating movie:", error);
    return {
      success: false,
      message: "An error occurred while updating the movie.",
      data: null,
    };
  }
}

// Server action to delete an existing movie from the database.
// Based on direct MongoDB deleteOne operation to remove a movie document from the movies collection
export async function deleteMovie(id: string) {
  try {
    const result = await db
      .collection("movies_v2")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    if (result.acknowledged && result.deletedCount > 0) {
      return {
        success: true,
        message: "Movie deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete movie",
        data: null,
      };
    }
  } catch (error) {
    console.error("Error deleting movie:", error);
    return {
      success: false,
      message: "An error occurred while deleting the movie.",
      data: null,
    };
  }
}
