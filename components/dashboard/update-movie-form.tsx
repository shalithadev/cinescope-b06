"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getAllYears, getAllGenres, getAllStatuses } from "@/lib/utils";
import { updateMovie } from "@/actions/movies";
import type { AddMovieData } from "@/actions/types";
import type { Movie } from "@/app/dashboard/movies/types";

interface UpdateMovieFormProps {
  showDialog: (value: boolean) => void;
  movie?: Movie | null; // Assuming movie is a MongoDB document with an _id field
}

export default function UpdateMovieForm({
  showDialog,
  movie,
}: UpdateMovieFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    title: movie?.title || "",
    year: movie?.year || "",
    director: movie?.directors?.at(0) || "",
    genre: movie?.genres?.at(0) || "",
    rating: movie?.imdb?.rating || "",
    runtime: movie?.runtime || "",
    overview: movie?.plot || "",
    poster: movie?.poster || "",
    backdrop: movie?.backdrop || "",
    status: movie?.status || "",
  });
  const [error, setError] = useState<string | null>(null);
  const years = getAllYears();
  const genres = getAllGenres();
  const statuses = getAllStatuses();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // const data = Object.fromEntries(formData.entries());

    const movieDoc: AddMovieData = {
      title: formData.get("title") ?? "",
      year: Number(formData.get("year")) ?? "",
      directors: [formData.get("director") ?? ""],
      genres: [formData.get("genre") ?? ""],
      imdb: {
        rating: Number(formData.get("rating")),
      },
      rated: "G",
      runtime: Number(formData.get("runtime")) ?? "",
      plot: formData.get("overview") ?? "",
      poster: formData.get("poster") ?? "",
      backdrop: formData.get("backdrop") ?? "",
      status: formData.get("status") ?? "",
      lastUpdated: new Date().toISOString(),
    };

    setIsSubmitting(true);

    try {
      if (!movie || !movie.id) {
        setError("Invalid movie data. Cannot update.");
        return;
      }

      const response = await updateMovie(movie.id, movieDoc);

      if (response.success) {
        router.refresh(); // Refresh the page to show the new movie in the list
        // hide the dialog after successful submission
        showDialog(false);
      } else {
        console.log("Failed to update movie:", response.message);
        setError(response.message);
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // convert inputs to controlled inputs by setting value and onChange handler

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">
            Title<span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Movie title"
            value={formState.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">
            Year<span className="text-red-500">*</span>
          </Label>
          <Select
            name="year"
            required
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, year: value }))
            }
            value={formState.year.toString()}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {years.map((year, idx) => (
                  <SelectItem key={`${year}-${idx}`} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="director">
            Director<span className="text-red-500">*</span>
          </Label>
          <Input
            id="director"
            name="director"
            type="text"
            placeholder="Director name"
            required
            value={formState.director}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Genre</Label>
          <Select
            name="genre"
            required
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, genre: value }))
            }
            value={formState.genre}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {genres.map((genre, idx) => (
                  <SelectItem key={`${genre}-${idx}`} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">
            IMDb Rating<span className="text-red-500">*</span>
          </Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="IMDb Rating"
            required
            value={formState.rating}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="runtime">Runtime</Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            min="0"
            max="1000"
            step="1"
            placeholder="Runtime in minutes"
            value={formState.runtime}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="h-25 w-full resize-none"
          value={formState.overview}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">
            Poster URL<span className="text-red-500">*</span>
          </Label>
          <Input
            id="poster"
            name="poster"
            type="text"
            placeholder="URL to movie poster image"
            value={formState.poster}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="backdrop">
            Backdrop URL<span className="text-red-500">*</span>
          </Label>
          <Input
            id="backdrop"
            name="backdrop"
            type="text"
            placeholder="URL to movie backdrop image"
            value={formState.backdrop}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select
            name="status"
            required
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, status: value }))
            }
            value={formState.status}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {statuses.map((status, idx) => (
                  <SelectItem
                    key={`${status}-${idx}`}
                    value={status}
                    className="capitalize"
                  >
                    {status}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>{error && <p className="text-red-500 text-xs">{error}</p>}</div>

      {/* Action Buttons needs to be inside the form */}
      <DialogFooter>
        <Button
          type="reset"
          variant="outline"
          className="min-w-25.5"
          disabled={isSubmitting}
          onClick={() => showDialog(false)}
        >
          Cancel
        </Button>
        <Button type="submit" className="min-w-25.5" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </DialogFooter>
    </form>
  );
}
