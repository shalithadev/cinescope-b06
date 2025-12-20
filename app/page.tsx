import TodoList from "@/components/todo-list";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <TodoList />

        <h1 className="text-lg font-bold capitalize">
          Here&apos;s the shadcn/ui button
        </h1>

        <div className="flex gap-2 w-full flex-wrap">
          <Button>Click Me!</Button>
          <Button variant="outline">Click Me!</Button>
          <Button variant="outline" size="icon" aria-label="Submit">
            <ArrowUpIcon />
          </Button>
          <Button variant="secondary">Click Me!</Button>
          <Button variant="destructive">Click Me!</Button>
          <Button variant="ghost">Click Me!</Button>
          <Button variant="link">Click Me!</Button>
          <Button className="bg-amber-400">Click Me!</Button>
        </div>
      </main>
    </div>
  );
}
