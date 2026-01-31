import { getMovies } from "@/actions/movies";
import MovieCard from "@/components/landing/movie-card";

// Sever component that displays a list of movies
// Asynchronously fetches movie data (simulated here with a placeholder)
export default async function MoviesList() {
  console.log("Fetching movies list...");
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate async data fetching
  const movies = await getMovies(); // Placeholder for actual data fetching logic
  console.log("Movies fetched:", movies);

  if (!movies || movies.length === 0) {
    return (
      <div className="text-red-600 text-center py-12">No movies available!</div>
    );
  }
  return (
    <div className="text-center py-12">
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={`movie-id-${movie.id}`} />
        ))}
      </div>
    </div>
  );
}
