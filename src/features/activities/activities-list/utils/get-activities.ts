import { delay } from "@/lib/delay";
import { faker } from "@faker-js/faker";
import range from "lodash/range";
import { z } from "zod";

const GetActivitiesInputSchema = z.object({});

export type GetActivitiesInputSchemaType = z.infer<
  typeof GetActivitiesInputSchema
>;

const ActivitySchema = z.object({
  id: z.string(),
  title: z.string(),
  avatar: z.string(),
  createdAt: z.string(),
});

export type Activity = z.infer<typeof ActivitySchema>;

const GetActivitiesOutputSchema = ActivitySchema.array();
export type GetActivitiesOutputSchemaType = z.infer<
  typeof GetActivitiesOutputSchema
>;

export async function getActivities(data: GetActivitiesInputSchemaType) {
  const _data = GetActivitiesInputSchema.parse(data);
  console.log("send to api later", _data);
  await delay(2);
  const res = range(0, 5).map(() => ({
    id: faker.string.nanoid(),
    title: faker.lorem.sentence(4),
    avatar: faker.image.avatar(),
    createdAt: faker.date.recent().toUTCString(),
  }));
  return GetActivitiesOutputSchema.parse(res);
}
