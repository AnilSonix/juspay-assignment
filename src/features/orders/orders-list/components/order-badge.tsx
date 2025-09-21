import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { match } from "ts-pattern";

type OrderStatusType =
  | "pending"
  | "in-progress"
  | "approved"
  | "rejected"
  | "complete";

type OrderBadgeProps = {
  status: OrderStatusType;
};

export default function OrderBadge({ status }: OrderBadgeProps) {
  const { dotClassName, textClassName, label } = useMemo(
    () =>
      match(status)
        .with("approved", () => ({
          dotClassName: "bg-amber-400",
          textClassName: "text-amber-500",
          label: "Approved",
        }))
        .with("pending", () => ({
          dotClassName: "bg-blue-400",
          textClassName: "text-blue-500",
          label: "Pending",
        }))
        .with("rejected", () => ({
          dotClassName: "bg-red-400",
          textClassName: "text-red-500",
          label: "Rejected",
        }))
        .with("complete", () => ({
          dotClassName: "bg-green-400",
          textClassName: "text-green-500",
          label: "Complete",
        }))
        .with("in-progress", () => ({
          dotClassName: "bg-indigo-400",
          textClassName: "text-indigo-500",
          label: "In Progress",
        }))
        .exhaustive(),
    [status]
  );

  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(["w-2 h-2 rounded-full bg-black", dotClassName])}
      ></div>
      <p className={cn(["text-[14px]", textClassName])}>{label}</p>
    </div>
  );
}
