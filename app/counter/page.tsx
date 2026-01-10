"use client";

// import CounterClass from "./counter-class";
import CounterFunction from "./counter-function";
import Profile from "./profile";
import User from "./user";

export default function CounterPage() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen gap-4">
      {/* <CounterClass /> */}
      <CounterFunction />

      {/* Gallery Component */}
      <Profile />

      <User />
    </div>
  );
}
