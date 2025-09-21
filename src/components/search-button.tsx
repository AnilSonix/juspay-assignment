import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {} & React.ComponentProps<"button">;

export default function SearchButton(props: Props) {
  return (
    <button
      className="border-input bg-muted text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-xs shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
      {...props}
    >
      <span className="flex grow items-center">
        <SearchIcon
          className="text-muted-foreground/80 -ms-1 me-3"
          size={13}
          aria-hidden="true"
        />
        <span className="text-muted-foreground/70 font-normal">Search</span>
      </span>
      <kbd className=" text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded  px-1 font-[inherit] text-[0.625rem] font-medium">
        ⌘ /
      </kbd>
    </button>
  );
}
