import AppCard from "@/components/app-card";
import { Pie, PieChart, Sector } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

export const description = "A donut chart with an active sector";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
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
            dataKey="visitors"
            nameKey="browser"
            innerRadius={40}
            strokeWidth={5}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 10} />
            )}
          />
        </PieChart>
      </ChartContainer>
    </AppCard>
  );
}
