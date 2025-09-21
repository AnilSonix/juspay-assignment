import AppCard from "@/components/app-card";

("use client");

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", projection: 186, actual: 80 },
  { month: "February", projection: 305, actual: 200 },
  { month: "March", projection: 237, actual: 120 },
  { month: "April", projection: 73, actual: 190 },
  { month: "May", projection: 209, actual: 130 },
  { month: "June", projection: 214, actual: 140 },
];

const chartConfig = {
  projection: {
    label: "Projection",
    color: "var(--chart-1)",
  },
  actual: {
    label: "Actual",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function ProjectionsVsActualsViz() {
  return (
    <AppCard className="w-full h-full">
      <p className="text-[14px] font-semibold">Projections vs Actuals</p>
      <ChartContainer className="h-[180px]" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis axisLine={false} tickLine={false} />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Bar
            dataKey="projection"
            stackId="a"
            fill="var(--color-chart-1)"
            radius={[0, 0, 4, 4]}
            barSize={20}
          />
          <Bar
            dataKey="actual"
            stackId="a"
            fill="var(--color-chart-2)"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
    </AppCard>
  );
}
