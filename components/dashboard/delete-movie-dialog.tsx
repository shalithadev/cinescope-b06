import { Movie } from "@/app/dashboard/movies/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface DeleteMovieDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirmDelete: (id: string) => Promise<void>;
  isLoading?: boolean;
  movie?: Movie | null;
}

export default function DeleteMovieDialog({
  open,
  onOpenChange,
  onConfirmDelete,
  isLoading,
  movie,
}: DeleteMovieDialogProps) {
  if (!movie) return null; // Handle case when movie is not provided

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription className="text-sm text-gray-500 my-5 text-balance">
            Are you sure you want to delete this movie?{" "}
            <strong>{`${movie.title} (${movie.year})`}</strong>
            <br />
            <span className="text-xs text-orange-400 mt-10">
              Note: This action cannot be undone.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => onConfirmDelete(movie.id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
