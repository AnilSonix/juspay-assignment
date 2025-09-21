import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function LoadingScreen({
  title,
  subtitle,
  children,
  className,
}: Props & React.ComponentProps<"button">) {
  return (
    <div
      className={cn([
        "flex flex-col items-center gap-2 justify-center",
        className,
      ])}
    >
      <Loader2Icon className="animate-spin" />
      <p className="font-bold">{title}</p>
      <p className="text-neutral-500 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}
