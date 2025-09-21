import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function ErrorScreen({
  title,
  subtitle,
  children,
  className,
}: Props & React.ComponentProps<"button">) {
  return (
    <div className={cn(["flex flex-col items-center gap-2", className])}>
      <AlertCircle className="text-destructive" />
      <p className="font-bold">{title}</p>
      <p className="text-neutral-500 mb-4">{subtitle}</p>
      {children}
    </div>
  );
}
