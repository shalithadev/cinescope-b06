"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

// Type definition for Avatar component props
type AvatarProps = {
  person: { name: string; imageId: string };
  size?: number;
  onClick: (name: string) => void;
};

// Child Component: Avatar
export default function Avatar({ person, size = 100, onClick }: AvatarProps) {
  return (
    <button onClick={() => onClick(person.name)}>
      <Image
        className="m-2.5 rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        priority
        fetchPriority="high"
      />
    </button>
  );
}
