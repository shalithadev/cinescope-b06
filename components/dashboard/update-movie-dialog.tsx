"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UpdateMovieForm from "./update-movie-form";
import type { Movie } from "@/app/dashboard/movies/types";

interface UpdateMovieDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  movie?: Movie | null; // Assuming movie is a MongoDB document with an _id field
}

export default function UpdateMovieDialog({
  open,
  onOpenChange,
  movie,
}: UpdateMovieDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-150">
        <DialogHeader>
          <DialogTitle>Update Movie</DialogTitle>
          <DialogDescription>
            Update the details below to modify the movie in your catalog.
          </DialogDescription>
        </DialogHeader>
        {/* Update Movie Form */}
        <UpdateMovieForm showDialog={onOpenChange} movie={movie} />
      </DialogContent>
    </Dialog>
  );
}
