"use client";

import Avatar from "./avatar";

// Parent Component: Profile
export default function Profile() {
  const handleAlert = (name: string) => {
    alert(name);
  };

  return (
    <section className="flex flex-row w-3xl items-end bg-amber-300 rounded px-4 py-2">
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        onClick={handleAlert}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        onClick={handleAlert}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
        onClick={handleAlert}
      />
    </section>
  );
}
