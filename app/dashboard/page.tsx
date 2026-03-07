import type { Metadata } from "next";
import LogoutButton from "./logout-button";

// If you want to add metadata this component has to be a Server Component.
export const metadata: Metadata = {
  title: "Dashboard | CineScope Dashboard",
  description: "Your gateway to cinematic insights",
};

export default function DashboardPage() {
  return (
    <div className="flex-10 flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>

      <LogoutButton />
    </div>
  );
}
