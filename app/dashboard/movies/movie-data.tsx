import { searchMovies } from "@/actions/movies";
import MovieTable from "./movie-table";

export default async function MovieData() {
  try {
    const { data, success } = await searchMovies("");

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

    return <MovieTable movies={refinedMovies} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}
