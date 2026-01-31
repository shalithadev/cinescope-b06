export interface MovieData {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  runtime: number;
}

export interface MoviesActionResponse {
  movies: MovieData[];
  message: string;
  success: boolean;
}
