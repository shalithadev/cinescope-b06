import Link from "next/link";

// By default RSC
export default function GenresPage() {
  console.log("Server Component Here!!");
  // Example 04

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-6 gap-6">
      <h1 className="text-primary font-bold text-3xl capitalize">
        This is my first heading as h1
      </h1>

      <div className="flex gap-4 text-xs text-center">
        <div className="w-40 h-40 p-4 bg-primary">Background Primary</div>

        <div className="w-40 h-40 p-4 border-primary border">
          Border Primary
        </div>

        <div className="w-40 h-40 outline-4 outline-primary">
          Outline Primary
        </div>

        <div className="w-40 h-40 relative border border-primary">
          <h2 className="text-primary font-bold text-lg">RGBA</h2>
          <div className="w-20 h-20 bg-purple-500 absolute top-2 right-3 z-10"></div>
        </div>

        <div className="w-40 h-40 relative bg-accent">Named Colors</div>
      </div>

      <ol className="flex flex-col space-y-2 w-1/2">
        <Link href="/styling/grid">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 01: Grid
          </li>
        </Link>
        <Link href="/styling/flexbox">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 02: Flexbox
          </li>
        </Link>
        <Link href="/styling/flex-one">
          <li className="w-full bg-accent p-2 text-center font-semibold rounded-lg hover:underline hover:bg-primary/80">
            Example 03: Flex 1
          </li>
        </Link>
      </ol>
    </div>
  );
}
