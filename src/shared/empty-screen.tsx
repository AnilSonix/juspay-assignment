import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
};

export default function EmptyScreen({
  title,
  subtitle,
  children,
  className,
  Icon,
}: Props & React.ComponentProps<"button">) {
  return (
    <div className={cn(["flex flex-col items-center gap-2", className])}>
      <Icon />
      <p className="font-bold">{title}</p>
      <p className="text-neutral-500 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}
