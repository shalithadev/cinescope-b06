import MovieCard from "@/components/landing/movie-card";
import { getMovies } from "@/actions/movies";

// Sever component that displays a list of movies
// Asynchronously fetches movie data (simulated here with a placeholder)
export default async function MoviesList() {
  console.log("Fetching movies list...");
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate async data fetching
  const movies = await getMovies({ limit: 12 });
  // console.log("Movies fetched:", movies);

  if (!movies || movies.length === 0) {
    return (
      <div className="text-red-600 text-center py-12">No movies available!</div>
    );
  }

  return (
    <>
      <div className="text-muted-foreground text-sm">
        Showing {movies.length} of 100 movies.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={`movie-${movie._id}`} movie={movie} />
        ))}
      </div>
    </>
  );
}
