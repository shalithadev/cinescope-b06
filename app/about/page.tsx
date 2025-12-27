import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CineScope Dashboard",
  description: "Learn more about the CineScope Dashboard",
};

export default function AboutPage() {
  return (
    <main className="flex-10 flex items-center justify-center bg-green-200">
      <h1 className="text-4xl font-bold">About Page</h1>
    </main>
  );
}
