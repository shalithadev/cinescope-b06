"use client";

import { useState, useEffect } from "react";

export default function User() {
  function createTodos() {
    return ["Read a Book", "Watch a movie"];
  }

  // User Related Local State
  const [age, setAge] = useState(28);
  const [name, setName] = useState("Taylor");
  const [todos, setTodos] = useState(() => createTodos());

  async function handleUpdateUser() {
    setAge((prevAge) => prevAge + 1);
    setName("Alex");
    setTodos((prevTodos) => [...prevTodos, "Go for a walk"]);
  }

  // Example 01:
  // UseEffect with No Dependencies
  // Usage: Runs after every render (Initial Render / Re-renders)
  useEffect(() => {
    // console.log("User Component Mounted");

    return () => {
      //   console.log("User Component Unmounted");
    };
  });

  // Example 02:
  // UseEffect with Empty Dependency Array
  // Usage: Runs only once after the initial render
  useEffect(() => {
    // console.log("User Component Initial Render");

    return () => {
      //   console.log("User Component Unmounted");
    };
  }, []);

  // Example 03:
  // UseEffect with Specific Dependencies
  // Usage: Runs only when 'age' or 'name' or 'todos' changes
  useEffect(() => {
    console.log("User Component: Age or Name or Todos Changed");

    return () => {
      //   console.log("Cleanup before Age or Name changes again");
    };
  }, [age, name, todos]);

  return (
    <div className="bg-green-200 p-6 rounded">
      <h2 className="font-bold text-lg text-center">
        User Component: useState Hook
      </h2>
      <ul>
        <li>Age: {age}</li>
        <li>Name: {name}</li>
        <li>Todos: {todos.join(", ")}</li>
      </ul>

      <button
        className="bg-primary rounded text-sm font-medium px-4 py-2 mt-4 cursor-pointer"
        onClick={handleUpdateUser}
      >
        Update User
      </button>
    </div>
  );
}
