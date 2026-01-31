import { NextResponse } from "next/server";
// TODO: Replace with database call
import { MOVIES } from "@/lib/data";

// GET /api/v1/movies
export async function GET() {
  try {
    return NextResponse.json({
      message: "Successfully retrieved all movies",
      success: true,
      movies: MOVIES,
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
