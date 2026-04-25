"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Movie } from "./types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MovieThumbnail } from "./movie-thumbnail";
import UpdateMovieDialog from "@/components/dashboard/update-movie-dialog";
import DeleteMovieDialog from "@/components/dashboard/delete-movie-dialog";
import { deleteMovie } from "@/actions/movies";

interface MovieTableProps {
  movies: Movie[];
}

export default function MovieTable({ movies }: MovieTableProps) {
  const router = useRouter();
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleDeleteMovie = async (id: string) => {
    setIsDeleting(true);
    try {
      const response = await deleteMovie(id);

      if (response.success) {
        setShowDeleteDialog(false);
        setSelectedMovie(null);
        router.refresh(); // Refresh the page to update the movie list after deletion
      } else {
        console.error("Failed to delete movie:", response.message);
      }
    } catch (error) {
      console.error("Failed to delete movie:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  // Helper function to determine badge color based on movie status
  const getStatusClass = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 border-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "archived":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption className="sr-only">Admin Movies Table</TableCaption>
        <TableHeader>
          <TableRow className="text-muted-foreground">
            <TableHead className="w-20 text-muted-foreground">#</TableHead>
            <TableHead className="text-muted-foreground">Title</TableHead>
            <TableHead className="text-muted-foreground">Year</TableHead>
            <TableHead className="text-muted-foreground">Genre</TableHead>
            <TableHead className="text-muted-foreground">Rating</TableHead>
            <TableHead className="text-muted-foreground">Status</TableHead>
            <TableHead className="text-muted-foreground text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movie, idx) => (
            <TableRow key={`movie-${movie.id}-${idx}`}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <MovieThumbnail poster={movie.poster} title={movie.title} />
                  <span className="font-medium max-w-60 text-wrap line-clamp-2">
                    {movie.title}
                  </span>
                </div>
              </TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {movie.genres.map((genre, idx) => (
                    <Badge
                      key={`genre-${genre}-${idx}`}
                      variant="outline"
                      className="text-xs rounded-md"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{Number(movie.imdb.rating).toFixed(1)}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    "rounded-md capitalize text-xs",
                    getStatusClass(movie.status ?? "published"),
                  )}
                >
                  {movie.status ?? "Published"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setShowUpdateDialog(true);
                        setSelectedMovie(movie);
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => {
                        setShowDeleteDialog(true);
                        setSelectedMovie(movie);
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UpdateMovieDialog
        open={showUpdateDialog}
        onOpenChange={setShowUpdateDialog}
        movie={selectedMovie}
      />

      <DeleteMovieDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirmDelete={handleDeleteMovie}
        isLoading={isDeleting}
        movie={selectedMovie}
      />
    </div>
  );
}
