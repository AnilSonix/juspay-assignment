import { cn } from "@/lib/utils";

type Props = {};

export default function AppCard({
  children,
  className,
}: React.ComponentProps<"div"> & Props) {
  return (
    <div
      className={cn([
        "flex flex-col gap-4 p-6 bg-[#F7F9FB] dark:bg-[#FFFFFF0D] rounded-xl self-stretch",
        className,
      ])}
    >
      {children}
    </div>
  );
}
