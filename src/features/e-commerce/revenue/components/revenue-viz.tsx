import AppCard from "@/components/app-card";
import { Separator } from "@/components/ui/separator";

("use client");

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", currentWeek: 186, previousWeek: 80 },
  { month: "February", currentWeek: 305, previousWeek: 200 },
  { month: "March", currentWeek: 237, previousWeek: 120 },
  { month: "April", currentWeek: 73, previousWeek: 190 },
  { month: "May", currentWeek: 209, previousWeek: 130 },
  { month: "June", currentWeek: 214, previousWeek: 140 },
];

const chartConfig = {
  currentWeek: {
    label: "Current Week",
    color: "var(--chart-1)",
  },
  previousWeek: {
    label: "Previous Week",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function RevenueViz() {
  return (
    <AppCard className="w-full h-full">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <p className="text-[14px] font-semibold">Revenue</p>
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
          <p className="text-[14px]">Current Week</p>
          <strong className="text-[14px] font-semibold ml-2">$58.211</strong>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
          <p className="text-[14px]">Previous Week</p>
          <strong className="text-[14px] font-semibold ml-2">$51.211</strong>
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Line
            dataKey="currentWeek"
            type="monotone"
            stroke="var(--color-chart-1)"
            strokeWidth={3}
            dot={false}
          />
          <Line
            dataKey="previousWeek"
            type="monotone"
            stroke="var(--color-chart-2)"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </AppCard>
  );
}
