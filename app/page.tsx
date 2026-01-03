import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-10 flex flex-col gap-12 items-center justify-center bg-white p-8">
      <h1 className="text-4xl font-bold">Shadcn/ui Button</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-1">
          <Button>Click Me</Button>
          <Button size="sm">Click Me</Button>
          <Button size="lg">Click Me</Button>
          <Button size="icon">
            <HomeIcon />
          </Button>
        </div>
        <div className="flex gap-1">
          <Button variant="outline">Click Me</Button>
          <Button variant="destructive">Click Me</Button>
          <Button variant="ghost">Click Me</Button>
          <Button variant="link">Click Me</Button>
          <Button variant="secondary">Click Me</Button>
        </div>
      </div>

      <h2 className="text-4xl font-bold">Next/Image</h2>

      <Image
        src="/placeholder.svg"
        alt="Placeholder"
        width={400}
        height={300}
        className="border rounded-xl object-cover w-full h-full max-w-md"
      />
    </main>
  );
}
