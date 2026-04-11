"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Movie } from "./types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MovieThumbnail } from "./movie-thumbnail";

interface MovieTableProps {
  movies: Movie[];
}

export default function MovieTable({ movies }: MovieTableProps) {
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
                <div>Action</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
