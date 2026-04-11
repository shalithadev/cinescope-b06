"use client";

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

export default function AddMovieForm() {
  const years = getAllYears();
  const genres = getAllGenres();
  const statuses = getAllStatuses();

  return (
    <form className="space-y-4">
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
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">
            Year<span className="text-red-500">*</span>
          </Label>
          <Select name="year" required>
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
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Genre</Label>
          <Select name="genre" required>
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
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select name="status" required>
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

      {/* Action Buttons needs to be inside the form */}
      <DialogFooter>
        <Button type="reset" variant="outline" className="min-w-25.5">
          Cancel
        </Button>
        <Button type="submit" className="min-w-25.5">
          Add Movie
        </Button>
      </DialogFooter>
    </form>
  );
}
