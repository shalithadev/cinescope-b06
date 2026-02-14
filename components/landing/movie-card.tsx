import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MovieData } from "@/actions/types";

interface MovieCardProps {
  movie: MovieData;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <Image
        src={movie.poster ?? "/placeholder.svg"}
        alt="Movie Poster"
        width={300}
        height={450}
      />
      <CardHeader>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{movie.year}</CardDescription>
        <CardAction>View Details</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
