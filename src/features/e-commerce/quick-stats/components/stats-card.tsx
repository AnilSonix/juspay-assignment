import { formatCurrency } from "@/lib/currency-formatter";
import { formatNumber } from "@/lib/number-formatter";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { match } from "ts-pattern";
import type { QuickStat } from "../utils/get-quick-stats";

type Props = {
  stat: QuickStat;
};

export default function StatsCard({ stat }: Props) {
  const { cardClassName } = useMemo(
    () =>
      match(stat.mode)
        .with("primary", () => ({
          cardClassName: "bg-[#E3F5FF] text-black",
        }))
        .with("secondary", () => ({
          cardClassName: "bg-[#F7F9FB] dark:bg-[#FFFFFF0D]",
        }))
        .with("tertiary", () => ({
          cardClassName: "bg-[#E5ECF6] text-black",
        }))
        .exhaustive(),
    [stat.mode]
  );

  return (
    <div
      className={cn([
        "flex flex-col gap-4 p-6 bg-blue-100 rounded-xl basis-20 flex-1 justify-center",
        cardClassName,
      ])}
    >
      <p className="text-[14px]  font-semibold">{stat.title}</p>
      <div className="flex items-center">
        <p className="text-[24px] font-semibold">
          {stat.isCurrency
            ? formatCurrency(stat.count)
            : formatNumber(stat.count)}
        </p>
        <p className="ml-auto text-[12px] mr-1">
          {stat.delta > 0 && "+"}
          {formatNumber(stat.delta)}%
        </p>
        {stat.delta >= 0 ? (
          <TrendingUp size={16} />
        ) : (
          <TrendingDown size={16} />
        )}
      </div>
    </div>
  );
}
