import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | CineScope Dashboard",
  description: "Your gateway to cinematic insights",
};

export default function DashboardPage() {
  return (
    <main className="flex-10 flex items-center justify-center bg-green-200">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>
    </main>
  );
}
