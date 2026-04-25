import { Form } from "radix-ui";

export interface MovieData {
  _id: string;
  title: string;
  plot: string;
  poster: string;
  genres: string[];
  year: number;
  imdb: { rating: number };
  runtime: number;
  type: string;
  directors: string[];
}

export interface MoviesActionResponse {
  movies: MovieData[];
  message: string;
  success: boolean;
}

export interface AddMovieData {
  title: FormDataEntryValue;
  year: FormDataEntryValue | number;
  directors: FormDataEntryValue[];
  genres: FormDataEntryValue[];
  imdb: {
    rating: number;
  };
  rated: FormDataEntryValue;
  runtime: FormDataEntryValue | number;
  plot: FormDataEntryValue;
  poster: FormDataEntryValue;
  backdrop: FormDataEntryValue;
  status: FormDataEntryValue;
  lastUpdated: FormDataEntryValue;
}
