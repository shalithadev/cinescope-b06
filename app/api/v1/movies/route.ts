import { NextResponse } from "next/server";
// TODO: Replace with database call
import { MOVIES } from "@/lib/data";
import { db } from "@/db";

// GET /api/v1/movies
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "50";

    const movies = await db
      .collection("movies")
      .find()
      .limit(parseInt(limit))
      .toArray()
      .catch((error) => {
        console.error("Database query failed:", error);
        throw new Error("Failed to retrieve movies from the database");
      });

    return NextResponse.json({
      message: "Successfully retrieved all movies",
      success: true,
      movies: movies,
    });
  } catch (error) {
    console.error("Error retrieving movies:", (error as Error).message);

    return NextResponse.json(
      {
        message: "Failed to retrieve movies",
        success: false,
        movies: [],
      },
      { status: 500 },
    );
  }
}

// POST /api/v1/movies
// Adds a new movie
export async function POST(request: Request) {
  try {
    const { title, director, year } = await request.json();

    if (!title || !director || !year) {
      return NextResponse.json(
        {
          message: "Title, director, and year are required",
          success: false,
        },
        { status: 400 },
      );
    }

    const newMovie = {
      id: MOVIES.length + 1,
      title,
      director,
      year,
    };

    // MOVIES.push(newMovie);

    return NextResponse.json(
      {
        message: "Movie added successfully",
        success: true,
        movies: newMovie,
      },
      { status: 201 }, // Created Status
    );
  } catch (error) {
    console.error("Error adding movie:", (error as Error).message);
    return NextResponse.json(
      {
        message: "Failed to add the movie!",
        success: false,
        movies: [],
      },
      { status: 500 },
    );
  }
}
