import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import { z } from "zod";

const GetQuickStatsInputSchema = z.object({});

export type GetQuickStatsInputSchemaType = z.infer<
  typeof GetQuickStatsInputSchema
>;

const modes = ["primary", "secondary", "tertiary"] as const;

const QuickStatSchema = z.object({
  count: z.number(),
  delta: z.number(),
  isCurrency: z.boolean(),
  mode: z.enum(modes),
  title: z.string(),
});

export type QuickStat = z.infer<typeof QuickStatSchema>;

const GetQuickStatsOutputSchema = QuickStatSchema.array();
export type GetQuickStatsOutputSchemaType = z.infer<
  typeof GetQuickStatsOutputSchema
>;

export async function getQuickStats(data: GetQuickStatsInputSchemaType) {
  const _data = GetQuickStatsInputSchema.parse(data);
  console.log("send to api later", _data);

  await delay(1);
  const res = [
    {
      count: faker.number.int(6000),
      delta: faker.number.int(20),
      isCurrency: false,
      mode: "primary",
      title: "Customers",
    },
    {
      count: faker.number.int(6000),
      delta: faker.number.int(20),
      isCurrency: false,
      mode: "secondary",
      title: "Orders",
    },
    {
      count: faker.number.int(6000),
      delta: faker.number.int(30),
      isCurrency: true,
      mode: "secondary",
      title: "Revenue",
    },
    {
      count: faker.number.int(6000),
      delta: faker.number.int(20),
      isCurrency: false,
      mode: "tertiary",
      title: "Growth",
    },
  ];
  return GetQuickStatsOutputSchema.parse(res);
}
