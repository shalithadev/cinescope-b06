"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

interface MovieThumbnailProps {
  poster: string;
  title: string;
}

export function MovieThumbnail({ poster, title }: MovieThumbnailProps) {
  const [posterUrl, setPosterUrl] = useState(poster ?? "/placeholder.svg");

  const handleImageError = useCallback(() => {
    setPosterUrl("/placeholder.svg");
  }, []);

  return (
    <Image
      src={posterUrl}
      alt={title}
      width={28}
      height={40}
      className="h-10 rounded object-cover"
      onError={handleImageError}
    />
  );
}
