import AppCard from "@/components/app-card";
import { Pie, PieChart, Sector } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatCurrency } from "@/lib/currency-formatter";
import { cn } from "@/lib/utils";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

export const description = "A donut chart with an active sector";

const chartData = [
  { type: "direct", amount: 275, fill: "var(--color-chart-1)" },
  { type: "affiliate", amount: 200, fill: "var(--color-chart-2)" },
  { type: "sponsored", amount: 187, fill: "var(--color-chart-3)" },
  { type: "email", amount: 173, fill: "var(--color-chart-4)" },
];

const chartConfig = {
  direct: {
    label: "Direct",
    color: "var(--chart-1)",
  },
  affiliate: {
    label: "Affiliate",
    color: "var(--chart-2)",
  },
  sponsored: {
    label: "Sponsord",
    color: "var(--chart-3)",
  },
  email: {
    label: "Email",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export default function TopSalesViz() {
  return (
    <AppCard className="w-full h-full">
      <div className="flex items-center">
        <p className="text-[14px] font-semibold">Top Sales</p>
      </div>
      <ChartContainer config={chartConfig}>
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="type"
            innerRadius={40}
            strokeWidth={5}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 10} />
            )}
          />
        </PieChart>
      </ChartContainer>
      <div className="space-y-2">
        {chartData.map((e) => (
          <div className="flex items-center gap-2" key={e.type}>
            <div
              className={cn(["w-2 h-2 rounded-2xl", ,])}
              // @ts-ignore
              style={{ backgroundColor: chartConfig[e.type].color }}
            ></div>

            <p className="text-[14px]">
              {/* @ts-ignore */}
              {chartConfig[e.type].label}
            </p>
            <p className="ml-auto text-[14px]">{formatCurrency(e.amount)}</p>
          </div>
        ))}
      </div>
    </AppCard>
  );
}
