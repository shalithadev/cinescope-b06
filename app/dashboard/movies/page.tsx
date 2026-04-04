import MovieData from "./movie-data";

// Movies Dashboard Page is a Sever Component,
// MovieData is a Server Component, MovieTable is a Client Component
// MovieData is used to fetch data.

export default async function DashboardMoviesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">
            Manage your movie collection and explore new releases.
          </p>
        </div>

        {/* Add Movie Dialog */}
      </div>

      {/* Movie Selectors */}

      {/* Movie Data Table */}
      <MovieData />
    </div>
  );
}
