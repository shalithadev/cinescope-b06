import { searchMovies } from "@/actions/movies";
import MovieTable from "./movie-table";

interface MovieDataProps {
  query?: string;
}

// Parent component that fetches movie data and passes it to the MovieTable component
export default async function MovieData({ query = "" }: MovieDataProps) {
  try {
    // Fetch movies based on the query using the searchMovies action
    const { data, success } = await searchMovies(query);

    if (!success) {
      throw new Error("No movies found in the database.");
    }

    const refinedMovies = data.map((movie) => ({
      id: movie._id.toString(),
      title: movie.title,
      year: movie.year,
      plot: movie.plot,
      rated: movie.rated,
      runtime: movie.runtime,
      genres: movie.genres,
      status: movie.status,
      poster: movie.poster,
      backdrop: movie.backdrop,
      directors: movie.directors,
      imdb: movie.imdb,
    }));

    // console.log("Refined Movies:", refinedMovies);

    // Child component that renders the movie table with the refined movie data
    return <MovieTable movies={refinedMovies} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}
