"use client";

import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState, useRef, useDeferredValue } from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MovieSelectorsProps {
  query?: string;
}

export default function MovieSelectors({ query }: MovieSelectorsProps) {
  const pathname = usePathname();
  const { replace } = useRouter();
  // const isFirstRender = useRef(true);

  const [searchQuery, setSearchQuery] = useState(query);
  // const deferredSearchQuery = useDeferredValue(searchQuery);

  // NEW METHOD with useDebouncedCallback
  // Function to handle the input change and update searchParams
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(query ? `q=${query}` : "");

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    // Updates the URL without refreshing the page
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // OLD METHOD with useEffect and useDeferredValue
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   const params = new URLSearchParams(query ? `q=${query}` : "");

  //   if (deferredSearchQuery !== params.get("q")) {
  //     if (deferredSearchQuery) {
  //       params.set("q", deferredSearchQuery);
  //     } else {
  //       params.delete("q");
  //     }
  //     replace(`${pathname}?${params.toString()}`);
  //   }
  // }, [deferredSearchQuery, pathname, replace, query]);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex w-full items-center space-x-2 md:w-1/2">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearchQuery(e.target.value);
          }}
          className="h-9"
        />
      </div>
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="h-9 w-45">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="h-9">
          <SlidersHorizontalIcon className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
    </div>
  );
}
