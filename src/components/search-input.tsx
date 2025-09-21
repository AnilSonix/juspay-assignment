"use client";

import { LoaderCircleIcon, SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  isLoading?: boolean;
} & React.ComponentProps<"input">;
export default function SearchInput({
  isLoading,
  className,
  ...props
}: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        className={cn(["peer ps-9 pe-9 bg-gray-50", className])}
        placeholder="Search"
        type="search"
        {...props}
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        {isLoading ? (
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            role="status"
            aria-label="Loading..."
          />
        ) : (
          <SearchIcon size={16} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
