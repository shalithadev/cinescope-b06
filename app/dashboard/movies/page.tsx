import AddMovieDialog from "@/components/dashboard/add-movie-dialog";
import MovieData from "./movie-data";
import MovieSelectors from "./movie-selectors";

// Movies Dashboard Page is a Sever Component,
// MovieData is a Server Component, MovieTable is a Client Component
// MovieData is used to fetch data.

type DashboardMoviesPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function DashboardMoviesPage(
  props: DashboardMoviesPageProps,
) {
  const searchParams = await props.searchParams;
  const query = searchParams.q || "";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Movies Management
          </h2>
          <p className="text-muted-foreground">
            Manage your movie collection and explore new releases.
          </p>
        </div>

        {/* Add Movie Dialog */}
        <AddMovieDialog />
      </div>

      {/* Movie Selectors */}
      <MovieSelectors query={query} />

      {/* Movie Data Table */}
      <MovieData query={query} />
    </div>
  );
}
