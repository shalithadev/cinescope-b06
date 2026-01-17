import { Button } from "../ui/button";
import MoviesList from "./movies-list";

export default function FeaturedMovies() {
  return (
    <section
      id="featured-movies"
      className="container max-w-350 mx-auto px-4 py-12 md:px-6 w-full"
    >
      {/* Heading Area */}
      <div className="mb-8 flex items-center justify-between">
        {/* Heading and Description */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and greatest movies that are making waves in the
            cinema world.
          </p>
        </div>

        {/* View All Button */}
        <Button variant="outline">View All</Button>
      </div>

      <div className="space-y-6">
        {/* Movie Search Filter */}
        <div className="w-full h-30.5 bg-purple-400 rounded-lg"></div>

        {/* Movies List */}
        <MoviesList />
      </div>
    </section>
  );
}
